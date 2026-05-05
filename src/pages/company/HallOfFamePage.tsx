import React, { useEffect } from 'react';
import { CompanyPageLayout } from '../../components/CompanyPageLayout';
import { AnimatedSection } from '../../components/AnimatedSection';
import { Link } from 'react-router-dom';

export const HallOfFamePage = () => {
  useEffect(() => {
    document.title = "Hall of Fame | Responsible Disclosure | Blackbox Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Blackbox Labs Hall of Fame — recognizing security researchers who have responsibly disclosed vulnerabilities in our client environments and our own infrastructure.');
  }, []);

  return (
    <CompanyPageLayout 
      title="Hall of Fame" 
      subtitle="We Recognize the Researchers Who Find What We Miss"
      breadcrumb="Hall of Fame"
    >
      <AnimatedSection id="intro" number="02" title="RECOGNITION" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <p className="font-mono text-sm text-white/70 leading-relaxed max-w-3xl mb-16">
            Even the best offensive security firm has blind spots. We believe in the security research community and the coordinated vulnerability disclosure process that makes the internet safer.<br/><br/>
            If you've found a genuine security vulnerability in Blackbox Labs infrastructure, our published tools, or our client environments through authorized research, we want to recognize your contribution.<br/><br/>
            This page honors the researchers who've reported vulnerabilities to us responsibly.
          </p>

          <div className="mb-16">
            <h3 className="font-display text-3xl font-bold mb-8">2025 HALL OF FAME</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px] font-mono text-sm">
                <thead>
                  <tr className="border-b-2 border-[#FF4500] text-[#FF4500]">
                    <th className="p-4 bg-white/5 w-1/3">Researcher Handle</th>
                    <th className="p-4 bg-white/5 w-1/2">Finding</th>
                    <th className="p-4 bg-white/5 w-1/6">Date</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-[#00FF00]">@[handle]</td>
                    <td className="p-4">XSS in client portal</td>
                    <td className="p-4 text-white/60">Q1 '25</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-[#00FF00]">@[handle]</td>
                    <td className="p-4">SSRF on tool infra</td>
                    <td className="p-4 text-white/50">Q2 '25</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white/60 italic">[Add as received]</td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#111] border border-white/15 p-8 max-w-3xl">
            <h3 className="font-display text-2xl font-bold mb-6 text-[#FF4500]">To Report a Vulnerability:</h3>
            <div className="space-y-4 font-mono text-sm text-white/80 mb-8">
              <p><span className="text-white/50 w-24 inline-block">Email:</span> <a href="mailto:security@blackboxlabs.com" className="text-[#FF4500] hover:underline">security@blackboxlabs.com</a></p>
              <p><span className="text-white/50 w-24 inline-block">PGP:</span> <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc" className="hover:text-white">[Download Public Key]</a></p>
              <p><span className="text-white/50 w-24 inline-block">Signal:</span> <span className="text-[#FF4500]">@BlackboxLabs</span></p>
            </div>
            
            <ul className="space-y-2 font-mono text-xs text-white/50 mb-8">
              <li>▸ Reports are acknowledged within 24 hours.</li>
              <li>▸ We follow a 90-day coordinated disclosure timeline.</li>
              <li>▸ We do not pursue legal action against good-faith researchers.</li>
              <li>▸ We will credit your research publicly if you consent.</li>
            </ul>

            <Link to="/legal/disclosure" className="font-mono text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF4500] transition-colors">
              [ → VIEW OUR FULL RESPONSIBLE DISCLOSURE POLICY ]
            </Link>
          </div>

        </div>
      </AnimatedSection>
    </CompanyPageLayout>
  );
};
