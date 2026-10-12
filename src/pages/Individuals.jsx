import { motion } from "framer-motion";
import {
  // Featured
  FileText,
  Plane,
  Hotel,
  Map,
  Palmtree,
  // Individual Services Icons
  HeartPulse,
  Users,
  FileCheck,
  Globe2,
  ShieldCheck,
  Home,
  Award,
  Briefcase,
  CreditCard,
  PlaneTakeoff,
  Clock,
  XCircle,
  UserPlus,
  RefreshCw,
  LogOut,
  Scale,
  ShieldAlert,
  Landmark,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

/* ===========================================================
   FEATURED SERVICES (Top 5) — keys refer to translations
   =========================================================== */
const FEATURED_ICONS = [
  { icon: FileText, emoji: "📄", titleKey: "service10Title", descKey: "service10Desc" }, // Document Clearance
  { icon: Plane, emoji: "✈️", titleKey: "service9Title", descKey: "service9Desc" }, // Flight Tickets → use visa extension placeholder
  { icon: Hotel, emoji: "🏨", titleKey: "service15Title", descKey: "service15Desc" }, // Hotel → Saudi multiple visa
  { icon: Map, emoji: "🗺️", titleKey: "service5Title", descKey: "service5Desc" }, // Tourist Visas → Multi-entry 5yr
  { icon: Palmtree, emoji: "🏝️", titleKey: "service6Title", descKey: "service6Desc" }, // Tour Packages → business explore
];

/* ===========================================================
   TOURIST VISAS — 11 Countries
   =========================================================== */
const TOURIST_VISAS = [
  { flag: "🇪🇺", nameEN: "Schengen", nameAR: "تشنغن" },
  { flag: "🇨🇳", nameEN: "China", nameAR: "الصين" },
  { flag: "🇹🇭", nameEN: "Thailand", nameAR: "تايلاند" },
  { flag: "🇪🇹", nameEN: "Ethiopia", nameAR: "إثيوبيا" },
  { flag: "🇲🇦", nameEN: "Morocco", nameAR: "المغرب" },
  { flag: "🇦🇪", nameEN: "UAE", nameAR: "الإمارات" },
  { flag: "🇴🇲", nameEN: "Oman", nameAR: "عمان" },
  { flag: "🇸🇦", nameEN: "Saudi Arabia", nameAR: "السعودية" },
  { flag: "🇶🇦", nameEN: "Qatar", nameAR: "قطر" },
  { flag: "🇧🇭", nameEN: "Bahrain", nameAR: "البحرين" },
  { flag: "🇰🇼", nameEN: "Kuwait", nameAR: "الكويت" },
];

/* ===========================================================
   INDIVIDUAL SERVICES (1–19) — icons + translation keys
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

/* ===========================================================
   PAGE COMPONENT
   =========================================================== */
const ServicesPage = () => {
  const { t, lang } = useLanguage();

  const isArabic = lang === "AR";

  return (
    <div
      className={`relative min-h-screen bg-white font-comforta ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <Navbar />

      <main>
        {/* ============ HERO BANNER ============ */}
        {/* <section className="relative w-full pt-32 md:pt-40 pb-10 md:pb-14 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#D32F2F]/10 via-[#F44336]/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#111111]/5 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
                {t("servicesBadge")}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-[1.05]">
                {t("servicesTitleLine1")}{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  {t("servicesTitleHighlight")}
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 leading-relaxed">
                {t("servicesSubtitle")}
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* ============ FEATURED SERVICES + MAIN SERVICES ============ */}
        <section className="relative w-full py-12 md:py-20 bg-neutral-50 overflow-hidden">
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
              className="text-center mb-12"
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
                  <motion.a
                    key={idx}
                    href="#contact"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#D32F2F]/50 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden"
                  >
                    <span className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <span aria-hidden="true">{item.emoji}</span>
                      {t(item.titleKey)}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-5 flex-1">
                      {t(item.descKey)}
                    </p>

                    <div
                      className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] group-hover:gap-2.5 transition-all duration-300 ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span>{isArabic ? "اعرف المزيد" : "Learn More"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* ============================================================
                TOURIST VISAS — 11 Countries
               ============================================================ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 md:mb-20"
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
                {TOURIST_VISAS.map((visa, idx) => (
                  <motion.a
                    key={visa.nameEN}
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 transition-all duration-300 hover:border-[#D32F2F]/50 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden"
                  >
                    <span className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span
                      className="text-5xl md:text-6xl leading-none transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {visa.flag}
                    </span>

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

                    <ArrowUpRight className="h-4 w-4 text-[#D32F2F] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#D32F2F] bg-white px-6 py-3 text-sm font-bold text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all duration-300"
                >
                  <span>{t("applyVisaBtn")}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* ============================================================
                FULL INDIVIDUALS SERVICES LIST (19 Services)
               ============================================================ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-2">
                {t("individualServicesHeading")}
              </h3>
              <p className="text-sm md:text-base text-neutral-600">
                {t("individualServicesSubheading")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDIVIDUAL_SERVICES_MAP.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                    className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#111111]/30 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#D32F2F] transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-[#D32F2F] transition-colors">
                        {t(service.titleKey)}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ---- Bottom CTA ---- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-14 text-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>{t("ctaConsultation")}</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;