---
title: Creating an OpenAI Agent
sidebar_label: OpenAI
sidebar_position: 1
---

# Creating an OpenAI Agent
**Estimated Time: 2 minutes**

An OpenAI resource connects your agent to OpenAI models using your own OpenAI API key or using the Predictable Dialogs platform key. Predictable Dialogs supports the latest OpenAI models exposed in the model selector.

## Before You Start (Optional)

You can bring your own OpenAI API key if you want to use your own OpenAI account.

1. Open the [OpenAI API keys page](https://platform.openai.com/api-keys).
2. Create or copy an API key. OpenAI only shows the full secret key when it is created, so store it securely.
3. Make sure the account has billing and model access for the model you want to use.

## Create From The Agents Page

### Step 1: Create New Agent
1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).
2. Click **+ Create agent**.
3. Give a name to your agent.

### Step 2: Configure OpenAI Settings
1. Click **ADD AI**.
2. Select **OpenAI** as the provider.
3. Select an existing OpenAI API key, enter a new API key, or use platform defaults if available.
4. Select the OpenAI model you want to use. The latest supported OpenAI models are listed in the model dropdown.
5. Click **Next** to validate the key and model.

### Step 3: Add The Instructions
1. Choose what your agent is for and adjust the personality and purpose.
2. Click **Next**.
3. Review or edit the agent behaviour instructions.
4. Click **Save** to create the resource and connect it to your agent.

## Understand The Instruction Hierarchy

![Agent instructions and Skill Instructions hierarchy](/img/ai-resources/agent-skill-instructions-hierarchy.png)

The **Agent instructions** section shown at the top is closed in the screenshot. It contains the provider and model details, along with the agent personality and purpose.

The **Skill Instructions** card contains the agent behaviour. It also contains **Knowledge & actions** and the **Add** button used to add documents, tools, and actions the agent can use. This separation is intentional: the agent personality stays separate from the [skill](/docs/skills), which defines what the agent knows how to do.

## Next Steps

- **Add knowledge and actions**: Use the [Tools overview](/docs/tools/overview) to add searchable documents, API tools, app connections, or website payload actions to the agent skill.
- **Choose Channel**: Embed your agent on your website or connect to WhatsApp.
- **Test Your Agent**: Send test messages to verify everything works correctly.
