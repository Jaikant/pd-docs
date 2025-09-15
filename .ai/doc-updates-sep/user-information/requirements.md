We have added an enhancement in which the user information, i.e. the user who is chatting is captured in the session log. 

By default, the users
- IP address
- Country is captured

Additionally, it can also capture other fields if sent from the widget to the predictable dialogs backend. 
The additional information it can capture is:

The user information would have to be sent in the below shape:
```json
{
  user_id: "ab123", // Optional send the user id
  user_name: "Jaikant Kumaran", // Optional send the user name
  user_email: "jaikant@gmail.com", // Optional send the user email
  user_segments: ["sports", "ott"]  // Optional tags
}
```
This is available on all widgets - standard, bubble, popup.

Here is example embed code using Standard widget:

```html
  <script type="module">
    import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
    Agent.initStandard({
      agentName: "your chatbot agent name ...",
      user: {
        user_id: "ab123",
        user_name: "Jaikant Kumaran",
        user_email: "jai@example.com",
        user_segments: ["sports", "ott"]
      },
    });
  </script>
```

This information would be captured in the frontend session log.

We need to update the following documentation places:
1. The props for each widget should contain the new prop information.
2. The Features/Sessions should be uppated with this information. With a link to the widget page for all prop documentation.
3. Channels/Web/Web Channel Overview should contain this information with a link to sessions page. 

