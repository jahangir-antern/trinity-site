import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import careersHeroBg from '../assets/hero-intelligence.jpg';
import initialJobsData from '../data/jobsData.json';
import { sendFormViaEmailJS } from '../services/emailjsService';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Laptop, 
  DollarSign, 
  X,
  Send,
  UploadCloud,
  ChevronRight
} from 'lucide-react';

const perksAndBenefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation & Equity'
  },
  {
    icon: Heart,
    title: 'Comprehensive Healthcare'
  },
  {
    icon: Laptop,
    title: 'Cutting-Edge Works'
  },
  {
    icon: Clock,
    title: 'Flexible Hybrid & Remote Work'
  }
];

export default function CareersPage({ onNavigate, onRequestDemo }) {
  const [jobsList, setJobsList] = useState(initialJobsData);
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

    // Dynamic runtime fetch so admins can add/update public/jobsData.json without code recompilation
    const loadLiveJobs = async () => {
      try {
        const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
        const res = await fetch(`${basePath}/jobsData.json?t=${Date.now()}`);
        if (res.ok) {
          const liveData = await res.json();
          if (Array.isArray(liveData) && liveData.length > 0) {
            setJobsList(liveData);
          }
        }
      } catch (err) {
        // Silently falls back to bundled initialJobsData
      }
    };

    loadLiveJobs();
  }, []);

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

  const mailtoApplicationUrl = `mailto:jahangirxl@gmail.com?subject=${encodeURIComponent(
    `[Job Application] ${activeJobModal?.title || 'Open Role'} - ${formData.name || 'Candidate'}`
  )}&body=${encodeURIComponent(
    `TRINITY AI BOSTON - ROLE APPLICATION DOSSIER\n` +
    `---------------------------------------------\n` +
    `Position Applied: ${activeJobModal?.title || 'General Application'}\n` +
    `Department: ${activeJobModal?.department || 'Engineering / Product'}\n` +
    `Full Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone || 'Not provided'}\n` +
    `LinkedIn / Portfolio: ${formData.linkedin || 'Not provided'}\n` +
    `Cover Note / Fit:\n${formData.coverNote || 'N/A'}\n\n` +
    `Sent Date: ${new Date().toLocaleString()}\n` +
    `Recipient: jahangirxl@gmail.com`
  )}`;

  const handleSubmitApplication = async (e) => {
    e.preventDefault();

    const payload = {
      roleApplied: activeJobModal?.title,
      department: activeJobModal?.department,
      applicantName: formData.name,
      name: formData.name,
      applicantEmail: formData.email,
      email: formData.email,
      phone: formData.phone || 'N/A',
      linkedin: formData.linkedin || 'N/A',
      portfolio: formData.portfolio || 'N/A',
      coverNote: formData.coverNote || 'N/A',
      subject: `Job Application: ${activeJobModal?.title || 'Open Role'} - ${formData.name}`
    };

    await sendFormViaEmailJS('Careers Job Application', payload);

    setApplySuccess(true);
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
                  <span>Explore Open Positions ({jobsList.length})</span>
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
            SECTION 2: OPEN POSITIONS LISTINGS (INTERACTIVE)
            ========================================================================= */}
        <section id="open-roles" className="scroll-mt-28 py-20 lg:py-28 bg-trinity-canvas border-b border-trinity-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-12">
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

            {/* Job Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobsList.map((job) => (
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

            {/* Uniform 2x2 Executive Benefits Layout */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {perksAndBenefits.map((perk, idx) => {
                const IconComponent = perk.icon;
                return (
                  <div
                    key={idx}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-trinity-canvas border border-slate-200/90 shadow-subtle hover:border-blue-400 hover:shadow-enterprise hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4 cursor-default"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-trinity-blue border border-blue-200/60 flex items-center justify-center shrink-0 group-hover:bg-trinity-blue group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-[17px] font-bold font-display text-trinity-ink group-hover:text-trinity-blue transition-colors leading-normal sm:whitespace-nowrap">
                        {perk.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-trinity-blue transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-trinity-gold transition-colors duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: FINAL CTA */}
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
                      Thank you for applying to Trinity AI Boston for the <strong>{activeJobModal.title}</strong> role. Your application has been routed directly to <strong>jahangirxl@gmail.com</strong>.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={mailtoApplicationUrl}
                        className="btn-primary py-2.5 px-5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer inline-flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Copy via Email</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCloseJob}
                        className="px-5 py-2.5 rounded-xl border border-emerald-300 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        Close Window
                      </button>
                    </div>
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
                      <p className="text-sm text-trinity-ink font-medium leading-relaxed whitespace-pre-line">
                        {activeJobModal.overview}
                      </p>
                    </div>

                    {/* Technology Stack (if available) */}
                    {activeJobModal.stack && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-400 border-b border-slate-100 pb-2">
                          Our Stack
                        </h4>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                          {Object.entries(activeJobModal.stack).map(([layer, technologies]) => (
                            <div key={layer} className="text-xs font-mono flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                              <span className="font-semibold text-trinity-blue shrink-0 sm:w-32">{layer}:</span>
                              <span className="text-slate-700">{technologies}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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

