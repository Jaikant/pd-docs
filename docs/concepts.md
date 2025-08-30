---
id: concepts
title: 'Concepts'
slug: /concepts
hide_table_of_contents: true
---

In the Predictable Dialogs app, you’ll see two main pages:

1. **Agents** (the default page when the app opens)  
2. **AI Resources** (can be opened from the menu)

## Agents

An **Agent** is the entity you configure on the Agents page. It uses the configured AI models to perform tasks. 

We currently provide Chatbot Agents. Chatbot Agents can be added to websites or connected to WhatsApp. You can give each Chatbot Agent its own theme and setting.

## AI Resources

An **AI Resource** is an AI model with attached tools. Every AI resource needs:

- A **unique name** within the app.
- An **API key** to the external provider.

If you change the AI Model on an AI Resource, **all Agents** connected to that AI Resource automatically start using the new AI model. 

A Chatbot Agent can only be connected to **one** AI Resource at a time. 

You can update an Agent to a different AI Resource at any time.

### Resource Types

We currently support two main types of AI resources:

**OpenAI**
- Connect directly to OpenAI's Responses API
- Fastest response times (~50ms)
- File search managed within Predictable Dialogs
- Functions coming soon

**OpenAI Assistant**  
- Use OpenAI's Assistants API
- Built-in tools and code interpreter (~2-3s response time)
- File search configured on OpenAI platform
- Full function calling support available now 