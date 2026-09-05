---
title: 'Custom CSS'
---

# Custom CSS

Predictable Dialogs lets you customize an embedded web chatbot with the visual theme editor and, when you need more control, with Custom CSS. Use Custom CSS for details the manual editor does not expose: gradients, shadows, borders, layout changes, hover states, selected states, markdown typography, starter prompt styling, and block-specific styling.

The manual editor updates broad theme values. Those values are converted to CSS variables and consumed by the widget styles.

:::tip Theme Templates
Theme templates are a good starting point when you want a polished base quickly. Apply the closest template first, then use Custom CSS for brand-specific details.
:::

:::note
Custom CSS is intended for the chatbot content inside the web widget. To style the external bubble launcher, see [Bubble widget external styling](/docs/channels/web/widgets/bubble#external-styling).
:::

### 1. Open Custom CSS

1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).
2. Select or create an agent.
3. Open the agent's **Theme** page.
4. Expand **Custom CSS**.
5. Add your CSS and save the theme.

### 2. Recommended Workflow

1. Use the manual editor for broad values such as background, font, bubble colors, avatars, input colors, and roundness.
2. Use a theme template if it is close to the desired design.
3. Use Custom CSS for precise styling that the editor cannot isolate.
4. Preview the widget in both the welcome state and the conversation state.
5. Save the theme, then refresh the page where the chatbot is embedded.

### 3. How Custom CSS Works

Custom CSS targets classes that already exist inside the chatbot. Scope rules under `.agent-embed-container` when possible so the CSS stays tied to the widget:

```css
.agent-embed-container .initial-prompt-button {
  background: linear-gradient(135deg, #fff7e8, #ffe0c6);
  border: 1px solid rgba(180, 110, 60, 0.32);
  box-shadow: 0 8px 18px rgba(154, 52, 18, 0.12);
}
```

Avoid targeting utility classes such as `.flex`, `.w-full`, `.px-4`, or `.rounded-lg`. They are implementation details and may affect too many elements.

Custom CSS can usually override the default widget styles. A small set of protected elements, such as the branding badge and clear chat button, use stronger internal styles. If you intentionally need to change those, use a specific selector and `!important`.

### 4. What The Manual Editor Covers

| Theme editor section | What it updates | Widget effect |
| --- | --- | --- |
| Theme Templates | Preset theme values and optional Custom CSS | Multiple widget styles at once |
| Background | Main background color | `.agent-embed-container` background |
| Roundness | Shared corner radius | Bubbles, inputs, buttons, prompts, choices |
| Start Experience | Welcome title, subtitle, prompt text, and icons | Initial welcome/prompt state |
| Font & Brand | Widget font and branding visibility | Global typography and branding badge |
| Avatars | Assistant/user avatar visibility and image | Assistant and user avatar rendering |
| Bubbles | Assistant/user bubble text and background colors | `.agent-host-bubble`, `.agent-guest-bubble` |
| Message Action Bar | Feedback/copy controls below assistant messages | Thumbs up, thumbs down, copy, corrective popup |
| Send Button | Button label, icon, text color, background color | `.agent-button`, `.send-icon`, `.send-icon-image` |
| Input | Input type, field length, placeholder, input colors | `.agent-input`, `.text-input`, fixed/floating input behavior |
| Custom CSS | Raw CSS rules | Advanced styling and selector-specific overrides |

Key limitation: several editor controls update shared variables. For example, user bubble colors also drive starter prompt colors by default. Use selectors such as `.initial-prompt-button` or variables such as `--agent-initial-prompt-bg-color` to style prompts separately.

### 5. Theme Variables

The widget exposes CSS variables for common theme values. You can override them from Custom CSS:

```css
.agent-embed-container {
  --agent-input-max-width: 720px !important;
  --agent-initial-prompt-bg-color: #fff7ed !important;
  --agent-initial-prompt-color: #263342 !important;
}
```

