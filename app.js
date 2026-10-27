const elementRecords = `
H|Hydrogen|1.008|diatomic nonmetal|Gas
He|Helium|4.0026022|noble gas|Gas
Li|Lithium|6.94|alkali metal|Solid
Be|Beryllium|9.01218315|alkaline earth metal|Solid
B|Boron|10.81|metalloid|Solid
C|Carbon|12.011|polyatomic nonmetal|Solid
N|Nitrogen|14.007|diatomic nonmetal|Gas
O|Oxygen|15.999|diatomic nonmetal|Gas
F|Fluorine|18.9984031636|diatomic nonmetal|Gas
Ne|Neon|20.17976|noble gas|Gas
Na|Sodium|22.989769282|alkali metal|Solid
Mg|Magnesium|24.305|alkaline earth metal|Solid
Al|Aluminium|26.98153857|post-transition metal|Solid
Si|Silicon|28.085|metalloid|Solid
P|Phosphorus|30.9737619985|polyatomic nonmetal|Solid
S|Sulfur|32.06|polyatomic nonmetal|Solid
Cl|Chlorine|35.45|diatomic nonmetal|Gas
Ar|Argon|39.9481|noble gas|Gas
K|Potassium|39.09831|alkali metal|Solid
Ca|Calcium|40.0784|alkaline earth metal|Solid
Sc|Scandium|44.9559085|transition metal|Solid
Ti|Titanium|47.8671|transition metal|Solid
V|Vanadium|50.94151|transition metal|Solid
Cr|Chromium|51.99616|transition metal|Solid
Mn|Manganese|54.9380443|transition metal|Solid
Fe|Iron|55.8452|transition metal|Solid
Co|Cobalt|58.9331944|transition metal|Solid
Ni|Nickel|58.69344|transition metal|Solid
Cu|Copper|63.5463|transition metal|Solid
Zn|Zinc|65.382|transition metal|Solid
Ga|Gallium|69.7231|post-transition metal|Solid
Ge|Germanium|72.6308|metalloid|Solid
As|Arsenic|74.9215956|metalloid|Solid
Se|Selenium|78.9718|polyatomic nonmetal|Solid
Br|Bromine|79.904|diatomic nonmetal|Liquid
Kr|Krypton|83.7982|noble gas|Gas
Rb|Rubidium|85.46783|alkali metal|Solid
Sr|Strontium|87.621|alkaline earth metal|Solid
Y|Yttrium|88.905842|transition metal|Solid
Zr|Zirconium|91.2242|transition metal|Solid
Nb|Niobium|92.906372|transition metal|Solid
Mo|Molybdenum|95.951|transition metal|Solid
Tc|Technetium|98|transition metal|Solid
Ru|Ruthenium|101.072|transition metal|Solid
Rh|Rhodium|102.905502|transition metal|Solid
Pd|Palladium|106.421|transition metal|Solid
Ag|Silver|107.86822|transition metal|Solid
Cd|Cadmium|112.4144|transition metal|Solid
In|Indium|114.8181|post-transition metal|Solid
Sn|Tin|118.7107|post-transition metal|Solid
Sb|Antimony|121.7601|metalloid|Solid
Te|Tellurium|127.603|metalloid|Solid
I|Iodine|126.904473|diatomic nonmetal|Solid
Xe|Xenon|131.2936|noble gas|Gas
Cs|Cesium|132.905451966|alkali metal|Solid
Ba|Barium|137.3277|alkaline earth metal|Solid
La|Lanthanum|138.905477|lanthanide|Solid
Ce|Cerium|140.1161|lanthanide|Solid
Pr|Praseodymium|140.907662|lanthanide|Solid
Nd|Neodymium|144.2423|lanthanide|Solid
Pm|Promethium|145|lanthanide|Solid
Sm|Samarium|150.362|lanthanide|Solid
Eu|Europium|151.9641|lanthanide|Solid
Gd|Gadolinium|157.253|lanthanide|Solid
Tb|Terbium|158.925352|lanthanide|Solid
Dy|Dysprosium|162.5001|lanthanide|Solid
Ho|Holmium|164.930332|lanthanide|Solid
Er|Erbium|167.2593|lanthanide|Solid
Tm|Thulium|168.934222|lanthanide|Solid
Yb|Ytterbium|173.0451|lanthanide|Solid
Lu|Lutetium|174.96681|lanthanide|Solid
Hf|Hafnium|178.492|transition metal|Solid
Ta|Tantalum|180.947882|transition metal|Solid
W|Tungsten|183.841|transition metal|Solid
Re|Rhenium|186.2071|transition metal|Solid
Os|Osmium|190.233|transition metal|Solid
Ir|Iridium|192.2173|transition metal|Solid
Pt|Platinum|195.0849|transition metal|Solid
Au|Gold|196.9665695|transition metal|Solid
Hg|Mercury|200.5923|transition metal|Liquid
Tl|Thallium|204.38|post-transition metal|Solid
Pb|Lead|207.21|post-transition metal|Solid
Bi|Bismuth|208.980401|post-transition metal|Solid
Po|Polonium|209|post-transition metal|Solid
At|Astatine|210|metalloid|Solid
Rn|Radon|222|noble gas|Gas
Fr|Francium|223|alkali metal|Solid
Ra|Radium|226|alkaline earth metal|Solid
Ac|Actinium|227|actinide|Solid
Th|Thorium|232.03774|actinide|Solid
Pa|Protactinium|231.035882|actinide|Solid
U|Uranium|238.028913|actinide|Solid
Np|Neptunium|237|actinide|Solid
Pu|Plutonium|244|actinide|Solid
Am|Americium|243|actinide|Solid
Cm|Curium|247|actinide|Solid
Bk|Berkelium|247|actinide|Solid
Cf|Californium|251|actinide|Solid
Es|Einsteinium|252|actinide|Solid
Fm|Fermium|257|actinide|Solid
Md|Mendelevium|258|actinide|Solid
No|Nobelium|259|actinide|Solid
Lr|Lawrencium|266|actinide|Solid
Rf|Rutherfordium|267|transition metal|Solid
Db|Dubnium|268|transition metal|Solid
Sg|Seaborgium|269|transition metal|Solid
Bh|Bohrium|270|transition metal|Solid
Hs|Hassium|269|transition metal|Solid
Mt|Meitnerium|278|unknown, probably transition metal|Solid
Ds|Darmstadtium|281|unknown, probably transition metal|Solid
Rg|Roentgenium|282|unknown, probably transition metal|Solid
Cn|Copernicium|285|transition metal|Liquid
Nh|Nihonium|286|unknown, probably post-transition metal|Solid
Fl|Flerovium|289|post-transition metal|Solid
Mc|Moscovium|289|unknown, probably post-transition metal|Solid
Lv|Livermorium|293|unknown, probably post-transition metal|Solid
Ts|Tennessine|294|unknown, probably metalloid|Solid
Og|Oganesson|294|unknown, predicted to be noble gas|Solid
`.trim().split("\n").map(line => {
  const [symbol, latin, mass, category, state] = line.split("|");
  return { symbol, latin, mass: Number(mass), category, state };
});

