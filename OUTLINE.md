# REU Summer Seminar 2026 — Talk Outline

> **Venue:** Summer REU Seminar Series · Envision Center, Purdue University, West Lafayette, IN &nbsp;|&nbsp; **Slot:** 45 minutes &nbsp;|&nbsp; **Target:** ~30 minutes (leave ~10–15 for Q&A) &nbsp;|&nbsp; **Ceiling:** 40 minutes
> **Speaker:** Geoffrey Lentner, Principal AI Scientist, Rosen Center for Advanced Computing (RCAC), Purdue University
> **Working title:** *Workflow Engineering, Data Management, and Advanced Automation — or, How Not to Build a Rube Goldberg Machine*
> A refinement of last year's REU seminar (*Data Management and Workflow Templates*). That talk cataloged the zoo; this one gives the zoo a spine. Primary audience is REU undergraduates; RC professionals get the in-jokes and asides.

> **How to read this document.** This is the **build + delivery spec**. Each
> slide is broken into **Context notes** (the *why* / the journey / what the
> slide is really for — richness lives here), **Speaker beats** (the ordered
> on-stage moves), and **Example lines** (illustrative sentences I *could* say —
> *not* a script), plus **Visual / Transition / Delivery note**. The talk is
> *not* a tutorial: most talking points will never be said verbatim. They exist
> as context. The meta-journey (why the talk is shaped this way, the review and
> decisions behind it) lives in `REVIEW.md`, not here.

> **The one-line intent.** *Impress the room with the zoo, then walk it back to
> a meta-point: it's all details — what matters is **systems-level thinking
> about the real problems we solve.*** This is an **inspiration** talk, not an
> instruction talk. Nobody needs to grok a snippet; the snippets are scenery.

## 1) One-paragraph high-level summary

This talk is about *getting the job done at scale* — operationalizing data
analysis and research workflows all the way **from Jupyter to scale-out
automation on supercomputers.** Task-based, data-centric throughput computing
is a fast-growing slice of research computing, and the tooling around it has
exploded into a zoo: schedulers, executors, DAG engines, templating DSLs,
containers, databases, observability platforms. This is craft I genuinely
*love* — there is little better than getting a stack right and watching the
whole thing *purr* like a rebuilt hot-rod roaring to life. But that same
satisfaction is a temptation: complexity can get away from you and quietly
erode both reliability and rationality. It is easy to look at the landscape
and conclude that real science requires assembling all of it. This talk argues
for judgment instead. We open by **jumping straight to the middle** — a
deliberately absurd over-engineered stack, the *"Perfection"* gag — to shock
the room with how baroque a workflow *can* get, *before* I've even introduced
myself. Then I step back: a quick *About RCAC* for any community visitors and
an *About Me* that frames my cross-cutting perspective at the **systems ·
science · software** triple-point — so the playfulness reads as an expert at
ease, and so the gag earns its introduction rather than the other way around.
Only then do I state the thesis plainly: **start simple; add complexity only
where it earns its keep.** The posture is not anti-complexity or anti-tool —
I've been building and debugging workflows since before Kubernetes or Azure
existed, and I built HyperShell myself because GNU Parallel wasn't right for HPC
— it's about *maturing with* the complexity rather than being seduced by it.
We give the room a small on-ramp (capability vs. capacity computing), dissect
the over-engineered stack into named layers so the zoo becomes legible, and
then deliver the load-bearing idea: workflow tools live on **two distinct
axes** — an *executor/scale* axis (how you run many tasks: bash loop → Slurm
job array → HyperShell) and an *orchestration/DSL* axis (how you express
relationships between tasks: GNU Make → Nextflow). Each rung is anchored by a
real, runnable artifact on the slide — *as scenery, not as a lesson.* We close
the technical arc with a *decision ladder* and a verbal "does this layer earn
its keep?" checklist, tighten the data-management story around locality and
storage tiers, land one short beat on agents as emerging operators of these
same tools, and invert the opening gag: **real perfection is the simplest thing
that works.**

## 2) Narrative spine

### Act structure (the pacing backbone)

The talk is built as **two acts and a turn**, and the *pacing is deliberately
uneven* — that unevenness is what makes a dense talk *feel* unhurried instead of
rushed. Fast where overwhelm is the message; slow where the insight lands.

* **Act 1 — "Behold the zoo" (~10 min, deliberately fast/dense).** Title →
  cold open → about RCAC → about me → thesis → zoo → why the layers exist →
  the over-engineered anatomy. Lean *into* the rush. The snippets, logo walls,
  and dense diagrams fly by. The feeling to manufacture is *"holy cow, look at
  all this."* This is the **impress.**
* **The turn (~1 min).** *"It looks like chaos. It isn't. And honestly? Most of
  it is the bane of my existence too."* The first real breath — the
  laugh-of-recognition that invites the room into the joke and de-risks the
  whole posture.
* **Act 2 — "Now let me show you how to *think*" (~15 min, deliberately slow).**
  Two axes → climb each axis (snippets fast as scenery, the *ideas between them*
  given room) → decision ladder → data → agents → close. This is the
  **walk-back**, where the deliberate pace lives and the carry-home idea lands.

### The beats

