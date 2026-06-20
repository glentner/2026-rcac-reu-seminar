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
for judgment instead. We open with a deliberately absurd over-engineered stack
— the *"Perfection"* gag — to shock the room with how baroque a workflow *can*
get, then state the thesis plainly: **start simple; add complexity only where
it earns its keep.** The posture is not anti-complexity or anti-tool — I've
been building and debugging workflows since before Kubernetes or Azure
existed, and I built HyperShell myself because GNU Parallel wasn't right for
HPC — it's about *maturing with* the complexity rather than being seduced by
it.
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

* **This is a craft worth loving.** Operationalizing research workflows — from
  a Jupyter notebook to scale-out automation on a supercomputer — is deeply
  satisfying work. The goal is *getting the job done at scale*, and getting a
  stack right feels great. We come at this as an enthusiast, not a cynic.
* **The zoo is real and it is absurd.** That same enthusiasm can run away from
  you: workflows get stacked into a Rube Goldberg machine that only the
  builder understands. We laugh at it first, on purpose — with affection, not
  contempt.
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
| 0:00–0:45 | 1 | Title + intro |
| 0:45–2:15 | 2 | Cold open — the "Perfection" over-engineered stack |
| 2:15–3:15 | 3 | Thesis card — *complexity must earn its keep* |
| 3:15–4:30 | 4 | On-ramp — capability vs. capacity |
| 4:30–5:45 | 5 | Why the layers exist (concern → layer) |
| 5:45–7:30 | 6 | Anatomy of an over-engineered workflow (centerpiece) |
| 7:30–9:00 | 7 | Decompose the layers |
| 9:00–10:30 | 8 | "Merchants of complexity" (incl. academic vs. industry) |
| 10:30–11:15 | 9 | Two axes, not one ladder (framework reveal) |
| 11:15–12:45 | 10 | Axis 1 — executor/scale: the bash loop |
| 12:45–14:15 | 11 | Axis 1 — Slurm job array |
| 14:15–15:45 | 12 | Axis 1 — HyperShell (extreme executor end) |
| 15:45–17:15 | 13 | Axis 2 — "Make is all you need" |
| 17:15–19:15 | 14 | Axis 2 — Nextflow as the justified endpoint |
| 19:15–21:15 | 15 | The decision ladder + "earn its keep" checklist |
| 21:15–23:30 | 16 | Data management — locality & storage tiers |
| 23:30–25:00 | 17 | One agentic beat — agents as operators |
| 25:00–26:30 | 18 | Closing — real perfection is simplicity |
| 26:30–28:30 | 19 | Resources & contact |

*Target delivery ~28:30 with a ~90s cushion for the cold-open laugh, the
HDMI tax, and transitions. Nineteen physical slides at ~90s average.*

## 4) Slide-by-slide talking points

### Slide 1 — Title (0:00–0:45)

* **Core message:** Who I am and what the next half hour is about: getting the
  job done at scale, *from Jupyter to supercomputers* — from someone who loves
  this craft and has been doing it a long time.
* **Talking points:**
  * Geoffrey Lentner, Principal AI Scientist at Purdue's Rosen Center for
    Advanced Computing.
  * Topic, said positively: how to take research and data analysis **from a
    Jupyter notebook to scale-out automation on a supercomputer** — and how to
    do it *without* losing your mind.
  * Establish credibility *gently* (this is the anti-grumpy-old-man anchor):
    I've been building and debugging research workflows since before
    Kubernetes, before "the cloud" was a product you could buy — long enough
    to have strong opinions, and long enough to have *earned* them. I build
    tools too (HyperShell); I'm an enthusiast first.
  * One-line promise: by the end you'll have a mental model for deciding how
    much machinery your workflow actually needs — so you can enjoy the craft
    without getting buried by it.
* **Visual:** Purdue 2026 cover layout — black field, gold border, centered
  title/subtitle, **RCAC** horizontal mark, venue + date in the upper margin.
* **Transition:** *"Now — because I love this stuff, let me start with my
  favorite cautionary tale."*

### Slide 2 — Cold open · the "Perfection" stack (0:45–2:15)

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
* **Visual:** The "Perfection" gag image as **placeholder** (rights to be
  resolved; see TODOs), overlaid on / beside a dense absurd-stack diagram.
  Minimal text; let the image and the spoken stack carry it.
