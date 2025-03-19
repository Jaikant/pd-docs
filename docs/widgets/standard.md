---
description: Style & customize the Chatbot Standard Widget
---

# Chatbot Standard Widget

The Standard Widget provides a customizable chat interface on your web page.

## Quick Start

Here's the minimum code required to implement the Standard Widget:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initStandard({
    agentName: "your assistant name", //generated on the predictable dialogs app
    apiHost: "https://app.predictabledialogs.com/web/incoming",
  });
</script>
<agent-standard style="width: 100%; height: 600px; "></agent-standard>
```


## Properties

### Required Properties

| Property | Type | Description |
|----------|------|-------------|
| `agentName` | string | Specifies the agent name from Predictable Dialogs or your custom backend. This identifies which AI agent will process the conversations. |

### Optional Properties

| Property | Type | Description |
|----------|------|-------------|
| `stream` | boolean | A flag that indicates whether messages should be streamed.|
| `initialPrompt` | string | Message sent to the agent when the chat first loads. Only used when initial response is disabled on the server. If server-side initial response is enabled, this property is ignored. |
| `filterResponse` | function | A callback function that processes the AI's responses before displaying them. Takes the original response string as input and should return the modified response string. Useful for removing citations or formatting responses ([see example](/faqs/removing-openai-citations)). |
| `apiHost` | string | Endpoint URL that connects to the backend. Can be configured to use your own backend if needed. |

## Styling Options

### Internal Elements Styling
To customize the internal elements of the widget (chat bubbles, input field, buttons, etc.), use the [Theme](/theme) tab in the Predictable Dialogs application.

### External Styling
You can style the widget container using standard CSS properties:

```html
<agent-standard style="width: 500px; height: 700px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"></agent-standard>
```

## Advanced Configuration Example

```javascript
Agent.initStandard({
  agentName: "customer_support",
  apiHost: "https://app.predictabledialogs.com/web/incoming",
  initialPrompt: 'Tell me a joke',
  filterResponse: function(response) {
    const annotationRegex = /【\d+:\d+†[^\s】]+】/g;
    return response.replace(annotationRegex, "");
  }
});
```

## Best Practices
- Use `initialPrompt` to create a welcoming experience when server-side initial responses are disabled.
- Implement `filterResponse` to clean up AI responses when necessary, such as removing citations.
- Apply external styling for consistency with your website's design.
- Configure internal styling through the Predictable Dialogs app for cohesive chat interfaces.

---