| Variable | Area affected | Notes |
| --- | --- | --- |
| `--agent-embed-container-bg-image` | Widget background image | Used by `.agent-embed-container` |
| `--agent-embed-container-bg-color` | Widget background color | Used by `.agent-embed-container` |
| `--agent-embed-container-font-family` | Widget font | Applied across the chatbot |
| `--agent-embed-container-color` | General text color | Used by selectable inputs and picture choices |
| `--agent-host-bubble-bg-color` | Assistant bubble background | Used by assistant bubbles and some secondary controls |
| `--agent-host-bubble-color` | Assistant bubble text/icons | Used by assistant text, typing dots, and message actions |
| `--agent-host-bubble-border` | Assistant bubble border | Consumed by assistant bubbles; not exposed in the manual editor |
| `--agent-guest-bubble-bg-color` | User bubble background | Also copied to starter prompt background by default |
| `--agent-guest-bubble-color` | User bubble text | Also copied to starter prompt text by default |
| `--agent-input-bg-color` | Input background | Used by text, search, date, and payment input surfaces |
| `--agent-input-color` | Input text color | Also used by welcome title/subtitle |
| `--agent-input-placeholder-color` | Placeholder color | Used by `.text-input::placeholder` |
| `--agent-button-bg-color` | Primary button background | Used by send, choice, upload, rating, and focus styles |
| `--agent-button-bg-color-rgb` | RGB version of primary button background | Used for translucent hover, focus, and selected states |
| `--agent-button-color` | Primary button text/icon color | Used by `.agent-button`, `.send-icon`, and file count badges |
| `--agent-checkbox-bg-color` | Checkbox background | Used by multi-choice checkboxes |
| `--selectable-base-alpha` | Selectable transparency base | Used by selectable choice styles |
| `--agent-initial-prompt-radius` | Starter prompt radius | Defaults to the shared radius |
| `--agent-initial-prompt-bg-color` | Starter prompt background | Defaults to user bubble background |
| `--agent-initial-prompt-color` | Starter prompt text/icon color | Defaults to user bubble text color |
| `--agent-initial-prompt-border-color` | Starter prompt border | Custom CSS variable, not exposed in the manual editor |
| `--agent-border-radius` | Shared radius | Used by bubbles, inputs, buttons, choices, date, upload |
| `--agent-content-max-width` | Message viewport max width | Used by `.agent-chat-view` |
| `--agent-input-max-width` | Input and starter panel max width | Used by `.agent-input-container` |
| `--space-safe-bottom` | Fixed input bottom spacing | Useful for mobile safe-area spacing |
| `--layer-container` | Standard widget input z-index | Used by fixed bottom input |
| `--layer-overlay` | Bubble/popup input z-index | Used by fixed bottom input |

If you override `--agent-button-bg-color`, also override `--agent-button-bg-color-rgb` so focus rings, selected states, and translucent hover colors match.

### 6. Widget Area Map

Use this map to choose the right selector for each visible area.

#### Welcome State

| Area | Selectors |
| --- | --- |
| Whole widget frame/background | `.agent-embed-container` |
| Welcome/start panel | `.initial-prompts-panel`, `.agent-input-container` |
| Welcome title row | `.initial-prompts-heading`, `.initial-prompts-title` |
| Welcome icon/image | `.initial-prompts-title-icon`, `.initial-prompts-title-icon img` |
| Welcome subtitle | `.initial-prompts-subtitle` |
| Prompt list | `.initial-prompts-list` |
| Prompt cards | `.initial-prompt-button` |
| Prompt icon/image | `.initial-prompt-icon`, `.initial-prompt-icon img` |
| Prompt text | `.initial-prompt-text` |
| Bottom input surface | `.agent-input`, `.fixed-input-overlay`, `.agent-input-container` |
| Input field | `.text-input`, `[data-testid="auto-resizing-textarea"]` |
| Send button | `.agent-button`, `.send-icon`, `.send-icon-image` |
| Branding badge | `#lite-badge`, `.lite-badge` |
| Clear chat button | `#clear-button`, `.clear-button` |

#### Conversation State

| Area | Selectors |
| --- | --- |
| Scrollable message viewport | `.agent-chat-view`, `.chat-container`, `.scrollable-container` |
| Assistant avatar column | `.agent-avatar-container`, `.agent-avatar-container figure`, `.agent-avatar-container img` |
| Assistant bubble wrapper | `.agent-host-bubble-wrapper` |
| Assistant bubble visual surface | `.agent-host-bubble:not(.agent-host-bubble-content)` |
| Assistant text content | `.agent-host-bubble-content`, `.ai-bubble`, `.slate-html-container` |
| Assistant message actions | `.agent-message-action-bar`, `.agent-message-action-button` |
| Action icons | `.agent-message-action-icon-fill`, `.agent-message-action-icon-outline` |
| User message row | `.guest-container` |
| User bubble | `.agent-guest-bubble` |
| User avatar | `.guest-container figure`, `.guest-container img` |
| Input area | `.agent-input`, `.fixed-input-overlay`, `.text-input`, `.agent-button` |

