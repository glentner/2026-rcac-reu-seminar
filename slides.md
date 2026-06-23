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
# BUILD IN PROGRESS (Phase 3). Slides 1–7 (Title; "Perfection" cold open;
# About RCAC; About Me; Thesis; the Zoo; capability vs. capacity) below are
# REAL content per OUTLINE.md §4.
# The single trailing slide (two-axis-ladder) is retained PHASE-1 SMOKE-TEST
# scaffolding — it keeps dev/build/export green and proves the custom-layout
# pipeline until the real Slides 12/19 land (Phases 4–5). Content source of
# truth: OUTLINE.md; build order: ROADMAP.md.
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

<div class="purdue-overview">

<div class="section-label">Thesis</div>
<div class="section-rule"></div>
<div class="section-body">

<div class="lede">Start simple. Add complexity only where it earns its keep.</div>

<div class="caption">…the simplest thing that works.</div>

</div>

<div class="page-num">05 / 24</div>

</div>

<!--
[Slide 5 — Thesis card (purdue-overview) · 4:00–4:45 · section-divider beat]

THE ONE SENTENCE EVERYTHING HANGS ON — and the RESOLUTION of the cold open's
unresolved question. Slide 2 asked "how do you tell necessary complexity from
the absurd?"; this answers it. Framed as DISCIPLINE BORN OF LOVE FOR THE CRAFT,
not distaste for it — the "purr" / rebuilt-engine image is the love-of-craft
counterweight that keeps the whole talk on the enthusiast side (the
anti-grumpy-old-man anchor).

Beats:
1. State the thesis, plainly, once — then let it sit. The card says it; you
   don't have to over-explain. RECURRING LINE (thesis): "Start simple. Add
   complexity only where it earns its keep." Pause.
2. Resolve the cold open: "That's the answer to the question I left hanging
   back on that teetering tower — how do you tell necessary complexity from
   the absurd? You ask one question of every layer."
   RECURRING LINE: "Does it earn its keep?"
3. The counterweight (love of craft, NOT yelling at the cloud): "When a stack
   is right, watching it run is like hearing a rebuilt engine turn over and
   purr." RECURRING LINE: "make it purr." Name the trap: that satisfaction is
   the temptation — it makes you want to add MORE than the problem needs.
4. Name both failure modes briefly: under-engineering (manual, by-hand,
   unrepeatable) and over-engineering (the Slide 2 monster). The craft is
   finding the floor.
5. Frame the rest of the talk: a VOCABULARY for naming complexity and a TOOL
   for adding it deliberately. RECURRING LINE: "the simplest thing that works"
   — planted here (caption), paid off as the walk-off on Slide 22.

Transition → Slide 6 (The Zoo): "Now — before any advice — let me show you the
whole zoo at once, so you see what we're up against."

Delivery: SLOW DOWN. This is a section-divider beat — one clean idea on screen,
said with conviction. Let the thesis sit in a beat of silence before you resolve
the cold open. Resolves the Slide 2 dangling question; sets up the Slide 22
inversion.
-->

---

<div class="zoo-logo-wall">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>The Zoo</h1>
<div class="subhead">Workflow tools, all at once.</div>

<div class="zoo-wall">

<div class="zoo-top">

<div class="zoo-group g-sched">
<div class="zoo-layer">Schedulers / Resource Managers</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:4">Slurm</span>
<span class="zoo-chip" style="--pop:4">Kubernetes</span>
<span class="zoo-chip" style="--pop:2">HTCondor</span>
<span class="zoo-chip" style="--pop:2">PBS / Torque</span>
<span class="zoo-chip" style="--pop:1">LSF</span>
<span class="zoo-chip" style="--pop:1">cron</span>
</div>
<img class="zoo-logo hero" src="/images/zoo/slurm.svg" alt="Slurm" style="left:74%; top:8%; width:6rem; --rot:-4deg" />
<img class="zoo-logo" src="/images/zoo/htcondor.svg" alt="HTCondor" style="left:27%; top:84%; width:5rem; --rot:-3deg" />
<img class="zoo-logo" src="/images/zoo/kubernetes.svg" alt="Kubernetes" style="left:72%; top:74%; width:2.7rem; --rot:5deg" />
</div>

<div class="zoo-group g-exec">
<div class="zoo-layer">Executors · scale</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:4">Dask</span>
<span class="zoo-chip" style="--pop:3">Ray</span>
<span class="zoo-chip" style="--pop:2">GNU Parallel</span>
<span class="zoo-chip" style="--pop:2">HyperShell</span>
<span class="zoo-chip" style="--pop:2">Parsl</span>
</div>
<img class="zoo-logo" src="/images/zoo/dask.svg" alt="Dask" style="left:88%; top:24%; width:2.9rem; --rot:5deg" />
<img class="zoo-logo" src="/images/zoo/parsl.png" alt="Parsl" style="left:20%; top:72%; width:3.4rem; --rot:-4deg" />
<img class="zoo-logo" src="/images/zoo/gnu-parallel.png" alt="GNU Parallel" style="left:54%; top:88%; width:4.6rem; --rot:2deg" />
<img class="zoo-logo" src="/images/zoo/hypershell.png" alt="HyperShell" style="left:84%; top:66%; width:3rem; --rot:-5deg" />
</div>

