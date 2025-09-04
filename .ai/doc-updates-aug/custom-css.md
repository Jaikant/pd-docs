# We need to enhance the documentation in the custom css section.

The documentation is in @docs/channels/web/custom-css.md

We need to blend the below information with the existing documentation:
At the top of the documentation we need to give a link to this blog:
https://predictabledialogs.com/learn/ai-chatbot-templates

the above blog contains 10 ready to use custom css examples, which can be copied and pasted into the custom css section.


The chatbot can be customised using custom CSS. To do so existing classes on the chatbot can be targeted. 

Lets start with an example:

```
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

In the above css, the input element is getting a boxShadow and a border radius.

The main container which hosts the chatbot is getting a borderRadius of 6px.
The container in which the host text comes is called agent-host-bubble and is getting a white border with a border radius of 6px. Similarly the guest bubble gets the white border and border radius.

Similarly we can have a wide variety of custom CSS by targeting different classes in the code. Here is a list of classed which can be targeted with a description of what it can help style.


While a user can easily inspect the classes by using the browser, here are some classes which can be modified.


# CSS CLASSES, DESCRIPTIONS, LIMITATIONS

## MAIN CLASSES

### .agent-embed-container
**Purpose:** Root-level theming container for the entire chatbot widget.
**Scope:** Applied to the outermost Bot component container.
**Responsibility:** Sets global theme variables (background, font-family, color) and establishes the main widget container.
**Limitations:** Changing background here affects the entire widget. Font changes apply globally to all text.

## .agent-host-bubble
**Purpose:** Container for AI/bot message bubbles.
**Scope:** Applied to host message containers.
**Responsibility:** Provides base styling for bot messages including typing animation container.
**Limitations:** Works in conjunction with .bubble-typing class for background color as shown below.
**CRITICAL LIMITATION:**  Cannot override the background color alone, to override background color use `.agent-host-bubble .bubble-typing` class.

## .agent-host-bubble .bubble-typing
**Purpose:** Use to override background color in AI/bot message bubbles.
**Scope:** Applied to the AI/bot message & typing container inside host bubbles.
**Responsibility:** Handles size transitions during typing animation and background styling.
**Limitations:** Cannot be used to set the text color, to set the text color use the `agent-host-bubble` class.

## .bubble1, .bubble2, .bubble3
**Purpose:** Individual typing indicator dots with staggered animation.
**Scope:** Applied to typing indicator dots, always make this equal to the color applied to `.agent-host-bubble ` for e.g. 
```css
.agent-host-bubble {
  color: #000000;
}
```
then also set the `background-color` in .bubble1, .bubble2 and .bubble3
```css
.bubble1 {
  background-color: #000000;
}
.bubble2 {
  background-color: #000000;
}
.bubble3 {
  background-color: #000000;
}
```
**Responsibility:** Creates bouncing animation effect for typing indicators.
**Limitations:** Animation timing and sequence is hardcoded. background-color looks good when matches color of `.agent-host-bubble`


## .agent-guest-bubble
**Purpose:** Styling for user/guest message bubbles.
**Scope:** Applied to user message containers.
**Responsibility:** Provides background, text color, and border radius for user messages.
**Limitations:** Single color scheme for all user messages.

## .agent-input
**Purpose:** Base styling for all input containers.
**Scope:** Applied to the text input containers.
**Responsibility:** Provides background, text color, shadow, and border radius for input areas. Variations like `.agent-input:focus-within` work very nicely with this.
**Limitations:** Single input styling applies to all input types.


## .agent-button
**Purpose:** Primary action buttons styling (send buttons, choice buttons).
**Scope:** Applied to the submit button.
**Responsibility:** Provides consistent button styling with hover/active states. Classes like `.agent-button:hover` play very nicely with this.
**Limitations:** Changes affect all primary buttons.




## SECONDARY CLASSES
Avoid using these secondary classes, unless nothing else works out.

## .agent-input-container
**Purpose:** Layout constraint for input components.
**Scope:** Applied to input container elements (FixedBottomInput.tsx:106).
**Responsibility:** Constrains input width using max-width CSS variable.
**CSS Variables:** Uses --agent-input-max-width.
**Limitations:** Fixed maximum width constraint might not work for all designs.

## .agent-input-error-message
**Purpose:** Error message styling for inputs.
**Scope:** Applied to error messages in forms (StripePaymentForm.tsx).
**Responsibility:** Provides color for error text.
**CSS Variables:** Uses --agent-input-color.
**Limitations:** Uses same color as regular input text, might need distinct error color.

## .agent-chat-view
**Purpose:** Layout constraint for chat content area.
**Scope:** Applied to the chat conversation container (StreamConversation.tsx:319).
**Responsibility:** Sets max-width to constrain chat width for readability.
**CSS Variables:** Uses --agent-content-max-width.
**Limitations:** Fixed width constraint affects entire chat layout.

## .agent-avatar-container
**Purpose:** Container for avatar positioning and sizing.
**Scope:** Applied to avatar side containers (AvatarSideContainer.tsx:46).
**Responsibility:** Manages avatar layout and positioning within message flows.
**CSS Variables:** None directly, but inherits sizing from mobile detection.
**Limitations:** Responsive behavior is JavaScript-controlled, not CSS-based.

## .agent-fixed-input
**Purpose:** Styling for fixed bottom input areas.
**Scope:** Applied to fixed-bottom input containers.
**Responsibility:** Provides color and background for fixed input areas.
**CSS Variables:** Uses --agent-input-color, --agent-input-bg-color.
**Limitations:** Same variables as regular inputs, no distinction for fixed positioning.


## Utility Classes

## .scrollable-container
**Purpose:** Removes scrollbars from scrollable areas.
**Scope:** Applied to chat containers and scrollable areas (StreamConversation.tsx:319).
**Responsibility:** Hides scrollbars across different browsers while maintaining scroll functionality.
**CSS Variables:** None.
**Limitations:** Might reduce accessibility for users who rely on visible scrollbars.

## .bubble-typing
**Purpose:** Size transition animation for typing bubble container.
**Scope:** Applied to typing indicator containers (TextBubble.tsx:95, LoadingBubble.tsx:8).
**Responsibility:** Smooth size transitions during typing animation.
**CSS Variables:** None.
**Limitations:** Hardcoded timing (400ms ease-out for width/height).


## .text-input
**Purpose:** Base styling for text input fields and textareas.
**Scope:** Applied to input elements (ShortTextInput.tsx:15, Textarea.tsx:16, AutoResizingTextarea.tsx:126).
**Responsibility:** Provides placeholder color styling and basic input appearance.
**CSS Variables:** Uses --agent-input-placeholder-color for placeholder text.
**Limitations:** Placeholder styling is hardcoded with !important, difficult to override.


## .slate-html-container
**Purpose:** Container class for the markdown. 
**Scope:** This class is inside the host bubble. It is inside this class that entire markdown is shown as html. So if we need to style the container which holds the html elements we can use this class. 
**Responsibility:** Styling the html container.
**Limitations:** If we set a background on this class, it will create a border effect between the parent host bubble so avoid setting a background in this class. Also adding extra paddings in this will make the host bubble have a different structure from the guest bubble, so it should be avoided.

## .slate-html-container > div
**Purpose:** Inner container for slate/markdown content.
**Scope:** Direct children of slate HTML containers.
**Responsibility:** Sets minimum height for content areas.
**CSS Variables:** None.
**Limitations:** Hardcoded min-height (24px) might not scale with font sizes.

