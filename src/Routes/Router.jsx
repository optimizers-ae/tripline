import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Individuals from "../pages/Individuals";
import Corporates from "../pages/Corporate";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services/individuals" element={<Individuals />} />
      <Route path="/services/corporate" element={<Corporates />} />
      <Route path="/contact" element={<Contact />} />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center font-comforta">
            <div className="text-center">
              <h1 className="text-6xl font-extrabold text-neutral-900 mb-3">404</h1>
              <p className="text-neutral-600 mb-6">Page not found</p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#D32F2F] px-6 py-3 text-sm font-bold text-white hover:bg-[#F44336] transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default Router;