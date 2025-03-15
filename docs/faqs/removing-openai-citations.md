---
title: ''
hide_table_of_contents: false
---

## Removing Citation Markers From OpenAI Response
**Estimated Time: 2 minute**

*The citation marker are filtered out automatically from messages sent to WhatsApp.*

OpenAI models (like GPT-4) use a notation like:`【5:0†source】` as a reference marker when they're citing information.
`【5:0】` refers to a specific location in the uploaded documents - the "5" likely indicates document or chapter number, and "0" could be the paragraph or section
`†source` indicates it's a citation to a source document

These citation markers appear when the model is pulling information from specific sources. It helps users understand where the information is coming from, though the actual sources aren't accessible to users.
OpenAI models use these citations to show they're grounding their responses in specific documents rather than generating information without reference.

The citation marker are **filtered out automatically from messages sent to WhatsApp**. For chat widgets on websites, the citation Markers can be removed using the `filterResponse` prop on the Agent embed code.

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

The `filterResponse` prop accepts a function that processes the AI's response. This function takes the response as an argument and allows for custom handling, such as filtering out citations. The function should return the modified response, which will then be displayed in the widget.

In the above example, the function uses the regex to remove the citations.

```
function(response) {
      const citationRegex = /【\d+:\d+†[^\s】]+】/g;
      return response.replace(citationRegex, "");
}
```

