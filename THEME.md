# REU Summer Seminar 2026 — Visual Identity (`THEME.md`)

> Companion to `OUTLINE.md` (content) and `ROADMAP.md` (implementation).
> Captures the design decisions for the Slidev build phase so we are not
> re-deriving them from screenshots or memory. **This file is the source of
> truth for chrome** — how each slide *looks*. If `ROADMAP.md` disagrees with
> this file on chrome, this file wins; surface the discrepancy.
> *Living document — refine as we build, do not rewrite from scratch.*

This identity is **ported from `../2026-nairr-workshop-talk/`** — the Purdue
2026 brand refresh, light mode, the Franklin Gothic / Source Sans 3 stack,
and the inherited base layouts. It is **adapted** for this deck by adding
**new custom layouts** (§9) and a **two-code-aesthetic** convention (§10) the
NAIRR deck did not need.

## 1) Posture

This talk is an **inspiration talk, not an instruction talk** — *impress the
room with the zoo, then walk it back.* The audience is primarily REU
undergraduates (19–21), with RC professionals catching the in-jokes. The
visual language should sit comfortably alongside other invited talks in a
Purdue-hosted program: clean, professional, Purdue-branded.

The deck inherits Purdue's **2026 brand refresh** and substitutes **Rosen
Center for Advanced Computing (RCAC)** marks wherever the template ships with
generic Purdue marks (§4).

**Deliberate non-inheritance.** The Berkeley-Mono / soft-white-on-black
*terminal chrome* from the older sibling decks (`../2026-globus-world/`,
`../2026-midwestrcd-talk/`) is **out of scope** for this deck's chrome — no
chat bubbles, ASCII frames, blinking-cursor or monospace H1, CRT-amber /
Globus-blue palette. The in-slide **terminal-window treatment** for command
snippets (§10) is a *separate, deliberate content device*, not the deck
chrome, and must not be blurred with the deck's typography or palette.

## 2) Source references

* **`~/Documents/Purdue/Purdue-Template-2026.pptx`** — the authoritative
  Purdue 2026 brand template. **The visual ground truth.** Sample exact
  swatches and layout proportions from this `.pptx` at build time
  (`ppt/theme/theme1.xml` + `ppt/slideLayouts/*.xml`) when precision matters.
* **`~/Documents/Purdue/Purdue-Template-2026.pdf`** — the same template, PDF
  form, for quick visual reference.
* **`~/Documents/Purdue/RCAC-Branding/digital/SVG/`** — RCAC brand marks,
  digital tier (prefer SVG for export sharpness). See §4 for the inventory.
* **`../2026-nairr-workshop-talk/`** — the **structural + chrome reference**
  this deck ports from: `styles/index.css` token table + base layouts,
  `uno.config.ts` shortcuts, `slides.md` headmatter, presenter mode, and the
  `playwright-chromium` PDF export pipeline. Borrow the structure; substitute
  RCAC marks and this deck's content and custom layouts.
* **`~/Documents/Purdue/Presentations/REU Seminar - Data Management and
  Workflow Templates.pdf`** — last year's REU talk (the flat tool list this
  deck improves on); useful for the ported storage-tier circle diagram only.

## 3) Palette (ported from the NAIRR `styles/index.css`)

These tokens were sampled from `Purdue-Template-2026.pptx` for the NAIRR deck
and carry over verbatim. **Re-verify against the `.pptx` if a swatch looks
off** at build time; otherwise treat these as canonical.

```text
--bg-ink         #000000   cover / closing-card ground (deep black)
--bg-paper       #FFFFFF   content-slide ground
--bg-overview    #E9E6E3   section-divider / thesis-card cream
--ink            #000000   body copy / H1 ink
--ink-subhead    #55585F   subhead and secondary text
--ink-muted      #9D9694   muted gray — rules, captions, card borders
--gold           #CFB891   Purdue gold-buff — rules, border insets
--gold-deep      #8D6F3D   deep gold — emphasis, kickers, links
--gold-bright    #DAAA00   saturated Purdue gold — accent stat numbers
--accent-orange  #FBAE40   warm accent (used sparingly)
```

`--slidev-theme-primary` maps to `--gold-bright`. Light-mode only
(`colorSchema: light`).

## 4) RCAC brand-asset rule

