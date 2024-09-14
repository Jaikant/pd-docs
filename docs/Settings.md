---
id: settings
description: Predictable Dialogs was designed from the ground up to enable the easy design and embedding of AI agents into websites.
slug: /settings
---

# Settings
The settings can be used to set a custom initial response and to configure the *topic button* widget.

## Go to agent settings page
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in). Click your existing agent. Click "Settings" on menu.

## Customize the initial response
- Click the Initial Response tab
- Turn the initial response on/off by clicking the toggle button.
- If on, add the initial response you want in the input area. You can add markdown like:
```
**Hi there**
```
You could also use some basic html which works with markdown, like below: 
```
<strong> **Hi there** </strong>
```

You can also generate the initial response using your openAI assistant and a prompt by clicking the ✨ button

Links in this markdown viewer will open in the same tab, as the 'open in new tab' feature is not currently supported.


## Customize the topics

Topics are a way to show pre-generated response to users. 
Each topic button is linked to a pre-generated response. The id in the 
`<ai-button id="1">Button For Topic 1</ai-button>` connects the pre-generated response to the particular button. This allows a way to have multiple buttons on the website displaying pre-generated messages.

### Add a topic
- Click on the Topics tab
- Click on **+**
- Enter the message to be shown for the topic. Or generate the message using your OpenAI assistant by clicking the ✨ button.
- Click the **< >** button and copy the embed code for the ai-button and add it to your website code.


#### Exit Topic
Exit topic if on, would not allow the user to carry on the conversation further. If Exit topic is off, the user can continue the conversation with the OpenAI assistant.