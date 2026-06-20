# OUTLINE-SAMPLE.md — proposed per-slide template (3 samples)

> Throwaway proposal file. Three representative slides re-cast into the new
> **Context notes / Speaker beats / Example lines** shape (plus the existing
> Visual / Transition / Delivery fields). Approve the shape here and I'll apply
> it across all 24 slides in `OUTLINE.md`, then delete this file.
>
> Template per slide:
> - **Context notes** — the *why* / the journey / what this slide is really for.
>   Richness lives here; nothing from the current outline is discarded.
> - **Speaker beats** — the ordered on-stage *moves* (short imperatives).
> - **Example lines** — illustrative sentences you *could* say. Not a script.
> - **Visual / Transition / Delivery note** — as today.

---

### Slide 3 — About Me · systems · science · software (1:15–2:30) · must-tell

**Context notes**
* My perspective *is* the argument. The license to say "add complexity only when
  it earns its keep" comes from sitting at the **triple-point** of systems,
  science, and software — the "unicorn" facilitator who knows enough of each to
  translate between all three. This is the **anti-grumpy-old-man anchor**: an
  enthusiast at ease, not a novice complaining.
* The personal arc deliberately mirrors the talk's own *Jupyter → scale-out*
  journey: astrophysics → data-science-at-scale on HPC → full-stack RSE → now
  AI/agentic. Each step *added* a domain without abandoning the last.
* **Decision (this session):** the old "four jobs of this talk" beat is **cut**
  from what I say on stage. It was throat-clearing — a spoken table of contents.
  It survives only as a *private design constraint* (show passion; survey the
  map; leave one portable rule; stay honest about scope). If a slide serves none
  of those four, it's a cut candidate — but I don't recite them.
* Earned authority, said *warmly*, not as a flex: building/debugging research
  workflows since before Kubernetes or "the cloud" was a product. Long enough to
  have strong opinions and to have *earned* them. I build tools too (HyperShell).

**Speaker beats**
1. Land the Venn: triple-point job, fluent across all three, deepest in none.
2. Walk the personal arc fast (four stops), tying it to the talk's arc.
3. Drop the earned-authority line — warm, not boastful; "enthusiast first."
4. One-line promise of the payoff (a mental model for *how much machinery*).
5. Hand off to the cold open.

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
and the triple-point (center = *facilitator / the unicorn*). Final label set is
a TODO. (Headshot + source image from Geoffrey; new "triple-point Venn" layout.)
**Transition:** *"Now — because I love this stuff, let me start with my favorite
cautionary tale."*
**Delivery note:** This is must-tell and the tone-setter. Warm, unhurried; this
is *not* an Act-1 firehose slide. ~60–90s.

---

### Slide 6 — The Zoo · a literal logo-wall (4:45–5:45) · Act-1 climax · ~60–75s

**Context notes**
* **Reframed this session:** the zoo is no longer a 45s backdrop — it's the
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

---

### Slide 16 — Axis 1 · HyperShell + the pressure-release valve (15:15–16:45) · must-not-skip

**Context notes**
* This is the hardest slide for the new template because it is **both** scenery
  (the one-liner + feature box, which nobody must read) **and** a must-land idea
  (the pressure-release-valve argument — the single best beat in the talk). The
  template has to hold both without letting the scenery steal the idea's air.
* **The idea that must land** (slow, Act-2 pace): at extreme scale the bottleneck
  isn't your code — it's *shared infrastructure*. A million job-steps is a
  self-inflicted DDoS on `slurmctld`, the daemon every other user depends on.
  An executor grabs **one allocation** and meters tasks internally. *That's* why
  it earns its keep — it protects the **machine**, not just you. "Earn its keep"
  stops being about convenience and becomes about the shared system.
* **The scenery** (fast): the one-liner is the same idiom as `xargs`, just
  scaled out. The v2.8 feature box is texture — pick 3–4, gesture, don't read.
* HyperShell is *my* tool — and that's the point, not a caveat. It's the worked
  proof the talk isn't anti-tool: GNU Parallel is wonderful but wasn't right for
  HPC; a job array DDoSes the controller at extreme counts; the concern was
  real and unmet, so a new rung was justified. (Slide 19 checklist in action.)
* **Control-gradient flavor (this session's reframe):** introduce it here as a
  *felt question*, not a second framework — "who's holding the wires?" At this
  rung the framework starts holding them. Keep it to one sentence; the formal
  version stays off the ladder.
* Honest boundary: if a bash loop, `xargs`, or a Slurm array already does it,
  HyperShell is overkill too. Even the author says don't reach for it early.
* The "what I'm skipping" tool list (GNU Parallel, ParaFly, TaskFarmer,
  Launcher, Ray/Dask/Parsl, HTCondor above) is **scenery/hallway-track** — name
  a couple, wave at the rest; do not enumerate on stage.

**Speaker beats**
1. Show the one-liner — **scenery.** "Same idiom as `xargs`, just bigger." Move.
2. Slow down. Land the pressure-release-valve idea (the DDoS on `slurmctld`).
   This is the must-land beat — give it air.
3. Full-disclosure it's my tool — frame as proof, not caveat.
4. One-sentence control-gradient flavor: "who's holding the wires now?"
5. Honest boundary (don't reach for it early) + wave at the neighbors. Move on.

**Example lines** *(illustrative)*
* "You don't need to read this — just notice it's the `xargs` idea again, only
  now it's fanning a million tasks across the whole cluster."
* "At a million tasks the bottleneck isn't your code — it's the *one* scheduler
  daemon everyone on the machine shares. Submit a million job-steps and you've
  DDoS'd it. So the executor grabs *one* allocation and meters the tasks itself —
  the controller sees one job, not a million. That's not about your
  convenience. That's about protecting the machine."
* "Full disclosure: this is my tool. That's the point, not an apology — GNU
  Parallel is wonderful but wasn't right for HPC, so the rung had to exist."
* "Notice what changed as we climbed: at the bottom *you* held the wires. Up
  here, a framework does — and now you have to feed it."

**Visual:** Terminal-window one-liner (real HyperShell idiom), e.g.
```sh path=null start=null
seq 1000000 | hsx -t 'echo {}' -N64 --ssh 'a[00-32].cluster' > task.out
```
Plus a small **"earned its keep" feature callout box** (v2.8 — accurate to the
release notes; pick 3–4, don't read them all): DB-in-the-loop (SQLite/Postgres;
history, fault-tolerance, automated retries); extreme elastic scale-out
(staggered launch to 1000+ nodes / 250k+ workers; scale to zero); resource-aware
scheduling (per-task cores/memory/walltime, client-side backfill); task groups
(lightweight inter-task dependencies). Caption:
*hypershell.readthedocs.io · `hs --help` · v2.8*.
**Transition:** *"That's pure execution — a million unrelated tasks. None of it
handles tasks that *depend* on each other. For that we change axes entirely."*
**Delivery note:** **Mixed pace** — snippet/feature box are *scenery* (fast,
gesture); the `slurmctld` beat is the *idea* (slow, give it room). Don't let the
feature box eat the punchline's air. ~120s.
