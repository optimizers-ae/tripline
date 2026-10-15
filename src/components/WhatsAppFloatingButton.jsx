import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "../context/LanguageContext";

const WhatsAppFloatingButton = () => {
  const { t, isArabic } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show after slight delay for elegant page entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/971544442029?text=${encodeURIComponent(
    t("whatsappPreFill") || "Hello Tripline Businessmen Services, I would like to inquire about your services."
  )}`;

  if (!isVisible) return null;

  return (
    <aside
      aria-label={t("whatsappAriaLabel")}
      className="fixed bottom-6 end-6 z-40 flex items-center gap-3 select-none pointer-events-auto"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {/* Interactive Tooltip Callout */}
      <AnimatePresence>
        {(showTooltip || isHovered) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: isArabic ? -12 : 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: isArabic ? -12 : 12 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="hidden sm:flex items-center gap-2.5 rounded-2xl border border-neutral-200/80 bg-white/95 px-3.5 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-md text-neutral-900"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col text-start hover:opacity-90 transition-opacity"
            >
              <span className="text-xs font-bold text-neutral-900 leading-tight">
                {t("whatsappFloatingTooltip")}
              </span>
              <span dir="ltr" className="font-mono text-[11px] font-bold text-emerald-600">
                00971544442029
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-neutral-500 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t("whatsappFloatingStatus")}
              </span>
            </a>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-neutral-400 hover:text-neutral-700 p-0.5 rounded-md hover:bg-neutral-100 transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft Pulse Ping Ring */}
        {/* <span
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping"
          style={{ animationDuration: "2.8s" }}
        /> */}

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-14 w-14 sm:h-[60px] sm:w-[60px] items-center justify-center rounded-full bg-gradient-to-tr from-[#20ba5a] via-[#25D366] to-[#2ce06e] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_35px_rgba(37,211,102,0.65)] transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label={t("whatsappAriaLabel")}
          title={t("whatsappFloatingTooltip")}
        >
          {/* Subtle glossy overlay */}
          <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/35 via-transparent to-transparent opacity-80" />

          {/* WhatsApp SVG Icon */}
          <WhatsAppIcon className="relative z-10 h-7 w-7 sm:h-8 sm:w-8 fill-current drop-shadow-sm" />

          {/* Online green indicator badge */}
          <span className="absolute top-0.5 end-0.5 flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
          </span>
        </motion.a>
      </motion.div>
    </aside>
  );
};

export default WhatsAppFloatingButton;
