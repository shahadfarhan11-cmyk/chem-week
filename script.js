/* ===== القائمة في الجوال ===== */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

/* ===== الجدول الدوري (العناصر ١–١٨) ===== */
const CATS = {
  alk:  ["فلز قلوي", "var(--d1)"],
  alke: ["فلز قلوي أرضي", "var(--d2)"],
  met:  ["فلز", "#9aa9bf"],
  meta: ["شبه فلز", "var(--d3)"],
  non:  ["لا فلز", "var(--d4)"],
  hal:  ["هالوجين", "#2e9fb8"],
  nob:  ["غاز نبيل", "var(--d5)"]
};
// [الرمز, الاسم, العدد الذري, الكتلة, الفئة, الصف, العمود, معلومة]
const EL = [
  ["H","هيدروجين",1,"1.008","non",1,1,"أخف عنصر وأكثرها وفرة في الكون، وهو وقود النجوم."],
  ["He","هيليوم",2,"4.003","nob",1,18,"يبرّد أجهزة الرنين المغناطيسي وينفخ البالونات الطائرة."],
  ["Li","ليثيوم",3,"6.94","alk",2,1,"قلب بطاريات الجوالات والسيارات الكهربائية."],
  ["Be","بيريليوم",4,"9.012","alke",2,2,"فلز خفيف وقوي، يدخل في مرايا التلسكوبات الفضائية."],
  ["B","بورون",5,"10.81","meta",2,13,"موجود في الزجاج المقاوم للحرارة ومنظفات الغسيل."],
  ["C","كربون",6,"12.011","non",2,14,"أساس الحياة. الألماس والجرافيت كلاهما كربون."],
  ["N","نيتروجين",7,"14.007","non",2,15,"يشكّل نحو ٧٨٪ من هواء الأرض."],
  ["O","أكسجين",8,"15.999","non",2,16,"نتنفسه، وهو سبب الاحتراق وصدأ الحديد."],
  ["F","فلور",9,"18.998","hal",2,17,"موجود في معجون الأسنان ويقوّي المينا."],
  ["Ne","نيون",10,"20.180","nob",2,18,"يضيء باللون الأحمر البرتقالي في اللافتات."],
  ["Na","صوديوم",11,"22.990","alk",3,1,"يتفاعل بعنف مع الماء، ومع الكلور يعطي ملح الطعام."],
  ["Mg","مغنيسيوم",12,"24.305","alke",3,2,"يحترق بضوء أبيض ساطع، ويُستخدم في الألعاب النارية."],
  ["Al","ألومنيوم",13,"26.982","met",3,13,"خفيف ومقاوم للصدأ، تُصنع منه الطائرات وعلب المشروبات."],
  ["Si","سيليكون",14,"28.085","meta",3,14,"أساس الرقائق الإلكترونية في كل حاسوب وجوال."],
  ["P","فوسفور",15,"30.974","non",3,15,"موجود في الحمض النووي وفي رؤوس أعواد الثقاب."],
  ["S","كبريت",16,"32.06","non",3,16,"يعطي البيض الفاسد رائحته، ويدخل في صناعة حمض الكبريتيك."],
  ["Cl","كلور",17,"35.45","hal",3,17,"يعقّم مياه الشرب ومسابح السباحة."],
  ["Ar","أرجون",18,"39.948","nob",3,18,"غاز خامل يملأ المصابيح الكهربائية لحماية الفتيل."]
];
const pt = document.getElementById("pt");
const detail = document.getElementById("detail");

function showEl(i) {
  const [s, n, no, m, c, , , f] = EL[i];
  [...pt.children].forEach((b, k) => b.setAttribute("aria-pressed", k === i));
  detail.style.setProperty("--c", CATS[c][1]);
  detail.innerHTML = `<div class="d-tile"><small>${no}</small><b>${s}</b><span>${m}</span></div>
    <div><h3>${n}</h3><p class="cat">${CATS[c][0]}</p><p>${f}</p></div>`;
}
EL.forEach((e, i) => {
  const b = document.createElement("button");
  b.className = "el"; b.style.gridRow = e[5]; b.style.gridColumn = e[6];
  b.style.setProperty("--c", CATS[e[4]][1]);
  b.setAttribute("aria-label", `${e[1]}، العدد الذري ${e[2]}`);
  b.innerHTML = `<small>${e[2]}</small><b>${e[0]}</b>`;
  b.addEventListener("click", () => showEl(i));
  pt.appendChild(b);
});
document.getElementById("legend").innerHTML = Object.values(CATS)
  .map(c => `<span><i style="background:${c[1]}"></i>${c[0]}</span>`).join("");
showEl(5);

