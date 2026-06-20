# AGENTS.md

Guidance for AI agents (and humans) working in this repository. Read this
first, then `OUTLINE.md`. This file is compacted from the planning sessions
that produced the outline; keep it current as the project evolves.

## What this repo is

Materials for **Geoffrey Lentner's 30-minute Summer REU Seminar talk** (2026):
*Workflow Engineering, Data Management, and Advanced Automation*. Audience:
primarily REU undergraduates, plus research-computing professionals. Venue:
Envision Center, Purdue University. It is a refinement of last year's REU
seminar, which cataloged a "zoo" of tools without a thesis; this year gives
the zoo a conceptual spine.

The eventual deliverable is a **Slidev** deck, but **no slides exist yet**.
The project is currently at the *content-design* stage.

## Current state (keep this accurate)

Present in the repo:
- `GOAL.md` — the original brief and idea dump (source material; do not treat
  as the spec — `OUTLINE.md` supersedes it).
- `OUTLINE.md` — **the content source of truth.** Complete slide-by-slide
  outline: 19 slides, 30-minute budget, talking points, visuals, transitions,
  delivery aids, open TODOs.
- `AGENTS.md` — this file.

Not yet created (planned — do not assume they exist):
- `THEME.md` — chrome source of truth, to be ported from
  `../2026-nairr-workshop-talk/THEME.md` and adapted.
- `ROADMAP.md` — phased Slidev implementation plan (YAML frontmatter:
  `current_phase`, `phases_completed`, asset checklist). Author only **after**
  `OUTLINE.md` is approved.
- Slidev scaffolding: `slides.md`, `styles/`, `uno.config.ts`,
  `vite.config.ts`, `package.json`, `public/`.
- `.agents/skills/` workflow skills (`/continue`, optionally `/release`),
  mirroring the NAIRR project.

There is **no git remote** yet, and `main` has no commits beyond the initial
state. All current work lives on `wip`.

## The three-document split (load-bearing)

Inherited from `../2026-nairr-workshop-talk/`. Treat as architecture, not
bookkeeping:
- **`OUTLINE.md`** — *content*: what each slide says, talking points,
  transitions, timing.
- **`THEME.md`** — *chrome*: palette, typography, layouts, RCAC marks (planned).
- **`ROADMAP.md`** — *execution*: phased build plan with progress frontmatter
  (planned).

If `ROADMAP.md` ever disagrees with `OUTLINE.md` or `THEME.md`, the
authoritative document wins — surface the discrepancy rather than silently
following the roadmap. Do not edit `OUTLINE.md`/`THEME.md` content unless
implementation surfaces a real correction; confirm with Geoffrey before
changing content decisions.

## The talk's thesis and structure (the decisions, compacted)

These are settled decisions from the design sessions. Preserve them unless
Geoffrey changes them.

**Thesis:** *Start simple; add complexity only where it earns its keep.*
Anti-Rube-Goldberg, anti-"merchants of complexity" — but framed as **mature
judgment from an enthusiast**, never as anti-tool grumbling.

**The load-bearing mental model — two axes, not one ladder:**
- **Executor / scale axis** (*how to run many tasks*): bash loop → Slurm job
  array → HyperShell. HyperShell is the extreme executor end (pure parallel
  execution, no DAG).
- **Orchestration / DSL axis** (*how to relate tasks*): GNU Make → Nextflow.
  "Make is all you need" until it isn't; Nextflow's complexity is justified by
  containers, dataflow DAG, `-resume`, executor portability, nf-core.
The payoff artifact is a **two-axis decision ladder** + a verbal "does this
layer earn its keep?" checklist (Slide 16). This is the thing undergrads carry
home and what distinguishes the talk from a tool catalog.

**Narrative arc (20 slides):** title → cold-open "Perfection" over-engineered
stack gag → thesis card → **the Zoo (literal logo-wall backdrop, ~45s)** →
on-ramp (capability *monolith* vs. capacity *layered stack*) → why the layers
exist (concern → layer) → anatomy of an over-engineered workflow (centerpiece
"shock" diagram) → decompose the named layers (with academic↔industry tool
pairs) → "merchants of complexity" → two-axis reveal → climb Axis 1
(bash/Slurm/HyperShell) → climb Axis 2 (Make/Nextflow) → decision ladder +
checklist → data management (tiers + `rsync`) → one agentic beat → closing
inversion ("real perfection is simplicity") → resources. (`OUTLINE.md` is the
live source for exact slide numbers.)

## Content principles (non-obvious; easy to violate)

These emerged from explicit tone/framing corrections. Internalize them:

- **Enthusiast, not grumpy old man.** The single biggest tone risk is the
  thesis + merchants beat + cron-job lament stacking into "old man yells at
  cloud." Counterweight everywhere: love of the craft, a stack that *purrs*,
  "from Jupyter to scale-out automation on supercomputers," and earned
  authority (building/debugging workflows since before Kubernetes or Azure).
  See `OUTLINE.md` Slides 1, 3, 9, 13, 19 and the tone-drift risk-register
  entry.
- **Not anti-tool — anti-*reflexive*-tool.** New tools are good; Geoffrey built
  HyperShell. HyperShell is the worked example of complexity that *earned its
  keep* (a better GNU Parallel for HPC). The "merchants" are the *pitch* that
  you need all of it now, not the engineers who build good things.
