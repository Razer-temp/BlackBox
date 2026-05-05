import React, { useEffect } from 'react';
import { CompanyPageLayout } from '../../components/CompanyPageLayout';
import { AnimatedSection } from '../../components/AnimatedSection';

export const PressPage = () => {
  useEffect(() => {
    document.title = "Press & Media Kit | Blackbox Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Media resources for Blackbox Labs — press coverage, expert commentary, logos, executive bios, and research citations.');
  }, []);

  return (
    <CompanyPageLayout 
      title="Press & Media Kit" 
      subtitle="For Journalists, Analysts & Researchers"
      breadcrumb="Press"
    >
      <AnimatedSection id="intro" number="02" title="OVERVIEW" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <p className="font-mono text-sm text-black/70 leading-relaxed max-w-3xl mb-16">
            Blackbox Labs is an elite offensive security firm specializing in red team operations, vulnerability research, and adversary simulation. Our researchers are regularly cited in major cybersecurity publications and available for expert commentary on breaking vulnerabilities, threat actor activity, and defensive strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Expert Commentary Available On:</h3>
              <ul className="space-y-3 font-mono text-xs text-black/70">
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Active CVE exploitation and vulnerability analysis</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Nation-state threat actor TTPs</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Red team vs. penetration test — what's the difference</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Cloud security misconfiguration trends</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> AI-enhanced social engineering and deepfake attacks</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Ransomware group tactics and initial access vectors</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> CISO security program maturity</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Specific CVE technical analysis (24hr turnaround)</li>
              </ul>
            </div>

            <div className="bg-black text-white p-8 border border-black/15 shadow-[8px_8px_0_rgba(255,69,0,1)]">
              <h3 className="font-display text-2xl font-bold mb-6 text-[#FF4500]">Media Contact:</h3>
              <div className="space-y-4 font-mono text-sm text-white/80">
                <p><span className="text-white/60 w-24 inline-block">Email:</span> <a href="mailto:press@blackboxlabs.com" className="text-[#FF4500] hover:underline">press@blackboxlabs.com</a></p>
                <p><span className="text-white/50 w-24 inline-block">Response:</span> Within 4 hours for breaking news</p>
                <p><span className="text-white/50 w-24 inline-block">Embargoed:</span> press@blackboxlabs.com + <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc" className="hover:text-white">PGP</a></p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="resources" number="03" title="RESOURCES" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Downloads:</h3>
              <div className="flex flex-col gap-4 font-mono text-xs">
                <a href="/press/logo-package.zip" download="blackboxlabs-logo-package.zip" className="bg-[#111] border border-white/15 p-4 hover:border-[#FF4500] transition-colors flex justify-between items-center group">
                  <span>[ LOGO PACKAGE (SVG/PNG) ]</span>
                  <span className="text-white/60 group-hover:text-[#FF4500]">↓</span>
                </a>
                <a href="/press/ghost-bio.pdf" download="ghost-bio.pdf" className="bg-[#111] border border-white/15 p-4 hover:border-[#FF4500] transition-colors flex justify-between items-center group">
                  <span>[ EXECUTIVE BIO — Ghost, Founder ]</span>
                  <span className="text-white/60 group-hover:text-[#FF4500]">↓</span>
                </a>
                <a href="/press/company-fact-sheet.pdf" download="blackboxlabs-fact-sheet.pdf" className="bg-[#111] border border-white/15 p-4 hover:border-[#FF4500] transition-colors flex justify-between items-center group">
                  <span>[ COMPANY FACT SHEET ]</span>
                  <span className="text-white/60 group-hover:text-[#FF4500]">↓</span>
                </a>
                <a href="/press/research-citations-guide.pdf" download="research-citations-guide.pdf" className="bg-[#111] border border-white/15 p-4 hover:border-[#FF4500] transition-colors flex justify-between items-center group">
                  <span>[ RESEARCH CITATIONS GUIDE ]</span>
                  <span className="text-white/60 group-hover:text-[#FF4500]">↓</span>
                </a>
                <a href="/press/brand-guidelines.pdf" download="blackboxlabs-brand-guidelines.pdf" className="bg-[#111] border border-white/15 p-4 hover:border-[#FF4500] transition-colors flex justify-between items-center group">
                  <span>[ BRAND GUIDELINES ]</span>
                  <span className="text-white/60 group-hover:text-[#FF4500]">↓</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Executive Bios (Brief):</h3>
              <div className="space-y-6 font-mono text-sm">
                <div>
                  <div className="text-[#FF4500] font-bold">Ghost</div>
                  <div className="text-white/50 text-xs mb-2">Founder & Lead Red Team Operator</div>
                </div>
                <div>
                  <div className="text-[#FF4500] font-bold">Vex</div>
                  <div className="text-white/50 text-xs mb-2">Exploit Developer & Vulnerability Research Lead</div>
                </div>
                <div>
                  <div className="text-[#FF4500] font-bold">Siren</div>
                  <div className="text-white/50 text-xs mb-2">Social Engineering Practice Lead</div>
                </div>
                <div>
                  <div className="text-[#FF4500] font-bold">Null</div>
                  <div className="text-white/50 text-xs mb-2">Cloud & AppSec Research Lead</div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/15">
            <h3 className="font-display text-xl font-bold mb-4">Usage Guidelines:</h3>
            <ul className="space-y-2 font-mono text-xs text-white/50">
              <li>▸ Logos may be used in editorial coverage of Blackbox Labs</li>
              <li>▸ Not for advertising or endorsement without written consent</li>
              <li>▸ Research citations must link to original advisory or publication</li>
              <li>▸ Quotes require approval before publication</li>
            </ul>
          </div>

        </div>
      </AnimatedSection>
    </CompanyPageLayout>
  );
};
