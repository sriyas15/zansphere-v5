import React from 'react';
import logo from '../../images/zanSphereLogo.png';

export default function V5Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Logo Column */}
          <div className="md:col-span-1 flex flex-col items-start">
            <img src={logo} alt="Zansphere" className="h-8 object-contain filter brightness-0 mb-8" />
            <p className="text-sm text-gray-400 font-medium">
              Architecting digital ecosystems that scale with your ambition.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Company</h4>
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Capabilities</a>
            <a href="#process" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Methodology</a>
            <a href="#careers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Careers</a>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Legal</h4>
            <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="/cookie" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cookie Policy</a>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Services</h4>
            <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Custom Development</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Web Applications</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Mobile Applications</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cloud Solutions</a>
          </div>
          
        </div>

        <div className="w-full h-px bg-gray-100 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-medium">
            © {currentYear} Zansphere. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-900 uppercase tracking-wider font-bold transition-colors">Twitter</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-900 uppercase tracking-wider font-bold transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-900 uppercase tracking-wider font-bold transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
