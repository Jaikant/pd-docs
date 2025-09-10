---
title: 'Theme'
---

# Theme

You can customize your chatbot agent’s colors, images, inputs, and borders using our live theming playground on the theme page. You can also add your own custom CSS and instantly preview how your chatbot agent will look.


## Go to page which themes the widget
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in). Click your existing agent. Click "Theme" on menu.


### Customize the initial response
Select *Greeting* tab and enter or generate your greeting.

The initial response is the first message your AI agent displays. Personalize it to set the tone for user interactions.

- **Enable or Disable:**  
  Go to the **Greeting** tab and use the toggle button to turn the initial response on or off.
  :::tip initial response using a prompt
  If you turn off the greeting, you can generate an greeting/initial response using your own prompt. This is [configured](http://predictabledialogs.com/docs/channels/web/widgets/bubble#widget-behaviour--styling-parameters-optional) using the `initialPrompt` prop on the widget.  
  :::

- **Add a Custom Response:**  
  Enter your desired message in the input area. Use markdown for styling, such as:

  ```
  **Hi there**
  ```
  Basic HTML compatible with markdown is also supported:

  ```
  <strong> **Hi there** </strong>
  ```
  :::tip Generate greeting with OpenAI
  Click the ✨ button to create an initial response using your OpenAI assistant and a custom prompt.
  :::

### Customize Widget Background Color 

#### Using the Theme Dashboard
Select *Background* tab and select color from the Predictable Dialogs app.

#### Using Widget Props
You can also override the theme background directly in your widget configuration:

```js
Agent.initStandard({
  ...
  background: {
    type: "Color",
    content: "#cbcbcd"
  },
});
```

Using the props you can also add an image background.
```js
Agent.initStandard({
  ...
  background: {
    type: "Image",
    content: "https://i.pravatar.cc/1000"
  },
});
```

**Note:** Widget props take precedence over theme settings.

### Font Configuration

#### Using the Theme Dashboard
You can configure fonts through the Predictable Dialogs app by:
1. Navigate to your agent theme
2. Select the *Font & Brand* tab  
3. Choose from available font options

#### Using Widget Props
You can also override the theme font directly in your widget configuration:

```js
    Agent.initStandard({
      ...
      font: 'Averia Libre',
    });
```

**Note:** Widget props take precedence over theme settings. Fonts available on [fonts.bunny.net](https://fonts.bunny.net/) are supported.

### Update Avatars
- Prerequisite: You need an image url to update the avatar.
- Select *Avatars* tab 
- Click on the toggle button next to the Avatar label.
- Click on the profile circle and paste the image url

![Theme Customization Page with Avatar Settings](/img/theming/theme-page.webp)


### Customize Bubble Colors

#### Using the Theme Dashboard
- Select *Bubbles* tab
- Select background color for AI / User bubbles
- Select text color for AI / User bubbles

#### Using Widget Props
You can also override bubble colors directly in your widget configuration:

```js
Agent.initStandard({
  ...
  bubble: {
    hostBubbles: {
      color: "#2b2c2b",
      backgroundColor: "#ff6b35"
    },
    guestBubbles: {
      color: "#f8faf4", 
      backgroundColor: "#0066cc"
    }
  }
});
```

**Note:** Widget props take precedence over theme settings.


### Select Input Type
Before customizing input appearance, choose your input type:

#### Fixed Bottom Input
<p align="center">
  <img src={require('@site/static/img/fixed-bottom.webp').default} alt="Fixed bottom input" width="400" />
</p>

- Modern chat interface with input fixed at bottom
- Similar to popular messaging apps
- Clean, streamlined appearance
- Supports custom keyboard shortcuts for advanced users

#### Floating Input
<p align="center">
  <img src={require('@site/static/img/floating-single-line.webp').default} alt="Floating single line" width="400" />
</p>
<p align="center">
  <img src={require('@site/static/img/floating-multi-line.webp').default} alt="Floating multi line" width="400" />
</p>
- Traditional floating input style
- Supports single-line and multi-line options
- More customizable positioning

#### Custom Keyboard Shortcuts (Fixed Bottom Only)

:::info Advanced Feature
Custom keyboard shortcuts are available only for the **fixed-bottom** input type and can only be configured via widget props (not through the theme dashboard).
:::

You can customize which keys send messages and create new lines using the `shortcuts` property. This feature supports three configuration modes:

##### Default Behavior (Enter to Send)
By default, Enter sends the message and Shift+Enter creates a new line:

```js
Agent.initStandard({
  agentName: "...",
  input: {
    "type": "text input",
    "options": {
      "type": "fixed-bottom",
      "labels": {
        "placeholder": "What's on your mind?",
        "button": "Send"
      },
      "isLong": true,
      "shortcuts": {
        "preset": "enterToSend",
        "imeSafe": true
      }
    }
  }
});
```

##### Mod+Enter to Send
Use Mod+Enter (Cmd+Enter on Mac, Ctrl+Enter on Windows/Linux) to send and Enter for new lines:

```js
Agent.initStandard({
  agentName: "...",
  input: {
    "type": "text input",
    "options": {
      "type": "fixed-bottom",
      "labels": {
        "placeholder": "What's on your mind?",
        "button": "Send"
      },
      "isLong": true,
      "shortcuts": {
        "preset": "modEnterToSend",
        "imeSafe": true
      }
    }
  }
});
```

##### Custom Key Combinations
Define your own key combinations for maximum flexibility:

```js
Agent.initStandard({
  agentName: "...",
  input: {
    "type": "text input",
    "options": {
      "type": "fixed-bottom",
      "labels": {
        "placeholder": "What's on your mind?",
        "button": "Send"
      },
      "isLong": true,
      "shortcuts": {
        "preset": "custom",
        "keymap": {
          "submit": [["Mod","Enter"], ["Shift","Enter"]],
          "newline": [["Enter"]]
        },
        "imeSafe": true
      }
    }
  }
});
```

**Key Combinations:**
- `"Enter"` - Enter key alone
- `"Mod"` - Cmd key on Mac, Ctrl key on Windows/Linux  
- `"Shift"` - Shift key
- `"Alt"` - Alt key

**Important Notes:**
- `imeSafe: true` is recommended to prevent conflicts with input method editors (IME) for international keyboards
- Multiple key combinations can be defined for each action
- Only exact key matches trigger actions (no extra modifiers allowed)
- If using `"preset": "custom"` without a valid keymap, the widget falls back to default behavior


### Customize Input Colors and Input roundness

Input styling can be customized in two ways:

#### Using the Theme Dashboard (Recommended for Global Settings)
- Select *Inputs* tab
- Click *Roundness* dropdown to select border radius of input element. You can select one of large, medium or none. If you want to enter your own border radius, then you can do that in the custom css.
- Select background color for send button and input.
- Select text color for send button, input text and input placeholder.

#### Using Widget Props (Override Theme Settings)
You can also override input styling directly in your widget configuration. Below an example using Standard widget. The same can be applied to the Bubble and Popup.

```js
Agent.initStandard({
  ...
  input: {
    type: "text input",
    styles: {
      roundness: "medium",
      inputs: {
        color: "#e84117",
        backgroundColor: "#f7f7f7",
        placeholderColor: "#ababab"
      },
      buttons: {
        color: "#ffffff", 
        backgroundColor: "#050505"
      }
    },
    options: {
      type: "fixed-bottom",
      labels: {
        placeholder: "What's on your mind?",
        button: "Send"
      },
      isLong: false
    }
  }
});
```

**Note:** Widget props take precedence over theme settings. For complete prop documentation, see the widget-specific documentation:
- [Standard Widget Props](/docs/channels/web/widgets/standard#chat-elements-styling-parameters-optional)
- [Bubble Widget Props](/docs/channels/web/widgets/bubble#chat-elements-styling-parameters-optional)  
- [Popup Widget Props](/docs/channels/web/widgets/popup#chat-elements-styling-parameters-optional)


### Theme Templates

Before diving into custom CSS, you can get started quickly with our pre-designed theme templates. The theme section includes a **Theme Templates** accordion that provides 10 professionally designed themes you can apply instantly.

#### Using Theme Templates
1. Navigate to your agent's **Theme** page
2. Expand the **Theme Templates** accordion (the first section)
3. Browse through the available themes:
   - **Modern Corporate** - Clean, professional design for business websites
   - **Gaming Console** - Dark theme with neon accents for gaming sites
   - **Medical Healthcare** - Trustworthy design for healthcare applications
   - **E-commerce Shopping** - Vibrant, conversion-focused design for online stores
   - **Educational Platform** - Knowledge-focused design for learning platforms
   - **Vintage Paper** - Nostalgic, classic design inspired by vintage documents
   - **Futuristic Hologram** - Sci-fi design with holographic effects
   - **Nature Forest** - Peaceful, organic design with earth tones
   - **Social Media** - Modern, trendy design inspired by social platforms
   - **Comic Book** - Bold, playful design inspired by graphic novels

4. Click on any theme to instantly apply it to your chatbot
5. The theme automatically updates both the custom CSS and bubble colors

#### Reset Functionality
- Use the **Reset** button (🔄) at the top of the Theme Templates section to revert back to your saved theme settings
- This is helpful when you want to undo theme template changes and return to your original customizations

#### Theme Template Benefits
- **Instant Application** - No need to write CSS code
- **Professional Designs** - Each theme is carefully crafted for specific use cases
- **Color Coordination** - Bubble colors are automatically updated to match the theme
- **Customizable Base** - Use themes as starting points for further customization

### Custom CSS
- If you need more specific styles beyond the theme templates, or want to add gradients or other complex styles, you can use custom CSS:
- Right-click on your bot and inspect the element you want to customize, For example, if you want a fancy gradient color in the chat background, you can target the `.agent-chat-view` class
```
.agent-chat-view {
  border-radius: 40px;
  background-image: linear-gradient(to right, #2b3e13, #8DC26F); border: 1px solid grey;
} 
```
If you need some custom styling on the button you can target the .agent-button class.
```
.agent-button { 
  border-radius: 40px;
  background-image: linear-gradient(to right, #FFA500, #FF6347); 
}
```

**Pro Tip**: Start with a theme template that's close to your desired look, then add custom CSS for fine-tuning.

More about custom css can be read in the [custom css section](/docs/channels/web/custom-css).

:::tip For Technical Users
You can also customize the theme using props directly on the agent embed widget. This is useful if you want to avoid visiting the PD app, hosting your own backend or you want to dynamically (at run time) update the theme.
:::
