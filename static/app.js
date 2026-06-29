/* ============================================================
   DATA — verbatim from CV (single source of truth)
   ============================================================ */
const CV = {
  name:"Tamer Saeed", role:"Penetration Tester", handle:"0xlol",
  contact:{
    email:"tamersaied96@gmail.com", phone:"+20 1015548577", location:"Egypt",
    linkedin:"https://linkedin.com/in/0xlol/", tryhackme:"https://tryhackme.com/p/0XLOL"
  },
  summary:"Penetration Tester specialising in web application, API, and network security, with disclosed findings on production systems via HackerOne and a black-box assessment delivering 10 vulnerabilities across Critical to Medium severity (highest CVSS 9.4). Executes end-to-end engagements — reconnaissance, exploitation, privilege escalation, and CVSS-scored reporting — aligned with OWASP Top 10 and MITRE ATT&CK; proficient with Burp Suite, Nmap, Metasploit, SQLMap, Hydra, Gobuster, and Python/Bash scripting. Also designs and operates SOC infrastructure (ELK Stack, Shuffle SOAR, TheHive, Elastic Defend EDR) for threat detection, incident response, and adversary emulation.",
  education:{
    degree:"Bachelor in Applied Artificial Intelligence",
    org:"Damietta University, New Damietta, Egypt", when:"10/2022 – Present",
    coursework:["Computer Networks","Data Communication","IoT","Embedded Systems","Cryptography"]
  },
  experience:[
    {title:"Bug Bounty & Vulnerability Researcher", org:"HackerOne", when:"01/2026 – Present", bullets:[
      "Conducted web application and API security testing on live production environments, identifying authentication and authorization vulnerabilities and proposing remediation steps.",
      "Performed reconnaissance, endpoint discovery, and vulnerability analysis to surface exploitable security weaknesses and verify exploitability.",
      "Developed proof-of-concept exploits and submitted structured reports through responsible disclosure workflows, facilitating timely vendor remediation.",
      "Used Burp Suite and manual HTTP request manipulation to validate and exploit complex web and API vulnerabilities."
    ]},
    {title:"Vulnerability Assessment — Student Portal & Subdomains", org:"Independent Security Research (Black-Box)", when:"May 2026", bullets:[
      "Conducted a black-box vulnerability assessment against a university student portal and associated subdomains, identifying 10 vulnerabilities spanning Critical to Medium severity.",
      "Discovered and documented a critical session management flaw (CVSS 9.4) enabling full account takeover through server-side session non-invalidation post-logout.",
      "Identified Stored XSS (CVSS 8.3), IDOR enabling unauthenticated mass profile image enumeration (CVSS 7.5), absent server-side input validation (CVSS 7.1), and unauthenticated API surface exposure (CVSS 7.5).",
      "Documented five medium-severity information disclosure findings: Django DEBUG mode in production, framework version leakage, backend module exposure via unminified JS, national identity parsing in client-side code.",
      "Produced a structured assessment report: executive summary, scope, CVSS-scored findings with PoC exploits, risk heat map, and prioritised remediation roadmap."
    ]},
    {title:"Associate Penetration Tester (Training & Labs)", org:"Hackviser", when:"08/2025 – 10/2025", bullets:[
      "Completed end-to-end penetration testing across network, web, and hybrid environments, identifying vulnerabilities and documenting remediation recommendations.",
      "Executed vulnerability analysis, exploitation, and post-exploitation on Linux and Windows systems including privilege escalation and persistence validation.",
      "Conducted web and API penetration testing using Nmap, Burp Suite, SQLMap, Metasploit, Hydra, and Gobuster combined with manual injection and HTTP request manipulation.",
      "Practiced OWASP Top 10 techniques and simulated real-world attack scenarios to prioritize high-risk issues and produce concise technical reports.",
      "Applied OSINT, cryptography concepts, and social engineering in lab-based simulations."
    ]},
    {title:"Cybersecurity Analyst (Virtual Experience)", org:"Mastercard / Forage", when:"04/2024", bullets:[
      "Completed virtual job simulation within Mastercard's Security Awareness Team, identifying and reporting phishing and social engineering threats.",
      "Evaluated security awareness gaps and contributed to developing targeted training and mitigation plans for employees.",
      "Strengthened incident analysis and threat identification through simulated response and stakeholder communication."
    ]}
  ],
  findings:[
    {sev:"crit", name:"Account Takeover (ATO)", target:"trendyol.com · HackerOne",
     desc:"Identified JWT session cookie replay vulnerability enabling full account takeover through reuse of valid session tokens, resulting in unauthorized access to user accounts."},
    {sev:"crit", name:"Session Non-Invalidation — Account Takeover", target:"Student Portal · Independent VA", cvss:"9.4",
     desc:"Server-side sessions were not invalidated on logout, enabling full account takeover by replaying a post-logout session token."},
    {sev:"high", name:"Insecure Direct Object Reference (IDOR)", target:"demeter-api.trendyol.com · HackerOne",
     desc:"Discovered IDOR via manipulated user_id parameter, enabling unauthorized access and modification of user account data through direct API requests."},
    {sev:"high", name:"Stored Cross-Site Scripting (XSS)", target:"Student Portal · Independent VA", cvss:"8.3",
     desc:"Persisted cross-site scripting allowing attacker-controlled script execution within other users' authenticated sessions."},
    {sev:"high", name:"IDOR — Unauthenticated Profile Image Enumeration", target:"Student Portal · Independent VA", cvss:"7.5",
     desc:"Direct object reference permitted unauthenticated mass enumeration of user profile images across the platform."},
    {sev:"high", name:"Unauthenticated API Surface Exposure", target:"Student Portal · Independent VA", cvss:"7.5",
     desc:"Sensitive API endpoints were reachable without authentication, exposing functionality and data to unauthenticated callers."},
    {sev:"high", name:"Absent Server-Side Input Validation", target:"Student Portal · Independent VA", cvss:"7.1",
     desc:"Server-side input validation was absent, leaving endpoints exposed to malformed and malicious input."}
  ],
  skills:{
    Core:["Penetration Testing","Web Application Security","API Security","Network Security","Vulnerability Analysis","Exploitation","Privilege Escalation","SIEM","SOC Operations","Incident Response","Security Automation (SOAR)","Threat Intelligence","EDR","Detection Engineering","Adversary Emulation","OSINT","Enumeration","Python","Bash / Shell Scripting"],
    Tools:["Burp Suite","Metasploit","Nmap","SQLMap","Hydra","Gobuster","Wireshark","Mythic C2","ELK Stack (Elasticsearch, Logstash, Kibana)","TheHive","Shuffle SOAR","Elastic Defend","Fleet Server","T-Pot Honeypots","Docker","Linux"],
    Methodologies:["OWASP Top 10","MITRE ATT&CK","Cyber Kill Chain","Reconnaissance","Post-Exploitation","Threat Hunting","Log Analysis","Threat Detection & Response"]
  },
  certs:[
    {name:"Certified Associate Penetration Tester (CAPT)", bullets:[
      "Demonstrated penetration testing methodologies, ethical hacking principles, and vulnerability assessment across web and network environments.",
      "Conducted web application and network security testing: XSS, SQL injection, command injection, file inclusion — alongside privilege escalation and system auditing.",
      "Applied OSINT, cryptography fundamentals, and social engineering in penetration testing operations across Linux and Windows environments."
    ]},
    {name:"Google Cybersecurity Professional Certificate", bullets:[
      "Hands-on experience in network security, endpoint protection, incident response, and SIEM/Splunk operations in simulated enterprise environments.",
      "Applied risk management, GRC, threat modeling, and security controls; developed practical skills in Python scripting and SQL for cybersecurity tasks."
    ]}
  ],
  projects:[
    {feat:true, name:"SOClify — SOC-as-a-Service Platform", when:"Graduation Project · 2026", url:"https://soclify.vercel.app", bullets:[
      "Designed and deployed SOClify, an end-to-end SOC-as-a-Service platform unifying SIEM, SOAR, and EDR into a self-hosted managed security stack with tiered cloud, hybrid, and on-premises models.",
      "Built the SIEM layer on the ELK Stack (Elasticsearch, Logstash, Kibana) with custom detection dashboards, log aggregation, TLS-secured transport, and threat-correlation alerting rules.",
      "Engineered an automated incident-response pipeline with Shuffle SOAR and TheHive 5, chaining Kibana webhook ingestion → automated case creation → real-time Telegram analyst alerts.",
      "Deployed Elastic Defend EDR via Fleet Server for endpoint telemetry, malware prevention, and automated host isolation.",
      "Validated detection coverage via adversary emulation mapped to MITRE ATT&CK — SSH brute-force @T1110@, compromised credentials @T1078@, Mythic C2 delivery, HTTPS beaconing, and post-exploitation execution @T1105@ @T1071@ @T1059@ — confirming EDR alerting, host isolation, and automated SOAR case creation fired as designed.",
      "Operated T-Pot honeypots and a threat-intelligence pipeline (MalwareBazaar, URLhaus, OTX, VirusTotal); hardened Linux infrastructure with OOM tuning and automated backup & recovery."
    ]},
    {feat:false, name:"TryHackMe — Offensive Security Practice", when:"", url:"https://tryhackme.com/p/0XLOL", bullets:[
      "Completed Jr Penetration Tester and Web Fundamentals paths: web exploitation, Burp Suite, authentication bypass, file inclusion, SSRF, SQLi, XSS, and command injection.",
      "Rooted real-world-style machines (Mr. Robot, Steel Mountain) practising enumeration, service exploitation, and privilege escalation end-to-end.",
      "Earned 14 badges across web hacking, network exploitation, and offensive fundamentals — ranked in the top 5% of the platform globally."
    ]}
  ]
};

