---
description: Pass dynamic website context into your web chatbot
---

# Context Variables

`contextVariables` lets your website pass dynamic page, user, or account context into a web chatbot session. Use it when the assistant should know where the visitor is, what plan they are on, which product they are viewing, or which account-specific value should guide the conversation.

These values are available to your agent during the session. They can be used in instruction placeholders and can help custom API tools receive the right path or query values.

## Basic Usage

Pass `contextVariables` when initializing the widget:

```js
Agent.initStandard({
  agentName: 'support-agent',
  contextVariables: {
    accountId: 'acct_123',
    plan: 'Pro',
    currentPage: 'pricing',
    locale: 'en-US',
  },
});
```

The same prop works with bubble and popup widgets:

```js
Agent.initBubble({
  agentName: 'support-agent',
  contextVariables: {
    accountId: 'acct_123',
    currentPage: 'checkout',
  },
});

Agent.initPopup({
  agentName: 'support-agent',
  contextVariables: {
    accountId: 'acct_123',
    productId: 'prod_456',
  },
});
```

You can send any property names. Simple strings, numbers, booleans, arrays, and small objects are supported.

The widget also reads query parameters from the current page URL and includes them as context variables. Values passed directly in `contextVariables` take precedence over matching query parameter names.

## Use in Instructions

Reference context variables in your agent's instructions with `{{variableName}}` placeholders:

```txt
The visitor is on the {{currentPage}} page.
Their plan is {{plan}}.
Use locale {{locale}} when formatting dates, currency, and support links.
```

If your website initializes the widget with:

```js
contextVariables: {
  currentPage: 'pricing',
  plan: 'Pro',
  locale: 'en-US',
}
```

Then the assistant receives instructions with those values filled in for that session.

This works for instructions that shape the assistant's skill and personality behavior. For example, you can tell the assistant to change tone for enterprise visitors, recommend documentation for the current page, or avoid asking for an account ID that your page already provided.

If a placeholder does not have a matching context variable, it is left unchanged.

## Use with Custom API Tools

Context variables are also useful when your assistant calls custom API tools. They let you provide values from your website that the assistant can use as tool inputs.

For example, if your custom API tool is configured with an endpoint like:

```txt
/api/accounts/{accountId}/orders?locale={locale}
```

Pass the matching values from your page:

```js
Agent.initStandard({
  agentName: 'account-support',
  contextVariables: {
    accountId: 'acct_123',
    locale: 'en-US',
  },
});
```

Then include those values in the instructions for the assistant:

```txt
When checking account orders, use accountId {{accountId}} and locale {{locale}}.
```

When the assistant calls the API tool with `accountId` and `locale`, Predictable Dialogs substitutes those values into the configured path and query parameters.

## Best Practices

- Use stable, descriptive keys such as `accountId`, `currentPage`, `locale`, `plan`, or `productId`.
- Keep key names consistent between your widget configuration, instruction placeholders, and API tool parameters.
- Do not pass secrets, private tokens, or highly sensitive data through `contextVariables`. For signed-in user tokens, use [Pass-through Auth](/docs/channels/web/advanced-usage/pass-through-auth).
- Prefer small JSON-safe values so the assistant receives clear context without unnecessary noise.
- Only include values that are useful for the conversation or tool calls.
