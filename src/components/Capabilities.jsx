import React from 'react';
import { 
  Cpu, 
  GitFork, 
  Briefcase, 
  Database, 
  Workflow, 
  ShieldCheck 
} from 'lucide-react';
import { capabilities } from '../data/homepageData';

export default function Capabilities() {
  const iconMap = {
    'ai-intelligence': Cpu,
    'decision-intelligence': GitFork,
    'domain-ai': Briefcase,
    'data-knowledge': Database,
    'ai-automation': Workflow,
    'responsible-ai': ShieldCheck
  };

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            Enterprise Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Purpose-built capabilities designed for complex, evidence-intensive enterprise environments.
          </p>
        </div>

        {/* 6 Clean Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.id] || Cpu;

            return (
              <div 
                key={cap.id}
                className="bg-white rounded-2xl border border-trinity-border p-8 shadow-subtle hover:border-blue-300 hover:shadow-enterprise transition-all duration-200 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  {cap.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
