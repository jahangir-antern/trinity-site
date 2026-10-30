import React from 'react';
import { Target, FileCheck2, UserCheck, ShieldCheck } from 'lucide-react';
import { differentiationPrinciples } from '../data/homepageData';

export default function DifferentiationSection() {
  const icons = [Target, FileCheck2, UserCheck, ShieldCheck];

  return (
    <section id="differentiation" className="py-24 lg:py-32 bg-trinity-hero text-white relative bg-grid-dark overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-trinity-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-950/80 border border-blue-800/40 text-trinity-lightBlue">
            The Trinity AI Boston Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Built Underneath the Work.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Trinity AI Boston combines artificial intelligence with insurance defense domain expertise, evidence reasoning, and mandatory attorney oversight to deliver positions you can defend in court.
          </p>
        </div>

        {/* 4 Clean Editorial Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiationPrinciples.map((item, idx) => {
            const Icon = icons[idx];
            const isHuman = item.title === "Human-Centered";

            return (
              <div 
                key={item.title}
                className="p-8 rounded-2xl bg-[#091424] border border-[#182744] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isHuman
                      ? 'bg-amber-500/15 text-trinity-brightGold border border-amber-500/30'
                      : 'bg-blue-900/40 text-trinity-lightBlue border border-blue-700/40'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
                  Principle 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
