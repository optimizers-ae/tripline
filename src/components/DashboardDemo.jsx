import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  Building2,
  GitCommitHorizontal,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Sparkles,
  UserCheck,
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

const JURISDICTIONS = [
  {
    id: 'mainland',
    name: 'Dubai Mainland (DED)',
    badge: '100% Foreign Ownership',
    basePrice: 18500,
    visaUnitCost: 3800,
    days: '4–6 Days',
    features: ['Trade freely across UAE & globe', 'Direct government tenders', 'Unlimited visa scalability'],
    accent: '#0055A5',
  },
  {
    id: 'ifza',
    name: 'IFZA Dubai Freezone',
    badge: 'Silicon Oasis Hub',
    basePrice: 12900,
    visaUnitCost: 3200,
    days: '3–5 Days',
    features: ['Zero corporate tax options', 'Multi-activity license', 'Digital portal incorporation'],
    accent: '#00A3AD',
  },
  {
    id: 'difc',
    name: 'DIFC Financial Center',
    badge: 'Common Law Prestige',
    basePrice: 32000,
    visaUnitCost: 4500,
    days: '7–10 Days',
    features: ['Independent English court system', 'Fintech & fund management', 'Global institutional status'],
    accent: '#0B3C68',
  },
  {
    id: 'rak',
    name: 'RĀK Freezone (RAKEZ)',
    badge: 'Cost-Effective Hub',
    basePrice: 10500,
    visaUnitCost: 2800,
    days: '3–4 Days',
    features: ['Customized warehousing', 'Affordable office packages', 'Fast-track remote setup'],
    accent: '#C8102E',
  },
  {
    id: 'ajman',
    name: 'Ajman Free Zone',
    badge: 'Commercial Port Hub',
    basePrice: 9800,
    visaUnitCost: 2600,
    days: '2–4 Days',
    features: ['Strategic maritime port access', 'E-commerce quick licensing', 'Budget-friendly flexibility'],
    accent: '#991B1E',
  },
];

const PARTNER_BANKS = [
  {
    name: 'Emirates NBD',
    logo: 'ENBD',
    fixedRate: '3.99%',
    variableRate: '3M EIBOR + 1.25%',
    maxLTV: '80%',
    nonResidentLTV: '60%',
    processingFee: '0.50%',
    highlight: 'Lowest 3-Year Fixed Rate',
    color: '#0055A5',
  },
  {
    name: 'First Abu Dhabi Bank (FAB)',
    logo: 'FAB',
    fixedRate: '4.15%',
    variableRate: '3M EIBOR + 1.35%',
    maxLTV: '80%',
    nonResidentLTV: '65%',
    processingFee: '0.75%',
    highlight: 'Highest Non-Resident LTV',
    color: '#E0292B',
  },
  {
    name: 'Abu Dhabi Commercial (ADCB)',
    logo: 'ADCB',
    fixedRate: '4.20%',
    variableRate: '3M EIBOR + 1.40%',
    maxLTV: '80%',
    nonResidentLTV: '55%',
    processingFee: '0.50%',
    highlight: 'Zero Valuation Fee Promo',
    color: '#9E1B32',
  },
  {
    name: 'Dubai Islamic Bank (DIB)',
    logo: 'DIB',
    fixedRate: '4.10%',
    variableRate: 'Islamic Profit Rate',
    maxLTV: '80%',
    nonResidentLTV: '60%',
    processingFee: '0.50%',
    highlight: '100% Sharia-Compliant',
    color: '#00843D',
  },
  {
    name: 'Mashreq Bank',
    logo: 'Mashreq',
    fixedRate: '4.25%',
    variableRate: '3M EIBOR + 1.45%',
    maxLTV: '80%',
    nonResidentLTV: '60%',
    processingFee: '0.25%',
    highlight: 'Instant Digital Pre-Approval',
    color: '#FF5F00',
  },
];

