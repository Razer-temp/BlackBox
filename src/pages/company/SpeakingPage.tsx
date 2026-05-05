import React, { useEffect } from 'react';
import { CompanyPageLayout } from '../../components/CompanyPageLayout';
import { AnimatedSection } from '../../components/AnimatedSection';

export const SpeakingPage = () => {
  useEffect(() => {
    document.title = "Speaking Engagements | Blackbox Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Book Blackbox Labs researchers for conference talks, executive briefings, CISO workshops, and board-level cybersecurity presentations.');
  }, []);

  return (
    <CompanyPageLayout 
      title="Speaking Engagements" 
      subtitle="Technical Depth. No Vendor Pitch. Ever."
      breadcrumb="Speaking"
    >
      <AnimatedSection id="intro" number="02" title="OVERVIEW" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="font-mono text-sm text-black/70 leading-relaxed mb-6">
                Blackbox Labs researchers speak at major security conferences, CISO roundtables, board-level executive briefings, and sector-specific security summits.
              </p>
              <p className="font-mono text-sm text-black/70 leading-relaxed">
                Our talks are technical, original, and based entirely on real engagement data — not marketing slides. We do not pitch our services from the stage. We share what we've found, what it means, and what defenders need to do about it.
              </p>
            </div>
            
            <div className="bg-black text-white p-8 border border-black/15 shadow-[8px_8px_0_rgba(255,69,0,1)]">
              <h3 className="font-display text-2xl font-bold mb-6 text-[#FF4500]">Booking:</h3>
              <div className="space-y-4 font-mono text-sm text-white/80">
                <p><span className="text-white/60 w-24 inline-block">Email:</span> <a href="mailto:speaking@blackboxlabs.com" className="text-[#FF4500] hover:underline">speaking@blackboxlabs.com</a></p>
                <p className="pt-4 border-t border-white/10 text-xs text-white/50">
                  Include: event name, date, audience size, topic interest, honorarium budget (if applicable)
                </p>
                <p className="text-xs text-white/50">
                  Minimum 8 weeks lead time for conference slots. 2 weeks for executive briefings.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-display text-3xl font-bold mb-8">Formats Available:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-black/15 p-6 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-2">45–60 MIN</div>
              <h4 className="font-display text-xl font-bold mb-4">CONFERENCE TALKS</h4>
              <p className="font-mono text-xs text-black/70">Original research presentations at DEF CON, Black Hat, BSides events, sector conferences. Includes full Q&A.</p>
            </div>
            <div className="bg-white border border-black/15 p-6 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-2">60–90 MIN</div>
              <h4 className="font-display text-xl font-bold mb-4">CISO EXECUTIVE BRIEFINGS</h4>
              <p className="font-mono text-xs text-black/70">Private, NDA-protected briefings for security leadership on active threat intelligence, red team findings trends, and strategic guidance.</p>
            </div>
            <div className="bg-white border border-black/15 p-6 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-2">30–45 MIN</div>
              <h4 className="font-display text-xl font-bold mb-4">BOARD-LEVEL PRESENTATIONS</h4>
              <p className="font-mono text-xs text-black/70">Non-technical cyber risk briefings for boards and executive leadership. Translates technical risk into business impact. No jargon.</p>
            </div>
            <div className="bg-white border border-black/15 p-6 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-2">HALF/FULL DAY</div>
              <h4 className="font-display text-xl font-bold mb-4">WORKSHOPS & TRAINING</h4>
              <p className="font-mono text-xs text-black/70">Hands-on technical workshops for security teams: Active Directory attack simulation, cloud security misconfiguration labs, social engineering awareness.</p>
            </div>
            <div className="bg-white border border-black/15 p-6 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-2">VARIABLE</div>
              <h4 className="font-display text-xl font-bold mb-4">PANEL PARTICIPATION</h4>
              <p className="font-mono text-xs text-black/70">Available for moderated panel discussions on offensive security, threat intelligence, regulatory compliance, and CISO priorities.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="topics" number="03" title="TOPICS" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-3xl font-bold mb-8">Topic Areas:</h3>
              <ul className="space-y-4 font-mono text-sm text-white/70">
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Red Team vs. Penetration Testing — what boards get wrong</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Nation-state TTPs in 2025 — what's changed</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> AI-enhanced social engineering — the new attack surface</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Cloud misconfiguration attack chains — live demonstration</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Active Directory: why it's still the most targeted asset</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> The vulnerability disclosure crisis — 50,000 CVEs and counting</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> CISO survival guide — building a red team program</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Ransomware economics — what the attack chain looks like</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> [Custom topic developed with event organizers]</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-3xl font-bold mb-8">Past Speaking Venues:</h3>
              <div className="flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-widest">
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">DEF CON 2024</span>
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">Black Hat Arsenal 2024</span>
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">BSides London</span>
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">Financial CISO Summit</span>
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">Healthcare Security Summit</span>
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">ISACA Conference</span>
                <span className="px-3 py-2 border border-white/20 text-white bg-white/5">Cloud Security Alliance Summit</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </CompanyPageLayout>
  );
};
