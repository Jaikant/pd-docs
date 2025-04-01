---
id: sessions
description: In the PD chatbot, a session can be persisted till it times out or a new session can be started every time.
slug: /sessions
---

# Sessions
In the PD chatbot, sessions control how conversations are maintained between the chatbot and users. Sessions can either persist until they naturally expire due to inactivity, or a new session can be initiated each time the chatbot is loaded.

## Default Behavior

By default, PD chatbot sessions persist until they timeout due to inactivity. Specifically, sessions will automatically timeout after **30 minutes of inactivity**.

## Starting a New Session Every Time

To explicitly start a new session each time the chatbot loads, you must set the `persistSession` property to `false` in your embed code.

Here's an example implementation:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'

  Agent.initStandard({
    agentName: "your assistant name",
    persistSession: false
  });
</script>

<agent-standard style="width: 100%; height: 600px;"></agent-standard>
```

## Understanding the Configuration

- **persistSession: false**: Starts a fresh session each time the chatbot loads.
- **persistSession: true (default)**: Session persists until it reaches the timeout threshold of 30 minutes inactivity.

Choose the setting that best fits your user's interaction patterns.

