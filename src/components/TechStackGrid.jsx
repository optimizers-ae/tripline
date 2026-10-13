import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- Real Official Partner Logos ---
import dubaiDedImg from '../assets/dubai-ded-trimmed.png';
import ifzaImg from '../assets/ifza-dark.png';
import rakezImg from '../assets/rakez-trimmed.png';
import ajmanDedImg from '../assets/ajman-ded-trimmed.png';
import ajmanFreezoneImg from '../assets/ajman-freezone-dark.png';
import amerImg from '../assets/amer-trimmed.png';
import tasheelImg from '../assets/tasheel-trimmed.png';

// --- Partner Data Configuration with Real Logos & Bilingual Content ---

const PARTNERS = [
  {
    id: 'ajman-ded',
    name: 'Ajman DED',
    nameAR: 'دائرة التنمية الاقتصادية - عجمان',
    category: 'mainland',
    badge: 'Government of Ajman',
    badgeAR: 'حكومة عجمان',
    jurisdiction: 'Ajman Mainland',
    jurisdictionAR: 'اقتصادية عجمان',
    description:
      'Trip Line can assist you with your Ajman DED trade license application, including document preparation, application submission, and follow-up.',
    descriptionAR:
      'تساعدك تريب لاين في تقديم طلبات إصدار الرخص التجارية لدى دائرة التنمية الاقتصادية بعجمان، وتجهيز الوثائق ومتابعة المعاملة حتى الإصدار.',
    accent: '#8A6D3B', // Ajman Executive Bronze / Gold
    accentBg: 'rgba(138, 109, 59, 0.08)',
    accentBorder: 'rgba(138, 109, 59, 0.35)',
    tag: 'Direct Mainland Setup',
    tagAR: 'تراخيص اقتصادية مباشرة',
    logoImg: ajmanDedImg,
    features: ['Trade License Applications', 'Document Preparation & Typing', 'Direct Government Follow-Up'],
    featuresAR: ['إصدار وتجديد الرخص التجارية', 'تجهيز وطباعة المستندات', 'المتابعة المباشرة للمعاملات'],
  },
  {
    id: 'ajman-free-zone',
    name: 'Ajman Free Zone',
    nameAR: 'منطقة عجمان الحرة',
    category: 'freezone',
    badge: 'Maritime & Commercial',
    badgeAR: 'مركز بحري وتجاري',
    jurisdiction: 'Ajman Sea Port (AFZ)',
    jurisdictionAR: 'منطقة عجمان الحرة',
    description:
      'Strategically positioned commercial port hub offering streamlined business licensing, e-commerce solutions, and agile startup packages.',
    descriptionAR:
      'مركز تجاري واستراتيجي متكامل يوفر إصداراً سريعاً للتراخيص، وحلول التجارة الإلكترونية، وباقات مرنة للمستثمرين.',
    accent: '#1A2530', // AFZ Navy Dark
    accentBg: 'rgba(26, 37, 48, 0.08)',
    accentBorder: 'rgba(26, 37, 48, 0.35)',
    tag: 'Strategic Port Hub',
    tagAR: 'موقع استراتيجي وبحري',
    logoImg: ajmanFreezoneImg,
    features: ['E-Commerce & Commercial Trade', 'Rapid Company Formation', 'Flexible Office & Warehouses'],
    featuresAR: ['تجارة عامة وإلكترونية', 'تأسيس شركات سريع ومرن', 'مكاتب ومستودعات جاهزة'],
  },
  {
    id: 'dubai-ded',
    name: 'Dubai DED',
    nameAR: 'اقتصادية دبي (DED)',
    category: 'mainland',
    badge: 'Government of Dubai',
    badgeAR: 'حكومة دبي',
    jurisdiction: 'Dubai Mainland (DED)',
    jurisdictionAR: 'دبي المحلية',
    description:
      'Direct mainland business licensing, commercial registration, and full access to the local UAE and international markets.',
    descriptionAR:
      'إصدار الرخص التجارية المحلية والتسجيل التجاري في دبي مع التملك الأجنبي بنسبة 100% والوصول المباشر للأسواق.',
    accent: '#C8102E', // Dubai Economy Red
    accentBg: 'rgba(200, 16, 46, 0.08)',
    accentBorder: 'rgba(200, 16, 46, 0.35)',
    tag: '100% Foreign Ownership',
    tagAR: 'تملك أجنبي 100%',
    logoImg: dubaiDedImg,
    features: ['Mainland Commercial License', 'Local & Global Trade Access', 'Unlimited Visa Allocation'],
    featuresAR: ['رخص تجارية محلية', 'الوصول للأسواق المحلية والدولية', 'تسهيلات الإقامات والتوظيف'],
  },
  {
    id: 'rakez',
    name: 'RAKEZ',
    nameAR: 'منطقة رأس الخيمة الاقتصادية',
    category: 'freezone',
    badge: 'Ras Al Khaimah',
    badgeAR: 'رأس الخيمة',
    jurisdiction: 'RAKEZ Economic Zone',
    jurisdictionAR: 'هيئة راكز',
    description:
      'Cost-effective business hub featuring customized warehouses, industrial facilities, and flexible commercial licensing packages.',
    descriptionAR:
      'وجهة أعمال متكاملة واقتصادية توفر مستودعات مخصصة ومرافق صناعية وتراخيص تجارية مرنة لجميع الأنشطة.',
    accent: '#0097A7', // RAKEZ Cyan / Teal
    accentBg: 'rgba(0, 151, 167, 0.08)',
    accentBorder: 'rgba(0, 151, 167, 0.35)',
    tag: 'High Cost Efficiency',
    tagAR: 'كفاءة مالية وتنافسية',
    logoImg: rakezImg,
    features: ['Industrial & Trading Hub', 'Custom Warehouses & Land', 'Budget-Friendly Setup Packages'],
    featuresAR: ['مركز صناعي وتجاري', 'مستودعات وأراضي مخصصة', 'باقات تأسيس اقتصادية ومرنة'],
  },
  {
    id: 'ifza',
    name: 'IFZA Dubai',
    nameAR: 'إيفزا دبي (IFZA)',
    category: 'freezone',
    badge: 'Silicon Oasis Hub',
    badgeAR: 'واحة دبي للسيليكون',
    jurisdiction: 'Dubai Free Zone (DSO)',
    jurisdictionAR: 'منطقة حرة - دبي',
    description:
      'Modern, highly flexible free zone ecosystem providing quick company incorporation, multi-activity setups, and premium digital offices.',
    descriptionAR:
      'بيئة أعمال حرة حديثة ومرنة توفر تأسيساً سريعاً للشركات، ودمج أنشطة متعددة، ومكاتب ذكية متطورة.',
    accent: '#00A3AD', // IFZA Teal
    accentBg: 'rgba(0, 163, 173, 0.08)',
    accentBorder: 'rgba(0, 163, 173, 0.35)',
    tag: 'Fast-Track Setup',
    tagAR: 'تأسيس فوري وسريع',
    logoImg: ifzaImg,
    features: ['Zero Corporate Tax Options', 'Multi-Disciplinary Visas', 'Digital Portal Access'],
    featuresAR: ['خيارات ضريبية مميزة', 'دمج أنشطة تجارية متعددة', 'إنجاز إلكتروني متكامل'],
  },
  {
    id: 'amer-center',
    name: 'Amer Center',
    nameAR: 'مراكز آمر الحكومية',
    category: 'government',
    badge: 'Immigration & Residency',
    badgeAR: 'إقامة وتأشيرات',
    jurisdiction: 'Dubai Immigration (GDRFA)',
    jurisdictionAR: 'إقامة دبي (GDRFA)',
    description:
      'Official government partner center providing a wide range of visa, residency, entry permit, and immigration services in Dubai.',
    descriptionAR:
      'المركز الحكومي المعتمد لتقديم جميع خدمات أذونات الدخول وتثبيت وتجديد الإقامات والخدمات الخاصة بإقامة دبي.',
    accent: '#0B3C68', // Amer Deep Navy
    accentBg: 'rgba(11, 60, 104, 0.08)',
    accentBorder: 'rgba(11, 60, 104, 0.35)',
    tag: 'Residency & Passports',
    tagAR: 'تأشيرات وإقامات',
    logoImg: amerImg,
    features: ['Entry Permits & Residence Visas', 'Residency Renewals & Stamping', 'Golden Visa Processing Support'],
    featuresAR: ['أذونات دخول وتأشيرات إقامة', 'تجديد وتثبيت الإقامات', 'معاملات الإقامة الذهبية'],
  },
  {
    id: 'tasheel',
    name: 'Tasheel',
    nameAR: 'مراكز تسهيل الحكومية',
    category: 'government',
    badge: 'Labor & Employment',
    badgeAR: 'خدمات العمل والتوطين',
    jurisdiction: 'MOHRE / Ministry of Labor',
    jurisdictionAR: 'وزارة الموارد البشرية',
    description:
      'Providing comprehensive labor and employment services in partnership with the Ministry of Human Resources and Emiratisation (MOHRE).',
    descriptionAR:
      'تقديم جميع المعاملات العمالية وتصاريح العمل وعقود التوظيف بالتنسيق مع وزارة الموارد البشرية والتوطين.',
    accent: '#0085C0', // Tasheel Cyan / Blue
    accentBg: 'rgba(0, 133, 192, 0.08)',
    accentBorder: 'rgba(0, 133, 192, 0.35)',
    tag: 'MOHRE Certified',
    tagAR: 'معاملات العمل والتوطين',
    logoImg: tasheelImg,
    features: ['Work Permits & Labor Cards', 'Offer Letters & Contracts Typing', 'MOHRE Regulatory Compliance'],
    featuresAR: ['تصاريح العمل وبطاقات المنشأة', 'طباعة عروض العمل وعقود التوظيف', 'الامتثال لأنظمة العمل'],
  },
];

