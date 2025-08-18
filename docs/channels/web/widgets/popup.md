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
## Size & Positioning

### Modal Width Control
The popup's width can be customized while height is automatically managed:

```javascript
Agent.initPopup({
  agentName: "Customer Support",
  autoShowDelay: 3000,
  theme: {
    width: "400px" // Custom width (default: 512px)
  }
});
```

### Responsive Width Options
```javascript
// Fixed pixel width
theme: { width: "500px" }

// Responsive viewport-based width
theme: { width: "80vw" }

// Maximum width with fallback
theme: { width: "min(600px, 90vw)" }
```

### Modal Sizing Details
- **Height**: Fixed at 80% of viewport height (`h-[80vh]`)
- **Default Width**: 512px on desktop, responsive on mobile
- **Positioning**: Centered both horizontally and vertically

## Internal Elements Styling
To customize the appearance of elements within the chat interface itself (such as message bubbles, fonts, colors), use the ["Theme"](/docs/channels/web/theme) tab in the Predictable Dialogs app dashboard.

## Responsive Behavior

The Popup widget automatically adapts to different screen sizes:

### Mobile Behavior (< 640px)
- **Width**: Responsive to screen size with padding
- **Height**: 80% of viewport height
- **Positioning**: Centered with appropriate margins
- **Overlay**: Full-screen semi-transparent background

### Desktop Behavior (≥ 640px)
- **Width**: Uses theme.width value (default: 512px)
- **Height**: 80% of viewport height
- **Positioning**: Centered both horizontally and vertically

### Responsive Considerations
- Scrolling is managed automatically for longer conversations

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

## Configuration Options

### Required Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `agentName` | string | Name of the assistant that will appear in the widget. Uses the specified Predictable Dialogs agent or an agent from your custom backend. |
| `autoShowDelay` | number | Time in milliseconds before the popup automatically appears after the page loads. |

### Optional Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `persistSession` | boolean | Default is false. A flag that indicates whether the session persists, if set to false a new session is started every time the chatbot loads.  ([Read more](/docs/features/sessions)) |
| `initialPrompt` | string | Initial message sent to the AI when conversation starts. *Note: Only used when initial responses are disabled on the server.* |
| `filterResponse` | function | Callback function that processes AI responses before displaying them. Takes the response string as input and returns the modified string. Useful for removing citations or modifying content([see example](/docs/providers/openai-assistant/removing-citations)). |
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
