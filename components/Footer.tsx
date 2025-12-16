import React from 'react';
import { LogoIcon } from './Icons';
import { COMPANY_NAME, COPYRIGHT_YEAR, ROUTE_PRIVACY_POLICY, ROUTE_CSAE_POLICY, LOGO_URL } from '../constants';

interface FooterProps {
  onNavigate: (route: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-background pt-10 border-t border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 mt-8">
            
            {/* Brand */}
            <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-8 h-8 flex items-center justify-center">
                    {LOGO_URL ? (
                      <img src={LOGO_URL} alt={COMPANY_NAME} className="w-full h-full object-contain" />
                    ) : (
                      <LogoIcon className="w-full h-full" />
                    )}
                </div>
                <span className="text-xl font-bold text-white">{COMPANY_NAME}</span>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-right">
                <button 
                  onClick={() => onNavigate(ROUTE_PRIVACY_POLICY)} 
                  className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => onNavigate(ROUTE_CSAE_POLICY)} 
                  className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none"
                >
                  CSAE Policy
                </button>
            </div>
        </div>

        <div className="text-center md:text-left mt-8 text-xs text-slate-600">
            © {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;