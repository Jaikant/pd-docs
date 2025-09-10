---
description: Style & customize the Chatbot Bubble Widget
---

# Chatbot Bubble Widget

The Bubble Widget provides an elegant, customizable chat interface that sits at the bottom corner of your webpage. When clicked, it expands to reveal a full-featured chatbot interface for your users.

## Quick Start

Here's the minimum code required to implement the Bubble Widget:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name", //generated on the predictable dialogs app.
  });
</script>
```

## External Styling
The widget's external appearance can be extensively customized using the `theme` property.

### Theme Property Structure

```typescript
theme: {
  placement?: 'left' | 'right',
  button?: {
    size?: 'medium' | 'large',
    backgroundColor?: string,
    iconColor?: string,
    customIconSrc?: string,
    customCloseIconSrc?: string
  },
  previewMessage?: {
    backgroundColor?: string,
    textColor?: string,
    closeButtonBackgroundColor?: string,
    closeButtonIconColor?: string
  }
}
```


### Positioning the Bubble

Control where the bubble appears on your page using the `placement` option:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    theme: {
      placement: 'left' // Places bubble in bottom-left corner (default is right)
    }
  });
</script>
```


### Customizing the Bubble Appearance

#### Changing Bubble Size

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    theme: {
      button: {
        size: 'large', // Options: 'medium' (default) or 'large'
      }
    },
  });
</script>
```

#### Changing Bubble Button Background Color

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    theme: {
      button: {
        backgroundColor: "#4CAF50", // Any valid CSS color value
      }
    },
  });
</script>
```

#### Customizing Bubble Button Icons

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    theme: {
      button: {
        iconColor: "#007BFF",        // Color for default icons
        customIconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/airbnb.svg", // Custom open icon
        customCloseIconSrc: "https://unpkg.com/feather-icons@4.29.2/dist/icons/x.svg" // Custom close icon
      }
    },
  });
</script>
```

> **Tip:** You can find attractive SVG icons at [Feather Icons](https://feathericons.com/). To use an icon, simply replace the filename in the URL. For example, to use the "message-square" icon, the URL would be: `https://unpkg.com/feather-icons@4.29.2/dist/icons/message-square.svg`



## Preview Message Configuration

The preview message appears as a speech bubble connected to the chat button, providing a prompt to engage users.

![Preview Message Sample](/img/plain-preview-message.webp)

### Adding a Basic Preview Message

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    previewMessage: {
      message: "Need help? Tap here to chat with us!", // Text to display
      avatarUrl: "https://unpkg.com/feather-icons@4.29.2/dist/icons/user.svg", // Optional avatar
      autoShowDelay: 5000, // Delay in milliseconds before showing the message
    },
  });
</script>
```

### Styling the Preview Message

Here is an example styled preview message.

![Custom Message Sample](/img/custom-preview-message.webp)

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    previewMessage: {
      message: "Need help? Tap here to chat with us!",
      avatarUrl: "https://unpkg.com/feather-icons@4.29.2/dist/icons/user.svg",
      autoShowDelay: 5000,
    },
    theme: {
      previewMessage: { 
        backgroundColor: '#969F42', // Background color of message bubble
        textColor: '#ffffff', // Text color
        closeButtonBackgroundColor: '#969F42', // Color of close button background
        closeButtonIconColor: '#FFFFFF' // Color of close button icon
      },
    },
  });
</script>
```

## Responsive Behavior

The Bubble widget automatically adapts to different screen sizes:

### Mobile Behavior (< 640px)
- **Chat Window**: Full width with responsive height
- **Button Position**: Fixed bottom positioning with appropriate margins
- **Preview Message**: Adjusts to screen width with proper spacing

### Desktop Behavior (≥ 640px)
- **Chat Window**: Fixed 400px width, maximum 704px height
- **Button Position**: 20px margin from screen edge (left or right based on placement)
- **Preview Message**: Positioned relative to button with optimal spacing


## Programmatic Control

You can control the widget through JavaScript using the following methods:

