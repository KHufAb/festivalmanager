# Festival Manager

HTML5 prototype for the Festival Manager project.

## Current status

This repository currently contains a cleaned-up local prototype structure with the existing visual mockup as the first screen.

## Run locally

Open `index.html` directly in a browser, or start a small local web server from this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Suggested workflow

- `main` = stable/live version
- `dev` = development/testing version
- GitHub is the single source of truth
- Hostinger or another web host should deploy from GitHub later

Recommended future URLs:

```text
projectcircus.com/festivalmanager/       stable/live
projectcircus.com/dev/festivalmanager/   development preview
```

If the hosting provider supports Git deployment, connect it to GitHub. If not, use GitHub Actions with SFTP/FTP deployment.

## Project structure

```text
festivalmanager/
├── index.html
├── css/
│   └── app.css
├── js/
│   ├── app.js
│   ├── config.js
│   └── state.js
├── assets/
│   └── images/
│       └── fmp.png
├── README.md
├── FESTIVAL_MANAGER_DESIGN.md
├── TODO.md
└── AGENTS.md
```
