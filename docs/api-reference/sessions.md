---
title: 'Sessions'
hide_table_of_contents: false
---

Use these endpoints to read session and conversation data for an agent.

All endpoints require:

- `Authorization: Bearer $PD_ACCESS_TOKEN`

## Get Sessions

```
GET https://app.predictabledialogs.com/v1/agents/{agentId}/sessions
```

Gets all sessions for an agent.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/agents/cm11onfgu01n1opn7g7ar5ktm/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Request Body

No request body required.

### Returns

Returns a list of sessions for the specified agent.

```json
[
  {
    "id": "cm11w01ye01ruopn73dtfonf0",
    "createdAt": "2024-09-14T08:30:08.871Z",
    "updatedAt": "2024-09-14T08:30:08.871Z",
    "sessionId": "a49nba"
  }
]
```

## Get Conversations

```
GET https://app.predictabledialogs.com/v1/agents/{agentId}/sessions/{sessionId}/conversations
```

Gets all conversations for a session.

You can get the `sessionId` from `GET /v1/agents/{agentId}/sessions`.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/agents/cm11onfgu01n1opn7g7ar5ktn/sessions/a49nbb/conversations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Request Body

No request body required.

### Returns

Returns a list of conversations for the specified session.

```json
[
  {
    "id": "cm11w01yw01rvopn7dkrrqxmv",
    "createdAt": "2024-09-14T08:30:08.888Z",
    "messageType": "user",
    "message": "Hi"
  },
  {
    "id": "cm11w01zp01rwopn7orr26ava",
    "createdAt": "2024-09-14T08:30:08.917Z",
    "messageType": "assistant",
    "message": "You can change this **welcome message** or remove it completely.\n\nLogin to <a href=\"https://predictabledialogs.com\" style=\"text-decoration: underline;\">Predictable Dialogs</a> then click on your agent and go to \"settings\" and update or remove this message."
  }
]
```
