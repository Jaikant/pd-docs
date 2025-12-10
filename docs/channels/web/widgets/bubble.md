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

## User Information Capture

Capture user information for enhanced session tracking and personalization. All collected data appears in your session logs.

### Basic Usage with User Information

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
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

### General Properties

| Property | Required/Optional | Type | Description |
|----------|------------------|------|-------------|
| `agentName` | Required | string | Specifies the Predictable Dialogs agent name or your custom agent name |
| `user` | Optional | object | User information for session tracking. See [User Information](#user-optional) section below for details. |
| `contextVariables` | Optional | object | Key-value pairs for `{{variable}}` placeholders in your agent's system instructions. Accepts any property names. |
| `onSend` | Optional | function | Callback invoked when the user clicks Send (runs alongside the default send action). Useful for custom UI, analytics, or app logic. See [Advanced Usage: onSend Hook](/docs/channels/web/advanced-usage/onsend-callback) for detailed examples. |


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

All of the following props override your saved theme plus any styling coming from the API, enabling theming straight from your code.


| Property | Type | Description |
|----------|------|-------------|
| `font` | string | Font family name from fonts.bunny.net. Overrides theme font configuration. Example: `font="Roboto"` |
| `background` | object | Background configuration object with `type` ("Color" \| "Image" \| "None") and `content` (color hex or image URL). Overrides theme background configuration. Example: `background={{type: "Color", content: "#f0f0f0"}}` |
| `bubble` | object | Override bubble colors for host and guest messages. Contains optional `hostBubbles` and `guestBubbles` objects with `color` and `backgroundColor` properties. Overrides theme bubble configuration. |
| `avatar` | object | Override the host and guest avatar images shown inside the chat. Supports `isEnabled` and `url`. |
| `input` | object | Input styling configuration with `type`, `styles`, and `options` properties. The `styles` object contains `roundness`, `inputs` (color, backgroundColor, placeholderColor), and `buttons` (color, backgroundColor) properties. Overrides theme input configuration. |
| `customCss` | string | Raw CSS injected inside the widget for extra styling control. |


## Configuration Example

Here's an example showing most customization options:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  
  Agent.initBubble({
    // Required properties
    agentName: "Support Assistant", //generated on the predictable dialogs app
    
    // User information capture
    user: {
      user_id: "ab123",
      user_name: "Abc Def",
      user_email: "abc@example.com",
      user_segments: ["sports", "ott"]
    },
    
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

### avatar (optional)
Override the avatars shown for both the host and guest inside the bubble widget. This is useful for live theming scenarios where you want different persona imagery per page or campaign.

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

Additional keys placed inside `user` are ignored. The accepted fields are stored along with the chat transcript so you can see who each session belongs to, and `user_segments` is perfect for metadata like `["landing-page", "enterprise"]`.

**Default Information Captured:**
- IP address (automatic)
- Country (automatic)

For complete session documentation, see the [Sessions documentation](/docs/features/sessions).

### contextVariables (optional)
Provide arbitrary key-value pairs that can be referenced in your agent's system instructions using `{{variableName}}` placeholders. This allows you to personalize assistant behavior per page or user segment.

**Type:**
```typescript
Record<string, string | number | boolean>;
```

**Example:**
```js
contextVariables: {
  name: "Jai",
  subscription: "Enterprise",
  currentPage: "docs"
}
```

**Usage tips:**
- Reference the same keys in your Predictable Dialogs instructions, e.g., `"The current page is {{currentPage}}"`.
- Every property is stored with the session for auditing.
- Missing properties simply leave the placeholder as-is.

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

> **Note:** Shortcut configuration is only available when `options.type` is `"fixed-bottom"`. Providing `"preset": "custom"` without a `keymap` falls back to the default shortcut behavior.
