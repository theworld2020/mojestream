import React from 'react';
import PhoneMockup from './PhoneMockup';
import { PLAY_STORE_LINK, HERO_SCREENSHOT } from '../constants';
import { PlayStoreIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Create & Share <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">Videos.</span> <br/>
              Your Privacy, <br/>
              Guaranteed.
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The simple, secure way to share your moments with the world. 
              No login required. Seamless uploads. Total control over your data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={PLAY_STORE_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <PlayStoreIcon className="w-6 h-6" />
                <span>Download App</span>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup on Card */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
             {/* The Pink Background Card - Responsive width to prevent overflow */}
            <div className="relative w-[90vw] max-w-[320px] h-auto aspect-[320/580] sm:w-[380px] sm:aspect-[380/640] bg-[#FADAD1] rounded-[2.5rem] sm:rounded-[3rem] transform rotate-3 flex items-center justify-center shadow-2xl">
                {/* Phone Component - Scale transform to fit inside the responsive card */}
                <div className="transform -rotate-3 scale-[0.85] sm:scale-100">
                   <PhoneMockup 
                    src={HERO_SCREENSHOT} 
                    className="h-[520px] w-[260px] sm:h-[580px] sm:w-[290px]"
                    alt="Mojestream App Home Screen"
                   />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;