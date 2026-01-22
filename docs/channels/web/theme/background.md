---
title: 'Background'
---

# Background

You can customize the chat widget background color or use an image background.

## Using the Theme Dashboard

1. Go to your agent in the Predictable Dialogs app.
2. Open the **Theme** page.
3. Select the **Background** tab.
4. Choose a background color from the color picker.

Changes are applied immediately in the preview.

## Using Widget Props

You can override the theme background directly in your widget configuration. For example, using the Standard widget:

```js
Agent.initStandard({
  // ...
  background: {
    type: "Color",
    content: "#cbcbcd",
  },
});
```

You can also set an image background:

```js
Agent.initStandard({
  // ...
  background: {
    type: "Image",
    content: "https://i.pravatar.cc/1000",
  },
});
```

**Note:** Widget props take precedence over theme settings.

