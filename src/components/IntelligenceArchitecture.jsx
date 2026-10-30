import React from 'react';
import { 
  CheckCircle2, 
  UserCheck, 
  ArrowRight,
  Database,
  Cpu,
  GitBranch,
  ShieldCheck,
  FileCheck2
} from 'lucide-react';
import { architectureLayers } from '../data/homepageData';

export default function IntelligenceArchitecture({ onRequestDemo }) {
  const layerIcons = [Database, Cpu, GitBranch, ShieldCheck, UserCheck, FileCheck2];

  return (
    <section id="architecture" className="py-24 lg:py-32 bg-trinity-hero text-white relative bg-grid-dark overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-trinity-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="badge-dark">
            SYSTEM ARCHITECTURE & LINEAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Intelligence Built Beyond the Model.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            A deterministic, multi-layered architecture where generative AI is constrained by formal symbolic logic, verified citations, and required human sign-off gates.
          </p>
        </div>

        {/* Clean, Visual 6-Stage Architecture Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureLayers.map((layer, idx) => {
            const Icon = layerIcons[idx];
            const isHuman = layer.isGold;

            return (
              <div
                key={layer.layer}
                className={`p-6 rounded-2xl border transition-all ${
                  isHuman
                    ? 'bg-amber-950/25 border-amber-500/40 shadow-gold-glow'
                    : 'bg-[#091424] border-[#182744]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isHuman
                      ? 'bg-amber-500/20 text-trinity-brightGold'
                      : 'bg-blue-900/30 text-trinity-lightBlue'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isHuman
                      ? 'bg-amber-500/20 text-trinity-brightGold border border-amber-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/5'
                  }`}>
                    LAYER 0{idx + 1}
                  </span>
                </div>

                <div className={`text-xs font-mono font-semibold uppercase tracking-wider mb-1 ${
                  isHuman ? 'text-trinity-brightGold' : 'text-trinity-lightBlue'
                }`}>
                  {layer.badge}
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {layer.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {layer.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{isHuman ? 'Mandatory Gate' : 'Deterministic'}</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isHuman ? 'text-trinity-gold' : 'text-trinity-lightBlue'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Bottom Reassurance Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-6">
            <span>Single-Tenant Isolated VPCs</span>
            <span>•</span>
            <span>Zero Foundation Retraining</span>
            <span>•</span>
            <span>NIST AI RMF Aligned</span>
          </div>

          <button
            onClick={() => onRequestDemo("Both Platforms")}
            className="text-trinity-lightBlue hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Request Architecture Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
