---
description: Style & customize the Chatbot Popup Widget
---
# Chatbot Popup Widget

The Popup Widget provides a customizable chat interface that pops up on a click or after a set delay.

## Quick Start

Add the following code to your HTML to create a basic popup widget:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initPopup({
    agentName: "your assistant name", //generated on the predictable dialogs app
    autoShowDelay: 3000,
  });
</script>
```

## Configuration Options

### Required Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `agentName` | string | Name of the assistant that will appear in the widget. Uses the specified Predictable Dialogs agent or an agent from your custom backend. |
| `autoShowDelay` | number | Time in milliseconds before the popup automatically appears after the page loads. |

### Optional Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `stream` | boolean | Default is true. A flag that indicates whether messages should be streamed.|
| `persistSession` | boolean | Default is false. A flag that indicates whether the seession persists, if set to false a new session is started every time the chatbot loads.  ([Read more](/sessions)) |
| `initialPrompt` | string | Initial message sent to the AI when conversation starts. *Note: Only used when initial responses are disabled on the server.* |
| `filterResponse` | function | Callback function that processes AI responses before displaying them. Takes the response string as input and returns the modified string. Useful for removing citations or modifying content([see example](/how-to/removing-openai-citations)). |
| `defaultOpen` | boolean | When `true`, the popup will be open by default but can be closed by the user. |
| `isOpen` | boolean | When `true`, the popup will be open by default and cannot be closed by the user. |
| `onClose` | function | Callback function that executes when the popup is closed. |
| `onOpen` | function | Callback function that executes when the popup is opened. |
| `theme` | object | Styling configuration object. Currently supports `width` property to set popup width (default: '512px' on laptop screens). |
| `apiHost` | string | URL endpoint for the chat service. Points to Predictable Dialogs backend by default, but can be configured to use your own backend. |

## Example with Optional Parameters

```javascript
Agent.initPopup({
  agentName: "Customer Support", //Generated on the predictable dialogs app
  autoShowDelay: 5000,
  initialPrompt: 'Tell me a joke',
  filterResponse: function(response) {
    const citationRegex = /【\d+:\d+†[^【】]+】/g;
    return response.replace(citationRegex, "");
  },
  defaultOpen: false,
  onOpen: () => console.log("Widget opened"),
  theme: {
    width: "400px"
  }
});
```

## Programmatic Control

Control the popup widget with these JavaScript methods:

| Method | Description |
|--------|-------------|
| `Agent.open()` | Opens the popup widget |
| `Agent.close()` | Closes the popup widget |
| `Agent.toggle()` | Toggles between open and closed states |

### Example Usage

```html
<button onclick="Agent.open()">Contact us</button>
<button onclick="Agent.close()">Close chat</button>
<button onclick="Agent.toggle()">Toggle chat</button>
```

### Internal Elements Styling
To customize the appearance of elements within the chat interface itself (such as message bubbles, fonts, colors), use the ["Theme"](/docs/getting-started/theme) tab in the Predictable Dialogs app dashboard.