* **Transition:** *"So here's the one sentence I want you to leave with."*
* **Delivery note:** Use the silence after "does the work of a `for` loop."
  Let the laugh land before the thesis.

### Slide 3 — Thesis card (2:15–3:15)

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
    scale) and over-engineering (the Slide 2 monster). The craft — and the
    *fun* — is in finding the floor that actually solves your problem.
  * Frame the talk: we'll build a vocabulary for *naming* complexity and a
    *decision tool* for *adding* it deliberately — so you can mature *with* the
    complexity instead of being sold it.
* **Visual:** Purdue 2026 "Overview" tan/buff section-divider card, one large
  thesis line, short caption: *"the simplest thing that works."*
* **Transition:** *"First, a little ground-clearing for those new to HPC."*

### Slide 4 — On-ramp: capability vs. capacity (3:15–4:30)

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
  vocabulary that Slides 6–7 will decompose.
* **Transition:** *"Before we judge any of those layers, it's worth asking why
  they exist at all."*

### Slide 5 — Why the layers exist (4:30–5:45)

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
* **Visual:** The Slide 4 layer stack, annotated — each layer paired with the
  operational concern that justifies it (concern → layer). Sets up Slide 6 as
  "what happens when you grab every layer whether or not you have the concern."
* **Transition:** *"Now grab every layer at once, whether you need it or not —
  and you get this."*

### Slide 6 — Anatomy of an over-engineered workflow (5:45–7:30) · centerpiece

* **Core message:** The "shock" slide — one dense diagram of a maximalist
  workflow stack. The visual centerpiece of the talk.
* **Talking points:**
  * This is the Slide 2 gag drawn seriously: a full Rube Goldberg stack with
    every layer present at once.
  * Don't explain it yet — let the density do the work. *"This is real. People
    build this. Sometimes they even need to."*
  * Plant the question we'll answer: *"How would you know which of these boxes
    you actually need?"*
* **Visual:** A single dense vertical/stacked diagram showing the full
  over-engineered pipeline (web service → resource manager → DAG engine →
  containerized steps → templating DSL → persistence/DB → observability/SaaS
  dashboards → the actual compute). This is a **new custom layout** (the
  "Rube Goldberg stack").
* **Transition:** *"Step one to taming it: give every box a name."*

### Slide 7 — Decompose the layers (7:30–9:00)

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
* **Visual:** The Slide 6 diagram re-rendered with each layer labeled and
  color-coded; alongside each layer, a small *academic | industry* tool pair
  (Slurm | Kubernetes · Make/Nextflow | Airflow · Apptainer | Docker ·
  logs+cron | Datadog).
* **Transition:** *"And here's the trap that spans both worlds: the tools that
  promise to *tame* this complexity often just *move* it."*

### Slide 8 — "Merchants of complexity" (9:00–10:30) · recurring callback

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

### Slide 9 — Two axes, not one ladder (10:30–11:15) · framework reveal · must-not-skip

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
* **Visual:** Two clearly separated arrows/axes on one card — horizontal
  "scale" axis and a distinct "orchestration" axis — each with its rungs
  labeled but not yet detailed. **New custom layout** (preview of the
  decision ladder).
* **Transition:** *"Let's climb Axis 1 — and stop the moment it earns its
  keep."*

### Slide 10 — Axis 1 · the bash loop (11:15–12:45)

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

### Slide 11 — Axis 1 · Slurm job array (12:45–14:15)

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

### Slide 12 — Axis 1 · HyperShell (14:15–15:45)

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
    allowed to add complexity — and it's exactly the checklist from Slide 15 in
    action.
  * It earns its keep when task volume is enormous and you want elastic
    parallelism without standing up a DAG engine.
  * The honest boundary: if a bash loop or a Slurm array already does it,
    HyperShell is over-kill too. Even the author says: don't reach for it until
    the rung below stops scaling.
* **Visual:** Terminal-window one-liner, the real HyperShell idiom on-slide:
  ```sh path=null start=null
  seq 1000000 | hsx -t 'echo {}' -N64 --ssh 'a[00-32].cluster' > task.out
  ```
  Caption: *hypershell.readthedocs.io · `hs --help`*.
