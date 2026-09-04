---
title: HTTP Tool
sidebar_position: 3
description: Call your own HTTP APIs from a skill.
---

# HTTP Tool

**Estimated Time: 5 minutes**

The HTTP Tool lets a skill call your API endpoints during a conversation. This action appears as **Custom API** under **Knowledge and actions**.

Use it when the chatbot needs live data or needs to perform an action through your backend, such as looking up an order, creating a lead, updating an account, or triggering an internal workflow.

## HTTP Methods

The HTTP Tool supports:

| Method | Use it for |
| --- | --- |
| `GET` | Reading or searching data. Prefer path and query inputs. |
| `POST` | Creating records, submitting forms, or triggering workflows. |
| `PUT` | Replacing a resource. |
| `PATCH` | Updating part of a resource. |
| `DELETE` | Deleting or cancelling a resource. |

Each action has one endpoint URL. Predictable Dialogs calls that endpoint when the assistant chooses the tool.

## Endpoint

Enter the full endpoint URL, including any path or query placeholders the assistant should fill.

Path parameters use braces:

```http
GET https://api.example.com/orders/{orderId}
```

Query parameters are detected when the query value is exactly a placeholder:

```http
GET https://api.example.com/orders?status={status}&customerId={customerId}
```

When the tool runs:

- Path inputs replace matching `{name}` placeholders in the URL.
- Query inputs are sent as URL query parameters.
- Remaining inputs are sent as JSON request data.

For `GET` actions, keep inputs in the path or query string unless your API explicitly expects a request body.

## Authentication

Choose one authentication mode for each HTTP Tool.

### No Authentication

Use this for public endpoints or endpoints that do not require credentials.

### Saved Connection

Use an existing API connection that was already saved in Predictable Dialogs. Saved connections let you reuse the same credential across multiple HTTP tools for the same API.

### New Bearer Token

Use this when your endpoint expects:

```http
Authorization: Bearer <token>
```

Give the connection a name and paste the bearer token. Predictable Dialogs stores the credential securely and uses it when the tool runs.

### Pass-through From The Client

Use this when the HTTP Tool should call your backend with the signed-in website user's token. Predictable Dialogs does not store this token. The web widget requests it from your page through the `getAuthToken` callback and forwards it as a bearer token for the current request.

Set the tool authentication to **Pass-through from the client**, then configure `getAuthToken` in the widget.

**Learn more:** [Pass-through auth](/docs/channels/web/advanced-usage/pass-through-auth)

## Input Schemas

The input schema tells the assistant what information it must provide before calling the endpoint.

You can create the schema in three ways:

- Add inputs one by one in the UI.
- Paste example JSON and let Predictable Dialogs infer the fields.
- Paste an existing supported JSON Schema object.

You can also copy the current schema from the schema editor.

Supported field types include text, number, integer, true/false, object, list, and choice. After importing from example JSON, review the generated fields and mark required fields or choices yourself.

Path and query inputs must be top-level primitive fields. If your endpoint contains `{orderId}`, the schema needs a top-level input named `orderId`. If your endpoint contains `?status={status}`, the schema needs a top-level input named `status`.

Any top-level input marked as **Path** or **Query** is used in the URL. Inputs not used as path or query values are sent as request data.

## Testing

Use **Test request** from the builder to send a real request with sample values. The test result shows whether the request succeeded, the HTTP status when available, and the returned response.

For pass-through auth tests, enter a temporary token. The token is used only for that test request and is not saved.

After testing in a conversation, open Sessions to inspect the tool call, arguments, endpoint response, and status.
