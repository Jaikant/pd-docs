---
title: 'Settings'
---

# Settings
The settings page allows you to customize your Predictable Dialogs AI agents with ease. Configure initial responses, manage topic buttons, and generate engaging content using OpenAI. Follow the steps below to optimize your AI agent’s functionality to enhance user interactions on your website.

## Go to agent settings page
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in). 
- Select your existing agent. 
- Click **Settings** on menu.

## Customize the initial response
The initial response is the first message your AI agent displays. Personalize it to set the tone for user interactions.

- **Enable or Disable:**  
  Go to the **Initial Response** tab and use the toggle button to turn the initial response on or off.

- **Add a Custom Response:**  
  Enter your desired message in the input area. Use markdown for styling, such as:

```
**Hi there**
```
Basic HTML compatible with markdown is also supported:

```
<strong> **Hi there** </strong>
```

- **Generate Responses with OpenAI:**  
Click the ✨ button to create an initial response using your OpenAI assistant and a custom prompt.

*Note:* Links in this markdown viewer will open in the same tab, as the 'open in new tab' feature is not currently supported.


## Customize the topics 
__(Applicable only for AI topic button widget, not applicable for Standard, Popup & Bubble widgets)__

Topics allow you to provide pre-generated responses linked to buttons on your website. Each button triggers a specific pre-generated response, making it easier for users to interact with your AI agent.

### Add a topic
- Click on the Topics tab
- Click on **+**
- Enter the message to be shown for the topic. Or generate the message using your OpenAI assistant by clicking the ✨ button.
- Click the **< >** button and copy the embed code for the ai-button and add it to your website code.
```
<ai-button id="1">Button For Topic 1</ai-button>
``` 

### Exit Topic
  - **Enable Exit Topic:** Prevent users from continuing the conversation after selecting a topic.
  - **Disable Exit Topic:** Allow users to continue the conversation with the OpenAI assistant after selecting a topic.