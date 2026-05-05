import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface CompanyPageLayoutProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  children: React.ReactNode;
}

export const CompanyPageLayout: React.FC<CompanyPageLayoutProps> = ({ title, subtitle, breadcrumb, children }) => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-24">
      
      {/* HERO SECTION */}
      <AnimatedSection id="hero" number="01" title="COMPANY" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Company</span>
            <span>/</span>
            <span className="text-[#FF4500]">{breadcrumb}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            {title}
          </h1>

          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight text-[#FF4500]">
              {subtitle}
            </h2>
          </div>
        </div>
      </AnimatedSection>

      {/* MAIN CONTENT */}
      {children}

    </div>
  );
};
