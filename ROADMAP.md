---
title: "REU Summer Seminar 2026 Talk — Slidev Implementation Roadmap"
status: pending
current_phase: "1"
phases_completed: ["0"]
last_updated: "2026-06-21T00:00:00Z"
talk_date: "2026-06-23"          # Tuesday · 11:00 ET · Summer REU Seminar Series · Envision Center, Purdue
talk_time: "11:00 ET"
repo_visibility: "private-for-now"   # private, non-published talk; real logos + meme fair to use directly (see AGENTS.md)
state_machine:
  pending: "No work started on this phase/sub-phase"
  in_progress: "Currently executing this phase/sub-phase"
  blocked: "Waiting on Geoffrey input or an external dependency (see open_decisions)"
  review: "Phase/sub-phase complete, awaiting Geoffrey's review"
  complete: "All phases finished"
context:
  speaker: "Geoffrey Lentner"
  role: "Principal AI Scientist"
  affiliation: "Rosen Center for Advanced Computing (RCAC), Purdue University"
  email: "glentner@purdue.edu"
  working_title: "Workflow Engineering, Data Management, and Advanced Automation — or, How Not to Build a Rube Goldberg Machine"
  venue: "Summer REU Seminar Series · Envision Center, Purdue University, West Lafayette, IN"
  audience: "Primarily REU undergraduates (19–21); RC professionals get the in-jokes"
  slot_minutes: 45
  duration_minutes: 30          # ~30-min target, 40-min ceiling, ~10–15 for Q&A
  target_minutes: 29
  ceiling_minutes: 40
  slide_count: 24               # physical slides; 22 narrative beats
  beats: 22
  reference_decks:
    - "../2026-nairr-workshop-talk/"   # PRIMARY convention to emulate: AGENTS.md/OUTLINE.md/THEME.md/ROADMAP.md, .agents/skills, Purdue 2026 chrome
    - "../2026-globus-world/"          # terminal-aesthetic chrome — do NOT inherit the chrome (in-slide terminal *device* is separate)
    - "../2026-midwestrcd-talk/"       # same caveat as globus-world
  slidev_theme: "seriph"        # overridden by styles/index.css into Purdue 2026 chrome (mirrors NAIRR)
  aspect_ratio: "16/9"
  color_scheme: "light"
  dev_port: 3035                # 3032 Globus World · 3033 Midwest RCD · 3034 NAIRR all taken — use 3035
  mdc_mode: true                # MDC on ⇒ no blank lines inside inline <svg> (NAIRR hazard)
  font_provider: "none"         # no licensed fonts committed; Source Sans 3 (OFL) fallback
  palette: "See THEME.md §3 (Purdue 2026 + RCAC, ported from NAIRR styles/index.css). To be promoted into styles/index.css in Phase 1."
  fonts: "See THEME.md §5 — Franklin Gothic preferred stack + Source Sans 3 OFL fallback (provider: none). To be wired into styles/index.css in Phase 1."
  source_assets: "See THEME.md §2/§4 (RCAC marks via SVG, Purdue template .pptx, prelude images from Geoffrey via open_decisions)"
  destination_assets: "PENDING — public/images/, public/fonts/, public/qr/ laid out in Phase 1"
  qr_targets:                   # Slide 23 — propose 5, cull to 4 if the row crowds (OUTLINE §4 Slide 23)
    hypershell: "https://hypershell.org"
    pearc26: "https://github.com/glentner/pearc26-hello-computer"
    rcac_mcp: "https://github.com/purduercac/rcac-mcp"
    globus_mcp: "https://github.com/purduercac/globus-mcp"
    nextflow_nfcore: "https://nf-co.re"
  key_files:
    - "GOAL.md — original brief / idea dump. Source material; OUTLINE.md supersedes it."
    - "OUTLINE.md — Authoritative talk outline (22 beats, 24 physical slides). SOURCE OF TRUTH for slide content."
    - "REVIEW.md — The meta-journey: critique, responses, decisions. SOURCE OF TRUTH for the *why*."
    - "THEME.md — Authoritative visual identity (Purdue 2026 + RCAC). SOURCE OF TRUTH for chrome. (Phase 0 — pending.)"
    - "ROADMAP.md — This file. Tracks the slidev *implementation* only."
    - "AGENTS.md — Repo guidance for agents/humans. Read first, then OUTLINE.md."
    - "slides.md — Slidev source (single-file convention; see Phase 8 / improvement #8 for the split escape hatch)."
    - "styles/index.css — Purdue 2026 palette + RCAC overrides + Franklin Gothic stack + the six custom layouts."
    - "uno.config.ts — UnoCSS shortcuts for Purdue / RCAC color utilities."
    - "package.json — Slidev project + scripts (dev, dev:remote, build, export:pdf)."
    - ".agents/skills/continue/SKILL.md — resume protocol (Phase 0 — pending, mirror NAIRR)."
    - ".agents/skills/release/SKILL.md — wip → main release workflow (Phase 0 — pending, mirror NAIRR)."
  recurring_lines:              # from OUTLINE §7 — each must fire where noted; verified at phase checkpoints
    - "\"The unicorn at the triple-point.\" — Slide 4 (systems · science · software)"
    - "\"Does it earn its keep?\" — Slide 5 (thesis) · Slide 19 (checklist) · reprised 16, 18, 20A"
    - "\"A pressure-release valve for the scheduler.\" — Slide 16 (slurmctld DDoS; Axis-1 system-level payoff)"
    - "\"Who's holding the wires?\" — Slide 17b reframe · reprised on Slide 16 climb + Slide 19 ladder gradient (FELT question, not a 2nd framework)"
    - "\"Each rung adds one capability.\" — Slides 13–16 (executor feature ratchet) · reprised Slide 19"
    - "\"Merchants of complexity.\" — Slide 11 · reprised light/funny in Slide 22 close"
    - "\"This could have been a Makefile and a cron-job!\" — Slide 11 (industry-platform lament)"
    - "\"Same handful of layers — only the brand names change.\" — Slide 10 (academic↔industry parallel)"
    - "\"Which axis are you on?\" — Slide 12 · reprised Slide 19"
    - "\"The simplest thing that works.\" — Slide 5 · walk-off on Slide 22"
    - "\"Make it purr.\" — Slide 4 setup · Slide 5 thesis framing · Slide 22 payoff (love-of-craft counterweight)"
    - "\"The map outlasts the tools.\" — Slide 12 reveal · reprised Slides 16, 18 (honest-scoping)"
  must_not_skip: ["2", "4", "12", "16", "19", "22"]   # OUTLINE §6 — never compress these
  breath_points: ["2", "6", "12", "19", "22"]          # OUTLINE §7 — deliberate silence; build leaves room
  acts:
    act_1: { slides: "1–9", feel: "fast/dense — the impress", peaks: ["6", "9"] }
    turn:  { slide: "10", feel: "chaos → order; the first exhale" }
    act_2: { slides: "11–23", feel: "slow/deliberate — the walk-back; ideas get air, snippets stay scenery" }
