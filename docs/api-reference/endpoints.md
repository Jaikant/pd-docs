---
title: ''
hide_table_of_contents: false
---

## Endpoints
End point to interact with agent data


### Get Sessions
```
GET https://app.predictabledialogs.com/v1/agents/{agentId}/sesions
```

Gets all sessions for agent

You can get the agentId by looking at the url bar of your agent it will be something like : cluut0qmh0306ltbnrmpktciw

#### Example Request
```
GET https://app.predictabledialogs.com/v1/agents/cm11onfgu01n1opn7g7ar5ktm/sessions
```
Ensure to put the correct agent id, else you would get a 500 Error

Or using curl
```
curl http://localhost:8001/v1/agents/cm11onfgu01n1opn7g7ar5ktm/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

Ensure to add your access token.

#### Request body
No request body required.

#### Returns
- 200: Successful response. Returns the list of sessions for the specified agent.
```
[
  {
    "id": "cm11w01ye01ruopn73dtfonf0",
    "createdAt": "2024-09-14T08:30:08.871Z",
    "updatedAt": "2024-09-14T08:30:08.871Z",
    "sessionId": "a49nba"
  }
]
```

#### Security
This endpoint requires authentication using a access token.


### Get Conversations 
```
GET https://app.predictabledialogs.com/v1/agents/{agentId}/sessions/{sessionId}/conversations
```

Gets all conversations for agent id and session id.

You can get the session id from the endpoint `/v1/agents/{agentId}/sessions`

#### Example Request
```
GET https://app.predictabledialogs.com/v1/agents/cluut0qmh0306ltbnrmpktciw/sessions/session123/conversations
```

Or using curl
```
curl https://app.predictabledialogs.com/v1/agents/cm11onfgu01n1opn7g7ar5ktn/sessions/a49nbb/conversations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```
Note: *Currently we are not validating the agent id, in this endpoint as session ids are unique.
but it is best to use the agent id to future proof the request.*

#### Request body
No request body required.

#### Returns
200: Successful response. Returns the list of conversations for the specified agent and session.
```
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

#### Security
This endpoint requires authentication using a access token.
