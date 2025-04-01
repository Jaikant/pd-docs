---
description: Style and customize the ai topic button component.
---

# AI Topic Button Widget

The AI Topic Button Widget is a powerful extension of the Popup widget, designed to streamline user interactions by enabling a single OpenAI assistant to handle multiple predefined topics. This approach significantly reduces implementation effort and enhances user experience by providing targeted initial responses based on the selected topic.

## Key Features

- **Multiple Pre-configured Topics**: Configure various conversation starters using a single assistant
- **Streamlined User Experience**: Users can select specific topics via intuitive button interfaces
- **Customizable Styling**: Comprehensive styling options for buttons to match your website's design
- **Programmatic Control**: Full JavaScript API for controlling widget behavior

## Implementation Guide

### Basic Installation

Add the Topic Button Widget to your website by including the following code:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initPopup({
    agentName: "Assistant OpenAI-someId", //generated on the PD app
  });
</script>

<!-- Topic Buttons -->
<ai-button id="1">Button For Topic #1</ai-button>
<ai-button id="2">Button For Topic #2</ai-button>
<!-- Additional buttons as needed -->
```

### Configuring Topics

1. Navigate to the **Settings** tab in your dashboard
2. Select **Topics** to manage your topic configurations
3. For each topic, define:
   - **Topic Message**: The initial assistant response when a user selects this topic
   - **Exit Option**: Enable to end the conversation after delivering the topic message

### Topic Button Embedding

Each topic button can be individually embedded by copying its specific code from the settings:

```html
<!-- Example for a specific topic button -->
<ai-button id="1">Button For Topic #1</ai-button>
```

**Note**: Button IDs increment automatically as you add topics, ensuring proper topic association.

### AI-Generated Topic Messages

Create compelling topic messages by using the integrated AI generation feature:
1. Click the ✨ button in the Topics section
2. The system will use your OpenAI assistant to generate an appropriate initial response

## Styling Options

### Basic Button Styling
Style all topic buttons uniformly:
You can style the ai-button using the ::part pseudo-element. Here's an example to set the font size:
```html
<style>
  ai-button::part(button) {
   font-size: 20px;
    /* Additional CSS properties */
  }
</style>
```
This targets the button part of the ai-button component and adjusts its font size.

*Tip:* For WordPress users, If the styles don’t work as expected in your theme, try adding them to the Additional CSS section.

### Class-Based Styling

To style buttons differently, use the `class` attribute and target it in your styles:

```html
<ai-button id="1">Topic 1</ai-button>
<ai-button class="blue" id="2">Topic 2</ai-button>
<ai-button class="red" id="3">Topic 3</ai-button>

<style>
  ai-button::part(button) {
    font-size: 20px;
  }

  ai-button.blue::part(button) {
    background-color: blue;
    color: white;
    font-size: 15px;
  }

  ai-button.red::part(button) {
    background-color: red;
    color: white;
    font-size: 10px;
  }
</style>
```

##### Explanation
- Default Styles: All buttons inherit default styles unless explicitly overridden.
- Specific Styles:  Buttons with blue and red classes have unique background colors, text colors, and font sizes for differentiation.

### Adding Interactive Styles
Enhance user experience by adding hover and active states to your button:

```html
<style>
  ai-button::part(button) {
    font-size: 20px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  ai-button::part(button):hover {
    background-color: #0056b3; /* Darker blue on hover */
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15); /* Stronger shadow */
  }

  ai-button::part(button):active {
    background-color: #003d80; /* Even darker blue on active */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Reduced shadow */
    transform: scale(0.98); /* Slightly scale down on click */
  }
</style>
```
##### Explanation
- **hover**: Adds a background color and shadow when the button is hovered over.
- **active**: Changes the background color, reduces shadow, and slightly scales down the button on click.


## Programmatic Control

If you need more control on the button styling (e.g. your framework comes with styled button) then you can instead use a Popup widget, 
and control it using the built-in JavaScript methods:

| Method | Description |
|--------|-------------|
| `Agent.open()` | Opens the popup widget |
| `Agent.close()` | Closes the popup widget |
| `Agent.toggle()` | Toggles between open and closed states |

### Implementation Example

In the below example, you can replace the `<button/>` with your button component.

```html
<button onclick="Agent.open()">Contact us</button>
<button onclick="Agent.close()">Close chat</button>
<button onclick="Agent.toggle()">Toggle chat</button>
```

## Internal Widget Styling

To customize the internal appearance of the chat widget itself (not just the topic buttons), use the **Theme** tab in the Predictable Dialogs application dashboard.

## Use Cases

- **Customer Support**: Offer buttons for common support categories
- **Product Information**: Provide topic buttons for different product lines
- **FAQ Sections**: Create topic buttons for frequently asked question categories
- **Multi-service Businesses**: Segment services into distinct topic buttons