Substitute **RCAC** digital marks for every Purdue mark the template places.
Source from `~/Documents/Purdue/RCAC-Branding/digital/SVG/`; **prefer SVG**
for sharpness at any export resolution. Copy the chosen marks into
`public/images/rcac/` at the build phase, preserving filenames so this rule
stays traceable. Do **not** commit the original Purdue marks — we are
intentionally not using them.

Placement rule:

* **Cover (Slide 1)** and **Closing card (Slide 23)** — black ground,
  horizontal **reverse** RCAC mark (white-on-black), centered at the bottom.
* **All content slides** — paper ground, horizontal **standard** RCAC mark,
  upper-right corner where the Purdue template places its mark.
* The vertical marks are held in reserve for any in-deck RCAC credit
  treatment (e.g. the About RCAC photo cluster on Slide 3).

## 5) Typography

The Purdue template ships **Acumin Pro Cond Italic** (display) and **Acumin
Pro** (body) — a commercial Adobe Fonts family that is **not** committed to
this repository.

Approved open substitution (same as the NAIRR deck):

* **Display + body:** **Franklin Gothic** (ITC / URW Franklin Gothic) where
  locally installed, falling through to **Source Sans 3** (OFL) — the only
  font shipped in `public/fonts/` for presenter-laptop portability.
* **Code (inline + blocks):** a permissively licensed monospace (JetBrains
  Mono fallback stack). Code style is a *content device* (§10), not the deck
  chrome's centerpiece.

CSS font stack (applied at `html, body, #app, .slidev-layout`):

```css
font-family: "ITC Franklin Gothic", "Franklin Gothic Book",
             "Franklin Gothic Medium", "Source Sans 3",
             system-ui, sans-serif;
```

That gives Geoffrey true Franklin Gothic on his laptop and a clean open
fallback anywhere else. `slides.md` headmatter uses **`fonts: provider:
none`** so no licensed font is fetched or committed; Source Sans 3 is loaded
via `@font-face` from `public/fonts/` (Regular / SemiBold / Bold, OFL).

Observed template sizes (match proportionally at `aspectRatio: 16/9`):

* Slide title (H1): ~48pt display, **upright** in our deck (italic only in
  restraint, for section labels / emphasis).
* Body: ~20pt. · Subhead: ~14pt gray. · Page number: ~10pt corner.

## 6) Inherited base layouts (port from NAIRR `styles/index.css`)

These five carry over from the NAIRR deck with only RCAC-mark and content
substitutions. They are the `kind: inherited` entries in the `ROADMAP.md`
`layouts:` build-order block.

* **`purdue-cover`** — black ground, gold-buff inset border, centered title +
  subtitle, optional uppercase date caption above the title, bottom-centered
  **reverse** RCAC mark. *Slides 1, and (via an `.is-closing` variant)
  Slide 23.*
* **`purdue-content`** — paper ground, **gold rule top and bottom**, H1 +
  subhead upper-left, **standard** RCAC mark upper-right, page number
  lower-right. The deck's workhorse. *Slides 7, 8, 11, 13–18, 21, 22.*
* **`purdue-overview`** — section-divider / thesis chrome: warm cream
  (`--bg-overview`) ground, large left-side section label, thin vertical
  rule, right-side stacked body with a `.lede`. *Slide 5 (Thesis card).*
* **`purdue-fullbleed`** — full-bleed image, **no template chrome** (no gold
  rules, no mark, no page number), a whisper-quiet lower-right disclosure
  caption on a thin scrim. *Slide 2 (the "Perfection" cold open).* Set the
  image inline so each full-bleed slide can pick its own.
* **`closing-qr-row`** — the NAIRR closing convention: a centered QR row over
  a "Thanks." body with contact + credit, on the `purdue-cover.is-closing`
  black ground with the reverse RCAC mark. *Slide 23.* QR images use
  `image-rendering: pixelated` so the matrix stays crisp through
  playwright-chromium PDF rasterization.

Custom-layout CSS is **stubbed** in `styles/index.css` in Phase 1 and
fleshed out in the phase that first consumes each one (per the `layouts:`
build-order). A slide cannot be built before its layout exists.

## 7) Slidev structure

Target repository layout at the build phase:

