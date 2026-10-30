import React from 'react';
import { trustPrinciples } from '../data/homepageData';

export default function TrustCredibility() {
  return (
    <section className="py-14 bg-white border-b border-trinity-border relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Tag */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-trinity-muted mb-8">
          Enterprise Decision Intelligence Standards
        </p>

        {/* Clean, Spacious Credibility Line */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {trustPrinciples.map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="text-sm font-bold font-display text-trinity-ink tracking-tight">
                {item.label}
              </div>
              <p className="text-xs text-trinity-slate font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Minimalist Institutional Proofline */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-trinity-muted font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue"></span>
            Single-Tenant Isolated VPCs
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue"></span>
            NIST AI RMF Aligned Governance
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue"></span>
            Strict Pinpoint Source Citations
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue"></span>
            Zero Training on Customer Data
          </span>
        </div>

      </div>
    </section>
  );
}
