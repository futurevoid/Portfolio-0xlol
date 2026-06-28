#!/usr/bin/env python3
"""
0xlol // operator console  —  portfolio backend
Tamer Saeed · Penetration Tester

Serves the interactive security-console portfolio and exposes the CV as a
live JSON API that the terminal's `api` command queries.

    pip install -r requirements.txt
    python app.py                      # dev (debugger OFF unless FLASK_DEBUG=1)
    gunicorn -w 2 -b 0.0.0.0:8000 app:app   # production
"""
import os
from flask import Flask, render_template, jsonify, abort
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# F-06: rate limiting (in-memory store; swap storage_uri for redis in prod)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["120 per minute"],
    storage_uri="memory://",
)

# --- single source of truth (mirrors the embedded front-end data) ----------
PROFILE = {
    "name": "Tamer Saeed",
    "role": "Penetration Tester",
    "handle": "0xlol",
    "contact": {
        "email": "tamersaied96@gmail.com",
        "phone": "+20 1015548577",
        "location": "Egypt",
        "linkedin": "https://linkedin.com/in/0xlol/",
        "tryhackme": "https://tryhackme.com/0xlol/",
    },
    "summary": (
        "Motivated and analytical Penetration Tester with hands-on experience in web, API, "
        "and network security. Skilled in performing end-to-end penetration tests, simulating "
        "real-world attack scenarios, and delivering actionable remediation aligned with OWASP "
        "Top 10. Proficient with Burp Suite, Nmap, Metasploit, SQLMap and scripting (Python, "
        "Bash); eager to apply offensive testing skills to banking and financial sector engagements."
    ),
    "education": {
        "degree": "Bachelor in Applied Artificial Intelligence",
        "org": "Damietta University, New Damietta, Egypt",
        "when": "10/2022 – Present",
        "coursework": ["Computer Networks", "Data Communication", "IoT",
                       "Embedded Systems", "Cryptography"],
    },
    "experience": [
        {"title": "Bug Bounty & Vulnerability Researcher", "org": "HackerOne",
         "when": "01/2026 – Present"},
        {"title": "Associate Penetration Tester (Training & Labs)", "org": "Hackviser",
         "when": "08/2025 – 10/2025"},
        {"title": "Cybersecurity Analyst (Virtual Experience)", "org": "Mastercard / Forage",
         "when": "04/2024"},
    ],
    "findings": [
        {"sev": "critical", "name": "Account Takeover (ATO)",
         "target": "trendyol.com · HackerOne"},
        {"sev": "high", "name": "Insecure Direct Object Reference (IDOR)",
         "target": "demeter-api.trendyol.com · HackerOne"},
    ],
    "skills": {
        "Core": ["Penetration Testing", "Web Application Security", "API Security",
                 "Network Security", "Vulnerability Analysis", "Exploitation",
                 "Privilege Escalation", "SIEM", "SOC Operations", "Incident Response",
                 "Security Automation (SOAR)", "Threat Intelligence", "EDR",
                 "Detection Engineering", "Adversary Emulation", "OSINT", "Enumeration",
                 "Python", "Bash / Shell Scripting"],
        "Tools": ["Burp Suite", "Metasploit", "Nmap", "SQLMap", "Hydra", "Gobuster",
                  "Wireshark", "Mythic C2", "ELK Stack", "TheHive", "Shuffle SOAR",
                  "Elastic Defend", "Fleet Server", "T-Pot Honeypots", "Docker", "Linux"],
        "Methodologies": ["OWASP Top 10", "MITRE ATT&CK", "Cyber Kill Chain",
                          "Reconnaissance", "Post-Exploitation", "Threat Hunting",
                          "Log Analysis", "Threat Detection & Response"],
    },
    "certifications": [
        "Certified Associate Penetration Tester (CAPT)",
        "Google Cybersecurity Professional Certificate",
    ],
    "projects": [
        {"name": "SOClify — SOC-as-a-Service Platform",
         "when": "Graduation Project · 2026", "url": "https://soclify.vercel.app",
         "attack": ["T1110", "T1078", "T1105", "T1071", "T1059"]},
        {"name": "TryHackMe — Offensive Security Practice",
         "url": "https://tryhackme.com/0xlol/"},
    ],
}

# F-02 / F-04: security headers on every response
CSP = (
    "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"
)


@app.after_request
def security_headers(resp):
    resp.headers["Content-Security-Policy"] = CSP
    resp.headers["X-Content-Type-Options"] = "nosniff"
    resp.headers["X-Frame-Options"] = "DENY"
    resp.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    resp.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    resp.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
    resp.headers.pop("Server", None)
    return resp


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/profile")
@limiter.limit("60 per minute")
def api_profile():
    """Full operator profile as JSON — queried by the console's `api` command."""
    return jsonify(PROFILE)


@app.route("/api/<section>")
@limiter.limit("60 per minute")
def api_section(section):
    """Per-section lookup, e.g. /api/skills, /api/findings, /api/projects."""
    if section in PROFILE:
        return jsonify({section: PROFILE[section]})
    abort(404)  # F-05: do not reflect attacker-controlled input


@app.errorhandler(404)
def not_found(_e):
    return jsonify(error="not_found"), 404


@app.errorhandler(429)
def rate_limited(_e):
    return jsonify(error="rate_limited"), 429


if __name__ == "__main__":
    # F-01: debugger OFF by default; opt in only via env for local dev.
    debug = os.environ.get("FLASK_DEBUG") == "1"
    app.run(host="127.0.0.1", port=5000, debug=debug)