* **Transition:** *"None of that handles tasks that depend on each other.
  For that we change axes entirely."*

### Slide 13 — Axis 2 · "Make is all you need" (15:45–17:15)

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

### Slide 14 — Axis 2 · Nextflow as the justified endpoint (17:15–19:15) · must-not-skip

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
  * If you don't have those needs, Slide 13 was your answer.
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

### Slide 15 — The decision ladder + checklist (19:15–21:15) · must-not-skip

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

### Slide 16 — Data management · locality & tiers (21:15–23:30)

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

### Slide 17 — One agentic beat · agents as operators (23:30–25:00)

* **Core message:** AI agents are becoming operators and consumers of these
  same workflow tools — and the thesis doesn't change.
* **Talking points:**
  * My day job now is AI/agentic research workflows, and agentic work has the
    *same shape* as classic research workflows: tasks, data, dependencies,
    resources.
  * Agents are starting to *drive* these tools — submitting jobs, staging
    data, assembling pipelines — through interfaces like MCP servers.
  * The same rule holds, maybe more so: give the agent the *simplest* tool
    that works, and *verify* the result. An agent that reaches for the Slide 6
    monster is just as wrong as a human who does.
  * Keep this to one beat — it's a signpost, not a theme.
* **Visual:** A single clean panel: an agent loop node feeding into the
  decision ladder from Slide 15, captioned *"same rule: simplest thing that
  works, then verify."*
* **Transition:** *"Which brings me back to where we started."*

### Slide 18 — Closing · real perfection is simplicity (25:00–26:30)

* **Core message:** Invert the cold open. The over-engineered stack wasn't
  perfection; the simplest thing that works is.
* **Talking points:**
  * Call back to Slide 2: *"Remember the beautiful, elegant machine that did
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
* **Visual:** The inverted "Perfection" beat — the Slide 2 gag re-rendered
  minimal: a single clean box ("a `for` loop") where the monster used to be.
* **Transition:** *"Here's where to find everything."*

### Slide 19 — Resources & contact (26:30–28:30)

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

* **Total:** ~17 narrative beats across **19 physical slides**.
* **Pacing:** ~90s average. The cold open (Slide 2) runs long with the laugh;
  the centerpiece anatomy (Slide 6), the Nextflow justification (Slide 14),
  the decision ladder (Slide 15), and data management (Slide 16) each take
  ~120s. The executor-axis rungs (Slides 10–12) move briskly — they're a
  climb, not three full stops.
* **Layout inheritance:** all slides inherit from the Purdue 2026 template
  family documented in `THEME.md` (to be ported from `../2026-nairr-workshop-talk/`)
  — cover, section divider, content, two-panel split, card grid, closing card
  — with **RCAC** marks substituted for generic Purdue marks. New custom
  layouts unique to this deck: the **Rube Goldberg stack** (Slides 6–7), the
  **two-axis decision ladder** (Slides 9, 15), and the **storage-tier diagram**
  (Slide 16).
* **Two code aesthetics, kept distinct (per GOAL.md):** a *terminal-window*
  treatment for **commands you run** (Slides 10, 11, 12, 16) and a
  *code/definition* treatment for **workflow definitions** (Slides 13, 14).
  Do not blur the two.

## 6) Must-not-skip slides

If the prior session runs long, the HDMI adapter dies, or the moderator
flashes the two-minute card early, these still must be told for the talk to
cohere:

1. **Slide 2 — the cold open.** Without the gag there's no rhetorical posture
   and no payoff to invert at the end.
2. **Slide 9 — two axes, not one ladder.** The core intellectual contribution.
   Everything technical hangs on it.
3. **Slide 15 — the decision ladder + checklist.** The single most portable
   artifact; the thing undergrads carry home.
4. **Slide 18 — real perfection is simplicity.** The inversion that closes
   the loop. Without it the talk has no exit.

Compressible if time slips: Slide 4 (on-ramp — one line if the room is
HPC-literate), Slide 11 (Slurm array — can be a verbal mention between bash
loop and HyperShell), Slide 17 (agentic beat — one sentence). Never compress
2, 9, 15, or 18.

## 7) Delivery aids

* **Opening anchor sentence** (off the cold-open stack):
  > *"This is beautiful, it's elegant, and it does the exact work of a `for`
  > loop. Today is about telling the difference between complexity you need
  > and complexity you've been sold."*
