---
title: Access
---

# Access

Open your MCP server and choose **Access** in the sidebar to control who can connect. Choose **Public** or **Access token**. Changes save immediately; wait for **Access settings saved.** before connecting your client.

## Public

New servers use Public access by default. Anyone with the endpoint URL can use the configured tools without a token.

If a client sends an authorization header to a public server, the token must still be valid and belong to the server's organization. 

## Access token

Choose **Access token** to require an active Predictable Dialogs token from the same organization as the server.

1. Follow [Create an access token](/docs/api-reference/authentication#create-an-access-token).
2. In your MCP server's **Access** page, select **Access token** and wait for the saved indication.
3. Open **Tools** and copy the complete MCP endpoint URL. Make sure the server is enabled and has at least one enabled tool.
4. Choose a client guide below to configure the connection.

Include this header in each request to the MCP endpoint:

```http
Authorization: Bearer <your-access-token>
```

Replace `<your-access-token>` with the full token, without the angle brackets. Keep the space after `Bearer`. This token authenticates access to the MCP server; tools continue to use the connections configured in Predictable Dialogs.

This access mode uses a token you create in Predictable Dialogs.

## Connect your client

- [Connect to Codex](/docs/mcp-servers/access/connect-codex): use the ChatGPT app or the Codex CLI.
- [Connect to Claude Code](/docs/mcp-servers/access/connect-claude-code): configure the desktop app or CLI.