const arabicElementNames = `الهيدروجين|الهيليوم|الليثيوم|البيريليوم|البورون|الكربون|النيتروجين|الأكسجين|الفلور|النيون|الصوديوم|المغنيسيوم|الألومنيوم|السيليكون|الفوسفور|الكبريت|الكلور|الأرجون|البوتاسيوم|الكالسيوم|السكانديوم|التيتانيوم|الفاناديوم|الكروم|المنغنيز|الحديد|الكوبالت|النيكل|النحاس|الزنك|الغاليوم|الجرمانيوم|الزرنيخ|السيلينيوم|البروم|الكريبتون|الروبيديوم|السترونشيوم|الإيتريوم|الزركونيوم|النيوبيوم|الموليبدينوم|التكنيشيوم|الروثينيوم|الروديوم|البلاديوم|الفضة|الكادميوم|الإنديوم|القصدير|الأنتيمون|التيلوريوم|اليود|الزينون|السيزيوم|الباريوم|اللانثانوم|السيريوم|البراسيوديميوم|النيوديميوم|البروميثيوم|الساماريوم|اليوروبيوم|الغادولينيوم|التيربيوم|الديسبروسيوم|الهولميوم|الإربيوم|الثوليوم|الإيتربيوم|اللوتيتيوم|الهافنيوم|التنتالوم|التنغستن|الرينيوم|الأوزميوم|الإيريديوم|البلاتين|الذهب|الزئبق|الثاليوم|الرصاص|البزموت|البولونيوم|الأستاتين|الرادون|الفرانسيوم|الراديوم|الأكتينيوم|الثوريوم|البروتكتينيوم|اليورانيوم|النبتونيوم|البلوتونيوم|الأمريسيوم|الكوريوم|البركيليوم|الكاليفورنيوم|الأينشتاينيوم|الفرميوم|المندليفيوم|النوبليوم|اللورنسيوم|الرذرفورديوم|الدوبنيوم|السيبورغيوم|البوهريوم|الهاسيوم|المايتنريوم|الدارمشتاتيوم|الرونتجينيوم|الكوبرنيسيوم|النيهونيوم|الفليروفيوم|الموسكوفيوم|الليفرموريوم|التينيسين|الأوغانيسون`.split("|");

const elementTypes = {
  "diatomic nonmetal": "لافلز",
  "polyatomic nonmetal": "لافلز",
  "noble gas": "غاز نبيل",
  "alkali metal": "فلز قلوي",
  "alkaline earth metal": "فلز قلوي ترابي",
  "transition metal": "فلز انتقالي",
  "post-transition metal": "فلز بعد انتقالي",
  metalloid: "شبه فلز",
  lanthanide: "لانثانيد",
  actinide: "أكتينيد",
  "unknown, probably transition metal": "فلز انتقالي (متوقع)",
  "unknown, probably post-transition metal": "فلز بعد انتقالي (متوقع)",
  "unknown, probably metalloid": "شبه فلز (متوقع)",
  "unknown, predicted to be noble gas": "غاز نبيل (متوقع)"
};

