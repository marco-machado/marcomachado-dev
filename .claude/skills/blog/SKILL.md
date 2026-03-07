---
name: blog
description: >
  Write, analyze, translate, and publish blog posts for marcomachado.dev.
  Bilingual (EN/PT) Astro blog with SEO guidance, anti-AI pattern detection,
  and git branch workflow. Use when user says "blog", "write a post",
  "blog post", "analyze post", "translate post", "publish post", "new article",
  "blog write", "blog analyze", "blog translate", "blog publish".
user-invocable: true
argument-hint: "[write|analyze|translate|publish] [topic-or-file]"
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

# Blog — Write, Analyze, Translate, Publish

Blog content engine for marcomachado.dev. Bilingual Astro blog (EN default, PT translation).

## Commands

| Command | Description |
|---------|-------------|
| `/blog write <topic>` | Full workflow: branch → outline → draft → fact-check → review → publish |
| `/blog analyze <file>` | Review an existing post (readability, SEO, anti-AI) |
| `/blog translate <file>` | Translate EN→PT or PT→EN for the paired file |
| `/blog publish` | Pre-merge checklist on current blog branch |

## Command Routing

Parse the user's input to determine the sub-command:
- `write` / `new` / `draft` / no sub-command with a topic → Write workflow
- `analyze` / `review` / `check` → Analyze workflow
- `translate` → Translate workflow
- `publish` / `ready` / `merge` → Publish workflow

---

## `/blog write <topic>` — Full Workflow

### Phase 1: Branch

1. Derive slug from topic: lowercase, hyphens, no special chars, max 50 chars
2. Run: `git checkout main && git checkout -b blog/<slug>`
3. Confirm branch created

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
4. The author's voice — study `src/content/blog/en/` for existing posts' tone, sentence rhythm, and style

**Frontmatter format:**
```yaml
---
title: "<title>"
description: "<150-160 char description>"
pubDate: <YYYY-MM-DD>
tags: [<relevant tags>]
lang: "en"
draft: false
---
```

Use `timeZone: "UTC"` awareness — pubDate should be today's date in YYYY-MM-DD format.

**Voice calibration:** Before writing, read at least one existing post from `src/content/blog/en/` to match the author's tone. Key traits from existing content:
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

1. Write the EN file: `src/content/blog/en/<slug>.md`
2. Write the PT file: `src/content/blog/pt/<slug>.md` — identical content but with `lang: "pt"` in frontmatter
3. Commit both files:
   ```bash
   git add src/content/blog/en/<slug>.md src/content/blog/pt/<slug>.md
   git commit -m "Add blog post: <title>"
   ```
4. Remind the user:
   - "PT file has EN content — translate it before merging"
   - "Add cover image and update `coverImage`/`ogImage` in frontmatter"
   - "Run `/blog publish` when ready to merge"

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

## `/blog translate <file>` — Translation

1. Read the source file
2. Determine direction from `lang` field:
   - `lang: "en"` → translate to PT, target is `src/content/blog/pt/<same-filename>`
   - `lang: "pt"` → translate to EN, target is `src/content/blog/en/<same-filename>`
3. Translate:
   - Frontmatter: translate `title` and `description`, change `lang`, keep all other fields identical
   - Body: translate preserving markdown structure, heading levels, code blocks (don't translate code), link URLs, and emphasis
   - Tone: match the conversational, first-person style in the target language
4. Write the translated file
5. Commit:
   ```bash
   git add <target-file>
   git commit -m "Translate blog post: <title> (<direction>)"
   ```

---

## `/blog publish` — Pre-Merge Checklist

1. Verify current branch starts with `blog/`
2. Find the slug from branch name
3. Check both files exist:
   - `src/content/blog/en/<slug>.md`
   - `src/content/blog/pt/<slug>.md`
4. Run checks:

| Check | Status |
|-------|--------|
| PT file translated (content differs from EN body) | [pass/fail] |
| `coverImage` set in EN frontmatter | [pass/warn] |
| `coverImage` set in PT frontmatter | [pass/warn] |
| EN SEO hard rules | [pass/fail] |
| PT SEO hard rules | [pass/fail] |
| EN anti-AI scan | [pass/issues] |
| PT anti-AI scan | [pass/issues] |

5. If all pass: "Ready to merge. Run `git checkout main && git merge blog/<slug>` or create a PR."
6. If any fail: list what needs fixing before merge.

---

## Project Conventions

These are non-negotiable and come from the project's CLAUDE.md:

- **File paths:** EN posts in `src/content/blog/en/`, PT in `src/content/blog/pt/`
- **Filename match:** PT filename must exactly match EN (no `.pt` suffix)
- **Slug extraction:** `post.id.split("/")[1]`
- **Date formatting:** Use `timeZone: "UTC"` to avoid off-by-one
- **Imports:** Use `@/*` path alias
- **No draft suffix in filenames** — use `draft: true` in frontmatter
- **Tags:** lowercase, hyphenated (e.g., `ai-and-engineering`)
- **Sort order:** Posts sorted by pubDate descending