/* ============================================================ */
const screen = document.getElementById('screen');
const input  = document.getElementById('cmd');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
                          .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const safeUrl = u => /^(https?:|mailto:)/i.test(String(u)) ? u : '#';
const attify = s => esc(s).replace(/@([A-Z]\d{4,5})@/g, '<span class="att">$1</span>')
                          .replace(/→/g,'<span class="cy">→</span>');
const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

function out(html){ const d=document.createElement('div'); d.innerHTML=html; screen.appendChild(d);
  screen.scrollTop = screen.scrollHeight; return d; }
function echo(cmd){ out(`<div class="cmd-echo"><span class="p">0xlol@blackbox</span><span class="u">:~$</span> <span class="c">${esc(cmd)}</span></div>`); }

/* ---------- renderers ---------- */
const R = {
  help(){
    const rows = NAV.map(n=>`  <span class="cy">${n.cmd.padEnd(13)}</span><span class="muted">${n.hint}</span>`).join('\n');
    return `<div class="blk"><div class="line muted">available commands — type one or click the index:</div>
<div class="line">${rows}</div>
<div class="line muted mt8">extras: <span class="cy">clear</span>  <span class="cy">resume</span> (dump everything)  <span class="cy">api</span> (query backend)</div></div>`;
  },
  whoami(){
    return `<div class="blk"><h2 class="sec">whoami <span class="tag">identity</span></h2>
<div class="line"><span class="br">${esc(CV.name)}</span> <span class="muted">//</span> <span class="cy">${esc(CV.role)}</span></div>
<div class="line mt8">${esc(CV.summary)}</div></div>`;
  },
  education(){
    const e=CV.education;
    return `<div class="blk"><h2 class="sec">education <span class="tag">academic</span></h2>
<div class="entry"><div class="h"><span class="title">${esc(e.degree)}</span><span class="when">${esc(e.when)}</span></div>
<div class="org">${esc(e.org)}</div>
<div class="line muted">coursework: ${e.coursework.map(c=>`<span class="chip">${esc(c)}</span>`).join(' ')}</div></div></div>`;
  },
  experience(){
    const items = CV.experience.map(x=>`<div class="entry">
      <div class="h"><span class="title">${esc(x.title)}</span><span class="when">${esc(x.when)}</span></div>
      <div class="org">${esc(x.org)}</div>
      <ul>${x.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></div>`).join('');
    return `<div class="blk"><h2 class="sec">experience <span class="tag">field ops</span></h2>${items}</div>`;
  },
  findings(){
    const items = CV.findings.map(f=>`<div class="finding">
      <div class="h"><span class="sev ${esc(f.sev)}">${f.sev==='crit'?'critical':'high'}</span><span class="vname">${esc(f.name)}</span>${f.cvss?`<span class="cvss">CVSS ${esc(f.cvss)}</span>`:''}</div>
      <div class="tgt">target › ${esc(f.target)}</div><p>${esc(f.desc)}</p></div>`).join('');
    return `<div class="blk"><h2 class="sec">findings <span class="tag">disclosed</span></h2>${items}
    <div class="line muted">CVSS scores are from the independent black-box assessment; HackerOne items reflect vulnerability class.</div></div>`;
  },
  skills(){
    const rows = Object.entries(CV.skills).map(([k,v])=>`<div class="skillrow">
      <div class="lab">[${k}]</div><div class="chips">${v.map(s=>`<span class="chip${k==='Core'?' k':''}">${esc(s)}</span>`).join('')}</div></div>`).join('');
    return `<div class="blk"><h2 class="sec">skills <span class="tag">arsenal</span></h2><div class="skills">${rows}</div></div>`;
  },
  certs(){
    const items = CV.certs.map(c=>`<div class="entry"><div class="h"><span class="title">${esc(c.name)}</span></div>
      <ul>${c.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></div>`).join('');
    return `<div class="blk"><h2 class="sec">certifications <span class="tag">credentials</span></h2>${items}</div>`;
  },
  projects(){
    const items = CV.projects.map(p=>`<div class="proj ${p.feat?'feat':''}">
      <div class="h"><span class="name">${esc(p.name)}</span><span class="when">${esc(p.when)}</span></div>
      ${p.url?`<a class="url" href="${esc(safeUrl(p.url))}" target="_blank" rel="noopener noreferrer">${esc(p.url.replace('https://',''))} ↗</a>`:''}
      <ul>${p.bullets.map(b=>`<li>${attify(b)}</li>`).join('')}</ul></div>`).join('');
    return `<div class="blk"><h2 class="sec">projects <span class="tag">build log</span></h2>${items}</div>`;
  },
  contact(){
    const c=CV.contact;
    return `<div class="blk contact"><h2 class="sec">contact <span class="tag">handshake</span></h2>
<div class="kv">
<span class="k">email</span><span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></span>
<span class="k">phone</span><span>${esc(c.phone)}</span>
<span class="k">location</span><span>${esc(c.location)}</span>
<span class="k">linkedin</span><span><a href="${esc(safeUrl(c.linkedin))}" target="_blank" rel="noopener noreferrer">${esc(c.linkedin.replace('https://',''))}</a></span>
<span class="k">tryhackme</span><span><a href="${esc(safeUrl(c.tryhackme))}" target="_blank" rel="noopener noreferrer">${esc(c.tryhackme.replace('https://',''))}</a></span>
</div></div>`;
  }
};

