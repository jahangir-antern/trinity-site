import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import aiLegalBg from '../assets/AI_analyzing_legal.jpg';
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  Tag, 
  BookOpen, 
  Newspaper, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Search,
  X
} from 'lucide-react';
import { insights } from '../data/homepageData';

const newsAndBlogsData = [
  {
    id: 'aba-opinion-512',
    category: 'Legal AI Governance',
    badge: 'Research Paper',
    title: 'Operationalizing ABA Formal Opinion 512 in Insurance Defense Litigation',
    subtitle: 'Why generative legal output requires deterministic citation grounding and mandatory attorney approval gates.',
    date: 'October 28, 2026',
    readTime: '6 min read',
    author: 'Trinity AI Legal Engineering & Compliance Group',
    featured: true,
    excerpt: 'ABA Formal Opinion 512 and Florida Bar Opinion 24-1 establish clear mandates for generative AI in legal practice: attorneys must understand the underlying technology, verify accuracy, prevent disclosure of confidential client data, and maintain independent judgment. This paper details how Trinity AI Boston embeds these ethical obligations directly into the Cosmos execution pipeline.',
    content: [
      'As generative AI transitions from novelty to an everyday enterprise utility, state bar associations and regulatory bodies have accelerated oversight of algorithmic legal work product. ABA Formal Opinion 512, published in 2024, set forth landmark directives requiring competent legal representation, informed consent, and rigorous supervision over artificial intelligence tools.',
      'In insurance defense litigation—where attorneys submit verified pleadings under penalty of perjury and carrier panel guidelines impose stringent audit checks—standard probabilistic AI models are categorically unsuitable. A hallucinated precedent or ungrounded citation can result in judicial sanctions, carrier non-payment, and disciplinary proceedings.',
      'Trinity AI Boston solves this through single-tenant deterministic pipelines. Rather than asking an open-ended large language model to draft pleadings from memory, the Cosmos platform operates strictly on the verified case record. Every generated paragraph is mapped to primary authority with precise pinpoint citations to pages, lines, and exhibits.',
      'Furthermore, our Attorney-in-the-Loop architecture ensures that no work product is filed, published, or transmitted without affirmative human review and sign-off, satisfying Florida Bar Opinion 24-1 and Rule 1.1 requirements.'
    ]
  },
  {
    id: 'soc2-type1-attestation',
    category: 'Company News',
    badge: 'Announcement',
    title: 'Trinity AI Boston Successfully Completes SOC 2 Type 1 Attestation',
    subtitle: 'Independent third-party verification reinforces enterprise commitment to banking-grade security and confidentiality.',
    date: 'October 15, 2026',
    readTime: '4 min read',
    author: 'Security & Infrastructure Team',
    featured: false,
    excerpt: 'Trinity AI Boston has completed its SOC 2 Type 1 examination with zero exceptions, validating security, availability, and confidentiality controls for insurance defense environments.',
    content: [
      'Trinity AI Boston, Inc. today announced the successful completion of its Service Organization Control (SOC) 2 Type 1 audit, conducted by an independent certified public accounting firm.',
      'The audit confirmed that Trinity AI Boston’s information security controls, single-tenant infrastructure architecture, and operational practices meet the rigorous Trust Services Criteria established by the American Institute of Certified Public Accountants (AICPA).',
      'The observation period for SOC 2 Type 2 is actively underway, underscoring our ongoing commitment to safeguarding confidential insurer files, privileged defense communications, and protected work product.'
    ]
  },
  {
    id: 'first-party-property-defense',
    category: 'Claims & Coverage',
    badge: 'Technical Insight',
    title: 'First-Party Property Defense: Tracing Every Assertion from First Notice of Loss',
    subtitle: 'Navigating statutory clocks, recorded statements, and estimate disputes at enterprise scale with CosmosOne™.',
    date: 'September 22, 2026',
    readTime: '7 min read',
    author: 'CosmosOne™ Architecture Group',
    featured: false,
    excerpt: 'Navigating statutory deadlines, engineer reports, proof-of-loss submissions, and opposing estimate line items requires reconciling disparate records across months of claim handling.',
    content: [
      'In first-party property litigation, the defense often hinges on timelines: when was the notice of loss received, when were sworn proofs of loss demanded and submitted, and what exclusions were timely reserved.',
      'CosmosOne™ ingests the entire carrier claims file—including adjuster logs, field notes, weather data, and contractor estimates—building a synchronized chronological spine. It identifies gaps between alleged dates of loss and initial notice, isolating coverage defenses with evidentiary proof.'
    ]
  },
  {
    id: 'construction-defect-file-scale',
    category: 'Construction Defect',
    badge: 'Case Study',
    title: 'Multi-Party Construction Defect Defense: Decoupling Terabyte-Scale Dockets',
    subtitle: 'How CosmosNexus™ isolates exposure caps, trade apportionments, and opposing expert deposition breakdowns.',
    date: 'August 14, 2026',
    readTime: '5 min read',
    author: 'Litigation Technology Group',
    featured: false,
    excerpt: 'When facing 40+ subcontractors, thousands of job-site inspection photographs, and competing expert disclosures, pinpointing trade exposure is vital for meaningful mediation posture.',
    content: [
      'Complex construction defect litigation routinely overwhelms traditional review teams with terabytes of drawings, change orders, daily job logs, and expert defect matrices.',
      'CosmosNexus™ applies specialized multimodal extraction (Polaris) alongside docket reasoning (Cortex) to isolate trade scopes, identify unallocated repair demands, and cross-examine plaintiff expert theories against photographic evidence.'
    ]
  },
  {
    id: 'am-law-200-production',
    category: 'Company News',
    badge: 'Milestone',
    title: 'Cosmos Platform Enters Live Production Deployment with Am Law 200 Defense Firm',
    subtitle: 'Enterprise-grade deployment processes real matters inside the firm’s private cloud environment.',
    date: 'July 30, 2026',
    readTime: '4 min read',
    author: 'Client Solutions & Strategic Partnerships',
    featured: false,
    excerpt: 'A leading Am Law 200 firm specializing in insurance litigation has deployed Trinity AI Boston’s Cosmos platform across its primary defense practice groups.',
    content: [
      'Trinity AI Boston is pleased to share that an Am Law 200 litigation firm has deployed the Cosmos platform into active production.',
      'Operating entirely in a single-tenant virtual private cloud, the firm uses Cortex, Polaris, and Argus™ to support defense counsel in first-party property and construction defect matters while maintaining absolute compliance with panel billing guidelines.'
    ]
  },
  {
    id: 'uspto-patent-filings',
    category: 'Legal AI Governance',
    badge: 'Patents & IP',
    title: 'Trinity AI Boston Files 10 Provisional Patents for Deterministic AI Architecture',
    subtitle: 'Proprietary IP covers human-in-the-loop gated pipelines, citation grounding, and adversarial verification.',
    date: 'June 18, 2026',
    readTime: '5 min read',
    author: 'Intellectual Property & R&D',
    featured: false,
    excerpt: 'Our ten USPTO provisional patent filings protect core technological innovations including adversarial verification via Argus™ and deterministic citation linking.',
    content: [
      'To date, Trinity AI Boston has filed ten provisional patent applications with the United States Patent and Trademark Office (USPTO).',
      'The patents protect novel computational methods for multi-modal evidence indexing, adversarial fact-checking against contradictory record entries, and non-retraining tenant isolation algorithms.'
    ]
  }
];

