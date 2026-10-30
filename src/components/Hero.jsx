import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  Lock, 
  Zap, 
  FileCheck, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Shield,
  Activity
} from 'lucide-react';
import heroLegalExecutive from '../assets/hero-legal-executive.jpg';
import satelliteBg from '../assets/Satelite1.jpg';
import cosmosNexusBg from '../assets/CosmosNexus1.png';
import legalAiBg from '../assets/AI_analyzing_legal.jpg';

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

const slides = [
  {
    id: 'ai-lens-for-truth',
    badgeTag: 'TRINITY AI BOSTON',
    badgeHighlight: 'A New Perspective on AI',
    badgePulseColor: 'bg-trinity-electric',
    backgroundImage: satelliteBg,
    backgroundAlt: 'Radio telescope beneath the Milky Way',
    backgroundPosition: 'center 42%',
    headlineStart: 'AI as a ',
    headlineHighlight: 'Lens for Truth',
    headlineEnd: '',
    gradientClass: 'from-blue-300 via-trinity-lightBlue to-blue-100',
    description: 'Astronomers did not invent the stars—they revealed them with a telescope. AI is our telescope. Trinity AI exists to decide where the world should point it.',
    primaryCta: {
      label: 'Explore Trinity AI Boston',
      href: '#positioning',
      isModal: false
    },
    secondaryCta: {
      label: 'Request a Demo',
      action: 'Enterprise Briefing',
      isModal: true
    },
    assurances: [],
    tabTitle: 'AI as a Lens for Truth',
    tabSubtitle: 'A new perspective on AI'
  },
  {
    id: 'decision-intelligence',
    badgeTag: 'TRINITY AI BOSTON',
    badgeHighlight: 'Engineering Scale at Trust™',
    badgePulseColor: 'bg-trinity-electric',
    backgroundImage: heroLegalExecutive,
    backgroundAlt: 'Trinity AI Boston Legal Executive in Corporate Office Interior',
    backgroundPosition: '82% center',
    headlineStart: 'Turning Complex Evidence Into ',
    headlineHighlight: 'Defensible Positions',
    headlineEnd: '.',
    gradientClass: 'from-blue-300 via-trinity-lightBlue to-blue-100',
    description: 'Purpose-built for insurance defense litigation where the output is signed by an attorney, filed with a court, and billed to a carrier that audits it. The Cosmos platform carries every matter with assertions cited to the record.',
    primaryCta: {
      label: 'Request a Demo',
      action: 'Enterprise Briefing',
      isModal: true
    },
    secondaryCta: {
      label: 'Explore Trinity AI Boston',
      href: '#positioning',
      isModal: false
    },
    assurances: [
      { type: 'icon', icon: CheckCircle2, iconColor: 'text-trinity-lightBlue', text: 'Attorney in the Loop (ABA Op. 512)' },
      { type: 'dot', dotColor: 'bg-trinity-gold', text: 'A Citation on Every Finding' },
      { type: 'icon', icon: Lock, iconColor: 'text-emerald-400', text: 'In Production with Am Law 200' }
    ],
    tabTitle: 'Defensible Positions',
    tabSubtitle: 'Insurance Defense Litigation'
  },
  {
    id: 'cognitive-architecture',
    badgeTag: 'THE COSMOS PLATFORM',
    badgeHighlight: 'One Engine Across High-Stakes Records',
    badgePulseColor: 'bg-cyan-400',
    backgroundImage: cosmosNexusBg,
    backgroundAlt: 'CosmosNexus platform visual',
    backgroundPosition: 'center center',
    headlineStart: 'One Engine Across ',
    headlineHighlight: 'High-Stakes Records',
    headlineEnd: '.',
    gradientClass: 'from-cyan-300 via-sky-200 to-blue-200',
    description: 'One engine across the practice lines where the record is largest: First-party property (CosmosOne™), Construction defect (CosmosNexus™), Intake (CosmosHelios™), and Medical files (Cosmos Helix™). What changes is the law, not the machinery.',
    primaryCta: {
      label: 'Explore The Platform',
      href: '#products',
      isModal: false
    },
    secondaryCta: {
      label: 'Technical Briefing',
      action: 'The Cosmos Platform',
      isModal: true
    },
    assurances: [
      { type: 'icon', icon: Zap, iconColor: 'text-cyan-300', text: 'Cortex & Polaris Record Engines' },
      { type: 'icon', icon: FileCheck, iconColor: 'text-trinity-lightBlue', text: 'Argus™ Adversarial Verification' },
      { type: 'icon', icon: ShieldCheck, iconColor: 'text-emerald-400', text: 'Single Tenant by Design' }
    ],
    tabTitle: 'The Cosmos Platform',
    tabSubtitle: 'Five Specialized Practice Lines'
  },
  {
    id: 'cosmos-platforms',
    badgeTag: 'CARRIER & COUNSEL ALIGNMENT',
    badgeHighlight: 'Built Underneath the Work',
    badgePulseColor: 'bg-amber-400',
    backgroundImage: legalAiBg,
    backgroundAlt: 'AI analyzing legal documents',
    backgroundPosition: 'center center',
    headlineStart: 'For the Attorney Who Signs, ',
    headlineHighlight: 'and Carrier Who Pays',
    headlineEnd: '.',
    gradientClass: 'from-amber-200 via-yellow-100 to-amber-300',
    description: 'The carrier funds the defense, which is why the Cosmos platform satisfies both the attorney signing the pleadings and the carrier auditing compliance. Guidelines enforced as code, proving compliance on demand.',
    primaryCta: {
      label: 'Explore Practice Lines',
      href: '#products',
      isModal: false
    },
    secondaryCta: {
      label: 'Schedule Platform Tour',
      action: 'Carrier & Counsel Briefing',
      isModal: true
    },
    assurances: [
      { type: 'icon', icon: Layers, iconColor: 'text-amber-300', text: 'Cosmos Gravity™ Audit Enforcement' },
      { type: 'icon', icon: TrendingUp, iconColor: 'text-trinity-lightBlue', text: 'Ten USPTO Patent Filings' },
      { type: 'icon', icon: CheckCircle2, iconColor: 'text-emerald-400', text: 'SOC 2 Type 1 Attested' }
    ],
    tabTitle: 'Carrier & Panel Alignment',
    tabSubtitle: 'Enforced Compliance & Verification'
  }
];

