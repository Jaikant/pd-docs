---
title: Custom Agent UI
description: TypeScript reference for custom UI renderers in the web widget.
---

# Custom Agent UI

The web widget accepts `uiRenderers?: Record<string, ToolRenderer>` in its initialization options. Register each renderer under the tool name copied from the dashboard, not the display label. The same option works with Standard, Bubble, and Popup widgets.

```ts
type ToolUIInteractionState = 'waiting' | 'ready' | 'submitting' | 'resolved';

type ToolRendererHandle = {
  cleanup?: () => void;
  getValues?: () => unknown;
  validate?: () => boolean | Promise<boolean>;
  onInteractionStateChange?: (state: ToolUIInteractionState) => void;
};

type ToolRenderer = (
  container: HTMLDivElement,
  uiData: unknown,
  context: {
    initialValues?: unknown;
    requestSubmit?: () => Promise<void>;
    requestCancel?: () => Promise<void>;
  }
) => void | (() => void) | ToolRendererHandle;
```

## Renderer Arguments

| Argument | Description |
| --- | --- |
| `container` | Widget-owned element into which the renderer mounts its UI. |
| `uiData` | Tool output for a completed output tool, or tool arguments (which may be empty) for pending input. The renderer does not receive the tool's lifecycle source. |
| `context.initialValues` | Previously submitted values, when available for restored input UI. |
| [`context.requestSubmit()`](#request-submit) | Requests submission of pending input. Available only for input UI. |
| [`context.requestCancel()`](#request-cancel) | Cancels pending input. Available only for input UI. |

## Return Value

Return nothing, a cleanup function, or a `ToolRendererHandle`. A returned function is equivalent to `{ cleanup: function }`.

| Handle member | Description |
| --- | --- |
| `cleanup` | Releases DOM, framework roots, and listeners when this rendering instance is removed or replaced. |
| [`getValues`](#get-values) | Supplies the visitor's answer for a pending input tool. Required for input submission. |
| [`validate`](#validate) | Optionally blocks submission by returning `false`, synchronously or asynchronously. |
| `onInteractionStateChange` | Notifies custom controls of `waiting`, `ready`, `submitting`, or `resolved`. Enable submission only in `ready`. |

## requestSubmit() {#request-submit}

`context.requestSubmit?: () => Promise<void>` is available only while using the "Request user input" tool. Call it from your form's submit handler or another explicit visitor action to submit the data to the LLM.

On submission, the widget awaits optional `validate()`. If it returns `false`, nothing is sent. Otherwise the widget reads `getValues()` and submits those values.

## requestCancel() {#request-cancel}

`context.requestCancel?: () => Promise<void>` is available only while using the "Request user input" tool. Call it from your Cancel control. It skips calling the `validate()` and `getValues()` and cancels the request for input. 

Both methods return `Promise<void>`.

## getValues() {#get-values}

Return `getValues: () => unknown` so the widget can read the visitor's answer. It is required for submission, called only after validation succeeds, and is not called on Cancel. Return the values in the shape your tool expects, such as `{ email: 'ada@example.com' }`.

## validate() {#validate}

Return `validate: () => boolean | Promise<boolean>` when the answer needs checking before submission. The widget calls it only for `requestSubmit()`; `false` prevents submission without reading `getValues()`. 

For examples and lifecycle guidance, see [Render Tool UI in the Conversation](/docs/channels/web/ui-renderers).
