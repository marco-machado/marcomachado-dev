# Blog Writing Skill — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a project-local `/blog` skill with write, analyze, translate, and publish commands for marcomachado.dev.

**Architecture:** Skill files live in `.claude/skills/blog/`. The main SKILL.md orchestrator routes 4 slash commands. Templates and references are loaded on-demand. The skill integrates with the existing Astro content collection schema and bilingual file structure.

**Tech Stack:** Claude Code skills (markdown), Astro content collections (Zod schema), git branches.

---

## Task 1: Schema Changes

Add `coverImage`, `coverImageAlt`, and `ogImage` optional fields to the blog content schema and wire them through to the layout.

**Files:**
- Modify: `src/content.config.ts`
- Modify: `src/layouts/BlogPostLayout.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Step 1: Update content schema**

In `src/content.config.ts`, add three fields to the schema object after `draft`:

```ts
coverImage: z.string().optional(),
coverImageAlt: z.string().optional(),
ogImage: z.string().optional(),
```

**Step 2: Update BlogPostLayout props and pass-through**

In `src/layouts/BlogPostLayout.astro`:

Add to the Props interface:
```ts
coverImage?: string;
coverImageAlt?: string;
ogImage?: string;
```

Destructure them:
```ts
const { title, description, pubDate, updatedDate, tags, lang, coverImage, ogImage } = Astro.props;
```

Pass `coverImage` and `ogImage` to BaseLayout:
```astro
<BaseLayout title={title} description={description} lang={lang} ogImage={ogImage || coverImage}>
```

**Step 3: Update BaseLayout to render OG image meta tag**

In `src/layouts/BaseLayout.astro`:

Add to Props interface:
```ts
ogImage?: string;
```

Destructure it:
```ts
const {
  title,
  description = "Software engineer, writer, and builder.",
  lang = "en",
  ogImage,
} = Astro.props;
```

Add OG image meta tag after the existing `og:locale` meta tag (line 37):
```astro
{ogImage && <meta property="og:image" content={ogImage} />}
```

**Step 4: Update [slug].astro pages to pass new props**

In `src/pages/blog/[slug].astro`, update the BlogPostLayout usage:
```astro
<BlogPostLayout
  title={post.data.title}
  description={post.data.description}
  pubDate={post.data.pubDate}
  updatedDate={post.data.updatedDate}
  tags={post.data.tags}
  lang="en"
  coverImage={post.data.coverImage}
  ogImage={post.data.ogImage}
>
```

Do the same in `src/pages/pt/blog/[slug].astro` (with `lang="pt"`).

**Step 5: Build to verify no errors**

Run: `npm run build`
Expected: Build succeeds. Existing posts without coverImage/ogImage still work (fields are optional).

**Step 6: Commit**

```bash
git add src/content.config.ts src/layouts/BaseLayout.astro src/layouts/BlogPostLayout.astro src/pages/blog/[slug].astro src/pages/pt/blog/[slug].astro
git commit -m "Add coverImage, coverImageAlt, and ogImage to blog schema"
```

---

## Task 2: Reference Files

Create the three reference files that the skill loads on-demand during writing and review.

**Files:**
- Create: `.claude/skills/blog/references/seo-guidelines.md`
- Create: `.claude/skills/blog/references/anti-ai-patterns.md`
- Create: `.claude/skills/blog/references/quality-checks.md`

**Step 1: Create SEO guidelines reference**

Write `.claude/skills/blog/references/seo-guidelines.md`:

```markdown
# SEO Guidelines

## Hard Rules (block publishing)

These must pass before a post can be published:

1. **Heading hierarchy** — No skipped levels. H1 is title only (rendered by layout, never in markdown body). Body uses H2 for sections, H3 for subsections.
2. **Title under 60 characters** — The `title` frontmatter field. Measured by character count.
3. **Meta description present** — The `description` frontmatter field must be non-empty.
4. **No H1 in body** — The markdown body must not contain any `# ` lines (H1). The title is rendered by BlogPostLayout.

## Suggestions (report, don't enforce)

These improve discoverability but should not block publishing:

- **Meta description 150-160 chars** — Specific, not vague. Include what the reader gets.
- **Title includes primary topic keyword** — The main subject should appear naturally in the title.
- **Question-format headings** — Where natural, frame H2s as questions readers would search for. Don't force it.
- **Internal links** — Link to existing posts on the blog where relevant. Use descriptive anchor text (never "click here").
- **External links** — Link to authoritative sources for claims. Use tier 1-3 sources (primary research, major publications, reputable industry sources).
- **Front-loaded keyword** — Primary keyword in the first 100 words of the post.
```

**Step 2: Create anti-AI patterns reference**

Write `.claude/skills/blog/references/anti-ai-patterns.md`:

```markdown
# Anti-AI Pattern Detection

