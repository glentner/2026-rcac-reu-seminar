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
# BUILD IN PROGRESS (Phase 5). Slides 1–17 below are REAL content per
# OUTLINE.md §4 (Prelude 1–5; Zoo → turn 6–11; Axis 1 executor climb 12–16;
# Axis 2 opens with "Make is all you need" + the 17b reverse). Two code
# aesthetics are now both live: the DARK terminal-window device (Slides 13–16)
# and the LIGHT authored-source DEFINITION device (Slide 17). Slide 17 carries
# BOTH beat 17 and the 17b slide-REVERSE on ONE physical page (a v-click reveals
# the reframe) — the deck stays 24 physical slides. Slides 18–23 land in
# Phases 5–6. Content source of truth: OUTLINE.md; build order: ROADMAP.md.
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

<div class="rube-goldberg-stack">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Anatomy of an over-engineered workflow</h1>
<div class="subhead">The zoo, collapsed into one teetering stack.</div>

<div class="rg-stage">
<div class="rg-stack">
<div class="rg-layer" style="--tilt:-1.4deg; --dx:4.5rem"><div class="rg-tech">React dashboard</div><div class="rg-role">single-page UI</div></div>
<div class="rg-layer" style="--tilt:1.1deg; --dx:2.9rem"><div class="rg-tech">Grafana · Datadog</div><div class="rg-role">dashboards · alerting</div></div>
<div class="rg-layer" style="--tilt:-0.9deg; --dx:1.9rem"><div class="rg-tech">PostgreSQL</div><div class="rg-role">run history · metadata</div></div>
<div class="rg-layer" style="--tilt:1.5deg; --dx:1.2rem"><div class="rg-tech">Airflow</div><div class="rg-role">DAG scheduler</div></div>
<div class="rg-layer" style="--tilt:-1.2deg; --dx:0.75rem"><div class="rg-tech">Jinja-templated DAG</div><div class="rg-role">pipeline definition</div></div>
<div class="rg-layer" style="--tilt:0.8deg; --dx:0.4rem"><div class="rg-tech">Kubernetes</div><div class="rg-role">container orchestration</div></div>
<div class="rg-layer" style="--tilt:-1.5deg; --dx:0.18rem"><div class="rg-tech">Docker · Apptainer</div><div class="rg-role">containerized steps</div></div>
<div class="rg-layer" style="--tilt:1.3deg; --dx:0.06rem"><div class="rg-tech">Globus · S3</div><div class="rg-role">data movement</div></div>
<div class="rg-layer" style="--tilt:-1.0deg; --dx:0rem"><div class="rg-tech">Slurm</div><div class="rg-role">HPC batch scheduler</div></div>
<div class="rg-payload"><span class="p-label">…all to run</span><code>for sample in samples: analyze(sample)</code></div>
</div>
</div>

<div class="page-num">09 / 24</div>

</div>

<!--
[Slide 9 — Anatomy of an over-engineered workflow · the CENTERPIECE (rube-goldberg-stack) · 7:45–9:00]

THE SHOCK SLIDE. The Slide 2 gag, now drawn SERIOUSLY — the scattered Zoo of
Slide 6 collapsed into one teetering stack: same tools, stacked instead of
scattered. The visual centerpiece of the talk. Density IS the message — let it
land; do NOT narrate the boxes (same discipline as the Zoo). ~75s.

Beats:
1. Reveal the teetering stack. Let it land — DON'T narrate the boxes.
2. "This is real. People build this. Sometimes — sometimes — they even need to.
   The hard part is knowing when."
