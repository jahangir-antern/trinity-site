import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/homepageData';
import trinityLogo from '../assets/trinity-logo.png';

export default function Header({ onNavigate, onRequestDemo, currentPage = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutCloseTimer = useRef(null);

  const openAboutMenu = () => {
    if (aboutCloseTimer.current) clearTimeout(aboutCloseTimer.current);
    setAboutMenuOpen(true);
  };

  const scheduleAboutClose = () => {
    if (aboutCloseTimer.current) clearTimeout(aboutCloseTimer.current);
    aboutCloseTimer.current = setTimeout(() => setAboutMenuOpen(false), 140);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!aboutMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setAboutMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [aboutMenuOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setAboutMenuOpen(false);
    if (onNavigate) onNavigate('home');
  };

  const goTo = (page, options) => {
    setAboutMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    if (onNavigate) onNavigate(page, options);
  };

  const handleLinkClick = (e, link) => {
    if (link.name === 'Research & Analysis' || link.href === '#') {
      e.preventDefault();
      return;
    }

    if (link.page === 'about' || link.name === 'About Us') {
      e.preventDefault();
      goTo('about');
      return;
    }

    setAboutMenuOpen(false);
    setMobileMenuOpen(false);

    if (currentPage !== 'home') {
      e.preventDefault();
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const target = document.querySelector(link.href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const aboutActive = currentPage === 'about' || currentPage === 'team';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-trinity-border shadow-md shadow-slate-900/5 text-trinity-ink'
          : 'bg-[#050B16]/85 backdrop-blur-md border-b border-white/10 text-white shadow-none'
      }`}
      onMouseLeave={scheduleAboutClose}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isScrolled ? 'py-3.5' : 'py-5 md:py-5.5'}`}>
        <div className="flex items-center justify-between">

          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-blue rounded-lg p-1 group cursor-pointer"
            aria-label="Trinity AI Boston - Return to home"
          >
            <img
              src={trinityLogo}
              alt="Trinity AI Boston Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`text-[16px] font-bold tracking-tight font-display transition-colors duration-500 ease-in-out ${isScrolled ? 'text-trinity-ink' : 'text-white'}`}>
                TRINITY AI <span className="text-trinity-gold">BOSTON</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold transition-colors duration-500 ease-in-out ${isScrolled ? 'text-trinity-muted' : 'text-slate-400'}`}>
                Engineering Scale at Trust™
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isAbout = link.name === 'About Us';
              const isResearch = link.name === 'Research & Analysis';
              const isActive = isAbout ? aboutActive : (currentPage === 'home' && link.href === '#');

              if (isAbout) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={openAboutMenu}
                    onMouseLeave={scheduleAboutClose}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      aria-expanded={aboutMenuOpen}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-md transition-all duration-300 ease-in-out cursor-pointer ${
                        isActive || aboutMenuOpen
                          ? isScrolled
                            ? 'text-trinity-blue font-semibold bg-blue-50/80'
                            : 'text-white font-semibold bg-white/15'
                          : isScrolled
                          ? 'text-trinity-slate hover:text-trinity-blue hover:bg-slate-100/70'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${aboutMenuOpen ? 'rotate-180' : ''}`} />
                    </a>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setAboutMenuOpen(false)}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-3.5 py-2 text-[14px] font-medium rounded-md transition-all duration-300 ease-in-out cursor-pointer ${
                    isActive
                      ? 'text-trinity-blue font-semibold bg-blue-50/80'
                      : isScrolled
                      ? 'text-trinity-slate hover:text-trinity-blue hover:bg-slate-100/70'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  } ${isResearch ? 'opacity-85' : ''}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onRequestDemo('General Inquiry')}
              className={`text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg transition-all duration-500 ease-in-out shadow-sm cursor-pointer ${
                isScrolled
                  ? 'bg-trinity-blue text-white hover:bg-trinity-deepBlue shadow-blue-900/10'
                  : 'bg-trinity-blue text-white hover:bg-trinity-electric shadow-blue-950/40'
              }`}
            >
              Request a Demo
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onRequestDemo('General Inquiry')}
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-trinity-blue text-white transition-colors duration-300"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg transition-colors duration-500 ease-in-out ${
                isScrolled ? 'text-trinity-ink hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {aboutMenuOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-white text-trinity-ink border-b border-trinity-border shadow-2xl shadow-slate-900/15"
          onMouseEnter={openAboutMenu}
          onMouseLeave={scheduleAboutClose}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 rounded-2xl bg-[#07101d] text-white p-6 flex flex-col justify-between min-h-[240px]">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-trinity-lightBlue">
                    Company
                  </div>
                  <h2 className="text-2xl font-bold font-display tracking-tight">
                    About Trinity AI Boston
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Purpose-built artificial intelligence for insurance defense litigation, where the work is signed, filed, and audited.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goTo('about')}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-trinity-lightBlue cursor-pointer"
                >
                  Company overview
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="col-span-8">
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-trinity-blue">
                      About Us
                    </div>
                    <button
                      type="button"
                      onClick={() => goTo('team')}
                      className="mt-1 text-left text-xl font-bold font-display text-trinity-ink hover:text-trinity-blue cursor-pointer"
                    >
                      Our Team
                    </button>
                    <p className="mt-1 text-sm text-trinity-slate max-w-xl">
                      Meet the leadership and advisory team.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => goTo('team')}
                    className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-trinity-blue hover:text-trinity-deepBlue cursor-pointer"
                  >
                    View all
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-trinity-ink border-b border-trinity-border px-6 py-6 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.name === 'About Us') {
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileAboutOpen((open) => !open)}
                      className="w-full flex items-center justify-between text-base font-medium text-trinity-ink py-2 cursor-pointer"
                      aria-expanded={mobileAboutOpen}
                    >
                      About Us
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileAboutOpen && (
                      <div className="pl-3 pb-2 space-y-1">
                        <button
                          type="button"
                          onClick={() => goTo('about')}
                          className="block w-full text-left text-sm font-semibold text-trinity-ink py-2 cursor-pointer"
                        >
                          Company overview
                        </button>
                        <button
                          type="button"
                          onClick={() => goTo('team')}
                          className="block w-full text-left text-sm font-semibold text-trinity-blue py-2 cursor-pointer"
                        >
                          Our Team
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-base font-medium text-trinity-ink hover:text-trinity-blue py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo('General Inquiry');
                }}
                className="btn-primary w-full text-center cursor-pointer"
              >
                Request a Demo
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
