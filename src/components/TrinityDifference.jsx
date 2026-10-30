import React from 'react';
import { Briefcase, FileText, UserCheck } from 'lucide-react';

export default function TrinityDifference() {
  const pillars = [
    {
      icon: Briefcase,
      title: "Domain-Specific Intelligence",
      tagline: "PURPOSE-BUILT FOR HIGH-STAKES WORK",
      desc: "Unlike generic models trained on internet text, Trinity AI embeds industry taxonomies, legal precedent structures, and forensic defect standards directly into its reasoning engine."
    },
    {
      icon: FileText,
      title: "Deterministic Evidence Grounding",
      tagline: "EVERY ASSERTION CITES ITS DOCUMENT",
      desc: "Every finding, calculation, and date links directly to primary sources down to the document page, paragraph, and line number. If an inference cannot be proven, it does not appear."
    },
    {
      icon: UserCheck,
      title: "Supervised Human Oversight",
      tagline: "ACCOUNTABILITY REMAINS WITH EXPERTS",
      desc: "AI accelerates discovery, timeline reconstruction, and exposure modeling, but formal decision gates require explicit practitioner sign-off. Experts retain total legal control.",
      isGold: true
    }
  ];

  return (
    <section id="difference" className="py-24 lg:py-32 bg-trinity-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="badge-blue">
            The Trinity Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Not Another AI Copilot.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            Purpose-built intelligence for decisions where evidence, reasoning, and accountability matter.
          </p>
        </div>

        {/* 3 Spacious Pillars (The Trinity Triad) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item) => (
            <div 
              key={item.title}
              className="bg-white rounded-2xl border border-trinity-border p-8 shadow-subtle hover:border-blue-200 hover:shadow-enterprise transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  item.isGold
                    ? 'bg-amber-50 text-trinity-gold border border-amber-200'
                    : 'bg-blue-50 text-trinity-blue border border-blue-100'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>

                <div className="text-xs font-semibold text-trinity-muted uppercase tracking-wider mb-2">
                  {item.tagline}
                </div>

                <h3 className="text-xl font-bold font-display text-trinity-ink mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-trinity-blue">
                Enterprise Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
