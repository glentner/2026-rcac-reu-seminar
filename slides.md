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
# BUILD IN PROGRESS (Phase 4). Slides 1–12 below are REAL content per
# OUTLINE.md §4 (Title; "Perfection" cold open; About RCAC; About Me; Thesis;
# the Zoo; capability vs. capacity; why the layers exist; anatomy; decompose +
# the turn; merchants of complexity; two axes, not one ladder). The Phase-1
# two-axis-ladder smoke-test stub has been replaced by the real Slide 12
# (preview form). Slides 13–23 land in Phases 4–6. Content source of truth:
# OUTLINE.md; build order: ROADMAP.md.
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
