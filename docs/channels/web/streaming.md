---
title: 'Streaming'
hide_table_of_contents: false
---

**Estimated Time: 2 minutes**

*Note: Streaming is not available on WhatsApp.*

Streaming allows your users to see responses in real-time, improving the interaction experience.

### How to Enable Streaming

To enable streaming, set the `stream` property to `true` in your embed script, as shown below:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'

  Agent.initStandard({
    agentName: "your assistant name",
    stream: true
  });
</script>
```

### How to Disable Streaming

To disable streaming, set the `stream` property to `false`:

```html
stream: false
```

The `stream` property accepts a boolean value:

- `true` → Enables streaming.
- `false` → Disables streaming.