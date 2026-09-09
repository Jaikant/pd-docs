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

Custom CSS targets classes that already exist inside the chatbot. For example:

```css
.initial-prompt-button {
  background: linear-gradient(135deg, #fff7e8, #ffe0c6);
  border: 1px solid rgba(180, 110, 60, 0.32);
  box-shadow: 0 8px 18px rgba(154, 52, 18, 0.12);
}
```

Avoid targeting implementation utility classes. They may affect too many elements and can change without notice.

Custom CSS can usually override the default widget styles. A small set of protected elements, such as the clear chat button, use stronger internal styles. If you intentionally need to change those, use a specific selector and `!important`.

### 4. What The Manual Editor Covers

| Theme editor section | What it updates | Widget effect |
| --- | --- | --- |
| Theme Templates | Preset theme values and optional Custom CSS | Multiple widget styles at once |
| Background | Main background color | `.agent-embed-container` background |
| Roundness | Shared corner radius | Bubbles, inputs, buttons, prompts, choices |
| Start Experience | Welcome title, subtitle, prompt text, and icons | Initial welcome/prompt state |
| Font & Brand | Widget font and branding visibility | Global typography |
| Avatars | Assistant/user avatar visibility and image | Assistant and user avatar rendering |
| Bubbles | Assistant/user bubble text and background colors | `.agent-host-bubble`, `.agent-guest-bubble` |
| Message Action Bar | Feedback/copy controls below assistant messages | Thumbs up, thumbs down, copy, corrective popup |
| Send Button | Button label, icon, text color, background color | `.agent-button`, `.send-icon`, `.send-icon-image` |
| Input | Input type, field length, placeholder, input colors | `.agent-input`, `.text-input`, fixed/floating input behavior |
| Custom CSS | Raw CSS rules | Advanced styling and selector-specific overrides |

Key limitation: several editor controls update shared variables. For example, user bubble colors also drive starter prompt colors by default. Use selectors such as `.initial-prompt-button` or variables such as `--agent-initial-prompt-bg-color` to style prompts separately.

### 5. Widget Area Map

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
| Clear chat button | `#clear-button`, `.clear-button` |

#### Conversation State

| Area | Selectors |
| --- | --- |
| Scrollable message viewport | `.agent-chat-view`, `.chat-container`, `.scrollable-container` |
| Assistant avatar column | `.agent-avatar-container`, `.agent-avatar-container figure`, `.agent-avatar-container img` |
| Assistant bubble wrapper | `.agent-host-bubble-wrapper` |
| Assistant bubble visual surface | `.agent-host-bubble:not(.agent-host-bubble-content)` |
| Assistant text content | `.agent-host-bubble-content`, `.ai-bubble` |
| Assistant message actions | `.agent-message-action-bar`, `.agent-message-action-button` |
| Action icons | `.agent-message-action-icon-fill`, `.agent-message-action-icon-outline` |
| User message row | `.guest-container` |
| User bubble | `.agent-guest-bubble` |
| User avatar | `.guest-container figure`, `.guest-container img` |
| Input area | `.agent-input`, `.fixed-input-overlay`, `.text-input`, `.agent-button` |

### 6. CSS Selector Reference

#### Root, Layout, And Scroll

##### `.agent-embed-container`

Styles the outermost chatbot container. This is the best root selector for widget-wide CSS and variables.

The full widget frame has an inset blue ring:

```css
.agent-embed-container {
  box-shadow: inset 0 0 0 3px #2563eb;
}
```

Limitation: a normal `outline` may not be visible on this selector because outlines paint outside the element box, and the widget container can clip that area. Use an inset `box-shadow`, an inward outline offset, a border, or a background change when testing this selector.

Valid properties include `box-shadow` (inset), `outline-offset`, `border`, and `background`.

##### `.agent-chat-view`

Styles the scrollable conversation width. Useful for message viewport width, message-column padding, and spacing between conversation items. Do not use it for full-widget background, border, or frame styling; use `.agent-embed-container` for those.

