# REU Summer Seminar 2026 — Talk Outline

> **Venue:** Summer REU Seminar Series · Envision Center, Purdue University, West Lafayette, IN &nbsp;|&nbsp; **Budget:** 30 minutes
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
* **Each rung is real.** Bash loop, Slurm array, HyperShell one-liner;
  Makefile, Nextflow process. Real artifacts, shown on screen, climbed only
  as far as the problem demands.
* **Data is the hard part.** The bottleneck is usually data movement and
  locality, not CPU. Tier your data deliberately; the simplest tiering is an
  `rsync` in your job script.
* **Agents are the newest operator.** AI agents are starting to drive these
  same tools — the rule does not change: simplest thing that works, verify.
* **Real perfection is simplicity.** Invert the cold-open gag and send them
  home with resources.

## 3) 30-minute time budget

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
| 12:45–13:45 | 13 | Axis 1 — executor/scale: the bash loop |
| 13:45–15:00 | 14 | Axis 1 — Slurm job array |
| 15:00–16:15 | 15 | Axis 1 — HyperShell (extreme executor end) |
| 16:15–17:45 | 16 | Axis 2 — "Make is all you need" |
| 17:45–19:30 | 17 | Axis 2 — Nextflow as the justified endpoint |
| 19:30–21:30 | 18 | The decision ladder + "earn its keep" checklist |
| 21:30–23:30 | 19 | Data management — locality & storage tiers |
| 23:30–25:00 | 20 | One agentic beat — agents as operators |
| 25:00–26:30 | 21 | Closing — real perfection is simplicity |
| 26:30–28:30 | 22 | Resources & contact |

*Target delivery ~28:30 with a ~90s cushion for the cold-open laugh, the
HDMI tax, and transitions. Twenty-two physical slides. The prelude (Slides
2–3) is paid for by a lean ~30s title, a tighter thesis/Zoo, and brisker
executor-axis rungs (Slides 13–15). About RCAC (Slide 2) is the first to cut
if time slips; About Me (Slide 3) is must-tell.*

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
    HTCondor); *executors/scale* (GNU Parallel, HyperShell, Dask, Ray, Parsl);
    *orchestration/DAG* (GNU Make, Nextflow, Snakemake, Airflow, Luigi,
    Cromwell/CWL); *containers* (Docker, Apptainer/Singularity, Podman);
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
    loop to a Slurm job array to HyperShell. Pure parallel execution; no
    relationships between tasks.
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

### Slide 13 — Axis 1 · the bash loop (12:45–13:45)

* **Core message:** The floor of the executor axis. Start here. Often, stay
  here.
* **Talking points:**
  * The humblest workflow: a shell loop submitting or running tasks.
  * It's repeatable, it's legible, it's version-controllable. For a few dozen
    independent tasks it is *the correct answer*.
  * Where it breaks: no parallelism beyond the node, no retry, no bookkeeping
    when you have thousands of tasks.
* **Visual:** Terminal-window treatment of a real on-slide snippet:
  ```sh path=null start=null
  for s in samples/*.fastq; do
      ./analyze.sh "$s" > "results/$(basename "$s").out"
  done
  ```
  Use the clean "terminal window" aesthetic for *commands*, distinct from the
  "code/definition" treatment used later for Make/Nextflow.
* **Transition:** *"Need it to run across the cluster? Climb one rung."*

### Slide 14 — Axis 1 · Slurm job array (13:45–15:00)

* **Core message:** The next rung: let the scheduler fan out independent
  tasks across the cluster.
* **Talking points:**
  * A job array runs N copies of one script, each indexed by
    `$SLURM_ARRAY_TASK_ID`. The scheduler handles placement, queuing, and
    parallelism for free.
  * This earns its keep when: you have many tasks, you want them spread across
    nodes, and you want the scheduler's accounting/retry behavior.
  * It's still *just the executor axis* — no relationships between tasks.
