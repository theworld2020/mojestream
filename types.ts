import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface NavLink {
  label: string;
  href: string;
}