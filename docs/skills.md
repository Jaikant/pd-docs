---
title: Skills
description: Skills package the instructions and tools a chatbot agent uses.
---

# Skills

**Estimated Time: 2 minutes**

A skill is the capability layer behind a chatbot agent. It combines the instructions, knowledge, and tools the agent needs to do useful work.

The skill defines what the agent knows how to do.

## What A Skill Contains

A skill can include:

- Instructions that define how the agent should behave.
- Knowledge sources the agent can search.
- Tools for APIs, app connections, or website payloads.

When you update skill instructions or add items under **Knowledge and actions**, you are configuring the agent's skill.

## Today: One Default Skill

Right now, each agent has one skill created by default. That skill uses the instructions you add and the tools you configure.

This keeps setup simple:

```text
One agent -> one skill -> instructions plus tools
```

For many chatbots, this is enough. A support chatbot can combine support instructions, product knowledge, an HTTP action for order lookup, and a Google Calendar connection for scheduling.

## Tools Live Inside Skills

Tools are not separate from the skill. They are the things the skill can use when the conversation requires more than a text response.

Current tool types include:

- [Knowledge Base & RAG](/docs/tools/file-search/how-file-search-works)
- [HTTP Tool](/docs/tools/http-tool)
- [App Connection Tool](/docs/tools/app-connection-tool)
- [Website Payload Tool](/docs/tools/website-payload-tool)

## Coming Later: Multiple Skills

In the future, a single agent will be able to have additional skills. Each skill can have its own instructions, knowledge, and tools.

That will make it easier for one agent to handle different jobs, such as product support, account actions, and scheduling, while still feeling like one consistent chatbot to the user.

**Learn more:** [What Are Agent Skills?](https://predictabledialogs.com/learn/what-are-agent-skills)