* **Visual:** Terminal/code split — the `#SBATCH` header and the array body
  on-slide:
  ```sh path=null start=null
  #!/bin/bash
  #SBATCH --array=0-999
  #SBATCH --cpus-per-task=4
  s=$(ls samples/*.fastq | sed -n "$((SLURM_ARRAY_TASK_ID+1))p")
  ./analyze.sh "$s" > "results/$(basename "$s").out"
  ```
* **Transition:** *"And the extreme end of pure execution at scale —"*

### Slide 15 — Axis 1 · HyperShell (15:00–16:15)

* **Core message:** HyperShell is the far end of the executor axis: pure
  distributed task execution at scale, still no DAG. It's also my own worked
  example of complexity that **earned its keep** — proof this talk isn't
  anti-tool.
* **Talking points:**
  * One tool turns a stream of inputs into thousands of parallel tasks across
    many nodes via SSH or the scheduler — without writing array boilerplate.
  * It's *my* tool (full disclosure) — and that's the point, not a caveat. I
    built it because the layer below genuinely ran out of road: **GNU Parallel
    is wonderful, but it wasn't right for HPC** (multi-node over SSH, scheduler
    integration, fault tolerance at scale). The concern was real, the existing
    rung couldn't meet it, so a new rung was justified. *That* is how you're
    allowed to add complexity — and it's exactly the checklist from Slide 18 in
    action.
  * It earns its keep when task volume is enormous and you want elastic
    parallelism without standing up a DAG engine.
  * The honest boundary: if a bash loop or a Slurm array already does it,
    HyperShell is over-kill too. Even the author says: don't reach for it until
    the rung below stops scaling.
  * **Where this sits / what I'm skipping (15s, honest):** HyperShell is *my*
    answer at the extreme executor end, shaped by what I see on **our** HPC.
    Same niche, other tools: **GNU Parallel** (single-node), **Slurm arrays**
    (built-in), **Ray** / **Dask** (Python-native, also creep onto Axis 2).
    Pick whatever fills the *executor* box for you — the box is the point, not
    the brand.
* **Visual:** Terminal-window one-liner, the real HyperShell idiom on-slide:
  ```sh path=null start=null
  seq 1000000 | hsx -t 'echo {}' -N64 --ssh 'a[00-32].cluster' > task.out
  ```
  Caption: *hypershell.readthedocs.io · `hs --help`*.
* **Transition:** *"None of that handles tasks that depend on each other.
  For that we change axes entirely."*

### Slide 14 — Axis 2 · "Make is all you need" (15:30–17:00)

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
  * Where it strains: no built-in containers, no cluster-aware execution, no
    automatic resume across environments, weak handling of dynamic fan-out.
* **Visual:** "Code/definition" treatment (distinct from the terminal
  aesthetic) of a small Makefile:
  ```makefile path=null start=null
  results/%.out: samples/%.fastq
      ./analyze.sh $< > $@

  all: $(patsubst samples/%.fastq,results/%.out,$(wildcard samples/*.fastq))
  ```
* **Transition:** *"When Make genuinely runs out of road — and only then —
  you climb to a real workflow engine."*

### Slide 15 — Axis 2 · Nextflow as the justified endpoint (17:00–19:00) · must-not-skip

* **Core message:** Nextflow is the top of the orchestration axis — and its
  complexity is *justified* by features Make can't give you.