/* ===== حالات المادة ===== */
const cv = document.getElementById("cv");
const ctx = cv.getContext("2d");
const temp = document.getElementById("temp");
const W = cv.width, H = cv.height, N = 48, R = 11;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const P = [];
for (let i = 0; i < N; i++) {
  const gx = 150 + (i % 8) * 50, gy = 130 + Math.floor(i / 8) * 26;
  P.push({ x: gx, y: gy, gx, gy, a: Math.random() * 6.28 });
}
function mode() { const t = +temp.value; return t <= 0 ? 0 : t < 100 ? 1 : 2; }
function step() {
  const m = mode(), t = +temp.value;
  const top = m === 2 ? R : H * 0.4, speed = m === 0 ? 0 : m === 1 ? 1 + t / 60 : 3 + (t - 100) / 8;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = m === 0 ? "#3f6fd8" : m === 1 ? "#2e9fb8" : "#e0383e";
  P.forEach(p => {
    if (m === 0) {
      p.x += (p.gx - p.x) * 0.2 + (Math.random() - .5) * 1.2;
      p.y += (p.gy - p.y) * 0.2 + (Math.random() - .5) * 1.2;
    } else {
      p.a += (Math.random() - .5) * 0.4;
      p.x += Math.cos(p.a) * speed; p.y += Math.sin(p.a) * speed;
      if (p.x < R || p.x > W - R) { p.a = Math.PI - p.a; p.x = Math.min(W - R, Math.max(R, p.x)); }
      if (p.y < top || p.y > H - R) { p.a = -p.a; p.y = Math.min(H - R, Math.max(top, p.y)); }
    }
    ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, 6.28); ctx.fill();
  });
  if (!reduce) requestAnimationFrame(step);
}
function updateTemp() {
  document.getElementById("tNum").textContent = temp.value;
  document.getElementById("tState").textContent = ["صلب (جليد)", "سائل (ماء)", "غاز (بخار)"][mode()];
  if (reduce) step();
}
temp.addEventListener("input", updateTemp);
updateTemp(); step();

/* ===== مقياس الحموضة ===== */
const PH = [
  ["حمض البطارية", "#e0383e", "حمضي قوي"], ["حمض المعدة", "#e8452f", "حمضي قوي"],
  ["عصير الليمون", "#ee6a28", "حمضي"], ["الخل", "#f08a24", "حمضي"],
  ["عصير البرتقال", "#f2a626", "حمضي"], ["القهوة السوداء", "#eeb82a", "حمضي ضعيف"],
  ["الحليب", "#c3c43a", "حمضي ضعيف جدًا"], ["ماء نقي", "#3fae6a", "متعادل"],
  ["ماء البحر", "#2fae9a", "قاعدي ضعيف"], ["صودا الخبز", "#2e9fb8", "قاعدي ضعيف"],
  ["معجون الأسنان", "#3a85d0", "قاعدي"], ["حليب المغنيسيا", "#3f6fd8", "قاعدي"],
  ["الأمونيا المنزلية", "#5559cc", "قاعدي قوي"], ["مبيّض الغسيل", "#6a3fb5", "قاعدي قوي"],
  ["منظّف المجاري", "#5a2f9c", "قاعدي قوي"]
];
const ph = document.getElementById("ph");
function updatePh() {
  const [name, color, type] = PH[ph.value];
  document.getElementById("phNum").textContent = ph.value;
  document.getElementById("phName").textContent = name;
  document.getElementById("phType").textContent = type;
  document.getElementById("liquid").style.background = color;
}
ph.addEventListener("input", updatePh);
updatePh();

/* ===== الاختبار ===== */
const Q = [
  ["ما الرمز الكيميائي للصوديوم؟", ["Na", "So", "S", "Sd"], 0, "Na من الكلمة اللاتينية Natrium."],
  ["الماء النقي رقمه الهيدروجيني قريب من:", ["0", "3", "7", "14"], 2, "7 هو الوسط المتعادل بين الحمض والقاعدة."],
  ["أي غاز يشكّل أكبر نسبة من هواء الأرض؟", ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الأرجون"], 1, "النيتروجين نحو ٧٨٪ والأكسجين نحو ٢١٪."],
  ["ماذا يحدث لجزيئات المادة عند رفع الحرارة؟", ["تتحرك أسرع", "تتباطأ", "تتوقف", "تختفي"], 0, "الحرارة طاقة حركة، فتزداد سرعة الجزيئات."],
  ["الألماس والجرافيت كلاهما من عنصر:", ["السيليكون", "الأكسجين", "الكربون", "الألومنيوم"], 2, "الفرق في طريقة ترتيب ذرات الكربون فقط."]
];
const box = document.getElementById("quizBox");
let qi = 0, score = 0;
function renderQ() {
  if (qi >= Q.length) {
    box.innerHTML = `<h3>نتيجتك ${score} من ${Q.length}</h3>
      <p>${score >= 4 ? "ممتاز، أنت كيميائي بالفطرة." : "محاولة جيدة، راجع الأقسام وجرّب مرة ثانية."}</p>
      <button class="btn" id="again">أعد الاختبار</button>`;
    document.getElementById("again").onclick = () => { qi = 0; score = 0; renderQ(); };
    return;
  }
  const [q, opts, ans, why] = Q[qi];
  box.innerHTML = `<p class="q-count">السؤال ${qi + 1} من ${Q.length}</p><h3>${q}</h3>
    <div class="opts">${opts.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join("")}</div>
    <p class="why" id="why"></p>`;
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    box.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.i === ans) x.classList.add("right"); });
    if (i === ans) score++; else b.classList.add("wrong");
    document.getElementById("why").innerHTML = `${i === ans ? "إجابة صحيحة. " : "ليست الصحيحة. "}${why}
      <br><button class="btn" id="next">${qi === Q.length - 1 ? "شاهد النتيجة" : "السؤال التالي"}</button>`;
    document.getElementById("next").onclick = () => { qi++; renderQ(); };
    document.getElementById("next").focus();
  });
}
renderQ();
