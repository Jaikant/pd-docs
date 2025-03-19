---
title: 'Authentication'
hide_table_of_contents: false
---

### API Keys
The Predictable dialogs API uses access tokens for authentication. 

You can generate the access token on the app, if you click the *profile picture -> Acess Tokens -> Generate new token*

**Remember that your access token is a secret!** Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your access token can be securely loaded from an environment variable or key management service.

All API requests should include your access token in an Authorization HTTP header as follows:

```
Authorization: Bearer PD_ACCESS_TOKEN
```

