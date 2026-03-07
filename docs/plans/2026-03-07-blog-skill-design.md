# Blog Writing Skill Design

## Overview

Project-local Claude Code skill for writing blog posts on marcomachado.dev. Cherry-picks the best parts from the [claude-blog](https://github.com/AgriciDaniel/claude-blog) plugin and adapts them to a personal bilingual Astro blog.

## Skill Structure

```
.claude/skills/blog/
├── SKILL.md              # Main orchestrator, routes commands
├── templates/
│   ├── thought-leadership.md
│   ├── tutorial.md
│   ├── how-to-guide.md
│   ├── news-analysis.md
│   └── case-study.md
└── references/
    ├── seo-guidelines.md    # Light SEO rules + suggestions
    ├── anti-ai-patterns.md  # Trigger words, readability targets
    └── quality-checks.md    # Fact-check + review checklist
```

## Commands

| Command | Description |
|---------|-------------|
| `/blog write <topic>` | Full workflow: branch, outline, draft, fact-check, review, publish |
| `/blog analyze <file>` | Review an existing post (readability, SEO, anti-AI) |
| `/blog translate <file>` | Translate EN to PT (or PT to EN) for the paired file |
| `/blog publish` | Pre-merge checklist: PT translated? Cover image? SEO checks pass? |

## Schema Changes

Add optional fields to `src/content.config.ts`:

```ts
coverImage: z.string().optional(),
coverImageAlt: z.string().optional(),
ogImage: z.string().optional(),
```

Update `BlogPostLayout.astro` and `BaseLayout.astro` to render OG image meta tags when present.

## `/blog write` Workflow

1. **Branch** — Create `blog/<slug>` from main
2. **Template selection** — Auto-detect from topic signals or ask user
3. **Outline** — Build structure from template, present for approval
4. **Draft** — Write the full post following template structure and anti-AI patterns
5. **Fact-check** — Verify claims and stats via web search. For tutorial, how-to-guide, and case-study templates, also enrich with supporting data. Present findings alongside the draft.
6. **Cover image suggestion** — Describe a cover image concept the user can generate with their preferred tools
7. **User review** — Present final draft with fact-check notes and image suggestion. User approves or requests changes.
8. **Publish** — Create `src/content/blog/en/<slug>.md` and `src/content/blog/pt/<slug>.md` (identical EN content, PT file has `lang: "pt"` — user translates before merging)

## `/blog analyze` Workflow

1. Read the target file
2. Run SEO hard rules check
3. Run anti-AI pattern detection
4. Run readability analysis
5. Report findings with suggestions

## `/blog translate` Workflow

1. Read the source file
2. Determine target language from source `lang` field
3. Translate content preserving markdown structure, frontmatter format, and code blocks
4. Write to the paired file path

## `/blog publish` Workflow (Pre-merge Checklist)

1. Check current branch is `blog/<slug>`
2. Verify PT file has been translated (content differs from EN)
3. Verify `coverImage` is set in frontmatter (or warn)
4. Run SEO hard rules on both EN and PT
5. Run anti-AI check on both files
6. Report status — all green means ready to merge

## SEO Hard Rules (block publishing)

- Valid heading hierarchy (no skipped levels)
- Title under 60 characters
- Meta description present (the `description` frontmatter field)
- H1 is title only (no H1 in body content)

## SEO Suggestions (reported, not enforced)

- Internal links to existing posts
- Question-format headings where natural
- Meta description 150-160 chars with specifics
- Title includes primary topic keyword

## Anti-AI Pattern Detection

### Trigger words to flag

delve, tapestry, multifaceted, testament, pivotal, robust, cutting-edge, furthermore, indeed, moreover, utilize, leverage, comprehensive, landscape, crucial, foster, illuminate, underscore, embark, endeavor, facilitate, paramount, nuanced, intricate, meticulous, realm, seamlessly, game-changer, revolutionize, harness the power of, in today's digital landscape, it's important to note, dive into, navigate the landscape

### Readability targets

- Flesch Reading Ease: 60-70 (acceptable 55-75)
- Average sentence length: 15-20 words
- Sentence length variance: mix short (8 words) and long (25 words)
- No paragraph over 150 words
- Natural contractions ("it's", "we've", "don't")

### Writing naturalness

- No formulaic paragraph openers
- Rhetorical questions for rhythm
- Active voice preferred (passive under 10%)

## Templates

Each template defines section structure and flow guidance. No enforced word counts — posts are as long as they need to be.

### thought-leadership

Best for: opinion pieces, industry analysis, predictions, contrarian takes.

```
Hook (surprising observation or counterintuitive claim)
Thesis (what you believe and why)
Evidence (data, examples, personal experience)
Personal experience (what you've seen firsthand)
Implications (what this means for the reader)
Conclusion (restate thesis, call to reflection)
```

Fact-check scope: verify any cited stats or claims. No research enrichment — your voice is the value.

### tutorial

Best for: code walkthroughs, tool demos, building something specific.

```
What we're building (end result, why it matters)
Prerequisites (tools, knowledge, setup)
Step-by-step implementation (one concept per section)
Troubleshooting (common issues from experience)
Conclusion (what we built, next steps)
```

Fact-check scope: verify technical claims. Research enrichment: check current docs/APIs, find relevant references.

### how-to-guide

Best for: process posts, "how to X" queries, teaching a method.

```
The problem (why this matters)
Why existing approaches fall short (optional)
Step-by-step solution
Common mistakes to avoid
Conclusion (recap, next steps)
```

Fact-check scope: verify claims. Research enrichment: find supporting data and references.

### news-analysis

Best for: reacting to industry events, algorithm updates, announcements. Shorter format.

```
What happened (the news, facts only)
Why it matters (context, who's affected)
What I think (personal analysis)
What to do about it (actionable advice)
```

Fact-check scope: verify the news facts and timeline. No research enrichment.

### case-study

Best for: "here's what happened when I did X" posts with real results.

```
The challenge (what problem you faced)
The approach (what you decided to do and why)
What happened (the process, surprises, pivots)
Results (metrics, outcomes, before/after)
Lessons learned (what you'd do differently)
```

Fact-check scope: verify any external claims. Research enrichment: find supporting data for context.

## Git Branch Workflow

- `/blog write` creates `blog/<slug>` branch from main
- All files are committed to the branch as work progresses
- User iterates on the branch: translates PT, generates cover image, revises
- `/blog publish` runs the pre-merge checklist on the branch
- User merges to main when satisfied (manual or via PR)

## What This Skill Does NOT Do

- No keyword density tracking
- No 100-point scoring system
- No citation capsules or forced statistics per section
- No editorial calendars or content briefs
- No image sourcing from stock sites
- No Python dependencies
- No auto-translation (translation is a deliberate creative act)
- No auto-commit to main (branch workflow enforced)
