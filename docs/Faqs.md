---
id: quick-faq
description: List of supported platforms for integrating Predictable Dialogs chatbot into your website.
slug: /faqs
---

# Frequently Asked Questions
<details>
  <summary>I uploaded my docs, but some answers are incorrect.</summary>

   This can happen because document structure varies. You can tune the chatbot so it answers correctly by changing some settings. See the [Fix wrong answers guide](/docs/tools/file-search/fix-wrong-answers) for the full troubleshooting checklist.
</details>

<details>
  <summary>How can I make the AI greet users by their name?</summary>

  Use the `contextVariables` prop when initializing your widget to pass dynamic data, such as the user's name:

  ```js
  Agent.initStandard({
    agentName: "Support Assistant",
    contextVariables: {
      name: "John Doe"
    }
  });
  ```

  In your Predictable Dialogs system instructions, reference the same key with double curly braces—for example: `Welcome back {{name}}!`. The widget replaces `{{name}}` with whatever you provided, so the model always sees the personalized instruction.

  This approach works for any variable you want to inject (`plan`, `page`, `locale`, etc.), giving you fully dynamic prompts per session.
</details>

<details>
  <summary>Can I pass custom variables into my system instructions?</summary>

  Yes. Treat `contextVariables` as a mini templating layer between your website and the Predictable Dialogs instructions. Build an object with whatever metadata you need: user tier, current page, experiment flags, etc. and inject it when initializing the widget:

  ```js
  Agent.initPopup({
    agentName: "Docs Specialist",
    contextVariables: {
      page: window.location.pathname,
      plan: window.__APP_PLAN__,
      betaFlag: true
    }
  });
  ```

  Inside your system instructions, reference those keys using `{{page}}`, `{{plan}}`, or `{{betaFlag}}`. At runtime the widget replaces each placeholder before the model sees the prompt, letting you shape instructions per session.
</details>
<details>
  <summary>How to remove the OpenAI Citation markers e.g&nbsp; `【5:0†source】`</summary>

   On WhatsApp, the citation markers are removed by default.
   For the web widgets, you can remove it by using the `filterResponse` prop. 
   You can follow this [documentation](/docs/providers/openai-assistant/removing-citations) to remove the citation markers.
</details>
