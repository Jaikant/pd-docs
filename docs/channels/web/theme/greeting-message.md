---
title: 'Greeting Message'
---

# Greeting Message

The greeting (initial response) is the first message your AI agent displays when the widget loads. Use it to set the tone for user interactions and guide visitors on how to use the chatbot.

## Configure in the Theme Dashboard

1. Go to your agent in the Predictable Dialogs app.
2. Open the **Theme** page.
3. Select the **Greeting** tab.

From here you can:

- Turn the greeting on or off using the toggle.
- Enter or edit the greeting text.
- Use markdown or basic HTML for formatting.

### Enable or disable the greeting

Use the toggle in the **Greeting** tab to enable a custom static greeting text. 

:::tip Initial response using a prompt
If you turn off the greeting, you can generate a greeting/initial response using your own prompt. This is configured using the `initialPrompt` prop on the widget. See the [Bubble widget docs](/docs/channels/web/widgets/bubble#widget-behaviour--styling-parameters-optional) for details.

If the `initialPrompt` is not set, the user would have to initiate the conversation.
:::

### Formatting the greeting

You can format the greeting using markdown:

```md
**Hi there**
```

Basic HTML compatible with markdown is also supported:

```html
<strong>Hi there</strong>
```

### Generate a greeting with OpenAI

:::tip Generate greeting with OpenAI
Click the ✨ button to create an initial response using your OpenAI assistant and a custom prompt.
:::

