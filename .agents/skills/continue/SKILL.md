---
name: continue
description: Resume the REU-2026 Slidev deck implementation by executing the next incomplete sub-phase from ROADMAP.md. The default behavior is conservative — one sub-phase at a time, with a single WIP commit, then stop and report for review. Free-form arguments can target a specific sub-phase, run multiple sub-phases in sequence, do a dry run that surfaces the plan without executing, or just report current state. The skill is wired to ROADMAP.md's machine-readable slides registry, open_decisions ledger, per-slide definitions-of-done, pacing/act guardrails, verification gates, and resume contract.
---

# Continue (Resume Implementation)

## When to Use

Invoke `/continue` when picking up REU-2026 Slidev deck work in a fresh
session — or after a review checkpoint — and you want the next slice of
`ROADMAP.md` executed without re-explaining the whole project. The skill is
designed for the *one-sub-phase-then-stop* rhythm we use throughout the
deck build: scale up with arguments when you trust the next chunk, or
scale down to a dry run when you don't.

This deck is an **inspiration talk, not an instruction talk** — *impress,
then walk it back.* Code snippets are **scenery, not curriculum.** Honor
that posture when building (see Safety Principles).

## User Instructions

Additional instructions provided with the invocation: $ARGUMENTS

## Argument Parsing

If any text was passed with the invocation, parse it case-insensitively
against the patterns below. If the instruction is ambiguous or contradicts
itself, STOP and ask the user to clarify rather than guess.

- `phase X.Y` / `at X.Y` / `from X.Y` / `start at X.Y` → start at sub-phase
  `X.Y` instead of the `current_phase` recorded in `ROADMAP.md` frontmatter
- `phase X` (no `.Y`) → execute every incomplete sub-phase inside Phase `X`,
  in order, with one commit per sub-phase
- `slide N` / `slide 17b` / `slide 20A` → execute only the sub-phase that
  builds physical slide `N` (consult the `slides:` registry to map a slide
  id to its `phase`). Useful after manual edits or to redo one slide.
- `through X.Y` / `up to X.Y` / `until X.Y` → execute the next incomplete
  sub-phase and continue forward, stopping after sub-phase `X.Y` completes
- `next N` / `N sub-phases` → execute the next `N` incomplete sub-phases in
  order (each gets its own commit)
- `phases X..Y` → execute all incomplete sub-phases across phases `X`
  through `Y`, stopping at each phase boundary unless `skip review` is also
  passed
- `dry run` / `plan only` / `preview` → identify the target sub-phase(s) and
  read all relevant context (ROADMAP, OUTLINE, THEME, reference deck), but
  **do not** edit files, run tools, or commit — just report the plan for
  the user to approve
- `status` / `report` / `review only` → summarize the current ROADMAP state
  (current phase, completed phases, next sub-phase, slides-registry status,
  open_decisions blockers) and stop. No implementation, no commits.
- `skip review` / `no checkpoint` → after completing the requested
  sub-phase(s), do NOT stop for review at the natural checkpoint; continue
  to the next sub-phase. Use sparingly; the default checkpoints exist for a
  reason.
- `bundle` → collapse the requested run into a single WIP commit instead of
  one-commit-per-sub-phase. Useful only for tightly coupled mechanical
  sub-phases (e.g. all of Phase 1).

If no arguments were passed, run the default *next-sub-phase-then-stop* path
(Steps 1–6 below; skip Step 0).

## Safety Principles

- **Four documents, one job each — OUTLINE and THEME both win.**
  `OUTLINE.md` is the source of truth for slide *content* (what each slide
  says). `THEME.md` is the source of truth for slide *chrome* (how each
  slide looks). `REVIEW.md` holds the *why* (decisions/rationale).
  `ROADMAP.md` tracks *implementation* only. If `ROADMAP.md` disagrees with
  `OUTLINE.md` on content or `THEME.md` on chrome, follow the authoritative
  document and surface the discrepancy. Do not edit `OUTLINE.md`/`THEME.md`
  content unless implementation surfaces a real correction — and even then,
  surface the proposed change and pause for confirmation before editing.