Example for narrowing the message column while the outer widget frame stays the same size:

```css
.agent-chat-view {
  max-width: 640px;
}
```

##### `.chat-container`

Styles the conversation message stream. Use it for spacing between conversation items.

Example for message spacing in the conversation stream increases:

```css
.chat-container {
  gap: 14px;
}
```

##### `.chat-container.ready`

Styles the loaded conversation message stream after mount. Useful for post-mount opacity or entry transitions.

The loaded chat stream is slightly translucent after mount:

```css
.chat-container.ready {
  opacity: 0.92;
}
```

##### `.scrollable-container`

Styles the scrollable viewport. Default CSS hides scrollbars.

Message content shifts slightly away from the right edge:

```css
.scrollable-container {
  padding-right: 8px;
}
```

##### `.agent-input-container`

Styles the input and welcome panel width.

The welcome panel and fixed input narrow to 640px:

```css
.agent-input-container {
  max-width: 640px;
}
```

##### `.fixed-input-overlay`

Styles the fixed bottom input surface.

The fixed bottom input surface has a teal border:

```css
.fixed-input-overlay {
  border: 2px solid #14b8a6;
}
```

#### Welcome And Starter Prompts

##### `.initial-prompts-panel`

Styles the entire welcome/prompts panel that wraps the title, subtitle, and prompts.

The welcome/prompts panel gets a faint teal background:

```css
.initial-prompts-panel {
  background: rgba(20, 184, 166, 0.08);
}
```

##### `.initial-prompts-heading`

Styles the title/subtitle stack. Use it for spacing around heading content.

The gap below the welcome heading increases:

```css
.initial-prompts-heading {
  margin-bottom: 24px;
}
```

##### `.initial-prompts-title`

Styles the welcome title row. Use it for title text, size, color, and layout.

The welcome title becomes teal and larger:

```css
.initial-prompts-title {
  color: #0f766e;
  font-size: 24px;
}
```

##### Welcome Title Icon: `.initial-prompts-title-icon` And `.initial-prompts-title-icon img`

These selectors only apply to the separate welcome icon rendered before the title through `welcome.icon` or `welcome.iconUrl`. They do not target emoji typed inside the title text. They also do not target prompt emojis; use `.initial-prompt-icon` for prompt icons.

##### `.initial-prompts-title-icon`

Styles the welcome icon wrapper. It works for emoji or image icons.

The separate welcome icon slot becomes larger. For emoji welcome icons, the emoji itself becomes larger too:

```css
.initial-prompts-title-icon {
  width: 48px;
  height: 48px;
  font-size: 28px;
}
```

Useful properties include `width`, `height`, `font-size`, `margin`, `opacity`, `transform`, and `display`.

##### `.initial-prompts-title-icon img`

Styles an uploaded or URL welcome icon. Use it for image fit, mask, border, and size.

An uploaded welcome title icon fills the icon slot instead of fitting inside it. Requires a welcome `iconUrl`; this selector does not affect emoji icons.

```css
.initial-prompts-title-icon img {
  object-fit: cover;
}
```

Useful properties include `object-fit`, `object-position`, `filter`, and `opacity`.

##### `.initial-prompts-subtitle`

Styles the welcome subtitle. Use it for secondary text styling.

The welcome subtitle appears gray and italic:

```css
.initial-prompts-subtitle {
  color: #475569;
  font-style: italic;
}
```

##### `.initial-prompts-list`

Styles the prompt button stack. Use it for prompt spacing and layout.

Starter prompt buttons have more vertical spacing:

```css
.initial-prompts-list {
  gap: 14px;
}
```

##### `.initial-prompt-button`

Styles an individual starter prompt card. This is the best selector for prompt gradients, borders, shadows, and padding.

Each starter prompt card has a teal border and shadow:

```css
.initial-prompt-button {
  border: 2px solid #0f766e;
  box-shadow: 0 8px 18px rgba(15, 118, 110, 0.16);
}
```

