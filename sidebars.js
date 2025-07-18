/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'pd-platforms',
      label: 'Platforms',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        "type": "generated-index",
        "description": "Embed Powerful AI Agents into Your Website"
      },   
      items: [
        {
          type: 'doc',
          id: 'getting-started/prerequisites',
          label: 'Prerequisites' 
        },
        {
          type: 'doc',
          id: 'getting-started/concepts',
          label: 'Concepts' 
        },
        {
          type: 'doc',
          id: 'getting-started/creating-an-openai-assistant-chatbot',
          label: 'Creating an OpenAI Assistant Chatbot' 
        },

        {
          type: 'doc',
          id: 'getting-started/embedding-your-openai-assistant',
          label: 'Embedding Your OpenAI Assistant' 
        },
        {
          type: 'doc',
          id: 'getting-started/theme',
          label: 'Theme' 
        },
        {
          type: 'doc',
          id: 'getting-started/custom-css',
          label: 'Custom CSS',
        },
        {
          type: 'doc',
          id: 'getting-started/settings',
          label: 'Settings',
        },
        {
          type: 'doc',
          id: 'getting-started/add-whatsapp-to-predictable-dialogs',
          label: 'Add WhatsApp' 
        } 
      ],
    },
    {
      type: 'doc',
      id: 'quick-faq',
      label: 'FAQs',  
    },
    {
      type: 'category',
      label: 'Sessions & Reports',
      link: {
        type: 'generated-index',
        description:
          'Understand chat sessions and set up automated email reports.',
      },
      items: [
        {
          type: 'doc',
          id: 'sessions/overview',          // existing overview
          label: 'Sessions Overview',
        },
        {
          type: 'doc',
          id: 'sessions/chat-activity-reports',
          label: 'Chat Activity Reports',   // ← new page
        },
      ],
    }, 
     {
      type: 'doc',
      id: 'function-calling',
      label: 'Function Calling',  
    },
    {
      type: 'category',
      label: 'How-to Guides',
      link: {
        type: 'generated-index',
        description: 'Step‑by‑step recipes',
      },
      items: [
        {
          type: 'doc',
          id: 'how-to/how-to-enable-disable-streaming',
          label: 'Enabling & Disabling Streaming',
        },
        {
          type: 'doc',
          id: 'how-to/removing-openai-citations',
          label: 'Removing OpenAI Citations',
        }
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        description: 'Explore widget types, props you can customize, API endpoints, and setup guide WhatsApp Business.',
      },
      items: [
        {
          type: 'category',
          label: 'Widgets',
          link: {
            "type": "generated-index",
            "description": "Customize & style the different widgets"
          },   
          items: [
            {
              type: 'doc',
              id: 'widgets/standard',
              label: 'Standard' 
            },
            {
              type: 'doc',
              id: 'widgets/popup',
              label: 'Popup' 
            },
            {
              type: 'doc',
              id: 'widgets/bubble',
              label: 'Bubble' 
            },
            {
              type: 'doc',
              id: 'widgets/ai-button',
              label: 'AI Topic Button' 
            }
          ],
        },
        {
          type: 'category',
          label: "WhatsApp Business Setup",
          link: {
            "type": "generated-index",
            "description": "Setup your WhatsApp business account."
          },   
          items: [
            'whatsapp/create-a-business-account',
            {
              type: 'doc',
              id: 'whatsapp/create-a-meta-app',
              label: 'Create a Meta App' 
            },
            {
              type: 'doc',
              id: 'whatsapp/generate-whatsapp-token',
              label: 'Generate a WhatsApp Token' 
            },
            {
              type: 'doc',
              id: 'whatsapp/add-phone-number',
              label: 'Add Phone Number to WhatsApp' 
            }      ],
        },
        {
          type: 'category',
          label: "API Reference (Beta)",
          link: {
            "type": "generated-index",
            "description": "Management API for agents"
          },   
          items: [
            {
              type: 'doc',
              id: 'api-reference/introduction',
              label: 'Introduction' 
            },
            {
              type: 'doc',
              id: 'api-reference/authentication',
              label: 'Authentication' 
            },
            {
              type: 'doc',
              id: 'api-reference/making-requests',
              label: 'Making Requests' 
            },
            {
              type: 'doc',
              id: 'api-reference/endpoints',
              label: 'Endpoints' 
            }, 
          ],
        }
    
      ],
    }
  ],

};

export default sidebars;
