---
title: 'Authentication'
hide_table_of_contents: false
---

# Authentication

Predictable Dialogs uses access tokens to authenticate API requests and access-token-protected MCP servers.

## Create an access token

1. Sign in to Predictable Dialogs.
2. Open [keys](https://predictabledialogs.com/keys#personal-tokens).
3. Click **Create new token**.
4. Enter a name that identifies its purpose, such as **Codex MCP** or **Claude Code MCP**, then click **Create**.
5. Click **Copy token** and store the value securely before leaving or refreshing the page. The full token is only shown when you create it.

## Use your access token

Include your token in the `Authorization` header of each API request:

```http
Authorization: Bearer <your-access-token>
```

Replace `<your-access-token>` with the full value you copied, without the angle brackets. Keep the `Bearer ` prefix, including the space.

For MCP clients, follow [MCP server access](/docs/mcp-servers/access#access-token), including setup instructions for Codex and Claude Code.

## Keep tokens private

Do not publish tokens, commit them to source control, paste them into chat messages, or include them in website JavaScript. Load tokens from private configuration or an environment variable in a trusted client or backend.

If you lose a token, create a replacement and update the clients that use it. Delete an old or exposed token from the Access tokens page to revoke its access.
