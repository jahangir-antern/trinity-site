import React from 'react';
import { ArrowRight, MapPin, User } from 'lucide-react';
import { leadership, companyLocations } from '../data/homepageData';

export default function AboutMissionSection({ onRequestDemo }) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            About Trinity AI Boston
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Built Underneath the Work.
          </h2>
        </div>

        {/* The Belief We Built On */}
        <blockquote className="p-8 sm:p-10 rounded-2xl bg-white border border-trinity-border shadow-subtle text-left space-y-4 max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl font-display font-medium text-trinity-ink leading-relaxed">
            “Every other industry grew by copying its best people. A lawyer cannot be copied. It is the reason a client asks for you by name.”
          </p>
          <p className="text-lg sm:text-xl font-display font-semibold text-trinity-blue">
            “So we never tried. Trinity AI Boston built underneath the work instead.”
          </p>
        </blockquote>

        {/* Leadership Section */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              Executive Leadership
            </span>
            <h3 className="text-2xl font-bold font-display text-trinity-ink">
              Leadership & Governance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {leadership.map((leader) => (
              <div 
                key={leader.name}
                className="p-6 rounded-2xl bg-white border border-trinity-border shadow-subtle hover:border-blue-200 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-trinity-blue border border-blue-100 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-trinity-ink">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-trinity-slate mt-1 leading-normal font-medium">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Locations */}
        <div className="pt-4 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-xs font-semibold text-trinity-slate">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-trinity-blue shrink-0" />
              <span>Headquarters: {companyLocations.headquarters.address} ({companyLocations.headquarters.region})</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-trinity-gold shrink-0" />
              <span>{companyLocations.engineeringCenter.region}: {companyLocations.engineeringCenter.address}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onRequestDemo && onRequestDemo("Executive Briefing")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-trinity-blue hover:text-trinity-deepBlue group cursor-pointer"
          >
            <span>Request Executive Briefing</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