# ─── Improvement #2: machine-readable per-slide registry (single source of truth for progress) ───
# status ∈ {pending,in_progress,blocked,review,complete}; code_aesthetic ∈ {terminal,definition,none}
# act ∈ {1,turn,2}; layout names map to the `layouts:` build-order block below.
# NOTE: 25 records map to 24 PHYSICAL slides — `17b` is a slide-REVERSE of 17, not a new slide.
# `must_not_skip: true` here matches OUTLINE §6's canonical six (2,4,12,16,19,22). 17b/18 are
# "high-value, don't cut lightly" (OUTLINE §6) — captured via `high_value: true`, not must_not_skip.
slides:
  - { id: "1",   beat: "Title (lean cover)",                       phase: "2", act: "1",    layout: "purdue-cover",        code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "2",   beat: "Cold open — the \"Perfection\" stack",      phase: "2", act: "1",    layout: "purdue-fullbleed",    code_aesthetic: "none",        must_not_skip: true,  compressible: false, breath: true,  status: "pending", assets: ["perfection-meme"] }
  - { id: "3",   beat: "About RCAC — where I sit",                 phase: "2", act: "1",    layout: "about-rcac",          code_aesthetic: "none",        must_not_skip: false, compressible: true,  breath: false, status: "pending", assets: ["rcac-photo-cluster", "rcac-qr"] }
  - { id: "4",   beat: "About Me — triple-point Venn",             phase: "2", act: "1",    layout: "triple-point-venn",   code_aesthetic: "none",        must_not_skip: true,  compressible: false, breath: false, status: "pending", assets: ["headshot"] }
  - { id: "5",   beat: "Thesis — complexity must earn its keep",   phase: "2", act: "1",    layout: "purdue-overview",     code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "6",   beat: "The Zoo — literal logo-wall",              phase: "3", act: "1",    layout: "zoo-logo-wall",       code_aesthetic: "none",        must_not_skip: false, compressible: true,  breath: true,  status: "pending", assets: ["zoo-logo-set"] }
  - { id: "7",   beat: "On-ramp — capability vs. capacity",        phase: "3", act: "1",    layout: "purdue-content",      code_aesthetic: "none",        must_not_skip: false, compressible: true,  breath: false, status: "pending", assets: [] }
  - { id: "8",   beat: "Why the layers exist (concern → layer)",   phase: "3", act: "1",    layout: "purdue-content",      code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "9",   beat: "Anatomy of an over-engineered workflow",   phase: "3", act: "1",    layout: "rube-goldberg-stack", code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "10",  beat: "Decompose the layers + the turn",          phase: "3", act: "turn", layout: "rube-goldberg-stack", code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "11",  beat: "\"Merchants of complexity\"",               phase: "3", act: "2",    layout: "purdue-content",      code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "12",  beat: "Two axes, not one ladder",                 phase: "4", act: "2",    layout: "two-axis-ladder",     code_aesthetic: "none",        must_not_skip: true,  compressible: false, breath: true,  status: "pending", assets: [] }
  - { id: "13",  beat: "Axis 1 — the bash loop",                   phase: "4", act: "2",    layout: "purdue-content",      code_aesthetic: "terminal",    must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "14",  beat: "Axis 1 — xargs (first taming)",            phase: "4", act: "2",    layout: "purdue-content",      code_aesthetic: "terminal",    must_not_skip: false, compressible: true,  breath: false, status: "pending", assets: [] }
  - { id: "15",  beat: "Axis 1 — Slurm job array",                 phase: "4", act: "2",    layout: "purdue-content",      code_aesthetic: "terminal",    must_not_skip: false, compressible: true,  breath: false, status: "pending", assets: [] }
  - { id: "16",  beat: "Axis 1 — HyperShell + pressure-release",   phase: "4", act: "2",    layout: "purdue-content",      code_aesthetic: "terminal",    must_not_skip: true,  compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "17",  beat: "Axis 2 — \"Make is all you need\"",          phase: "5", act: "2",    layout: "purdue-content",      code_aesthetic: "definition",  must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "17b", beat: "Axis 2 — how far Make reaches (reverse)",  phase: "5", act: "2",    layout: "purdue-content",      code_aesthetic: "definition",  must_not_skip: false, high_value: true, compressible: false, breath: false, status: "pending", assets: [], note: "slide-REVERSE of 17 — NOT a new physical slide; reuse the Slide 17 Makefile verbatim" }
  - { id: "18",  beat: "Axis 2 — Nextflow as justified endpoint",  phase: "5", act: "2",    layout: "purdue-content",      code_aesthetic: "definition",  must_not_skip: false, high_value: true, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "19",  beat: "The decision ladder + checklist",          phase: "5", act: "2",    layout: "two-axis-ladder",     code_aesthetic: "none",        must_not_skip: true,  compressible: false, breath: true,  status: "pending", assets: [] }
  - { id: "20A", beat: "Data — locality & storage tiers",          phase: "6", act: "2",    layout: "storage-tier",        code_aesthetic: "none",        must_not_skip: false, compressible: true,  breath: false, status: "pending", assets: [] }
  - { id: "20B", beat: "Staging — rsync → managed flows",          phase: "6", act: "2",    layout: "ownership-ladder",    code_aesthetic: "terminal",    must_not_skip: false, compressible: false, breath: false, status: "pending", assets: [] }
  - { id: "21",  beat: "One agentic beat — agents as operators",   phase: "6", act: "2",    layout: "purdue-content",      code_aesthetic: "none",        must_not_skip: false, compressible: true,  breath: false, status: "pending", assets: [] }
  - { id: "22",  beat: "Closing — real perfection is simplicity",  phase: "6", act: "2",    layout: "purdue-content",      code_aesthetic: "none",        must_not_skip: true,  compressible: false, breath: true,  status: "pending", assets: [] }
  - { id: "23",  beat: "Resources & contact (QR row)",             phase: "6", act: "2",    layout: "closing-qr-row",      code_aesthetic: "none",        must_not_skip: false, compressible: false, breath: false, status: "pending", assets: ["qr-set"] }
