import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Scale, 
  Building2, 
  Check, 
  UserCheck 
} from 'lucide-react';
import { productsData } from '../data/homepageData';

export default function ProductEcosystem({ onRequestDemo }) {
  const { cosmosOne, cosmosNexus } = productsData;

  return (
    <section id="products" className="py-24 lg:py-32 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-3">
          <div className="badge-blue">
            Flagship Platforms
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Intelligence Built for Complex Work.
          </h2>
          <p className="text-lg text-trinity-slate leading-relaxed font-normal">
            Specialized platforms engineered for the evidentiary, statutory, and financial demands of high-exposure disputes and defense.
          </p>
        </div>

        {/* ============================================================ */}
        {/* PRODUCT 01: COSMOS ONE™                                      */}
        {/* ============================================================ */}
        <div id="cosmos-one" className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Clean Typography (No Outer Box) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-trinity-deepBlue text-xs font-bold tracking-wide uppercase">
                <Scale className="w-3.5 h-3.5 text-trinity-blue" />
                <span>{cosmosOne.badge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-display text-trinity-ink">
                {cosmosOne.name}
              </h3>

              <p className="text-base text-trinity-slate leading-relaxed font-normal">
                {cosmosOne.overview}
              </p>

              {/* 3 Clean Capabilities */}
              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-trinity-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-trinity-ink">Claims & Docket Intelligence</div>
                    <div className="text-xs text-trinity-slate leading-relaxed">Automated timeline synthesis across massive discovery dockets.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-trinity-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-trinity-ink">Statutory Bar & Precedent Analysis</div>
                    <div className="text-xs text-trinity-slate leading-relaxed">Cross-checks claims against jurisdiction-specific notice requirements.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-trinity-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-trinity-ink">Predictive Exposure Corridors</div>
                    <div className="text-xs text-trinity-slate leading-relaxed">Calculates verified liability boundaries ($4.8M - $6.2M) grounded in facts.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onRequestDemo("CosmosOne™ (First-Party Property)")}
                  className="btn-primary py-3 px-7 text-sm font-semibold"
                >
                  <span>Request CosmosOne™ Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Column: Clean Enterprise Interface */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-mono text-trinity-muted uppercase tracking-wider block">
                      COSMOS ONE // LITIGATION INTELLIGENCE
                    </span>
                    <span className="text-base font-bold text-trinity-ink font-display">
                      Carrier Matter #2026-CV-8841
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    14,820 Pages Indexed
                  </span>
                </div>

                {/* Evidentiary Finding */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-trinity-ink text-sm">Statutory Notice Bar Identified</span>
                    <span className="text-[10px] font-mono font-bold text-trinity-deepBlue bg-blue-50 px-2 py-0.5 rounded">
                      M.G.L. c. 93A § 9
                    </span>
                  </div>
                  <p className="text-xs text-trinity-slate leading-relaxed">
                    Notice of claim served 44 days past statutory limit. Deposition contradiction flagged between witness testimony and Master Agreement § 11.4.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-trinity-muted">
                    <span className="flex items-center gap-1.5 text-trinity-blue">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ex. 14, P. 3, ¶ 2</span>
                    </span>
                    <span className="text-emerald-600 font-bold">99.4% Match</span>
                  </div>
                </div>

                {/* Exposure Range */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-trinity-ink">Exposure Corridor: $4.8M — $6.2M</span>
                    <span className="text-xs font-mono font-bold text-trinity-blue">Baseline: $5.2M</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="w-1/3 bg-emerald-500"></div>
                    <div className="w-1/2 bg-trinity-blue"></div>
                    <div className="w-1/6 bg-amber-400"></div>
                  </div>
                </div>

                <div className="text-[11px] text-trinity-muted flex items-center justify-between pt-1">
                  <span>Deterministic Lineage Engine</span>
                  <span className="font-semibold text-trinity-ink">Courtroom Defensible</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* PRODUCT 02: COSMOS NEXUS™                                    */}
        {/* ============================================================ */}
        <div id="cosmos-nexus">
          <div className="bg-[#071120] text-white rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-trinity-brightGold text-xs font-bold tracking-wide uppercase">
                  <Building2 className="w-3.5 h-3.5 text-trinity-gold" />
                  <span>{cosmosNexus.badge}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
                  {cosmosNexus.name}
                </h3>

                <p className="text-lg font-semibold text-trinity-lightBlue">
                  "{cosmosNexus.tagline}."
                </p>

                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {cosmosNexus.overview}
                </p>

                {/* 3 Clean Capabilities */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900/60 text-trinity-lightBlue flex items-center justify-center shrink-0 mt-0.5 border border-blue-700/50">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Automated Defect & Scope Mapping</div>
                      <div className="text-xs text-slate-300">Parses trade contracts and architectural specifications per CSI division.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900/60 text-trinity-lightBlue flex items-center justify-center shrink-0 mt-0.5 border border-blue-700/50">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Subcontractor Exposure Allocation</div>
                      <div className="text-xs text-slate-300">Isolates non-attributable damages and reduces inflated plaintiff claims.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900/60 text-trinity-lightBlue flex items-center justify-center shrink-0 mt-0.5 border border-blue-700/50">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Document-Anchored Audit Trail</div>
                      <div className="text-xs text-slate-300">Every calculation names its contract clause, forensic photo, and drawing.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onRequestDemo("CosmosNexus™ (Construction Defect)")}
                    className="btn-primary py-3 px-7 text-sm font-semibold bg-trinity-blue hover:bg-trinity-deepBlue"
                  >
                    <span>Request CosmosNexus™ Demo</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Scope Isolation & Sign-Off */}
              <div className="lg:col-span-7">
                <div className="bg-[#0A1426] rounded-2xl border border-[#1b2b48] p-6 sm:p-8 space-y-5">
                  
                  {/* Clean Header & Exposure Comparison */}
                  <div className="pb-4 border-b border-[#182744] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        COSMOS NEXUS // SCOPE RECONCILIATION
                      </span>
                      <span className="text-base font-bold text-white font-display">
                        Harbor Point Defect Defense
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-slate-400 line-through">Demand: $18.45M</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-mono font-bold border border-emerald-800/40">
                        Exposure: $1.82M
                      </span>
                    </div>
                  </div>

                  {/* Scope Finding */}
                  <div className="p-4 rounded-xl bg-[#060d17] border border-[#15243b] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-trinity-lightBlue font-semibold">Causal Disconnect Confirmed</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">90.1% Filtered</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Water intrusion at balcony caused by sheet-metal flashing installed by siding contractor. Framing subcontract explicitly excluded perimeter flashing under Ex. C, Art. 4.2.
                    </p>
                    <div className="text-[11px] font-mono text-slate-400 pt-1">
                      Anchor: Architectural Drawing A-402 • Change Order #18
                    </div>
                  </div>

                  {/* Gold Human Review Checkpoint */}
                  <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <UserCheck className="w-5 h-5 text-trinity-gold shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">
                          Lead Counsel Tender Approval
                        </div>
                        <div className="text-xs text-amber-200/80">
                          Sarah Jenkins, Esq. approved formal defense tender package
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-trinity-brightGold px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/30">
                      TENDER READY
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                    <span>Deterministic Lineage Engine</span>
                    <span className="text-slate-300">Audit-Ready Packaging</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
