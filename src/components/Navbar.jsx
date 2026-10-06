import logoImg from "../assets/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, MapPin } from "lucide-react";

const MOBILE_CTAS = [
  "Talk to an Advisor",
  "48-Hour Bank Pre-Approval",
  "UAE Company Setup & Mortgages",
];

const NAV_LINKS = [
  { num: "01", name: "Home", href: "#hero", desc: "Welcome & Overview" },
  {
    num: "02",
    name: "About Us",
    href: "#about",
    desc: "Our Mission & Advisory Team",
  },
  {
    num: "06",
    name: "Contact & Consultation",
    href: "#contact",
    desc: "Speak to Senior Advisors",
  },
];

const Navbar = () => {
  const [ctaIndex, setCtaIndex] = useState(0);
  const [animState, setAnimState] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Rotating mobile CTA text ticker (identical to original script)
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
  }, []);

  // Lock body scroll and listen for Escape key when menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
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
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. MOBILE NAVBAR (md:hidden)                              */}
      {/* ========================================================= */}
      <div className="fixed top-5 left-4 right-4 z-50 md:hidden font-comforta">
        <div className="relative flex items-center gap-2 min-h-[3.25rem] p-1.5 border border-white/60 rounded-full bg-white/20 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.14)] overflow-hidden">
          {/* Top glass gradient sheen */}
          <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/45 via-white/8 to-transparent" />
          {/* Top-left blurred glow */}
          <div className="pointer-events-none absolute -top-4 left-6 h-8 w-32 rounded-full bg-white/35 blur-md" />

          {/* Logo Button */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="relative z-10 flex h-10 px-2.5 items-center justify-center shrink-0 group rounded-full"
            aria-label="Tripline home"
          >
            <img
              src={logoImg}
              alt="Tripline"
              className="h-7 w-auto max-w-[80px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </a>

          {/* Rotating Text Ticker */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
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

          {/* Action 1: Arrow Up Right (Contact) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative z-10 grid w-10 h-10 shrink-0 place-items-center rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] text-white hover:text-[#D32F2F] hover:bg-white transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
            aria-label="Contact Tripline Businessmen Services"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-[1.2rem] h-[1.2rem] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>

          {/* Action 2: Phone Call */}
          <a
            href="tel:+639602778783"
            className="relative z-10 grid w-10 h-10 shrink-0 place-items-center rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] hover:text-[#D32F2F] hover:bg-white transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.18)] text-white"
            aria-label="Call Tripline Businessmen Services"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-[1.2rem] h-[1.2rem] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Action 3: Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="navigation-drawer"
            className="group relative z-10 flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:border-[#D32F2F] hover:scale-105"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
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
          className="nav-pill-drop fixed top-[18px] left-1/2 z-50 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[950px] isolate"
        >
          <div className="relative rounded-full border border-white/60 bg-white/20 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.14)] p-1.5 flex items-center gap-3 overflow-hidden">
            {/* Top glass gradient sheen */}
            <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/45 via-white/8 to-transparent" />
            {/* Top-left blurred glow */}
            <div className="pointer-events-none absolute -top-4 left-8 h-8 w-40 rounded-full bg-white/35 blur-md" />

            {/* Logo Link */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="relative z-10 flex items-center justify-center w-28 h-10 px-2 rounded-full overflow-hidden transition-all group shrink-0"
              aria-label="Tripline home"
            >
              <img
                src={logoImg}
                alt="Tripline logo"
                width="80"
                height="32"
                className="h-8 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </a>

            {/* Navigation Links */}
            <nav
              aria-label="Main Desktop Navigation"
              className="relative z-10 hidden md:flex items-center flex-1 justify-center gap-6 min-w-0 nav-text-glow"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative px-2 py-2 text-sm font-semibold text-neutral-950 whitespace-nowrap transition-all duration-300 hover:-translate-y-[1px] hover:text-neutral-900"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {link.isBadge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#111111]/20 border border-[#111111]/40 px-1.5 py-0.2 text-[9px] font-bold text-[#008f76] uppercase tracking-wider">
                        <span className="h-1 w-1 rounded-full bg-[#111111] animate-pulse" />
                        Live
                      </span>
                    )}
                  </span>

                  {/* Hover glow */}
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#EA8132]/0 blur-md transition-all duration-300 group-hover:bg-[#EA8132]/10" />

                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-[#EA8132] transition-all duration-300 ease-out group-hover:w-[70%]" />
                </a>
              ))}
            </nav>

            {/* Action 1: Get a Quote */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative z-10 w-10 h-10 rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] text-white hover:text-[#D32F2F] hover:bg-white flex items-center justify-center transition-colors shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
              aria-label="Get a quote"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>

            {/* Action 2: Call Us */}
            <a
              href="tel:+639602778783"
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

            {/* Action 3: Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="navigation-drawer"
              className="group relative z-10 flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-[#D32F2F]/80 bg-[#D32F2F] shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:border-[#D32F2F] hover:scale-105"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <span className="block w-4 h-[1.5px] rounded-full bg-white transition-colors duration-300 group-hover:bg-[#D32F2F]" />
              <span className="block w-4 h-[1.5px] rounded-full bg-white transition-colors duration-300 group-hover:bg-[#D32F2F]" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. LUXURY EXPANDED MENU MODAL / DRAWER                   */}
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
            {/* Ambient Background Glows */}
            <div
              className="pointer-events-none fixed inset-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#D32F2F]/15 via-[#F44336]/10 to-[#111111]/10 blur-[120px]" />
              <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#111111]/10 blur-[100px]" />
            </div>

            {/* Top Header Row */}
            <div className="relative z-10 flex items-center justify-between border-b border-neutral-200 pb-5 max-w-7xl mx-auto w-full">
              {/* Brand Logo & Senior Desk Pill */}
              <div className="flex items-center gap-3">
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, "#hero")}
                  className="flex h-11 px-3 items-center justify-center rounded-2xl bg-white border border-neutral-200 backdrop-blur-md transition-all hover:bg-neutral-100 hover:scale-105"
                >
                  <img
                    src={logoImg}
                    alt="Tripline"
                    className="h-7 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </a>
                <span className="text-neutral-900 font-bold">
                  Tripline Businessmen Services
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:rotate-90 hover:scale-105"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 transition-transform" />
              </button>
            </div>

            {/* Center Content: Two-Column Showcase Grid */}
            <div className="relative z-10 my-auto py-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Numbered Navigation Links */}
              <nav className="lg:col-span-7 flex flex-col gap-2 sm:gap-3">
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
                          {link.isBadge && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#111111]/20 border border-[#111111]/40 px-2 py-0.5 text-[10px] font-bold text-[#111111] uppercase tracking-wider">
                              <span className="h-1 w-1 rounded-full bg-[#111111] animate-ping" />
                              Interactive
                            </span>
                          )}
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

              {/* Right Column: Senior Advisor Card & Direct Quick Connect */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="lg:col-span-5 flex flex-col gap-4"
              >
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl shadow-2xl">
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />

                  <div className="flex items-center gap-4 pb-4 border-b border-neutral-200">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#D32F2F] via-[#F44336] to-[#111111] text-neutral-950 font-black text-lg shadow-lg">
                      GR
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900">Gaurav R.</h4>
                      <p className="text-xs font-semibold text-[#111111]">
                        Senior UAE Advisory &amp; Mortgage Director
                      </p>
                      <p className="text-[11px] text-neutral-500 mt-0.5">
                        Direct consultation on Mainland DED, Freezones &amp; Property Loans
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 py-4 text-xs font-medium text-neutral-300 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#111111]" />
                      <span>48h Pre-Approval</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#F44336]" />
                      <span>Zero Hidden Fees</span>
                    </div>
                  </div>

                  <div className="pt-4 grid grid-cols-2 gap-2.5">
                    <a
                      href="mailto:info@tripline.com"
                      className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white/5 py-2.5 text-xs font-bold text-neutral-900 hover:bg-neutral-100 hover:border-[#D32F2F] transition-colors"
                    >
                      <Mail className="h-4 w-4 text-[#D32F2F]" />
                      <span>Email Advisor</span>
                    </a>

                    <a
                      href="https://wa.me/639602778783"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#111111]/40 bg-[#111111]/10 py-2.5 text-xs font-bold text-[#111111] hover:bg-[#111111]/20 transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] py-4 text-sm font-extrabold uppercase tracking-wider text-neutral-950 shadow-xl hover:brightness-110 active:scale-[0.99] transition-all"
                >
                  <span>Schedule Discovery Consultation</span>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </motion.div> */}
            </div>

            <div className="relative z-10 border-t border-neutral-200 pt-4 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#D32F2F]" />
                <span>
                  UAE Business Centre, Sheikh Zayed Road, Dubai, United Arab
                  Emirates
                </span>
              </div>

              <a
                href="tel:+639602778783"
                className="flex items-center gap-2 font-bold text-neutral-900 hover:text-[#111111] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#111111]" />
                <span>+63 960 277 8783</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