3. PLANT the question Act 2 answers (don't answer it yet): "How would you know
   which of these you actually need?"

Example lines (illustrative):
- "This is the gag from a minute ago, drawn seriously. Every layer, all at once."
- "People really build this. And sometimes they even need to. The hard part is
  knowing when."

Callback: the dwarfed payload at the base (`for sample in samples: analyze…`)
is the SAME punchline as Slide 2 — the whole tower exists to run one for-loop.

Transition → Slide 10 (Decompose + the turn): "Step one to taming it: give every
box a name."

Delivery: CENTERPIECE — ~75s. Density is the message; resist explaining. The
bricks are uniform/undifferentiated here ON PURPOSE — Slide 10 re-renders this
exact tower color-coded + labeled with the academic|industry pairs (the
defusing, and the turn).

BUILD NOTE: rube-goldberg-stack custom layout (content chrome on PAPER —
distinct from Slide 2's chrome-free ink fullbleed). Teeter = per-brick --tilt
(alternating wobble) + cumulative --dx (geometric lean; only the top bricks
visibly overhang), mirroring the Slide 2 cold-open mechanics. HTML/CSS only —
no inline SVG (MDC hazard). Slide 10 reuses this markup, labeled + color-coded.
-->

---

<div class="rube-goldberg-stack is-decomposed">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Decompose the layers</h1>
<div class="subhead">It looks like chaos. It isn't — the same handful of layers, every time.</div>

<div class="rg-stage">
<div class="rg-stack">
<div class="rg-cols"><span class="rg-spacer"></span><span class="rg-col-ac">academic</span><span class="rg-col-ind">industry</span></div>
<div class="rg-layer" style="--c:#a14e4e"><div class="rg-name">Observability</div><div class="rg-ac">logs + cron</div><div class="rg-ind">Datadog · Grafana</div></div>
<div class="rg-layer" style="--c:#4b4f9c"><div class="rg-name">Persistence</div><div class="rg-ac">flat files · SQLite</div><div class="rg-ind">PostgreSQL</div></div>
<div class="rg-layer" style="--c:#2f567f"><div class="rg-name">Orchestration</div><div class="rg-ac">Make · Nextflow</div><div class="rg-ind">Airflow</div></div>
<div class="rg-layer" style="--c:#3f7d6b"><div class="rg-name">Data movement</div><div class="rg-ac">Globus · rsync</div><div class="rg-ind">S3</div></div>
<div class="rg-layer" style="--c:#8a5a86"><div class="rg-name">Containers</div><div class="rg-ac">Apptainer</div><div class="rg-ind">Docker</div></div>
<div class="rg-layer" style="--c:#464a52"><div class="rg-name">Scheduler</div><div class="rg-ac">Slurm</div><div class="rg-ind">Kubernetes</div></div>
<div class="rg-layer" style="--c:#2c7a8c"><div class="rg-name">Executor</div><div class="rg-ac">bash · array · HyperShell</div><div class="rg-ind">Ray · Celery</div></div>
</div>
</div>

<div class="rg-turn"><strong>Same handful of layers — only the brand names change.</strong> Most workflows need one or two. Not all of them.</div>

<div class="page-num">10 / 24</div>

</div>

<!--
[Slide 10 — Decompose the layers + THE TURN (rube-goldberg-stack · is-decomposed) · 9:00–10:15 · act: turn]

THE TURN. The Slide 9 monster re-rendered, sorted: the teeter straightens, the
heavy graphite goes light, every box gets a NAME, a COLOR, and its academic |
industry pair. The straightening IS the exhale — the move from Act-1 overwhelm
into Act-2 sense-making. SLOW DOWN here; this is where the gears shift from fast
(Act 1) to deliberate (Act 2). The layer list is scenery; THE TURN is the keeper.

Beats:
1. The turn: chaos → order. "It looks like chaos. It isn't." Slow down — this is
   the exhale that opens Act 2.
2. One beat per layer, fast, with the academic | industry pair.
3. Land it: every box on the last slide is one of these; most workflows need one
   or two — NOT all of them.

Example lines (illustrative):
- "It looks like chaos. It isn't. It's the same handful of layers every time —
  executor, scheduler, orchestration, data, containers, persistence,
  observability."
- "Slurm or Kubernetes. Make or Airflow. Apptainer or Docker. SAME LAYER — only
  the brand names change." [RECURRING LINE]
- "Most workflows need one or two of these. Not all of them."

Why the academic|industry parallel matters for THIS room: REUs touch Slurm and
Apptainer now, but many graduate into Kubernetes/Airflow/Docker/Datadog. Same
handful of layers; only the brand names change. (Shared-pain credibility can
echo here.) NUANCE for later: industry's always-on/SLA/multi-tenant reality
genuinely justifies heavier platforms; academic batch workflows usually don't —
don't cargo-cult across the boundary (that lands harder on Slide 11).

Transition → Slide 11 (Merchants): "And here's the trap that spans both worlds:
the tools that promise to TAME this complexity often just MOVE it."

Delivery: HOLDS THE TURN — shift gears from fast to deliberate. Color tints
reuse the deck vocabulary (Slides 7/8/Zoo: mauve=Containers, slate=Orchestration,
green=Data, graphite=Scheduler, indigo=Persistence, red=Observability) + teal
Executor foreshadowing Axis 1.

BUILD NOTE: same rube-goldberg-stack layout as Slide 9, with the .is-decomposed
modifier — straightens the teeter (transform:none), lightens the bricks (per-
layer --c tint via color-mix), and switches each brick to a 3-col grid (layer
name · academic · industry). HTML/CSS only — no inline SVG (MDC hazard).
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>“Merchants of complexity”</h1>
<div class="subhead">The pitch is always simplification. The bill is relocation.</div>

<div class="merchants">

<div class="mc-state">
<div class="mc-tangle">
<span class="mc-knot" style="top:0.3rem; left:1.1rem; --rot:-6deg">Airflow</span>
<span class="mc-knot" style="top:1.5rem; left:7rem; --rot:5deg">Kubernetes</span>
<span class="mc-knot" style="top:3rem; left:2.4rem; --rot:6deg">PostgreSQL</span>
<span class="mc-knot" style="top:4.3rem; left:7.4rem; --rot:-5deg">Docker</span>
<span class="mc-knot" style="top:5.6rem; left:0.9rem; --rot:3deg">Jinja DAG</span>
<span class="mc-knot" style="top:6.8rem; left:5.4rem; --rot:-6deg">Globus · S3</span>
</div>
<div class="mc-cap">complexity</div>
</div>

<div class="mc-pitch"><span class="mc-pitch-arrow">→</span><span class="mc-pitch-label">“just write a few snippets — we'll handle the rest”</span></div>

<div class="mc-state">
<div class="mc-platform">
<span class="mc-leak" style="top:0.2rem; left:0">+ ops</span>
<span class="mc-leak" style="top:0.2rem; right:0">+ metadata DB</span>
<span class="mc-leak" style="bottom:0.2rem; left:0.4rem">+ deploy</span>
<span class="mc-leak" style="bottom:0.2rem; right:0">+ version skew</span>
<div class="mc-box">platform that tames complexity</div>
</div>
<div class="mc-cap">you still own all of it</div>
</div>

</div>

<div class="mc-callout">This could have been a <strong>Makefile</strong> and a <strong>cron-job</strong>.</div>

<div class="page-num">11 / 24</div>

</div>

<!--
[Slide 11 — "Merchants of complexity" · recurring callback (purdue-content) · 10:15–11:30 · Act 2 · deliberate]

THE SKEPTICAL-BUYER BEAT. The deeper trap isn't tools that ADD complexity —
it's the ones that PROMISE TO TAME it and instead RELOCATE it into a new black
box with new problems. The two-state diagram is the keeper visual: left, the
tangle ("complexity"); right, the SAME tangle sealed inside one box ("platform
that tames complexity") — but new problems (ops, metadata DB, deploy, version
skew) leak out, and YOU STILL OWN ALL OF IT. Nothing was removed; it just moved.

LIGHTENED this session per OUTLINE edit #7: the biggest tone risk ("old man
yells at cloud") is best defused by HUMOR + SHARED PAIN, not by stacking
counterweight bullets. The old multi-bullet "anti-grumpy guardrail" is CUT;
the $200M observability line is a THROWAWAY eye-roll, not a worked example.
The shared-pain framing from the Zoo (Slide 6) already de-risked this — lean
on it. Still NOT anti-tool — it's anti-REFLEXIVE-tool (I build tools too;
HyperShell is five slides away).

Beats:
1. Name the move: the pitch is always SIMPLIFICATION — "just write a few Python
   snippets," "let the platform handle it."
2. The reality: you didn't remove complexity, you RELOCATED it — now you own a
   scheduler, a metadata DB, a deploy, a version-skew problem. The actual work
   is still the five lines it was.
3. The anchor lament (the keeper line): "This could have been a Makefile and a cron-job!"
4. The throwaway (one eye-roll, then MOVE): you can learn the exit code of a
   nightly job with `2>&1` and a cron email — or pay a seven-figure SaaS bill
   for the same fact. Demoted to a throwaway, NOT a centerpiece.
5. The nuance (the substantive keeper): industry's always-on / SLA / multi-
   tenant reality genuinely justifies heavier platforms; our work is bursty,
   batch, finite. Don't cargo-cult across the boundary.

Example lines (illustrative):
- "The pitch is always the same: 'just write a few Python snippets and we'll
  handle the rest.' And then you own a scheduler, a database, a deployment, and
  a version-skew problem — and the actual work is still the five lines it was."
- "This could have been a Makefile and a cron-job!" [RECURRING LINE — reprised
  light/funny in the Slide 22 close]
- "You can learn the exit code of a nightly job with `2>&1` and a cron email —
  or pay a seven-figure observability bill for the same fact. (eye-roll, move on.)"
- "Industry has always-on services and SLAs — those platforms earn their keep
  THERE. Our work is bursty and finite. Don't import their stack onto our problem."

RECURRING LINES that must fire here: "Merchants of complexity." (the title) ·
"This could have been a Makefile and a cron-job!" (the gold callout).

Transition → Slide 12 (Two axes): "Here's the tool I'll give you to be a
skeptical buyer — a map."

Delivery: KEEP IT FUNNY AND WARM, not bitter (tone-drift antidote). The shared-
pain framing from the Zoo is the antidote; the $200M line is a throwaway, not a
centerpiece. If you feel yourself getting cranky, NAME A TOOL YOU LOVE and why
it earned its keep. Act-2 pace — deliberate, but this beat is rhetoric + a
laugh, not a lecture.

BUILD NOTE: two-state diagram on .purdue-content (HTML/CSS only — no inline SVG,
MDC hazard). LEFT .mc-tangle = overlapping graphite chips (position + --rot
inline), echoing the Slide 9 stack scattered. RIGHT .mc-platform = the same
tangle sealed in one .mc-box with .mc-leak chips (observability-red) pinned to
the corners. The gold .mc-callout is the keeper line.
-->

---

<div class="two-axis-ladder">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Two axes, not one ladder</h1>
<div class="subhead">Two questions, not one. Most workflows only ever climb one of them.</div>

<div class="ta-stage">

<div class="ta-axis axis-1" style="--c:#2c7a8c">
<div class="ta-head"><span class="ta-kicker">Axis 1</span><span class="ta-name">Executor / scale</span><span class="ta-q">“How do I run <em>many</em> tasks?”</span></div>
<div class="ta-track"><span class="ta-rung">bash loop</span><span class="ta-step">→</span><span class="ta-rung">xargs&nbsp;-P</span><span class="ta-step">→</span><span class="ta-rung">Slurm array</span><span class="ta-step">→</span><span class="ta-rung">HyperShell</span><span class="ta-more">more scale →</span></div>
</div>

<div class="ta-axis axis-2" style="--c:#2f567f">
<div class="ta-head"><span class="ta-kicker">Axis 2</span><span class="ta-name">Orchestration / DSL</span><span class="ta-q">“How do I <em>relate</em> tasks?”</span></div>
<div class="ta-track"><span class="ta-rung">GNU Make</span><span class="ta-step">→</span><span class="ta-rung">Nextflow</span><span class="ta-more">more structure →</span></div>
</div>

<span class="ta-ghost" style="top:50%; left:24%; --rot:-6deg">Ray</span>
<span class="ta-ghost" style="top:30%; left:86%; --rot:5deg">Airflow</span>
<span class="ta-ghost" style="top:60%; left:40%; --rot:4deg">Snakemake</span>
<span class="ta-ghost" style="top:52%; left:84%; --rot:-5deg">Dask</span>
<span class="ta-ghost" style="top:64%; left:64%; --rot:6deg">Parsl</span>

</div>

<div class="ta-foot">Learn the two questions and you can place <em>any</em> tool on the wall — even one I've never heard of.</div>

<div class="page-num">12 / 24</div>

</div>

<!--
[Slide 12 — Two axes, not one ladder · THE FRAMEWORK REVEAL (two-axis-ladder, preview) · 11:30–12:15 · must-not-skip · [BREATH] · Act-2 SLOW]

THE LOAD-BEARING IDEA — the single most important intellectual contribution of
the talk, and the fix to last year's flat "zoo" tool list. Workflow tools live
on TWO different axes, answering two different questions. Everything technical
from here hangs on this. This is the slide everything else depends on.

REVEAL the two axes, then **[BREATH]** — give the "aha" a beat to register.
Don't rush past it. Act-2 pace: SLOW.

Beats:
1. Reveal the two axes. [BREATH] — let it land.
2. Axis 1 = executor/scale ("how do I run MANY tasks?"). Axis 2 =
   orchestration/DSL ("how do I RELATE tasks?"). Different questions, different
   tools.
3. The correction: these aren't ONE ladder — last year I made it sound like one
   big ladder. It isn't. MOST workflows only ever need ONE of these axes.
4. Honest scope: I'll climb a NARROW slice of each — the tools I actually watch
   people use on our HPC. The greyed names (Ray, Airflow, Snakemake, Dask,
   Parsl) are the rest of the field I'm NOT climbing — point at them once.

Example lines (illustrative):
- "There are really only two questions. One: how do I run MANY tasks? Two: how
  do I express RELATIONSHIPS between tasks? Different questions, different tools."
- "Most workflows only ever need one of these axes. Last year I made it sound
  like one big ladder. It isn't."
- "I'm going to climb a narrow slice of each — the tools I actually watch people
  use here. Learn the two questions and you can place ANY tool on the wall, even
  one I've never heard of. THE MAP OUTLASTS THE TOOLS." [RECURRING LINE]

RECURRING LINES that must fire here:
- "Which axis are you on?" — the felt question this whole map exists to answer
  (reprised on Slide 19). Say it out loud after the reveal.
- "The map outlasts the tools." — the honest-scoping keeper (reprised Slides 16,
  18). The on-slide foot line is its rendered paraphrase; say the line verbatim.

Transition → Slide 13 (the bash loop): "Let's climb Axis 1 — my slice of it —
and stop the moment it earns its keep."

Delivery: MUST-NOT-SKIP. [BREATH] slide — kept airy on purpose; the diagram +
two short lines are the whole slide. The pause after the reveal is the point;
this is where the core idea registers. SLOW.

BUILD NOTE: two-axis-ladder custom layout, PREVIEW form (content chrome on the
paper ground). Two clearly-separated horizontal axis tracks pushed far apart
(flex space-between) so "two axes, not one" reads instantly; per-axis tint via
inline --c (teal executor / slate orchestration — the Slide 10 vocabulary,
foreshadowing Axis 1). Faint greyed `.ta-ghost` tool names float in the field
(Ray/Airflow near the boundary; Snakemake/Dask/Parsl near orchestration) to
show the rungs are a CHOSEN SUBSET, not the whole field. HTML/CSS only — no
inline SVG (MDC hazard). Slide 19 reuses this layout with the .is-full
gradient (Phase 5).
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>The humblest workflow: a loop</h1>
<div class="subhead">For a few dozen independent tasks, this is the right answer — full stop.</div>

<div class="axis-tag" style="--c:#2c7a8c"><span class="at-label">Axis 1 · Executor / scale</span><span class="at-dots"><span class="at-dot is-on"></span><span class="at-dot"></span><span class="at-dot"></span><span class="at-dot"></span></span><span class="at-rung">the bash loop</span></div>

<div class="code-terminal">
<div class="ct-bar"><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-title">bash</span></div>
<div class="ct-body">
<div class="ct-line"><span class="ct-prompt">$</span>for s in samples/*.fastq; do</div>
<div class="ct-line"><span class="ct-cont">&gt;</span>    ./analyze.sh "$s" &gt; "results/$(basename "$s").out"</div>
<div class="ct-line"><span class="ct-cont">&gt;</span>done</div>
</div>
</div>

<div class="climb-cue">It holds until you want — say — <strong>8 at a time</strong> without melting your laptop. Then you're hand-rolling a job pool.</div>

<div class="page-num">13 / 24</div>

</div>

<!--
[Slide 13 — Axis 1 · the bash loop · THE FLOOR (purdue-content · terminal aesthetic) · 12:15–13:00 · Act-2 · SCENERY · fast]

THE FIRST RUNG and the start of the executor climb. The snippet is SCENERY —
gesture at it, do NOT read it. The keeper is the HUMILITY, not the syntax: for
a few dozen independent tasks a shell loop is THE CORRECT ANSWER — repeatable,
legible, version-controllable. Start here. Often, stay here.

>> SCENERY-RULE BANNER (Slides 13–18): every snippet from here to Slide 18 is
   scenery, not a lesson. It just has to look REAL and look like it's getting
   TALLER. The ideas BETWEEN the snippets get the air; the snippets fly by.

Beats:
1. "The humblest workflow: a loop." Gesture at it — don't read it.
2. For a few dozen tasks, this is the right answer. Say it with CONVICTION.
3. The wall (the cue to climb): real throttling — N-at-a-time — means
   hand-rolling a job pool; and there's no failure tracking at scale. Fake
   parallelism with `&`/`wait` only gets you so far.

Example lines (illustrative):
- "You don't need to read this. It's a loop. For a few dozen tasks, it's the
  right answer — full stop."
- "It breaks the moment you want, say, eight at a time without melting your
  laptop. Now you're writing a job pool by hand."

The axis tag (Axis 1 · Executor/scale, rung ●○○○) anchors us on the Slide 12
map: we're climbing Axis 1, and this is the floor. The 4-dot ratchet fills one
more dot on each of Slides 14–16 — the visual form of the recurring arc line
"EACH RUNG ADDS ONE CAPABILITY" (which starts firing on Slide 14, the first
rung that adds something; rung 1 here is the baseline, no capability added yet).

Transition → Slide 14 (xargs): "Want it to actually run in parallel without
hand-rolling a job pool? One small step."

Delivery: SCENERY — fast. Don't linger on the syntax. The keeper is "for a few
dozen tasks this is correct" — the humility. Act-2 pace overall is deliberate,
but the snippet itself flies by.

BUILD NOTE: first consumer of the .code-terminal device (THEME §10) — a titled
terminal window (graphite bar + traffic dots + "bash" title) over a dark
graphite body with a gold $ prompt and a `>` continuation prompt, so it reads
as "typed at a shell." Maximally distinct from the .code-definition (authored
source) treatment coming on Slides 17–18. fastq through-line (domain-flavored
scenery reads as MORE real). HTML/CSS only — no fenced block, no inline SVG.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>One flag, real concurrency</h1>
<div class="subhead">Each rung adds exactly one capability: the loop gave you iteration — this adds bounded parallelism.</div>

<div class="axis-tag" style="--c:#2c7a8c"><span class="at-label">Axis 1 · Executor / scale</span><span class="at-dots"><span class="at-dot is-on"></span><span class="at-dot is-on"></span><span class="at-dot"></span><span class="at-dot"></span></span><span class="at-rung">xargs -P</span></div>

<div class="code-terminal">
<div class="ct-bar"><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-title">bash</span></div>
<div class="ct-body">
<div class="ct-line"><span class="ct-prompt">$</span>ls samples/*.fastq | xargs -P 8 -I{} &#92;</div>
<div class="ct-line"><span class="ct-cont">&gt;</span>    sh -c './analyze.sh "$1" &gt; "results/$(basename "$1").out"' _ {}</div>
</div>
</div>

<div class="term-aside">cf. ParaFly (a failure log) · GNU Parallel (retries) — each adds one thing, all still one node.</div>

<div class="climb-cue">Real concurrency — but it all tops out at <strong>one node</strong>. The cluster is right there, and you can't reach it.</div>

<div class="page-num">14 / 24</div>

</div>

<!--
[Slide 14 — Axis 1 · xargs (the first taming) (purdue-content · terminal aesthetic) · 13:00–13:45 · Act-2 · SCENERY · compressible]

THE FIRST RUNG THAT EARNS ITS KEEP. `xargs -P` gives real node-local
parallelism with throttling — for free, with a tool you already have. The
concern was "run many at once without DDoS-ing my own laptop"; this answers it.
The snippet is SCENERY — gesture at `-P`; the dense quoting does NOT need to be
legible (nobody's reading it). The keeper is the RATCHET, not the syntax.

RECURRING LINE fires here: "EACH RUNG ADDS ONE CAPABILITY." This is where the
feature-ratchet through-line starts: the loop gave ITERATION; xargs adds
BOUNDED PARALLELISM. Exactly one new capability. The axis-tag ratchet ticks to
●●○○ to show it visually.

Beats:
1. "One flag, real concurrency." Gesture at `-P`; don't parse the quoting.
2. The ratchet line: each rung adds exactly one missing capability. [RECURRING]
3. (Optional, fast) the niche exists — ParaFly (failure log), GNU Parallel
   (retries) — name a couple, don't enumerate. All single-node.
4. The wall: still ONE NODE; the cluster is right there and you can't reach it.

Example lines (illustrative):
- "Same loop — one flag, and now it runs eight at a time. You'll never read this
  on a slide and that's fine."
- "There's a whole little niche here — ParaFly, GNU Parallel — each adding one
  thing: a failure log, retries. But they all stop at one node."

Transition → Slide 15 (Slurm array): "Bounded parallelism on one node — now I
want the WHOLE CLUSTER. Hand it to the scheduler."

Delivery: SCENERY + COMPRESSIBLE. If time slips, collapse to one sentence —
"xargs -P parallelizes the loop; GNU Parallel adds retries" — and jump straight
to Slurm. The single-node ceiling is the must-plant wall.

BUILD NOTE: reuses the .code-terminal device + .axis-tag (ratchet → ●●○○) +
.climb-cue from Slide 13; same fastq through-line. The niche callout is the
small muted .term-aside (per OUTLINE's "tiny grey margin note — cf. ParaFly,
GNU Parallel"). Trailing line-continuation backslash written as &#92; so MDC
doesn't read `\</div>` as an escaped `<`. HTML/CSS only.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Hand it to the scheduler</h1>
<div class="subhead">The next rung: Slurm fans the same work across the whole cluster — placement, queuing, requeue, for free.</div>

<div class="axis-tag" style="--c:#2c7a8c"><span class="at-label">Axis 1 · Executor / scale</span><span class="at-dots"><span class="at-dot is-on"></span><span class="at-dot is-on"></span><span class="at-dot is-on"></span><span class="at-dot"></span></span><span class="at-rung">Slurm job array</span></div>

<div class="code-terminal">
<div class="ct-bar"><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-title">bash</span></div>
<div class="ct-body">
<div class="ct-line"><span class="ct-prompt">$</span>cat job.sh</div>
<div class="ct-line"><span class="ct-dim">#!/bin/bash</span></div>
<div class="ct-line"><span class="ct-dim">#SBATCH --array=0-999</span></div>
<div class="ct-line"><span class="ct-dim">#SBATCH --cpus-per-task=4</span></div>
<div class="ct-line">s=$(ls samples/*.fastq | sed -n "$((SLURM_ARRAY_TASK_ID+1))p")</div>
<div class="ct-line">./analyze.sh "$s" &gt; "results/$(basename "$s").out"</div>
</div>
</div>

<div class="climb-cue">But that's <strong>one scheduler decision per task</strong> — a million of them hammers the controller.</div>

<div class="page-num">15 / 24</div>

</div>

<!--
[Slide 15 — Axis 1 · Slurm job array (purdue-content · terminal aesthetic) · 13:45–14:45 · Act-2 · SCENERY · compressible]

THE NEXT RUNG. The capability xargs/GNU Parallel LACKED: multi-node fan-out.
Hand the same independent work to the scheduler and it spreads N copies — one
per array index — across the WHOLE cluster, with placement, queuing,
accounting, and requeue for free. Still PURE EXECUTION — no relationships
between tasks; we have not left Axis 1.

>> SCENERY (Slides 13–18): the #SBATCH header is texture for "now it's on the
   cluster." Gesture at it; don't read it. The keeper is the PLANTED WALL, not
   the SBATCH syntax.

RECURRING LINE (reprise): "EACH RUNG ADDS ONE CAPABILITY." The loop gave
iteration; xargs added bounded parallelism; THIS rung adds multi-node fan-out
across the cluster — exactly the thing the single-node tools couldn't reach.
The axis-tag ratchet ticks to ●●●○.

Beats:
1. "Hand it to Slurm: N copies, one per index, spread across nodes." Gesture
   at the array directive — don't parse the sed/index arithmetic.
2. It earns its keep for many tasks: scheduler placement, accounting, requeue.
3. Still NO relationships between tasks — pure execution. We're still on Axis 1.
4. Plant the wall: a job array is ONE SCHEDULER DECISION PER TASK. Arrays even
   have size ceilings (MaxArraySize). Fine for thousands; a million submissions
   hammer the central controller. "Hold that thought." → Slide 16.

Example lines (illustrative):
- "Same work — now the SCHEDULER fans it across the whole cluster: placement,
  queuing, requeue, all for free."
- "But notice: that's one scheduler decision per task. Fine for thousands. Push
  it to a million and you've got a problem that isn't your code."

Transition → Slide 16 (HyperShell): "Now push to a MILLION tasks — and you hit
a wall that isn't about your code at all. That's where HyperShell comes in."

Delivery: SCENERY + COMPRESSIBLE. If time slips, collapse to a verbal bridge
between xargs and HyperShell — "and a Slurm job array fans that across the
cluster; but one decision per task means a million tasks DDoS the controller"
— and move on. The planted controller-pressure wall is the must-keep; it is
the entire setup for Slide 16's pressure-release valve.

BUILD NOTE: reuses the .code-terminal device + .axis-tag (ratchet → ●●●○) +
.climb-cue from Slides 13/14; same fastq through-line. Rendered as `cat job.sh`
revealing the batch SCRIPT (shebang + #SBATCH header + body) so it reads as "now
it's a cluster job" — and the snippet is visibly TALLER than 13/14, reinforcing
the climb. The `sbatch job.sh` submission is the VERBAL hand-off gesture (beat 1
+ transition), kept off-slide so the climb-cue wall fits. New .ct-dim class dims
the shebang + #SBATCH comment/directive lines ("not a command I typed"). `>`
redirect as &gt;; the `*` glob, `$()`, `$((...))`, sed index arithmetic all
survive MDC inline (verified on Slides 13/14). HTML/CSS only.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>A pressure-release valve for the scheduler</h1>
<div class="subhead">At extreme scale the bottleneck isn't your code — it's the one daemon every user on the machine shares.</div>

<div class="axis-tag" style="--c:#2c7a8c"><span class="at-label">Axis 1 · Executor / scale</span><span class="at-dots"><span class="at-dot is-on"></span><span class="at-dot is-on"></span><span class="at-dot is-on"></span><span class="at-dot is-on"></span></span><span class="at-rung">HyperShell</span></div>

<div class="code-terminal">
<div class="ct-bar"><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-dot"></span><span class="ct-title">bash</span></div>
<div class="ct-body">
<div class="ct-line"><span class="ct-prompt">$</span>seq 1000000 | hsx -t 'echo {}' -N64 --ssh 'a[00-32].cluster'</div>
</div>
</div>

<div class="hs-feat"><span class="hsf-key">earned its keep · v2.8</span><span class="hsf-chip">autoscaling</span><span class="hsf-chip">persistence</span><span class="hsf-chip">resource-aware scheduling</span><span class="hsf-chip">monitoring</span></div>

<div class="hs-valve">
<div class="hv-lane hv-bad"><span class="hv-mark">✗</span><span>A million job-steps to Slurm is a self-inflicted DDoS on <strong>slurmctld</strong> — the daemon every user shares.</span></div>
<div class="hv-lane hv-good"><span class="hv-mark">✓</span><span>An executor grabs <strong>one allocation</strong> and meters them itself — the controller sees <strong>one job</strong>, not a million.</span></div>
<div class="hv-keep">It protects the <em>machine</em>, not just you. That's earning its keep.</div>
</div>

<div class="page-num">16 / 24</div>

</div>

<!--
[Slide 16 — Axis 1 · HyperShell + the pressure-release valve (purdue-content · terminal) · 14:45–16:15 · Act-2 · MUST-NOT-SKIP · mixed pace · ~120s]

THE TOP OF THE EXECUTOR CLIMB and the SINGLE BEST BEAT in the talk. This slide
holds BOTH scenery (the one-liner + feature strip — nobody must read them) AND
the must-land IDEA (the pressure-release valve). Do NOT let the feature strip
eat the punchline's air. Ratchet completes: ●●●● — the executor axis is done.

>> SCENERY (the snippet + chips): fast, gesture. >> IDEA (the valve): SLOW.

THE IDEA THAT MUST LAND (give it room): at extreme scale the bottleneck isn't
your code — it's SHARED INFRASTRUCTURE. A million job-steps is a self-inflicted
DDoS on slurmctld, the daemon every other user on the machine depends on. An
executor grabs ONE allocation and meters the tasks internally — the controller
sees one job, not a million. THAT is why it earns its keep: it protects the
MACHINE, not just you. "Earn its keep" stops being about your convenience and
becomes about the shared system. [RECURRING: "a pressure-release valve for the
scheduler" — it's the h1. "does it earn its keep?" — the hv-keep line.]

Beats:
1. Show the one-liner — SCENERY. "You don't need to read this — it's the xargs
   idea again, just bigger: a million tasks fanned across the whole cluster.
   `seq 1000000` — remember that wall from the last slide." Move.
2. SLOW DOWN. Land the pressure-release-valve idea (the slurmctld DDoS → one
   metered allocation). This is the must-land beat — give it air.
3. FULL DISCLOSURE it's MY tool — frame as PROOF, not apology: "GNU Parallel is
   wonderful but wasn't right for HPC; a job array DDoSes the controller at
   extreme counts. The concern was real and unmet, so the rung had to exist."
   This is the whole talk's anti-anti-tool proof (Slide 19 checklist in action).
4. The felt question — delivered VERBALLY (the on-slide foot was cut so the
   valve keeper fits cleanly): "Who's holding the wires now? At the loop, you
   were; up here, the framework is — and now you have to feed it." [RECURRING:
   "who's holding the wires?" — reprise; the PRIMARY firing is Slide 17b. Don't
   over-develop it here; it's a flavor.]
5. Honest boundary + wave at the neighbors: if a loop, xargs, or a Slurm array
   already does it, HyperShell is overkill TOO. Name a couple of neighbors and
   wave at the rest — GNU Parallel, ParaFly, TaskFarmer, Launcher, Ray/Dask/
   Parsl, and HTCondor as the HEAVYWEIGHT above (the next, heavier thing if you
   genuinely outgrow this). Move on.

Feature strip (v2.8 — accurate to the release notes, hypershell.readthedocs.io ·
`hs --help`): AUTOSCALING (elastic client pool — policy-driven grow/shrink,
staggered launch to thousands of nodes, scale to zero when idle) · PERSISTENCE
(SQLite/Postgres in-the-loop, default in v2.8 — task history, recovery,
automated retries across runs) · RESOURCE-AWARE SCHEDULING (per-task
cores/memory/walltime with client-side priority + backfilling — the v2.8
headline) · MONITORING (live CPU/memory telemetry per task & children via
`--monitor`, peak + time-series, resource-limit warnings). SCENERY — name one
or two, don't read them.

Example lines (illustrative):
- "At a million tasks the bottleneck isn't your code — it's the ONE scheduler
  daemon everyone on the machine shares. Submit a million job-steps and you've
  DDoS'd it. So the executor grabs ONE allocation and meters the tasks itself —
  the controller sees one job, not a million. That's not about your convenience.
  That's about protecting the machine."
- "Full disclosure: this is my tool. That's the point, not an apology — GNU
  Parallel is wonderful but wasn't right for HPC, so the rung had to exist."

Transition → Slide 17 (Axis 2 · Make): "That's pure EXECUTION — a million
UNRELATED tasks. None of it handles tasks that DEPEND on each other. For that we
change axes entirely." [The clean hand-off from Axis 1 to Axis 2.]

Delivery: MUST-NOT-SKIP; MIXED PACE. Snippet + feature strip are scenery (fast,
gesture); the slurmctld beat is the idea (slow, give it room). Don't let the
feature strip eat the punchline's air. ~120s.

BUILD NOTE: reuses .code-terminal (one-liner) + .axis-tag (ratchet → ●●●●, rung
"HyperShell") from the climb. The IDEA carries the visual weight via the new
.hs-valve two-lane contrast (red self-DDoS lane / teal metered-allocation lane +
gold earn-its-keep keeper); the v2.8 features are a COMPACT muted .hs-feat chip
strip so the box never dominates (OUTLINE risk #1). who-holds-the-wires is now
VERBAL only (the .hs-wires foot was cut so the valve keeper + box border fit;
it's a reprise here — primary firing is 17b). hsx one-liner verified
against the repo (cluster cmd; -t/--template, -N/--num-threads, --ssh nodelist);
`> task.out` redirect dropped so the line fits .code-terminal's `white-space:pre`
(no clip). `{}` survives MDC inline (as on Slide 14). HTML/CSS only — no SVG.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Make is all you need</h1>
<div class="subhead">Secretly a DAG engine. For a huge fraction of pipelines, the whole answer — <em>out of the box</em>.</div>

<div class="axis-tag" style="--c:#2f567f"><span class="at-label">Axis 2 · Orchestration / DSL</span><span class="at-dots"><span class="at-dot is-on"></span><span class="at-dot"></span></span><span class="at-rung">GNU Make</span></div>

<div class="code-definition">
<div class="cd-tab"><span class="cd-ic"></span><span class="cd-file">Makefile</span></div>
<div class="cd-body">
<div class="cd-line"><span class="cd-tgt">results/%.out</span>: <span class="cd-dep">samples/%.fastq</span></div>
<div class="cd-line">    ./analyze.sh <span class="cd-var">$&lt;</span> &gt; <span class="cd-var">$@</span></div>
<div class="cd-line"><span class="cd-tgt">all</span>: <span class="cd-fn">$(patsubst samples/%.fastq,results/%.out,$(wildcard samples/*.fastq))</span></div>
</div>
</div>

<div class="mk-reframe" v-click>
<div class="mk-shims"><span class="mk-key">Same Makefile, new lens — I can shim what people reach for Nextflow to get:</span><span class="mk-shim">containers · <code>$(RUN)</code></span><span class="mk-shim">cluster · <code>srun</code></span><span class="mk-shim">resume · atomic <code>mv</code></span><span class="mk-shim">modules · child-Makefiles</span></div>
<div class="mk-wires">Make isn't <em>incapable</em> — I can shim all of it. The real question was never <em>what Make can do.</em> It's <strong>who's holding the wires</strong> — you, or a framework you now have to feed?</div>
</div>

<div class="page-num">17 / 24</div>

</div>

<!--
[Slides 17 + 17b — Axis 2 · "Make is all you need" + the reverse (purdue-content · DEFINITION aesthetic) · 16:15–18:15 · Act-2 · 17b must-not-skip · mixed pace · ~120s]

ONE physical slide carries TWO beats. 17 = the provocation (clean state, before
the click). 17b = the reverse (the v-click reveals the reframe layer over the
SAME Makefile). 17b is NOT a new physical slide — the deck stays 24 physical
slides. The mechanic is OUTLINE's "literally reverse one slide": here it's a
single forward reveal so the room never has to watch me navigate backward.

>> SCENERY-RULE BANNER still in force: the Makefile is the OTHER code aesthetic
   (DEFINITION — something authored, not the terminal you RUN). Gesture at it;
   nobody reads it. The keepers are the provocation, the planted "out of the
   box," and the who's-holding-the-wires question — NOT the syntax.

This is the FLOOR of Axis 2. The axis tag flips to slate (#2f567f, the Slide 12
orchestration tint) with a 2-dot ratchet — Axis 2 has only two rungs (Make ●○ →
Nextflow ●●), the parallel to the executor climb's 4-dot ratchet.

── BEAT 17 (state 0 — clean, before the click) ──
1. "Make is secretly a DAG engine: targets, prerequisites, recipes. It already
   knows what depends on what and only rebuilds what changed." Gesture at the rule.
2. A Makefile *is* a reproducible pipeline — genuinely huge in data science for
   exactly this reason.
3. The provocation: before a bespoke engine, ask whether a Makefile does it.
   "For a huge fraction of pipelines, Make is all you need."
4. PLANT the words: "Out of the box it lacks containers and cluster execution —
   but hold on to those words, 'out of the box.'" [Then CLICK → 17b.]

── BEAT 17b (state 1 — after the click) · MUST-NOT-SKIP ──
1. "Same Makefile — new lens." (The reveal IS the reverse.)
2. The four shims, BRISK (scenery — wave, don't teach): containers? one variable
   `RUN = apptainer exec …`, prefix each recipe. Cluster? `RUN = srun …`. Resume?
   Make already does it — plus a one-line atomic `mv` so a half-written file
   never lies to you. Modules? child-Makefiles in Git.
3. THE KEEPER — say it SLOWLY: "So Make is NOT incapable — I can shim all of
   this. Nextflow isn't right because Make *can't*. It's a different trade: it
   takes the patterns I'd own by hand and makes them the framework's job. The
   question is WHO'S HOLDING THE WIRES — you, or a framework you now have to
   feed?" [RECURRING: "who's holding the wires?" — this is its PRIMARY firing
   (it's the on-slide .mk-wires keeper); reprised verbally on Slide 16's climb
   and again on the Slide 19 ladder gradient. Control, not capability — a FELT
   question, not a second formal axis.]

Example lines (illustrative):
- "Containers? One variable: RUN = apptainer exec …, prefix each recipe. Cluster?
  RUN = srun …. Resume? Make already does it — plus a one-line atomic mv. Modules?
  child-Makefiles in Git."
- "Make isn't incapable — I can shim all of this. The real difference isn't what
  Make can do. It's who's holding the wires."

Transition → Slide 18 (Nextflow): "That's the case FOR doing it yourself. Here's
why a whole community decided to stop."

Delivery: 17b is MUST-NOT-SKIP. Mixed pace — the Makefile + the four shims are
scenery (brisk); the who's-holding-the-wires line is the keeper (slow). ~120s
for both beats together.

BUILD NOTE: first consumer of the .code-definition device (THEME §10) — a LIGHT
authored-source card with an editor filename TAB ("Makefile") + syntax tints
drawn from the deck's layer vocabulary (slate target = orchestration, green
prerequisite = data, gold automatic-vars $< $@), deliberately the inverse of the
DARK .code-terminal window (Slides 13–16) so "authored vs. run" reads instantly.
The 17b reframe (.mk-reframe) is gated behind a single `v-click` (the Slide 2
precedent; Slidev exports the final composited frame, so the PDF shows the
reframe). Make snippet is the OUTLINE §4 Makefile (the blank separator line dropped so the
keeper clears the bottom rule; .cd-body sized a shade under the terminal so the
long patsubst line stays on one row); `$<`/`>` escaped as `$&lt;`/`&gt;` so MDC
doesn't read them as tags ($@, $(...), %, * survive inline as on Slides 13–16). REVIEW NOTE for Geoffrey: the 17→17b reveal is a forward
v-click rather than a literal flip-back; the four shim annotations sit in a chip
row (not margin call-outs on the recipe line). Say if you'd prefer static
annotations or a true reverse-navigation. HTML/CSS only — no inline SVG.
-->

---

<div class="purdue-content">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Nextflow earns its keep at human scale</h1>
<div class="subhead">Everything you'd shim by hand — now the framework's job.</div>

<div class="axis-tag" style="--c:#2f567f"><span class="at-label">Axis 2 · Orchestration / DSL</span><span class="at-dots"><span class="at-dot is-on"></span><span class="at-dot is-on"></span></span><span class="at-rung">Nextflow</span></div>

<div class="code-definition is-dense">
<div class="cd-tab"><span class="cd-ic"></span><span class="cd-file">main.nf</span></div>
<div class="cd-body">
<div class="cd-line"><span class="cd-kw">process</span> <span class="cd-tgt">analyze</span> {</div>
<div class="cd-line">    <span class="cd-kw">container</span> <span class="cd-str">'biocontainers/tool:1.0'</span></div>
<div class="cd-line">    <span class="cd-kw">input:</span>  <span class="cd-fn">path</span> sample</div>
<div class="cd-line">    <span class="cd-kw">output:</span> <span class="cd-fn">path</span> <span class="cd-str">"<span class="cd-var">${sample.baseName}</span>.out"</span></div>
<div class="cd-line">    <span class="cd-kw">script:</span> <span class="cd-str">"./analyze.sh <span class="cd-var">${sample}</span> &gt; <span class="cd-var">${sample.baseName}</span>.out"</span></div>
<div class="cd-line">}</div>
<div class="cd-line"><span class="cd-kw">workflow</span> { <span class="cd-tgt">analyze</span>(<span class="cd-fn">Channel.fromPath</span>(<span class="cd-str">'samples/*.fastq'</span>)) }</div>
</div>
</div>

<div class="nf-feat"><span class="nff-key">the framework's job</span><span class="nff-chip">containers</span><span class="nff-chip">dynamic DAG</span><span class="nff-chip">-resume</span><span class="nff-chip">executor portability</span><span class="nff-chip">nf-core</span></div>

<div class="nf-keep">The <strong>packaging-index move</strong> — Python ships a package index; nf-core ships pipelines. Offload the complexity to a <em>shared community problem</em>, and you scale <strong>people</strong>, not just tasks.</div>

<div class="nf-foot">I climb Nextflow because it's what I watch people reach for here — but <em>the map outlasts the tools.</em></div>

<div class="page-num">18 / 24</div>

</div>

<!--
[Slide 18 — Axis 2 · Nextflow as the justified endpoint (purdue-content · DEFINITION aesthetic) · 18:15–19:30 · Act-2 · MUST-NOT-SKIP · mixed pace · ~75s]

THE TOP of the orchestration axis (ratchet ●●). Like Slide 16 at the top of
Axis 1, this slide holds BOTH scenery (the main.nf snippet + the 5-feature
strip) AND a must-land IDEA (human scalability = the packaging-index move). The
IDEA carries the visual weight via the gold .nf-keep keeper; don't let the
snippet eat its air.

>> SCENERY-RULE BANNER still in force: the main.nf snippet is the DEFINITION
   aesthetic (authored, not run) — rendered DENSE on purpose so "the top of the
   axis = a lot of machinery" reads as TEXTURE. Gesture; nobody reads it.

THE IDEA THAT MUST LAND (give it room): the point is NOT that Make can't —
Slide 17b just showed it can shim all of it. It's that Nextflow makes those
patterns the FRAMEWORK'S job, and that delegation buys *human* scalability. This
is the PACKAGING-INDEX move: Python/Node/Rust ship a package index; they offload
complexity to a *shared community problem*. Nextflow's forced, uniform
plug-points + nf-core are the same move for pipelines — a shared problem solved
once, for everyone. That's what "earns its keep" means up here: not your
convenience, but scaling PEOPLE. [RECURRING: "earn its keep" — it's the h1.
"the map outlasts the tools" — the .nf-foot line, said verbatim.]

Beats:
1. Reframe (NOT "Make can't"): five capabilities, now the framework's job —
   containers, a *dynamic* dataflow DAG (the one thing Make can't do cleanly:
   data-driven topology, not a fixed target list), `-resume`, executor
   portability, nf-core. Gesture at the snippet + strip; don't teach them.
2. THE KEEPER — give it room: human scalability = the packaging-index move.
   "You don't reinvent a build system to use Python; you don't reinvent a
   pipeline to use nf-core. A shared problem, solved once, for everyone."
3. Honest cost (notes, not on-slide): it's a LOT of machinery and it RELOCATES
   control — the framework now holds the wires (the Slide 17b callback). Worth
   it when the problem is bigger than one person's conventions. If it isn't,
   Slide 17 was your answer — climb back down without guilt.
4. OWN THE BIAS: I climb Nextflow because it's what I most watch researchers
   reach for on our HPC — the view from the trenches. Snakemake, CWL/Cromwell,
   Parsl, Luigi, Airflow are all valid; place each on the orchestration axis and
   apply the same checklist. THE MAP OUTLASTS THE TOOLS. [RECURRING]

Example lines (illustrative):
- "Everything 17b shimmed by hand, Nextflow makes the framework's job — plus one
  thing Make can't do cleanly: a *dynamic* dataflow graph driven by the data."
- "This is the packaging-index move. Python doesn't make you reinvent a build
  system; nf-core doesn't make you reinvent a pipeline. That's *human*
  scalability — a shared problem solved once for everyone."
- "It's a lot of machinery, and it hands control to the framework. Worth it when
  the problem is bigger than your own conventions. If it isn't — back there, the
  Makefile was your answer."

Transition → Slide 19 (the decision ladder): "So: two axes, several rungs each.
Here's how to decide." [The clean hand-off into the photograph-slide.]

Delivery: MUST-NOT-SKIP. Mixed pace — snippet + feature strip are scenery
(brisk); the human-scalability / packaging argument is the keeper (slow, give it
room). ~75s.

BUILD NOTE: reuses the .code-definition device (THEME §10) from Slide 17 with the
NEW .is-dense modifier (smaller font + tighter leading) so the 7-line main.nf
reads as dense machinery and stays inside the vertical budget (the Slide 17
lesson). axis-tag → slate Axis-2 ratchet ●● ("Nextflow"), completing the
orchestration climb (Make ●○ → Nextflow ●●). Groovy syntax reuses the deck's
definition tints: process/workflow/directives = mauve .cd-kw, process name =
slate .cd-tgt (parallel to a Make target), strings = green .cd-str, ${...}
interpolation = gold .cd-var (parallel to the Makefile's gold $< $@). main.nf is
the OUTLINE §4 snippet verbatim; only the script-string redirect `>` is escaped
as `&gt;` ({} / ${} / * / quotes survive MDC inline, as on Slides 14/16). The
IDEA carries the weight via .nf-keep (gold-rule keeper, the sibling of Slide
17's .mk-wires — converted from a padded box to a top-rule statement in review so
the .nf-foot map-outlasts line cleared the bottom); the 5 features are the muted
slate .nf-feat strip (sibling of Slide 16's teal .hs-feat); .nf-foot fires the
map-outlasts line in one compact muted row (the specific tool list lives in
notes). HTML/CSS only — no inline SVG.
-->

---

<div class="two-axis-ladder is-full">

<img class="rcac-mark" src="/images/rcac/rcac-h.svg" alt="Rosen Center for Advanced Computing" />

<h1>Two axes. A few rungs. The whole map.</h1>
<div class="subhead">Which axis are you on — and how far up?</div>

<div class="taf-grid">

<div class="taf-ladder">

<div class="ta-axis axis-1" style="--c:#2c7a8c">
<div class="ta-head"><span class="ta-kicker">Axis 1</span><span class="ta-name">Executor / scale</span><span class="ta-q">“How do I run <em>many</em> tasks?”</span></div>
<div class="ta-track"><span class="ta-rung">bash loop</span><span class="ta-step">→</span><span class="ta-rung">xargs&nbsp;-P</span><span class="ta-step">→</span><span class="ta-rung">Slurm array</span><span class="ta-step">→</span><span class="ta-rung">HyperShell</span><span class="ta-beyond"><span class="ta-step is-ghost">→</span><span class="ta-rung is-ghost">HTCondor</span></span></div>
<div class="taf-grad"><span class="tg-end tg-l">you hold the wires</span><span class="tg-end tg-r">a framework holds them</span></div>
</div>

<div class="ta-axis axis-2" style="--c:#2f567f">
<div class="ta-head"><span class="ta-kicker">Axis 2</span><span class="ta-name">Orchestration / DSL</span><span class="ta-q">“How do I <em>relate</em> tasks?”</span></div>
<div class="ta-track"><span class="ta-rung">GNU Make</span><span class="ta-step">→</span><span class="ta-rung">Nextflow</span></div>
<div class="taf-grad"><span class="tg-end tg-l">you hold the wires</span><span class="tg-end tg-r">a framework holds them</span></div>
</div>

</div>

<div class="taf-checks">

<div class="taf-chk axis-1" style="--c:#2c7a8c">
<div class="tc-head">Climb Axis 1 when…</div>
<ul>
<li>a <em>real</em> scale wall — not just 8 tasks?</li>
<li>…or you'd DDoS the shared scheduler?</li>
</ul>
</div>

<div class="taf-chk axis-2" style="--c:#2f567f">
<div class="tc-head">Climb Axis 2 when…</div>
<ul>
<li><em>real</em> dependencies — not faked by hand?</li>
<li>you need reproducibility · resume · portability?</li>
</ul>
</div>

</div>

</div>

<div class="taf-take">Climb only if it'll <em>earn its keep</em> — is this a <strong>shared</strong> problem now, not a personal one? No → you're done. Yes → climb without guilt.</div>

<div class="page-num">19 / 24</div>

</div>

<!--
[Slide 19 — The decision ladder + checklist (two-axis-ladder · FULL form) · 19:30–21:15 · Act-2 · MUST-NOT-SKIP · [BREATH] · SLOWEST beat in Act 2 · ~105s]

THE PHOTOGRAPH-SLIDE. The single portable artifact — the thing undergrads carry
home. It pulls the whole climb into ONE picture: which axis / how far up. This
is the payoff of the entire talk; the fix to last year's flat tool list.

>> [BREATH]. Reveal the full map, then STOP. Let the room photograph it. Do not
   talk over the silence. This is the slowest beat in Act 2.

THE GRADIENT IS A VISUAL, NOT A FRAMEWORK. The left→right colour wash under each
axis is the "you own it → framework owns it" control gradient. Say the felt
question ONCE — "who's holding the wires?" — and let the picture carry it. Do
NOT lecture a second formal dimension; the old multi-clause "meta-test" is
softened to one line on purpose.

Beats:
1. Show both axes + all rungs together. [BREATH] — let it land, let them shoot it.
2. Point at the gradient: left, you hold the wires; right, the framework does.
   ONE felt sentence. "Moving right trades your cleverness for a shared solution."
3. The checklist, grouped by axis so the two questions stay distinct:
   - Axis 1 (executor): am I hitting a REAL scale wall — or about to DDoS the
     shared scheduler? [Slide 16 pressure-release-valve callback.]
   - Axis 2 (orchestration): do I have REAL (esp. dynamic) dependencies I'm
     faking by hand? do I need reproducibility / resume / portability?
4. LAND BOTH DIRECTIONS so it isn't purely deflationary: no → stop, you're done;
   yes → climb without guilt. That's the rung earning its keep.

Example lines (illustrative):
- "This is the slide to photograph. Two axes, a few rungs each — that's the
  whole map."
- "Underneath runs one gradient: on the left you hold the wires; on the right a
  framework does. Moving right trades your cleverness for a shared solution."
- "Climb a rung only if you can say yes: a real scale wall — or about to DDoS the
  shared scheduler? Real dependencies I'm faking by hand? If the answer's no,
  you're done — stop climbing. When it's finally yes, climb without guilt."

RECURRING LINES that must fire here (verbatim):
- "Which axis are you on?" — the subhead renders it; say it on the reveal.
- "Does it earn its keep?" — the takeaway renders "earn its keep"; this is the
  thesis line, reprised from Slide 5. The whole checklist is this question.
- "Each rung adds one capability." — reprised from Slides 13–16; the rung tracks
  carry it visually (loop→xargs→Slurm→HyperShell each added ONE capability).
- "Who's holding the wires?" — the gradient end-labels render it; said once,
  verbally, on beat 2. The FELT question, not a 2nd framework (primary firing
  was Slide 17b; this is the ladder-gradient reprise).
- "The map outlasts the tools." — HTCondor sits greyed past HyperShell as the
  heavyweight above; the map places even the rungs I don't climb.

Transition → Slide 20A (data): "One more thing the tools won't save you from —
the data."

Delivery: MUST-NOT-SKIP. The SLOWEST beat in Act 2 (~105s). The gradient is a
VISUAL — say the felt question once, let the picture do the rest. Give the room
real time to photograph it. Resist re-explaining; the slide IS the explanation.

BUILD NOTE: two-axis-ladder custom layout, FULL form (the .is-full modifier;
the Slide 12 preview's absolute .ta-stage is replaced by .taf-grid). LEFT =
the complete ladder, both axes reusing the Slide 12 rung grammar (compacted so
Axis-1's 5 rungs fit one line) so the photograph MATCHES what the room saw on
Slide 12; HTCondor is the greyed .is-ghost rung past HyperShell (heavyweight
above). Under each track, the .taf-grad colour wash is the load-bearing visual:
left = craft/gold "you", right = the axis tint "framework", with muted end-
labels = "who's holding the wires?" as a picture. RIGHT = the checklist grouped
under the two axis headings (.taf-chk, axis-tinted ✓ bullets); the Axis-1 list
carries the Slide 16 DDoS callback. The single boxed takeaway (.taf-take, gold
left-rule keeper, sibling of Slide 18's .nf-keep) fires "earn its keep" on-slide
AND lands both directions (no → done; yes → climb without guilt). HTML/CSS only
— no inline SVG (MDC hazard); &nbsp; keeps "xargs -P" intact; em/strong survive
inline. This is the slide that completes the two-axis-ladder layout.
-->