* **Jump to the middle.** Open on the absurd machine *before* the self-intro —
  a hook with no setup. The gag plants a question ("how would you know which of
  this you need?") and leaves it deliberately unresolved.
* **Now, who's talking — and from where.** Step back: RCAC's role (for
  visitors) and, more importantly, *my* vantage point — a facilitator who cuts
  across **systems, science, and software**. That cross-domain "unicorn"
  perspective is what earns the judgment the rest of the talk trades on, and it
  answers the question the gag just raised: *why do I get to make that joke?*
* **This is a craft worth loving.** Operationalizing research workflows — from
  a Jupyter notebook to scale-out automation on a supercomputer — is deeply
  satisfying work. The goal is *getting the job done at scale*, and getting a
  stack right feels great. We come at this as an enthusiast, not a cynic.
* **Thesis: complexity must earn its keep.** Now resolve the gag's question.
  Start simple. Add a layer only when the workflow demonstrably needs it. This
  is *maturity with* complexity, not hatred of it — the opposite of being a
  "merchant of complexity."
* **The zoo is real and it is absurd.** Show the whole landscape at once — a
  literal logo-wall. We laugh at it, with affection, not contempt. And we name,
  early, that several of these are the bane of everyone's existence — inviting
  the room into the joke before the merchants beat.
* **The zoo is legible.** The over-engineered stack is not magic; it is a
  finite set of named layers (executor, orchestration/DAG, templating/DSL,
  container, persistence, resource manager). Naming them defuses them.
* **Two axes, not one ladder.** The thing to carry home: *executor/scale*
  (run many tasks) and *orchestration/DSL* (relate tasks) are different
  questions. Most workflows only ever need one of them.
* **Each rung is real (and is scenery).** Bash loop, `xargs`, Slurm array,
  HyperShell one-liner; Makefile, Nextflow process. Real artifacts, shown on
  screen — but they're *texture*, not curriculum. Nobody has to read them. The
  executor axis is its own little zoo: each rung exists because the one below it
  hit a wall (parallelism → failure tracking → retries → cross-node scale-out),
  and at the extreme end a dedicated executor is a **pressure-release valve**
  for the scheduler itself.
* **Make reaches further than it looks — the difference is *control*, not
  *capability*.** Before selling Nextflow, I walk it back honestly: containers,
  cluster executors, resume, and modularity can all be *shimmed into Make* with
  conventions (a `$(RUN)` template, atomic `mv`, child-Makefiles). The reason
  to climb isn't that Make *can't* — it's that a framework makes these the
  *framework's* job. *Who's holding the wires — you, or a framework you now have
  to feed?* That delegation buys **human scalability**: like a language's
  built-in packaging index, Nextflow + nf-core offloads complexity to a *shared
  community problem* via forced, uniform plug-points.
* **Data is the hard part.** The bottleneck is usually data movement and
  locality, not CPU. Tier your data deliberately; the simplest tiering is an
  `rsync` in your job script.
* **Agents are the newest operator.** AI agents are starting to drive these
  same tools — the rule does not change: simplest thing that works, verify.
* **Real perfection is simplicity.** Invert the cold-open gag and send them
  home with resources.

## 3) Time budget (45-min slot · ~30-min target · 40-min ceiling)

| Time | Slide | Focus |
|---|---|---|
| 0:00–0:30 | 1 | Title (lean cover) |
| 0:30–2:00 | 2 | Cold open — the "Perfection" over-engineered stack (jump to the middle) |
| 2:00–2:45 | 3 | About RCAC — the center & where I sit (compressible) |
| 2:45–4:00 | 4 | About Me — systems · science · software triple-point |
| 4:00–4:45 | 5 | Thesis card — *complexity must earn its keep* |
| 4:45–5:45 | 6 | The Zoo — literal logo-wall (Act-1 climax) |
| 5:45–6:45 | 7 | On-ramp — capability vs. capacity |
| 6:45–7:45 | 8 | Why the layers exist (concern → layer) |
| 7:45–9:00 | 9 | Anatomy of an over-engineered workflow (centerpiece) |
| 9:00–10:15 | 10 | Decompose the layers (+ the turn) |
| 10:15–11:30 | 11 | "Merchants of complexity" (incl. academic vs. industry) |
| 11:30–12:15 | 12 | Two axes, not one ladder (framework reveal) |
| 12:15–13:00 | 13 | Axis 1 — executor/scale: the bash loop |
| 13:00–13:45 | 14 | Axis 1 — `xargs` (the first taming) |
| 13:45–14:45 | 15 | Axis 1 — Slurm job array |
| 14:45–16:15 | 16 | Axis 1 — HyperShell + the pressure-release valve |
| 16:15–17:30 | 17 | Axis 2 — "Make is all you need" |
| 17:30–18:15 | 17b | Axis 2 — how far Make really reaches (bridge) |
| 18:15–19:30 | 18 | Axis 2 — Nextflow as the justified endpoint |
| 19:30–21:15 | 19 | The decision ladder + "earn its keep" checklist |
| 21:15–22:45 | 20A | Data management — locality & storage tiers (the concept) |
| 22:45–24:00 | 20B | Staging — the same ownership ladder, one more time |
| 24:00–25:15 | 21 | One agentic beat — agents as operators |
| 25:15–26:45 | 22 | Closing — real perfection is simplicity |
| 26:45–29:00 | 23 | Resources & contact |

*Target delivery ~29:00 with a ~1–2min cushion for the cold-open laugh, the
HDMI tax, and transitions — comfortably inside the ~30-min target and far
under the 40-min ceiling, leaving ~10–15min for Q&A in the 45-min slot.
Twenty-four numbered beats (Slide 17b is a slide-reverse, not a new physical
slide; the data beat is two slides, 20A + 20B). The new opening order —
**title → cold open → about RCAC → about me → thesis** — is the "jump to the
middle, then introduce yourself" structure: hook first, credibility second,
thesis third. The prelude is paid for by a lean ~30s title and brisk
executor-axis rungs (Slides 13–16) — the climb is four fast snippets shown as
scenery, not four full stops. If time slips, the first cuts are About RCAC
(Slide 3), the `xargs` rung (Slide 14), and the 6-property trade-off diagram on
20A (collapse to the bare cold→warm→hot ladder); About Me (Slide 4) is
must-tell.*

## 4) Slide-by-slide

### Slide 1 — Title (0:00–0:30) · lean cover

**Context notes**
* Deliberately lean. The deep self-intro is *deferred* — we jump to the cold
  open next, before introducing me. So this slide does almost nothing except
  land my name and the talk's one-line promise, then get out of the way.
* The one-line promise is said *positively* ("from a notebook to a
  supercomputer, without losing your mind"), not as a warning. Sets the
  enthusiast tone before the gag.

**Speaker beats**
1. Name + role, one breath.
2. The talk in one positive line.
3. Immediately pivot to the gag — no "agenda," no throat-clearing.

**Example lines** *(illustrative)*
* "I'm Geoffrey Lentner, Principal AI Scientist at Purdue's Rosen Center for
  Advanced Computing."
* "This talk is about taking research from a Jupyter notebook to scale-out
  automation on a supercomputer — and doing it without losing your mind."

**Visual:** Purdue 2026 cover layout — black field, gold border, centered
title/subtitle, **RCAC** horizontal mark, venue + date in the upper margin.
**Transition:** *"Before I tell you anything about me — let me show you my
favorite cautionary tale."*
**Delivery note:** ~30s, brisk. The energy comes from cutting *fast* to the gag.

---

### Slide 2 — Cold open · the "Perfection" stack (0:30–2:00) · must-not-skip · jump to the middle

**Context notes**
* **Reordered this session:** the cold open now comes *first*, right after the
  title, before About RCAC / About Me. This is the "jump to the middle to say
  something important, then step back to introduce yourself" structure — good
  storytelling: hook first, credentials second.
* Consequence to honor: the gag can't lean on credibility it hasn't established
  yet. It works on **pure showmanship** — walk on, throw up an absurd machine,
  get the laugh. About Me (Slide 4) then becomes the *payoff* — "...and here's
  why I get to make that joke."
* The gag's turn is left **deliberately unresolved** ("today is about telling
  the difference"). That dangling question is the hook that the Thesis (Slide 5)
  later resolves.
* Tone: affection, not contempt. We laugh *with* the absurdity, not down at the
  people who build it.

**Speaker beats**
1. Walk the ridiculous stack top-to-bottom, out loud — let it get sillier.
2. The "Perfection" punchline: "...and it does the work of a `for` loop."
3. **[BREATH]** — let the laugh land before saying anything else.
4. The Rube Goldberg warning (a workflow only its builder understands).
5. The turn — plant the unresolved question; *don't* answer it yet.

**Example lines** *(illustrative)*
* "A web service controls a scheduler that maintains a DAG to spawn workers via
  Slurm that spin up containers to run... a single Python function."
* "It's beautiful. It's elegant. And it does the exact work of a `for` loop."
* "Some of this complexity is necessary. Most of it isn't. Today is about
  telling the difference — but first, who am I to say that?"

**Visual:** The X-Men "Perfection" gag image (best available copy), overlaid on
/ beside a dense absurd-stack diagram. Minimal text; the image + the spoken
stack carry it.
**Transition:** *"...so let me back up and tell you who's making that claim."*
**Delivery note:** **must-not-skip.** Use the silence after "`for` loop." The
unresolved turn is what makes stepping back to About RCAC/Me feel earned, not
like a detour.

---

### Slide 3 — About RCAC · the center & where I sit (2:00–2:45) · compressible

**Context notes**
* A fast orientation to the Rosen Center for any community visitors — but really
  a setup for *where I fit*: a versatile member who cuts across the **systems,
  science, and software** teams. The pillars are scenery; the cross-cutting
  move is the point.
* Now lands *after* the gag, so it has a little momentum behind it — keep the
  energy up; this is not a dead-stop "corporate slide."
* Most compressible slide in the deck. If running long, one sentence and move on.

**Speaker beats**
1. One-liner on RCAC (research computing & data services at Purdue).
2. Name the pillars fast — incl. the Envision Center nod ("we're standing in
   it").
3. The real move: my work cuts *across* systems / science / software
   (squiggle-box highlight). Hand-off into About Me.
4. REU framing, said openly ("you've heard about RCAC; this is for visitors and
   an excuse to show where I sit").

**Example lines** *(illustrative)*
* "RCAC — Rosen Center for Advanced Computing — is research computing and data
  services at Purdue. We run Top500 supercomputers, PB-scale storage, and, yes,
  this room: the Envision Center."
* "I don't live in one of these boxes. My job is to move between them."
* "Most of you have heard the RCAC pitch already this summer, so I'll be quick —
  this is really just to show you where I sit."

**Visual:** Port of the existing PowerPoint — title "Rosen Center for Advanced
Computing," subtitle "Research computing and data services at Purdue
University"; a photo cluster (machine-room aisle, the *Fortress* mural, a
staffer at a rack) on the left; bulleted pillars on the right with hand-drawn
**squiggle boxes** around the cross-cutting ones (systems / science / software).
Purdue+RCAC marks, `rcac.purdue.edu` QR. (Source image from Geoffrey; new themed
layout.)
**Transition:** *"That cross-cutting seat is the whole reason I see this the way
I do — so, a bit more about me."*
**Delivery note:** **compressible** — first to cut. If short on time: "you know
RCAC; here's where I sit," then straight to About Me.

---

### Slide 4 — About Me · systems · science · software (2:45–4:00) · must-tell

**Context notes**
* My perspective *is* the argument. The license to say "add complexity only when
  it earns its keep" comes from sitting at the **triple-point** of systems,
  science, and software — the "unicorn" facilitator who knows enough of each to
  translate between all three. This is the **anti-grumpy-old-man anchor**: an
  enthusiast at ease, not a novice complaining.
* In the new order this slide is the **payoff to the cold open** — it answers
  "who is this person to mock that machine?" The gag earns the intro.
* The personal arc deliberately mirrors the talk's own *Jupyter → scale-out*
  journey: astrophysics → data-science-at-scale on HPC → full-stack RSE → now
  AI/agentic. Each step *added* a domain without abandoning the last.
* **Decision (this session):** the old "four jobs of this talk" beat is **cut**
  from what I say on stage — it was a spoken table of contents. It survives only
  as a *private design constraint* (show passion; survey the map; leave one
  portable rule; stay honest about scope). If a slide serves none of those four,
  it's a cut candidate — but I don't recite them.
* Earned authority, said *warmly*, not as a flex: building/debugging research
  workflows since before Kubernetes or "the cloud" was a product. Long enough to
  have strong opinions and to have *earned* them. I build tools too (HyperShell).

**Speaker beats**
1. Land the Venn: triple-point job; fluent across all three, deepest in none.
2. Walk the personal arc fast (four stops), tying it to the talk's arc.
3. Drop the earned-authority line — warm, not boastful; "enthusiast first."
4. One-line promise of the payoff (a mental model for *how much machinery*).
5. Hand off to the thesis.

**Example lines** *(illustrative — pick what fits the room)*
* "I know more Linux than most scientists, more about hardware — NUMA domains,
  interconnects — than most software engineers, and more science than most
  systems people. Not the deepest in any one; fluent across all three."
* "I've been building and debugging these workflows since before Kubernetes,
  before 'the cloud' was something you could buy — long enough to have strong
  opinions, and long enough to have earned them."
* "By the end you'll have a way to decide how much machinery your workflow
  actually needs — useful even if workflows aren't your summer project."

**Visual:** Port the existing "About Me" slide — three-circle Venn
(**Systems · Science · Software**) with role labels placed by overlap, headshot +
name/contact on the left. **Redesign the labels** to map onto the three domains
and the triple-point (center = *facilitator / the unicorn*; overlaps and
single-domain anchors chosen to tell the systems↔science↔software story rather
than list every job title). Final label set is a TODO. (Headshot + source image
from Geoffrey; new "triple-point Venn" layout.)
**Transition:** *"So — here's the one sentence I want you to leave with."*
**Delivery note:** **must-tell** and the tone-setter. Warm, unhurried — this is
*not* an Act-1 firehose slide. ~60–90s.

---

### Slide 5 — Thesis card (4:00–4:45)

**Context notes**
* The single sentence everything hangs on — and the **resolution of the cold
  open's unresolved question.** The gag asked "how do you tell necessary from
  absurd?"; this answers it.
* Framed as *discipline born of love for the craft*, not distaste for it. The
  "purr" / rebuilt-engine image is the love-of-craft counterweight that keeps
  the whole talk on the enthusiast side.
* Two failure modes worth naming: under-engineering (manual, unrepeatable) and
  over-engineering (the Slide 2 monster). The craft is finding the floor.

**Speaker beats**
1. State the thesis, plainly, once. Let it sit.
2. The counterweight: I'm not here to yell at the cloud — a right stack *purrs*.
3. Name both failure modes briefly.
4. Frame the rest of the talk: a vocabulary for naming complexity + a tool for
   adding it deliberately.

**Example lines** *(illustrative)*
* "Start simple. Add complexity only where it earns its keep."
* "I'm not here to yell at the cloud — when a stack is right, watching it run is
  like hearing a rebuilt engine turn over and purr. That's the temptation: the
  satisfaction makes you want to add *more* than the problem needs."

**Visual:** Purdue 2026 "Overview" tan/buff section-divider card, one large
thesis line, short caption: *"the simplest thing that works."*
**Transition:** *"Now — before any advice — let me show you the whole zoo at
once, so you see what we're up against."*
**Delivery note:** Slow down. This is a section-divider beat; one clean idea on
screen, said with conviction.

---

### Slide 6 — The Zoo · a literal logo-wall (4:45–5:45) · Act-1 climax · ~60–75s

**Context notes**
* **Promoted this session:** the zoo is no longer a 45s backdrop — it's the
  structural *setup* for the entire walk-back. The whole talk is "impress, then
  walk it back"; this is the **impress.** It must actually overwhelm.
* The density *is* the message. Do **not** narrate logos. The point is the
  visceral "look how much is out there," not a tour.
* This is also where **shared-pain credibility** lands early: naming that some of
  these are the bane of my (and everyone's) existence de-risks the entire
  merchants section later — the room is invited into the joke, not lectured by it.
* Foreshadows the structure without teaching it: the chaos is secretly organized
  into a handful of layers (next slides) and later onto two axes (Slide 12).
* Owns the bias up front: weighted toward what researchers actually run on our
  HPC; industry leans on a different corner of the same wall.

**Speaker beats**
1. Let the wall build / land. **[BREATH]** — ~3s of silence; let it overwhelm.
2. Gesture, don't read: "this is the zoo."
3. The shared-pain turn line (the early de-risk of the merchants beat).
4. Honest setup: I can't cover this; I'll give you a way to *think* about it.
5. Foreshadow: by the end you can drop any logo — even a new one — into a box.

**Example lines** *(illustrative)*
* "This is the zoo. Every one of these is a real, capable tool somebody swears
  by — and, honestly, several of them are the bane of my existence. Yours too,
  someday."
* "I can't cover all of this — nobody could in half an hour. So I'm going to give
  you a way to *think* about all of it, then go deep on a couple of slices."
* "It looks like chaos. It isn't. By the end, you'll be able to drop any logo on
  this wall — even one I've never heard of — into the right box."

**Visual:** A dense, deliberately-busy **logo wall** — the literal "zoo."
Arrangement carries meaning so it rewards a second look: **grouped by layer**
(soft clustered regions, optionally faintly labeled) — schedulers/resource
managers (Slurm, Kubernetes, PBS/Torque, LSF, HTCondor); executors/scale (GNU
Parallel, HyperShell, Dask, Ray, Parsl, Globus Compute); orchestration/DAG (GNU
Make, Nextflow, Snakemake, Airflow, Luigi, Cromwell/CWL, Globus Flows); data
movement (Globus, `rsync`); containers (Docker, Apptainer/Singularity, Podman);
languages (Python, R, MATLAB, Julia, Bash); observability (Datadog,
Grafana/Prometheus, plain logs+cron). **Size ≈ popularity.** Light foreshadow of
the two-axis split (executor cluster vs. orchestration cluster on opposite
sides), axes unlabeled. **New "Zoo logo wall" layout.** Use real brand logos.
**Enhancement (this session):** consider a **cascade/pile-up build** so the
density visibly *accumulates* — the accumulation is the overwhelm.
**Transition:** *"It looks like chaos. It isn't. Let me give you the
ground-clearing first, then start sorting this wall."*
**Delivery note:** **Scenery, not tour.** ~60–75s. Resist narrating logos. The
`[BREATH]` after the reveal is load-bearing — the silence *is* the impress.
This is the high-water mark of Act-1 density; right after this we begin sorting.

---

### Slide 7 — On-ramp: capability vs. capacity (5:45–6:45)

**Context notes**
* Two kinds of computing, told through one archetypal contrast: the *monolith*
  vs. the *layered stack*. This talk is about the second — and that second world
  is where the scaffolding (and the zoo) comes from.
* The load-bearing plant: this is **scaffolding with incremental complexity** —
  you add layers only as the problem demands. Hold that thought; it's the whole
  talk. This is the undergrad on-ramp, so slow down if the room is HPC-novice.
* The trade to name: the monolith *has* to be complex (tightly coupled); the
  workflow gets to *choose* its complexity layer by layer — freedom that is both
  the benefit and the temptation.

**Speaker beats**
1. Capability = the monolith: one giant MPI code, complexity sealed *inside*.
2. Capacity = the layered stack: independent tasks, complexity *between* tools.
3. Name the layers fast (application → orchestration → data → scheduler →
   containers) — this previews the vocabulary Slides 9–10 decompose.
4. The key plant: incremental scaffolding; add layers only as needed.

**Example lines** *(illustrative)*
* "One world is a single giant Fortran-and-MPI code that spans a whole
  supercomputer — it *has* to be complex; the complexity lives inside the code."
* "Our world is the opposite: lots of independent tasks, and the complexity
  lives *between* them — in a stack of optional layers."
* "The monolith asks 'how big?'; the workflow asks 'how many — and how much
  scaffolding do I actually need?'"

**Visual:** A two-panel split. **Left:** one solid block labeled *"monolithic
MPI code"* spanning a row of nodes — complexity sealed inside. **Right:** the
same work as a *stack of labeled layers* (application → orchestration → data →
scheduler → containers) sitting over a swarm of independent tasks. The right
panel deliberately previews the layer vocabulary that Slides 9–10 decompose.
**Transition:** *"Before we judge any of those layers, it's worth asking why
they exist at all."*
**Delivery note:** Undergrad on-ramp — the one place to slow down for novices.
Compressible to one line for an HPC-literate room.

---

### Slide 8 — Why the layers exist (6:45–7:45)

**Context notes**
* Each layer answers a real operational concern. The scaffolding isn't
  arbitrary — every legitimate concern spawned its own layer. That's the
  *origin* of the zoo (and why it's so tempting to grab the whole thing).
* The honest version of the thesis lives here: the question is never "is this
  layer good?" but "do I have this concern, *today*, at a scale the layer below
  can't handle?"
* This is the concern→layer mapping that makes Slide 9's monster legible.

**Speaker beats**
1. It's not enough to write code in a notebook — you have to *operationalize* it.
2. Walk the concern→layer mapping (deploy→containers, ordering→orchestration,
   data→data layer, resources→scheduler, history→persistence,
   what-happened→observability). Brisk — it's a map, not a lecture.
3. The pivot line: each concern is where a tool *can* help — and where one gets
   added needlessly.

**Example lines** *(illustrative)*
* "Every one of these layers exists because somebody had a real problem:
  deploying an environment, ordering steps, moving data, matching tasks to GPUs,
  remembering what happened."
* "So the question is never 'is this layer good?' It's 'do I have this concern,
  today, at a scale the thing below me can't handle?'"

**Visual:** The Slide 7 layer stack, annotated — each layer paired with the
operational concern that justifies it (concern → layer). Sets up Slide 9 as
"what happens when you grab every layer whether or not you have the concern."
**Transition:** *"Now grab every layer at once, whether you need it or not — and
you get this."*
**Delivery note:** Act-1 pace — brisk. The mapping is scenery; the pivot line is
the keeper.

---

### Slide 9 — Anatomy of an over-engineered workflow (7:45–9:00) · centerpiece

**Context notes**
* The "shock" slide — one dense diagram of a maximalist workflow stack. The
  visual centerpiece of the talk and the serious-drawing of the Slide 2 gag.
* Don't explain it yet — let the density do the work, same discipline as the
  zoo. It's the scattered zoo collapsed into a single *teetering* stack.
* Plants the question Act 2 answers: how would you know which boxes you need?

**Speaker beats**
1. Reveal the teetering stack. Let it land — don't narrate the boxes.
2. "This is real. People build this. Sometimes they even need to."
3. Plant the question: how would you know which of these you actually need?

**Example lines** *(illustrative)*
* "This is the gag from a minute ago, drawn seriously. Every layer, all at once."
* "People really build this. And sometimes — sometimes — they even need to. The
  hard part is knowing when."

**Visual:** A single dense vertical/stacked diagram showing the full
over-engineered pipeline (web service → resource manager → DAG engine →
containerized steps → templating DSL → persistence/DB → observability/SaaS
dashboards → the actual compute). **New custom layout** (the "Rube Goldberg
stack"). The dense Zoo of Slide 6 collapsed into one teetering stack — same
tools, now stacked instead of scattered.
**Transition:** *"Step one to taming it: give every box a name."*
**Delivery note:** Centerpiece — ~75s. Density is the message; resist explaining.

---

### Slide 10 — Decompose the layers + the turn (9:00–10:15)

**Context notes**
* The zoo is a finite set of named layers — and those layers are *universal*.
  The academic stack and the industry stack solve the same layers with
  different tools. Naming them defuses them.
* **This slide carries "the turn"** (per the Act structure): the move from
  Act-1 overwhelm into Act-2 sense-making. The first real exhale: *"it looks
  like chaos; it isn't."* This is also where shared-pain credibility can echo.
* The academic↔industry parallel matters for *this* room: REUs touch Slurm and
  Apptainer now, but many graduate into Kubernetes/Airflow/Docker/Datadog.
  Same handful of layers; only the brand names change.

**Speaker beats**
1. The turn: chaos → order. Slow down here; this is the exhale that opens Act 2.
2. One beat per layer, fast, with the academic | industry pair.
3. Land it: every box on the last slide is one of these; most workflows need one
   or two, not all.

**Example lines** *(illustrative)*
* "It looks like chaos. It isn't. It's the same handful of layers every time —
  executor, scheduler, orchestration, data, containers, persistence,
  observability."
* "Slurm or Kubernetes. Make or Airflow. Apptainer or Docker. Same layer — only
  the brand names change."
* "Most workflows need one or two of these. Not all of them."

**Visual:** The Slide 9 diagram re-rendered with each layer labeled and
color-coded; alongside each layer, a small *academic | industry* tool pair
(Slurm | Kubernetes · Make/Nextflow | Airflow · Apptainer | Docker ·
logs+cron | Datadog).
**Transition:** *"And here's the trap that spans both worlds: the tools that
promise to *tame* this complexity often just *move* it."*
**Delivery note:** **Holds the turn** — shift gears here from fast (Act 1) to
deliberate (Act 2). The layer list is scenery; the turn is the keeper.

---

### Slide 11 — "Merchants of complexity" (10:15–11:30) · recurring callback

**Context notes**
* The deeper trap isn't tools that *add* complexity — it's the ones that
  *promise to tame it* and instead relocate it into a new black box with new
  problems. Same in academia and industry.
* **Lightened this session (edit #7).** The biggest tone risk ("old man yells at
  cloud") is best defused by *humor and shared pain*, not by stacking
  counterweight bullets. So: the old multi-bullet "anti-grumpy guardrail" is
  **cut**; the $200M observability line is **demoted to a throwaway eye-roll**,
  not a full worked example. The shared-pain framing from the zoo (Slide 6)
  already did the de-risking — lean on it.
* Still *not* anti-tool — it's anti-*reflexive*-tool. Airflow, Kubernetes, and
  Nextflow are right for real problems; the merchant's sin is selling them as
  the *default*. (I build tools too — HyperShell is coming.)
* The academic↔industry nuance is the substantive keeper: industry (always-on,
  SLAs, multi-tenant) genuinely justifies heavier platforms; academic workflows
  (bursty, batch, finite) usually don't. Don't cargo-cult across the boundary.

**Speaker beats**
1. Name the move: the pitch is always *simplification* ("just write a few
   Python snippets," "let the platform handle it").
2. The reality: you didn't remove complexity, you *relocated* it — now you own a
   scheduler, a metadata DB, a deploy, version-skew.
3. The anchor lament: "this could have been a Makefile and a cron-job."
4. The throwaway: observability — `2>&1` + a cron email vs. a giant SaaS bill
   to learn the exit code of a nightly job. One eye-roll, then move.
5. The nuance: industry vs. academia; don't cargo-cult.

**Example lines** *(illustrative)*
* "The pitch is always the same: 'just write a few Python snippets and we'll
  handle the rest.' And then you own a scheduler, a database, a deployment, and
  a version-skew problem — and the actual work is still the five lines it was."
* "This could have been a Makefile and a cron-job."
* "You can learn the exit code of a nightly job with `2>&1` and a cron email —
  or you can pay a seven-figure observability bill for the same fact. *(eye-roll,
  move on.)*"
* "Industry has always-on services and SLAs — those platforms earn their keep
  there. Our work is bursty and finite. Don't import their stack onto our
  problem."

**Visual:** A two-state diagram: left, a tangled stack labeled *"complexity"*;
right, the *same* tangle sealed inside a single box labeled *"platform that tames
complexity"* — with smaller new problems leaking out of it (ops, DB, deploy,
version skew). A gold call-out: *"This could have been a Makefile and a
cron-job."*
**Transition:** *"Here's the tool I'll give you to be a skeptical buyer."*
**Delivery note:** Keep it *funny and warm*, not bitter. The shared-pain framing
from the zoo is the antidote; the $200M line is a throwaway, not a centerpiece.
If you feel yourself getting cranky, name a tool you love and why it earned its
keep.

---

### Slide 12 — Two axes, not one ladder (11:30–12:15) · framework reveal · must-not-skip

**Context notes**
* The load-bearing idea and the single most important intellectual contribution.
  Workflow tools live on **two different axes**, answering two different
  questions. Everything technical hangs on this.
* The fix to last year's "flat tool list": those were treated as one ladder.
  They're not. Most workflows only ever need *one* axis.
* **Honest scoping lives here ("the map outlasts the tools"):** I climb one
  example rung-set per axis — a deliberately narrow slice of what I see on our
  HPC. The point is the two *questions*, so you can place *any* tool, including
  ones I've never heard of. This is also where the climb's snippets get pre-
  labeled as scenery.

**Speaker beats**
1. Reveal the two axes. **[BREATH]** — give the "aha" a beat to register.
2. Axis 1 = executor/scale ("how do I run many tasks?"). Axis 2 =
   orchestration/DSL ("how do I relate tasks?").
3. The correction: these aren't one ladder; most workflows need only one.
4. Honest scope: I'll climb a narrow slice; the map is the point, not the tools.

**Example lines** *(illustrative)*
* "There are really only two questions. One: how do I run *many* tasks? Two: how
  do I express *relationships* between tasks? Different questions, different
  tools."
* "Most workflows only ever need one of these axes. Last year I made it sound
  like one big ladder. It isn't."
* "I'm going to climb a narrow slice of each — the tools I actually watch people
  use here. Learn the two questions and you can place any tool on the wall,
  even one I've never heard of. The map outlasts the tools."

**Visual:** Two clearly separated arrows/axes on one card — a horizontal "scale"
axis and a distinct "orchestration" axis — each with its rungs labeled but not
yet detailed. Faint, *greyed-out* extra tool names floating near each axis
(Snakemake/Parsl/Dask near orchestration; Ray/Airflow near the boundary) to show
the rungs we climb are a chosen subset, not the whole field. **New custom
layout** (preview of the decision ladder).
**Transition:** *"Let's climb Axis 1 — my slice of it — and stop the moment it
earns its keep."*
**Delivery note:** **must-not-skip**, Act-2 pace — slow. The `[BREATH]` after the
reveal lets the core idea register. This is the slide everything else hangs on.

---

> **Slides 13–18 — the climb (scenery rule).** Every snippet from here to Slide 18
> is **scenery, not a lesson.** Gesture at it; do not teach it. Nobody in the
> room needs to read or understand the code — it just has to *look real* and
> *look like it's getting taller.* The ideas *between* the snippets get the air;
> the snippets fly by. (This retires the old worries about `xargs` quoting
> legibility and fastq-vs-generic — fastq stays because domain-flavored scenery
> reads as *more* real.)

### Slide 13 — Axis 1 · the bash loop (12:15–13:00)

**Context notes**
* The floor of the executor axis. Start here. Often, stay here. For a few dozen
  independent tasks a shell loop is *the correct answer* — repeatable, legible,
  version-controllable.
* The wall to plant: fake parallelism with `&`/`wait` works until you want
  N-at-a-time throttling — then you're hand-rolling a job pool. That's the cue
  to climb.
* **Scenery.** The snippet exists to *look* like the humble starting point.

**Speaker beats**
1. "The humblest workflow: a loop." Gesture at it — don't read it.
2. For a few dozen tasks, this is the right answer. Say it with conviction.
3. The wall: throttling means hand-rolling a pool; no failure tracking at scale.

**Example lines** *(illustrative)*
* "You don't need to read this. It's a loop. For a few dozen tasks, it's the
  right answer — full stop."
* "It breaks the moment you want, say, eight at a time without melting your
  laptop. Now you're writing a job pool by hand."

**Visual:** Terminal-window treatment of a real on-slide snippet (fastq
through-line):
```sh path=null start=null
for s in samples/*.fastq; do
    ./analyze.sh "$s" > "results/$(basename "$s").out"
done
```
Clean "terminal window" aesthetic for *commands*, distinct from the
"code/definition" treatment used later for Make/Nextflow.
**Transition:** *"Want it to actually run in parallel without hand-rolling a job
pool? One small step."*
**Delivery note:** **Scenery.** Fast. The keeper is "for a few dozen tasks this
is correct" — the humility, not the syntax.

---

### Slide 14 — Axis 1 · `xargs` (the first taming) (13:00–13:45) · compressible

**Context notes**
* The first rung that *earns its keep*: `xargs -P` gives real node-local
  parallelism with throttling, for free, with a tool you already have. The
  concern was "run many at once without DDoS-ing my own laptop"; this answers it.
* The **feature ratchet** through-line starts here: the loop gave *iteration*;
  `xargs` adds *bounded parallelism*. Each rung adds exactly one capability.
* Conversational niche callouts (ParaFly = failure log; GNU Parallel = retries)
  are *hallway-track scenery* — name a couple, don't enumerate. All three top
  out at one node; that ceiling is the next wall.
* **Scenery** — and per edit #4/#6, the dense quoting no longer needs to be
  "fixed" for legibility; nobody's reading it.

**Speaker beats**
1. "One flag, real concurrency." Gesture at `-P`; don't parse the quoting.
2. The ratchet line: each rung adds exactly one missing capability.
3. (Optional, fast) the niche exists — ParaFly, GNU Parallel — but all single-node.
4. The wall: still one node; the cluster is right there and you can't reach it.

**Example lines** *(illustrative)*
* "Same loop — one flag, and now it runs eight at a time. You'll never read this
  on a slide and that's fine."
* "There's a whole little niche here — ParaFly, GNU Parallel — each adding one
  thing: a failure log, retries. But they all stop at one node."

**Visual:** Terminal-window snippet (same fastq through-line):
```sh path=null start=null
ls samples/*.fastq | xargs -P 8 -I{} \
    sh -c './analyze.sh "$1" > "results/$(basename "$1").out"' _ {}
```
Optional tiny grey margin note — *"cf. ParaFly, GNU Parallel"*.
**Transition:** *"Bounded parallelism on one node — now I want the whole cluster.
Hand it to the scheduler."*
**Delivery note:** **Scenery + compressible.** If time slips: "`xargs -P`
parallelizes the loop; GNU Parallel adds retries" — one sentence, jump to Slurm.

---

### Slide 15 — Axis 1 · Slurm job array (13:45–14:45)

**Context notes**
* The next rung: let the scheduler fan out independent tasks *across the
  cluster*. This is the multi-node wall `xargs`/GNU Parallel hit, solved by the
  resource manager itself — the capability they lacked.
* Still *just the executor axis* — no relationships between tasks.
* **Plant the limit that sets up HyperShell:** a job array is one scheduler
  decision per task. Fine for thousands; but arrays have size ceilings
  (`MaxArraySize`) and a million-task array hammers the central controller.
* **Scenery** — the `#SBATCH` header is texture for "now it's on the cluster."

**Speaker beats**
1. "Hand it to Slurm: N copies, one per index, spread across nodes." Gesture.
2. Earns its keep for many tasks + scheduler accounting/requeue.
3. Still no relationships — pure execution.
4. Plant the wall: arrays have ceilings; a million submissions hammer the
   controller. "Hold that thought."

**Example lines** *(illustrative)*
* "Same work, now the *scheduler* fans it across the whole cluster — placement,
  queuing, requeue, all for free."
* "But notice: that's one scheduler decision per task. Fine for thousands. Push
  it to a million and you've got a problem that isn't your code."

**Visual:** Terminal/code split — the `#SBATCH` header and array body on-slide:
```sh path=null start=null
#!/bin/bash
#SBATCH --array=0-999
#SBATCH --cpus-per-task=4
s=$(ls samples/*.fastq | sed -n "$((SLURM_ARRAY_TASK_ID+1))p")
./analyze.sh "$s" > "results/$(basename "$s").out"
```
**Transition:** *"Now push to a *million* tasks — and you hit a wall that isn't
about your code at all."*
**Delivery note:** **Scenery.** The keeper is the planted wall (one decision per
task → controller pressure), not the SBATCH syntax. Compressible to a verbal
bridge between `xargs` and HyperShell if time slips.

---

### Slide 16 — Axis 1 · HyperShell + the pressure-release valve (14:45–16:15) · must-not-skip

**Context notes**
* The hardest slide for the template: it is **both** scenery (the one-liner +
  feature box, which nobody must read) **and** a must-land idea (the
  pressure-release-valve argument — the single best beat in the talk). Hold both
  without letting the scenery steal the idea's air.
* **The idea that must land** (slow): at extreme scale the bottleneck isn't your
  code — it's *shared infrastructure*. A million job-steps is a self-inflicted
  DDoS on `slurmctld`, the daemon every other user depends on. An executor grabs
  **one allocation** and meters tasks internally. *That's* why it earns its
  keep — it protects the **machine**, not just you. "Earn its keep" stops being
  about convenience and becomes about the shared system.
* HyperShell is *my* tool — the point, not a caveat. It's the worked proof the
  talk isn't anti-tool: GNU Parallel is wonderful but wasn't right for HPC; a
  job array DDoSes the controller at extreme counts; the concern was real and
  unmet, so a new rung was justified (Slide 19 checklist in action).
* **Control-gradient flavor (kept, demoted to a felt question):** introduce it
  here as "who's holding the wires?" — at this rung the framework starts holding
  them. One sentence; the formal second-axis version stays *off* the ladder.
* Honest boundary: if a loop, `xargs`, or an array already does it, HyperShell
  is overkill too. The "what I'm skipping" tool list (GNU Parallel, ParaFly,
  TaskFarmer, Launcher, Ray/Dask/Parsl, HTCondor above) is scenery/hallway-
  track — name a couple, wave at the rest.

**Speaker beats**
1. Show the one-liner — **scenery.** "Same idiom as `xargs`, just bigger." Move.
2. **Slow down.** Land the pressure-release-valve idea (DDoS on `slurmctld`).
   This is the must-land beat — give it air.
3. Full-disclosure it's my tool — frame as proof, not caveat.
4. One-sentence control-gradient flavor: "who's holding the wires now?"
5. Honest boundary + wave at the neighbors (HTCondor above). Move on.

**Example lines** *(illustrative)*
* "You don't need to read this — just notice it's the `xargs` idea again, only
  now it's fanning a million tasks across the whole cluster."
* "At a million tasks the bottleneck isn't your code — it's the *one* scheduler
  daemon everyone on the machine shares. Submit a million job-steps and you've
  DDoS'd it. So the executor grabs *one* allocation and meters the tasks itself
  — the controller sees one job, not a million. That's not about your
  convenience. That's about protecting the machine."
* "Full disclosure: this is my tool. That's the point, not an apology — GNU
  Parallel is wonderful but wasn't right for HPC, so the rung had to exist."
* "Notice what changed as we climbed: at the bottom *you* held the wires. Up
  here, a framework does — and now you have to feed it."

**Visual:** Terminal-window one-liner (real HyperShell idiom):
```sh path=null start=null
seq 1000000 | hsx -t 'echo {}' -N64 --ssh 'a[00-32].cluster' > task.out
```
Plus a small **"earned its keep" feature callout box** (v2.8 — accurate to the
release notes; pick 3–4, don't read them all): **DB in-the-loop** (SQLite/
PostgreSQL; task history, fault-tolerance, automated retries persisted across
runs); **extreme elastic scale-out** (staggered launch to 1000+ nodes / 250k+
workers without crashing the server; scale clients to zero); **resource-aware
scheduling** (per-task cores/memory/walltime, client-side backfilling); **task
groups** (lightweight dependency management between tasks). Caption:
*hypershell.readthedocs.io · `hs --help` · v2.8*.
**Transition:** *"That's pure execution — a million unrelated tasks. None of it
handles tasks that *depend* on each other. For that we change axes entirely."*
**Delivery note:** **must-not-skip; mixed pace.** Snippet + feature box are
*scenery* (fast, gesture); the `slurmctld` beat is the *idea* (slow, give it
room). Don't let the feature box eat the punchline's air. ~120s.

---

### Slide 17 — Axis 2 · "Make is all you need" (16:15–17:30)

**Context notes**
* The orchestration axis starts with a tool you already have. Make expresses
  *relationships* — targets, prerequisites, recipes — and for a huge fraction of
  workflows it is enough. A Makefile *is* a reproducible pipeline; it was
  genuinely popular in data science for exactly this reason.
* The provocation "Make is all you need" is the setup for the 17b rebuttal. The
  phrase "out of the box" is doing a lot of work — plant that; 17b walks it back.
* **Scenery** — but this is the *other* code aesthetic (definition, not terminal).

**Speaker beats**
1. "Make is a DAG engine in disguise." Gesture at the rule.
2. A Makefile *is* a reproducible pipeline — huge in data science for this.
3. The provocation: before a bespoke engine, ask whether a Makefile does it.
4. Where it strains *out of the box* — emphasize "out of the box," then promise
   to walk it back.

**Example lines** *(illustrative)*
* "Make is secretly a DAG engine: targets, prerequisites, recipes. It already
  knows what depends on what and only rebuilds what changed."
* "For a huge fraction of pipelines, Make is all you need. Out of the box it
  lacks containers and cluster execution — but hold on to those words, 'out of
  the box.'"

**Visual:** "Code/definition" treatment (distinct from the terminal aesthetic)
of a small Makefile:
```makefile path=null start=null
results/%.out: samples/%.fastq
    ./analyze.sh $< > $@

all: $(patsubst samples/%.fastq,results/%.out,$(wildcard samples/*.fastq))
```
**Transition:** *"Before I sell you the next rung, let me be honest about how far
this one actually reaches — look at that same Makefile again."*
**Delivery note:** **Scenery** (definition aesthetic). The keeper is the
provocation + the planted "out of the box."

---

### Slide 17b — Axis 2 · how far Make really reaches (bridge beat) · must-not-skip

**Context notes**
* The honest rebuttal *to myself*: most of what people reach for Nextflow to get
  can be *shimmed into Make* with a little convention. The same Makefile, re-read
  with a new lens.
* The load-bearing reframe (control, not capability): the real difference isn't
  what Make *can* do — it's **who holds the wires.** With Make *you* own the
  patterns; with a framework, the framework does. This is the control-gradient,
  delivered as a *felt question*, not a second formal axis.
* **Delivery mechanic (settled):** literally reverse one slide — bring the Slide
  17 Makefile back up and talk *over* it. No new snippet. Keeps 17 lean and
  makes the rebuttal feel earned.

**Speaker beats**
1. "Same Makefile — new lens." Reverse to Slide 17.
2. The four shims, brisk: containers (`$(RUN)`), executors (`srun`), resume
   (atomic `mv`), modularity (child-Makefiles). Wave at them; don't teach.
3. The pivot: Make isn't *incapable* — so why climb? Because a framework makes
   these *its* job. Who holds the wires?

**Example lines** *(illustrative)*
* "Containers? One variable: `RUN = apptainer exec ...`, prefix each recipe.
  Cluster? `RUN = srun ...`. Resume? Make already does it — plus a one-line
  atomic `mv` so a half-written file never lies to you. Modules? Child-Makefiles
  in Git."
* "So Make is *not* incapable — I can shim all of this. Nextflow isn't right
  because Make *can't*. It's a different trade: it takes the patterns I'd own by
  hand and makes them the framework's job. The question is who's holding the
  wires — you, or a framework you now have to feed."

**Visual:** Reuse the Slide 17 Makefile verbatim. Optional: four small margin
annotations pointing at the recipe line — *"← wrap with $(RUN) for containers /
srun"*, *"← atomic mv ⇒ safe resume"*, *"← child-make ⇒ modules"* — revealed one
at a time. Keep it light; the point is "same code, new lens."
**Transition:** *"That's the case *for* doing it yourself. Here's why a whole
community decided to stop."*
**Delivery note:** **must-not-skip.** The four shims are scenery (brisk); the
"who holds the wires?" line is the keeper — say it slowly.

---

### Slide 18 — Axis 2 · Nextflow as the justified endpoint (18:15–19:30) · must-not-skip

**Context notes**
* Nextflow is the top of the orchestration axis. The point isn't that Make
  *can't* (17b showed it can) — it's that Nextflow makes these things the
  **framework's** job, and that delegation buys *human* scalability through
  shared infrastructure.
* **The deeper argument — human scalability (the real "earns its keep"):** this
  is the *packaging* story. Python/Node/Rust ship a package index; they offload
  complexity to a *shared community problem*. Nextflow's forced plug-system +
  nf-core is the same move for pipelines. Be master of your own domain — start
  there — but a shared framework lets a community plug things together *because*
  the plug-points are forced and uniform.
* One feature genuinely doesn't reduce to a Make pattern: the **dynamic dataflow
  DAG** (data-driven topology, not a fixed target list). Worth naming honestly.
* Owning the bias ("the map outlasts the tools"): I picked Nextflow because it's
  what I most see researchers reach for on our HPC — the view from the trenches.
  Snakemake, CWL/Cromwell, Parsl, Luigi, Airflow are all valid; place each on
  the orchestration axis and apply the same checklist.

**Speaker beats**
1. Reframe (not "Make can't"): five capabilities, now the framework's job —
   containers, dynamic DAG, `-resume`, executor portability, nf-core. Gesture.
2. The keeper: human scalability = the packaging-index move for pipelines.
3. Honest cost: a *lot* of machinery; it relocates control. Earns its keep when
   the problem is bigger than one person's conventions.
4. If you don't have those needs, Slide 17 was your answer.
5. Own the bias; name what I'm skipping; the map outlasts the tools.

**Example lines** *(illustrative)*
* "Everything 17b shimmed by hand, Nextflow makes the framework's job — plus one
  thing Make really can't do cleanly: a *dynamic* dataflow graph driven by the
  data itself."
* "This is the packaging-index move. Python doesn't make you reinvent a build
  system; nf-core doesn't make you reinvent a pipeline. That's *human*
  scalability — a shared problem solved once for everyone."
* "It's a lot of machinery, and it hands control to the framework. Worth it when
  the problem is bigger than your own conventions. If it isn't — Slide back
  there, the Makefile was your answer."

**Visual:** "Code/definition" treatment of a minimal Nextflow process + channel,
with a callout box listing the five justifying features:
```groovy path=null start=null
process analyze {
    container 'biocontainers/tool:1.0'
    input:  path sample
    output: path "${sample.baseName}.out"
    script: "./analyze.sh ${sample} > ${sample.baseName}.out"
}
workflow { analyze(Channel.fromPath('samples/*.fastq')) }
```
**Transition:** *"So: two axes, several rungs each. Here's how to decide."*
**Delivery note:** **must-not-skip.** Snippet + feature box are scenery; the
human-scalability/packaging argument is the keeper — give it room.

---

### Slide 19 — The decision ladder + checklist (19:30–21:15) · must-not-skip

**Context notes**
* The single portable artifact — the thing undergrads carry home; the slide to
  photograph. It pulls the whole climb into one picture: *which axis / how far
  up* (the rungs).
* **Control gradient — KEEP, but as a *visual*, not a memorized framework** (the
  reframe). The left→right "you own it → framework owns it" gradient runs under
  each axis as a colour wash. Say the felt question once ("who's holding the
  wires?"); do *not* lecture a second formal dimension. The old multi-clause
  "meta-test" prose is softened to one line so the picture carries the idea.
* The checklist is grouped by axis so the two questions stay distinct. The
  executor question carries the Slide 16 pressure-release callback ("...or am I
  about to DDoS the shared scheduler?").
* Land it both directions so it isn't purely deflationary: stop when the answer
  is no; climb without guilt when it's finally yes.

**Speaker beats**
1. Show both axes + rungs together. Let the room photograph it. **[BREATH].**
2. Point at the gradient: left you own the wires, right the framework does.
   One felt sentence — don't over-explain.
3. The checklist, grouped by axis: scale wall / DDoS risk (executor); genuine
   (esp. dynamic) dependencies + reproducibility/resume/portability
   (orchestration).
4. Land both directions: no → stop; yes → climb without guilt.

**Example lines** *(illustrative)*
* "This is the slide to photograph. Two axes, a few rungs each — that's the
  whole map."
* "Underneath runs one gradient: on the left, you hold the wires; on the right,
  a framework does. Moving right trades your cleverness for a shared solution."
* "Climb a rung only if you can say yes: am I hitting a real scale wall — or
  about to DDoS the shared scheduler? Do I have *real* dependencies I'm faking
  by hand? If the answer's no, you're done — stop climbing. When it's finally
  yes, climb without guilt. That's the rung earning its keep."

**Visual:** The full two-axis **decision ladder** (new custom layout) on the
left, with a subtle left→right **"you own it → framework owns it"** gradient
running under each axis (Make/bash = you; Nextflow/HyperShell = framework).
Executor rungs: bash loop → `xargs` → Slurm array → HyperShell (→ HTCondor,
greyed as the heavyweight above). Orchestration rungs: Makefile → Nextflow. On
the right, the checklist **grouped under the two axis headings**, with one boxed
takeaway line ("is this a *shared* problem now, not a personal one?"). This is
the photograph-slide.
**Transition:** *"One more thing the tools won't save you from — the data."*
**Delivery note:** **must-not-skip**, slowest beat in Act 2. The gradient is a
*visual* — say the felt question once, let the picture do the rest. Give the room
time to photograph it.

---

### Slide 20A — Data management · locality & storage tiers (21:15–22:45)

**Context notes**
* Data locality is the part the tools *won't* save you from — movement, not CPU,
  is usually the real bottleneck. Storage is **tiered** because no single medium
  wins on every axis; choosing a tier is itself an *"earn its keep"* decision —
  *don't pay for the fast tier until you need it.*
* The six-property trade-off space is the keeper idea from last year (capacity,
  performance, cost, safety, security, longevity/durability). The diagram is the
  compressible part — name two or three axes verbally if time slips.
* Skip the hardware primer — this room doesn't need "what is persistence" or
  photos of an Optane stick. The *concept* (tiers + trade-offs) is teachable.

**Speaker beats**
1. The reframe: the wall is usually getting bytes to the compute, not the
   compute. Locality is a first-class design concern.
2. No medium wins on everything — gesture at the six-property trade-off cloud.
3. The RCAC tiers as a cold→warm→hot ladder: Fortress → Data Depot → Scratch.
4. The earn-its-keep tie-in: don't pay for the fast tier until you need it.

**Example lines** *(illustrative)*
* "For our kind of work, the bottleneck is almost never the CPU — it's getting
  the bytes to the CPU."
* "There's no perfect filesystem because no medium wins on everything — capacity,
  speed, cost, durability all trade off. So you tier: Fortress is cold tape,
  Data Depot is warm disk, Scratch is hot flash."
* "Scratch is the HyperShell of storage — powerful, and wrong if your problem
  doesn't need it. Don't pay for the fast tier until you do."

**Visual:** Port last year's **storage-property diagram** — the cluster of
labeled circles for the six trade-off axes (**Capacity · Performance · Cost ·
Safety · Security · Longevity/Durability**), re-skinned into Purdue 2026 chrome —
paired with the **cold→warm→hot tier ladder** (Fortress · Data Depot · Scratch)
drawn in the Slide 19 rung grammar. The photograph-slide for the data section.
**Transition:** *"So you've picked your tiers. Now — how do you actually move the
bytes between them?"*
**Delivery note:** The 6-property diagram is the compressible part. If time
slips, name two or three axes (cost · speed · durability) and lean on the tier
ladder alone.

---

### Slide 20B — Staging · from rsync to managed flows (22:45–24:00)

**Context notes**
* Moving data between tiers: you own the bottom rung (a one-line `rsync`); you
  hand control to the framework only when manual staging stops scaling. It *is*
  the same ownership shape as the rest of the talk — but **let the `rsync` →
  Globus progression speak for itself.** The heavy "same lesson, third costume"
  meta-commentary is dialed *way* back (it read as a drumbeat by minute 24);
  one light callback at most.
* Concretely at RCAC: the managed version is **Globus Transfer** (movement) +
  **Globus Flows** (automated, dependency-aware staging). A *light* partnership
  aside — don't let it hijack the teaching beat.
* Parsl + **Globus Compute** is the executor-axis sibling of the same ecosystem
  (callback to Slide 16) — mention only if time is generous.

**Speaker beats**
1. The bottom rung: `rsync` into fast storage, compute, `rsync` back. You own
   it; it's the right starting point.
2. The next rung: make staging a dependency-tracked workflow step — the framework
   owns it. Worth it only when by-hand stops scaling.
3. Light RCAC/Globus aside (~15s): Transfer + Flows; strong Globus partner.
4. One light callback — *not* a drumbeat — then move to agents.

**Example lines** *(illustrative)*
* "The bottom rung is one line: `rsync` your inputs onto fast storage, run, copy
  results back. That's it. Own it by hand — that's the right starting point."
* "When that stops scaling, you make staging a real workflow step — the same
  climb as before, now for bytes. At RCAC that managed version is Globus
  Transfer and Globus Flows; we're a strong Globus partner."

**Visual:** The two-rung **ownership ladder** — bottom rung labeled *"you own
it"* with the `rsync` snippet; top rung labeled *"framework owns it"* (Globus
Flows / workflow-managed staging) — reusing the Slide 19 *"you own it → framework
owns it"* gradient. Keep the Globus marks small; the ladder is the message.
```sh path=null start=null
rsync -a $DEPOT/project/input/ $SCRATCH/run/input/
./run_pipeline $SCRATCH/run/
rsync -a $SCRATCH/run/output/ $DEPOT/project/output/
```
**Transition:** *"There's one new operator showing up in all of this — and it
obeys the same rule."*
**Delivery note:** `rsync` snippet is scenery. **Resist the triple-callback
drumbeat** — the progression speaks for itself; one light "same shape" nod is
plenty. Globus aside stays light.

---

### Slide 21 — One agentic beat · agents as operators (24:00–25:15)

**Context notes**
* AI agents are becoming operators and consumers of these same workflow tools —
  and the thesis doesn't change. This is my day job now, so it's authentic, but
  it's a **signpost, not a theme.** Keep it to one beat; don't let it expand.
* Agentic work has the *same shape* as classic research workflows: tasks, data,
  dependencies, resources. Agents drive these tools (submit jobs, stage data,
  assemble pipelines) through interfaces like MCP servers.
* The rule holds, maybe more so: simplest tool that works, then *verify*. An
  agent that reaches for the Slide 9 monster is just as wrong as a human.

**Speaker beats**
1. My day job is agentic workflows — same shape as everything today.
2. Agents are starting to *drive* these tools (via MCP, etc.).
3. Same rule, maybe more so: simplest thing that works, then verify.
4. Keep it to one beat — signpost, then move to the close.

**Example lines** *(illustrative)*
* "My day job now is agentic workflows — and they have the exact same shape:
  tasks, data, dependencies, resources. The agent is just a new operator."
* "The rule doesn't change. Give the agent the simplest tool that works — and
  verify the result. An agent that builds the Slide-9 monster is just as wrong
  as we'd be."

**Visual:** A single clean panel: an agent loop node feeding into the decision
ladder from Slide 19, captioned *"same rule: simplest thing that works, then
verify."*
**Transition:** *"Which brings me back to where we started."*
**Delivery note:** **One beat only** — compressible to a single sentence. Don't
let enthusiasm for the day job expand it into a second talk.

---

### Slide 22 — Closing · real perfection is simplicity (25:15–26:45) · must-not-skip

**Context notes**
* Invert the cold open. The over-engineered stack wasn't perfection; the
  simplest thing that works is. This is the payoff to the gag — without it the
  talk has no exit.
* End on **craft, not lecture** — the reward isn't austerity; a right-sized stack
  that runs clean and that the next person can understand is just *good
  engineering*, and it feels good. The "purr" image may echo *once*, lightly.
* Keep it dry, not cheeky. Drop any line that plays as too clever in the room.

**Speaker beats**
1. Call back to the gag: "remember the beautiful machine that did the work of a
   `for` loop?"
2. **[BREATH]** — a real pause before the inversion.
3. The inversion: real perfection is the least machinery that solves the problem.
4. One-breath recap (name layers · which axis · climb only when it earns its keep
   · tier data · verify).
5. Land on craft: good engineering is complexity that earns its keep.

**Example lines** *(illustrative)*
* "Remember the beautiful, elegant machine that did the work of a `for` loop?"
* "Real perfection isn't the most impressive stack. It's the least machinery
  that actually solves your problem."
* "Good engineering is complexity that earns its keep — nothing more, nothing
  less."

**Visual:** The inverted "Perfection" beat, kept simple — *no need to re-render
the meme*: a single clean box ("a `for` loop") where the Slide 2 monster used to
be, in the deck's own chrome.
**Transition:** *"Here's where to find everything."*
**Delivery note:** **must-not-skip.** The `[BREATH]` before the inversion is the
last and most important pause in the talk. "Purr" echo at most once; keep it dry.

---

### Slide 23 — Resources & contact (26:45–29:00)

**Context notes**
* Where to learn more; how to reach me. Also the hallway-track routing point —
  tool bake-offs go here, after the close.
* QR row ported from the NAIRR `closing-qr-row` convention.

**Speaker beats**
1. Point at the QR row; don't read URLs.
2. Name the two or three that matter (HyperShell; the agentic thread; Nextflow/
   nf-core).
3. Contact + credit. Walk off on the thesis.

**Example lines** *(illustrative)*
* "Everything's on these codes — HyperShell, the agentic-era work, the two ends
  of the orchestration axis."
* "Find me after, or email me. Start simple. Thanks."

**Visual:** Clean Purdue 2026 closing card in the **NAIRR `closing-qr-row`
convention** (port the layout from `../2026-nairr-workshop-talk/`): a row of
back-of-room-scannable QR codes along the bottom, each with a small label, RCAC
reverse mark centered below, email + credit line. Proposed QR set (5 — fits the
row; cull to 4 if crowded): **HyperShell** · **PEARC'26 paper** · **rcac-mcp** ·
**globus-mcp** · **Nextflow / nf-core**. RCAC docs can be a spoken pointer if
space is tight.
**Resource list (speaker reference):** HyperShell (`hypershell.org`,
`github.com/hypershell`); PEARC'26 *Hello Computer: HPC in the Agentic Era*
(`github.com/glentner/pearc26-hello-computer`); `rcac-mcp`
(`github.com/purduercac/rcac-mcp`); `globus-mcp`
(`github.com/purduercac/globus-mcp`); RCAC docs (clusters, throughput/workflow,
data tiers); GNU Make + Nextflow/nf-core; contact `glentner@purdue.edu`; credit:
work supported by RCAC at Purdue.
**Closing line:** *"Start simple. Thanks."*
**Build note (QR generation, per NAIRR):** generate codes at ≥410px, high
error-correction (`-Q` or better), pull in ~5rem, verify a scan from ~15ft.
Favor short canonical URLs where one exists (e.g. `hypershell.org`).

## 5) Slide architecture

* **Total:** ~22 narrative beats across **24 physical slides** (the data beat is
  two slides, 20A + 20B; Slide 17b is a slide-reverse, not a new physical
  slide).
* **Opening order (changed this session):** **Title → Cold open → About RCAC →
  About Me → Thesis → Zoo.** "Jump to the middle" — the gag hooks the room
  before any self-intro; About Me then *earns* the joke; the Thesis resolves the
  gag's dangling question right before the Zoo.
* **Pacing — dynamic range, not a uniform average.** This is the cure for "feels
  rushed." **Act 1 (Slides 1–9, ~9 min) is deliberately fast/dense** — the
  impress; the zoo (Slide 6) and the anatomy (Slide 9) are the density peaks.
  **The turn (Slide 10) shifts gears.** **Act 2 (Slides 11–23, ~18 min) is
  deliberately slow** — the climb's snippets fly by as scenery, but the *ideas*
  (two axes · Slide 16 pressure-valve · 17b "who holds the wires" · Slide 18
  human-scalability · Slide 19 ladder) get room. Mark the **[BREATH]** points
  (Slides 2, 6, 12, 19, 22) and *take them* — silence is what makes a dense talk
  feel unhurried.
* **Scenery vs. idea.** Every code snippet (Slides 13–18, 20B) is scenery —
  gesture, don't teach. The must-land *ideas* are few and named per slide. The
  talk is inspiration, not instruction.
* **Layout inheritance:** all slides inherit from the Purdue 2026 template
  family documented in `THEME.md` (to be ported from
  `../2026-nairr-workshop-talk/`) — cover, section divider, content, two-panel
  split, card grid, closing card — with **RCAC** marks substituted for generic
  Purdue marks. New custom layouts unique to this deck: the **About RCAC**
  layout (photo cluster + squiggle-boxed pillars, Slide 3), the **triple-point
  Venn** (Slide 4), the **Zoo logo-wall** (Slide 6), the **Rube Goldberg stack**
  (Slides 9–10), the **two-axis decision ladder** (Slides 12, 19), the
  **storage-property + tier diagram** (Slide 20A, ported from last year's circle
  diagram), and the **data-staging ownership ladder** (Slide 20B).
* **Two code aesthetics, kept distinct (per GOAL.md):** a *terminal-window*
  treatment for **commands you run** (Slides 13, 14, 15, 16, 20B) and a
  *code/definition* treatment for **workflow definitions** (Slides 17, 18). Do
  not blur the two.

## 6) Must-not-skip slides

If the prior session runs long, the HDMI adapter dies, or the moderator flashes
the two-minute card early, these still must be told for the talk to cohere:

1. **Slide 2 — the cold open.** The hook. Without the gag there's no rhetorical
   posture and no payoff to invert at the end.
2. **Slide 4 — About Me.** The systems · science · software triple-point is the
   credibility that licenses the thesis and the anti-grumpy anchor; it's also
   the payoff that earns the cold-open joke.
3. **Slide 12 — two axes, not one ladder.** The core intellectual contribution.
   Everything technical hangs on it.
4. **Slide 16 — HyperShell + the pressure-release valve.** The executor-axis
   payoff: the system-level reason an executor earns its keep (`slurmctld`
   DDoS) and the worked example that proves the talk isn't anti-tool.
5. **Slide 19 — the decision ladder + checklist.** The single most portable
   artifact; the thing undergrads carry home.
6. **Slide 22 — real perfection is simplicity.** The inversion that closes the
   loop. Without it the talk has no exit.

*Also high-value (don't cut lightly): Slide 17b (the "who holds the wires?"
reframe) and Slide 18 (human scalability) — together they're the orchestration-
axis payoff.*

Compressible if time slips: Slide 3 (About RCAC — first to cut; one sentence if
the room already knows RCAC), Slide 14 (`xargs` — collapse to one sentence and
fold GNU Parallel in verbally), Slide 7 (on-ramp — one line if the room is
HPC-literate), Slide 15 (Slurm array — verbal mention between `xargs` and
HyperShell), the 6-property diagram on Slide 20A (collapse to the bare
cold→warm→hot ladder), Slide 21 (agentic beat — one sentence). Never compress
2, 4, 12, 16, 19, or 22.

## 7) Delivery aids

* **Opening anchor sentence** (off the cold-open stack, now the literal open):
  > *"This is beautiful, it's elegant, and it does the exact work of a `for`
  > loop. Today is about telling the difference between complexity you need and
  > complexity you've been sold — but first, who am I to say that?"*
* **Pacing aids (the cure for "feels rushed"):**
  * **[BREATH] points** — deliberate silence at Slides 2 (after "`for` loop"),
    6 (after the zoo reveal), 12 (after the two-axis reveal), 19 (let the room
    photograph the ladder), 22 (before the inversion). *Take them.*
  * **Act gears** — Act 1 fast/dense (impress); the turn at Slide 10; Act 2
    slow/deliberate (walk-back). If you feel rushed, you're probably racing
    through an Act-2 *idea* that deserves air, or lingering on Act-1 *scenery*.
  * **Scenery, not lesson** — for every snippet, say some version of "you don't
    need to read this," gesture, and move. The snippets are texture.
* **Recurring rhetorical beats:**
  * *"The unicorn at the triple-point."* (About Me on Slide 4; the
    systems · science · software cross-domain perspective that earns the judgment
    the rest of the talk trades on. Reprised implicitly whenever the
    academic↔industry parallel comes up.)
  * *"Does it earn its keep?"* (Thesis on Slide 5; the literal checklist on
    Slide 19; reprised on Slides 16, 18, 20A.)
  * *"A pressure-release valve for the scheduler."* (Slide 16; the executor
    axis's system-level payoff — a million job-steps DDoS `slurmctld`, so an
    executor takes one allocation and meters tasks internally. Turns "earn its
    keep" from a convenience argument into a shared-infrastructure argument; the
    strongest single reason on Axis 1.)
  * *"Who's holding the wires?"* (The control gradient as a *felt* question —
    Slide 17b reframe, reprised on the Slide 16 climb and the Slide 19 ladder
    gradient. Kept as flavor, NOT a second formal framework.)
  * *"Each rung adds one capability."* (The executor-axis feature ratchet —
    iteration → bounded parallelism (`xargs`) → failure tracking (ParaFly) →
    retries (GNU Parallel) → cross-node (Slurm array) → extreme scale +
    infra-protection (HyperShell) → heavyweight (HTCondor). Slides 13–16;
    reprised on the Slide 19 ladder.)
  * *"Merchants of complexity."* (Slide 11; reprised in the Slide 22 close — but
    kept light/funny, not bitter.)
  * *"This could have been a Makefile and a cron-job."* (Slide 11; the
    industry-platform lament — reusable any time someone over-builds.)
  * *"Same handful of layers — only the brand names change."* (Slide 10; the
    academic↔industry parallel, Slurm/Kubernetes · Make/Airflow ·
    Apptainer/Docker · logs+cron/Datadog.)
  * *"Which axis are you on?"* (Slide 12; reprised on Slide 19.)
  * *"The simplest thing that works."* (Slide 5; the walk-off on Slide 22.)
  * *"Make it purr."* (Love-of-craft counterweight — Slide 4 (About Me) setup,
    Slide 5 thesis framing, Slide 22 payoff. Keeps the whole talk on the
    enthusiast-with-judgment side, not the grumpy-old-man side.)
  * *"The map outlasts the tools."* (Honest-scoping beat — Slide 12 reveal,
    reprised on Slides 16 and 18. Signals the deep dives are deliberately chosen
    narrow slices, names what's skipped, and owns the academic-HPC bias as a
    strength. The takeaway is the two *questions*, not the brands.)
* **The four jobs of this talk (PRIVATE design constraint — do NOT recite on
  stage; the literal "four jobs" beat was cut this session).** Use them only to
  audit slides: (1) show what I'm passionate about and do for a living; (2) give
  a general *survey* / map of the landscape; (3) leave every student with
  practical advice useful *now* — a portable rule of thumb — *even if workflows
  aren't their summer project yet*; (4) stay honest about scope: deep on a
  couple of slices I know from the RCAC trenches, explicit about the rest. If a
  slide drifts away from all four, it's a candidate to cut or reframe.
* **Risk register:**
  * *Time slips.* Cut Slide 3 (About RCAC) to one sentence first; then collapse
    Slide 14 (`xargs`) to one sentence and Slide 15 (Slurm array) into a verbal
    aside, trim Slide 7 to one line, and drop the Slide 6 Zoo to a few seconds.
    Never compress 2, 4, 12, 16, 19, 22.
  * *Time expands.* Restore the full 6-property trade-off diagram on Slide 20A,
    expand the nf-core beat on Slide 18, or give the executor-axis callouts more
    air (the ParaFly/GNU Parallel/HTCondor asides on Slides 14–16).
  * *HPC-novice room.* Slow down on Slide 7 (capability vs. capacity) and
    Slide 13 (the bash loop); these are the undergrad on-ramps.
  * *Practitioner-heavy room.* Lean into the executor-axis asides (GNU Parallel
    and HTCondor on Slides 14/16, the `slurmctld`-DDoS detail on Slide 16, the
    Make-in-data-science history on Slide 17) and move faster through the
    on-ramp.
  * ***Tone drift — the "old man yells at cloud" failure mode.*** Still the
    biggest delivery risk, but **lower than before** because the audience is now
    *invited into the joke* (the shared-pain line on Slide 6: "...the bane of my
    existence — yours too, someday"). **Antidote:** lean on shared-pain humor,
    not balance-bullets; keep Slide 11 light (the $200M line is a throwaway);
    keep HyperShell as living proof I build *and* love new tools (Slide 16); land
    Slide 22 on the *purr*, not austerity. If you feel yourself getting cranky,
    name a tool you genuinely love and why it earned its keep.
* **Hallway-track routing:** Snakemake vs. Nextflow vs. Parsl/Dask debates,
  Kubernetes-vs-Slurm, MCP server design, and "which tool for my specific
  pipeline" — all routed to the hallway after the closing card. The talk is a
  *mental model*, not a tool bake-off; don't let Q&A pull it into one.

## 8) Open TODOs for Geoffrey

* **Slide 3 (About RCAC).** Supply source assets to port the existing
  PowerPoint: the machine-room / *Fortress* mural / rack photos and the
  `rcac.purdue.edu` QR. Confirm the current pillar wording and which pillars get
  the **squiggle-box** cross-cutting highlight (systems / science / software).
  Geoffrey to relay local file paths.
* **Slide 4 (About Me).** Supply the headshot. **Redesign the Venn labels** to
  map cleanly onto systems · science · software and the triple-point (center =
  facilitator/unicorn); decide the final label set vs. the old example
  (HPC / Facilitator / Developer / RSE / Technologist / Data Scientist / AI /
  Educator / Astrophysicist). Geoffrey to relay the local image path.
* **Slide 2 / Slide 22.** Pick the best "Perfection" meme image for the cold
  open and decide how the inversion re-renders it minimally (the `for`-loop
  box). Optionally consider a custom Purdue-style absurd-stack illustration if
  it reads better than the meme — purely an aesthetic call. **Reorder note:** the
  cold open is now Slide 2 (right after the title); confirm the "jump to the
  middle" open feels right in rehearsal.
* **Slide 6 (the Zoo).** Lock the final logo set, grouping, and
  size-by-popularity layout. **Decide on the cascade/pile-up build** (logos
  accumulating) vs. a single reveal.
* **Slide 9.** Final visual direction for the dense "anatomy" diagram — exact
  boxes, vertical vs. layered orientation, and how it re-renders into the
  labeled Slide 10 version.
* **Slides 13–18 (the rung snippets).** All snippets are on-slide *as scenery*
  (decided: nobody needs to read them; fastq stays — domain-flavored scenery
  reads as more real). Confirm you're comfortable standing behind them anyway.
  The `xargs -P` quoting (Slide 14) no longer needs simplifying for legibility
  given the scenery framing, but simplify if it bugs you on stage.
* **Slide 16 (HyperShell + pressure-release valve).** (1) Confirm you're
  comfortable with the level of self-reference (HyperShell as the "earned its
  keep" worked example). (2) The feature callout box is drawn from the v2.8.0
  release notes (`hypershell/docs/blog/20251101_2_8_0_release.rst`) and README —
  it's **task groups** for dependency management (not "dependency groups"), plus
  resource-aware scheduling, DB-in-the-loop with retries, and staggered launch
  to 1000+ nodes / 250k+ workers; confirm the exact 3–4 you want on the slide.
  (3) Sanity-check the `slurmctld` framing (array-size ceiling *and*
  RPC/controller pressure) against how you want to phrase the "DDoS" line for a
  mixed REU audience. (4) Confirm the HTCondor "heavyweight rung above /
  competing with" framing.
* **Slide 20A/20B (data).** Confirm the exact RCAC tier names/marketing names
  and any current guidance you want to cite (Fortress / Data Depot / Scratch).
  For 20A, confirm the six trade-off axes to label on the ported circle diagram
  (Capacity / Performance / Cost / Safety / Security / Longevity-Durability) and
  whether all six survive or you'd rather show fewer. For 20B, confirm the
  Globus partnership phrasing (dedicated Flows staff; campus-wide MEP rollout;
  Anvil = first public MEP worldwide; Globus World showings) and how much to say
  aloud vs. leave to the `globus-mcp` QR on Slide 23. **Reframe note:** the
  "same ownership ladder, third time" meta-commentary was dialed back this
  session — confirm you're happy letting the `rsync`→Globus progression speak
  for itself with at most one light callback.
* **Slide 23 (resources).** Finalize the resource list and which links get QR
  codes (proposed 5-code row: HyperShell · PEARC'26 · rcac-mcp · globus-mcp ·
  Nextflow/nf-core; cull to 4 if the row gets crowded).
* **Scaffolding.** Slidev version pin and a dev port distinct from siblings
  (3032/3033/3034) — proposed **3035**. To be settled in `ROADMAP.md`, not here.
* **Visual identity.** Port `THEME.md` from the NAIRR deck and note the seven
  new custom layouts (About RCAC, triple-point Venn, Zoo logo-wall, Rube
  Goldberg stack, two-axis ladder, storage-property + tier diagram on 20A, and
  the data-staging ownership ladder on 20B).
