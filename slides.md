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
# BUILD IN PROGRESS (Phase 2). Slides 1–3 (Title; "Perfection" cold open;
# About RCAC) below are REAL content per OUTLINE.md §4. The three slides that
# follow them (purdue-content, purdue-overview, two-axis-ladder) are retained
# PHASE-1 SMOKE-TEST scaffolding — they keep dev/build/export green and are
# replaced by their real slides as later phases land (content source of truth:
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
<div class="layer" style="--tilt:-1.4deg; --dx:7rem"><div class="l-tech">React dashboard</div><div class="l-role">single-page UI</div></div>
<div class="layer" style="--tilt:1.1deg; --dx:4.5rem"><div class="l-tech">FastAPI · REST</div><div class="l-role">request layer</div></div>
<div class="layer" style="--tilt:-0.9deg; --dx:2.9rem"><div class="l-tech">Keycloak · OAuth2</div><div class="l-role">auth gateway</div></div>
<div class="layer" style="--tilt:1.5deg; --dx:1.8rem"><div class="l-tech">Airflow</div><div class="l-role">workflow scheduler</div></div>
<div class="layer" style="--tilt:-1.2deg; --dx:1.1rem"><div class="l-tech">DAG definition</div><div class="l-role">dependency graph</div></div>
<div class="layer" style="--tilt:0.8deg; --dx:0.65rem"><div class="l-tech">PostgreSQL</div><div class="l-role">metadata store</div></div>
<div class="layer" style="--tilt:-1.5deg; --dx:0.35rem"><div class="l-tech">Redis + Celery</div><div class="l-role">broker + workers</div></div>
<div class="layer" style="--tilt:1.3deg; --dx:0.18rem"><div class="l-tech">Kubernetes</div><div class="l-role">orchestration</div></div>
<div class="layer" style="--tilt:-1.0deg; --dx:0.06rem"><div class="l-tech">Slurm</div><div class="l-role">HPC batch scheduler</div></div>
<div class="layer" style="--tilt:1.4deg; --dx:0rem"><div class="l-tech">Apptainer</div><div class="l-role">containers</div></div>
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

<div class="about-rcac">

<svg class="squiggle-def" aria-hidden="true" focusable="false"><filter id="rcac-squiggle" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="2" seed="7" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" /></filter></svg>

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Rosen Center for Advanced Computing</h1>
<div class="subhead">Research computing &amp; data services at Purdue University.</div>

<div class="about-grid">

<div class="photo-cluster">
<img class="ph-aisle" src="/images/rcac-machine-room.jpg" alt="RCAC machine-room aisle" />
<img class="ph-rack" src="/images/rcac-rack.jpg" alt="RCAC staff at a compute rack" />
<img class="ph-mural" src="/images/rcac-mural.jpg" alt="RCAC Fortress archive mural" />
<div class="photo-caption">Inside RCAC: machine-room aisle · a rack · the Fortress archive mural.</div>
</div>

<div class="pillars">
<div class="pillars-kicker">Where I sit</div>
<div class="pillar"><div class="p-name">Systems</div><div class="p-desc">clusters · storage · networks</div></div>
<div class="pillar"><div class="p-name">Science</div><div class="p-desc">domains · methods · data</div></div>
<div class="pillar"><div class="p-name">Software</div><div class="p-desc">RSE · pipelines · agents</div></div>
<div class="rcac-qr">
<img src="/qr/rcac.jpg" alt="rcac.purdue.edu QR code" />
<div class="qr-label"><strong>rcac.purdue.edu</strong><br />research computing at Purdue</div>
</div>
</div>

</div>

<div class="page-num">03 / 24</div>

</div>

<!--
[Slide 3 — About RCAC · the center & where I sit (about-rcac) · 2:00–2:45 · compressible]

Fast orientation to the Rosen Center for any community visitors — but really a
SETUP for WHERE I FIT: a versatile member who cuts ACROSS the systems, science,
and software teams. The pillars are scenery; the cross-cutting move (the three
squiggle boxes) is the point, and it hands directly into About Me (Slide 4),
where the same three domains become the triple-point Venn. Lands AFTER the gag,
so it has momentum — keep the energy up; this is NOT a dead-stop corporate slide.
Most compressible slide in the deck: if running long, one sentence and move on.

Beats:
1. One-liner on RCAC — "research computing and data services at Purdue: Top500
   supercomputers, PB-scale storage, and, yes, this room — the Envision Center."
2. Name the pillars fast, incl. the Envision Center nod ("we're standing in it").
3. The real move: I don't live in one of these boxes — my job is to move BETWEEN
   them (gesture at the three squiggle boxes). Hand off into About Me.
4. REU framing, said openly — "most of you have heard the RCAC pitch already this
   summer, so I'll be quick; this is really just to show you where I sit."

