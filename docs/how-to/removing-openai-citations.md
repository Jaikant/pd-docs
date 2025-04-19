---
title: 'Removing Citation Markers From OpenAI Response'
hide_table_of_contents: false
---

**Estimated Time: 3 minute**

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
    filterResponse: function(response) {
      const citationRegex = /【\d+:\d+†[^【】]+】/g;
      return response.replace(citationRegex, "");
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

### **Special Note**

Sometimes, the regex provided above might not fully remove citation markers. This usually happens when uploaded file names contain special characters.

If you still see citation markers, check the file names in your OpenAI upload. Try either:

- Renaming the file to remove special characters, or  
- Asking a GenAI assistant to help adjust the regex to handle your file names.

The current regex will **already** match citations from file names that include:

- Spaces – `"health care.pdf"`  
- Dashes & underscores – `"health-care_final.pdf"`  
- Parentheses – `"file(name).txt"`  
- Commas – `"notes,final.docx"`  
- Ampersands – `"sales & marketing.xlsx"`  
- Apostrophes – `"client's-report.pdf"`  
- Plus signs – `"sum+stats.txt"`  