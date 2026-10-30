import React from 'react';
import { 
  FileCheck2, 
  GitFork, 
  SearchCode, 
  UserCheck, 
  ShieldCheck, 
  LockKeyhole 
} from 'lucide-react';
import { whyTrinityGrid } from '../data/homepageData';

export default function WhyTrinity() {
  const icons = [FileCheck2, GitFork, SearchCode, UserCheck, ShieldCheck, LockKeyhole];

  return (
    <section id="why-trinity" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-3">
          <div className="badge-blue">
            Core Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Built for Decisions That Matter.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            Where casual AI approximates, Trinity AI provides deterministic evidence grounding, inspectable reasoning, and legal accountability.
          </p>
        </div>

        {/* Clean Editorial Layout with Ample Whitespace (No Heavy Box Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {whyTrinityGrid.map((item, idx) => {
            const Icon = icons[idx];
            const isHumanOversight = item.title === "Human Oversight";

            return (
              <div key={item.title} className="space-y-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isHumanOversight
                    ? 'bg-amber-50 text-trinity-gold'
                    : 'bg-blue-50 text-trinity-blue'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold font-display text-trinity-ink">
                  {item.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
