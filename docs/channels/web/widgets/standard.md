---
description: Style & customize the Chatbot Standard Widget
---

# Chatbot Standard Widget

The Standard Widget provides a customizable chat interface on your web page.

## Quick Start

Here's the minimum code required to implement the Standard Widget:

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initStandard({
    agentName: "your assistant name", //generated on the predictable dialogs app
  });
</script>
<agent-standard style="width: 100%; height: 600px; "></agent-standard>
```

## Quick Styling Guide

Here are the most popular styling combinations for the Standard widget:

### Full-Width Chat Interface
```html
<agent-standard style="width: 100%; height: 600px;"></agent-standard>
```

### Card-Style Widget
```html
<agent-standard style="width: 100%; max-width: 500px; height: 700px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 0 auto;"></agent-standard>
```

### Sidebar Chat
```html
<agent-standard style="width: 350px; height: 100vh; border-left: 1px solid #e0e0e0;"></agent-standard>
```

### Compact Widget
```html
<agent-standard style="width: 100%; height: 400px; border: 1px solid #ddd; border-radius: 8px;"></agent-standard>
```

## Size & Positioning

The Standard widget adapts to whatever size you give it through CSS. It fills 100% of its container by default.

### Width Control
```html
<!-- Fixed width -->
<agent-standard style="width: 500px; height: 600px;"></agent-standard>

<!-- Responsive width -->
<agent-standard style="width: 100%; max-width: 600px; height: 600px;"></agent-standard>

<!-- Percentage-based width -->
<agent-standard style="width: 80%; height: 600px; margin: 0 auto;"></agent-standard>
```

### Height Control
```html
<!-- Fixed height -->
<agent-standard style="width: 100%; height: 500px;"></agent-standard>

<!-- Viewport-based height -->
<agent-standard style="width: 100%; height: 80vh;"></agent-standard>

<!-- Minimum height -->
<agent-standard style="width: 100%; min-height: 400px; height: 100%;"></agent-standard>
```

### Positioning
```html
<!-- Centered widget -->
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <agent-standard style="width: 400px; height: 600px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"></agent-standard>
</div>

<!-- Sidebar positioning -->
<div style="display: flex; height: 100vh;">
  <div style="flex: 1;"><!-- Your main content --></div>
  <agent-standard style="width: 350px; border-left: 1px solid #e0e0e0;"></agent-standard>
</div>
```

## Advanced Styling

### Shadow Effects
```html
<!-- Subtle shadow -->
<agent-standard style="width: 100%; height: 600px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 8px;"></agent-standard>

<!-- Prominent shadow -->
<agent-standard style="width: 100%; height: 600px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); border-radius: 12px;"></agent-standard>

<!-- Colored shadow -->
<agent-standard style="width: 100%; height: 600px; box-shadow: 0 4px 20px rgba(0,123,255,0.15); border-radius: 10px;"></agent-standard>
```

### Integration with Existing Layouts
```html
<!-- Bootstrap grid integration -->
<div class="container">
  <div class="row">
    <div class="col-md-8">
      <!-- Your content -->
    </div>
    <div class="col-md-4">
      <agent-standard style="width: 100%; height: 500px; border: 1px solid #dee2e6; border-radius: 0.375rem;"></agent-standard>
    </div>
  </div>
</div>

<!-- Flexbox layout -->
<div style="display: flex; gap: 20px; height: 100vh;">
  <main style="flex: 1; padding: 20px;"><!-- Your main content --></main>
  <aside style="width: 400px; padding: 20px;">
    <agent-standard style="width: 100%; height: 100%; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);"></agent-standard>
  </aside>
</div>
```

### CSS Grid Integration
```html
<div style="display: grid; grid-template-columns: 1fr 350px; grid-template-rows: 60px 1fr; height: 100vh; gap: 10px;">
  <header style="grid-column: 1 / -1; background: #f8f9fa; padding: 0 20px; display: flex; align-items: center;">Header</header>
  <main style="padding: 20px;">Main Content</main>
  <agent-standard style="border-left: 1px solid #e9ecef;"></agent-standard>
