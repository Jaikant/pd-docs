---
title: Create MCP server
---

# Create MCP server

An MCP server exposes your tools to external agents through a single endpoint. You can share knowledge, connect apps, or make your own APIs available to a client that supports remote MCP servers.

## Create your server

1. [Sign in to Predictable Dialogs](https://predictabledialogs.com/sign-in).
2. On the dashboard, click **Create MCP server**. You can also choose it from the **Create** menu.
3. Enter a server name (optional).
4. Click **Create**.

Your server opens on the **Tools** page. Predictable Dialogs generates its endpoint automatically. Use the copy icon beside the endpoint to copy the complete URL.

## Edit the endpoint after creation

Optionally you can **Edit endpoint** if you want to.
You can edit it from either of these menus:

- The three-dot action menu on your server's card on the **MCP servers** page.
- The three-dot menu at the top of the server's **Tools** page.

Enter the part after `/mcp/` and save. You do not need to enter the full URL. If the endpoint is already in use, choose a different value.

Copy the updated URL and update any connected MCP clients to use it.

## Next steps

MCP servers use **Public** access by default. Open **Access** in the server sidebar to require an access token. See [MCP server access](/docs/mcp-servers/access) for token creation and client setup.

Follow [Configuration and tools](/docs/mcp-servers/configuration) to add tools and connect the endpoint to an external agent. Once a client calls a tool, inspect the result in [Activity](/docs/mcp-servers/activity).
