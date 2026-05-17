---
title: 'Agent Theme'
hide_table_of_contents: false
---

Use these endpoints to read and update an agent's web widget theme.

Theme endpoints manage saved widget configuration, including colors, avatars, input options, starter prompts, welcome content, and uploaded image assets.

All endpoints require:

- `Authorization: Bearer $PD_ACCESS_TOKEN`

## Theme Object

```json
{
  "agent": {
    "id": "cmabc123agent",
    "name": "Support Agent"
  },
  "startMode": "Prompts",
  "theme": {
    "general": {
      "font": "Inter",
      "background": {
        "type": "Color",
        "content": "#ffffff"
      }
    },
    "chat": {
      "roundness": "medium",
      "hostBubbles": {
        "backgroundColor": "#111827",
        "color": "#ffffff",
        "isMessageActionBarEnabled": true,
        "isCorrectivePopupEnabled": false
      },
      "guestBubbles": {
        "backgroundColor": "#f3f4f6",
        "color": "#111827"
      },
      "hostAvatar": {
        "isEnabled": true,
        "url": "https://example.com/ai-avatar.png"
      },
      "guestAvatar": {
        "isEnabled": false,
        "url": null
      },
      "buttons": {
        "backgroundColor": "#111827",
        "color": "#ffffff"
      },
      "inputs": {
        "backgroundColor": "#ffffff",
        "color": "#111827",
        "placeholderColor": "#6b7280"
      }
    },
    "customCss": ""
  },
  "settings": {
    "general": {
      "isBrandingEnabled": true
    }
  },
  "inputOptions": {
    "placeholder": "Ask anything",
    "buttonText": "Send",
    "buttonIconUrl": null,
    "isLong": false,
    "type": "fixed-bottom"
  },
  "initialPrompts": [
    {
      "text": "What can you help with?",
      "icon": "wave"
    }
  ],
  "welcome": {
    "title": "Welcome",
    "subtitle": "How can we help?",
    "iconUrl": "https://example.com/welcome.svg"
  },
  "buttonIconUrl": null
}
```

### Field Notes

| Field | Description |
| --- | --- |
| `agent.id` | Predictable Dialogs agent ID. |
| `startMode` | Start experience mode. Values are `Greeting` or `Prompts`. |
| `theme` | Saved widget appearance settings. |
| `settings.general.isBrandingEnabled` | Whether Predictable Dialogs branding is shown. Removing branding may require a paid plan. |
| `inputOptions` | Saved message input behavior and labels. |
| `initialPrompts` | Starter prompts shown before the first user message. |
| `welcome` | Welcome header shown with starter prompts. |

## Get Agent Theme

```
GET https://app.predictabledialogs.com/v1/agents/{agentId}/theme
```

Gets the saved theme for an agent.

### Example Request

```bash
curl https://app.predictabledialogs.com/v1/agents/cmabc123agent/theme \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN"
```

### Returns

```json
{
  "data": {
    "agent": {
      "id": "cmabc123agent",
      "name": "Support Agent"
    },
    "startMode": "Prompts",
    "theme": {
      "general": {
        "font": "Inter",
        "background": {
          "type": "Color",
          "content": "#ffffff"
        }
      },
      "chat": {
        "roundness": "medium",
        "hostBubbles": {
          "backgroundColor": "#111827",
          "color": "#ffffff",
          "isMessageActionBarEnabled": true,
          "isCorrectivePopupEnabled": false
        }
      },
      "customCss": ""
    },
    "settings": {
      "general": {
        "isBrandingEnabled": true
      }
    },
    "inputOptions": {
      "placeholder": "Ask anything",
      "buttonText": "Send",
      "buttonIconUrl": null,
      "isLong": false,
      "type": "fixed-bottom"
    },
    "initialPrompts": [],
    "welcome": {},
    "buttonIconUrl": null
  }
}
```

## Update Agent Theme

```
PATCH https://app.predictabledialogs.com/v1/agents/{agentId}/theme
```

Partially updates an agent's saved widget theme. Send only the fields you want to change.

### Request Body