### 7. CSS Selector Reference

#### Root, Layout, And Scroll

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.agent-embed-container` | Outermost chatbot container | Best root scope for widget-wide CSS and variables |
| `.agent-chat-view` | Scrollable conversation width | Uses `--agent-content-max-width` |
| `.chat-container` | Message container fade-in | Gets `.ready` after mount |
| `.chat-container.ready` | Loaded message container | Useful for entry transitions |
| `.scrollable-container` | Scrollable viewport | Default CSS hides scrollbars |
| `.agent-input-container` | Input and welcome panel width | Uses `--agent-input-max-width` |
| `.fixed-input-overlay` | Fixed bottom input surface | Present on fixed bottom input |

#### Welcome And Starter Prompts

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.initial-prompts-panel` | Entire welcome/prompts panel | Wraps title, subtitle, and prompts |
| `.initial-prompts-heading` | Title/subtitle stack | Use for spacing around heading content |
| `.initial-prompts-title` | Welcome title row | Use for title text, size, color, layout |
| `.initial-prompts-title-icon` | Welcome icon wrapper | Works for emoji or image icons |
| `.initial-prompts-title-icon img` | Uploaded/URL welcome icon | Use for image fit, mask, border, size |
| `.initial-prompts-subtitle` | Welcome subtitle | Use for secondary text styling |
| `.initial-prompts-list` | Prompt button stack | Use for prompt spacing/layout |
| `.initial-prompt-button` | Individual starter prompt card | Best selector for prompt gradient, border, shadow, padding |
| `.initial-prompt-button:hover` | Prompt hover state | Default hover uses brightness |
| `.initial-prompt-button:active` | Prompt active state | Default active state uses brightness |
| `.initial-prompt-button:focus-visible` | Prompt keyboard focus | Use for accessible focus styling |
| `.initial-prompt-icon` | Prompt icon wrapper | Works for emoji or image icons |
| `.initial-prompt-icon img` | Uploaded/URL prompt icon | Use for object fit, size, masks |
| `.initial-prompt-text` | Prompt text | Use for typography and wrapping |

#### Messages And Bubbles

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.agent-host-bubble-wrapper` | Assistant bubble wrapper | Controls max width and inherited assistant color |
| `.agent-host-bubble:not(.agent-host-bubble-content)` | Assistant bubble visual surface | Prefer this for background, gradient, border, shadow |
| `.agent-host-bubble` | Assistant bubble shared class | Applied to both the visual surface and text layer; use carefully |
| `.agent-host-bubble-content` | Assistant text content layer | Protected from accidental background/border duplication |
| `.slate-html-container` | Assistant rich-text wrapper | Contains sanitized markdown HTML |
| `.ai-bubble` | Rendered assistant markdown root | Use for markdown typography |
| `.ai-bubble p` | Assistant markdown paragraphs | Use for paragraph spacing |
| `.ai-bubble ul`, `.ai-bubble ol` | Assistant markdown lists | Use for list indentation and markers |
| `.ai-bubble li` | Assistant markdown list items | Use for list spacing and line height |
| `.ai-bubble pre`, `.ai-bubble code` | Assistant code content | Use for code font, wrapping, background |
| `.agent-guest-bubble` | User message bubble | Best selector for user bubble gradient, border, shadow, radius |
| `.guest-container` | User message row | Use for row alignment and user avatar targeting |

#### Avatars And Typing

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.agent-avatar-container` | Assistant avatar column | Parent of the assistant avatar |
| `.agent-avatar-container figure` | Assistant avatar frame | Use for frame size, border, shadow |
| `.agent-avatar-container img` | Assistant avatar image | Use for image border, shadow, filter |
| `.guest-container figure` | User avatar frame | User avatar beside `.agent-guest-bubble` |
| `.guest-container img` | User avatar image | Use for image border, shadow, filter |
| `[data-testid="default-avatar"]` | Default avatar frame | Available when no avatar URL is used |
| `.bubble-typing` | Typing bubble shell | Also has `.agent-host-bubble` |
| `.bubble1`, `.bubble2`, `.bubble3` | Typing dots and connecting dots | Use for dot color, size, animation |
| `.text-fade-in` | Text/media fade-in transition | Used inside bubble content |

