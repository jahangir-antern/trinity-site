import React from 'react';
import { 
  Lock, 
  FileCheck, 
  UserCheck, 
  GitFork, 
  Clock, 
  Scale 
} from 'lucide-react';
import { trustFrameworkPillars } from '../data/homepageData';

export default function TrustResponsibleAI() {
  const pillarIcons = [Lock, FileCheck, UserCheck, GitFork, Clock, Scale];

  return (
    <section id="trust" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="badge-blue">
            Governance & Defensibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Intelligence You Can Understand. Decisions You Can Defend.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            Enterprise decision intelligence must withstand cross-examination, judicial review, and institutional audit.
          </p>
        </div>

        {/* 6 Clean Open Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFrameworkPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx];
            const isHuman = pillar.name.includes("Human");

            return (
              <div
                key={pillar.name}
                className="bg-white rounded-2xl border border-trinity-border p-8 shadow-subtle hover:border-blue-200 transition-all duration-200 space-y-3"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isHuman
                    ? 'bg-amber-50 text-trinity-gold'
                    : 'bg-blue-50 text-trinity-blue'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-xs font-semibold text-trinity-muted uppercase tracking-wider">
                  {pillar.headline}
                </div>

                <h3 className="text-lg font-bold font-display text-trinity-ink">
                  {pillar.name}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
