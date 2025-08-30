# Add a section for tools in the documentation

AI tool calls can call tools. 
Things like calling an end point with GET and POST is a tool call.
Are there can be inbuilt tools like RAG/Vector search.

This is described here to an extent @pd-docs/docs/providers/openai-assistant/function-calling.md

The above documentation has some generic information and some information which is specific to openai assistants. We need to move the generic information to common provider independent place - probably within the features. And then from there have links to provider specific tools. This may not be the best way to do it, so I would like you to analyze the current documentation structure and come up with a plan. The goal is to make new users to be able to understand the capabilities in a quick way without needing to dig in deep into the documentation.