- **Complexity-taming platforms often just relocate complexity** into a new
  black box with new problems (ops, metadata DB, deploy, version skew). Anchor
  line: *"This could have been a Makefile and a cron-job!"* Observability is
  the worked example: `>> run.$(date).log 2>&1` + `cron` non-zero-exit email vs.
  a Datadog/cloud-cron bill big enough to sink a $200M budget.
- **Academic ↔ industry parallel.** Same handful of universal layers, only the
  brand names change: Slurm | Kubernetes · Make/Nextflow | Airflow · Apptainer
  | Docker · logs+cron | Datadog. Note the nuance: industry (always-on, SLAs,
  multi-tenant) genuinely justifies heavier platforms; academic workflows
  (bursty, batch, finite) usually don't. Don't cargo-cult across the boundary.
- **Real artifacts on-slide.** Per Geoffrey's decision, *all* code snippets are
  on-slide (not just speaker notes): bash loop, Slurm array, the real
  HyperShell one-liner, a Makefile, a minimal Nextflow process, and `rsync`
  staging. Keep snippets accurate and runnable.
- **Two distinct code aesthetics, never blurred** (from `GOAL.md`): a
  *terminal-window* treatment for **commands you run**, and a *code/definition*
  treatment for **workflow definitions** (Make/Nextflow).
- **Agentic AI is one beat, not a theme.** Agents are an emerging operator of
  these same tools; the rule is unchanged (simplest thing that works, verify).
  Do not let it expand.

## Visual identity (planned, inherited from NAIRR)

To be formalized in `THEME.md`. Defaults agreed so far:
- Port the **Purdue 2026** Slidev chrome from `../2026-nairr-workshop-talk/`
  (cover, section divider, content, card grid, closing card), with **RCAC**
  marks substituted for generic Purdue marks. Light mode.
- **No terminal-aesthetic carryover** from the older sibling decks
  (`../2026-globus-world/`, `../2026-midwestrcd-talk/`) for the *chrome*. (The
  in-slide terminal-window treatment for command snippets is a deliberate,
  separate content device — not the deck chrome.)
- **New custom layouts unique to this deck:** the **Zoo logo-wall** (Slide 4),
  the **Rube Goldberg stack** (Slides 7–8), the **two-axis decision ladder**
  (Slides 10, 16), and the **storage-tier diagram** (Slide 17).
- **Cold-open image:** use the best X-Men "Perfection" meme image; this is a
  private, non-published talk, so real logos and the meme are fine to use
  directly (no rights work). A custom Purdue-style absurd-stack illustration
  for the cold open (Slide 2) and its inversion (Slide 19) is optional and
  purely an aesthetic choice.
- **Zoo logo-wall (Slide 4):** use the real, best brand logos, grouped by
  layer with size ≈ popularity.
- When porting Slidev specifics, mind the NAIRR hazards: MDC mode is on (no
  blank lines inside inline `<svg>`), `provider: none` for fonts (no licensed
  fonts committed; Source Sans 3 OFL fallback), and pick a **dev port distinct
  from siblings** (3032/3033/3034 are taken — propose **3035**).

## Branch posture and commits (Geoffrey's rules)

- **Work on `wip`.** Commit often with **`WIP: `**-prefixed messages and
  descriptive bodies. `wip` is the only branch where force-push is allowed.
- Never commit to `main` directly from feature work; never force-push `main`.
- The intent: collapse `WIP:` commits into clean logical commits later, then
  fast-forward into `main` and open a PR. (A `/release` skill will automate
  this, mirroring the NAIRR project; not yet present.)
- **Co-author trailer on every commit:** a trailing
  `Co-Authored-By: Oz <oz-agent@warp.dev>` line.
- The user has aliased `rm` away — prefer `del` for any file removals.

## Workflow / next steps

1. Iterate on `OUTLINE.md` with Geoffrey until approved (in progress).
2. Port `THEME.md` from the NAIRR deck, adapted (note the four new layouts).
3. Author `ROADMAP.md` (phased Slidev build, YAML frontmatter) — only after
   `OUTLINE.md` is approved.
4. Create the `/continue` (and optionally `/release`) skill under
   `.agents/skills/`, mirroring the NAIRR project.
5. Implement slides phase-by-phase via `/continue`.

## Reference materials

- `../2026-nairr-workshop-talk/` — the established convention to emulate:
  `AGENTS.md` (architecture rule), `OUTLINE.md` (outline structure),
  `THEME.md`, `ROADMAP.md`, `.agents/skills/`, and the Slidev scaffolding.
- `~/Documents/Purdue/Presentations/REU Seminar - Data Management and Workflow
  Templates.pdf` — last year's talk (the flat tool list this year improves on).
- HyperShell: `../../hypershell/hypershell/` · `hypershell.readthedocs.io`.

## Open TODOs

The live list lives in `OUTLINE.md` §8. Highlights: pick the best "Perfection"
meme image and lock the Zoo logo set/layout; finalize the through-line example
(`analyze.sh` vs. a domain example); confirm exact RCAC storage-tier names
(Fortress / Data Depot / Scratch); finalize Slide 20 resources and QR-code
links; settle Slidev version pin and dev port in `ROADMAP.md`.
