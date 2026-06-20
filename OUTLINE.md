# REU Summer Seminar 2026 — Talk Outline

> **Venue:** Summer REU Seminar Series · Envision Center, Purdue University, West Lafayette, IN &nbsp;|&nbsp; **Slot:** 45 minutes &nbsp;|&nbsp; **Target:** ~30 minutes (leave ~10–15 for Q&A) &nbsp;|&nbsp; **Ceiling:** 40 minutes
> **Speaker:** Geoffrey Lentner, Principal AI Scientist, Rosen Center for Advanced Computing (RCAC), Purdue University
> **Working title:** *Workflow Engineering, Data Management, and Advanced Automation — or, How Not to Build a Rube Goldberg Machine*
> A refinement of last year's REU seminar (*Data Management and Workflow Templates*). That talk cataloged the zoo; this one gives the zoo a spine. Primary audience is REU undergraduates; RC professionals get the in-jokes and asides.

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
for judgment instead. A short prelude grounds the room — a quick *About RCAC*
for any community visitors, and an *About Me* that frames my cross-cutting
perspective at the **systems · science · software** triple-point — so the
playfulness that follows reads as an expert at ease, not a novice complaining.
Then we open with a deliberately absurd over-engineered stack — the
*"Perfection"* gag — to shock the room with how baroque a workflow *can* get,
and state the thesis plainly: **start simple; add complexity only where it
earns its keep.** The posture is not anti-complexity or anti-tool — I've been
building and debugging workflows since before Kubernetes or Azure existed, and
I built HyperShell myself because GNU Parallel wasn't right for HPC — it's
about *maturing with* the complexity rather than being seduced by it.
We give the room a small on-ramp (capability vs. capacity computing), dissect
the over-engineered stack into named layers so the zoo becomes legible, and
then deliver the load-bearing idea: workflow tools live on **two distinct
axes** — an *executor/scale* axis (how you run many tasks: bash loop → Slurm
job array → HyperShell) and an *orchestration/DSL* axis (how you express
relationships between tasks: GNU Make → Nextflow). Each rung is anchored by a
real, runnable artifact on the slide. We close the technical arc with a
*decision ladder* and a verbal "does this layer earn its keep?" checklist,
tighten the data-management story around locality and storage tiers, land one
short beat on agents as emerging operators of these same tools, and invert the
opening gag: **real perfection is the simplest thing that works.**

## 2) Narrative spine

* **Who's talking, and from where.** A brief prelude: RCAC's role (for
  visitors) and, more importantly, *my* vantage point — a facilitator who cuts
  across **systems, science, and software**. That cross-domain "unicorn"
  perspective is what earns the judgment the rest of the talk trades on.
* **This is a craft worth loving.** Operationalizing research workflows — from
  a Jupyter notebook to scale-out automation on a supercomputer — is deeply
  satisfying work. The goal is *getting the job done at scale*, and getting a
  stack right feels great. We come at this as an enthusiast, not a cynic.
* **The zoo is real and it is absurd.** That same enthusiasm can run away from
  you: workflows get stacked into a Rube Goldberg machine that only the
  builder understands. We laugh at it first, on purpose — with affection, not
  contempt. A literal logo-wall "zoo" makes the scale of the landscape
  visible up front and earns the metaphor.
* **Thesis: complexity must earn its keep.** Start simple. Add a layer only
  when the workflow demonstrably needs it. This is *maturity with* complexity,
  not hatred of it — the opposite of being a "merchant of complexity."
* **The zoo is legible.** The over-engineered stack is not magic; it is a
  finite set of named layers (executor, orchestration/DAG, templating/DSL,
  container, persistence, resource manager). Naming them defuses them.
* **Two axes, not one ladder.** The thing to carry home: *executor/scale*
  (run many tasks) and *orchestration/DSL* (relate tasks) are different
  questions. Most workflows only ever need one of them.
* **Each rung is real.** Bash loop, `xargs`, Slurm array, HyperShell
  one-liner; Makefile, Nextflow process. Real artifacts, shown on screen,
  climbed only as far as the problem demands. The executor axis is its own
  little zoo: each rung exists because the one below it hit a wall
  (parallelism → failure tracking → retries → cross-node scale-out), and at
  the extreme end a dedicated executor is a **pressure-release valve** for the
  scheduler itself.
* **Make reaches further than it looks — the difference is *control*, not
  *capability*.** Before selling Nextflow, I walk it back honestly: containers,
  cluster executors, resume, and modularity can all be *shimmed into Make* with
  conventions (a `$(RUN)` template, atomic `mv`, child-Makefiles). The reason
  to climb isn't that Make *can't* — it's that a framework makes these the
  *framework's* job. That delegation buys **human scalability**: like a
  language's built-in packaging index, Nextflow + nf-core offloads complexity
  to a *shared community problem* via forced, uniform plug-points.
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
| 0:30–1:15 | 2 | About RCAC — the center & where I sit (compressible) |
| 1:15–2:30 | 3 | About Me — systems · science · software triple-point |
| 2:30–4:00 | 4 | Cold open — the "Perfection" over-engineered stack |
| 4:00–4:45 | 5 | Thesis card — *complexity must earn its keep* |
| 4:45–5:30 | 6 | The Zoo — literal logo-wall of the landscape (backdrop) |
| 5:30–6:30 | 7 | On-ramp — capability vs. capacity |
| 6:30–7:30 | 8 | Why the layers exist (concern → layer) |
| 7:30–9:00 | 9 | Anatomy of an over-engineered workflow (centerpiece) |
| 9:00–10:30 | 10 | Decompose the layers |
| 10:30–12:00 | 11 | "Merchants of complexity" (incl. academic vs. industry) |
| 12:00–12:45 | 12 | Two axes, not one ladder (framework reveal) |
| 12:45–13:30 | 13 | Axis 1 — executor/scale: the bash loop |
| 13:30–14:15 | 14 | Axis 1 — `xargs` (the first taming) |
| 14:15–15:15 | 15 | Axis 1 — Slurm job array |
| 15:15–16:45 | 16 | Axis 1 — HyperShell + the pressure-release valve |
| 16:45–17:30 | 17 | Axis 2 — "Make is all you need" |
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
slide; the data beat is now two slides, 20A + 20B). The prelude (Slides 2–3)
is paid for by a lean ~30s title, a tighter thesis/Zoo, and brisk
executor-axis rungs (Slides 13–16) — the climb is four fast snippets, not four
full stops. If time slips, the first cuts are About RCAC (Slide 2), the
`xargs` rung (Slide 14), and the 6-property trade-off diagram on 20A
(collapse to the bare cold→warm→hot ladder); About Me (Slide 3) is must-tell.*

## 4) Slide-by-slide talking points

### Slide 1 — Title (0:00–0:30) · lean cover

* **Core message:** Name, title, talk title — fast. The deep self-intro lives
  on the next two slides, so keep this to a clean ~30s landing.
