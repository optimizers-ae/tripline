import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Code-split below-the-fold components to reduce initial bundle size by 80%
const About = lazy(() => import('../components/About'));
const StatsCounter = lazy(() => import('../components/StatsCounter'));
const TechStackGrid = lazy(() => import('../components/TechStackGrid'));
const AccentBanner = lazy(() => import('../components/AccentBanner'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));

const ContactCTA = lazy(() => import('../components/ContactCTA'));
const Footer = lazy(() => import('../components/Footer'));
const MagneticCursor = lazy(() =>
  import('../components/MouseTrackingEffect').then((mod) => ({ default: mod.MagneticCursor }))
);

const Home = () => {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#D32F2F] text-white">
      {/* 1. Navbar  */}
      <Navbar />

      {/* 2. Hero*/}
      <Hero />

      {/* Below-the-fold components loaded on demand */}
      <Suspense fallback={<div className="min-h-[200px] bg-[#f7f7f8]" />}>
        {/* 3. About Us */}
        <About />

        {/* 4. Stats & Testimonial */}
        <StatsCounter />

        {/* 5. Slider */}
        <TechStackGrid />

        {/* 6. Accent Banner */}
        <MagneticCursor
          magneticFactor={0.55}
          blendMode="exclusion"
          cursorSize={40}
        >
          <AccentBanner
            image="/accent-section-1-v2.webp"
            alt="Loro Labs Handed Off"
            lines={[
              'EVERY BUSINESS',
              'DESERVES THE',
              'RIGHT GUIDANCE',
              'TO GROW.',
            ]}
            badge="ENGINEERED FOR BUSINESS SUCCESS"
            position="bottom-right"
          />
        </MagneticCursor>

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Contact CTA */}
        <ContactCTA />

        {/* 10. Studio Footer */}
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
