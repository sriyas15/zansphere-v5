import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../../images/zanSphereLogo.png';

export default function V5Header() {
  const { scrollY } = useScroll();
  const [isPill, setIsPill] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious();
      
      if (latest < 50) {
        // Always full width at the very top
        setIsPill(false);
      } else {
        // Scrolling down -> pill (comes together)
        // Scrolling up -> full width (moves outwards)
        if (latest > previous) {
          setIsPill(true);
        } else {
          setIsPill(false);
        }
      }
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'Services', target: 'services' },
    { name: 'Process', target: 'process' },
    { name: 'Careers', target: 'careers' },
  ];

  const handleScroll = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6 md:px-12 pointer-events-none flex justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          maxWidth: isPill ? '900px' : '1400px',
          backgroundColor: isPill ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)',
          borderColor: isPill ? 'rgba(229, 231, 235, 0.5)' : 'rgba(255, 255, 255, 0)',
          paddingLeft: isPill ? '1.5rem' : '0rem',
          paddingRight: isPill ? '1.5rem' : '0rem',
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between w-full py-4 rounded-full border backdrop-blur-xl"
        style={{
          boxShadow: isPill ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'
        }}
      >
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center transition-transform hover:scale-105"
        >
          <img src={logo} alt="Zansphere" className="h-6 md:h-8 object-contain filter brightness-0" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.target}`}
              className="text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button (Minimal) */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-gray-900" />
          <div className="w-4 h-0.5 bg-gray-900 ml-auto" />
        </button>
      </motion.div>
    </header>
  );
}
