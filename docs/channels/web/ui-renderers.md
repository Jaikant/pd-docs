---
title: Render UI in the Conversation
description: Interactive UI inside the web widget.
---

# Render Tool UI in the Conversation

`uiRenderers` lets your website mount custom UI inside the agent UI. 

When the LLM runs a tool, the tool’s output is sent to the widget code. You can use that output to render any UI you want.
This is different from the [Request user input tool](/docs/tools/request-user-input), which collects input from the user and sends it to the LLM. We use the same rendering mechanism for both cases.


## Getting Started
In the Predictable Dialogs dashboard, open the tool card's three-dot menu and select **Copy tool name**. We will use the `uiRenderers` prop available on the agent widget to display the custom ui. The prop works with Standard, Bubble, and Popup widgets.

## Example: Showing a Product Card in the agent UI

Lets say the tool name we copied from the dashboard is `show_product`
And we want to show a product card when the LLM calls this tool in the agent ui.

The code for that would be:

```js
import Agent from '@agent-embed/js/web';

function renderProductCard(container, toolOutput) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.textContent = toolOutput && typeof toolOutput.name === 'string' ? toolOutput.name : 'Product';
  container.append(card);
}

Agent.initStandard({
  agentName: 'your-agent-name',
  uiRenderers: {
    show_product: renderProductCard,
  },
  customCss: '.product-card { padding: 12px; border: 1px solid #d1d5db; }',
});
```

In the above, `renderProductCard` would be a function defined in your code, which would render your ui inside the agent ui.

We can also pass custom css for this card via the `customCss` prop.

The function we use for the ui, in this case `renderProductCard` takes two arguments: the first argument is the mounting element, where your custom ui would be mounted. The second argument is the tool output received from the predictable dialogs backend, your function uses this data to build the card.

In the above example we have given the names `container` and `toolOutput` to these two arguments. 
You can give any name of your choice. The order of the argument determines what it is used for not the name.


## Performing Actions on the UI

