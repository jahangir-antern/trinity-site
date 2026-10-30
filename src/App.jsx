import React, { useState, useEffect } from 'react';
import VersionOne from './pages/VersionOne';
import AboutUsPage from './pages/AboutUsPage';
import TeamPage from './pages/TeamPage';
import DemoModal from './components/DemoModal';
import GoTopButton from './components/GoTopButton';

function readRoute() {
  if (typeof window === 'undefined') return { page: 'home' };
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const hash = window.location.hash;
  let page = 'home';
  if (pageParam === 'team' || hash === '#our-team') page = 'team';
  else if (pageParam === 'about' || hash === '#about' || hash === '#about-us') page = 'about';
  return { page };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => readRoute().page);

  // Keep browser URL, back/forward history, and hash synced with page state
  useEffect(() => {
    const handlePopState = () => {
      const route = readRoute();
      setCurrentPage(route.page);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('v');
      url.hash = '';
      if (page === 'about' || page === 'team') {
        url.searchParams.set('page', page);
        url.searchParams.delete('group');
        window.history.pushState({}, '', url);
      } else {
        url.searchParams.delete('page');
        url.searchParams.delete('group');
        window.history.pushState({}, '', url);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
