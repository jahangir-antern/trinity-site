import React from 'react';
import { approachSteps } from '../data/homepageData';

export default function ApproachSection() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            The Record Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            From the Record to a Defensible Position.
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            One engine that ingests the record, extracts the facts, reasons on them, cites the authority, and routes every output to an attorney for approval.
          </p>
        </div>

        {/* 4-Step Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {approachSteps.map((step, idx) => {
            const isDecide = idx === 3;

            return (
              <div 
                key={step.step}
                className="p-7 rounded-2xl bg-trinity-canvas border border-trinity-border flex flex-col justify-between space-y-6 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold font-mono ${
                      isDecide ? 'text-trinity-deepGold' : 'text-trinity-blue'
                    }`}>
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-trinity-muted">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-trinity-ink">
                    {step.title}
                  </h3>

                  <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-trinity-muted">
                  {isDecide ? 'Supervised Human Validation' : 'Deterministic Grounding'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