# ─── Improvement #4: custom-layout build-order (a slide cannot be built before its layout exists) ───
layouts:
  # NAIRR-inherited base layouts (port via THEME.md / styles/index.css in Phase 1)
  - { name: "purdue-cover",        kind: "inherited", first_slide: "1",  status: "pending" }
  - { name: "purdue-content",      kind: "inherited", first_slide: "7",  status: "pending" }
  - { name: "purdue-overview",     kind: "inherited", first_slide: "5",  status: "pending" }
  - { name: "purdue-fullbleed",    kind: "inherited", first_slide: "2",  status: "pending" }
  - { name: "closing-qr-row",      kind: "inherited", first_slide: "23", status: "pending", note: "port the NAIRR closing-qr-row convention" }
  # Six NEW custom layouts unique to this deck (OUTLINE §5)
  - { name: "about-rcac",          kind: "custom",    first_slide: "3",  status: "pending", note: "photo cluster + squiggle-boxed pillars" }
  - { name: "triple-point-venn",   kind: "custom",    first_slide: "4",  status: "pending", note: "systems · science · software Venn; center = facilitator/unicorn" }
  - { name: "zoo-logo-wall",       kind: "custom",    first_slide: "6",  status: "pending", note: "dense logo wall, size ≈ popularity; optional cascade/pile-up build" }
  - { name: "rube-goldberg-stack", kind: "custom",    first_slide: "9",  status: "pending", note: "teetering over-engineered stack; Slide 10 = labeled re-render" }
  - { name: "two-axis-ladder",     kind: "custom",    first_slide: "12", status: "pending", note: "Slide 12 preview form; Slide 19 full ladder + you-own-it→framework-owns-it gradient" }
  - { name: "storage-tier",        kind: "custom",    first_slide: "20A", status: "pending", note: "6-property trade-off cloud + cold→warm→hot tier ladder" }
  - { name: "ownership-ladder",    kind: "custom",    first_slide: "20B", status: "pending", note: "two-rung you-own-it / framework-owns-it; reuses Slide 19 gradient" }
# ─── Improvement #5: open decisions / blocking-on-Geoffrey ledger (route around blocked slides) ───
open_decisions:
  - { id: "through-line",   summary: "Through-line example: fastq stays (decided, OUTLINE §REVIEW) — confirm analyze.sh naming for snippets 13–16, 20B", blocks: ["13", "14", "15", "16"], status: "soft-resolved" }
  - { id: "rcac-tiers",     summary: "Confirm exact RCAC storage tier names (Fortress / Data Depot / Scratch) + 6 trade-off axes labels", blocks: ["20A"], status: "open" }
  - { id: "prelude-rcac",   summary: "Supply About RCAC photo cluster (machine room / Fortress mural / rack) + rcac.purdue.edu QR; confirm squiggle-box pillars", blocks: ["3"], status: "open" }
  - { id: "prelude-me",     summary: "Supply headshot; redesign Venn labels onto systems·science·software triple-point", blocks: ["4"], status: "open" }
  - { id: "perfection-img", summary: "Pick best X-Men \"Perfection\" meme image for cold open; decide minimal inversion render on Slide 22", blocks: ["2", "22"], status: "open" }
  - { id: "zoo-set",        summary: "Lock Zoo logo set, grouping, size-by-popularity; decide cascade vs. single reveal", blocks: ["6"], status: "open" }
  - { id: "hypershell-box", summary: "Confirm 3–4 v2.8 feature-box items; sanity-check slurmctld DDoS framing + HTCondor 'heavyweight above' framing", blocks: ["16"], status: "open" }
  - { id: "qr-set",         summary: "Finalize Slide 23 QR set (5 proposed; cull to 4 if crowded) + canonical short URLs", blocks: ["23"], status: "open" }