##### `.initial-prompt-button:hover`

Styles the starter prompt hover state.

A starter prompt nudges right on hover:

```css
.initial-prompt-button:hover {
  transform: translateX(3px);
}
```

##### `.initial-prompt-button:active`

Styles the starter prompt active state.

A starter prompt shrinks slightly while pressed:

```css
.initial-prompt-button:active {
  transform: scale(0.98);
}
```

##### `.initial-prompt-button:focus-visible`

Styles keyboard focus on a starter prompt. Use it for accessible focus styling.

Keyboard focus on a starter prompt shows an amber outline:

```css
.initial-prompt-button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

##### Starter Prompt Icon: `.initial-prompt-icon` And `.initial-prompt-icon img`

These selectors only apply to the separate prompt icon rendered through `prompt.icon` or `prompt.iconUrl`. They do not target emoji typed inside the prompt text.

##### `.initial-prompt-icon`

Styles the prompt icon wrapper. It works for emoji or image icons.

The prompt icon wrapper is only 20px by 20px by default. This example resizes the separate prompt icon slot and makes its wrapper visibly round:

```css
.initial-prompt-icon {
  width: 28px;
  height: 28px;
  font-size: 22px;
  background: #fee2e2;
  border-radius: 999px;
}
```

Useful properties include `width`, `height`, `font-size`, `background`, `border-radius`, `margin`, `opacity`, and `transform`.

##### `.initial-prompt-icon img`

Styles an uploaded or URL prompt icon. Use it for object fit, size, and masks.

This selector only affects uploaded prompt icons from `prompt.iconUrl`. `object-fit` may show no visible difference when the image is already square, already transparent/padded, or naturally fits the 20px square slot:

```css
.initial-prompt-icon img {
  filter: grayscale(1);
}
```

Useful properties include `filter`, `opacity`, `object-fit`, `object-position`, and `border-radius`.

##### `.initial-prompt-text`

Styles prompt text. Use it for typography and wrapping.

Starter prompt text becomes bold:

```css
.initial-prompt-text {
  font-weight: 700;
}
```

#### Messages And Bubbles

##### `.agent-host-bubble-wrapper`

Styles the assistant bubble wrapper. Use it to control max width and inherited assistant color.

Assistant message bubbles become narrower:

```css
.agent-host-bubble-wrapper {
  max-width: 86%;
}
```

##### `.agent-host-bubble:not(.agent-host-bubble-content)`

Styles only the assistant bubble visual surface. Prefer this for assistant bubble background, gradient, border, and shadow.

Only the assistant bubble visual surface gets the gradient, border, and shadow:

```css
.agent-host-bubble:not(.agent-host-bubble-content) {
  background: linear-gradient(135deg, #ffffff, #eef6ff);
  border: 1px solid rgba(37, 99, 235, 0.35);
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.14);
}
```

##### `.agent-host-bubble`

Styles the assistant bubble shared class. Use it carefully because it is applied to both the visual surface and text layer.

Avoid using this selector directly for visual bubble styling. It is applied to both the assistant bubble visual shell and the assistant text content layer, so `background`, `border`, `outline`, `box-shadow`, and `border-radius` can create nested or duplicated bubble styling. Use `.agent-host-bubble:not(.agent-host-bubble-content)` for the assistant bubble visual surface.

Example for changing inherited assistant bubble text color only:

```css
.agent-host-bubble {
  color: #0f766e;
}
```

##### `.agent-host-bubble-content`

Styles the assistant text content layer.

Avoid using this selector for visual bubble styling. It targets the assistant text content layer inside the bubble, so `outline`, `background`, `border`, `box-shadow`, and `border-radius` create inner rectangles or are blocked by `immutable.css`.

No recommended standalone visual example. Use `.agent-host-bubble:not(.agent-host-bubble-content)` for the assistant bubble surface and `.ai-bubble` for assistant text typography.

##### `.ai-bubble`

Styles the rendered assistant markdown root. Use this for assistant message text typography, including `line-height`, `font-size`, `font-weight`, text color, paragraph rhythm, and markdown child elements:

```css
.ai-bubble {
  font-size: 15px;
  line-height: 1.6;
}
```

##### `.ai-bubble p`

Styles assistant markdown paragraphs.

Assistant markdown paragraphs have more space below them:

```css
.ai-bubble p {
  margin-bottom: 14px;
}
```

##### `.ai-bubble ul`

Styles assistant markdown unordered lists.

Assistant unordered lists use square bullets and deeper indentation:

```css
.ai-bubble ul {
  list-style-type: square;
  padding-left: 28px;
}
```

##### `.ai-bubble ol`

Styles assistant markdown ordered lists.

Assistant ordered lists use uppercase letters and deeper indentation:

```css
.ai-bubble ol {
  list-style-type: upper-alpha;
  padding-left: 28px;
}
```

##### `.ai-bubble li`

Styles assistant markdown list items.

Assistant list items have more vertical spacing:

```css
.ai-bubble li {
  margin: 8px 0;
}
```

##### `.ai-bubble pre`

Styles assistant markdown code blocks.

Assistant code blocks have a dark background:

```css
.ai-bubble pre {
  background: #111827;
  color: #f8fafc;
  padding: 12px;
  border-radius: 6px;
}
```

##### `.ai-bubble code`

Styles assistant markdown inline code.

Inline assistant code has a subtle gray pill background:

```css
.ai-bubble code {
  background: rgba(15, 23, 42, 0.1);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
}
```

##### `.agent-guest-bubble`

Styles the user message bubble. This is the best selector for user bubble gradient, border, shadow, radius, and text typography. Guest messages do not have an `.ai-bubble` child wrapper.

Guest message text changes size and line height:

```css
.agent-guest-bubble {
  font-size: 15px;
  line-height: 1.6;
}
```

##### `.guest-container`

Styles the user message row. Use this for guest-side spacing between the guest bubble and guest avatar. For consistent avatar-to-bubble spacing on both sides, change this together with `.agent-avatar-container`.

Guest bubble and guest avatar spacing increases:

```css
.guest-container {
  gap: 56px;
}
```

#### Avatars And Typing

##### `.agent-avatar-container`

Styles the assistant avatar column. Useful for horizontal space around the assistant avatar column. The avatar itself is absolutely positioned inside this container with an inline `top`, so padding such as `padding-top` may not visibly move it. For consistent avatar-to-bubble spacing on both sides, change this together with `.guest-container`. Use `.agent-avatar-container figure` or `.agent-avatar-container img` for avatar frame and image styling.

The assistant avatar column reserves more horizontal space:

```css
.agent-avatar-container {
  width: 56px;
}
```

##### `.agent-avatar-container figure`

Styles the assistant avatar frame. Use it for frame size, border, and shadow.

The assistant avatar frame has a blue border:

```css
.agent-avatar-container figure {
  border: 2px solid #2563eb;
}
```

##### `.agent-avatar-container img`

Styles the assistant avatar image. Use it for image border, shadow, and filter.

The assistant URL avatar image appears more saturated:

```css
.agent-avatar-container img {
  filter: saturate(1.35);
}
```

##### `.guest-container figure`

Styles the user avatar frame beside `.agent-guest-bubble`. Use `.guest-container` for spacing between the guest bubble and avatar.

The user avatar frame has a teal border:

```css
.guest-container figure {
  border: 2px solid #0f766e;
}
```

##### `.guest-container img`

Styles the user avatar image. Use it for image border, shadow, and filter.

The user URL avatar image appears grayscale:

```css
.guest-container img {
  filter: grayscale(1);
}
```

##### `[data-testid="default-avatar"]`

Styles the default avatar frame. It is available when no avatar URL is used.

Default fallback avatars have an amber ring:

```css
[data-testid="default-avatar"] {
  box-shadow: 0 0 0 3px #f59e0b;
}
```

##### `.bubble-typing`

Styles the typing bubble shell. It also has `.agent-host-bubble`.

The assistant typing bubble is taller while a response is typing:

```css
.bubble-typing {
  min-height: 32px;
}
```

##### Typing Dots: `.bubble1`, `.bubble2`, And `.bubble3`

Style the typing dots and connecting dots.

The three typing dots use different colors while a response is typing:

```css
.bubble1 {
  background-color: #ef4444;
}

