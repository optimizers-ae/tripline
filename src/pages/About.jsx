import { motion } from "framer-motion";
import { Sparkles, Users, Zap, ShieldCheck } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* -----------------------------------------------------------
   Features data
----------------------------------------------------------- */
const FEATURES = [
  {
    icon: Sparkles,
    title: "Customized Service",
    desc: "Tailored solutions for your specific residency & business needs.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Expert advisors with deep knowledge of UAE regulations.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Quick turnaround on all government transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Trusted by hundreds of satisfied clients across the UAE.",
  },
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-white font-comforta">
      {/* ============ NAVBAR ============ */}
      <Navbar />

      <main>
        {/* ============ ABOUT SECTION ============ */}
        <section
          id="about"
          className="relative w-full pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden font-comforta"
        >
          {/* Ambient background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#D32F2F]/8 via-[#F44336]/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#111111]/5 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 md:mb-20"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
                About Trip Line
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 mb-5">
                Your Trusted Partner in{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  UAE Services
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 leading-relaxed">
                At Trip Line Businessmen Services, we are committed to providing
                fast and reliable solutions for all residency and business-related
                services. Our goal is to simplify all government transactions and
                visa services.
              </p>
            </motion.div>

            {/* Two-Column Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-5"
              >
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  To give our clients a{" "}
                  <span className="font-semibold text-neutral-900">
                    seamless and hassle-free experience
                  </span>
                  , our team works with high expertise and professionalism to
                  ensure your transactions are completed accurately and quickly.
                </p>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  Because{" "}
                  <span className="font-semibold text-[#D32F2F]">
                    your comfort is our priority
                  </span>
                  .
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#D32F2F]" />
                    UAE Licensed
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#111111]" />
                    Trusted Advisors
                  </div>
                </div>
              </motion.div>

              {/* Right: Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 md:p-10 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D32F2F] to-[#F44336] bg-clip-text text-transparent">
                        500+
                      </div>
                      <p className="text-xs md:text-sm text-neutral-600 mt-1 font-semibold">
                        Happy Clients
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#111111] to-[#333333] bg-clip-text text-transparent">
                        48h
                      </div>
                      <p className="text-xs md:text-sm text-neutral-600 mt-1 font-semibold">
                        Fast Processing
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D32F2F] to-[#F44336] bg-clip-text text-transparent">
                        100%
                      </div>
                      <p className="text-xs md:text-sm text-neutral-600 mt-1 font-semibold">
                        Success Rate
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#111111] to-[#333333] bg-clip-text text-transparent">
                        10+
                      </div>
                      <p className="text-xs md:text-sm text-neutral-600 mt-1 font-semibold">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-md mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <Footer />
    </div>
  );
};

export default AboutPage;