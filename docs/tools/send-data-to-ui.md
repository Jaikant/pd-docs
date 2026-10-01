---
title: Send Data to UI
description: Send structured JSON from a skill to your website or an in-chat renderer.
---

# Send Data to UI

Use **Send data to UI** when the assistant should generate structured JSON for your website. The tool appears under **Knowledge and actions** and then **Website UI** in the Predictable Dialogs Dashboard.

Your website can display the data inside the conversation with `uiRenderers`, receive it outside the conversation with `onToolResult`, or use both. Unlike [Request user input](/docs/tools/request-user-input), this tool has completed before its output renderer runs; the assistant is not waiting for a visitor response.

## Configure the Tool

1. In your agent's **Knowledge and actions** section, click **Website UI**, then select **Send data to UI**.
2. Label the tool and describe when the assistant should use it.
3. Under **Inputs**, define the JSON fields the assistant should generate. You can add fields individually, import example JSON, or paste a supported JSON Schema object.
4. Save the tool. Open its three-dot menu and select **Copy tool name**. Use that name as the key in [`uiRenderers`](/docs/channels/web/ui-renderers) or the name checked by [`onToolResult`](/docs/channels/web/advanced-usage/tool-result-callback) on your website.


## Display Output Inside the Conversation

Register a [renderer](/docs/channels/web/ui-renderers) under the copied tool name.

```js
import Agent from '@agent-embed/js/web';

Agent.initStandard({
  agentName: 'your-agent-name',
  uiRenderers: {
    show_product_card: (container, ui) => {
      const product = ui && typeof ui === 'object' ? ui : {};
      const card = document.createElement('article');
      const title = document.createElement('h3');
      title.textContent = typeof product.name === 'string'
        ? product.name : 'Product';
      card.append(title);
      container.append(card);
    },
  },
});
```

The renderer receives the successful JSON output. Each invocation gets its own container. An error result does not mount the output renderer.

Output renderers do not receive [`requestSubmit()`](/docs/api-reference/custom-agent-ui#request-submit) or [`requestCancel()`](/docs/api-reference/custom-agent-ui#request-cancel); those methods are for pending [Request user input](/docs/tools/request-user-input) UI.

See [Render Custom UI in the Conversation](/docs/channels/web/ui-renderers) for cleanup, styling, and framework examples.

## Use Output Elsewhere on the Page

Use `onToolResult` when the completed output should update a page panel, call website code, or trigger an app workflow outside the chat transcript:

```js
Agent.initStandard({
  agentName: 'your-agent-name',
  onToolResult: (result) => {
    if (result.toolName !== 'show_product_card') return;
    if (result.status !== 'success') return;
    updateProductPanel(result.output);
  },
});
```

`onToolResult` runs after the assistant response finishes; it is not required for in-chat rendering and does not submit pending input. See the [onToolResult callback guide](/docs/channels/web/advanced-usage/tool-result-callback) for its result shape and error handling. These props work with Standard, Bubble, and Popup widgets.
