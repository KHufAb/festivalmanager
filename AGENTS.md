# AGENTS.md — Festival Manager

Instructions for AI coding agents working on this project.

## Before changing code

1. Read `README.md`.
2. Read `FESTIVAL_MANAGER_DESIGN.md`.
3. Read `TODO.md`.
4. Inspect the existing code.

The repository is authoritative. Do not recreate the Festival Manager from memory or chat history.

## Core rules

- Preserve existing functionality unless explicitly asked to change it.
- Mobile portrait is the primary target.
- Keep desktop usable.
- Prefer small, testable changes.
- Keep this deployable as a static HTML/CSS/JS site.
- Do not add frameworks or build tools unless there is a clear reason.
- Do not hard-code Hostinger credentials or deployment secrets.
- Keep future GitHub → Hostinger deployment compatibility in mind.

## Session closeout

After significant work:

- Test locally where possible.
- Update `TODO.md` and/or `FESTIVAL_MANAGER_DESIGN.md` with new decisions.
- Commit changes with a clear message.
