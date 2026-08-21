import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import logo from '../../images/zanSphereLogo.png';

export default function V5Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-50 border-t border-slate-200 py-16 md:py-24">
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
            <Link 
              to="/privacy" 
              onClick={() => sessionStorage.setItem('v5ScrollPos', window.scrollY)} 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              onClick={() => sessionStorage.setItem('v5ScrollPos', window.scrollY)} 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookie" 
              onClick={() => sessionStorage.setItem('v5ScrollPos', window.scrollY)} 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Cookie Policy
            </Link>
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
            <a href="https://www.linkedin.com/company/zansphere" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Zansphere" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
