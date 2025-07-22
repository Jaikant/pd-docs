---
title: Function Calling
sidebar_position: 2
---

# Function Calling

**Estimated Time: 4 minutes**

Function calling lets you connect your AI models to external APIs.

There are three primary reasons you would configure function calling:

1. **Data Collection** (e.g., lead generation)
2. **Triggering an action** (e.g., sending an email)
3. **Information Retrieval** (e.g., fetching order status)

Learn more about the [use cases for function calling](https://predictabledialogs.com/learn/function-calling-use-cases).

## Configuring Function Calling

### Prerequisites

1. Function configured in OpenAI - [Configuring Function Calling in OpenAI](https://predictabledialogs.com/learn/openai/configuring-function-calling)
2. Implemented API endpoints, including HTTP method (`GET` or `POST`) and URL.
3. *(Optional)* Bearer token for endpoints requiring authentication.

   * (*Note*: For other authentication mechanisms, please contact us.)

### Sign In

* Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).

### Navigate to AI Resources

* Hover over your profile picture and select **AI Resources** from the dropdown.

### Select AI Resource

* Click on the AI Resource to configure. You'll see:

![Function calling Image](/img/function-calling.webp)

* Click the "Functions" button to import functions from your OpenAI Assistant into Predictable Dialogs.

![Pull functions Image](/img/pull-functions.webp)

* Click the **gear/settings** icon next to the desired function to open configuration:

![Add endpoint Image](/img/configure-functions.webp)

### Choose the HTTP Method {#http-method-selection}

* **GET**: Sends function arguments as query parameters in the URL.

  * Example:

    ```
    https://api.open-meteo.com/v1/forecast?current=temperature
    ```
  * Predictable Dialogs automatically appends additional parameters provided by the LLM during chat interactions.

* **POST**: Sends function arguments in the request body (typically JSON format).

* Enter your endpoint URL. Include static query parameters directly in the URL for `GET` requests.

* Check **Add Authentication** and enter the **bearer token** if your endpoint requires authentication.

* Click **Save** to finalize.

![Add endpoint Image](/img/add-endpoint.webp)

## Testing Function Calls

* Start a chatbot session and input a prompt that triggers the configured function. The chatbot assistant will respond based on the API call.

### Reviewing Function Call Details

* Go to the "Sessions" tab of your agent to view chat interactions.
* Select the relevant conversation to review details such as:

  * Triggered function name and arguments
  * Endpoint method and URL
  * Endpoint response
  * Request duration in milliseconds

![Function calling information in sessions](/img/function-calling-sessions.webp)

## Endpoint Authentication

Secure your endpoints with **Bearer Token Authentication** when necessary.

### What is Bearer Token Authentication?

Bearer Token Authentication secures API calls like a secret key:

* Your API provider gives you an **API Key**.
* Predictable Dialogs uses this key as a Bearer Token to authenticate API calls.

### Setup

1. **Obtain API Key** from your developer or API provider.
2. In Predictable Dialogs, select **Add Authentication** and paste the API Key.

### Security & Privacy

* Predictable Dialogs securely encrypts and stores your API keys.

### When Authentication is Needed

* Required for secured endpoints.
* If authentication isn't needed, leave **Add Authentication** unchecked.

Contact your developer or API provider if uncertain about authentication requirements.