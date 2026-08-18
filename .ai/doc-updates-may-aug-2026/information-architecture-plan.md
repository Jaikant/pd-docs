# High-Level Information Architecture Plan For May-August 2026 Updates

## Current IA Findings

The current `pd-docs` structure is organized around these top-level groups:

- Introduction
- Platforms
- Getting Started
- Channels
- Providers
- Tools
- Features
- API Reference (Beta)
- FAQs

This structure worked for a product centered on channels, AI resources, provider-specific function calling, and provider-specific file search. The May-August 2026 code changes shifted the product toward a richer agent configuration model where users configure API actions, file search, app connections, tool rules, and session tool traces. The current IA does not yet expose that model clearly.

The backend can process multiple skills, but the current UI supports configuring a single skill. For public documentation, the primary user-facing concept should therefore be **Agent Configuration**, not Skills. Backend terms such as `skills` should appear only where needed in API reference pages.

The most important gaps are:

- Getting Started is too shallow for the current product. It still explains "Create Chatbot Agent" as a short AI-resource setup flow, not the current configuration workflow.
- Tools is conceptually useful, but it is still framed as generic function calling/file search instead of the current Agent Configuration model.
- Function Calling should become **API Actions**. The old name is implementation-oriented and should be retired from the primary IA.
- Providers contains important setup steps, but provider pages currently carry too much feature education. This makes users learn capabilities by provider instead of by job-to-be-done.
- The OpenAI Assistant provider section should be removed from the target IA.
- Features mixes operational dashboard pages like Sessions, Reports, and API Keys. It does not yet explain session tool traces, classification traces, or how to debug agent configuration.
- API Reference (Beta) is a strong foundation for the external API, but it is missing the newer skills-backed configuration endpoints, capabilities, app connection, integration/OAuth, and vector-store upload APIs.
- Some existing docs now conflict with current defaults. File search currently documents older chunk defaults in multiple places, while code now uses chunk size `250`, overlap `20`, max results `3`, and threshold `0.2`.

## Proposed IA Direction

Reshape the docs around the lifecycle of an agent:

1. Learn what Predictable Dialogs does.
2. Create and configure an agent.
3. Configure what the agent can know, do, and decide.
4. Monitor sessions, tool traces, feedback, and reports.
5. Customize theme and branding.
6. Publish through a channel.
7. Automate/manage the same resources through APIs.

This is more intuitive because it follows the user's mental model: "I want a chatbot that can answer, act, book, and be embedded," not "I need to understand provider-specific implementation details first."

## Recommended Top-Level Navigation

Use this top-level order:

- **Introduction**
- **Platforms**
- **Getting Started**
- **Agent Configuration**
- **Monitor & Improve**
- **Theme & Branding**
- **Channels**
- **Providers**
- **API Reference**
- **FAQs**

Keep the current Docusaurus foundation, but adjust the emphasis within that order:

- **Getting Started**
  - Preserve as the fastest first-run path.
  - Expand from two pages into a short activation path: create an agent, add instructions/AI, configure the first useful capability, choose a channel, test a session.

- **Agent Configuration**
  - Replace the current top-level Tools section with Agent Configuration.
  - Explain this section as the place to configure what the agent can know, do, and decide.
  - Cover instructions/AI basics, file search, API actions, app connections, Google Calendar, tool rules, API keys, autosave/save behavior, and testing before publish.
  - Do not expose Skills as the primary public concept while the UI supports one configurable skill.

- **Monitor & Improve**
  - Rename or reshape the current Features area.
  - Include Sessions, tool traces, file search chunks, classification traces, Feedback, Reports, and API Keys if kept as a dashboard-management topic.
  - Make session debugging a clear follow-up after configuring the agent.

- **Theme & Branding**
  - Promote Web Theme from deep under Channels because theme is a major agent setup workflow.
  - Keep channel-specific theme details under Web as links or short pages that point to the new Theme & Branding section.
  - Update font/theme docs for current Google Fonts behavior and remove stale theme fields.

- **Channels**
  - Keep Web and WhatsApp here.
  - Channels should answer "where does my agent run?" and should link back to Agent Configuration only where channel behavior changes.
  - Refresh WhatsApp setup/troubleshooting if the June reliability changes surfaced user-facing behavior.

- **Providers**
  - Keep Providers focused on AI resource setup, credentials, model/provider differences, and caveats.
  - Remove the OpenAI Assistant provider section from the target IA.
  - Do not use provider pages as the main home for tools, file search, API actions, or app connections.

