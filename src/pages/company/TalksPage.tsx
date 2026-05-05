import React, { useEffect } from 'react';
import { CompanyPageLayout } from '../../components/CompanyPageLayout';
import { AnimatedSection } from '../../components/AnimatedSection';
import { Link } from 'react-router-dom';

export const TalksPage = () => {
  useEffect(() => {
    document.title = "Published Talks & Research | DEF CON & Black Hat | Blackbox Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Watch and read Blackbox Labs research presentations from DEF CON, Black Hat, and security conferences. Original vulnerability research and offensive security findings.');
  }, []);

  return (
    <CompanyPageLayout 
      title="Published Talks & Research" 
      subtitle="The Work We Do In Public"
      breadcrumb="Talks"
    >
      <AnimatedSection id="intro" number="02" title="ARCHIVE" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <p className="font-mono text-sm text-white/70 leading-relaxed max-w-3xl mb-16">
            Blackbox Labs researchers publish original research at the world's top security conferences. Below is our archive of published talks, slides, tools, and associated CVE disclosures.<br/><br/>
            All conference research is published under responsible disclosure — affected vendors are notified and patched before any public presentation.
          </p>

          <div className="space-y-12">
            
            {/* DEF CON */}
            <div className="bg-[#111] border border-white/15 p-8 hover:border-[#FF4500] transition-colors group">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-4">DEF CON 2024</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">"Breaking the Fortress: Supply Chain Vulnerabilities in Enterprise Network Appliances"</h3>
              <div className="font-mono text-xs text-white/60 mb-6">Ghost + Vex · Las Vegas, August 2024</div>
              <p className="font-mono text-sm text-white/70 mb-8">
                6 previously unknown vulnerabilities disclosed. 4 CVEs filed. Full vendor coordination completed.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                <a href="/slides/defcon-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ SLIDES ]</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ VIDEO ]</a>
                <Link to="/threat-intel" className="text-white hover:text-[#FF4500] transition-colors">[ CVE ADVISORIES ]</Link>
                <a href="/research/defcon-2024-paper.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ PAPER ]</a>
              </div>
            </div>

            {/* BLACK HAT */}
            <div className="bg-[#111] border border-white/15 p-8 hover:border-[#FF4500] transition-colors group">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-4">BLACK HAT ARSENAL 2024</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Tool Release: [Internal Firmware Analysis Framework]</h3>
              <div className="font-mono text-xs text-white/50 mb-6">Null · Las Vegas, August 2024</div>
              <p className="font-mono text-sm text-white/70 mb-8">
                Open-source tool for automated firmware extraction and analysis of embedded Linux systems.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                <a href="https://github.com/blackboxlabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ GITHUB ]</a>
                <a href="https://github.com/blackboxlabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ DOCUMENTATION ]</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ DEMO VIDEO ]</a>
              </div>
            </div>

            {/* BSIDES */}
            <div className="bg-[#111] border border-white/15 p-8 hover:border-[#FF4500] transition-colors group">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-4">BSIDES LONDON 2024</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">"IDOR at Scale: How We Extracted 2.3M Records From a SaaS Platform in 47 Minutes"</h3>
              <div className="font-mono text-xs text-white/50 mb-6">Null · London, June 2024</div>
              <p className="font-mono text-sm text-white/70 mb-8">
                Full case study with vendor coordination timeline.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                <a href="/slides/bsides-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">[ SLIDES ]</a>
                <Link to="/threat-intel" className="text-white hover:text-[#FF4500] transition-colors">[ WRITEUP ]</Link>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="more" number="03" title="PUBLICATIONS" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h3 className="font-display text-3xl font-bold mb-8">Research Publications:</h3>
          <div className="flex flex-col gap-4 font-mono text-sm font-bold uppercase tracking-widest">
            <Link to="/advisories" className="text-black hover:text-[#FF4500] transition-colors w-fit">[ → VIEW ALL CVE ADVISORIES ]</Link>
            <Link to="/threat-intel" className="text-black hover:text-[#FF4500] transition-colors w-fit">[ → THREAT INTEL BLOG ]</Link>
            <Link to="/research" className="text-black hover:text-[#FF4500] transition-colors w-fit">[ → ANNUAL THREAT REPORT 2025 ]</Link>
            <a href="https://github.com/blackboxlabs" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#FF4500] transition-colors w-fit">[ → GITHUB — OPEN SOURCE TOOLS ]</a>
          </div>
        </div>
      </AnimatedSection>
    </CompanyPageLayout>
  );
};