* **Talking points:**
  * What you actually get for the added complexity:
    * **Containers** — per-process reproducible environments, built in.
    * **Dataflow DAG** — dynamic fan-out/fan-in driven by channels, not a
      static target list.
    * **`-resume` caching** — restart a failed pipeline and skip completed
      work automatically.
    * **Executor portability** — the *same* pipeline runs on Slurm, on
      Kubernetes, on the cloud, by changing one config line.
    * **nf-core** — a curated library of peer-reviewed pipelines you can
      adopt instead of writing your own.
  * The honest framing: this is a *lot* of machinery. It earns its keep when
    you have real inter-task dependencies, heterogeneous environments, long
    pipelines that fail partway, or a community pipeline that already exists.
  * If you don't have those needs, Slide 14 was your answer.
  * **Where this sits / what I'm skipping (15s, honest — and owning the bias):**
    I picked Nextflow because it's what I most often see *researchers* actually
    reach for on our HPC — that's the **view from the trenches at a real HPC
    center**, and I'll stand behind it. But it's one orchestrator among many:
    **Snakemake** (Python/Make-flavored, huge in bioinformatics),
    **CWL/Cromwell**, **Parsl**, **Luigi**, and — over in industry —
    **Airflow**. I can't do justice to all of them in thirty minutes, and I
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

### Slide 18 — The decision ladder + checklist (19:30–21:30) · must-not-skip

* **Core message:** The single portable artifact: both axes on one visual,
  plus a verbal checklist for deciding when to climb.
* **Talking points:**
  * Show both axes together with their rungs:
    * *Executor:* bash loop → Slurm array → HyperShell.
    * *Orchestration:* Makefile → Nextflow.
  * The **"does it earn its keep?"** checklist — climb a rung only if you can
    say yes to one:
    * Am I hitting a real *scale* wall (too many tasks for the current rung)?
    * Do tasks have genuine *dependencies* I'm currently faking by hand?
    * Do I need *reproducible environments* I can't get otherwise?
    * Do I need to *resume* expensive partial runs?
    * Do I need to *port* this pipeline to another system?
    * Is there an *existing community pipeline* (nf-core) that already solves
      this?
  * Land the thesis again: *"If the answer is no, you're done. Stop climbing."*
* **Visual:** The full two-axis **decision ladder** (new custom layout) on
  the left; the six-item checklist on the right. This is the slide to
  photograph.
* **Transition:** *"One more thing the tools won't save you from: the data."*

### Slide 19 — Data management · locality & tiers (21:30–23:30)

* **Core message:** Data movement is usually the real bottleneck, and tiering
  is the researcher's job. The simplest tiering is a one-line `rsync`.
* **Talking points:**
  * **The tiers (RCAC concretely):** *Fortress* (tape — cold, archival),
    *Data Depot* (spinning disk — warm, project storage), *Scratch* (all-flash
    — hot, fast-local for active jobs).
  * There is no perfect filesystem overlay that auto-tiers for you. In its
    absence, *you* tier in the application layer.
  * **Simplest version:** an `rsync` into fast storage at the top of your job
    script, compute, then `rsync` results back:
    ```sh path=null start=null
    rsync -a $DEPOT/project/input/ $SCRATCH/run/input/
    ./run_pipeline $SCRATCH/run/
    rsync -a $SCRATCH/run/output/ $DEPOT/project/output/
    ```
  * **More sophisticated:** make staging an explicit workflow step with
    dependency relationships (this is exactly where Axis 2 earns its keep).
  * The thesis applies here too: stage simply first; add a data-orchestration
    layer only when manual staging stops scaling.
* **Visual:** A cold→warm→hot tier diagram (tape · disk · flash) with the
  RCAC system names, plus the on-slide rsync snippet.
* **Transition:** *"There's one new operator showing up in all of this."*

### Slide 20 — One agentic beat · agents as operators (23:30–25:00)

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
  decision ladder from Slide 18, captioned *"same rule: simplest thing that
  works, then verify."*
* **Transition:** *"Which brings me back to where we started."*

### Slide 21 — Closing · real perfection is simplicity (25:00–26:30)

* **Core message:** Invert the cold open. The over-engineered stack wasn't
  perfection; the simplest thing that works is.
