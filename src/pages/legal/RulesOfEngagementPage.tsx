import React from 'react';
import { LegalPageLayout } from '../../components/LegalPageLayout';

export const RulesOfEngagementPage = () => {
  const toc = [
    { id: "defines", label: "What Every ROE Defines" },
    { id: "never-do", label: "What We Will Never Do" },
    { id: "emergency", label: "Emergency Stop Procedure" }
  ];

  return (
    <LegalPageLayout title="Rules of Engagement Policy" lastUpdated="April 8, 2025" toc={toc}>
      <h2 className="text-3xl font-display font-bold uppercase mb-6 text-[#FF4500]">What We Will Do. What We Won't. In Writing. Before We Start.</h2>
      <p className="lead text-xl font-sans text-white/90 mb-8">
        Every Blackbox Labs engagement is governed by a signed Rules of Engagement (ROE) document executed before any testing begins. No exceptions. No verbal authorizations. No "it's fine, just start."
      </p>
      <p>
        This page explains our standard ROE framework and what clients should expect.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="defines" className="text-2xl mt-12 mb-6">1. What Every ROE Defines</h2>
      
      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">SCOPE DEFINITION:</h3>
      <ul>
        <li>Exact IP ranges, domains, and systems in scope</li>
        <li>Explicitly out-of-scope systems and networks</li>
        <li>Testing depth (network only, full application, physical, social engineering, etc.)</li>
      </ul>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">TIMING:</h3>
      <ul>
        <li>Engagement start and end dates/times</li>
        <li>Testing windows (business hours only, or 24/7)</li>
        <li>Blackout dates (major business events, audit periods)</li>
      </ul>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">AUTHORIZATION:</h3>
      <ul>
        <li>Named authorizing individuals (typically CISO + legal)</li>
        <li>Written authorization on company letterhead</li>
        <li>Emergency stop contacts</li>
      </ul>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">ESCALATION:</h3>
      <ul>
        <li>Critical finding escalation procedure (we notify within hours if we find something immediately dangerous)</li>
        <li>Emergency stop procedure — who to call, how to halt testing instantly</li>
        <li>Incident declaration protocol</li>
      </ul>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">TECHNICAL CONSTRAINTS:</h3>
      <ul>
        <li>What tools may or may not be used</li>
        <li>Destructive testing limitations (we never destroy data)</li>
        <li>Denial-of-service restrictions</li>
        <li>Data exfiltration simulation limits</li>
        <li>Production vs. staging environment rules</li>
      </ul>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">DELIVERABLES:</h3>
      <ul>
        <li>Report format and delivery timeline</li>
        <li>Who receives the report</li>
        <li>Data handling and destruction requirements</li>
      </ul>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="never-do" className="text-2xl mt-12 mb-6">2. What Blackbox Labs Will Never Do</h2>
      <div className="bg-black border border-red-500/30 p-6 mb-8 font-mono text-sm">
        <ul className="text-white/70 space-y-3 list-none pl-0 m-0">
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Test without a signed ROE</li>
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Test systems outside the defined scope</li>
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Destroy, modify, or permanently alter client production data</li>
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Retain copies of client data beyond the agreed retention period</li>
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Share findings with unauthorized parties</li>
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Use findings for any purpose other than the contracted engagement</li>
          <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✗</span> Proceed past a critical finding without client notification</li>
        </ul>
      </div>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="emergency" className="text-2xl mt-12 mb-6">3. Emergency Stop Procedure</h2>
      <p>If you need to halt testing immediately at any time:</p>
      
      <div className="bg-[#111] border border-white/15 p-6 mb-8 font-mono text-sm">
        <p className="mb-3"><span className="text-red-500 font-bold w-40 inline-block">Emergency Hotline:</span> +1 (XXX) XXX-XXXX (24/7)</p>
        <p className="mb-3"><span className="text-white/60 w-40 inline-block">Email:</span> <a href="mailto:stop@blackboxlabs.com">stop@blackboxlabs.com</a></p>
        <p><span className="text-white/60 w-40 inline-block">Signal:</span> <span className="text-[#FF4500]">@BlackboxLabs</span></p>
      </div>
      
      <p className="font-bold text-[#FF4500]">Testing ceases within 60 minutes of authorized emergency stop request.</p>

      <div className="mt-12">
        <a href="mailto:legal@blackboxlabs.com" className="inline-block bg-white/5 border border-white/20 px-6 py-3 font-mono text-sm hover:bg-white hover:text-black transition-colors">
          [ REQUEST AN ROE TEMPLATE → legal@blackboxlabs.com ]
        </a>
      </div>

    </LegalPageLayout>
  );
};