// --- Animation Variants ---

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardFadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Subcomponents ---

const MarqueeItem = ({ partner, isArabic }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-3.5 rounded-2xl bg-white px-7 py-3.5 shadow-sm border border-neutral-100/90 transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
      style={{
        borderColor: isHovered ? partner.accentBorder : undefined,
        boxShadow: isHovered ? `0 10px 25px -5px ${partner.accentBg}` : undefined,
      }}
      title={isArabic ? partner.nameAR : partner.name}
    >
      <span
        className="h-2.5 w-2.5 rounded-full transition-all duration-300 shrink-0"
        style={{ backgroundColor: isHovered ? partner.accent : '#D1D5DB' }}
      />
      <div className="flex h-9 sm:h-10 items-center justify-center">
        <img
          src={partner.logoImg}
          alt={isArabic ? partner.nameAR : partner.name}
          draggable={false}
          className="h-7 sm:h-8 md:h-9 w-auto max-w-[150px] sm:max-w-[170px] object-contain transition-transform duration-300"
        />
      </div>
    </div>
  );
};

const PartnerCard = ({ partner, isArabic }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardFadeUpVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
      style={{
        borderColor: isHovered ? partner.accentBorder : undefined,
        boxShadow: isHovered ? `0 20px 35px -10px ${partner.accentBg}` : undefined,
      }}
    >
      {/* Top Accent Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
        style={{
          backgroundColor: partner.accent,
          opacity: isHovered ? 1 : 0.4,
        }}
      />

      <div>
        {/* Top Row: Official Real Logo & Badge */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-100">
          <div className="flex items-center min-h-[54px] max-w-[62%] transition-transform duration-300 group-hover:scale-105">
            <img
              src={partner.logoImg}
              alt={isArabic ? partner.nameAR : partner.name}
              draggable={false}
              className="h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[195px] object-contain"
            />
          </div>

          <span
            className="shrink-0 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 font-mono text-center"
            style={{
              backgroundColor: isHovered ? partner.accentBg : '#F3F4F6',
              color: isHovered ? partner.accent : '#4B5563',
            }}
          >
            {isArabic ? partner.badgeAR : partner.badge}
          </span>
        </div>

        {/* Title & Jurisdiction */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full transition-all duration-300 shrink-0"
              style={{ backgroundColor: isHovered ? partner.accent : '#9CA3AF' }}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
              {isArabic ? partner.jurisdictionAR : partner.jurisdiction}
            </span>
          </div>

          <h3
            className="mt-2 text-xl font-bold transition-colors duration-300 font-comforta"
            style={{ color: isHovered ? partner.accent : '#111827' }}
          >
            {isArabic ? partner.nameAR : partner.name}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
            {isArabic ? partner.descriptionAR : partner.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="mt-5 space-y-2.5">
          {(isArabic ? partner.featuresAR : partner.features).map((feat, i) => (
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

      {/* Bottom Tag & Action Button */}
      <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
        <span
          className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-300"
          style={{
            backgroundColor: isHovered ? partner.accentBg : '#F9FAFB',
            color: isHovered ? partner.accent : '#4B5563',
          }}
        >
          {isArabic ? partner.tagAR : partner.tag}
        </span>

        <a
          href="https://wa.me/971544442029"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: isHovered ? partner.accentBg : '#F3F4F6',
            color: isHovered ? partner.accent : '#6B7280',
            transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
          }}
          title={isArabic ? 'تواصل معنا الآن' : 'Contact us'}
        >
          <ArrowUpRight className={`h-4 w-4 ${isArabic ? 'rotate-[-90deg]' : ''}`} />
        </a>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---

const TechStackGrid = () => {
  const { t, isArabic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('tabAllPartners') || 'All Partners' },
    { id: 'freezone', label: t('tabFreezones') || 'Free Zones' },
    { id: 'mainland', label: t('tabMainland') || 'Mainland Authorities' },
    { id: 'government', label: t('tabGovt') || 'Government Centers' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? PARTNERS
      : PARTNERS.filter((item) => item.category === activeCategory);

  return (
    <section id="stack" className="relative overflow-hidden bg-[#fbfbfb] py-24 md:py-32 font-comforta">
      <div className="mx-auto max-w-7xl px-6 md:px-10" dir={isArabic ? 'rtl' : 'ltr'}>
        {/* Header with Fade-Up */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
            {t('trustedPartnersBadge') || 'TRUSTED PARTNERS'}
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl"
          >
            {t('trustedPartnersTitlePre') || 'Building Success Through '}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              {t('trustedPartnersTitleHighlight') || 'Trusted Partnerships.'}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            {t('trustedPartnersSubtitle') ||
              'We collaborate with reliable institutions and government authorities to deliver complete business solutions for entrepreneurs and companies in the UAE.'}
          </motion.p>
        </motion.div>

        {/* Endless Partner Marquee Banner with Official Real Logos */}
        <div
          dir="ltr"
          className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div
            className="flex w-max animate-marquee gap-6 sm:gap-8 py-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: '32s' }}
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <MarqueeItem key={`${partner.id}-${i}`} partner={partner} isArabic={isArabic} />
            ))}
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div
          role="tablist"
          aria-label="Partner Categories"
          className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200/90'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dedicated Partner Cards Grid with Fade-Up and Real Logos */}
        <motion.div
          key={activeCategory}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} isArabic={isArabic} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackGrid;
