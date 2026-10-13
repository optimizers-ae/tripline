import logoImg from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ChevronDown,
  Building2,
  Users,
  FileText,
  Landmark,
  Briefcase,
  UserCheck,
  PlaneTakeoff,
  Scale,
  RefreshCw,
  Globe2,
  Award,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  const [ctaIndex, setCtaIndex] = useState(0);
  const [animState, setAnimState] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'corporate' | 'individuals' | null

  const leaveTimerRef = useRef(null);
  const navContainerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = (menuKey) => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setActiveDropdown(menuKey);
  };

  const handleDropdownLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  // Main Corporate Services for Popup Window
  const CORPORATE_POPUP_SERVICES = [
    {
      icon: FileText,
      title: t("navCorp1"),
      desc: t("navCorp1Desc"),
      href: "/services/corporate#corp1Title",
    },
    {
      icon: Building2,
      title: t("navCorp2"),
      desc: t("navCorp2Desc"),
      href: "/services/corporate#corp2Title",
    },
    {
      icon: Landmark,
      title: t("navCorp3"),
      desc: t("navCorp3Desc"),
      href: "/services/corporate#corp3Title",
    },
    {
      icon: Briefcase,
      title: t("navCorp4"),
      desc: t("navCorp4Desc"),
      href: "/services/corporate#corp4Title",
    },
    {
      icon: Users,
      title: t("navCorp6"),
      desc: t("navCorp6Desc"),
      href: "/services/corporate#corp6Title",
    },
    {
      icon: UserCheck,
      title: t("navCorp14"),
      desc: t("navCorp14Desc"),
      href: "/services/corporate#corp14Title",
    },
  ];

  // Main Individuals Services for Popup Window
  const INDIVIDUALS_POPUP_SERVICES = [
    {
      icon: Users,
      title: t("navInd1"),
      desc: t("navInd1Desc"),
      href: "/services/individuals#service1Title",
    },
    {
      icon: Award,
      title: t("navInd3"),
      desc: t("navInd3Desc"),
      href: "/services/individuals#service3Title",
    },
    {
      icon: PlaneTakeoff,
      title: t("navInd5"),
      desc: t("navInd5Desc"),
      href: "/services/individuals#service5Title",
    },
    {
      icon: RefreshCw,
      title: t("navInd12"),
      desc: t("navInd12Desc"),
      href: "/services/individuals#service12Title",
    },
    {
      icon: Scale,
      title: t("navInd14"),
      desc: t("navInd14Desc"),
      href: "/services/individuals#service14Title",
    },
    {
      icon: Globe2,
      title: t("navIndTour"),
      desc: t("navIndTourDesc"),
      href: "/services/individuals#tourist-visas",
    },
  ];

  // Build links using translations: Home, About Us, Corporate Services, Individuals Services, Contact
  const NAV_LINKS = [
    { num: "01", name: t("home"), href: "/", desc: t("homeDesc"), isRoute: true },
    { num: "02", name: t("aboutUs"), href: "/about", desc: t("aboutDesc"), isRoute: true },
    {
      num: "03",
      key: "corporate",
      name: t("corporateServices"),
      href: "/services/corporate",
      desc: t("corporateNavDesc"),
      isRoute: true,
      hasDropdown: true,
      dropdownItems: CORPORATE_POPUP_SERVICES,
      headerTitle: t("mainServicesCorporate"),
      moreHref: "/services/corporate",
    },
    {
      num: "04",
      key: "individuals",
      name: t("individualsServices"),
      href: "/services/individuals",
      desc: t("individualsNavDesc"),
      isRoute: true,
      hasDropdown: true,
      dropdownItems: INDIVIDUALS_POPUP_SERVICES,
      headerTitle: t("mainServicesIndividuals"),
      moreHref: "/services/individuals",
    },
    { num: "05", name: t("contact"), href: "/contact", desc: t("contactDesc"), isRoute: true },
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
  }, [MOBILE_CTAS.length]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll and Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
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
    setActiveDropdown(null);

    const [pathname, hash] = href.split("#");
    const targetPath = pathname || "/";

    if (location.pathname === targetPath && hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-4", "ring-[#D32F2F]/40", "shadow-2xl", "scale-[1.02]");
        setTimeout(() => {
          el.classList.remove("ring-4", "ring-[#D32F2F]/40", "shadow-2xl", "scale-[1.02]");
        }, 2400);
      }
      return;
    }

    if (hash) {
      navigate(href);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-4", "ring-[#D32F2F]/40", "shadow-2xl", "scale-[1.02]");
          setTimeout(() => {
            el.classList.remove("ring-4", "ring-[#D32F2F]/40", "shadow-2xl", "scale-[1.02]");
          }, 2400);
        }
      }, 350);
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
            className="relative z-10 flex h-9 px-2.5 items-center cursor-pointer justify-center gap-1 shrink-0 rounded-full border border-neutral-900/20 bg-white/40 text-neutral-950 text-[0.7rem] font-bold hover:bg-white transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-3 h-3" />
            {lang === "EN" ? "العربية" : "English"}
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
            href="tel:+971544442029"
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
      <div className="hidden md:block font-comforta" ref={navContainerRef}>
        <div
          style={{ animationDelay: "0.8s" }}
          className="nav-pill-drop fixed top-[18px] left-1/2 z-50 -translate-x-1/2 w-[calc(100vw-40px)] max-w-[1180px] isolate"
        >
          <div className="relative rounded-full border border-white/60 bg-white/20 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.14)] p-1.5 flex items-center gap-2 overflow-visible">
            <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/45 via-white/8 to-transparent" />
            <div className="pointer-events-none absolute -top-4 left-8 h-8 w-40 rounded-full bg-white/35 blur-md" />

            {/* Logo */}
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
              className="relative z-10 hidden md:flex items-center flex-1 justify-center gap-2 lg:gap-4 xl:gap-5 min-w-0 nav-text-glow"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname === link.href || location.pathname.startsWith(link.href + "/");

                /* ---------- Link with Hover Pop-up Window ---------- */
                if (link.hasDropdown) {
                  const isDropdownOpen = activeDropdown === link.key;

                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(link.key)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`group relative px-2.5 py-1.5 text-[13px] lg:text-sm font-semibold whitespace-nowrap transition-colors duration-150 flex items-center gap-1 ${
                          isActive || isDropdownOpen
                            ? "text-[#D32F2F]"
                            : "text-neutral-950 hover:text-[#D32F2F]"
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          <span className="relative pb-1">
                            {link.name}
                            <span
                              className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#D32F2F] transition-transform duration-150 ease-out origin-center will-change-transform ${
                                isActive || isDropdownOpen
                                  ? "scale-x-100 opacity-100"
                                  : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                              }`}
                            />
                          </span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-150 ${
                              isDropdownOpen ? "rotate-180 text-[#D32F2F]" : ""
                            }`}
                          />
                        </span>
                      </a>

                      {/* ---------- Popped Window Listing Main Services ---------- */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4, transition: { duration: 0.1 } }}
                            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                            style={{ willChange: "transform, opacity" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[380px] sm:w-[420px] z-[70] before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
                            onMouseEnter={() => {
                              if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
                            }}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="relative rounded-2xl border border-neutral-200/90 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] p-2.5 overflow-hidden text-neutral-900">
                              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />

                              {/* Category Header */}
                              <div className="relative z-10 px-2.5 py-1.5 mb-1 flex items-center justify-between border-b border-neutral-100 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                                <span className="flex items-center gap-1.5 text-[#D32F2F]">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F]" />
                                  {link.headerTitle}
                                </span>
                                <span className="text-[10px] text-neutral-400 font-medium">
                                  {link.dropdownItems.length} {lang === "AR" ? "خدمات رئيسية" : "Main Services"}
                                </span>
                              </div>

                              {/* Main Services List */}
                              <div className="relative z-10 flex flex-col gap-1 py-0.5">
                                {link.dropdownItems.map((item) => {
                                  const ItemIcon = item.icon;
                                  return (
                                    <a
                                      key={item.href}
                                      href={item.href}
                                      onClick={(e) => handleNavClick(e, item.href)}
                                      className="group/item relative flex items-center gap-3 rounded-xl p-2 transition-all duration-150 ease-out hover:bg-neutral-100/90"
                                    >
                                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[#D32F2F] group-hover/item:bg-[#D32F2F] group-hover/item:text-white transition-all duration-150 ease-out">
                                        <ItemIcon className="h-4 w-4" />
                                      </div>

                                      <div className="min-w-0 flex-1">
                                        <p className="text-[13px] font-bold text-neutral-900 group-hover/item:text-[#D32F2F] transition-colors duration-150 leading-snug line-clamp-1">
                                          {item.title}
                                        </p>
                                        <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 leading-tight">
                                          {item.desc}
                                        </p>
                                      </div>

                                      <div className="shrink-0 text-neutral-400 group-hover/item:text-[#D32F2F] transition-colors duration-150">
                                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 rtl:rotate-180 rtl:group-hover/item:-translate-x-0 transition-all duration-150 ease-out" />
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>

                              {/* "Click for more" Footer Link */}
                              <div className="relative z-10 border-t border-neutral-100 mt-1.5 pt-2 px-1">
                                <a
                                  href={link.moreHref}
                                  onClick={(e) => handleNavClick(e, link.moreHref)}
                                  className="group/more flex items-center justify-between w-full px-3 py-2 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100 hover:from-[#D32F2F]/10 hover:to-[#D32F2F]/5 border border-neutral-200/80 hover:border-[#D32F2F]/40 transition-colors duration-150"
                                >
                                  <span className="text-xs font-extrabold text-neutral-900 group-hover/more:text-[#D32F2F] transition-colors duration-150">
                                    {t("clickForMore")}
                                  </span>
                                  <span className="flex items-center gap-1 text-xs font-bold text-[#D32F2F] group-hover/more:translate-x-1 rtl:group-hover/more:-translate-x-1 transition-transform duration-150">
                                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                                  </span>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* ---------- Standard Nav Link ---------- */
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`group relative px-2.5 py-1.5 text-[13px] lg:text-sm font-semibold whitespace-nowrap transition-colors duration-150 flex items-center ${
                      isActive
                        ? "text-[#D32F2F]"
                        : "text-neutral-950 hover:text-[#D32F2F]"
                    }`}
                  >
                    <span className="relative z-10 pb-1">
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#D32F2F] transition-transform duration-150 ease-out origin-center will-change-transform ${
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Language Toggle - Desktop */}
            <button
              type="button"
              onClick={toggleLang}
              className="relative z-10 flex h-10 px-3 cursor-pointer items-center justify-center gap-1.5 shrink-0 rounded-full border border-neutral-900/20 bg-white/40 text-neutral-950 text-xs font-bold hover:bg-white transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "EN" ? "العربية" : "English"}
            </button>

            {/* Action: Call Us */}
            <a
              href="tel:+97165734303"
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
                  {lang === "AR" ? "تريب لاين لخدمات رجال الأعمال" : "Trip Line Businessmen Services"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleLang}
                  className="flex h-10 px-3 items-center cursor-pointer justify-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 text-xs font-bold hover:bg-white transition-colors"
                  aria-label="Toggle language"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {lang === "EN" ? "العربية" : "English"}
                </button>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:rotate-90 hover:scale-105"
                  aria-label={t("closeMenu")}
                >
                  <X className="h-5 w-5 transition-transform" />
                </button>
              </div>
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
                    className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-transparent transition-all duration-300 hover:border-neutral-200 hover:bg-white/[0.06] hover:translate-x-2 rtl:hover:-translate-x-2"
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
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </div>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="relative z-10 border-t border-neutral-200 pt-4 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#D32F2F] shrink-0" />
                <a
                  href="https://maps.app.goo.gl/ML8N7BxxDxtjg6Nw7?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors"
                >
                  {t("address")}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 font-semibold text-neutral-900">
                <a
                  href="tel:+97165734303"
                  className="flex items-center gap-1.5 hover:text-[#D32F2F] transition-colors"
                  aria-label="Call Landline +971 6 573 4303"
                >
                  <Phone className="h-3.5 w-3.5 text-[#D32F2F] shrink-0" />
                  <span>{t("footerTelLabel")}</span>
                  <span dir="ltr" className="inline-block select-all font-sans">+971 6 573 4303</span>
                </a>
                <span className="hidden sm:inline text-neutral-300">•</span>
                <a
                  href="tel:+971544442029"
                  className="flex items-center gap-1.5 hover:text-[#D32F2F] transition-colors"
                  aria-label="Call Mobile +971 54444 2029"
                >
                  <Phone className="h-3.5 w-3.5 text-[#D32F2F] shrink-0" />
                  <span>{t("footerMobLabel")}</span>
                  <span dir="ltr" className="inline-block select-all font-sans">+971 54444 2029</span>
                </a>
                <span className="hidden sm:inline text-neutral-300">•</span>
                <a
                  href="mailto:inquiry@tripline.ae"
                  className="flex items-center gap-1.5 hover:text-[#D32F2F] transition-colors"
                  aria-label="Email inquiry@tripline.ae"
                >
                  <Mail className="h-3.5 w-3.5 text-[#D32F2F]" />
                  <span>inquiry@tripline.ae</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;