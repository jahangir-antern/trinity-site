import React from 'react';
import { 
  Zap, 
  Target, 
  Clock, 
  Search, 
  CheckCircle, 
  ShieldCheck 
} from 'lucide-react';
import { outcomesData } from '../data/homepageData';

export default function BusinessOutcomes() {
  const icons = [Zap, Target, Clock, Search, CheckCircle, ShieldCheck];

  return (
    <section id="outcomes" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="badge-blue">
            Measurable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Technology Valued by Real Outcomes.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            Trinity AI is judged by defensible legal positions, reduced loss adjustments, and accelerated dispute resolution.
          </p>
        </div>

        {/* Clean Open Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomesData.map((outcome, idx) => {
            const Icon = icons[idx];

            return (
              <div 
                key={outcome.title}
                className="p-6 rounded-2xl bg-trinity-canvas border border-trinity-border flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-trinity-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-trinity-ink">
                    {outcome.title}
                  </h3>

                  <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                    {outcome.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 text-xs text-trinity-muted">
                  {outcome.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