#### Inputs And Buttons

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.agent-input` | Shared input surface | Used by fixed input, floating input, search, date, payment |
| `.fixed-input-overlay.agent-input` | Fixed bottom input surface | Use when fixed input should differ from other inputs |
| `.agent-chat-view .agent-input` | Floating input inside message stream | Use when floating input should differ from fixed input |
| `.text-input` | Text input, textarea, search input | Use for field typography and color |
| `.text-input::placeholder` | Placeholder text | Use higher specificity and `!important` if needed |
| `[data-testid="auto-resizing-textarea"]` | Fixed-bottom textarea | Useful for multiline and scrollbar styling |
| `[data-testid="auto-resizing-textarea"]::-webkit-scrollbar` | Textarea scrollbar | Chrome/Safari scrollbar width |
| `.agent-date-input` | Date/datetime fields | Used in date and date-range forms |
| `.agent-input-error-message` | Input/payment error text | Used by payment errors |
| `.agent-button` | Primary buttons | Send, single-choice, rating number, upload submit |
| `.agent-button:hover`, `.agent-button:active` | Primary button states | Use for interaction styling |
| `.agent-button.selectable` | Unselected number rating buttons | Used by number ratings |
| `.secondary-button` | Secondary buttons | Used by secondary upload/file actions |
| `.agent-button > .send-icon` | Default mobile send SVG icon | Uses `--agent-button-color` |
| `.agent-button > .send-icon-image` | Custom send icon image | Used when the send button is icon-only |
| `.send-icon` | Send SVG icon | Child of `.agent-button` |
| `.send-icon-image` | Send image icon | Child image for custom button icon |
| `.ping span` | Attention ping on a single first choice | Uses primary button background |
| `#lite-badge`, `.lite-badge` | Branding badge | Protected by internal CSS |
| `#clear-button`, `.clear-button` | Clear chat button | Protected by internal CSS |

#### Feedback And Message Actions

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.agent-message-action-bar` | Action row below completed assistant messages | Contains thumbs up, thumbs down, copy |
| `.agent-message-action-button` | Individual action icon button | Use for size, color, opacity, background |
| `.agent-message-action-button:hover` | Action hover state | Default raises opacity |
| `.agent-message-action-button.selected` | Selected/copy-success state | Used for selected feedback and copied state |
| `.agent-message-action-button:disabled` | Pending feedback state | Used while feedback is submitting |
| `.agent-message-action-icon-fill` | Filled SVG icon layer | Used by thumbs/copy icons |
| `.agent-message-action-icon-outline` | Outline SVG icon layer | Used by thumbs/copy icons |
| `.agent-feedback-popup` | Corrective feedback popup | Appears after thumbs down when enabled |
| `.agent-feedback-popup-label` | Corrective popup label | Text above textarea |
| `.agent-feedback-popup-input` | Corrective popup textarea | User-entered correction |
| `.agent-feedback-popup-input:focus` | Corrective textarea focus | Uses button color focus ring by default |
| `.agent-feedback-popup-actions` | Corrective popup button row | Wraps skip and submit buttons |
| `.agent-feedback-popup-button` | Corrective popup submit button | Primary popup button |
| `.agent-feedback-popup-button.secondary` | Corrective popup skip button | Secondary popup button |
| `.agent-feedback-popup-button:disabled` | Popup pending state | Used while feedback is submitting |

#### Choice, Rating, Upload, Payment, And Media Blocks

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `.agent-selectable` | Multi-choice text option | Has `.selected` when checked |
| `.agent-selectable:hover` | Multi-choice hover state | Uses primary button color with alpha |
| `.agent-selectable.selected` | Selected multi-choice option | Use for selected background/border |
| `.agent-checkbox` | Checkbox square | Used in multi-choice and multi-picture choices |
| `.agent-checkbox.checked` | Checked checkbox square | Uses primary button background |
| `.agent-picture-button` | Single picture choice card | Has `.has-svg` for SVG images |
| `.agent-picture-button > img` | Single picture image | Use for image height, fit, masks |
| `.agent-picture-button.has-svg > img` | Single picture SVG image | Default uses contain and padding |
| `.agent-selectable-picture` | Multi-picture choice card | Has `.selected` and optional `.has-svg` |
| `.agent-selectable-picture:hover` | Multi-picture hover state | Uses primary button color with alpha |
| `.agent-selectable-picture.selected` | Selected multi-picture card | Use for selected background/border |
| `.agent-selectable-picture > img` | Multi-picture image | Use for image height, fit, masks |
| `.agent-selectable-picture.has-svg > img` | Multi-picture SVG image | Default uses contain and padding |
| `.rating-label` | Rating left/right labels | Labels around rating buttons |
| `.rating-icon-container` | Icon-based rating item | Inner SVG is styled separately |
| `.rating-icon-container svg` | Rating icon SVG | Use for icon size, stroke, fill |
| `.rating-icon-container.selected svg` | Selected rating icon | Fill uses primary button color |
| `.agent-upload-input` | Upload dropzone | Has `.dragging-over` during drag |
| `.agent-upload-input.dragging-over` | Active drag-over upload dropzone | Border uses primary button color |
| `.upload-progress-bar` | Upload progress fill | Uses primary button color |
| `.total-files-indicator` | Selected file-count badge | Uses primary button colors |
| `#payment-form` | Stripe payment form wrapper | Also has `.agent-input` |
| `#payment-element` | Stripe payment element container | Created at runtime |
| `#embed-bubble-content` | Embed iframe | Use for embedded iframe sizing/borders |
| `.agent-host-bubble-wrapper img` | Assistant image media | Radius follows widget radius by default |
| `.agent-host-bubble-wrapper iframe` | Assistant embed/video iframe | Radius follows widget radius by default |
| `.agent-host-bubble-wrapper video` | Assistant video media | Radius follows widget radius by default |
| `.agent-host-bubble-wrapper audio` | Assistant audio media | Target through the wrapper |

