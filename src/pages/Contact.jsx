import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  const CONTACT_INFO = [
    {
      icon: Phone,
      label: t("contactLabelTel"),
      value: "+971 6 573 4303",
      href: "tel:+97165734303",
    },
    {
      icon: Smartphone,
      label: t("contactLabelMob"),
      value: "+971 54444 2029",
      href: "tel:+971544442029",
    },
    {
      icon: Mail,
      label: t("contactLabelEmail"),
      value: "inquiry@tripline.ae",
      href: "mailto:inquiry@tripline.ae",
    },
    {
      icon: MapPin,
      label: t("contactLabelVisit"),
      value: "Grand Mall Office Tower - Office No. 2004, Sheikh Khalifa Bin Zayed St, Al Rashidiya 3, Ajman, UAE",
      href: "https://maps.app.goo.gl/ML8N7BxxDxtjg6Nw7?g_st=ic",
    },
    {
      icon: Clock,
      label: t("contactLabelHours"),
      value: t("contactHoursValue"),
      href: "#",
    },
  ];

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
                {t("contactPageBadge")}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-[1.05]">
                {t("contactPageHeadingPre")}{" "}
                <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
                  {t("contactPageHeadingHighlight")}
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 leading-relaxed">
                {t("contactPageDesc")}
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
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.35 }}
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
                  href="https://wa.me/971544442029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#111111]/20 bg-[#111111] p-5 text-white transition-all duration-300 hover:bg-[#000] hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-bold">{t("contactChatWhatsApp")}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 rtl:rotate-180 inline-block">
                    {t("contactInstantReply")}
                  </span>
                </a>
              </motion.div>

              {/* ---------- Right: Contact Form ---------- */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.35 }}
                className="lg:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="relative rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />

                  <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">
                    {t("contactFormTitle")}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6">
                    {t("contactFormDesc")}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormFullName")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contactFormFullNamePh")}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormPhone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder={t("contactFormPhonePh")}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      {t("contactFormEmail")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={t("contactFormEmailPh")}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      {t("contactFormMessage")}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t("contactFormMessagePh")}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:brightness-110 active:scale-[0.99] transition-all"
                  >
                    {submitted ? (
                      <span>{t("contactFormBtnSent")}</span>
                    ) : (
                      <>
                        <span>{t("contactFormBtnSend")}</span>
                        <Send className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* ---------- Map / Location Card ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35 }}
              className="mt-10 md:mt-14"
            >
              <div className="relative rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-[480px] md:min-h-[520px]">
                  {/* Left: Address Sidebar */}
                  <div className="p-8 md:p-10 lg:p-12 md:col-span-1 bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white flex flex-col justify-between">
                    <div>
                      <MapPin className="h-9 w-9 mb-4 opacity-90" />
                      <h3 className="text-2xl lg:text-3xl font-extrabold mb-3">
                        {t("contactVisitOfficeTitle")}
                      </h3>
                      <div className="space-y-2 text-sm text-white/95 leading-relaxed">
                        <p className="font-bold text-base">{t("contactOfficeRoom")}</p>
                        <p>{t("contactOfficeTower")}</p>
                        <p>{t("contactOfficeStreet")}</p>
                        <p>{t("contactOfficeArea")}</p>
                      </div>
                    </div>
                    <div className="pt-6">
                      <a
                        href="https://maps.app.goo.gl/ML8N7BxxDxtjg6Nw7?g_st=ic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/20 hover:bg-white text-white hover:text-[#D32F2F] px-5 py-3 rounded-full w-fit transition-all duration-300 shadow-md"
                      >
                        <span>{t("contactGetDirections")}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg]" />
                      </a>
                    </div>
                  </div>

                  {/* Right: Google Map */}
                  <div className="md:col-span-2 h-[420px] sm:h-[480px] md:h-full md:min-h-[520px] bg-neutral-100 relative">
                    <iframe
                      title="Trip Line Businessmen Services — Grand Mall Office Tower, Ajman"
                      src="https://maps.google.com/maps?q=Trip+Line+Businessmen+Services,+Grand+Mall+Office+Tower+-+Office+No.+2004+Sheikh+Khalifa+Bin+Zayed+St+-+Al+Rashidiya+3+-+Ajman&output=embed"
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