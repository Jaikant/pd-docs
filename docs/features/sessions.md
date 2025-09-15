---
title: 'Sessions'
---

# Sessions

### Sessions in Predictable Dialogs

In the PD chatbot, sessions control how conversations are maintained between the chatbot and users. Sessions persist until they naturally expire due to inactivity or if a new session is started.

### Starting new sessions / Resetting Sessions

You can start a new chat session in two ways:

1. **UI Reset Button**: Click the reset button at the bottom of the chatbot interface starts a new chat session.
2. **Programmatic Reset**: Use `window.Agent.reset()` to programmatically clear session data and reinitialize the chatbot for a fresh chat conversation

The reset command works across all widget types (Standard, Popup, and Bubble widgets) and completely clears all session data.

### User Information Capture

Predictable Dialogs automatically captures user information with each session to provide better insights and personalization capabilities.

**Default Information Captured:**
- **IP Address**: Automatically captured for all sessions
- **Country**: Derived from IP address for geographic insights

**Optional User Information:**
You can capture additional user details by passing a `user` object when initializing any widget:

```javascript
Agent.initStandard({
  agentName: "your-agent-name",
  user: { // All fields are optional
    user_id: "ab123",           //  id for the user
    user_name: "Abc Def", //  name of the user
    user_email: "abc@example.com", //  email address
    user_segments: ["sports", "ott"] //  tags
  }
});
```

**Supported Fields:**
- `user_id` - Unique identifier for tracking returning users
- `user_name` - Display name for personalization
- `user_email` - Email address for contact purposes
- `user_segments` - Tags or categories for user segmentation

**Where to Find This Data:**
All captured user information appears in your session logs within the Predictable Dialogs dashboard, providing valuable insights for customer support and analytics.

**Implementation:**
This feature is available across all widget types. For full widget reference, see:
- [Standard Widget](/docs/channels/web/widgets/standard) 
- [Popup Widget](/docs/channels/web/widgets/popup)
- [Bubble Widget](/docs/channels/web/widgets/bubble)

### How sessions are counted

* **Paid plans**: A session is only counted when a visitor actively engages with the chatbot beyond the initial greeting—when the AI responds. This prevents passive greetings (such as an auto-displayed welcome message) from consuming your session quota, giving you more value and scalability within your plan.
* **Free plans**: Sessions are counted as soon as a conversation begins, including the initial greeting.