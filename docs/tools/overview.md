---
title: Tools Overview
sidebar_position: 1
---

# Tools

**Estimated Time: 2 minutes**

Tools are capabilities used inside a skill. They let a skill search your knowledge base, call your HTTP endpoints, connect to supported apps, or send structured JSON back to the website where the chatbot is embedded.

You add tools from **Knowledge and actions** in the chatbot agent builder. Each tool has a name, a short description that helps the assistant know when to use it, and the configuration needed to run it.

## Available Tool Types

### Knowledge Base & RAG

Use uploaded documents, FAQs, policies, product information, or other files as a searchable knowledge base. Predictable Dialogs processes the files into chunks, stores them in a vector store, and retrieves relevant chunks when the skill needs document-backed answers.

**Learn more:** [How Knowledge Base & RAG works](/docs/tools/file-search/how-file-search-works)

### HTTP Tool

Call your own API endpoints with `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`. Use HTTP tools to look up live data, create records, update systems, or trigger workflows through your backend.

**Learn more:** [HTTP Tool](/docs/tools/http-tool)

### App Connection Tool

Connect a supported app account and choose which app actions the skill can use. Google Calendar is currently supported for searching available slots and booking appointments.

**Learn more:** [App Connection Tool](/docs/tools/app-connection-tool)

### Website Payload Tool

Send structured JSON from the assistant to your website. Your website can receive the completed payload through the widget `onToolResult` callback and use it to update UI, call JavaScript, or trigger application workflows.

**Learn more:** [Website Payload Tool](/docs/tools/website-payload-tool)

## How Tools Run

The assistant decides when to use a tool based on the skill instructions, the tool name, and the tool description. You can also configure advanced rules for when a tool is eligible, whether it should run after another item, or whether it should be skipped for some messages.

Tool results are visible in Sessions so you can inspect what ran, what inputs were sent, and what output came back.

## Getting Started

1. Open your chatbot agent.
2. Go to **Knowledge and actions**.
3. Add a Knowledge item or an Action item.
4. Name the tool and describe when the assistant should use it.
5. Configure the tool, test it when testing is available, and review tool usage in Sessions.

## Best Practices

- Keep each tool focused on one job.
- Use clear tool names and usage descriptions.
- Keep input schemas as small as practical.
- Use pass-through auth for user-specific app actions whenever the action should run with the signed-in user's permissions.
- Review Sessions after testing so you can see the exact tool inputs and outputs.

## Next Steps

- [Skills](/docs/skills)
- [HTTP Tool](/docs/tools/http-tool)
- [Knowledge Base & RAG](/docs/tools/file-search/how-file-search-works)
- [Pass-through auth](/docs/channels/web/advanced-usage/pass-through-auth)