- **API Reference**
  - Keep as a reference section, but split into clearer groups:
    - Basics: authentication, making requests, errors/rate limits.
    - Agent management: agents, AI resources, theme, sessions.
    - Configuration APIs: skills-backed endpoints, skill tools, capabilities, item reorder, vector store upload.
    - App connections: API connections, integration connections, Google Calendar OAuth and revoke.
  - Add `apiRequestKey` and upload retry/idempotency behavior where vector store uploads are documented.
  - Explain backend terms like `skills` in plain language when endpoint paths require them.

## Agent Configuration Structure

Agent Configuration should absorb the current Tools section and become the main home for configuration concepts:

- **Overview**: What the agent can know, do, and decide.
- **Instructions and AI Resources**: How instructions and AI resource selection affect behavior; link to Providers for credentials/provider setup.
- **File Search / Knowledge**: Uploading files, vector store behavior, current defaults, relevance threshold, max results, and troubleshooting.
- **API Actions**: Replaces current Function Calling. Explain API endpoints, GET/POST behavior, inputs/schema, authentication, responses, and testing.
- **App Connections**: OAuth-backed app capabilities and connection management.
- **Google Calendar**: Lives inside App Connections. Cover OAuth/reconnect, allowed actions, booking policy, availability, appointment duration, notice, booking horizon, timezone, and revocation.
- **Tool Rules**: Conditional classifier, labels/use-when, run-after dependencies, cooldown, and how to inspect rule behavior in sessions.
- **API Keys**: Keep or link key-management docs here when they are used for AI resources, file search, and API actions.

Avoid a public "Skills" section. If the term appears in screenshots or API endpoints, explain it as an implementation container behind Agent Configuration.

Avoid documenting runtime as a user-facing concept. Session/tool trace docs can say "what happened during a conversation" without naming runtime internals.

## Monitor & Improve Structure

Monitor & Improve should replace the current Features mental model for post-setup workflows:

- **Sessions overview**: conversation history, session deletion, active-session behavior, and user information capture.
- **Tool usage in sessions**: API action calls, app connection calls, arguments, outputs, status, duration, and copied details.
- **File search traces**: chunks, filenames, relevance scores, threshold, and result sent to the model.
- **Tool-rule traces**: visible classification/rule traces where exposed by the UI.
- **Feedback**: message feedback and corrective answers.
- **Reports**: daily email reports, time, timezone, recipients, update/disable behavior.

Cross-link back to Agent Configuration when a session trace suggests changing file search settings, API actions, app connections, or tool rules.

## Content Migration Strategy

- Treat existing Tools pages as reusable concept material, not final IA.
- Merge current Function Calling content into API Actions.
- Move provider-neutral explanations out of Providers into Agent Configuration.
- Keep Providers focused on credentials, model/resource setup, provider limitations, and provider-specific caveats.
- Move dashboard workflow docs out of isolated feature pages when they are part of a larger journey. For example, file search settings belong in Agent Configuration, while session trace review belongs in Monitor & Improve.
- Use one canonical page for current file search defaults and link to it from provider/API pages to avoid default drift.
- Move Google Calendar under App Connections, not a top-level Integrations section.
- Remove OpenAI Assistant provider pages from the target sidebar. Preserve old URLs through redirects, stub pages, or retained pages if needed for SEO/backward compatibility.
- Add cross-links at workflow boundaries: Agent Configuration pages link to Monitor & Improve for debugging; Sessions links back to Tool Rules, File Search, API Actions, and App Connections.

## Rollout Plan

1. Create the new IA skeleton in `sidebars.js` using the agreed top-level order.
2. Add landing/overview pages for Agent Configuration, Monitor & Improve, and Theme & Branding.
3. Move or rewrite current Tools content under Agent Configuration, with Function Calling becoming API Actions.
4. Place Google Calendar under Agent Configuration > App Connections.
5. Remove OpenAI Assistant from Providers in the target sidebar while preserving old URLs where practical.
6. Update Getting Started to reflect the new configuration flow and link into Agent Configuration, Monitor & Improve, Theme & Branding, and Channels.
7. Expand API Reference for skills-backed configuration endpoints, capabilities, app connections, Google Calendar OAuth/revoke, and vector-store upload/idempotency.
8. Refresh screenshots only after the IA and page boundaries are stable.
9. Run a Docusaurus build and broken-link check after each IA phase.

## Assumptions

- The docs should remain user-facing and product-oriented; internal deployment/runbook changes should stay out unless there is a dedicated operator section.
- Existing published URLs should be preserved with redirects or retained pages where possible.
- The next planning pass should choose exact page locations and page-level outlines before content writing starts.
- The UI supports one configurable skill today, so docs should not teach multi-skill workflows.
- Backend multi-skill support and runtime internals should not shape public IA until the UI exposes them.