* **Talking points:**
  * Call back to Slide 4: *"Remember the beautiful, elegant machine that did
    the work of a `for` loop?"*
  * The inversion: *"Real perfection isn't the most impressive stack. It's the
    least machinery that actually solves your problem."*
  * Recap the takeaways in one breath: name the layers; know which axis you're
    on; climb only when a rung earns its keep; tier your data; verify.
  * **End on love, not lecture (closes the tone loop):** the reward for getting
    this right isn't austerity — it's the *purr*. A right-sized stack that runs
    clean, scales when you need it, and that you (and the next person) can
    actually understand is one of the best feelings in this work. Build for
    that. *"Don't be a merchant of complexity — be a buyer who knows the price,
    and an engineer who loves a stack that purrs."*
* **Visual:** The inverted "Perfection" beat — the Slide 4 gag re-rendered
  minimal: a single clean box ("a `for` loop") where the monster used to be.
* **Transition:** *"Here's where to find everything."*

### Slide 22 — Resources & contact (26:30–28:30)

* **Core message:** Where to learn more; how to reach me.
* **Talking points:**
  * **RCAC training & user guides** — the cluster docs and the throughput /
    workflow user guides.
  * **HyperShell** — `hypershell.readthedocs.io`, `github.com/hypershell`.
  * **Tool docs** — Slurm job arrays, GNU Make, Nextflow / nf-core.
  * **Data tiers** — RCAC Fortress / Data Depot / Scratch guides.
  * **Contact:** `glentner@purdue.edu` — find me after, or by email.
  * **Credit:** work supported by RCAC at Purdue.
* **Visual:** Clean Purdue 2026 closing card — RCAC mark, a row of QR codes
  (RCAC docs · HyperShell · Nextflow/nf-core), email and credit line.
* **Closing line:** *"Start simple. Thanks."*

## 5) Slide architecture

* **Total:** ~20 narrative beats across **22 physical slides**.
* **Pacing:** ~90s average. The prelude (Slides 1–3) is fast: a ~30s title,
  a ~45s About RCAC, and a 60–90s About Me. The cold open (Slide 4) runs long
  with the laugh; the Zoo (Slide 6) is a deliberately short ~45s backdrop; the
  centerpiece anatomy (Slide 9), the Nextflow justification (Slide 17), the
  decision ladder (Slide 18), and data management (Slide 19) each take ~120s.
  The executor-axis rungs (Slides 13–15) move briskly — they're a climb, not
  three full stops.
* **Layout inheritance:** all slides inherit from the Purdue 2026 template
  family documented in `THEME.md` (to be ported from `../2026-nairr-workshop-talk/`)
  — cover, section divider, content, two-panel split, card grid, closing card
  — with **RCAC** marks substituted for generic Purdue marks. New custom
  layouts unique to this deck: the **About RCAC** layout (photo cluster +
  squiggle-boxed pillars, Slide 2), the **triple-point Venn** (Slide 3), the
  **Zoo logo-wall** (Slide 6), the **Rube Goldberg stack** (Slides 9–10), the
  **two-axis decision ladder** (Slides 12, 18), and the **storage-tier
  diagram** (Slide 19).
* **Two code aesthetics, kept distinct (per GOAL.md):** a *terminal-window*
  treatment for **commands you run** (Slides 13, 14, 15, 19) and a
  *code/definition* treatment for **workflow definitions** (Slides 16, 17).
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
4. **Slide 18 — the decision ladder + checklist.** The single most portable
   artifact; the thing undergrads carry home.
5. **Slide 21 — real perfection is simplicity.** The inversion that closes
   the loop. Without it the talk has no exit.

