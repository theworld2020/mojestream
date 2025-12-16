import React from 'react';

const Privacy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 bg-surface/20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Your Privacy, Our Priority</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We believe your data is yours alone. Mojestream is built on a foundation of security and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Visual */}
          <div className="bg-gradient-to-br from-teal-900/40 to-slate-900 border border-white/5 rounded-3xl p-8 lg:p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden group">
            {/* Abstract Lock Representation */}
            <div className="relative z-10 w-48 h-48">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="1" fill="rgba(13, 148, 136, 0.2)" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="1.5" />
                    <circle cx="12" cy="16.5" r="2" fill="currentColor" />
                 </svg>
            </div>
            <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-8">
                <h3 className="text-white font-bold text-xl mb-1">End-to-End Encryption</h3>
                <p className="text-slate-400 text-sm">Your content is secured from moment one.</p>
            </div>
          </div>

          {/* Card 2: No Data Tracking */}
          <div className="bg-[#050911] border border-white/5 rounded-3xl p-8 lg:p-12 min-h-[300px] flex flex-col justify-end relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-white">No Data Tracking</h3>
                <p className="text-slate-400 leading-relaxed">
                    We don't track your activity or sell your data. Ever. Mojestream operates with a strict no-logs policy to ensure your browsing habits remain private.
                </p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Privacy;