const elementDetails = {
  H: ["أخف العناصر وأكثرها وفرة في الكون. يدخل في تركيب الماء والنجوم.", "يوجد في الماء (H₂O) وفي جزيئات كثيرة داخل أجسامنا."],
  He: ["غاز خفيف وخامل كيميائياً، اكتُشف أولاً عند رصده في ضوء الشمس.", "يُستخدم في ملء البالونات وفي تبريد بعض أجهزة التصوير الطبي."],
  C: ["عنصر أساسي في الكيمياء العضوية، وله صور متعددة مثل الغرافيت والألماس.", "يشكّل أساس المركبات العضوية الموجودة في جميع الكائنات الحية."],
  N: ["غاز عديم اللون والرائحة يشكّل معظم الغلاف الجوي للأرض.", "يشكّل نحو 78٪ من الهواء، ويدخل في تركيب البروتينات."],
  O: ["عنصر نشط كيميائياً تحتاج إليه معظم الكائنات الحية في التنفس.", "يوجد في الهواء والماء، وتحتاج إليه خلايا الجسم لإنتاج الطاقة."],
  Na: ["فلز قلوي لين ونشط جداً؛ لذلك لا يوجد حراً في الطبيعة عادةً.", "أيوناته جزء من ملح الطعام، ولها دور مهم في عمل الأعصاب."],
  Mg: ["فلز خفيف ولامع، وهو من العناصر المهمة للكائنات الحية.", "يوجد في الكلوروفيل الذي يساعد النباتات على التقاط ضوء الشمس."],
  Si: ["شبه فلز وفير في القشرة الأرضية، وله خصائص كهربائية مميزة.", "المادة الأساسية في الشرائح الإلكترونية والألواح الشمسية."],
  Cl: ["هالوجين نشط يوجد في الطبيعة غالباً ضمن مركبات، لا منفرداً.", "توجد أيوناته في ملح الطعام، وتُستخدم مركباته لمعالجة المياه."],
  Ca: ["فلز قلوي ترابي ضروري لبناء العظام ووظائف الجسم الحيوية.", "يدخل في تركيب العظام والأسنان، ويوجد في منتجات الألبان."],
  Fe: ["فلز قوي ومغناطيسي، ومن أكثر العناصر استخداماً في الصناعة.", "يدخل في صناعة الفولاذ، كما يساعد الدم على نقل الأكسجين."],
  Cu: ["فلز أحمر اللون وموصل ممتاز للحرارة والكهرباء.", "تُصنع منه الأسلاك الكهربائية وبعض العملات والأدوات."]
};

const elements = elementRecords.map((record, index) => {
  const number = index + 1;
  const isHalogen = [9, 17, 35, 53, 85, 117].includes(number);
  const [description, life] = elementDetails[record.symbol] || [
    `${arabicElementNames[index]} عنصر رمزه ${record.symbol}، وعدده الذري ${number}، وينتمي إلى فئة ${elementTypes[record.category] || "عنصر كيميائي"}.`,
    number >= 104
      ? "عنصر فائق الثقل أُنتجت منه كميات ضئيلة في المختبر، وخصائصه المدروسة لا تعني أنه مادة للاستخدام المنزلي."
      : number === 43 || number === 61 || number >= 84
        ? "عنصر مشع أو نادر؛ يُدرس في سياقات علمية متخصصة، ولا يُستخدم في الأنشطة المنزلية."
        : `تساعد معرفة خصائص ${arabicElementNames[index]} على فهم تنوّع المواد وتصنيفها في الجدول الدوري.`
  ];
  return {
    number,
    symbol: record.symbol,
    name: arabicElementNames[index],
    latin: record.latin,
    type: number === 117 ? "هالوجين (متوقع)" : isHalogen ? "هالوجين" : elementTypes[record.category] || "غير مصنف",
    mass: record.mass.toFixed(3).replace(/\.?0+$/, ""),
    state: number >= 104 ? "غير مؤكد" : record.state === "Gas" ? "غاز" : record.state === "Liquid" ? "سائل" : "صلب",
    description,
    life
  };
});

