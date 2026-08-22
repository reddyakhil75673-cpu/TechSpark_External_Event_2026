# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static, client-side-only website for "TechSpark 2026" (also referred to as "TechVersa 2026" in
some files — see Known inconsistencies below), a technical fest hosted by the Computer Science
department of Aditya Degree College Gajuwaka. There is no build step, package manager, bundler, or
server-side application code — it's plain HTML/CSS/JS served as static files.

Three pages:
- `index.html` — landing page (hero, countdown, leadership, administration, coordinators sections)
- `events.html` — event listing with a details modal, driven by the `events` array in `js/events.js`
- `registration.html` — multi-step registration form (`js/registration.js`)

## Running locally

There is no dev server, install step, or test suite in this repo. Serve the directory as static
files and open in a browser, e.g.:

```
npx serve .
# or any static file server
```

`.vscode/launch.json` is configured to launch Chrome against `http://localhost:8080`, so the VS
Code "Live Server" extension (or equivalent on port 8080) is the expected workflow.

## Architecture

**No backend is actually deployed.** Registration form submissions go directly from the browser to
a Google Apps Script Web App endpoint (a hardcoded URL in `js/sheets.js`'s `WEB_APP_URL`), which
presumably writes to a Google Sheet. `assests/Code.gs` is meant to hold that Apps Script source but
is currently an empty file — the deployed script's actual source isn't checked into this repo. The
`backend/` directory (`backend/backend/routers/models`) is an empty stub with no code in it; treat
it as not-yet-implemented rather than a real backend to wire into.

**Per-page CSS, not shared components.** Each HTML page pulls in its own combination of stylesheets
from `css/` (e.g. `registration.html` uses `style.css` + `navbar.css` + `registration.css`;
`index.html` uses `style.css`, `administration.css`, `leadership.css`, `events.css`). There's no CSS
bundler — stylesheets are plain `<link>` tags, so adding/removing a CSS file for a page means
editing that page's `<head>` directly. `css/style-old.css` is a superseded stylesheet kept for
reference; don't extend it.

**Registration flow** (`js/registration.js`) is a 4-step client-side wizard driven by showing/hiding
`.step` elements and toggling `.progress-step` indicators (`showStep(index)`):
1. Personal details (`validateStep1`)
2. Event selection via `.event-card` elements carrying `data-event` / `data-team` / `data-fee`
   attributes (`validateStep2`)
3. Team member fields, dynamically generated for `teamSize > 1` (`generateTeamFields`,
   `validateTeam`)
4. Review + submit — builds a `data` object and calls `submitRegistration(data)` (defined in
   `js/sheets.js`), then generates a registration ID (`TV2026-<timestamp>`) and a QR code via the
   `QRCode` global (loaded from a CDN in `registration.html`, not shown in the file excerpts read so
   far — verify the `<script>` tag before assuming it's present on a given page).

**Events data** lives inline in `js/events.js` as a JS array (`events`), not fetched from anywhere.
The "Learn More" modal in `events.html` maps buttons to array entries by index
(`document.querySelectorAll(".learn-btn")[index]` ↔ `events[index]`), so the DOM order of
`.learn-btn` elements in `events.html` must stay in sync with the order of objects in the `events`
array — inserting/reordering one without the other will show the wrong event's details.

## Known inconsistencies (don't silently "fix" without asking — may be intentional or in-progress)

- Branding is inconsistent across files: `index.html`'s `<title>` and hero text say "TechSpark
  2026", while `registration.html`'s `<title>`, `js/registration.js`, and `js/events.js` comments
  say "TechVersa 2026" / "TECHVERSA 2026". The generated registration ID prefix is also `TV2026-`.
- `index.html` links several stylesheets (`css/navbar.css`, `css/hero.css`, `css/coordinators.css`,
  `css/contact.css`, `css/footer.css`, `css/responsive.css`) and an image (`images/logo.png`) that
  do not exist in `css/` or `images/` in this checkout.
- `js/validation.js` and `assests/Code.gs` exist but are empty files.
- `README.md` and `.gitignore` in the repo root are empty directories, not files (an artifact of
  how this checkout was created) — there is no actual README or gitignore content to read.
- `images/events`, `images/gallery`, `images/icons`, and `backend/backend/routers/models` are empty
  directories.
