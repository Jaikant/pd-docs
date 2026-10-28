---
title: Configuration and tools
---

# Configuration and tools

[Create an MCP server](/docs/getting-started/create-mcp-server), then open it from **MCP servers** on the dashboard. The **Tools** tab contains its endpoint and the **Knowledge and actions** card.

## Connect an external agent

Copy the complete endpoint using the copy icon beside the URL. Add it to your external agent's MCP configuration as a remote server URL. Clients such as Claude Code and Codex can connect to remote MCP servers; follow your client's setup instructions to register the endpoint.

After adding tools, connect or refresh the server in your client so it can discover the available tools.

## Add knowledge

Click **Knowledge** in **Knowledge and actions** to add documents that external agents can search. You can also view and manage the documents from the knowledge tool.

Follow [Knowledge Base Setup](/docs/tools/file-search/setup) for upload and configuration instructions. See [How Knowledge Base & RAG works](/docs/tools/file-search/how-file-search-works) for document preparation guidance.

## Add an action

Click **Action**, then choose:

- **Use any API** to configure your own API endpoint, authentication, and inputs. Follow the [HTTP Tool guide](/docs/tools/http-tool).
- **Connect an app** to connect a supported app such as Google Calendar. Follow the [App Connection Tool guide](/docs/tools/app-connection-tool).

These use the same tool configuration as agents. Website UI tools are available for agents, not MCP servers.

## Add an existing tool

1. Click **Add existing tool**.
2. Search or browse the organization's tools, grouped by agent.
3. Select the tool to add it to this server.

Tools already attached to this server are excluded from the picker, so you cannot add the same tool twice.

Adding an existing tool shares its configuration; it does not create a copy. Editing a shared tool affects the agents and other MCP servers using it. Removing it from this server keeps it available to its other users. A tool that is no longer attached to a skill or another MCP server can be deleted.

## Inspect usage

Call a tool from your connected client, then open [Activity](/docs/mcp-servers/activity) to inspect its inputs, result, and status.
