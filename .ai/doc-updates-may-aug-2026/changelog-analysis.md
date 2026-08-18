# Documentation Changelog Analysis: May 1-August 14, 2026

## Summary

This file analyzes `api-automation` and `api-automation-webapp` commits from May 1, 2026 through August 14, 2026 as source material for future `pd-docs` updates. It does not choose final doc locations or make published documentation changes.

The main documentation themes are External API coverage, the new Skills builder/runtime, file search and vector stores, Google Calendar OAuth, tool rules, session tool traces, WhatsApp/runtime reliability notes, and UI workflow changes.

## Backend: `api-automation`

| Commit | Files changed | Documentation update needed |
| --- | --- | --- |
| `3f0bd09` 2026-05-03 external APIs | `src/external/*`, `chat-sessions.db` | Add external API coverage for agents, sessions, conversations, delete session, and flag conversation. |
| `63f5475` 2026-05-07 API refactor | `agent`, `ai`, `external`, `assistant-create`, DB helpers | Document external AI resource creation/listing and agent AI attachment flows. |
| `844df38` 2026-05-11 API for adding AI and agents | `agent`, `apikey`, `external/agent-ai*`, assistant DB | Update API docs for creating agents/AI resources and API key handling. |
| `418ad61` 2026-05-12 API changes | `agent.controller`, `assistants.controller`, `external/*` | Capture changed request/response behavior for external agent and AI endpoints. |
| `09e096d`, `069cb9a` 2026-05-13 docs commits | `src/external/README.md`, API structure plans | Use as source material only; reconcile with current code before publishing. |
| `e5e50be` 2026-05-17 external theme API | `external/agent-theme*`, `start-mode`, theme service | Add external theme API: get/patch theme, upload theme asset, supported theme payloads. |
| `50168a2`, `eb4ac8d` 2026-05-17 bug fixes | `external`, `subscription.guard`, `start-mode` | Note auth/subscription/start-mode behavior corrections if user-visible. |
| `086393b` 2026-05-23 API tests | `external/tests`, `env.example`, external README/plans | Mine e2e tests for valid examples and error scenarios. |
| `98b1b11` 2026-05-26 root theme cleanup | `agent-theme.service`, `bot.db`, tests | Update theme docs: `customIconUrl` removed from root theme shape. |
| `b6b5714` 2026-06-17 ops/memory/WhatsApp | deployment, memory monitor, debug module, WhatsApp | Add ops notes only if `pd-docs` has admin/deployment docs; otherwise no user docs. |
| `68edd18`, `c32e463`, `5881c82` 2026-06-18/19 WhatsApp fixes | `whatsapp.*`, session/cache/chat files | Review WhatsApp setup/troubleshooting docs for webhook reliability, token/phone ID behavior, and logs. |
| `f8ffed5` 2026-06-24 upload failures | vector-store OpenAI strategy, concurrency util | Document file upload failure behavior: stop launching remaining uploads after failure; improved error reporting. |
| `b9d5aa5` 2026-06-25 dependency cleanup | `package.json`, lockfile | No product docs. |
| `619ec4b` 2026-07-28 skills | 406 files across Prisma, `chat-engine`, `tools`, `integrations`, `vector-store`, access/module refactors | Major docs required: Skills concept, skill items, API actions, file search, app connections, tool policy, runtime/tool traces, Google Calendar integration, OAuth, capabilities, vector store settings. |
| `6f4ee7d` 2026-07-28 seed Google Calendar | capabilities, skill seeder, skills module | Document seeded Google Calendar capability and expected actions/policies. |
| `6b0a7d2` 2026-07-28 deployment build | deployment docs/scripts | Ops-only docs if deployment docs are maintained externally. |
| `2387342` 2026-08-03 env management | env manifest, startup validation, encryption canary | Add deployment/admin docs for generated env manifest, required env validation, encryption secret canary. |
| `cd365b3` 2026-08-04 prompt composition | agentic turn prompt composer, `ai.chat` | Update runtime behavior docs if explaining how active skills/tools are presented to the model. |
| `77856e2`, `d481af2` 2026-08-05 vector store delete | skill repository/service, vector store DB/service | Document deletion semantics: deleting agents/skills can delete associated vector stores/files. |
| `4c5f019` 2026-08-06 idempotent uploads | `api-request-cache`, skill vector upload controller | Document `apiRequestKey` requirement for skill vector store `create_store` uploads and retry/idempotency behavior. |
| `d1735a3`, `d16ec5d` 2026-08-08 conditional tool changes | tool policy, classifier types, runtime skills | Update tool rules docs: conditional classifier vocabulary no longer uses "question"; conditional tool behavior changed. |
| `c7e10ea` 2026-08-09 classification traces | runtime audit, LLM classification service/types | Document session/debug trace fields for classification: instructions/context/use-when where exposed. |
| `0fdb277` 2026-08-12 tool policy refactor | policy builder/resolver, repositories, runtime | Update Skills API/tool rules docs for UI-authored tool policy, classifier builder, conditional/run-after/cooldown behavior. |
| `61d73ef` 2026-08-13 API debug logging | request logger middleware, `main.ts` | No user docs unless adding support/troubleshooting logging notes. |
| Version/AGENTS-only commits | `version.txt`, `AGENTS.md` | No product documentation updates. |