const NAV = [
  {cmd:"whoami",       fn:"whoami",     hint:"summary"},
  {cmd:"education",    fn:"education",  hint:"academic"},
  {cmd:"experience",   fn:"experience", hint:"field ops"},
  {cmd:"findings",     fn:"findings",   hint:"disclosed bugs"},
  {cmd:"skills",       fn:"skills",     hint:"arsenal"},
  {cmd:"certs",        fn:"certs",      hint:"credentials"},
  {cmd:"projects",     fn:"projects",   hint:"build log"},
  {cmd:"contact",      fn:"contact",    hint:"reach out"},
  {cmd:"help",         fn:"help",       hint:"command index"}
];

/* aliases */
const ALIAS = {summary:"whoami", about:"whoami", exp:"experience", work:"experience",
  bugs:"findings", finding:"findings", cert:"certs", certifications:"certs",
  project:"projects", proj:"projects", edu:"education", "?":"help", ls:"help", man:"help"};

function run(raw){
  const cmd = raw.trim(); if(!cmd) return;
  echo(cmd);
  const base = cmd.toLowerCase().split(/\s+/)[0];
  const key = ALIAS[base] || base;

  if(key==="clear"){ screen.innerHTML=""; return; }
  if(key==="resume"||key==="cat"){ dumpAll(); return; }
  if(key==="api"){ queryApi(); return; }
  if(key==="sudo"){ out(`<div class="blk line red">[sudo] password for 0xlol: <span class="muted">nice try. you don't get root here.</span></div>`); return; }
  if(key==="nmap"){ out(`<div class="blk line muted">Starting scan against <span class="cy">self</span>...\n22/tcp  open  ssh\n443/tcp open  https <span class="gr">(TLS 1.3)</span>\nHost is up. 1 attack surface: <span class="cy">hire me</span>.</div>`); return; }
  if(key==="exit"||key==="quit"){ out(`<div class="blk line muted">connection to blackbox closed. (refresh to reconnect)</div>`); return; }
  if(R[key]){ out(R[key]()); return; }

  out(`<div class="blk line"><span class="red">command not found:</span> ${esc(base)} <span class="muted">— type</span> <span class="cy">help</span></div>`);
}

