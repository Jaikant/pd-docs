---
title: Tools Overview
sidebar_position: 1
---

# AI Tools Overview

**Estimated Time: 2 minutes**

Tools extend your AI agents with powerful capabilities to interact with external systems, retrieve information, and perform actions beyond generating text responses.

## What Are AI Tools?

AI tools allow your agents to:

- **Connect to External APIs** - Make HTTP requests to fetch real-time data or trigger actions
- **Search Through Documents** - Find relevant information from uploaded files using vector search
- **Perform Complex Operations** - Execute multi-step workflows combining data retrieval and processing

Think of tools as giving your AI agent "superpowers" to access information and perform tasks that go beyond its training data.

## Available Tool Types

### Function Calling

Connect your AI agents to external APIs and services.

**Use Cases:**
- **Data Collection** - Capture leads, survey responses, or user feedback
- **Action Triggers** - Send emails, create tickets, or update databases  
- **Information Retrieval** - Fetch order status, weather data, or account details

**How it works:** Your agent calls predefined functions with parameters, which make HTTP requests to your endpoints.

**Learn more:** [Function Calling Guide →](/docs/tools/function-calling)

### File Search (RAG)

Enable your agents to search through uploaded documents and knowledge bases.

**Use Cases:**
- **Knowledge Base Queries** - Search company documentation, policies, or FAQs
- **Document Analysis** - Extract information from reports, contracts, or manuals
- **Contextual Responses** - Provide answers based on your specific content

**How it works:** Documents are processed into searchable chunks using vector embeddings, allowing semantic search.

**Learn more:** [How File Search Works →](/docs/tools/file-search/how-file-search-works)

## Provider Compatibility

| Tool Type | OpenAI Assistant | OpenAI |
|-----------|:----------------:|:------:|
| Function Calling | ✅ Available | 🚧 Coming Soon |
| File Search | ✅ Available | ✅ Available |

## Getting Started

1. **Choose Your Provider** - Select an AI provider that supports the tools you need
2. **Configure Tools** - Set up function calling endpoints or upload documents for search
3. **Test Your Agent** - Verify tools work correctly in chat interactions
4. **Monitor Performance** - Review tool usage in session logs

## Best Practices

- **Start Simple** - Begin with one tool type and expand gradually
- **Test Thoroughly** - Verify tool behavior with various inputs before going live
- **Monitor Costs** - Tool usage affects token consumption and API costs
- **Secure Endpoints** - Use proper authentication for external API connections
- **Optimize Performance** - Configure tools for your specific use case and response time needs

## Next Steps

- [Function Calling Guide →](/docs/tools/function-calling) - Learn to connect external APIs
- [How File Search Works →](/docs/tools/file-search/how-file-search-works) - Set up document search capabilities
- [OpenAI →](/docs/providers/openai/create-resource) - Get started with OpenAI provider
