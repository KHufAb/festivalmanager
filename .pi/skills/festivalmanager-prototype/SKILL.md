---
name: festivalmanager-prototype
description: Work on the projectcircus.com/festivalmanager HTML5 demo prototype. Use when discussing or implementing the Festival Manager subpage, isometric 2.5D UI, Phaser/Pixi/Three.js technology choices, visual matching to fmp.PNG, static deployment, or evolving the game design and implementation plan.
---

# Festival Manager Prototype

Use this skill for the `projectcircus.com/festivalmanager` demo prototype and all related high-level planning.

## Project intent

Create a static subpage `/festivalmanager` on `projectcircus.com` containing an HTML5 demo prototype of **Festival Manager**.

Reference concept files:

- `/Users/khufab/PROJECTCIRCUS/SIC_HEADSTARTERS/FestivalManager/Festival_Manager_Kosten_und_Zeitplan.pdf`
- `/Users/khufab/PROJECTCIRCUS/SIC_HEADSTARTERS/FestivalManager/fmp.PNG`
- Headstart context: `/Users/khufab/PROJECTCIRCUS/SIC_HEADSTARTERS/Headstart/PROJECT_CONTEXT.md`

Website local root:

- `/Users/khufab/PROJECTCIRCUS/website/ProjectCircus_local/actual/`

Festival Manager Git repository:

- Local repo: `/Users/khufab/PROJECTCIRCUS/website/ProjectCircus_local/actual/festivalmanager/`
- GitHub remote: `https://github.com/KHufAb/festivalmanager.git`
- Branches: `main` = stable/live, `dev` = development/testing
- Current deployment workflow: `.github/workflows/deploy-sftp.yml`
- GitHub Actions deploy targets:
  - `dev` -> `/public_html/dev/festivalmanager` -> `https://projectcircus.com/dev/festivalmanager/`
  - `live` -> `/public_html/festivalmanager` -> `https://projectcircus.com/festivalmanager/`
- Required GitHub Actions secrets, already configured in the repository:
  - `PROJECTCIRCUS_SFTP_HOST`
  - `PROJECTCIRCUS_SFTP_USER`
  - `PROJECTCIRCUS_SFTP_PASSWORD`
- Local SFTP credential references on the primary Mac, do not print secrets:
  - `/Users/khufab/.pi/credentials/projectcircus_sftp.json`
  - `/Users/khufab/.pi/credentials/projectcircus_sftp.env`
- Never commit credential files or secret values. GitHub Actions uses repository secrets only.

Intended public path:

- `https://projectcircus.com/festivalmanager/`

## Core visual target

`fmp.PNG` is the current visual north star. The prototype should match it closely enough that the UI feels like the same product:

- full-screen isometric festival terrain
- dark blue translucent top bar
- left vertical build/action toolbar
- right event decision card
- bottom-right satisfaction/chart panel
- neon cyan highlights for selection and paths
- coral/red critical incident buttons and warning iconography
- metrics: budget, time, satisfaction
- premium simulation/dashboard feel, not quiz UI

## Technology guidance

Default recommendation for the first web demo:

1. Avoid full Three.js unless real 3D camera rotation, lighting, depth, or mesh interaction becomes necessary.
2. Prefer a 2.5D stack:
   - HTML/CSS for UI panels and responsive layout
   - Canvas/SVG for highlights, zones, paths and simple overlays
   - Phaser 3 or PixiJS if we need sprites, animation loops, pointer interaction and simple simulation
   - static image/painted isometric background as the first terrain layer
3. For quickest close visual match, use `fmp.PNG` or a derived/optimized background as a temporary concept backdrop, then layer deterministic interactive UI over it.
4. If object placement becomes central, use an isometric grid abstraction in 2D rather than true 3D.

Possible decision rule:

- Static/limited demo with clickable zones and decisions: plain HTML/CSS + SVG overlay.
- Playable management demo with objects, animations, metrics and events: Phaser 3 or PixiJS.
- True 3D free camera, dynamic lighting, model import, terrain elevation: Three.js.

## Product principles

- Build a vertical-slice demo first, not a full management game.
- The first goal is to prove look, feel and decision feedback.
- Berufsorientierung appears through decisions and consequences, not explanatory quizzes.
- The game should run as a browser demo without login and without AI dependency.
- Keep deployment compatible with a static website unless explicitly changed.

## Current chosen demo direction: static image click-through

The next prototype phase is not yet a simulation and not animated. It should be a static **Bilderspiel** / clickable storyboard:

