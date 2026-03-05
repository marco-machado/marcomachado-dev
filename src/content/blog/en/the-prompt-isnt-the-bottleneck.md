---
title: "The Prompt Isn't the Bottleneck"
description: "Most teams optimizing their AI prompts are solving the wrong problem. The bottleneck is persistent context — and no one's treating it as infrastructure."
pubDate: 2026-03-04
tags: ["ai-and-engineering", "tools"]
lang: "en"
draft: false
---

In the last year, I've watched teams go from "we should experiment with AI" to staffing prompt engineering as a distinct function. I understand the instinct. You want to extract consistent value from these tools, and prompts are the visible lever you can pull.

But in my experience, the teams getting the most consistent value from AI aren't the ones with the best prompts. They're the ones who stopped treating AI as a conversation and started treating it as a delegation interface — and built the infrastructure to support that.

This distinction became concrete for me when I spent time with Claude Cowork, Anthropic's desktop tool for autonomous task execution. The surface-level story is that it's a no-code alternative to Claude Code — you describe work, it executes, you come back to finished files. That's true and useful. But the more interesting decision underneath it is about where context lives.

## The Stateless Conversation Problem

Most AI usage today is effectively stateless. You open a chat, provide context, get output, close the tab. Tomorrow you do it again, re-providing the same context, maybe slightly better, maybe worse depending on your mood. The AI has no memory of you. Every session starts from zero.

This is fine for one-off questions. It's a compounding liability for anything that happens repeatedly.

The workaround most teams land on is longer prompts — packing more context into each request. This works, but it's fragile. The quality of output is now directly coupled to whoever assembled the prompt that day. If that person is unavailable, distracted, or new, the output degrades. You've created a skill dependency disguised as a tool.

## Context as Infrastructure

What Cowork's design suggests — and what I think is the more durable pattern regardless of which tool you use — is treating context as a persistent asset rather than something you reconstruct on demand.

The specific mechanic: you maintain a set of markdown files that describe who you are, how you work, and what good output looks like for your context. Before any task, the tool reads these files. The AI isn't starting from zero. It's starting from an accumulated model of you.

The compounding effect here is real. A context file you update weekly gets better over time. It captures corrections from past work, preferences that emerged from feedback, constraints that burned you once and shouldn't burn you again. It becomes institutional memory — not for your org initially, but for your workflow.

**The constraint was:** most of us never built this because no tool made the cost of not having it obvious enough. Stateless chat hides the tax you're paying every session.

## The Delegation vs. Conversation Frame

There's a useful three-way distinction worth naming. Conversational AI (chat) is prompt-response — you ask, it answers, you're present throughout. Agentic coding tools like Claude Code are developer-oriented — they write and execute code, they work in your terminal, they require technical fluency. Cowork sits in between: you describe what "done" looks like, the tool makes a plan and executes it, you step away and come back to finished files.

The frame that clarifies this: chat is an assistant who answers questions, Code is a developer who builds software, Cowork is an employee who completes tasks.

That last one changes the job of the person using it. You're not composing the best possible prompt. You're writing a brief. You're specifying what done looks like, flagging what's out of scope, and trusting the system to figure out the path. Cowork reinforces this by asking structured clarifying questions before it executes — rather than guessing confidently and delivering polished output that's technically responsive but wrong.

This is a different skill than prompting, and a more transferable one. The ability to define scope, specify acceptance criteria, and delegate clearly is a management skill that predates AI by a few decades.

## What I'd Do Differently

When I first integrated AI into my workflow, I optimized for prompts. I kept a running document of prompts that worked. I refined them across iterations. That was time reasonably spent for one-off tasks.

What I didn't do — and should have done earlier — was build context files. Not as a Cowork-specific thing, but as a general practice. A file that describes how I make decisions. A file that captures the writing conventions I care about. A file that names the constraints I'm always operating under. These exist now, and the delta in output quality isn't marginal.

The constraint I didn't see coming: maintaining these files takes discipline. They compound in value, but only if you actually update them. An outdated context file is worse than no context file — it confidently steers the AI toward a version of you that no longer exists.

## Where It Actually Falls Short

Cowork has real limitations worth naming. There's no native memory between sessions — the context file strategy is the workaround, not a built-in solution. It's desktop-only with no sync across devices. Tasks stop if you close the app. It uses more compute than regular chat. And it's still a research preview, which means the feature surface will shift.

The bigger constraint is that Cowork was designed for individual operators, not teams. If your goal is shared institutional context — a system where multiple people's work accumulates into a shared AI-readable model of how your team operates — Cowork doesn't solve that directly. You'd need to build the folder structure and governance around it yourself. That's not a dealbreaker, but it's the real design work, and it's where most teams stop before getting the compounding value.

## The Bigger Question

If you're managing a team that uses AI tools, the question worth sitting with isn't "are our prompts good enough?" It's "who owns our context?"

Who maintains the files that describe how your team works, what your standards are, what constraints are always in play? Is that a person's responsibility? A team's? Is it version-controlled? Does it get updated when you learn something costly? Does a new hire get access to it?

The teams that will get durable value from AI tooling aren't the ones with the cleverest prompts. They're the ones who figured out how to make context a first-class artifact — something maintained, owned, and improved the way you'd maintain any other piece of critical infrastructure.

The tool doesn't matter much. That decision does.
