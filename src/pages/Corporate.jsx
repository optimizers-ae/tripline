import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  Briefcase,
  CreditCard,
  Users,
  HeartPulse,
  IdCard,
  Award,
  Home,
  UserCheck,
  Landmark,
  RefreshCw,
  Globe2,
  ShieldCheck,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

/* ===========================================================
   FEATURED CORPORATE SERVICES (Top 5)
   =========================================================== */
const FEATURED_ICONS = [
  { icon: FileText, titleKey: "corp1Title", descKey: "corp1Desc" },
  { icon: Building2, titleKey: "corp2Title", descKey: "corp2Desc" },
  { icon: Briefcase, titleKey: "corp4Title", descKey: "corp4Desc" },
  { icon: CreditCard, titleKey: "corp5Title", descKey: "corp5Desc" },
  { icon: Users, titleKey: "corp6Title", descKey: "corp6Desc" },
];

/* ===========================================================
   FULL CORPORATE SERVICES LIST (15 services)
   =========================================================== */
const CORPORATE_SERVICES_MAP = [
  { icon: FileText, titleKey: "corp1Title", descKey: "corp1Desc" },
  { icon: Building2, titleKey: "corp2Title", descKey: "corp2Desc" },
  { icon: Landmark, titleKey: "corp3Title", descKey: "corp3Desc" },
  { icon: Briefcase, titleKey: "corp4Title", descKey: "corp4Desc" },
  { icon: CreditCard, titleKey: "corp5Title", descKey: "corp5Desc" },
  { icon: Users, titleKey: "corp6Title", descKey: "corp6Desc" },
  { icon: RefreshCw, titleKey: "corp7Title", descKey: "corp7Desc" },
  { icon: IdCard, titleKey: "corp8Title", descKey: "corp8Desc" },
  { icon: HeartPulse, titleKey: "corp9Title", descKey: "corp9Desc" },
  { icon: Award, titleKey: "corp10Title", descKey: "corp10Desc" },
  { icon: Home, titleKey: "corp11Title", descKey: "corp11Desc" },
  { icon: ShieldCheck, titleKey: "corp12Title", descKey: "corp12Desc" },
  { icon: Globe2, titleKey: "corp13Title", descKey: "corp13Desc" },
  { icon: UserCheck, titleKey: "corp14Title", descKey: "corp14Desc" },
  { icon: TrendingUp, titleKey: "corp15Title", descKey: "corp15Desc" },
];

/* ===========================================================
   PAGE COMPONENT
   =========================================================== */
const CorporateServices = () => {
  const { t, lang } = useLanguage();
  const location = useLocation();
  const isArabic = lang === "AR";

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-4", "ring-[#D32F2F]/40", "shadow-2xl", "scale-[1.02]");
          setTimeout(() => {
            el.classList.remove("ring-4", "ring-[#D32F2F]/40", "shadow-2xl", "scale-[1.02]");
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
      <Navbar />

      <main>
        {/* ============ HERO BANNER ============ */}
        {/* <section className="relative w-full pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
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
                {t("corporateBadge")}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-[1.05]">
                {t("corporateTitleLine1")}{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  {t("corporateTitleHighlight")}
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 leading-relaxed">
                {t("corporateSubtitle")}
              </p>
            </motion.div>
          </div>
        </section> */}

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
                {t("forCorporates")}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-3">
                {t("corporateHeading")}{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  {t("corporateHeadingHighlight")}
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed">
                {t("corporateDesc")}
              </p>
            </motion.div>

            {/* ---- Featured Services (Top 5) ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16 md:mb-20">
              {FEATURED_ICONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={idx}
                    href="/contact"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#D32F2F]/50 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden min-h-[280px]"
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

                    {/* Learn More */}
                    <div
                      className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] group-hover:gap-2.5 transition-all duration-300 mt-auto ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span>{t("learnMore")}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg] transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* ---- Divider Heading ---- */}
            <motion.div
              id="corporate-services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 scroll-mt-28 md:scroll-mt-36"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-2">
                {t("corporateServicesHeading")}
              </h3>
              <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                {t("corporateServicesSubheading")}
              </p>
            </motion.div>

            {/* ---- Full Corporate Services Grid (15) ---- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CORPORATE_SERVICES_MAP.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.titleKey}
                    id={service.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                    className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-xl hover:-translate-y-0.5 h-full scroll-mt-28 md:scroll-mt-36"
                  >
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
              className="mt-16 text-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>{t("ctaConsultation")}</span>
                <ArrowUpRight className="h-5 w-5 rtl:rotate-[-90deg]" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateServices;