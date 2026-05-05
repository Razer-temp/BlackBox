import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Shield, Terminal, Key, Phone, Mail, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const FooterSchema = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Blackbox Labs",
      "description": "Elite Red Team & Offensive Security Firm",
      "url": "https://blackboxlabs.com",
      "logo": "https://blackboxlabs.com/logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "security engagement",
        "email": "ops@blackboxlabs.com"
      },
      "sameAs": [
        "https://linkedin.com/company/blackboxlabs",
        "https://twitter.com/blackboxlabs",
        "https://github.com/blackboxlabs"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Blackbox Labs",
      "serviceType": [
        "Red Team Operations",
        "Network Penetration Testing",
        "Application Security Assessment",
        "Cloud Security Audit",
        "Social Engineering Testing",
        "Vulnerability Research"
      ],
      "areaServed": "Worldwide",
      "hasCredential": ["OSCP", "CRTO", "CREST"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is red team penetration testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Red teaming is a full-scope, multi-layered attack simulation designed to measure how well a company's people, networks, applications, and physical security controls can withstand an attack from a real-life adversary."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a red team engagement cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our smallest engagements start at $25,000. Enterprise red team operations typically range from $75,000 to $250,000+ depending on scope, duration, and complexity."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between pen testing and red teaming?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Penetration testing focuses on finding as many vulnerabilities as possible in a specific scope. Red teaming focuses on achieving a specific objective (like stealing a database) while remaining undetected by the blue team."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a red team engagement take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard red team engagement lasts between 3 to 6 weeks of active testing, followed by reporting and debriefing. Complex enterprise engagements can last several months."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications should a red team firm have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for practitioner-level certifications like OSCP, OSCE, OSEE, and CRTO. Firm-level accreditations like CREST provide additional assurance of methodology and data security."
          }
        }
      ]
    }
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

const PreFooterCTA = () => (
  <div className="bg-[#111] text-white border-t border-black/15 p-8 md:p-12 lg:p-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-8">
        // AUTHORIZED ENGAGEMENTS ONLY
      </div>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
        "The average attacker dwell time is 241 days.<br/>
        <span className="text-[#F26122]">Our average time to first critical finding: 72 hours.</span>"
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
        <Link to="/request-audit" className="bg-[#F26122] text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
          REQUEST AN AUDIT <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/scoping-call" className="bg-transparent border border-white/20 text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-white/10 transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
          BOOK A SCOPING CALL
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-widest text-white/60">
        <span className="flex items-center gap-2"><Lock className="w-3 h-3 text-[#F26122]" /> NDA First</span>
        <span className="hidden sm:inline">·</span>
        <span className="flex items-center gap-2"><Terminal className="w-3 h-3 text-[#F26122]" /> 24hr Response</span>
        <span className="hidden sm:inline">·</span>
        <span className="flex items-center gap-2"><Shield className="w-3 h-3 text-[#F26122]" /> Operators Only</span>
      </div>
    </div>
  </div>
);

const FooterLink = ({ to, children, isGated = false }: { to: string, children: React.ReactNode, isGated?: boolean }) => (
  <li>
    <Link to={to} className="group flex items-center gap-2 font-mono text-xs text-black/70 hover:text-[#F26122] transition-colors py-1">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F26122] -ml-4 w-2">&gt;</span>
      {children}
      {isGated && <Lock className="w-3 h-3 text-black/60 group-hover:text-[#F26122] ml-1" />}
    </Link>
  </li>
);

