/* DisTechSol — i18n translations */
const I18N = {
  EN: {
    nav_home: "Home",
    nav_about: "About",
    nav_products: "Products",
    nav_solutions: "Solutions",
    nav_vendors: "Vendors",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_headline: "Secure. Automate. Innovate.",
    hero_lede: "DisTechSol is the system integrator behind biometric access, AI surveillance, and enterprise networks for Azerbaijan's most demanding institutions — from SOCAR to the Supreme Court.",
    hero_cta_primary: "Explore solutions",
    hero_cta_secondary: "Talk to an engineer",
    contact_title: "Talk to an engineer.",
    contact_lede: "Tell us about your facility, your headcount, and what you're trying to protect or integrate. We reply within one business day.",
    contact_direct: "Direct contact",
    contact_phone_lbl: "Phone",
    contact_email_lbl: "Email",
    contact_office_lbl: "Office",
    contact_hours_lbl: "Hours",
    contact_hours_val: "Mo–Fr · 09:00–18:00 AZT",
    contact_reply: "We reply within one business day.",
  },
  RU: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_products: "Продукты",
    nav_solutions: "Решения",
    nav_vendors: "Вендоры",
    nav_projects: "Проекты",
    nav_contact: "Контакты",
    hero_headline: "Безопасность. Автоматизация. Инновации.",
    hero_lede: "DisTechSol — системный интегратор в области биометрического доступа, ИИ-видеонаблюдения и корпоративных сетей для крупнейших организаций Азербайджана — от SOCAR до Верховного суда.",
    hero_cta_primary: "Наши решения",
    hero_cta_secondary: "Связаться с инженером",
    contact_title: "Свяжитесь с инженером.",
    contact_lede: "Расскажите о вашем объекте, количестве сотрудников и задаче. Мы ответим в течение одного рабочего дня.",
    contact_direct: "Контактная информация",
    contact_phone_lbl: "Телефон",
    contact_email_lbl: "Эл. почта",
    contact_office_lbl: "Офис",
    contact_hours_lbl: "Режим работы",
    contact_hours_val: "Пн–Пт · 09:00–18:00 AZT",
    contact_reply: "Отвечаем в течение одного рабочего дня.",
  },
  AZ: {
    nav_home: "Ana səhifə",
    nav_about: "Haqqımızda",
    nav_products: "Məhsullar",
    nav_solutions: "Həllər",
    nav_vendors: "Tərəfdaşlar",
    nav_projects: "Layihələr",
    nav_contact: "Əlaqə",
    hero_headline: "Təhlükəsizlik. Avtomatlaşdırma. İnnovasiya.",
    hero_lede: "DisTechSol — SOCAR-dan Konstitusiya Məhkəməsinə qədər Azərbaycanın ən böyük qurumlarında biometrik giriş, AI videomüşahidə və korporativ şəbəkə sistemlərinin inteqratoru.",
    hero_cta_primary: "Həlləri kəşf edin",
    hero_cta_secondary: "Mühəndislə danışın",
    contact_title: "Mühəndislə əlaqə saxlayın.",
    contact_lede: "Obyektiniz, işçi sayınız və inteqrasiya etmək istədiyiniz sistem haqqında bizə məlumat verin. Bir iş günü ərzində cavab veririk.",
    contact_direct: "Birbaşa əlaqə",
    contact_phone_lbl: "Telefon",
    contact_email_lbl: "E-poçt",
    contact_office_lbl: "Ofis",
    contact_hours_lbl: "İş saatları",
    contact_hours_val: "B.e–Cümə · 09:00–18:00 AZT",
    contact_reply: "Bir iş günü ərzində cavab veririk.",
  }
};

// React context for language
const LangContext = React.createContext({ lang: "EN", t: (k) => I18N.EN[k] || k, setLang: () => {} });

const useLang = () => React.useContext(LangContext);

window.I18N = I18N;
window.LangContext = LangContext;
window.useLang = useLang;