## Frontend: `api-automation-webapp`

| Commit | Files changed | Documentation update needed |
| --- | --- | --- |
| `f0b3131` 2026-05-12 sessions split screen | `ChatSessionDisplay.js` | Update screenshots only if sessions UI docs show old layout. |
| `ecb11aa` 2026-05-26 agent title layout | `AgentTitleCard.js` | Screenshot-only update if needed. |
| `ee3b8a4` 2026-05-26 tweet fix | landing tweet/package/sitemap | No `pd-docs` product update. |
| `4960d00`, `278ab8a` 2026-06-18 privacy | `pages/privacy.js` | Not `pd-docs` unless privacy/legal pages are mirrored. |
| `62169b0`, `a253fb0`, `50c0b8b`, `441191d` 2026-06-20/23 planning/design | `plans/*`, `DESIGN.md`, `PRODUCT.md` | Use as background only; not implementation evidence by itself. |
| `745c28d` 2026-06-30 tool usage in sessions | `ComplexChatCard.js` | Document session tool usage display and what users can inspect. |
| `90edb7c` 2026-07-28 skills UI | 103 files across chatbot builder, services, file upload, sessions, integrations, layouts | Major docs required: new Chatbot Agent builder, Skills page/workflow, add/manage skill item, API action, file search item, Google Calendar app connection, OAuth result page, tool cards in sessions. |
| `e82c20a` 2026-07-29 calendar/email reports | Google Calendar policy, email report modal/form, timezone/time picker | Document Google Calendar booking policy fields and email report scheduling/timezone behavior. |
| `3b1e4c9` 2026-08-03 useDefaults comments | `agentTypes.js` | No direct docs unless explaining default agent templates. |
| `867a4c0`, `8294fa5`, `d251137`, `4a9e2d6` 2026-08-04/05 autosave/UI fixes | builder, assistant config, upload form, feedback alert, autosave hook | Update docs to reflect autosave/save-button behavior and current upload/settings UX. |
| `a47851b` 2026-08-05 fonts | theme files, `FontService.js`, live customizer | Document theme font selection behavior and Google Fonts dependency if exposed to users. |
| `a5a95e3`, `85a10ec`, `320c600` 2026-08-06/09 session tool cards | file search/generic tool cards, complex chat card | Update session docs for expanded tool previews, file search chunks, classification tool details, copied args/output. |
| `2176171` 2026-08-07 upload request key | file upload form, vector store service, API utilities | Pair with backend docs: vector store upload retries require/generated `apiRequestKey`. |
| `06614be` 2026-08-07 UI fixes | builder, file upload, Sentry, modal | Screenshot/UX wording refresh for builder/file upload flows. |
| `10dac0e`, `59d8cc3` 2026-08-07/08 app connection refactor | app connection hooks/fields | Document only one Google Calendar app capability selection and OAuth connection reuse/reconnect behavior. |
| `8f146f7`, `a5c1300` 2026-08-09/12 conditional tools | tool rules editors/helpers/defaults | Document classifier presets, labels, "Only for certain requests", "Use this after another item", cooldown, and conditional/run-after combination behavior. |
| `9d7de69` 2026-08-10 default chunk size | file search settings | Update defaults: chunk size `250`, overlap `20`, max results `3`, score threshold `0.2`. |
| `c314b9f` 2026-08-13 session active delete fix | session table/layout | Note only if docs mention post-delete session behavior. |
| `d1bf72e` 2026-08-13 logging | `utils/api.js` | No user docs unless support docs mention client-side API logging. |
| AGENTS/VSCode-only commits | `AGENTS.md`, `.vscode/settings.json` | No product documentation updates. |

## Documentation Work To Plan Next

- Build one user-facing changelog entry around the new Skills system rather than scattering every implementation commit.
- Add API reference material for external `/v1/agents`, `/v1/ai`, agent theme endpoints, skills endpoints, capabilities, API connections, Google Calendar OAuth, and skill vector store uploads.
- Add workflow docs for creating a chatbot agent, adding skill items, configuring API actions/file search/app connections, setting tool rules, and reading tool traces in sessions.
- Refresh screenshots after content decisions, especially builder, file search settings, Google Calendar policy, session tool cards, and theme/font controls.
- Keep ops-only changes separate from customer docs unless `pd-docs` intentionally documents deployment/admin operations.

## Assumptions

- "From May 2026 till today" means commits dated May 1, 2026 through August 14, 2026 inclusive.
- `version.txt`, `AGENTS.md`, `.vscode`, dependency-only, and planning-only commits should be recorded but usually do not require public documentation.
- This is an analysis plan only; no `pd-docs` published documentation pages are modified and no final doc locations are selected here.
