import React, { useEffect } from 'react';
import { LegalPageLayout } from '../../components/LegalPageLayout';

export const CookiePolicyPage = () => {
  useEffect(() => {
    document.title = "Cookie Policy | Blackbox Labs";
  }, []);

  const toc = [
    { id: "what-we-use", label: "What Cookies We Use" },
    { id: "managing", label: "Managing Cookies" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="April 8, 2025" toc={toc}>
      <p className="lead text-xl font-sans text-white/90 mb-8">
        Blackbox Labs uses minimal cookies on this website. This page explains what cookies we use, why, and how to control them.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="what-we-use" className="text-2xl mt-12 mb-6">1. What Cookies We Use</h2>
      
      <div className="bg-[#111] border border-white/15 p-6 mb-8 font-mono text-sm">
        <h3 className="text-[#FF4500] font-bold mb-4">STRICTLY NECESSARY COOKIES</h3>
        <p className="mb-2"><span className="text-white/60">Purpose:</span> Session management, security, form function</p>
        <p className="mb-2"><span className="text-white/60">Duration:</span> Session (deleted when browser closes)</p>
        <p><span className="text-white/60">Can be disabled:</span> No (required for site to function)</p>
      </div>

      <div className="bg-[#111] border border-white/15 p-6 mb-8 font-mono text-sm">
        <h3 className="text-[#FF4500] font-bold mb-4">ANALYTICS COOKIES (with consent)</h3>
        <p className="mb-2"><span className="text-white/60">Purpose:</span> Understanding how visitors use the site</p>
        <p className="mb-2"><span className="text-white/60">Provider:</span> [Analytics provider — e.g., Plausible.io]</p>
        <p className="mb-2"><span className="text-white/60">Duration:</span> 13 months</p>
        <p><span className="text-white/60">Can be disabled:</span> Yes</p>
      </div>

      <div className="bg-black border border-red-500/30 p-6 mb-8 font-mono text-sm">
        <h3 className="text-red-500 font-bold mb-4">WHAT WE DO NOT USE:</h3>
        <ul className="text-white/70 space-y-2 list-none pl-0">
          <li>✗ Advertising cookies</li>
          <li>✗ Tracking pixels</li>
          <li>✗ Third-party marketing cookies</li>
          <li>✗ Facebook Pixel, Google Ads tracking</li>
        </ul>
      </div>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="managing" className="text-2xl mt-12 mb-6">2. Managing Cookies</h2>
      <p>You can control cookies through:</p>
      <ul>
        <li>Your browser settings (most browsers allow blocking or deleting cookies)</li>
        <li>Our cookie consent banner (on first visit)</li>
        <li>Opting out of analytics via [analytics opt-out link]</li>
      </ul>
      <p className="text-sm italic opacity-70 mt-4">Note: Disabling strictly necessary cookies may affect website functionality.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="contact" className="text-2xl mt-12 mb-6">3. Contact</h2>
      <p><a href="mailto:privacy@blackboxlabs.com">privacy@blackboxlabs.com</a></p>

    </LegalPageLayout>
  );
};
