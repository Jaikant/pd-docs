---
title: 'Concepts'
hide_table_of_contents: false
---

In the Predictable Dialogs app, you’ll see two main pages:

1. **Agents** (the default page when the app opens)  
2. **AI Resources** (can be opened from the menu)

## Agents

An **Agent** is the entity you configure on the Agents page. Currently, each Agent can only be connected to **one** AI Resource at a time, although the underlying design supports multiple connections. 
You can give each Agent its own theme and setting.

## AI Resources

An **AI Resource** is listed on the AI Resources page, and it maps to an **AI Model** (e.g., a model from OpenAI, Anthropic, Deepseek, xAI, etc.). Every AI Model needs:

- A **unique name** within the app.
- An **API key** to the external provider.
- Potentially an **ID**, depending on the provider (e.g., an OpenAI Assistant might require an ID).

You can have multiple AI Resources that point to the **same** AI Model, as long as each has a unique name within the app.

For example:

| **AI Resource**  | **Maps To**                            |
|------------------|----------------------------------------|
| AI Resource 1    | OpenAI Assistant with ID “xyz”         |
| AI Resource 2    | OpenAI Assistant with ID “xyz”         |

Here, both AI Resource 1 and AI Resource 2 connect to the exact same AI model (the OpenAI Assistant with ID “xyz”), but they have different names in the app.

### Changing AI Resources

If you change which AI Model an AI Resource points to, **all Agents** connected to that AI Resource automatically start using the new AI model. You can also update an Agent to connect it to a different AI Resource at any time. This setup gives you a lot of flexibility to switch AI models on the fly.

### Naming Edge Case

If you have an AI Resource named **X** in the AI Resources page, and then on the Agents page you add a new OpenAI assistant (with an `assistantId` and `apiKey`) also named **X**, it will **replace** the existing AI Resource named **X**.