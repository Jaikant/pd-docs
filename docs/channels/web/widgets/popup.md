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

### Widget Behaviour & Styling Parameters (optional)

| Parameter | Type | Description |
|-----------|------|-------------|
| `initialPrompt` | string | Initial message sent to the AI when conversation starts. *Note: Only used when initial responses are disabled on the server.* |
| `filterResponse` | function | Callback function that processes AI responses before displaying them. Takes the response string as input and returns the modified string. Useful for removing citations or modifying content([see example](/docs/providers/openai-assistant/removing-citations)). |
| `defaultOpen` | boolean | When `true`, the popup will be open by default but can be closed by the user. |
| `isOpen` | boolean | When `true`, the popup will be open by default and cannot be closed by the user. |
| `onClose` | function | Callback function that executes when the popup is closed. |
| `onOpen` | function | Callback function that executes when the popup is opened. |
| `theme` | object | Styling configuration object. Currently supports `width` property to set popup width (default: '512px' on laptop screens). |
| `apiHost` / `apiStreamHost` | string | URL endpoint for the chat service. Points to Predictable Dialogs backend by default, but can be configured to use your own backend. |

### Chat Elements Styling Parameters (optional)
To customize the appearance of chat elements—such as message fonts, colors, and bubbles, input—you can use the ["Theme"](/docs/channels/web/theme) tab in the Predictable Dialogs app dashboard. This lets you make changes in real time, rather than updating code with the props listed below.


| Parameter | Type | Description |
|-----------|------|-------------|
| `font` | string | Font family name from fonts.bunny.net. Overrides theme font configuration. Example: `font="Roboto"` |
| `background` | object | Background configuration object with `type` ("Color" \| "Image" \| "None") and `content` (color hex or image URL). Overrides theme background configuration. Example: `background={{type: "Color", content: "#f0f0f0"}}` |
| `bubble` | object | Override bubble colors for host and guest messages. Contains optional `hostBubbles` and `guestBubbles` objects with `color` and `backgroundColor` properties. Overrides theme bubble configuration. |
| `input` | object | Input styling configuration with `type`, `styles`, and `options` properties. The `styles` object contains `roundness`, `inputs` (color, backgroundColor, placeholderColor), and `buttons` (color, backgroundColor) properties. Overrides theme input configuration. |


## Example with some Optional Parameters

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

### bubble (optional)
Override bubble colors for host and guest messages.

**Type:** 
```typescript
{
  hostBubbles?: {
    color: string;
    backgroundColor: string; 
  };
  guestBubbles?: {
    color: string;
    backgroundColor: string;
  };
}
```

**Example:**
```js
bubble: {
  hostBubbles: {
    color: "#2b2c2b",
    backgroundColor: "#ff6b35" 
  },
  guestBubbles: {
    color: "#f8faf4",
    backgroundColor: "#0066cc"
  }
}
```

### input (optional)
Override input styling and configuration.

**Type:** 
```typescript
{
  type: "text input";
  styles?: {
    roundness?: "none" | "medium" | "large";
    inputs?: {
      color?: string;
      backgroundColor?: string;
      placeholderColor?: string;
    };
    buttons?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  options: {
    type: "fixed-bottom" | "floating";
    labels: {
      placeholder?: string;
      button?: string;
    };
    isLong?: boolean;
  };
}
```

**Example:**
```js
input: {
  type: "text input",
  styles: {
    roundness: "medium",
    inputs: {
      color: "#e84117",
      backgroundColor: "#f7f7f7",
      placeholderColor: "#ababab"
    },
    buttons: {
      color: "#ffffff",
      backgroundColor: "#050505"
    }
  },
  options: {
    type: "fixed-bottom",
    labels: {
      placeholder: "Whats on your mind?",
      button: "Send me"
    },
    isLong: false
  }
}
```
