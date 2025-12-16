import React from 'react';

interface PhoneMockupProps {
  src: string;
  className?: string;
  alt?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ src, className = "", alt = "App Screenshot" }) => {
  return (
    <div className={`relative mx-auto border-black bg-black border-[10px] rounded-[2.5rem] h-[500px] w-[260px] shadow-2xl flex flex-col justify-center items-center overflow-hidden ring-1 ring-white/20 ${className}`}>
      {/* Notch */}
      <div className="h-[24px] w-[120px] bg-black absolute top-0 rounded-b-xl z-20"></div>
      
      {/* Side buttons */}
      <div className="h-[46px] w-[3px] bg-black absolute -left-[12px] top-[100px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-black absolute -left-[12px] top-[160px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-black absolute -right-[12px] top-[120px] rounded-r-lg"></div>

      {/* Screen content */}
      <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-slate-800 relative z-10">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default PhoneMockup;