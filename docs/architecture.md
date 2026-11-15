# Architecture — v0.1

## Client

A dependency-free ES-module PWA with a single page shell and hash navigation. This was chosen intentionally for the very first prototype: quick deployment, almost no setup, full code visibility, and no paid infrastructure. A subsequent version can migrate the components to React/TypeScript without changing the lesson schema.

Pages: Overview / Learn / Library / Lab / Progress / Settings.

## Content

`src/content.js` is the single source for module roadmap, published lessons, knowledge checks and linked research resources. Each lesson is structured data, not raw HTML. Each published lesson has a 3-question scored quiz; answers and explanations are defined in source.

## Progress

`localStorage` persists a JSON record with answers, completion timestamps, optional reflections, difficulty, lab parameters, saved resources and reader scroll offset. Every important action saves immediately. Reports are deterministic summaries generated from saved answers and lesson definitions.

There is no autonomous AI tutor or hidden model-based grading in v0.1. The bridge to ChatGPT is the explicit **Copy report** action.

## Cloud sync (optional)

Supabase Auth issues email sign-in links; `public.user_states` contains one JSONB snapshot per user. Client reads/merges on authentication and reconnect and upserts current progress after edits. RLS restricts read/write to `auth.uid() = user_id`. This is good enough for a single-learner MVP, but is not a conflict-free real-time collaborative data model.

Required before declaring sync production-ready: separate Supabase project, deployed HTTPS site URL, tested redirects, email quotas/rate limits, database advisor/RLS checks, and two-device conflict tests.

## Labs

The initial neuron uses `p = sigmoid(w*x+b)` on labeled x=0..4 and binary cross entropy. Gradient for each example is `(p-y)*x` for w and `(p-y)` for b, averaged over all five examples. A batch gradient-descent step subtracts learning-rate × mean gradient. Browser-only computation, not simulated AI. No network calls.

## Limitations / future backlog

- React/TypeScript migration if complexity justifies it
- Add comprehensive lessons for modules 03–12
- Add automatic gradebook API / AI tutor only after permissions and costs are decided
- Add code-editing lab (Python sandbox), secure isolated execution and model training workloads
- Add optional lesson audio/text-to-speech; offline resources need careful rights and licensing checks
- Better multi-device synchronization and verified backups
- Accessibility audit, more tests and continuous deployment