- one full-screen 2D image per state
- invisible or lightly highlighted clickable regions over the image
- text boxes and decision cards as part of each state image or as HTML overlays, depending on speed
- no animation, no live object placement, no true simulation in the first pass
- goal: prove look, navigation, scenario logic and knowledge transfer through consequences

The first scenario should be:

**Stromausfall 90 Minuten vor Einlass → one player choice → dependent follow-up problem → second choice → outcome screen.**

Start state based on `fmp.PNG`:

- Budget: EUR 84.250
- Time: 17:30
- Satisfaction: 78%
- Incident: Stromausfall on right side of terrain
- affected areas: toilets, catering/cooling, backstage, security lighting, telecom/service area

First decision options:

1. **Notstrom starten** — expensive and immediate; later causes noise/sustainability/municipality issue.
2. **Techniker schicken** — cheaper but delayed; later causes catering/cooling-chain risk.
3. **Strom umverteilen** — no immediate cost but risky; later causes backstage/soundcheck overload.

Follow-up branches:

- If Notstrom: `Anwohnerbeschwerde / Generatorlärm`
  - Generator versetzen
  - Schallschutzwände mieten
  - Generator nur für kritische Bereiche
- If Techniker: `Foodcourt in Gefahr / Kühlkettenrisiko`
  - Ware austauschen
  - Temperaturprotokolle prüfen
  - Foodcourt teilweise schließen
- If Strom umverteilen: `Technik am Limit / Soundcheck instabil`
  - zusätzlichen Stromverteiler buchen
  - Soundcheck verkürzen
  - Backstage-Verbrauch reduzieren

Outcome screen should explain:

- whether the festival can open
- budget/time/satisfaction consequences
- which professional perspectives were involved
- what the player learned through the chain of consequences

Knowledge transfer principle for this demo:

- Avoid quiz framing.
- Each option should be plausible but create different trade-offs.
- Learning happens because decisions visibly affect systems: budget, time, satisfaction, safety, sustainability, risk.
- Gewerke should interlock: power impacts catering, telecom, safety, finance, municipality and show quality.

## Static image-flow production process

Use this process when continuing the demo:

1. Analyze `fmp.PNG` as the visual master: crop/identify top bar, left toolbar, incident card, chart panel, selected zones, color palette and typography feel.
2. Define all screens as a small state map before generating graphics.
3. For every state, create a flat 2D mock image at the same aspect ratio as `fmp.PNG` where possible: 1672x941 or proportional 16:9-ish.
4. Keep UI layout stable across states; only change incident card, metrics, highlighted terrain zones, chart/value indicators and outcome text.
5. Use deterministic filenames, e.g.:
   - `state-00-start.png`
   - `state-10-choice-notstrom.png`
   - `state-11-followup-generator.png`
   - `state-20-choice-techniker.png`
   - `state-21-followup-catering.png`
   - `state-30-choice-umverteilen.png`
   - `state-31-followup-technik.png`
   - `state-90-outcome-good.png`, etc.
6. Implement click-through with a tiny JSON-like state map in JavaScript: current image + hotspots + target state.
7. Hotspots can be transparent absolutely positioned HTML buttons over the image. Store coordinates as percentages so the prototype scales responsively.
8. Prefer static overlays and generated flat graphics over dynamic rendering until the flow is approved.
9. Only after the static flow works should we discuss Phaser/Pixi or dynamic simulation.

Suggested local folder once implementing:

- `ProjectCircus_local/actual/festivalmanager/index.html`
- `ProjectCircus_local/actual/festivalmanager/assets/states/*.png`
- `ProjectCircus_local/actual/festivalmanager/assets/fmp.png`
- optional: `ProjectCircus_local/actual/festivalmanager/app.js`
- optional: `ProjectCircus_local/actual/festivalmanager/style.css`

## Workflow notes

- Before editing website files, load/use the `projectcircus-website` skill too.
- Work locally first. Do not upload to `/public_html` without explicit user confirmation.
- Keep an implementation log or update this skill when stable decisions are made.

## Open decisions to revisit

- Use raw `fmp.PNG` as temporary background or recreate with separate optimized layers?
- Plain HTML/CSS/SVG versus Phaser/Pixi for first implementation?
- How interactive should the demo be: UI mock, clickable slice, or true placement/simulation?
- Where local source files should live: direct static folder under `actual/festivalmanager/` or separate source/build setup?
- Whether `/festivalmanager` is public immediately or hidden/unlinked until approved.
