import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA({ onRequestDemo }) {
  return (
    <section className="py-24 lg:py-32 bg-trinity-hero text-white relative bg-grid-dark overflow-hidden">
      
      {/* Restrained Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-trinity-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/40 text-xs font-semibold tracking-wider uppercase text-trinity-lightBlue">
          <span>Get Started</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
          Engineering Scale at Trust™.
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Explore how Trinity AI Boston carries your matters from intake through to a defensible position with citations to the record.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onRequestDemo("Enterprise Briefing")}
            className="btn-primary py-4 px-9 text-base font-semibold group flex items-center justify-center gap-3 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/50 w-full sm:w-auto cursor-pointer"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onRequestDemo("Executive Contact")}
            className="btn-secondary-dark py-4 px-8 text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10 w-full sm:w-auto cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Us</span>
          </button>
        </div>

        <div className="pt-8 text-xs text-slate-400">
          Single tenant by design • ABA Formal Opinion 512 compliant • In production with Am Law 200
        </div>

      </div>
    </section>
  );
}
