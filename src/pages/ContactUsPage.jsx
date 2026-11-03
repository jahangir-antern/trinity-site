import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Building2, 
  ShieldCheck, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { companyLocations } from '../data/homepageData';
import heroBg from '../assets/hero-legal-executive.jpg';

export default function ContactUsPage({ onNavigate, onRequestDemo }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    phone: '',
    inquiryType: 'Executive Briefing',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      phone: '',
      inquiryType: 'Executive Briefing',
      message: ''
    });
    setFormStatus('idle');
  };

  return (
    <div className="min-h-screen bg-trinity-canvas text-trinity-ink flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      {/* Global Navigation Header */}
      <Header
        onNavigate={onNavigate}
        onRequestDemo={onRequestDemo}
        currentPage="contact"
      />

      <main className="flex-grow">
        {/* =========================================================================
            CINEMATIC HERO SECTION
            ========================================================================= */}
        <section className="relative w-full pt-32 pb-20 md:pt-36 md:pb-28 bg-[#050B16] text-white border-b border-[#182744] overflow-hidden select-none">
          {/* Fixed Parallax Background */}
          <div
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
              clipPath: 'inset(0)',
              WebkitClipPath: 'inset(0)',
            }}
          >
            <div className="fixed inset-0 w-full h-full pointer-events-none">
              <img
                src={heroBg}
                alt="Trinity AI Boston Executive Center"
                className="w-full h-full object-cover object-right lg:object-[82%_center] opacity-80 select-none"
              />

              {/* Multi-Stop Vanishing Gradient */}
              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background:
                    'linear-gradient(to right, #050B16 0%, #050B16 34%, rgba(5, 11, 22, 0.94) 50%, rgba(5, 11, 22, 0.60) 68%, rgba(5, 11, 22, 0.15) 85%, rgba(5, 11, 22, 0) 100%)',
                }}
              />

              <div className="absolute inset-0 bg-[#050B16]/80 lg:hidden pointer-events-none z-[1]" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050B16]/95 via-transparent to-[#050B16] z-[1]" />
              <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none z-[1]" />
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
              <span className="text-trinity-lightBlue">Contact Us</span>
            </div>

            <div className="max-w-3xl space-y-5">
              {/* Highlighted Brand Yellow Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-trinity-gold/50 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-trinity-brightGold backdrop-blur-md shadow-sm">
                <Mail className="w-4 h-4 text-trinity-brightGold shrink-0" />
                <span>Contact Trinity AI Boston</span>
                <span className="text-amber-500/60">•</span>
                <span className="text-amber-200/90 font-medium normal-case">Direct Executive & Carrier Channels</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-display leading-[1.14] tracking-tight text-white">
                Connect with Our Team.
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-trinity-lightBlue to-blue-100">
                  Engineering Scale at Trust™.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                Direct lines to our Corporate Head Office in Greater Boston and our Global Capability Center in Bangalore. Inquiries from trial counsel and carrier claims leaders receive priority executive review.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRIMARY CONTACT & GLOBAL HUBS SECTION
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-trinity-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Main 2-Column Grid: Left (Form) | Right (Office Locations & Direct Lines) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
              
              {/* COLUMN 1: INTERACTIVE CONTACT / INQUIRY FORM (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-50/95 text-trinity-deepGold border border-trinity-gold/50 shadow-sm mb-3">
                    <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
                    <span>Inquiry Dossier</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-trinity-ink tracking-tight">
                    Send a Direct Briefing Request
                  </h2>
                  <p className="text-sm text-trinity-slate mt-1 leading-relaxed">
                    Please provide matter context or deployment goals. All inquiries are covered under mutual nondisclosure protocols.
                  </p>
                </div>

                {formStatus === 'submitted' ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-emerald-950">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName || 'Counsel'}</strong>. Your inquiry has been routed to our executive solutions group. A member of our team will contact you within 4 business hours.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn-primary py-2.5 px-6 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-7 sm:p-9 rounded-2xl bg-trinity-canvas border border-trinity-border shadow-subtle space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Eleanor Vance, Esq."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-trinity-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={handleChange}
                          placeholder="name@defensefirm.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-trinity-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                          Organization / Law Firm <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Am Law 200 Firm / Insurance Carrier"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-trinity-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 012-3456"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-trinity-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Inquiry Scope <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-trinity-ink focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue transition-all"
                      >
                        <option value="Executive Briefing">Executive Briefing / Platform Overview</option>
                        <option value="Cosmos Deployment">Am Law 200 Panel Firm Cosmos Deployment</option>
                        <option value="Carrier Guidelines Compliance">Carrier Guidelines & Billing Audit Compliance</option>
                        <option value="Multi-Modal Reasoning & Cortex Architecture">Technical Architecture & Cortex Architecture</option>
                        <option value="Talent & Careers">Engineering Careers & Talent Acquisition</option>
                        <option value="Media & Press">Media, Press & Corporate Communications</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Message & Matter Context <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your practice focus, matter volume, or evaluation criteria..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-trinity-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-trinity-blue/30 focus:border-trinity-blue transition-all resize-y"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Protected under strict NDA & SOC 2 protocols</span>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="btn-primary py-3.5 px-8 text-sm font-semibold flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-lg shadow-blue-950/20 cursor-pointer disabled:opacity-60"
                      >
                        <span>{formStatus === 'submitting' ? 'Submitting...' : 'Send Briefing Request'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* COLUMN 2: CORPORATE HEAD OFFICE & GLOBAL CAPABILITY CENTER CARDS (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-50/95 text-trinity-deepGold border border-trinity-gold/50 shadow-sm mb-3">
                    <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
                    <span>Global Presence</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-trinity-ink tracking-tight">
                    Office Centers
                  </h2>
                  <p className="text-sm text-trinity-slate mt-1 leading-relaxed">
                    Our dual centers anchor corporate leadership and 24/7 high-throughput legal AI engineering.
                  </p>
                </div>

                {/* Office Card 1: Corporate Head Office */}
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:border-trinity-blue/40 transition-all space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 text-trinity-blue font-bold font-display text-lg">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3>{companyLocations.headquarters.title}</h3>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-normal">
                          United States
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[10px] font-mono font-semibold uppercase tracking-wider text-trinity-blue">
                      Executive HQ
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-trinity-slate">
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-trinity-ink">{companyLocations.headquarters.address}</p>
                        <p className="text-slate-500">{companyLocations.headquarters.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 pt-1">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <a href="mailto:boston@trinityaiboston.com" className="text-trinity-blue hover:underline">
                        boston@trinityaiboston.com
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    Direct executive leadership, trial partner governance, carrier panel strategy, and institutional compliance briefings.
                  </p>
                </div>

                {/* Office Card 2: Global Capability Center */}
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:border-trinity-gold/60 transition-all space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 text-trinity-deepGold font-bold font-display text-lg">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-trinity-deepGold border border-amber-200 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3>{companyLocations.engineeringCenter.title}</h3>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-normal">
                          India
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-[10px] font-mono font-semibold uppercase tracking-wider text-trinity-deepGold">
                      AI & Engineering
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-trinity-slate">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-trinity-ink">{companyLocations.engineeringCenter.address}</p>
                        <p className="text-slate-500">{companyLocations.engineeringCenter.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 pt-1">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <a href="mailto:bangalore@trinityaiboston.com" className="text-trinity-deepGold hover:underline">
                        bangalore@trinityaiboston.com
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    Advanced multimodal neural research, distributed vector indexing, OCR extraction pipelines, and 24/7 cloud reliability engineering.
                  </p>
                </div>

                {/* Direct Communications Matrix */}
                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100/90 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-trinity-blue">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Direct Communication Fast-Tracks</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div>
                      <span className="text-slate-500 block">General Enquiries:</span>
                      <a href="mailto:contact@trinityaiboston.com" className="font-semibold text-trinity-ink hover:text-trinity-blue">
                        contact@trinityaiboston.com
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Carrier Partnerships:</span>
                      <a href="mailto:partnerships@trinityaiboston.com" className="font-semibold text-trinity-ink hover:text-trinity-blue">
                        partnerships@trinityaiboston.com
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Media & Press:</span>
                      <a href="mailto:press@trinityaiboston.com" className="font-semibold text-trinity-ink hover:text-trinity-blue">
                        press@trinityaiboston.com
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Careers & Talent:</span>
                      <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('careers')}
                        className="font-semibold text-trinity-blue hover:underline cursor-pointer"
                      >
                        View Open Roles →
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            ENTERPRISE GOVERNANCE & PROTOCOLS
            ========================================================================= */}
        <section className="py-16 bg-[#071120] text-white border-b border-[#1b2b48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-trinity-lightBlue border border-blue-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-display text-white">Single-Tenant by Design</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Client records never co-mingle and are never utilized to retrain foundational models.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-trinity-brightGold border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-display text-white">ABA Formal Opinion 512</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mandatory attorney verification gates ensure all work is ethically defensible before filing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-display text-white">4-Hour Response SLA</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Active litigation panels and insurance claims executives receive priority response turnaround.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Enterprise Footer */}
      <Footer onNavigate={onNavigate} onRequestDemo={onRequestDemo} />
    </div>
  );
}

