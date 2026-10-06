import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-36 font-comforta"
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] rounded-full bg-gradient-to-tr from-[#D32F2F]/20 via-[#F44336]/15 to-[#111111]/15 blur-[120px] animate-pulseGlow" />
        <div className="absolute -top-12 right-1/4 h-72 w-72 rounded-full bg-[#D32F2F]/10 blur-[100px] animate-floatSlow" />
        <div className="absolute -bottom-12 left-1/4 h-72 w-72 rounded-full bg-[#111111]/10 blur-[100px] animate-floatSlowReverse" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {/* Top Pill Badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-neutral-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D32F2F]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D32F2F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D32F2F]" />
              </span>
              <span>Tripline Senior Advisory Desk</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl leading-18"
          >
            Ready to secure your{" "}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              UAE success?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            Let’s talk about your business setup or property financing. No
            pressure, just a clear, professional conversation about what’s
            possible.
          </motion.p>

          {/* Primary & Secondary CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Email / Consultation Button */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="mailto:info@tripline.com"
                className="inline-flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-4 font-bold uppercase tracking-wider text-white text-xs sm:text-sm transition-colors duration-200 hover:bg-neutral-800"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="h-4 w-4 text-[#D32F2F]" />
              </a>
            </motion.div>

            {/* Secondary WhatsApp Button */}
            <motion.a
              href="https://wa.me/639602778783"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-neutral-300 bg-white/90 px-7 py-4 text-xs sm:text-sm font-bold text-neutral-800 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:border-[#111111] hover:text-[#00A389]"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Trust Guarantees Row */}
          <motion.div
            variants={fadeUpVariants}
            className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
              Direct Senior Access
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F44336]" />
              48-Hour Bank Pre-Approval
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F]" />
              Zero Hidden Scopes
            </span>
          </motion.div>

          {/* Direct Contact Cards */}
          <motion.div
            variants={fadeUpVariants}
            className="pt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <motion.a
              href="mailto:info@tripline.com"
              whileHover={{ y: -2 }}
              className="group flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-700 transition-colors hover:text-[#D32F2F]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-sm border border-neutral-200 text-[#D32F2F] group-hover:scale-110 transition-transform">
                <Mail className="h-4 w-4" />
              </div>
              <span>info@tripline.com</span>
            </motion.a>

            <motion.a
              href="tel:+639602778783"
              whileHover={{ y: -2 }}
              className="group flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-700 transition-colors hover:text-[#111111]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm border border-neutral-200 text-[#111111] group-hover:scale-110 transition-transform">
                <Phone className="h-4 w-4" />
              </div>
              <span>+63 960 277 8783</span>
            </motion.a>
          </motion.div>

          {/* Physical Location */}
          <motion.div
            variants={fadeUpVariants}
            className="pt-2 flex items-center justify-center gap-2 text-xs text-neutral-500 max-w-lg mx-auto"
          >
            <MapPin className="h-4 w-4 shrink-0 text-neutral-400" />
            <span>
              UAE Business Centre, Sheikh Zayed Road, Dubai, United Arab
              Emirates
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