---

# Implementation Roadmap

This document tracks the step-by-step implementation of the Slidev
presentation for the **Summer REU Seminar 2026** (Envision Center, Purdue
University; **Tuesday, June 23, 2026, 11:00 ET**):
*"Workflow Engineering, Data Management, and Advanced Automation — or, How
Not to Build a Rube Goldberg Machine."*

The talk is a **30-minute (45-min slot), 22-beat, 24-physical-slide**
presentation. It is a refinement of last year's REU seminar (a flat "zoo"
of tools); this year gives the zoo a **conceptual spine**. The governing
posture, settled in `OUTLINE.md` / `REVIEW.md`, is **impress, then walk it
back**: deliberately overwhelm the room with the landscape, then walk it
back to a meta-point — *it's all details; what matters is systems-level
thinking.* This is an **inspiration** talk, not an instruction talk. The
code snippets are **scenery, not curriculum** — nobody in the room needs to
read them.

The visual identity is **ported from `../2026-nairr-workshop-talk/`** (the
Purdue 2026 + RCAC chrome, light mode, Franklin Gothic / Source Sans 3),
adapted with **six new custom layouts** unique to this deck. See `THEME.md`
(Phase 0) for the authoritative chrome.

**Deliberate non-inheritance.** The Berkeley-Mono terminal *chrome* from
the older sibling decks (`../2026-globus-world/`, `../2026-midwestrcd-talk/`)
is **out of scope** for this deck's chrome. The in-slide **terminal-window
treatment** for command snippets (Slides 13–16, 20B) is a *separate,
deliberate content device* — not the deck chrome — and is kept distinct from
the **code/definition** treatment for workflow definitions (Slides 17, 18).
Do not blur the two.

**Source of truth — four files, one job each:**

* `OUTLINE.md` for slide *content* (what each slide says). Content wins.
* `THEME.md` for slide *chrome* (how each slide looks). Chrome wins.
* `REVIEW.md` for the *why* (decisions and their rationale).
* `ROADMAP.md` (this file) for *implementation* tracking only. If this
  roadmap disagrees with `OUTLINE.md` on content or `THEME.md` on chrome,
  the authoritative document wins — surface the discrepancy, don't silently
  follow the roadmap.

---

## How this ROADMAP improves on the NAIRR convention

This deck is bigger (24 vs. 20 slides), denser in custom layouts (six vs.
three), and carries explicit **pacing** and **scenery-vs-idea** rules the
NAIRR deck did not. Eight deltas over `../2026-nairr-workshop-talk/ROADMAP.md`
make the **agentic, context-limited `/continue` build** more reliable.
Improvements **1–7 are adopted**; **#8 is documented as an option** (not the
default).

1. **Per-slide definition of done (DoD).** Each slide below carries explicit
   acceptance criteria — required OUTLINE beats, recurring-line firings,
   custom layout, and a build/visual gate — so an agent has an unambiguous
   self-check before flipping a slide's `status` to `complete`. Actions tell
   you *what to do*; the DoD tells you *when you're done*.
2. **Machine-readable `slides:` registry (frontmatter).** Every physical
   slide (incl. `17b`, `20A`, `20B`) is a YAML record with `phase`, `act`,
   `layout`, `code_aesthetic`, `must_not_skip`, `compressible`, `breath`,
   `status`, `assets`. `/continue` resumes deterministically from this
   registry rather than re-deriving the slide↔phase map from prose.
3. **Pacing/act metadata as build guardrails.** `acts`, `breath_points`, and
   each slide's `act` + the scenery rule are *build constraints*, not just
   delivery notes: **Act-1 scenery slides get minimal on-slide text; Act-2
   must-land ideas get room.** An agent must not over-build a scenery slide.
4. **Custom-layout build-order (`layouts:`).** The six custom layouts are
   cross-cutting dependencies — a slide cannot be built before its layout
   exists. The `layouts:` block sequences layout work ahead of the slides
   that consume it (`first_slide`), preventing mid-slide rework.
5. **Open-decisions / blocking-on-Geoffrey ledger (`open_decisions`).** The
   OUTLINE §8 TODOs are promoted to a ledger with `blocks: [slide ids]`, so
   an agent knows which slides are buildable *now* and routes around blocked
   work instead of stalling.
6. **Codified per-phase verification.** Each Checkpoint lists the exact
   commands that must pass before a phase flips to `review` — turning
   checkpoints into executable gates, not vibes (see **Verification gates**).
7. **Resume contract for context loss.** Every `/continue` session updates
   `current_phase`, the affected `slides:` records' `status`, and
   `last_updated`, then commits `WIP:` naming the slide id — so a fresh agent
   reconstructs state from frontmatter + `git log` alone.
8. **(Option, not default) Parallel slide fan-out.** Slides within a phase
   are largely independent once their shared custom layout exists, so a phase
   *could* fan out to parallel child agents. **Decision (this session): stay
   monolithic; sequential `/continue` is the default.** Fan-out has a named
   prerequisite — a one-time **`slides.md` → `slides/NN-*.md` split** using
   Slidev `src:` includes (the master file becomes a spine of `src:` entries;
   each agent then owns its own file in a git worktree, eliminating merge
   conflicts). Shared custom layouts stay in `styles/index.css` regardless of
   the split. **Until that split is performed, do not fan out** — concurrent
   edits to the single `slides.md` collide. See **Appendix A**.

### Verification gates (improvement #6)

Run from the project root; all must pass before a phase → `review`:

