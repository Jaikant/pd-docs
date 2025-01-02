---
description: Predictable Dialogs guide on how to style & place the bubble component.
---

# Styling the Bubble

We need to use the **theme** property in the **code** to style the bubble.

### Styling the Bubble
You can customize the chat bubble using the following properties:

- **size**: The size of the button (`'medium'` or `'large'`).
- **backgroundColor**: The background color of the button.
- **iconColor**: The color of the icon on the button.
- **customIconSrc**: A custom icon URL for the button (instead of the default).
- **customCloseIconSrc**: A custom icon URL for the close button.

##### Example
In this example:
- The button is **large**.
- The button has a **green** background.
- The icon color is **blue**.
- A custom Airbnb logo is used for the main icon.
- A custom Feather icon is used for the close button.

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'

Agent.initBubble({
  agentName: "your assistant name",
  apiHost: "...",
  theme: {
    button: {
      size: 'large',
      backgroundColor: "#4CAF50", // Green background 
      iconColor: "#007BFF",        // Blue icon color
      customIconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/airbnb.svg",
      customCloseIconSrc: "https://unpkg.com/feather-icons@4.29.2/dist/icons/x.svg"
    }
  },
});

</script>

```

Tip: You can find free SVG icons at [Feather Icons](https://feathericons.com/). Replace x.svg in the example above with the url of any icon you like, for example: [message-square.svg](https://unpkg.com/feather-icons@4.29.2/dist/icons/message-square.svg.svg)

### Bubble Placement
Decide where the bubble appears on your page:
- **'right'**: Positions the bubble in the bottom-right corner.
- **'left'**: Positions the bubble in the bottom-left corner.

##### Example 
```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initBubble({
    agentName: "your assistant name",
    apiHost: "...",
    theme: {
      placement: 'left' // Bubble placed on the bottom-left corner
    }
  });
</script>

```