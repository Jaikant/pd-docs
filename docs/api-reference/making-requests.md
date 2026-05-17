---
title: 'Making Requests'
hide_table_of_contents: false
---

You can paste the command below into your terminal to run your first API request.

Replace `$PD_ACCESS_TOKEN` with your secret access token.

```bash
curl https://app.predictabledialogs.com/v1/agents \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

This request returns your agents and identifiers.

```json
{
  "data": [
    {
      "id": "cmabc123agent",
      "webId": "cluut0qmh0306ltbnrmpktciw",
      "name": "My Website Chatbot",
      "createdAt": "2026-05-02T10:00:00.000Z",
      "updatedAt": "2026-05-02T10:00:00.000Z",
      "isPublic": false,
      "publicSlug": null
    }
  ]
}
```

Use:

- `id` for `/v1/agents` lifecycle endpoints.

The `webId` is the identifier used to open an agent on the webapp.
