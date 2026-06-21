---
# Presentation metadata
title: "Workflow Engineering, Data Management, and Advanced Automation"
info: |
  ## Summer REU Seminar 2026 — How Not to Build a Rube Goldberg Machine

  A 30-minute seminar for REU undergraduates (RC professionals catch the
  in-jokes): workflow engineering, data management, and advanced
  automation on research computing systems. The posture is *impress, then
  walk it back* — overwhelm the room with the tool "zoo," then give it a
  conceptual spine: start simple; add complexity only where it earns its
  keep. The payoff is a two-axis decision ladder (executor/scale vs.
  orchestration/DSL) and a "does this layer earn its keep?" checklist.

  Geoffrey Lentner — Principal AI Scientist, Rosen Center for Advanced
  Computing, Purdue University.
author: Geoffrey Lentner
keywords: reu, workflow, hpc, slurm, hypershell, make, nextflow, rcac, purdue, automation, data-management

# Theme configuration
theme: seriph
colorSchema: light
themeConfig:
  primary: '#DAAA00'

# Presentation settings
transition: slide-left
mdc: true
aspectRatio: 16/9
canvasWidth: 980

# Features
drawings:
  persist: false
lineNumbers: false
monaco: false
presenter: true
download: true
exportFilename: reu-2026-talk

# Fonts — Franklin Gothic preferred (loaded from the presenter's system),
# Source Sans 3 fallback (shipped in public/fonts/). provider: none disables
# the Google-Fonts fetch so no licensed font is fetched or committed.
fonts:
  sans: 'ITC Franklin Gothic, Franklin Gothic Book, Franklin Gothic Medium, Source Sans 3'
  serif: 'ITC Franklin Gothic, Franklin Gothic Book, Franklin Gothic Medium, Source Sans 3'
  mono: 'JetBrains Mono'
  provider: none
  weights: '400,600,700'

# ─────────────────────────────────────────────────────────────────────────
# BUILD IN PROGRESS (Phase 2). Slide 1 (Title) below is REAL content per
# OUTLINE.md §4. The three slides that follow it (purdue-content,
# purdue-overview, two-axis-ladder) are retained PHASE-1 SMOKE-TEST scaffolding
# — they keep dev/build/export green and are replaced by their real slides as
# later phases land (content source of truth: OUTLINE.md; build order: ROADMAP.md).
# ─────────────────────────────────────────────────────────────────────────
---

<div class="purdue-cover">

<div class="cover-date">Summer REU Seminar · June 23, 2026</div>

<div class="cover-title-block">
<h1>Workflow Engineering, Data Management, and Advanced Automation</h1>
<div class="cover-subtitle">…or, How Not to Build a Rube Goldberg Machine</div>
</div>

<div class="cover-footer">
<div class="cover-speaker">Geoffrey Lentner</div>
<div class="cover-affiliation">Principal AI Scientist</div>
<img class="cover-mark" src="/images/rcac/rcac-h-reverse.svg" alt="Rosen Center for Advanced Computing · Purdue University" />
</div>

</div>

<!--
[Slide 1 — Title (purdue-cover) · 0:00–0:30 · lean cover]

DELIBERATELY LEAN. The deep self-intro is deferred — we jump straight to the
cold open (Slide 2) before introducing me. This slide just lands the name and
the talk's one-line promise, then gets out of the way. No agenda, no
throat-clearing; the energy comes from cutting FAST to the gag.

Beats:
1. Name + role, one breath — "I'm Geoffrey Lentner, Principal AI Scientist at
   Purdue's Rosen Center for Advanced Computing."
2. The talk in one POSITIVE line (enthusiast tone BEFORE the gag) — "This is
   about taking research from a Jupyter notebook to scale-out automation on a
   supercomputer, without losing your mind."
3. Immediately pivot to the gag.

Transition → Slide 2: "Before I tell you anything about me, let me show you my
favorite cautionary tale."

Delivery: ~30s, brisk.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="RCAC" />

<h1>Content chrome</h1>
<div class="subhead">The deck's workhorse layout — paper ground, gold rules.</div>

This is the `purdue-content` layout: gold rule top and bottom, H1 + subhead
upper-left, standard RCAC mark upper-right, page number lower-right.

Real content slides (7, 8, 11, 13–18, 21, 22) use this layout in later phases.

<div class="page-num">02 / placeholder</div>

</div>

<!--
[Phase 1 smoke test — content (purdue-content)]

Proves: the workhorse layout, gold rules, standard RCAC mark upper-right,
page-number slot. Replaced by real content slides Phase 3 onward.
-->

---

<div class="purdue-overview">

<div class="section-label">Thesis</div>
<div class="section-rule"></div>
<div class="section-body">

<div class="lede">Start simple; add complexity only where it earns its keep.</div>

<div class="caption">placeholder thesis card — proves the purdue-overview chrome.</div>

</div>

<div class="page-num">03 / placeholder</div>

</div>

<!--
[Phase 1 smoke test — overview (purdue-overview)]

Proves: warm cream ground, large left section label, vertical rule, right
lede + caption. This is the chrome Slide 5 (Thesis card) will use in Phase 2.
The thesis line shown here is the real recurring line for grep continuity.
-->

---

<div class="two-axis-ladder">

<h1>Two axes, not one ladder</h1>
<div class="subhead">Custom-layout pipeline smoke test (Slides 12 / 19).</div>

<div class="axes">

<div class="axis">
<div class="axis-label">Executor / scale</div>
<div class="rung">bash loop</div>
<div class="rung">xargs -P</div>
<div class="rung">Slurm job array</div>
<div class="rung">HyperShell</div>
</div>

<div class="axis">
<div class="axis-label">Orchestration / DSL</div>
<div class="rung">GNU Make</div>
<div class="rung">Nextflow</div>
</div>

</div>

</div>

<!--
[Phase 1 smoke test — two-axis-ladder (custom layout)]

Proves the CUSTOM-LAYOUT PIPELINE early (per ROADMAP Phase 1 checklist): a
global CSS class in styles/index.css renders two labeled axis columns with
the MDC `> p { display: contents }` guard intact. This is a minimal preview
of the load-bearing diagram; the real Slide 12 (preview) and Slide 19 (full,
with the you-own-it → framework-owns-it gradient) are built in Phases 4–5.
-->
