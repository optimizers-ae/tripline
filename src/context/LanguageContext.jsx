import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  EN: {
    /* ---------------- NAVBAR ---------------- */
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    corporateServices: "Corporate Services",
    individualsServices: "Individuals Services",
    contact: "Contact & Consultation",
    homeDesc: "Welcome & Overview",
    aboutDesc: "Our Mission & Advisory Team",
    servicesDesc: "Government, Visa & Business Services",
    corporateDesc: "Business & Company Services",
    corporateNavDesc: "Trade Licenses, MOHRE & PRO Services",
    individualsNavDesc: "Residency, Family & Tourist Visas",
    contactDesc: "Speak to Senior Advisors",
    clickForMore: "Click for more",
    mainServicesCorporate: "Main Corporate Services",
    mainServicesIndividuals: "Main Individuals Services",

    /* ---------------- GOV ENTITIES SLIDER ---------------- */
    govEntitiesBadge: "Government Entities & Official Channels",
    govEntitiesTitle: "Authorized Government Liaison & Processing",
    govEntitiesSubtitle: "Direct coordination with federal ministries, economic departments, and regulatory authorities across the UAE.",

    /* ---------------- NAVBAR POPUP SERVICES ---------------- */
    navCorp1: "Trade License Applications & Renewals",
    navCorp1Desc: "New licenses, renewals, amendments & cancellations",
    navCorp2: "Establishment Card Applications",
    navCorp2Desc: "New cards, renewals & immigration data updates",
    navCorp3: "MOHRE & Labour Transactions",
    navCorp3Desc: "Work quotas, permits & ministry clearances",
    navCorp4: "Work Permits Issuance & Renewal",
    navCorp4Desc: "Employee quotas, applications & cancellations",
    navCorp6: "Employee Entry Permit & Residency",
    navCorp6Desc: "Complete visa processing for your workforce",
    navCorp14: "Corporate PRO Services & Follow-up",
    navCorp14Desc: "Dedicated government liaison & transaction tracking",

    navInd1: "Family Residence Permit",
    navInd1Desc: "Sponsor spouse, children & family members",
    navInd3: "Property Owner Residence Permit",
    navInd3Desc: "UAE residency for real estate owners without sponsor",
    navInd5: "5-Year Multi-Entry Tourist Visa",
    navInd5Desc: "Self-sponsored multi-entry visit visa",
    navInd12: "Status Amendment (In-Country)",
    navInd12Desc: "Amend resident or visitor status inside the UAE",
    navInd14: "Exemption from Fines (Residence Law)",
    navInd14Desc: "Waiver or reduction of immigration penalty fees",
    navIndTour: "Tourist Visas (11+ Destinations)",
    navIndTourDesc: "Schengen, Saudi, China, Morocco, Oman & more",

    /* ---------------- MOBILE CTAs ---------------- */
    cta1: "Talk to an Advisor",
    cta2: "Fast Government Clearances",
    cta3: "UAE Company Setup & Visas",

    /* ---------------- MENU DRAWER ---------------- */
    closeMenu: "Close Menu",
    openMenu: "Open Menu",
    address: "Grand Mall Office Tower - Office No. 2004, Sheikh Khalifa Bin Zayed St, Al Rashidiya 3, Ajman, UAE",

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

    /* ---------------- TRUSTED PARTNERS SECTION ---------------- */
    trustedPartnersBadge: "Trusted Partners",
    trustedPartnersTitlePre: "Building Success Through ",
    trustedPartnersTitleHighlight: "Trusted Partnerships.",
    trustedPartnersSubtitle:
      "We collaborate with reliable institutions and government authorities to deliver complete business solutions for entrepreneurs and companies in the UAE.",
    tabAllPartners: "All Partners",
    tabFreezones: "Free Zones",
    tabMainland: "Mainland Authorities",
    tabGovt: "Government Centers",

    /* ---------------- INDIVIDUAL SERVICES (1–19) ---------------- */
    service1Title: "Issuance of a Residence Permit for Foreigner Family Members",
    service1Desc:
      "Foreign residents are allowed to bring their family members into the country, including the husband and any children under 25 or unmarried daughters.",
    service2Title: "Issuance of a Residence for Family Members of GCC Citizens",
    service2Desc:
      "Through this service, wives and kids of Gulf Cooperation Council nationals with foreign passports can receive a residence permit.",
    service3Title: "Issuance of a Residence Permit for the Owner of a Property",
    service3Desc:
      "A foreign national who owns real estate within UAE may be granted a residence permit without the requirement of a sponsor/host within the State.",
    service4Title: "Residence Renewal for Family Members of Foreign Residents",
    service4Desc:
      "This service enables the possibility of renewing a residence permit for a foreign national's family members under the same terms as when it was originally issued.",
    service5Title: "Issuing a Multi-Entry Tourist Visa (5 Years)",
    service5Desc:
      "After paying the finance fee and guarantee, a foreigner is given a visitor visa for tourism purposes for several trips, valid for (5) five years from the date of issue, without needing a guarantor or host within the country.",
    service6Title: "Issuing a Visit Visa for the Purpose of Exploring Business Opportunities",
    service6Desc:
      "The foreigner is granted a visit visa for the purpose of researching and exploring business opportunities for a single or multi entries. The visa is without sponsor / host requirement within UAE.",
    service7Title: "Issuance of a Visit Visa for a Relative or Friend of a Resident",
    service7Desc:
      "A visit visa issued for a relative or friend of a UAE resident, enabling them to visit the country.",
    service8Title: "Issuing a Visit Visa for Truck Drivers for Multiple Entries",
    service8Desc:
      "A multi-entry visa is granted to truck drivers from land ports or from the UAE embassies abroad for truck drivers to transport goods to UAE.",
    service9Title: "Visa Extension",
    service9Desc:
      "Service for extending the validity of an entry visa for a foreign national within the UAE.",
    service10Title: "Entry Permit / Visa Cancellation",
    service10Desc:
      "Cancellation of entry visas of all types, handled efficiently with government authorities.",
    service11Title: "Sponsor File Registration (Resident)",
    service11Desc:
      "This service allows opening a sponsor's file through which he can sponsor family members or assisting categories.",
    service12Title: "Status Amendment",
    service12Desc:
      "With the help of this service, the sponsored person's status within the country could be amended.",
    service13Title: "Issuance of a Departure Permit",
    service13Desc:
      "This service allows the possibility of issuing a departure permit for a foreigner within the country to enable him to leave the country.",
    service14Title: "Exemption from Fines for Violators of Residence Law",
    service14Desc:
      "Through this service, one may submit a request to waive or reduce the financial penalty assessed to those who violate the Foreigner's Entry and Residence Law.",
    service15Title: "Saudi Arabia Multiple Entry Visit Visa",
    service15Desc:
      "Multiple entry visit visa services for the Kingdom of Saudi Arabia for UAE residents and visitors.",
    service16Title: "Security Approval for Entry Visa of Egypt",
    service16Desc:
      "Security approval processing for entry visas to the Arab Republic of Egypt.",
    service17Title: "UAE Visit Visa for GCC Foreign Residents",
    service17Desc:
      "UAE visit visa issued for residents of Gulf Cooperation Council countries.",
    service18Title: "Oman Visit Visa",
    service18Desc:
      "Oman visit visa issued for residents of the United Arab Emirates.",
    service19Title: "Recognition of Qualification from Outside the UAE",
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

    corp11Title: "Commercial Tenancy Contract Registration & Attestation Support",
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

    /* ---------------- HERO SECTION (HOME) ---------------- */
    heroBadge: "Authorized UAE Businessmen & Government Services",
    heroTitlePre: "Complete Business Setup & ",
    heroTitleHighlight: "Government Solutions.",
    heroDesc:
      "From trade license applications and company formation to residency visas and corporate PRO services across the UAE.",
    heroBtnExplore: "Corporate Services",
    heroBtnIndividuals: "Individuals Services",
    heroBtnContact: "Contact Advisors",

    /* ---------------- ABOUT SECTION (HOME) ---------------- */
    homeAboutBadge: "About Us & Our Expertise",
    homeAboutTitlePre: "Comprehensive Solutions & Empowered by ",
    homeAboutTitleHighlight: "Government Services.",
    homeAboutDesc:
      "Tripline Businessmen Services provides an all-inclusive suite of governmental, corporate, and visa solutions. We bridge the gap between premium service delivery and administrative excellence.",
    homeVisualVisa: "Visas & Residency",
    homeVisualCorporate: "Corporate Licensing",
    homeVisualGov: "Government Relations",
    homeSvc1Tag: "LABOR & IMMIGRATION",
    homeSvc1Title: "Employment Contracts",
    homeSvc1Desc:
      "Issuance & cancellation of employment contracts tailored to UAE labor laws.",
    homeSvc2Tag: "LABOR & IMMIGRATION",
    homeSvc2Title: "Labor Cards",
    homeSvc2Desc:
      "Renewal & modification of labor cards ensuring full compliance with MOHRE.",
    homeSvc3Tag: "CORPORATE SERVICES",
    homeSvc3Title: "Commercial Licenses",
    homeSvc3Desc:
      "Issuance & renewal of commercial licenses for mainland and free zones.",
    homeSvc4Tag: "VISA & RESIDENCY",
    homeSvc4Title: "Medical & Emirates ID",
    homeSvc4Desc:
      "Assistance with medical fitness tests & Emirates ID services for new and renewing residents.",
    homeSvc5Tag: "VISA & RESIDENCY",
    homeSvc5Title: "Entry Visas",
    homeSvc5Desc:
      "Issuance & cancellation of entry visas for business, visit, and tourism.",
    homeSvc6Tag: "VISA & RESIDENCY",
    homeSvc6Title: "Family & Partner Visas",
    homeSvc6Desc:
      "Family & investor partner visa services for seamless relocation and sponsorship.",
    homeSvc7Tag: "LEGAL SERVICES",
    homeSvc7Title: "Document Attestation",
    homeSvc7Desc:
      "Attestation of official documents & contracts from relevant ministries and embassies.",
    homeSvc8Tag: "GOVERNMENT RELATIONS",
    homeSvc8Title: "Embassy Services",
    homeSvc8Desc:
      "Embassy & consulate liaison services including Sudanese and other nationalities.",
    homeSvc9Tag: "GOVERNMENT RELATIONS",
    homeSvc9Title: "Fines & Exemption",
    homeSvc9Desc:
      "Fine reduction, waiver requests & status corrections for businesses and individuals.",

    /* ---------------- STATS & TESTIMONIAL ---------------- */
    statQuote:
      "Their guidance made the entire business setup process clear, fast, and stress-free. From consultation to execution, every step was handled professionally.”",
    statBadge: "Client Testimonial",
    stat1Label: "businesses successfully supported ",
    stat1Highlight: "across the UAE",
    stat2Label: "years of combined business ",
    stat2Highlight: "consultancy experience",
    stat3Label: "client satisfaction across ",
    stat3Highlight: "completed cases",

    /* ---------------- ACCENT BANNER ---------------- */
    accentBadge: "ENGINEERED FOR BUSINESS SUCCESS",
    accentLine1: "EVERY BUSINESS",
    accentLine2: "DESERVES THE",
    accentLine3: "RIGHT GUIDANCE",
    accentLine4: "TO GROW.",

    /* ---------------- WHY CHOOSE US ---------------- */
    whyBadge: "The Consultancy Difference",
    whyHeadingPre: "Why Businesses ",
    whyHeadingHighlight: "Choose Us.",
    whySubtitle:
      "We don't just provide services. We understand your goals, create the right strategy, and guide you through every step of building a successful business in the UAE.",
    whyCard1Title: "Expert Company Formation",
    whyCard1Strategy: "Strategy First",
    whyCard1Desc:
      "From Mainland DED licensing to Free Zone and Offshore setups, we tailor the legal structure and jurisdiction to match your business goals, minimizing costs and maximizing growth potential.",
    whyCard1Tag1: "Mainland & Freezone Setup",
    whyCard1Tag2: "Offshore Company Formation",
    whyCard2Title: "Authorized Government Liaison",
    whyCard2Desc:
      "Direct coordination with federal ministries, economic departments (DED), GDRFA, and MOHRE. We bypass bureaucratic delays to secure fast approvals and official clearances for your business.",
    whyCard2Tag: "Direct Federal & Local Liaison",
    whyCard3Title: "Transparent Pricing & Processes",
    whyCard3Desc:
      "We believe in complete honesty. You get upfront pricing, realistic timelines for approvals, and a clear breakdown of fees without any hidden retainers.",
    whyCard3Tag: "100% Guaranteed Fee Clarity",
    whyCard4Title: "Comprehensive PRO & Golden Visa Services",
    whyCard4Badge: "Ongoing Support",
    whyCard4Desc:
      "Our support doesn't end with a trade license. We handle issuing and renewing all employee visas, tracking labor contracts, and residency applications.\nWe manage corporate tax registration and ongoing government liaison for your establishment.\nWe also submit and track UAE Golden Visa applications, nomination letters, approvals, and complete residency issuance procedures.",
    whyCard4Tag1: "Golden Visa Applications",
    whyCard4Tag2: "Corporate Tax Registration",
    whyCard4Tag3: "Employee Visas & Contracts",

    /* ---------------- CONTACT CTA ---------------- */
    contactCtaDeskBadge: "Tripline Businessmen Services",
    contactCtaHeadingPre: "Ready to start your company or ",
    contactCtaHeadingHighlight: "process your transactions?",
    contactCtaSubtitle:
      "From mainland & free zone trade licenses to investor visas, Golden Visa processing, employee residency, and comprehensive PRO & tax services — our authorized team handles all your government transactions with speed and precision.",
    contactCtaBtnAdvisor: "Start Your Application",
    contactCtaBtnWhatsApp: "WhatsApp Us",
    contactCtaTrust1: "Authorized Government Liaison",
    contactCtaTrust2: "Fast-Track Licenses & Visas",
    contactCtaTrust3: "100% Fee & Step Transparency",
    whatsappFloatingTooltip: "Need help? Chat with us",
    whatsappFloatingStatus: "Online • Instant Support",
    whatsappAriaLabel: "Chat with Tripline on WhatsApp",
    whatsappPreFill: "Hello Tripline Businessmen Services, I would like to inquire about your services.",

    /* ---------------- FOOTER ---------------- */
    footerDesc:
      "Helping entrepreneurs and businesses establish, manage, and grow in the UAE with trusted consultancy and complete business solutions.",
    footerSupportStatus: "Business Support Available",
    footerQuickLinks: "Quick Links",
    footerServices: "Services",
    footerContactUs: "Contact Us",
    footerConsultancyTag: "UAE Business Consultancy",
    footerBookConsultation: "Book Consultation",
    footerCopyright: "© 2026 Tripline Businessmen Services. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerTelLabel: "Tel:",
    footerMobLabel: "Mob:",
    footerWhatsAppLabel: "WhatsApp:",
    contactLabelWhatsApp: "WhatsApp",

    /* ---------------- ABOUT PAGE ---------------- */
    aboutPageBadge: "About Trip Line",
    aboutPageHeadingPre: "Your Trusted Partner in ",
    aboutPageHeadingHighlight: "UAE Services",
    aboutPageDesc:
      "At Trip Line Businessmen Services, we are committed to providing fast and reliable solutions for all residency and business-related services. Our goal is to simplify all government transactions and visa services.",
    aboutPageP1Bold: "seamless and hassle-free experience",
    aboutPageP1Pre: "To give our clients a ",
    aboutPageP1Post:
      ", our team works with high expertise and professionalism to ensure your transactions are completed accurately and quickly.",
    aboutPageP2Pre: "Because ",
    aboutPageP2Highlight: "your comfort is our priority",
    aboutPageP2Post: ".",
    aboutTagUaeLicensed: "UAE Licensed",
    aboutTagTrustedAdvisors: "Trusted Advisors",
    aboutStatHappyClients: "Happy Clients",
    aboutStatFastProcessing: "Fast Processing",
    aboutStatSuccessRate: "Success Rate",
    aboutStatExperience: "Years Experience",
    aboutFeat1Title: "Customized Service",
    aboutFeat1Desc: "Tailored solutions for your specific residency & business needs.",
    aboutFeat2Title: "Professional Team",
    aboutFeat2Desc: "Expert advisors with deep knowledge of UAE regulations.",
    aboutFeat3Title: "Fast Execution",
    aboutFeat3Desc: "Quick turnaround on all government transactions.",
    aboutFeat4Title: "Reliability",
    aboutFeat4Desc: "Trusted by hundreds of satisfied clients across the UAE.",

    /* ---------------- CONTACT PAGE ---------------- */
    contactPageBadge: "Contact & Consultation",
    contactPageHeadingPre: "Let's Talk About ",
    contactPageHeadingHighlight: "Your Needs",
    contactPageDesc:
      "Speak to a senior advisor today and get expert guidance on visas, business setup, or any UAE government service.",
    contactLabelTel: "Telephone (Tel)",
    contactLabelMob: "Mobile (Mob)",
    contactLabelEmail: "Email Us",
    contactLabelVisit: "Visit Us",
    contactLabelHours: "Working Hours",
    contactHoursValue: "Sat – Thu, 9AM – 7PM",
    contactChatWhatsApp: "Chat on WhatsApp",
    contactInstantReply: "Instant Reply →",
    contactFormTitle: "Send Us a Message",
    contactFormDesc: "Fill out the form and we'll get back to you within 24 hours.",
    contactFormFirstName: "First Name",
    contactFormFirstNamePh: "Enter first name",
    contactFormLastName: "Last Name",
    contactFormLastNamePh: "Enter last name",
    contactFormFullName: "1st & 2nd Name",
    contactFormFullNamePh: "First and last name",
    contactFormNationality: "Nationality",
    contactFormNationalityPh: "Your nationality",
    contactFormEmail: "Email",
    contactFormEmailPh: "you@example.com",
    contactFormPhone: "Mobile Number",
    contactFormPhonePh: "+971 54444 2029",
    contactFormBtnSend: "Send Message",
    contactFormBtnSent: "✓ Message Sent!",
    contactVisitOfficeTitle: "Visit Our Office",
    contactOfficeRoom: "Office No. 2004",
    contactOfficeTower: "Grand Mall Office Tower",
    contactOfficeStreet: "Sheikh Khalifa Bin Zayed St",
    contactOfficeArea: "Al Rashidiya 3, Ajman — UAE",
    contactGetDirections: "Get Directions",

    /* ---------------- ROUTER / 404 ---------------- */
    notFoundHeading: "404",
    notFoundDesc: "Page not found",
    backToHome: "Back to Home",

    /* ---------------- TECH STACK / PARTNERS ---------------- */
    trustedPartnersBadge: "TRUSTED PARTNERS",
    trustedPartnersTitlePre: "Building Success Through ",
    trustedPartnersTitleHighlight: "Trusted Partnerships.",
    trustedPartnersSubtitle:
      "We collaborate with reliable institutions and government authorities to deliver complete business solutions for entrepreneurs and companies in the UAE.",
    tabAllPartners: "All Partners",
    tabFreezones: "Free Zones",
    tabMainland: "Mainland Authorities",
    tabGovt: "Government Centers",
  },

  AR: {
    /* ---------------- NAVBAR ---------------- */
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "خدماتنا",
    corporateServices: "خدمات الشركات",
    individualsServices: "خدمات الأفراد",
    contact: "اتصل بنا",
    homeDesc: "مرحباً ونظرة عامة",
    aboutDesc: "مهمتنا وفريق المستشارين",
    servicesDesc: "الخدمات الحكومية والتأشيرات والأعمال",
    corporateDesc: "خدمات الأعمال والشركات",
    corporateNavDesc: "الرخص التجارية ومعاملات العمل وتخليص المعاملات",
    individualsNavDesc: "الإقامات وتأشيرات الأسرة وتعديل الوضع",
    contactDesc: "تحدث مع كبار المستشارين",
    clickForMore: "اضغط للمزيد",
    mainServicesCorporate: "الخدمات الرئيسية للشركات",
    mainServicesIndividuals: "الخدمات الرئيسية للأفراد",

    /* ---------------- GOV ENTITIES SLIDER ---------------- */
    govEntitiesBadge: "الدوائر والجهات الحكومية الرسمية",
    govEntitiesTitle: "تخليص وإنجاز مباشر لدى كافة الجهات الحكومية",
    govEntitiesSubtitle: "تنسيق واعتماد مباشر مع الوزارات الاتحادية والدوائر الاقتصادية والمناطق الحرة في دولة الإمارات.",

    /* ---------------- NAVBAR POPUP SERVICES ---------------- */
    navCorp1: "إصدار وتجديد الرخص التجارية",
    navCorp1Desc: "طلبات جديدة، تجديد، تعديل وإلغاء الرخص",
    navCorp2: "إصدار وتحديث بطاقة المنشأة",
    navCorp2Desc: "معالجة وتجديد وتحديث بيانات المنشأة",
    navCorp3: "معاملات وزارة الموارد البشرية (MOHRE)",
    navCorp3Desc: "كوتة العمل وتصاريح وإجراءات الوزارة",
    navCorp4: "إصدار وتجديد تصاريح العمل",
    navCorp4Desc: "معالجة تصاريح عمل الموظفين وإلغائها",
    navCorp6: "أذونات دخول وإقامات الموظفين",
    navCorp6Desc: "تخليص تأشيرات وإقامات القوى العاملة",
    navCorp14: "خدمات مندوب الشركات والمتابعة",
    navCorp14Desc: "مندوب مخصص لمتابعة المعاملات الحكومية",

    navInd1: "إصدار تصريح إقامة لأفراد الأسرة",
    navInd1Desc: "استقدام الزوجة والأبناء وكفالة العائلة",
    navInd3: "إقامة مالك عقار",
    navInd3Desc: "إقامة للمستثمرين العقاريين دون كفيل",
    navInd5: "تأشيرة سياحية لعدة سفرات (5 سنوات)",
    navInd5Desc: "تأشيرة سياحية متعددة دون اشتراط ضامن",
    navInd12: "تعديل الوضع القانوني",
    navInd12Desc: "تعديل وضع المكفول والزائر داخل الدولة",
    navInd14: "الإعفاء وتخفيض الغرامات (الإسترحام)",
    navInd14Desc: "إعفاء وتخفيض غرامات قانون الإقامة",
    navIndTour: "تأشيرات سياحية (أكثر من 11 دولة)",
    navIndTourDesc: "شنغن، السعودية، الصين، المغرب، عُمان وغيرها",

    /* ---------------- MOBILE CTAs ---------------- */
    cta1: "تحدث مع مستشار",
    cta2: "تخليص حكومي سريع ومباشر",
    cta3: "تأسيس الشركات والتأشيرات",

    /* ---------------- MENU DRAWER ---------------- */
    closeMenu: "إغلاق القائمة",
    openMenu: "فتح القائمة",
    address: "برج المكاتب، جراند مول - مكتب 2004، شارع الشيخ خليفة بن زايد، الراشدية 3، عجمان، الإمارات",

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

    /* ---------------- TRUSTED PARTNERS SECTION ---------------- */
    trustedPartnersBadge: "شركاؤنا الموثوقون",
    trustedPartnersTitlePre: "نبني النجاح من خلال ",
    trustedPartnersTitleHighlight: "شراكات موثوقة.",
    trustedPartnersSubtitle:
      "نتعاون مع المؤسسات الموثوقة والجهات الحكومية لتقديم حلول أعمال متكاملة لرواد الأعمال والشركات في دولة الإمارات.",
    tabAllPartners: "جميع الشركاء",
    tabFreezones: "المناطق الحرة",
    tabMainland: "الجهات المحلية والتراخيص",
    tabGovt: "المراكز والجهات الحكومية",

    /* ---------------- INDIVIDUAL SERVICES (1–19) ---------------- */
    service1Title: "إصدار تصريح إقامة لأفراد أُسرة الأجنبي المُقيم في الدولة",
    service1Desc:
      "يمكن للأجنبي المقيم بالدولة استقدام أفراد أسرته، شاملاً الزوج والأبناء من الذين لم يبلغوا (25) الخامسة والعشرين، أو البنات غير المتزوجات.",
    service2Title: "إصدار تصريح إقامة لأفراد أُسرة مواطني دول مجلس التعاون الخليجي",
    service2Desc:
      "تُتيح هذه الخدمة إمكانية إصدار تصريح إقامة لزوجات وأبناء مواطني دول مجلس التعاون لدول الخليج العربي الذين يحملون جوازات سفر أجنبية.",
    service3Title: "إصدار تصريح إقامة مالك عقار",
    service3Desc:
      "يُمنح الأجنبي المالك لعقار داخل الدولة تصريح إقامة بلا ضامن/ مستضيف داخل الدولة.",
    service4Title: "تجديد تصريح إقامة لأفراد أُسرة الأجنبي المُقيم في الدولة",
    service4Desc:
      "تُتيح هذه الخدمة إمكانية تجديد تصريح إقامة لأفراد أُسرة الأجنبي المُقيم في الدولة وفقاً لذات الشروط التي مُنح بموجبها.",
    service5Title: "إصدار تأشيرة سياحية لعدة سفرات (5 سنوات)",
    service5Desc:
      "يُمنح الأجنبي تأشيرة زيارة بغرض السياحة لعدة سفرات صالحة لمدة (5) خمس سنوات من تاريخ الإصدار من دون اشتراط ضامن/ مستضيف داخل الدولة، وذلك بعد استيفاء الرسم المالي والضمان المالي المقررين.",
    service6Title: "إصدار تأشيرة زيارة بغرض استكشاف فرص تأسيس الأعمال",
    service6Desc:
      "يُمنح الأجنبي تأشيرة دخول زيارة بغرض بحث واستكشاف فرص الأعمال لسفرة واحدة أو لعدة سفرات، وتكون التأشيرة بلا اشتراط ضامن/ مستضيف داخل الدولة.",
    service7Title: "إصدار تأشيرة زيارة قريب وصديق للمقيم",
    service7Desc:
      "تُتيح هذه الخدمة إصدار تأشيرة زيارة لقريب أو صديق المقيم داخل الدولة.",
    service8Title: "إصدار تأشيرة زيارة لسائقي الشاحنات لعدة سفرات",
    service8Desc:
      "تمنح تأشيرة الدخول لعدة سفرات لسائقي الشاحنات من منافذ الدخول البرية أو من سفارات الدولة في الخارج لسائقي الشاحنات؛ لنقل البضائع داخل الدولة.",
    service9Title: "تمديد تأشيرة الدخول",
    service9Desc: "خدمة تمديد صلاحية تأشيرة الدخول للأجنبي داخل الدولة.",
    service10Title: "إلغاء تأشيرة الدخول بكافة أنواعها",
    service10Desc:
      "إلغاء تأشيرات الدخول بجميع أنواعها، ويتم إنجازها بكفاءة مع الجهات الحكومية.",
    service11Title: "فتح ملف للمُقيم للكفالة العائلية او الفئات المساعدة",
    service11Desc:
      "تتيح هذه الخدمة إمكانية فتح ملف كفيل يستطيع من خلاله كفالة افراد الاسرة او الفئات المساعدة.",
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
    service17Title: "تأشيرة الدخول لدولة الإمارات العربية المتحدة لمقيمي دول مجلس التعاون",
    service17Desc:
      "تأشيرة دخول إلى دولة الإمارات العربية المتحدة لمقيمي دول مجلس التعاون الخليجي.",
    service18Title: "تأشيرة الدخول لسلطنة عمان لمقيمي دولة الإمارات العربية المتحدة",
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

    /* ---------------- HERO SECTION (HOME) ---------------- */
    heroBadge: "خدمات رجال الأعمال وتخليص المعاملات الحكومية المعتمدة",
    heroTitlePre: "تأسيس متكامل للشركات و",
    heroTitleHighlight: "حلول حكومية شاملة.",
    heroDesc:
      "من تأسيس الشركات وإصدار الرخص التجارية إلى تأشيرات الإقامة وخدمات المندوب وتخليص المعاملات في كافة إمارات الدولة.",
    heroBtnExplore: "خدمات الشركات",
    heroBtnIndividuals: "خدمات الأفراد",
    heroBtnContact: "تواصل مع المستشارين",

    /* ---------------- ABOUT SECTION (HOME) ---------------- */
    homeAboutBadge: "من نحن وخبراتنا",
    homeAboutTitlePre: "حلول شاملة ومتكاملة مدعومة بـ ",
    homeAboutTitleHighlight: "الخدمات الحكومية.",
    homeAboutDesc:
      "تقدم ترايب لاين لخدمات رجال الأعمال باقة متكاملة من الحلول الحكومية والمؤسسية وخدمات التأشيرات. نجمع بين أعلى معايير تقديم الخدمة والتميز الإداري.",
    homeVisualVisa: "التأشيرات والإقامة",
    homeVisualCorporate: "التراخيص التجارية",
    homeVisualGov: "العلاقات الحكومية",
    homeSvc1Tag: "العمل والإقامة",
    homeSvc1Title: "عقود العمل",
    homeSvc1Desc:
      "إصدار وإلغاء عقود العمل وفقاً لقوانين وأنظمة العمل بدولة الإمارات.",
    homeSvc2Tag: "العمل والإقامة",
    homeSvc2Title: "بطاقات العمل",
    homeSvc2Desc:
      "تجديد وتعديل بطاقات العمل مع ضمان الامتثال الكامل لوزارة الموارد البشرية.",
    homeSvc3Tag: "خدمات الشركات",
    homeSvc3Title: "الرخص التجارية",
    homeSvc3Desc:
      "إصدار وتجديد الرخص التجارية في البر الرئيسي والمناطق الحرة.",
    homeSvc4Tag: "التأشيرات والإقامة",
    homeSvc4Title: "الفحص الطبي والهوية الإماراتية",
    homeSvc4Desc:
      "حجز مواعيد الفحص الطبي وطباعة الهوية الإماراتية للمقيمين الجدد والتجديد.",
    homeSvc5Tag: "التأشيرات والإقامة",
    homeSvc5Title: "تأشيرات الدخول",
    homeSvc5Desc:
      "إصدار وإلغاء تأشيرات الدخول لرجال الأعمال والزيارة والسياحة.",
    homeSvc6Tag: "التأشيرات والإقامة",
    homeSvc6Title: "إقامات الأسرة والشركاء",
    homeSvc6Desc:
      "خدمات إقامة العائلة والشركاء والمستثمرين لإجراءات استقرار سلسة.",
    homeSvc7Tag: "الخدمات القانونية",
    homeSvc7Title: "تصديق المستندات",
    homeSvc7Desc:
      "تصديق وتوثيق العقود والوثائق الرسمية لدى الوزارات والسفارات المعتمدة.",
    homeSvc8Tag: "العلاقات الحكومية",
    homeSvc8Title: "خدمات السفارات",
    homeSvc8Desc:
      "تخليص ومتابعة معاملات السفارات والقنصليات بما فيها السودانية وغيرها.",
    homeSvc9Tag: "العلاقات الحكومية",
    homeSvc9Title: "تخفيض الغرامات والتأمين",
    homeSvc9Desc:
      "تخفيض وإعفاء الغرامات وتعديل الأوضاع للأفراد والمنشآت.",

    /* ---------------- STATS & TESTIMONIAL ---------------- */
    statQuote:
      "إرشاداتهم جعلت إجراءات تأسيس الأعمال بأكملها واضحة وسريعة وبلا أي عناء. من الاستشارة وحتى التنفيذ النهائي، تم التعامل مع كل خطوة باحترافية تامة.”",
    statBadge: "آراء عملائنا",
    stat1Label: "شركة ورخصة تم دعمها بنجاح ",
    stat1Highlight: "في كافة أنحاء الإمارات",
    stat2Label: "سنوات من الخبرة المشتركة ",
    stat2Highlight: "في الاستشارات وتخليص المعاملات",
    stat3Label: "نسبة رضا العملاء عبر ",
    stat3Highlight: "كافة المعاملات المنجزة",

    /* ---------------- ACCENT BANNER ---------------- */
    accentBadge: "حلول مصممة لنجاح الأعمال",
    accentLine1: "كل مشروع ناجح",
    accentLine2: "يستحق التوجيه",
    accentLine3: "والدعم الموثوق",
    accentLine4: "لينمو ويزدهر.",

    /* ---------------- WHY CHOOSE US ---------------- */
    whyBadge: "سر تميزنا الاستشاري",
    whyHeadingPre: "لماذا يختارنا ",
    whyHeadingHighlight: "أصحاب الأعمال والشركات.",
    whySubtitle:
      "نحن لا نكتفي بإنهاء الإجراءات؛ بل نفهم أهدافكم، ونضع الاستراتيجية الأنسب، ونرشدكم في كل خطوة لبناء مشروع ناجح في دولة الإمارات.",
    whyCard1Title: "تأسيس خبير للشركات",
    whyCard1Strategy: "الاستراتيجية أولاً",
    whyCard1Desc:
      "من رخص الدوائر الاقتصادية في البر الرئيسي إلى المناطق الحرة والشركات الخارجية، نختار الهيكل القانوني الأمثل لتحقيق أهدافك وخفض التكاليف وتسريع النمو.",
    whyCard1Tag1: "تأسيس بالبر الرئيسي والمناطق الحرة",
    whyCard1Tag2: "تأسيس الشركات الخارجية (أوفشور)",
    whyCard2Title: "تنسيق واعتمادات حكومية مباشرة",
    whyCard2Desc:
      "تنسيق مباشر مع الوزارات الاتحادية والدوائر الاقتصادية وهيئات الإقامة (GDRFA) ووزارة الموارد البشرية (MOHRE). نتجاوز العقبات الروتينية لضمان إنجاز معاملاتك الرسمية بأقصى سرعة.",
    whyCard2Tag: "ربط حكومي مباشر وتخليص فوري",
    whyCard3Title: "شفافية مطلقة في الأسعار والخطوات",
    whyCard3Desc:
      "نؤمن بالصدق والوضوح التام. ستحصل على أسعار واضحة مسبقاً، ومواعيد إنجاز واقعية للموافقات، وتفصيل دقيق للرسوم دون أي تكاليف مستترة.",
    whyCard3Tag: "وضوح مضمون 100% في الرسوم",
    whyCard4Title: "خدمات PRO شاملة و خدمات الإقامة الذهبية",
    whyCard4Badge: "دعم مستمر",
    whyCard4Desc:
      "لا ينتهي دعمنا بصدور الرخصة, بل نتولى إصدار وتجديد جميع تأشيرات موظفيك ومتابعة عقود عملهم وطلبات الاقامة.\nوالتسجيل الضريبي والمتابعة المستمرة للمعاملات الحكومية الخاصة بمؤسستكم.\nكما نقوم بتقديم ومتابعة طلبات الإقامة الذهبية والتقديم لخطابات الترشيح ومتابعة الموافقة وإكمال إجراءات إصدار الإقامة.",
    whyCard4Tag1: "معاملات الإقامة الذهبية",
    whyCard4Tag2: "التسجيل الضريبي والمتابعة",
    whyCard4Tag3: "تأشيرات وعقود الموظفين",

    /* ---------------- CONTACT CTA ---------------- */
    contactCtaDeskBadge: "ترايب لاين لخدمات رجال الأعمال",
    contactCtaHeadingPre: "جاهز لتأسيس شركتك أو ",
    contactCtaHeadingHighlight: "إنجاز معاملاتك الحكومية؟",
    contactCtaSubtitle:
      "من تأسيس الشركات وتجديد الرخص التجارية بالبر الرئيسي والمناطق الحرة، إلى إصدار الإقامة الذهبية، تأشيرات الموظفين، وخدمات التعقيب (PRO) والامتثال الضريبي — نتولى كافة إجراءاتك الحكومية بأعلى سرعة واحترافية ودقة.",
    contactCtaBtnAdvisor: "ابدأ معاملتك الآن",
    contactCtaBtnWhatsApp: "تواصل عبر واتساب",
    contactCtaTrust1: "تنسيق واعتمادات حكومية مباشرة",
    contactCtaTrust2: "سرعة إصدار الرخص والتأشيرات",
    contactCtaTrust3: "شفافية تامة في الرسوم والخطوات",
    whatsappFloatingTooltip: "تحتاج مساعدة؟ تحدث معنا",
    whatsappFloatingStatus: "متاح الآن • دعم فوري",
    whatsappAriaLabel: "محادثة مع تريب لاين عبر واتساب",
    whatsappPreFill: "مرحباً تريب لاين لخدمات رجال الأعمال، أود الاستفسار عن خدماتكم.",

    /* ---------------- FOOTER ---------------- */
    footerDesc:
      "نساعد رواد الأعمال والشركات على تأسيس وإدارة وتنمية أعمالهم في دولة الإمارات من خلال استشارات موثوقة وحلول متكاملة.",
    footerSupportStatus: "فريق الدعم والاستشارات متاح",
    footerQuickLinks: "روابط سريعة",
    footerServices: "الخدمات",
    footerContactUs: "اتصل بنا",
    footerConsultancyTag: "استشارات أعمال وترخيص بالدولة",
    footerBookConsultation: "احجز استشارة مجانية",
    footerCopyright: "© 2026 ترايب لاين لخدمات رجال الأعمال. جميع الحقوق محفوظة.",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الخدمة",
    footerTelLabel: "هاتف:",
    footerMobLabel: "متحرك:",
    footerWhatsAppLabel: "واتساب:",
    contactLabelWhatsApp: "واتساب",

    /* ---------------- ABOUT PAGE ---------------- */
    aboutPageBadge: "عن ترايب لاين",
    aboutPageHeadingPre: "شريكك الموثوق في ",
    aboutPageHeadingHighlight: "خدمات الإمارات",
    aboutPageDesc:
      "في ترايب لاين لخدمات رجال الأعمال، نلتزم بتقديم حلول سريعة وموثوقة لكافة خدمات الإقامة وتأسيس الأعمال. هدفنا هو تبسيط جميع المعاملات الحكومية وتأشيرات الدخول.",
    aboutPageP1Bold: "تجربة سلسة ومريحة خالية من المتاعب",
    aboutPageP1Pre: "لمنح عملائنا ",
    aboutPageP1Post:
      "، يعمل فريقنا بخبرة واحترافية عالية لضمان إنجاز معاملاتكم بدقة وسرعة فائقة.",
    aboutPageP2Pre: "لأن ",
    aboutPageP2Highlight: "راحتكم هي أولويتنا القصوى",
    aboutPageP2Post: ".",
    aboutTagUaeLicensed: "مرخص في الإمارات",
    aboutTagTrustedAdvisors: "مستشارون معتمدون",
    aboutStatHappyClients: "عميل راضٍ",
    aboutStatFastProcessing: "إنجاز سريع",
    aboutStatSuccessRate: "نسبة النجاح",
    aboutStatExperience: "سنوات خبرة",
    aboutFeat1Title: "خدمة مخصصة",
    aboutFeat1Desc: "حلول مصممة خصيصاً لتناسب احتياجات إقامتك وأعمالك.",
    aboutFeat2Title: "فريق احترافي",
    aboutFeat2Desc: "مستشارون خبراء على دراية واسعة بكافة القوانين واللوائح الإماراتية.",
    aboutFeat3Title: "إنجاز فوري",
    aboutFeat3Desc: "سرعة قياسية في متابعة وإنهاء المعاملات الحكومية.",
    aboutFeat4Title: "موثوقية وأمان",
    aboutFeat4Desc: "شريك موثوق لمئات العملاء والشركات في دولة الإمارات.",

    /* ---------------- CONTACT PAGE ---------------- */
    contactPageBadge: "التواصل والاستشارات",
    contactPageHeadingPre: "تحدث معنا حول ",
    contactPageHeadingHighlight: "متطلباتك وأعمالك",
    contactPageDesc:
      "تحدث مع أحد كبار المستشارين اليوم واحصل على إرشادات خبيرة حول التأشيرات أو تأسيس الشركات أو أي خدمة حكومية.",
    contactLabelTel: "الهاتف الثابت",
    contactLabelMob: "الهاتف المتحرك",
    contactLabelEmail: "البريد الإلكتروني",
    contactLabelVisit: "موقعنا",
    contactLabelHours: "ساعات العمل",
    contactHoursValue: "السبت – الخميس: 9 صباحاً – 7 مساءً",
    contactChatWhatsApp: "محادثة عبر واتساب",
    contactInstantReply: "رد فوري ←",
    contactFormTitle: "أرسل لنا رسالة",
    contactFormDesc: "املأ النموذج وسنقوم بالرد والتواصل معك خلال 24 ساعة.",
    contactFormFirstName: "الاسم الأول",
    contactFormFirstNamePh: "أدخل الاسم الأول",
    contactFormLastName: "الاسم الثاني",
    contactFormLastNamePh: "أدخل الاسم الثاني",
    contactFormFullName: "الاسم الأول والثاني",
    contactFormFullNamePh: "أدخل الاسم الأول والثاني",
    contactFormNationality: "الجنسية",
    contactFormNationalityPh: "أدخل جنسيتك",
    contactFormEmail: "البريد الإلكتروني",
    contactFormEmailPh: "you@example.com",
    contactFormPhone: "رقم الهاتف المتحرك",
    contactFormPhonePh: "+971 54444 2029",
    contactFormBtnSend: "إرسال الرسالة",
    contactFormBtnSent: "✓ تم إرسال الرسالة بنجاح!",
    contactVisitOfficeTitle: "تفضل بزيارة مكتبنا",
    contactOfficeRoom: "مكتب رقم 2004",
    contactOfficeTower: "برج مكاتب جراند مول",
    contactOfficeStreet: "شارع الشيخ خليفة بن زايد",
    contactOfficeArea: "الراشدية 3، عجمان — الإمارات",
    contactGetDirections: "الحصول على الاتجاهات",

    /* ---------------- ROUTER / 404 ---------------- */
    notFoundHeading: "404",
    notFoundDesc: "الصفحة غير موجودة",
    backToHome: "العودة إلى الرئيسية",

    /* ---------------- TECH STACK / PARTNERS ---------------- */
    trustedPartnersBadge: "شركاؤنا المعتمدون",
    trustedPartnersTitlePre: "نبني النجاح من خلال ",
    trustedPartnersTitleHighlight: "شراكات موثوقة.",
    trustedPartnersSubtitle:
      "نتعاون مع أرقى المؤسسات والجهات الحكومية لتقديم حلول أعمال ومعاملات متكاملة للمستثمرين والشركات في دولة الإمارات.",
    tabAllPartners: "جميع الشركاء",
    tabFreezones: "المناطق الحرة",
    tabMainland: "الدوائر الاقتصادية المحلية",
    tabGovt: "المراكز الحكومية",
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

  const t = (key) => translations[lang]?.[key] || translations["EN"]?.[key] || key;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        isArabic: lang === "AR",
        isRTL: lang === "AR",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};