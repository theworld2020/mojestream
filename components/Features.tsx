import React from 'react';
import { UploadIcon, GlobeIcon, NoLoginIcon, ShieldCheckIcon, ShareIcon, SettingsIcon } from './Icons';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Effortless Uploads",
    description: "Share your videos in seconds with our intuitive uploader. No complicated settings, just pure creativity.",
    icon: UploadIcon,
  },
  {
    title: "Global Reach",
    description: "Connect with a worldwide community of creators and viewers. Your content knows no borders.",
    icon: GlobeIcon,
  },
  {
    title: "No Login Required",
    description: "Jump right in without creating an account. Your privacy comes first. Just install and start watching.",
    icon: NoLoginIcon,
  },
  {
    title: "Safe & Secure",
    description: "Enjoy peace of mind with our commitment to protecting your data and industry-standard encryption.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Watch & Share",
    description: "Discover trending content and share your favorite videos easily across all social platforms.",
    icon: ShareIcon,
  },
  {
    title: "Powerful Tools",
    description: "Unleash your creativity with our built-in editing features designed for mobile creators.",
    icon: SettingsIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Why You'll Love Mojestream</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Discover a platform built for creators who value simplicity, speed, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-surface hover:bg-slate-700 border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;