## Trigger Words

Flag if any of these appear in the draft. They are strongly associated with AI-generated content and should be replaced with natural alternatives:

delve, tapestry, multifaceted, testament, pivotal, robust, cutting-edge, furthermore, indeed, moreover, utilize, leverage, comprehensive, landscape, crucial, foster, illuminate, underscore, embark, endeavor, facilitate, paramount, nuanced, intricate, meticulous, realm, seamlessly, game-changer, revolutionize, harness the power of, in today's digital landscape, it's important to note, dive into, navigate the landscape, elevate

## Readability Targets

- **Flesch Reading Ease:** 60-70 (acceptable 55-75)
- **Average sentence length:** 15-20 words
- **Sentence length variance:** Mix short sentences (8 words) with longer ones (25 words). Uniform length signals AI.
- **Paragraph length:** No paragraph over 150 words. Target 40-80 words.
- **Contractions:** Use them naturally — "it's", "we've", "don't", "isn't". Overly formal prose reads as AI.

## Writing Naturalness

- **No formulaic openers** — Don't start consecutive paragraphs the same way. Vary structure.
- **Rhetorical questions** — Use occasionally for rhythm, not mechanically.
- **Active voice** — Preferred. Keep passive voice under 10% of sentences.
- **Specificity over abstraction** — "We cut deploy time from 12 minutes to 3" beats "We significantly improved deployment performance."
- **First-person experience** — "In my experience", "When I tried X", "What I've seen" — these signals are hard to fake and valuable for E-E-A-T.

## Self-Check Process

After drafting, scan for:
1. Any trigger words from the list above
2. Three or more consecutive paragraphs starting with the same word
3. Sections that feel like they could appear on any blog about the same topic (replace with specific experience)
4. Hedging clusters — "it's important to note that one should consider" → just say the thing
```

**Step 3: Create quality checks reference**

Write `.claude/skills/blog/references/quality-checks.md`:

```markdown
# Quality Checks

## Fact-Check Process

Run on every post regardless of template:

1. **Identify all factual claims** — Statistics, dates, version numbers, tool capabilities, API behaviors, named sources.
2. **Verify each claim** — Use WebSearch to confirm. For technical claims (API endpoints, library behavior), check official docs.
3. **Flag unverifiable claims** — If a claim can't be verified, flag it for the author to confirm or remove.
4. **Check link targets** — Any external links should point to live, authoritative pages.

## Research Enrichment (template-dependent)

For **tutorial**, **how-to-guide**, and **case-study** templates, additionally:

1. **Check current docs** — Verify tool versions, API signatures, and configuration options are current.
2. **Find supporting references** — Look for authoritative sources that support or contextualize claims.
3. **Suggest data points** — If the post makes a general claim ("X is faster"), find benchmarks or studies to cite.

For **thought-leadership** and **news-analysis**, do NOT research-enrich. The author's voice and perspective is the value. Only fact-check.

## Pre-Publish Checklist

### Structure
- [ ] No H1 in markdown body
- [ ] Heading hierarchy valid (H2 → H3, no skips)
- [ ] Every section has substantive content (no orphan headings)

### Frontmatter
- [ ] `title` under 60 characters
- [ ] `description` present and non-empty
- [ ] `pubDate` is today's date
- [ ] `tags` array is non-empty
- [ ] `lang` matches file location (en/ or pt/)
- [ ] `draft` is false (or intentionally true)

### Content Quality
- [ ] No AI trigger words (see anti-ai-patterns.md)
- [ ] No three consecutive paragraphs starting with the same word
- [ ] Active voice predominant
- [ ] Contractions used naturally
- [ ] Specific examples over abstract claims

### SEO (suggestions only, except hard rules)
- [ ] Title under 60 chars (HARD RULE)
- [ ] Description 150-160 chars (suggestion)
- [ ] Internal links where relevant (suggestion)
- [ ] Question-format headings where natural (suggestion)

### Files
- [ ] EN file exists at `src/content/blog/en/<slug>.md`
- [ ] PT file exists at `src/content/blog/pt/<slug>.md` (same filename)
- [ ] PT file has `lang: "pt"` in frontmatter
- [ ] Cover image suggestion provided
```

**Step 4: Commit**

```bash
git add .claude/skills/blog/references/
git commit -m "Add blog skill reference files (SEO, anti-AI, quality checks)"
```

---

## Task 3: Content Templates

Create the 5 content type templates.

**Files:**
- Create: `.claude/skills/blog/templates/thought-leadership.md`
- Create: `.claude/skills/blog/templates/tutorial.md`
- Create: `.claude/skills/blog/templates/how-to-guide.md`
- Create: `.claude/skills/blog/templates/news-analysis.md`
- Create: `.claude/skills/blog/templates/case-study.md`

**Step 1: Create thought-leadership template**

Write `.claude/skills/blog/templates/thought-leadership.md`:

```markdown
# Thought Leadership Template

