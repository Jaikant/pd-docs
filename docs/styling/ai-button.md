---
description: Predictable Dialogs guide on how to style and customize the ai-button component for various use cases, including basic, interactive, and multi-button scenarios.
---

# Styling the AI Button

Learn how to style and customize the ai-button component for various use cases, including adding interactive styles and handling multiple button variations.

### Basic Styling
You can style the ai-button using the ::part pseudo-element. Here's an example to set the font size:
```html
<style>
  ai-button::part(button) {
   font-size: 20px;
  }
</style>
```
This targets the button part of the ai-button component and adjusts its font size.

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

### Styling Multiple Buttons
To style buttons differently, use the `class` attribute and target it in your styles:

```html
<ai-button id="1"> Topic 1 </ai-button>
<ai-button class="blue" id="2"> Topic 2 </ai-button>
<ai-button class="red" id="3"> Topic 3 </ai-button>

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