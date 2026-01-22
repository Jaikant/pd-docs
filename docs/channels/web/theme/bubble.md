---
title: 'Bubble'
---

# Bubble

Bubble settings control the colors of AI and user message bubbles in the chat widget.

## Using the Theme Dashboard

1. Go to your agent in the Predictable Dialogs app.
2. Open the **Theme** page.
3. Select the **Bubbles** tab.
4. Configure:
   - Background color for AI/User bubbles.
   - Text color for AI/User bubbles.

## Using Widget Props

You can override bubble colors directly in your widget configuration:

```js
Agent.initStandard({
  // ...
  bubble: {
    hostBubbles: {
      color: "#2b2c2b",
      backgroundColor: "#ff6b35",
    },
    guestBubbles: {
      color: "#f8faf4",
      backgroundColor: "#0066cc",
    },
  },
});
```

**Note:** Widget props take precedence over theme settings.

