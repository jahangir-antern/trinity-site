import React from 'react';
import { ArrowRight } from 'lucide-react';
import { insights } from '../data/homepageData';

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            Research & Analysis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Insights & Perspectives
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Perspectives on applied artificial intelligence, decision systems, and governance in high-stakes industries.
          </p>
        </div>

        {/* 3 Simple Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div 
              key={item.title}
              className="p-8 rounded-2xl bg-trinity-canvas border border-trinity-border flex flex-col justify-between space-y-6 hover:border-blue-300 hover:shadow-enterprise transition-all duration-200"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-trinity-blue">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold font-display text-trinity-ink leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-trinity-blue">
                <span className="flex items-center gap-1 group cursor-pointer hover:underline">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-trinity-muted font-normal">{item.readTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