const reactions = {
  vinegar: {
    names: [{ symbol: "CH₃COOH", name: "حمض الخليك", detail: "يوجد في الخل المنزلي" }, { symbol: "NaHCO₃", name: "بيكربونات الصوديوم", detail: "مركّب قلوي شائع" }],
    equation: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑",
    left: "CH₃COOH", right: "NaHCO₃",
    explanation: "يتفاعل حمض الخليك مع بيكربونات الصوديوم، وينتج عن ذلك غاز ثاني أكسيد الكربون الذي يكوّن الفقاعات، إضافة إلى الماء وأسيتات الصوديوم."
  },
  rust: {
    names: [{ symbol: "Fe", name: "الحديد", detail: "فلز شائع في الأدوات" }, { symbol: "O₂", name: "الأكسجين", detail: "غاز في الهواء" }],
    equation: "4Fe + 3O₂ → 2Fe₂O₃",
    left: "Fe", right: "O₂",
    explanation: "يتحد الحديد تدريجياً مع الأكسجين بوجود الرطوبة، مكوّناً أكسيد الحديد المعروف بالصدأ. يوضح النموذج عملية الأكسدة على نحو مبسط."
  },
  water: {
    names: [{ symbol: "H₂", name: "الهيدروجين", detail: "أخف الغازات" }, { symbol: "O₂", name: "الأكسجين", detail: "يدعم الاحتراق" }],
    equation: "2H₂ + O₂ → 2H₂O",
    left: "H₂", right: "O₂",
    explanation: "تتحد جزيئات الهيدروجين والأكسجين لتكوين الماء. هذا تفاعل طارد للطاقة، وعرضه هنا نظري فقط؛ لا تحاول إجراءه خارج مختبر متخصص."
  }
};

const elementReactions = {
  "C+O": {
    equation: "C + O₂ → CO₂",
    explanation: "في احتراق الكربون الكامل يتحد الكربون مع الأكسجين مكوّناً ثاني أكسيد الكربون. هذا نموذج نظري مبسّط."
  },
  "Fe+O": {
    equation: "4Fe + 3O₂ → 2Fe₂O₃",
    explanation: "يتحد الحديد تدريجياً مع الأكسجين بوجود الرطوبة، مكوّناً أكسيد الحديد المعروف بالصدأ."
  },
  "H+O": {
    equation: "2H₂ + O₂ → 2H₂O",
    explanation: "تتحد جزيئات الهيدروجين والأكسجين لتكوين الماء. هذا تفاعل طارد للطاقة، وعرضه هنا نظري فقط."
  },
  "Mg+O": {
    equation: "2Mg + O₂ → 2MgO",
    explanation: "يتحد المغنيسيوم مع الأكسجين مكوّناً أكسيد المغنيسيوم. تعرض المحاكاة المعادلة نظرياً فقط."
  }
};

const questions = [
  { category: "أساسيات العناصر", question: "ما الرقم الذي يحدد هوية العنصر الكيميائي؟", choices: ["عدد النيوترونات", "العدد الذري", "الكتلة الذرية", "عدد مستويات الطاقة"], answer: 1, hint: "ابحث عن الرقم الذي يساوي عدد البروتونات في نواة الذرة.", explanation: "العدد الذري هو عدد البروتونات في النواة، وهو ما يميّز كل عنصر عن غيره." },
  { category: "كيمياء من حولنا", question: "ما الصيغة الكيميائية للماء؟", choices: ["CO₂", "O₂", "H₂O", "NaCl"], answer: 2, hint: "يتكوّن جزيء الماء من ذرتي عنصر واحد وذرة واحدة من عنصر آخر.", explanation: "يتكوّن جزيء الماء H₂O من ذرتي هيدروجين وذرة أكسجين واحدة." },
  { category: "عناصر الحياة", question: "أي عنصر يشكّل أساس المركبات العضوية؟", choices: ["الحديد", "الهيليوم", "الكربون", "الصوديوم"], answer: 2, hint: "رمزه الكيميائي C، وتحتوي أجسام الكائنات الحية على مركباته.", explanation: "الكربون قادر على تكوين روابط متنوعة ومستقرة، لذلك يشكّل أساس الكيمياء العضوية." },
  { category: "الهواء والغلاف الجوي", question: "ما الغاز الأكثر وفرة في الغلاف الجوي للأرض؟", choices: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"], answer: 1, hint: "يشكّل قرابة 78٪ من الهواء الذي يحيط بنا.", explanation: "النيتروجين هو المكوّن الأكبر للغلاف الجوي، بنسبة تقارب 78٪ من حجمه." },
  { category: "تفاعلات كيميائية", question: "ما الغاز الذي ينتج الفقاعات عند تفاعل الخل مع بيكربونات الصوديوم؟", choices: ["الهيدروجين", "الأكسجين", "النيتروجين", "ثاني أكسيد الكربون"], answer: 3, hint: "صيغته CO₂، وهو الغاز نفسه الذي يوجد في المشروبات الفوارة.", explanation: "ينتج غاز ثاني أكسيد الكربون (CO₂) عن تفاعل حمض الخليك مع بيكربونات الصوديوم." },
  { category: "العناصر والتقنية", question: "أي عنصر يُستخدم على نطاق واسع في صناعة الشرائح الإلكترونية؟", choices: ["الكالسيوم", "السيليكون", "الكلور", "الهيليوم"], answer: 1, hint: "شبه فلز اسمه يشبه كلمة «السليكا»، ورمزه Si.", explanation: "يُستخدم السيليكون في أشباه الموصلات، وهي أساس الشرائح الإلكترونية والخلايا الشمسية." }
];

const badges = [
  { id: "first-element", icon: "◈", name: "أول اكتشاف", description: "اكتشف عنصرك الأول", achieved: state => state.discovered.length >= 1 },
  { id: "element-explorer", icon: "✧", name: "مستكشف العناصر", description: "اكتشف 5 عناصر مختلفة", achieved: state => state.discovered.length >= 5 },
  { id: "curious-scientist", icon: "⚗", name: "فضول علمي", description: "أجرِ 3 محاكاة افتراضية", achieved: state => state.experiments >= 3 },
  { id: "quiz-master", icon: "✳", name: "خبير التحدّي", description: "أكمل تحدّي المعرفة", achieved: state => state.quizCompleted }
];

const STORAGE_KEY = "shaghaf-chemistry-progress-v1";
const defaultState = () => ({ xp: 0, discovered: [], experiments: 0, quizCompleted: false, bestQuiz: 0, activities: [] });
let state = defaultState();
let activeFilter = "الكل";
let labMode = "preset";
let quizIndex = 0;
let quizCorrect = 0;
let quizAnswered = false;
let toastTimer;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState();
    const data = JSON.parse(saved);
    if (!data || !Array.isArray(data.discovered) || !Array.isArray(data.activities) ||
        !Number.isFinite(data.xp) || !Number.isFinite(data.experiments)) {
      throw new Error("Saved progress has an invalid shape");
    }
    return {
      xp: Math.max(0, data.xp),
      discovered: [...new Set(data.discovered.filter(number => elements.some(element => element.number === number)))],
      experiments: Math.max(0, data.experiments),
      quizCompleted: Boolean(data.quizCompleted),
      bestQuiz: Number.isFinite(data.bestQuiz) ? Math.max(0, data.bestQuiz) : 0,
      activities: data.activities.filter(item => item && typeof item.title === "string" && typeof item.detail === "string" && typeof item.icon === "string" && Number.isFinite(item.xp)).slice(0, 30)
    };
  } catch (error) {
    console.error("Unable to load saved progress:", error);
    showToast("تعذّر قراءة التقدّم المحفوظ. سيبدأ الموقع بتقدّم جديد.");
    return defaultState();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("Unable to save progress:", error);
    showToast("تعذّر حفظ التقدّم في هذا المتصفح.");
    return false;
  }
}

