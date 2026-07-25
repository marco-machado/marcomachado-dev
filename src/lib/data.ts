export type KvRow = { key: string; val: string; note?: string };
export type KvSectionData = { id: string; title: string; rows: KvRow[] };
export type AiTool = { name: string; href: string; note: string };
export type AiSectionData = { id: string; title: string; tools: AiTool[] };

export const uses: KvSectionData[] = [
  {
    id: "hardware",
    title: "Hardware",
    rows: [
      { key: "Laptop", val: "MacBook Pro 16″" },
      { key: "Display", val: "LG 27US500-W" },
      { key: "Keyboard", val: "Logitech MX Mechanical Mini", note: "Tactile" },
      { key: "Mouse", val: "Logitech MX Master 3S" },
    ],
  },
  {
    id: "dev",
    title: "Development",
    rows: [
      { key: "Primary editor", val: "PhpStorm" },
      { key: "Secondary editor", val: "VS Code" },
      { key: "Terminal", val: "Warp" },
      { key: "Prompt", val: "Starship" },
      { key: "Containers", val: "Docker Desktop" },
    ],
  },
  {
    id: "software",
    title: "Software",
    rows: [
      { key: "Browsers", val: "Brave / Chrome" },
      { key: "Notes", val: "Notion" },
      { key: "Tasks", val: "Todoist" },
      { key: "Launcher", val: "Raycast" },
      { key: "Passwords", val: "1Password" },
    ],
  },
  {
    id: "services",
    title: "Services",
    rows: [
      { key: "Code", val: "GitHub" },
      { key: "Planning", val: "Jira" },
      { key: "Docs", val: "Confluence" },
      { key: "Hosting", val: "Vercel" },
      { key: "Backend", val: "Supabase" },
    ],
  },
  {
    id: "audio",
    title: "Audio",
    rows: [{ key: "Earbuds", val: "AirPods Pro" }],
  },
];

export const aiTools: AiSectionData[] = [
  {
    id: "agents",
    title: "Coding agents",
    tools: [
      { name: "Pi", href: "https://github.com/mariozechner/pi", note: "minimal terminal coding harness" },
      { name: "Claude Code", href: "https://www.anthropic.com/claude-code", note: "agentic coding in the terminal" },
      { name: "Codex", href: "https://openai.com/codex/", note: "OpenAI coding agent" },
      { name: "Gemini", href: "https://gemini.google.com/", note: "general AI and coding support" },
      { name: "OpenCode", href: "https://opencode.ai/", note: "open source terminal coding agent" },
    ],
  },
  {
    id: "skills",
    title: "Skills & plugins",
    tools: [
      { name: "Context7", href: "https://github.com/upstash/context7", note: "current docs in agent workflows" },
      { name: "Skills", href: "https://github.com/mattpocock/skills", note: "reusable instructions for AI agents" },
      { name: "RTK", href: "https://github.com/rtk-ai/rtk", note: "agent tooling and workflows" },
    ],
  },
];