| Backend tool | LLM waiting? | Handling UI Actions | What your code should do |
| --- | --- | --- | --- |
| [Request user input](/docs/tools/request-user-input) | Yes | [LLM-routed](#llm-routed-actions-using-the-request-user-input-tool): submit or cancel actions return to the model | Route the visitor's response through `requestSubmit()` or `requestCancel()` so the conversation continues. |
| Any other tool | No | [Local / app-owned](#local-or-app-owned-actions-using-the-results-from-any-tool) | A normal button handler can call the app's backend. The LLM is not blocked, so nothing must be sent back into the conversation. |


### Local or App-Owned Actions (Using the results from any tool)

When rendering a UI from a tool output, use event handlers in your renderer to call your application's APIs, update local state or the DOM, or open a modal. The model does not see these interactions unless your application separately sends the result into the conversation.

### LLM-Routed Actions (Using the request user input tool)

Use a deliberate conversation submission when the model should decide what happens next. For a pending Request user input tool, the renderer calls `requestSubmit()` to send values from `getValues()`, or `requestCancel()` to cancel the request. The backend resolves the pending call and resumes the agent loop, where the model can reason, call tools, or produce another response. An application can also explicitly send a separate chat message through its own integration; an ordinary click handler alone does not do that.

### Don't perform actions while rendering
Rendering should only construct UI. Do not submit an order or update a database just because a renderer runs: the widget may call it again during streaming or when restoring a conversation after reload. Put actions in explicit button or other control handlers instead.

## Request User Input (tool call from the LLM)

When the LLM needs user input, it issues a tool call. The payload includes the **tool name** plus optional **toolData** (arguments that describe what the form/picker/confirmation should look like).

Your job is to render a suitable UI (form, picker, confirmation dialog, etc.) with your own **Submit** and **Cancel** buttons.  
From those buttons call:

- [`requestSubmit()`](/docs/api-reference/custom-agent-ui#request-submit) → submits the answer  
- [`requestCancel()`](/docs/api-reference/custom-agent-ui#request-cancel) → tells the LLM the user cancelled

The widget still owns the pending tool-call request.  
Your renderer must return:

- [`getValues()`](/docs/api-reference/custom-agent-ui#get-values) – supplies the answer that will be sent back  
- [`validate()`](/docs/api-reference/custom-agent-ui#validate) (optional) – can block submission  

The widget passes `initialValues` to the renderer when it can restore a previously submitted response.

### Example: simple email form

This `collect_email` tool has no custom Inputs. The renderer uses a fixed email label and does not need tool arguments.

```js
function renderEmailForm(container, _ui, { initialValues, requestSubmit, requestCancel }) {
  const form = document.createElement('form');

  const label = document.createElement('label');
  label.textContent = 'Email address';

  const input = document.createElement('input');
  input.type = 'email';
  input.name = 'email';
  input.autocomplete = 'email';
  input.required = true;
  input.value =
    initialValues && typeof initialValues === 'object' && typeof initialValues.email === 'string'
      ? initialValues.email
      : '';

  label.append(input);

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Submit';

  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.textContent = 'Cancel';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    void requestSubmit?.();
  });

  cancel.addEventListener('click', () => {
    void requestCancel?.();
  });

  form.append(label, submit, cancel);
  container.append(form);

  return {
    getValues: () => ({ email: input.value.trim() }),
    validate: () => input.reportValidity(),
    onInteractionStateChange: (state) => {
      submit.disabled = state !== 'ready';
      cancel.disabled = state !== 'ready';
    },
  };
}

Agent.initStandard({
  agentName: 'your-agent-name',
  uiRenderers: {
    collect_email: renderEmailForm,
  },
});
```

### How it works

- The native form `submit` event already handles Enter and button clicks.
- The UI can appear while the assistant is still streaming, but the container stays **inert** until the stream finishes.
- `onInteractionStateChange` is called with one of: `waiting` → `ready` → `submitting` → `resolved`.  
  Use it to disable your controls outside the `ready` state.
- `requestSubmit()` sends `{ cancelled: false, values: getValues() }` (after validation).  
  `requestCancel()` sends `{ cancelled: true }` (no validation, no `getValues()`).
- The assistant continues only after **all** pending tool calls in the batch are resolved.  
  Late requests from forms that have already been removed or resolved are ignored.

### Error / fallback behaviour

If a renderer is missing, throws, or does not provide `getValues()`, an error is shown.  
The visitor can still type a normal chat message to interrupt the pending call.

### `onInteractionStateChange` (optional but useful)

```js
onInteractionStateChange: (state) => {
  submit.disabled = state !== 'ready';
  cancel.disabled = state !== 'ready';
}
```

- Called when the renderer mounts and whenever the state changes (the form is **not** remounted).
- Keeps your own buttons in sync with the widget.
- The widget also makes the container inert and guards submission internally, so this callback is not the only protection.
- Output-only cards never receive these interaction states.

## Handling App-Owned Actions

For an app-owned interaction such as a Details click, handle the event directly in your renderer. It does **not** submit pending input or send a chat message:

```js
Agent.initStandard({
  agentName: 'your-agent-name',
  uiRenderers: {
    show_product: (container, toolOutput) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'Details';
      button.addEventListener('click', () => {
        const productId = toolOutput.id;
        if (productId) window.location.assign(`/products/${encodeURIComponent(productId)}`);
      });
      container.append(button);
    },
  },
});
```

## React Example

Mount your React component into the container supplied by the widget, then register the renderer on the widget component:

```tsx
import { Standard } from '@agent-embed/react';
import { createRoot } from 'react-dom/client';

function ProductCard({ name }: { name: string }) {
  return <article className="product-card">{name}</article>;
}

function renderProductCard(container: HTMLDivElement, output: unknown) {
  const root = createRoot(container);
  root.render(<ProductCard name={output.name} />);
  return () => root.unmount();
}

export default function ProductChat() {
  return (
    <Standard
      agentName="your-agent-name"
      uiRenderers={{ show_product: renderProductCard }}
      customCss=".product-card { padding: 12px; border: 1px solid #d1d5db; }"
    />
  );
}
```

In Next.js, use this in a client component and import `Standard` from `@agent-embed/nextjs` instead. The same `uiRenderers` prop and renderer function work in other React frameworks. For interactive input UI, render your own controls, connect them to `requestSubmit()` and `requestCancel()`, and return a handle with `getValues()` (and optionally `validate()` and `onInteractionStateChange()`).

The widget runs `cleanup` when a tool part or message is replaced or removed, the chat session resets, or the widget unmounts. Returning a function is shorthand for `{ cleanup: function }`.

## Styling and Safety

The widget uses Shadow DOM, so CSS on the host page does not style cards mounted inside it. Supply rules through the widget's `customCss` prop or dashboard [Custom CSS](/docs/channels/web/custom-css). Each invocation has a separate container; avoid global selectors that would affect other cards.

Renderer-created DOM is **not sanitized or sandboxed**. Treat `ui` as untrusted data: use `textContent` or framework escaping, and sanitize any HTML you deliberately inject. Keep rendering free of side effects because persisted tool parts can mount again after reload.

For the complete callback and return types, see the [Custom Agent UI API reference](/docs/api-reference/custom-agent-ui).
