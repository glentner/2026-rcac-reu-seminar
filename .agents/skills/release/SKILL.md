---
name: release
description: "Ship the wip branch to main for the REU-2026 deck — strip WIP: prefixes from commit messages, fast-forward merge, push, return to wip and force-push. With optional arguments: squash commits, bump version (patch/minor/major), create an annotated tag, and publish a GitHub release. Default invocation does merge-and-push only; additional behavior is enabled by free-form instructions after the slash command. WIP: prefixes are rewritten with a modern scripted git rebase (not the deprecated git filter-branch)."
---

# Release (Ship It)

## When to Use

Invoke `/release` when WIP commits on the `wip` branch are ready to ship
to `main`. The default behavior is conservative: rewrite `WIP: ` prefixes,
fast-forward merge into `main`, push, return to `wip`, and force-push.
Anything beyond that (squash, version bump, tag, GitHub release) is opt-in
via free-form instructions passed after the slash command.

## User Instructions

Additional instructions provided with the invocation: $ARGUMENTS

## Argument Parsing

If any text was passed with the invocation, parse it case-insensitively
against the patterns below. If the instruction is ambiguous or contradicts
itself, STOP and ask the user to clarify rather than guess.

- `patch version bump` / `patch bump` → bump patch (`x.y.Z+1`); implies tag
- `minor version bump` / `minor bump` → bump minor (`x.(Y+1).0`); implies tag
- `major version bump` / `major bump` → bump major (`(X+1).0.0`); implies tag
- `tag` → create an annotated version tag (requires a bump or explicit version)
- `release` → publish a GitHub release (implies tag and bump)
- `squash` / `squash commits` → collapse all wip commits into one before merging
- An explicit version like `v1.0-reu-2026` overrides bump computation

If no arguments were passed, run the default merge-only path (Steps 1, 3,
4, 6, 8 below; skip 2, 5, 7).

## Safety Principles

- `--force` is used **only** on the `wip` branch. Never on `main`, never
  on tags, never anywhere else.
- Use the default fast-forward merge (`git merge wip`). Never `--no-ff`.
  We want linear history.
