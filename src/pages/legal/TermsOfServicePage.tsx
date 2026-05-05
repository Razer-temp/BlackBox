import React, { useEffect } from 'react';
import { LegalPageLayout } from '../../components/LegalPageLayout';

export const TermsOfServicePage = () => {
  useEffect(() => {
    document.title = "Terms of Service | Blackbox Labs";
  }, []);

  const toc = [
    { id: "use", label: "Use of This Website" },
    { id: "ip", label: "Intellectual Property" },
    { id: "warranties", label: "Disclaimer of Warranties" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "governing-law", label: "Governing Law" },
    { id: "changes", label: "Changes to These Terms" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="April 8, 2025" toc={toc}>
      <p className="lead text-xl font-sans text-white/90 mb-8">
        These Terms of Service ("Terms") govern your use of the Blackbox Labs website (blackboxlabs.com) and public-facing content. They do not govern client engagements, which are governed by individual Master Service Agreements, Statements of Work, and Rules of Engagement documents signed prior to any testing activity.
      </p>
      <p>By using this website, you agree to these Terms.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="use" className="text-2xl mt-12 mb-6">1. Use of This Website</h2>
      <p>You may use this website for lawful purposes only. You may not:</p>
      <ul>
        <li>Attempt to access our systems, infrastructure, or internal resources without authorization</li>
        <li>Scrape, harvest, or collect data from this website using automated tools without permission</li>
        <li>Use our published research or tools to harm third parties or conduct unauthorized security testing</li>
        <li>Impersonate Blackbox Labs or our personnel</li>
        <li>Use our brand, logos, or published content without written permission</li>
      </ul>
      <p className="font-bold text-white mt-6 p-4 border-l-2 border-[#FF4500] bg-white/5">
        Any authorized security testing of this website must be arranged through our responsible disclosure program at <a href="/legal/disclosure">/legal/disclosure</a>.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="ip" className="text-2xl mt-12 mb-6">2. Intellectual Property</h2>
      <p>All content on this website — including research, advisories, tools, reports, graphics, and brand assets — is owned by Blackbox Labs, Inc. or licensed to us, and is protected by intellectual property law.</p>
      <p>You may share links to our published research. You may quote brief excerpts with attribution. You may not reproduce, repackage, or redistribute our content without written permission.</p>
      <p>Open-source tools released by Blackbox Labs are governed by their individual license files (typically MIT or Apache 2.0).</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="warranties" className="text-2xl mt-12 mb-6">3. Disclaimer of Warranties</h2>
      <p>This website and its content are provided "as is" without warranty of any kind. We do not warrant that content is complete, accurate, or current. Cybersecurity information evolves rapidly — always verify critical information against primary sources.</p>
      <p>Published vulnerability research reflects the state of findings at time of disclosure. Affected systems may have been patched since publication.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="liability" className="text-2xl mt-12 mb-6">4. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Blackbox Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on its content.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="governing-law" className="text-2xl mt-12 mb-6">5. Governing Law</h2>
      <p>These Terms are governed by the laws of [State], United States, without regard to conflict of law principles.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="changes" className="text-2xl mt-12 mb-6">6. Changes to These Terms</h2>
      <p>We may update these Terms periodically. Material changes will be noted on this page with an updated effective date.</p>
      <p>Continued use of this website after changes constitutes acceptance of the updated Terms.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="contact" className="text-2xl mt-12 mb-6">7. Contact</h2>
      <p><a href="mailto:legal@blackboxlabs.com">legal@blackboxlabs.com</a></p>

    </LegalPageLayout>
  );
};
