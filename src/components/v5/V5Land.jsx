import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import V5Loader from './V5Loader';
import V5Header from './V5Header';
import V5Hero from './V5Hero';
import V5About from './V5About';
import V5Services from './V5Services';
import V5Empower from './V5Empower';
import V5Process from './V5Process';
import V5Enterprise from './V5Enterprise';
import V5Tech from './V5Tech';
import V5Careers from './V5Careers';
import V5Contact from './V5Contact';
import V5Trusted from './V5Trusted';
import V5Footer from './V5Footer';
import V5Cursor from './V5Cursor';

export default function V5Land() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('v5ScrollPos', window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Restore on mount instantly without smooth-scroll animation
    const savedScroll = sessionStorage.getItem('v5ScrollPos');
    if (savedScroll) {
      const rootHtml = document.documentElement;
      const originalScrollBehavior = rootHtml.style.scrollBehavior;
      rootHtml.style.scrollBehavior = 'auto';

      window.scrollTo({
        top: parseInt(savedScroll, 10),
        behavior: 'instant'
      });

      setTimeout(() => {
        rootHtml.style.scrollBehavior = originalScrollBehavior;
      }, 100);

      sessionStorage.removeItem('v5ScrollPos');
    }
    
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const [loadingComplete, setLoadingComplete] = useState(() => {
    return sessionStorage.getItem('v5LoaderComplete') === 'true';
  });

  const handleComplete = () => {
    setLoadingComplete(true);
    sessionStorage.setItem('v5LoaderComplete', 'true');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Zansphere - Scalable Apps & Enterprise IT</title>
        <meta name="description" content="Zansphere — Engineering scalable digital ecosystems, custom software development, cloud, AI, and enterprise solutions." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          ::selection {
            background: #e5e7eb;
            color: #111827;
          }
        `}</style>
      </Helmet>

      <V5Cursor />

      {!loadingComplete && <V5Loader onComplete={handleComplete} />}

      {/* Render content only after loading starts, but keep it in DOM for SEO/refs */}
      <div style={{ opacity: loadingComplete ? 1 : 0, transition: 'opacity 1s ease' }}>
        <V5Header />
        <V5Hero />
        <V5About />
        <V5Services />
        <V5Empower />
        <V5Process />
        <V5Enterprise />
        <V5Tech />
        <V5Careers />
        <V5Contact />
        <V5Trusted />
        <V5Footer />
      </div>
    </div>
  );
}
