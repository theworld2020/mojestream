import React from 'react';
import PhoneMockup from './PhoneMockup';
import { APP_SCREENSHOTS } from '../constants';

const Screenshots: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Glimpse Inside</h2>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Scroll on Mobile, Grid on Desktop - All aligned perfectly */}
        <div className="flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-4 gap-8 pb-12 px-4 snap-x snap-mandatory hide-scrollbar justify-start lg:justify-center items-center">
           
           <div className="snap-center shrink-0">
             <PhoneMockup src={APP_SCREENSHOTS[0]} className="h-[480px] w-[240px]" alt="Feed view" />
           </div>
           
           <div className="snap-center shrink-0">
             <PhoneMockup src={APP_SCREENSHOTS[1]} className="h-[480px] w-[240px]" alt="Profile view" />
           </div>
           
           <div className="snap-center shrink-0">
             <PhoneMockup src={APP_SCREENSHOTS[2]} className="h-[480px] w-[240px]" alt="Upload view" />
           </div>
           
           <div className="snap-center shrink-0">
             <PhoneMockup src={APP_SCREENSHOTS[3]} className="h-[480px] w-[240px]" alt="Settings view" />
           </div>

        </div>
      </div>
      
      {/* Decorative gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Screenshots;