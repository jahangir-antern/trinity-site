import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import aboutUsBg from '../assets/about-us.jpg';
import { 
  Scale, 
  FileCheck, 
  MapPin, 
  ArrowRight, 
  Lock,
  Building2,
  Users
} from 'lucide-react';
import { companyLocations } from '../data/homepageData';

export default function AboutUsPage({ onNavigate, onRequestDemo }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-trinity-canvas text-trinity-ink flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      
      {/* Sticky Enterprise Header */}
      <Header 
        onNavigate={onNavigate} 
        onRequestDemo={onRequestDemo} 
        currentPage="about" 
      />

      <main className="flex-grow">
        
        {/* =========================================================================
            ABOUT US HERO: CINEMATIC PURPOSE-BUILT STATEMENT WITH FIXED PARALLAX
            ========================================================================= */}
        <section className="relative w-full pt-32 pb-20 md:pt-36 md:pb-28 bg-[#050B16] text-white border-b border-[#182744] overflow-hidden select-none">
          
          {/* =========================================================================
              FIXED PARALLAX BACKGROUND: DISTINCT NEURAL INTELLIGENCE ARTWORK
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
                src={aboutUsBg} 
                alt="Trinity AI Boston Legal Analyst & Case Analysis Platform" 
                className="w-full h-full object-cover object-right lg:object-[82%_center] opacity-90 select-none"
              />
              
              {/* Multi-Stop Vanishing Gradient: Preserves deep contrast on left for typography, reveals legal analyst & holographic scales on right */}
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
              <span className="text-trinity-lightBlue">About Us</span>
            </div>

            {/* Main Statement */}
            <div className="max-w-3xl space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold tracking-wider uppercase text-trinity-lightBlue backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-trinity-electric animate-pulse shrink-0" />
                <span>ABOUT TRINITY AI BOSTON</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-normal">Engineering Scale at Trust™</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-display leading-[1.14] tracking-tight text-white max-w-2xl">
                A Lawyer Cannot Be Copied.
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-trinity-lightBlue to-blue-100">
                  So We Built Underneath the Work Instead.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                Purpose-built artificial intelligence for insurance defense litigation—where the output is signed by an attorney, filed with a court, and billed to a carrier that audits it.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestDemo && onRequestDemo("Executive Briefing")}
                  className="btn-primary py-3.5 px-8 text-base font-semibold group flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/60 cursor-pointer"
                >
                  <span>Request Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('team')}
                  className="btn-secondary-dark py-3.5 px-7 text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10 cursor-pointer"
                >
                  <span>Meet Our Leadership</span>
                  <Users className="w-4 h-4 text-slate-400" />
                </button>
              </div>

            </div>

            {/* Enterprise Telemetry Row */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-slate-400">Production Deployment</div>
                <div className="text-emerald-400 font-bold text-sm">Am Law 200 Firm</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-slate-400">Intellectual Property</div>
                <div className="text-trinity-lightBlue font-bold text-sm">10 USPTO Patents</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-slate-400">Compliance Attested</div>
                <div className="text-white font-bold text-sm">SOC 2 Type 1</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-slate-400">Environment Architecture</div>
                <div className="text-amber-300 font-bold text-sm">Single-Tenant by Design</div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            COMPANY OVERVIEW & MARKET REALITY: WHO WE BUILD FOR
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-trinity-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
                Commercial Shape
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-trinity-ink tracking-tight">
                The Carrier Funds the Defense.
              </h2>
              <p className="text-base sm:text-lg text-trinity-slate leading-relaxed">
                That single commercial fact explains our whole architecture. Unlike horizontal legal AI tools that produce unverified drafts, the Cosmos platform is built to satisfy both the attorney who signs the work and the carrier who pays for it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-2xl bg-trinity-canvas border border-trinity-border space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  Attorney in the Loop
                </h3>
                <p className="text-sm text-trinity-slate leading-relaxed">
                  ABA Formal Opinion 512 and Florida Bar Opinion 24-1 are built directly into our workflow. No output leaves the system without verified attorney approval.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-trinity-canvas border border-trinity-border space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  A Citation on Every Finding
                </h3>
                <p className="text-sm text-trinity-slate leading-relaxed">
                  Every assertion names the document, rule, statute, or opinion it rests on. If the platform cannot cite its source, it does not appear.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-trinity-canvas border border-trinity-border space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  Single Tenant by Design
                </h3>
                <p className="text-sm text-trinity-slate leading-relaxed">
                  A client's record never shares an environment. Customer data is strictly isolated and never used to retrain foundation models.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            GLOBAL LOCATIONS & CORPORATE GOVERNANCE
            ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-b border-trinity-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
                Corporate Footprint
              </span>
              <h2 className="text-3xl font-bold font-display text-trinity-ink">
                Global Operations
              </h2>
              <p className="text-sm sm:text-base text-trinity-slate">
                Headquartered in Greater Boston with advanced engineering and technology operations in Bangalore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              
              <div className="p-8 rounded-2xl bg-trinity-canvas border border-trinity-border space-y-3">
                <div className="flex items-center gap-2 text-trinity-blue font-bold text-lg font-display">
                  <MapPin className="w-5 h-5" />
                  <span>Headquarters</span>
                </div>
                <p className="text-sm text-trinity-ink font-semibold">
                  {companyLocations.headquarters.address}
                </p>
                <p className="text-xs text-trinity-slate leading-relaxed">
                  {companyLocations.headquarters.region} • Executive leadership, corporate governance, legal panel partnerships, and client integration.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-trinity-canvas border border-trinity-border space-y-3">
                <div className="flex items-center gap-2 text-trinity-gold font-bold text-lg font-display">
                  <Building2 className="w-5 h-5" />
                  <span>Engineering & Development Centre</span>
                </div>
                <p className="text-sm text-trinity-ink font-semibold">
                  {companyLocations.engineeringCenter.address}
                </p>
                <p className="text-xs text-trinity-slate leading-relaxed">
                  {companyLocations.engineeringCenter.region} • Applied AI decision intelligence, multimodal extraction pipelines, and proprietary neural architecture research.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            FINAL EXECUTIVE CTA
            ========================================================================= */}
        <FinalCTA onRequestDemo={onRequestDemo} />

      </main>

      {/* Enterprise Footer */}
      <Footer onNavigate={onNavigate} onRequestDemo={onRequestDemo} />

    </div>
  );
}
