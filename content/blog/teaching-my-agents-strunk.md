---
title: "Teaching My Agents Strunk"
description: "I gave my coding agents a 1918 style guide. The Elements of Style plugin turns Strunk's rules into a skill they load whenever they write prose for people."
pubDate: 2026-10-26
tags: ["ai-and-engineering", "tools", "writing"]
draft: false
---

My coding agents write more prose than I do. Commit messages, pull request descriptions, READMEs, code comments, error text. Most of it is fine. A lot of it is padded.

You know the pattern. A commit message that opens with "This commit introduces." A PR description that restates the diff in three bullet points and then summarizes the bullet points. A comment that explains what the next line obviously does. None of it is wrong. All of it costs the reader a few seconds, and those seconds add up across a team.

So I installed [The Elements of Style](https://github.com/obra/the-elements-of-style), a plugin by Jesse Vincent that packages William Strunk Jr.'s 1918 book as an agent skill.

## What It Is

The plugin ships one skill, `writing-clearly-and-concisely`, and the full public-domain text of the book as a reference file. The skill tells the agent to apply it whenever it writes prose a human will read. That covers docs, commit messages, PR descriptions, UI copy, and error messages.

The skill itself is short. It lists all eighteen rules at a glance: the seven rules of usage, like where commas go, and the eleven principles of composition. The ones that matter most are in bold:

- Use active voice
- Put statements in positive form
- Use definite, specific, concrete language
- Omit needless words
- Keep related words together
- Place emphatic words at the end of the sentence

The full reference costs about 12,000 tokens, and the skill says so up front. When context is tight, it suggests drafting first and handing the draft to a subagent with the book to copyedit. I like that it's honest about the cost instead of quietly eating a chunk of the context window.

It isn't tied to one tool either. The repo has install docs for Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Pi, and a few others, all pointing at the same skill.

## Why a Style Guide From 1918

In my last post I argued that [the prompt isn't the bottleneck](/blog/the-prompt-isnt-the-bottleneck/). Persistent context is. One of the files I said I should have written earlier was one that captures the writing conventions I care about.

This is that file, except someone else already wrote it, and it has held up for over a century. "Omit needless words" is a better instruction than anything I'd come up with on my own, and it's exactly the one agents need most.

It also beats a list of banned words. Telling an agent not to say "delve" just moves the problem to the next word. Strunk's rules target the habits underneath: hedging, passive constructions, saying in ten words what fits in four.

## The Tradeoff

Strunk is opinionated, and some of the usage notes are dated. The book also wasn't written for terse technical text like commit subjects. I don't expect the agent to follow every rule literally. I want a default that leans toward short and direct, and this gives me one without writing it myself.

The real test is whether I spend less time trimming what my agents write. I'll find out.
