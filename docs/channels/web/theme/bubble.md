---
title: 'Bubble'
---

# Bubble

Bubble settings control both:

- AI and user message bubble styling
- Feedback controls (thumbs up/down and corrective popup)

## Configure Feedback Controls

1. Go to your agent in the Predictable Dialogs app.
2. Open the **Theme** page.
3. Select the **Bubbles** tab.
4. Configure:
   - **Message Action Bar**
   - **Thumbs-down Corrective Popup**

### What Each Control Does

- **Message Action Bar**: Shows or hides message actions under completed assistant replies (`Thumbs up`, `Thumbs down`, `Copy message`).
- **Thumbs-down Corrective Popup**: When enabled, clicking thumbs down asks the user: `Please enter the correct answer`.

### Control Rules

- If **Message Action Bar** is OFF, thumbs controls are hidden.
- If **Message Action Bar** is OFF, **Thumbs-down Corrective Popup** is also forced OFF.
- If **Message Action Bar** is ON, you can choose whether the corrective popup is ON or OFF.

Save your Theme changes to apply feedback behavior.

For the full end-user behavior and Sessions review flow, see [Feedback](/docs/channels/web/feedback).

## Configure Bubble Colors In Theme

1. Go to your agent in the Predictable Dialogs app.
2. Open the **Theme** page.
3. Select the **Bubbles** tab.
4. Configure:
   - Background color for AI/User bubbles.
   - Text color for AI/User bubbles.

## Override Bubble Colors With Widget Props

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
