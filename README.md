# 0xlol // operator console

This is my security portfolio, built to feel like an offensive-security shell instead of
a regular CV page. Boot it up, type a command or just click one, and your resume streams
back to you like terminal output: `whoami`, `findings`, `projects`, `skills`, and so on.

Under the hood it's a Flask app that serves the console and also exposes the whole profile
as a small JSON API. The front end, though, is a single self-contained `index.html`, so
if you don't want to run a backend at all, you don't have to. It works as a plain static
page too.

## Running it locally (Python / Flask)

```bash
pip install -r requirements.txt
python app.py                 # debugger is OFF by default
FLASK_DEBUG=1 python app.py   # turn it on for local dev only, never in prod
# then open http://127.0.0.1:5000
```

Once Flask is running, the console's `api` command actually talks to the live backend:

```
GET  /                 -> the console itself
GET  /api/profile      -> the full profile, as JSON
GET  /api/<section>    -> just one section, e.g. /api/skills, /api/findings, /api/projects
```

## Just want the static version? No backend needed

`index.html` carries everything inline (data, styles, logic), so you can drop it on
Vercel, Netlify, GitHub Pages, or basically any static host and it'll work fine. The only
thing that changes is the `api` command reports "offline mode" instead of hitting a real
endpoint; everything else still runs off the data baked into the page.

```bash
# e.g. for GitHub Pages or Vercel, just publish index.html, that's it
```

## Running Flask for real (production)

```bash
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:8000 app:app
```

## Commands

| command | what it shows |
|---|---|
| `whoami` | quick summary / who I am |
| `education` | degree + coursework |
| `experience` | roles at HackerOne, Hackviser, Mastercard/Forage |
| `findings` | disclosed bugs (the ATO and the IDOR) |
| `skills` | core skills, tools, methodologies |
| `certs` | CAPT, Google Cybersecurity |
| `projects` | SOClify (the main one) + TryHackMe |
| `contact` | email, phone, LinkedIn, TryHackMe |
| `resume` | dumps every section at once |
| `api` | hits the live Flask `/api/profile` endpoint |
| `help` · `clear` | list commands · wipe the screen |

There are a few aliases too (`summary`, `exp`, `bugs`, `proj`...), command history with
↑/↓, `Ctrl+L` to clear, and a couple of easter eggs hiding in there (try `sudo` or `nmap`).

## If you're editing the data

The profile content lives in two places, and they need to stay in sync manually:
- front end: the `CV = { … }` object near the top of `static/app.js`
- backend: the `PROFILE = { … }` dict in `app.py`

## A few other notes

- It's responsive down to mobile, respects `prefers-reduced-motion`, and is keyboard
  navigable.
- Fonts (Chakra Petch + JetBrains Mono) come from Google Fonts but fall back gracefully
  to monospace, so it still looks right offline or if fonts get blocked.

## Security hardening

I went through this with a real hacker mindset and hardened a few things:

- **Debugger is off unless you explicitly turn it on.** The Werkzeug debugger only
  activates with `FLASK_DEBUG=1`. Production should run on `gunicorn`, never the Flask
  dev server.
- **Real security headers on every response**: `Content-Security-Policy`,
  `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`,
  `Strict-Transport-Security`, `Permissions-Policy`, and the `Server` banner is stripped.
  The static `index.html` ships its own CSP `<meta>` tag too, so it's still protected even
  without the Flask backend behind it.
- **No inline JS or CSS.** Styles and scripts are external files
  (`static/style.css`, `static/app.js`), which means the CSP can be strict:
  `script-src 'self'` / `style-src 'self'`, no `'unsafe-inline'`, no nonce shenanigans.
  I also went through and pulled out every inline `style=""` in favor of utility classes.
- **Everything gets encoded on output.** `esc()` handles `& < > " '`, and every URL passes
  through `safeUrl()`, which only allows `http(s):` and `mailto:` schemes, so no
  `javascript:` tricks. External links use `rel="noopener noreferrer"`.
- **Rate limiting**: 60 requests/min per IP on the API via Flask-Limiter, 429 if you go
  over.
- **No input reflection**: the 404 page just returns a generic body, nothing echoed back.
- **Dependencies are pinned** to exact versions in `requirements.txt`.