function addActivity(title, detail, icon, points) {
  state.xp += points;
  state.activities.unshift({ title, detail, icon, xp: points, time: Date.now() });
  state.activities = state.activities.slice(0, 30);
  saveProgress();
  renderProgress();
}

function renderProgress() {
  const earned = badges.filter(badge => badge.achieved(state)).length;
  $("#headerXp").textContent = state.xp;
  $("#homeXp").textContent = state.xp;
  $("#homeElements").textContent = state.discovered.length;
  $("#homeExperiments").textContent = state.experiments;
  $("#homeBadges").textContent = earned;
  $("#journalXp").textContent = state.xp;
  $("#journalElements").textContent = state.discovered.length;
  $("#journalExperiments").textContent = state.experiments;
  $("#badgeCount").textContent = `${earned} / ${badges.length}`;
  $("#quizTotalScore").textContent = state.xp;
  renderBadges();
  renderActivities();
  renderElements();
}

function renderBadges() {
  $("#badgeList").innerHTML = badges.map(badge => {
    const achieved = badge.achieved(state);
    return `<div class="badge-item ${achieved ? "earned" : ""}"><span class="badge-emoji">${badge.icon}</span><span><strong>${badge.name}</strong><small>${achieved ? "تم الحصول عليها" : badge.description}</small></span></div>`;
  }).join("");
}

function formatTime(time) {
  if (!time) return "ضمن رحلتك";
  const minutes = Math.max(0, Math.floor((Date.now() - time) / 60000));
  if (minutes < 1) return "الآن";
  if (minutes < 60) return `قبل ${minutes} د`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `قبل ${hours} س`;
  return `قبل ${Math.floor(hours / 24)} يوم`;
}

