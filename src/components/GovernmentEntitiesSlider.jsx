import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";
import slider7 from "../assets/slider7.jpg";
import slider8 from "../assets/slider8.png";
import slider9 from "../assets/slider9.jpg";
import slider10 from "../assets/slider10.png";
import slider11 from "../assets/slider11.png";
import slider12 from "../assets/slider12.png";
import slider13 from "../assets/slider13.png";

const GOV_ENTITIES = [
  {
    id: 1,
    src: slider1,
    nameEN: "Ajman Free Zone",
    nameAR: "منطقة عجمان الحرة",
    isDark: true,
  },
  {
    id: 2,
    src: slider2,
    nameEN: "Ajman Department of Economic Development",
    nameAR: "دائرة التنمية الاقتصادية - حكومة عجمان",
  },
  {
    id: 3,
    src: slider3,
    nameEN: "Federal Authority for Identity & Citizenship (ICP)",
    nameAR: "الهيئة الاتحادية للهوية والجنسية والجمارك",
  },
  {
    id: 4,
    src: slider4,
    nameEN: "Ministry of Human Resources & Emiratisation (MOHRE)",
    nameAR: "وزارة الموارد البشرية والتوطين",
  },
  {
    id: 5,
    src: slider5,
    nameEN: "Emirates Health Services (EHS)",
    nameAR: "مؤسسة الإمارات للخدمات الصحية",
  },
  {
    id: 6,
    src: slider6,
    nameEN: "Ministry of Foreign Affairs (MOFA)",
    nameAR: "وزارة الخارجية",
  },
  {
    id: 7,
    src: slider7,
    nameEN: "Ministry of Education",
    nameAR: "وزارة التربية والتعليم",
  },
  {
    id: 8,
    src: slider8,
    nameEN: "Tas-heel Government Services",
    nameAR: "مراكز تسهيل للخدمات الحكومية",
  },
  {
    id: 9,
    src: slider9,
    nameEN: "UAE Health Insurance Services",
    nameAR: "خدمات التأمين الصحي",
  },
  {
    id: 10,
    src: slider10,
    nameEN: "UAE Ministry of Economy",
    nameAR: "وزارة الاقتصاد",
  },
  {
    id: 11,
    src: slider11,
    nameEN: "Ministry of Health & Prevention (MOHAP)",
    nameAR: "وزارة الصحة ووقاية المجتمع",
  },
  {
    id: 12,
    src: slider12,
    nameEN: "Etihad Water and Electricity (EtihadWE)",
    nameAR: "الاتحاد للماء والكهرباء",
  },
  {
    id: 13,
    src: slider13,
    nameEN: "Laiq Medical Examination Center",
    nameAR: "مركز لائق للفحص الطبي",
  },
];

const GovernmentEntitiesSlider = () => {
  const { t, lang } = useLanguage();
  const isArabic = lang === "AR";

  // Duplicate items for continuous seamless loop without jump
  const loopList = [...GOV_ENTITIES, ...GOV_ENTITIES, ...GOV_ENTITIES];

  return (
    <section
      id="government-entities"
      className="relative w-full py-12 sm:py-16 bg-white border-y border-neutral-200/80 overflow-hidden font-comforta select-none"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#D32F2F]/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#111111]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
            {t("govEntitiesBadge")}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {t("govEntitiesTitle")}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {t("govEntitiesSubtitle")}
          </p>
        </motion.div>
      </div>

      {/* Endless Smooth Movement Slider */}
      <div
        dir="ltr"
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max gap-4 sm:gap-6 py-4 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: "36s" }}
        >
          {loopList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-white p-3 sm:p-4 min-w-[170px] sm:min-w-[210px] h-[95px] sm:h-[110px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-xl hover:-translate-y-1.5 shrink-0"
              title={isArabic ? item.nameAR : item.nameEN}
            >
              {/* Top hover accent line */}
              <span className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex h-12 sm:h-14 w-full items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt={isArabic ? item.nameAR : item.nameEN}
                  loading="lazy"
                  className={`h-full w-auto max-h-12 sm:max-h-14 max-w-[140px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105 ${
                    item.isDark
                      ? "rounded-lg bg-neutral-950 px-3 py-1.5 shadow-sm"
                      : ""
                  }`}
                />
              </div>

              <span className="mt-1 text-[10px] sm:text-[11px] font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors line-clamp-1 text-center max-w-[150px] sm:max-w-[180px]">
                {isArabic ? item.nameAR : item.nameEN}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentEntitiesSlider;
