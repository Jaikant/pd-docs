---
description: Pass the signed-in user's token from your website to API actions
---

# Pass-through Auth

Pass-through auth lets an API action use the signed-in user's token from your website. Predictable Dialogs does not store this token. The widget requests it from your page and sends it with each chat request, then the backend uses it only when an HTTP API action is configured with **Pass-through from the client**.

## Configure the API Action

In the chatbot agent builder:

1. Add or edit an API action.
2. Set the method and endpoint.
3. Choose **Pass-through from the client** for authentication.
4. Save the action.

No secret is stored for this authentication mode.

## Add getAuthToken

Pass a `getAuthToken` callback when initializing the widget. The callback is called for each chat request, so your app can refresh expired tokens before returning them.

```js
Agent.initStandard({
  agentName: 'your-agent-name',
  getAuthToken: async () => {
    return await refreshOrReadUserToken();
  },
});
```

The same prop works for bubble and popup widgets:

```js
Agent.initBubble({
  agentName: 'your-agent-name',
  getAuthToken: async () => {
    return await refreshOrReadUserToken();
  },
});

Agent.initPopup({
  agentName: 'your-agent-name',
  getAuthToken: async () => {
    return await refreshOrReadUserToken();
  },
});
```

Return the raw token string. Predictable Dialogs sends it to your HTTP endpoint as:

```http
Authorization: Bearer <token>
```

If the backend needs a pass-through token for a turn and the widget did not provide one, the chatbot returns a sign-in message from the backend. Token refresh, expiry, and validity are handled by your `getAuthToken` callback and your API.
