import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import OurTeamSection from '../components/OurTeamSection';
import satelliteBg from '../assets/Satelite1.jpg';
import { ArrowRight, Users } from 'lucide-react';

export default function TeamPage({ onNavigate, onRequestDemo }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-trinity-canvas text-trinity-ink flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      <Header
        onNavigate={onNavigate}
        onRequestDemo={onRequestDemo}
        currentPage="team"
      />

      <main className="flex-grow">
        <section className="relative w-full pt-32 pb-20 md:pt-36 md:pb-28 bg-[#050B16] text-white border-b border-[#182744] overflow-hidden select-none">
          <div
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
              clipPath: 'inset(0)',
              WebkitClipPath: 'inset(0)',
            }}
          >
            <div className="fixed inset-0 w-full h-full pointer-events-none">
              <img
                src={satelliteBg}
                alt="Satellite array under the Milky Way"
                className="w-full h-full object-cover object-[center_42%] opacity-95 select-none"
              />

              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background: 'linear-gradient(to right, #050B16 0%, rgba(5, 11, 22, 0.92) 28%, rgba(5, 11, 22, 0.62) 48%, rgba(5, 11, 22, 0.28) 68%, rgba(5, 11, 22, 0.12) 100%)',
                }}
              />

              <div className="absolute inset-0 bg-[#050B16]/75 lg:hidden pointer-events-none z-[1]" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050B16]/90 via-transparent to-[#050B16] z-[1]" />
              <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none z-[1]" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="hover:text-trinity-lightBlue transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('about')}
                className="hover:text-trinity-lightBlue transition-colors cursor-pointer"
              >
                About Us
              </button>
              <span>/</span>
              <span className="text-trinity-lightBlue">Our Team</span>
            </div>

            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold tracking-wider uppercase text-trinity-lightBlue backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-trinity-electric animate-pulse shrink-0" />
                <span>Our Team</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-normal">Leadership & Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-display leading-[1.14] tracking-tight text-white max-w-2xl">
                The People Who Built
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-trinity-lightBlue to-blue-100">
                  Underneath the Work.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                Executive, operations, advisory, and architecture leadership spanning semiconductor scale, carrier defense, and high-consequence AI.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#our-team"
                  className="btn-primary py-3.5 px-8 text-base font-semibold group flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/60"
                >
                  <span>View Leadership</span>
                  <Users className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onRequestDemo && onRequestDemo('Executive Briefing')}
                  className="btn-secondary-dark py-3.5 px-7 text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10 cursor-pointer"
                >
                  <span>Request Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <OurTeamSection onRequestDemo={onRequestDemo} />
        <FinalCTA onRequestDemo={onRequestDemo} />
      </main>

      <Footer onNavigate={onNavigate} onRequestDemo={onRequestDemo} />
    </div>
  );
}