Compressible if time slips: Slide 2 (About RCAC — first to cut; one sentence if
the room already knows RCAC), Slide 6 (the Zoo — a few seconds of backdrop, or
cut entirely), Slide 7 (on-ramp — one line if the room is HPC-literate),
Slide 14 (Slurm array — can be a verbal mention between bash loop and
HyperShell), Slide 20 (agentic beat — one sentence). Never compress 3, 4, 12,
18, or 21.

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
    Slide 18; reprised on Slides 17 and 19.)
  * *"Merchants of complexity."* (Slide 11; reprised in the Slide 21 close.)
  * *"This could have been a Makefile and a cron-job."* (Slide 11; the
    industry-platform lament — reusable any time someone over-builds.)
  * *"`2>&1` and a cron email vs. a $200M observability bill."* (Slide 11; the
    observability swing — the widest gap between humble and maximal.)
  * *"Same handful of layers — only the brand names change."* (Slide 10; the
    academic↔industry parallel, Slurm/Kubernetes · Make/Airflow ·
    Apptainer/Docker · logs+cron/Datadog.)
  * *"Which axis are you on?"* (Slide 12; reprised on Slide 18.)
  * *"The simplest thing that works."* (Slide 5; the walk-off on Slide 21.)
  * *"Make it purr."* (Love-of-craft counterweight — Slide 3 (About Me) setup,
    Slide 5 thesis framing, Slide 21 payoff. Keeps the whole talk on the
    enthusiast-with-judgment side, not the grumpy-old-man side.)
  * *"The map outlasts the tools."* (Honest-scoping beat — Slide 12 reveal,
    reprised on Slides 15 and 17. Signals the deep dives are deliberately
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
    Slide 14 (Slurm array) into a verbal aside, trim Slide 7 to one line, and
    drop the Slide 6 Zoo to a few seconds. Never compress 3, 4, 12, 18, 21.
  * *Time expands.* Add a second worked example to the data-management slide
    (Slide 19), or expand the nf-core beat on Slide 17.
  * *HPC-novice room.* Slow down on Slide 7 (capability vs. capacity) and
    Slide 13 (the bash loop); these are the undergrad on-ramps.
  * *Practitioner-heavy room.* Lean into the asides (GNU Parallel on Slide 15,
    the Make-in-data-science history on Slide 16) and move faster through the
    on-ramp.
  * ***Tone drift — the "old man yells at cloud" failure mode.*** The single
    biggest delivery risk: the thesis, the merchants beat, and the cron-job
    lament can stack up into pure grumbling. **Antidote:** front-load the
    love-of-craft (Slide 3 About Me, Slide 5 thesis), keep HyperShell as living
    proof I build *and* love new tools (Slide 15), and land Slide 21 on the
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
* **Slide 4 / Slide 21.** Pick the best "Perfection" meme image for the cold
  open and decide how the inversion re-renders it minimally (the `for`-loop
  box). Optionally consider a custom Purdue-style absurd-stack illustration if
  it reads better than the meme — purely an aesthetic call.
* **Slide 6 (the Zoo).** Lock the final logo set, grouping, and
  size-by-popularity layout.
* **Slide 9.** Final visual direction for the dense "anatomy" diagram — exact
  boxes, vertical vs. layered orientation, and how it re-renders into the
  labeled Slide 10 version.
* **Slides 13–17.** Confirm the on-slide snippets are the ones you want to
  stand behind on stage (all snippets are currently on-slide per the agreed
  direction). Decide whether `analyze.sh` is a good through-line example or
  whether to swap in a domain example (bioinformatics? astronomy?).
* **Slide 15.** HyperShell self-disclosure is now framed as a *feature* — the
  worked example of complexity that earned its keep (a better GNU Parallel for
  HPC). Confirm you're comfortable with that level of self-reference on stage.
* **Slide 19.** Confirm the exact RCAC tier names/marketing names and any
  current guidance you want to cite (Fortress / Data Depot / Scratch).
* **Slide 22.** Finalize the resource list and which three links get QR codes.
* **Scaffolding.** Slidev version pin and a dev port distinct from siblings
  (3032/3033/3034) — proposed **3035**. To be settled in `ROADMAP.md`, not here.
* **Visual identity.** Port `THEME.md` from the NAIRR deck and note the six
  new custom layouts (About RCAC, triple-point Venn, Zoo logo-wall, Rube
  Goldberg stack, two-axis ladder, storage tiers).