<div class="zoo-group g-orch">
<div class="zoo-layer">Orchestration · DAG</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:4">Airflow</span>
<span class="zoo-chip" style="--pop:3">GNU Make</span>
<span class="zoo-chip" style="--pop:3">Nextflow</span>
<span class="zoo-chip" style="--pop:3">Snakemake</span>
<span class="zoo-chip" style="--pop:2">Luigi</span>
<span class="zoo-chip" style="--pop:1">Cromwell / CWL</span>
<span class="zoo-chip" style="--pop:1">Globus Compute / Flows</span>
</div>
<img class="zoo-logo" src="/images/zoo/gnu.png" alt="GNU" style="left:86%; top:30%; width:2.9rem; --rot:5deg" />
<img class="zoo-logo" src="/images/zoo/airflow.svg" alt="Apache Airflow" style="left:15%; top:62%; width:3.1rem; --rot:-4deg" />
<img class="zoo-logo" src="/images/zoo/nextflow.png" alt="Nextflow" style="left:56%; top:58%; width:6.5rem; --rot:2deg" />
<img class="zoo-logo" src="/images/zoo/snakemake.png" alt="Snakemake" style="left:44%; top:85%; width:6.5rem; --rot:-3deg" />
</div>

</div>

<div class="zoo-bottom">

<div class="zoo-group g-cont">
<div class="zoo-layer">Containers</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:4">Docker</span>
<span class="zoo-chip" style="--pop:2">Apptainer</span>
<span class="zoo-chip" style="--pop:1">Podman</span>
</div>
<img class="zoo-logo" src="/images/zoo/docker.svg" alt="Docker" style="left:80%; top:44%; width:3rem; --rot:5deg" />
</div>

<div class="zoo-group g-data">
<div class="zoo-layer">Data flow</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:3">Globus</span>
<span class="zoo-chip" style="--pop:2">rsync</span>
<span class="zoo-chip" style="--pop:2">S3</span>
</div>
<img class="zoo-logo" src="/images/zoo/globus.png" alt="Globus" style="left:58%; top:62%; width:5rem; --rot:-2deg" />
</div>

<div class="zoo-group g-lang">
<div class="zoo-layer">Languages</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:4">Python</span>
<span class="zoo-chip" style="--pop:2">Bash</span>
<span class="zoo-chip" style="--pop:2">R</span>
<span class="zoo-chip" style="--pop:1">Julia</span>
<span class="zoo-chip" style="--pop:1">MATLAB</span>
</div>
<img class="zoo-logo" src="/images/zoo/python.svg" alt="Python" style="left:86%; top:28%; width:2.5rem; --rot:-6deg" />
<img class="zoo-logo" src="/images/zoo/bash.svg" alt="Bash" style="left:54%; top:36%; width:2.4rem; --rot:3deg" />
<img class="zoo-logo" src="/images/zoo/julia.svg" alt="Julia" style="left:28%; top:76%; width:2.7rem; --rot:-4deg" />
<img class="zoo-logo" src="/images/zoo/matlab.svg" alt="MATLAB" style="left:74%; top:72%; width:2.6rem; --rot:5deg" />
</div>

<div class="zoo-group g-obsv">
<div class="zoo-layer">Observability</div>
<div class="zoo-chips">
<span class="zoo-chip" style="--pop:2">Datadog</span>
<span class="zoo-chip" style="--pop:2">Grafana / Prometheus</span>
<span class="zoo-chip" style="--pop:1">logs + cron</span>
</div>
<img class="zoo-logo" src="/images/zoo/datadog.svg" alt="Datadog" style="left:84%; top:46%; width:2.5rem; --rot:5deg" />
<img class="zoo-logo" src="/images/zoo/prometheus.svg" alt="Prometheus" style="left:34%; top:62%; width:2.6rem; --rot:-4deg" />
</div>

</div>

</div>

<div class="zoo-disclosure">Logos are trademarks of their respective projects.</div>

<div class="page-num">06 / 24</div>

</div>

<!--
[Slide 6 — The Zoo · a literal logo-wall (zoo-logo-wall) · 4:45–5:45 · Act-1 climax · [BREATH]]

THE IMPRESS. The whole talk is "impress, then walk it back" — this is the
impress, and it must actually OVERWHELM. The density IS the message: gesture at
the wall, do NOT read or narrate logos. ~60–75s. The high-water mark of Act-1
density; right after this we begin sorting.

