import React from 'react';
import { LegalPageLayout } from '../../components/LegalPageLayout';

export const PrivacyPolicyPage = () => {
  const toc = [
    { id: "collection", label: "Information We Collect" },
    { id: "usage", label: "How We Use Your Information" },
    { id: "sharing", label: "Information Sharing" },
    { id: "retention", label: "Data Retention" },
    { id: "rights", label: "Your Rights" },
    { id: "ccpa", label: "CCPA / California Privacy Rights" },
    { id: "security", label: "Security" },
    { id: "international", label: "International Transfers" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="April 8, 2025" toc={toc}>
      <p className="lead text-xl font-sans text-white/90 mb-8">
        Blackbox Labs, Inc. ("Blackbox Labs," "we," "our," "us") is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, who we share it with, and your rights regarding your data.
      </p>
      <p>
        This policy applies to our website (blackboxlabs.com), our services, our client portal, and all communications with us. It does not apply to client engagement data, which is governed by individual engagement contracts and NDAs.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="collection" className="text-2xl mt-12 mb-6">1. Information We Collect</h2>
      
      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">INFORMATION YOU PROVIDE:</h3>
      <ul>
        <li>Name, work email, company name, job title (via contact forms and engagement intake)</li>
        <li>Communications you send us (email, Signal, contact forms)</li>
        <li>Application information (careers applications)</li>
        <li>Business information necessary to scope engagements</li>
      </ul>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">INFORMATION COLLECTED AUTOMATICALLY:</h3>
      <ul>
        <li>IP address and approximate location</li>
        <li>Browser type and version</li>
        <li>Pages visited and time spent</li>
        <li>Referring URL</li>
        <li>Device type and operating system</li>
      </ul>
      <p className="text-sm italic opacity-70">(Collected via server logs and analytics)</p>

      <h3 className="text-lg text-[#FF4500] mt-8 mb-4">INFORMATION WE DO NOT COLLECT:</h3>
      <ul>
        <li>We do not use advertising cookies or tracking pixels</li>
        <li>We do not sell, rent, or share your personal data with advertisers</li>
        <li>We do not collect social security numbers, payment card data, or government IDs through this website</li>
      </ul>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="usage" className="text-2xl mt-12 mb-6">2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and engagement requests</li>
        <li>To scope, manage, and deliver security engagements</li>
        <li>To send security advisories and threat intelligence updates (with your consent)</li>
        <li>To improve our website and services</li>
        <li>To comply with legal obligations</li>
        <li>To protect our legal rights and the security of our systems</li>
      </ul>
      <p className="font-bold text-white mt-6 p-4 border-l-2 border-[#FF4500] bg-white/5">
        We do not use your information for advertising targeting, profiling, or sale to third parties. Ever.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="sharing" className="text-2xl mt-12 mb-6">3. Information Sharing</h2>
      <p>We share your information only in these limited circumstances:</p>
      <ul>
        <li><strong>SERVICE PROVIDERS:</strong> Trusted vendors who help us operate our business (email hosting, CRM, secure document sharing). They are contractually prohibited from using your data for any other purpose.</li>
        <li><strong>LEGAL REQUIREMENTS:</strong> When required by law, court order, or government authority. We will notify you where legally permitted.</li>
        <li><strong>BUSINESS TRANSFERS:</strong> In the event of a merger, acquisition, or sale of assets.</li>
        <li><strong>WITH YOUR CONSENT:</strong> For any other purpose with your explicit permission.</li>
      </ul>
      <p className="font-bold text-white mt-6 p-4 border-l-2 border-[#FF4500] bg-white/5">
        We never sell personal data. We never share it with advertisers. We never use it for purposes beyond those described here.
      </p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="retention" className="text-2xl mt-12 mb-6">4. Data Retention</h2>
      <ul>
        <li><strong>Contact form inquiries:</strong> 2 years from last contact</li>
        <li><strong>Engagement records:</strong> 7 years (legal/compliance requirement)</li>
        <li><strong>Email communications:</strong> 3 years</li>
        <li><strong>Newsletter subscriptions:</strong> Until unsubscribed + 30 days</li>
        <li><strong>Analytics data:</strong> 13 months rolling</li>
      </ul>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="rights" className="text-2xl mt-12 mb-6">5. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate personal data</li>
        <li>Delete your personal data ("right to be forgotten")</li>
        <li>Restrict processing of your personal data</li>
        <li>Data portability</li>
        <li>Object to processing</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>To exercise these rights: <a href="mailto:privacy@blackboxlabs.com">privacy@blackboxlabs.com</a>. We respond within 30 days.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="ccpa" className="text-2xl mt-12 mb-6">6. CCPA / California Privacy Rights</h2>
      <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):</p>
      <ul>
        <li><strong>Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
        <li><strong>Right to Delete:</strong> You may request deletion of personal information we have collected, subject to legal exceptions.</li>
        <li><strong>Right to Opt-Out of Sale:</strong> We do not sell personal information. This right is automatically satisfied.</li>
        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
        <li><strong>Right to Correct:</strong> You may request correction of inaccurate personal information.</li>
      </ul>
      <p>To submit a CCPA request: <a href="mailto:privacy@blackboxlabs.com">privacy@blackboxlabs.com</a> or call: +1 (XXX) XXX-XXXX</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="security" className="text-2xl mt-12 mb-6">7. Security</h2>
      <p>We implement technical and organizational measures appropriate to the sensitivity of the information we process — including encryption in transit (TLS 1.3), encryption at rest, access controls, and regular security assessments of our own infrastructure.</p>
      <p>No internet transmission is completely secure. For highly sensitive communications, we recommend using our PGP key or Signal contact.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="international" className="text-2xl mt-12 mb-6">8. International Transfers</h2>
      <p>Our primary operations are in the United States. If you are located in the EU, UK, or other regions with data protection laws, we rely on appropriate legal mechanisms for international data transfers, including Standard Contractual Clauses where required.</p>

      <div className="font-mono text-white/60 my-12 hidden md:block">├─────────────────────────────────────────────────────────┤</div>

      <h2 id="contact" className="text-2xl mt-12 mb-6">9. Contact</h2>
      <div className="bg-[#111] p-6 border border-white/15 font-mono text-sm">
        <p className="mb-2"><span className="text-white/60 w-32 inline-block">Data Controller:</span> Blackbox Labs, Inc.</p>
        <p className="mb-2"><span className="text-white/60 w-32 inline-block">Privacy Contact:</span> <a href="mailto:privacy@blackboxlabs.com">privacy@blackboxlabs.com</a></p>
        <p className="mb-2"><span className="text-white/60 w-32 inline-block">PGP:</span> <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc">[Download Key]</a></p>
        <p><span className="text-white/60 w-32 inline-block">Mailing Address:</span> [Address]</p>
      </div>

    </LegalPageLayout>
  );
};
