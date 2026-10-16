import { motion } from "framer-motion";
import {
  Briefcase,
  CreditCard,
  Globe,
  ShieldCheck,
  FileKey,
  Users,
  FileSignature,
  Landmark,
  Stamp,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useRef } from "react";

const SERVICES = [
  {
    id: "01",
    number: "01 / 09",
    titleKey: "homeSvc1Title",
    tagKey: "homeSvc1Tag",
    descKey: "homeSvc1Desc",
    icon: Briefcase,
    accent: "#D32F2F",
  },
  {
    id: "02",
    number: "02 / 09",
    titleKey: "homeSvc2Title",
    tagKey: "homeSvc2Tag",
    descKey: "homeSvc2Desc",
    icon: CreditCard,
    accent: "#D32F2F",
  },
  {
    id: "03",
    number: "03 / 09",
    titleKey: "homeSvc3Title",
    tagKey: "homeSvc3Tag",
    descKey: "homeSvc3Desc",
    icon: Globe,
    accent: "#F44336",
  },
  {
    id: "04",
    number: "04 / 09",
    titleKey: "homeSvc4Title",
    tagKey: "homeSvc4Tag",
    descKey: "homeSvc4Desc",
    icon: ShieldCheck,
    accent: "#111111",
  },
  {
    id: "05",
    number: "05 / 09",
    titleKey: "homeSvc5Title",
    tagKey: "homeSvc5Tag",
    descKey: "homeSvc5Desc",
    icon: FileKey,
    accent: "#D32F2F",
  },
  {
    id: "06",
    number: "06 / 09",
    titleKey: "homeSvc6Title",
    tagKey: "homeSvc6Tag",
    descKey: "homeSvc6Desc",
    icon: Users,
    accent: "#F44336",
  },
  {
    id: "07",
    number: "07 / 09",
    titleKey: "homeSvc7Title",
    tagKey: "homeSvc7Tag",
    descKey: "homeSvc7Desc",
    icon: FileSignature,
    accent: "#111111",
  },
  {
    id: "08",
    number: "08 / 09",
    titleKey: "homeSvc8Title",
    tagKey: "homeSvc8Tag",
    descKey: "homeSvc8Desc",
    icon: Landmark,
    accent: "#D32F2F",
  },
  {
    id: "09",
    number: "09 / 09",
    titleKey: "homeSvc9Title",
    tagKey: "homeSvc9Tag",
    descKey: "homeSvc9Desc",
    icon: Stamp,
    accent: "#F44336",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  const { t, isArabic } = useLanguage();

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      // Auto-slide only on mobile
      if (window.innerWidth >= 768) return;

      const cards = Array.from(slider.children);
      if (!cards.length) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // Detect current position after manual swiping
      const currentScroll = slider.scrollLeft;

      const nearestIndex = cards.reduce((closest, card, index) => {
        const cardPosition =
          card.getBoundingClientRect().left -
          slider.getBoundingClientRect().left +
          currentScroll;

        const closestPosition =
          cards[closest].getBoundingClientRect().left -
          slider.getBoundingClientRect().left +
          currentScroll;

        return Math.abs(cardPosition - currentScroll) <
          Math.abs(closestPosition - currentScroll)
          ? index
          : closest;
      }, 0);

      currentIndex = nearestIndex + 1;

      // Return to first card after the last card
      if (currentIndex >= cards.length || slider.scrollLeft >= maxScroll - 5) {
        currentIndex = 0;
      }

      const targetCard = cards[currentIndex];

      const targetLeft =
        targetCard.getBoundingClientRect().left -
        slider.getBoundingClientRect().left +
        slider.scrollLeft;

      slider.scrollTo({
        left: currentIndex === 0 ? 0 : targetLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-32 font-comforta"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-neutral-600 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D32F2F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D32F2F]" />
            </span>
            {t("homeAboutBadge")}
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900"
          >
            {t("homeAboutTitlePre")}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              {t("homeAboutTitleHighlight")}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="mt-4 text-base text-neutral-600 leading-relaxed"
          >
            {t("homeAboutDesc")}
          </motion.p>
        </motion.div>

        {/* Featured Visuals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { img: "/service_visa.jpg", titleKey: "homeVisualVisa" },
            { img: "/service_contract.jpg", titleKey: "homeVisualCorporate" },
            { img: "/service_government.jpg", titleKey: "homeVisualGov" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="group relative overflow-hidden rounded-3xl h-64 md:h-80 shadow-lg"
            >
              <img
                src={item.img}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <h3
                className={`absolute bottom-6 text-xl font-bold text-white ${isArabic ? "right-6 text-right" : "left-6 text-left"}`}
              >
                {t(item.titleKey)}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* List of 9 Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          ref={sliderRef}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x md:snap-none snap-mandatory gap-5 md:gap-6 pb-8 md:pb-0 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariants}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 border border-neutral-100 shadow-sm transition-all hover:shadow-xl hover:border-[#D32F2F]/30 w-[85vw] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D32F2F]/10 text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {t(service.tagKey)}
                  </h4>
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
