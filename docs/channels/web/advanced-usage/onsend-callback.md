---
description: Execute custom logic when users send messages with the onSend callback
---

# onSend Hook

The `onSend` prop accepts a function that will be invoked whenever the user clicks the Send button. This function runs in addition to the default message-sending behavior, giving you a hook to trigger custom actions at the moment a message is sent.

## Why Use onSend?

This prop allows you to integrate the chatbot more deeply into your application flow. For example, you might want to:

- **Progressive UI reveal** – Show or unlock parts of your UI after the first message (e.g., reveal the chat window after an intro screen)
- **Analytics & tracking** – Log user actions, track engagement, or send events to analytics platforms like Google Analytics, Mixpanel, or Segment whenever a message is sent
- **Custom business logic** – Trigger domain-specific actions such as storing the first message in a database, starting a support ticket, or alerting a live agent
- **User experience enhancements** – Update UI state, show a confirmation animation, play a sound, or highlight an element when the user sends a message
- **Session management** – Kick off workflows like starting a timer, refreshing tokens, or recording session metadata when a conversation begins

## Basic Usage

```javascript
Agent.initStandard({
  agentName: "your-agent-name",
  onSend: () => {
    console.log('User sent a message');
    // Your custom logic here
  }
});
```

## Use Cases

### 1. UI State Changes on First Message

Transform your page layout when users start interacting with the chatbot:

```javascript
Agent.initStandard({
  agentName: "your-agent-name",
  onSend: () => {
    // Hide hero section and show full chat interface
    showChatConversation();
  }
});
```

### 2. Analytics Tracking

Track user engagement and conversation starts:

```javascript
Agent.initBubble({
  agentName: "your-agent-name",
  onSend: () => {
    // Track conversation engagement
    analytics.track('chat_message_sent');
    
    // Show additional UI elements
    showSupportOptions();
  }
});
```

### 3. Dynamic Content Loading

Load additional resources or content when users engage:

```javascript
Agent.initPopup({
  agentName: "your-agent-name",
  onSend: () => {
    // Load support documentation
    loadHelpResources();
    
    // Show live chat status
    updateChatStatus('active');
  }
});
```

## Complete Example: Hero to Chat Transition

This example demonstrates a common use case where an initial hero screen transitions to a full chat interface when the user sends their first message:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Standard Test</title>
    <style>
      html, body {
        height: 100%;
        margin: 0; /* remove default margin */
      }

      agent-standard {
        height: 100%;
        width: 100%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: block; /* ensures it respects width/height */
      }

      /* Custom styles for hiding chat conversation */
    </style>
  </head>
  <body>
    <!-- Hero Section (initially visible) -->
    <div id="hero-section" style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      flex-direction: column;
      z-index: 10;
      transition: opacity 0.3s ease-in-out;
    ">
      <!-- Hero content -->
      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem;">
        <div style="text-align: center; max-width: 500px; color: white;">
          <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: 700;">Welcome!</h1>
          <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; line-height: 1.6;">
            I'm your AI assistant, ready to help answer questions and provide support. 
            Click below to start our conversation.
          </p>
          <button 
            onclick="showChatConversation()" 
            style="
              background: rgba(255,255,255,0.2); 
              border: 2px solid white; 
              color: white; 
              padding: 1rem 2rem; 
              font-size: 1.1rem; 
              border-radius: 50px; 
              cursor: pointer; 
              transition: all 0.3s ease;
              backdrop-filter: blur(10px);
            "
            onmouseover="this.style.background='rgba(255,255,255,0.3)'"
            onmouseout="this.style.background='rgba(255,255,255,0.2)'"
          >
            Start Conversation
          </button>
        </div>
      </div>
      
      <!-- Space for real input (it will overlay here) -->
      <div style="height: 80px; pointer-events: none;"></div>
    </div>

    <script type="module">
      import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
      Agent.initStandard({
        agentName: "Chatbot-c8693",
        onSend: () => { 
          console.log('User sent message - showing conversation');
          window.showChatConversation();
        }
      });

      // Function to hide conversation while keeping input visible
      function hideConversation() {
        const agentStandard = document.querySelector('agent-standard');
        if (agentStandard && agentStandard.shadowRoot) {
          const chatContainer = agentStandard.shadowRoot.querySelector('.agent-embed-container > div:first-child');
          if (chatContainer) {
            chatContainer.style.display = 'none';
          }
        }
      }

      // Function to show conversation
      function showConversation() {
        const agentStandard = document.querySelector('agent-standard');
        if (agentStandard && agentStandard.shadowRoot) {
          const chatContainer = agentStandard.shadowRoot.querySelector('.agent-embed-container > div:first-child');
          if (chatContainer) {
            chatContainer.style.display = 'flex';
          }
        }
      }

      // Make showConversation globally accessible
      window.showConversation = showConversation;

      
      // Function to transition from hero to chat
      window.showChatConversation = function() {
        const heroSection = document.getElementById('hero-section');
        const resetButton = document.getElementById('reset-button');
        
        // Hide hero section
        heroSection.style.opacity = '0';
        setTimeout(() => {
          heroSection.style.display = 'none';
        }, 300);
        
        // Show chat conversation
        showConversation();
        
        // Show reset button
        resetButton.style.display = 'block';
      };
      
      // Add reset functionality
      window.resetChat = function() {
        if (window.Agent && window.Agent.reset) {
          window.Agent.reset();
        } else {
          console.error('Agent.reset is not available');
        }
        
        // Show hero section again 
        const heroSection = document.getElementById('hero-section');
        const resetButton = document.getElementById('reset-button');
        
        heroSection.style.display = 'flex';
        setTimeout(() => {
          heroSection.style.opacity = '1';
        }, 50);
        
        // Hide reset button
        resetButton.style.display = 'none';
      };
    </script>

    <agent-standard style="opacity: 1; transition: opacity 0.3s ease-in-out;"></agent-standard>
    
    <!-- Reset Button -->
    <button id="reset-button" onclick="resetChat()" style="
      position: fixed; 
      bottom: 20px; 
      right: 20px; 
      padding: 10px 20px; 
      background: #ff4444; 
      color: white; 
      border: none; 
      border-radius: 25px; 
      cursor: pointer;
      z-index: 20;
      font-size: 0.9rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: background 0.3s ease;
      display: none;
    " 
    onmouseover="this.style.background='#ff3333'" 
    onmouseout="this.style.background='#ff4444'">
      Back to Hero
    </button>

  </body>
</html>
```

## Cross-Widget Compatibility

The `onSend` callback works consistently across all widget types:

- **Standard Widget**: `Agent.initStandard({ agentName: "...", onSend: () => {...} })`
- **Bubble Widget**: `Agent.initBubble({ agentName: "...", onSend: () => {...} })`
- **Popup Widget**: `Agent.initPopup({ agentName: "...", onSend: () => {...} })`

This ensures your custom logic remains consistent regardless of your chosen widget implementation.

## Implementation Notes

- The `onSend` callback is executed **before** the message is sent to the AI
- It runs **in addition to** the default sending behavior, not instead of it
- For analytics tracking, consider debouncing or throttling if users send messages rapidly
- The callback is optional and will not affect widget functionality if not provided