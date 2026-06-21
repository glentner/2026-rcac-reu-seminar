# How Not to Build a Rube Goldberg Machine

> *Workflow Engineering, Data Management, and Advanced Automation*

Slidev source for Geoffrey Lentner's **Summer REU Seminar 2026** talk —
Envision Center, Purdue University, West Lafayette, IN. A ~30-minute
seminar (in a 45-minute slot) for REU undergraduates, with asides that
land for research-computing professionals.

It is a refinement of last year's REU seminar, which cataloged a *zoo* of
workflow tools without a thesis. This year gives the zoo a conceptual
spine: **start simple; add complexity only where it earns its keep.**

> **Project status — context & scaffolding (`v0.1.0`).** This repository
> currently holds the *design* of the talk — the outline, the visual-identity
> plan, the build roadmap, and the agent workflow that will assemble it. **The
> Slidev deck itself has not been built yet** (`slides.md`, `package.json`, and
> the theme land in Phase 1). The *Build / run / export* section below describes
> the intended workflow once scaffolding exists; the commands are aspirational
> until then. See `ROADMAP.md` for live phase status.

## The argument

Task-based, data-centric throughput computing — getting research from a
Jupyter notebook to scale-out automation on a supercomputer — has exploded
into a zoo of schedulers, executors, DAG engines, templating DSLs,
containers, databases, and observability platforms. This talk is an
*enthusiast's* case for judgment over accumulation: not anti-tool (the
speaker built [HyperShell](https://hypershell.org) because GNU Parallel
wasn't right for HPC), but anti-*reflexive*-tool.

The carry-home idea is a **two-axis decision ladder** — workflow tools live
on two distinct axes, and most workflows only ever need one:

* **Executor / scale** — *how to run many tasks:*
  bash loop → `xargs` → Slurm job array → HyperShell.
* **Orchestration / DSL** — *how to relate tasks:*
  GNU Make → Nextflow.

Every rung is anchored by a real, runnable artifact on the slide — as
*scenery, not curriculum.* The talk closes by inverting its own cold-open
gag: **real perfection is the simplest thing that works.**

## Build / run / export

> *Available once Phase 1 scaffolding lands (see `ROADMAP.md`).*

```sh
npm install
npm run dev           # dev server at http://localhost:3035
npm run dev:remote    # same, exposed for the Tailscale funnel
npm run build         # static build to dist/
npm run export:pdf    # reu-2026-talk.pdf via playwright-chromium
```

The dev server is pinned to **port 3035** so it does not collide with the
sibling 2026 decks (`../2026-globus-world/` on 3032,
`../2026-midwestrcd-talk/` on 3033, `../2026-nairr-workshop-talk/` on 3034).
All four can run concurrently.

## Documentation map

This deck is governed by **four source-of-truth documents, one job each.**
If they ever disagree, the authoritative document for that concern wins —
surface the discrepancy rather than silently following another file.

```text
GOAL.md ──► OUTLINE.md ──► slides.md          (content: what each slide says)
                │
                ├──────────► THEME.md          (chrome: how each slide looks)
                │
                ├──────────► REVIEW.md          (rationale: why it's shaped this way)
                │
                └──────────► ROADMAP.md         (execution: phased build + progress)
```

* **`OUTLINE.md`** — the authoritative talk outline: 22 narrative beats
  across 24 physical slides, with per-slide context, speaker beats, example
  lines, and timing. **Source of truth for slide content.**
* **`THEME.md`** — authoritative visual identity (Purdue 2026 + RCAC chrome,
  the six custom layouts, the two code aesthetics). **Source of truth for
  slide chrome.** *(Authored in Phase 0 — not yet present.)*
* **`REVIEW.md`** — the meta-journey: critiques, responses, and the
  decisions behind the shape of the talk. **Source of truth for the *why*.**
* **`ROADMAP.md`** — the phased Slidev implementation plan, with a
  machine-readable per-slide registry, open-decisions ledger, per-slide
  definitions-of-done, and verification gates. **Source of truth for
  implementation progress.**
* **`AGENTS.md`** — orientation for AI agents (and humans) working here.
  **Read this first, then `OUTLINE.md`.**
* **`GOAL.md`** — the original brief and idea dump. Source material;
  `OUTLINE.md` supersedes it.

## Visual identity

The deck inherits **Purdue's 2026 brand refresh** with **RCAC** marks
substituted wherever the template places generic Purdue marks (light mode).
It deliberately does **not** adopt the Berkeley-Mono terminal *chrome* of
the older sibling practitioner decks.

Two in-slide code aesthetics are kept distinct and never blurred: a
**terminal-window** treatment for *commands you run* (the executor-axis
snippets) and a **code/definition** treatment for *workflow definitions*
(Make, Nextflow). See `THEME.md` for the authoritative palette, typography,
mark-substitution rule, and the six custom layouts unique to this deck
(`about-rcac`, `triple-point-venn`, `zoo-logo-wall`, `rube-goldberg-stack`,
`two-axis-ladder`, `storage-tier`, `ownership-ladder`).

## Fonts

Preferred display + body face is **Franklin Gothic**, loaded from the
presenter's system if available, falling back to **Source Sans 3** (SIL
Open Font License). Monospace falls back to JetBrains Mono → system
monospace. No commercially licensed font is committed to this repository
(`fonts: provider: none`).

## Agent build workflow

This deck is built **agentically**, one sub-phase at a time, driven by two
slash skills under `.agents/skills/`:

* **`/continue`** — resume implementation by executing the next incomplete
  sub-phase from `ROADMAP.md`. It reads the roadmap's machine-readable
  `slides:` registry and `open_decisions` ledger, honors per-slide
  definitions-of-done and pacing guardrails, and (by default) makes a single
  `WIP:` commit then stops for review. See
  `.agents/skills/continue/SKILL.md`.
* **`/release`** — ship `wip` to `main`: strip (or squash) `WIP:` prefixes,
  fast-forward merge, optional version bump, tag, and GitHub release. See
  `.agents/skills/release/SKILL.md`.

## Branch posture

All in-progress work lands on **`wip`** with `WIP: ` commit prefixes. `wip`
is the only branch where force-push is allowed; `/release` collapses its
history into clean logical commits before fast-forwarding into `main`. Never
commit to `main` directly from feature work.

## License & repository visibility

This repository is **public**. The talk uses the real "Perfection" meme and
real third-party brand logos on a fair-use basis for an educational,
non-commercial seminar; every committed font/asset is otherwise authored for
this deck or open-licensed (OFL, MIT, Apache). The Purdue 2026 brand is used
under Purdue affiliation. See `THEME.md` for the asset-by-asset posture.

## Speaker

**Geoffrey Lentner** — Principal AI Scientist, Rosen Center for Advanced
Computing, Purdue University &nbsp;·&nbsp;
[`glentner@purdue.edu`](mailto:glentner@purdue.edu)
