import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../assets/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Footer = () => {
  const { t, isArabic } = useLanguage();

  const quickLinks = [
    { label: t("home"), href: "/", color: "#D32F2F" },
    { label: t("aboutUs"), href: "/about", color: "#D32F2F" },
    { label: t("corporateServices"), href: "/services/corporate", color: "#D32F2F" },
    { label: t("individualsServices"), href: "/services/individuals", color: "#D32F2F" },
    { label: t("contact"), href: "/contact", color: "#D32F2F" },
  ];

  const servicesLinks = [
    { label: t("homeSvc1Title"), href: "/services/corporate" },
    { label: t("homeSvc3Title"), href: "/services/corporate" },
    { label: t("homeVisualVisa"), href: "/services/individuals" },
    { label: t("homeSvc6Title"), href: "/services/individuals" },
    { label: t("homeSvc7Title"), href: "/services/corporate" },
    { label: t("homeSvc8Title"), href: "/services/individuals" },
  ];

  return (
    <footer className="bg-neutral-900 p-3 sm:p-4 text-slate-300 font-comforta">
      <div className="mx-auto flex justify-center md:justify-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="relative w-full max-w-[1800px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]"
          style={{
            background:
              "linear-gradient(180deg, hsl(30 12% 12%) 0%, hsl(30 12% 7%) 100%)",
          }}
        >
          <div className="relative z-10 flex flex-col">
            {/* Main Footer Body */}
            <div className="border-b border-white/10 px-6 sm:px-10 lg:px-14 pt-12 pb-12 sm:pt-14 sm:pb-14">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                {/* Brand & Mission Column */}
                <motion.div
                  variants={fadeUpVariants}
                  className="space-y-4 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right rtl:md:items-start"
                >
                  <a
                    href="#hero"
                    className="inline-flex flex-col items-center md:items-start gap-3 group"
                  >
                    <img
                      src={logoImg}
                      alt="Trip Line"
                      className="h-8 sm:h-9 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
                    />
                    <span className="text-xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:scale-105">
                      {isArabic ? "تريب لاين لخدمات رجال الأعمال" : "Tripline Businessmen Services"}
                    </span>
                  </a>

                  <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                    {t("footerDesc")}
                  </p>

                  {/* Live Status Pill */}
                  <div className="flex items-center md:items-start gap-2 pt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                      <span className="relative block h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      {t("footerSupportStatus")}
                    </span>
                  </div>

                  {/* Social Icons */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                    {[
                      {
                        name: "Facebook",
                        href: "https://www.facebook.com",
                        icon: (
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        ),
                      },
                      {
                        name: "Instagram",
                        href: "https://www.instagram.com/trip_line_businessmen_services/",
                        icon: (
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        ),
                      },
                      {
                        name: "TikTok",
                        href: "https://www.tiktok.com/@tripline_services?_r=1",
                        icon: (
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.1.15.2.3.29.46.99 1.5 2.45 2.39 4.22 2.58v3.42c-1.46-.07-2.77-.55-3.86-1.37-.17-.13-.33-.28-.5-.43v6.7c-.01 3.23-2.18 6.07-5.34 6.96-3.17.89-6.52-.39-8.15-3.1-1.61-2.67-1.12-6.19 1.19-8.32 2.22-2.05 5.51-2.5 8.16-.94V2.29z" />
                          </svg>
                        ),
                      },
                      {
                        name: "LinkedIn",
                        href: "https://www.linkedin.com",
                        icon: (
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        ),
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-all hover:bg-white/15 hover:text-white"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Links Column */}
                <motion.div
                  variants={fadeUpVariants}
                  className="space-y-4 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right rtl:md:items-start"
                >
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                    {t("footerQuickLinks")}
                  </h3>
                  <ul className="space-y-2.5">
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="group relative inline-flex items-center text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                          <span className="relative pb-0.5">
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#D32F2F] transition-all duration-300 ease-out group-hover:w-full" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services Column */}
                <motion.div
                  variants={fadeUpVariants}
                  className="hidden md:flex flex-col items-start space-y-4 lg:col-span-2 rtl:items-start"
                >
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                    {t("footerServices")}
                  </h3>
                  <ul className="space-y-2.5">
                    {servicesLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="group relative inline-flex items-center text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                          <span className="relative pb-0.5">
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#D32F2F] transition-all duration-300 ease-out group-hover:w-full" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Studio & Contact Column */}
                <motion.div
                  variants={fadeUpVariants}
                  className="space-y-4 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right rtl:md:items-start"
                >
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                      {t("footerContactUs")}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[2px] text-slate-400">
                      {t("footerConsultancyTag")}
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-center md:justify-start gap-3 group">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:scale-110" />
                      <a
                        href="https://maps.app.goo.gl/ML8N7BxxDxtjg6Nw7?g_st=ic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs leading-relaxed text-slate-300 sm:text-sm max-w-xs hover:text-white transition-colors"
                      >
                        {t("address")}
                      </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3 group">
                      <Phone className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:scale-110" />
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-xs sm:text-sm">
                        <a
                          href="tel:+97165734303"
                          className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
                        >
                          <span className="text-slate-400 font-medium">{t("footerTelLabel")}</span>
                          <span dir="ltr" className="inline-block select-all font-sans">+971 6 573 4303</span>
                        </a>
                        <span className="hidden sm:inline text-slate-500">•</span>
                        <a
                          href="tel:+971544442029"
                          className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
                        >
                          <span className="text-slate-400 font-medium">{t("footerMobLabel")}</span>
                          <span dir="ltr" className="inline-block select-all font-sans">+971 54444 2029</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3 group">
                      <Mail className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:scale-110" />
                      <a
                        href="mailto:inquiry@tripline.ae"
                        className="text-xs text-slate-300 transition-colors hover:text-white sm:text-sm"
                        dir="ltr"
                      >
                        inquiry@tripline.ae
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center md:items-start gap-2 rounded-xl bg-[#D32F2F] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#B71C1C] hover:shadow-lg cursor-pointer group"
                    >
                      <span>{t("footerBookConsultation")}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Sub-footer Bar */}
            <motion.div
              variants={fadeUpVariants}
              className="px-6 sm:px-10 lg:px-14 py-6 sm:py-8"
            >
              <div className="flex flex-col items-center md:items-start justify-between gap-4 md:flex-row">
                <p className="text-center md:text-left text-xs text-slate-300 sm:text-sm">
                  {t("footerCopyright")}
                </p>

                <div className="flex flex-wrap items-center md:items-start justify-center md:justify-start gap-4 md:justify-end">
                  <a
                    href="/contact"
                    className="group relative text-xs text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                  >
                    <span className="relative pb-0.5">
                      {t("footerPrivacy")}
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 rounded-full bg-[#D32F2F] transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </a>
                  <span className="text-slate-400" aria-hidden="true">
                    •
                  </span>
                  <a
                    href="/contact"
                    className="group relative text-xs text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                  >
                    <span className="relative pb-0.5">
                      {t("footerTerms")}
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 rounded-full bg-[#D32F2F] transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
