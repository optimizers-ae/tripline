import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import toast from "react-hot-toast";
import {
  X,
  CheckCircle2,
  Upload,
  FileText,
  Phone,
  User,
  Plane,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { COUNTRY_CODES, NATIONALITIES } from "../data/countriesAndNationalities";
import { useLanguage } from "../context/LanguageContext";

/**
 * ServiceInquiryModal
 * Supports 3 modal variants:
 *  - "general": Individual / Corporate Services form
 *  - "visa": Travel Visa Application form
 *  - "trade-license": Trade License Application form
 */
const ServiceInquiryModalContent = ({
  onClose,
  modalType = "general", // "general" | "visa" | "trade-license"
  serviceTitle = "",
  serviceCategory = "Individuals", // "Individuals" | "Corporate"
  initialData = {},
}) => {
  const { lang } = useLanguage();
  const isArabic = lang === "AR";
  const modalRef = useRef(null);

  // Form states
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryIso, setCountryIso] = useState("AE");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [nationalityDropdownOpen, setNationalityDropdownOpen] = useState(false);
  const [nationalitySearch, setNationalitySearch] = useState("");
  const [errors, setErrors] = useState({});

  // General Form state
  const [generalForm, setGeneralForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    serviceRequired: serviceTitle || "",
    additionalDetails: "",
    visaDocument: null,
  });

  // Visa Form state
  const [visaForm, setVisaForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    destinationCountry: initialData.destinationCountry || "",
    nationality: initialData.nationality || "",
    residenceCountry: "United Arab Emirates",
    purposeOfTravel: "Tourism",
    expectedTravelDate: "",
    numberOfApplicants: "1",
    entryType: "Single Entry",
    additionalDetails: "",
    passportCopy: null,
    visaCopy: null,
    residenceVisaCopy: null,
    agreeTerms: false,
  });

  // Trade License Form state
  const [tradeForm, setTradeForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    jurisdiction: "Dubai",
    nationality: "",
    residenceCountry: "United Arab Emirates",
    purpose: "New License",
    expectedDate: "",
    numberOfApplicants: "1",
    licenseType: "Commercial",
    additionalDetails: "",
    passportCopy: null,
    existingLicenseCopy: null,
    agreeTerms: false,
  });

  // Prevent body scroll and handle escape key while mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Active country for dial code
  const currentCountry =
    COUNTRY_CODES.find((c) => c.iso === countryIso) || COUNTRY_CODES[0];

  // Filtered Country Codes for dropdown
  const filteredCountries = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return COUNTRY_CODES;
    return COUNTRY_CODES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dial.includes(q) ||
        c.iso.toLowerCase().includes(q)
    );
  }, [countrySearch]);

  // Filtered Nationalities
  const filteredNationalities = useMemo(() => {
    const q = nationalitySearch.trim().toLowerCase();
    if (!q) return NATIONALITIES.slice(0, 15);
    return NATIONALITIES.filter((n) => n.toLowerCase().includes(q)).slice(0, 15);
  }, [nationalitySearch]);

  // Phone sanitizer
  const sanitizePhone = (val) => {
    return val
      .replace(/[\u0660-\u0669]/g, (c) => String(c.charCodeAt(0) - 0x0660))
      .replace(/[\u06F0-\u06F9]/g, (c) => String(c.charCodeAt(0) - 0x06f0))
      .replace(/[^0-9]/g, "")
      .slice(0, 15);
  };

  // Validate phone
  const validatePhone = (phoneNum) => {
    if (!phoneNum) return false;
    const fullNumber = `${currentCountry.dial}${phoneNum}`;
    const parsed = parsePhoneNumberFromString(fullNumber, currentCountry.iso);
    return Boolean(parsed?.isValid());
  };

  // Submit Handler for General Form
  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!generalForm.firstName.trim()) {
      newErrors.firstName = isArabic ? "يرجى إدخال الاسم الأول" : "First name is required";
    }
    if (!generalForm.lastName.trim()) {
      newErrors.lastName = isArabic ? "يرجى إدخال اسم العائلة" : "Last name is required";
    }
    if (!generalForm.phone.trim()) {
      newErrors.phone = isArabic ? "يرجى إدخال رقم الهاتف / واتساب" : "Mobile / WhatsApp number is required";
    } else if (!validatePhone(generalForm.phone)) {
      newErrors.phone = isArabic
        ? "رقم الهاتف غير صالح للدولة المحددة"
        : "Invalid phone number for the selected country";
    }
    if (!generalForm.serviceRequired.trim()) {
      newErrors.serviceRequired = isArabic ? "يرجى تحديد الخدمة المطلوبة" : "Service required is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error(isArabic ? "يرجى تعبئة الحقول المطلوبة بشكل صحيح" : "Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(
        isArabic
          ? "شكراً لتواصلك مع تريب لاين! تم استلام طلبك بنجاح."
          : "Thank you for contacting Trip Line! We have received your request."
      );
    }, 600);
  };

  // Submit Handler for Visa Form
  const handleVisaSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!visaForm.fullName.trim()) {
      newErrors.fullName = isArabic ? "يرجى إدخال الاسم الكامل" : "Full name is required";
    }
    if (!visaForm.phone.trim()) {
      newErrors.phone = isArabic ? "يرجى إدخال رقم الهاتف / واتساب" : "Mobile / WhatsApp number is required";
    } else if (!validatePhone(visaForm.phone)) {
      newErrors.phone = isArabic
        ? "رقم الهاتف غير صالح للدولة المحددة"
        : "Invalid phone number for the selected country";
    }
    if (!visaForm.destinationCountry.trim()) {
      newErrors.destinationCountry = isArabic ? "يرجى تحديد دولة الوجهة" : "Destination country is required";
    }
    if (!visaForm.nationality.trim()) {
      newErrors.nationality = isArabic ? "يرجى تحديد الجنسية" : "Nationality is required";
    }
    if (!visaForm.residenceCountry.trim()) {
      newErrors.residenceCountry = isArabic ? "يرجى إدخال بلد الإقامة الحالي" : "Current country of residence is required";
    }
    if (!visaForm.expectedTravelDate) {
      newErrors.expectedTravelDate = isArabic ? "يرجى تحديد تاريخ السفر المتوقع" : "Expected travel date is required";
    }
    if (!visaForm.agreeTerms) {
      newErrors.agreeTerms = isArabic
        ? "يجب الموافقة على التواصل معك بشأن طلب التأشيرة"
        : "You must agree to be contacted regarding your visa enquiry";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error(isArabic ? "يرجى تعبئة الحقول المطلوبة بشكل صحيح" : "Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(
        isArabic
          ? "شكراً لاختيارك تريب لاين! تم استلام استفسار التأشيرة."
          : "Thank you for choosing Trip Line! We have received your visa enquiry."
      );
    }, 600);
  };

  // Submit Handler for Trade License Form
  const handleTradeSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!tradeForm.fullName.trim()) {
      newErrors.fullName = isArabic ? "يرجى إدخال الاسم الكامل" : "Full name is required";
    }
    if (!tradeForm.phone.trim()) {
      newErrors.phone = isArabic ? "يرجى إدخال رقم الهاتف / واتساب" : "Mobile / WhatsApp number is required";
    } else if (!validatePhone(tradeForm.phone)) {
      newErrors.phone = isArabic
        ? "رقم الهاتف غير صالح للدولة المحددة"
        : "Invalid phone number for the selected country";
    }
    if (!tradeForm.jurisdiction.trim()) {
      newErrors.jurisdiction = isArabic ? "يرجى تحديد الإمارة أو المنطقة الحرة" : "Jurisdiction / Emirate is required";
    }
    if (!tradeForm.agreeTerms) {
      newErrors.agreeTerms = isArabic
        ? "يجب الموافقة على التواصل معك بشأن طلب الرخصة التجارية"
        : "You must agree to be contacted regarding your trade license enquiry";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error(isArabic ? "يرجى تعبئة الحقول المطلوبة بشكل صحيح" : "Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(
        isArabic
          ? "شكراً لاختيارك تريب لاين! تم استلام طلب الرخصة التجارية."
          : "Thank you for choosing Trip Line! We have received your trade license enquiry."
      );
    }, 600);
  };

  // File upload input helper
  const handleFileChange = (field, file, formType) => {
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error(
        isArabic
          ? "حجم الملف يتجاوز الحد المسموح به (5 ميجابايت)"
          : "File size exceeds the 5MB limit."
      );
      return;
    }
    if (formType === "visa") {
      setVisaForm((prev) => ({ ...prev, [field]: file }));
    } else if (formType === "trade") {
      setTradeForm((prev) => ({ ...prev, [field]: file }));
    } else if (formType === "general") {
      setGeneralForm((prev) => ({ ...prev, [field]: file }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden font-comforta ${
            isArabic ? "text-right" : "text-left"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Header Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111]" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className={`absolute top-4 ${
              isArabic ? "left-4" : "right-4"
            } z-20 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-[#D32F2F] hover:text-white transition-all shadow-sm`}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Modal Header */}
          <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-neutral-100 bg-gradient-to-b from-neutral-50/80 to-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D32F2F]">
                {modalType === "visa" ? (
                  <>
                    <Plane className="h-3 w-3" />
                    {isArabic ? "تأشيرات السفر" : "Travel Visa"}
                  </>
                ) : modalType === "trade-license" ? (
                  <>
                    <Building2 className="h-3 w-3" />
                    {isArabic ? "تأسيس الأعمال والرخص" : "Trade License"}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3 w-3" />
                    {serviceCategory === "Corporate"
                      ? isArabic
                        ? "خدمات الشركات"
                        : "Corporate Services"
                      : isArabic
                      ? "خدمات الأفراد"
                      : "Individual Services"}
                  </>
                )}
              </span>
              {serviceTitle && modalType === "general" && (
                <span className="text-xs text-neutral-400 font-medium truncate max-w-[240px]">
                  • {serviceTitle}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
              {modalType === "visa"
                ? isArabic
                  ? "طلب تأشيرة السفر"
                  : "Travel Visa Application"
                : modalType === "trade-license"
                ? isArabic
                  ? "طلب رخصة تجارية"
                  : "Trade License Application"
                : serviceCategory === "Corporate"
                ? isArabic
                  ? "خدمات الشركات"
                  : "Corporate Services"
                : isArabic
                ? "خدمات الأفراد"
                : "Individual Services"}
            </h2>

            <p className="text-sm font-semibold text-[#D32F2F] mt-1 italic">
              {modalType === "visa"
                ? isArabic
                  ? "رحلتك القادمة تبدأ مع تريب لاين."
                  : "Your next journey starts with Trip Line."
                : modalType === "trade-license"
                ? isArabic
                  ? "رحلتك القادمة تبدأ مع تريب لاين."
                  : "Your next journey starts with Trip Line."
                : serviceCategory === "Corporate"
                ? isArabic
                  ? "كيف يمكننا مساعدة شركتك؟"
                  : "How can we help your business?"
                : isArabic
                ? "كيف يمكننا مساعدتك؟"
                : "How can we help you?"}
            </p>

            <p className="text-xs sm:text-sm text-neutral-500 mt-1 leading-relaxed">
              {modalType === "visa"
                ? isArabic
                  ? "تخطط للسفر؟ يرجى إكمال النموذج أدناه، وسيتواصل معك فريقنا لتزويدك بمتطلبات التأشيرة، الخيارات المتاحة وعرض الأسعار."
                  : "Planning to travel? Complete the form below, and our team will contact you with visa requirements, available options and a quotation."
                : modalType === "trade-license"
                ? isArabic
                  ? "تخطط لتأسيس أو تجديد شركتك؟ يرجى إكمال النموذج أدناه، وسيتواصل معك فريقنا لتزويدك بمتطلبات الترخيص وعرض الأسعار."
                  : "Planning to start or renew a business? Complete the form below, and our team will contact you with license requirements, available options and a quotation."
                : serviceCategory === "Corporate"
                ? isArabic
                  ? "أكمل النموذج أدناه، وسيقوم فريق تريب لاين بالتواصل معك لمساعدتك في تلبية طلب شركتك ومعاملاتك التجارية."
                  : "Complete the form below, and the Trip Line team will contact you to assist with your corporate request."
                : isArabic
                ? "أكمل النموذج أدناه، وسيقوم فريق تريب لاين بالتواصل معك لمساعدتك في تلبية طلبك بأسرع وقت."
                : "Complete the form below, and the Trip Line team will contact you to assist with your request."}
            </p>
          </div>

          {/* Modal Body / Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
            {submitted ? (
              /* ================= CONFIRMATION SCREEN ================= */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 text-emerald-800 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                  {isArabic ? "تم استلام الطلب" : "Request Received"}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 max-w-lg">
                  {modalType === "visa"
                    ? isArabic
                      ? "شكراً لاختيارك تريب لاين! لقد استلمنا استفسار التأشيرة."
                      : "Thank you for choosing Trip Line! We have received your visa enquiry."
                    : modalType === "trade-license"
                    ? isArabic
                      ? "شكراً لاختيارك تريب لاين! لقد استلمنا طلب الرخصة التجارية."
                      : "Thank you for choosing Trip Line! We have received your trade license enquiry."
                    : serviceCategory === "Corporate"
                    ? isArabic
                      ? "شكراً لتواصلك مع تريب لاين! لقد استلمنا طلب شركتك."
                      : "Thank you for contacting Trip Line! We have received your corporate request."
                    : isArabic
                    ? "شكراً لتواصلك مع تريب لاين! لقد استلمنا طلبك."
                    : "Thank you for contacting Trip Line! We have received your request."}
                </h3>

                <p className="text-sm text-neutral-600 max-w-md mb-6 leading-relaxed">
                  {modalType === "visa" || modalType === "trade-license"
                    ? isArabic
                      ? "سيتواصل معك فريقنا المختص بالمتطلبات والخطوات التالية وعرض الأسعار في أقرب وقت."
                      : "Our team will contact you with the requirements and next steps shortly."
                    : serviceCategory === "Corporate"
                    ? isArabic
                      ? "سيقوم مستشار خدمات الشركات بالتواصل معك قريباً لمتابعة الطلب وتقديم الدعم اللازم."
                      : "Our corporate advisory team will contact you shortly to assist with your requirements."
                    : isArabic
                    ? "سيقوم فريقنا بالتواصل معك قريباً لتقديم الدعم اللازم."
                    : "Our team will contact you shortly."}
                </p>

                {/* Development Notice Banner */}
                <div className="w-full max-w-lg rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-left mb-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                        {isArabic ? "تنبيه نظام التجربة والتطوير" : "Development Notice"}
                      </p>
                      <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                        {isArabic
                          ? "الموقع قيد البناء والتطوير حالياً. يمكنك أيضاً التواصل معنا مباشرة عبر الواتساب أو الاتصال الهاتفي للحصول على استجابة فورية."
                          : "Our website is currently under active development. For immediate assistance, feel free to reach our team directly via WhatsApp or Phone."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
                  <a
                    href="https://wa.me/971544442029"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow hover:brightness-105 transition-all"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp (+971 54444 2029)</span>
                  </a>
                  <a
                    href="tel:+97165734303"
                    className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-xs font-bold text-white shadow hover:bg-neutral-800 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{isArabic ? "اتصل بنا" : "Call +971 6 573 4303"}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 text-xs font-bold text-neutral-400 hover:text-neutral-700 underline transition-colors"
                >
                  {isArabic ? "إغلاق النافذة" : "Close window"}
                </button>
              </motion.div>
            ) : modalType === "visa" ? (
              /* ================= TRAVEL VISA APPLICATION FORM ================= */
              <form onSubmit={handleVisaSubmit} className="space-y-6">
                {/* Section 1: Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-1 border-b border-neutral-100">
                    <User className="h-4 w-4 text-[#D32F2F]" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                      {isArabic ? "بيانات التواصل الخاصة بك" : "Your Contact Details"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "الاسم الكامل" : "Full Name"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={visaForm.fullName}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, fullName: e.target.value }))
                        }
                        placeholder={isArabic ? "أدخل اسمك الكامل" : "e.g. John Doe"}
                        className={`w-full rounded-xl border ${
                          errors.fullName ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                        } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Mobile / WhatsApp Number with Country Picker */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "رقم الهاتف / واتساب" : "Mobile / WhatsApp Number"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <div className="relative flex rounded-xl border border-neutral-200 bg-neutral-50 overflow-visible focus-within:border-[#D32F2F] focus-within:ring-2 focus-within:ring-[#D32F2F]/20 transition-all">
                        {/* Dial code selector button */}
                        <button
                          type="button"
                          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                          className="flex items-center gap-1.5 px-3 py-2.5 border-r rtl:border-r-0 rtl:border-l border-neutral-200 bg-neutral-100/70 hover:bg-neutral-200/60 text-xs font-bold text-neutral-800 transition-colors shrink-0"
                        >
                          <span>{currentCountry.iso}</span>
                          <span className="text-neutral-500 font-mono" dir="ltr">{currentCountry.dial}</span>
                        </button>

                        {/* Dial code Dropdown */}
                        {countryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 z-30 w-72 max-h-56 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-2 shadow-xl">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder={isArabic ? "ابحث عن الدولة..." : "Search country..."}
                              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 outline-none mb-2"
                            />
                            <div className="space-y-1">
                              {filteredCountries.map((c) => (
                                <button
                                  key={c.iso}
                                  type="button"
                                  onClick={() => {
                                    setCountryIso(c.iso);
                                    setCountryDropdownOpen(false);
                                  }}
                                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs hover:bg-neutral-100 text-neutral-800 transition-colors"
                                >
                                  <span className="truncate">{c.name}</span>
                                  <span className="font-mono text-neutral-500 text-[11px]">{c.dial}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <input
                          type="tel"
                          value={visaForm.phone}
                          onChange={(e) =>
                            setVisaForm((p) => ({
                              ...p,
                              phone: sanitizePhone(e.target.value),
                            }))
                          }
                          placeholder={isArabic ? "54 444 2029" : "54 444 2029"}
                          className="flex-1 bg-transparent px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none"
                          dir="ltr"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "البريد الإلكتروني" : "Email Address"}{" "}
                        <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                      </label>
                      <input
                        type="email"
                        value={visaForm.email}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Travel & Visa Details */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 pb-1 border-b border-neutral-100">
                    <Plane className="h-4 w-4 text-[#D32F2F]" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                      {isArabic ? "تفاصيل السفر والتأشيرة" : "Travel & Visa Details"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Destination Country */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "دولة الوجهة" : "Destination Country"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={visaForm.destinationCountry}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, destinationCountry: e.target.value }))
                        }
                        placeholder={isArabic ? "مثال: شنغن، السعودية، تايلاند" : "e.g. Schengen, Saudi Arabia, Thailand"}
                        className={`w-full rounded-xl border ${
                          errors.destinationCountry ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                        } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                      />
                      {errors.destinationCountry && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.destinationCountry}</p>
                      )}
                    </div>

                    {/* Nationality */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "الجنسية" : "Nationality"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={visaForm.nationality}
                        onFocus={() => setNationalityDropdownOpen(true)}
                        onChange={(e) => {
                          setVisaForm((p) => ({ ...p, nationality: e.target.value }));
                          setNationalitySearch(e.target.value);
                          setNationalityDropdownOpen(true);
                        }}
                        placeholder={isArabic ? "ابحث أو اختر الجنسية" : "e.g. Indian, Pakistani, Emirati"}
                        className={`w-full rounded-xl border ${
                          errors.nationality ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                        } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                      />
                      {nationalityDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 z-30 max-h-48 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl">
                          {filteredNationalities.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setVisaForm((p) => ({ ...p, nationality: item }));
                                setNationalityDropdownOpen(false);
                              }}
                              className="w-full text-left rtl:text-right px-3 py-1.5 rounded-lg text-xs hover:bg-neutral-100 text-neutral-800 transition-colors"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                      {errors.nationality && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.nationality}</p>
                      )}
                    </div>

                    {/* Current Country of Residence */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "بلد الإقامة الحالي" : "Current Country of Residence"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={visaForm.residenceCountry}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, residenceCountry: e.target.value }))
                        }
                        placeholder="United Arab Emirates"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      />
                    </div>

                    {/* Purpose of Travel */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "الغرض من السفر" : "Purpose of Travel"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <select
                        value={visaForm.purposeOfTravel}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, purposeOfTravel: e.target.value }))
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      >
                        <option value="Tourism">{isArabic ? "سياحة" : "Tourism"}</option>
                        <option value="Business">{isArabic ? "أعمال" : "Business"}</option>
                        <option value="Family Visit">{isArabic ? "زيارة عائلية" : "Family Visit"}</option>
                        <option value="Other">{isArabic ? "أخرى" : "Other"}</option>
                      </select>
                    </div>

                    {/* Expected Travel Date */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "تاريخ السفر المتوقع" : "Expected Travel Date"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={visaForm.expectedTravelDate}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, expectedTravelDate: e.target.value }))
                        }
                        className={`w-full rounded-xl border ${
                          errors.expectedTravelDate ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                        } px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                      />
                      {errors.expectedTravelDate && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.expectedTravelDate}</p>
                      )}
                    </div>

                    {/* Number of Applicants */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "عدد المتقدمين" : "Number of Applicants"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={visaForm.numberOfApplicants}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, numberOfApplicants: e.target.value }))
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      />
                    </div>

                    {/* Preferred Entry Type */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "نوع الدخول المفضل" : "Preferred Entry Type"}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Single Entry", "Multiple Entry", "Not Sure"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setVisaForm((p) => ({ ...p, entryType: type }))}
                            className={`rounded-xl border py-2.5 px-3 text-xs font-bold transition-all text-center ${
                              visaForm.entryType === type
                                ? "border-[#D32F2F] bg-[#D32F2F]/10 text-[#D32F2F] ring-1 ring-[#D32F2F]"
                                : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                            }`}
                          >
                            {type === "Single Entry"
                              ? isArabic ? "دخول فردي" : "Single Entry"
                              : type === "Multiple Entry"
                              ? isArabic ? "دخول متعدد" : "Multiple Entry"
                              : isArabic ? "غير متأكد" : "Not Sure"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "تفاصيل إضافية أو استفسارات" : "Additional Details or Questions"}{" "}
                        <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                      </label>
                      <textarea
                        rows={2}
                        value={visaForm.additionalDetails}
                        onChange={(e) =>
                          setVisaForm((p) => ({ ...p, additionalDetails: e.target.value }))
                        }
                        placeholder={
                          isArabic
                            ? "أية متطلبات خاصة، تأشيرات سابقة، أو أسئلة محددة..."
                            : "Any special requirements, previous visas, or specific inquiries..."
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Optional Documents */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#D32F2F]" />
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                        {isArabic ? "المستندات الاختيارية" : "Optional Documents"}
                      </h3>
                    </div>
                    <span className="text-[11px] text-neutral-400">
                      {isArabic ? "تسريع إجراءات المراجعة" : "Speeds up initial review"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Passport Copy */}
                    <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center hover:bg-neutral-100/70 transition-all flex flex-col justify-between">
                      <div>
                        <Upload className="h-5 w-5 text-neutral-400 mx-auto mb-1.5" />
                        <p className="text-xs font-bold text-neutral-800">
                          {isArabic ? "نسخة جواز السفر" : "Passport Copy"}
                        </p>
                        <p className="text-[11px] text-neutral-500 mb-2">PDF, JPG, PNG (Max 5MB)</p>
                      </div>
                      {visaForm.passportCopy ? (
                        <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate max-w-[120px]">{visaForm.passportCopy.name}</span>
                          <button
                            type="button"
                            onClick={() => handleFileChange("passportCopy", null, "visa")}
                            className="text-neutral-400 hover:text-red-500 ml-1 font-bold text-sm"
                            aria-label="Remove passport copy"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm transition-all">
                          <span>{isArabic ? "اختر ملف" : "Choose File"}</span>
                          <input
                            type="file"
                            accept=".pdf,image/*,.doc,.docx"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("passportCopy", e.target.files?.[0] || null, "visa")
                            }
                          />
                        </label>
                      )}
                    </div>

                    {/* Visa PDF / Visa Copy */}
                    <div className="rounded-xl border border-dashed border-red-200 bg-red-50/20 p-4 text-center hover:bg-red-50/40 transition-all flex flex-col justify-between">
                      <div>
                        <Upload className="h-5 w-5 text-[#D32F2F] mx-auto mb-1.5" />
                        <p className="text-xs font-bold text-neutral-800">
                          {isArabic ? "تأشيرة الدخول / نسخة التأشيرة" : "Visa PDF / Visa Copy"}
                        </p>
                        <p className="text-[11px] text-neutral-500 mb-2">PDF, JPG, PNG (Max 5MB)</p>
                      </div>
                      {visaForm.visaCopy ? (
                        <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate max-w-[120px]">{visaForm.visaCopy.name}</span>
                          <button
                            type="button"
                            onClick={() => handleFileChange("visaCopy", null, "visa")}
                            className="text-neutral-400 hover:text-red-500 ml-1 font-bold text-sm"
                            aria-label="Remove visa copy"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-[#D32F2F]/40 px-3 py-1.5 text-xs font-bold text-[#D32F2F] hover:bg-[#D32F2F]/5 shadow-sm transition-all">
                          <span>{isArabic ? "اختر التأشيرة (PDF)" : "Upload Visa (PDF)"}</span>
                          <input
                            type="file"
                            accept=".pdf,image/*,.doc,.docx"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("visaCopy", e.target.files?.[0] || null, "visa")
                            }
                          />
                        </label>
                      )}
                    </div>

                    {/* Residence Visa Copy */}
                    <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center hover:bg-neutral-100/70 transition-all flex flex-col justify-between">
                      <div>
                        <Upload className="h-5 w-5 text-neutral-400 mx-auto mb-1.5" />
                        <p className="text-xs font-bold text-neutral-800">
                          {isArabic ? "نسخة تأشيرة الإقامة" : "Residence Visa Copy"}
                        </p>
                        <p className="text-[11px] text-neutral-500 mb-2">PDF, JPG, PNG (Max 5MB)</p>
                      </div>
                      {visaForm.residenceVisaCopy ? (
                        <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate max-w-[120px]">{visaForm.residenceVisaCopy.name}</span>
                          <button
                            type="button"
                            onClick={() => handleFileChange("residenceVisaCopy", null, "visa")}
                            className="text-neutral-400 hover:text-red-500 ml-1 font-bold text-sm"
                            aria-label="Remove residence visa copy"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm transition-all">
                          <span>{isArabic ? "اختر ملف" : "Choose File"}</span>
                          <input
                            type="file"
                            accept=".pdf,image/*,.doc,.docx"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("residenceVisaCopy", e.target.files?.[0] || null, "visa")
                            }
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <input
                      type="checkbox"
                      checked={visaForm.agreeTerms}
                      onChange={(e) =>
                        setVisaForm((p) => ({ ...p, agreeTerms: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#D32F2F] focus:ring-[#D32F2F] accent-[#D32F2F]"
                    />
                    <span className="text-xs text-neutral-600 leading-snug group-hover:text-neutral-900 transition-colors">
                      {isArabic
                        ? "أوافق على أن يقوم فريق تريب لاين بالتواصل معي بخصوص استفسار التأشيرة."
                        : "I agree to be contacted by Trip Line regarding my visa enquiry."}{" "}
                      <span className="text-[#D32F2F]">*</span>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.agreeTerms}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{isArabic ? "جاري الإرسال..." : "Submitting..."}</span>
                      </span>
                    ) : (
                      <>
                        <span>{isArabic ? "إرسال استفسار التأشيرة" : "Submit Visa Enquiry"}</span>
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-neutral-400 mt-2.5 italic">
                    {isArabic
                      ? "* الحقول المطلوبة. تخضع الموافقة على التأشيرة لتقدير السلطات والجهات المعنية."
                      : "* Required fields. Visa approval is subject to the relevant authorities."}
                  </p>
                </div>
              </form>
            ) : modalType === "trade-license" ? (
              /* ================= TRADE LICENSE APPLICATION FORM ================= */
              <form onSubmit={handleTradeSubmit} className="space-y-6">
                {/* Section 1: Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-1 border-b border-neutral-100">
                    <User className="h-4 w-4 text-[#D32F2F]" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                      {isArabic ? "بيانات التواصل الخاصة بك" : "Your Contact Details"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "الاسم الكامل" : "Full Name"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={tradeForm.fullName}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, fullName: e.target.value }))
                        }
                        placeholder={isArabic ? "أدخل اسمك الكامل" : "e.g. John Doe"}
                        className={`w-full rounded-xl border ${
                          errors.fullName ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                        } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Mobile / WhatsApp Number */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "رقم الهاتف / واتساب" : "Mobile / WhatsApp Number"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <div className="relative flex rounded-xl border border-neutral-200 bg-neutral-50 overflow-visible focus-within:border-[#D32F2F] focus-within:ring-2 focus-within:ring-[#D32F2F]/20 transition-all">
                        <button
                          type="button"
                          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                          className="flex items-center gap-1.5 px-3 py-2.5 border-r rtl:border-r-0 rtl:border-l border-neutral-200 bg-neutral-100/70 hover:bg-neutral-200/60 text-xs font-bold text-neutral-800 transition-colors shrink-0"
                        >
                          <span>{currentCountry.iso}</span>
                          <span className="text-neutral-500 font-mono" dir="ltr">{currentCountry.dial}</span>
                        </button>

                        {countryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 z-30 w-72 max-h-56 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-2 shadow-xl">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder={isArabic ? "ابحث عن الدولة..." : "Search country..."}
                              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 outline-none mb-2"
                            />
                            <div className="space-y-1">
                              {filteredCountries.map((c) => (
                                <button
                                  key={c.iso}
                                  type="button"
                                  onClick={() => {
                                    setCountryIso(c.iso);
                                    setCountryDropdownOpen(false);
                                  }}
                                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs hover:bg-neutral-100 text-neutral-800 transition-colors"
                                >
                                  <span className="truncate">{c.name}</span>
                                  <span className="font-mono text-neutral-500 text-[11px]">{c.dial}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <input
                          type="tel"
                          value={tradeForm.phone}
                          onChange={(e) =>
                            setTradeForm((p) => ({
                              ...p,
                              phone: sanitizePhone(e.target.value),
                            }))
                          }
                          placeholder="54 444 2029"
                          className="flex-1 bg-transparent px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none"
                          dir="ltr"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "البريد الإلكتروني" : "Email Address"}{" "}
                        <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                      </label>
                      <input
                        type="email"
                        value={tradeForm.email}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="business@example.com"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Trade & Business Details */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 pb-1 border-b border-neutral-100">
                    <Building2 className="h-4 w-4 text-[#D32F2F]" />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                      {isArabic ? "تفاصيل الرخصة والأعمال" : "Business & Trade License Details"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Jurisdiction / Emirate */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "الإمارة / المنطقة الحرة" : "Jurisdiction / Emirate"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <select
                        value={tradeForm.jurisdiction}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, jurisdiction: e.target.value }))
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      >
                        <option value="Dubai">Dubai / دبي</option>
                        <option value="Abu Dhabi">Abu Dhabi / أبوظبي</option>
                        <option value="Sharjah">Sharjah / الشارقة</option>
                        <option value="Ajman">Ajman / عجمان</option>
                        <option value="Free Zone">Free Zone / منطقة حرة</option>
                        <option value="Other Emirates">Other Emirates / إمارات أخرى</option>
                      </select>
                    </div>

                    {/* Purpose of Application */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "نوع المعاملة" : "Purpose of Application"} <span className="text-[#D32F2F]">*</span>
                      </label>
                      <select
                        value={tradeForm.purpose}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, purpose: e.target.value }))
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      >
                        <option value="New License">{isArabic ? "إصدار رخصة جديدة" : "New License Application"}</option>
                        <option value="License Renewal">{isArabic ? "تجديد رخصة تجارية" : "License Renewal"}</option>
                        <option value="License Amendment">{isArabic ? "تعديل رخصة أو نشاط" : "License Amendment / Activity Change"}</option>
                        <option value="License Cancellation">{isArabic ? "إلغاء أو تصفية رخصة" : "License Cancellation"}</option>
                        <option value="Other">{isArabic ? "معاملة أخرى" : "Other Corporate Request"}</option>
                      </select>
                    </div>

                    {/* Company / Proposed Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "اسم الشركة الحالي أو المقترح" : "Company Name or Proposed Trade Name"}{" "}
                        <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                      </label>
                      <input
                        type="text"
                        value={tradeForm.companyName}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, companyName: e.target.value }))
                        }
                        placeholder={isArabic ? "مثال: تريب لاين لخدمات رجال الأعمال" : "e.g. Trip Line Businessmen Services LLC"}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      />
                    </div>

                    {/* License Type */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "فئة الرخصة" : "Preferred License Category"}
                      </label>
                      <select
                        value={tradeForm.licenseType}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, licenseType: e.target.value }))
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      >
                        <option value="Commercial">{isArabic ? "تجارية (Commercial)" : "Commercial"}</option>
                        <option value="Professional">{isArabic ? "مهنية (Professional)" : "Professional"}</option>
                        <option value="Industrial">{isArabic ? "صناعية (Industrial)" : "Industrial"}</option>
                        <option value="Tourism">{isArabic ? "سياحية (Tourism)" : "Tourism"}</option>
                        <option value="Not Sure">{isArabic ? "غير متأكد" : "Not Sure"}</option>
                      </select>
                    </div>

                    {/* Number of Visas Needed */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "عدد التأشيرات المطلوبة" : "Number of Visas Needed"}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={tradeForm.numberOfApplicants}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, numberOfApplicants: e.target.value }))
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                      />
                    </div>

                    {/* Additional Details */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                        {isArabic ? "تفاصيل النشاط أو استفسارات إضافية" : "Business Activity or Additional Questions"}{" "}
                        <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                      </label>
                      <textarea
                        rows={2}
                        value={tradeForm.additionalDetails}
                        onChange={(e) =>
                          setTradeForm((p) => ({ ...p, additionalDetails: e.target.value }))
                        }
                        placeholder={
                          isArabic
                            ? "أذكر الأنشطة المطلوبة، موقع المكتب، أو أي تفاصيل خاصة..."
                            : "Specify business activities, office requirements, or special questions..."
                        }
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Optional Documents */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#D32F2F]" />
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                        {isArabic ? "المستندات الاختيارية" : "Optional Documents"}
                      </h3>
                    </div>
                    <span className="text-[11px] text-neutral-400">
                      {isArabic ? "اختياري" : "Optional"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Passport Copy */}
                    <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center hover:bg-neutral-100/70 transition-all">
                      <Upload className="h-5 w-5 text-neutral-400 mx-auto mb-1.5" />
                      <p className="text-xs font-bold text-neutral-800">
                        {isArabic ? "نسخة جواز السفر / الهوية" : "Passport / Emirates ID Copy"}
                      </p>
                      <p className="text-[11px] text-neutral-500 mb-2">PDF, JPG, PNG (Max 5MB)</p>
                      {tradeForm.passportCopy ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          <Check className="h-3.5 w-3.5" />
                          <span className="truncate max-w-[130px]">{tradeForm.passportCopy.name}</span>
                          <button
                            type="button"
                            onClick={() => handleFileChange("passportCopy", null, "trade")}
                            className="text-neutral-400 hover:text-red-500 ml-1"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm transition-all">
                          <span>{isArabic ? "اختر ملف" : "Choose File"}</span>
                          <input
                            type="file"
                            accept=".pdf,image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("passportCopy", e.target.files?.[0] || null, "trade")
                            }
                          />
                        </label>
                      )}
                    </div>

                    {/* Existing License / Initial Approval */}
                    <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center hover:bg-neutral-100/70 transition-all">
                      <Upload className="h-5 w-5 text-neutral-400 mx-auto mb-1.5" />
                      <p className="text-xs font-bold text-neutral-800">
                        {isArabic ? "الرخصة الحالية أو الموافقة المبدئية" : "Existing License / Initial Approval"}
                      </p>
                      <p className="text-[11px] text-neutral-500 mb-2">PDF, JPG, PNG (Max 5MB)</p>
                      {tradeForm.existingLicenseCopy ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          <Check className="h-3.5 w-3.5" />
                          <span className="truncate max-w-[130px]">{tradeForm.existingLicenseCopy.name}</span>
                          <button
                            type="button"
                            onClick={() => handleFileChange("existingLicenseCopy", null, "trade")}
                            className="text-neutral-400 hover:text-red-500 ml-1"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm transition-all">
                          <span>{isArabic ? "اختر ملف" : "Choose File"}</span>
                          <input
                            type="file"
                            accept=".pdf,image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("existingLicenseCopy", e.target.files?.[0] || null, "trade")
                            }
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <input
                      type="checkbox"
                      checked={tradeForm.agreeTerms}
                      onChange={(e) =>
                        setTradeForm((p) => ({ ...p, agreeTerms: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#D32F2F] focus:ring-[#D32F2F] accent-[#D32F2F]"
                    />
                    <span className="text-xs text-neutral-600 leading-snug group-hover:text-neutral-900 transition-colors">
                      {isArabic
                        ? "أوافق على أن يقوم فريق تريب لاين بالتواصل معي بخصوص استفسار الرخصة التجارية."
                        : "I agree to be contacted by Trip Line regarding my trade license enquiry."}{" "}
                      <span className="text-[#D32F2F]">*</span>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.agreeTerms}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{isArabic ? "جاري الإرسال..." : "Submitting..."}</span>
                      </span>
                    ) : (
                      <>
                        <span>{isArabic ? "إرسال طلب الرخصة" : "Submit Trade License Enquiry"}</span>
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-neutral-400 mt-2.5 italic">
                    {isArabic
                      ? "* الحقول المطلوبة. تخضع موافقات الرخص التجارية للدوائر الاقتصادية والجهات الحكومية المختصة."
                      : "* Required fields. Trade license approval is subject to the relevant authorities."}
                  </p>
                </div>
              </form>
            ) : (
              /* ================= GENERAL / INDIVIDUAL SERVICES FORM ================= */
              <form onSubmit={handleGeneralSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "الاسم الأول" : "First Name"} <span className="text-[#D32F2F]">*</span>
                    </label>
                    <input
                      type="text"
                      value={generalForm.firstName}
                      onChange={(e) =>
                        setGeneralForm((p) => ({ ...p, firstName: e.target.value }))
                      }
                      placeholder={isArabic ? "أحمد" : "First Name"}
                      className={`w-full rounded-xl border ${
                        errors.firstName ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                      } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                    />
                    {errors.firstName && (
                      <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "اسم العائلة" : "Last Name"} <span className="text-[#D32F2F]">*</span>
                    </label>
                    <input
                      type="text"
                      value={generalForm.lastName}
                      onChange={(e) =>
                        setGeneralForm((p) => ({ ...p, lastName: e.target.value }))
                      }
                      placeholder={isArabic ? "علي" : "Last Name"}
                      className={`w-full rounded-xl border ${
                        errors.lastName ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                      } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                    />
                    {errors.lastName && (
                      <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Mobile / WhatsApp Number */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "رقم الهاتف / واتساب" : "Mobile / WhatsApp Number"} <span className="text-[#D32F2F]">*</span>
                    </label>
                    <div className="relative flex rounded-xl border border-neutral-200 bg-neutral-50 overflow-visible focus-within:border-[#D32F2F] focus-within:ring-2 focus-within:ring-[#D32F2F]/20 transition-all">
                      <button
                        type="button"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        className="flex items-center gap-1.5 px-3 py-2.5 border-r rtl:border-r-0 rtl:border-l border-neutral-200 bg-neutral-100/70 hover:bg-neutral-200/60 text-xs font-bold text-neutral-800 transition-colors shrink-0"
                      >
                        <span>{currentCountry.iso}</span>
                        <span className="text-neutral-500 font-mono" dir="ltr">{currentCountry.dial}</span>
                      </button>

                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 z-30 w-72 max-h-56 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-2 shadow-xl">
                          <input
                            type="text"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            placeholder={isArabic ? "ابحث عن الدولة..." : "Search country..."}
                            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 outline-none mb-2"
                          />
                          <div className="space-y-1">
                            {filteredCountries.map((c) => (
                              <button
                                key={c.iso}
                                type="button"
                                onClick={() => {
                                  setCountryIso(c.iso);
                                  setCountryDropdownOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs hover:bg-neutral-100 text-neutral-800 transition-colors"
                              >
                                <span className="truncate">{c.name}</span>
                                <span className="font-mono text-neutral-500 text-[11px]">{c.dial}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <input
                        type="tel"
                        value={generalForm.phone}
                        onChange={(e) =>
                          setGeneralForm((p) => ({
                            ...p,
                            phone: sanitizePhone(e.target.value),
                          }))
                        }
                        placeholder="54 444 2029"
                        className="flex-1 bg-transparent px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none"
                        dir="ltr"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "البريد الإلكتروني" : "Email Address"}{" "}
                      <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                    </label>
                    <input
                      type="email"
                      value={generalForm.email}
                      onChange={(e) =>
                        setGeneralForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "الخدمة المطلوبة" : "Service Required"} <span className="text-[#D32F2F]">*</span>
                    </label>
                    <input
                      type="text"
                      value={generalForm.serviceRequired}
                      onChange={(e) =>
                        setGeneralForm((p) => ({ ...p, serviceRequired: e.target.value }))
                      }
                      placeholder={isArabic ? "أدخل اسم الخدمة" : "Enter the service name"}
                      className={`w-full rounded-xl border ${
                        errors.serviceRequired ? "border-[#D32F2F] bg-red-50/20" : "border-neutral-200 bg-neutral-50"
                      } px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all`}
                    />
                    {errors.serviceRequired && (
                      <p className="text-[11px] text-[#D32F2F] mt-1 font-medium">{errors.serviceRequired}</p>
                    )}
                  </div>

                  {/* Additional Details */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "تفاصيل إضافية" : "Additional Details"}{" "}
                      <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                    </label>
                    <textarea
                      rows={3}
                      value={generalForm.additionalDetails}
                      onChange={(e) =>
                        setGeneralForm((p) => ({ ...p, additionalDetails: e.target.value }))
                      }
                      placeholder={
                        isArabic
                          ? "اكتب أي تفاصيل أخرى ترغب في مشاركتها معنا لمساعدتك بشكل أفضل..."
                          : "Any details to help us better assist your request..."
                      }
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#D32F2F] focus:bg-white focus:ring-2 focus:ring-[#D32F2F]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Optional Visa / Supporting Document Upload */}
                  <div className="sm:col-span-2 pt-1">
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      {isArabic ? "إرفاق تأشيرة أو مستند ذي صلة" : "Attach Visa or Supporting Document"}{" "}
                      <span className="text-neutral-400 font-normal">({isArabic ? "اختياري" : "optional"})</span>
                    </label>
                    <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 hover:bg-neutral-100/70 transition-all flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3 text-center sm:text-left rtl:sm:text-right">
                        <div className="h-10 w-10 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0">
                          <Upload className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-neutral-800">
                            {isArabic ? "نسخة التأشيرة أو المستند (PDF أو صورة)" : "Visa PDF or Supporting Document"}
                          </p>
                          <p className="text-[11px] text-neutral-500">
                            {isArabic
                              ? "صيغ PDF أو صور (بحد أقصى 5 ميجابايت) لتسريع إجراءات المعاملة"
                              : "PDF, JPG, PNG (Max 5MB) to speed up service processing"}
                          </p>
                        </div>
                      </div>

                      {generalForm.visaDocument ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate max-w-[150px]">{generalForm.visaDocument.name}</span>
                          <button
                            type="button"
                            onClick={() => handleFileChange("visaDocument", null, "general")}
                            className="text-neutral-400 hover:text-red-500 ml-1 text-sm font-bold"
                            aria-label="Remove attached document"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-neutral-300 px-4 py-2 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm transition-all shrink-0">
                          <span>{isArabic ? "اختر تأشيرة / ملف" : "Upload Visa / File"}</span>
                          <input
                            type="file"
                            accept=".pdf,image/*,.doc,.docx"
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange("visaDocument", e.target.files?.[0] || null, "general")
                            }
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{isArabic ? "جاري الإرسال..." : "Submitting..."}</span>
                      </span>
                    ) : (
                      <>
                        <span>{isArabic ? "إرسال الطلب" : "Submit Request"}</span>
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-neutral-400 mt-2.5 italic">
                    {isArabic ? "* الحقول المطلوبة." : "* Required fields."}
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
  );
};

const ServiceInquiryModal = ({
  isOpen,
  onClose,
  modalType = "general",
  serviceTitle = "",
  serviceCategory = "Individuals",
  initialData = {},
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ServiceInquiryModalContent
          key={`${modalType}-${serviceTitle}`}
          onClose={onClose}
          modalType={modalType}
          serviceTitle={serviceTitle}
          serviceCategory={serviceCategory}
          initialData={initialData}
        />
      )}
    </AnimatePresence>
  );
};

export default ServiceInquiryModal;
