import { motion } from 'framer-motion';
import {
  Briefcase,
  CreditCard,
  Globe,
  ShieldCheck,
  FileKey,
  Users,
  FileSignature,
  Landmark,
  Stamp,
  ArrowRight
} from 'lucide-react';
import { MagneticCursor } from './MouseTrackingEffect';

const SERVICES = [
  {
    id: 1,
    title: "Issuance & Cancellation of Employment Contracts",
    icon: Briefcase,
    category: "employment"
  },
  {
    id: 2,
    title: "Renewal & Modification of Labor Cards",
    icon: CreditCard,
    category: "employment"
  },
  {
    id: 3,
    title: "Issuance & Renewal of Commercial Licenses",
    icon: Globe,
    category: "corporate"
  },
  {
    id: 4,
    title: "Medical Tests & Emirates ID Services",
    icon: ShieldCheck,
    category: "visas"
  },
  {
    id: 5,
    title: "Issuance & Cancellation of Entry Visas",
    icon: FileKey,
    category: "visas"
  },
  {
    id: 6,
    title: "Family & Partner Visa Services",
    icon: Users,
    category: "visas"
  },
  {
    id: 7,
    title: "Attestation of Documents & Contracts",
    icon: FileSignature,
    category: "corporate"
  },
  {
    id: 8,
    title: "Embassy & Consulate Services",
    icon: Landmark,
    category: "government"
  },
  {
    id: 9,
    title: "Fine Reduction & Insurance Updates",
    icon: Stamp,
    category: "government"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-32 font-comforta">
      <div className="mx-auto max-w-7xl px-6">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUpVariants} className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-neutral-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D32F2F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D32F2F]" />
            </span>
            Our Expertise
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              Government Services.
            </span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="mt-4 text-base text-neutral-600">
            Tripline Businessmen Services provides an all-inclusive suite of governmental, corporate, and visa solutions.
          </motion.p>
        </motion.div>

        {/* Featured Visuals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { img: '/service_visa.jpg', title: 'Visas & Immigration' },
            { img: '/service_contract.jpg', title: 'Corporate Licensing' },
            { img: '/service_government.jpg', title: 'Government Relations' }
          ].map((item, i) => (
             <motion.div key={i} variants={fadeUpVariants} className="group relative overflow-hidden rounded-3xl h-64 md:h-80 shadow-lg">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">{item.title}</h3>
             </motion.div>
          ))}
        </motion.div>

        {/* List of 9 Services */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 no-scrollbar -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:gap-6 md:pb-0 md:mx-0 md:px-0 w-full"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariants}
                className="group flex gap-4 rounded-2xl bg-white p-5 md:p-6 border border-neutral-100 shadow-sm transition-all hover:shadow-md hover:border-[#D32F2F]/30 w-[85vw] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D32F2F]/10 text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-bold text-neutral-800 leading-snug group-hover:text-[#D32F2F] transition-colors">
                    {service.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}