```sh path=null start=null
npm run build              # Slidev build is green (no MDC <svg> blank-line regressions)
npm run export:pdf         # PDF renders; fonts embedded; RCAC marks + any code snippets sharp
# recurring-line / beat presence check for the slides touched this phase, e.g.:
grep -F "earn its keep" slides.md
grep -F "pressure-release valve" slides.md
```

A slide flips to `complete` only when its **DoD** is met *and* the build +
export are green. A phase flips to `review` only when every slide in it is
`complete` and its Checkpoint commands pass.

---

## Phase 0 — Prerequisites: `THEME.md` port + skills scaffold

**Goal:** Satisfy the `AGENTS.md` prerequisites so Phase 1 is unblocked.
`AGENTS.md` mandates `THEME.md` before the build and `/continue` + `/release`
skills before phased implementation.

* [x] **Port `THEME.md`** from `../2026-nairr-workshop-talk/THEME.md`,
      adapted: keep Purdue 2026 + RCAC marks and light mode; substitute RCAC
      for generic Purdue marks; carry over the Franklin Gothic preferred
      stack + Source Sans 3 (OFL) fallback with `provider: none`; **add a
      §for the six new custom layouts** (`about-rcac`, `triple-point-venn`,
      `zoo-logo-wall`, `rube-goldberg-stack`, `two-axis-ladder`,
      `storage-tier`, `ownership-ladder`) and the **two code aesthetics**
      (terminal vs. definition). Resolve `palette`/`fonts`/`source_assets`
      there, then update this file's `context.palette`/`fonts` pointers.
