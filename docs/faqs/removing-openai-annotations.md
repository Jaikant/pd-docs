---
title: ''
hide_table_of_contents: false
---

## Removing Annotations From OpenAI Response
**Estimated Time: 1 minute**

Annotations can be removed using the `filterResponse` prop on the Agent embed code.
Here is an example using the Standard embed

```html
<script type="module">
  import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
  Agent.initStandard({
    agentName: "your assistant name",
    apiHost: "https://app.predictabledialogs.com/web/incoming",
    initialPrompt: 'Tell me a joke',
    filterResponse: function(response) {
      const annotationRegex = /【\d+:\d+†[^\s】]+】/g;
      return response.replace(annotationRegex, "");
    }
  });
</script>

```

The `filterResponse` prop accepts a function that processes the AI's response. This function takes the response as an argument and allows for custom handling, such as filtering out annotations. The function should return the modified response, which will then be displayed in the widget.

In the above example, the function uses the regex to remove the annotations.

```
function(response) {
      const annotationRegex = /【\d+:\d+†[^\s】]+】/g;
      return response.replace(annotationRegex, "");
}
```

