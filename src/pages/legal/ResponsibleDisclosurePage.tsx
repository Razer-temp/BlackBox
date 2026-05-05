import React from 'react';
import { LegalPageLayout } from '../../components/LegalPageLayout';
import { Link } from 'react-router-dom';

export const ResponsibleDisclosurePage = () => {
  const toc = [
    { id: "scope", label: "What's In Scope" },
    { id: "rules", label: "The Rules" },
    { id: "commitments", label: "Our Commitments to You" },
    { id: "report", label: "How to Report" }
  ];

  return (
    <LegalPageLayout title="Responsible Disclosure Policy" lastUpdated="April 8, 2025" toc={toc}>
      <p className="lead text-xl font-sans text-white/90 mb-8">
        Blackbox Labs is an offensive security firm. We hold ourselves to the same standards we hold our clients to. If you've found a genuine security vulnerability in our infrastructure, our published tools, or our website, we want to hear from you.
      </p>
      <p>
        We commit to: responding promptly, working collaboratively toward a fix, crediting your contribution, and never pursuing legal action against good-faith researchers who follow this policy.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="scope" className="text-2xl mt-12 mb-6">1. What's In Scope</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#111] border border-green-500/30 p-6">
          <h3 className="text-green-500 font-mono text-sm font-bold mb-4">✅ IN SCOPE:</h3>
          <ul className="text-sm space-y-2 list-none pl-0 m-0">
            <li>▸ blackboxlabs.com and all subdomains</li>
            <li>▸ Our client portal (portal.blackboxlabs.com)</li>
            <li>▸ Our published open-source tools (GitHub)</li>
            <li>▸ Our email infrastructure</li>
            <li>▸ Our published APIs (if any)</li>
          </ul>
        </div>
        
        <div className="bg-[#111] border border-red-500/30 p-6">
          <h3 className="text-red-500 font-mono text-sm font-bold mb-4">❌ OUT OF SCOPE:</h3>
          <ul className="text-sm space-y-2 list-none pl-0 m-0">
            <li>▸ Client systems (contact the client directly or use their VDP/bug bounty program)</li>
            <li>▸ Physical security of our offices</li>
            <li>▸ Social engineering attacks against our staff</li>
            <li>▸ Third-party services we use (report to them)</li>
            <li>▸ Denial of service testing</li>
            <li>▸ Automated scanning without prior permission</li>
          </ul>
        </div>
      </div>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="rules" className="text-2xl mt-12 mb-6">2. The Rules</h2>
      <p>To qualify for recognition under this policy, you must:</p>
      <ul>
        <li>Report the vulnerability to us privately before any public disclosure</li>
        <li>Avoid accessing, modifying, or deleting data beyond what's necessary to demonstrate the vulnerability</li>
        <li>Not disrupt our services or our clients</li>
        <li>Give us reasonable time to respond (we commit to 5 business days for initial response, 90 days for full remediation)</li>
        <li>Not use the vulnerability for personal gain</li>
        <li>Not share the vulnerability with third parties before we've had the opportunity to fix it</li>
      </ul>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="commitments" className="text-2xl mt-12 mb-6">3. Our Commitments to You</h2>
      <ul>
        <li>Acknowledge your report within 24 hours</li>
        <li>Confirm whether the vulnerability is valid within 5 business days</li>
        <li>Keep you informed of our remediation progress</li>
        <li>Credit you in our Hall of Fame (with your permission)</li>
        <li>Not pursue legal action against you for good-faith research that follows this policy</li>
        <li>Follow a 90-day disclosure timeline (negotiable for complex fixes)</li>
      </ul>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="report" className="text-2xl mt-12 mb-6">4. How to Report</h2>
      <div className="bg-[#111] border border-white/15 p-6 mb-8 font-mono text-sm">
        <p className="mb-2"><span className="text-white/60 w-24 inline-block">Email:</span> <a href="mailto:security@blackboxlabs.com">security@blackboxlabs.com</a></p>
        <p className="mb-2"><span className="text-white/60 w-24 inline-block">PGP:</span> <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc">[Download Public Key]</a> <span className="text-white/60 italic">— preferred for sensitive reports</span></p>
        <p><span className="text-white/60 w-24 inline-block">Signal:</span> <span className="text-[#FF4500]">@BlackboxLabs</span></p>
      </div>

      <p className="font-bold mt-8 mb-4">Please include in your report:</p>
      <ul>
        <li>Type of vulnerability (XSS, SSRF, etc.)</li>
        <li>Affected URL or system component</li>
        <li>Steps to reproduce</li>
        <li>Proof-of-concept (if available)</li>
        <li>Potential impact assessment</li>
        <li>Your contact information (if you want credit)</li>
      </ul>

      <div className="mt-12">
        <Link to="/thanks" className="inline-block bg-white/5 border border-white/20 px-6 py-3 font-mono text-sm hover:bg-white hover:text-black transition-colors">
          [ → SEE WHO WE'VE RECOGNIZED ]
        </Link>
      </div>

    </LegalPageLayout>
  );
};