Best for: opinion pieces, industry analysis, predictions, contrarian takes.

Fact-check scope: verify any cited stats or claims. No research enrichment — your voice is the value.

## Structure

### Introduction / Hook
Open with a surprising observation, a counterintuitive claim, or a concrete moment that crystallizes the problem. Ground the reader immediately — no throat-clearing.

### Thesis
State clearly what you believe and why. This is the core argument. One or two paragraphs. The reader should be able to summarize your position after this section.

### Evidence
Support the thesis with data, examples, and observations. Mix external evidence (studies, industry trends) with personal experience. Each piece of evidence should advance the argument, not just pad it.

### Personal Experience
What you've seen firsthand that others haven't. This is the section AI cannot replicate. Be specific: name the situation, what happened, what you learned. Avoid generalizing your experience into universal truths without acknowledging the limits.

### Implications
What this means for the reader. If your thesis is correct, what should they do differently? What should they stop doing? Be concrete and actionable.

### Conclusion
Restate the core thesis in different words. End with a question worth sitting with, or a clear call to reflection. Don't introduce new arguments here.

## Guidance

- Lead with the strongest version of your argument, not the safest
- Acknowledge counterarguments — dismissing them weakens your position
- Personal anecdotes are strongest when they include what went wrong, not just what worked
- Keep sections proportional to their insight density — cut sections that repeat the thesis without adding evidence
```

**Step 2: Create tutorial template**

Write `.claude/skills/blog/templates/tutorial.md`:

```markdown
# Tutorial Template

Best for: code walkthroughs, tool demos, building something specific.

Fact-check scope: verify technical claims. Research enrichment: check current docs/APIs, find relevant references.

## Structure

### What We're Building
Show the end result first. What will the reader have when they're done? Why does this matter? Include a screenshot or description of the finished product if possible.

### Prerequisites
List tools, versions, and prior knowledge needed. Be specific: "Node.js 20+" not "Node.js". Link to installation guides. If setup is non-trivial, make it its own section.

### Implementation (multiple H2 sections)
One concept per section. Each section should:
- Explain what we're doing and why before showing code
- Show the code
- Explain what the code does (if not obvious)
- Show the result (output, screenshot, behavior change)

Keep code blocks focused — show the relevant code, not the entire file every time. Use comments to indicate where new code goes relative to existing code.

### Troubleshooting
Common issues from your experience building this. Format as problem → cause → solution. Only include issues you've actually encountered or that are commonly reported.

### Conclusion
Summarize what we built. Suggest next steps or extensions. Link to the complete code if applicable.

## Guidance

- Every code block must be tested and runnable
- Version-pin dependencies — "as of March 2026" or specific versions
- Explain the why, not just the how — readers learn patterns, not just steps
- If a step has a non-obvious gotcha, call it out before the reader hits it
```

**Step 3: Create how-to-guide template**

Write `.claude/skills/blog/templates/how-to-guide.md`:

```markdown
# How-To Guide Template

Best for: process posts, "how to X" queries, teaching a method.

Fact-check scope: verify claims. Research enrichment: find supporting data and references.

## Structure

### The Problem
Why does this matter? What pain is the reader experiencing? Be specific about the symptoms, not just the category. Establish that you understand their situation.

### Why Existing Approaches Fall Short (optional)
If the common advice is wrong or incomplete, explain why. This section justifies your approach and differentiates from other how-to guides on the same topic. Skip if your approach is standard.

### Step-by-Step Solution (multiple H2 sections)
Break the process into clear steps. Each step should be one action the reader can complete. For each step:
- State what to do
- Explain how to do it
- Show what success looks like (expected output, visual change, confirmation)

### Common Mistakes
Things that go wrong and how to avoid them. Draw from personal experience. Format as mistake → why it happens → what to do instead.

### Conclusion
Recap the process briefly. Suggest what to do after completing these steps. Link to related content if applicable.

## Guidance

- Number your steps if order matters, use headings if order is flexible
- Include "you should now see..." checkpoints so readers can verify progress
- Don't explain prerequisites inline — link to them or add a prerequisites section
- If a step is complex enough to need sub-steps, it might be two steps
```

**Step 4: Create news-analysis template**

Write `.claude/skills/blog/templates/news-analysis.md`:

```markdown
# News Analysis Template

Best for: reacting to industry events, algorithm updates, announcements. Shorter format.

Fact-check scope: verify the news facts and timeline. No research enrichment.

