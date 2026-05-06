// Static data for Stack and AI pages. Keep EN/PT in sync.
import type { Lang } from "@/i18n/ui";

export type KvRow = { key: string; val: string; note?: string };
export type KvSection = { id: string; titleKey: string; rows: KvRow[] };
export type AiTool = { name: string; href: string; note: string };
export type AiSection = { id: string; titleKey: string; tools: AiTool[] };

export const uses: Record<Lang, KvSection[]> = {
  en: [
    {
      id: "hardware",
      titleKey: "uses.section.hardware",
      rows: [
        { key: "Laptop", val: "MacBook Pro 16″" },
        { key: "Display", val: "LG 27US500-W" },
        { key: "Keyboard", val: "Logitech MX Mechanical Mini", note: "Tactile" },
        { key: "Mouse", val: "Logitech MX Master 3S" },
      ],
    },
    {
      id: "dev",
      titleKey: "uses.section.dev",
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
      titleKey: "uses.section.software",
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
      titleKey: "uses.section.services",
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
      titleKey: "uses.section.audio",
      rows: [{ key: "Earbuds", val: "AirPods Pro" }],
    },
  ],
  pt: [
    {
      id: "hardware",
      titleKey: "uses.section.hardware",
      rows: [
        { key: "Laptop", val: "MacBook Pro 16″" },
        { key: "Monitor", val: "LG 27US500-W" },
        { key: "Teclado", val: "Logitech MX Mechanical Mini", note: "Tactile" },
        { key: "Mouse", val: "Logitech MX Master 3S" },
      ],
    },
    {
      id: "dev",
      titleKey: "uses.section.dev",
      rows: [
        { key: "Editor principal", val: "PhpStorm" },
        { key: "Editor secundário", val: "VS Code" },
        { key: "Terminal", val: "Warp" },
        { key: "Prompt", val: "Starship" },
        { key: "Contêineres", val: "Docker Desktop" },
      ],
    },
    {
      id: "software",
      titleKey: "uses.section.software",
      rows: [
        { key: "Navegadores", val: "Brave / Chrome" },
        { key: "Notas", val: "Notion" },
        { key: "Tarefas", val: "Todoist" },
        { key: "Launcher", val: "Raycast" },
        { key: "Senhas", val: "1Password" },
      ],
    },
    {
      id: "services",
      titleKey: "uses.section.services",
      rows: [
        { key: "Código", val: "GitHub" },
        { key: "Planejamento", val: "Jira" },
        { key: "Docs", val: "Confluence" },
        { key: "Hospedagem", val: "Vercel" },
        { key: "Backend", val: "Supabase" },
      ],
    },
    {
      id: "audio",
      titleKey: "uses.section.audio",
      rows: [{ key: "Fones", val: "AirPods Pro" }],
    },
  ],
};

export const ai: Record<Lang, AiSection[]> = {
  en: [
    {
      id: "agents",
      titleKey: "ai.section.agents",
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
      titleKey: "ai.section.skills",
      tools: [
        { name: "Context7", href: "https://github.com/upstash/context7", note: "current docs in agent workflows" },
        { name: "Skills", href: "https://github.com/mattpocock/skills", note: "reusable instructions for AI agents" },
        { name: "RTK", href: "https://github.com/rtk-ai/rtk", note: "agent tooling and workflows" },
      ],
    },
  ],
  pt: [
    {
      id: "agents",
      titleKey: "ai.section.agents",
      tools: [
        { name: "Pi", href: "https://github.com/mariozechner/pi", note: "coding harness minimalista no terminal" },
        { name: "Claude Code", href: "https://www.anthropic.com/claude-code", note: "programação agêntica no terminal" },
        { name: "Codex", href: "https://openai.com/codex/", note: "agente de programação da OpenAI" },
        { name: "Gemini", href: "https://gemini.google.com/", note: "IA geral e apoio para código" },
        { name: "OpenCode", href: "https://opencode.ai/", note: "agente de programação open source no terminal" },
      ],
    },
    {
      id: "skills",
      titleKey: "ai.section.skills",
      tools: [
        { name: "Context7", href: "https://github.com/upstash/context7", note: "documentação atual nos fluxos com agentes" },
        { name: "Skills", href: "https://github.com/mattpocock/skills", note: "instruções reutilizáveis para agentes de IA" },
        { name: "RTK", href: "https://github.com/rtk-ai/rtk", note: "ferramentas e fluxos para agentes" },
      ],
    },
  ],
};