const categories = ['All', 'Legal AI Governance', 'Claims & Coverage', 'Construction Defect', 'Company News'];

export default function NewsBlogsPage({ onNavigate, onRequestDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredArticles = newsAndBlogsData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsAndBlogsData.find((a) => a.featured) || newsAndBlogsData[0];

  return (
    <div className="min-h-screen bg-trinity-canvas text-trinity-ink flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      <Header
        onNavigate={onNavigate}
        onRequestDemo={onRequestDemo}
        currentPage="news"
      />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full pt-32 pb-20 md:pt-36 md:pb-28 bg-[#050B16] text-white border-b border-[#182744] overflow-hidden select-none">
          <div
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
              clipPath: 'inset(0)',
              WebkitClipPath: 'inset(0)',
            }}
          >
            <div className="fixed inset-0 w-full h-full pointer-events-none">
              <img
                src={aiLegalBg}
                alt="Trinity AI Legal Analysis & Research"
                className="w-full h-full object-cover object-[center_35%] opacity-90 select-none"
              />

              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background: 'linear-gradient(to right, #050B16 0%, rgba(5, 11, 22, 0.94) 30%, rgba(5, 11, 22, 0.65) 55%, rgba(5, 11, 22, 0.25) 75%, rgba(5, 11, 22, 0.1) 100%)',
                }}
              />

              <div className="absolute inset-0 bg-[#050B16]/75 lg:hidden pointer-events-none z-[1]" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050B16]/90 via-transparent to-[#050B16] z-[1]" />
              <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none z-[1]" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="hover:text-trinity-lightBlue transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('about')}
                className="hover:text-trinity-lightBlue transition-colors cursor-pointer"
              >
                About Us
              </button>
              <span>/</span>
              <span className="text-trinity-lightBlue font-semibold">News & Blogs</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-trinity-gold/50 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-trinity-brightGold backdrop-blur-md shadow-sm">
                <Newspaper className="w-4 h-4 text-trinity-brightGold shrink-0" />
                <span>News & Blogs</span>
                <span className="text-amber-500/60">•</span>
                <span className="text-amber-200/90 font-medium normal-case">Legal AI & Enterprise Insights</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-display leading-[1.14] tracking-tight text-white max-w-3xl">
                Perspectives on Deterministic AI
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-trinity-lightBlue to-blue-100">
                  Where the Work Is Signed & Filed.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                Applied legal engineering frameworks, product milestones, governance analysis, and industry research from Trinity AI Boston.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <section className="py-16 lg:py-24 bg-white border-b border-trinity-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Featured Article Hero Card */}
            {selectedCategory === 'All' && !searchQuery && featuredArticle && (
              <div className="rounded-3xl bg-gradient-to-br from-[#07101d] to-[#0d1d36] text-white p-8 sm:p-12 border border-[#1b2f4f] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-trinity-blue/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="px-3 py-1 rounded-full bg-trinity-blue text-white font-semibold">
                        Featured Research
                      </span>
                      <span className="font-mono text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-trinity-lightBlue" />
                        {featuredArticle.date}
                      </span>
                      <span className="font-mono text-slate-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-trinity-lightBlue" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white group-hover:text-trinity-lightBlue transition-colors">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="pt-2 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveArticle(featuredArticle)}
                        className="btn-primary inline-flex items-center gap-2 bg-trinity-blue hover:bg-trinity-electric text-white px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer shadow-lg shadow-blue-950/40"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRequestDemo && onRequestDemo(featuredArticle.title)}
                        className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-3 cursor-pointer"
                      >
                        Request Legal Briefing →
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-trinity-lightBlue">
                      Governance Highlights
                    </div>
                    <ul className="space-y-3 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Compliance with ABA Formal Opinion 512 & Florida Bar 24-1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Zero open-ended generation; pinpoint record citation grounding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Single-tenant architecture with zero client data retraining</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Filter and Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-b border-trinity-border pb-6">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-trinity-blue text-white shadow-md shadow-blue-900/20'
                        : 'bg-slate-100 text-trinity-slate hover:bg-slate-200 hover:text-trinity-ink'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-trinity-blue/40 focus:border-trinity-blue transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group bg-white rounded-2xl border border-trinity-border p-7 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-trinity-blue px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl font-bold font-display text-trinity-ink group-hover:text-trinity-blue transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-trinity-slate leading-relaxed font-normal">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">
                      {article.date}
                    </span>
                    <span className="font-semibold text-trinity-blue flex items-center gap-1 group-hover:text-trinity-deepBlue">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16 space-y-3">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-trinity-ink">No articles found</h3>
                <p className="text-sm text-slate-500">
                  Try adjusting your search query or selecting a different category.
                </p>
              </div>
            )}

          </div>
        </section>

        {/* SLIDE-OVER ARTICLE READER MODAL */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-trinity-border overflow-hidden max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-slate-50 border-b border-trinity-border flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-trinity-blue px-2.5 py-0.5 rounded-full bg-blue-100/60">
                      {activeArticle.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">• {activeArticle.readTime}</span>
                    <span className="text-xs text-slate-500 font-mono">• {activeArticle.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-trinity-ink leading-tight">
                    {activeArticle.title}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Published by {activeArticle.author}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm sm:text-base text-trinity-slate leading-relaxed">
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-trinity-blue font-semibold">
                    Schedule an Executive or Engineering Briefing
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Interested in reviewing live benchmark data, single-tenant deployment topology, or our patent-pending Argus™ adversarial verification pipeline?
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveArticle(null);
                      if (onRequestDemo) onRequestDemo(activeArticle.title);
                    }}
                    className="btn-primary text-xs font-semibold py-2.5 px-5 bg-trinity-blue hover:bg-trinity-deepBlue text-white rounded-lg inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Technical Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-trinity-border flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  © 2026 Trinity AI Boston, Inc.
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        <FinalCTA onRequestDemo={onRequestDemo} />
      </main>

      <Footer onNavigate={onNavigate} onRequestDemo={onRequestDemo} />
    </div>
  );
}

