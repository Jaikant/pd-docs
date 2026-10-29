---
title: Connect to Claude Code
---

# Connect to Claude Code

Add your PD MCP server through **Connectors** in the Claude app.

## Before you start

Open your MCP server in the PD dashboard and copy its complete endpoint from **Tools**. Make sure the server is enabled and has at least one enabled tool. Use the hosted HTTPS URL, such as `https://app.predictabledialogs.com/mcp/YOUR_ENDPOINT`.

Lets start with a MCP server which has [Public access](/docs/mcp-servers/access#public). 

## Open Connectors

1. Click your **profile image** in the bottom-left corner of the Claude app.
2. Click **Settings**.
3. Under **Customize**, select **Connectors**.
4. Click **+ Add**, then **Add custom connector**.

## Enter the server details

1. In **Name**, enter a name of your choice, such as `my_mcp_server`. It does not need to match the server name in PD.
2. In **MCP server URL**, paste the complete endpoint copied from the PD dashboard.
3. Click **Continue** and then **Continue anyway** if prompted to proceed.

![Claude app Add custom connector dialog with Name and MCP server URL fields](/img/mcp-servers/claude-add-custom-connector.png)

## Choose authentication and connect

1. Under **Authentication**, select **No sign-in**.
2. Click **Add** to add the MCP server.
3. Then click **Connect**.

The screenshot shows the authentication choices before selecting **No sign-in**:

![Claude custom connector authentication options, including No sign-in](/img/mcp-servers/claude-connector-authentication.png)

### If your PD MCP server requires an access token

In the Authentication modal, look for **Request headers**, add a header before clicking **Add**:

- **Key:** `Authorization`
- **Value:** `Bearer ` followed by the full token you [created in PD](/docs/api-reference/authentication#create-an-access-token).

See [Claude's custom connector guide](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) for request-header support.

## Alternative: Claude Code CLI

For an access-token-protected server, first [create a PD access token](/docs/api-reference/authentication#create-an-access-token) in the server's organization. With the Claude Code CLI installed, register the server from a terminal:

```bash
claude mcp add --transport http --scope user my_mcp_server \
  "https://app.predictabledialogs.com/mcp/YOUR_ENDPOINT" \
  --header "Authorization: Bearer YOUR_PD_ACCESS_TOKEN"
```

Replace the placeholders before running it. A command containing your token may be saved in shell history; keep that history private.

Run `claude mcp list` to check the connection, or enter `/mcp` in a Claude Code terminal session. See the [official Claude Code MCP instructions](https://code.claude.com/docs/en/mcp#option-1-add-a-remote-http-server).
