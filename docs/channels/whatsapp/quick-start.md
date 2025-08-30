---
title: 'Add WhatsApp'
---

# Add WhatsApp to Predictable Dialogs
**Estimated Time: 3 minutes if you have a WA business account details ready**

## Access Your Agent
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).
- Click on your agent.

## Go to page which installs agents
- Click "Install" on menu.

## Add WhatsApp to Agent
### Select platform 
- Click on **Platform** tab and select WhatsApp. 

### Add your WA business to PD
To complete this step you would need your **WhatsApp token** & **Phone Number Id**. You can get this by following the instructions in [WhatsApp Business Setup](https://predictabledialogs.com/docs/category/whatsapp-business-setup) 
- Click on WhatsApp Business
- Click button **ADD TO WHATSAPP**
  - Enter your *WhatsApp Token* and click **Next**
  - Enter your WhatsApp *Phone Number Id* and click **Next**
  
### Add the webhook to WhatsApp
- The next step, is to add the webhook and token to meta.
  - On the modal, click on the link **"Meta Console"**, this will open the page on which you can enter the webhook and token provided. 
  - On the meta page click **Verify and save** to save the webhook and token.
  - Scroll down on the meta page and locate the field with the name **"messages"**, click the toggle button so it is **"Subscribed"**.


Now, send a message to your WhatsApp Business Phone Number configured and you should get a reply from the PD agent! (Sometimes it takes a few hours for Meta to
verify your details)


### Customize the initial response
Select *Greeting* tab and enter or generate your greeting.

The initial response is the first message your AI agent displays. Personalize it to set the tone for user interactions.

- **Enable or Disable:**  
  Go to the **Greeting** tab and use the toggle button to turn the initial response on or off.
  :::tip initial response using a prompt
  If you turn off the greeting, you can generate an greeting/initial response using your own prompt. This is [configured](http://predictabledialogs.com/docs/channels/web/widgets/bubble#widget-behaviour--styling-parameters-optional) using the `initialPrompt` prop on the widget.  
  :::

- **Add a Custom Response:**  
  Enter your desired message in the input area. 
  
  If you have a long greeting or announcement, the below tips can help in formatting your WhatsApp message:

| Feature              | Syntax / Trick                           | How It Appears        |
| -------------------- | ---------------------------------------- |  --------------------- |
| **Bold**             | `*text*`                                 |  **Hello**             |
| *Italic*             | `_text_`                                 |  *Hello*               |
| ~~Strikethrough~~    | `~text~`                                 |  ~~Hello~~             |
| `Monospace` (inline) | `` `text` `` (single backticks)          |  `Hello`               |
| `Monospace Block`    | ` ```multi-line``` ` (triple backticks)      |  `Hello`               |
| **Bold + Italic**    | `*_text_*`                               |  ***Hello***           |
| Quote                | `>` at start of line                     |  > Hello               |
| Bullet List          | Use `-` or `•` with space                |  - Item 1<br/>- Item 2  |
| Numbered List        | Use numbers manually                     |  1. First<br/>2. Second |


Here is an example, using some of the tips from above:

  ```
    *Welcome to PredictableDialogs Support.*  
    _I am your virtual Support Engineer._  

    > How can I assist you today?  

    1. `Describe your issue`  
    2. Receive **clear solutions**  
    - *Efficient*  
    - *Reliable*  

    Visit: https://predictabledialogs.com  
    ```
  
  :::note Not applicable for WhatsApp
    The other theme options described on the page are not applicable for WhatsApp.
  :::
