import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Users, Newspaper } from 'lucide-react';
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

    if (link.page === 'careers' || link.name === 'Careers') {
      e.preventDefault();
      goTo('careers');
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
    } else if (link.href && link.href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutActive = currentPage === 'about' || currentPage === 'team' || currentPage === 'news';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out bg-[#050B16]/85 backdrop-blur-md border-b border-white/10 text-white ${
        isScrolled ? 'shadow-lg shadow-black/20' : 'shadow-none'
      }`}
      onMouseLeave={scheduleAboutClose}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-3.5' : 'py-5 md:py-5.5'}`}>
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
              <span className="text-[16px] font-bold tracking-tight font-display text-white">
                TRINITY AI <span className="text-trinity-gold">BOSTON</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                Engineering Scale at Trust™
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isAbout = link.name === 'About Us';
              const isResearch = link.name === 'Research & Analysis';
              const isCareers = link.page === 'careers';
              const isActive = isAbout
                ? aboutActive
                : isCareers
                ? currentPage === 'careers'
                : (currentPage === 'home' && link.href === '#');

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
                      className={`inline-flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition-colors duration-200 cursor-pointer ${
                        isActive || aboutMenuOpen
                          ? 'text-white font-semibold'
                          : 'text-slate-300 hover:text-white'
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
                      ? 'text-white font-semibold'
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
              className="text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg transition-all duration-300 ease-in-out shadow-sm cursor-pointer bg-trinity-blue text-white hover:bg-trinity-electric shadow-blue-950/40"
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
              className="p-2 rounded-lg transition-colors duration-300 text-white hover:bg-white/10 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Desktop About Mega Menu Dropdown with Smooth Expand/Collapse Animation */}
      <div
        className={`hidden lg:block absolute left-0 right-0 top-full transition-all duration-300 ease-in-out ${
          aboutMenuOpen
            ? 'opacity-100 visible pointer-events-auto shadow-2xl shadow-slate-900/15'
            : 'opacity-0 invisible pointer-events-none shadow-none'
        }`}
        onMouseEnter={openAboutMenu}
        onMouseLeave={scheduleAboutClose}
      >
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out bg-white text-trinity-ink border-b border-trinity-border ${
            aboutMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`max-w-7xl mx-auto px-6 lg:px-8 py-8 transition-all duration-300 ease-out transform ${
                aboutMenuOpen
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-3 scale-[0.99]'
              }`}
            >
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

                <div className="col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-trinity-blue mb-4">
                      About Us
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Item 1: Our Team */}
                      <div
                        onClick={() => goTo('team')}
                        className="group p-5 rounded-2xl border border-slate-200/90 hover:border-trinity-blue/50 bg-slate-50/50 hover:bg-blue-50/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-trinity-blue flex items-center justify-center group-hover:bg-trinity-blue group-hover:text-white transition-colors duration-300">
                              <Users className="w-4 h-4" />
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-trinity-blue group-hover:translate-x-1 transition-all" />
                          </div>
                          <h3 className="text-lg font-bold font-display text-trinity-ink group-hover:text-trinity-blue transition-colors">
                            Our Team
                          </h3>
                          <p className="mt-1 text-xs text-trinity-slate leading-relaxed">
                            Meet the leadership and advisory team driving Trinity AI Boston.
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-trinity-blue">
                          <span>View leadership</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Item 2: News & Blogs */}
                      <div
                        onClick={() => goTo('news')}
                        className="group p-5 rounded-2xl border border-slate-200/90 hover:border-trinity-blue/50 bg-slate-50/50 hover:bg-blue-50/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-trinity-blue flex items-center justify-center group-hover:bg-trinity-blue group-hover:text-white transition-colors duration-300">
                              <Newspaper className="w-4 h-4" />
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-trinity-blue group-hover:translate-x-1 transition-all" />
                          </div>
                          <h3 className="text-lg font-bold font-display text-trinity-ink group-hover:text-trinity-blue transition-colors">
                            News & Blogs
                          </h3>
                          <p className="mt-1 text-xs text-trinity-slate leading-relaxed">
                            Latest company updates, press releases, articles, and industry insights.
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-trinity-blue">
                          <span>Read updates</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Smooth Expand/Collapse Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-[#050B16]/95 backdrop-blur-xl text-white border-b border-white/10 shadow-2xl ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100 visible' : 'max-h-0 opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-1 px-6 py-6">
          {navLinks.map((link) => {
            if (link.name === 'About Us') {
              return (
                <div key={link.name} className="border-b border-white/10 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen((open) => !open)}
                    className="w-full flex items-center justify-between text-base font-medium text-white py-2 cursor-pointer"
                    aria-expanded={mobileAboutOpen}
                  >
                    About Us
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      mobileAboutOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pl-3 space-y-1 pt-1">
                      <button
                        type="button"
                        onClick={() => goTo('about')}
                        className="block w-full text-left text-sm font-semibold text-slate-300 hover:text-white py-2 cursor-pointer"
                      >
                        Company overview
                      </button>
                      <button
                        type="button"
                        onClick={() => goTo('team')}
                        className="block w-full text-left text-sm font-semibold text-slate-300 hover:text-white py-2 cursor-pointer"
                      >
                        Our Team
                      </button>
                      <button
                        type="button"
                        onClick={() => goTo('news')}
                        className="block w-full text-left text-sm font-semibold text-trinity-lightBlue py-2 cursor-pointer"
                      >
                        News & Blogs
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-base font-medium text-slate-200 hover:text-white py-2 cursor-pointer"
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
              className="btn-primary w-full text-center cursor-pointer bg-trinity-blue hover:bg-trinity-electric text-white"
            >
              Request a Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
