---
title: 'Start Experience'
---

# Start Experience

Start Experience controls what users see before they send their first message.

Use it to choose between a static greeting or a welcome panel with clickable starter prompts.

## Where to configure

1. Go to your agent in Predictable Dialogs.
2. Open **Theme** (Live Theming).
3. Select **Start Experience**.

## Start modes

Choose one mode:

- **Greeting message:** Show one welcome message when chat opens.
- **Starter prompts:** Show a welcome header with clickable starter prompts.

Click ↻ on the widget to preview change.

Switching modes does not delete existing content. Your greeting and prompts are preserved.

### Greeting message mode

Use this when you want a single opening message from the AI.

Greeting text supports markdown (and basic HTML compatible with markdown), for example:

```md
**Hi there**
```

```html
<strong>Hi there</strong>
```

### Starter prompts mode

Use this when you want users to quickly choose a first question.

- Up to 8 prompts
- Each prompt supports:
  - `text` (required)
  - optional emoji/icon or image URL

You can also configure a welcome section shown above prompts:

- Welcome icon/image
- Welcome title
- Welcome subtitle

If you configure only the welcome section and leave prompts empty, the welcome header still appears and vice versa.

## Pick an Icon  

You can upload images or use emojis for welcome title and starter prompts.

### Upload tab

- Click **Choose an image**
- Upload starts immediately after you select a file

Accepted formats:

- SVG
- PNG
- JPG/JPEG
- WebP
- GIF

File size limit:

- 2 MB maximum

### Emoji tab

- Emojis are grouped by category:
  - PEOPLE
  - ANIMALS and NATURE
  - FOOD and DRINK
  - TRAVEL and PLACES
  - ACTIVITIES
  - OBJECTS
  - SYMBOLS
  - FLAGS
- Clicking an emoji saves immediately

### Link tab

- Paste a public image URL
- URL edits follow the normal save flow, so click the page **Save** button (or Save FAB) to persist typed URL changes
- Upload and Emoji selections are already saved immediately, so no extra save click is needed for those actions

## What users see in the widget

Before the first user message, the widget can show:

- A greeting message, or
- A welcome header plus starter prompts

If starter prompts are enabled, clicking a prompt sends it as the first user message and continues normal conversation flow.

The starter prompt panel is hidden once the user clicks a prompt or starts typing, and it is not shown for persisted sessions.

## Quick troubleshooting

- **"File size must be 2 MB or less":** Use a smaller image
- **"Unsupported format":** Use SVG, PNG, JPG/JPEG, WebP, or GIF
- **Image URL does not render:** Verify the URL is public and points directly to an image