- **The `slides:` registry is the resume ground truth.** `ROADMAP.md`
  frontmatter carries a machine-readable `slides:` list (one record per
  physical slide, plus the `17b` reverse). The registry `status` field and
  `current_phase` must agree on what's done. If they disagree, STOP and
  report — do not guess which is right.
- **Honor the `open_decisions` ledger.** Before building a slide, check the
  `open_decisions` block for entries whose `blocks` list includes that slide
  id. If a slide is blocked on a Geoffrey-supplied asset or decision, build
  it with a clearly-labeled **placeholder** and flag it in the report —
  do **not** stall the whole sub-phase. If the block is a *content* decision
  (not just an asset), STOP and ask.
- **A slide is `complete` only when its definition-of-done is met.** Each
  slide's ROADMAP entry carries an explicit **DoD** (required OUTLINE beats
  present, recurring lines fired in speaker notes, correct custom layout,
  build/visual gate). Ticking the checklist is necessary but not sufficient
  — verify the DoD before flipping a slide's `status` to `complete`.
- **Pacing is a build constraint, not just a delivery note.** The deck is
  two acts and a turn (see ROADMAP `context.acts`). **Act-1 scenery slides
  get MINIMAL on-slide text** — gesture, don't teach; the snippet just has
  to *look real* and *look like it's getting taller.* **Act-2 must-land
  ideas get room.** Do not over-build a scenery slide with prose. Respect
  the `[BREATH]` points (Slides 2, 6, 12, 19, 22) — leave the slide quiet.
- **Two code aesthetics, never blurred.** Use the *terminal-window*
  treatment for **commands you run** (Slides 13, 14, 15, 16, 20B) and the
  *code/definition* treatment for **workflow definitions** (Slides 17, 18).
  Keep them visually distinct, per `OUTLINE.md` §5 and `THEME.md`.
- **Custom-layout build-order.** A slide cannot be built before its custom
  layout exists. Consult the `layouts:` block in ROADMAP frontmatter: the
  six new layouts (`about-rcac`, `triple-point-venn`, `zoo-logo-wall`,
  `rube-goldberg-stack`, `two-axis-ladder`, `storage-tier`,
  `ownership-ladder`) must be implemented in `styles/index.css` before (or
  as the first step of) the slide that first consumes them. If the layout is
  out of the current sub-phase's scope, STOP and report.
- **Slide 17b is a slide-REVERSE, not a new physical slide.** It reuses the
  Slide 17 Makefile verbatim, talked over with a new lens. Do not create a
  25th slide; the deck is 24 physical slides (25 registry records).
