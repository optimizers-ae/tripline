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
  Stamp
} from 'lucide-react';

const SERVICES = [
  {
    id: '01', number: '01 / 09',
    title: 'Employment Contracts',
    tag: 'LABOR & IMMIGRATION',
    description: 'Issuance & Cancellation of Employment Contracts tailored to UAE labor laws.',
    icon: Briefcase, accent: '#D32F2F',
  },
  {
    id: '02', number: '02 / 09',
    title: 'Labor Cards',
    tag: 'LABOR & IMMIGRATION',
    description: 'Renewal & Modification of Labor Cards ensuring full compliance.',
    icon: CreditCard, accent: '#D32F2F',
  },
  {
    id: '03', number: '03 / 09',
    title: 'Commercial Licenses',
    tag: 'CORPORATE SERVICES',
    description: 'Issuance & Renewal of Commercial Licenses for mainland and free zones.',
    icon: Globe, accent: '#F44336',
  },
  {
    id: '04', number: '04 / 09',
    title: 'Medical & Emirates ID',
    tag: 'VISA & RESIDENCY',
    description: 'Assistance with Medical Tests & Emirates ID Services for new residents.',
    icon: ShieldCheck, accent: '#111111',
  },
  {
    id: '05', number: '05 / 09',
    title: 'Entry Visas',
    tag: 'VISA & RESIDENCY',
    description: 'Issuance & Cancellation of Entry Visas for business and tourism.',
    icon: FileKey, accent: '#D32F2F',
  },
  {
    id: '06', number: '06 / 09',
    title: 'Family & Partner Visas',
    tag: 'VISA & RESIDENCY',
    description: 'Family & Partner Visa Services for seamless relocation and sponsorship.',
    icon: Users, accent: '#F44336',
  },
  {
    id: '07', number: '07 / 09',
    title: 'Document Attestation',
    tag: 'LEGAL SERVICES',
    description: 'Attestation of Documents & Contracts from relevant ministries and embassies.',
    icon: FileSignature, accent: '#111111',
  },
  {
    id: '08', number: '08 / 09',
    title: 'Embassy Services',
    tag: 'GOVERNMENT RELATIONS',
    description: 'Embassy & Consulate Services including Sudanese and other nationalities.',
    icon: Landmark, accent: '#D32F2F',
  },
  {
    id: '09', number: '09 / 09',
    title: 'Fines & Insurance',
    tag: 'GOVERNMENT RELATIONS',
    description: 'Fine Reduction & Insurance Updates for businesses and individuals.',
    icon: Stamp, accent: '#F44336',
  },
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

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f7f8] py-24 md:py-32 font-comforta">
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
            About Us &amp; Our Expertise
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Comprehensive Solutions &amp; Empowered by{' '}
            <span className="bg-gradient-to-r from-[#D32F2F] via-[#F44336] to-[#111111] bg-clip-text text-transparent">
              Government Services.
            </span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="mt-4 text-base text-neutral-600">
            Tripline Businessmen Services provides an all-inclusive suite of governmental, corporate, and visa solutions. We bridge the gap between premium service delivery and administrative excellence.
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
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x md:snap-none snap-mandatory gap-5 md:gap-6 pb-8 md:pb-0 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 w-full">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariants}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 border border-neutral-100 shadow-sm transition-all hover:shadow-xl hover:border-[#D32F2F]/30 w-[85vw] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D32F2F]/10 text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {service.tag}
                  </h4>
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}