const FooterNavigation = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-white">
    {/* Column 1: Brand */}
    <div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-black/15 flex flex-col">
      <Link to="/" className="font-display font-bold text-xl tracking-widest mb-6 block hover:text-[#F26122] transition-colors">
        BLACKBOX_LABS
      </Link>
      <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-6">
        // OFFENSIVE SECURITY / RED TEAM OPERATIONS
      </div>
      <p className="font-mono text-xs text-black/70 leading-relaxed mb-6 flex-grow">
        An elite Red Team firm built by former operators. We simulate nation-state attacks against your infrastructure — finding what real adversaries would exploit before they get the chance.<br/><br/>
        Authorized. Ethical. Ruthlessly effective.
      </p>
      <Link to="/request-audit" className="font-mono text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:text-[#F26122] transition-colors">
        <ArrowRight className="w-3 h-3" /> REQUEST AN AUDIT
      </Link>
    </div>

    {/* Column 2: Services */}
    <div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-black/15">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// SERVICES</h4>
      <ul className="space-y-3 pl-4">
        <FooterLink to="/services/red-team">Red Team Operations</FooterLink>
        <FooterLink to="/services/network-penetration-testing">Network Penetration Testing</FooterLink>
        <FooterLink to="/services/application-security-testing">Application Security Testing</FooterLink>
        <FooterLink to="/services/cloud-security-assessment">Cloud Security Assessment</FooterLink>
        <FooterLink to="/services/social-engineering">Social Engineering Testing</FooterLink>
        <FooterLink to="/services/vulnerability-research">Vulnerability Research</FooterLink>
        <FooterLink to="/services/incident-response">Incident Response Retainer</FooterLink>
        <FooterLink to="/services/purple-team">Purple Team Exercises</FooterLink>
      </ul>
    </div>

    {/* Column 3: Resources */}
    <div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-black/15">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// RESOURCES</h4>
      <ul className="space-y-3 pl-4">
        <FooterLink to="/blog">Blog → Threat Intel & Research</FooterLink>
        <FooterLink to="/#case-studies">Case Studies → Real Engagements</FooterLink>
        <FooterLink to="/advisories">CVE Advisories → Latest Disclosures</FooterLink>
        <FooterLink to="/resources/annual-report-2025" isGated>Annual Red Team Report 2025</FooterLink>
        <FooterLink to="/resources/mitre-guide" isGated>MITRE ATT&CK Mapping Guide</FooterLink>
        <FooterLink to="/glossary">Red Team Glossary</FooterLink>
        <FooterLink to="/faq">Penetration Testing FAQ</FooterLink>
        <FooterLink to="/scoping-call">Scoping Call → Book Now</FooterLink>
        <FooterLink to="/newsletter">Weekly Intel Newsletter</FooterLink>
      </ul>
    </div>

    {/* Column 4: Company */}
    <div className="p-8 lg:p-12 border-r border-b md:border-b-0 border-black/15">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// COMPANY</h4>
      <ul className="space-y-3 pl-4">
        <FooterLink to="/about">About Blackbox Labs</FooterLink>
        <FooterLink to="/#team">Our Operators → Meet the Team</FooterLink>
        <FooterLink to="/#methodology">Our Methodology → How We Work</FooterLink>
        <FooterLink to="/careers">Careers → Join the Red Team</FooterLink>
        <FooterLink to="/press">Press & Media Kit</FooterLink>
        <FooterLink to="/speaking">Speaking Engagements</FooterLink>
        <FooterLink to="/talks">DEF CON / Black Hat Talks</FooterLink>
        <FooterLink to="/partners">Partners & Vendors</FooterLink>
        <FooterLink to="/thanks">Hall of Fame → Responsible Disclosure</FooterLink>
      </ul>
    </div>

    {/* Column 5: Legal */}
    <div className="p-8 lg:p-12">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// LEGAL</h4>
      <ul className="space-y-3 pl-4">
        <FooterLink to="/legal/privacy">Privacy Policy (GDPR Compliant)</FooterLink>
        <FooterLink to="/legal/terms">Terms of Service</FooterLink>
        <FooterLink to="/legal/cookies">Cookie Policy</FooterLink>
        <FooterLink to="/legal/disclosure">Responsible Disclosure Policy</FooterLink>
        <FooterLink to="/legal/nda">NDA Framework</FooterLink>
        <FooterLink to="/legal/rules-of-engagement">Rules of Engagement Policy</FooterLink>
        <FooterLink to="/legal/ccpa">CCPA Compliance Notice</FooterLink>
        <FooterLink to="/sitemap">Sitemap</FooterLink>
      </ul>
    </div>
  </div>
);

