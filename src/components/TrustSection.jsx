import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  UserCheck, 
  Award, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { trustPrinciples } from '../data/homepageData';

export default function TrustSection() {
  const icons = [UserCheck, FileCheck, Lock, Award, FileText, CheckCircle2];

  return (
    <section id="trust" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-amber-50/95 text-trinity-deepGold border border-trinity-gold/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0" />
            <span>Defensibility & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Why It Can Be Filed Behind.
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Professional rules oblige an attorney to verify generative output, and carrier guidelines are beginning to say so in writing. Trinity AI Boston is built to meet that obligation rather than to work around it.
          </p>
        </div>

        {/* 6 Core Verification & Security Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPrinciples.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            const isHighlight = idx === 0 || idx === 5;

            return (
              <div 
                key={item.title}
                className={`rounded-2xl border p-8 space-y-4 transition-all duration-200 ${
                  isHighlight 
                    ? 'bg-white border-blue-200 shadow-md hover:border-blue-400 hover:shadow-enterprise' 
                    : 'bg-white border-trinity-border shadow-subtle hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  idx === 0 
                    ? 'bg-amber-50 text-trinity-deepGold border border-amber-200' 
                    : idx === 5
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    : 'bg-blue-50 text-trinity-blue border border-blue-100'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  {item.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