```json
{
  "startMode": "Prompts",
  "theme": {
    "chat": {
      "hostBubbles": {
        "backgroundColor": "#111827",
        "color": "#ffffff",
        "isMessageActionBarEnabled": false,
        "isCorrectivePopupEnabled": true
      }
    }
  },
  "inputOptions": {
    "placeholder": "Ask me anything"
  },
  "initialPrompts": [
    {
      "text": "What can you help with?",
      "icon": "wave"
    }
  ],
  "welcome": {
    "title": "Welcome",
    "subtitle": "Choose a starter question or type your own."
  }
}
```

### Body Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `theme` | object | No | Widget appearance settings. |
| `settings` | object | No | Widget settings, including `settings.general.isBrandingEnabled`. |
| `inputOptions` | object | No | Input placeholder, button label, button icon URL, long-input mode, and input type. |
| `startMode` | string | No | `Greeting` or `Prompts`. |
| `initialPrompts` | array | No | Starter prompts. Each item can be a string or an object with `text`, `icon`, and `iconUrl`. |
| `welcome` | object | No | Welcome header content. |

At least one recognized field is required.

### Initial Prompts

You can send starter prompts as strings:

```json
{
  "startMode": "Prompts",
  "initialPrompts": [
    "Show me pricing",
    "How does onboarding work?"
  ]
}
```

Or as objects with optional icons:

```json
{
  "startMode": "Prompts",
  "initialPrompts": [
    {
      "text": "Show me pricing",
      "iconUrl": "https://example.com/icon.svg"
    }
  ]
}
```

### Example Request

```bash
curl -X PATCH https://app.predictabledialogs.com/v1/agents/cmabc123agent/theme \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -d '{
    "startMode": "Prompts",
    "inputOptions": {
      "placeholder": "Ask me anything"
    },
    "initialPrompts": [
      {
        "text": "What can you help with?",
        "icon": "wave"
      }
    ]
  }'
```

### Returns

Returns the updated theme object.

```json
{
  "data": {
    "agent": {
      "id": "cmabc123agent",
      "name": "Support Agent"
    },
    "startMode": "Prompts",
    "theme": {
      "general": {
        "font": "Inter",
        "background": {
          "type": "Color",
          "content": "#ffffff"
        }
      },
      "chat": {
        "hostBubbles": {
          "backgroundColor": "#111827",
          "color": "#ffffff",
          "isMessageActionBarEnabled": true,
          "isCorrectivePopupEnabled": false
        }
      }
    },
    "settings": {
      "general": {
        "isBrandingEnabled": true
      }
    },
    "inputOptions": {
      "placeholder": "Ask me anything",
      "buttonText": "Send",
      "buttonIconUrl": null,
      "isLong": false,
      "type": "fixed-bottom"
    },
    "initialPrompts": [
      {
        "text": "What can you help with?",
        "icon": "wave"
      }
    ],
    "welcome": {},
    "buttonIconUrl": null
  }
}
```

### Branding

Setting `settings.general.isBrandingEnabled` to `false` removes Predictable Dialogs branding. If your plan does not allow branding removal, the request returns `403`.

```json
{
  "settings": {
    "general": {
      "isBrandingEnabled": false
    }
  }
}
```

## Upload Theme Asset

```
POST https://app.predictabledialogs.com/v1/agents/{agentId}/theme/assets
```

Uploads an image asset that can be used in later theme updates, such as welcome icons, prompt icons, avatars, or button icons.

### Request Body

Send `multipart/form-data` with one field:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | file | Yes | Image file to upload. |

Supported formats:

- SVG
- PNG
- JPG/JPEG
- WebP
- GIF

The maximum file size is 2 MB.

### Example Request

```bash
curl -X POST https://app.predictabledialogs.com/v1/agents/cmabc123agent/theme/assets \
  -H "Authorization: Bearer $PD_ACCESS_TOKEN" \
  -F "file=@logo.png"
```

### Returns

```json
{
  "data": {
    "url": "https://example-bucket.s3.amazonaws.com/theme-assets/user/cmabc123bot/logo.png",
    "size": 12345,
    "type": "image/png"
  }
}
```

Use the returned `url` in a later `PATCH /v1/agents/{agentId}/theme` request.

```json
{
  "welcome": {
    "title": "Welcome",
    "subtitle": "How can we help?",
    "iconUrl": "https://example-bucket.s3.amazonaws.com/theme-assets/user/cmabc123bot/logo.png"
  }
}
```
