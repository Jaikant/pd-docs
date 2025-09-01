---
title: 'Web Channel Overview'
description: 'Embed AI chatbot widgets on your website with customizable interfaces and advanced features'
---

# Web Channel

The Web channel allows you to embed AI chatbot widgets directly into your website, providing interactive AI assistance to your visitors. Choose from three different widget types and customize them to match your brand.

## Widget Types

Predictable Dialogs offers three distinct widget types, each designed for different use cases and user experiences:

| Widget Type | Best For | Key Features |
|-------------|----------|--------------|
| **[Standard](/docs/channels/web/widgets/standard)** | Full integration into page layout | • Customizable size and positioning<br/>• Responsive design<br/>• Flexible styling options |
| **[Bubble](/docs/channels/web/widgets/bubble)** | Non-intrusive corner placement | • Chat bubble interface<br/>• Preview messages<br/>• Responsive design<br/>• Flexible styling options |
| **[Popup](/docs/channels/web/widgets/popup)** | Modal-style interactions | • Auto-show and centered modal<br/>• Responsive design<br/>• Flexible styling options |

### When to Use Each Widget

**Choose Standard Widget when:**
- You want to integrate chat directly into your page layout
- You need full control over positioning and sizing
- You're building a dedicated support or chat page
- You want the chat to be a permanent part of your UI

**Choose Bubble Widget when:**
- You want a non-intrusive chat option
- Your users should be able to browse while chatting
- You prefer a familiar messenger-style interface
- You want to save screen real estate

**Choose Popup Widget when:**
- You want to grab user attention
- You need a modal-style interaction
- You want to automatically engage visitors
- You prefer a focused, distraction-free chat experience

## Core Features

All web widgets support these essential features:

### 🚀 **Real-time Streaming**
See AI responses appear in real-time for a more engaging conversation experience. [Learn more](/docs/channels/web/streaming)

### 🎨 **Advanced Theming**
Customize colors, fonts, backgrounds, and styling through our visual theme editor or with custom CSS. [Learn more](/docs/channels/web/theme)

### 📱 **Responsive Design**
All widgets automatically adapt to different screen sizes and devices for optimal user experience.

### ⚙️ **Custom CSS Support**
Apply advanced styling and branding with full CSS customization capabilities. [Learn more](/docs/channels/web/custom-css)

### 🔧 **Programmatic Control**
Control widget behavior through JavaScript APIs for dynamic interactions.

## Getting Started

Ready to add a chatbot to your website? Follow these steps:

1. **[Create your agent](/docs/getting-started/create-agent)** in the Predictable Dialogs dashboard
2. **[Connect an AI resource](/docs/getting-started/connect-ai-resource)** like OpenAI Assistant
3. **[Choose and embed your widget](/docs/channels/web/embed-widget)** using our step-by-step guide
4. **[Customize your widget](/docs/channels/web/theme)** with themes and styling to match your brand

## Quick Implementation

Here's a minimal example to get you started with each widget type:

### Standard Widget
```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initStandard({
    agentName: "your-agent-name"
  });
</script>
<agent-standard style="width: 100%; height: 600px;"></agent-standard>
```

### Bubble Widget
```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your-agent-name"
  });
</script>
```

### Popup Widget
```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initPopup({
    agentName: "your-agent-name",
    autoShowDelay: 3000
  });
</script>
```

## Next Steps

- **[Embed Your Widget](/docs/channels/web/embed-widget)** - Step-by-step embedding guide
- **[Customize with Themes](/docs/channels/web/theme)** - Visual customization options
- **[Advanced Styling](/docs/channels/web/custom-css)** - Custom CSS techniques
- **[Widget Documentation](/docs/category/widgets)** - Different widget options