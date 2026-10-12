import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import HeroCursorGlow from '../components/HeroCursorGlow';

const Hero = () => {
  const { t, isArabic } = useLanguage();

  const scrollToNext = () => {
    document.getElementById('section-2')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // Parent animation controls the stagger between children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Fade-up animation for each item (starts visible so LCP is instant)
  const fadeUpVariants = {
    hidden: {
      opacity: 1,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="hero"
      className="group/hero relative flex min-h-screen items-center justify-center overflow-hidden p-6 text-center bg-neutral-950 transition-all font-comforta"
    >
      {/* High-Performance LCP Hero Background Image */}
      <picture className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <source media="(max-width: 768px)" srcSet="/banner-mobile.webp" type="image/webp" />
        <source media="(min-width: 769px)" srcSet="/banner.webp" type="image/webp" />
        <img
          src="/banner.jpg"
          alt="Tripline Businessmen Services - UAE Business Setup & Corporate Advisory"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Background Overlays & Ambient Lights */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/3 top-12 h-64 w-64 rounded-full bg-white/15 blur-[90px] animate-pulseGlow" />
      </div>

      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-overlay transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4), transparent 65%)',
        }}
      />

      {/* Dark/Warm Gradient for Optimal Typography Contrast */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/15 via-black/15 to-black/30" />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 isolate max-w-3xl space-y-6 pt-24 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform:
            'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
        }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-black/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>

          <span>{t('heroBadge')}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] transition-all duration-300 sm:text-6xl"
        >
          {t('heroTitlePre')}
          <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-white bg-clip-text text-transparent">
            {t('heroTitleHighlight')}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          className="mx-auto max-w-2xl text-base font-normal text-white/95 drop-shadow-md sm:text-lg"
        >
          {t('heroDesc')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <motion.a
            href="/services/corporate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-bold text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-neutral-50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
          >
            <span className="relative z-10 font-comforta">
              {t('heroBtnExplore')}
            </span>

            <span className="relative z-10 text-base transition-transform duration-300 group-hover/btn:translate-x-1 rtl:rotate-180">
              →
            </span>

            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn2 relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/50 bg-black/25 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950 hover:shadow-[0_12px_35px_rgba(255,255,255,0.25)]"
          >
            <span className="relative z-10">
              {t('heroBtnContact')}
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Arrow */}
      {/* <motion.button
        onClick={scrollToNext}
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.25,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group absolute bottom-8 left-1/2 z-20 isolate flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 transition-all duration-300 hover:translate-y-1"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/85 drop-shadow transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          Scroll
        </span>

        <span className="relative flex h-12 w-8 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-black/25 shadow-[0_4px_15px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 group-hover:border-white/90 group-hover:bg-black/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]">
          <span className="animate-scrollArrow text-xl leading-none text-white">
            ↓
          </span>
        </span>
      </motion.button> */}
    </section>
  )
}

export default Hero