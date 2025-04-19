---
title: 'Results'
---

# Results
*Results* are the data collected by the OpenAI assistant during conversations. Soon, we will introduce enhancements that allow these results to be used for automation.

For example, your OpenAI assistant can capture a user's name, email, or phone number, which will be listed in the results tab. Using automation, these results can then be utilized for tasks such as booking appointments or sending emails.

## How Do Results Get Populated?
1. **Configure your OpenAI Assistant with the function calling tool:**
    - Visit [OpenAI Assistant](https://platform.openai.com/assistants) and select your assistant.
    - In the tools section, click the "+ Functions" button.
    - In the modal, choose a predefined example from the "Examples" dropdown or click "✨ Generate"
    - If generating, enter a prompt describing the data you want to capture, and the tool will automatically create the necessary schema.
    - Save the selected or generated schema by clicking Save.
    
2. **Interact with the Assistant:** 
    - Return to your assistant and start a conversation. 
    - Ensure your assistant's system instructions include guidance to collect the configured data.
    - The data gathered during the conversation will appear in the Results tab of the predictable dialogs app.
    - You can configure multiple functions for a single assistant.