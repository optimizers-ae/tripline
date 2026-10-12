import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Individuals from "../pages/Individuals";
import Corporates from "../pages/Corporate";
import Contact from "../pages/Contact";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center font-comforta">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-neutral-900 mb-3">{t("notFoundHeading")}</h1>
        <p className="text-neutral-600 mb-6">{t("notFoundDesc")}</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#D32F2F] px-6 py-3 text-sm font-bold text-white hover:bg-[#F44336] transition-colors"
        >
          {t("backToHome")}
        </a>
      </div>
    </div>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services/individuals" element={<Individuals />} />
      <Route path="/services/corporate" element={<Corporates />} />
      <Route path="/contact" element={<Contact />} />

      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;