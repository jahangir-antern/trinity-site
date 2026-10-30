import React from 'react';
import { Scale, ShieldCheck, Building2, AlertOctagon } from 'lucide-react';
import { industries } from '../data/homepageData';

export default function IndustriesSection() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            Application Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Built for Complex, High-Stakes Environments.
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Every sector we serve is defined by massive evidentiary volume, strict deadlines, and zero margin for error.
          </p>
        </div>

        {/* 4 Clean Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.id] || Scale;

            return (
              <div 
                key={ind.id}
                className="bg-white rounded-2xl border border-trinity-border p-7 shadow-subtle hover:border-blue-300 hover:shadow-enterprise transition-all duration-200 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold font-display text-trinity-ink">
                  {ind.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
