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

This link helps you understand more about the [use cases for function calling](https://predictabledialogs.com/learn/function-calling-use-cases).


## Configuring function calling

### Prerequisites
1. Configured your function in OpenAI - [Configuring Function Calling in OpenAI](https://predictabledialogs.com/learn/openai/configuring-function-calling)
2. Implemented you API endpoints and have the API method (`GET` or `POST`) & URL. 
3. _(optional)_ If your endpoint needs authentication, then the bearer token string.
(_Note_: If you need a auth mechanism other than bearer token, please contact us)

### Sign In
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).

### Go to the AI Resources page
- Hover on the profile picture. The drop down menu will show up. Click **AI Resources**. 

### Select AI Resource 
- Click the AI Resource which needs to be configured. You will see a screen like below

![Function calling Image](/img/function-calling.webp)

- Click on the "Functions" button. This will pull the functions configured on the OpenAI Assistant into the PD app. You will be able to see the list of configured functions as shown in the image below.

![Pull functions Image](/img/pull-functions.webp)

- Now, click on the **gear/setting** icon against the function. This will open a modal as shown below:

![Add endpoint Image](/img/configure-functions.webp)

- Select your method from either `GET` or `POST`.
- Enter your endpoint url
- If your endpoint needs authentication, click the checkbox **Add authentication** and add your **bearer token**.
- Click Save, to save the configuration. 

![Add endpoint Image](/img/add-endpoint.webp)

## Testing 
You can now start a session on your chatbot and enter the prompt which would trigger the function. You would notice that your function gets called and the chatbot assistant replies accordingly. The OpenAI platform `Threads` tab would also show the function invoked with the args and the response received from the endpoint.

## Understanding Authentication For Endpoints

When configuring your endpoints, you may need to ensure secure access by using authentication. Predictable Dialogs supports a simple and secure authentication method called **Bearer Token Authentication**.

### What is Bearer Token Authentication?

Bearer Token Authentication is a widely-used method for securing API calls. Think of it like using a key to unlock a door:

* Your service (API) provides you with an **API Key** (like a secret password).
* Each time Predictable Dialogs calls your endpoint, it uses this key as a "Bearer Token" to identify itself and gain access.

### How to Set It Up:

1. **Obtain Your API Key**:

   * Typically, you get this key from your developer or external service provider. Look under their settings, API access, or authentication sections.

2. **Enter the API Key**:

   * In Predictable Dialogs, check the **"Add Authentication"** checkbox.
   * Paste your API Key into the provided field.

### Security and Privacy:

* Predictable Dialogs securely stores your API keys using encryption.

### When is Authentication Needed?

* Authentication is required when your external endpoint expects secure requests.
* If your endpoint does not require authentication, simply leave the **"Add Authentication"** box unchecked.

If you're unsure whether your endpoint requires authentication, consult your developer or external service's documentation or support team.
