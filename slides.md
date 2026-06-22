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
# BUILD IN PROGRESS (Phase 2). Slides 1–2 (Title; "Perfection" cold open)
# below are REAL content per OUTLINE.md §4. The three slides that follow them
# (purdue-content, purdue-overview, two-axis-ladder) are retained PHASE-1
# SMOKE-TEST scaffolding — they keep dev/build/export green and are replaced
# by their real slides as later phases land (content source of truth:
# OUTLINE.md; build order: ROADMAP.md).
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

<div class="purdue-fullbleed">

<div class="cold-open">

<div class="cold-open-stack">
<div class="layer" style="--tilt:-1.4deg"><div class="l-tech">React dashboard</div><div class="l-role">single-page UI</div></div>
<div class="layer" style="--tilt:1.1deg"><div class="l-tech">FastAPI · REST</div><div class="l-role">request layer</div></div>
<div class="layer" style="--tilt:-0.9deg"><div class="l-tech">Keycloak · OAuth2</div><div class="l-role">auth gateway</div></div>
<div class="layer" style="--tilt:1.5deg"><div class="l-tech">Airflow</div><div class="l-role">workflow scheduler</div></div>
<div class="layer" style="--tilt:-1.2deg"><div class="l-tech">DAG definition</div><div class="l-role">dependency graph</div></div>
<div class="layer" style="--tilt:0.8deg"><div class="l-tech">PostgreSQL</div><div class="l-role">metadata store</div></div>
<div class="layer" style="--tilt:-1.5deg"><div class="l-tech">Redis + Celery</div><div class="l-role">broker + workers</div></div>
<div class="layer" style="--tilt:1.3deg"><div class="l-tech">Kubernetes</div><div class="l-role">orchestration</div></div>
<div class="layer" style="--tilt:-1.0deg"><div class="l-tech">Slurm</div><div class="l-role">HPC batch scheduler</div></div>
<div class="layer" style="--tilt:1.4deg"><div class="l-tech">Apptainer</div><div class="l-role">containers</div></div>
<div class="payload"><span class="p-label">…all to run</span><code>for sample in samples: analyze(sample)</code></div>
</div>

<img class="cold-open-meme" v-click src="/images/perfection.jpg" alt="X-Men “Perfection” meme" />

<div class="fullbleed-disclosure">X-Men “Perfection” meme</div>

</div>

</div>

<!--
[Slide 2 — Cold open · the "Perfection" stack (purdue-fullbleed) · 0:30–2:00 · must-not-skip · [BREATH]]

PURE SHOWMANSHIP. This comes FIRST — right after the title, before About
RCAC / About Me. "Jump to the middle, then introduce yourself": hook first,
credentials second. The gag can't lean on credibility it hasn't earned yet,
so it works on the image alone — walk on, throw up an absurd machine, get the
laugh. About Me (Slide 4) is the payoff: "...and here's why I get to make that
joke." Tone: affection, not contempt — we laugh WITH the absurdity, never down
at the people who build it.

Beats:
1. Walk the ridiculous stack top-to-bottom, out loud — let it get sillier:
   "A web service controls a scheduler that maintains a DAG to spawn workers
   via Slurm that spin up containers to run... a single Python function."
2. The "Perfection" punchline: "It's beautiful. It's elegant. And it does the
   exact work of a `for` loop."
3. [BREATH] — let the laugh land before saying anything else.
4. The Rube Goldberg warning: a workflow only its builder understands.
5. The turn — plant the unresolved question; DON'T answer it yet: "Some of
   this complexity is necessary. Most of it isn't. Today is about telling the
   difference — but first, who am I to say that?"

Transition → Slide 3 (About RCAC): "...so let me back up and tell you who's
making that claim."

Delivery: must-not-skip. Use the silence after "`for` loop." The unresolved
turn is what makes stepping back to About RCAC/Me feel earned, not like a
detour; the Thesis (Slide 5) is what finally resolves it.

BUILD NOTE: this slide is a COMPOSITION, not a bare image (Geoffrey's call):
a full-weight, teetering over-engineered stack (HTML/CSS only — no inline SVG,
per the MDC hazard) that exists only to run one for-loop. The tiny payload at
the base is the visual punchline — the whole tower vs. `for sample in samples`.
The X-Men "Perfection" meme (public/images/perfection.jpg) is the VERDICT,
stamped over the tower on a click (`v-click`). Live: let the stack breathe,
walk it top-to-bottom getting sillier, then click at the punchline so the meme
lands with the laugh. Export: Slidev renders the final click state, so the PDF
shows the stack + meme composited. The meme position (centered overlay) is
tunable in styles/index.css (.cold-open-meme) if it hides too much of the
tower. The full-weight stack here is deliberate; the serious, side-by-side
academic-vs-industry re-render of the same idea is deferred to Slides 9–10
(rube-goldberg-stack). Real meme is fair to use (private talk — see AGENTS.md).
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