function renderActivities() {
  const container = $("#activityList");
  if (!state.activities.length) {
    container.innerHTML = '<div class="activity-empty">لم تبدأ رحلتك بعد — اكتشافك الأول ينتظرك ✦</div>';
    return;
  }
  container.innerHTML = state.activities.slice(0, 8).map(activity =>
    `<div class="activity-item"><span class="activity-icon">${escapeHtml(activity.icon)}</span><span class="activity-copy"><strong>${escapeHtml(activity.title)}</strong><small>${escapeHtml(activity.detail)} · ${formatTime(activity.time)}</small></span><span class="activity-xp">+${activity.xp} XP</span></div>`
  ).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderElements() {
  const search = ($("#elementSearch")?.value || "").trim().toLocaleLowerCase("ar");
  const exactMatch = search && elements.find(element =>
    String(element.number) === search ||
    element.symbol.toLocaleLowerCase("ar") === search ||
    element.name.toLocaleLowerCase("ar") === search ||
    element.latin.toLocaleLowerCase("ar") === search
  );
  const filtered = elements.filter(element => {
    const matchesType = activeFilter === "الكل" || element.type === activeFilter;
    const matchesSearch = exactMatch
      ? element === exactMatch
      : `${element.name} ${element.latin} ${element.symbol} ${element.number}`.toLocaleLowerCase("ar").includes(search);
    return matchesType && matchesSearch;
  });
  $("#elementCount").textContent = filtered.length;
  $("#elementGrid").innerHTML = filtered.map(element => {
    const discovered = state.discovered.includes(element.number);
    return `<button class="element-card ${discovered ? "discovered" : ""}" data-element="${element.number}" aria-label="تفاصيل عنصر ${element.name}"><span class="element-top"><span class="element-number">${String(element.number).padStart(3, "0")}</span><span class="element-symbol">${element.symbol}</span></span><span class="element-name">${element.name}</span><span class="element-name-latin">${element.latin}</span><span class="element-meta"><span class="element-type">${element.type}</span><span class="element-discover">${discovered ? "تم اكتشافه ✓" : "اكتشف العنصر ←"}</span></span></button>`;
  }).join("");
  $("#elementEmpty").classList.toggle("hidden", filtered.length > 0);
}

function renderFeatured() {
  $("#featuredElements").innerHTML = [elements[4], elements[2], elements[10], elements[7]].map(element =>
    `<button class="featured-card" data-element="${element.number}"><span class="featured-symbol">${element.symbol}</span><span><strong>${element.name}</strong><small>${String(element.number).padStart(2, "0")} · ${element.latin}</small></span></button>`
  ).join("");
}

function openElement(number) {
  const element = elements.find(item => item.number === number);
  if (!element) return;
  const isNew = !state.discovered.includes(element.number);
  if (isNew) {
    state.discovered.push(element.number);
    addActivity(`اكتشاف عنصر ${element.name}`, `العدد الذري ${element.number}`, "◈", 10);
    showToast(`اكتشاف رائع! حصلت على 10 نقاط شغف.`);
  }
  $("#elementDialogContent").innerHTML = `<div class="dialog-element-head"><span class="dialog-symbol">${element.symbol}</span><div><small>${element.latin} · ${element.type}</small><h2>${element.name}</h2></div></div><div class="dialog-facts"><div><small>العدد الذري</small><strong>${element.number}</strong></div><div><small>الكتلة الذرية</small><strong>${element.mass} u</strong></div><div><small>الحالة عند درجة حرارة الغرفة</small><strong>${element.state}</strong></div><div><small>الفئة</small><strong>${element.type}</strong></div></div><p class="dialog-description">${element.description}</p><p class="dialog-life"><strong>في حياتنا اليومية:</strong> ${element.life}</p>`;
  $("#elementDialog").showModal();
}

function renderElementOptions() {
  const options = elements.map(element =>
    `<option value="${element.number}">${String(element.number).padStart(3, "0")} · ${element.symbol} · ${element.name}</option>`
  ).join("");
  $("#elementOne").innerHTML = options;
  $("#elementTwo").innerHTML = options;
  $("#elementOne").value = "8";
  $("#elementTwo").value = "1";
}

function setLabMode(mode) {
  labMode = mode === "custom" ? "custom" : "preset";
  $("#presetControls").classList.toggle("hidden", labMode !== "preset");
  $("#customControls").classList.toggle("hidden", labMode !== "custom");
  $$(".lab-mode").forEach(button => button.classList.toggle("active", button.dataset.labMode === labMode));
  renderReactionPreview();
}

function currentElementPair() {
  const first = elements.find(element => element.number === Number($("#elementOne").value));
  const second = elements.find(element => element.number === Number($("#elementTwo").value));
  if (!first || !second || first.number === second.number) return null;
  const key = [first.symbol, second.symbol].sort().join("+");
  return { first, second, reaction: elementReactions[key] || null };
}

function renderReactionPreview() {
  let names;
  if (labMode === "custom") {
    const pair = currentElementPair();
    if (!pair) {
      $("#reactantPreview").innerHTML = '<p class="custom-warning">اختاري عنصرين مختلفين لعرضهما.</p>';
      $("#runExperiment").disabled = true;
      return;
    }
    names = [
      { symbol: pair.first.symbol, name: pair.first.name, detail: `عنصر ${pair.first.number} · ${pair.first.type}` },
      { symbol: pair.second.symbol, name: pair.second.name, detail: `عنصر ${pair.second.number} · ${pair.second.type}` }
    ];
    $("#runExperiment").disabled = false;
  } else {
    const reaction = reactions[$("#reactionSelect").value];
    names = reaction.names;
    $("#runExperiment").disabled = false;
  }
  $("#reactantPreview").innerHTML = `<div class="reactant"><span class="reactant-symbol">${names[0].symbol}</span><span><strong>${names[0].name}</strong><small>${names[0].detail}</small></span></div><div class="reactant-plus">+</div><div class="reactant"><span class="reactant-symbol">${names[1].symbol}</span><span><strong>${names[1].name}</strong><small>${names[1].detail}</small></span></div>`;
  $("#moleculeLeft").textContent = names[0].symbol;
  $("#moleculeRight").textContent = names[1].symbol;
}

function runExperiment() {
  const button = $("#runExperiment");
  const controls = [$("#reactionSelect"), $("#elementOne"), $("#elementTwo"), ...$$(".lab-mode")];
  const stage = $("#simulationStage");
  const pair = labMode === "custom" ? currentElementPair() : null;
  if (labMode === "custom" && !pair) return;
  const reaction = pair ? pair.reaction : reactions[$("#reactionSelect").value];
  const names = pair
    ? [{ name: pair.first.name }, { name: pair.second.name }]
    : reaction.names;
  button.disabled = true;
  controls.forEach(control => { control.disabled = true; });
  $("#simStatus").className = "sim-status running";
  $("#simStatus").innerHTML = pair && !reaction
    ? "<i></i> جارٍ عرض اختيارك..."
    : "<i></i> جارٍ التفاعل...";
  $("#reactionResult").innerHTML = '<div class="result-placeholder"><span>✧</span><p>تتحرك الجزيئات... راقب ما يحدث.</p></div>';
  stage.classList.remove("animating", "pair-preview");
  void stage.offsetWidth;
  stage.classList.add(pair && !reaction ? "pair-preview" : "animating");
  setTimeout(() => {
    stage.classList.remove("animating", "pair-preview");
    $("#simStatus").className = "sim-status done";
    if (reaction) {
      $("#simStatus").innerHTML = "<i></i> اكتمل التفاعل";
      $("#reactionResult").innerHTML = `<div class="result-equation">${reaction.equation}</div><div class="result-explanation">${reaction.explanation}</div><div class="result-note">نموذج توضيحي مبسّط — جميع التفاعلات هنا افتراضية</div>`;
    } else {
      $("#simStatus").innerHTML = "<i></i> عُرض اختيار العنصرين";
      $("#reactionResult").innerHTML = `<div class="result-explanation">اخترتِ ${pair.first.name} (${pair.first.symbol}) و${pair.second.name} (${pair.second.symbol}). لا تتوفر في هذا الموقع معادلة موثّقة لهذين العنصرين؛ وهذا لا يعني بالضرورة أنهما لا يتفاعلان. لم نعرض نتيجة أو معادلة غير مؤكدة.</div><div class="result-note">حركة العناصر في المشهد توضيحية فقط ولا تمثل تفاعلاً كيميائياً.</div>`;
    }
    state.experiments += 1;
    addActivity(pair && !reaction ? "استكشاف اختيار عنصرين" : "إجراء محاكاة افتراضية", names.map(item => item.name).join(" + "), "⚗", 5);
    showToast("أحسنت! أُضيفت 5 نقاط شغف إلى رصيدك.");
    controls.forEach(control => { control.disabled = false; });
    renderReactionPreview();
  }, 1700);
}

function renderQuiz() {
  const card = $("#quizCard");
  $("#quizProgressText").textContent = `${Math.min(quizIndex, questions.length)} / ${questions.length}`;
  $("#quizProgressBar").style.width = `${Math.min(quizIndex / questions.length * 100, 100)}%`;
  if (quizIndex >= questions.length) {
    $("#quizProgressText").textContent = `${questions.length} / ${questions.length}`;
    $("#quizProgressBar").style.width = "100%";
    const points = quizCorrect * 10;
    const isBest = quizCorrect * 10 > state.bestQuiz;
    if (!state.quizCompleted || isBest) {
      state.quizCompleted = true;
      state.bestQuiz = Math.max(state.bestQuiz, points);
      if (points > 0) addActivity("إكمال تحدّي المعرفة", `أجبت إجابة صحيحة عن ${quizCorrect} من ${questions.length}`, "✳", points);
      else { saveProgress(); renderProgress(); }
    }
    card.innerHTML = `<div class="quiz-complete"><span class="complete-icon">✦</span><span class="panel-kicker">اكتمل التحدّي</span><h2>${quizCorrect >= 4 ? "أداء رائع يا مستكشف!" : "رحلة جميلة — تعلّمت شيئاً جديداً!"}</h2><p>أجبت إجابة صحيحة عن ${quizCorrect} من أصل ${questions.length} أسئلة.</p><div class="complete-score">${quizCorrect * 10}<small> نقطة في هذا التحدّي</small></div><button class="button button-primary" id="restartQuiz">أعد التحدّي <span>↻</span></button></div>`;
    $("#restartQuiz").addEventListener("click", restartQuiz);
    return;
  }
  const question = questions[quizIndex];
  const keys = ["أ", "ب", "ج", "د"];
  card.innerHTML = `<div class="quiz-topline"><span>السؤال ${quizIndex + 1} من ${questions.length}</span><strong>+10 XP للإجابة الصحيحة</strong></div><div class="quiz-progress"><span style="width:${quizIndex / questions.length * 100}%"></span></div><span class="quiz-category">${question.category}</span><h2 class="quiz-question">${question.question}</h2><div class="answer-list">${question.choices.map((choice, index) => `<button class="answer-option" data-answer="${index}"><span class="answer-key">${keys[index]}</span>${choice}</button>`).join("")}</div><div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div><div class="quiz-actions"><button class="hint-button" id="hintButton">✧ أحتاج إلى تلميح</button><button class="button button-primary next-button" id="nextQuestion" disabled>${quizIndex === questions.length - 1 ? "النتيجة" : "التالي"} <span>←</span></button></div>`;
  $$("#quizCard [data-answer]").forEach(button => button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer))));
  $("#hintButton").addEventListener("click", () => {
    $("#quizFeedback").textContent = `تلميح: ${question.hint}`;
    $("#quizFeedback").className = "quiz-feedback";
    $("#hintButton").disabled = true;
    $("#hintButton").textContent = "✧ ظهر التلميح";
  });
  $("#nextQuestion").addEventListener("click", () => { if (!quizAnswered) return; quizIndex += 1; quizAnswered = false; renderQuiz(); });
}

