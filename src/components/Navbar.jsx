import logoImg from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, MapPin, Globe, ChevronDown, User, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const [ctaIndex, setCtaIndex] = useState(0);
  const [animState, setAnimState] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close services dropdown on outside click
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Submenu items for Services dropdown
  const SERVICES_SUBMENU = [
    {
      icon: User,
      label: t("servicesTitleLine1") === "Individuals" ? "Individuals" : "الأفراد",
      desc: t("servicesDesc") || "Government, Visa & Business Services",
      href: "/services/individuals",
    },
    {
      icon: Building2,
      label: t("corporateServices") || "Corporate Services",
      desc: t("corporateDesc") || "Business & Company Services",
      href: "/services/corporate",
    },
  ];

  // Build links using translations
  const NAV_LINKS = [
    { num: "01", name: t("home"), href: "/", desc: t("homeDesc"), isRoute: true },
    { num: "02", name: t("aboutUs"), href: "/about", desc: t("aboutDesc"), isRoute: true },
    {
      num: "03",
      name: t("services"),
      href: "/services",
      desc: t("servicesDesc"),
      isRoute: true,
      hasDropdown: true,
    },
    { num: "04", name: t("contact"), href: "/contact", desc: t("contactDesc"), isRoute: true },
  ];

  const MOBILE_CTAS = [t("cta1"), t("cta2"), t("cta3")];

  // Rotating mobile CTA text ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("is-leaving");
      setTimeout(() => {
        setCtaIndex((prev) => (prev + 1) % MOBILE_CTAS.length);
        setAnimState("is-entering");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimState("");
          });
        });
      }, 180);
    }, 2600);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MOBILE_CTAS.length]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll and Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. MOBILE NAVBAR (md:hidden)                              */}
      {/* ========================================================= */}
      <div className="fixed top-5 left-4 right-4 z-50 md:hidden font-comforta">
        <div className="relative flex items-center gap-2 min-h-[3.25rem] p-1.5 border border-white/60 rounded-full bg-white/20 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.14)] overflow-hidden">
          <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/45 via-white/8 to-transparent" />
          <div className="pointer-events-none absolute -top-4 left-6 h-8 w-32 rounded-full bg-white/35 blur-md" />

          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="relative z-10 flex h-10 px-2.5 items-center justify-center shrink-0 group rounded-full"
            aria-label="Trip Line home"
          >
            <img
              src={logoImg}
              alt="Trip Line"
              className="h-7 w-auto max-w-[80px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </a>

          {/* Language Toggle - Mobile */}
          <button
            type="button"
            onClick={toggleLang}
            className="relative z-10 flex h-9 px-2.5 items-center justify-center gap-1 shrink-0 rounded-full border border-neutral-900/20 bg-white/40 text-neutral-950 text-[0.7rem] font-bold hover:bg-white transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-3 h-3" />
            {lang}
          </button>

          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className="relative z-10 flex-1 min-w-0 overflow-hidden text-neutral-950 text-[0.78rem] font-semibold text-center whitespace-nowrap px-1"
          >
            <span
              className={`block overflow-hidden px-0.5 text-ellipsis transition-all duration-[180ms] ease-out will-change-transform ${
                animState === "is-leaving"
                  ? "-translate-y-2 opacity-0"
                  : animState === "is-entering"
                    ? "translate-y-2 opacity-0"
                    : "translate-y-0 opacity-100"
              }`}
            >
              {MOBILE_CTAS[ctaIndex]}
            </span>
          </a>

          <a
            href="tel:+971501234567"
            className="relative z-10 grid w-10 h-10 shrink-0 place-items-center rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] hover:text-[#D32F2F] hover:bg-white transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.18)] text-white"
            aria-label="Call Trip Line"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-[1.2rem] h-[1.2rem] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="navigation-drawer"
            className="group relative z-10 flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:border-[#D32F2F] hover:scale-105"
            aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
          >
            <span className="block w-4 h-[1.5px] rounded-full bg-white transition-colors duration-300 group-hover:bg-[#D32F2F]" />
            <span className="block w-4 h-[1.5px] rounded-full bg-white transition-colors duration-300 group-hover:bg-[#D32F2F]" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP FLOATING PILL NAVBAR (hidden md:block)         */}
      {/* ========================================================= */}
      <div className="hidden md:block font-comforta">
        <div
          style={{ animationDelay: "0.8s" }}
          className="nav-pill-drop fixed top-[18px] left-1/2 z-50 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1100px] isolate"
        >
          <div className="relative rounded-full border border-white/60 bg-white/20 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.14)] p-1.5 flex items-center gap-2 overflow-visible">
            <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/45 via-white/8 to-transparent" />
            <div className="pointer-events-none absolute -top-4 left-8 h-8 w-40 rounded-full bg-white/35 blur-md" />

            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="relative z-10 flex items-center justify-center w-28 h-10 px-2 rounded-full overflow-hidden transition-all group shrink-0"
              aria-label="Trip Line home"
            >
              <img
                src={logoImg}
                alt="Trip Line logo"
                width="80"
                height="32"
                className="h-8 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </a>

            {/* Navigation Links */}
            <nav
              aria-label="Main Desktop Navigation"
              className="relative z-10 hidden md:flex items-center flex-1 justify-center gap-5 min-w-0 nav-text-glow"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.href);

                /* ---------- Services link with dropdown ---------- */
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`group relative px-2 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-[1px] flex items-center gap-1 ${
                          isActive
                            ? "text-[#D32F2F]"
                            : "text-neutral-950 hover:text-neutral-900"
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          {link.name}
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#EA8132]/0 blur-md transition-all duration-300 group-hover:bg-[#EA8132]/10" />
                        <span
                          className={`absolute bottom-1 left-1/2 h-[1.5px] -translate-x-1/2 rounded-full bg-[#EA8132] transition-all duration-300 ease-out ${
                            isActive ? "w-[70%]" : "w-0 group-hover:w-[70%]"
                          }`}
                        />
                      </a>

                      {/* ---------- Dropdown Submenu ---------- */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px] z-[70]"
                          >
                            <div className="relative rounded-2xl border border-white/60 bg-white/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.65)] p-2 overflow-hidden">
                              <div className="pointer-events-none absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/60 via-white/20 to-transparent" />

                              {SERVICES_SUBMENU.map((sub, idx) => {
                                const SubIcon = sub.icon;
                                const isSubActive = location.pathname === sub.href;
                                return (
                                  <a
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={(e) => handleNavClick(e, sub.href)}
                                    className={`group/sub relative z-10 flex items-start gap-3.5 rounded-xl p-3 transition-all duration-200 ${
                                      isSubActive
                                        ? "bg-[#D32F2F]/10"
                                        : "hover:bg-neutral-100"
                                    }`}
                                  >
                                    <div
                                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                                        isSubActive
                                          ? "bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-md"
                                          : "bg-neutral-100 text-[#D32F2F] group-hover/sub:bg-gradient-to-br group-hover/sub:from-[#D32F2F] group-hover/sub:to-[#F44336] group-hover/sub:text-white group-hover/sub:shadow-md"
                                      }`}
                                    >
                                      <SubIcon className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <span
                                          className={`text-sm font-bold transition-colors ${
                                            isSubActive
                                              ? "text-[#D32F2F]"
                                              : "text-neutral-900 group-hover/sub:text-[#D32F2F]"
                                          }`}
                                        >
                                          {sub.label}
                                        </span>
                                        <ArrowRight className="h-3.5 w-3.5 text-neutral-400 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300" />
                                      </div>
                                      <p className="text-xs text-neutral-500 mt-0.5 leading-snug">
                                        {sub.desc}
                                      </p>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* ---------- Regular link ---------- */
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`group relative px-2 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-[1px] ${
                      isActive ? "text-[#D32F2F]" : "text-neutral-950 hover:text-neutral-900"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.name}
                    </span>
                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#EA8132]/0 blur-md transition-all duration-300 group-hover:bg-[#EA8132]/10" />
                    <span
                      className={`absolute bottom-1 left-1/2 h-[1.5px] -translate-x-1/2 rounded-full bg-[#EA8132] transition-all duration-300 ease-out ${
                        isActive ? "w-[70%]" : "w-0 group-hover:w-[70%]"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Language Toggle - Desktop */}
            <button
              type="button"
              onClick={toggleLang}
              className="relative z-10 flex h-10 px-3 items-center justify-center gap-1.5 shrink-0 rounded-full border border-neutral-900/20 bg-white/40 text-neutral-950 text-xs font-bold hover:bg-white transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang}
            </button>

            {/* Action: Call Us */}
            <a
              href="tel:+971501234567"
              className="relative z-10 w-10 h-10 rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] text-white hover:text-[#D32F2F] hover:bg-white flex items-center justify-center transition-colors shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
              aria-label="Call Us"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            {/* Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="navigation-drawer"
              className="group relative z-10 flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:border-[#D32F2F] hover:scale-105"
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              <span className="block w-4 h-[1.5px] rounded-full bg-white transition-colors duration-300 group-hover:bg-[#D32F2F]" />
              <span className="block w-4 h-[1.5px] rounded-full bg-white transition-colors duration-300 group-hover:bg-[#D32F2F]" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. EXPANDED MENU DRAWER                                   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl overflow-y-auto p-4 sm:p-6 md:p-10 text-neutral-900 font-comforta flex flex-col justify-between"
          >
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#D32F2F]/15 via-[#F44336]/10 to-[#111111]/10 blur-[120px]" />
              <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#111111]/10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex items-center justify-between border-b border-neutral-200 pb-5 max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-3">
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, "/")}
                  className="flex h-11 px-3 items-center justify-center rounded-2xl bg-white border border-neutral-200 backdrop-blur-md transition-all hover:bg-neutral-100 hover:scale-105"
                >
                  <img
                    src={logoImg}
                    alt="Trip Line"
                    className="h-7 w-auto object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </a>
                <span className="text-neutral-900 font-bold">
                  Trip Line Businessmen Services
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:rotate-90 hover:scale-105"
                aria-label={t("closeMenu")}
              >
                <X className="h-5 w-5 transition-transform" />
              </button>
            </div>

            <div className="relative z-10 my-auto py-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <nav className="lg:col-span-12 flex flex-col gap-2 sm:gap-3">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-transparent transition-all duration-300 hover:border-neutral-200 hover:bg-white/[0.06] hover:translate-x-2"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#D32F2F] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                        {link.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#D32F2F] group-hover:via-[#F44336] group-hover:to-[#111111] group-hover:bg-clip-text transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-0.5 hidden sm:block">
                          {link.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/5 text-neutral-500 group-hover:border-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-neutral-950 group-hover:rotate-[-45deg] transition-all duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="relative z-10 border-t border-neutral-200 pt-4 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#D32F2F]" />
                <span>{t("address")}</span>
              </div>

              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 font-bold text-neutral-900 hover:text-[#111111] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#111111]" />
                <span>+971 50 123 4567</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;