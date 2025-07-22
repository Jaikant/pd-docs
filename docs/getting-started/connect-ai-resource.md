---
id: connect-ai-resource
title: Connect an AI Resource
description: Attach an AI model or assistant to the agent you just created.
sidebar_position: 30
---
#
## Connect an AI Resource  
**Estimated time: 2 minutes**

An **AI Resource** is the actual model (or assistant) that powers your agent’s replies.  
Once connected, every message your agent receives is forwarded to the selected resource.

> ℹ️ &nbsp;Need a refresher on the difference between **Agents** and **AI Resources**?  
> See the [Core Concepts](/docs/concepts) page.

---

## Open the “AI Resource” panel

1. Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in).  
2. Select the agent you just created.  
3. On current page, click the drop down input with the label **AI Resource**
- If you are configuring for the first time you will not have any existing ai resources. So click **+ Add AI Resource**

---

## Choose a resource type

| Option | Why you’d pick it | Typical round‑trip time* |
|--------|------------------|--------------------------|
| **OpenAI** | Fastest replies, ideal for real‑time chat | **≈ 50 ms** |
| **OpenAI Assistant (Assistants API)** | Built‑in tools & retrieval, code interpreter | **≈ 2–3 s** |
| **Anthropic** | *Coming soon* | — |
| **XAI** | *Coming soon* | — |

\*Based on internal benchmarks with the same prompt (“hi”).

> 🚀 **Recommendation:**  
> If latency is your top priority, start with **OpenAI**.  
> You can always switch the agent to another resource later—no embed code changes needed.

---

## 3&nbsp;· Enter provider‑specific details

Field | Description | Example
------|-------------|---------
**API Key** | Secret from your provider’s dashboard | `sk-...`
**Model / Assistant ID** | Model name (`gpt-4o`, `gpt-4o-mini`) or Assistant ID (`asst_abc...`) | `gpt-4o`

Click **Save**.  
The new resource now appears in the dropdown and is **immediately active** for the agent.

---

Need to switch later? Re‑open the **AI Resource** dropdown and pick a different entry—your website embed link stays the same.