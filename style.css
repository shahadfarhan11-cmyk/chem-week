:root{
  --ink:#14213d; --paper:#f1f6f5; --white:#fff; --muted:#52627a; --line:#d5e0df;
  --d1:#e0383e; --d2:#f08a24; --d3:#e9c02b; --d4:#3fae6a; --d5:#3f6fd8;
  --accent:#0e8f8f;
  --r:14px;
}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;scroll-padding-top:72px}
body{font-family:"IBM Plex Sans Arabic",Tahoma,sans-serif;background:var(--paper);color:var(--ink);line-height:1.8;font-size:1.0625rem}
h1,h2,.brand,.tile-sym{font-family:"Reem Kufi","IBM Plex Sans Arabic",sans-serif}
a{color:inherit}
:focus-visible{outline:3px solid var(--d5);outline-offset:3px}
.wrap{max-width:1040px;margin-inline:auto;padding:64px 20px 8px}
h2{font-size:clamp(1.6rem,4vw,2.2rem);margin-bottom:24px;line-height:1.3}

/* header */
.top{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;
  padding:10px 20px;background:rgba(241,246,245,.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.brand{text-decoration:none;font-weight:700;font-size:1.3rem;display:flex;align-items:center;gap:10px}
.brand::first-letter{color:var(--accent)}
.brand span{font-size:1rem;font-weight:500}
nav{display:flex;align-items:center;gap:22px}
nav a{text-decoration:none;font-weight:500}
nav a:hover{color:var(--accent)}
.btn-sm{background:var(--ink);color:var(--white);padding:6px 16px;border-radius:99px}
.btn-sm:hover{color:var(--white)!important;background:var(--accent)}
.menu-btn{display:none;background:none;border:1px solid var(--line);border-radius:10px;font-size:1.4rem;padding:2px 12px;cursor:pointer;color:var(--ink)}

/* hero */
.hero{max-width:1040px;margin-inline:auto;padding:56px 20px 40px;display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:center}
.kicker{color:var(--accent);font-weight:600;margin-bottom:6px}
h1{font-size:clamp(2.6rem,9vw,4.8rem);line-height:1.15;margin-bottom:14px}
.lead{max-width:34em;color:var(--muted);margin-bottom:26px}
.cta{display:flex;flex-wrap:wrap;gap:12px}
.btn{display:inline-block;background:var(--ink);color:var(--white);border:2px solid var(--ink);padding:10px 26px;border-radius:99px;
  text-decoration:none;font:inherit;font-weight:600;cursor:pointer;transition:background .2s,color .2s}
.btn:hover{background:var(--accent);border-color:var(--accent)}
.btn.ghost{background:transparent;color:var(--ink)}
.btn.ghost:hover{background:var(--ink);color:var(--white);border-color:var(--ink)}

/* element tile */
.tile{justify-self:center;width:min(280px,80%);aspect-ratio:1;background:var(--white);border:6px solid var(--ink);border-radius:10px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;box-shadow:10px 10px 0 var(--d3);
  animation:drop .8s cubic-bezier(.2,.8,.2,1) both}
.tile-no{position:absolute;top:10px;inset-inline-start:14px;font-weight:600}
.tile-sym{font-size:clamp(4rem,12vw,6.5rem);line-height:1;font-weight:700;color:var(--accent)}
.tile-name{font-weight:600;font-size:1.15rem}
.tile-mass{font-size:.85rem;color:var(--muted)}
@keyframes drop{from{transform:translateY(-24px) rotate(-3deg);opacity:0}to{transform:none;opacity:1}}

/* pH strip */
.ph-strip{display:grid;grid-template-columns:repeat(5,1fr);height:14px}
.ph-strip i:nth-child(1){background:var(--d1)}.ph-strip i:nth-child(2){background:var(--d2)}
.ph-strip i:nth-child(3){background:var(--d3)}.ph-strip i:nth-child(4){background:var(--d4)}
.ph-strip i:nth-child(5){background:var(--d5)}

/* about */
.about-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:32px;align-items:center}
.facts{list-style:none;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.facts li{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:14px;text-align:center}
.facts b{display:block;font-size:1.6rem;font-family:"Reem Kufi",sans-serif;color:var(--accent)}

/* schedule */
.tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:0;border-radius:var(--r);overflow:hidden;margin-bottom:20px}
.tab{border:0;padding:14px 6px;font:inherit;font-weight:600;cursor:pointer;color:var(--ink);background:var(--c);opacity:.55;transition:opacity .2s}
.tab[aria-selected="true"]{opacity:1;box-shadow:inset 0 -6px 0 var(--ink)}
.tab small{display:block;font-weight:400;font-size:.8rem}
.panel{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:8px 22px}
.panel h3{font-size:1.15rem;padding-top:16px}
.ev{display:grid;grid-template-columns:96px 1fr;gap:16px;padding:16px 0;border-bottom:1px solid var(--line)}
.ev:last-child{border:0}
.ev time{font-weight:600;color:var(--accent)}
.ev h4{font-size:1.05rem}
.ev p{color:var(--muted);font-size:.95rem}

/* lab */
.lab{display:grid;grid-template-columns:200px 1fr;gap:36px;align-items:center;background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:28px}
.flask{width:160px;height:200px;margin-inline:auto;border:5px solid var(--ink);border-top:0;border-radius:0 0 80px 80px;position:relative;overflow:hidden;background:#f9fbfb}
.flask::before{content:"";position:absolute;top:0;inset-inline:38px;height:30px;border-inline:5px solid var(--ink)}
.liquid{position:absolute;inset:auto 0 0 0;height:62%;background:#3fae6a;transition:background .3s}
.lab-ctrl label{display:block;margin-bottom:8px;font-weight:500}
input[type=range]{width:100%;height:14px;border-radius:99px;-webkit-appearance:none;appearance:none;
  background:linear-gradient(to right,#e0383e,#f08a24,#e9c02b,#3fae6a,#3f6fd8,#6a3fb5)}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:28px;height:28px;border-radius:50%;background:var(--white);border:4px solid var(--ink);cursor:pointer}
input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--white);border:4px solid var(--ink);cursor:pointer}
.ph-out{margin-top:14px;font-size:1.2rem}
.ph-out b{font-family:"Reem Kufi",sans-serif;font-size:2.4rem;color:var(--accent)}
.ph-type{color:var(--muted)}

/* form */
.form{max-width:520px;display:grid;gap:16px}
.form label{display:grid;gap:4px;font-weight:500}
.form input,.form select{font:inherit;padding:10px 14px;border:1.5px solid var(--line);border-radius:10px;background:var(--white);color:var(--ink)}
.form input:invalid:not(:placeholder-shown){border-color:var(--d1)}
.msg{min-height:1.8em;font-weight:500}
.msg.ok{color:#1c7a45}.msg.err{color:var(--d1)}

footer{margin-top:72px;background:var(--ink);color:#dfe7ee;text-align:center;padding:28px 20px}
footer .small{font-size:.9rem;opacity:.75}

/* tablet & mobile */
@media (max-width:820px){
  .hero,.about-grid,.lab{grid-template-columns:1fr}
  .hero{padding-top:36px;text-align:start}
  .tile{order:-1;width:200px}
  .wrap{padding-top:48px}
}
@media (max-width:680px){
  .menu-btn{display:block}
  nav{position:absolute;top:100%;inset-inline:0;background:var(--paper);flex-direction:column;align-items:stretch;gap:0;
    border-bottom:1px solid var(--line);display:none;padding:8px 20px 16px}
  nav.open{display:flex}
  nav a{padding:10px 0}
  .btn-sm{text-align:center;margin-top:6px}
  .brand span{font-size:.9rem}
  .tab small{display:none}
  .ev{grid-template-columns:1fr;gap:2px}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