- After a successful ship, `main` and `wip` point to the **same** commit.
- Author all new commits with `Co-Authored-By: Oz <oz-agent@warp.dev>`
  (per the user's wip-workflow rule).
- If pre-flight checks fail (dirty tree, wrong branch, build failure,
  divergent main), STOP and report. Do not attempt remediation without
  confirmation.
- Confirm the computed version and the release notes with the user
  **before** tagging or publishing.
- **This repo may have no remote yet.** All `origin` operations are
  conditional on a remote existing. If there is no `origin`, do the local
  merge/tag work and STOP with a clear note that pushing was skipped — do
  not invent or add a remote.

## Procedure

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
3. Sync with origin **only if a remote exists**:
   ```bash
   if git remote | grep -q .; then git fetch origin && git fetch --tags; fi
   ```
4. `wip` must be ahead of `main`:
   ```bash
   git rev-list --count main..HEAD
   ```
   `0` → nothing to ship; abort.
5. Deck must build cleanly **if a Slidev project exists**:
   ```bash
   if [ -f package.json ] && [ -f slides.md ]; then npm run build; fi
   ```
   Non-zero exit → abort. **Build-tolerance for early phases:** before
   Phase 1 scaffolding (e.g. shipping only Phase 0's `THEME.md` + skills, or
   the planning docs), there is no `package.json`/`slides.md` yet — skip the
   build with a note rather than aborting. Once the Slidev project exists,
   the build is a required gate even for doc-only changes (it's a cheap
   sanity check).

### Step 2 — Squash (only if `squash` was requested)

Skip entirely unless the user asked to squash. When squashing:

1. Compute the merge-base and soft-reset to it (keeps all changes staged):
   ```bash
   BASE=$(git merge-base main wip)
   git reset --soft "$BASE"
   ```
2. Propose a commit message synthesized from the prior `WIP: `-prefixed
   messages, **without** the `WIP: ` prefix. Confirm with the user, then
   commit:
   ```bash
   git commit -m "<proposed message>" -m "Co-Authored-By: Oz <oz-agent@warp.dev>"
   ```
3. After squashing, **skip Step 3** (there are no `WIP: ` prefixes left to
   rewrite).

### Step 3 — Rewrite `WIP: ` prefixes (skip if squashed)

Strip the `WIP: ` prefix from every commit in `main..HEAD` using a **modern,
non-deprecated scripted rebase** (we no longer use `git filter-branch`, which
is deprecated and noisy). The rebase replays `main..HEAD` onto `main`,
marking each commit for `reword` and applying a `sed` rewrite
non-interactively via scripted sequence/commit editors:

```bash
GIT_SEQUENCE_EDITOR='sed -i.bak -E "s/^pick/reword/"' \
GIT_EDITOR='sed -i.bak -E "1 s/^WIP: //"' \
git rebase -i main
```

Notes:
- `GIT_SEQUENCE_EDITOR` turns every `pick` in the rebase todo into `reword`,
  so each commit's message is opened for editing.
- `GIT_EDITOR` then strips a leading `WIP: ` from the first line of each
  message. Commits that don't start with `WIP: ` are left unchanged.
- The `sed -i.bak` form is portable on macOS (BSD sed); the `.bak` temp
  files are inside git's transient rebase dir and are discarded with the
  rebase. If any step leaves a stray `*.bak`, remove it (use `del`, not
  `rm`, per the user's alias preference).
- If the rebase stops (e.g. an unexpected conflict — should not happen for a
  pure message rewrite replaying onto its own base), STOP and report; do not
  improvise. `git rebase --abort` returns to the pre-rewrite state.

### Step 4 — Fast-forward merge into `main`

```bash
git checkout main
git merge wip
```

Do **not** pass `--no-ff`. If git refuses the merge (non-fast-forward,
conflicts), STOP and report — `main` has diverged and human intervention is
needed.

### Step 5 — Version bump and tag (only if requested)

Skip entirely unless a bump, explicit version, or `tag` was requested. When
tagging:

1. Determine the current latest tag:
   ```bash
   git describe --tags --abbrev=0
   ```
   (If no tag exists yet — likely for this repo on first release — default
   to `v0.1.0` for a minor bump, `v0.0.1` for a patch bump, or the explicit
   version the user provided. The talk-day convention for this deck is
   `v1.0-reu-2026`.)
2. Compute the new version per semver, or use the explicit version provided.
3. Confirm the computed version with the user.
4. Create an **annotated** tag on the merged `main` HEAD:
   ```bash
   git tag -a <version> -m "Release <version>"
   ```

### Step 6 — Push `main` (and tag if any) — only if a remote exists

```bash
if git remote | grep -q .; then
  git push origin main
  git push origin <version>   # only if a tag was created in Step 5
else
  echo "No remote configured — skipped push of main (and tag). Local refs updated."
fi
```

### Step 7 — GitHub release (only if `release` was requested)

Skip entirely unless the user asked for a release. Requires a remote +
`gh`. When releasing:

1. Review prior release style for tone and structure, if any prior release
   exists:
   ```bash
   gh release list -L 5
   gh release view <previous-tag> --json tagName,name,body
   ```
2. Draft comprehensive notes consistent with the prior style. Either:
   - Use `--generate-notes` for an auto-generated changelog, then review
     with the user before publishing; **or**
   - Hand-curate notes in a file and pass `--notes-file <file>`.
3. Confirm the notes with the user, then publish:
   ```bash
   gh release create <version> --title "<version>" --generate-notes
   ```
   (or `--notes-file` instead of `--generate-notes`).
4. No release-PDF workflow exists in this repo as of writing; the PDF
   artifact from `npm run export:pdf` is committed manually if at all.

### Step 8 — Return to `wip` and force-push (always; push only if remote)

```bash
git checkout wip
if git remote | grep -q .; then
  git push --force origin wip
else
  echo "No remote configured — local wip updated; skipped force-push."
fi
```

After this (with a remote), `origin/main` and `origin/wip` point to the same
commit. The wip branch is ready for the next iteration.

## Examples

### Default — just merge

```
/release
```

Strips `WIP: ` prefixes on `main..HEAD` (scripted rebase), fast-forward
merges into `main`, pushes `main` (if a remote exists), returns to `wip`,
force-pushes `wip` (if a remote exists). No tag, no GitHub release.

### Minor version bump with tag and release

```
/release Let's do a minor version bump with tag and release
```

Default path plus: compute next minor version, confirm with user, annotated
tag on merged main, push tag, draft release notes, publish GitHub release.

### Squash with patch bump, no release

```
/release squash and patch bump
```

Soft-reset `wip` to merge-base, propose+confirm a single combined commit
message, commit with Oz co-author. Skip prefix rewrite (no `WIP: ` left).
Merge to main, push, compute patch version, tag, push tag. **No** GitHub
release. Force-push wip.

### Explicit version

```
/release tag as v1.0-reu-2026 and release
```

Use `v1.0-reu-2026` directly instead of computing a bump. Same flow as a
bump-with-release otherwise.

### Talk-day shipping (recommended path)

```
/release squash, tag as v1.0-reu-2026, and release
```

The recommended invocation once the deck has been delivered: collapse the
WIP history into one clean release commit, tag it `v1.0-reu-2026` (by
convention for this talk), and publish a GitHub release with notes
summarizing the final deck contents. (Requires a remote; if none exists yet,
the tag is created locally and pushing is skipped with a note — add a remote
first if you want it published.)

## Notes

- The `WIP: ` prefix convention and the force-push-on-wip allowance are per
  the user's wip-workflow rule.
- **Modernized rewrite.** This skill uses a scripted `git rebase -i` (via
  `GIT_SEQUENCE_EDITOR` + `GIT_EDITOR`) to strip `WIP: ` prefixes — a
  deliberate departure from the NAIRR deck's `git filter-branch` approach,
  which is deprecated. If you ever need to verify the result, check that
  `git log main..` (before merge) or the merged history shows no remaining
  `WIP: ` first lines.
- The Purdue 2026 brand is licensed for Purdue affiliates. This deck is a
  private, non-published talk (`repo_visibility: private-for-now` in
  `ROADMAP.md`); the deck uses the real "Perfection" meme and real brand
  logos directly on that basis. **Confirm with the user before flipping repo
  visibility to public** — the meme/logo usage that's fine for a private
  internal talk may need review before a public release. No licensed-font
  woff2 is committed (Franklin Gothic via CSS stack; Source Sans 3 is OFL).
- If the user's instruction includes something not covered above (e.g.
  `dry run`, `skip build`, `change repo visibility`, `add a remote`), STOP
  and ask before deviating from the documented procedure.
