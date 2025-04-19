---
title: 'Custom CSS'
---

# Custom CSS

Predictable Dialogs makes it easy to embed and style an AI agent on your website. With custom CSS, you can tailor the chatbot’s look and feel to match your brand—from colors and fonts to backgrounds and advanced layouts. This guide explains how to add and manage custom CSS for your chatbot.  
*Note*: Custom CSS helps style the contents within the chat container. 
To style the bubble widget go [here](/docs/widgets/bubble#external-styling). To style the ai-button go [here](/docs/widgets/ai-button#styling-options).

### 1. Go to page with Custom CSS Section

1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in). 
2. **Select** or **create** an agent, then click **Theme** in the top menu.
3. **Scroll down** to find the **Custom CSS** section near the bottom of the page.

### 2. Using Custom CSS

1. **Paste** your CSS code into the **Custom CSS** field.
2. **Click “Save”.**
3. **Refresh** or **revisit** the page where your agent is embedded to see the changes applied.

### 3. Custom CSS examples

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
```
.agent-host-bubble > .bubble-typing {
  background-color: red;
}
.agent-guest-bubble {
  background-color: red;
}
```
In the above example, for the host bubble we need to apply the styles to the class `bubble-typing` that is a direct child of an element with the class `agent-host-bubble`. This is because of the [difference](https://github.com/Predictable-Dialogs/agent-embed/blob/main/js/src/assets/index.css) in the way we handle the host and guest bubbles.

#### Example: Enabling Word Wrap in the `pre` Element  
Below CSS enables text wrapping in `<pre>` tags, preventing horizontal overflow.

```css
pre {
  white-space: pre-wrap;  /* Preserves whitespace and wraps text */
  word-break: break-all;  /* Allows breaking words to avoid overflow */
}
```

### 4. Finding Additional CSS Classes to Target

To further customize the agent, you’ll want to identify and target the correct CSS classes. Here’s how:

1. **Right-click** anywhere on your chat dialog.
2. Select **“Inspect”** (or **“Inspect Element”**) in your browser’s dev tools.
3. Locate the relevant class in the HTML markup (e.g., .agent-button) and use it in your custom CSS.

### 5. Frequently Used CSS Classes

Here are some commonly targeted classes and their default roles:

- `.agent-chat-view` – Main container for the chat area.
- `.scrollable-container` – Manages scrollable chat content.
- `.agent-button` – Styles the “Send” or action buttons.
- `.agent-host-bubble` – Styles the bot’s chat bubble.
- `.agent-guest-bubble` – Styles the user’s chat bubble.
- `.agent-input` – Styles the input box where the user types messages.

For an extensive list of classes and their definitions, view the [GitHub Agent Embed CSS](https://github.com/Predictable-Dialogs/agent-embed/blob/main/js/src/assets/index.css).

### 6. Advanced CSS Customization Tips
#### 6.1 Using Media Queries
For custom responsive styles on various screen sizes, consider adding media queries. Below an example of reducing the height of the container
on smaller screens.

```
@media (max-width: 600px) {
  .agent-embed-container {
    height: 300px !important;
  }
}
```

### 6.2 You can change the animations
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
#### 6.3 Overriding CSS Variables

Many elements in the chatbot use CSS variables (e.g., var(--agent-button-color)). You can override these variables within your own CSS rules. For instance:
```
.agent-button {
  --agent-button-color: red;     /* Changes the button's text/icon color */
}
```
To be able to do this, you would have to understand the [code](https://github.com/Predictable-Dialogs/agent-embed/blob/main/js/src/assets/index.css) structure.

### 7. Example Full CSS Snippet

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