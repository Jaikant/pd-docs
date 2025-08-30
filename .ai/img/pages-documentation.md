# API Automation WebApp - Pages Documentation

This document provides a comprehensive list of all pages in the API Automation WebApp with their descriptions and purposes.

## 1. Core Application Pages

### 1.1 Authentication Pages
- **1.1.1 `/sign-in`** - User authentication page with Google OAuth

### 1.2 Dashboard & Agent Management
- **1.2.1 `/agents`** - Main dashboard displaying user's created AI chatbot agents with option to create new ones
- **1.2.2 `/agents/create`** - Agent creation wizard allowing users to select from available chatbot templates
- **1.2.3 `/billing`** - Subscription management page with PayPal integration for paid plans and currency selection

### 1.3 Agent Configuration Pages
- **1.3.1 `/agent/chatbot/[botId]`** - Page to add AI resource to chatbot. Can be existing or new AI resource.
- **1.3.2 `/agent/install/[botId]`** - Installation instructions and embed code for deploying chatbot agents. Can select the Platform, Widget type on this page.
- **1.3.3 `/agent/live-theming/[botId]`** - Theme customization interface for chatbot agent appearance.

### 1.4 Agent Monitoring & Reporting Pages
- **1.4.1 `/agent/sessions/[botId]`** - Chat session management and daily reports for specific chatbot agents
- **1.4.2 `/agent/sessions/[botId]/[sessionId]`** - Detailed view of individual chat sessions.

### 1.5 AI Resources Management
- **1.5.1 `/ai-resources`** - Main page for creating, updating and managing AI resources.
- **1.5.2 `/ai-resources/[aiResourceId]`** - Detailed view and editing of specific AI resources. Creating, attaching, updating and deleting vector stores. Attaching function tool calls to AI resources.

### 1.6 API Key Management
- **1.6.1 `/keys`** - API key management for supported providers.

## 2. Marketing & Information Pages

### 2.1 Landing Page
- **2.1.1 `/`** - Landing page showcasing AI chatbot platform with product information and getting started section

### 2.2 Product & Integration Pages
- **2.2.1 `/openai`** - OpenAI-specific configuration and setup
- **2.2.2 `/website-ai-chat`** - Product page for website AI chat solutions

### 2.3 About Us Section
- **2.3.1 `/about-us`** - Company overview and mission statement
- **2.3.2 `/about-us/team`** - Team member profiles and company information

### 2.4 Documentation & Support
- **2.4.1 `/support`** - Customer support portal and help resources
- **2.4.2 `/contact`** - Contact form and company contact information

### 2.5 Legal & Business Pages
- **2.5.1 `/pricing`** - Pricing plans and subscription options
- **2.5.2 `/privacy`** - Privacy policy and data handling information
- **2.5.3 `/terms`** - Terms of service and user agreement