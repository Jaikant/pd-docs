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
    apiHost: "https://app.predictabledialogs.com/web/incoming",
  });
</script>
```

## Configuration Options

### Required Properties

| Property | Type | Description |
|----------|------|-------------|
| `apiHost` | string | Points to the Predictable Dialogs backend or your custom backend |
| `agentName` | string | Specifies the Predictable Dialogs agent name or your custom agent name |

### Optional Properties

| Property | Type | Description |
|----------|------|-------------|
| `initialPrompt` | string | Initial message displayed when chat opens (only used when server's initial response is disabled) |
| `filterResponse` | function | `(response: string) => string` - Function to process the AI's responses before display ([see example](/faqs/removing-openai-citations)). |
| `onClose` | function | `() => void` - Function executed when the chat popup closes |
| `onOpen` | function | `() => void` - Function executed when the chat popup opens |
| `theme` | object | Contains customization properties for the widget's appearance |
| `autoShowDelay` | number | Time in milliseconds after which the chat opens automatically |
| `previewMessage` | object | Configuration for the preview message bubble |
| `onPreviewMessageClick` | function | `() => void` - Function executed when preview message is clicked |


## Internal Elements Styling

To customize the appearance of elements within the chat interface itself (such as message bubbles, fonts, colors), use the ["Theme"](/theme) tab in the Predictable Dialogs app dashboard.

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


## Positioning the Bubble

Control where the bubble appears on your page using the `placement` option:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    apiHost: "https://app.predictabledialogs.com/web/incoming",
    theme: {
      placement: 'left' // Places bubble in bottom-left corner (default is right)
    }
  });
</script>
```


## Customizing the Bubble Appearance

### Changing Bubble Size

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    apiHost: "https://app.predictabledialogs.com/web/incoming",
    theme: {
      button: {
        size: 'large', // Options: 'medium' (default) or 'large'
      }
    },
  });
</script>
```

### Changing Bubble Background Color

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    apiHost: "https://app.predictabledialogs.com/web/incoming",
    theme: {
      button: {
        backgroundColor: "#4CAF50", // Any valid CSS color value
      }
    },
  });
</script>
```

### Customizing Bubble Icons

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    apiHost: "https://app.predictabledialogs.com/web/incoming",
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
    apiHost: "https://app.predictabledialogs.com/web/incoming",
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
    apiHost: "https://app.predictabledialogs.com/web/incoming",
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


## Programmatic Control

You can control the widget through JavaScript using the following methods:

| Method | Description |
|--------|-------------|
| `Agent.open()` | Opens the chat popup or bubble |
| `Agent.close()` | Closes the chat popup or bubble |
| `Agent.toggle()` | Toggles between open and closed states |
| `Agent.showPreviewMessage()` | Shows the preview message |
| `Agent.hidePreviewMessage()` | Hides the preview message |

### Example: Binding to HTML Elements

```html
<button onclick="Agent.open()">Chat Now</button>
<button onclick="Agent.close()">Close Chat</button>
<button onclick="Agent.toggle()">Toggle Chat</button>
```

---

## Complete Configuration Example

Here's an example showing most customization options:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  
  Agent.initBubble({
    // Required properties
    agentName: "Support Assistant", //generated on the predictable dialogs app
    apiHost: "https://app.predictabledialogs.com/web/incoming",
    
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