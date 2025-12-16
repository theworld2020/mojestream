import React, { useState } from 'react';
import { LogoIcon, PlayStoreIcon } from './Icons';
import { PLAY_STORE_LINK, ROUTE_HOME, ROUTE_PRIVACY_POLICY, ROUTE_CSAE_POLICY, COMPANY_NAME, LOGO_URL } from '../constants';

interface NavbarProps {
  onNavigate: (route: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Links to Home */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavClick(ROUTE_HOME); }}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 flex items-center justify-center">
                {LOGO_URL ? (
                  <img src={LOGO_URL} alt={COMPANY_NAME} className="w-full h-full object-contain" />
                ) : (
                  <LogoIcon className="w-full h-full" />
                )}
            </div>
            <span className="font-bold text-xl tracking-tight text-white">{COMPANY_NAME}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick(ROUTE_PRIVACY_POLICY)} 
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleNavClick(ROUTE_CSAE_POLICY)} 
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors focus:outline-none"
            >
              CSAE Policy
            </button>
            
            <a 
              href={PLAY_STORE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-teal-500/25"
            >
              <PlayStoreIcon className="w-5 h-5" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-b border-white/5 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavClick(ROUTE_PRIVACY_POLICY)} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleNavClick(ROUTE_CSAE_POLICY)} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              CSAE Policy
            </button>
            <a href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-teal-600 text-white">
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;