#### Bubble And Popup Shell Parts

For styling the external bubble launcher, prefer the dedicated [Bubble widget external styling](/docs/channels/web/widgets/bubble#external-styling) guide. These part selectors may still be useful when styling wrapper surfaces:

| Selector | Styles this area | Notes |
| --- | --- | --- |
| `[part="button"]` | Bubble launcher button | Available in bubble mode |
| `[part="button-icon"]` | Bubble launcher image icon | Available with a custom image icon |
| `[part="preview-message"]` | Bubble preview message | Available before opening bubble mode |
| `[part="bot"]` | Bubble chat window shell | Available in bubble mode |
| `[part="overlay"]` | Popup modal overlay | Available in popup mode |

### 8. Common Custom CSS Recipes

#### Style Starter Prompts Separately From User Bubbles

```css
.agent-embed-container {
  --agent-initial-prompt-bg-color: #fff7ed !important;
  --agent-initial-prompt-color: #263342 !important;
  --agent-initial-prompt-border-color: rgba(234, 88, 12, 0.24) !important;
}

.agent-embed-container .initial-prompt-button {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  box-shadow: 0 8px 18px rgba(154, 52, 18, 0.12);
}
```

#### Add Assistant And User Bubble Gradients

Use `:not(.agent-host-bubble-content)` for assistant bubble surfaces. This avoids styling the internal assistant text layer as a second bubble.

```css
.agent-embed-container .agent-host-bubble:not(.agent-host-bubble-content) {
  background: linear-gradient(135deg, #ffffff, #eef6ff);
  border: 1px solid rgba(45, 90, 140, 0.2);
  box-shadow: 0 10px 24px rgba(20, 50, 90, 0.12);
}

.agent-embed-container .agent-guest-bubble {
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.22);
}
```

#### Add A Glass Fixed Input

```css
.agent-embed-container .fixed-input-overlay.agent-input {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.32);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
  backdrop-filter: blur(14px);
}
```

#### Show A Thin Scrollbar

```css
.agent-embed-container .scrollable-container {
  scrollbar-width: thin;
}

.agent-embed-container .scrollable-container::-webkit-scrollbar {
  display: block;
  width: 6px;
}
```

#### Improve Assistant Markdown Typography

```css
.agent-embed-container .ai-bubble {
  font-size: 15px;
  line-height: 1.6;
}

.agent-embed-container .ai-bubble pre {
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.08);
}

.agent-embed-container .ai-bubble code {
  padding: 0.1rem 0.35rem;
  border-radius: 5px;
  background: rgba(15, 23, 42, 0.08);
}
```

#### Match Typing Dots To Assistant Text

```css
.agent-embed-container .agent-host-bubble {
  color: #111827;
}

.agent-embed-container .bubble1,
.agent-embed-container .bubble2,
.agent-embed-container .bubble3 {
  background-color: #111827;
}
```

#### Change Typing Animation

```css
@keyframes chatBubbles {
  0% {
    transform: translateY(2px);
  }
  10% {
    transform: translateY(-3px);
  }
  20% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
```

#### Style Avatars

```css
.agent-embed-container .agent-avatar-container img,
.agent-embed-container .guest-container img {
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);
}
```

#### Restyle Message Actions

```css
.agent-embed-container .agent-message-action-button {
  width: 1.75rem;
  height: 1.75rem;
  background: rgba(15, 23, 42, 0.04);
}

.agent-embed-container .agent-message-action-button.selected {
  background: rgba(var(--agent-button-bg-color-rgb), 0.14);
}
```

#### Use Media Queries

```css
@media (max-width: 600px) {
  .agent-embed-container {
    font-size: 15px;
  }

  .agent-embed-container .initial-prompt-button {
    padding: 10px 12px;
  }
}
```

#### Override Protected Footer Controls

```css
.agent-embed-container #clear-button {
  background: #111827 !important;
  color: #ffffff !important;
  border-color: #111827 !important;
}

.agent-embed-container #lite-badge {
  border-radius: 999px !important;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12) !important;
}
```

### 9. Example Full CSS Snippet

This snippet shows how to combine variables, selector-specific overrides, responsive styles, and state styling.

```css
.agent-embed-container {
  --agent-border-radius: 14px !important;
  --agent-content-max-width: 760px !important;
  --agent-input-max-width: 760px !important;
  --agent-initial-prompt-bg-color: #fff7ed !important;
  --agent-initial-prompt-color: #263342 !important;
  --agent-initial-prompt-border-color: rgba(234, 88, 12, 0.24) !important;
  --agent-button-bg-color: #2563eb !important;
  --agent-button-bg-color-rgb: 37, 99, 235 !important;
  --agent-button-color: #ffffff !important;
}

.agent-embed-container .initial-prompts-panel {
  padding: 18px 12px;
}

.agent-embed-container .initial-prompts-title {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.agent-embed-container .initial-prompts-subtitle {
  color: #4b5563;
  line-height: 1.5;
}

.agent-embed-container .initial-prompt-button {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border: 1px solid var(--agent-initial-prompt-border-color);
  box-shadow: 0 8px 18px rgba(154, 52, 18, 0.12);
}

.agent-embed-container .agent-host-bubble:not(.agent-host-bubble-content) {
  background: linear-gradient(135deg, #ffffff, #eef6ff);
  border: 1px solid rgba(45, 90, 140, 0.2);
  box-shadow: 0 10px 24px rgba(20, 50, 90, 0.12);
}

.agent-embed-container .agent-guest-bubble {
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.22);
}

.agent-embed-container .fixed-input-overlay.agent-input,
.agent-embed-container .agent-chat-view .agent-input {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.28);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.14);
}

.agent-embed-container .agent-button {
  border: 0;
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: #ffffff;
  font-weight: 700;
}

.agent-embed-container .text-input::placeholder {
  color: #6b7280 !important;
}

.agent-embed-container .ai-bubble {
  font-size: 15px;
  line-height: 1.6;
}

.agent-embed-container .agent-avatar-container img,
.agent-embed-container .guest-container img {
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);
}

.agent-embed-container .agent-message-action-button {
  background: rgba(15, 23, 42, 0.04);
}

.agent-embed-container .agent-selectable.selected,
.agent-embed-container .agent-selectable-picture.selected {
  background: rgba(var(--agent-button-bg-color-rgb), 0.16);
  border-color: rgba(var(--agent-button-bg-color-rgb), 0.45);
}

@media (max-width: 600px) {
  .agent-embed-container {
    font-size: 15px;
  }

  .agent-embed-container .initial-prompts-title {
    font-size: 21px;
  }
}
```

### 10. Caveats

1. `.agent-host-bubble` is applied to both the assistant visual bubble and the assistant text content layer. Use `.agent-host-bubble:not(.agent-host-bubble-content)` for visual backgrounds, borders, gradients, and shadows.
2. `.agent-host-bubble-content`, `#lite-badge`, and `#clear-button` have protected internal styles. Use stronger selectors and `!important` only when you intentionally want to override those rules.
3. The manual editor updates shared variables. Custom CSS selectors are the best way to split surfaces that share a variable, such as starter prompts and user bubbles.
4. Assistant message content is sanitized HTML. For markdown styling, target standard tags inside `.ai-bubble`, such as `p`, `ul`, `ol`, `li`, `a`, `pre`, and `code`.
5. Prefer semantic classes over data test selectors when both are available.
