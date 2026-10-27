/* ===== عدّل البيانات هنا ===== */
const DAYS = [
  { name: "الأحد", date: "١ ربيع", color: "var(--d1)", title: "يوم الافتتاح", events: [
    ["٠٩:٠٠", "حفل الافتتاح", "كلمة عميد الكلية وجولة في المعرض."],
    ["١٠:٣٠", "معرض الجدول الدوري", "مجسمات ولوحات الطلاب للعناصر."],
    ["١٢:٠٠", "عرض الكيمياء الحيّة", "تجارب سريعة أمام الجمهور."] ] },
  { name: "الإثنين", date: "٢ ربيع", color: "var(--d2)", title: "يوم التجارب", events: [
    ["٠٩:٣٠", "ورشة التجارب الحيّة", "كل مشارك يجرّب بنفسه بإشراف مختصين."],
    ["١١:٣٠", "الحبر السري", "نصنع حبرًا لا يظهر إلا بالحرارة."],
    ["١٣:٠٠", "مختبر الألوان", "تفاعلات تتغيّر ألوانها أمامك."] ] },
  { name: "الثلاثاء", date: "٣ ربيع", color: "var(--d3)", title: "يوم الطاقة والبيئة", events: [
    ["١٠:٠٠", "محاضرة: الكيمياء والطاقة", "من البطاريات إلى الهيدروجين الأخضر."],
    ["١١:٣٠", "تحلية المياه", "كيف نحوّل ماء البحر إلى ماء صالح للشرب."],
    ["١٣:٠٠", "حوار مع باحثين", "أسئلة مفتوحة للحضور."] ] },
  { name: "الأربعاء", date: "٤ ربيع", color: "var(--d4)", title: "يوم المسابقات", events: [
    ["٠٩:٣٠", "مسابقة الألغاز الكيميائية", "فرق من ثلاثة طلاب."],
    ["١١:٠٠", "سباق الموازنة", "من يوازن أكثر معادلات في خمس دقائق."],
    ["١٣:٠٠", "جوائز اليوم", "تكريم الفرق الفائزة."] ] },
  { name: "الخميس", date: "٥ ربيع", color: "var(--d5)", title: "يوم الختام", events: [
    ["١٠:٠٠", "مسابقة أفضل مشروع طلابي", "عرض المشاريع أمام لجنة التحكيم."],
    ["١٢:٠٠", "الكيمياء في المطبخ", "عرض علمي عن الطعام والتخمّر."],
    ["١٣:٣٠", "حفل الختام وتوزيع الجوائز", "إعلان النتائج وصورة جماعية."] ] }
];

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

document.addEventListener("DOMContentLoaded", () => {
  /* ===== القائمة في الجوال ===== */
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.textContent = open ? "✕" : "☰";
    });

    nav.addEventListener("click", e => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      }
    });
  }

  /* ===== البرنامج ===== */
  const tabs = document.getElementById("tabs");
  const panel = document.getElementById("panel");

  function showDay(i) {
    const d = DAYS[i];
    [...tabs.children].forEach((b, n) => b.setAttribute("aria-selected", n === i));
    
    if (panel) {
      panel.style.opacity = '0';
      setTimeout(() => {
        panel.innerHTML = `<h3>${d.title}</h3>` + d.events.map(e =>
          `<div class="ev"><time>${e[0]}</time><div><h4>${e[1]}</h4><p>${e[2]}</p></div></div>`).join("");
        panel.style.opacity = '1';
      }, 150);
    }
  }

  if (tabs && panel) {
    DAYS.forEach((d, i) => {
      const b = document.createElement("button");
      b.className = "tab"; 
      b.role = "tab"; 
      b.style.setProperty("--c", d.color);
      b.innerHTML = `${d.name}<small>${d.date}</small>`;
      b.addEventListener("click", () => showDay(i));
      tabs.appendChild(b);
    });
    showDay(0);
  }

  /* ===== مقياس الحموضة ===== */
  const ph = document.getElementById("ph");
  const phNum = document.getElementById("phNum");
  const phName = document.getElementById("phName");
  const phType = document.getElementById("phType");
  const liquid = document.getElementById("liquid");

  function updatePh() {
    if (!ph) return;
    const val = parseInt(ph.value, 10);
    const [name, color, type] = PH[val];
    if (phNum) phNum.textContent = val;
    if (phName) phName.textContent = name;
    if (phType) phType.textContent = type;
    if (liquid) liquid.style.background = color;
  }

  if (ph) {
    ph.addEventListener("input", updatePh);
    updatePh();
  }

  /* ===== نموذج التسجيل ===== */
  const form = document.getElementById("form");
  const msg = document.getElementById("msg");

  if (form && msg) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        msg.className = "msg err";
        msg.textContent = "تأكد من تعبئة الاسم والبريد بشكل صحيح.";
        return;
      }
      const firstName = form.name.value.trim().split(" ")[0];
      msg.className = "msg ok";
      msg.textContent = `تم التسجيل يا ${firstName}. نشوفك في أسبوع الكيمياء.`;
      form.reset();
      if (ph) {
        ph.value = 7;
        updatePh();
      }
    });
  }
});
