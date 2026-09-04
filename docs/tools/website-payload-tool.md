---
title: Website Payload Tool
sidebar_position: 5
description: Send structured JSON from a skill to your website.
---

# Website Payload Tool

**Estimated Time: 4 minutes**

The Website Payload Tool lets the assistant generate structured JSON and send it back to the website where the chatbot is embedded. This action appears as **Website Payload** under **Knowledge and actions**.

Use it when the chatbot should drive something in your page instead of only replying with text. Your website receives the completed payload through the widget `onToolResult` callback.

## How It Works

1. Add a Website Payload action to the skill.
2. Name the payload and describe when the assistant should send it.
3. Define the JSON fields the assistant should generate.
4. Add `onToolResult` to your web widget.
5. In your website code, inspect the tool result and update the page, call JavaScript, or trigger an app workflow.

Predictable Dialogs returns the generated JSON as the tool output. Your website decides what to do with it.

## Input Schema

The schema defines the JSON payload the assistant should generate.

You can create it by:

- Adding fields one by one.
- Pasting example JSON and importing the inferred fields.
- Pasting a supported JSON Schema object.

Supported field types include text, number, integer, true/false, object, list, and choice.

## Using `onToolResult`

The widget `onToolResult` callback runs after an assistant response finishes. It fires once for each completed tool invocation.

```js
Agent.initStandard({
  agentName: 'your-agent-name',
  onToolResult: (result) => {
    if (result.toolName !== 'show_product_card') return;
    if (result.status !== 'success') return;

    renderProductCard(result.output);
  },
});
```

The same prop works with standard, bubble, and popup widgets.

**Learn more:** [onToolResult callback](/docs/channels/web/advanced-usage/tool-result-callback)

## Common Uses

- Render a product card, order summary, calendar, table, or chart.
- Update part of the page after the assistant gathers information.
- Call a website function with assistant-generated JSON.
- Trigger a frontend workflow while keeping the chat transcript controlled by the widget.

Keep UI rendering in your website code. The tool provides structured data; your application controls how it looks and behaves.
