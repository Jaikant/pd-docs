---
id: sessions
description: In the PD chatbot, a session can be persisted till it times out or a new session can be started every time.
slug: /sessions
---

# Sessions

In the PD chatbot, sessions control how conversations are maintained between the chatbot and users. Sessions can either persist until they naturally expire due to inactivity, or a new session can be initiated every time the chatbot is loaded.

## Default Behavior

By default, PD chatbot sessions persist until they timeout due to inactivity. Specifically, sessions automatically timeout after **30 minutes of inactivity**.

## Persisting *Sessions* Across Navigation

When the default setting (`persistSession: true`) is enabled, the chatbot maintains the session even if the user navigates away from the chatbot page and later returns. This allows users to seamlessly resume conversations without disruption, enhancing user experience.

Additionally, for chatbot owners, enabling session persistence means fewer sessions are generated. All interactions from a single user remain consolidated within one session, making it easier to track and correlate user conversations.

Example implementation (default behavior):

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'

  Agent.initStandard({
    agentName: "your assistant name",
    persistSession: true // default setting
  });
</script>

<agent-standard style="width: 100%; height: 600px;"></agent-standard>
```

## Starting a New Session Every Time

To explicitly start a new session every time the chatbot loads, set the `persistSession` property to `false` in your embed code.

Example implementation:

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

- **persistSession: true (default)**: Sessions persist across navigation and timeout after 30 minutes of inactivity. Recommended for continuity in conversations and simplified session tracking.
- **persistSession: false**: Starts a fresh session every time the chatbot loads. Recommended when each interaction should be treated as independent.

Choose the setting that best matches your users' interaction patterns.