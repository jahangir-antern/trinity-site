import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      // Show button after scrolling down 240px
      if (currentScroll > 240) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page loaded scrolled down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed right-6 bottom-6 md:right-8 md:bottom-8 z-40 w-11 h-11 rounded-full bg-slate-950/90 hover:bg-trinity-blue text-slate-200 hover:text-white border border-slate-700/80 hover:border-trinity-lightBlue shadow-xl shadow-black/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-trinity-lightBlue/50 select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100 hover:scale-105 active:scale-95'
          : 'opacity-0 translate-y-4 pointer-events-none scale-90'
      }`}
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
