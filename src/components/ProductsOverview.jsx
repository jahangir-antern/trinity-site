import React from 'react';
import { 
  Building2, 
  Home, 
  Users, 
  Activity, 
  CheckSquare, 
  ArrowRight,
  ShieldAlert,
  Cpu,
  Camera,
  Scale
} from 'lucide-react';
import { products } from '../data/homepageData';

export default function ProductsOverview({ onRequestDemo }) {
  const practiceIcons = {
    'cosmos-one': Home,
    'cosmos-nexus': Building2,
    'cosmos-helios': Users,
    'cosmos-helix': Activity,
    'cosmos-gravity': CheckSquare
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            The Cosmos Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            One Engine. Five Practice Lines.
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            One engine, run across the practice lines where the record is largest and the stakes are highest. The engine ingests the record, extracts the facts, reasons on them, cites the authority, and routes every output to an attorney for approval. What changes between practice lines is the law, not the machinery.
          </p>
        </div>

        {/* Practice Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((item, idx) => {
            const Icon = practiceIcons[item.id] || Home;
            const isFlagship = idx < 2;

            return (
              <div 
                key={item.id}
                className={`rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isFlagship 
                    ? 'bg-trinity-canvas border-blue-200 shadow-md hover:border-blue-400 hover:shadow-enterprise' 
                    : 'bg-white border-trinity-border shadow-subtle hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-600 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-medium text-trinity-blue block mb-1">
                      Practice Line 0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-trinity-ink">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onRequestDemo && onRequestDemo(item.name)}
                    className="text-xs font-semibold text-trinity-blue hover:text-trinity-deepBlue flex items-center gap-1 group cursor-pointer"
                  >
                    <span>Request Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    Cosmos Core
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Reads The Record: Three Engines Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#071120] text-white border border-[#1b2b48] relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-trinity-lightBlue font-semibold">
              Proprietary Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              How It Reads the Record
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Three engines, with an attorney approving every output. Read, see, verify is enough. The sequencing and the rule sets are the moat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-trinity-lightBlue">
                <Cpu className="w-5 h-5" />
                <span className="font-bold font-display text-lg text-white">Cortex</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reads the written record. Ingests pleadings, dockets, coverage forms, and deposition transcripts with deterministic citation provenance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300">
                <Camera className="w-5 h-5" />
                <span className="font-bold font-display text-lg text-white">Polaris</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reads the photographic record. Processes job-site images, property defect photos, and forensic inspection exhibits.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-amber-300">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-bold font-display text-lg text-white">Argus™</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adversarially re-checks both records before anything reaches an attorney, isolating contradictions and stress-testing opposing expert theories.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-trinity-lightBlue" />
              <span>Mandatory Attorney-in-the-Loop Approval (ABA Formal Opinion 512 & Florida Bar Opinion 24-1)</span>
            </span>
            <button
              type="button"
              onClick={() => onRequestDemo && onRequestDemo("The Cosmos Platform")}
              className="text-trinity-lightBlue hover:underline font-semibold cursor-pointer"
            >
              Explore Architecture Tour →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
