---
title: 'AI Resources'
hide_table_of_contents: false
---

Use these endpoints to create AI resources and attach them to agents.

AI resources define the model and instructions an agent uses. A common workflow is:

1. Create an AI resource with `POST /v1/ai`.
2. Attach it to an agent with `PUT /v1/agents/{agentId}/ai`.
3. Use `GET /v1/agents/{agentId}/ai` to confirm the agent's current AI resource.

All endpoints require:

- `Authorization: Bearer $PD_ACCESS_TOKEN`

## AI Resource Object

```json
{
  "id": "cmai123resource",
  "name": "Support AI",
  "provider": "OPENAI",
  "type": "openai",
  "model": "gpt-4.1-mini",
  "instructions": "Answer customer support questions clearly.",
  "updatedAt": "2026-05-02T10:00:00.000Z"
}
```

### Field Notes

| Field | Description |
| --- | --- |
| `id` | Predictable Dialogs AI resource ID. Use this value when attaching the AI resource to an agent. |
| `model` | Model used by the AI resource. |
| `instructions` | Instructions used by the AI resource. |

## List AI Resources

```
GET https://app.predictabledialogs.com/v1/ai
```

Returns all AI resources available for your access token context.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/ai \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "data": [
    {
      "id": "cmai123resource",
      "name": "Support AI",
      "provider": "OPENAI",
      "type": "openai",
      "model": "gpt-4.1-mini",
      "instructions": "Answer customer support questions clearly.",
      "updatedAt": "2026-05-02T10:00:00.000Z"
    }
  ]
}
```

## Create AI Resource

```
POST https://app.predictabledialogs.com/v1/ai
```

Creates a new AI resource.

### Request Body

```json
{
  "name": "Support AI",
  "instructions": "Answer customer support questions clearly."
}
```

### Body Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | No | Display name for the AI resource. Defaults to `AI` when omitted. |
| `instructions` | string | No | Instructions used by the AI resource. |
| `apiKeyValue` | string | No | OpenAI API key to use for this resource. |
| `model` | string | No | Model to use when `apiKeyValue` is provided. |

Custom model selection requires `apiKeyValue` in the same request. If `apiKeyValue` is omitted, Predictable Dialogs uses platform defaults and creates the resource with `gpt-4.1-mini`; any submitted `model` value is not applied.

### Example Request

```bash
curl -X POST https://app.predictabledialogs.com/v1/ai \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "name": "Support AI",
    "instructions": "Answer customer support questions clearly."
  }'
```

This creates an AI resource using `gpt-4.1-mini`.

### Example With API Key And Custom Model

```bash
curl -X POST https://app.predictabledialogs.com/v1/ai \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "name": "Support AI",
    "instructions": "Answer customer support questions clearly.",
    "apiKeyValue": "sk-...",
    "model": "gpt-4.1"
  }'
```

### Returns

```json
{
  "data": {
    "id": "cmai123resource",
    "name": "Support AI",
    "provider": "OPENAI",
    "type": "openai",
    "model": "gpt-4.1",
    "instructions": "Answer customer support questions clearly.",
    "updatedAt": "2026-05-02T10:00:00.000Z"
  }
}
```

## Get AI Resource

```
GET https://app.predictabledialogs.com/v1/ai/{aiId}
```

Gets a single AI resource by `aiId`.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/ai/cmai123resource \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "data": {
    "id": "cmai123resource",
    "name": "Support AI",
    "provider": "OPENAI",
    "type": "openai",
    "model": "gpt-4.1-mini",
    "instructions": "Answer customer support questions clearly.",
    "updatedAt": "2026-05-02T10:00:00.000Z"
  }
}
```

## Update AI Resource

```
PATCH https://app.predictabledialogs.com/v1/ai/{aiId}
```

Updates an AI resource.

### Request Body

```json
{
  "name": "Updated Support AI",
  "instructions": "Answer customer support questions in a concise tone."
}
```

### Body Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | No | New display name. When provided, it must be a non-empty string. |
| `instructions` | string | No | New instructions for the AI resource. |

The model cannot be changed with this endpoint.

### Example Request

```bash
curl -X PATCH https://app.predictabledialogs.com/v1/ai/cmai123resource \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "name": "Updated Support AI",
    "instructions": "Answer customer support questions in a concise tone."
  }'
```

### Returns

```json
{
  "data": {
    "id": "cmai123resource",
    "name": "Updated Support AI",
    "provider": "OPENAI",
    "type": "openai",
    "model": "gpt-4.1-mini",
    "instructions": "Answer customer support questions in a concise tone.",
    "updatedAt": "2026-05-02T10:05:00.000Z"
  }
}
```

## Delete AI Resource

```
DELETE https://app.predictabledialogs.com/v1/ai/{aiId}
```

Deletes an AI resource.

AI resources attached to agents are not deleted. To delete an attached AI resource, first detach it with the [Detach AI Resource From Agent](#detach-ai-resource-from-agent) endpoint. If the resource is still attached, `deletedAssistants` is empty and `status` contains a message explaining where the resource is attached.

### Example Request

```bash
curl -X DELETE https://app.predictabledialogs.com/v1/ai/cmai123resource \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "ok": true,
  "deletedAssistants": [
    {
      "id": "cmai123resource",
      "name": "Support AI"
    }
  ],
  "status": []
}
```

## Get Agent AI Resource

```
GET https://app.predictabledialogs.com/v1/agents/{agentId}/ai
```

Gets the AI resource currently attached to an agent.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/agents/cmabc123agent/ai \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "data": {
    "aiId": "cmai123resource",
    "name": "Support AI",
    "provider": "OPENAI",
    "type": "openai",
    "model": "gpt-4.1-mini"
  }
}
```

If the agent does not have an AI resource attached, `data` is `null`.

## Attach AI Resource To Agent

```
PUT https://app.predictabledialogs.com/v1/agents/{agentId}/ai
```

Attaches an AI resource to an agent. If another AI resource is already attached, it is replaced.

### Request Body

```json
{
  "aiId": "cmai123resource"
}
```

### Example Request

```bash
curl -X PUT https://app.predictabledialogs.com/v1/agents/cmabc123agent/ai \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "aiId": "cmai123resource"
  }'
```

### Returns

```json
{
  "data": {
    "aiId": "cmai123resource",
    "name": "Support AI",
    "provider": "OPENAI",
    "type": "openai",
    "model": "gpt-4.1-mini"
  }
}
```

## Detach AI Resource From Agent

```
DELETE https://app.predictabledialogs.com/v1/agents/{agentId}/ai
```

Removes the AI resource attached to an agent.

### Example Request

```bash
curl -X DELETE https://app.predictabledialogs.com/v1/agents/cmabc123agent/ai \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "data": null
}
```