* [x] **Create `.agents/skills/continue/SKILL.md`** mirroring the NAIRR
      resume protocol, taught to read this file's `slides:` registry +
      `open_decisions` ledger and to honor the **resume contract** (#7).
      *(Already present — created in commit `bc5a624`.)*
* [x] **Create `.agents/skills/release/SKILL.md`** mirroring NAIRR: strip /
      squash `WIP:` prefixes, fast-forward `wip → main`, force-push `wip`,
      optional tag + GitHub release. *(Already present — commit `bc5a624`.)*
* [x] Commit: `WIP: Phase 0 — port THEME.md + scaffold /continue and /release skills`

**Checkpoint:** ✓ `THEME.md` exists and is internally consistent with this
roadmap's `layouts:` list; both skills exist. No build yet.

---

## Phase 1 — Scaffolding & Theme

**Goal:** Stand up the Slidev project with the Purdue 2026 + RCAC chrome and
get dev / build / PDF export green **before any real content lands**.

Closest structural reference: the NAIRR project. Borrow the *shape*
(single-file `slides.md`, `styles/index.css` token table, `uno.config.ts`),
not the content.

* [ ] `package.json` (project `reu-seminar-2026-talk`,
      `exportFilename: reu-2026-talk`; scripts `dev`, `dev:remote`, `build`,
      `export:pdf`; pin `@slidev/cli` to the NAIRR-proven family; add
      `@slidev/theme-seriph` + `playwright-chromium`)
* [ ] `.npmrc` (`shamefully-hoist=true`, `auto-install-peers=true`),
      `.gitignore` (node_modules, dist, `reu-2026-talk.pdf`, slides-export,
      `.DS_Store`, `.vite-inspect`, `components.d.ts`, `*.local`,
      `.remote-assets`)
* [ ] `vite.config.ts` — **dev port `3035`** (3032/3033/3034 are taken;
      keeps all decks runnable concurrently)
* [ ] `styles/index.css` — `@font-face` (Source Sans 3), Purdue 2026 palette
      as CSS custom properties (from `THEME.md`), base `.slidev-layout`
      padding, and the **inherited** base layouts (`purdue-cover`,
      `purdue-content`, `purdue-overview`, `purdue-fullbleed`,
      `closing-qr-row`). Custom-layout CSS is stubbed here and fleshed out in
      the phase that first needs it (see `layouts:` build-order).
* [ ] `uno.config.ts` — Purdue/RCAC color shortcuts
* [ ] `slides.md` headmatter (`theme: seriph`, `colorSchema: light`,
      `aspectRatio: 16/9`, gold primary, `fonts: provider: none`,
      `presenter: true`, `download: true`, `exportFilename: reu-2026-talk`,
      `info:` populated). Body is a one-slide placeholder until Phase 2.
* [ ] `README.md` (build/run/export; port 3035; Source Sans 3 license note;
      pointers to OUTLINE/THEME/REVIEW/ROADMAP and the two skills)
* [ ] **Smoke test:** minimal cover + content + overview slide **plus one
      custom-layout stub** (pick `triple-point-venn` or `two-axis-ladder`) to
      prove the custom-layout pipeline early. `npm run build` and
      `npm run export:pdf` both green; RCAC SVG marks sharp at 1×/2×.
* [ ] Commit: `WIP: Phase 1 — scaffolding + Purdue 2026/RCAC theme + smoke test`

**Checkpoint (integration risk for the new visual identity):** Geoffrey
eyeball-passes the smoke-test deck on the live dev server (port 3035) before
any real content lands. Verification gate: `build` + `export:pdf` green.

---

## Phase 2 — Prelude (Slides 1–5) · Act 1 opens

**Goal:** Title → cold open → About RCAC → About Me → Thesis. The
"jump-to-the-middle" open: hook first, credibility second, thesis third.
**Lands two custom layouts:** `about-rcac` (Slide 3), `triple-point-venn`
(Slide 4).

**Outline reference:** `OUTLINE.md` §4, Slides 1–5.

* [ ] **Slide 1 — Title** (`purdue-cover`). Lean. Name + one positive line;
      cut fast to the gag. **DoD:** ~30s of content only; reverse RCAC mark;
      no agenda.
* [ ] **Slide 2 — Cold open / "Perfection"** (`purdue-fullbleed`, no chrome).
      **must-not-skip · [BREATH].** **DoD:** meme image present (or
      placeholder if `open_decisions: perfection-img` still open); "...does
      the work of a `for` loop" punchline + unresolved-turn line in speaker
      notes; minimal on-slide text (pure showmanship).
* [ ] **Slide 3 — About RCAC** (`about-rcac` custom). **compressible.**
      **DoD:** photo cluster + squiggle-boxed systems/science/software
      pillars; built to be cut to one sentence. *Blocked on
      `open_decisions: prelude-rcac` for real assets — build with placeholders
      if needed.*
* [ ] **Slide 4 — About Me / triple-point Venn** (`triple-point-venn`
      custom). **must-not-skip.** **DoD:** systems · science · software Venn,
      center = facilitator/unicorn; recurring line *"the unicorn at the
      triple-point"*; *"make it purr"* setup; earned-authority line in notes;
      the old "four jobs" beat is **NOT** on-slide (private constraint only).
      *Blocked on `open_decisions: prelude-me` for headshot + final labels.*
* [ ] **Slide 5 — Thesis card** (`purdue-overview`). **DoD:** the single
      thesis line *"start simple; add complexity only where it earns its
      keep"*; recurring lines *"does it earn its keep?"* + *"the simplest
      thing that works"* + *"make it purr"* framing; resolves the Slide 2
      dangling question.
* [ ] Commit(s): `WIP: Slide N — <beat>` (one per slide; resume contract #7)

**Checkpoint:** The opening must land cold — Geoffrey walks Slides 1–5 on the
dev server. Gate: build + export green; `grep` confirms the triple-point and
earn-its-keep lines.

---

## Phase 3 — Act 1 climax + the turn (Slides 6–11)

**Goal:** Zoo → on-ramp → why layers exist → anatomy → decompose + the turn →
merchants. The density peaks (6, 9) and the gear-shift (10) live here.
**Lands custom layouts:** `zoo-logo-wall` (6), `rube-goldberg-stack` (9, reused
labeled on 10).

**Outline reference:** `OUTLINE.md` §4, Slides 6–11.

* [ ] **Slide 6 — The Zoo** (`zoo-logo-wall` custom). **[BREATH] ·
      compressible.** **DoD:** dense logo wall grouped by layer, size ≈
      popularity; shared-pain turn line in notes; *scenery — do not narrate
      logos*; minimal on-slide text. *Blocked on `open_decisions: zoo-set`.*
* [ ] **Slide 7 — On-ramp: capability vs. capacity** (`purdue-content`).
      **compressible.** **DoD:** monolith vs. layered-stack two-panel; previews
      the layer vocabulary; undergrad on-ramp.
* [ ] **Slide 8 — Why the layers exist** (`purdue-content`). **DoD:**
      concern → layer mapping; the pivot line ("do I have this concern,
      today?").
* [ ] **Slide 9 — Anatomy (centerpiece)** (`rube-goldberg-stack` custom).
      **DoD:** one dense teetering stack; density is the message; *don't
      explain it*; plants the Act-2 question.
* [ ] **Slide 10 — Decompose + the turn** (`rube-goldberg-stack`, labeled
      re-render). **act: turn.** **DoD:** each layer labeled with the
      academic | industry pair; recurring line *"same handful of layers —
      only the brand names change"*; **gear-shift to deliberate pace.**
* [ ] **Slide 11 — Merchants of complexity** (`purdue-content`). **DoD:**
      two-state "platform that tames complexity" diagram; recurring lines
      *"merchants of complexity"* + *"this could have been a Makefile and a
      cron-job!"*; **$200M line is a throwaway eye-roll**, no worked example;
      kept funny/warm (tone-drift antidote).
* [ ] Commit(s): `WIP: Slide N — <beat>`

**Checkpoint:** Zoo + anatomy are the density peaks; the turn must shift
gears. Gate: build + export green; `grep` confirms the brand-names and
merchants lines.

---

## Phase 4 — Axis 1: executor/scale (Slides 12–16)

**Goal:** Two-axis reveal → the executor climb (bash → xargs → Slurm array →
HyperShell). **Lands `two-axis-ladder` (preview form)** and the
**terminal-window code aesthetic.** Snippets are scenery; the Slide 16 idea
is the must-land beat.

**Outline reference:** `OUTLINE.md` §4, Slides 12–16. Honor the **scenery
rule** banner (OUTLINE Slides 13–18): gesture, don't teach.

* [ ] **Slide 12 — Two axes, not one ladder** (`two-axis-ladder`, preview).
      **must-not-skip · [BREATH].** **DoD:** two clearly separated axes;
      greyed-out extra tools showing the climb is a chosen subset; recurring
      lines *"which axis are you on?"* + *"the map outlasts the tools"*; the
      core idea everything hangs on.
* [ ] **Slide 13 — bash loop** (terminal). **DoD:** real fastq loop snippet
      as scenery; "for a few dozen tasks this is correct" conviction; the
      throttling wall planted.
* [ ] **Slide 14 — xargs** (terminal). **compressible.** **DoD:** `-P`
      snippet (quoting need not be legible — scenery); recurring line *"each
      rung adds one capability"*; single-node ceiling planted.
* [ ] **Slide 15 — Slurm job array** (terminal). **compressible.** **DoD:**
      `#SBATCH --array` snippet; the controller-pressure wall planted ("one
      scheduler decision per task").
* [ ] **Slide 16 — HyperShell + pressure-release valve** (terminal).
      **must-not-skip.** **DoD:** real `hsx` one-liner + 3–4-item v2.8 feature
      box (scenery); the **slurmctld-DDoS pressure-release idea given room**
      (the single best beat); recurring lines *"a pressure-release valve for
      the scheduler"* + *"who's holding the wires?"* + *"earn its keep"*;
      HyperShell-as-my-tool framed as proof, not apology. *See
      `open_decisions: hypershell-box`.*
* [ ] Commit(s): `WIP: Slide N — <beat>`

**Checkpoint:** 12 and 16 are must-not-skip. Gate: build + export green;
`grep` confirms pressure-release-valve + which-axis lines; verify terminal
aesthetic is visually distinct from the (not-yet-built) definition aesthetic.

---

## Phase 5 — Axis 2 + the decision ladder (Slides 17, 17b, 18, 19)

**Goal:** Make → Make-reaches-further (slide-reverse) → Nextflow → the
decision ladder. **Lands the `two-axis-ladder` full form** (Slide 19, with
the you-own-it → framework-owns-it gradient) and the **definition code
aesthetic.**

**Outline reference:** `OUTLINE.md` §4, Slides 17–19.

* [ ] **Slide 17 — "Make is all you need"** (definition aesthetic). **DoD:**
      small Makefile in the *definition* treatment (distinct from terminal);
      the "out of the box" provocation planted.
* [ ] **Slide 17b — how far Make reaches** (**slide-REVERSE of 17 — NOT a new
      physical slide**). **must-not-skip.** **DoD:** reuse the Slide 17
      Makefile verbatim, talk over it (optional revealed margin annotations);
      recurring line *"who's holding the wires?"* as a felt question.
* [ ] **Slide 18 — Nextflow as justified endpoint** (definition). **must-not-
      skip.** **DoD:** minimal Nextflow process/channel + 5-feature callout;
      the **human-scalability / packaging-index** argument given room;
      recurring line *"the map outlasts the tools"*; own the bias.
* [ ] **Slide 19 — decision ladder + checklist** (`two-axis-ladder`, full).
      **must-not-skip · [BREATH].** **DoD:** both axes + rungs in one picture
      (the photograph-slide); left→right **gradient as a visual** (say the
      felt question once); checklist grouped by axis with the Slide 16
      DDoS callback; recurring lines *"does it earn its keep?"* + *"each rung
      adds one capability"* + *"which axis are you on?"*; land both directions
      (stop when no; climb without guilt when yes).
* [ ] Commit(s): `WIP: Slide N — <beat>`

**Checkpoint:** 17b, 18, 19 are the orchestration-axis payoff; 19 is the
photograph-slide. Gate: build + export green; confirm 17b adds **no** new
physical slide (the registry has 24 physical slides total); `grep` confirms
who-holds-the-wires + earn-its-keep lines.

---

## Phase 6 — Data, agents, close (Slides 20A, 20B, 21, 22, 23)

**Goal:** Data tiers → staging → one agentic beat → closing inversion →
resources. **Lands `storage-tier` (20A), `ownership-ladder` (20B), and the
`closing-qr-row` port (23).**

**Outline reference:** `OUTLINE.md` §4, Slides 20A–23.

* [ ] **Slide 20A — Data locality & storage tiers** (`storage-tier` custom).
      **compressible.** **DoD:** 6-property trade-off cloud + cold→warm→hot
      tier ladder (Fortress · Data Depot · Scratch); earn-its-keep tie-in
      ("don't pay for the fast tier until you need it"). *Blocked on
      `open_decisions: rcac-tiers`.*
* [ ] **Slide 20B — Staging: rsync → managed flows** (`ownership-ladder`
      custom, terminal snippet). **DoD:** two-rung ownership ladder reusing
      the Slide 19 gradient; `rsync` snippet as scenery; **resist the
      triple-callback drumbeat** — one light "same shape" nod only; light
      Globus aside.
* [ ] **Slide 21 — One agentic beat** (`purdue-content`). **compressible.**
      **DoD:** agent-loop node feeding the Slide 19 ladder; "same rule:
      simplest thing that works, then verify"; **one beat only — do not
      expand.**
* [ ] **Slide 22 — Closing: real perfection is simplicity** (`purdue-
      content`). **must-not-skip · [BREATH].** **DoD:** invert the cold open
      (a single "a `for` loop" box where the Slide 2 monster was — no need to
      re-render the meme); recurring lines *"the simplest thing that works"*
      (walk-off) + light *"merchants"* callback + *"make it purr"* payoff;
      `[BREATH]` before the inversion; keep it dry.
* [ ] **Slide 23 — Resources & contact** (`closing-qr-row` port). **DoD:**
      back-of-room-scannable QR row (5 proposed, cull to 4); RCAC reverse
      mark; email + credit; *"Start simple. Thanks."* walk-off in notes. *See
      `open_decisions: qr-set`; QR build note in OUTLINE §4 Slide 23.*
* [ ] Commit(s): `WIP: Slide N — <beat>`

**Checkpoint:** Geoffrey reviews the exit run (20A → 23). Gate: build +
export green; QR codes present; `grep` confirms the simplest-thing walk-off.

---

## Phase 7 — Accuracy pass & speaker-notes polish

**Goal:** Final correctness sweep before Geoffrey handles export + release.
Slide **content is frozen** — factual/copy issues are *enumerated for
Geoffrey's approval*, not edited in place. Speaker notes are fair game. **No
`v-click` animations** unless Geoffrey asks.

* [ ] Walk all 24 physical slides against `OUTLINE.md` §4 beats and §3 timing;
      flag drift in beats, callbacks, or recurring-line firings.
* [ ] Verify every entry in `recurring_lines` fires where the registry/notes
      say it does (use the Verification-gate `grep` checks).
* [ ] Confirm the **scenery-vs-idea** balance: scenery slides (13–18, 20B)
      are not over-built with on-slide prose; must-land ideas (12, 16, 18,
      19) have room.
* [ ] Sanity-check external facts the deck leans on: HyperShell v2.8 feature
      claims; RCAC tier names; ACM/agentic references if used; Nextflow /
      nf-core framing.
* [ ] Produce a single enumerated list of any *slide-content* corrections for
      Geoffrey. **Do NOT edit slide content** — Geoffrey applies fixes.
* [ ] Polish speaker notes (clarity, internal consistency, stale
      implementation notes); preserve every risk-register entry and
      transition; edits additive/corrective only.
* [ ] Commit: `WIP: Phase 7 — accuracy pass and speaker-notes polish`

**Checkpoint:** Geoffrey reviews the corrections list and applies any he
wants. Deck ready for Phase 8.

---

## Phase 8 — Final export & release (Geoffrey-handled)

**Goal:** Ship it. **Not** executed by `/continue` — Geoffrey runs export and
`/release` on his own schedule. Reference, not an agent TODO.

* `npm run export:pdf` → verify `reu-2026-talk.pdf` (fonts embedded, RCAC
  marks sharp, meme/diagrams crisp, snippets legible, QR codes sharp).
* Verify all QR codes scan from ~15ft.
* Apply any slide-content corrections from §7's list.
* Use `.agents/skills/release/SKILL.md`: strip/squash `WIP:` prefixes,
  fast-forward `wip → main`, force-push `wip`, optional tag (e.g.
  `v1.0-reu-2026`) + GitHub release.

**Checkpoint:** Presentation ready for the Summer REU Seminar — **Tuesday,
June 23, 2026, 11:00 ET**, Envision Center.

---

## Asset Checklist

`✓` = copied/generated and verified · `☐` = pending. Asset ids match the
`assets[]` field in the `slides:` registry and the `open_decisions` ledger.

### Chrome (Phase 0 / 1 — via THEME.md)

* ☐ RCAC brand marks (h / h-reverse / v / v-reverse) → `public/images/rcac/`
* ☐ Source Sans 3 (Regular / SemiBold / Bold, OFL) → `public/fonts/`
* ☐ Purdue 2026 palette sampled into `styles/index.css` (from THEME.md)

### Custom-layout-driven assets

* ☐ `perfection-meme` — best X-Men "Perfection" image (Slide 2; inversion on 22) — *open_decisions: perfection-img*
* ☐ `rcac-photo-cluster` — machine room / Fortress mural / rack (Slide 3) — *open_decisions: prelude-rcac*
* ☐ `rcac-qr` — `rcac.purdue.edu` QR (Slide 3)
* ☐ `headshot` — About Me (Slide 4) — *open_decisions: prelude-me*
* ☐ `zoo-logo-set` — grouped, size-by-popularity logo wall (Slide 6) — *open_decisions: zoo-set*
* ☐ `qr-set` — Slide 23 QR row (HyperShell · PEARC'26 · rcac-mcp · globus-mcp · nf-core; cull to 4) — *open_decisions: qr-set*

### Project scaffolding (Phase 1)

* ☐ `package.json` · `.npmrc` · `.gitignore` · `vite.config.ts` (port 3035)
* ☐ `styles/index.css` · `uno.config.ts` · `slides.md` · `README.md`

---

## Resuming Implementation

The per-sub-phase resume protocol lives in the `/continue` skill at
`.agents/skills/continue/SKILL.md` (Phase 0 — to be created). It reads this
file's `slides:` registry + `open_decisions` ledger and honors the **resume
contract** (improvement #7): each session updates `current_phase`, the
touched slides' `status`, and `last_updated`, then commits `WIP:` naming the
slide id.

For shipping `wip → main` (with optional tag + GitHub release), use the
`/release` skill at `.agents/skills/release/SKILL.md`.

---

## Appendix A — Parallel fan-out escape hatch (improvement #8, NOT the default)

The default build is **monolithic `slides.md`, sequential `/continue`.** Only
if Geoffrey opts into parallel construction:

1. **Prerequisite split.** Convert `slides.md` into a spine of Slidev `src:`
   includes, one file per slide under `slides/` (e.g. `slides/06-zoo.md`):

   ```md path=null start=null
   ---
   src: ./slides/06-zoo.md
   ---
   ```

   The master file holds only headmatter + the ordered `src:` list. Slide
   bodies move to `slides/NN-*.md`. Custom-layout CSS **stays** in
   `styles/index.css` (never per-slide).
2. **Worktrees.** Each child agent runs in its own `git worktree` on its own
   branch and owns **one** `slides/NN-*.md` file — zero file overlap, zero
   merge conflicts.
3. **Build-order constraint.** A slide's custom layout (see `layouts:`) must
   exist before its slide file is fanned out; build shared layouts first.
4. **Merge.** A lead collects the per-slide files and reconciles only the
   spine's `src:` ordering — not 2000 lines of one file.

Reordering after the split = editing the spine's `src:` list. The split is
mechanical and reversible. Until it is performed, **do not** run parallel
agents against the single `slides.md`.

---

*Last updated: 2026-06-20T23:40:00Z*
