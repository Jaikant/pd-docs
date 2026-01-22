---
title: 'Font'
---

# Font

You can control the chat widget font from the Theme dashboard or override it using widget props.

## Using the Theme Dashboard

1. Go to your agent in the Predictable Dialogs app.
2. Open the **Theme** page.
3. Select the **Font & Brand** tab.
4. Choose from the available font options.

Changes will be reflected in the live preview.

## Using Widget Props

You can also override the font directly in your widget configuration:

```js
Agent.initStandard({
  // ...
  font: "Averia Libre",
});
```

**Notes:**

- Widget props take precedence over theme settings.
- Fonts available on [fonts.bunny.net](https://fonts.bunny.net/) are supported.

