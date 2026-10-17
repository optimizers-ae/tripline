import { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import { motion } from "framer-motion";

import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Send,
  Clock,
  ArrowUpRight,
  Upload,
  Check,
  X,
} from "lucide-react";

import WhatsAppIcon from "../components/WhatsAppIcon";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";
import { COUNTRY_CODES, NATIONALITIES } from "../data/countriesAndNationalities";

const fieldClass =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20";

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

      value:
        "Grand Mall Office Tower - Office No. 2004, Sheikh Khalifa Bin Zayed St, Al Rashidiya 3, Ajman, UAE",

      href: "https://maps.app.goo.gl/ML8N7BxxDxtjg6Nw7?g_st=ic",
    },

    {
      icon: Clock,

      label: t("contactLabelHours"),

      value: t("contactHoursValue"),

      isHours: true,
    },
  ];

  const [form, setForm] = useState({
    firstName: "",

    lastName: "",

    nationality: "",

    email: "",

    phone: "",

    visaDocument: null,
  });

  const [countryIso, setCountryIso] = useState("AE");
  const [nationalityOpen, setNationalityOpen] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const country =
    COUNTRY_CODES.find((item) => item.iso === countryIso) ?? COUNTRY_CODES[0];

  const nationalityMatches = useMemo(() => {
    const search = form.nationality.trim().toLowerCase();
    return NATIONALITIES.filter((item) =>
      item.toLowerCase().includes(search),
    ).slice(0, 8);
  }, [form.nationality]);

  const phoneNumber = parsePhoneNumberFromString(
    `${country.dial}${form.phone}`,
    country.iso,
  );
  const phoneValid = Boolean(form.phone && phoneNumber?.isValid());

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Normalize Arabic/Persian digits; reject letters, punctuation, plus and whitespace.
      const digits = value
        .replace(/[\u0660-\u0669]/g, (c) => String(c.charCodeAt(0) - 0x0660))
        .replace(/[\u06F0-\u06F9]/g, (c) => String(c.charCodeAt(0) - 0x06f0))
        .replace(/[^0-9]/g, "")
        .slice(0, 15);
      setForm((prev) => ({ ...prev, phone: digits }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error(
        t("contactFormVisaDocHint") || "File size exceeds the 5MB limit."
      );
      return;
    }
    setForm((prev) => ({ ...prev, visaDocument: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    if (!phoneValid) {
      toast.error(
        "Please enter a valid phone number for the selected country.",
      );
      return;
    }
    if (!NATIONALITIES.includes(form.nationality)) {
      toast.error("Please select a nationality from the suggestions.");
      setNationalityOpen(true);
      return;
    }
    // No API is connected yet: do not pretend the inquiry was sent.
    toast("Our contact form is currently under development.", {
      icon: "⚠️",
      duration: 6500,
    });
  };

  return (
    <div className="relative min-h-screen bg-white font-comforta">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "12px",
            padding: "14px 18px",
            maxWidth: "480px",
          },
        }}
      />

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

                  if (info.isHours) {
                    return (
                      <div
                        key={info.label}
                        className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-lg"
                        style={{ transitionDelay: `${idx * 40}ms` }}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                            {info.label}
                          </p>

                          <div className="space-y-1.5 text-xs sm:text-sm">
                            <div className="flex items-center justify-between gap-3 pb-1 border-b border-neutral-100">
                              <span className="font-medium text-neutral-700">
                                {t("contactHoursMonThuSatDays")}
                              </span>
                              <span className="font-semibold text-neutral-900" dir="ltr">
                                {t("contactHoursMonThuSatTime")}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-3 pb-1 border-b border-neutral-100">
                              <span className="font-medium text-neutral-700">
                                {t("contactHoursFriDays")}
                              </span>
                              <span className="font-semibold text-neutral-900" dir="ltr">
                                {t("contactHoursFriTime")}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-3 pt-0.5">
                              <span className="font-medium text-neutral-700">
                                {t("contactHoursSunDays")}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200">
                                {t("contactHoursSunTime")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href?.startsWith("http") ? "_blank" : undefined}
                      rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#D32F2F]/40 hover:shadow-lg hover:-translate-y-0.5"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D32F2F] to-[#F44336] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          {info.label}
                        </p>

                        <p className="text-base font-semibold text-neutral-900 group-hover:text-[#D32F2F] transition-colors break-words">
                          {info.icon === Phone || info.icon === Smartphone ? (
                            <span
                              dir="ltr"
                              className="inline-block select-all font-sans"
                            >
                              {info.value}
                            </span>
                          ) : (
                            info.value
                          )}
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
                    <WhatsAppIcon className="h-5 w-5 fill-current text-[#25D366]" />

                    <span className="font-bold">
                      {t("contactChatWhatsApp")}
                    </span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 inline-block">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* 1. First Name */}

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormFirstName")}
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder={t("contactFormFirstNamePh")}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                      />
                    </div>

                    {/* 2. Last Name */}

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormLastName")}
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder={t("contactFormLastNamePh")}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20"
                      />
                    </div>

                    {/* 3. Nationality */}

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormNationality")}
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          name="nationality"
                          value={form.nationality}
                          onChange={(e) => {
                            handleChange(e);
                            setNationalityOpen(true);
                          }}
                          onFocus={() => setNationalityOpen(true)}
                          onBlur={() =>
                            window.setTimeout(
                              () => setNationalityOpen(false),
                              150,
                            )
                          }
                          autoComplete="off"
                          required
                          placeholder={t("contactFormNationalityPh")}
                          className={fieldClass}
                          role="combobox"
                          aria-expanded={nationalityOpen}
                          aria-controls="nationality-options"
                          aria-autocomplete="list"
                        />
                        {nationalityOpen && nationalityMatches.length > 0 && (
                          <div
                            id="nationality-options"
                            role="listbox"
                            className="absolute z-30 mt-1 max-h-52 w-full overflow-y-auto rounded-xl border border-neutral-200 bg-white shadow-xl"
                          >
                            {nationalityMatches.map((nationality) => (
                              <button
                                key={nationality}
                                type="button"
                                role="option"
                                aria-selected={form.nationality === nationality}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => {
                                  setForm((prev) => ({ ...prev, nationality }));
                                  setNationalityOpen(false);
                                }}
                                className="block w-full px-4 py-2.5 text-start text-sm text-neutral-800 hover:bg-red-50 focus:bg-red-50"
                              >
                                {nationality}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 4. Email */}

                    <div>
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

                    {/* 5. Mobile number */}

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormPhone")}
                      </label>

                      <div className="flex gap-2" dir="ltr">
                        <select
                          aria-label="Country calling code"
                          value={countryIso}
                          onChange={(e) => {
                            setCountryIso(e.target.value);
                            setPhoneTouched(false);
                          }}
                          className="w-[112px] shrink-0 rounded-xl border border-neutral-200 bg-neutral-50 px-2 py-3 text-sm outline-none focus:border-[#D32F2F]"
                        >
                          {COUNTRY_CODES.map((item) => (
                            <option key={item.iso} value={item.iso}>
                              {item.iso} {item.dial}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          name="phone"
                          dir="ltr"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={() => setPhoneTouched(true)}
                          required
                          maxLength={15}
                          placeholder={t("contactFormPhonePh")}
                          aria-invalid={phoneTouched && !phoneValid}
                          aria-describedby="phone-error"
                          className={fieldClass}
                        />
                      </div>
                      {phoneTouched && !phoneValid && (
                        <p
                          id="phone-error"
                          role="alert"
                          className="mt-1 text-xs text-red-600"
                        >
                          Enter a valid phone number for {country.name}.
                        </p>
                      )}
                    </div>

                    {/* 6. Visa / Supporting Document Upload */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t("contactFormVisaDoc")}
                      </label>
                      <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-3.5 hover:bg-neutral-100/70 transition-all flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-center sm:text-left rtl:sm:text-right">
                          <div className="h-9 w-9 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0">
                            <Upload className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-neutral-800">
                              {t("contactFormVisaDoc")}
                            </p>
                            <p className="text-[11px] text-neutral-500">
                              {t("contactFormVisaDocHint")}
                            </p>
                          </div>
                        </div>

                        {form.visaDocument ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                            <Check className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate max-w-[140px]">{form.visaDocument.name}</span>
                            <button
                              type="button"
                              onClick={() => handleFileChange(null)}
                              className="text-neutral-400 hover:text-red-500 ml-1 text-sm font-bold"
                              aria-label="Remove attached visa document"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-neutral-300 px-3.5 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm transition-all shrink-0">
                            <span>{t("contactFormChooseFile")}</span>
                            <input
                              type="file"
                              accept=".pdf,image/*,.doc,.docx"
                              className="hidden"
                              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:brightness-110 active:scale-[0.99] transition-all"
                  >
                    <>
                      <span>{t("contactFormBtnSend")}</span>

                      <Send className="h-4 w-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                    </>
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
                        <p className="font-bold text-base">
                          {t("contactOfficeRoom")}
                        </p>

                        <p>{t("contactOfficeTower")}</p>

                        <p>{t("contactOfficeStreet")}</p>

                        <p>{t("contactOfficeArea")}</p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/20 text-xs text-white/95 space-y-1.5">
                        <p className="font-bold uppercase tracking-wider text-white/80 text-[11px] flex items-center gap-1.5 mb-1">
                          <Clock className="h-3.5 w-3.5" />
                          {t("contactLabelHours")}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/80">{t("contactHoursMonThuSatDays")}:</span>
                          <span className="font-semibold" dir="ltr">{t("contactHoursMonThuSatTime")}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/80">{t("contactHoursFriDays")}:</span>
                          <span className="font-semibold" dir="ltr">{t("contactHoursFriTime")}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/80">{t("contactHoursSunDays")}:</span>
                          <span className="font-semibold text-rose-200">{t("contactHoursSunTime")}</span>
                        </div>
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