const SecureCommsBlock = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/15 bg-[#E5E5E5]">
    {/* Secure Comms */}
    <div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-black/15 bg-[#111] text-white">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-white/60">// SECURE COMMUNICATIONS</h4>
      <div className="font-mono text-xs space-y-4 text-white/80">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="w-32 text-white/50">Signal:</span>
          <span className="text-[#F26122]">@BlackboxLabs</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="w-32 text-white/50">PGP Key:</span>
          <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc" className="underline hover:text-[#F26122] flex items-center gap-2">
            <Key className="w-3 h-3" /> Download Public Key → 4096-bit RSA
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="w-32 text-white/50">ProtonMail:</span>
          <a href="mailto:ops@blackboxlabs.com" className="hover:text-[#F26122]">ops@blackboxlabs.com</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="w-32 text-white/50">Encrypted Email:</span>
          <a href="mailto:security@blackboxlabs.com" className="hover:text-[#F26122]">security@blackboxlabs.com</a>
        </div>
        
        <div className="pt-4 mt-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <span className="w-32 text-[#DC2626] font-bold">IR Retainer:</span>
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +1 (XXX) XXX-XXXX [ 24/7 ]</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="w-32 text-white/50">Bug Bounty:</span>
            <a href="mailto:security@blackboxlabs.com" className="hover:text-[#F26122]">security@blackboxlabs.com</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center font-mono text-[10px] text-white/60 tracking-widest uppercase border border-white/10 py-2">
        ── All communications secured. No metadata retained. ──
      </div>
    </div>

    {/* Trust Badges */}
    <div className="p-8 lg:p-12 bg-[#E5E5E5] flex flex-col justify-center">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// ACCREDITATIONS & ALIGNMENT</h4>
      <div className="flex flex-wrap gap-3">
        {[
          "OSCP CERTIFIED", "CRTO", "CREST APPROVED", 
          "CVE RESEARCHER", "MITRE ATT&CK ALIGNED", "OWASP",
          "ISO 27001", "GDPR COMPLIANT", "SOC 2 TYPE II",
          "DEF CON SPEAKER", "BLACK HAT ARSENAL", "HackerOne"
        ].map((badge) => (
          <div 
            key={badge} 
            className="border border-black/20 bg-white px-3 py-2 font-mono text-[10px] font-bold text-black/70 hover:border-black hover:text-black hover:shadow-[2px_2px_0_rgba(242,97,34,1)] transition-all cursor-default"
            title={`${badge} Red Team Penetration Testing Firm`}
            aria-label={`${badge} Red Team Penetration Testing Firm`}
          >
            [ {badge} ]
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MassiveLabsGrid = () => (
  <div className="border-t border-black/15 bg-[#E5E5E5] relative cursor-crosshair">
     {/* Corner Markers */}
     <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#F26122] z-10"></div>
     <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#F26122] z-10"></div>
     <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#F26122] z-10"></div>
     <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#F26122] z-10"></div>

     <div className="grid grid-cols-2 lg:grid-cols-4 w-full divide-x divide-y lg:divide-y-0 divide-black/15">
        {/* L */}
        <div className="group/cell aspect-square lg:aspect-auto lg:h-[400px] xl:h-[500px] p-6 md:p-10 lg:p-12 flex items-center justify-center relative overflow-hidden hover:bg-[#111] transition-colors duration-300">
          <span className="font-display text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold leading-none text-[#111] group-hover/cell:text-[#F26122] transition-all duration-300 group-hover/cell:scale-110 group-hover/cell:-translate-y-4 group-hover/cell:translate-x-4 group-hover/cell:drop-shadow-[16px_16px_0_rgba(255,255,255,0.1)]">
            L
          </span>
        </div>

        {/* A */}
        <div className="group/cell aspect-square lg:aspect-auto lg:h-[400px] xl:h-[500px] p-6 md:p-10 lg:p-12 flex items-center justify-center relative overflow-hidden hover:bg-[#F26122] transition-colors duration-300">
          <span className="font-display text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold leading-none text-[#111] group-hover/cell:text-[#111] transition-all duration-300 group-hover/cell:scale-110 group-hover/cell:translate-y-4 group-hover/cell:-translate-x-4 group-hover/cell:drop-shadow-[16px_16px_0_rgba(255,255,255,0.6)]">
            A
          </span>
        </div>

        {/* B */}
        <div className="group/cell aspect-square lg:aspect-auto lg:h-[400px] xl:h-[500px] p-6 md:p-10 lg:p-12 flex items-center justify-center relative overflow-hidden hover:bg-[#111] transition-colors duration-300">
          <span className="font-display text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold leading-none text-[#111] group-hover/cell:text-white transition-all duration-300 group-hover/cell:scale-110 group-hover/cell:-translate-y-4 group-hover/cell:-translate-x-4 group-hover/cell:drop-shadow-[16px_16px_0_rgba(242,97,34,0.8)]">
            B
          </span>
        </div>

        {/* S */}
        <div data-cursor="dark" className="group/cell aspect-square lg:aspect-auto lg:h-[400px] xl:h-[500px] p-6 md:p-10 lg:p-12 flex items-center justify-center relative overflow-hidden hover:bg-[#F26122] transition-colors duration-300">
          <span className="font-display text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold leading-none text-[#111] group-hover/cell:text-[#111] transition-all duration-300 group-hover/cell:scale-110 group-hover/cell:translate-y-4 group-hover/cell:translate-x-4 group-hover/cell:drop-shadow-[16px_16px_0_rgba(255,255,255,0.6)]">
            S
          </span>
        </div>
     </div>
  </div>
);

const SocialAndCopyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-black/15 bg-white">
      {/* Social Row */}
      <div className="p-6 md:p-8 border-b border-black/15 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        <a href="https://linkedin.com/company/blackboxlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-black/60 hover:text-[#0077b5] transition-colors" aria-label="Blackbox Labs on LinkedIn">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a href="https://twitter.com/BlackboxLabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-black/60 hover:text-black transition-colors" aria-label="Blackbox Labs on Twitter/X">
          <Twitter className="w-4 h-4" /> Twitter/X → @BlackboxLabs
        </a>
        <a href="https://github.com/blackboxlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-black/60 hover:text-black transition-colors" aria-label="Blackbox Labs on GitHub">
          <Github className="w-4 h-4" /> GitHub → Open Source Tools
        </a>
        <a href="https://youtube.com/c/blackboxlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-black/60 hover:text-[#FF0000] transition-colors" aria-label="Blackbox Labs on YouTube">
          <Youtube className="w-4 h-4" /> YouTube → Red Team Demos
        </a>
        <Link to="/talks" className="flex items-center gap-2 font-mono text-xs font-bold text-black/60 hover:text-[#F26122] transition-colors">
          <Terminal className="w-4 h-4" /> DEF CON Talk Archive
        </Link>
      </div>

      {/* Copyright Row */}
      <div className="p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left bg-[#E5E5E5]">
        <div className="font-mono text-[10px] text-black/60 leading-relaxed max-w-2xl">
          <p className="mb-2">
            © {currentYear} Blackbox Labs LLC · All rights reserved · <span className="text-black/80 font-bold">Penetration Testing | Red Team Operations | Offensive Security</span>
          </p>
          <p className="mb-2">
            All engagements are authorized. Blackbox Labs conducts security testing only with explicit written authorization. Unauthorized use of techniques described herein is illegal.
          </p>
          <p className="uppercase tracking-widest mt-4">
            United States · European Union · United Kingdom · APAC
          </p>
        </div>
        
        {/* Small corner logo mark */}
        <div className="w-12 h-12 border-2 border-black/20 flex items-center justify-center opacity-50">
          <Shield className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto relative z-20">
      <FooterSchema />
      <PreFooterCTA />
      <FooterNavigation />
      <SecureCommsBlock />
      <MassiveLabsGrid />
      <SocialAndCopyright />
    </footer>
  );
};