.bubble2 {
  background-color: #f59e0b;
}

.bubble3 {
  background-color: #10b981;
}
```

#### Inputs And Buttons

##### `.agent-input`

Styles shared input-like surfaces used by fixed input, floating input, search, date, and payment.

Input-like surfaces have a blue border:

```css
.agent-input {
  border: 2px solid #2563eb;
}
```

##### `.fixed-input-overlay.agent-input`

Styles only the fixed bottom input surface. Use this when fixed input should differ from other inputs.

Only the fixed bottom input surface gets the translucent background:

```css
.fixed-input-overlay.agent-input {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
}
```

##### `.agent-chat-view .agent-input`

Styles floating input blocks inside the message stream. Use this when floating input should differ from the fixed bottom input.

Floating input blocks inside the message stream get an orange border, while the fixed bottom input does not. This only applies when an input is rendered inside `.agent-chat-view`; fixed-bottom input is rendered outside it:

```css
.agent-chat-view .agent-input {
  border: 2px solid #f97316;
}
```

##### `.text-input`

Styles text inputs, textareas, and search inputs. Use it for field typography and color.

Typed input text becomes darker and heavier:

```css
.text-input {
  color: #0f172a;
  font-weight: 500;
}
```

##### `.text-input::placeholder`

Styles placeholder text. Use higher specificity and `!important` if needed.

Input placeholder text appears rose colored:

```css
.text-input::placeholder {
  color: #be123c !important;
  opacity: 1 !important;
}
```

##### `[data-testid="auto-resizing-textarea"]`

Styles the fixed-bottom textarea. It is useful for multiline and scrollbar styling.

The fixed-bottom textarea caps at 160px when it has many lines:

```css
[data-testid="auto-resizing-textarea"] {
  max-height: 160px;
}
```

##### `[data-testid="auto-resizing-textarea"]::-webkit-scrollbar`

Styles the textarea scrollbar in Chrome and Safari.

The fixed-bottom textarea scrollbar is wider in Chrome/Safari when content overflows:

```css
[data-testid="auto-resizing-textarea"]::-webkit-scrollbar {
  width: 12px;
}
```

##### `.agent-button`

Styles primary buttons, including send, single-choice, rating number, and upload submit buttons.

Primary buttons use a teal background:

```css
.agent-button {
  background: #0f766e;
  border-color: #0f766e;
}
```

##### `.agent-button:hover`

Styles the primary button hover state.

Primary buttons lift slightly on hover:

```css
.agent-button:hover {
  transform: translateY(-1px);
}
```

##### `.agent-button:active`

Styles the primary button active state.

Primary buttons shrink slightly while pressed:

```css
.agent-button:active {
  transform: scale(0.98);
}
```

##### `.agent-button > .send-icon`

Styles the default mobile send SVG icon inside `.agent-button`.

The default mobile send SVG icon becomes larger:

```css
.agent-button > .send-icon {
  width: 22px;
  height: 22px;
}
```

##### `.agent-button > .send-icon-image`

Styles the custom send icon image inside `.agent-button` when the send button is icon-only.

The custom send icon image is circular when the send button uses `buttonIconUrl`:

```css
.agent-button > .send-icon-image {
  border-radius: 999px;
}
```

##### `.send-icon`

Styles the send SVG icon child of `.agent-button`.

The default mobile send SVG icon is tilted:

```css
.send-icon {
  transform: rotate(-12deg);
}
```

##### `.send-icon-image`

Styles the child image for a custom button icon.

The custom send icon image is slightly translucent:

```css
.send-icon-image {
  opacity: 0.75;
}
```

##### Clear Button: `#clear-button` And `.clear-button`

