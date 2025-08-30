# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for Predictable Dialogs (predictabledialogs.com), a platform for embedding AI bots into websites. The documentation covers:

- Getting started guides for creating agents and connecting AI resources
- Channel integrations (Web widgets, WhatsApp)
- AI provider integrations (OpenAI Assistant)
- API reference documentation
- Features like sessions, reports

## Development Commands

```bash
# Start development server
npm start

# Build the documentation site
npm run build

# Serve built site locally
npm run serve

# Clear Docusaurus cache
npm run clear

# Deploy to production
npm run deploy
```

## Architecture & Structure

- **Docusaurus Configuration**: `docusaurus.config.js` contains site metadata, navigation, and deployment settings
- **Content Structure**: All documentation lives in `/docs` with structured categories
- **Sidebar Navigation**: Defined in `sidebars.js` with hierarchical organization
- **Base URL**: Site is served from `/docs` path (baseUrl: '/docs')
- **Deployment**: Deployed on vercel to predictabledialogs.com/docs

### Key Directories

- `/docs` - All markdown documentation content
- `/src/components` - React components for custom pages
- `/static/img` - Static assets including screenshots and images
- `/blog` - Blog posts (minimal usage)

### Content Categories

- **Getting Started**: Sequential guides for new users
- **Channels**: Platform-specific integration guides (Web, WhatsApp)  
- **Providers**: AI service integrations (OpenAI Assistant)
- **Features**: Platform capabilities (sessions, reports )
- **API Reference**: Beta management API documentation

## Documentation Patterns

- Use `.md` for standard markdown, `.mdx` for React components
- Images stored in `/static/img` with organized subdirectories
- Category files use `_category_.json` for metadata
- Cross-references use relative paths within docs structure