## Structure

### What Happened
The facts. What was announced, released, or changed? When? By whom? No opinion yet — just establish the shared reality. Link to primary sources.

### Why It Matters
Context and implications. Who is affected? What changes as a result? Connect this event to broader trends the reader cares about.

### What I Think
Your personal analysis. This is where your perspective adds value. Be direct about your take — hedging weakens the piece. It's fine to be uncertain, but name the uncertainty explicitly rather than hiding behind vague language.

### What to Do About It
Actionable advice for the reader. Given what happened and your analysis, what should they do? What should they wait on? What should they ignore?

## Guidance

- Speed matters for this format — publish while the news is relevant
- Keep it shorter than other formats (this is analysis, not a comprehensive guide)
- Separate facts from opinion clearly — the reader should know which is which
- Update the post if new information emerges (use `updatedDate` in frontmatter)
- Link to the primary source in the first section
```

**Step 5: Create case-study template**

Write `.claude/skills/blog/templates/case-study.md`:

```markdown
# Case Study Template

Best for: "here's what happened when I did X" posts with real results.

Fact-check scope: verify any external claims. Research enrichment: find supporting data for context.

## Structure

### The Challenge
What problem were you facing? What were the constraints? What had you already tried? Set the scene with enough detail that the reader understands why this was hard.

### The Approach
What did you decide to do and why? What alternatives did you consider and reject? The reasoning matters as much as the choice — readers want to learn your decision framework, not just copy your solution.

### What Happened
The process. What went as expected? What surprised you? Where did you have to pivot? This is the narrative section — it should read like a story, not a status report.

### Results
Concrete metrics and outcomes. Before and after. Quantify where possible. Be honest about what improved and what didn't. Include timeframes.

### Lessons Learned
What would you do differently next time? What advice would you give someone starting this same project? What did you learn that's transferable beyond this specific situation?

## Guidance

- Real metrics are the entire value — without them this is just a story
- Be honest about failures and pivots — they're more instructive than smooth success
- Include enough technical detail for practitioners, but don't lose the narrative thread
- If results are mixed, say so — selective reporting damages credibility
```

**Step 6: Commit**

```bash
git add .claude/skills/blog/templates/
git commit -m "Add blog skill content templates (5 types)"
```

---

## Task 4: Main Skill Orchestrator (SKILL.md)

Create the main skill file that routes all 4 commands and defines the full workflow.

**Files:**
- Create: `.claude/skills/blog/SKILL.md`

**Step 1: Create the SKILL.md**

Write `.claude/skills/blog/SKILL.md`:

````markdown
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
````

**Step 2: Commit**

```bash
git add .claude/skills/blog/SKILL.md
git commit -m "Add blog skill orchestrator (SKILL.md)"
```

---

## Task 5: Build Verification and Test

Verify everything works end-to-end.

**Step 1: Build the Astro site to verify schema changes**

Run: `npm run build`
Expected: Build succeeds with no errors. Existing posts work fine (new fields are optional).

**Step 2: Verify skill is discoverable**

Run: `ls -la .claude/skills/blog/`
Expected: Shows SKILL.md, templates/, references/ directories.

**Step 3: Verify all skill files exist**

Run: `find .claude/skills/blog -type f | sort`
Expected:
```
.claude/skills/blog/SKILL.md
.claude/skills/blog/references/anti-ai-patterns.md
.claude/skills/blog/references/quality-checks.md
.claude/skills/blog/references/seo-guidelines.md
.claude/skills/blog/templates/case-study.md
.claude/skills/blog/templates/how-to-guide.md
.claude/skills/blog/templates/news-analysis.md
.claude/skills/blog/templates/thought-leadership.md
.claude/skills/blog/templates/tutorial.md
```

**Step 4: Verify existing post still renders**

Run: `npm run build 2>&1 | tail -5`
Expected: Build completes successfully, no Zod validation errors.

**Step 5: Final commit if any fixes needed**

Only if previous steps revealed issues. Otherwise skip.

---

## Task 6: Update CLAUDE.md

Add the blog skill to the project's CLAUDE.md so future sessions know about it.

**Files:**
- Modify: `CLAUDE.md` (project root)

**Step 1: Add blog skill section**

Add after the "Conventions" section:

```markdown
## Blog Skill

Local skill at `.claude/skills/blog/`. Commands:
- `/blog write <topic>` — Full workflow: branch → outline → draft → fact-check → review → publish
- `/blog analyze <file>` — Review existing post (readability, SEO, anti-AI)
- `/blog translate <file>` — Translate EN↔PT for paired file
- `/blog publish` — Pre-merge checklist on blog branch
```

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "Document blog skill commands in CLAUDE.md"
```
