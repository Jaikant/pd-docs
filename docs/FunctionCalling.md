---
id: function-calling
description: Function calling allows AI models to connect to external APIs
slug: /function-calling
---

# Function Calling
**Estimated Time: 2 minutes if you have external API details ready**

Function calling lets you connect your AI models to external APIs.

There are three primary reasons you would configure function calling:

1. **Data Collection** (e.g lead generation)
2. **Triggering an action** (e.g sending an email)
3. **Information Retrieval** (e.g fetching order status)

<!-- This link helps you understand more about the [use cases for function calling](https://x.com/pdialogs). -->

<!-- ## Configuring function calling in OpenAI -->


## Configuring function calling on the PD App

### Prerequisites
To configure function calling you will need:
1. Your APIs method, it should be either a **'GET'** or **'POST'**.
2. Your **API endpoint url**.
3. _(optional)_ If your endpoint needs authentication, then the bearer token string.
(_Note_: If you need a different auth mechanism, please contact us)

### Sign In
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).

### Go to the AI Resources page
- Hover on the profile picture. The drop down menu will show up. Click **AI Resources**. 

## Select AI Resource 
- Click the AI Resource which needs to be configured. You will see a screen like below

![Function calling Image](/img/function-calling.webp)

- Click on the "Functions" button. This will pull the functions configured on the OpenAI Assistant into the PD app. You will be able to see the list of configured functions as shown in the image below.

![Pull functions Image](/img/pull-functions.webp)

- Now, click on the **gear/setting** icon against the function. This will open a modal as shown below:

![Add endpoint Image](/img/configure-functions.webp)

- Select your method from either "GET" or "POST". <span> Learn more </span>
- Enter your endpoint url
- If your endpoint needs authentication, click the checkbox "Add authentication" and add your **bearer token**. <span> Learn more </span>
- Click Save, to save the configuration. 

![Add endpoint Image](/img/add-endpoint.webp)

## Testing 
You can now start a session on your chatbot and enter the prompt which would trigger the function. You would notice that your function gets called and the chatbot assistant replies accordingly.