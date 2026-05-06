import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { Type } from "typebox";

const MCP_URL = "https://mcp.docs.astro.build/mcp";
const SERVER_NAME = "Astro Docs";

type JsonRpcResponse<T = unknown> = {
  jsonrpc: "2.0";
  id?: string | number | null;
  result?: T;
  error?: { code: number; message: string; data?: unknown };
};

type McpTextContent = { type: "text"; text: string };
type McpContent = McpTextContent | Record<string, unknown>;

type ToolsListResult = {
  tools: Array<{
    name: string;
    title?: string;
    description?: string;
    inputSchema?: unknown;
  }>;
};

type ToolsCallResult = {
  content?: McpContent[];
  isError?: boolean;
};

let nextId = 1;
let lastStatus = "Not checked yet";
let lastTools: ToolsListResult["tools"] = [];

function parseEventStream(text: string): JsonRpcResponse | undefined {
  for (const event of text.split(/\n\n+/)) {
    const data = event
      .split(/\r?\n/)
      .filter((line) => line.startsWith("data:"))
      .map((line) => line.slice(5).trimStart())
      .join("\n");

    if (!data) continue;
    return JSON.parse(data) as JsonRpcResponse;
  }
}

async function mcpRequest<T>(method: string, params?: unknown, signal?: AbortSignal): Promise<T> {
  const body = {
    jsonrpc: "2.0" as const,
    id: nextId++,
    method,
    ...(params === undefined ? {} : { params }),
  };

  const response = await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
    },
    body: JSON.stringify(body),
    signal,
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${SERVER_NAME} MCP returned HTTP ${response.status}: ${text}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("text/event-stream")
    ? parseEventStream(text)
    : (JSON.parse(text) as JsonRpcResponse);

  if (!payload) throw new Error(`${SERVER_NAME} MCP returned an empty response`);
  if (payload.error) throw new Error(`${payload.error.message} (${payload.error.code})`);

  return payload.result as T;
}

async function initialize(signal?: AbortSignal) {
  await mcpRequest("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "pi-astro-docs-mcp", version: "0.1.0" },
  }, signal);

  // This server is stateless and accepts calls without a session id. The
  // notification is best-effort because Streamable HTTP returns 202/no body.
  await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
    },
    body: JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }),
    signal,
  }).catch(() => undefined);
}

function formatMcpContent(content: McpContent[] | undefined): string {
  if (!content?.length) return "No content returned.";

  return content
    .map((item) => {
      if (item.type === "text" && typeof item.text === "string") return item.text;
      return JSON.stringify(item, null, 2);
    })
    .join("\n\n");
}

async function refreshStatus(signal?: AbortSignal) {
  await initialize(signal);
  const tools = await mcpRequest<ToolsListResult>("tools/list", {}, signal);
  lastTools = tools.tools;
  lastStatus = `Connected to ${SERVER_NAME}. Available MCP tools: ${tools.tools
    .map((tool) => tool.name)
    .join(", ") || "none"}.`;
  return lastStatus;
}

export default async function (pi: ExtensionAPI) {
  try {
    await refreshStatus();
  } catch (error) {
    lastStatus = `Could not connect to ${SERVER_NAME} MCP at startup: ${
      error instanceof Error ? error.message : String(error)
    }`;
  }

  pi.registerCommand("astro-docs-mcp", {
    description: "Check the Astro Docs MCP server connection and list tools",
    handler: async (_args, ctx) => {
      try {
        const status = await refreshStatus();
        ctx.ui.notify(status, "success");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        lastStatus = `Could not connect to ${SERVER_NAME} MCP: ${message}`;
        ctx.ui.notify(lastStatus, "error");
      }
    },
  });

  pi.registerTool({
    name: "astro_docs_search",
    label: "Astro Docs Search",
    description: "Search the official Astro framework docs via the Astro Docs MCP server.",
    promptSnippet: "Search the official Astro documentation via MCP",
    promptGuidelines: [
      "Use astro_docs_search when the user asks about Astro APIs, configuration, routing, content collections, integrations, or other Astro documentation topics.",
    ],
    parameters: Type.Object(
      {
        query: Type.String({ description: "Search query for the official Astro docs" }),
      },
      { additionalProperties: false },
    ),
    async execute(_toolCallId, params, signal) {
      const result = await mcpRequest<ToolsCallResult>(
        "tools/call",
        {
          name: "search_astro_docs",
          arguments: { query: params.query },
        },
        signal,
      );

      const text = formatMcpContent(result.content);
      if (result.isError) throw new Error(text);

      return {
        content: [{ type: "text", text }],
        details: {
          server: SERVER_NAME,
          url: MCP_URL,
          mcpTool: "search_astro_docs",
          query: params.query,
          tools: lastTools,
          status: lastStatus,
        },
      };
    },
  });
}
