import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import careersHeroBg from '../assets/hero-intelligence.jpg';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Scale, 
  Heart, 
  Award, 
  GraduationCap, 
  Laptop, 
  DollarSign, 
  X,
  Send,
  UploadCloud,
  ChevronRight,
  Building2
} from 'lucide-react';

const mockJobsData = [
  {
    id: 'lead-ai-architect',
    title: 'Lead AI / ML Systems Architect',
    department: 'AI Research & Architecture',
    location: 'Andover, MA (Hybrid) / Greater Boston',
    type: 'Full-time',
    experience: '8+ Years',
    badge: 'Patented Gating Architecture',
    highlight: 'Design deterministic reasoning engines for high-consequence litigation dockets',
    overview: 'We are seeking a Lead AI/ML Systems Architect to head the design and evolution of our Polaris™ and Cortex™ reasoning engines. You will lead research on multimodal document reasoning, hallucination elimination, and verifiable citation graphs where every output is scrutinized by federal judges and carrier auditors.',
    responsibilities: [
      'Architect and train proprietary, single-tenant neural reasoning pipelines for complex multi-hundred page litigation records.',
      'Lead the algorithmic implementation of deterministic citation grounding (zero probabilistic hallucinations).',
      'Collaborate with legal engineering specialists to convert state bar opinions (ABA 512, FL Bar 24-1) into formal software validation gates.',
      'Author USPTO patent applications covering novel high-consequence decision architectures.'
    ],
    requirements: [
      'M.S. or Ph.D. in Computer Science, Machine Learning, or related quantitative discipline.',
      '8+ years building and deploying production-grade AI systems, with demonstrable experience in NLP, RAG, and document intelligence.',
      'Deep fluency with PyTorch, CUDA, Python, modern vector databases, and distributed inference.',
      'Strong publication or patent record in applied AI, retrieval architectures, or verifiable decision systems.'
    ],
    skills: ['PyTorch', 'Deterministic Retrieval', 'Multimodal LLMs', 'Vector Indexes', 'USPTO Patents']
  },
  {
    id: 'senior-fullstack-systems',
    title: 'Senior Full-Stack Distributed Systems Engineer',
    department: 'Engineering',
    location: 'Andover, MA / Remote (US)',
    type: 'Full-time',
    experience: '5+ Years',
    badge: 'Single-Tenant Cloud',
    highlight: 'Build high-performance legal workspace interfaces and ultra-secure VPC microservices',
    overview: 'As a Senior Full-Stack Engineer, you will design, build, and optimize the enterprise web platforms that power Trinity AI Boston. You will architect intuitive attorney review interfaces and back them with sub-second, single-tenant cloud microservices.',
    responsibilities: [
      'Develop modern, responsive web applications in React 19, Tailwind CSS, and TypeScript for Am Law 200 litigation defense teams.',
      'Engineer low-latency document streaming and annotation engines capable of rendering 10,000-page evidence dockets in real time.',
      'Build isolated single-tenant backend APIs with bank-grade AES-256 and TLS 1.3 cryptographic enforcement.',
      'Partner closely with product design and legal defense teams to deliver seamless Attorney-in-the-Loop workflows.'
    ],
    requirements: [
      '5+ years of software engineering experience across frontend and backend distributed systems.',
      'Excellence in TypeScript, React, Node.js, and modern CSS/Tailwind.',
      'Experience with PostgreSQL, Redis, Docker, and AWS/GCP cloud environments.',
      'Track record of building secure, high-compliance B2B enterprise software (SOC 2, HIPAA, or FinTech).'
    ],
    skills: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Single-Tenant VPC', 'Tailwind CSS']
  },
  {
    id: 'senior-legal-engineer',
    title: 'Senior Legal Engineer / Defense Litigation Specialist',
    department: 'Legal Tech & Compliance',
    location: 'Greater Boston, MA / Remote',
    type: 'Full-time',
    experience: '4+ Years (J.D. or Legal Ops)',
    badge: 'Legal AI Ethics & Rules',
    highlight: 'Bridge statutory court rules and carrier guidelines directly into software logic',
    overview: 'Trinity AI Boston is built for matters where the work is signed by an attorney, filed with a court, and billed to a carrier that audits it. We are looking for a Senior Legal Engineer who understands Florida, Texas, California, and New York insurance defense litigation to translate statutory clocks and carrier guidelines into executable software gates.',
    responsibilities: [
      'Encode insurance carrier litigation guidelines (LMG) and statutory clocks (First-Party Property, Construction Defect) into deterministic rule engines.',
      'Audit AI work products against ABA Formal Opinion 512 and state ethics rules to ensure verifiable human attorney oversight.',
      'Conduct rigorous legal red-teaming on generated evaluations, chronologies, and cross-examination outlines.',
      'Interface directly with Am Law 200 trial teams and carrier claims executives to refine practice line capabilities.'
    ],
    requirements: [
      'J.D. from an accredited law school or 5+ years in high-stakes insurance defense litigation operations.',
      'Familiarity with first-party property, commercial liability, or construction defect litigation lifecycle.',
      'Passion for artificial intelligence, legal tech automation, and ethical compliance standards.',
      'Excellent written communication, analytical rigor, and cross-functional leadership skills.'
    ],
    skills: ['Insurance Defense', 'ABA Formal Opinion 512', 'Carrier Guidelines', 'Litigation Dockets', 'Statutory Rules']
  },
  {
    id: 'staff-cloud-security',
    title: 'Staff Platform & Cloud Security Architect',
    department: 'Engineering',
    location: 'Andover, MA / Hybrid',
    type: 'Full-time',
    experience: '7+ Years',
    badge: 'Enterprise Security',
    highlight: 'Architect bank-grade isolation boundaries and zero cross-client data leakage protocols',
    overview: 'Join as our Staff Platform & Security Architect to ensure our single-tenant infrastructure sets the gold standard in legal data sovereignty. You will maintain our SOC 2 Type 1 and Type 2 posture and build dedicated VPC boundaries for enterprise carrier partners.',
    responsibilities: [
      'Architect isolated single-tenant Kubernetes and serverless deployments across AWS and GCP.',
      'Implement customer-managed encryption keys (CMEK), automated penetration testing, and real-time audit logging.',
      'Oversee third-party SOC 2 audits, carrier vendor risk questionnaires, and ISO 27001 assessments.',
      'Build zero-trust identity and access management (IAM) systems incorporating strict role-based controls.'
    ],
    requirements: [
      '7+ years in enterprise cloud security, DevOps, or infrastructure engineering.',
      'Deep expertise in AWS/GCP security architecture, Terraform/IaC, and Kubernetes isolation.',
      'Proven leadership executing SOC 2 Type 2 attestations and enterprise client security audits.',
      'Strong grasp of cryptography, zero-knowledge proofs, or confidential computing is a strong plus.'
    ],
    skills: ['Cloud Security', 'SOC 2 Type 2', 'Single-Tenant VPC', 'Terraform', 'Kubernetes', 'AES-256']
  },
  {
    id: 'ai-data-retrieval-engineer',
    title: 'Senior AI Evidence Retrieval & Data Engineer',
    department: 'Engineering',
    location: 'Bangalore, India (Development Center)',
    type: 'Full-time',
    experience: '5+ Years',
    badge: 'Evidence Ingestion',
    highlight: 'Build high-throughput OCR and cryptographic fact-linking pipelines',
    overview: 'Located at our Bangalore Engineering Center, you will engineer the data ingestion and OCR extraction engines that digest millions of pages of unstructured litigation dockets, medical bills, and forensic photographs.',
    responsibilities: [
      'Develop scalable, high-throughput document ingestion pipelines processing scanned PDFs, deposition transcripts, and forensic photos.',
      'Implement layout-aware multimodal OCR models with high accuracy on low-resolution and handwritten documents.',
      'Build cryptographic provenance indexers that bind every extracted fact to source page coordinates.',
      'Optimize vector indexing and distributed search for sub-second retrieval across multi-gigabyte litigation matters.'
    ],
    requirements: [
      'B.Tech or M.Tech in Computer Science or related engineering field.',
      '5+ years building scalable data pipelines and document processing systems.',
      'Experience with Python, Rust, Apache Spark/Flink, and modern vector databases (Milvus, Pinecone, Qdrant).',
      'Strong understanding of OCR engines, multimodal models, and distributed systems.'
    ],
    skills: ['Python', 'Multimodal OCR', 'Document Ingestion', 'Vector Search', 'Cryptographic Hashing']
  },
  {
    id: 'director-carrier-solutions',
    title: 'Director of Enterprise Carrier Solutions',
    department: 'Legal Tech & Compliance',
    location: 'Greater Boston, MA / Hybrid',
    type: 'Full-time',
    experience: '8+ Years',
    badge: 'Enterprise Growth',
    highlight: 'Deploy and scale Cosmos across tier-1 insurance carriers and panel law firms',
    overview: 'As Director of Enterprise Carrier Solutions, you will partner with insurance carrier leadership and Am Law 200 panel defense firms to pilot, implement, and expand the Cosmos Platform across commercial litigation dockets.',
    responsibilities: [
      'Lead strategic enterprise customer engagements from discovery briefing through pilot deployment and multi-office rollout.',
      'Translate carrier claims workflow requirements into actionable product features for our engineering team.',
      'Establish quantifiable ROI metrics (cycle time reduction, compliance defense fee savings, indemnity accuracy).',
      'Represent Trinity AI Boston at major insurance defense conferences and executive legal symposiums.'
    ],
    requirements: [
      '8+ years in enterprise legal technology, claims executive consulting, or insurance defense software solutions.',
      'Proven track record managing six-to-seven figure enterprise software accounts.',
      'Deep network and credibility with insurance claims executives, risk officers, and defense law firm leaders.',
      'Uncompromising integrity, consultative problem-solving mindset, and executive presentation mastery.'
    ],
    skills: ['Enterprise Sales', 'Insurance Defense', 'Carrier Claims', 'Am Law 200', 'Executive Briefings']
  }
];

const perksAndBenefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation & Equity',
    description: 'Top-tier base salary plus significant equity ownership in a fast-growing, Am Law 200-deployed enterprise AI company.'
  },
  {
    icon: Heart,
    title: 'Comprehensive Healthcare',
    description: '100% employer-covered premium medical, dental, and vision insurance for employees and family dependents.'
  },
  {
    icon: Laptop,
    title: 'Cutting-Edge Workstations',
    description: 'Choose your setup: top-spec MacBook Pro, Linux powerhouse, 4K displays, and a home-office ergonomic stipend.'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Conference Stipend',
    description: '$3,500 annual personal budget for technical conferences, AI research papers, state bar memberships, and certifications.'
  },
  {
    icon: ShieldCheck,
    title: '401(k) Retirement Match',
    description: 'Generous 401(k) company match with immediate vesting to secure your long-term financial future.'
  },
  {
    icon: Clock,
    title: 'Flexible Hybrid & Remote Work',
    description: 'Autonomous work culture with flexible hours and modern collaborative hubs in Andover, MA and Bangalore, India.'
  }
];

export default function CareersPage({ onNavigate, onRequestDemo }) {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverNote: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const departments = ['All', 'Engineering', 'Legal Tech & Compliance', 'AI Research & Architecture'];

  const filteredJobs = selectedDepartment === 'All'
    ? mockJobsData
    : mockJobsData.filter((job) => job.department === selectedDepartment);

  const handleOpenJob = (job) => {
    setActiveJobModal(job);
    setApplySuccess(false);
  };

  const handleCloseJob = () => {
    setActiveJobModal(null);
    setApplySuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverNote: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-trinity-canvas text-trinity-ink flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      {/* Sticky Enterprise Navigation Header */}
      <Header
        onNavigate={onNavigate}
        onRequestDemo={onRequestDemo}
        currentPage="careers"
      />

      <main className="flex-grow">
        {/* =========================================================================
            CAREERS HERO: CINEMATIC DEDICATED HEADER WITH PARALLAX SKYLINE
            ========================================================================= */}
        <section className="relative w-full pt-32 pb-20 md:pt-36 md:pb-28 bg-[#050B16] text-white border-b border-[#182744] overflow-hidden select-none">
          {/* =========================================================================
              FIXED PARALLAX BACKGROUND: HIGH-TECH AI INTELLIGENCE ARTWORK
              Hardware-accelerated viewport-pinned background while page scrolls
              ========================================================================= */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{ 
              clipPath: 'inset(0)',
              WebkitClipPath: 'inset(0)'
            }}
          >
            <div className="fixed inset-0 w-full h-full pointer-events-none">
              <img 
                src={careersHeroBg} 
                alt="Trinity AI Boston Engineering Intelligence" 
                className="w-full h-full object-cover object-right lg:object-[82%_center] opacity-85 select-none"
              />
              
              {/* Multi-Stop Vanishing Gradient: Preserves deep contrast on left for typography, reveals engineering neural artwork on right */}
              <div 
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background: 'linear-gradient(to right, #050B16 0%, #050B16 32%, rgba(5, 11, 22, 0.94) 48%, rgba(5, 11, 22, 0.60) 65%, rgba(5, 11, 22, 0.15) 82%, rgba(5, 11, 22, 0) 100%)'
                }}
              />

              {/* Mobile / Tablet dark overlay for crisp legibility */}
              <div className="absolute inset-0 bg-[#050B16]/80 lg:hidden pointer-events-none z-[1]" />

              {/* Top & Bottom edge dissolves */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050B16]/95 via-transparent to-[#050B16] z-[1]" />

              {/* Architectural Grid Overlay */}
              <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none z-[1]" />

              {/* Ambient Radial Lighting */}
              <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-trinity-blue/20 rounded-full blur-[150px] pointer-events-none z-[1]" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="hover:text-trinity-lightBlue transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-trinity-lightBlue">Careers</span>
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-trinity-gold/50 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-trinity-brightGold backdrop-blur-md shadow-sm">
                <Briefcase className="w-4 h-4 text-trinity-brightGold shrink-0" />
                <span>Careers at Trinity AI Boston</span>
                <span className="text-amber-500/60">•</span>
                <span className="text-emerald-400 font-bold">We're Hiring</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold font-display leading-[1.12] tracking-tight text-white">
                Build the Intelligence{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-trinity-lightBlue to-blue-100">
                  Underneath the Work.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                We are building verified, single-tenant AI systems for insurance defense litigation—where outputs are signed by trial attorneys, filed under penalty of perjury, and audited by Fortune 500 carriers.
              </p>

              {/* Quick Culture Statistics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-lg font-bold font-display text-white">Boston & BLR</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Dual Centers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-lg font-bold font-display text-white">10 Patents</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">USPTO Filings</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-lg font-bold font-display text-white">Am Law 200</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">In Production</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-lg font-bold font-display text-white">Zero Sharing</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Single Tenant</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#open-roles"
                  className="btn-primary py-3.5 px-8 text-base font-semibold group flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/60 cursor-pointer"
                >
                  <span>Explore Open Positions ({mockJobsData.length})</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#benefits"
                  className="px-6 py-3.5 rounded-xl border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors text-center cursor-pointer"
                >
                  Benefits & Culture ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: OUR CULTURE & PRINCIPLES
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-trinity-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-50/95 text-trinity-deepGold border border-trinity-gold/50 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
                <span>Why Trinity AI Boston</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
                Engineering for the Consequential World
              </h2>
              <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
                We do not build thin wrappers around probabilistic chatbots. We solve hard engineering challenges at the intersection of law, semiconductor physics, and deterministic AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-trinity-canvas border border-slate-200/90 shadow-subtle space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-trinity-blue flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  Deterministic Precision
                </h3>
                <p className="text-sm text-trinity-slate leading-relaxed">
                  In litigation defense, hallucinations are catastrophic. We engineer software where every output has cryptographic proof of its source in the record, upholding Rule 1.1 ethical duties.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-trinity-canvas border border-slate-200/90 shadow-subtle space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-trinity-deepGold flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  Semiconductor & Carrier DNA
                </h3>
                <p className="text-sm text-trinity-slate leading-relaxed">
                  Our leadership team led multi-decade scaling across semiconductors, telecom networks, and Am Fam insurance defense. You learn from veterans who built critical infrastructure.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-trinity-canvas border border-slate-200/90 shadow-subtle space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  High Autonomy & Direct Impact
                </h3>
                <p className="text-sm text-trinity-slate leading-relaxed">
                  You work in nimble, high-density teams with direct ownership over production architectures. The code you deploy directly protects defense attorneys in court proceedings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: OPEN POSITIONS LISTINGS (INTERACTIVE)
            ========================================================================= */}
        <section id="open-roles" className="scroll-mt-28 py-20 lg:py-28 bg-trinity-canvas border-b border-trinity-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-50/95 text-trinity-deepGold border border-trinity-gold/50 shadow-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
                  <span>Opportunities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-trinity-ink tracking-tight">
                  Open Positions
                </h2>
                <p className="text-sm sm:text-base text-trinity-slate mt-1">
                  Discover your next high-impact career role at Trinity AI Boston.
                </p>
              </div>

              {/* Department Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedDepartment === dept
                        ? 'bg-trinity-blue text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-trinity-blue/40 hover:text-trinity-blue'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-trinity-blue/50 hover:shadow-enterprise p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-semibold uppercase tracking-wider text-trinity-blue">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium">
                        {job.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-trinity-ink group-hover:text-trinity-blue transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-trinity-slate leading-relaxed">
                      {job.highlight}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenJob(job)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-trinity-blue group-hover:text-trinity-deepBlue cursor-pointer"
                    >
                      <span>View Role Details & Apply</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-400">
                      Ref: {job.id.slice(0, 8)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* General Applications Callout */}
            <div className="mt-12 p-8 rounded-2xl bg-white border border-blue-200/80 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-lg font-bold font-display text-trinity-ink">
                  Don't see a position that matches your exact profile?
                </h4>
                <p className="text-xs sm:text-sm text-trinity-slate">
                  We are always eager to meet world-class distributed systems engineers, legal scholars, and applied AI researchers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleOpenJob({
                  id: 'general-inquiry',
                  title: 'General Technical or Legal Engineering Inquiry',
                  department: 'Talent Network',
                  location: 'Boston, MA / Bangalore / Remote',
                  type: 'Full-time / Advisory',
                  experience: 'Any Experience Level',
                  badge: 'Open Application',
                  highlight: 'Submit your resume and tell us where your expertise can move the needle',
                  overview: 'We welcome exceptional engineers, researchers, and legal operations experts who believe in building verified, high-consequence AI architectures.',
                  responsibilities: [
                    'Bring your specialized domain mastery in legal tech, systems scalability, or applied machine learning.',
                    'Collaborate directly with our co-founders Jayashankar and Ganesh on key strategic milestones.'
                  ],
                  requirements: [
                    'Demonstrated technical or legal domain excellence.',
                    'Passion for precision, single-tenant privacy, and zero hallucination AI pipelines.'
                  ],
                  skills: ['Legal AI', 'Distributed Systems', 'Research', 'Client Solutions']
                })}
                className="btn-primary py-3 px-6 text-xs sm:text-sm font-semibold shrink-0 cursor-pointer bg-trinity-blue hover:bg-trinity-deepBlue"
              >
                Submit General Application
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: BENEFITS & PERKS
            ========================================================================= */}
        <section id="benefits" className="scroll-mt-28 py-20 lg:py-28 bg-white border-b border-trinity-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-50/95 text-trinity-deepGold border border-trinity-gold/50 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
                <span>Benefits & Compensation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
                Designed to Support Your Best Work
              </h2>
              <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
                We believe in rewarding exceptional talent with comprehensive benefits, meaningful equity, and an environment of trust and autonomy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perksAndBenefits.map((perk, idx) => {
                const IconComponent = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 sm:p-8 rounded-2xl bg-trinity-canvas border border-slate-200/90 shadow-subtle hover:border-blue-300 hover:shadow-md transition-all space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-trinity-blue flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-trinity-ink">
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-trinity-slate leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: GLOBAL HUBS
            ========================================================================= */}
        <section className="py-20 lg:py-24 bg-[#071120] text-white border-b border-[#1b2b48] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-950/40 border border-trinity-gold/50 text-trinity-brightGold backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
                <span>Global Operations</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Our Primary Hubs
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Headquartered in Greater Boston with advanced engineering centers in Bangalore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Hub 1: Boston */}
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-trinity-lightBlue flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-blue-900/40 text-trinity-lightBlue border border-blue-700/40">
                    Corporate & Legal HQ
                  </span>
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Greater Boston, Massachusetts
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  2 Trinity Ct, Andover, MA 01810. Home to executive leadership, legal engineering, carrier compliance, and trial partner integrations.
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400">
                  Hybrid • In-Person • Executive
                </div>
              </div>

              {/* Hub 2: Bangalore */}
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-trinity-brightGold flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-amber-900/40 text-trinity-brightGold border border-amber-700/40">
                    Engineering & AI Hub
                  </span>
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Bangalore, Karnataka, India
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Advanced engineering center leading high-throughput OCR pipelines, vector retrieval indexing, and distributed microservice infrastructure.
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400">
                  Full-Stack • AI Retrieval • Systems
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <FinalCTA onRequestDemo={onRequestDemo} onNavigate={onNavigate} />
      </main>

      {/* Enterprise Footer */}
      <Footer onNavigate={onNavigate} onRequestDemo={onRequestDemo} />

      {/* =========================================================================
          INTERACTIVE JOB DETAIL & APPLICATION MODAL (Slide-over drawer)
          ========================================================================= */}
      {activeJobModal && (
        <div 
          className="fixed inset-0 z-50 overflow-hidden" 
          role="dialog" 
          aria-modal="true"
        >
          {/* Backdrop Blur */}
          <div 
            onClick={handleCloseJob}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 cursor-pointer"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col z-50">
              
              {/* Sticky Drawer Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 sm:px-8 py-5 flex items-center justify-between z-20 shrink-0">
                <div className="space-y-0.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[10px] font-mono font-semibold uppercase tracking-wider text-trinity-blue">
                    {activeJobModal.department}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-trinity-ink line-clamp-1">
                    {activeJobModal.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCloseJob}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Dossier & Application Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
                {applySuccess ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-8">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-emerald-900">
                      Application Submitted!
                    </h4>
                    <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you for applying to Trinity AI Boston for the <strong>{activeJobModal.title}</strong> role. Our engineering and talent executive team will review your dossier and contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleCloseJob}
                      className="btn-primary py-2.5 px-6 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 cursor-pointer mt-2"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Role Header Meta */}
                    <div className="p-5 rounded-2xl bg-trinity-canvas border border-slate-200/90 space-y-3">
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                        <span className="flex items-center gap-1.5 font-semibold text-trinity-blue">
                          <MapPin className="w-3.5 h-3.5" />
                          {activeJobModal.location}
                        </span>
                        <span>•</span>
                        <span>{activeJobModal.type}</span>
                        <span>•</span>
                        <span>Exp: {activeJobModal.experience}</span>
                      </div>
                      <p className="text-sm text-trinity-ink font-medium leading-relaxed">
                        {activeJobModal.overview}
                      </p>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 border-b border-slate-100 pb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2.5 text-sm text-trinity-slate">
                        {activeJobModal.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-trinity-blue shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 border-b border-slate-100 pb-2">
                        Qualifications & Experience
                      </h4>
                      <ul className="space-y-2.5 text-sm text-trinity-slate">
                        {activeJobModal.requirements.map((req, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue shrink-0 mt-2" />
                            <span className="leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Application Form */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold font-display text-trinity-ink">
                          Apply for this Role
                        </h4>
                        <p className="text-xs text-trinity-slate">
                          Submit your information directly to our talent acquisition team.
                        </p>
                      </div>

                      <form onSubmit={handleSubmitApplication} className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-trinity-ink mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="e.g. Eleanor Vance"
                              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-trinity-ink mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. eleanor@example.com"
                              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-trinity-ink mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+1 (617) 555-0192"
                              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-trinity-ink mb-1">
                              LinkedIn / GitHub / Portfolio
                            </label>
                            <input
                              type="url"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                              placeholder="https://linkedin.com/in/..."
                              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-trinity-ink mb-1">
                            Why Trinity AI Boston? (Short Note)
                          </label>
                          <textarea
                            rows={3}
                            name="coverNote"
                            value={formData.coverNote}
                            onChange={handleInputChange}
                            placeholder="Briefly highlight what excites you about our deterministic AI or legal defense mission..."
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue resize-none"
                          />
                        </div>

                        {/* Mock Resume Upload */}
                        <div className="p-4 rounded-xl border-2 border-dashed border-slate-200 text-center space-y-1 bg-slate-50 hover:bg-slate-100/60 transition-colors cursor-pointer">
                          <UploadCloud className="w-6 h-6 text-slate-400 mx-auto" />
                          <div className="text-xs font-semibold text-trinity-blue">
                            Upload CV / Resume (PDF or DOCX)
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            Maximum size 10MB
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between gap-4">
                          <button
                            type="submit"
                            className="btn-primary py-3 px-6 text-sm font-semibold flex items-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue cursor-pointer shadow-md shadow-blue-500/20"
                          >
                            <span>Submit Application</span>
                            <Send className="w-4 h-4" />
                          </button>

                          <button
                            type="button"
                            onClick={handleCloseJob}
                            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

