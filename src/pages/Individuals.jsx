import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import {
  Users,
  Award,
  PlaneTakeoff,
  RefreshCw,
  Scale,
  Home,
  Briefcase,
  UserPlus,
  Clock,
  XCircle,
  FileCheck,
  LogOut,
  Landmark,
  ShieldAlert,
  Globe2,
  Map,
  GraduationCap,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceInquiryModal from "../components/ServiceInquiryModal";
import { useLanguage } from "../context/LanguageContext";

/* ===========================================================
   FEATURED INDIVIDUALS SERVICES (Top 5)
   =========================================================== */
const FEATURED_ICONS = [
  { icon: Users, titleKey: "service1Title", descKey: "service1Desc" },
  { icon: Award, titleKey: "service3Title", descKey: "service3Desc" },
  { icon: PlaneTakeoff, titleKey: "service5Title", descKey: "service5Desc" },
  { icon: RefreshCw, titleKey: "service12Title", descKey: "service12Desc" },
  { icon: Scale, titleKey: "service14Title", descKey: "service14Desc" },
];

/* ===========================================================
   TOURIST VISAS — 11 Countries
   =========================================================== */
const TOURIST_VISAS = [
  { code: "eu", nameEN: "Schengen", nameAR: "شنغن" },
  { code: "cn", nameEN: "China", nameAR: "الصين" },
  { code: "th", nameEN: "Thailand", nameAR: "تايلاند" },
  { code: "et", nameEN: "Ethiopia", nameAR: "إثيوبيا" },
  { code: "ma", nameEN: "Morocco", nameAR: "المغرب" },
  { code: "ae", nameEN: "UAE", nameAR: "الإمارات" },
  { code: "om", nameEN: "Oman", nameAR: "عمان" },
  { code: "sa", nameEN: "Saudi Arabia", nameAR: "السعودية" },
  { code: "qa", nameEN: "Qatar", nameAR: "قطر" },
  { code: "bh", nameEN: "Bahrain", nameAR: "البحرين" },
  { code: "kw", nameEN: "Kuwait", nameAR: "الكويت" },
  { code: "eg", nameEN: "Egypt", nameAR: "مصر" },
  { code: "us", nameEN: "USA", nameAR: "الولايات المتحدة" },
];

/* ===========================================================
   FULL INDIVIDUAL SERVICES (1–19)
   =========================================================== */
const INDIVIDUAL_SERVICES_MAP = [
  { icon: Users, titleKey: "service1Title", descKey: "service1Desc" },
  { icon: Home, titleKey: "service2Title", descKey: "service2Desc" },
  { icon: Award, titleKey: "service3Title", descKey: "service3Desc" },
  { icon: RefreshCw, titleKey: "service4Title", descKey: "service4Desc" },
  { icon: PlaneTakeoff, titleKey: "service5Title", descKey: "service5Desc" },
  { icon: Briefcase, titleKey: "service6Title", descKey: "service6Desc" },
  { icon: UserPlus, titleKey: "service7Title", descKey: "service7Desc" },
  { icon: Users, titleKey: "service8Title", descKey: "service8Desc" },
  { icon: Clock, titleKey: "service9Title", descKey: "service9Desc" },
  { icon: XCircle, titleKey: "service10Title", descKey: "service10Desc" },
  { icon: FileCheck, titleKey: "service11Title", descKey: "service11Desc" },
  { icon: RefreshCw, titleKey: "service12Title", descKey: "service12Desc" },
  { icon: LogOut, titleKey: "service13Title", descKey: "service13Desc" },
  { icon: Scale, titleKey: "service14Title", descKey: "service14Desc" },
  { icon: Landmark, titleKey: "service15Title", descKey: "service15Desc" },
  { icon: ShieldAlert, titleKey: "service16Title", descKey: "service16Desc" },
  { icon: Globe2, titleKey: "service17Title", descKey: "service17Desc" },
  { icon: Map, titleKey: "service18Title", descKey: "service18Desc" },
  { icon: GraduationCap, titleKey: "service19Title", descKey: "service19Desc" },
];

const VISA_SERVICE_KEYS = new Set([
  "service5Title",
  "service6Title",
  "service7Title",
  "service8Title",
  "service9Title",
  "service10Title",
  "service13Title",
  "service15Title",
  "service16Title",
  "service17Title",
  "service18Title",
]);

/* ===========================================================
   PAGE COMPONENT
   =========================================================== */
const ServicesPage = () => {
  const { t, lang } = useLanguage();
  const location = useLocation();
  const isArabic = lang === "AR";
  const sliderRef = useRef(null);

  // Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    modalType: "general", // "general" | "visa"
    serviceTitle: "",
    category: "Individuals",
    initialData: {},
  });

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleServiceClick = (item) => {
    const title = t(item.titleKey);
    const isVisa =
      VISA_SERVICE_KEYS.has(item.titleKey) ||
      title.toLowerCase().includes("visa") ||
      title.toLowerCase().includes("visit");

    let destinationCountry = "";
    if (item.titleKey === "service15Title") {
      destinationCountry = isArabic ? "المملكة العربية السعودية" : "Saudi Arabia";
    } else if (item.titleKey === "service16Title") {
      destinationCountry = isArabic ? "مصر" : "Egypt";
    } else if (item.titleKey === "service17Title") {
      destinationCountry = isArabic ? "الإمارات العربية المتحدة" : "UAE";
    } else if (item.titleKey === "service18Title") {
      destinationCountry = isArabic ? "سلطنة عمان" : "Oman";
    }

    setModalState({
      isOpen: true,
      modalType: isVisa ? "visa" : "general",
      serviceTitle: title,
      category: "Individuals",
      initialData: {
        destinationCountry,
      },
    });
  };

  const handleTouristVisaClick = (visa) => {
    const dest = visa?.nameEN ? (isArabic ? visa.nameAR : visa.nameEN) : "";
    setModalState({
      isOpen: true,
      modalType: "visa",
      serviceTitle: dest
        ? isArabic
          ? `تأشيرة سياحية (${dest})`
          : `Tourist Visa (${dest})`
        : isArabic
        ? "طلب تأشيرة سياحية"
        : "Tourist Visa Application",
      category: "Individuals",
      initialData: {
        destinationCountry: dest,
      },
    });
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add(
            "ring-4",
            "ring-[#D32F2F]/40",
            "shadow-2xl",
            "scale-[1.02]",
          );
          setTimeout(() => {
            el.classList.remove(
              "ring-4",
              "ring-[#D32F2F]/40",
              "shadow-2xl",
              "scale-[1.02]",
            );
          }, 2400);
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div
      className={`relative min-h-screen bg-white font-comforta ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "12px",
            padding: "14px 18px",
            maxWidth: "480px",
          },
        }}
      />

      <Navbar />

      <main>
        {/* ============ MAIN CONTENT ============ */}
        <section className="relative w-full pt-32 py-14 bg-neutral-50 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#D32F2F]/8 via-[#F44336]/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#111111]/5 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
            {/* ---- Section Heading ---- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
                {t("forIndividuals")}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-3">
                {t("individualsHeading")}{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  {t("individualsHeadingHighlight")}
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed">
                {t("individualsDesc")}
              </p>
            </motion.div>

            {/* ---- Featured Services (Top 5) ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16 md:mb-20">
              {FEATURED_ICONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleServiceClick(item)}
                    onKeyDown={(e) => e.key === "Enter" && handleServiceClick(item)}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#D32F2F]/50 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden min-h-[300px] cursor-pointer text-left rtl:text-right"
                  >
                    {/* Top accent line */}
                    <span className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug min-h-[44px] flex items-start">
                      {t(item.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed mb-5 flex-1 line-clamp-4">
                      {t(item.descKey)}
                    </p>

                    {/* Click to Apply Button */}
                    <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#D32F2F]/10 px-3.5 py-1.5 text-xs font-bold text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-300 shadow-sm">
                        <span>{isArabic ? "انقر للتقديم" : "Click to Apply"}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      {/* <span className="text-[11px] font-semibold text-neutral-400 group-hover:text-neutral-600 transition-colors">
                        {isArabic ? "طلب الخدمة" : "Apply Now"}
                      </span> */}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ============================================================
                TOURIST VISAS — 11 Countries
               ============================================================ */}
            <motion.div
              id="tourist-visas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 md:mb-20 scroll-mt-28 md:scroll-mt-36"
            >
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t("touristVisasBadge")}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
                  {t("touristVisasTitle")}{" "}
                  <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                    {t("touristVisasTitleHighlight")}
                  </span>
                </h3>
                <p className="max-w-2xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed">
                  {t("touristVisasSubtitle")}
                </p>
              </div>

              {/* Desktop Grid (Hidden on Mobile) */}
              <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
                {TOURIST_VISAS.map((visa, idx) => (
                  <motion.button
                    key={visa.nameEN}
                    type="button"
                    onClick={() => handleTouristVisaClick(visa)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="group relative flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 transition-all duration-300 hover:border-[#D32F2F]/50 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden cursor-pointer w-full text-center"
                  >
                    <span className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex items-center justify-center h-11 w-16 md:h-12 md:w-18 rounded-lg overflow-hidden shadow-sm border border-neutral-200/90 bg-neutral-100 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={`https://flagcdn.com/w160/${visa.code.toLowerCase()}.png`}
                        alt={`${visa.nameEN} flag`}
                        width="72"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          const img = e.currentTarget;
                          const code = visa.code.toLowerCase();

                          if (img.dataset.fallback !== "used") {
                            img.dataset.fallback = "used";
                            img.src = `https://flagsapi.com/${code.toUpperCase()}/flat/64.png`;
                          }
                        }}
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-base font-bold text-neutral-900 group-hover:text-[#D32F2F] transition-colors">
                        {isArabic ? visa.nameAR : visa.nameEN}
                      </p>
                      <p
                        className="text-xs text-neutral-500 mt-0.5"
                        dir={isArabic ? "ltr" : "rtl"}
                      >
                        {isArabic ? visa.nameEN : visa.nameAR}
                      </p>
                    </div>

                    {/* Click to Apply */}
                    <div className="mt-1 w-full pt-2 border-t border-neutral-100 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D32F2F] group-hover:underline">
                        <span>{isArabic ? "انقر للتقديم" : "Click to Apply"}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg]" />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Slider (Visible only on Mobile) */}
              <div className="md:hidden">
                <div
                  ref={sliderRef}
                  className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 -mx-4 pb-4 pt-1 no-scrollbar scroll-smooth"
                >
                  {TOURIST_VISAS.map((visa) => (
                    <button
                      key={visa.nameEN}
                      type="button"
                      onClick={() => handleTouristVisaClick(visa)}
                      className="snap-start shrink-0 w-[150px] flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm active:scale-95 transition-all text-center cursor-pointer"
                    >
                      <div className="relative flex items-center justify-center h-10 w-15 rounded-lg overflow-hidden shadow-sm border border-neutral-200/90 bg-neutral-100">
                        <img
                          src={`https://flagcdn.com/w160/${visa.code}.png`}
                          srcSet={`https://flagcdn.com/w320/${visa.code}.png 2x`}
                          alt={`${visa.nameEN} flag`}
                          width="60"
                          height="40"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="text-center w-full">
                        <p className="text-sm font-bold text-neutral-900 truncate">
                          {isArabic ? visa.nameAR : visa.nameEN}
                        </p>
                        <p
                          className="text-[11px] text-neutral-500 mt-0.5 truncate"
                          dir={isArabic ? "ltr" : "rtl"}
                        >
                          {isArabic ? visa.nameEN : visa.nameAR}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D32F2F] mt-0.5">
                        <span>{isArabic ? "انقر للتقديم" : "Click to Apply"}</span>
                        <ArrowUpRight className="h-3 w-3 rtl:rotate-[-90deg]" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply for a Visa CTA Button */}
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => handleTouristVisaClick(null)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#D32F2F] bg-white px-7 py-3.5 text-sm font-bold text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg hover:scale-105"
                >
                  <span>{t("applyVisaBtn")}</span>
                  <ArrowUpRight className="h-4 w-4 rtl:rotate-[-90deg]" />
                </button>
              </div>
            </motion.div>

            {/* ---- Divider Heading ---- */}
            <motion.div
              id="individuals-services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 scroll-mt-28 md:scroll-mt-36"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-2">
                {t("individualServicesHeading")}
              </h3>
              <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                {t("individualServicesSubheading")}
              </p>
            </motion.div>

            {/* ---- Full Individuals Services Grid (19) ---- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDIVIDUAL_SERVICES_MAP.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.titleKey}
                    id={service.titleKey}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleServiceClick(service)}
                    onKeyDown={(e) => e.key === "Enter" && handleServiceClick(service)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.28, delay: (idx % 3) * 0.04 }}
                    className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-xl hover:-translate-y-1 h-full scroll-mt-28 md:scroll-mt-36 cursor-pointer text-left rtl:text-right"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Box */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#D32F2F] transition-all duration-300 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>

                      {/* Text Content */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[15px] font-bold text-neutral-900 mb-1.5 leading-snug group-hover:text-[#D32F2F] transition-colors">
                          {t(service.titleKey)}
                        </h4>
                        <p className="text-[13px] text-neutral-600 leading-relaxed">
                          {t(service.descKey)}
                        </p>
                      </div>
                    </div>

                    {/* Click to Apply Row */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D32F2F] group-hover:text-[#b71c1c] transition-colors">
                        <span>{isArabic ? "انقر للتقديم" : "Click to Apply"}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="text-[11px] font-medium text-neutral-400 group-hover:text-neutral-600 transition-colors">
                        {isArabic ? "طلب إلكتروني" : "Quick Request"}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ---- Bottom CTA ---- */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35 }}
              className="mt-16 text-center"
            >
              <button
                type="button"
                onClick={() =>
                  setModalState({
                    isOpen: true,
                    modalType: "general",
                    serviceTitle: isArabic ? "استشارة عامة للأفراد" : "General Individual Consultation",
                    category: "Individuals",
                    initialData: {},
                  })
                }
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{t("ctaConsultation")}</span>
                <ArrowUpRight className="h-5 w-5 rtl:rotate-[-90deg]" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Service Inquiry Modal */}
      <ServiceInquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalType={modalState.modalType}
        serviceTitle={modalState.serviceTitle}
        serviceCategory={modalState.category}
        initialData={modalState.initialData}
      />

      <Footer />
    </div>
  );
};

export default ServicesPage;
