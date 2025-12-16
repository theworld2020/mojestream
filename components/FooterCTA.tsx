import React from 'react';
import { PlayStoreIcon } from './Icons';
import { PLAY_STORE_LINK } from '../constants';

const FooterCTA: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 via-teal-600 to-purple-600 px-6 py-12 md:px-12 md:py-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl">
        
        <div className="relative z-10 mb-8 md:mb-0 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Sharing?</h2>
          <p className="text-teal-100 text-lg max-w-lg">
            Download Mojestream for free on the Google Play Store and join the community.
          </p>
        </div>

        <div className="relative z-10">
          <a 
            href={PLAY_STORE_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all shadow-lg transform hover:scale-105"
          >
            <PlayStoreIcon className="w-6 h-6" />
            <span>Download Now</span>
          </a>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-black/10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default FooterCTA;