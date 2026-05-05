import React, { useEffect } from 'react';
import { CompanyPageLayout } from '../../components/CompanyPageLayout';
import { AnimatedSection } from '../../components/AnimatedSection';

export const PartnersPage = () => {
  useEffect(() => {
    document.title = "Partners & Technology Vendors | Blackbox Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Blackbox Labs partner ecosystem — technology integrations, channel partners, and preferred vendor relationships for offensive security engagements.');
  }, []);

  return (
    <CompanyPageLayout 
      title="Partners & Vendors" 
      subtitle="Tools We Trust. Organizations We Work With."
      breadcrumb="Partners"
    >
      <AnimatedSection id="intro" number="02" title="ECOSYSTEM" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <p className="font-mono text-sm text-black/70 leading-relaxed max-w-3xl mb-16">
            Blackbox Labs maintains select partnerships with technology vendors, training organizations, and security platforms whose tools and services align with our standards for operator-grade offensive security.<br/><br/>
            <span className="font-bold text-[#FF4500]">We do not accept paid endorsements. Every tool listed here is used in live engagements by our operators.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            
            {/* Tech Partners */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-8">Technology Partners:</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ COBALT STRIKE ]</span>
                  <span className="text-black/70">C2 framework — red team operations</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ BURP SUITE PRO ]</span>
                  <span className="text-black/70">Web application security testing</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ IDA PRO ]</span>
                  <span className="text-black/70">Binary analysis and disassembly</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ BLOODHOUND ENT. ]</span>
                  <span className="text-black/70">Active Directory attack path mapping</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ VECTR ]</span>
                  <span className="text-black/70">Red team engagement tracking</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ HAVOC C2 ]</span>
                  <span className="text-black/70">Open-source C2 framework</span>
                </div>
              </div>
            </div>

            {/* Training & Platforms */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-8">Training & Certification:</h3>
              <div className="space-y-4 font-mono text-sm mb-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ SANS / GIAC ]</span>
                  <span className="text-black/70">Technical training and certification</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ OFFENSIVE SECURITY ]</span>
                  <span className="text-black/70">OSCP, OSED, OSEP certification</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ ZERO-POINT SEC ]</span>
                  <span className="text-black/70">CRTO — Certified Red Team Operator</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ TCM SECURITY ]</span>
                  <span className="text-black/70">Practical certification courses</span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold mb-8">Platform Integrations:</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ HACKERONE ]</span>
                  <span className="text-black/70">Bug bounty and VDP management</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ BUGCROWD ]</span>
                  <span className="text-black/70">Coordinated disclosure support</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-black/10 pb-4">
                  <span className="font-bold w-48">[ JIRA ]</span>
                  <span className="text-black/70">Engagement tracking and remediation</span>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-black text-white p-8 border border-black/15 shadow-[8px_8px_0_rgba(255,69,0,1)] max-w-2xl">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#FF4500]">Become a Partner:</h3>
            <p className="font-mono text-sm text-white/80 leading-relaxed mb-6">
              We selectively partner with organizations whose tools, training, or platforms add genuine value to our clients and our operators.
            </p>
            <a href="mailto:partners@blackboxlabs.com" className="font-mono text-sm font-bold uppercase tracking-widest text-white hover:text-[#FF4500] transition-colors">
              [ EMAIL: partners@blackboxlabs.com ]
            </a>
          </div>

        </div>
      </AnimatedSection>
    </CompanyPageLayout>
  );
};
