import React from 'react';
import { LegalPageLayout } from '../../components/LegalPageLayout';

export const NDAPage = () => {
  const toc = [
    { id: "covers", label: "What Our Standard NDA Covers" },
    { id: "terms", label: "Standard NDA Terms" },
    { id: "process", label: "Process" },
    { id: "download", label: "Download" }
  ];

  return (
    <LegalPageLayout title="NDA Framework" lastUpdated="April 8, 2025" toc={toc}>
      <h2 className="text-3xl font-display font-bold uppercase mb-6 text-[#FF4500]">Every Engagement Starts With Confidentiality</h2>
      <p className="lead text-xl font-sans text-white/90 mb-8">
        Before any scoping conversation, technical briefing, or engagement commences, Blackbox Labs executes a mutual Non-Disclosure Agreement with every client.
      </p>
      <p>
        This is not a formality. Our operators have access to your most sensitive systems, your crown jewels, and your most critical vulnerabilities. Confidentiality is the foundation of everything we do.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="covers" className="text-2xl mt-12 mb-6">1. What Our Standard NDA Covers</h2>
      <ul>
        <li>All information shared during the scoping process</li>
        <li>All findings, reports, and engagement deliverables</li>
        <li>All client system architecture and security posture data</li>
        <li>All vulnerability information discovered during testing</li>
        <li>Client identity (we do not disclose client names without explicit written permission)</li>
        <li>All communications between Blackbox Labs and client</li>
      </ul>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="terms" className="text-2xl mt-12 mb-6">2. Standard NDA Terms</h2>
      <div className="bg-[#111] border border-white/15 p-6 mb-8 font-mono text-sm">
        <p className="mb-3"><span className="text-white/60 w-32 inline-block">DURATION:</span> 5 years from engagement completion</p>
        <p className="mb-3"><span className="text-white/60 w-32 inline-block">MUTUAL:</span> Yes — covers both parties</p>
        <p className="mb-3"><span className="text-white/60 w-32 inline-block">JURISDICTION:</span> [State], United States</p>
        <p className="mb-3 flex"><span className="text-white/60 w-32 shrink-0 inline-block">CARVE-OUTS:</span> <span>Publicly available information, information independently developed, legally required disclosures</span></p>
        <p><span className="text-white/60 w-32 inline-block">SURVIVAL:</span> NDA obligations survive engagement end</p>
      </div>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="process" className="text-2xl mt-12 mb-6">3. Process</h2>
      <ol className="font-mono text-sm space-y-4 list-decimal pl-5">
        <li>Client expresses interest in an engagement</li>
        <li>We send our standard mutual NDA (or accept a client NDA — we review within 48hrs)</li>
        <li>NDA executed digitally</li>
        <li>Scoping conversation commences</li>
      </ol>

      <p className="mt-8">If you need a custom NDA or have specific confidentiality requirements, contact: <a href="mailto:legal@blackboxlabs.com">legal@blackboxlabs.com</a></p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="download" className="text-2xl mt-12 mb-6">4. Download</h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a href="/blackbox-labs-nda.pdf" download="blackbox-labs-nda.pdf" className="inline-block bg-[#FF4500] text-white px-6 py-3 font-mono text-sm font-bold hover:bg-white hover:text-black transition-colors text-center">
          [ DOWNLOAD STANDARD NDA TEMPLATE (PDF) ]
        </a>
        <a href="mailto:legal@blackboxlabs.com" className="inline-block bg-white/5 border border-white/20 px-6 py-3 font-mono text-sm hover:bg-white/10 transition-colors text-center">
          [ REQUEST NDA REVIEW ]
        </a>
      </div>

    </LegalPageLayout>
  );
};
