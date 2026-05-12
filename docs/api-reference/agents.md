---
title: 'Agents'
hide_table_of_contents: false
---

Use these endpoints to create and manage agents.

Agent endpoints manage the agent record. To create AI resources and configure which AI resource an agent uses, see [AI Resources](./ai-resources).

All endpoints require:

- `Authorization: Bearer $PD_ACCESS_TOKEN`

## Get Agents

```
GET https://app.predictabledialogs.com/v1/agents
```

Returns all agents available for your access token context.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/agents \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

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

## Create Agent

```
POST https://app.predictabledialogs.com/v1/agents
```

Creates a new agent.

### Request Body

```json
{
  "name": "My Website Chatbot"
}
```

### Example Request

```bash
curl -X POST https://app.predictabledialogs.com/v1/agents \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "name": "My Website Chatbot"
  }'
```

### Returns

```json
{
  "data": {
    "id": "cmabc123agent",
    "webId": "cluut0qmh0306ltbnrmpktciw",
    "name": "My Website Chatbot",
    "createdAt": "2026-05-02T10:00:00.000Z",
    "updatedAt": "2026-05-02T10:00:00.000Z",
    "isPublic": false,
    "publicSlug": null
  }
}
```

## Get Agent

```
GET https://app.predictabledialogs.com/v1/agents/{agentId}
```

Gets a single agent by `agentId`.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/agents/cmabc123agent \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

## Update Agent Display Name

```
PATCH https://app.predictabledialogs.com/v1/agents/{agentId}
```

Updates the agent display name.

### Request Body

```json
{
  "name": "Updated Agent Name"
}
```

### Example Request

```bash
curl -X PATCH https://app.predictabledialogs.com/v1/agents/cmabc123agent \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "name": "Updated Agent Name"
  }'
```

## Delete Agent

```
DELETE https://app.predictabledialogs.com/v1/agents/{agentId}
```

Deletes an agent.

### Example Request

```bash
curl -X DELETE https://app.predictabledialogs.com/v1/agents/cmabc123agent \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "ok": true
}
```