* **Recurring rhetorical beats:**
  * *"Does it earn its keep?"* (Thesis on Slide 3; the literal checklist on
    Slide 15; reprised on Slides 14 and 16.)
  * *"Merchants of complexity."* (Slide 8; reprised in the Slide 18 close.)
  * *"This could have been a Makefile and a cron-job."* (Slide 8; the
    industry-platform lament — reusable any time someone over-builds.)
  * *"`2>&1` and a cron email vs. a $200M observability bill."* (Slide 8; the
    observability swing — the widest gap between humble and maximal.)
  * *"Same handful of layers — only the brand names change."* (Slide 7; the
    academic↔industry parallel, Slurm/Kubernetes · Make/Airflow ·
    Apptainer/Docker · logs+cron/Datadog.)
  * *"Which axis are you on?"* (Slide 9; reprised on Slide 15.)
  * *"The simplest thing that works."* (Slide 3; the walk-off on Slide 18.)
  * *"Make it purr."* (Love-of-craft counterweight — Slide 1 setup, Slide 3
    thesis framing, Slide 18 payoff. Keeps the whole talk on the
    enthusiast-with-judgment side, not the grumpy-old-man side.)
* **Risk register:**
  * *Time slips.* Collapse Slide 11 (Slurm array) into a verbal aside first;
    then trim Slide 4 to one line. Never compress 2, 9, 15, 18.
  * *Time expands.* Add a second worked example to the data-management slide
    (Slide 16), or expand the nf-core beat on Slide 14.
  * *HPC-novice room.* Slow down on Slide 4 (capability vs. capacity) and
    Slide 10 (the bash loop); these are the undergrad on-ramps.
  * *Practitioner-heavy room.* Lean into the asides (GNU Parallel on Slide 12,
    the Make-in-data-science history on Slide 13) and move faster through the
    on-ramp.
  * ***Tone drift — the "old man yells at cloud" failure mode.*** The single
    biggest delivery risk: the thesis, the merchants beat, and the cron-job
    lament can stack up into pure grumbling. **Antidote:** front-load the
    love-of-craft (Slides 1, 3), keep HyperShell as living proof I build
    *and* love new tools (Slide 12), and land Slide 18 on the *purr*, not on
    austerity. If you feel yourself getting cranky on stage, name a tool you
    genuinely love and why it earned its keep.
* **Hallway-track routing:** Snakemake vs. Nextflow vs. Parsl/Dask debates,
  Kubernetes-vs-Slurm, MCP server design, and "which tool for my specific
  pipeline" — all routed to the hallway after the closing card. The talk is a
  *mental model*, not a tool bake-off; don't let Q&A pull it into one.

## 8) Open TODOs for Geoffrey

* **Slide 2 / Slide 18.** Resolve the "Perfection" image rights posture — meme
  image vs. a custom-drawn absurd-stack illustration in the Purdue style. The
  meme is in as a placeholder for now; the cold open and its inversion may both
  need a self-made visual to stay on-brand and rights-clean.
* **Slide 6.** Final visual direction for the dense "anatomy" diagram — exact
  boxes, vertical vs. layered orientation, and how it re-renders into the
  labeled Slide 7 version.
* **Slides 10–14.** Confirm the on-slide snippets are the ones you want to
  stand behind on stage (all snippets are currently on-slide per the agreed
  direction). Decide whether `analyze.sh` is a good through-line example or
  whether to swap in a domain example (bioinformatics? astronomy?).
* **Slide 12.** HyperShell self-disclosure is now framed as a *feature* — the
  worked example of complexity that earned its keep (a better GNU Parallel for
  HPC). Confirm you're comfortable with that level of self-reference on stage.
* **Slide 16.** Confirm the exact RCAC tier names/marketing names and any
  current guidance you want to cite (Fortress / Data Depot / Scratch).
* **Slide 19.** Finalize the resource list and which three links get QR codes.
* **Scaffolding.** Slidev version pin and a dev port distinct from siblings
  (3032/3033/3034) — proposed **3035**. To be settled in `ROADMAP.md`, not here.
* **Visual identity.** Port `THEME.md` from the NAIRR deck and note the three
  new custom layouts (Rube Goldberg stack, two-axis ladder, storage tiers).