| Method | Description |
|--------|-------------|
| `Agent.open()` | Opens the chat popup or bubble |
| `Agent.close()` | Closes the chat popup or bubble |
| `Agent.toggle()` | Toggles between open and closed states |
| `Agent.reset()` | Clears all session data and reinitializes the chatbot for a fresh conversation |
| `Agent.showPreviewMessage()` | Shows the preview message |
| `Agent.hidePreviewMessage()` | Hides the preview message |

### Example: Binding to HTML Elements

```html
<button onclick="Agent.open()">Chat Now</button>
<button onclick="Agent.close()">Close Chat</button>
<button onclick="Agent.toggle()">Toggle Chat</button>
<button onclick="Agent.reset()">Reset Chat</button>
```


## Configuration Options

### Required Properties

| Property | Type | Description |
|----------|------|-------------|
| `agentName` | string | Specifies the Predictable Dialogs agent name or your custom agent name |

### Widget Behaviour & Styling Parameters (optional)

| Property | Type | Description |
|----------|------|-------------|
| `initialPrompt` | string | Initial message displayed when chat opens (only used when server's initial response is disabled) |
| `filterResponse` | function | `(response: string) => string` - Function to process the AI's responses before display ([see example](/docs/providers/openai-assistant/removing-citations)). |
| `onClose` | function | `() => void` - Function executed when the chat popup closes |
| `onOpen` | function | `() => void` - Function executed when the chat popup opens |
| `theme` | object | Contains customization properties for the widget's appearance |
| `autoShowDelay` | number | Time in milliseconds after which the chat opens automatically |
| `previewMessage` | object | Configuration for the preview message bubble |
| `onPreviewMessageClick` | function | `() => void` - Function executed when preview message is clicked |
| `apiHost` / `apiStreamHost` | string | Points to the Predictable Dialogs backend or your custom backend |

### Chat Elements Styling Parameters (optional)
To customize the appearance of chat elements—such as message fonts, colors, and bubbles, input—you can use the "Theme" tab in the Predictable Dialogs app dashboard. This lets you make changes in real time, rather than updating code with the props listed below.


| Property | Type | Description |
|----------|------|-------------|
| `font` | string | Font family name from fonts.bunny.net. Overrides theme font configuration. Example: `font="Roboto"` |
| `background` | object | Background configuration object with `type` ("Color" \| "Image" \| "None") and `content` (color hex or image URL). Overrides theme background configuration. Example: `background={{type: "Color", content: "#f0f0f0"}}` |
| `bubble` | object | Override bubble colors for host and guest messages. Contains optional `hostBubbles` and `guestBubbles` objects with `color` and `backgroundColor` properties. Overrides theme bubble configuration. |
| `input` | object | Input styling configuration with `type`, `styles`, and `options` properties. The `styles` object contains `roundness`, `inputs` (color, backgroundColor, placeholderColor), and `buttons` (color, backgroundColor) properties. Overrides theme input configuration. |


## Configuration Example

Here's an example showing most customization options:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  
  Agent.initBubble({
    // Required properties
    agentName: "Support Assistant", //generated on the predictable dialogs app
    
    // Optional functionality
    initialPrompt: "Hello! How can I help you today?",
    filterResponse: (response) => response.replace(/\[internal\].*?\[\/internal\]/g, ''),
    onOpen: () => console.log("Chat opened"),
    onClose: () => console.log("Chat closed"),
    
    // Preview message
    previewMessage: {
      message: "Have questions? Chat with our support team!",
      avatarUrl: "https://unpkg.com/feather-icons@4.29.2/dist/icons/message-circle.svg",
      autoShowDelay: 3000,
    },
    onPreviewMessageClick: () => console.log("Preview message clicked"),
    
    // Styling customizations
    theme: {
      placement: 'right',
      button: {
        size: 'large',
        backgroundColor: "#007BFF",
        iconColor: "#FFFFFF",
        customIconSrc: "https://unpkg.com/feather-icons@4.29.2/dist/icons/message-square.svg",
        customCloseIconSrc: "https://unpkg.com/feather-icons@4.29.2/dist/icons/x.svg"
      },
      previewMessage: {
        backgroundColor: '#007BFF',
        textColor: '#FFFFFF',
        closeButtonBackgroundColor: '#0056b3',
        closeButtonIconColor: '#FFFFFF'
      }
    },
  });
</script>
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

