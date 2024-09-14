---
title: ''
hide_table_of_contents: false
---

## Making Requests
You can paste the command below into your terminal to run your first API request. Make sure to replace $PD_ACCESS_TOKEN with your secret access token. And agentId with your agent id. 
You can get the agent id from the url in the app.

```
curl https://app.predictabledialogs.com/v1/agents/{agentId}/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
```

This request queries the agent for all sessions. You should get a response back that resembles the following:
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