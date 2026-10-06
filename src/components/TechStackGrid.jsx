import  { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

// --- Vector Logo SVGs for the 6 Partners ---

const DubaiEconomyLogo = ({ className = "h-10 sm:h-12 w-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 195 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <text
      x="0"
      y="24"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="700"
      fontSize="17.5"
      fill={color}
      letterSpacing="-0.3px"
    >
      Dubai Economy
    </text>
    <g transform="translate(148, 4)">
      {/* Sail curve quadrant */}
      <path
        d="M 2 26 C 2 13 8 3 16 1 L 16 26 Z"
        fill={color}
      />
      {/* Vertical pill bar */}
      <path
        d="M 19 3 C 20.5 1.5 24 1.5 24 4 L 24 26 L 19 26 Z"
        fill={color}
      />
    </g>
  </svg>
);

const IFZALogo = ({ className = "h-10 sm:h-12 w-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 150 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(2, 2)">
      {/* Circle background */}
      <circle cx="17" cy="17" r="17" fill={color} />
      {/* Falcon / wings silhouette */}
      <path
        d="M 8 15.5 C 11.5 20.5 15.5 23 17 23 C 18.5 23 22.5 20.5 26 15.5 C 22.5 17.8 19 18.5 17 18.5 C 15 18.5 11.5 17.8 8 15.5 Z"
        fill="#FFFFFF"
      />
      <path
        d="M 12 12.5 C 14.5 15.5 16 17 17 17 C 18 17 19.5 15.5 22 12.5 C 19.5 14 18 14.5 17 14.5 C 16 14.5 14.5 14 12 12.5 Z"
        fill="#FFFFFF"
      />
    </g>
    <text
      x="44"
      y="24"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="900"
      fontSize="21"
      fill={color}
      letterSpacing="1px"
    >
      IFZA
    </text>
    <text
      x="102"
      y="14"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="700"
      fontSize="8"
      fill={color}
    >
      ®
    </text>
  </svg>
);

const RAKLogo = ({ className = "h-11 sm:h-13 w-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* RĀK header */}
    <text
      x="60"
      y="23"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="800"
      fontSize="23"
      fill={color}
      letterSpacing="2.5px"
    >
      RĀK
    </text>
    {/* Macron bar over A */}
    <line
      x1="52"
      y1="4.5"
      x2="68"
      y2="4.5"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* Freezone label */}
    <text
      x="60"
      y="38"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="600"
      fontSize="11.5"
      fill={color}
      letterSpacing="0.8px"
    >
      Freezone
    </text>
  </svg>
);

const DIFCLogo = ({ className = "h-10 sm:h-12 w-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Geometric Diamond Emblem */}
    <g transform="translate(3, 2)">
      <path
        d="M 17 1 L 33 17 L 17 33 L 1 17 Z"
        stroke={color}
        strokeWidth="2.8"
        fill="none"
        strokeLinejoin="miter"
      />
      <line x1="17" y1="1" x2="17" y2="33" stroke={color} strokeWidth="1.8" />
      <line x1="1" y1="17" x2="33" y2="17" stroke={color} strokeWidth="1.8" />
      <path
        d="M 17 8 L 26 17 L 17 26 L 8 17 Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
      />
    </g>
    <text
      x="46"
      y="24.5"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="700"
      fontSize="22"
      fill={color}
      letterSpacing="2px"
    >
      AMER
    </text>
  </svg>
);

const AjmanLogo = ({ className = "h-11 sm:h-13 w-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 160 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stylized 'A' Emblem */}
    <g transform="translate(3, 3)">
      <path
        d="M 18 1 C 12 1 6 12 6 25 C 6 31 10 35 14 35 C 17 35 18 31 19 26 C 20 31 21 35 24 35 C 28 35 32 31 32 25 C 32 12 26 1 18 1 Z"
        fill={color}
      />
      <path
        d="M 18 8 C 21 8 23 15 23 22 C 20.5 24 17.5 24 15 22 C 15 15 17 8 18 8 Z"
        fill="#FFFFFF"
      />
      <circle cx="19" cy="29" r="2" fill="#FFFFFF" opacity="0.9" />
    </g>
    {/* Stacked Text */}
    <text
      x="45"
      y="19"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="800"
      fontSize="16"
      fill={color}
      letterSpacing="0.4px"
    >
      Ajman
    </text>
    <text
      x="45"
      y="34"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="600"
      fontSize="11"
      fill={color}
      letterSpacing="0.8px"
    >
      Free Zone
    </text>
  </svg>
);

const RippleLogo = ({ className = "h-10 sm:h-12 w-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Triskelion 3-dots */}
    <g transform="translate(4, 5)">
      <circle cx="6" cy="14" r="4.2" fill={color} />
      <circle cx="18" cy="7" r="4.2" fill={color} />
      <circle cx="18" cy="21" r="4.2" fill={color} />
      <path
        d="M 6 14 C 11 14 13 10 18 7"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 6 14 C 11 14 13 18 18 21"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 18 7 C 21 12 21 16 18 21"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
    </g>
    <text
      x="40"
      y="24"
      fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
      fontWeight="700"
      fontSize="20"
      fill={color}
      letterSpacing="-0.5px"
    >
      TASHEEL
    </text>
  </svg>
);

// --- Partner Data Configuration ---

const PARTNERS = [
  {
    id: 'dubai-economy',
    name: 'Dubai Economy',
    category: 'mainland',
    type: 'Mainland Authority',
    badge: 'Government of Dubai',
    jurisdiction: 'Dubai Mainland (DED)',
    description:
      'Direct mainland business licensing, commercial registration, and full access to the local UAE and international markets.',
    accent: '#d9ab5d', // Dubai Royal Blue
    accentBg: 'rgba(0, 85, 165, 0.08)',
    accentBorder: 'rgba(0, 85, 165, 0.35)',
    tag: '100% Foreign Ownership',
    logo: DubaiEconomyLogo,
    features: ['Mainland Commercial License', 'Local & Global Trade', 'Unlimited Visas'],
  },
  {
    id: 'ifza',
    name: 'IFZA Dubai',
    category: 'freezone',
    type: 'Free Zone Authority',
    badge: 'Silicon Oasis Hub',
    jurisdiction: 'Dubai Free Zone',
    description:
      'Modern, highly flexible free zone ecosystem providing quick company incorporation, multi-activity setups, and premium digital offices.',
    accent: '#00A3AD', // IFZA Aqua / Teal
    accentBg: 'rgba(0, 163, 173, 0.08)',
    accentBorder: 'rgba(0, 163, 173, 0.35)',
    tag: 'Fast-Track Setup',
    logo: IFZALogo,
    features: ['Zero Corporate Tax Options', 'Multi-Disciplinary Visas', 'Digital Portal Access'],
  },
  {
    id: 'rak-freezone',
    name: 'RĀK Freezone',
    category: 'freezone',
    type: 'Economic Zone',
    badge: 'Northern Emirates',
    jurisdiction: 'Ras Al Khaimah',
    description:
      'Cost-effective business hub featuring customized warehouses, industrial facilities, and flexible commercial licensing packages.',
    accent: '#C8102E', // RAK Ruby Red
    accentBg: 'rgba(200, 16, 46, 0.08)',
    accentBorder: 'rgba(200, 16, 46, 0.35)',
    tag: 'High Cost Efficiency',
    logo: RAKLogo,
    features: ['Industrial & Trading Hub', 'Custom Warehousing', 'Budget-Friendly Packages'],
  },
  {
    id: 'difc',
    name: 'Amer Center',
    category: 'government',
    type: 'GDRFA Partner',
    badge: 'Immigration',
    jurisdiction: 'Dubai Immigration',
    description:
      'Official government partner center providing a wide range of visa, residency, and immigration services in Dubai.',
    accent: '#0B3C68', // DIFC Deep Navy Blue
    accentBg: 'rgba(11, 60, 104, 0.08)',
    accentBorder: 'rgba(11, 60, 104, 0.35)',
    tag: 'Common Law Framework',
    logo: DIFCLogo,
    features: ['Entry Permits', 'Residency Visas', 'Golden Visas'],
  },
  {
    id: 'ajman-free-zone',
    name: 'Ajman Free Zone',
    category: 'freezone',
    type: 'Free Zone Authority',
    badge: 'Maritime & Commercial',
    jurisdiction: 'Ajman Sea Port',
    description:
      'Strategically positioned commercial port hub offering streamlined business licensing, e-commerce solutions, and agile startup packages.',
    accent: '#991B1E', // Ajman Maroon / Burgundy
    accentBg: 'rgba(153, 27, 30, 0.08)',
    accentBorder: 'rgba(153, 27, 30, 0.35)',
    tag: 'Strategic Port Hub',
    logo: AjmanLogo,
    features: ['E-Commerce & Commercial Trade', 'Rapid Company Formation', 'Flexible Office Spaces'],
  },
  {
    id: 'ripple',
    name: 'Tasheel',
    category: 'government',
    type: 'MOHRE Center',
    badge: 'Labor Services',
    jurisdiction: 'Global / UAE Hub',
    description:
      'Providing comprehensive labor and employment services in partnership with the Ministry of Human Resources and Emiratisation (MOHRE).',
    accent: '#0085C0', // Ripple Electric Blue
    accentBg: 'rgba(0, 133, 192, 0.08)',
    accentBorder: 'rgba(0, 133, 192, 0.35)',
    tag: 'Web3 & Payments',
    logo: RippleLogo,
    features: ['Labor Cards', 'Employment Visas', 'MOHRE Compliance'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Partners' },
  { id: 'freezone', label: 'Free Zones' },
  { id: 'mainland', label: 'Mainland & Government' },
  { id: 'financial', label: 'Government & Immigration' },
];

// --- Animation Variants ---

const headerContainerVariants = {
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

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardFadeUpVariants = {
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

// --- Subcomponents ---

const MarqueeItem = ({ partner }) => {
  const [isHovered, setIsHovered] = useState(false);
  const LogoComponent = partner.logo;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-3.5 rounded-2xl bg-white px-8 py-4.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        borderColor: isHovered ? partner.accentBorder : undefined,
        boxShadow: isHovered ? `0 10px 25px -5px ${partner.accentBg}` : undefined,
      }}
    >
      <span
        className="h-2.5 w-2.5 rounded-full transition-all duration-300"
        style={{ backgroundColor: isHovered ? partner.accent : '#D1D5DB' }}
      />
      <LogoComponent
        className="h-8 sm:h-9 md:h-10 w-auto transition-colors duration-300"
        color={isHovered ? partner.accent : '#1E293B'}
      />
    </div>
  );
};

const PartnerCard = ({ partner }) => {
  const [isHovered, setIsHovered] = useState(false);
  const LogoComponent = partner.logo;

  return (
    <motion.div
      variants={cardFadeUpVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
      style={{
        borderColor: isHovered ? partner.accentBorder : undefined,
        boxShadow: isHovered ? `0 20px 35px -10px ${partner.accentBg}` : undefined,
      }}
    >
      {/* Top Accent Bar that highlights in the partner's brand color */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
        style={{
          backgroundColor: partner.accent,
          opacity: isHovered ? 1 : 0.4,
        }}
      />

      <div>
        {/* Top Row: Logo & Badge */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-100">
          <div className="flex items-center min-h-[52px] transition-transform duration-300 group-hover:scale-105">
            <LogoComponent
              className="h-10 sm:h-12 md:h-13 w-auto transition-colors duration-300"
              color={isHovered ? partner.accent : '#1E293B'}
            />
          </div>

          <span
            className="shrink-0 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 font-mono"
            style={{
              backgroundColor: isHovered ? partner.accentBg : '#F3F4F6',
              color: isHovered ? partner.accent : '#4B5563',
            }}
          >
            {partner.badge}
          </span>
        </div>

        {/* Title & Jurisdiction */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full transition-all duration-300"
              style={{ backgroundColor: isHovered ? partner.accent : '#9CA3AF' }}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
              {partner.jurisdiction}
            </span>
          </div>

          <h3
            className="mt-2 text-xl font-bold transition-colors duration-300 font-comforta"
            style={{ color: isHovered ? partner.accent : '#111827' }}
          >
            {partner.name}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
            {partner.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="mt-5 space-y-2">
          {partner.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
              <CheckCircle2
                className="h-4 w-4 shrink-0 transition-colors duration-300"
                style={{ color: isHovered ? partner.accent : '#9CA3AF' }}
              />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tag & Action */}
      <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
        <span
          className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-300"
          style={{
            backgroundColor: isHovered ? partner.accentBg : '#F9FAFB',
            color: isHovered ? partner.accent : '#4B5563',
          }}
        >
          {partner.tag}
        </span>

        <div
          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300"
          style={{
            backgroundColor: isHovered ? partner.accentBg : '#F3F4F6',
            color: isHovered ? partner.accent : '#6B7280',
            transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
          }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---

const TechStackGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? PARTNERS
      : PARTNERS.filter((item) => item.category === activeCategory);

  return (
    <section id="stack" className="relative overflow-hidden bg-[#fbfbfb] py-24 md:py-32 font-comforta">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header with Fade-Up */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-xs font-semibold uppercase tracking-[2.5px] text-neutral-500"
          >
            TRUSTED PARTNERS
          </motion.p>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl"
          >
            Building Success Through{' '}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              Trusted Partnerships.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            We collaborate with reliable institutions and service providers to deliver complete business solutions for entrepreneurs and companies in the UAE.
          </motion.p>
        </motion.div>

        {/* Endless Partner Marquee Banner with Interactive Color Hover */}
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 py-4">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <MarqueeItem key={`${partner.id}-${i}`} partner={partner} />
            ))}
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div role="tablist" aria-label="Partner Categories" className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-white text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dedicated Partner Cards Grid with Fade-Up and Dynamic Hover Colors */}
        <motion.div
          key={activeCategory}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackGrid;
