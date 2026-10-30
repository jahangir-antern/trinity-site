import React, { useState } from 'react';
import { Database, Search, GitBranch, ShieldCheck, Award, UserCheck } from 'lucide-react';
import { howItWorksSteps } from '../data/homepageData';

export default function HowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [Database, Search, GitBranch, ShieldCheck, Award];
  const activeStep = howItWorksSteps[activeStepIndex];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="badge-blue">
            The Decision Intelligence Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            From Evidence to Decision.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            A deterministic five-stage intelligence pipeline engineered to eliminate speculation, ground inferences in primary facts, and preserve human judgment.
          </p>
        </div>

        {/* 5-Step Clean Horizontal Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {howItWorksSteps.map((s, index) => {
            const Icon = stepIcons[index];
            const isSelected = activeStepIndex === index;
            const isDecide = index === 4;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(index)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                  isSelected
                    ? isDecide
                      ? 'bg-white border-trinity-gold shadow-md'
                      : 'bg-white border-trinity-blue shadow-md'
                    : 'bg-white/70 border-trinity-border hover:bg-white text-trinity-slate'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${
                    isSelected 
                      ? isDecide ? 'text-trinity-deepGold' : 'text-trinity-blue'
                      : 'text-trinity-muted'
                  }`}>
                    STAGE {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${
                    isSelected 
                      ? isDecide ? 'text-trinity-gold' : 'text-trinity-blue' 
                      : 'text-trinity-muted'
                  }`} />
                </div>
                <div className={`text-sm font-bold font-display ${
                  isSelected ? 'text-trinity-ink' : 'text-trinity-slate'
                }`}>
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean, Simple Single Stage View */}
        <div className="bg-white rounded-2xl border border-trinity-border p-8 lg:p-12 shadow-subtle">
          <div className="max-w-3xl space-y-6">
            
            <div>
              <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
                activeStep.isGoldFocus ? 'text-trinity-deepGold' : 'text-trinity-blue'
              }`}>
                Stage {activeStep.step} / {activeStep.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-trinity-ink">
                {activeStep.title}
              </h3>
              <p className="text-base text-trinity-slate mt-1">
                {activeStep.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 text-sm">
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-trinity-muted">
                  What Happens
                </div>
                <p className="text-trinity-ink leading-relaxed">
                  {activeStep.whatHappens}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-trinity-blue">
                  What AI Contributes
                </div>
                <p className="text-trinity-ink leading-relaxed">
                  {activeStep.whatAIContributes}
                </p>
              </div>
            </div>

            {/* Human Oversight Highlight */}
            <div className={`p-4 rounded-xl flex items-start gap-3 ${
              activeStep.isGoldFocus 
                ? 'bg-amber-50/70 border border-amber-200 text-amber-950' 
                : 'bg-slate-50 border border-slate-200 text-trinity-slate'
            }`}>
              <UserCheck className={`w-5 h-5 shrink-0 mt-0.5 ${
                activeStep.isGoldFocus ? 'text-trinity-gold' : 'text-trinity-blue'
              }`} />
              <div className="text-xs leading-relaxed">
                <strong className={activeStep.isGoldFocus ? 'text-amber-900' : 'text-trinity-ink'}>
                  Where Human Oversight Remains:{" "}
                </strong>
                <span>{activeStep.humanOversight}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