Styles the clear chat button. It is protected by internal CSS.

Use `.agent-embed-container #clear-button` with `!important` for protected visual properties such as color, background, border, layout, positioning, opacity, typography, transition, hover brightness, and active brightness:

```css
.agent-embed-container #clear-button {
  background-color: #111827 !important;
  color: #ffffff !important;
  border-color: #111827 !important;
}
```

Use `.clear-button` for unprotected properties like `transform`:

```css
.clear-button {
  transform: rotate(-20deg);
}
```

Limitations: do not use `.clear-button` for `color`, `background`, `background-color`, `border`, `border-color`, positioning, sizing, opacity, visibility, display, alignment, gap, font size, line height, font weight, transition, hover brightness, or active brightness.

Alternatives: use `.agent-embed-container #clear-button` with `!important` for protected visual properties.

#### Feedback And Message Actions

##### `.agent-message-action-bar`

Styles the action row below completed assistant messages. It contains thumbs up, thumbs down, and copy actions.

Message action buttons have more space between them:

```css
.agent-message-action-bar {
  gap: 0.75rem;
}
```

##### `.agent-message-action-button`

Styles an individual action icon button. Use it for size, color, opacity, and background.

Each message action button has a faint circular background:

```css
.agent-message-action-button {
  background: rgba(15, 23, 42, 0.08);
}
```