function dumpAll(){
  ["whoami","education","experience","findings","skills","certs","projects","contact"]
    .forEach(k=>out(R[k]()));
}

async function queryApi(){
  const d = out(`<div class="blk line"><span class="muted">GET</span> <span class="cy">/api/profile</span> <span class="typing"></span></div>`);
  try{
    const r = await fetch('/api/profile', {headers:{'Accept':'application/json'}});
    if(!r.ok) throw 0;
    const j = await r.json();
    d.innerHTML = `<div class="blk"><div class="line gr">200 OK — backend online (Flask)</div>
      <div class="line muted">operator=<span class="cy">${esc(j.handle||CV.handle)}</span> role="${esc(j.role||CV.role)}" findings=${(j.findings||CV.findings).length} skills_core=${(j.skills?.Core||CV.skills.Core).length}</div></div>`;
  }catch(e){
    d.innerHTML = `<div class="blk"><div class="line am">offline mode — no Flask backend on this host.</div>
      <div class="line muted">run <span class="cy">python app.py</span> to bring the API online, or keep browsing (data is embedded).</div></div>`;
  }
  screen.scrollTop = screen.scrollHeight;
}

/* ---------- boot sequence ---------- */
const BOOT = [
  {t:"[ <span class='gr'>OK</span> ] establishing secure channel — TLS 1.3 / AES-256-GCM", d:160},
  {t:"[ <span class='gr'>OK</span> ] mounting operator profile :: <span class='cy'>0xlol@blackbox</span>", d:140},
  {t:"[ <span class='gr'>OK</span> ] loading credentials, findings, build log", d:140},
  {t:"[ <span class='cy'>**</span> ] handshake complete — welcome, operator.", d:220}
];
function banner(){
  out(`<pre class="line banner">
 ████  ██  ██ ██      ██████  ██
██  ██  ████  ██     ██    ██ ██       <span class="muted">TAMER SAEED</span>
██  ██   ██   ██     ██    ██ ██       <span class="br">Penetration Tester</span>
 ████   ████  ██████  ██████  ██████   <span class="muted">offensive security · SOC engineering</span>
</pre>`);
}
async function boot(){
  if(reduce){ BOOT.forEach(b=>out(`<div class="line muted">${b.t}</div>`)); banner(); out(R.help()); input.focus(); return; }
  for(const b of BOOT){ out(`<div class="line muted">${b.t}</div>`); await sleep(b.d); }
  await sleep(120); banner(); await sleep(150); out(R.help()); input.focus();
}
const sleep = ms => new Promise(r=>setTimeout(r,ms));

