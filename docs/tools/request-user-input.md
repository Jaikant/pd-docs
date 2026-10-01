---
title: Request User Input
description: Ask a visitor for information with custom interactive UI inside the web widget.
---

# Request User Input

Use **Request user input** when the assistant needs a visitor to respond through custom UI inside the conversation. The assistant makes a tool call which reaches your website. Your website detects the tool has been called and supplies a renderer for the tool; the visitor's response becomes the tool result.

This differs from other tools, which have produced a tool output which also could be used for your website to display. Request user input pauses the assistant until the visitor submits or cancels the interaction.

## Configure the Tool

1. In your agent's **Knowledge and actions** section, click **Website UI**, then select "Request user input"
2. Give the tool a label and describe when the assistant should ask for this input.
3. (optional) Under **Inputs**, define the optional JSON fields your renderer may need. These are dynamic values you want the llm to generate.
4. Save the tool. Open its three-dot menu and select **Copy tool name**, [then use that name as the key in `uiRenderers` on your website](https://predictabledialogs.com/docs/channels/web/ui-renderers).

For example, name the tool `collect_email` and leave **Inputs** empty. When the assistant calls `collect_email`, your renderer displays an email form with its own controls. On submission, the widget reads the visitor's email through `getValues()` and sends it back as the tool result.

## Render and Submit Input

```js
import Agent from '@agent-embed/js/web';

function renderEmailForm(container, _ui, { initialValues, requestSubmit, requestCancel }) {
  const form = document.createElement('form');
  const label = document.createElement('label');
  label.textContent = 'Email address';

  const input = document.createElement('input');
  input.type = 'email';
  input.name = 'email';
  input.autocomplete = 'email';
  input.required = true;
  input.value = initialValues && typeof initialValues === 'object' &&
    typeof initialValues.email === 'string' ? initialValues.email : '';
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
  cancel.addEventListener('click', () => { void requestCancel?.(); });
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

For submission methods, see [`requestSubmit()`](/docs/api-reference/custom-agent-ui#request-submit) and [`requestCancel()`](/docs/api-reference/custom-agent-ui#request-cancel). For the full renderer workflow and interaction states, see [Render Tool UI in the Conversation](/docs/channels/web/ui-renderers).
