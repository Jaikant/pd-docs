---
title: Activity
---

# Activity

Activity shows tool invocations for an MCP server, helping you understand what external agents called and what each tool returned.

## Open activity

Open your server from **MCP servers** and select **Activity** in the sidebar. You can also click **View activity** on its dashboard card.

The list shows each invocation's tool, client, status, and time. Activity appears after an external client calls a tool; creating a server or adding a tool alone does not create an invocation.

## Inspect an invocation

Click a tool invocation to open its details:

- **Inputs** sent by the client.
- **Result** returned by the tool.
- **Status** and any recorded error message.
- **Time and duration**, when available.
- **Client details**, when available.

Use these details to check that the client supplied the expected arguments and that the tool returned the intended result. For failed calls, review the error and the tool's configuration on the **Tools** tab.

MCP Activity records tool calls. Agent conversations and their tool calls remain in [Sessions](/docs/features/sessions).

To add or adjust tools, see [Configuration and tools](/docs/mcp-servers/configuration).
