---
id: connect-ai-resource
title: Connect an AI Resource
description: Attach an AI model or assistant to the agent you just created.
sidebar_position: 30
---
#
## Connect an AI Resource  
**Estimated time: 2 minutes**

An **AI Resource** is the actual model (or assistant) that powers your agent's replies.  
Once connected, every message your agent receives is forwarded to the selected resource.

> ℹ️ &nbsp;Need a refresher on the difference between **Agents** and **AI Resources**?  
> See the [Core Concepts](/docs/concepts) page.

---

## Open the "AI Resource" panel

1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).  
2. Select the agent you just created.  
3. On current page, click the drop down input with the label **AI Resource**
- If you are configuring for the first time you will not have any existing ai resources. So click **+ Add AI Resource**

---

## Choose a resource type

| Option | Why you'd pick it | Typical round‑trip time* | File Search | Functions |
|--------|------------------|--------------------------|-------------|-----------|
| **OpenAI** | Fastest replies, ideal for real‑time chat | **≈ 50 ms** | ✅ Managed in Predictable Dialogs | 🚧 Coming soon |
| **OpenAI Assistant** | Built‑in tools & retrieval, code interpreter | **≈ 2–3 s** | ✅ Configured on OpenAI Platform | ✅ Available |
| **Anthropic** | *Coming soon* | — | — | — |
| **XAI** | *Coming soon* | — | — | — |

\*Based on internal benchmarks with the same prompt ("hi").

> 🚀 **Recommendation:**  
> - **For speed and simplicity**: Choose **OpenAI**
> - **For advanced functions**: Choose **OpenAI Assistant**  
> You can always switch the agent to another resource later—no embed code changes needed.

---

## 3&nbsp;· Enter provider‑specific details

### For OpenAI Resources

Field | Description | Example
------|-------------|---------
**API Key** | Your OpenAI API key | `sk-...`
**Model** | OpenAI model name | `gpt-4o`, `gpt-4o-mini`

After entering these details:
1. Click **Next** to validate your API key
2. Optionally update the resource name and add system instructions
3. Click **Save**

### For OpenAI Assistant Resources

Field | Description | Example
------|-------------|---------
**API Key** | Your OpenAI API key | `sk-...`
**Assistant ID** | Your OpenAI Assistant ID | `asst_abc...`

After entering these details, click **Save**.

---

## Next Steps

The new resource now appears in the dropdown and is **immediately active** for the agent.

**For OpenAI resources**, you can optionally:
- [Configure File Search](/docs/providers/openai/file-search) for document-based responses
- Add system instructions to customize behavior

**For OpenAI Assistant resources**:
- File search and functions are managed on the OpenAI platform
- See the [OpenAI Assistant guides](/docs/providers/openai-assistant/create-resource) for advanced configuration

---

Need to switch later? Re‑open the **AI Resource** dropdown and pick a different entry—your website embed link stays the same.