Transition → Slide 4 (About Me): "That cross-cutting seat is the whole reason I
see this the way I do — so, a bit more about me."

Delivery: COMPRESSIBLE — first to cut. If short on time: "you know RCAC; here's
where I sit," then straight to About Me. Assets are the ported PowerPoint photos
(machine room / rack / Fortress mural) + the rcac.purdue.edu QR (open_decisions:
prelude-rcac — supplied this session; confirm pillar wording if it should change).
-->

---

<div class="triple-point-venn">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>About Me</h1>
<div class="subhead">Background and roles.</div>

<div class="venn-grid">

<div class="identity">
<img class="headshot" src="/images/headshot.jpg" alt="Geoffrey Lentner" />
<div class="who">
<div class="name">Geoffrey Lentner</div>
<div class="role">Principal AI Scientist · RCAC</div>
<div class="contact">glentner@purdue.edu<br />rcac.purdue.edu/about/staff/glentner</div>
</div>
</div>

<div class="venn-stage">
<div class="circle sys"></div>
<div class="circle sci"></div>
<div class="circle soft"></div>
<div class="domain systems">Systems</div>
<div class="domain software">Software</div>
<div class="domain science">Science</div>
<div class="role-chip" style="left:31%; top:29%">HPC</div>
<div class="role-chip" style="left:25%; top:43%">Facilitator</div>
<div class="role-chip" style="left:50%; top:25%">Developer</div>
<div class="role-chip" style="left:71%; top:29%">RSE</div>
<div class="role-chip" style="left:78%; top:42%">Technologist</div>
<div class="role-chip" style="left:72%; top:54%">Data Scientist</div>
<div class="role-chip is-center" style="left:50%; top:42%">AI</div>
<div class="role-chip" style="left:50%; top:57%">Educator</div>
<div class="role-chip" style="left:50%; top:77%">Astrophysicist</div>
</div>

</div>

<div class="page-num">04 / 24</div>

</div>

<!--
[Slide 4 — About Me · systems · science · software triple-point (triple-point-venn) · 2:45–4:00 · must-tell]

MY PERSPECTIVE IS THE ARGUMENT. The license to say "add complexity only when it
earns its keep" comes from sitting at the TRIPLE-POINT of systems, science, and
software — the "unicorn" facilitator who knows enough of each to translate
between all three. THIS is the anti-grumpy-old-man anchor: an enthusiast at
ease, not a novice complaining. In the new order this slide is the PAYOFF to the
cold open — it answers "who is this person to mock that machine?" The gag earns
the intro.

The personal arc mirrors the talk's own Jupyter → scale-out journey:
astrophysics → data-science-at-scale on HPC → full-stack RSE → now AI/agentic.
Each step ADDED a domain without abandoning the last.

LABEL MAP (last year's set, kept per Geoffrey): Systems lobe — HPC, Facilitator;
Software lobe — RSE, Technologist, Data Scientist; Science lobe —
Astrophysicist; Systems∩Software — Developer; lower-center (Science overlaps) —
Educator; DEAD CENTER triple-point — AI.

DESIGN DECISION (this session): AI sits at the dead-center triple-point (per
last year + Geoffrey's current Principal-AI-Scientist seat), and Facilitator
moves into the Systems lobe. This DIVERGES from OUTLINE §4 / THEME §9, which
word the center as "facilitator / unicorn." The recurring line is preserved
VERBALLY: I am the unicorn; the work that now lives at the center is AI. Flagged
for an OUTLINE/THEME reconciliation — not silently edited.

Beats:
1. Land the Venn: triple-point job; fluent across all three, deepest in none.
   RECURRING LINE: "the unicorn at the triple-point."
2. Walk the personal arc fast (four stops), tying it to the talk's arc.
3. Drop the earned-authority line — WARM, not boastful; "enthusiast first":
   "I've been building and debugging these workflows since before Kubernetes,
   before 'the cloud' was something you could buy — long enough to have strong
   opinions, and long enough to have earned them."
4. SET UP "make it purr" (love-of-craft counterweight, paid off on Slides 5/22).
5. One-line promise of the payoff (a mental model for HOW MUCH machinery), then
   hand off to the thesis.

The old "four jobs of this talk" beat is NOT on this slide and is NOT recited —
it survives only as a PRIVATE design constraint (show passion; survey the map;
leave one portable rule; stay honest about scope).

Transition → Slide 5 (Thesis): "So — here's the one sentence I want you to leave
with."

Delivery: MUST-TELL and the tone-setter. Warm, unhurried — this is NOT an Act-1
firehose slide. ~60–90s. Headshot supplied this session (public/images/
headshot.jpg); open_decisions: prelude-me → soft-resolved (labels confirmed by
Geoffrey; AI-center divergence flagged above).
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
