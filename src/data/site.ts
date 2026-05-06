// Static data for Stack and AI pages. Keep EN/PT in sync.
import type { Lang } from "@/i18n/ui";

export type KvRow = { key: string; val: string; note?: string };
export type KvSection = { id: string; titleKey: string; rows: KvRow[] };

export const uses: Record<Lang, KvSection[]> = {
  en: [
    {
      id: "hardware",
      titleKey: "uses.section.hardware",
      rows: [
        { key: "Laptop", val: "MacBook Pro 16″ M3 Max", note: "64GB / 1TB" },
        { key: "Display", val: "LG UltraFine 32UN880", note: "4K / arm-mounted" },
        { key: "Keyboard", val: "ZSA Voyager", note: "split, low profile, Choc reds" },
        { key: "Pointing", val: "Logitech MX Master 3S" },
        { key: "Chair", val: "Herman Miller Aeron", note: "remastered" },
      ],
    },
    {
      id: "dev",
      titleKey: "uses.section.dev",
      rows: [
        { key: "Editor", val: "Neovim + Zed", note: "Zed for pairing, Neovim for solo" },
        { key: "Languages", val: "PHP, TypeScript, Go", note: "JS daily, Go for CLIs" },
        { key: "Frameworks", val: "Laravel, Astro, Vue 3" },
        { key: "Database", val: "Postgres", note: "with TimescaleDB when needed" },
        { key: "Hosting", val: "Cloudflare, Fly.io" },
      ],
    },
    {
      id: "terminal",
      titleKey: "uses.section.terminal",
      rows: [
        { key: "Shell", val: "Fish + Starship" },
        { key: "Term", val: "Ghostty", note: "JetBrains Mono 14pt" },
        { key: "Multiplexer", val: "tmux", note: "with sesh sessionizer" },
        { key: "Search", val: "ripgrep + fd + fzf" },
        { key: "Git", val: "lazygit + gh" },
      ],
    },
    {
      id: "software",
      titleKey: "uses.section.software",
      rows: [
        { key: "Notes", val: "Obsidian + plain markdown" },
        { key: "Tasks", val: "Things 3" },
        { key: "Browser", val: "Arc → Dia", note: "currently testing Dia" },
        { key: "Mail", val: "Mimestream" },
        { key: "Window mgr", val: "Aerospace", note: "i3-style on macOS" },
      ],
    },
    {
      id: "services",
      titleKey: "uses.section.services",
      rows: [
        { key: "Repo host", val: "GitHub" },
        { key: "Domain", val: "Cloudflare Registrar" },
        { key: "Mail", val: "Fastmail" },
        { key: "Bookmarks", val: "Raindrop.io" },
      ],
    },
    {
      id: "audio",
      titleKey: "uses.section.audio",
      rows: [
        { key: "Headphones", val: "Sony WH-1000XM5", note: "for travel" },
        { key: "IEMs", val: "Moondrop Aria 2", note: "desk listening" },
        { key: "Speakers", val: "KEF LSX II" },
        { key: "Music", val: "Apple Music + roon" },
      ],
    },
  ],
  // PT: same shape; translate the noteworthy notes. Reuse the same vals.
  pt: [],
};
// Mirror EN into PT until you translate (or copy + edit).
uses.pt = uses.en;

export const ai: Record<Lang, KvSection[]> = {
  en: [
    {
      id: "agents",
      titleKey: "ai.section.agents",
      rows: [
        { key: "Claude Code", val: "Daily driver", note: "for anything serious" },
        { key: "Cursor", val: "Lightweight edits", note: "small refactors, quick reads" },
        { key: "Cowork", val: "Async delegation", note: "for tasks I'd otherwise queue" },
        { key: "Codex CLI", val: "Experiments", note: "comparing planning styles" },
      ],
    },
    {
      id: "skills",
      titleKey: "ai.section.skills",
      rows: [
        { key: "blog", val: "Local skill", note: "/blog write, analyze, translate, publish" },
        { key: "spec-kit", val: "Spec-driven dev", note: "long-running feature briefs" },
        { key: "agent-skills", val: "Personal collection", note: "github.com/marco-machado/agent-skills" },
        { key: "code-plugins", val: "CC plugins", note: "for repeatable workflows" },
      ],
    },
    {
      id: "context",
      titleKey: "ai.section.context",
      rows: [
        { key: "CLAUDE.md", val: "Per-repo, version-controlled" },
        { key: "Personal", val: "~/.claude/CLAUDE.md", note: "decision style, voice, constraints" },
        { key: "Skills", val: ".claude/skills/", note: "checked-in workflow recipes" },
        { key: "Cadence", val: "Weekly", note: "review and prune outdated context" },
      ],
    },
  ],
  pt: [],
};
ai.pt = ai.en;
