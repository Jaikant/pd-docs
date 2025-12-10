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

## User Information Capture

Capture user information for enhanced session tracking and personalization. All collected data appears in your session logs.

### Basic Usage with User Information

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initPopup({
    agentName: "your assistant name",
    autoShowDelay: 3000,
    user: {
      user_id: "ab123",
      user_name: "Abc Def", 
      user_email: "abc@example.com",
      user_segments: ["sports", "ott"]
    }
  });
</script>
```

**Default Captured Information:**
- IP address (automatic)
- Country (automatic)

**Optional User Fields:**
- `user_id` - Unique identifier for the user
- `user_name` - Display name of the user  
- `user_email` - User's email address
- `user_segments` - Array of tags for user categorization

For complete session tracking details, see the [Sessions documentation](/docs/features/sessions).
## Size & Positioning

### Modal Width Control
The popup's width can be customized while height is automatically managed at 80% of viewport height.

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
- **Height**: Always Fixed at 80% of viewport height
- **Default Width**: 512px on desktop, responsive on mobile
- **Positioning**: Centered both horizontally and vertically

## Responsive Behavior

The Popup widget automatically adapts to different screen sizes:

### Mobile Behavior (< 640px)
- **Width**: Responsive to screen size with padding
- **Height**: Always fixed at 80% of viewport height
- **Positioning**: Centered with appropriate margins
- **Overlay**: Full-screen semi-transparent background

### Desktop Behavior (≥ 640px)
- **Width**: Uses theme.width value (default: 512px)
- **Height**: Always fixed at 80% of viewport height
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
| `Agent.reset()` | Clears all session data and reinitializes the chatbot for a fresh conversation |

### Example Usage

```html
<button onclick="Agent.open()">Contact us</button>
<button onclick="Agent.close()">Close chat</button>
<button onclick="Agent.toggle()">Toggle chat</button>
<button onclick="Agent.reset()">Reset chat</button>
```

## Configuration Options

### General Parameters

| Parameter | Required/Optional | Type | Description |
|-----------|------------------|------|-------------|
| `agentName` | Required | string | Name of the assistant that will appear in the widget. Uses the specified Predictable Dialogs agent or an agent from your custom backend. |
| `autoShowDelay` | Required | number | Time in milliseconds before the popup automatically appears after the page loads. |
| `user` | Optional | object | User information for session tracking. See [User Information](#user-optional) section below for details. |
| `contextVariables` | Optional | object | Key-value pairs that replace `{{variable}}` placeholders inside the agent's system instructions. Accepts any property names and persists per session. |
| `onSend` | Optional | function | Callback invoked when the user clicks Send (runs alongside the default send action). Useful for custom UI, analytics, or app logic. See [Advanced Usage: onSend Hook](/docs/channels/web/advanced-usage/onsend-callback) for detailed examples. |


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

The props listed below override both the saved theme and any styling delivered via the API, which makes them ideal for live theming straight from your embed script.


| Parameter | Type | Description |
|-----------|------|-------------|
| `font` | string | Font family name from fonts.bunny.net. Overrides theme font configuration. Example: `font="Roboto"` |
| `background` | object | Background configuration object with `type` ("Color" \| "Image" \| "None") and `content` (color hex or image URL). Overrides theme background configuration. Example: `background={{type: "Color", content: "#f0f0f0"}}` |
| `bubble` | object | Override bubble colors for host and guest messages. Contains optional `hostBubbles` and `guestBubbles` objects with `color` and `backgroundColor` properties. Overrides theme bubble configuration. |
| `avatar` | object | Override the host and guest avatar images shown in the popup. Each avatar supports `isEnabled` and `url` properties. |
| `input` | object | Input styling configuration with `type`, `styles`, and `options` properties. The `styles` object contains `roundness`, `inputs` (color, backgroundColor, placeholderColor), and `buttons` (color, backgroundColor) properties. Overrides theme input configuration. |
| `customCss` | string | Raw CSS that gets injected into the widget container for advanced overrides. |


## Example with some Optional Parameters

```javascript
Agent.initPopup({
  agentName: "Customer Support", //Generated on the predictable dialogs app
  autoShowDelay: 5000,
  initialPrompt: 'Tell me a joke',
  user: {
    user_id: "ab123",
    user_name: "Abc Def",
    user_email: "abc@example.com",
    user_segments: ["sports", "ott"]
  },
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

### customCss (optional)
Inject additional CSS directly into the popup widget. This lets you override theme/app styling for live theming scenarios.

**Type:** `string`

**Example:**
```js
customCss: `
  agent-popup {
    border-radius: 24px;
  }
  .agent-chat-view {
    background: #0f172a;
  }
`
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

### avatar (optional)
Override the host (agent) and guest (user) avatars displayed in the popup header and conversation bubbles. This is handy when you want to live-theme avatars without touching the saved theme.

**Type:**
```typescript
{
  hostAvatar?: {
    isEnabled?: boolean;
    url?: string;
  };
  guestAvatar?: {
    isEnabled?: boolean;
    url?: string;
  };
}
```

**Example:**
```js
avatar: {
  hostAvatar: {
    isEnabled: true,
    url: "https://i.pravatar.cc/300"
  },
  guestAvatar: {
    isEnabled: true,
    url: "https://i.pravatar.cc/300"
  }
}
```

### user (optional)
Capture user information for enhanced session tracking. All data appears in session logs.

**Type:** 
```typescript
{
  user_id?: string;
  user_name?: string;
  user_email?: string;
  user_segments?: string[];
}
```

**Example:**
```js
user: {
  user_id: "ab123",
  user_name: "Abc Def",
  user_email: "abc@example.com", 
  user_segments: ["sports", "ott"]
}
```

**Field Descriptions:**
- `user_id` - Unique identifier for the user
- `user_name` - Display name of the user
- `user_email` - User's email address  
- `user_segments` - Array of tags for user categorization

Only these fields are supported. Any additional properties included inside the `user` object are ignored. The stored values appear in the session timeline so you can quickly see who the conversation belonged to, and `user_segments` is perfect for tagging metadata such as `["pricing-page", "beta"]`.

**Default Information Captured:**
- IP address (automatic)
- Country (automatic)

For complete session documentation, see the [Sessions documentation](/docs/features/sessions).

### contextVariables (optional)
Send arbitrary key-value pairs that can be referenced inside your agent's system instructions via `{{variableName}}` placeholders. This lets you personalize instructions with metadata such as page name, user plan, or locale.

**Type:**
```typescript
Record<string, string | number | boolean>;
```

**Example:**
```js
contextVariables: {
  name: "Jai",
  currentPage: "pricing",
  locale: "en-US"
}
```

**Usage notes:**
- Use the same `{{key}}` syntax inside your Predictable Dialogs system instructions.
- You can pass as many properties as you need; they are stored with the session.
- Missing properties simply leave the placeholder untouched.

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
    shortcuts?: {
      preset?: "enterToSend" | "modEnterToSend" | "custom";
      keymap?: {
        submit?: string[][];
        newline?: string[][];
      };
      imeSafe?: boolean;
    };
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
    isLong: false,
    shortcuts: {
      preset: "custom",
      keymap: {
        submit: [["Mod", "Enter"], ["Shift", "Enter"]],
        newline: [["Enter"]]
      },
      imeSafe: true
    }
  }
}
```

> **Note:** `shortcuts` applies only when `options.type` is `"fixed-bottom"`. If `"preset": "custom"` is provided without a valid `keymap`, the widget reverts to its default shortcut behavior.
