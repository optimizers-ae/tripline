import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  EN: {
    /* ---------------- NAVBAR ---------------- */
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    corporateServices: "Corporate Services",
    contact: "Contact & Consultation",
    homeDesc: "Welcome & Overview",
    aboutDesc: "Our Mission & Advisory Team",
    servicesDesc: "Government, Visa & Business Services",
    corporateDesc: "Business & Company Services",
    contactDesc: "Speak to Senior Advisors",

    /* ---------------- MOBILE CTAs ---------------- */
    cta1: "Talk to an Advisor",
    cta2: "48-Hour Bank Pre-Approval",
    cta3: "UAE Company Setup & Mortgages",

    /* ---------------- MENU DRAWER ---------------- */
    closeMenu: "Close Menu",
    openMenu: "Open Menu",
    address: "Office 2004, Office Tower, Grand Mall Rashidiya, Ajman, UAE",

    /* ---------------- SERVICES PAGE — HERO ---------------- */
    servicesBadge: "Our Services",
    servicesTitleLine1: "Individuals",
    servicesTitleHighlight: "Services",
    servicesSubtitle:
      "Trip Line Businessmen Services offers you all government services for individuals — from residence permits and family visas to tourist visas and document clearance.",

    /* ---------------- CORPORATE — HERO ---------------- */
    corporateBadge: "Corporate Services",
    corporateTitleLine1: "Business",
    corporateTitleHighlight: "Solutions",
    corporateSubtitle:
      "From trade license applications to MOHRE transactions and PRO services — Trip Line powers your business operations across the UAE.",

    /* ---------------- CORPORATE — SECTION HEADINGS ---------------- */
    forCorporates: "For Corporates",
    corporateHeading: "Business Solutions for",
    corporateHeadingHighlight: "Companies",
    corporateDesc:
      "End-to-end corporate services — from license applications to employee residency and PRO support, all under one roof.",

    corporateServicesHeading: "Corporate Services",
    corporateServicesSubheading:
      "All business transactions handled with expertise and speed.",

    /* ---------------- INDIVIDUALS — SECTION HEADINGS ---------------- */
    forIndividuals: "For Individuals",
    individualsHeading: "Services Tailored for",
    individualsHeadingHighlight: "You",
    individualsDesc:
      "From residence permits to tourist visas and document clearance — we handle everything so you can focus on what matters.",

    individualServicesHeading: "Individuals Services",
    individualServicesSubheading:
      "All official transactions handled with expertise and speed.",

    /* ---------------- TOURIST VISAS SECTION ---------------- */
    touristVisasBadge: "Tourist Visas — All Destinations",
    touristVisasTitle: "We Open the",
    touristVisasTitleHighlight: "Doors of the World",
    touristVisasSubtitle:
      "Fast & easy visa processing for 11+ countries. Your destination starts here.",
    applyVisaBtn: "Apply for a Visa",

    /* ---------------- BOTTOM CTA ---------------- */
    ctaConsultation: "Get a Free Consultation",
    learnMore: "Learn More",

    /* ---------------- INDIVIDUAL SERVICES (1–19) ---------------- */
    service1Title: "Family Residence Permit",
    service1Desc:
      "Foreign residents are allowed to bring their family members into the country, including the husband and any children under 25 or unmarried daughters.",
    service2Title: "Residence for Family of GCC Citizens",
    service2Desc:
      "Through this service, wives and kids of Gulf Cooperation Council nationals with foreign passports can receive a residence permit.",
    service3Title: "Property Owner Residence Permit",
    service3Desc:
      "A foreign national who owns real estate within the UAE may be granted a residence permit without the requirement of a sponsor or host within the State.",
    service4Title: "Residence Renewal for Family Members",
    service4Desc:
      "This service enables renewing a residence permit for a foreign national's family members under the same terms as when it was originally issued.",
    service5Title: "Multi-Entry Tourist Visa (5 Years)",
    service5Desc:
      "A 5-year multi-entry tourist visa without requiring a sponsor or host within the country, issued after paying the finance fee and guarantee.",
    service6Title: "Business Exploration Visit Visa",
    service6Desc:
      "A visit visa for researching and exploring business opportunities for single or multi entries, without a sponsor or host requirement within the UAE.",
    service7Title: "Visit Visa for Relative or Friend",
    service7Desc:
      "A visit visa issued for a relative or friend of a UAE resident, enabling them to visit the country.",
    service8Title: "Truck Drivers Multi-Entry Visit Visa",
    service8Desc:
      "A multi-entry visa granted to truck drivers from land ports or UAE embassies abroad for transporting goods into the country.",
    service9Title: "Visa Extension",
    service9Desc:
      "Service for extending the validity of an entry visa for a foreign national within the UAE.",
    service10Title: "Entry Permit / Visa Cancellation",
    service10Desc:
      "Cancellation of entry visas of all types, handled efficiently with government authorities.",
    service11Title: "Sponsor File Registration (Resident)",
    service11Desc:
      "This service allows opening a sponsor's file through which the resident can sponsor family members or assisting categories.",
    service12Title: "Status Amendment",
    service12Desc:
      "With the help of this service, the sponsored person's status within the country can be amended.",
    service13Title: "Departure Permit",
    service13Desc:
      "This service allows issuing a departure permit for a foreigner within the country to enable him to leave the country.",
    service14Title: "Exemption from Fines (Residence Law)",
    service14Desc:
      "Submit a request to waive or reduce the financial penalty assessed to those who violate the Foreigner's Entry and Residence Law.",
    service15Title: "Saudi Arabia Multiple Entry Visit Visa",
    service15Desc:
      "Multiple entry visit visa services for the Kingdom of Saudi Arabia for UAE residents and visitors.",
    service16Title: "Security Approval for Egypt Entry Visa",
    service16Desc:
      "Security approval processing for entry visas to the Arab Republic of Egypt.",
    service17Title: "UAE Visit Visa for GCC Residents",
    service17Desc:
      "UAE visit visa issued for residents of Gulf Cooperation Council countries.",
    service18Title: "Oman Visit Visa",
    service18Desc:
      "Oman visit visa issued for residents of the United Arab Emirates.",
    service19Title: "Recognition of Qualification from Outside UAE",
    service19Desc:
      "Attestation and recognition of academic and professional qualifications issued from outside the UAE.",

    /* ============================================================
       CORPORATE SERVICES (1–15) — From client's Corporate docx
       ============================================================ */
    corp1Title: "Trade License Applications, Renewals, Amendments & Cancellations",
    corp1Desc:
      "Complete handling of trade license lifecycle — new applications, renewals, amendments and cancellations with all UAE authorities.",

    corp2Title: "Company Establishment Card Applications, Renewals & Updates",
    corp2Desc:
      "Application, renewal and data updates for your company's establishment card with immigration authorities.",

    corp3Title: "MOHRE Transactions",
    corp3Desc:
      "All Ministry of Human Resources & Emiratisation (MOHRE) transactions handled end-to-end.",

    corp4Title: "Work Permit Applications, Renewals & Cancellations",
    corp4Desc:
      "End-to-end processing of work permits for your employees — issuance, renewal and cancellation.",

    corp5Title: "Job Offers & Employment Contract Typing",
    corp5Desc:
      "Professional typing of job offers and employment contracts, fully compliant with MOHRE standards.",

    corp6Title: "Employee Entry Permit & Residency Applications",
    corp6Desc:
      "Processing of employee entry permits and residency applications for your entire workforce.",

    corp7Title: "Employee Residency Renewals, Cancellations & Status Changes",
    corp7Desc:
      "Renewals, cancellations and status amendments for employee residencies.",

    corp8Title: "Emirates ID Application Typing",
    corp8Desc:
      "Professional typing services for Emirates ID applications for your employees.",

    corp9Title: "Medical Fitness Applications & Appointment Assistance",
    corp9Desc:
      "Medical fitness test applications with appointment booking assistance for your staff.",

    corp10Title: "Investor & Partner Residency Application Support",
    corp10Desc:
      "Complete support for investor and partner residency applications.",

    corp11Title: "Commercial Tenancy Contract Registration & Attestation",
    corp11Desc:
      "Registration and attestation support for your commercial tenancy contracts.",

    corp12Title: "Company Document Attestation",
    corp12Desc:
      "Coordination of company document attestation with relevant authorities.",

    corp13Title: "Company Details & Government Records Updates",
    corp13Desc:
      "Updates to company details and government records across all relevant departments.",

    corp14Title: "Corporate PRO Services & Transaction Follow-up",
    corp14Desc:
      "Dedicated PRO services for corporates — full transaction follow-up and coordination.",

    corp15Title: "Document Collection, Submission & Renewal Reminders",
    corp15Desc:
      "Collection and submission of documents, plus timely renewal reminders for your business.",
  },

  AR: {
    /* ---------------- NAVBAR ---------------- */
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "خدماتنا",
    corporateServices: "خدمات الشركات",
    contact: "اتصل بنا",
    homeDesc: "مرحباً ونظرة عامة",
    aboutDesc: "مهمتنا وفريق المستشارين",
    servicesDesc: "الخدمات الحكومية والتأشيرات والأعمال",
    corporateDesc: "خدمات الأعمال والشركات",
    contactDesc: "تحدث مع كبار المستشارين",

    /* ---------------- MOBILE CTAs ---------------- */
    cta1: "تحدث مع مستشار",
    cta2: "موافقة بنكية خلال 48 ساعة",
    cta3: "تأسيس شركة في الإمارات والرهن العقاري",

    /* ---------------- MENU DRAWER ---------------- */
    closeMenu: "إغلاق القائمة",
    openMenu: "فتح القائمة",
    address: "مكتب 2004، برج المكاتب، جراند مول الراشدية، عجمان، الإمارات",

    /* ---------------- SERVICES PAGE — HERO ---------------- */
    servicesBadge: "خدماتنا",
    servicesTitleLine1: "خدمات",
    servicesTitleHighlight: "الأفراد",
    servicesSubtitle:
      "تقدم لكم ترايب لاين لخدمات رجال الأعمال جميع الخدمات الحكومية للأفراد — من تصاريح الإقامة وتأشيرات الأسرة إلى التأشيرات السياحية وتخليص المستندات.",

    /* ---------------- CORPORATE — HERO ---------------- */
    corporateBadge: "خدمات الشركات",
    corporateTitleLine1: "حلول",
    corporateTitleHighlight: "الأعمال",
    corporateSubtitle:
      "من تقديم طلبات الرخص التجارية إلى معاملات وزارة الموارد البشرية وخدمات المندوب — ترايب لاين تدعم عمليات شركتك في جميع أنحاء الإمارات.",

    /* ---------------- CORPORATE — SECTION HEADINGS ---------------- */
    forCorporates: "للشركات",
    corporateHeading: "حلول الأعمال",
    corporateHeadingHighlight: "للشركات",
    corporateDesc:
      "خدمات متكاملة للشركات — من تقديم طلبات الرخص إلى إقامات الموظفين وخدمات المندوب، كل ذلك تحت سقف واحد.",

    corporateServicesHeading: "خدمات الشركات",
    corporateServicesSubheading:
      "جميع المعاملات التجارية تُنجز بخبرة وسرعة.",

    /* ---------------- INDIVIDUALS — SECTION HEADINGS ---------------- */
    forIndividuals: "للأفراد",
    individualsHeading: "خدمات مصممة",
    individualsHeadingHighlight: "لك",
    individualsDesc:
      "من تصاريح الإقامة إلى التأشيرات السياحية وتخليص المستندات — نتولى كل شيء لتتفرغ لما يهمك.",

    individualServicesHeading: "خدمات الأفراد",
    individualServicesSubheading:
      "جميع المعاملات الرسمية تُنجز بخبرة وسرعة.",

    /* ---------------- TOURIST VISAS SECTION ---------------- */
    touristVisasBadge: "تأشيرات سياحية — لجميع الوجهات",
    touristVisasTitle: "نفتح لك",
    touristVisasTitleHighlight: "أبواب العالم",
    touristVisasSubtitle:
      "معالجة سريعة وسهلة للتأشيرات لأكثر من 11 دولة. وجهتك تبدأ من هنا.",
    applyVisaBtn: "تقدم بطلب تأشيرة",

    /* ---------------- BOTTOM CTA ---------------- */
    ctaConsultation: "احصل على استشارة مجانية",
    learnMore: "اعرف المزيد",

    /* ---------------- INDIVIDUAL SERVICES (1–19) ---------------- */
    service1Title: "إصدار تصريح إقامة لأفراد أُسرة الأجنبي المُقيم",
    service1Desc:
      "يمكن للأجنبي المقيم بالدولة استقدام أفراد أسرته، شاملاً الزوج والأبناء من الذين لم يبلغوا (25) الخامسة والعشرين، أو البنات غير المتزوجات.",
    service2Title: "إصدار تصريح إقامة لأفراد أُسرة مواطني دول مجلس التعاون",
    service2Desc:
      "تُتيح هذه الخدمة إمكانية إصدار تصريح إقامة لزوجات وأبناء مواطني دول مجلس التعاون لدول الخليج العربي الذين يحملون جوازات سفر أجنبية.",
    service3Title: "إصدار تصريح إقامة مالك عقار",
    service3Desc:
      "يُمنح الأجنبي المالك لعقار داخل الدولة تصريح إقامة بلا ضامن/ مستضيف داخل الدولة.",
    service4Title: "تجديد تصريح إقامة لأفراد أُسرة الأجنبي المُقيم",
    service4Desc:
      "تُتيح هذه الخدمة إمكانية تجديد تصريح إقامة لأفراد أُسرة الأجنبي المُقيم في الدولة وفقاً لذات الشروط التي مُنح بموجبها.",
    service5Title: "إصدار تأشيرة سياحية لعدة سفرات (5 سنوات)",
    service5Desc:
      "يُمنح الأجنبي تأشيرة زيارة بغرض السياحة لعدة سفرات صالحة لمدة (5) خمس سنوات من تاريخ الإصدار من دون اشتراط ضامن/ مستضيف داخل الدولة، وذلك بعد استيفاء الرسم المالي والضمان المالي المقررين.",
    service6Title: "إصدار تأشيرة زيارة بغرض استكشاف فرص تأسيس الأعمال",
    service6Desc:
      "يُمنح الأجنبي تأشيرة دخول زيارة بغرض بحث واستكشاف فرص الأعمال لسفرة واحدة أو لعدة سفرات، وتكون التأشيرة بلا اشتراط ضامن/ مستضيف داخل الدولة.",
    service7Title: "إصدار تأشيرة زيارة قريب أو صديق للمقيم",
    service7Desc:
      "تُتيح هذه الخدمة إصدار تأشيرة زيارة لقريب أو صديق المقيم داخل الدولة.",
    service8Title: "إصدار تأشيرة زيارة لسائقي الشاحنات لعدة سفرات",
    service8Desc:
      "تمنح تأشيرة الدخول لعدة سفرات لسائقي الشاحنات من منافذ الدخول البرية أو من سفارات الدولة في الخارج؛ لنقل البضائع داخل الدولة.",
    service9Title: "تمديد تأشيرة الدخول",
    service9Desc: "خدمة تمديد صلاحية تأشيرة الدخول للأجنبي داخل الدولة.",
    service10Title: "إلغاء تأشيرة الدخول بكافة أنواعها",
    service10Desc:
      "إلغاء تأشيرات الدخول بجميع أنواعها، ويتم إنجازها بكفاءة مع الجهات الحكومية.",
    service11Title: "فتح ملف للمُقيم للكفالة العائلية أو الفئات المساعدة",
    service11Desc:
      "تتيح هذه الخدمة إمكانية فتح ملف كفيل يستطيع من خلاله كفالة أفراد الأسرة أو الفئات المساعدة.",
    service12Title: "تعديل وضع",
    service12Desc:
      "تتيح هذه الخدمة إمكانية الحصول على تعديل وضع المكفول داخل الدولة.",
    service13Title: "إصدار تصريح مغادرة",
    service13Desc:
      "تتيح هذه الخدمة إمكانية إصدار تصريح مغادرة للأجنبي داخل الدولة ليتمكن من مغادرة الدولة.",
    service14Title: "(الإسترحام) الإعفاء من الغرامة لمخالفي قانون إقامة الأجانب",
    service14Desc:
      "تتيح هذه الخدمة إمكانية تقديم طلب إعفاء/ تخفيض الغرامة المالية المترتبة على مخالفي قانون دخول وإقامة الأجانب.",
    service15Title: "التأشيرة المتعددة للمملكة العربية السعودية",
    service15Desc:
      "خدمة التأشيرة المتعددة للمملكة العربية السعودية لمقيمي وزوار دولة الإمارات.",
    service16Title: "الموافقة الأمنية لدخول جمهورية مصر العربية",
    service16Desc:
      "معالجة الموافقة الأمنية للحصول على تأشيرة دخول جمهورية مصر العربية.",
    service17Title: "تأشيرة الدخول لدولة الإمارات لمقيمي دول مجلس التعاون",
    service17Desc:
      "تأشيرة دخول إلى دولة الإمارات العربية المتحدة لمقيمي دول مجلس التعاون الخليجي.",
    service18Title: "تأشيرة الدخول لسلطنة عمان لمقيمي دولة الإمارات",
    service18Desc:
      "تأشيرة دخول إلى سلطنة عمان لمقيمي دولة الإمارات العربية المتحدة.",
    service19Title: "الاعتراف بالمؤهلات الصادرة من خارج الدولة",
    service19Desc:
      "توثيق واعتماد المؤهلات الأكاديمية والمهنية الصادرة من خارج دولة الإمارات.",

    /* ============================================================
       CORPORATE SERVICES (1–15) — Arabic
       ============================================================ */
    corp1Title: "تقديم طلبات إصدار الرخص التجارية وتجديدها وتعديلها وإلغائها",
    corp1Desc:
      "إدارة كاملة لدورة حياة الرخصة التجارية — طلبات جديدة، تجديد، تعديل وإلغاء مع جميع الجهات الإماراتية.",

    corp2Title: "تقديم طلبات إصدار بطاقات المنشأة وتجديدها وتحديث بياناتها",
    corp2Desc:
      "تقديم وتجديد وتحديث بيانات بطاقة المنشأة لدى إدارة الإقامة وشؤون الأجانب.",

    corp3Title: "معاملات العمل ووزارة الموارد البشرية والتوطين",
    corp3Desc:
      "جميع معاملات وزارة الموارد البشرية والتوطين (MOHRE) تُنجز بشكل كامل من البداية للنهاية.",

    corp4Title: "تقديم طلبات إصدار تصاريح العمل وتجديدها وإلغائها",
    corp4Desc:
      "معالجة كاملة لتصاريح العمل لموظفيكم — إصدار، تجديد وإلغاء.",

    corp5Title: "طباعة عروض العمل وعقود العمل",
    corp5Desc:
      "طباعة احترافية لعروض العمل وعقود العمل، متوافقة بالكامل مع معايير وزارة الموارد البشرية.",

    corp6Title: "تقديم طلبات أذونات دخول الموظفين وإقاماتهم",
    corp6Desc:
      "معالجة أذونات دخول الموظفين وطلبات الإقامة لجميع القوى العاملة لديكم.",

    corp7Title: "تجديد إقامات الموظفين وإلغاؤها وتعديل الوضع",
    corp7Desc:
      "تجديد وإلغاء وتعديل أوضاع إقامات الموظفين.",

    corp8Title: "طباعة طلبات الهوية الإماراتية",
    corp8Desc:
      "خدمات طباعة احترافية لطلبات الهوية الإماراتية لموظفيكم.",

    corp9Title: "تقديم طلبات فحص اللياقة الطبية والمساعدة في حجز المواعيد",
    corp9Desc:
      "تقديم طلبات فحص اللياقة الطبية مع المساعدة في حجز المواعيد لموظفيكم.",

    corp10Title: "المساعدة في تقديم طلبات إقامة المستثمرين والشركاء",
    corp10Desc:
      "دعم كامل لطلبات إقامة المستثمرين والشركاء.",

    corp11Title: "المساعدة في تسجيل عقود الإيجار التجارية وتصديقها",
    corp11Desc:
      "المساعدة في تسجيل وتصديق عقود الإيجار التجارية.",

    corp12Title: "تنسيق تصديق مستندات الشركات",
    corp12Desc:
      "تنسيق تصديق مستندات الشركة مع الجهات المختصة.",

    corp13Title: "تحديث بيانات الشركات وسجلاتها لدى الجهات الحكومية",
    corp13Desc:
      "تحديث بيانات الشركة والسجلات الحكومية لدى جميع الدوائر المختصة.",

    corp14Title: "خدمات مندوب الشركات وتخليص المعاملات ومتابعتها",
    corp14Desc:
      "خدمات مندوب مخصصة للشركات — متابعة كاملة للمعاملات والتنسيق.",

    corp15Title: "استلام المستندات وتقديمها والتذكير بمواعيد التجديد",
    corp15Desc:
      "استلام وتقديم المستندات، بالإضافة إلى تذكيرات التجديد في الوقت المناسب لأعمالك.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("tripline-lang") || "EN";
  });

  useEffect(() => {
    localStorage.setItem("tripline-lang", lang);
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "EN" ? "AR" : "EN"));

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};