```text
OUTLINE.md          — talk content (source of truth for what each slide says)
THEME.md            — this file (source of truth for chrome)
REVIEW.md           — decisions + rationale (the why)
ROADMAP.md          — phased Slidev build plan + slides/layouts registries
slides.md           — Slidev source (single-file convention; see ROADMAP App. A)
styles/index.css    — Purdue 2026 palette + RCAC overrides + Franklin stack + layouts
uno.config.ts       — UnoCSS shortcuts for Purdue / RCAC color utilities
public/images/rcac/ — RCAC marks (h / h-reverse / v / v-reverse), SVG preferred
public/images/      — meme, logos, photographs, diagrams
public/fonts/       — Source Sans 3 (OFL) — the ONLY committed font family
public/qr/          — generated QR codes (Slide 23; Slide 3 rcac.purdue.edu)
.agents/skills/     — /continue and /release slash skills
package.json        — Slidev + theme-seriph + playwright-chromium (PDF export)
vite.config.ts      — dev server (port 3035; 3032/3033/3034 are taken)
```

Slidev features in use: **`theme: seriph`** (heavily overridden by
`styles/index.css`), custom layouts via CSS classes, **`v-click`** only
sparingly (this is a conceptual talk — no animations unless Geoffrey asks),
**`presenter: true`** for speaker notes, **`download: true`** + the
`playwright-chromium` PDF export (`exportFilename: reu-2026-talk`).

**MDC hazard (NAIRR-inherited).** MDC mode is **on**. Blank lines inside an
inline `<svg>` make Slidev wrap SVG children in `<p>` tags and break the
layout — keep SVG blocks **tightly packed, no blank lines**, or write them on
a single line. For grid/flex containers, neutralize MDC's blank-line
`<p>`-wrapping with the `> p { display: contents }` guard (the same trick the
NAIRR deck uses throughout). Where a diagram would need monospace SVG
`<text>` (which falls through to an aliased system font), prefer
HTML/CSS overlays over SVG text for crispness.

## 8) Custom-layout build-order

The `ROADMAP.md` `layouts:` block sequences each custom layout ahead of the
slide that first consumes it (`first_slide`). Build the layout first; then the
slide. The registry lists the inherited base layouts of §6 plus the new
custom layouts of §9.

## 9) Custom layouts (new to this deck — OUTLINE §5)

These do not exist in the NAIRR deck. Each borrows the Purdue 2026 typography
and gold-rule chrome but lays its body out independently. Build each as a CSS
class in `styles/index.css` (custom-layout CSS stays global — never
per-slide), matched in optical weight to the inherited layouts.

* **`about-rcac`** (Slide 3) — a **photo cluster** (machine room / *Fortress*
  mural / rack) beside **squiggle-boxed** systems / science / software
  pillars (the cross-cutting highlight marks *where Geoffrey sits*). Built to
  compress to one sentence if time slips. *Assets + final pillar wording
  blocked on `open_decisions: prelude-rcac`; build with labeled placeholders.*
* **`triple-point-venn`** (Slide 4) — a **systems · science · software** Venn;
  the dead-center triple-point chip is **AI** (Geoffrey's current
  Principal-AI-Scientist seat), with **Facilitator** in the Systems lobe.
  Carries the recurring line *"the unicorn at the triple-point"* as a
  **verbal** device — *Geoffrey* is the unicorn across all three; **AI** is the
  work now at the center. Three harmonized theme tints (graphite Systems ·
  amber Software · slate-blue Science) blended with `mix-blend-mode: multiply`;
  opaque Franklin-Gothic role chips placed by lobe. *Headshot supplied
  (`public/images/headshot.jpg`); label set locked to last year's (see
  OUTLINE §4 Slide 4).*
* **`zoo-logo-wall`** (Slide 6) — a **dense logo wall** grouped by layer, with
  **size ≈ popularity**; optional cascade / pile-up build. Real brand logos
  are fair to use (private talk). *Scenery — minimal on-slide text; do not
  narrate logos. Set blocked on `open_decisions: zoo-set`.*
* **`rube-goldberg-stack`** (Slides 9, reused labeled on 10) — a **teetering
  over-engineered stack**; density *is* the message. Slide 10 is a **labeled
  re-render** of the same stack, each layer tagged with its academic |
  industry pair.
* **`two-axis-ladder`** (Slides 12 preview, 19 full) — the load-bearing
  diagram: two clearly separated axes (executor/scale · orchestration/DSL).
  Slide 12 is the **preview** form (with greyed-out extra tools showing the
  climb is a chosen subset); Slide 19 is the **full** ladder with a
  left→right **you-own-it → framework-owns-it gradient** rendered as a visual.