##### `.agent-message-action-button:hover`

Styles the message action hover state.

A message action button lifts slightly on hover:

```css
.agent-message-action-button:hover {
  transform: translateY(-1px);
}
```

##### `.agent-message-action-button.selected`

Styles the selected feedback or copy-success state.

A selected feedback or copied action button has a teal background:

```css
.agent-message-action-button.selected {
  background: rgba(15, 118, 110, 0.18);
}
```

##### `.agent-message-action-button:disabled`

Styles the pending feedback state while feedback is submitting.

A feedback action button shows an amber outline while feedback is submitting:

```css
.agent-message-action-button:disabled {
  outline: 2px solid #f59e0b;
}
```

##### `.agent-message-action-icon-fill`

Styles the filled SVG icon layer used by thumbs/copy icons.

The filled icon layer is slightly smaller when it appears on hover or selected state:

```css
.agent-message-action-icon-fill {
  transform: scale(0.9);
  transform-origin: center;
}
```

##### `.agent-message-action-icon-outline`

Styles the outline SVG icon layer used by thumbs/copy icons.

The outline icon layer appears slightly larger:

```css
.agent-message-action-icon-outline {
  transform: scale(1.08);
  transform-origin: center;
}
```

##### `.agent-feedback-popup`

Styles the corrective feedback popup that appears after thumbs down when enabled.

The corrective feedback popup has a teal border and shadow:

```css
.agent-feedback-popup {
  border-color: #0f766e;
  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.16);
}
```

##### `.agent-feedback-popup-label`

Styles the corrective popup label above the textarea.

The corrective popup label is teal:

```css
.agent-feedback-popup-label {
  color: #0f766e;
}
```

##### `.agent-feedback-popup-input`

Styles the corrective popup textarea.

The corrective popup textarea is taller:

```css
.agent-feedback-popup-input {
  min-height: 96px;
}
```

##### `.agent-feedback-popup-input:focus`

Styles corrective textarea focus.

Focused corrective popup textarea has an orange focus ring:

```css
.agent-feedback-popup-input:focus {
  border-color: #f97316;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.22);
}
```

##### `.agent-feedback-popup-actions`

Styles the corrective popup button row that wraps skip and submit buttons.

Corrective popup buttons spread to opposite ends of the row:

```css
.agent-feedback-popup-actions {
  justify-content: space-between;
}
```

##### `.agent-feedback-popup-button`

Styles the corrective popup submit button.

Corrective popup submit button has less rounded corners:

