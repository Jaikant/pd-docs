---
title: 'Custom CSS'
---

# Custom CSS

Predictable Dialogs makes it easy to embed and style an AI agent on your website. With custom CSS, you can tailor the chatbot's look and feel to match your brand—from colors and fonts to backgrounds and advanced layouts. This guide explains how to add and manage custom CSS for your chatbot.

:::tip Ready-to-Use Theme Templates
Looking for quick styling solutions? We now provide **10 built-in theme templates** directly in the Theme page that you can apply instantly without writing any CSS code. These themes automatically update both the visual styling and bubble colors. You can also check out our [AI Chatbot Templates blog](https://predictabledialogs.com/learn/ai-chatbot-templates) for additional examples.
:::

*Note*: Custom CSS helps style the contents within the chat container. 
To style the bubble widget go [here](/docs/channels/web/widgets/bubble#external-styling).

### 1. Access Theme Templates and Custom CSS

1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in). 
2. **Select** or **create** an agent, then click **Theme** in the top menu.
3. **Scroll down** to find the **Theme Templates** section which includes both theme selection and custom CSS options.

#### Theme Templates Section
The Theme Templates section provides two main options:
- **Theme Templates Accordion**: Choose from 10 pre-designed themes for instant styling
- **Custom CSS Accordion**: Write your own CSS code for complete customization

#### Using the Reset Button
At the top of the Theme Templates section, you'll find a **Reset** button (🔄) that allows you to:
- **Revert Changes**: Return to your previously saved theme settings
- **Undo Theme Selection**: Remove any theme template you've applied
- **Restore Original State**: Get back to your custom CSS before applying themes

**When to Use Reset**: Click reset when you want to undo theme template changes and return to your original customizations. This restores both your custom CSS and bubble color settings to their saved state.

### 2. Using Theme Templates as Starting Points

**Recommended Approach**: Instead of starting from scratch, consider using a theme template as your foundation:

1. **Browse Theme Templates**: Expand the Theme Templates accordion and review the 10 available themes
2. **Apply Similar Theme**: Choose a theme that's closest to your desired design
3. **Customize with CSS**: Expand the Custom CSS accordion and add your modifications
4. **Save Changes**: Click "Save Custom CSS" to persist your customizations

This approach gives you:
- **Professional Foundation**: Start with a well-designed base
- **Time Savings**: Avoid writing common CSS patterns from scratch  
- **Color Coordination**: Automatic bubble color updates that you can further customize

### 3. Writing Custom CSS

1. **Expand Custom CSS Accordion**: Find the Custom CSS section within Theme Templates
2. **Paste** your CSS code into the **Custom CSS** field.
3. **Click "Save Custom CSS".**
4. **Refresh** or **revisit** the page where your agent is embedded to see the changes applied.

## 4. How Custom CSS Works

The chatbot can be customized using custom CSS by targeting existing classes on the chatbot. Here's a comprehensive example showing how multiple elements can be styled:

```css
.agent-input {
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.12);
  border-radius: 0.75rem;
}
.agent-embed-container {
  border-radius: 6px;
}
.agent-host-bubble {
  border: 1px solid white;
  border-radius: 6px;
}
.agent-guest-bubble {
  border: 1px solid white;
  border-radius: 6px;
}
```

In the above CSS:
- The **input element** gets a subtle box shadow and rounded corners
- The **main container** hosting the chatbot gets a 6px border radius
- Both **host bubble** (AI messages) and **guest bubble** (user messages) get white borders and rounded corners

You can create a wide variety of custom CSS by targeting different classes in the code. The comprehensive class reference below will help you understand what each class controls and how to use them effectively.

### 5. Understanding Class Targeting

While you can easily inspect classes using your browser's developer tools, it's important to understand how different classes work together. For example, the host bubble requires special handling:

```css
/* ❌ This won't work for background color */
.agent-host-bubble {
  background-color: blue;
}

/* ✅ This is the correct way */
.agent-host-bubble .bubble-typing {
  background-color: blue;
}
```

### 6. Custom CSS Examples

Here are some examples of adding custom css. 

1. **Copy** and **paste** this code into the Custom CSS section.
2. **Save** your changes.
3. **Reload** the page with your agent to see the updated background.

#### Example: Adding a scrollbar
Below is an example custom css that adds a scrollbar to your chat dialog. It targets the `scrollable-container` class.

```
.scrollable-container {
  scrollbar-width: thin;
}
```

#### Example: Customizing the button
Below is an example that adds a border radius and a linear gradient background to the button. It targets the `agent-button` class.

```
.agent-button {
  border-radius: 40px;
  background-image: linear-gradient(to right, #FFA500, #FF6347);
}
```

#### Example: Adding a WhatsApp-Themed Background

The below custom css adds a WhatsApp-style background to your chat dialog. It targets the `agent-chat-view` class.
 
```
.agent-chat-view {
  background-image: url("https://pd-images-public.s3.ap-south-1.amazonaws.com/whatsapp-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid grey;
  width: 350px;
}
```

As demonstrated above, you can customize the dialog by targeting the classes. 

#### Example: Changing guest and host bubble styles
Below is an example that changes the styles on the guest and host bubbles. It targets the `agent-host-bubble`, `.bubble-typing` and `.agent-guest-bubble` classes. 

```css
.agent-host-bubble .bubble-typing {
  background-color: red;
}
.agent-guest-bubble {
  background-color: red;
}
```

**Important:** For the host bubble, we need to target the `.bubble-typing` class that is inside an element with the `.agent-host-bubble` class. This is because of the [architectural difference](https://github.com/Predictable-Dialogs/agent-embed/blob/main/js/src/assets/index.css) in how host and guest bubbles are structured. The `.agent-host-bubble` class alone cannot override the background color.

#### Example: Enabling Word Wrap in the `pre` Element  
Below CSS enables text wrapping in `<pre>` tags, preventing horizontal overflow.

```css
pre {
  white-space: pre-wrap;  /* Preserves whitespace and wraps text */
  word-break: break-all;  /* Allows breaking words to avoid overflow */
}
```

### 7. Finding Additional CSS Classes to Target

To further customize the agent, you’ll want to identify and target the correct CSS classes. Here’s how:

1. **Right-click** anywhere on your chat dialog.
2. Select **“Inspect”** (or **“Inspect Element”**) in your browser’s dev tools.
3. Locate the relevant class in the HTML markup (e.g., .agent-button) and use it in your custom CSS.

### 8. Available CSS Classes Reference

You can target different classes in the chatbot to achieve various styling effects. While you can easily inspect classes using your browser's developer tools, here's a comprehensive reference of available classes:

## Main Classes

These are the primary classes you should use for most customization needs:

#### `.agent-embed-container`
- **Purpose:** Root-level theming container for the entire chatbot widget
- **Scope:** Applied to the outermost Bot component container
- **Responsibility:** Sets global theme variables (background, font-family, color) and establishes the main widget container
- **Limitations:** Changing background here affects the entire widget. Font changes apply globally to all text

#### `.agent-host-bubble`
- **Purpose:** Container for AI/bot message bubbles
- **Scope:** Applied to host message containers
- **Responsibility:** Provides base styling for bot messages including typing animation container
- **⚠️ Critical Limitation:** Cannot override the background color alone. To override background color, use `.agent-host-bubble .bubble-typing` class instead

#### `.agent-host-bubble .bubble-typing`
- **Purpose:** Use to override background color in AI/bot message bubbles
- **Scope:** Applied to the AI/bot message & typing container inside host bubbles
- **Responsibility:** Handles size transitions during typing animation and background styling
- **Limitations:** Cannot be used to set the text color. To set text color, use the `agent-host-bubble` class

#### `.agent-guest-bubble`
- **Purpose:** Styling for user/guest message bubbles
- **Scope:** Applied to user message containers
- **Responsibility:** Provides background, text color, and border radius for user messages
- **Limitations:** Single color scheme for all user messages

#### `.agent-input`
- **Purpose:** Base styling for all input containers
- **Scope:** Applied to the text input containers
- **Responsibility:** Provides background, text color, shadow, and border radius for input areas. Pseudo-classes like `.agent-input:focus-within` work very well with this
- **Limitations:** Single input styling applies to all input types

#### `.agent-button`
- **Purpose:** Primary action buttons styling (send buttons, choice buttons)
- **Scope:** Applied to the submit button
- **Responsibility:** Provides consistent button styling with hover/active states. Pseudo-classes like `.agent-button:hover` work very well with this
- **Limitations:** Changes affect all primary buttons

#### `.bubble1`, `.bubble2`, `.bubble3`
- **Purpose:** Individual typing indicator dots with staggered animation
- **Scope:** Applied to typing indicator dots
- **Best Practice:** Always match the background color to the text color of `.agent-host-bubble`:

```css
.agent-host-bubble {
  color: #000000;
}
.bubble1, .bubble2, .bubble3 {
  background-color: #000000;
}
```

- **Responsibility:** Creates bouncing animation effect for typing indicators
- **Limitations:** Animation timing and sequence is hardcoded

## Secondary Classes

:::caution Advanced Usage
Avoid using these secondary classes unless the main classes don't meet your needs.
:::

#### `.agent-input-container`
- **Purpose:** Layout constraint for input components
- **CSS Variables:** Uses `--agent-input-max-width`
- **Limitations:** Fixed maximum width constraint might not work for all designs

#### `.agent-chat-view`
- **Purpose:** Layout constraint for chat content area
- **CSS Variables:** Uses `--agent-content-max-width`
- **Limitations:** Fixed width constraint affects entire chat layout

#### `.slate-html-container`
- **Purpose:** Container class for markdown content within host bubbles
- Setting background colors (creates border effects) or extra padding.

#### `.scrollable-container`
- **Purpose:** Removes scrollbars from scrollable areas while maintaining scroll functionality
- **Limitations:** Might reduce accessibility for users who rely on visible scrollbars

For an extensive list of classes and their definitions, view the [GitHub Agent Embed CSS](https://github.com/Predictable-Dialogs/agent-embed/blob/main/js/src/assets/index.css).

### 9. Advanced CSS Customization Tips
#### 9.1 Using Media Queries
For custom responsive styles on various screen sizes, consider adding media queries. Below an example of reducing the height of the container
on smaller screens.

```
@media (max-width: 600px) {
  .agent-embed-container {
    height: 300px !important;
  }
}
```

#### 9.2 You can change the animations
Making the loading bubbles more energetic!
```
@keyframes chatBubbles {
  0% {
    transform: translateY(2.5);
  }
  5% {
    transform: translateY(-2.5px);
  }
  10% {
    transform: translateY(0);
  }
}
```
#### 9.3 Overriding CSS Variables

Many elements in the chatbot use CSS variables (e.g., var(--agent-button-color)). You can override these variables within your own CSS rules. For instance:
```
.agent-button {
  --agent-button-color: red;     /* Changes the button's text/icon color */
}
```
To be able to do this, you would have to understand the [code](https://github.com/Predictable-Dialogs/agent-embed/blob/main/js/src/assets/index.css) structure.

### 10. Example Full CSS Snippet

Below is a reference snippet showcasing various default classes and rules. Feel free to modify, or override what you need.

```
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollable-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollable-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.text-fade-in {
  transition: opacity 400ms ease-in 200ms;
}

.bubble-typing {
  transition: width 400ms ease-out, height 400ms ease-out;
}

.bubble1,
.bubble2,
.bubble3 {
  background-color: var(--agent-host-bubble-color);
  opacity: 0.5;
}

.bubble1 {
  animation: chatBubbles 1s ease-in-out infinite;
}

.bubble2 {
  animation: chatBubbles 1s ease-in-out infinite;
  animation-delay: 0.3s;
}

.bubble3 {
  animation: chatBubbles 1s ease-in-out infinite;
  animation-delay: 0.5s;
}

@keyframes chatBubbles {
  0% {
    transform: translateY(2.5);
  }
  50% {
    transform: translateY(-2.5px);
  }
  100% {
    transform: translateY(0);
  }
}

button,
input,
textarea {
  font-weight: 300;
}

.agent-embed-container {
  background-image: var(--agent-embed-container-bg-image);
  background-color: var(--agent-embed-container-bg-color);
  font-family: var(--agent-embed-container-font-family), -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.agent-button {
  color: var(--agent-button-color);
  background-color: var(--agent-button-bg-color);
  border: 1px solid var(--agent-button-bg-color);
  border-radius: var(--agent-border-radius);
  transition: all 0.3s ease;
}

.agent-host-bubble {
  color: var(--agent-host-bubble-color);
}

.agent-host-bubble > .bubble-typing {
  background-color: var(--agent-host-bubble-bg-color);
  border: var(--agent-host-bubble-border);
  border-radius: 6px;
}

.agent-guest-bubble {
  color: var(--agent-guest-bubble-color);
  background-color: var(--agent-guest-bubble-bg-color);
  border-radius: 6px;
}

.agent-input {
  color: var(--agent-input-color);
  background-color: var(--agent-input-bg-color);
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: var(--agent-border-radius);
}

.agent-button > .send-icon {
  fill: var(--agent-button-color);
}

.agent-chat-view {
  max-width: 800px;
}
```