</div>
```

## Responsive Behavior

The Standard widget inherits the size of its container (`width: 100%; height: 100%` by default), making it fully responsive to your layout.

### Mobile-First Design
```html
<agent-standard style="
  width: 100%; 
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  /* Mobile styles */
  @media (min-width: 768px) {
    height: 600px;
    max-width: 500px;
    margin: 0 auto;
  }
"></agent-standard>
```

### Responsive Sizing
```html
<!-- Adapts to container -->
<div style="width: 100%; max-width: 800px; margin: 0 auto; padding: 20px;">
  <agent-standard style="width: 100%; height: 60vh; min-height: 400px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></agent-standard>
</div>
```

### Viewport-Based Sizing
```html
<!-- Full viewport height -->
<agent-standard style="width: 100%; height: 100vh;"></agent-standard>

<!-- Partial viewport -->
<agent-standard style="width: 100%; height: 80vh; max-height: 700px;"></agent-standard>
```

### Breakpoint Considerations
- **Mobile (< 768px)**: Consider full-width with reduced height
- **Tablet (768px - 1024px)**: Balanced width and height
- **Desktop (> 1024px)**: Fixed maximum widths work well


## Configuration Options

### Required Properties

| Property | Type | Description |
|----------|------|-------------|
| `agentName` | string | Specifies the agent name from Predictable Dialogs or your custom backend. This identifies which AI agent will process the conversations. |

### Widget Behaviour & Styling Parameters (optional)

| Property | Type | Description |
|----------|------|-------------|
| `initialPrompt` | string | Message sent to the agent when the chat first loads. Only used when initial response is disabled on the server. If server-side initial response is enabled, this property is ignored. |
| `filterResponse` | function | A callback function that processes the AI's responses before displaying them. Takes the original response string as input and should return the modified response string. Useful for removing citations or formatting responses ([see example](/docs/providers/openai-assistant/removing-citations)). |
| `apiHost` / `apiStreamHost` | string | Endpoint URL that connects to the backend. Can be configured to use your own backend if needed. |

### Chat Elements Styling Parameters (optional)

| Property | Type | Description |
|----------|------|-------------|
| `font` | string | Font family name from fonts.bunny.net. Overrides theme font configuration. Example: `font="Roboto"` |
| `background` | object | Background configuration object with `type` ("Color" \| "Image" \| "None") and `content` (color hex or image URL). Overrides theme background configuration. Example: `background={{type: "Color", content: "#f0f0f0"}}` |
| `bubble` | object | Override bubble colors for host and guest messages. Contains optional `hostBubbles` and `guestBubbles` objects with `color` and `backgroundColor` properties. Overrides theme bubble configuration. |
| `input` | object | Input styling configuration with `type`, `styles`, and `options` properties. The `styles` object contains `roundness`, `inputs` (color, backgroundColor, placeholderColor), and `buttons` (color, backgroundColor) properties. Overrides theme input configuration. |


### bubble (optional)
Override bubble colors for host and guest messages.

**Type:** 
```typescript
{
  hostBubbles?: {
    color: string;
    backgroundColor: string; 
  };
  guestBubbles?: {
    color: string;
    backgroundColor: string;
  };
}
```

**Example:**
```js
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
```

### input (optional)
Override input styling and configuration.

**Type:** 
```typescript
{
  type: "text input";
  styles?: {
    roundness?: "none" | "medium" | "large";
    inputs?: {
      color?: string;
      backgroundColor?: string;
      placeholderColor?: string;
    };
    buttons?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  options: {
    type: "fixed-bottom" | "floating";
    labels: {
      placeholder?: string;
      button?: string;
    };
    isLong?: boolean;
  };
}
```

**Example:**
```js
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
      placeholder: "Whats on your mind?",
      button: "Send me"
    },
    isLong: false
  }
}
```

---