```css
.agent-feedback-popup-button {
  border-radius: 6px;
}
```

##### `.agent-feedback-popup-button.secondary`

Styles the corrective popup skip button.

Corrective popup skip button has a dashed border:

```css
.agent-feedback-popup-button.secondary {
  border-style: dashed;
}
```

##### `.agent-feedback-popup-button:disabled`

Styles the corrective popup pending state while feedback is submitting.

Corrective popup buttons show an amber outline while feedback is submitting:

```css
.agent-feedback-popup-button:disabled {
  outline: 2px solid #f59e0b;
}
```

### 7. Common Custom CSS Recipes

#### Style Starter Prompts Separately From User Bubbles

```css
.agent-embed-container {
  --agent-initial-prompt-bg-color: #fff7ed !important;
  --agent-initial-prompt-color: #263342 !important;
  --agent-initial-prompt-border-color: rgba(234, 88, 12, 0.24) !important;
}

.initial-prompt-button {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  box-shadow: 0 8px 18px rgba(154, 52, 18, 0.12);
}
```

#### Add Assistant And User Bubble Gradients

Use `:not(.agent-host-bubble-content)` for assistant bubble surfaces. This avoids styling the internal assistant text layer as a second bubble.

```css
.agent-host-bubble:not(.agent-host-bubble-content) {
  background: linear-gradient(135deg, #ffffff, #eef6ff);
  border: 1px solid rgba(45, 90, 140, 0.2);
  box-shadow: 0 10px 24px rgba(20, 50, 90, 0.12);
}

.agent-guest-bubble {
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.22);
}
```

#### Add A Glass Fixed Input

```css
.fixed-input-overlay.agent-input {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.32);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
  backdrop-filter: blur(14px);
}
```

#### Show A Thin Scrollbar

```css
.scrollable-container {
  scrollbar-width: thin;
}
```

#### Improve Assistant Markdown Typography

```css
.ai-bubble {
  font-size: 15px;
  line-height: 1.6;
}

.ai-bubble pre {
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.08);
}

.ai-bubble code {
  padding: 0.1rem 0.35rem;
  border-radius: 5px;
  background: rgba(15, 23, 42, 0.08);
}
```

#### Match Typing Dots To Assistant Text

```css
.agent-host-bubble {
  color: #111827;
}

.bubble1,
.bubble2,
.bubble3 {
  background-color: #111827;
}
```

#### Style Avatars

```css
.agent-avatar-container img,
.guest-container img {
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);
}
```

#### Restyle Message Actions

```css
.agent-message-action-button {
  width: 1.75rem;
  height: 1.75rem;
  background: rgba(15, 23, 42, 0.04);
}

.agent-message-action-button.selected {
  background: rgba(var(--agent-button-bg-color-rgb), 0.14);
}
```

#### Use Media Queries

```css
@media (max-width: 600px) {
  .agent-embed-container {
    font-size: 15px;
  }

  .initial-prompt-button {
    padding: 10px 12px;
  }
}
```

#### Override The Protected Clear Chat Button

```css
.agent-embed-container #clear-button {
  background: #111827 !important;
  color: #ffffff !important;
  border-color: #111827 !important;
}
```

### 8. Caveats

1. `.agent-host-bubble` is applied to both the assistant visual bubble and the assistant text content layer. Use `.agent-host-bubble:not(.agent-host-bubble-content)` for visual backgrounds, borders, gradients, and shadows.
2. `.agent-host-bubble-content` and `#clear-button` have protected internal styles. Use stronger selectors and `!important` only when you intentionally want to override those rules.
3. The manual editor updates shared variables. Custom CSS selectors are the best way to split surfaces that share a variable, such as starter prompts and user bubbles.
4. Assistant message content is sanitized HTML. For markdown styling, target standard tags inside `.ai-bubble`, such as `p`, `ul`, `ol`, `li`, `a`, `pre`, and `code`.
5. Prefer semantic classes over data test selectors when both are available.
