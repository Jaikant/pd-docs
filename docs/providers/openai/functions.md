---
title: HTTP Tools
sidebar_position: 3
---

# HTTP Tools For OpenAI

HTTP tools are configured on the chatbot agent skill, not inside the OpenAI provider resource page.

Use the **HTTP Tool** when a skill needs to call your own API with `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`. The tool supports endpoint placeholders, input schemas, bearer token authentication, saved API connections, and pass-through auth from the web widget.

## Where To Configure It

1. Open your chatbot agent.
2. Go to **Knowledge and actions**.
3. Add an **Action**.
4. Choose **Custom API**.
5. Configure the method, endpoint, authentication, and input schema.

## Related Resources

- **[HTTP Tool](/docs/tools/http-tool)** - Configure custom API actions.
- **[Tools Overview](/docs/tools/overview)** - Explore all tool types available inside skills.
- **[Pass-through auth](/docs/channels/web/advanced-usage/pass-through-auth)** - Use the signed-in website user's token for API actions.
