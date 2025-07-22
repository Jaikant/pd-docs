---
title: File Search with OpenAI
sidebar_position: 2
---

# File Search with OpenAI Resources

OpenAI resources support file search capabilities through vector stores managed within Predictable Dialogs. This allows your AI agent to search through uploaded documents to provide more accurate, context-aware responses.

## How It Works

Unlike OpenAI Assistants where file search is configured on the OpenAI platform, OpenAI resources use Predictable Dialogs to manage file search:

- **Vector Store Creation**: Files are uploaded to OpenAI vector stores via Predictable Dialogs
- **Search Integration**: The AI automatically searches relevant documents when answering questions
- **Flexible Configuration**: Control chunk size, overlap, and maximum returned chunks

## Configuring File Search

### From the Agents Page (During Setup)

After creating an OpenAI resource, you'll see an alert with an option to add files:

1. Click the **Add Files** button in the alert
2. This opens the file upload modal (see "Upload Process" below)

### From the AI Resources Page

1. Navigate to **AI Resources** from the main menu
2. Select your OpenAI resource
3. Scroll to the **Tools** section at the bottom
4. Toggle **File Search** to **Enabled**
5. Click the **+ Store** button that appears
6. This opens the file upload modal

## Upload Process

### File Upload Modal

1. **Select API Key**: At the top, you'll see which OpenAI key will be used:
   - Default: Your default OpenAI key if set
   - Resource-specific: The key assigned to this AI resource
   - Click **Change** to select a different key

2. **Choose Files**: 
   - Drag and drop files into the modal
   - Or click **Select** to browse for files
   - Supported formats: PDF, TXT, DOCX, and more

3. **Advanced Options** (Optional):
   - **Chunk Size**: Default 800 tokens (how large each text chunk should be)
   - **Chunk Overlap**: Default 400 tokens (overlap between chunks for context)

4. **Upload**: Click **Upload** to create the vector store and process files

### API Key Selection

If you need to choose a different API key:

1. Click **Change** next to the displayed key
2. Options available:
   - **Use default key** (if you have one set)
   - **Use resource key** (the key assigned to this AI resource)
   - **Add or select key** - Choose from existing keys or add a new one

### Processing Status

After upload:
- Files are immediately uploaded to the OpenAI vector store
- Processing takes a few seconds to minutes depending on file size
- You can close the modal during processing - it will continue in the background
- Status updates appear in the modal while open

## Managing Vector Stores

### Vector Store Information

Once created, your vector store displays:
```
vs_687f46de92d48191b887d82c86384921 • Max Chunks: 10 • Chunk size: 800 tokens • Chunk Overlap: 400 tokens
```

### Available Actions

- **Update Files**: Add new files or remove existing ones
- **Settings** (gear icon): Adjust max number of chunks returned (1-20)
- **Delete**: Remove the entire vector store

### Max Chunks Setting

Control how many relevant chunks the AI receives for each search:
- **Lower values** (1-5): More focused, faster responses
- **Higher values** (10-20): More comprehensive context, potentially slower

## Best Practices

### File Preparation
- Use clear, well-structured documents
- Include relevant headings and sections
- Avoid duplicate content across files

### Chunk Configuration
- **Smaller chunks** (400-600 tokens): Better for precise information
- **Larger chunks** (800-1200 tokens): Better for context and relationships
- **Higher overlap** (300-500 tokens): Ensures context isn't lost between chunks

### Performance Tips
- Start with default settings (800/400 tokens)
- Adjust max chunks based on response quality
- Monitor costs - more chunks = more tokens used per query

## Troubleshooting

**Upload Fails**: Check that your API key has sufficient permissions and credits
**Search Not Working**: Ensure file search is toggled ON and vector store shows as active
**Poor Results**: Try adjusting chunk size or uploading more relevant documents