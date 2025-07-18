---
title: 'Concepts'
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

For example:

| **AI Resource**  | **Maps To**                            |
|------------------|----------------------------------------|
| AI Resource 1    | OpenAI gpt-4o with name “mygpt” |
| AI Resource 2    | OpenAI gpt-4.1 with name “mygpt-4.1” |
| AI Resource 3    | OpenAI Assistant with assistant ID “xyz” |


### Relationship between AI Resources & Agents

Currently, each Chatbot Agent can only be connected to **one** AI Resource at a time. 

- If you change the AI Model an AI Resource points to, **all Agents** connected to that AI Resource automatically start using the new AI model. 
- You can update an Agent to a different AI Resource at any time. 

This setup gives you a lot of flexibility to switch AI models on the fly.

<!-- ### Naming Edge Case

If you have an AI Resource named **X** in the AI Resources page, and then on the Agents page you add a new OpenAI assistant (with an `assistantId` and `apiKey`) also named **X**, it will **replace** the existing AI Resource named **X**. -->