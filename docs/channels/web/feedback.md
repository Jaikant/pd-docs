---
title: 'Feedback'
---

# Feedback

The Web widget can collect message-level feedback on assistant replies:

- `Thumbs up` for helpful replies
- `Thumbs down` for unhelpful replies
- Optional corrective answer input when users click thumbs down

To configure feedback controls, go to [Theme > Bubble](/docs/channels/web/theme/bubble).

## What Users See In The Widget

After an AI response is complete, a message action bar can appear under the assistant message. It includes:

- `Thumbs up`
- `Thumbs down`
- `Copy message`

### If The User Clicks Thumbs Up

Positive feedback is recorded for that assistant message.

### If The User Clicks Thumbs Down

There are two behaviors based on your Bubble settings:

1. Corrective popup is `ON`:
- A popup asks: `Please enter the correct answer`
- User can click `Submit` (thumbs down + corrective answer) or `Skip` (thumbs down only)

2. Corrective popup is `OFF`:
- Thumbs down is recorded immediately
- No popup appears

## Sessions: Filter And Review Feedback

On the Sessions page, use the filter control to view:

- All sessions
- Negative feedback sessions (thumbs down)
- Positive feedback sessions (thumbs up)

How session filtering works:

- If a session has at least one thumbs down, it is treated as a negative session.
- Positive sessions are sessions with thumbs up and no thumbs down.

Inside session details:

- Assistant messages can show `Positive feedback` or `Negative feedback`
- If a corrective answer was submitted, it appears as `Corrective answer` under that message

## Where To Use Feedback

- Internal testing: Use thumbs up/down with your team before production rollout.
- Live usage: Collect feedback from customers and users after launch.
- Expert review: Use corrective answers from domain experts to improve system instructions and your knowledge base.

## Chatbot Page Behavior

On the Chatbot page inside Predictable Dialogs, the corrective popup is always ON by design, even if it is OFF in Theme settings.

This behavior supports internal support workflows.

## Corrective Answers Today

Corrective answers are currently:

- Saved with chat/session data
- Visible in session details
- Not automatically added to the knowledge base

Possible future uses (not finalized):

- Knowledge base workflows
- Evaluation workflows (evals)
