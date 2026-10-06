import { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  {
    target: 500,
    suffix: '+',
    label: 'businesses successfully supported ',
    highlight: 'across the UAE',
  },
  {
    target: 10,
    suffix: '+',
    label: 'years of combined business ',
    highlight: 'consultancy experience',
  },
  {
    target: 98,
    suffix: '%',
    label: 'client satisfaction across ',
    highlight: 'completed cases',
  },
];

// Testimonial container stagger
const quoteContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Fade up animation
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stats Grid stagger
const statsGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

// Stat card fade-up
const statCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const StatCard = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = stat.target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.target) {
        setCount(stat.target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.target]);

  return (
    <motion.div
      variants={statCardVariants}
      className="group/stat relative rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 md:p-10 md:pb-12 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D32F2F]/50 hover:shadow-xl overflow-hidden "
    >
      {/* Subtle top indicator with brand gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />
      
      {/* Background subtle radial glow on hover */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-[#D32F2F]/10 via-[#F44336]/5 to-transparent blur-2xl opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

      <div className="relative z-10 flex items-center gap-5 sm:block">
        <span className="shrink-0 font-display text-4xl font-extrabold text-neutral-900 sm:text-4xl md:text-5xl transition-all duration-300 group-hover/stat:text-transparent group-hover/stat:bg-gradient-to-r group-hover/stat:from-[#D32F2F] group-hover/stat:via-[#F44336] group-hover/stat:to-[#111111] group-hover/stat:bg-clip-text">
          <span className="tabular-nums">{count}</span>
          <span>{stat.suffix}</span>
        </span>

        <p className="text-sm sm:text-base text-neutral-600 leading-snug sm:leading-relaxed sm:mt-4">
          {stat.label}{' '}
          <span className="font-semibold text-neutral-950">{stat.highlight}</span>
        </p>
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f7f8] pt-28 pb-16 md:pt-40 md:pb-24 font-comforta"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Testimonial Quote with Fade-Up */}
        <motion.blockquote
          variants={quoteContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-18"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F44336]/15 text-[#F44336]"
          >
            <Quote className="h-6 w-6 rotate-180" />
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl font-medium leading-[1.35] tracking-tight text-neutral-900 md:text-3xl lg:text-4xl"
          >
            Their guidance made the entire business setup process clear, fast, and stress-free. From consultation to execution, every step was handled professionally.”
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-neutral-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 font-mono">
              Client Testimonial
            </span>
            <span className="h-px w-12 bg-neutral-300" />
          </motion.div>
        </motion.blockquote>

        {/* Stats Grid with Fade-Up */}
        <motion.div
          variants={statsGridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isInView} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-80"
      />
    </section>
  );
};

export default StatsCounter;
