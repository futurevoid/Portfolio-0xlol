# 0xlol // operator console

An interactive, terminal-styled security portfolio for **Tamer Saeed — Penetration Tester**.
The site behaves like an offensive-security operator shell: boot in, then **type or click**
commands (`whoami`, `findings`, `projects`, `skills`, …) and your CV streams back as command output.

Built with a **Flask** backend that serves the console and exposes the profile as a live
JSON API. The front-end is a single self-contained `index.html`, so it also runs with **zero
backend** as a static page (deploy it anywhere, like your SOClify site).

## Quick start (Python / Flask)

```bash
pip install -r requirements.txt
python app.py                 # debugger OFF by default
FLASK_DEBUG=1 python app.py   # opt in to the debugger for local dev only
# open http://127.0.0.1:5000
```

With Flask running, the console's `api` command hits the live backend:

```
GET  /                 -> the console
GET  /api/profile      -> full profile (JSON)
GET  /api/<section>    -> one section, e.g. /api/skills, /api/findings, /api/projects
```

## Static deploy (no backend)

`index.html` is fully self-contained (data + styles + logic inline). Host it on Vercel,
Netlify, GitHub Pages, or any static server. The `api` command simply reports "offline mode"
and everything else works from the embedded data.

```bash
# example: GitHub Pages / Vercel — just publish index.html
```

## Deploy Flask in production

```bash
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:8000 app:app
```

## Commands

| command | shows |
|---|---|
| `whoami` | summary / identity |
| `education` | degree + coursework |
| `experience` | roles at HackerOne, Hackviser, Mastercard/Forage |
| `findings` | disclosed bugs (ATO, IDOR) |
| `skills` | Core / Tools / Methodologies |
| `certs` | CAPT, Google Cybersecurity |
| `projects` | SOClify (featured) + TryHackMe |
| `contact` | email, phone, LinkedIn, TryHackMe |
| `resume` | dumps every section at once |
| `api` | queries the Flask `/api/profile` endpoint |
| `help` · `clear` | command index · wipe screen |

Aliases (`summary`, `exp`, `bugs`, `proj`, …), command history (↑/↓), `Ctrl+L` to clear,
and a few easter eggs (`sudo`, `nmap`) are included.

## Editing your data

The profile lives in two mirrored places — keep them in sync:
- front-end: the `CV = { … }` object near the top of `static/app.js`
- backend: the `PROFILE = { … }` dict in `app.py`

## Notes

- Responsive down to mobile; honours `prefers-reduced-motion`; keyboard accessible.
- Fonts (Chakra Petch + JetBrains Mono) load from Google Fonts with a monospace fallback,
  so it still looks right offline or if fonts are blocked.

## Security hardening

This build was reviewed and hardened (red-team code audit):

- **Debugger off by default** — the Werkzeug debugger only enables with `FLASK_DEBUG=1`;
  use `gunicorn` in production, never the dev server.
- **Security headers** on every response — `Content-Security-Policy`, `X-Content-Type-Options:
  nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Strict-Transport-Security`,
  `Permissions-Policy`; `Server` banner stripped. The static `index.html` also ships a CSP
  `<meta>` so it's protected when hosted without the Flask backend.
- **No inline JS/CSS** — styles and scripts are external (`static/style.css`, `static/app.js`),
  so the CSP is `script-src 'self'` / `style-src 'self'` with **no `'unsafe-inline'` and no
  nonce**. Inline `style=""` attributes were removed (utility classes instead).
- **Output encoding** — `esc()` encodes `& < > " '`; all URLs pass `safeUrl()` which whitelists
  `http(s):`/`mailto:` schemes (blocks `javascript:`); external links use
  `rel="noopener noreferrer"`.
- **Rate limiting** — 60 req/min per IP on the API (Flask-Limiter); 429 on exceed.
- **No input reflection** — the 404 handler returns a generic body.
- **Pinned dependencies** — exact versions in `requirements.txt`.

For static hosting, the included **`vercel.json`** applies the full header set (CSP, nosniff,
frame-options, HSTS, etc.) at the platform edge; the `<meta>` CSP in `index.html` covers other
static hosts and `file://`.
