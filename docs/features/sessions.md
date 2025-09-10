---
title: 'Sessions'
---

#

### Sessions in Predictable Dialogs

In the PD chatbot, sessions control how conversations are maintained between the chatbot and users. Sessions persist until they naturally expire due to inactivity, or a new session can be initiated by clicking the reset button at the bottom of the chatbot or programmatically using `window.Agent.reset()`.

#### Resetting Sessions

You can reset a chat session in two ways:

1. **UI Reset Button**: Click the reset button at the bottom of the chatbot interface
2. **Programmatic Reset**: Use `window.Agent.reset()` to programmatically clear session data and reinitialize the chatbot for a fresh conversation

The reset command works across all widget types (Standard, Popup, and Bubble widgets) and completely clears all session data.

#### How sessions are counted

* **Paid plans**: A session is only counted when a visitor actively engages with the chatbot beyond the initial greeting—when the AI responds. This prevents passive greetings (such as an auto-displayed welcome message) from consuming your session quota, giving you more value and scalability within your plan.
* **Free plans**: Sessions are counted as soon as a conversation begins, including the initial greeting.