function selectAnswer(index) {
  if (quizAnswered) return;
  quizAnswered = true;
  const question = questions[quizIndex];
  const isCorrect = index === question.answer;
  if (isCorrect) quizCorrect += 1;
  $$("#quizCard [data-answer]").forEach((button, choiceIndex) => {
    button.disabled = true;
    if (choiceIndex === question.answer) button.classList.add("correct");
    else if (choiceIndex === index) button.classList.add("wrong");
  });
  const feedback = $("#quizFeedback");
  feedback.className = `quiz-feedback ${isCorrect ? "good" : "bad"}`;
  feedback.textContent = `${isCorrect ? "إجابة صحيحة! " : "ليست هذه الإجابة الصحيحة. "}${question.explanation}`;
  $("#nextQuestion").disabled = false;
}

function restartQuiz() {
  quizIndex = 0;
  quizCorrect = 0;
  quizAnswered = false;
  renderQuiz();
}

function navigate(view) {
  const titles = { home: "الرئيسية", elements: "موسوعة العناصر", lab: "المختبر الافتراضي", quiz: "تحدّي المعرفة", journal: "سجل الاكتشافات" };
  if (!titles[view]) return;
  $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
  $$(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  $("#pageTitle").textContent = titles[view];
  $("#sidebar").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  if (view === "elements") renderElements();
  if (view === "journal") { renderBadges(); renderActivities(); }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initialize() {
  state = loadProgress();
  $("#todayLabel").textContent = new Intl.DateTimeFormat("ar", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
  renderFeatured();
  renderProgress();
  renderElementOptions();
  renderReactionPreview();
  restartQuiz();

  $$(".nav-link").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
  $$("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
  document.addEventListener("click", event => {
    const card = event.target.closest("[data-element]");
    if (card) openElement(Number(card.dataset.element));
  });
  $("#elementSearch").addEventListener("input", renderElements);
  $$(".filter-chip").forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderElements();
  }));
  $("#dialogClose").addEventListener("click", () => $("#elementDialog").close());
  $("#elementDialog").addEventListener("click", event => { if (event.target === $("#elementDialog")) $("#elementDialog").close(); });
  $("#reactionSelect").addEventListener("change", renderReactionPreview);
  $$(".lab-mode").forEach(button => button.addEventListener("click", () => setLabMode(button.dataset.labMode)));
  $("#elementOne").addEventListener("change", renderReactionPreview);
  $("#elementTwo").addEventListener("change", renderReactionPreview);
  $("#runExperiment").addEventListener("click", runExperiment);
  $("#menuToggle").addEventListener("click", () => {
    const open = $("#sidebar").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  });
  $("#resetProgress").addEventListener("click", () => {
    if (!window.confirm("هل أنت متأكد من بدء رحلة جديدة؟ سيُحذف التقدّم المحفوظ على هذا الجهاز.")) return;
    state = defaultState();
    saveProgress();
    restartQuiz();
    renderProgress();
    showToast("بدأت رحلة جديدة. اكتشافك القادم ينتظرك!");
  });
  $("#aboutButton").addEventListener("click", () => $("#aboutDialog").showModal());
  $("#aboutClose").addEventListener("click", () => $("#aboutDialog").close());
  $("#aboutDone").addEventListener("click", () => $("#aboutDialog").close());
  $("#aboutDialog").addEventListener("click", event => { if (event.target === $("#aboutDialog")) $("#aboutDialog").close(); });
}

initialize();
