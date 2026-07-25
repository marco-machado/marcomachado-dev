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
- [ ] No fields outside the schema (strict validation fails the build)
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
- [ ] File exists at `content/blog/<slug>.md`
- [ ] `coverImageAlt` present when `coverImage` is set
- [ ] Cover image suggestion provided
