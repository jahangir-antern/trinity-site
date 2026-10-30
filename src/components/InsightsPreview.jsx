import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { insightsData } from '../data/homepageData';

export default function InsightsPreview({ onRequestDemo }) {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="badge-blue">
              Research & Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
              Thinking Beyond the Model.
            </h2>
            <p className="text-base sm:text-lg text-trinity-slate font-normal">
              Applied research, legal engineering frameworks, and technical analysis on deterministic decision intelligence.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onRequestDemo("Both Platforms")}
              className="text-sm font-semibold text-trinity-blue hover:text-trinity-deepBlue flex items-center gap-2 group"
            >
              <span>Subscribe to Intelligence Briefings</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Editorial Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article 
              key={article.id}
              className="bg-trinity-canvas rounded-2xl border border-trinity-border p-7 flex flex-col justify-between hover:shadow-enterprise hover:border-blue-200 transition-all duration-200 group"
            >
              <div>
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs text-trinity-muted mb-4">
                  <span className="font-semibold text-trinity-blue px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Headline */}
                <h3 className="text-xl font-bold font-display text-trinity-ink mb-3 group-hover:text-trinity-blue transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-trinity-slate leading-relaxed mb-6 font-normal">
                  {article.excerpt}
                </p>

              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-mono text-trinity-muted">
                  {article.date}
                </span>
                <span className="text-xs font-bold text-trinity-blue flex items-center gap-1 group-hover:text-trinity-deepBlue">
                  <span>Read Analysis</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
