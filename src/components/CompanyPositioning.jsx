import React from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle2 } from 'lucide-react';

export default function CompanyPositioning() {
  return (
    <section id="positioning" className="py-20 lg:py-28 bg-white border-b border-trinity-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Core Philosophical Opening */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            The Belief We Built On
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-trinity-ink tracking-tight leading-tight">
            Every other industry grew by copying its best people. A lawyer cannot be copied. It is the reason a client asks for you by name.
          </h2>

          <p className="text-xl sm:text-2xl text-trinity-blue font-display font-semibold">
            So we never tried. Trinity AI Boston built underneath the work instead.
          </p>
        </div>

        {/* Company at a Glance Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-trinity-canvas border border-trinity-border space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                Company at a Glance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-trinity-ink">
                Trinity AI Boston, Inc.
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900 text-white text-xs font-semibold tracking-wide">
              <span>Engineering Scale at Trust™</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Trinity AI Boston, Inc. builds artificial intelligence for insurance defense litigation, where the output is signed by an attorney, filed with a court, and billed to a carrier that audits it. The Cosmos platform carries a matter from intake through to a defense position, with every assertion cited to the record and every output held for attorney approval.
          </p>

          {/* In Production Badge */}
          <div className="p-4 rounded-xl bg-white border border-blue-100 flex items-start sm:items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-sm font-medium text-trinity-ink">
              <span className="font-bold text-trinity-blue">In Production:</span> The platform is deployed and running inside an Am Law 200 insurance defense firm, on live matters, in that firm's own environment.
            </p>
          </div>
        </div>

        {/* Who We Build For */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              Market Clarity
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-trinity-ink">
              Who We Build For
            </h3>
            <p className="text-sm sm:text-base text-trinity-slate">
              The carrier funds the defense, which is why the platform is built to satisfy both the attorney who signs the work and the carrier who pays for it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-white border border-trinity-border shadow-subtle hover:border-blue-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-trinity-blue flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold font-display text-trinity-ink mb-1.5">
                Insurance Carriers
              </h4>
              <p className="text-xs text-trinity-slate leading-relaxed">
                Auditable billing guidelines, enforced compliance rules, and verified indemnity allocation across high-exposure panels.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-trinity-border shadow-subtle hover:border-blue-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-trinity-blue flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-bold font-display text-trinity-ink mb-1.5">
                Panel Defense Firms
              </h4>
              <p className="text-xs text-trinity-slate leading-relaxed">
                Producing defensible pleadings, quantified exposure positions, and source-grounded motions a partner can sign.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-trinity-border shadow-subtle hover:border-blue-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-trinity-blue flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold font-display text-trinity-ink mb-1.5">
                In-House Defendant Teams
              </h4>
              <p className="text-xs text-trinity-slate leading-relaxed">
                Managing high-exposure claims portfolios, tracking statutory clocks, and enforcing institutional risk defense.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