Beats:
1. Let the wall land. [BREATH] — ~3s of silence; let it overwhelm.
2. Gesture, don't read: "this is the zoo."
3. SHARED-PAIN TURN (the early de-risk of the Slide 11 merchants beat): "Every
   one of these is a real, capable tool somebody swears by — and, honestly,
   several of them are the bane of my existence. Yours too, someday."
4. Honest setup: "I can't cover all of this — nobody could in half an hour. So
   I'm going to give you a way to THINK about all of it, then go deep on a
   couple of slices."
5. Foreshadow (don't teach): "It looks like chaos. It isn't. By the end you'll
   be able to drop any logo on this wall — even one I've never heard of — into
   the right box."

Arrangement carries meaning (rewards a second look): grouped by layer, size ≈
popularity, with a quiet two-axis FORESHADOW — the executor/scale family
(schedulers + executors) on the LEFT, orchestration/DSL on the RIGHT, axes
deliberately UNLABELED (the labeled reveal is Slide 12). The cross-cutting
layers (containers · data · languages · observability) sit along the bottom.
Bias owned up front: weighted toward what researchers actually run on our HPC.

Transition → Slide 7 (On-ramp): "It looks like chaos. It isn't. Let me give you
the ground-clearing first, then start sorting this wall."

Delivery: SCENERY, not tour. The [BREATH] after the reveal is load-bearing —
the silence IS the impress. Resist narrating logos.

BUILD NOTE (open_decisions: zoo-set — OPEN): the tool set, layer grouping, and
size≈popularity weighting are implemented, but the marks are PLACEHOLDER text
chips with per-layer tint dots, not the final brand logos. When the logo set +
grouping + cascade-vs-single-reveal are locked, swap each .zoo-chip's text for
an <img> brand mark — the grid + size≈popularity scaffolding stays. A
cascade/pile-up build (density visibly accumulating) is an optional enhancement
deferred with the asset decision. HTML/CSS chips only — no inline SVG (MDC
blank-line hazard).
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Capability vs. capacity</h1>
<div class="subhead">Two kinds of computing — the zoo is built for the second.</div>

<div class="on-ramp">

<div class="cap-panel is-capability">
<div class="cap-head"><span class="cap-kicker">Capability</span><span class="cap-q">“how big?”</span></div>
<div class="cap-stage">
<div class="monolith">Monolithic MPI code</div>
<div class="node-row"><span></span><span></span><span></span><span></span><span></span><span></span></div>
</div>
<div class="cap-caption">One giant program. Complexity sealed <em>inside</em> the code.</div>
</div>

<div class="cap-panel is-capacity">
<div class="cap-head"><span class="cap-kicker">Capacity</span><span class="cap-q">“how many — and how much scaffolding?”</span></div>
<div class="cap-stage">
<div class="layer-stack">
<div class="wl wl-app">Your analysis</div>
<div class="wl wl-layer" style="--c:#2f567f">Orchestration</div>
<div class="wl wl-layer" style="--c:#3f7d6b">Data</div>
<div class="wl wl-layer" style="--c:#464a52">Scheduler</div>
<div class="wl wl-layer" style="--c:#8a5a86">Containers</div>
</div>
<div class="task-swarm"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
</div>
<div class="cap-caption">Many independent tasks. Complexity lives <em>between</em> tools — in optional layers.</div>
</div>

</div>

<div class="on-ramp-plant">Start with one box. Add a layer only when the problem demands it.</div>

<div class="page-num">07 / 24</div>

</div>

<!--
[Slide 7 — On-ramp: capability vs. capacity (purdue-content) · 5:45–6:45 · compressible]

THE UNDERGRAD ON-RAMP. Two kinds of computing told through one archetypal
contrast: the MONOLITH vs. the LAYERED STACK. This talk — and the whole zoo —
is about the second. The one place to SLOW DOWN for HPC-novices; compressible
to one line for an HPC-literate room.

The load-bearing PLANT (the whole talk in one line): this is SCAFFOLDING WITH
INCREMENTAL COMPLEXITY — you add layers only as the problem demands. The plant
banner ("start with one box; add a layer only when the problem demands it")
pre-echoes the thesis and the Slide 19 checklist. Hold that thought.

The trade to name: the monolith HAS to be complex (tightly coupled) — its
complexity is sealed inside the code; the workflow gets to CHOOSE its
complexity, layer by layer. That freedom is both the benefit and the
temptation.

Beats:
1. Capability = the monolith: one giant Fortran-and-MPI code spanning a whole
   supercomputer — it HAS to be complex; the complexity lives inside the code.
2. Capacity = the layered stack: lots of independent tasks, complexity lives
   BETWEEN the tools, in a stack of optional layers.
3. Name the layers fast (application → orchestration → data → scheduler →
   containers) — this PREVIEWS the vocabulary Slides 9–10 decompose, and the
   tints match the Zoo (slate=orchestration, green=data, graphite=scheduler,
   mauve=containers).
4. The key plant: incremental scaffolding — add layers only as needed.

Example lines (illustrative):
- "One world is a single giant Fortran-and-MPI code that spans a whole
  supercomputer — it HAS to be complex; the complexity lives inside the code."
- "Our world is the opposite: lots of independent tasks, and the complexity
  lives BETWEEN them — in a stack of optional layers."
- "The monolith asks 'how big?'; the workflow asks 'how many — and how much
  scaffolding do I actually need?'"

Transition → Slide 8 (Why the layers exist): "Before we judge any of those
layers, it's worth asking why they exist at all."

Delivery: Undergrad on-ramp — the one place to slow down for novices.
COMPRESSIBLE to one line for an HPC-literate room. On-slide text stays lean (the
diagram + the plant carry it); the teaching is spoken.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Why the layers exist</h1>
<div class="subhead">Every layer answers a real operational concern — that's where the zoo comes from.</div>

<div class="concern-map">
<div class="cm-head"><span class="cm-h-concern">The concern — a real problem</span><span class="cm-h-layer">The layer it spawned</span></div>
<div class="cm-row" style="--c:#8a5a86"><span class="cm-concern">Reproduce my environment, anywhere</span><span class="cm-arrow">→</span><span class="cm-layer">Containers</span></div>
<div class="cm-row" style="--c:#2f567f"><span class="cm-concern">Order the steps; rebuild only what changed</span><span class="cm-arrow">→</span><span class="cm-layer">Orchestration</span></div>
<div class="cm-row" style="--c:#3f7d6b"><span class="cm-concern">Stage data where the compute is</span><span class="cm-arrow">→</span><span class="cm-layer">Data</span></div>
<div class="cm-row" style="--c:#464a52"><span class="cm-concern">Match tasks to CPUs · GPUs · nodes</span><span class="cm-arrow">→</span><span class="cm-layer">Scheduler</span></div>
<div class="cm-row" style="--c:#4b4f9c"><span class="cm-concern">Remember every run — history &amp; state</span><span class="cm-arrow">→</span><span class="cm-layer">Persistence</span></div>
<div class="cm-row" style="--c:#a14e4e"><span class="cm-concern">Know what ran, what failed, and why</span><span class="cm-arrow">→</span><span class="cm-layer">Observability</span></div>
</div>

<div class="concern-pivot">The question is never <em>“is this layer good?”</em> It's <em>“do I have this concern, today, at a scale the layer below can't handle?”</em></div>

<div class="page-num">08 / 24</div>

</div>

<!--
[Slide 8 — Why the layers exist · concern → layer (purdue-content) · 6:45–7:45 · Act-1 brisk]

THE ORIGIN OF THE ZOO. Each layer answers a real operational concern — the
scaffolding isn't arbitrary; every legitimate concern spawned its own layer.
This is the concern→layer mapping that makes Slide 9's monster LEGIBLE. The
mapping is SCENERY (brisk, don't lecture it); the PIVOT line is the keeper.

The honest form of the thesis lives here: the question is never "is this layer
good?" but "do I have this concern, TODAY, at a scale the layer below can't
handle?" (the on-slide gold callout).

The four shared layers keep their Slide 7 / Zoo tints (mauve=Containers,
slate=Orchestration, green=Data, graphite=Scheduler); Persistence (indigo) and
Observability (red) complete the set — the same vocabulary that gets decomposed
on Slides 9–10.

Beats:
1. It's not enough to write code in a notebook — you have to OPERATIONALIZE it.
2. Walk the concern→layer mapping, BRISK (it's a map, not a lecture): deploy →
   Containers, ordering → Orchestration, data → Data, resources → Scheduler,
   history → Persistence, what-happened → Observability.
3. The PIVOT (the keeper): "Every one of these exists because somebody had a
   real problem. So the question is never 'is this layer good?' — it's 'do I
   have this concern, today, at a scale the thing below me can't handle?'"

Example lines (illustrative):
- "Every one of these layers exists because somebody had a real problem:
  deploying an environment, ordering steps, moving data, matching tasks to
  GPUs, remembering what happened."
- "So the question is never 'is this layer good?' It's 'do I have this concern,
  today, at a scale the thing below me can't handle?'"

Transition → Slide 9 (Anatomy): "Now grab every layer at once, whether you need
it or not — and you get this."

Delivery: Act-1 pace — BRISK. The mapping is scenery; the pivot line is the
keeper. Sets up Slide 9 as "what happens when you grab every layer whether or
not you have the concern."
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