// Animation Variants
const containerVariants = {
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
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const frameRevealVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('mortgage');

  // Mortgage Calculator State
  const [propertyPrice, setPropertyPrice] = useState(2500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(25);
  const [interestRate, setInterestRate] = useState(4.25);
  const [clientType, setClientType] = useState('resident'); // 'resident' | 'non-resident'

  // Company Setup Estimator State
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(JURISDICTIONS[1]);
  const [visaCount, setVisaCount] = useState(2);
  const [activityType, setActivityType] = useState('consulting');

  // Mortgage Calculations
  const loanAmount = propertyPrice * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = tenureYears * 12;
  const monthlyEMI =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;
  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = totalPayment - loanAmount;
  const minRequiredIncome = monthlyEMI / 0.5; // UAE DBR rule (max 50% Debt Burden Ratio)

  // Company Setup Calculations
  const activitySurcharge =
    activityType === 'commercial' ? 2500 : activityType === 'tech' ? 1500 : activityType === 'ecommerce' ? 2000 : 0;
  const totalCompanyCost =
    selectedJurisdiction.basePrice + visaCount * selectedJurisdiction.visaUnitCost + activitySurcharge;

  return (
    <section id="demo" className="relative overflow-hidden bg-[#f7f7f8] py-20 md:py-32 font-comforta">
      {/* Background ambient lighting with float animations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#D32F2F]/15 blur-[120px] animate-floatSlow" />
        <div className="absolute bottom-1/4 -right-20 h-[450px] w-[450px] rounded-full bg-[#111111]/10 blur-[130px] animate-floatSlowReverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-tr from-[#D32F2F]/10 via-[#F44336]/10 to-[#111111]/10 blur-[140px] animate-pulseGlow" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        {/* Section Header with Staggered Fade-Up */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-neutral-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D32F2F]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D32F2F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D32F2F]" />
            </span>
            <span>Tripline Businessmen Services Simulator</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl"
          >
            Simulate your UAE setup &amp;{' '}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              mortgage eligibility.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600"
          >
            A live interactive preview of the proprietary advisory tools and real-time market intelligence our clients
            access during their UAE business formation and property financing journey.
          </motion.p>
        </motion.div>

        {/* Mac OS Browser Mockup Frame with Scale Reveal */}
        <motion.div
          variants={frameRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Ambient Glow Behind Frame */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] opacity-70 blur-3xl"
            style={{
              background:
                'radial-gradient(50% 70% at 30% 40%, rgba(216,170,93,0.25), transparent 70%), radial-gradient(50% 70% at 80% 60%, rgba(0,201,167,0.18), transparent 70%)',
            }}
          />

          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0f1117] border border-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20">
            {/* Top Mac OS Browser Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#181b24] border-b border-white/10">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-[#e0443e]/40 transition-transform duration-200 hover:scale-110" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-[#d89c1f]/40 transition-transform duration-200 hover:scale-110" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-[#1fa030]/40 transition-transform duration-200 hover:scale-110" />
                </span>

                {/* URL Pill */}
                <div className="ml-3 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-1 text-[11px] font-mono text-neutral-300 border border-white/10 shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    <span className="relative block h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>portal.Triplineadvisory.ae/simulator</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-500/20 shadow-sm"
                >
                  <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: '8s' }} />
                  Live Advisory Engine
                </motion.span>
              </div>
            </div>

            {/* Dashboard Inner Header with Navigation Tabs */}
            <div className="px-4 py-4 md:px-6 bg-[#13161f] border-b border-white/10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#D32F2F] to-[#F44336] text-neutral-950 font-bold shadow-md shadow-[#D32F2F]/20 transition-transform duration-300 hover:rotate-6">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm md:text-base font-bold text-white">Tripline Client Intelligence Portal</h3>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-mono text-[#D32F2F]">v4.8</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">
                      UAE Commercial, Mortgage &amp; Corporate Formation Suite
                    </p>
                  </div>
                </div>

                {/* Interactive Navigation Tabs with Animated Layout Indicator */}
                <div role="tablist" aria-label="Dashboard Live Calculators" className="flex flex-wrap items-center gap-1 rounded-xl bg-black/50 p-1 border border-white/10 relative">
                  {[
                    { id: 'mortgage', label: 'Mortgage Qualifier', icon: Calculator },
                    { id: 'company', label: 'Company Setup Estimator', icon: Building2 },
                    { id: 'pipeline', label: 'Application Pipeline', icon: GitCommitHorizontal },
                    { id: 'banking', label: 'Bank & EIBOR Matrix', icon: TrendingUp },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        id={`dashboard-tab-${tab.id}`}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`dashboard-panel-${tab.id}`}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer z-10 ${
                          isActive
                            ? 'text-neutral-950 font-bold'
                            : 'text-neutral-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeDashboardTab"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                            className="absolute inset-0 rounded-lg bg-[#D32F2F] shadow-md shadow-[#D32F2F]/30 -z-10"
                          />
                        )}
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tab Contents Area with Smooth Crossfade Transitions */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#0f1117] text-white min-h-[460px]">
              <AnimatePresence mode="wait">
                {/* ========================================================= */}
                {/* TAB 1: MORTGAGE & LOAN QUALIFIER SIMULATOR                */}
                {/* ========================================================= */}
                {activeTab === 'mortgage' && (
                  <motion.div
                    key="mortgage"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 gap-6 lg:grid-cols-12"
                  >
                    {/* Left: Interactive Controls */}
                    <div className="space-y-5 lg:col-span-7">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#D32F2F]">
                          Loan Parameters
                        </span>
                        <div className="flex items-center gap-1.5 bg-black/40 rounded-lg p-1 border border-white/10">
                          <button
                            type="button"
                            onClick={() => {
                              setClientType('resident');
                              if (downPaymentPercent < 20) setDownPaymentPercent(20);
                            }}
                            className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                              clientType === 'resident'
                                ? 'bg-white/20 text-white shadow-sm'
                                : 'text-neutral-400 hover:text-white'
                            }`}
                          >
                            UAE Resident
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setClientType('non-resident');
                              if (downPaymentPercent < 35) setDownPaymentPercent(35);
                            }}
                            className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                              clientType === 'non-resident'
                                ? 'bg-white/20 text-white shadow-sm'
                                : 'text-neutral-400 hover:text-white'
                            }`}
                          >
                            Non-Resident / Expat
                          </button>
                        </div>
                      </div>

                      {/* Control 1: Property Price */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <label htmlFor="property-price-input" className="text-neutral-200 font-medium">Property Purchase Price</label>
                          <span className="font-mono text-sm font-bold text-white">
                            AED {propertyPrice.toLocaleString()}
                          </span>
                        </div>
                        <input
                          id="property-price-input"
                          aria-label="Property Purchase Price in AED"
                          type="range"
                          min="750000"
                          max="15000000"
                          step="50000"
                          value={propertyPrice}
                          onChange={(e) => setPropertyPrice(Number(e.target.value))}
                          className="w-full accent-[#D32F2F] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none transition-all"
                        />
                        <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                          <span>AED 750K</span>
                          <span>AED 7.5M</span>
                          <span>AED 15M+</span>
                        </div>
                      </div>

                      {/* Control 2: Down Payment */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <label htmlFor="down-payment-input" className="text-neutral-200 font-medium">
                            Down Payment ({downPaymentPercent}%)
                          </label>
                          <span className="font-mono text-sm font-bold text-[#111111]">
                            AED {Math.round(propertyPrice * (downPaymentPercent / 100)).toLocaleString()}
                          </span>
                        </div>
                        <input
                          id="down-payment-input"
                          aria-label="Down Payment percentage"
                          type="range"
                          min={clientType === 'resident' ? 20 : 35}
                          max="50"
                          step="5"
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                          className="w-full accent-[#111111] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none transition-all"
                        />
                        <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                          <span>Min {clientType === 'resident' ? '20%' : '35%'} (Central Bank Rule)</span>
                          <span>LTV: {100 - downPaymentPercent}%</span>
                          <span>Max 50%</span>
                        </div>
                      </div>

                      {/* Row: Tenure & Interest Rate */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <label htmlFor="loan-tenure-select" className="text-neutral-200 font-medium">Loan Tenure</label>
                            <span className="font-mono text-xs font-bold text-white">{tenureYears} Years</span>
                          </div>
                          <select
                            id="loan-tenure-select"
                            aria-label="Loan Tenure in years"
                            value={tenureYears}
                            onChange={(e) => setTenureYears(Number(e.target.value))}
                            className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D32F2F] cursor-pointer transition-colors"
                          >
                            {[5, 10, 15, 20, 25].map((y) => (
                              <option key={y} value={y} className="bg-[#181b24] text-white">
                                {y} Years ({y * 12} Months)
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <label htmlFor="interest-rate-select" className="text-neutral-200 font-medium">Est. Interest Rate</label>
                            <span className="font-mono text-xs font-bold text-[#F44336]">{interestRate}% p.a.</span>
                          </div>
                          <select
                            id="interest-rate-select"
                            aria-label="Estimated Interest Rate percentage"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D32F2F] cursor-pointer transition-colors"
                          >
                            <option value={3.99} className="bg-[#181b24] text-white">
                              3.99% (3-Yr Fixed Promo)
                            </option>
                            <option value={4.25} className="bg-[#181b24] text-white">
                              4.25% (Standard Resident)
                            </option>
                            <option value={4.75} className="bg-[#181b24] text-white">
                              4.75% (Non-Resident Expat)
                            </option>
                            <option value={5.25} className="bg-[#181b24] text-white">
                              5.25% (Commercial / Variable)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Right: Live Calculation Results Card */}
                    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 lg:col-span-5 transition-all hover:border-[#D32F2F]/40">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            Calculation Summary
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#111111]/10 px-2 py-0.5 text-[10px] font-bold text-[#111111]">
                            <CheckCircle2 className="h-3 w-3" />
                            Pre-Approval High (98%)
                          </span>
                        </div>

                        {/* Monthly EMI Hero Figure */}
                        <div className="mt-4 rounded-xl bg-black/40 p-4 border border-white/10 shadow-inner">
                          <p className="text-[11px] uppercase tracking-wider text-neutral-400">Estimated Monthly EMI</p>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="font-mono text-3xl font-extrabold text-[#D32F2F]">
                              AED {Math.round(monthlyEMI).toLocaleString()}
                            </span>
                            <span className="text-xs text-neutral-400">/ month</span>
                          </div>
                        </div>

                        {/* Metric Breakdown Grid */}
                        <div className="mt-4 space-y-2.5 text-xs">
                          <div className="flex justify-between text-neutral-300">
                            <span>Financed Loan Amount:</span>
                            <span className="font-mono font-bold text-white">
                              AED {Math.round(loanAmount).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-neutral-300">
                            <span>Est. Min Monthly Income:</span>
                            <span className="font-mono font-bold text-[#111111]">
                              AED {Math.round(minRequiredIncome).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-neutral-300">
                            <span>Total Interest over {tenureYears} yrs:</span>
                            <span className="font-mono text-neutral-400">
                              AED {Math.round(totalInterest).toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Animated Visual Breakdown Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between text-[10px] text-neutral-400 mb-1">
                            <span>Principal: {Math.round((loanAmount / (totalPayment || 1)) * 100)}%</span>
                            <span>Interest: {Math.round((totalInterest / (totalPayment || 1)) * 100)}%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 flex">
                            <motion.div
                              className="bg-[#111111] h-full"
                              animate={{ width: `${Math.min(100, Math.max(0, (loanAmount / (totalPayment || 1)) * 100))}%` }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                            />
                            <motion.div
                              className="bg-[#F44336] h-full"
                              animate={{ width: `${Math.min(100, Math.max(0, (totalInterest / (totalPayment || 1)) * 100))}%` }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10">
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#D32F2F] to-[#F44336] py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 shadow-md shadow-[#D32F2F]/20"
                        >
                          <span>Get Free Bank Pre-Approval</span>
                          <ArrowRight className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ========================================================= */}
                {/* TAB 2: UAE COMPANY FORMATION ESTIMATOR                    */}
                {/* ========================================================= */}
                {activeTab === 'company' && (
                  <motion.div
                    key="company"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 gap-6 lg:grid-cols-12"
                  >
                    {/* Left: Jurisdiction Selector & Activity */}
                    <div className="space-y-5 lg:col-span-7">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#D32F2F]">
                          1. Select Preferred Authority &amp; Jurisdiction
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {JURISDICTIONS.length} Strategic Options
                        </span>
                      </div>

                      {/* Jurisdiction Cards Grid with Hover Animation */}
                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {JURISDICTIONS.map((jur) => {
                          const isSelected = selectedJurisdiction.id === jur.id;
                          return (
                            <motion.div
                              key={jur.id}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setSelectedJurisdiction(jur)}
                              className={`rounded-xl p-3 border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-white/10 border-[#D32F2F] shadow-md shadow-[#D32F2F]/15 ring-1 ring-[#D32F2F]/50'
                                  : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.05]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white">{jur.name}</span>
                                <span
                                  className="h-2 w-2 rounded-full transition-all"
                                  style={{ backgroundColor: isSelected ? '#D32F2F' : 'transparent' }}
                                />
                              </div>
                              <span className="mt-1 inline-block text-[10px] font-mono text-[#D32F2F]">
                                {jur.badge}
                              </span>
                              <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                                <span>From AED {jur.basePrice.toLocaleString()}</span>
                                <span className="text-emerald-400 font-bold">{jur.days}</span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Visa Count Slider */}
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between items-center text-xs">
                          <label htmlFor="visa-count-input" className="text-neutral-300 font-medium">Investor / Employee Visas Needed</label>
                          <span className="font-mono text-sm font-bold text-[#111111]">
                            {visaCount} {visaCount === 1 ? 'Visa' : 'Visas'} (AED{' '}
                            {(visaCount * selectedJurisdiction.visaUnitCost).toLocaleString()})
                          </span>
                        </div>
                        <input
                          id="visa-count-input"
                          aria-label="Investor and Employee Visas Needed"
                          type="range"
                          min="0"
                          max="8"
                          step="1"
                          value={visaCount}
                          onChange={(e) => setVisaCount(Number(e.target.value))}
                          className="w-full accent-[#111111] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none transition-all"
                        />
                        <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                          <span>0 (License Only)</span>
                          <span>4 Visas</span>
                          <span>8 Visas</span>
                        </div>
                      </div>

                      {/* Activity Category */}
                      <div className="space-y-2">
                        <span className="text-xs text-neutral-300 font-medium">Primary Business Activity</span>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {[
                            { id: 'consulting', label: 'Consulting & Advisory' },
                            { id: 'commercial', label: 'General Trading' },
                            { id: 'tech', label: 'Tech & Software' },
                            { id: 'ecommerce', label: 'E-Commerce' },
                          ].map((act) => (
                            <motion.button
                              key={act.id}
                              type="button"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setActivityType(act.id)}
                              className={`rounded-lg p-2 text-center text-[11px] font-medium border transition-all cursor-pointer ${
                                activityType === act.id
                                  ? 'bg-[#D32F2F]/20 border-[#D32F2F] text-white shadow-sm'
                                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                              }`}
                            >
                              {act.label}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Package Summary */}
                    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 lg:col-span-5 transition-all hover:border-[#D32F2F]/40">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            Estimated Setup Package
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                            <Clock className="h-3 w-3" />
                            {selectedJurisdiction.days}
                          </span>
                        </div>

                        {/* Total Cost Display */}
                        <div className="mt-4 rounded-xl bg-black/40 p-4 border border-white/10 shadow-inner">
                          <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                            Estimated All-Inclusive Setup Fee
                          </p>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="font-mono text-3xl font-extrabold text-[#D32F2F]">
                              AED {totalCompanyCost.toLocaleString()}
                            </span>
                            <span className="text-xs text-neutral-400">one-time</span>
                          </div>
                        </div>

                        {/* Inclusions Breakdown */}
                        <div className="mt-4 space-y-2 text-xs">
                          <div className="flex justify-between text-neutral-300">
                            <span>Base Trade License &amp; Name Approval:</span>
                            <span className="font-mono font-bold text-white">
                              AED {selectedJurisdiction.basePrice.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-neutral-300">
                            <span>{visaCount}x Establishment &amp; Visa Allocation:</span>
                            <span className="font-mono font-bold text-[#111111]">
                              AED {(visaCount * selectedJurisdiction.visaUnitCost).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-neutral-300">
                            <span>Activity Clearance &amp; Legal Scopes:</span>
                            <span className="font-mono font-bold text-white">
                              AED {activitySurcharge.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Key Features Included */}
                        <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                            Guaranteed Inclusions:
                          </p>
                          {selectedJurisdiction.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#111111] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10">
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#D32F2F] to-[#F44336] py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 shadow-md shadow-[#D32F2F]/20"
                        >
                          <span>Get Full Itemized Quote</span>
                          <ArrowRight className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ========================================================= */}
                {/* TAB 3: LIVE APPLICATION PIPELINE TRACKER                  */}
                {/* ========================================================= */}
                {activeTab === 'pipeline' && (
                  <motion.div
                    key="pipeline"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    {/* Advisor Assigned Header Card */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/[0.03] p-4 border border-white/10 shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D32F2F]/20 text-[#D32F2F] border border-[#D32F2F]/40 shadow-inner">
                          <UserCheck className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-white">Assigned Advisory Lead: Gaurav R.</h4>
                            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-mono text-emerald-400">
                              Online • UAE
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400">
                            Case Reference: <span className="font-mono text-white">#APX-2026-DXB-9482</span> • Mortgage &amp; Corporate Desk
                          </p>
                        </div>
                      </div>

                      <motion.a
                        href="tel:+639602778783"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                      >
                        <span>Direct Call / WhatsApp</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </motion.a>
                    </motion.div>

                    {/* 5-Step Progress Stepper */}
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 md:p-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6">
                        Active Application Milestone Timeline
                      </h4>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 relative">
                        {[
                          {
                            step: '01',
                            title: 'Profile & KYC Assessment',
                            status: 'Completed',
                            date: 'Day 1',
                            desc: 'Financial health review, credit check & jurisdiction matching.',
                            state: 'done',
                          },
                          {
                            step: '02',
                            title: 'Pre-Approval & Sanction',
                            status: 'Completed',
                            date: 'Day 2',
                            desc: 'Formal bank in-principle approval & security clearance.',
                            state: 'done',
                          },
                          {
                            step: '03',
                            title: 'Property Valuation & Lease',
                            status: 'In Progress (85%)',
                            date: 'Day 3–4',
                            desc: 'Official RERA valuation & office tenancy registration.',
                            state: 'active',
                          },
                          {
                            step: '04',
                            title: 'Final Offer & License',
                            status: 'Next Step',
                            date: 'Day 5',
                            desc: 'Bank final offer letter signing & commercial trade license.',
                            state: 'pending',
                          },
                          {
                            step: '05',
                            title: 'Disbursement & Visas',
                            status: 'Upcoming',
                            date: 'Day 6–7',
                            desc: 'Loan release, investor Emirates ID & bank account opening.',
                            state: 'pending',
                          },
                        ].map((m, idx) => {
                          const isDone = m.state === 'done';
                          const isActive = m.state === 'active';
                          return (
                            <motion.div
                              key={m.step}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.08, duration: 0.4 }}
                              whileHover={{ y: -3 }}
                              className={`relative rounded-xl p-4 border transition-all ${
                                isActive
                                  ? 'bg-[#D32F2F]/10 border-[#D32F2F] ring-1 ring-[#D32F2F]/50 shadow-md shadow-[#D32F2F]/10'
                                  : isDone
                                  ? 'bg-emerald-500/[0.05] border-emerald-500/30'
                                  : 'bg-white/[0.02] border-white/5 opacity-60'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-xs font-bold text-neutral-400">Step {m.step}</span>
                                {isDone && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                                {isActive && (
                                  <span className="relative flex h-2 w-2">
                                    <span className="absolute inset-0 rounded-full bg-[#D32F2F] animate-ping" />
                                    <span className="relative block h-2 w-2 rounded-full bg-[#D32F2F]" />
                                  </span>
                                )}
                              </div>
                              <h5 className="text-xs font-bold text-white leading-snug">{m.title}</h5>
                              <p className="mt-1 text-[11px] text-neutral-400 leading-relaxed">{m.desc}</p>
                              <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono">
                                <span
                                  className={
                                    isActive ? 'text-[#D32F2F] font-bold' : isDone ? 'text-emerald-400' : 'text-neutral-500'
                                  }
                                >
                                  {m.status}
                                </span>
                                <span className="text-neutral-500">{m.date}</span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ========================================================= */}
                {/* TAB 4: BANK RATE & EIBOR MATRIX                           */}
                {/* ========================================================= */}
                {activeTab === 'banking' && (
                  <motion.div
                    key="banking"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    {/* EIBOR Live Indicator Bar */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        { title: 'UAE 3-Month EIBOR', val: '4.82%', sub: '● Live Central Bank benchmark', color: '#111111' },
                        { title: 'UAE 6-Month EIBOR', val: '4.95%', sub: 'Stable benchmark', color: '#FFFFFF' },
                        { title: 'Tripline Lowest Fixed Rate', val: '3.99%', sub: 'Exclusive partner pricing', color: '#D32F2F' },
                        { title: 'Bank Success Rate', val: '99.2%', sub: 'Across 500+ cases', color: '#34D399' },
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-all hover:border-[#D32F2F]/40"
                        >
                          <p className="text-[10px] uppercase tracking-wider text-neutral-400">{card.title}</p>
                          <p className="mt-1 text-xl font-bold font-mono" style={{ color: card.color }}>
                            {card.val}
                          </p>
                          <span className="text-[10px]" style={{ color: card.color }}>
                            {card.sub}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Partner Banks Comparison Table */}
                    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                          <tr>
                            <th className="py-3 px-4">UAE Lending Institution</th>
                            <th className="py-3 px-4">3-Yr Fixed Rate</th>
                            <th className="py-3 px-4">Variable Spread</th>
                            <th className="py-3 px-4">Resident LTV</th>
                            <th className="py-3 px-4">Non-Resident LTV</th>
                            <th className="py-3 px-4">Special Feature</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {PARTNER_BANKS.map((b, idx) => (
                            <motion.tr
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05, duration: 0.3 }}
                              className="hover:bg-white/[0.06] transition-colors"
                            >
                              <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                                <span
                                  className="flex h-6 w-6 items-center justify-center rounded-md font-mono text-[9px] font-bold text-white shadow-sm"
                                  style={{ backgroundColor: b.color }}
                                >
                                  {b.logo}
                                </span>
                                <span>{b.name}</span>
                              </td>
                              <td className="py-3.5 px-4 font-mono font-bold text-[#D32F2F]">{b.fixedRate}</td>
                              <td className="py-3.5 px-4 font-mono text-neutral-300">{b.variableRate}</td>
                              <td className="py-3.5 px-4 font-mono text-emerald-400 font-bold">{b.maxLTV}</td>
                              <td className="py-3.5 px-4 font-mono text-neutral-300">{b.nonResidentLTV}</td>
                              <td className="py-3.5 px-4">
                                <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white">
                                  {b.highlight}
                                </span>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Bottom Fast-Action Bar with Micro-Animations */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-950 px-9 py-4 font-bold uppercase tracking-wider text-white text-xs sm:text-sm shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:bg-neutral-800 transition-all cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Speak with an Tripline Advisor</span>
              <ArrowRight className="h-4 w-4 text-[#D32F2F] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </motion.a>
          <p className="text-xs text-neutral-500 font-mono">
            Free Feasibility Review • 48-Hour Bank Pre-Approval • 100% Confidential
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardDemo;


