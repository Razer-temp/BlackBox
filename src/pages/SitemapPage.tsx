import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export const SitemapPage = () => {
  useEffect(() => {
    document.title = "Sitemap | Blackbox Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Complete sitemap of all pages on blackboxlabs.com');
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        
        <div className="mb-16 border-b border-white/15 pb-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF4500]">Sitemap</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">Sitemap</h1>
          <div className="font-mono text-xs text-white/50 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>root@blackbox:~# tree /var/www/html</span>
          </div>
        </div>

        <div className="font-mono text-sm leading-relaxed text-white/70">
          <div className="mb-2 text-white">.</div>
          
          {/* SERVICES */}
          <div className="mb-8">
            <div className="text-[#FF4500] font-bold">├── SERVICES/</div>
            <div className="pl-8 border-l border-white/20 ml-1.5 relative">
              <div className="absolute top-0 -left-px w-4 h-px bg-white/20"></div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/red-team" className="hover:text-white w-64">/red-team</Link>
                <span className="text-white/60 hidden md:inline">Red Team Operations</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/network-penetration-testing" className="hover:text-white w-64">/network-penetration-testing</Link>
                <span className="text-white/60 hidden md:inline">Network Penetration Testing</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/application-security-testing" className="hover:text-white w-64">/application-security-testing</Link>
                <span className="text-white/60 hidden md:inline">Application Security Testing</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/social-engineering" className="hover:text-white w-64">/social-engineering</Link>
                <span className="text-white/60 hidden md:inline">Social Engineering Testing</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/cloud-security-assessment" className="hover:text-white w-64">/cloud-security-assessment</Link>
                <span className="text-white/60 hidden md:inline">Cloud Security Assessment</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/vulnerability-research" className="hover:text-white w-64">/vulnerability-research</Link>
                <span className="text-white/60 hidden md:inline">Vulnerability Research</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/services/incident-response" className="hover:text-white w-64">/incident-response</Link>
                <span className="text-white/60 hidden md:inline">Incident Response</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">└──</span>
                <Link to="/services/purple-team" className="hover:text-white w-64">/purple-team</Link>
                <span className="text-white/60 hidden md:inline">Purple Team Operations</span>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="mb-8">
            <div className="text-[#FF4500] font-bold">├── COMPANY/</div>
            <div className="pl-8 border-l border-white/20 ml-1.5 relative">
              <div className="absolute top-0 -left-px w-4 h-px bg-white/20"></div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/#why-us" className="hover:text-white w-64">/about</Link>
                <span className="text-white/60 hidden md:inline">About Blackbox Labs</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/#team" className="hover:text-white w-64">/team</Link>
                <span className="text-white/60 hidden md:inline">Our Operators</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/#methodology" className="hover:text-white w-64">/methodology</Link>
                <span className="text-white/60 hidden md:inline">Our Methodology</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/careers" className="hover:text-white w-64">/careers</Link>
                <span className="text-white/60 hidden md:inline">Careers</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/press" className="hover:text-white w-64">/press</Link>
                <span className="text-white/60 hidden md:inline">Press & Media Kit</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/speaking" className="hover:text-white w-64">/speaking</Link>
                <span className="text-white/60 hidden md:inline">Speaking Engagements</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/talks" className="hover:text-white w-64">/talks</Link>
                <span className="text-white/60 hidden md:inline">Published Talks & Research</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/partners" className="hover:text-white w-64">/partners</Link>
                <span className="text-white/60 hidden md:inline">Partners & Vendors</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">└──</span>
                <Link to="/thanks" className="hover:text-white w-64">/thanks</Link>
                <span className="text-white/60 hidden md:inline">Hall of Fame</span>
              </div>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="mb-8">
            <div className="text-[#FF4500] font-bold">├── RESOURCES/</div>
            <div className="pl-8 border-l border-white/20 ml-1.5 relative">
              <div className="absolute top-0 -left-px w-4 h-px bg-white/20"></div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/#case-studies" className="hover:text-white w-64">/case-studies</Link>
                <span className="text-white/60 hidden md:inline">Case Studies</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/blog" className="hover:text-white w-64">/blog</Link>
                <span className="text-white/60 hidden md:inline">Blog</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/threat-intel" className="hover:text-white w-64">/threat-intel</Link>
                <span className="text-white/60 hidden md:inline">Threat Intelligence</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/research" className="hover:text-white w-64">/research</Link>
                <span className="text-white/60 hidden md:inline">Research Reports</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/advisories" className="hover:text-white w-64">/advisories</Link>
                <span className="text-white/60 hidden md:inline">CVE Advisories</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/glossary" className="hover:text-white w-64">/glossary</Link>
                <span className="text-white/60 hidden md:inline">Security Glossary</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/faq" className="hover:text-white w-64">/faq</Link>
                <span className="text-white/60 hidden md:inline">FAQ</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">└──</span>
                <Link to="/newsletter" className="hover:text-white w-64">/newsletter</Link>
                <span className="text-white/60 hidden md:inline">Newsletter</span>
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div className="mb-8">
            <div className="text-[#FF4500] font-bold">├── LEGAL/</div>
            <div className="pl-8 border-l border-white/20 ml-1.5 relative">
              <div className="absolute top-0 -left-px w-4 h-px bg-white/20"></div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/legal/privacy" className="hover:text-white w-64">/legal/privacy</Link>
                <span className="text-white/60 hidden md:inline">Privacy Policy</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/legal/terms" className="hover:text-white w-64">/legal/terms</Link>
                <span className="text-white/60 hidden md:inline">Terms of Service</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/legal/cookies" className="hover:text-white w-64">/legal/cookies</Link>
                <span className="text-white/60 hidden md:inline">Cookie Policy</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/legal/disclosure" className="hover:text-white w-64">/legal/disclosure</Link>
                <span className="text-white/60 hidden md:inline">Responsible Disclosure</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/legal/nda" className="hover:text-white w-64">/legal/nda</Link>
                <span className="text-white/60 hidden md:inline">NDA Framework</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">└──</span>
                <Link to="/legal/rules-of-engagement" className="hover:text-white w-64">/legal/rules-of-engagement</Link>
                <span className="text-white/60 hidden md:inline">Rules of Engagement</span>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-8">
            <div className="text-[#FF4500] font-bold">└── CONTACT/</div>
            <div className="pl-8 ml-1.5 relative">
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/contact" className="hover:text-white w-64">/contact</Link>
                <span className="text-white/60 hidden md:inline">Contact Us</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">├──</span>
                <Link to="/request-audit" className="hover:text-white w-64">/request-audit</Link>
                <span className="text-white/60 hidden md:inline">Request an Audit</span>
              </div>
              <div className="flex items-center gap-4 hover:bg-white/5 p-1 -ml-4 pl-4 transition-colors">
                <span className="text-white/60">└──</span>
                <Link to="/scoping-call" className="hover:text-white w-64">/scoping-call</Link>
                <span className="text-white/60 hidden md:inline">Book a Scoping Call</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
