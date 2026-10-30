import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  MapPin,
  FileText
} from 'lucide-react';
import { teamMembers } from '../data/teamData';

export default function OurTeamSection({ onRequestDemo }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const currentIndex = selectedMember 
    ? teamMembers.findIndex((m) => m.id === selectedMember.id) 
    : -1;

  const goToPrev = () => {
    setSelectedMember((current) => {
      if (!current) return null;
      const idx = teamMembers.findIndex((m) => m.id === current.id);
      return idx <= 0 ? teamMembers[teamMembers.length - 1] : teamMembers[idx - 1];
    });
  };

  const goToNext = () => {
    setSelectedMember((current) => {
      if (!current) return null;
      const idx = teamMembers.findIndex((m) => m.id === current.id);
      return idx >= teamMembers.length - 1 ? teamMembers[0] : teamMembers[idx + 1];
    });
  };

  // Keyboard navigation & body scroll locking when slide drawer is open
  useEffect(() => {
    if (!selectedMember) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <section id="our-team" className="scroll-mt-28 py-24 lg:py-32 bg-trinity-canvas text-trinity-ink relative border-b border-trinity-border overflow-hidden">
      
      {/* Subtle Ambient Light Gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold tracking-wider uppercase text-trinity-blue shadow-xs">
            <Users className="w-3.5 h-3.5 text-trinity-blue" />
            <span>LEADERSHIP & ADVISORY TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-trinity-ink leading-tight">
            The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-trinity-blue via-trinity-deepBlue to-blue-700">Engineering Scale at Trust™</span>
          </h2>

          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Decades of combined executive leadership spanning semiconductor physics, insurance carrier defense, enterprise telecommunications, and high-consequence AI architectures.
          </p>
        </div>

        {/* Compact Team Cards Grid (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => {
            const allMembersColumnClass = index < 2
              ? 'lg:col-span-3'
              : index < 5
                ? 'lg:col-span-2'
                : index === 5
                  ? 'lg:col-span-2 lg:col-start-2'
                  : 'lg:col-span-2 lg:col-start-4';

            return (
              <div
                key={member.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedMember(member)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMember(member);
                  }
                }}
                className={`group rounded-2xl bg-white border border-slate-200/90 shadow-subtle overflow-hidden flex flex-col justify-between hover:border-blue-400 hover:shadow-enterprise transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-trinity-blue/40 ${
                  allMembersColumnClass
                }`}
              >
                <div>
                  {/* Image Portrait Box with Soft Depth Gradient */}
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-100 to-slate-200/60 overflow-hidden border-b border-slate-100">
                    <div className="w-full h-full overflow-hidden transition-transform duration-700 group-hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          objectFit: member.imageFit || 'cover',
                          objectPosition: member.imagePosition || 'center top',
                          transform: member.imageScale ? `scale(${member.imageScale})` : undefined,
                          transformOrigin: member.transformOrigin || 'center center',
                        }}
                        className="w-full h-full object-cover select-none"
                      />
                    </div>
                    
                    {/* Subtle Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-[10px] font-mono font-semibold uppercase tracking-wider text-trinity-blue shadow-xs backdrop-blur-md">
                        {member.categoryBadge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-900/85 text-white text-[10px] font-mono font-medium shadow-xs backdrop-blur-md">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  {/* Minimized Essential Data */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    {/* Name & Role */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-trinity-ink tracking-tight group-hover:text-trinity-blue transition-colors line-clamp-1">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-trinity-blue font-semibold line-clamp-1 mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    {/* Standout Highlight Banner */}
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100/90 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-trinity-gold shrink-0 mt-0.5" />
                      <p className="text-xs text-trinity-ink font-medium leading-snug line-clamp-2">
                        {member.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sleek Action Footer: Shortened & Interactive */}
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-trinity-blue group-hover:text-trinity-deepBlue">
                    <span>View Profile & Bio</span>
                    <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-trinity-blue group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Board Governance Notice (Light Mode) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-blue-200/80 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-trinity-slate">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-trinity-blue shrink-0" />
            <p className="leading-relaxed">
              <span className="text-trinity-ink font-bold">Institutional Governance:</span> Led by co-founders Jayashankar Nanjundaswamy (President & CEO) and Ganesh Ramamoorthy (CTO), with verified operational leadership across Greater Boston, Massachusetts and Bangalore, India.
            </p>
          </div>
          <span className="font-mono text-slate-500 font-medium shrink-0">
            2 Trinity Ct, Andover, MA 01810
          </span>
        </div>

      </div>

      {/* =========================================================================
          SLIDE-OVER EXECUTIVE DOSSIER DRAWER (Sliding from the right)
          ========================================================================= */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 overflow-hidden" 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="slide-over-title"
        >
          {/* Backdrop Blur Overlay */}
          <div 
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-300 animate-drawer-fade cursor-pointer"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-lg lg:max-w-xl bg-white shadow-2xl flex flex-col z-50 animate-drawer-in">
              
              {/* Sticky Top Bar: Badges + Next/Prev + Close */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-20 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-semibold uppercase tracking-wider text-trinity-blue">
                    {selectedMember.categoryBadge}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-medium">
                    {selectedMember.experience}
                  </span>
                </div>

                {/* Navigation Chevrons + Close Button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                    <button
                      type="button"
                      onClick={goToPrev}
                      title="Previous Leader (Left Arrow)"
                      className="p-1.5 text-slate-500 hover:text-trinity-blue hover:bg-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-2 text-[11px] font-mono text-slate-400 select-none border-x border-slate-200">
                      {currentIndex + 1} / {teamMembers.length}
                    </span>
                    <button
                      type="button"
                      onClick={goToNext}
                      title="Next Leader (Right Arrow)"
                      className="p-1.5 text-slate-500 hover:text-trinity-blue hover:bg-white transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    title="Close (Escape)"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Executive Dossier Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-7 flex-grow">
                
                {/* Profile Hero with Photo and Role */}
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200 shrink-0 shadow-sm">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      style={{
                        objectFit: selectedMember.imageFit || 'cover',
                        objectPosition: selectedMember.imagePosition || 'center top',
                        transform: selectedMember.imageScale ? `scale(${selectedMember.imageScale})` : undefined,
                        transformOrigin: selectedMember.transformOrigin || 'center center',
                      }}
                      className="w-full h-full object-cover select-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h3 id="slide-over-title" className="text-xl sm:text-2xl font-bold font-display text-trinity-ink tracking-tight">
                      {selectedMember.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-trinity-blue font-semibold leading-relaxed">
                      {selectedMember.role}
                    </p>
                    <div className="pt-1 flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        Trinity AI Boston
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        Andover, MA / BLR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Standout Highlight Banner */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-trinity-gold shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-trinity-blue font-bold">
                      Distinguished Focus
                    </div>
                    <p className="text-sm text-trinity-ink font-semibold leading-snug">
                      {selectedMember.highlight}
                    </p>
                  </div>
                </div>

                {/* Full Biography */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                    <FileText className="w-3.5 h-3.5 text-trinity-blue" />
                    <span>Executive Biography</span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-trinity-slate leading-relaxed font-normal whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Core Areas of Competency / Skills */}
                <div className="space-y-3 pt-1">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                    Core Domains & Practice
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedMember.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Institutional Governance Callout */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-trinity-blue shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Operates under strict Trinity AI Boston corporate governance, ensuring single-tenant defense isolation, USPTO patented model gating, and complete ABA Opinion 512 attorney-in-the-loop compliance.
                  </p>
                </div>

              </div>

              {/* Sticky Drawer Footer */}
              <div className="sticky bottom-0 bg-slate-50/95 backdrop-blur-md border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-4 z-20 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const memberName = selectedMember.name;
                    setSelectedMember(null);
                    if (onRequestDemo) {
                      onRequestDemo(`Executive Briefing - ${memberName}`);
                    }
                  }}
                  className="btn-primary py-2.5 px-5 text-sm font-semibold flex items-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <span>Request Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
