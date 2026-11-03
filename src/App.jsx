import React, { useState, useEffect } from 'react';
import VersionOne from './pages/VersionOne';
import AboutUsPage from './pages/AboutUsPage';
import TeamPage from './pages/TeamPage';
import NewsBlogsPage from './pages/NewsBlogsPage';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';
import DemoModal from './components/DemoModal';
import GoTopButton from './components/GoTopButton';

function readRoute() {
  if (typeof window === 'undefined') return { page: 'home' };
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const hash = window.location.hash;
  
  let pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  pathname = pathname.replace(/^\/trinity-site/, '').replace(/^\//, '');

  if (pageParam === 'about' || hash === '#about' || hash === '#about-us' || pathname === 'about') return { page: 'about' };
  if (pageParam === 'team' || hash === '#our-team' || hash === '#team' || hash === '#leadership-team' || hash === '#board-of-directors' || pathname === 'team') return { page: 'team' };
  if (pageParam === 'news' || pageParam === 'blogs' || hash === '#news' || hash === '#blogs' || hash === '#news-blogs' || pathname === 'news') return { page: 'news' };
  if (pageParam === 'careers' || hash === '#careers' || pathname === 'careers') return { page: 'careers' };
  if (pageParam === 'contact' || hash === '#contact' || hash === '#contact-us' || pathname === 'contact') return { page: 'contact' };
  return { page: 'home' };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => readRoute().page);

  // Keep browser URL, back/forward history, and hash synced with page state
  useEffect(() => {
    const handlePopState = () => {
      const route = readRoute();
      setCurrentPage(route.page);
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page, options) => {
    const sectionId = typeof options === 'string' ? options : options?.sectionId;
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
      const path = page === 'home' ? (base || '/') : `${base}/${page}`;
      const url = new URL(window.location.href);
      url.pathname = path;
      url.searchParams.delete('page');
      url.searchParams.delete('group');
      url.searchParams.delete('v');
      if (sectionId) {
        url.hash = `#${sectionId}`;
      } else {
        url.hash = '';
      }

      window.history.pushState({ page, sectionId }, '', url);

      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  };

  useEffect(() => {
    const faviconHref = '/favicon.ico';
    let iconLink = document.querySelector("link[rel~='icon']");
    if (!iconLink) {
      iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      document.head.appendChild(iconLink);
    }
    iconLink.href = faviconHref;
  }, []);

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState('General Inquiry');

  const handleOpenDemoModal = (productName = 'General Inquiry') => {
    setSelectedProductForDemo(productName);
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <>
      {currentPage === 'about' ? (
        <AboutUsPage
          onNavigate={handleNavigate}
          onRequestDemo={handleOpenDemoModal}
        />
      ) : currentPage === 'team' ? (
        <TeamPage
          onNavigate={handleNavigate}
          onRequestDemo={handleOpenDemoModal}
        />
      ) : currentPage === 'news' ? (
        <NewsBlogsPage
          onNavigate={handleNavigate}
          onRequestDemo={handleOpenDemoModal}
        />
      ) : currentPage === 'careers' ? (
        <CareersPage
          onNavigate={handleNavigate}
          onRequestDemo={handleOpenDemoModal}
        />
      ) : currentPage === 'contact' ? (
        <ContactUsPage
          onNavigate={handleNavigate}
          onRequestDemo={handleOpenDemoModal}
        />
      ) : (
        <VersionOne onNavigate={handleNavigate} onRequestDemo={handleOpenDemoModal} />
      )}

      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemoModal}
        preselectedProduct={selectedProductForDemo}
      />

      <GoTopButton />
    </>
  );
}
