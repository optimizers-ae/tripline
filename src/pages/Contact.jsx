import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* -----------------------------------------------------------
   Contact Info Cards — Client's ACTUAL details (from Instagram)
   Office 2004, Office Tower, Grand Mall Rashidiya, Ajman, UAE
----------------------------------------------------------- */
const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 50 123 4567", // ← client ka actual number yahan daalein
    href: "tel:+971501234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@tripline.ae", // ← client ka actual email yahan daalein
    href: "mailto:info@tripline.ae",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Office 2004, Office Tower, Grand Mall Rashidiya, Ajman, UAE",
    href: "https://maps.google.com/?q=Grand+Mal+Rashidiya+Ajman+UAE",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sat – Thu, 9AM – 7PM",
    href: "#",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to your backend / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative min-h-screen bg-white font-comforta">
      {/* ============ NAVBAR ============ */}
      <Navbar />

      <main>
        {/* ============ HERO BANNER ============ */}
        <section className="relative w-full pt-32 md:pt-40 pb-10 md:pb-14 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#D32F2F]/10 via-[#F44336]/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#111111]/5 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
                Contact & Consultation
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-[1.05]">
                Let's Talk About{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  Your Needs
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 leading-relaxed">
                Speak to a senior advisor today and get expert guidance on
                visas, business setup, or any UAE government service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============ CONTACT FORM + INFO ============ */}
        <section
          id="contact"
          className="relative w-full py-12 md:py-20 bg-gradient-to-b from-white to-neutral-50 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#D32F2F]/8 via-[#F44336]/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#111111]/5 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
              {/* ---------- Left: Contact Info ---------- */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2 space-y-4"
              >
                {CONTACT_INFO.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-lg hover:-translate-y-0.5"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          {info.label}
                        </p>
                        <p className="text-base font-semibold text-neutral-900 group-hover:text-[#D32F2F] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#111111]/20 bg-[#111111] p-5 text-white transition-all duration-300 hover:bg-[#000] hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-bold">Chat on WhatsApp</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100">
                    Instant Reply →
                  </span>
                </a>
              </motion.div>

              {/* ---------- Right: Contact Form ---------- */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="relative rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />

                  <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+971 50 123 4567"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what service you need..."
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:brightness-110 active:scale-[0.99] transition-all"
                  >
                    {submitted ? (
                      <span>✓ Message Sent!</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* ---------- Map / Location Card ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 md:mt-14"
            >
              <div className="relative rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Left: Address Sidebar */}
                  <div className="p-6 md:p-8 md:col-span-1 bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white flex flex-col justify-center">
                    <MapPin className="h-8 w-8 mb-4 opacity-90" />
                    <h3 className="text-2xl font-extrabold mb-2">
                      Visit Our Office
                    </h3>
                    <div className="space-y-2 text-sm text-white/95 leading-relaxed mb-4">
                      <p className="font-bold">📍 Office 2004</p>
                      <p>🏢 Office Tower</p>
                      <p>🛒 Grand Mall Rashidiya</p>
                      <p>🇦🇪 Ajman — United Arab Emirates</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Grand+Mal+Rashidiya+Ajman+UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full w-fit transition-colors"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Right: Google Map */}
                  <div className="md:col-span-2 h-64 md:h-auto bg-neutral-100 relative">
                    <iframe
                      title="Trip Line Office — Grand Mall Rashidiya, Ajman"
                      src="https://www.google.com/maps?q=Grand+Mal+Rashidiya+Ajman+UAE&output=embed"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <Footer />
    </div>
  );
};

export default ContactPage;