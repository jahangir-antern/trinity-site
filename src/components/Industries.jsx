import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Building2, 
  AlertOctagon, 
  ArrowRight 
} from 'lucide-react';
import { industriesData } from '../data/homepageData';

export default function Industries({ onRequestDemo }) {
  const iconMap = {
    legal: Scale,
    insurance: ShieldCheck,
    construction: Building2,
    risk: AlertOctagon
  };

  return (
    <section id="industries" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="badge-blue">
            Domain Applications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Purpose-Built for High-Stakes Industries.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            Every sector we serve is characterized by massive evidentiary volume, strict statutory clocks, and zero tolerance for error.
          </p>
        </div>

        {/* 4 Clean Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.id] || Scale;
            const isConstruction = ind.id === 'construction';

            return (
              <div 
                key={ind.id}
                className="bg-white rounded-2xl border border-trinity-border p-6 shadow-subtle hover:border-blue-300 hover:shadow-enterprise transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isConstruction 
                      ? 'bg-amber-50 text-trinity-gold' 
                      : 'bg-blue-50 text-trinity-blue'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-trinity-muted uppercase tracking-wider">
                      {ind.subtitle.split('&')[0]}
                    </div>
                    <h3 className="text-lg font-bold font-display text-trinity-ink">
                      {ind.title}
                    </h3>
                  </div>

                  <p className="text-xs text-trinity-slate leading-relaxed font-normal">
                    {ind.solution}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onRequestDemo(ind.title)}
                    className="text-xs font-semibold text-trinity-blue hover:text-trinity-deepBlue flex items-center gap-1 group"
                  >
                    <span>Request Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
