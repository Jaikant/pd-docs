---
title: Creating an OpenAI Resource
sidebar_position: 1
---

# Creating an OpenAI Resource
**Estimated Time: 2 minutes**

An OpenAI resource connects directly to OpenAI's Responses API, providing fast response times and flexible configuration. This guide shows you how to create and configure an OpenAI resource.

## Creating from Agents Page

### Step 1: Create New Agent
1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in)
2. Click **+ Create new agent**
3. Select **AI Chatbot for website and WhatsApp**

### Step 2: Add AI Resource
1. Click the dropdown labeled **Click to add or select AI resource**
2. Click **+ Add AI Resource**
3. Select **OpenAI** as the resource type (this is the default option)
4. Click **Next**

### Step 3: Configure OpenAI Settings
1. **OpenAI API Key**: Enter your OpenAI API key (starts with `sk-`)
2. **OpenAI Model**: Select your preferred model:
   - `gpt-4o` (recommended for best quality)
   - `gpt-4o-mini` (faster and more cost-effective)
   - Other available models

3. Click **Next** to validate your configuration

### Step 4: Validation & Final Setup
1. The system will validate your API key by sending a test message ("hi") to OpenAI
2. Once validated, you can:
   - Update the **AI Resource Name** (optional)
   - Add **System Instructions** to customize the AI's behavior (optional)
3. Click **Save** to create the resource and connect it to your agent

### Step 5: Optional File Search Setup
After creating the resource, you'll see an alert: **"AI resource [name] created."** with an optional button to add files for search capabilities.

- Click the button to immediately configure file search
- Or skip this step and configure file search later from the AI Resources page

## Creating from AI Resources Page

1. Navigate to **AI Resources** from the main menu
2. Click **+ Add AI Resource**
3. Follow steps 3-4 from the Agents page process above

## Next Steps

- **Configure File Search**: Set up document search capabilities for your AI resource
- **Choose Channel**: Embed your agent on your website or connect to WhatsApp
- **Test Your Agent**: Send test messages to verify everything works correctly

## Key Differences from OpenAI Assistant

| Feature | OpenAI | OpenAI Assistant |
|---------|---------|------------------|
| **Response Time** | ~50ms | ~2-3s |
| **File Search** | Configured in Predictable Dialogs | Configured on OpenAI Platform |
| **Functions** | Coming soon | Available now |
| **Setup Complexity** | Simple API key + model | Requires Assistant ID |