/* ---------- wire up ---------- */
const nav = document.getElementById('nav');
NAV.forEach(n=>{ const b=document.createElement('button');
  b.innerHTML=`<span class="cmd">${n.cmd}</span><span class="hint">${n.hint}</span>`;
  b.addEventListener('click',()=>{ run(n.cmd); input.focus(); });
  nav.appendChild(b); });

const history=[]; let hpos=-1;
input.addEventListener('keydown',e=>{
  if(e.key==='Enter'){ const v=input.value; if(v.trim()){history.push(v);hpos=history.length;} run(v); input.value=''; }
  else if(e.key==='ArrowUp'){ if(hpos>0){hpos--;input.value=history[hpos];e.preventDefault();} }
  else if(e.key==='ArrowDown'){ if(hpos<history.length-1){hpos++;input.value=history[hpos];} else {hpos=history.length;input.value='';} }
  else if(e.key==='l'&&e.ctrlKey){ e.preventDefault(); screen.innerHTML=''; }
});
document.querySelector('main').addEventListener('click',e=>{ if(!e.target.closest('a')) input.focus(); });

/* clocks */
const start=Date.now();
function tick(){
  const now=new Date();
  document.getElementById('clock').textContent = now.toTimeString().slice(0,8);
  const u=Math.floor((Date.now()-start)/1000);
  const p=n=>String(n).padStart(2,'0');
  document.getElementById('uptime').textContent=`${p(u/3600|0)}:${p((u/60|0)%60)}:${p(u%60)}`;
}
setInterval(tick,1000); tick();

boot();
