import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Shield,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Layers,
  Clock,
} from 'lucide-react';
import { MagneticCursor } from './MouseTrackingEffect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-32 font-comforta"
    >
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#D32F2F]/12 via-[#F44336]/8 to-[#111111]/10 blur-[130px]" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#111111]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header with Fade-Up */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Top Pill Badge */}
          <motion.div variants={fadeUpVariants} className="inline-flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-neutral-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D32F2F]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D32F2F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D32F2F]" />
              </span>
              <span>The Consultancy Difference</span>
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl"
          >
            Why Businesses{' '}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              Choose Us.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            We don't just provide services. We understand your goals, create the right strategy,
            and guide you through every step of building a successful business in the UAE.
          </motion.p>
        </motion.div>

        {/* Bento Grid with Animated Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3"
        >
          {/* Card 1: We Learn Your Business First (Spans 2 cols, 2 rows) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#D32F2F]/50 group-hover/card:shadow-[0_20px_50px_rgba(216,170,93,0.18)]">
              {/* Top Accent Line with Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-transparent transition-all duration-500 group-hover/card:h-1.5" />

              {/* Ambient internal light */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#D32F2F]/10 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100 opacity-40" />

              <div className="relative z-10 p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D32F2F]/15 text-[#D32F2F] border border-[#D32F2F]/30 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:bg-[#D32F2F]/25">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover/card:text-[#D32F2F]">
                      Expert Company Formation
                    </h3>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Strategy First
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-300/80">
                  From Mainland DED licensing to Free Zone and Offshore setups, we tailor the legal structure and jurisdiction to match your business goals, minimizing costs and maximizing growth potential.
                </p>

                {/* Feature Tags List */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#111111]" />
                    Mainland & Freezone Setup
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#111111]" />
                    Offshore Company Formation
                  </span>
                </div>
              </div>

              {/* Media Container with Smooth Hover Scale & Shine */}
              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[15rem] flex-1"
              >
                <div className="relative h-full w-full min-h-[15rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/FASTER-poster.webp"
                    alt="Understand Business Process Strategy"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/30 to-transparent" />

                  {/* Subtle shine sweep */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </MagneticCursor>

            </div>
          </motion.div>

          {/* Card 2: One Team. Complete Support. (Spans 2 cols, row 1) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 lg:col-span-2"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#F44336]/50 group-hover/card:shadow-[0_16px_40px_rgba(238,171,33,0.15)] sm:flex-row">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F44336] transition-all duration-500 group-hover/card:h-1.5" />

              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[11rem] sm:w-1/2 shrink-0 self-stretch"
              >
                <div className="relative h-full w-full min-h-[11rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/SCALE-poster.webp"
                    alt="One Dedicated Team Support"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#07090e]" />
                </div>
              </MagneticCursor>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F44336]/15 text-[#F44336] border border-[#F44336]/30 transition-transform duration-300 group-hover/card:scale-110">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover/card:text-[#F44336]">
                    Strategic Mortgage Consultancy
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-neutral-300/80">
                  Secure the best financing options for your residential or commercial properties in Dubai. Our experts negotiate on your behalf to get the most favorable rates.
                </p>

                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#F44336]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Residential & Commercial Focus</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Transparent Advice. No Hidden Steps. (Spans 2 cols, row 2) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 lg:col-span-2"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#2563EB]/50 group-hover/card:shadow-[0_16px_40px_rgba(37,99,235,0.15)] sm:flex-row">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB] transition-all duration-500 group-hover/card:h-1.5" />

              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[11rem] sm:w-1/2 shrink-0 self-stretch"
              >
                <div className="relative h-full w-full min-h-[11rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/poster.webp"
                    alt="Transparent Honest Advice"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#07090e]" />
                </div>
              </MagneticCursor>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30 transition-transform duration-300 group-hover/card:scale-110">
                    <Shield className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover/card:text-[#2563EB]">
                    Transparent Pricing & Processes
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-neutral-300/80">
                  We believe in complete honesty. You get upfront pricing, realistic timelines for approvals, and a clear breakdown of fees without any hidden retainers.
                </p>

                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#60A5FA]">
                  <Award className="h-3.5 w-3.5" />
                  <span>100% Guaranteed Fee Clarity</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Support That Continues Beyond Setup (Spans all 4 cols, row 3) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group/card col-span-1 md:col-span-2 lg:col-span-4"
          >
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.12] bg-[#07090e] shadow-xl transition-all duration-500 group-hover/card:border-[#111111]/50 group-hover/card:shadow-[0_20px_50px_rgba(0,201,167,0.15)] md:flex-row md:items-center">
              {/* Top Accent Line with Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111111] via-[#2563EB] to-[#D32F2F] transition-all duration-500 group-hover/card:h-1.5" />

              <MagneticCursor
                magneticFactor={0.55}
                blendMode="exclusion"
                cursorSize={40}
                className="min-h-[13rem] md:w-[36%] md:max-w-[22rem] shrink-0 self-stretch"
              >
                <div className="relative h-full w-full min-h-[13rem] overflow-hidden bg-neutral-950">
                  <img
                    src="/SEARCH-poster.webp"
                    alt="Support That Continues Beyond Setup"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-85"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#07090e]" />
                </div>
              </MagneticCursor>

              <div className="flex-1 p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111]/15 text-[#111111] border border-[#111111]/30 transition-transform duration-300 group-hover/card:scale-110">
                      <Search className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover/card:text-[#111111]">
                      End-to-End PRO & Golden Visa Services
                    </h3>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#111111]/30 bg-[#111111]/10 px-3 py-1 text-xs font-semibold text-[#111111]">
                    <Clock className="h-3.5 w-3.5" />
                    Lifetime Advisory
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-300/80">
                  Our support doesn't end with a trade license. We handle your employee visas, UAE Golden Visa applications, corporate tax registration, and ongoing government liaison services.
                </p>

                {/* Additional Value Highlights */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
                    Golden Visa Processing
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F44336]" />
                    Corporate Tax &amp; VAT
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F]" />
                    PRO &amp; Document Attestation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
