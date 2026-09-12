# Festival Manager Design Notes

## Product idea

Festival Manager is an HTML5 mini-game/prototype connected to the wider Project Circus / Headstart Festival context.

## Current prototype

The current version shows the existing Festival Manager visual mockup (`assets/images/fmp.png`) as a full-width responsive image.

## Primary target

- Mobile portrait first, especially iPhone testing
- Desktop should remain usable for development and presentation

## Design principles

- Preserve working functionality when adding features
- Build in small testable steps
- Prefer simple HTML/CSS/JavaScript before adding frameworks
- Keep the project deployable as a static website
- Keep future Hostinger/GitHub deployment in mind

## Deployment concept

GitHub should become the source of truth.

Recommended branch mapping:

- `dev` branch → development preview website
- `main` branch → stable/live website

Possible deployment targets:

- `projectcircus.com/festivalmanager/`
- `dev.projectcircus.com/festivalmanager/`
- or `projectcircus.com/dev/festivalmanager/`

Exact Hostinger setup is still open and must be checked later.

## Open decisions

- Is `projectcircus.com` hosted on Hostinger?
- Should Festival Manager live inside the existing Project Circus website or as an independent deployment?
- Should the prototype become a game, planning tool, interactive explainer, or hybrid?
- Which screens/mechanics come after the current mockup?
