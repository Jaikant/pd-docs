---
description: Use completed tool outputs from your web widget with the onToolResult callback
---

# onToolResult Callback

The `onToolResult` prop lets your website receive completed tool outputs from an assistant response. Use it when a tool result should update your page UI, populate a custom panel, or render structured data outside the chat transcript.

`onToolResult` only runs after an assistant response has finished. It fires once for each completed tool invocation and includes both successful and failed tool calls.

## Result Shape

Successful tool calls return:

```ts
{
  toolName: string;
  status: 'success';
  output: unknown;
}
```

Failed tool calls return:

```ts
{
  toolName: string;
  status: 'error';
  error: string;
}
```

The callback does not expose tool call IDs, tool inputs, provider metadata, HTTP status, timing, raw AI SDK parts, or internal execution fields.

## Basic Usage

```js
Agent.initStandard({
  agentName: 'your-agent-name',
  onToolResult: (result) => {
    console.log('Tool completed:', result);
  },
});
```

The same prop works with bubble and popup widgets:

```js
Agent.initBubble({
  agentName: 'your-agent-name',
  onToolResult: (result) => {
    console.log(result);
  },
});

Agent.initPopup({
  agentName: 'your-agent-name',
  onToolResult: (result) => {
    console.log(result);
  },
});
```

## Update Your Page UI

You can use tool outputs to keep application UI in sync with the assistant. For example, if a tool named `get_order_status` returns order data, render it into a page panel:

```html
<div id="order-status"></div>

<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js';

  Agent.initStandard({
    agentName: 'support-agent',
    onToolResult: (result) => {
      if (result.toolName !== 'get_order_status') return;

      const panel = document.getElementById('order-status');
      if (!panel) return;

      if (result.status === 'error') {
        panel.textContent = `Could not load order status: ${result.error}`;
        return;
      }

      const order =
        result.output && typeof result.output === 'object'
          ? result.output
          : {};

      const heading = document.createElement('h2');
      heading.textContent = 'Order Status';

      const status = document.createElement('p');
      status.textContent = `Status: ${order.status ?? 'Unknown'}`;

      const delivery = document.createElement('p');
      delivery.textContent = `Estimated delivery: ${
        order.estimatedDelivery ?? 'Not available'
      }`;

      panel.replaceChildren(heading, status, delivery);
    },
  });
</script>

<agent-standard style="width: 100%; height: 600px;"></agent-standard>
```

## Generate Custom UI From Tool Outputs

Tool results are useful when your webapp needs more than a chat bubble. You can let the assistant call tools, then use the structured output to render a product card, account summary, itinerary, dashboard widget, or any other application UI.

```js
Agent.initStandard({
  agentName: 'shopping-agent',
  onToolResult: (result) => {
    if (result.toolName !== 'recommend_products') return;

    const container = document.querySelector('[data-product-results]');
    if (!container) return;

    if (result.status === 'error') {
      container.replaceChildren('Recommendations are unavailable right now.');
      return;
    }

    const output =
      result.output && typeof result.output === 'object'
        ? result.output
        : {};
    const products = Array.isArray(output.products)
      ? output.products
      : [];

    container.replaceChildren(
      ...products.map((product) => {
        const card = document.createElement('article');
        const title = document.createElement('h3');
        const summary = document.createElement('p');
        const link = document.createElement('a');

        card.className = 'product-card';
        title.textContent = product.name;
        summary.textContent = product.summary;
        link.href = product.url;
        link.textContent = 'View product';
        card.replaceChildren(title, summary, link);
        return card;
      })
    );
  },
});
```

Keep this UI separate from the chatbot messages. The chat transcript remains controlled by the widget, while `onToolResult` gives your page a clean signal for rendering custom experiences from completed tool outputs.

## Behavior Notes

- The callback fires after the assistant response completes, not while intermediate tool states are streaming.
- One assistant response can produce multiple callback calls if it used multiple tools.
- Existing or restored conversation history does not trigger the callback.
- Tool results are emitted once per completed tool invocation in the current browser session.