* **Talking points (brief — don't linger; About Me does the contextualizing):**
  * Geoffrey Lentner, Principal AI Scientist at Purdue's Rosen Center for
    Advanced Computing.
  * The talk in one line, said positively: how to take research and data
    analysis **from a Jupyter notebook to scale-out automation on a
    supercomputer** — and how to do it *without* losing your mind.
* **Visual:** Purdue 2026 cover layout — black field, gold border, centered
  title/subtitle, **RCAC** horizontal mark, venue + date in the upper margin.
* **Transition:** *"First, two quick frames — where this work happens, and
  where I sit in it."*

### Slide 2 — About RCAC · the center & where I sit (0:30–1:15) · compressible

* **Core message:** A fast orientation to the Rosen Center for any community
  visitors — but really a setup for *where I fit*: a versatile member who cuts
  across the **systems, science, and software** teams.
* **Talking points (keep to ~45s):**
  * One-liner on RCAC: research computing & data services at Purdue — "RCAC
    for short," part of Purdue IT.
  * The pillars, named quickly: we **operate Top500 supercomputers** with
    PB-scale storage; we support **scientific applications**; we run the
    **Envision Center** (a nod — *we're standing in it*); and we do **research
    software engineering**.
  * **The real move (squiggle-box highlight):** my work cuts *across* these —
    systems, science, and software at once. *"I don't live in one of these
    boxes; my job is to move between them."* This is the hand-off into About Me.
  * **REU framing, said openly:** *"Most of you have been here a few weeks and
    have already heard about RCAC — so I'll be quick. This is mostly for any
    visitors, and an excuse to show you where I sit."*
* **Visual:** Port of the existing PowerPoint — title "Rosen Center for Advanced
  Computing," subtitle "Research computing and data services at Purdue
  University"; a photo cluster (machine-room aisle, the *Fortress* mural, a
  staffer at a rack) on the left; bulleted pillars on the right with hand-drawn
  **squiggle boxes** around the cross-cutting ones (systems / science /
  software). Purdue+RCAC marks, `rcac.purdue.edu` QR. (Source image to be
  supplied by Geoffrey; new themed layout.)
* **Transition:** *"That cross-cutting seat is the whole reason I see this the
  way I do — so, a bit more about me."*
* **Delivery note:** This is the compressible slide. If the prior session ran
  long, collapse to one sentence ("you know RCAC; here's where I sit") and move
  straight to About Me.

### Slide 3 — About Me · systems · science · software (1:15–2:30) · must-tell

* **Core message:** My perspective *is* the argument. The credibility that lets
  me say "add complexity only when it earns its keep" comes from sitting at the
  **triple-point** of systems, science, and software — the "unicorn"
  facilitator who knows enough of each to translate between all three.
* **Talking points (60–90s — this is the anti-grumpy-old-man anchor):**
  * The Venn framing: research-computing facilitation is a *triple-point* job.
    *"I know more Linux than most scientists, more about hardware — NUMA
    domains, interconnects — than most software engineers, and more science
    than most systems people. Not deepest in any one; fluent across all
    three."* That breadth is the rare thing — the "unicorn."
  * The personal arc (mirrors the talk's own *Jupyter → scale-out* journey):
    trained as an **astrophysicist** → **data science at scale on HPC** →
    **full-stack research software engineering** → now **AI / agentic
    workflows**. Each step added a domain without abandoning the last.
  * Earned authority, said warmly: I've been building and debugging research
    workflows **since before Kubernetes, before "the cloud" was a product you
    could buy** — long enough to have strong opinions, and long enough to have
    *earned* them. I build tools too (HyperShell). *Enthusiast first.*
  * **What this talk is (set expectations honestly — four jobs at once):**
    (1) a glimpse of what I'm passionate about and do for a living; (2) a
    general *survey* / map of the landscape; (3) *practical advice you can use
    now*, even if workflows aren't your summer project — a portable rule of
    thumb and a few commands; (4) *honest about scope* — deep on a couple of
    narrow slices I know from the trenches, explicit about what I'm skipping.
  * One-line promise: by the end you'll have a mental model for deciding how
    much machinery your workflow actually needs. *You don't have to be "a
    workflows person" today for this to be useful later.*
* **Visual:** Port of the existing "About Me" slide — a three-circle Venn
  (**Systems · Science · Software**) with role labels placed by overlap, a
  headshot + name/contact block on the left. **Redesign the labels** to map
  cleanly onto the three domains and the triple-point (e.g. the center =
  *facilitator / the unicorn*; pairwise overlaps and single-domain anchors
  chosen to tell the systems↔science↔software story rather than list every job
  title). Exact label set is a TODO. (Source image/headshot to be supplied by
  Geoffrey; new themed layout — the "triple-point Venn.")
* **Transition:** *"Now — because I love this stuff, let me start with my
  favorite cautionary tale."*

### Slide 4 — Cold open · the "Perfection" stack (2:30–4:00)

* **Core message:** Workflows can be over-engineered into absurdity. Laugh,
  then turn.
* **Talking points:**
  * Walk the deliberately ridiculous stack out loud, top to bottom: a *web
    service* controls a *scheduler* that maintains a *DAG* to track
    relationships and spawn *service workers* via *Slurm* that spin up
    *containers* to run… a single *Python function* that does the real thing.
  * The X-Men "Perfection" beat: *"It's beautiful. It's elegant. And it does
    the work of a `for` loop."*
  * The Rube Goldberg warning: a workflow only its builder can understand is
    a liability, not an achievement.
  * The turn: *"Some of this complexity is necessary. Most of it isn't.
    Today is about telling the difference."*
* **Visual:** The X-Men "Perfection" gag image (use the best available copy),
  overlaid on / beside a dense absurd-stack diagram. Minimal text; let the
  image and the spoken stack carry it.
* **Transition:** *"So here's the one sentence I want you to leave with."*
* **Delivery note:** Use the silence after "does the work of a `for` loop."
  Let the laugh land before the thesis.

### Slide 5 — Thesis card (4:00–4:45)

* **Core message:** The single sentence everything hangs on — framed as
  *discipline born of love for the craft*, not distaste for it.
* **Talking points:**
  * *"Start simple. Add complexity only where it earns its keep."*
  * The counterweight (say it so the rest doesn't read as grumbling): *I'm not
    here to yell at the cloud.* When you get a workflow stack right, watching
    it run is like hearing a rebuilt engine turn over and **purr** — it's one
    of the most satisfying things in this job. The danger is precisely that
    the satisfaction tempts you to add *more* than the problem needs.
  * Two failure modes: under-engineering (manual, unrepeatable, doesn't
    scale) and over-engineering (the Slide 4 monster). The craft — and the
    *fun* — is in finding the floor that actually solves your problem.
  * Frame the talk: we'll build a vocabulary for *naming* complexity and a
    *decision tool* for *adding* it deliberately — so you can mature *with* the
    complexity instead of being sold it.
* **Visual:** Purdue 2026 "Overview" tan/buff section-divider card, one large
  thesis line, short caption: *"the simplest thing that works."*
* **Transition:** *"Now — before any advice — let me show you the whole zoo at
  once, so you see what we're up against."*

### Slide 6 — The Zoo · a literal logo-wall (4:45–5:30) · backdrop, ~45s

* **Core message:** *Look how much is out there.* One intentionally dense
  spread of brand logos — the whole landscape at a glance — as the backdrop
  for: "there's far more here than thirty minutes can hold; let me try to say
  something *intelligent* about the whole space and what I think matters for
  research on HPC, with a few asides to industry."
* **Talking points (keep to ~45s — this is a backdrop, not a tour):**
  * Don't read the logos. Gesture at the wall: *"This is the zoo. Every one of
    these is a real, capable tool somebody loves and depends on."*
  * The honest setup: *"I can't cover all of this — nobody could in half an
    hour. So I'm going to give you a way to *think* about all of it, then go
    deep on the few slices I know best from our HPC."*
  * Foreshadow the structure: the apparent chaos is actually organized — the
    logos cluster into a *handful of layers* (next slides) and, later, onto
    *two axes* (Slide 12). *"By the end, you'll be able to drop any logo on
    this wall — even a new one — into the right box."*
  * Bias, owned: *"I'm weighting this toward what I actually see researchers
    run on our systems; industry leans on a different corner of the same wall,
    and I'll point at that as we go."*
* **Visual:** A dense, deliberately-busy **logo wall** — the talk's literal
  "zoo." Arrangement carries meaning so it rewards a second look:
  * **Grouped by layer** (soft clustered regions, optionally faintly labeled):
    *schedulers/resource managers* (Slurm, Kubernetes, PBS/Torque, LSF,
    HTCondor); *executors/scale* (GNU Parallel, HyperShell, Dask, Ray, Parsl,
    Globus Compute); *orchestration/DAG* (GNU Make, Nextflow, Snakemake,
    Airflow, Luigi, Cromwell/CWL, Globus Flows); *data movement* (Globus,
    `rsync`); *containers* (Docker, Apptainer/Singularity, Podman);
    *languages* (Python, R, MATLAB, Julia, Bash); *observability* (Datadog,
    Grafana/Prometheus, plain logs+cron).
  * **Size ≈ popularity / prevalence** so the eye lands on the heavy hitters.
  * Light foreshadow of the two-axis split (executor cluster vs. orchestration
    cluster sit on opposite sides) without labeling axes yet.
  * **New custom layout** (the "Zoo logo wall"). Use the real, best brand
    logos for every tool.
* **Transition:** *"It looks like chaos. It isn't. Let me give you the
  ground-clearing first, then start sorting this wall."*
* **Delivery note:** Resist the urge to narrate logos — the *density* is the
  message. ~45s max; the wall is wallpaper for the spoken framing.

### Slide 7 — On-ramp: capability vs. capacity (5:30–6:30)

* **Core message:** Two kinds of computing, told through one archetypal
  contrast: the *monolith* vs. the *layered stack*. This talk is about the
  second — and that second world is where the scaffolding (and the zoo) comes
  from.
* **Talking points:**
  * **Capability (the monolith).** Picture a research group maintaining one
    giant, glorious Fortran code-base that does *everything*: an MPI code that
    spans a leadership-class supercomputer and wrangles all the communication
    and data handling itself, in one monolithic source tree. The problem is
    tightly coupled — they *have* to write it this way. The whole machine
    works on one problem at once. Complexity lives *inside* the code.
  * **Capacity (the layered stack).** Throughput/workflow computing has the
    benefit *and* the curse of abstraction. Our tasks aren't coupled — at most
    they have *dependency relationships* that affect ordering — so instead of
    one monolith we get a stack of layers, each a separate tool:
    * **application layer** — our actual task code;
    * wrapped in an **orchestration layer** (Make / Nextflow) that handles
      ordering and relationships;
    * which may delegate to a **data layer** for staging/movement;
    * on top of a **resource scheduler** that grabs heterogeneous compute
      (cluster nodes, cloud);
    * with **containerization** pushed down to wrap each task's environment.
  * The trade: the monolith *has* to be complex; the workflow gets to *choose*
    its complexity, layer by layer. That freedom is the benefit — and the
    curse, because every layer is optional and every layer is a temptation.
  * **The key move, planted here:** this is **scaffolding with incremental
    complexity.** You add layers only as the problem demands them. Hold that
    thought — it's the whole talk.
  * One-liner: *"The monolith asks 'how big?'; the workflow asks 'how many,
    and how much scaffolding do I actually need?'"*
* **Visual:** A two-panel split. **Left:** one solid block labeled
  *"monolithic MPI code"* spanning a row of nodes — complexity sealed inside.
  **Right:** the same work as a *stack of labeled layers* (application →
  orchestration → data → scheduler → containers) sitting over a swarm of
  independent tasks. The right panel deliberately previews the layer
  vocabulary that Slides 9–10 will decompose.
* **Transition:** *"Before we judge any of those layers, it's worth asking why
  they exist at all."*

### Slide 8 — Why the layers exist (6:30–7:30)

* **Core message:** Each layer answers a real operational concern. The
  scaffolding isn't arbitrary — every legitimate concern spawned its own
  layer. That's the *origin* of the zoo (and why it's so tempting to grab the
  whole thing).
* **Talking points:**
  * It's not enough to write code in a notebook in VS Code. To run real work
    you have to *operationalize* it, and each concern maps to a layer from the
    last slide:
    * **install/deploy & environment** → containerization;
    * **versioning & inputs** → templating / DSL;
    * **ordering & dependencies** → orchestration;
    * **data movement & locality** → the data layer;
    * **matching tasks to heterogeneous resources** (cores, memory, GPU,
      cloud) → the resource scheduler;
    * **completion / history / state** → persistence;
    * **knowing what happened — logs, failures, alerts** → observability.
  * Each concern is a place a tool genuinely *can* help — and exactly the same
    place a tool can be added *needlessly*. The layer is justified by the
    concern, not by its existence.
  * The honest version of the thesis: the question is never "is this layer
    good?" It's *"do I have this concern, today, at a scale that the layer
    below can't handle?"*
* **Visual:** The Slide 7 layer stack, annotated — each layer paired with the
  operational concern that justifies it (concern → layer). Sets up Slide 9 as
  "what happens when you grab every layer whether or not you have the concern."
* **Transition:** *"Now grab every layer at once, whether you need it or not —
  and you get this."*

### Slide 9 — Anatomy of an over-engineered workflow (7:30–9:00) · centerpiece

* **Core message:** The "shock" slide — one dense diagram of a maximalist
  workflow stack. The visual centerpiece of the talk.
* **Talking points:**
  * This is the Slide 4 gag drawn seriously: a full Rube Goldberg stack with
    every layer present at once.
  * Don't explain it yet — let the density do the work. *"This is real. People
    build this. Sometimes they even need to."*
  * Plant the question we'll answer: *"How would you know which of these boxes
    you actually need?"*
* **Visual:** A single dense vertical/stacked diagram showing the full
  over-engineered pipeline (web service → resource manager → DAG engine →
  containerized steps → templating DSL → persistence/DB → observability/SaaS
  dashboards → the actual compute). This is a **new custom layout** (the
  "Rube Goldberg stack"). It is the dense Zoo of Slide 6 collapsed into a
  single *teetering* stack — same tools, now stacked instead of scattered.
* **Transition:** *"Step one to taming it: give every box a name."*

### Slide 10 — Decompose the layers (9:00–10:30)

* **Core message:** The zoo is a finite set of named layers — and those layers
  are *universal*. The academic stack and the industry stack solve the same
  layers with different tools.
* **Talking points (one beat per layer, with the academic↔industry parallel):**
  * **Executor** — actually runs the tasks (the CPU/GPU hands).
  * **Resource manager / scheduler** — decides *where* and *when*: **Slurm** on
    our clusters; **Kubernetes** on our on-prem cloud and in industry.
  * **Orchestration / DAG** — encodes *relationships and ordering*: **Make /
    Nextflow** in research; **Apache Airflow** and friends in industry.
  * **Data movement / staging** — gets bytes to where the compute is:
    **`rsync`** for the hand-rolled version, **Globus** (Transfer / Flows) for
    the managed, automated version on research infrastructure. (RCAC is a
    strong Globus partner here — more on that at Slide 20B.)
  * **Templating / DSL** — parameterizes task definitions (e.g. Jinja-style).
  * **Containerization** — packages the environment: **Apptainer** on HPC;
    **Docker** on the cloud.
  * **Persistence / database** — tracks state, results, and history.
  * **Observability** — knowing what happened: logs, failures, alerts;
    `stdout`/`stderr` + `cron` mail in research, **Datadog** and friends in
    industry.
  * The parallel matters for *this* room: REU students here will touch Slurm
    and Apptainer, but many will graduate into Kubernetes (our on-prem cloud)
    or industry stacks built on Airflow, Docker, and Datadog. *Same handful of
    layers, every time — only the brand names change.*
  * Land it: *"Every box on the last slide is one of these layers. Most
    workflows need one or two — not all of them."*
* **Visual:** The Slide 9 diagram re-rendered with each layer labeled and
  color-coded; alongside each layer, a small *academic | industry* tool pair
  (Slurm | Kubernetes · Make/Nextflow | Airflow · Apptainer | Docker ·
  logs+cron | Datadog).
* **Transition:** *"And here's the trap that spans both worlds: the tools that
  promise to *tame* this complexity often just *move* it."*

### Slide 11 — "Merchants of complexity" (10:30–12:00) · recurring callback

* **Core message:** The deeper trap isn't tools that *add* complexity — it's
  the ones that *promise to tame it* and instead just relocate it into a new
  black box with new problems. Same in academia and industry.
* **Talking points:**
  * "Merchants of complexity" is levied at big tech — Kubernetes, Airflow,
    sprawling cloud platforms pitched as the way to "just do the thing."
  * The seductive pitch is always *simplification*: **"all you have to write is
    a few Python snippets"** (Airflow DAGs), "just declare your pipeline," "let
    the platform handle the rest."
  * **The real-world outcome:** you didn't remove the complexity — you shifted
    it. Now you own a scheduler to operate, a metadata DB to babysit, a
    deployment to maintain, version-skew to chase. A *new black box with new
    problems*, and the actual work is still the same five lines it always was.
  * **The anchor line (say it):** *"This could have been a Makefile and a
    cron-job!"* — the lament of everyone who has watched a team sink a quarter
    into standing up a "stack" for a job a Makefile and `cron` would have run.
  * **Worked example — observability.** Take just *one* concern and watch the
    pendulum swing:
    * **The humble version (UNIX glory 🙂):** redirect `stdout`/`stderr` to a
      dated log file (`>> run.$(date +%F).log 2>&1`), and let `cron` email you
      the moment a job exits non-zero. That's monitoring *and* alerting, in
      zero new infrastructure, using tools that have shipped with the OS for
      forty years.
    * **The maximal version:** a SaaS observability platform (Datadog and
      friends) plus a cloud-cron / scheduler-as-a-service, promising dashboards
      that "solve all your problems." There is enough out there for a CTO to
      sink a **$200M budget** chasing cloud-native promises — to learn the
      exit code of a nightly job.
    * The point isn't that Datadog is bad; it's that the gap between
      `2>&1 | mail` and a seven-figure platform is *enormous*, and most teams
      land far higher than their problem requires.
  * **The academic vs. industry nuance:** the layers are the same, but the
    *problems each layer solves are not*. Industry optimizes for always-on
    services, SLAs, multi-tenancy, and continuous data — Airflow and Datadog
    earn their keep there. Academic research workflows are usually bursty,
    batch, and finite — which is exactly why the heavyweight industry platform
    is so often the wrong import. Don't cargo-cult an industry stack onto a
    research problem (or vice-versa).
  * This is *not* anti-tool — it's anti-*reflexive*-tool. Airflow, Kubernetes,
    and Nextflow are right for real problems; the merchant's sin is selling
    them as the *default*. The antidote is asking what each layer earns.
  * **Say it plainly (anti-grumpy guardrail):** I'm not telling you never to
    build new tools — I *build* tools (you'll see HyperShell in a few slides),
    and I love a well-built stack. The merchants aren't the engineers who build
    good things; they're the pitch that says you need *all* of it *now*. Be a
    skeptical buyer, not a tool-hater.
  * Establish this as the recurring callback for the rest of the talk.
* **Visual:** A two-state diagram: left, a tangled stack labeled *"complexity"*;
  right, the *same* tangle sealed inside a single box labeled *"platform that
  tames complexity"* — with smaller new problems leaking out of it (ops, DB,
  deploy, version skew). A gold call-out: *"This could have been a Makefile and
  a cron-job."*
* **Transition:** *"Here's the tool I'll give you to be a skeptical buyer."*

### Slide 12 — Two axes, not one ladder (12:00–12:45) · framework reveal · must-not-skip

* **Core message:** The load-bearing idea. Workflow tools live on **two
  different axes**, answering two different questions.
* **Talking points:**
  * **Axis 1 — Executor / scale:** *how do I run many tasks?* From a bash
    loop, to `xargs`, to a Slurm job array, to HyperShell (with HTCondor the
    heavyweight beyond). Pure parallel execution; no relationships between
    tasks.
  * **Axis 2 — Orchestration / DSL:** *how do I express relationships between
    tasks?* From a Makefile to Nextflow. This is where DAGs, dependencies,
    and dataflow live.
  * The mistake last year's "flat tool list" made: treating these as one
    ladder. They are not. Many workflows only ever need *one* axis.
  * *"Ask which question you actually have before you reach for a tool."*
  * **Honest scoping (say it here, once):** I'm going to climb *one example
    rung-set* on each axis — the ones I actually watch researchers use on our
    HPC. That's a **deliberately narrow slice.** There's a whole zoo I'm
    *not* covering for time: Snakemake, Parsl, Dask, Airflow, Cromwell, CWL,
    Luigi, Ray, and more. The point isn't "use my tools"; it's "learn the two
    *questions* so you can place **any** tool — including ones I've never
    heard of — on the right axis." The map outlasts the tools.
* **Visual:** Two clearly separated arrows/axes on one card — horizontal
  "scale" axis and a distinct "orchestration" axis — each with its rungs
  labeled but not yet detailed. Faint, *greyed-out* extra tool names floating
  near each axis (Snakemake/Parsl/Dask near orchestration; Ray/Airflow near
  the boundary) to show the rungs we climb are a chosen subset, not the whole
  field. **New custom layout** (preview of the decision ladder).
* **Transition:** *"Let's climb Axis 1 — my slice of it — and stop the moment
  it earns its keep."*

### Slide 13 — Axis 1 · the bash loop (12:45–13:30)

* **Core message:** The floor of the executor axis. Start here. Often, stay
  here.
* **Talking points:**
  * The humblest workflow: a shell loop running tasks one after another.
  * It's repeatable, it's legible, it's version-controllable. For a few dozen
    independent tasks it is *the correct answer*.
  * You can fake parallelism with `&` and `wait` and tame the output with
    redirections — but the moment you want N-at-a-time throttling you're
    hand-rolling a job pool. That's the wall.
  * Where it breaks: no real concurrency control, no failure tracking, no
    bookkeeping when you have thousands of tasks.
* **Visual:** Terminal-window treatment of a real on-slide snippet:
  ```sh path=null start=null
  for s in samples/*.fastq; do
      ./analyze.sh "$s" > "results/$(basename "$s").out"
  done
  ```
  Use the clean "terminal window" aesthetic for *commands*, distinct from the
  "code/definition" treatment used later for Make/Nextflow.
* **Transition:** *"Want it to actually run in parallel without hand-rolling a
  job pool? One small step."*

### Slide 14 — Axis 1 · `xargs` (the first taming) (13:30–14:15) · compressible

* **Core message:** The first rung that *earns its keep*: `xargs -P` gives you
  real node-local parallelism with throttling, for free, with a tool you
  already have. The concern was "run many at once without DDoS-ing my own
  laptop"; this answers it.
* **Talking points (keep brisk — ~45s):**
  * `xargs -P N` runs up to N tasks at a time — a bounded worker pool the bash
    loop made you write by hand. One flag, real concurrency.
  * **The feature ratchet starts here (say it as the through-line):** the
    bash loop gave us *iteration*; `xargs` adds *bounded parallelism*. Each
    rung from here adds exactly one missing capability.
  * **Conversational callouts (don't put them on the slide):** this is a
    crowded little niche. **ParaFly** (born from Trinity in bioinformatics)
    is roughly `xargs` with a *failure log* you can re-run — it adds *failure
    tracking*. **GNU Parallel** is the Swiss-army version: throttling, retries
    *from* its job log, `{}` substitution — it adds *retries*. But all three
    top out at a single node (GNU Parallel strains past ~1000 threads and has
    no real multi-node story). *That* ceiling is the next wall.
  * Where it breaks: still one node. The cluster is right there and you can't
    reach it.
* **Visual:** Terminal-window snippet (same fastq through-line):
  ```sh path=null start=null
  ls samples/*.fastq | xargs -P 8 -I{} \
      sh -c './analyze.sh "$1" > "results/$(basename "$1").out"' _ {}
  ```
  Optional tiny grey margin note naming the niche — *"cf. ParaFly, GNU
  Parallel"* — but keep the focus on the one snippet.
* **Transition:** *"Bounded parallelism on one node — now I want the whole
  cluster. Hand it to the scheduler."*
* **Delivery note:** This is the compressible executor rung. If time slips,
  collapse to one sentence ("`xargs -P` parallelizes the loop; GNU Parallel
  adds retries") and jump to the Slurm array.

### Slide 15 — Axis 1 · Slurm job array (14:15–15:15)

* **Core message:** The next rung: let the scheduler fan out independent
  tasks *across the cluster*. This is the wall `xargs`/GNU Parallel hit —
  multi-node — solved by the resource manager itself.
* **Talking points:**
  * A job array runs N copies of one script, each indexed by
    `$SLURM_ARRAY_TASK_ID`. The scheduler handles placement, queuing, and
    cross-node parallelism for free — the capability `xargs` lacked.
  * This earns its keep when: you have many tasks, you want them spread across
    nodes, and you want the scheduler's accounting and requeue behavior.
  * It's still *just the executor axis* — no relationships between tasks.
  * **Plant the limit (sets up HyperShell):** a job array is *one scheduler
    decision per task*. That's fine for hundreds, even thousands. But arrays
    have size ceilings (`MaxArraySize`), and a million-task array means a
    million submissions hammering the central controller. Hold that thought.
* **Visual:** Terminal/code split — the `#SBATCH` header and the array body
  on-slide:
  ```sh path=null start=null
  #!/bin/bash
  #SBATCH --array=0-999
  #SBATCH --cpus-per-task=4
  s=$(ls samples/*.fastq | sed -n "$((SLURM_ARRAY_TASK_ID+1))p")
  ./analyze.sh "$s" > "results/$(basename "$s").out"
  ```
* **Transition:** *"Now push to a *million* tasks — and you hit a wall that
  isn't about your code at all."*

### Slide 16 — Axis 1 · HyperShell + the pressure-release valve (15:15–16:45) · must-not-skip

* **Core message:** HyperShell is the far end of the executor axis: pure
  distributed task execution at *extreme* scale, still no DAG. The reason it
  earns its keep over a Slurm array is concrete and system-level — it's a
  **pressure-release valve** for the scheduler. It's also my own worked
  example of complexity that earned its keep, so this is where the talk proves
  it isn't anti-tool.
* **Talking points:**
  * One tool turns a stream of inputs into hundreds of thousands of parallel
    tasks across many nodes — via SSH *or* inside a Slurm allocation — without
    writing array boilerplate. (Show the one-liner; it's the same idiom as
    `xargs`, just scaled out.)
  * **The pressure-release-valve punchline (the heart of the slide):** at a
    million tasks the bottleneck isn't your code — it's *shared
    infrastructure*. Two walls hit at once: (1) **array-size ceilings** — you
    literally can't express it as one array; and (2) **controller RPC
    pressure** — a million individual job-step starts is a self-inflicted
    *DDoS* on `slurmctld`, the one daemon every other user on the machine
    depends on. A workflow executor grabs **one allocation and meters the
    tasks internally**, so the central scheduler sees *one* job, not a million.
    *That's* the concrete reason a dedicated executor exists at scale — it
    protects the machine, not just your convenience. **"Earn its keep" stops
    being about you and starts being about the shared system.**
  * It's *my* tool (full disclosure) — and that's the point, not a caveat. I
    built it because the rung below genuinely ran out of road: **GNU Parallel
    is wonderful, but it wasn't right for HPC**, and a job array DDoS-es the
    controller at extreme counts. The concern was real, the existing rungs
    couldn't meet it, so a new rung was justified — the Slide 19 checklist in
    action.
  * The honest boundary: if a bash loop, `xargs`, or a Slurm array already
    does it, HyperShell is over-kill too. Even the author says: don't reach
    for it until the rung below stops scaling.
  * **The rung *above* (conversational, ~10s):** beyond HyperShell sits
    **HTCondor** — the heavyweight high-throughput system this is, in a sense,
    competing with. Enormously capable, but genuinely hard for a lone user to
    stand up and tame. HyperShell is the *right-sized middle*: more than an
    array, far less than running your own Condor pool.
  * **Where this sits / what I'm skipping (10s, honest):** same niche, other
    tools — **GNU Parallel** (single-node), **ParaFly** / **TaskFarmer** /
    **Launcher** (HPC siblings), **Ray** / **Dask** / **Parsl** (Python-native,
    creep onto Axis 2 — and **Parsl** can drive **Globus Compute** as its
    remote-execution + data-staging fabric). Pick whatever fills the *executor*
    box for you — the box is the point, not the brand.
* **Visual:** Terminal-window one-liner, the real HyperShell idiom on-slide:
  ```sh path=null start=null
  seq 1000000 | hsx -t 'echo {}' -N64 --ssh 'a[00-32].cluster' > task.out
  ```
  Plus a small **"earned its keep" feature callout box** (v2.8 — accurate to
  the release notes; pick 3–4, don't read them all):
  * **Database in-the-loop** — SQLite or PostgreSQL; task history,
    fault-tolerance, **automated retries** persisted across runs.
  * **Extreme, elastic scale-out** — staggered launch to **1000+ nodes /
    250k+ workers** without crashing the server; scale clients down to zero.
  * **Resource-aware scheduling** — per-task cores / memory / walltime with
    client-side backfilling.
  * **Task groups** — lightweight dependency management between tasks.
  Caption: *hypershell.readthedocs.io · `hs --help` · v2.8*.
* **Transition:** *"That's pure execution — a million unrelated tasks. None of
  it handles tasks that *depend* on each other. For that we change axes
  entirely."*

### Slide 17 — Axis 2 · "Make is all you need" (16:45–18:00)

* **Core message:** The orchestration axis starts with a tool you already
  have. Make expresses *relationships*, and for a huge fraction of workflows
  it is enough.
* **Talking points:**
  * Make is a DAG engine in disguise: targets, prerequisites, recipes. It
    tracks what depends on what and only rebuilds what changed.
  * It was genuinely popular in data science for exactly this reason — a
    Makefile *is* a reproducible pipeline.
  * The provocation: *"Make is all you need"* — before you reach for a
    bespoke workflow engine, ask whether a Makefile already does it.
  * Where it strains *out of the box*: no built-in containers, no cluster-aware
    execution, no automatic resume, weak handling of dynamic fan-out. **But
    "out of the box" is doing a lot of work in that sentence** — hold that
    thought; the very next beat walks it back.
* **Visual:** "Code/definition" treatment (distinct from the terminal
  aesthetic) of a small Makefile:
  ```makefile path=null start=null
  results/%.out: samples/%.fastq
      ./analyze.sh $< > $@

  all: $(patsubst samples/%.fastq,results/%.out,$(wildcard samples/*.fastq))
  ```
* **Transition:** *"Before I sell you the next rung, let me be honest about how
  far this one actually reaches — look at that same Makefile again."*

### Slide 17b — Axis 2 · how far Make really reaches (bridge beat) · must-not-skip

* **Core message:** The honest rebuttal *to myself*: most of the things people
  reach for Nextflow to get, you *can* shim into Make with a little
  convention. The same Makefile, re-read with a new lens. The real difference
  isn't *capability* — it's *who owns the control*: with Make **you** own the
  patterns; with a framework, the framework does.
* **Delivery mechanic (settled):** literally reverse one slide — bring the
  Slide 17 Makefile back up and let the room squint at it again. No new
  snippet; talk *over* the existing one. This keeps Slide 17 lean and makes
  the rebuttal feel earned, not bolted on.
* **Talking points (the four shims — brisk, ~45–60s total):**
  * **Containers** — a variable template that wraps each recipe in an
    Apptainer image: define `RUN = apptainer exec image.sif` and prefix the
    recipe with `$(RUN)`. Reproducible environments, no framework required.
  * **Scale-out executors** — the *same* trick for Slurm: `RUN = srun ...`
    drops every recipe onto the cluster. The executor is just another
    variable.
  * **Resume / fault-tolerance** — Make *already* resumes: it rebuilds only
    what's missing or stale. The one gotcha is the lying half-written target
    after a crash; the fix is a one-line **atomic `mv`** — write to a temp
    file, then `mv` into place so a target only exists if it completed. (This
    is the pattern I actually use.)
  * **Modularity** — conventions + child-Makefiles checked into Git: a parent
    Makefile that delegates to per-stage child Makefiles gives you composable,
    versioned pipeline modules.
* **The honest pivot (the load-bearing line):** *"So Make is not incapable —
  I can shim all of this. Nextflow isn't right because Make **can't**; it's a
  different trade. It takes these patterns I'd otherwise own by hand and makes
  them the framework's job — forced, uniform plug-points instead of my private
  conventions."*
* **Visual:** Reuse the Slide 17 Makefile verbatim. Optional: four small
  margin annotations pointing at the recipe line — *"← wrap with $(RUN) for
  containers / srun"*, *"← atomic mv ⇒ safe resume"*, *"← child-make ⇒
  modules"* — revealed one at a time. Keep it light; the point is "same code,
  new lens."
* **Transition:** *"That's the case *for* doing it yourself. Here's why a whole
  community decided to stop."*

### Slide 18 — Axis 2 · Nextflow as the justified endpoint (18:00–19:30) · must-not-skip

* **Core message:** Nextflow is the top of the orchestration axis. The point
  isn't that Make *can't* (17b just showed it can) — it's that Nextflow makes
  these things the **framework's** job, and that delegation buys you something
  Make patterns don't: *human* scalability through shared infrastructure.
* **Talking points:**
  * Reframe, not "Make can't": each of these is a capability you'd otherwise
    own *by hand* (Slide 17b), now owned by the framework via forced,
    uniform plug-points:
    * **Containers** — per-process reproducible environments, declared, not
      shimmed.
    * **Dataflow DAG** — dynamic fan-out/fan-in driven by channels, not a
      static target list. *This is the one that genuinely doesn't reduce to a
      Make pattern* — dynamic, data-driven topology, not a fixed target graph.
    * **`-resume` caching** — content-aware resume across runs and
      environments, beyond Make's mtime + my atomic-`mv` trick.
    * **Executor portability** — the *same* pipeline runs on Slurm,
      Kubernetes, or the cloud by changing one config line (vs. my `RUN =`
      template, which I maintain myself).
    * **nf-core** — a curated library of peer-reviewed pipelines you adopt
      instead of writing your own.
  * **The deeper argument — human scalability (the real "earns its keep"):**
    this is the *packaging* story all over again. Python, Node, and Rust ship
    with build systems and a package index; they offload complexity to a
    *shared community problem* so you don't each reinvent it. Nextflow's
    forced plug-system + nf-core is the same move for pipelines. **You can be
    master of your own domain — and honestly that's where you should start —
    but a shared framework lets a whole community plug things together and do
    amazing things *because* the plug-points are forced and uniform.**
  * The honest framing: this is a *lot* of machinery, and it relocates control
    to the framework. It earns its keep when you have genuine dynamic
    dependencies, heterogeneous environments shared across people, or a
    community pipeline that already exists — i.e. when the problem is bigger
    than one person's conventions.
  * If you don't have those needs, Slide 17 was your answer.
  * **Where this sits / what I'm skipping (15s, honest — and owning the bias):**
    I picked Nextflow because it's what I most often see *researchers* actually
    reach for on our HPC — that's the **view from the trenches at a real HPC
    center**, and I'll stand behind it. But it's one orchestrator among many:
    **Snakemake** (Python/Make-flavored, huge in bioinformatics),
    **CWL/Cromwell**, **Parsl**, **Luigi**, and — over in industry —
    **Airflow**. I can't do justice to all of them in one talk, and I
    won't pretend to: I'm deep on the academic-HPC slice and shallow on the
    always-on industry side. Place each on the *orchestration* axis and apply
    the same checklist.
* **Visual:** "Code/definition" treatment of a minimal Nextflow process +
  channel, with a callout box listing the five justifying features:
  ```groovy path=null start=null
  process analyze {
      container 'biocontainers/tool:1.0'
      input:  path sample
      output: path "${sample.baseName}.out"
      script: "./analyze.sh ${sample} > ${sample.baseName}.out"
  }
  workflow { analyze(Channel.fromPath('samples/*.fastq')) }
  ```
* **Transition:** *"So: two axes, several rungs each. Here's how to decide."*

### Slide 19 — The decision ladder + checklist (19:30–21:15) · must-not-skip

* **Core message:** The single portable artifact. It now encodes **two** ideas
  at once, not one: *which axis / how far up* (the rungs) **and** *who owns the
  wiring — you or the framework* (the control gradient). The carry-home test
  fuses them: **"have I outgrown owning this by hand?"**
* **Talking points:**
  * Show both axes together with their rungs:
    * *Executor:* bash loop → `xargs` → Slurm array → HyperShell
      (→ HTCondor, greyed as the heavyweight rung above).
    * *Orchestration:* Makefile → Nextflow.
  * **The second dimension (the new spine, from 17b/18):** climbing isn't only
    about *capability* — it's about *control*. Left of each axis you **own the
    patterns** (a bash loop, a Makefile + conventions); right, the **framework
    owns them** via forced, uniform plug-points. Moving right trades your
    private cleverness for *human* scalability — a shared problem solved once
    for everyone (the packaging-index move from Slide 18).
  * The **"does it earn its keep?"** checklist — grouped by axis so the two
    questions stay distinct; climb a rung only if you can say yes:
    * *Executor (scale):* Am I hitting a real *scale* wall the current rung
      can't take — **or am I about to DDoS the shared scheduler?** (the Slide 16
      pressure-release-valve callback: at the extreme, "earns its keep" is
      about protecting the *shared system*, not just me).
    * *Orchestration (relationships):* Do tasks have genuine *dependencies* —
      especially *dynamic* fan-out — I'm currently faking by hand? Do I need
      *reproducible environments*, *resume* of expensive partial runs, or to
      *port* the pipeline elsewhere?
  * **The meta-test that ties it together (say this one slowly):**
    *"Have I outgrown owning this by hand — is this now a **shared** problem,
    not a personal one?"* If yes, that's when a framework (and an `nf-core`-style
    community pipeline) earns its keep; if no, your conventions are still the
    right tool.
  * Land the thesis — both directions, so it isn't purely deflationary:
    *"If the answer is no, you're done — stop climbing. And when it's finally
    yes, climb without guilt: that's the rung earning its keep."*
* **Visual:** The full two-axis **decision ladder** (new custom layout) on the
  left, with a subtle left→right **"you own it → framework owns it"** gradient
  running under each axis (Make/bash = you; Nextflow/HyperShell = framework).
  On the right, the checklist **grouped under the two axis headings**, with the
  *"outgrown owning it by hand?"* meta-test set apart as the single boxed
  takeaway. This is the slide to photograph.
* **Transition:** *"One more thing the tools won't save you from — the data.
  And it's the *same* decision, one more time."*

### Slide 20A — Data management · locality & storage tiers (the concept) (21:15–22:45)

* **Core message:** Data locality is the part the tools *won't* save you from —
  movement, not CPU, is usually the real bottleneck. Storage is **tiered**
  because no single medium wins on every axis; choosing a tier is itself an
  *"earn its keep"* decision — *don't pay for the fast tier until you need it.*
* **Talking points (~90s):**
  * **The bottleneck reframe:** for capacity/throughput workflows the wall is
    usually *getting bytes to the compute*, not the compute itself. Locality
    is a first-class design concern, not an afterthought.
  * **No medium wins on everything — the trade-off space (the keeper idea from
    last year):** storage systems differ along several axes at once —
    **capacity, performance, cost, safety/recoverability, security, longevity/
    durability.** That's *why* there isn't one filesystem; you pick the tier
    whose trade-offs match the moment.
  * **The tiers (RCAC concretely), as a cold→warm→hot ladder:** *Fortress*
    (tape — cold, archival, cheap-and-durable, slow), *Data Depot* (spinning
    disk — warm, persistent project storage), *Scratch* (all-flash — hot,
    fast-local for active jobs, not for keeping). Same rung grammar as the
    Slide 19 decision ladder: each step up costs more and buys speed.
  * **The earn-its-keep tie-in (say it):** *"don't pay for the fast tier until
    you need it"* — the storage version of the whole talk. Scratch is the
    HyperShell/Nextflow of storage: powerful, and wrong if your problem doesn't
    need it.
  * Skip the hardware primer: this room doesn't need "what is persistence" or
    photos of an Optane stick — the *concept* (tiers + trade-offs) is the
    teachable thing.
* **Visual:** Port last year's **storage-property diagram** — the cluster of
  labeled circles for the six trade-off axes (**Capacity · Performance · Cost ·
  Safety · Security · Longevity/Durability**), re-skinned into the Purdue 2026
  chrome — paired with the **cold→warm→hot tier ladder** (Fortress · Data
  Depot · Scratch) drawn in the Slide 19 rung grammar. This is the
  photograph-slide for the data section.
* **Transition:** *"So you've picked your tiers. Now — how do you actually move
  the bytes between them? Same decision as everything else today."*
* **Delivery note:** the 6-property diagram is the compressible part. If time
  slips, name two or three axes verbally (cost · speed · durability) and lean on
  the tier ladder alone.

### Slide 20B — Staging · the same ownership ladder, one more time (22:45–24:00)

* **Core message:** Moving data between tiers is **the same ownership decision,
  a third time.** You own the bottom rung (a one-line `rsync`); you hand control
  to the framework only when manual staging stops scaling.
* **Talking points (~75s):**
  * **Name the callback up front:** *"Bytes, not tasks — but watch: it's the
    **same shape** we've now seen three times."*
  * **The bottom rung — you own it:** an `rsync` into fast storage at the top of
    your job script, compute, then `rsync` results back. No framework required;
    owning it by hand is the right starting point.
    ```sh path=null start=null
    rsync -a $DEPOT/project/input/ $SCRATCH/run/input/
    ./run_pipeline $SCRATCH/run/
    rsync -a $SCRATCH/run/output/ $DEPOT/project/output/
    ```
  * **The next rung — the framework owns it:** make staging an explicit,
    dependency-tracked workflow step (the Axis 2 climb from Slide 18, now
    applied to data). Same trade: you give up hand-wired control for the
    framework's plug-points — worth it only when staging-by-hand stops scaling.
  * **Concretely at RCAC — Globus (spoken aside, ~15s, keep it light):** the
    managed version of this rung is **Globus Transfer** (movement) +
    **Globus Flows** (automated, dependency-aware staging). *"We're a strong
    Globus partner: dedicated staff building automated Flows, and we're rolling
    out Multi-User Endpoints across our clusters — Anvil was the first public
    MEP worldwide."* Then move on — don't let the partnership beat hijack the
    teaching beat. (Parsl + **Globus Compute** is the executor-axis sibling of
    the same ecosystem — callback to Slide 16.)
  * **The explicit callback (land it — this is the payoff, give it room):**
    *"Same rule, third time: stage simply first; hand control to a framework
    only when owning it yourself stops paying off. Tasks, then orchestration,
    now data — one lesson about ownership stakes, wearing three costumes."*
* **Visual:** The two-rung **ownership ladder** — bottom rung labeled *"you own
  it"* with the `rsync` snippet on it; top rung labeled *"framework owns it"*
  (Globus Flows / workflow-managed staging) — reusing the Slide 19
  *"you own it → framework owns it"* gradient. Keep the Globus marks small; the
  ladder is the message.
* **Transition:** *"There's one new operator showing up in all of this — and it
  obeys the same rule."*

### Slide 21 — One agentic beat · agents as operators (24:00–25:15)

* **Core message:** AI agents are becoming operators and consumers of these
  same workflow tools — and the thesis doesn't change.
* **Talking points:**
  * My day job now is AI/agentic research workflows, and agentic work has the
    *same shape* as classic research workflows: tasks, data, dependencies,
    resources.
  * Agents are starting to *drive* these tools — submitting jobs, staging
    data, assembling pipelines — through interfaces like MCP servers.
  * The same rule holds, maybe more so: give the agent the *simplest* tool
    that works, and *verify* the result. An agent that reaches for the Slide 9
    monster is just as wrong as a human who does.
  * Keep this to one beat — it's a signpost, not a theme.
* **Visual:** A single clean panel: an agent loop node feeding into the
  decision ladder from Slide 19, captioned *"same rule: simplest thing that
  works, then verify."*
* **Transition:** *"Which brings me back to where we started."*

### Slide 22 — Closing · real perfection is simplicity (25:15–26:45)

* **Core message:** Invert the cold open. The over-engineered stack wasn't
  perfection; the simplest thing that works is.
* **Talking points:**
  * Call back to Slide 4: *"Remember the beautiful, elegant machine that did
    the work of a `for` loop?"*
  * The inversion: *"Real perfection isn't the most impressive stack. It's the
    least machinery that actually solves your problem."*
  * Recap the takeaways in one breath: name the layers; know which axis you're
    on; climb only when a rung earns its keep; tier your data; verify.
  * **End on craft, not lecture (closes the tone loop) — keep it dry, not
    cheeky:** the reward for getting this right isn't austerity. A right-sized
    stack that runs clean, scales when you need it, and that you (and the next
    person) can actually understand is just *good engineering* — and it's a
    genuinely good feeling. Build for that. Land it plainly: *"Good engineering
    is complexity that earns its keep — nothing more, nothing less."* (Tone
    note: the *"purr"* / hot-rod imagery from the open can echo here at most
    *once*, lightly; do not lean on it, and drop the "merchant/buyer" couplet
    if it plays as too clever in the room.)
* **Visual:** The inverted "Perfection" beat, kept simple — *no need to
  re-render the meme*: a single clean box ("a `for` loop") where the Slide 4
  monster used to be, in the deck's own chrome.
* **Transition:** *"Here's where to find everything."*

### Slide 23 — Resources & contact (26:45–29:00)

* **Core message:** Where to learn more; how to reach me.
* **Talking points:**
  * **HyperShell** — `hypershell.org` (docs) and `github.com/hypershell`
    (source). The worked example of complexity that earned its keep.
  * **My recent work (the through-line from this year's other talks):**
    the PEARC'26 paper *Hello Computer: HPC in the Agentic Era*
    (`github.com/glentner/pearc26-hello-computer`), `rcac-mcp`
    (`github.com/purduercac/rcac-mcp`), and `globus-mcp`
    (`github.com/purduercac/globus-mcp`) — the agentic-era thread behind the
    one beat on Slide 21. (`globus-mcp` also nods to the **Globus partnership**
    from Slide 20B — Flows / Compute / MEPs.)
  * **RCAC docs** — cluster user guides, the throughput/workflow guides, and
    the data-tier guides (Fortress / Data Depot / Scratch).
  * **Tool docs (just the significant ones):** GNU Make and Nextflow / nf-core
    — the two ends of the orchestration axis. (Slurm arrays live in the RCAC
    docs above; don't over-list.)
  * **Contact:** `glentner@purdue.edu` — find me after, or by email.
  * **Credit:** work supported by RCAC at Purdue.
* **Visual:** Clean Purdue 2026 closing card in the **NAIRR `closing-qr-row`
  convention** (port the layout from `../2026-nairr-workshop-talk/`): a row of
  back-of-room-scannable QR codes along the bottom, each with a small label,
  RCAC reverse mark centered below, email + credit line. Proposed QR set
  (5 — fits the row; cull to 4 if it gets crowded): **HyperShell** ·
  **PEARC'26 paper** · **rcac-mcp** · **globus-mcp** · **Nextflow / nf-core**.
  RCAC docs can be a spoken pointer rather than its own code if space is tight.
* **Closing line:** *"Start simple. Thanks."*
* **Build note (QR generation, per NAIRR):** generate codes at ≥410px,
  high error-correction (`-Q` or better), pull in around 5rem, and verify a
  scan from ~15ft. The `github.com/...` URLs are long enough to make a busy
  matrix — favor short canonical URLs where one exists (e.g. `hypershell.org`).

## 5) Slide architecture

* **Total:** ~22 narrative beats across **24 physical slides** (the data beat
  is two slides, 20A + 20B; Slide 17b is a slide-reverse, not a new physical
  slide).
* **Pacing:** ~75s average. The prelude (Slides 1–3) is fast: a ~30s title,
  a ~45s About RCAC, and a 60–90s About Me. The cold open (Slide 4) runs long
  with the laugh; the Zoo (Slide 6) is a deliberately short ~45s backdrop; the
  centerpiece anatomy (Slide 9), the HyperShell pressure-release beat
  (Slide 16), the Nextflow justification (Slide 18), and the decision ladder
  (Slide 19) each take ~120s. The data beat is split: 20A (tiers + trade-off
  diagram) ~90s, 20B (ownership ladder + `rsync`) ~75s. The executor-axis
  rungs (Slides 13–16) move briskly — four fast snippets climbing one vertical,
  not four full stops.
* **Layout inheritance:** all slides inherit from the Purdue 2026 template
  family documented in `THEME.md` (to be ported from `../2026-nairr-workshop-talk/`)
  — cover, section divider, content, two-panel split, card grid, closing card
  — with **RCAC** marks substituted for generic Purdue marks. New custom
  layouts unique to this deck: the **About RCAC** layout (photo cluster +
  squiggle-boxed pillars, Slide 2), the **triple-point Venn** (Slide 3), the
  **Zoo logo-wall** (Slide 6), the **Rube Goldberg stack** (Slides 9–10), the
  **two-axis decision ladder** (Slides 12, 19), the **storage-property +
  tier diagram** (Slide 20A, ported from last year's circle diagram), and the
  **data-staging ownership ladder** (Slide 20B).
* **Two code aesthetics, kept distinct (per GOAL.md):** a *terminal-window*
  treatment for **commands you run** (Slides 13, 14, 15, 16, 20B) and a
  *code/definition* treatment for **workflow definitions** (Slides 17, 18).
  Do not blur the two.

## 6) Must-not-skip slides

If the prior session runs long, the HDMI adapter dies, or the moderator
flashes the two-minute card early, these still must be told for the talk to
cohere:

1. **Slide 3 — About Me.** The systems · science · software triple-point is the
   credibility that licenses the whole thesis; it's also the anti-grumpy anchor.
2. **Slide 4 — the cold open.** Without the gag there's no rhetorical posture
   and no payoff to invert at the end.
3. **Slide 12 — two axes, not one ladder.** The core intellectual contribution.
   Everything technical hangs on it.
4. **Slide 16 — HyperShell + the pressure-release valve.** The executor-axis
   payoff: the system-level reason an executor earns its keep (`slurmctld`
   DDoS) and the worked example that proves the talk isn't anti-tool.
5. **Slide 19 — the decision ladder + checklist.** The single most portable
   artifact; the thing undergrads carry home.
6. **Slide 22 — real perfection is simplicity.** The inversion that closes
   the loop. Without it the talk has no exit.

Compressible if time slips: Slide 2 (About RCAC — first to cut; one sentence if
 the room already knows RCAC), Slide 14 (`xargs` — collapse to one sentence and
 fold GNU Parallel in verbally), Slide 6 (the Zoo — a few seconds of backdrop,
 or cut entirely), Slide 7 (on-ramp — one line if the room is HPC-literate),
 Slide 15 (Slurm array — can be a verbal mention between `xargs` and
 HyperShell), the 6-property diagram on Slide 20A (collapse to the bare
 cold→warm→hot ladder), Slide 21 (agentic beat — one sentence). Never compress
 3, 4, 12, 16, 19, 20B, or 22.

## 7) Delivery aids

* **Opening anchor sentence** (off the cold-open stack):
  > *"This is beautiful, it's elegant, and it does the exact work of a `for`
  > loop. Today is about telling the difference between complexity you need
  > and complexity you've been sold."*
* **Recurring rhetorical beats:**
  * *"The unicorn at the triple-point."* (About Me on Slide 3; the
    systems · science · software cross-domain perspective that earns the
    judgment the rest of the talk trades on. Reprised implicitly whenever the
    academic↔industry parallel comes up.)
  * *"Does it earn its keep?"* (Thesis on Slide 5; the literal checklist on
    Slide 19; reprised on Slides 16, 18, 20A, and 20B.)
  * *"A pressure-release valve for the scheduler."* (Slide 16; the executor
    axis's system-level payoff — a million job-steps DDoS `slurmctld`, so an
    executor takes one allocation and meters tasks internally. This is what
    turns "earn its keep" from a convenience argument into a
    shared-infrastructure argument; the strongest single reason on Axis 1.)
  * *"Each rung adds one capability."* (The executor-axis feature ratchet —
    iteration → bounded parallelism (`xargs`) → failure tracking (ParaFly) →
    retries (GNU Parallel) → cross-node (Slurm array) → extreme scale +
    infra-protection (HyperShell) → heavyweight (HTCondor). Slides 13–16;
    reprised on the Slide 19 ladder.)
  * *"Merchants of complexity."* (Slide 11; reprised in the Slide 22 close.)
  * *"This could have been a Makefile and a cron-job."* (Slide 11; the
    industry-platform lament — reusable any time someone over-builds.)
  * *"`2>&1` and a cron email vs. a $200M observability bill."* (Slide 11; the
    observability swing — the widest gap between humble and maximal.)
  * *"Same handful of layers — only the brand names change."* (Slide 10; the
    academic↔industry parallel, Slurm/Kubernetes · Make/Airflow ·
    Apptainer/Docker · logs+cron/Datadog.)
  * *"Which axis are you on?"* (Slide 12; reprised on Slide 19.)
  * *"The simplest thing that works."* (Slide 5; the walk-off on Slide 22.)
  * *"Make it purr."* (Love-of-craft counterweight — Slide 3 (About Me) setup,
    Slide 5 thesis framing, Slide 22 payoff. Keeps the whole talk on the
    enthusiast-with-judgment side, not the grumpy-old-man side.)
  * *"The map outlasts the tools."* (Honest-scoping beat — Slide 12 reveal,
    reprised on Slides 16 and 18. Signals the deep dives are deliberately
    chosen narrow slices, names what's skipped, and owns the academic-HPC
    bias as a strength. The takeaway is the two *questions*, not the brands.)
* **The four jobs of this talk (keep all four alive — Slide 3 names them):**
  (1) show what I'm passionate about and do for a living; (2) give a general
  *survey* / map of the landscape; (3) leave every student with practical
  advice useful *now* — a portable rule of thumb and a few commands — *even if
  workflows aren't their summer project yet*; (4) stay honest about scope:
  deep on a couple of slices I know from the RCAC trenches, explicit about the
  rest. If a slide drifts away from all four, it's a candidate to cut or
  reframe.
* **Risk register:**
  * *Time slips.* Cut Slide 2 (About RCAC) to one sentence first; then collapse
    Slide 14 (`xargs`) to one sentence and Slide 15 (Slurm array) into a verbal
    aside, trim Slide 7 to one line, and drop the Slide 6 Zoo to a few seconds.
    Never compress 3, 4, 12, 16, 19, 22.
  * *Time expands.* Restore the full 6-property trade-off diagram on Slide 20A
    (or add a second worked staging example on Slide 20B), expand the nf-core
    beat on Slide 18, or give the executor-axis callouts more air (the
    ParaFly/GNU Parallel/HTCondor asides on Slides 14–16).
  * *HPC-novice room.* Slow down on Slide 7 (capability vs. capacity) and
    Slide 13 (the bash loop); these are the undergrad on-ramps.
  * *Practitioner-heavy room.* Lean into the executor-axis asides (GNU Parallel
    and HTCondor on Slides 14/16, the `slurmctld`-DDoS detail on Slide 16, the
    Make-in-data-science history on Slide 17) and move faster through the
    on-ramp.
  * ***Tone drift — the "old man yells at cloud" failure mode.*** The single
    biggest delivery risk: the thesis, the merchants beat, and the cron-job
    lament can stack up into pure grumbling. **Antidote:** front-load the
    love-of-craft (Slide 3 About Me, Slide 5 thesis), keep HyperShell as living
    proof I build *and* love new tools (Slide 16), and land Slide 22 on the
    *purr*, not on austerity. If you feel yourself getting cranky on stage,
    name a tool you genuinely love and why it earned its keep.
* **Hallway-track routing:** Snakemake vs. Nextflow vs. Parsl/Dask debates,
  Kubernetes-vs-Slurm, MCP server design, and "which tool for my specific
  pipeline" — all routed to the hallway after the closing card. The talk is a
  *mental model*, not a tool bake-off; don't let Q&A pull it into one.

## 8) Open TODOs for Geoffrey

* **Slide 2 (About RCAC).** Supply source assets to port the existing
  PowerPoint: the machine-room / *Fortress* mural / rack photos and the
  `rcac.purdue.edu` QR. Confirm the current pillar wording and which pillars
  get the **squiggle-box** cross-cutting highlight (systems / science /
  software). Geoffrey to relay local file paths.
* **Slide 3 (About Me).** Supply the headshot. **Redesign the Venn labels** to
  map cleanly onto systems · science · software and the triple-point (center =
  facilitator/unicorn); decide the final label set vs. the old example
  (HPC / Facilitator / Developer / RSE / Technologist / Data Scientist / AI /
  Educator / Astrophysicist). Geoffrey to relay the local image path.
* **Slide 4 / Slide 22.** Pick the best "Perfection" meme image for the cold
  open and decide how the inversion re-renders it minimally (the `for`-loop
  box). Optionally consider a custom Purdue-style absurd-stack illustration if
  it reads better than the meme — purely an aesthetic call.
* **Slide 6 (the Zoo).** Lock the final logo set, grouping, and
  size-by-popularity layout.
* **Slide 9.** Final visual direction for the dense "anatomy" diagram — exact
  boxes, vertical vs. layered orientation, and how it re-renders into the
  labeled Slide 10 version.
* **Slides 13–18 (the rung snippets).** Confirm the on-slide snippets are the
  ones you want to stand behind on stage (all snippets are currently on-slide
  per the agreed direction). Decide whether `analyze.sh` is a good through-line
  example or whether to swap in a domain example (bioinformatics? astronomy?).
  Sanity-check the `xargs -P` one-liner (Slide 14) — the `sh -c '…' _ {}`
  quoting is correct but dense; consider simplifying for legibility on stage.
* **Slide 16 (HyperShell + pressure-release valve).** (1) Confirm you're
  comfortable with the level of self-reference (HyperShell as the "earned its
  keep" worked example). (2) The feature callout box is drawn from the v2.8.0
  release notes (`hypershell/docs/blog/20251101_2_8_0_release.rst`) and README
  — it's **task groups** for dependency management (not "dependency groups"),
  plus resource-aware scheduling, DB-in-the-loop with retries, and staggered
  launch to 1000+ nodes / 250k+ workers; confirm the exact 3–4 you want on the
  slide. (3) Sanity-check the `slurmctld` framing (array-size ceiling *and*
  RPC/controller pressure) against how you want to phrase the "DDoS" line for a
  mixed REU audience. (4) Confirm the HTCondor "heavyweight rung above /
  competing with" framing.
* **Slide 20A/20B (data).** Confirm the exact RCAC tier names/marketing names
  and any current guidance you want to cite (Fortress / Data Depot / Scratch).
  For 20A, confirm the six trade-off axes to label on the ported circle diagram
  (Capacity / Performance / Cost / Safety / Security / Longevity-Durability) and
  whether all six survive or you'd rather show fewer. For 20B, confirm the
  Globus partnership phrasing (dedicated Flows staff; campus-wide MEP rollout;
  Anvil = first public MEP worldwide; Globus World showings) and how much to
  say aloud vs. leave to the `globus-mcp` QR on Slide 23.
* **Slide 23 (resources).** Finalize the resource list and which links get QR
  codes (proposed 5-code row: HyperShell · PEARC'26 · rcac-mcp · globus-mcp ·
  Nextflow/nf-core; cull to 4 if the row gets crowded).
* **Scaffolding.** Slidev version pin and a dev port distinct from siblings
  (3032/3033/3034) — proposed **3035**. To be settled in `ROADMAP.md`, not here.
* **Visual identity.** Port `THEME.md` from the NAIRR deck and note the seven
  new custom layouts (About RCAC, triple-point Venn, Zoo logo-wall, Rube
  Goldberg stack, two-axis ladder, storage-property + tier diagram on 20A, and
  the data-staging ownership ladder on 20B).