export default function Hero({ onRequestDemo }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [progressKey, setProgressKey] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Slide navigation handlers with direction tracking for kinetic animation
  const goToSlide = useCallback((index) => {
    setDirection(index >= activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
    setProgressKey((prev) => prev + 1);
  }, [activeSlide]);

  const nextSlide = useCallback(() => {
    setDirection('next');
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  // Keyboard navigation (Left / Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const currentSlide = slides[activeSlide];

  return (
    <section 
      role="region"
      aria-roledescription="carousel"
      aria-label="Trinity AI Boston - Featured AI Perspectives"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-screen min-h-[100dvh] bg-trinity-hero text-white overflow-hidden border-b border-[#182744] flex flex-col justify-between select-none"
    >
      
      {/* =========================================================================
          FIXED PARALLAX BACKGROUND
          Keeps each slide's background fixed to the viewport while content scrolls over it
          ========================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ 
          clipPath: 'inset(0)',
          WebkitClipPath: 'inset(0)'
        }}
      >
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <img
            src={currentSlide.backgroundImage || heroLegalExecutive}
            alt={currentSlide.backgroundAlt || 'Trinity AI Boston Legal Executive in Corporate Office Interior'}
            style={{ objectPosition: currentSlide.backgroundPosition || '82% center' }}
            className="w-full h-full object-cover opacity-95 select-none"
          />
          
          {/* Cinematic Multi-Stop Vanishing Gradient (High contrast on left, clear view of executive on right) */}
          <div 
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: 'linear-gradient(to right, #050B16 0%, #050B16 32%, rgba(5, 11, 22, 0.94) 46%, rgba(5, 11, 22, 0.60) 62%, rgba(5, 11, 22, 0.15) 78%, rgba(5, 11, 22, 0) 95%)'
            }}
          />

          {/* Mobile / Tablet dark overlay for uncompromised readability */}
          <div className="absolute inset-0 bg-[#050B16]/75 lg:hidden pointer-events-none z-[1]" />

          {/* Top & Bottom edge dissolves to merge smoothly with navbar and next section */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050B16]/90 via-transparent to-[#050B16] z-[1]" />

          {/* Architectural Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none z-[1]" />

          {/* Dynamic Ambient Radial Sapphire Glow that pulses into life on slide change */}
          <div 
            key={`radial-${activeSlide}`}
            className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-trinity-blue/20 rounded-full blur-[150px] pointer-events-none z-[1] animate-radial-shift" 
          />
        </div>
      </div>

      {/* =========================================================================
          MAIN HERO SLIDE CONTENT CONTAINER (CREATIVE KINETIC TRANSITION)
          Directional slide gliding, staggered Apple-style reveals & lens flare sweep
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-14 relative z-10 w-full pt-28 sm:pt-32 pb-8 md:pb-12 my-auto flex-grow flex items-center">
        
        {/* Responsive Content Frame */}
        <div className="w-full relative min-h-[420px] sm:min-h-[440px] lg:min-h-[420px] flex items-center overflow-hidden">
          
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            const PrimaryIcon = slide.primaryCta.icon || ArrowRight;
            const SecondaryIcon = slide.secondaryCta.icon || ChevronRight;

            if (!isActive) return null;

            return (
              <div
                key={`slide-${index}-${direction}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.tabTitle}`}
                className={`w-full flex items-center will-change-transform ${
                  direction === 'next' 
                    ? 'animate-cinematic-enter-right' 
                    : 'animate-cinematic-enter-left'
                }`}
              >
                {/* ---------------- Expanded Left Column: Narrative with Max 2-Line Title ---------------- */}
                <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-[760px] xl:max-w-[820px] space-y-5 sm:space-y-6 text-left relative">
                  
                  {/* Radiant Lens Light Beam Flare Sweep across the transition */}
                  <div className="absolute -top-8 -left-16 w-[420px] h-[1px] bg-gradient-to-r from-transparent via-trinity-lightBlue to-transparent pointer-events-none animate-lens-sweep" />

                  {/* Eyebrow Pill: Staggered Dropdown */}
                  <div className="animate-cinematic-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold tracking-wider uppercase text-trinity-lightBlue backdrop-blur-md shadow-sm">
                    <span className={`w-2 h-2 rounded-full ${slide.badgePulseColor} animate-pulse shrink-0`} />
                    <span>{slide.badgeTag}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 font-normal">{slide.badgeHighlight}</span>
                  </div>

                  {/* Concise Title: Max 2 Lines with Kinetic Focus Reveal */}
                  <h1 className="animate-cinematic-headline text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold font-display leading-[1.12] tracking-tight text-white">
                    {slide.headlineStart}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.gradientClass}`}>
                      {slide.headlineHighlight}
                    </span>
                    {slide.headlineEnd}
                  </h1>

                  {/* Supporting Paragraph: Smooth Ascending Reveal */}
                  <p className="animate-cinematic-paragraph text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-xl lg:max-w-2xl">
                    {slide.description}
                  </p>

                  {/* Action CTA Buttons: Elevated Lift In */}
                  <div className="animate-cinematic-cta pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    {slide.primaryCta.isModal ? (
                      <button
                        type="button"
                        onClick={() => onRequestDemo(slide.primaryCta.action)}
                        className="btn-primary py-3.5 px-8 text-base font-semibold group flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/60 cursor-pointer"
                      >
                        <span>{slide.primaryCta.label}</span>
                        <PrimaryIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <a
                        href={slide.primaryCta.href}
                        className="btn-primary py-3.5 px-8 text-base font-semibold group flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/60"
                      >
                        <span>{slide.primaryCta.label}</span>
                        <PrimaryIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}

                    {slide.secondaryCta.isModal ? (
                      <button
                        type="button"
                        onClick={() => onRequestDemo(slide.secondaryCta.action)}
                        className="btn-secondary-dark py-3.5 px-7 text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10 cursor-pointer"
                      >
                        <span>{slide.secondaryCta.label}</span>
                        <SecondaryIcon className="w-4 h-4 text-slate-400" />
                      </button>
                    ) : (
                      <a
                        href={slide.secondaryCta.href}
                        className="btn-secondary-dark py-3.5 px-7 text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10"
                      >
                        <span>{slide.secondaryCta.label}</span>
                        <SecondaryIcon className="w-4 h-4 text-slate-400" />
                      </a>
                    )}
                  </div>

                  {/* Enterprise Assurance Badges: Staggered Baseline Rise */}
                  {slide.assurances.length > 0 && (
                    <div className="animate-cinematic-badges pt-5 sm:pt-7 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-7 text-xs text-slate-300 font-medium">
                      {slide.assurances.map((item, i) => {
                        const IconComp = item.icon;
                        return (
                          <span key={i} className="flex items-center gap-2">
                            {item.type === 'icon' && (
                              <IconComp className={`w-4 h-4 ${item.iconColor} shrink-0`} />
                            )}
                            {item.type === 'dot' && (
                              <span className={`w-2 h-2 rounded-full ${item.dotColor} shrink-0`} />
                            )}
                            <span>{item.text}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* =========================================================================
          MIDDLE-LEFT & MIDDLE-RIGHT FLOATING NAVIGATION ARROWS
          Allows intuitive slide switching with hover micro-glow
          ========================================================================= */}
      <button
        type="button"
        onClick={prevSlide}
        title="Previous slide (Left Arrow)"
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#071120]/75 hover:bg-trinity-blue/30 text-slate-300 hover:text-white border border-white/15 hover:border-trinity-lightBlue/60 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 group hover:scale-110 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-lightBlue"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        title="Next slide (Right Arrow)"
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#071120]/75 hover:bg-trinity-blue/30 text-slate-300 hover:text-white border border-white/15 hover:border-trinity-lightBlue/60 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 group hover:scale-110 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-lightBlue"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* =========================================================================
          BOTTOM INTERACTIVE TIMELINE TABS (CONTINUOUS AUTO-ADVANCE WITHOUT HOVER PAUSE)
          Smooth progress track auto-advances continuously
          ========================================================================= */}
      <div className="w-full relative z-20 pb-6 pt-3 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#050B16]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          
          {/* Header Row: Slide Counter, Active Topic & Continuous Status Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            
            {/* Slide Index Counter & Topic */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 font-mono text-xs">
                <span className="font-bold text-white text-sm">0{activeSlide + 1}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">0{slides.length}</span>
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />
              <span className="hidden sm:inline-block text-xs text-slate-300 font-medium">
                {currentSlide.tabTitle}
              </span>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5">
                <Shield className="w-3 h-3 text-trinity-lightBlue" />
                <span>Engineering Scale at Trust™</span>
              </span>
            </div>

            {/* Continuous Live System Verification Indicator */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-[10px] font-mono text-trinity-lightBlue">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>Live Record Reasoning</span>
              </span>
            </div>

          </div>

          {/* Interactive Progress Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full">
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`group text-left p-3 sm:p-4 rounded-xl transition-all duration-300 relative overflow-hidden cursor-pointer border ${
                    isActive
                      ? 'bg-white/[0.08] border-blue-500/40 shadow-lg shadow-blue-950/40'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slide.tabTitle}`}
                >
                  {/* Top Animated Progress Track */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/10 overflow-hidden">
                    {isActive ? (
                      <div
                        key={`prog-${progressKey}`}
                        onAnimationEnd={nextSlide}
                        className="h-full bg-gradient-to-r from-trinity-blue via-trinity-lightBlue to-cyan-300 shadow-[0_0_12px_rgba(127,214,249,0.8)] animate-slider-progress"
                        style={{
                          animationDuration: `${SLIDE_DURATION}ms`
                        }}
                      />
                    ) : (
                      <div className={`h-full ${index < activeSlide ? 'bg-white/30' : 'bg-transparent'}`} />
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-1 pt-0.5">
                    <span className={`font-mono text-[11px] sm:text-xs font-semibold tracking-wider transition-colors ${
                      isActive ? 'text-trinity-lightBlue' : 'text-slate-400 group-hover:text-slate-300'
                    }`}>
                      0{index + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-trinity-electric animate-pulse" />
                    )}
                  </div>

                  <div className={`text-xs sm:text-sm font-semibold truncate transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {slide.tabTitle}
                  </div>

                  <div className="hidden sm:block text-[11px] text-slate-400 truncate mt-0.5 font-normal">
                    {slide.tabSubtitle}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
