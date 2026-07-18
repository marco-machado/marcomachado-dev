---
name: blog
description: >
  Write, analyze, and publish blog posts for marcomachado.dev.
  English-only Next.js blog with SEO guidance, anti-AI pattern detection,
  and structured writing workflow. Use when user says "blog", "write a post",
  "blog post", "analyze post", "publish post", "new article",
  "blog write", "blog analyze", "blog publish".
user-invocable: true
argument-hint: "[write|analyze|publish] [topic-or-file]"
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Grep
  - Glob
  - WebFetch
  - WebSearch
  - Agent
---

# Blog — Write, Analyze, Publish

Blog content engine for marcomachado.dev. English-only Next.js blog with articles in `content/blog/`.

## Commands

| Command | Description |
|---------|-------------|
| `/blog write <topic>` | Full workflow: branch → outline → draft → fact-check → review → publish |
| `/blog analyze <file>` | Review an existing post (readability, SEO, anti-AI) |
| `/blog publish` | Pre-merge checklist on the blog branch |

## Command Routing

Parse the user's input to determine the sub-command:
- `write` / `new` / `draft` / no sub-command with a topic → Write workflow
- `analyze` / `review` / `check` → Analyze workflow
- `publish` / `ready` → Publish workflow

---

## `/blog write <topic>` — Full Workflow

### Phase 1: Setup

1. Derive slug from topic: lowercase, hyphens, no special chars, max 50 chars
2. Create a branch for the post from `main` (e.g. `blog/<slug>`)

### Phase 2: Template Selection

Auto-detect from topic signals:

| Signal | Template |
|--------|----------|
| "how to...", process, steps, method | `how-to-guide` |
| Opinion, prediction, "why I think", industry take, analysis | `thought-leadership` |
| Code walkthrough, "build", "implement", tool demo | `tutorial` |
| News event, "update", announcement, "just released" | `news-analysis` |
| "Case study", results, "what happened when", before/after | `case-study` |

If ambiguous, ask the user to choose. Load the selected template from `templates/<type>.md`.

### Phase 3: Outline

Build an outline following the template structure. Present it to the user:

```
## Outline: [Title]
Template: [type]

### [Section 1 heading]
- Key points to cover

### [Section 2 heading]
- Key points to cover

...
```

**Wait for user approval before proceeding.** The user may adjust headings, reorder sections, add/remove points.

### Phase 4: Draft

Write the full post following:
1. The approved outline structure
2. The template's guidance (loaded from `templates/<type>.md`)
3. Anti-AI patterns (loaded from `references/anti-ai-patterns.md`)
4. The author's voice — study `content/blog/` for existing posts' tone, sentence rhythm, and style

**Frontmatter format** (strict schema — extra fields fail the build):
```yaml
---
title: "<title>"
description: "<150-160 char description>"
pubDate: <YYYY-MM-DD>
tags: [<relevant tags>]
draft: true
---
```

Optional fields: `updatedDate`, `coverImage`, `coverImageAlt` (required when `coverImage` is set), `ogImage`.

Use `timeZone: "UTC"` awareness — pubDate should be today's date in YYYY-MM-DD format.

**Voice calibration:** Before writing, read up to 3 of the most recent posts from `content/blog/` to match the author's tone (if fewer exist, read all available). Key traits from existing content:
- First-person, conversational but substantive
- Concrete examples over abstract claims
- Acknowledges tradeoffs and limitations
- Short paragraphs, varied sentence length
- Uses em dashes, contractions, and direct address

### Phase 5: Fact-Check and Enrich

Load `references/quality-checks.md` for the process.

**Always (all templates):**
1. Identify every factual claim in the draft
2. Use WebSearch to verify each claim
3. Flag anything unverifiable with `[NEEDS VERIFICATION: reason]`

**Additionally for tutorial, how-to-guide, case-study:**
1. Verify technical details against current docs
2. Find supporting references for key claims
3. Suggest specific data points or sources where they'd strengthen the argument

### Phase 6: Present for Review

Present the complete draft to the user with:

1. **The full post** (ready to copy/read)
2. **Fact-check report:**
   - Verified claims (with sources)
   - Unverified claims flagged
   - Suggested enrichments (if applicable)
3. **SEO check** (load `references/seo-guidelines.md`):
   - Hard rules: pass/fail for each
   - Suggestions: list any that apply
4. **Anti-AI scan** (load `references/anti-ai-patterns.md`):
   - Any trigger words found
   - Readability assessment
5. **Cover image suggestion:**
   - Describe a visual concept that captures the post's core idea
   - Suggest style/mood (abstract, conceptual, technical diagram, etc.)
   - Note: "Generate this with your preferred image tool and add `coverImage` to frontmatter"

**Wait for user approval.** The user may request changes — iterate until approved.

### Phase 7: Publish

Once approved:

1. Write the file: `content/blog/<slug>.md`
2. Remind the user:
   - "The post is in `draft: true` mode — set `draft: false` when ready to publish"
   - "Add cover image and update `coverImage`/`coverImageAlt`/`ogImage` in frontmatter"
   - "Run `/blog publish` for the pre-merge checklist, then merge the branch to `main` to deploy"

---

## `/blog analyze <file>` — Post Review

1. Read the target file
2. Load `references/seo-guidelines.md`, `references/anti-ai-patterns.md`, `references/quality-checks.md`
3. Report:

**SEO Hard Rules:**
- Heading hierarchy: [pass/fail]
- Title length: [N chars — pass/fail]
- Description present: [pass/fail]
- No H1 in body: [pass/fail]

**SEO Suggestions:**
- List applicable suggestions

**Anti-AI Patterns:**
- Trigger words found: [list or "none"]
- Readability: [assessment]
- Sentence variety: [assessment]

**Content Quality:**
- Paragraph lengths: [any over 150 words?]
- Formulaic patterns: [any detected?]
- Voice: [observations]

---

## `/blog publish` — Pre-Merge Checklist

1. Ask the user which post to check (slug or file path)
2. Check the file exists: `content/blog/<slug>.md`
3. Run checks:

| Check | Status |
|-------|--------|
| `draft` is `false` | [pass/fail — offer to flip if `true`] |
| `coverImage` set in frontmatter | [pass/warn] |
| `coverImageAlt` set when `coverImage` is set | [pass/fail — build fails without it] |
| SEO hard rules | [pass/fail] |
| Anti-AI scan | [pass/issues] |
| `npm run build` succeeds | [pass/fail] |

4. If all pass: "Ready to publish — all checks passed."
5. If any fail: list what needs fixing before merging.

---

## Project Conventions

These are non-negotiable and come from the project's CLAUDE.md:

- **File paths:** Posts in `content/blog/<slug>.md` (English only)
- **Slug:** Filename minus `.md`
- **Frontmatter:** Strict Zod schema validated during the build — extra fields fail the build
- **Date formatting:** Use `timeZone: "UTC"` to avoid off-by-one
- **Imports:** Use `@/*` path alias
- **No draft suffix in filenames** — use `draft: true` in frontmatter
- **Tags:** lowercase, hyphenated (e.g., `ai-and-engineering`)
- **Sort order:** Posts sorted by pubDate descending
