---
title: How File Search Works
sidebar_position: 1
---

# How File Search Works

**Estimated Time: 4 minutes**

File Search, also known as Retrieval-Augmented Generation (RAG), enables your AI agents to find and reference information from uploaded documents. This allows your agents to provide accurate, context-specific answers based on your own content.

## How File Search Works

1. **Document Processing** - Your files are broken into smaller chunks and converted to vector embeddings
2. **Vector Storage** - These embeddings are stored in a searchable vector database
3. **Semantic Search** - When users ask questions, the system finds relevant chunks using semantic similarity
4. **Response Generation** - The AI incorporates the retrieved information into its response

## Key Concepts

### Chunk size
Documents are split into smaller pieces (chunks) to improve search relevance.

**Chunk Size Considerations:**
- **Smaller chunks** (100-400 tokens) - More precise, specific information
- **Larger chunks** (400-800 tokens) - Better context and relationships

*Defaults to 100*

### Chunk Overlap
Overlapping text between chunks ensures important context isn't lost at chunk boundaries.

*Defaults to 20*

### Max chunks per answer
Adjust how many chunks to use per answer. 

*Defaults to 3*