- **`wip` branch only.** All commits land on `wip` with `WIP: ` prefixes
  (per the user's wip-workflow rule). Never commit to `main` from this
  skill. Never squash or force-push from this skill — that's `/release`'s
  job.
- **Co-author every commit** with `Co-Authored-By: Oz <oz-agent@warp.dev>`
  on its own line at the end of the commit message body.
- **Visual identity is Purdue 2026 + RCAC + Franklin Gothic, per `THEME.md`.**
  The chrome is **ported from** `../2026-nairr-workshop-talk/`. The
  Berkeley-Mono / soft-white-on-black terminal *chrome* from the older
  sibling decks (`../2026-globus-world/`, `../2026-midwestrcd-talk/`) is
  **out of scope** for this deck's chrome — no chat bubbles, ASCII frames,
  blinking-cursor h1, monospace H1 treatments, or CRT-amber/Globus-blue
  palette. (The in-slide terminal-window treatment for command snippets is a
  separate, deliberate content device — not the deck chrome.) If a sub-phase
  references a prior-deck component name, adapt it to the Purdue palette and
  Franklin Gothic stack — never copy verbatim.
- **No licensed-font woff2 committed.** Franklin Gothic (the preferred
  display face) is expressed through the CSS font stack, not shipped. Only
  OFL-licensed Source Sans 3 lands in `public/fonts/`.
- **RCAC marks, not generic Purdue marks.** Wherever the Purdue 2026
  template places a Purdue mark, substitute the RCAC mark from
  `public/images/rcac/` (or, if not yet copied, from
  `~/Documents/Purdue/RCAC-Branding/digital/SVG/`). See `THEME.md` for the
  placement rule (reverse mark on cover + closing card; standard mark
  upper-right on content slides).
- **The "Perfection" image and the Zoo logos.** This is a private,
  non-published talk, so the real X-Men "Perfection" meme image (Slide 2)
  and real brand logos (Slide 6 Zoo) are fair to use directly. Keep any
  provenance/disclosure caption the OUTLINE specifies. Do not invent rights
  problems; do not silently substitute images without OUTLINE direction.
- **No live HPC, Globus, or cluster operations.** The HyperShell, Slurm,
  and Globus content (Slides 15, 16, 20B) is illustrative *scenery*. Do not
  attempt to live-run anything against a real cluster or Globus endpoint
  during the deck build.
- **One sub-phase per commit by default.** Even when multiple sub-phases are
  requested, each sub-phase gets its own `WIP:` commit unless `bundle` was
  explicitly passed.
- **Stop on the natural checkpoint** unless `skip review` was passed. Phase
  boundaries (and any sub-phase whose checklist mentions Geoffrey's review)
  are stop points by default.
- **If something doesn't fit the plan, STOP and ask.** Do not improvise
  around missing assets (beyond the labeled-placeholder allowance above),
  ambiguous outline/theme content, build errors, or unexpected
  `OUTLINE.md` ↔ `THEME.md` ↔ `ROADMAP.md` divergence.

## Procedure

### Step 0 — Status / dry-run only (when requested)

Skip entirely unless `status`, `report`, `review only`, `dry run`,
`plan only`, or `preview` was passed.

When `status` / `report` / `review only`:

1. Read `ROADMAP.md` frontmatter (`current_phase`, `phases_completed`,
   `last_updated`, the `slides:` registry, and `open_decisions`).
2. Identify the next incomplete sub-phase by scanning `[ ]` checkboxes in
   document order AND cross-check against the registry `status` fields.
3. Report a compact summary: current phase, sub-phases completed, next
   sub-phase title and goal, the timestamp of the last commit on `wip`,
   which of the must-not-skip slides (Slides 2, 4, 12, 16, 19, 22) are still
   pending, and any `open_decisions` entries that block upcoming slides.
4. Stop. No file edits. No commits.

When `dry run` / `plan only` / `preview`:

1. Do everything in Steps 1 and 2 below (identify the target and load
   context), then report the plan that *would* be executed — checklist
   items, files that will be touched, custom layouts required, registry
   status deltas, any blocking `open_decisions`, and the expected commit
   message — and stop.
2. Do not edit files. Do not run `npm`, `uvx`, or any other tool that
   produces side effects.

### Step 1 — Pre-flight checks (always)

1. Working directory must be clean:
   ```bash
   git status --porcelain
   ```
   Non-empty output → abort.
2. Current branch must be `wip`:
   ```bash
   git branch --show-current
   ```
   If not on `wip`, STOP and report. Do not auto-switch.
3. Sync with origin (read-only), if a remote exists:
   ```bash
   git remote -v && git fetch origin || true
   ```
   This repo may have **no remote yet** — a missing origin is not an error;
   proceed.

### Step 2 — Identify the target sub-phase(s) and load context

1. Read `ROADMAP.md` to determine the target sub-phase:
   - Default: the first sub-phase whose checklist still has `[ ]` items,
     starting from `current_phase`. Confirm it agrees with the `slides:`
     registry `status`; if not, STOP.
   - `phase X.Y` / `at X.Y`: that sub-phase, regardless of `current_phase`.
   - `slide N`: map the slide id to its `phase` via the registry, then that
     sub-phase.
   - `phase X` (whole phase): the first incomplete sub-phase in Phase `X`;
     keep iterating across the rest of Phase `X` until done.
   - `through X.Y` / `next N` / `phases X..Y`: the first incomplete
     sub-phase; track the stop condition for Step 6.
2. **Check the `open_decisions` ledger** for the target slide(s). Note any
   `blocks` entries and decide: buildable now (with placeholder if it's an
   asset block) or STOP (if it's a content-decision block).
3. **Check the `layouts:` build-order** for the target slide(s). If a
   required custom layout is not yet `complete`, build the layout first (if
   in scope) or STOP and report.
4. **Read `OUTLINE.md` §4 entries** for the slide(s) the target sub-phase
   implements. Context notes, Speaker beats, Example lines, Visual,
   Transition, and Delivery note are the load-bearing input — read them
   carefully, not skimmed. Note which **recurring lines** (ROADMAP
   `context.recurring_lines`) must fire for this slide.
5. **Read `THEME.md`** for any sub-phase that touches chrome (palette,
   typography, layouts, RCAC mark placement, the two code aesthetics,
   deviation policy). Especially important for Phase 0/1 and any sub-phase
   that introduces a new custom layout.
6. If the target sub-phase implements a layout or structural slidev pattern,
   the reference deck is **`../2026-nairr-workshop-talk/`** (its `slides.md`
   headmatter, `styles/index.css` token table, `uno.config.ts` shortcuts,
   presenter mode, PDF export pipeline). Borrow the structure; substitute
   RCAC marks and this deck's content. The Purdue 2026 template at
   `~/Documents/Purdue/Purdue-Template-2026.pdf` / `.pptx` is the visual
   ground truth for swatches and proportions — sample from the PPTX when
   exact values matter and record them in `THEME.md`.
7. The prior practitioner decks (`../2026-midwestrcd-talk/`,
   `../2026-globus-world/`) are useful only for prior-art on a few
   components (the concentric-rings diagram technique, the `uvx qrcode`
   invocation, `v-click` pacing instincts). They are **not** a visual
   reference; ignore their chrome.
8. If the target sub-phase requires assets that are still `☐` in the
   ROADMAP **Asset Checklist**, generate or copy them as part of this
   sub-phase. Flip `☐ → ✓` only when the asset is actually committed and
   verified. If the asset is Geoffrey-supplied and not yet available, use a
   labeled placeholder per the `open_decisions` allowance.

### Step 3 — Implement the sub-phase

1. Execute every unchecked item in the target sub-phase's checklist. Do not
   stop at the first one — the sub-phase is the unit of work.
2. **Apply the pacing/scenery and two-aesthetics guardrails** (Safety
   Principles) as you author each slide. Put the recurring lines for the
   slide into its speaker notes.
3. After each substantive change, sanity-check that the dev server still
   renders without obvious breakage (`npm run dev`; eyeball verification is
   the bar). Skip the build step if the change was scoped to ROADMAP /
   OUTLINE / THEME / docs / skills only.
4. If the sub-phase introduces a new custom layout or inline SVG, verify
   that `npm run build` and `npm run export:pdf` both succeed before commit.
   **Known failure mode (MDC mode on):** blank lines inside an inline
   `<svg>` make Slidev wrap SVG children in `<p>` tags — keep SVG blocks
   tightly packed, no blank lines.
5. If implementation surfaces a real correction to `OUTLINE.md` (a factual
   error in a beat, a stale external reference) or `THEME.md` (a layout that
   does not match the template), STOP and surface it for confirmation before
   editing the authoritative document.
6. If implementation reveals a missing asset that is *not* covered by an
   `open_decisions` placeholder allowance, a blocked dependency, or
   ambiguous outline content, STOP and report.

### Step 4 — Update `ROADMAP.md` (the resume contract)

1. Check off every completed `[ ]` item under the sub-phase, turning them
   into `[x]`.
2. **Update the `slides:` registry:** set each built slide's `status` to
   `complete` (only when its DoD is met) or `blocked` (with a placeholder
   in place). This is the machine-readable resume marker.
3. Update the YAML frontmatter:
   - `current_phase`: advance to the next incomplete sub-phase. If the
     just-completed sub-phase was the last in its phase, set `current_phase`
     to the *first* sub-phase of the next phase.
   - `phases_completed`: append the just-completed phase number (as a
     string, e.g. `"2"`) only if every sub-phase in that phase is now `[x]`
     and every slide in it is `complete`. Partial completion earns nothing.
   - `last_updated`: set to the current ISO-8601 UTC timestamp.
4. Update the **Asset Checklist** at the bottom of `ROADMAP.md`: flip
   `☐ → ✓` for every asset materially generated or verified during this
   sub-phase. Do not flip ahead of actual commits.
5. Update the relevant `open_decisions` entry `status` if a placeholder was
   used or a decision was resolved during the sub-phase.

### Step 5 — Commit

Compose a single `WIP:` commit per sub-phase (default) or per run (when
`bundle` was passed). The commit message should:

- **First line names the slide id or sub-phase** (resume-contract
  requirement): `WIP: Slide 4 — About Me (triple-point Venn)` or
  `WIP: Phase 1 — scaffolding + theme + smoke test`.
- Optional body: 1–3 short paragraphs describing decisions made and any
  deferred items, only when those decisions aren't obvious from the diff.
- Final line of the body: `Co-Authored-By: Oz <oz-agent@warp.dev>`.

```bash
git add -A
git commit -m "WIP: <slide id or sub-phase summary>

<optional body explaining decisions>

Co-Authored-By: Oz <oz-agent@warp.dev>"
```

Do **not** push by default. Pushing is `/release`'s job. (Narrow exception:
if the user explicitly invokes `/continue ... and push wip` *and* a remote
exists, run `git push origin wip` after the final commit — never `--force`
from this skill.)

### Step 6 — Continue or stop

- Default (no arguments): stop and report.
- `phase X` / `slide N` / `through X.Y` / `next N` / `phases X..Y`: loop
  back to Step 2 with the next incomplete sub-phase. Stop when:
  1. The stop condition is reached (sub-phase `X.Y` completed, or `N`
     sub-phases done, or Phase `X`/`Y` fully `[x]`, or slide `N` done).
  2. A natural checkpoint is hit (a phase boundary, or a sub-phase whose
     checklist mentions Geoffrey's review). Stop here unless `skip review`
     was passed.
  3. Step 3 surfaces a STOP condition (blocked content decision, OUTLINE/
     THEME divergence, build failure, missing required custom layout).

### Step 7 — Verification gate + final report

Before declaring a **phase** done (status → `review`), run the ROADMAP
**Verification gates** for the slides touched this run:

```bash
npm run build              # green; no MDC <svg> blank-line regressions
npm run export:pdf         # PDF renders; fonts embedded; marks/snippets sharp
# recurring-line presence for the slides touched, e.g.:
grep -F "earn its keep" slides.md
grep -F "pressure-release valve" slides.md
```

(If the Slidev project does not exist yet — i.e. Phase 0, before Phase 1
scaffolding — skip the `npm` gates with a note; only the doc/skill files
exist at that point.)

Then produce a compact report:

- What was completed (sub-phase IDs / slide ids and one-line summaries).
- Any `[ ]` items intentionally deferred and why.
- Any slides left `blocked` and the `open_decisions` entry that blocks them.
- Updated `current_phase`, `phases_completed`, and registry status deltas.
- Verification-gate results (build/export/grep), or why they were skipped.
- Any open questions or blockers for Geoffrey.

## Examples

### Default — execute the next sub-phase and stop

```
/continue
```

Reads `current_phase` + the `slides:` registry from `ROADMAP.md`, executes
every `[ ]` item in that sub-phase honoring the pacing/scenery and
two-aesthetics guardrails, updates the checklist + registry + frontmatter,
commits with a `WIP:` prefix naming the slide id and the Oz co-author line,
then stops and reports.

### Status check (no work)

```
/continue status
```

Reports current phase, completed phases, next sub-phase, registry status,
last commit timestamp, must-not-skip slides still pending (2, 4, 12, 16, 19,
22), and any `open_decisions` blocking upcoming slides. No edits. No commits.

### Dry run before approving a chunk of work

```
/continue dry run phase 4
```

Identifies every incomplete sub-phase in Phase 4 (Axis 1 — executor/scale),
reads `OUTLINE.md` §4 Slides 12–16, reads `THEME.md` for the
`two-axis-ladder` layout + terminal code aesthetic, checks `open_decisions`
(e.g. the HyperShell feature-box confirmation blocking Slide 16), and
reports the plan it *would* execute — files, commit messages, registry
deltas. No edits. No commits.

### Build the prerequisites first

```
/continue phase 0
```

Ports `THEME.md` from the NAIRR deck (adapted for the six custom layouts)
and scaffolds the `/continue` + `/release` skills, one `WIP:` commit per
sub-phase. Skips the `npm` verification gate (no Slidev project yet). Stops
at the Phase 0 → Phase 1 boundary.

### Drive a whole phase to completion

```
/continue phase 2
```

Executes the prelude (Slides 1–5) in order, one `WIP:` commit per slide,
landing the `about-rcac` and `triple-point-venn` custom layouts. Stops at
the Phase 2 → Phase 3 boundary for Geoffrey's review.

### Pick up at a specific slide

```
/continue slide 16
```

Maps Slide 16 (HyperShell + pressure-release valve) to its phase via the
registry and builds only that slide — terminal aesthetic, the slurmctld-DDoS
idea given room, the recurring lines fired in notes. Useful after manual
edits or a redo.

### Smoke test only

```
/continue phase 1
```

Drives Phase 1 end-to-end so the dev server (port 3035), build, and PDF
export are all known-green before any real content lands. Stops at the
Phase 1 checkpoint.

### Bundled scaffolding

```
/continue phase 1 bundle
```

Same as above but collapses Phase 1's sub-phases into a single
`WIP: Phase 1 — scaffolding + theme + smoke test` commit. Useful when the
sub-phases are tightly coupled mechanical work.

## Notes

- `current_phase` and the `slides:` registry are the agent's resume markers.
  Keep both accurate even when stopping mid-sub-phase due to a STOP
  condition; in that case do **not** advance `current_phase` past the
  partially-completed sub-phase, and mark the slide `in_progress` or
  `blocked` as appropriate.
- Commit message bodies should explain *why* a decision was made, not what
  the diff shows.
- The recurring rhetorical lines in `ROADMAP.md` `context.recurring_lines`
  are talk-delivery cues — surface them in slide speaker notes when the
  matching slide is implemented, not as standalone work.
- The Purdue 2026 template at `~/Documents/Purdue/Purdue-Template-2026.pptx`
  is the visual ground truth. When in doubt about a swatch, layout
  proportion, or chrome detail, sample it from the PPTX rather than
  guessing, and record it in `THEME.md`.
- If the user's instruction includes something not covered above (e.g.
  `rebase`, `cherry-pick`, `merge from main`, `change the visual identity`,
  `split slides.md into per-slide files`), STOP and ask — those are out of
  scope for this skill. (The per-slide split is ROADMAP Appendix A's opt-in
  prerequisite for parallel fan-out; it is not a `/continue` operation.)
