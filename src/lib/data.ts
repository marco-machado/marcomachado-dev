export type KvItem = { name: string; href: string };
export type KvRow = { key: string; items: KvItem[]; note?: string };
export type KvSectionData = { id: string; title: string; rows: KvRow[] };
export type AiTool = { name: string; href: string; note: string };
export type AiSectionData = { id: string; title: string; tools: AiTool[] };

export const uses: KvSectionData[] = [
  {
    id: "hardware",
    title: "Hardware",
    rows: [
      { key: "Laptop", items: [{ name: "MacBook Pro 16″", href: "https://www.apple.com/macbook-pro/" }] },
      { key: "Display", items: [{ name: "LG 27US500-W", href: "https://www.lg.com/us/monitors/lg-27us500-w-4k-uhd-monitor" }] },
      { key: "Keyboard", items: [{ name: "Logitech MX Mechanical Mini", href: "https://www.logitech.com/en-us/shop/p/mx-mechanical-mini" }], note: "Tactile" },
      { key: "Mouse", items: [{ name: "Logitech MX Master 3S", href: "https://www.logitech.com/en-us/shop/p/mx-master-3s" }] },
    ],
  },
  {
    id: "dev",
    title: "Development",
    rows: [
      { key: "Primary editor", items: [{ name: "PhpStorm", href: "https://www.jetbrains.com/phpstorm/" }] },
      { key: "Secondary editor", items: [{ name: "VS Code", href: "https://code.visualstudio.com/" }] },
      { key: "Terminal", items: [{ name: "Warp", href: "https://www.warp.dev/" }] },
      { key: "Prompt", items: [{ name: "Starship", href: "https://starship.rs/" }] },
      { key: "Containers", items: [{ name: "Docker Desktop", href: "https://www.docker.com/products/docker-desktop/" }] },
    ],
  },
  {
    id: "software",
    title: "Software",
    rows: [
      {
        key: "Browsers",
        items: [
          { name: "Brave", href: "https://brave.com/" },
          { name: "Chrome", href: "https://www.google.com/chrome/" },
        ],
      },
      { key: "Notes", items: [{ name: "Notion", href: "https://www.notion.com/" }] },
      { key: "Tasks", items: [{ name: "Todoist", href: "https://www.todoist.com/" }] },
      { key: "Launcher", items: [{ name: "Raycast", href: "https://www.raycast.com/" }] },
      { key: "Passwords", items: [{ name: "1Password", href: "https://1password.com/" }] },
    ],
  },
  {
    id: "services",
    title: "Services",
    rows: [
      { key: "Code", items: [{ name: "GitHub", href: "https://github.com/" }] },
      { key: "Planning", items: [{ name: "Jira", href: "https://www.atlassian.com/software/jira" }] },
      { key: "Docs", items: [{ name: "Confluence", href: "https://www.atlassian.com/software/confluence" }] },
      { key: "Hosting", items: [{ name: "Cloudflare Workers", href: "https://www.cloudflare.com/products/workers/" }] },
      { key: "Backend", items: [{ name: "Supabase", href: "https://supabase.com/" }] },
    ],
  },
  {
    id: "audio",
    title: "Audio",
    rows: [{ key: "Earbuds", items: [{ name: "AirPods Pro", href: "https://www.apple.com/airpods-pro/" }] }],
  },
];

export const aiTools: AiSectionData[] = [
  {
    id: "agents",
    title: "Coding agents",
    tools: [
      { name: "Pi", href: "https://github.com/mariozechner/pi", note: "Minimal terminal coding harness" },
      { name: "Claude Code", href: "https://www.anthropic.com/claude-code", note: "Agentic coding in the terminal" },
      { name: "Codex", href: "https://openai.com/codex/", note: "OpenAI coding agent" },
      { name: "Gemini", href: "https://gemini.google.com/", note: "General AI and coding support" },
      { name: "OpenCode", href: "https://opencode.ai/", note: "Open source terminal coding agent" },
    ],
  },
  {
    id: "skills",
    title: "Skills & plugins",
    tools: [
      { name: "Context7", href: "https://github.com/upstash/context7", note: "Current docs in agent workflows" },
      { name: "The Elements of Style", href: "https://github.com/obra/the-elements-of-style", note: "Strunk's writing rules for agent prose" },
      { name: "Skills", href: "https://github.com/mattpocock/skills", note: "Reusable instructions for AI agents" },
      { name: "RTK", href: "https://github.com/rtk-ai/rtk", note: "Agent tooling and workflows" },
    ],
  },
];