* **`storage-tier`** (Slide 20A) — a **6-property trade-off cloud** (Capacity
  · Performance · Cost · Safety · Security · Longevity-Durability) over a
  **cold → warm → hot tier ladder** (Fortress · Data Depot · Scratch); ported
  from last year's circle diagram. *Tier names + axis labels blocked on
  `open_decisions: rcac-tiers`.*
* **`ownership-ladder`** (Slide 20B) — a **two-rung you-own-it /
  framework-owns-it** ladder reusing the Slide 19 gradient; carries the
  `rsync` → managed-flows staging progression.

**Count nuance.** OUTLINE §5 and ROADMAP Phase 0 speak of "six new custom
layouts," but the `storage-tier` / `ownership-ladder` data pair are tracked
as two registry entries (and `rube-goldberg-stack` / `two-axis-ladder` each
serve two slides). The **`ROADMAP.md` `layouts:` registry is the
authoritative count and build-order** — defer to it.

## 10) The two code aesthetics (kept distinct — GOAL.md / OUTLINE §5)

Code on this deck is a **content device, not chrome**, and there are **two
treatments that must never be blurred**:

* **Terminal-window treatment — for commands you *run*.** Used on **Slides
  13, 14, 15, 16, 20B** (bash loop, `xargs -P`, `#SBATCH --array`, the `hsx`
  HyperShell one-liner, `rsync`). Render as a terminal window (a titled
  pane / prompt framing) so it reads as *something executed at a shell*. This
  is the *only* place a terminal motif appears — it is the in-slide device,
  **not** the deck chrome (§1).
* **Code / definition treatment — for workflow *definitions*.** Used on
  **Slides 17, 18** (a small Makefile; a minimal Nextflow process/channel).
  Render as a source-file / definition block (distinct from the terminal
  pane) so it reads as *something authored*, not run.

Both are **scenery** (OUTLINE §5/§7): gesture, don't teach. Keep snippets
accurate and runnable, but size and weight them as texture — the audience
does not need to read them. The must-land *idea* on each snippet slide gets
the room; the snippet does not.

## 11) Deviation policy

The Purdue 2026 template (via the inherited base layouts, §6) is the
**default**. Deviations are limited to the custom layouts of §9, which each
carry their own visual weight per OUTLINE §5. For every other slide, prefer
the inherited layout and substitute only the RCAC mark, the Franklin Gothic
stack, and the palette tokens.

The **[BREATH]** slides (2, 6, 12, 19, 22 — OUTLINE §7) are deliberately
quiet: the build leaves them room, never crowds them with prose.
**Act-1 scenery slides get minimal on-slide text; Act-2 must-land ideas get
air.** Pacing is a build constraint, not just a delivery note.

## 12) Open TODOs (chrome-specific)

These are the chrome-relevant slices of the `ROADMAP.md` `open_decisions`
ledger and Asset Checklist. The full list lives in `OUTLINE.md` §8 /
`ROADMAP.md`.

* **Sample / verify** exact hex values and layout proportions against
  `Purdue-Template-2026.pptx`; update §3 if any swatch drifts.
* **Copy** the four RCAC marks (h / h-reverse / v / v-reverse) into
  `public/images/rcac/`, SVG preferred, filenames preserved (§4).
* **Ship** Source Sans 3 (Regular / SemiBold / Bold, OFL) into
  `public/fonts/`; confirm no licensed Acumin Pro / Franklin Gothic woff2 is
  ever committed.
* **Supply** the prelude assets (`open_decisions: prelude-rcac`,
  `prelude-me`): About RCAC photo cluster + `rcac.purdue.edu` QR; About Me
  headshot. *Both supplied + wired; Slides 3–4 built. Triple-point Venn label
  set is locked (last year's; AI at center — see §9 + OUTLINE §4 Slide 4).
  Confirm the squiggle-box pillar wording only if it should change.*
* **Lock** the `perfection-meme` image (Slides 2 / 22 inversion), the
  `zoo-logo-set` (grouping + size-by-popularity + cascade vs. single reveal),
  the RCAC storage-tier names + 6 trade-off axes (Slide 20A), and the
  `qr-set` for Slide 23 (5 proposed, cull to 4).
