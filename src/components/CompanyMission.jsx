import React from 'react';
import { Globe2 } from 'lucide-react';
import { companyData } from '../data/homepageData';

export default function CompanyMission() {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="badge-blue">
            Purpose & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Building AI for Problems That Actually Matter.
          </h2>
        </div>

        {/* Clean Mission Card */}
        <div className="bg-white rounded-3xl border border-trinity-border p-8 lg:p-14 shadow-subtle mb-12">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            
            {/* The Telescope Quote */}
            <blockquote className="text-2xl sm:text-3xl font-display font-medium text-trinity-ink italic leading-snug">
              {companyData.quote}
            </blockquote>

            <div className="max-w-3xl mx-auto space-y-4 text-base text-trinity-slate leading-relaxed font-normal">
              <p>{companyData.body1}</p>
              <p>{companyData.body2}</p>
            </div>

            {/* Dual Global Centers */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
              {companyData.locations.map((loc) => (
                <div key={loc.city} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-trinity-canvas border border-trinity-border">
                  <Globe2 className="w-5 h-5 text-trinity-blue shrink-0" />
                  <div className="text-left">
                    <div className="text-sm font-bold text-trinity-ink">{loc.city}</div>
                    <div className="text-xs text-trinity-muted">{loc.role}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 3 Academic & IP Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.pillars.map((pil) => (
            <div key={pil.title} className="bg-white rounded-2xl border border-trinity-border p-6 shadow-subtle space-y-2">
              <h3 className="text-base font-bold font-display text-trinity-ink">
                {pil.title}
              </h3>
              <p className="text-xs text-trinity-slate leading-relaxed font-normal">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
