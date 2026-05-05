import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Clock, Users, Database, Globe, Lock, Cpu, Server, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactFAQ } from '../components/ContactFAQ';
import SEO from '../components/SEO';

const redTeamFaqs = [
  {
    q: "How long does a red team engagement take?",
    a: "Focused engagements run 2–4 weeks. Full-scope enterprise red team operations typically run 6–12 weeks. Threat-intelligence led engagements aligned to TIBER-EU or CBEST frameworks can run 8–16 weeks. Duration depends on scope, environment size, and objectives. We'll recommend the right timeline during your scoping call."
  },
  {
    q: "How is a red team different from a penetration test?",
    a: "Penetration testing identifies and validates specific technical vulnerabilities within a defined scope. Red teaming goes further — it chains techniques together across your entire organization to achieve real attacker objectives, testing not just your systems but your people, processes, and detection capabilities simultaneously. It measures whether your SOC would detect a real attack, not just whether specific vulnerabilities exist."
  },
  {
    q: "Will my security team know a red team is happening?",
    a: "No — and that's the point. Only your CISO and legal counsel are typically informed. The rest of your security team, including your SOC, operates normally. This is what makes the results meaningful. If they detect us, we note exactly how. If they don't, we document how long we operated undetected and what we accessed."
  },
  {
    q: "What if the red team finds something catastrophic?",
    a: "We have a strict escalation procedure. If we find an immediately exploitable critical vulnerability that poses imminent risk to your business operations, we notify your designated point of contact within hours — before proceeding. We have emergency escalation channels agreed before every engagement."
  },
  {
    q: "Can red team findings be used for compliance?",
    a: "Yes. Evidence from red team engagements can support audit readiness by demonstrating practical control effectiveness and SOC capabilities for auditors of SOC 2, ISO 27001, and PCI DSS. TIBER-EU and CBEST engagements are specifically designed to satisfy regulatory requirements for financial institutions."
  },
  {
    q: "What does a red team engagement cost?",
    a: "Our engagements start at $75,000 for focused operations. Full-scope enterprise red teams typically range from $150,000 to $350,000+ depending on scope, duration, and number of attack vectors. TIBER-EU aligned engagements have additional regulatory requirements that affect pricing. We provide a fixed-fee proposal after your scoping call — no surprise invoices."
  },
  {
    q: "Do you work within our compliance framework?",
    a: "Yes. We have direct experience with DORA, TIBER-EU, CBEST, PCI DSS, HIPAA, CMMC, FedRAMP, SOC 2, and ISO 27001 scoping requirements. Mention your framework in the intake form and we'll align the engagement accordingly."
  }
];

export function RedTeamPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-24">
      <SEO 
        title="Red Team Operations | Elite Adversary Simulation | Blackbox Labs"
        description="Blackbox Labs delivers nation-state-level red team operations aligned to MITRE ATT&CK. APT simulation, full-scope adversary emulation, and covert C2 operations for enterprise organizations. Request an audit today."
        canonical="/services/red-team"
      />
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Red Team Operations",
        "provider": {
          "@type": "Organization",
          "name": "Blackbox Labs"
        },
        "description": "Blackbox Labs delivers nation-state-level red team operations aligned to MITRE ATT&CK. APT simulation, full-scope adversary emulation, and covert C2 operations for enterprise organizations."
      })}} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-8 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>→</span>
                <span className="text-white">Services</span>
                <span>→</span>
                <span className="text-[#FF4500]">Red Team Operations</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="font-mono text-[10px] tracking-widest uppercase border border-[#FF4500] text-[#FF4500] px-3 py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF4500] animate-pulse"></span>
                  APT SIMULATION
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase border border-white/20 px-3 py-1">
                  MITRE ATT&CK ALIGNED
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase border border-white/20 px-3 py-1">
                  FULL SCOPE
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 uppercase">
                Red Team <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Operations</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-mono text-white/80 mb-8 border-l-2 border-[#FF4500] pl-6">
                Nation-State Level Attacks.<br/>
                Authorized. Documented. Devastating.
              </h2>

              <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
                Red team operations are the gold standard of offensive security testing. 
                Unlike penetration tests that identify individual vulnerabilities, a Blackbox Labs red team engagement simulates the complete attack lifecycle of an advanced threat actor — from initial access through lateral movement, privilege escalation, data exfiltration, and persistence installation.
                <br/><br/>
                We don't run automated scanners. We run campaigns. Every technique is operator-executed, every move is deliberate, and every finding is mapped to MITRE ATT&CK. The result is not a list of CVEs — it's a documented proof that a determined adversary could achieve their objectives against your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/request-audit" className="bg-[#FF4500] text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 group">
                  REQUEST RED TEAM ENGAGEMENT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/scoping-call" className="border border-white/20 text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                  BOOK SCOPING CALL
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block w-full max-w-sm">
              <div className="border border-white/10 bg-black/50 p-6 font-mono text-sm">
                <div className="text-[#FF4500] mb-4 border-b border-white/10 pb-4">ENGAGEMENT_STATS</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Critical Finding Rate</span>
                    <span className="text-white font-bold">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Client Score</span>
                    <span className="text-white font-bold">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Avg Time to First Finding</span>
                    <span className="text-white font-bold">72 hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Avg Time to Domain Admin</span>
                    <span className="text-white font-bold">6 hrs</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[10px] text-white/60">
                  <span>[ 1,200+ 0-Days Found ]</span>
                  <span>[ 4,800+ Systems Breached ]</span>
                  <span>[ OSCP · CRTO · CREST ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IT / COMPARISON */}
      <AnimatedSection id="what-is-it" number="01" title="WHAT_IS_RED_TEAM" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">What Is a Red Team Operation?</h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                A red team operation is a goal-oriented, full-scope adversary simulation where skilled offensive security operators emulate the tactics, techniques, and procedures (TTPs) of real-world threat actors — from organized cybercriminal groups to nation-state actors like APT28, Lazarus Group, or ALPHV.
              </p>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                The key distinction from penetration testing: red teaming measures your entire security ecosystem — people, processes, and technology — under realistic attack conditions. It answers the question every CISO actually needs answered:
              </p>
              <blockquote className="border-l-4 border-[#FF4500] pl-6 py-2 text-xl font-mono font-medium italic">
                "If a sophisticated attacker targeted us right now, how far would they get — and would we even know?"
              </blockquote>
            </div>

            <div className="bg-white border border-black/10 shadow-[8px_8px_0_rgba(0,0,0,1)] p-8">
              <h3 className="font-mono font-bold uppercase mb-6 flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#FF4500]" />
                Penetration Test vs. Red Team
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Scope", pen: "Defined targets", red: "Full organization" },
                  { label: "Goal", pen: "Find vulnerabilities", red: "Achieve attacker objectives" },
                  { label: "Duration", pen: "Days to weeks", red: "Weeks to months" },
                  { label: "Knowledge", pen: "Usually white/grey box", red: "Black box (no prior access)" },
                  { label: "Stealth", pen: "Not required", red: "Maximum stealth" },
                  { label: "Reporting", pen: "Vulnerability list", red: "Full attack chain narrative" },
                  { label: "SOC Awareness", pen: "Known to all", red: "Known only to CISO" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-black/5 last:border-0">
                    <div className="font-mono text-black/60">{row.label}</div>
                    <div className="text-black/70">{row.pen}</div>
                    <div className="font-bold text-[#FF4500]">{row.red}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ENGAGEMENT MODELS */}
      <AnimatedSection id="models" number="02" title="ENGAGEMENT_MODELS" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-16 text-center">Three Engagement Models</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Scope Red Team",
                badge: "RECOMMENDED FOR ENTERPRISE",
                desc: "The most comprehensive assessment available. Our operators begin with zero knowledge of your environment and attempt to achieve a defined objective using any legitimate attack vector available.",
                duration: "6–12 weeks",
                bestFor: "Enterprises with mature security programs wanting real-world resilience validation."
              },
              {
                title: "Threat-Intelligence Led",
                badge: "REGULATORY COMPLIANCE",
                desc: "Designed for organizations operating under DORA, TIBER-EU, CBEST, or NIST frameworks. We build the engagement around specific threat actors known to target your sector.",
                duration: "8–16 weeks",
                bestFor: "Financial institutions, critical infrastructure, regulated industries requiring compliance evidence."
              },
              {
                title: "Assumed Breach / Purple",
                badge: "RAPID VALIDATION",
                desc: "Starting with an assumed internal foothold, we test how far a real attacker can move inside your environment after initial access. Ideal for testing SOC detection capabilities.",
                duration: "2–6 weeks",
                bestFor: "Organizations wanting to validate SOC detection capabilities and improve response procedures."
              }
            ].map((model, i) => (
              <div key={i} className="border border-white/10 bg-black p-8 hover:border-[#FF4500]/50 transition-colors group relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4500] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#FF4500] mb-4 border border-[#FF4500]/30 inline-block px-2 py-1">
                  [ {model.badge} ]
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{model.title}</h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">{model.desc}</p>
                <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-6">
                  <div className="flex justify-between">
                    <span className="text-white/60">Duration:</span>
                    <span className="text-white">{model.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <span className="text-white/60">Best For:</span>
                    <span className="text-white/80 leading-relaxed">{model.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ATTACK VECTORS */}
      <AnimatedSection id="vectors" number="03" title="ATTACK_SURFACE" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Full Attack Surface Coverage</h2>
            <p className="text-lg text-black/70">
              A Blackbox Labs red team engagement is not limited to your network perimeter. Real attackers aren't either. We test across every vector available to a motivated adversary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Digital Infrastructure", desc: "External attack surface, internal networks, Active Directory, VPN/remote access, CI/CD pipelines, and supply chain dependencies." },
              { icon: Server, title: "Web & Application Layer", desc: "Public-facing applications, internal web portals, APIs, authentication systems, session management, and business logic flaws." },
              { icon: Users, title: "Human & Social Layer", desc: "Targeted spear-phishing campaigns, vishing operations, pretexting, executive impersonation, and AI-generated social engineering." },
              { icon: Lock, title: "Physical Security", desc: "Badge cloning, tailgating, physical intrusion into server rooms and offices, RFID attacks, and hardware implant deployment." },
              { icon: Shield, title: "Identity & Credential", desc: "Credential harvesting, Kerberoasting, AS-REP roasting, Pass-the-Hash, MFA bypass via AiTM proxy, and OAuth token theft." },
              { icon: Cloud, title: "Cloud & SaaS", desc: "AWS IAM misconfiguration, Azure AD privilege escalation, S3/Blob/GCS exposure, container escape, and cross-tenant attacks." }
            ].map((vector, i) => (
              <div key={i} className="bg-white border border-black/10 p-8 hover:border-black transition-colors group">
                <vector.icon className="w-8 h-8 text-[#FF4500] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-3">{vector.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{vector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* DELIVERABLES */}
      <AnimatedSection id="deliverables" number="04" title="DELIVERABLES" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">What You Receive</h2>
              <p className="text-lg text-white/60 mb-12">
                A Blackbox Labs red team report is not a vulnerability dump. It is a narrative of how your organization would be compromised, how your defenses performed, and exactly what to do next.
              </p>
              
              <div className="space-y-8">
                <div className="border-l-2 border-[#FF4500] pl-6">
                  <h3 className="text-xl font-bold mb-4">Document 1 — Technical Report</h3>
                  <ul className="space-y-2 text-white/70 font-mono text-sm">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Full attack chain narrative with timeline</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> MITRE ATT&CK Navigator heatmap</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Every finding CVSS-scored with business impact</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Proof-of-concept evidence (screenshots, logs)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Detection gap analysis — what your SOC missed</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Prioritized remediation roadmap (30/90/180 days)</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="text-xl font-bold mb-4">Document 2 — Executive Brief</h3>
                  <ul className="space-y-2 text-white/70 font-mono text-sm">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Non-technical board-ready summary</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Business risk translation (dollar exposure)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Comparison against industry peers</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Investment prioritization recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#FF4500]/50 -mt-px -mr-px"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#FF4500]/50 -mb-px -ml-px"></div>
              
              <Quote className="w-12 h-12 text-[#FF4500]/20 mb-6" />
              <p className="text-xl md:text-2xl font-display leading-relaxed mb-8">
                "Blackbox Labs found what three other red team firms missed in 18 months of testing. They were inside our core banking system in under 6 hours. That finding alone justified 10 years of security budgets."
              </p>
              <div className="font-mono text-sm text-white/50">
                — CISO, Tier-1 European Bank, $2.3T AUM
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection id="faq" number="05" title="FAQ" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <ContactFAQ 
            faqs={redTeamFaqs}
            title="Frequently Asked Questions"
            subtitle="Deliverables typically include an executive summary, attack chains mapped to MITRE ATT&CK, prioritized remediation, detection gaps, PoC artifacts, and a Purple Team remediation workshop."
            eyebrow="// RED TEAM OPERATIONS"
          />
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <section data-cursor="dark" className="py-32 px-8 md:px-12 bg-[#FF4500] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">
            Ready to find out what a real attacker would do?
          </h2>
          <p className="text-xl mb-12 font-mono opacity-90">
            Every engagement starts with a 30-minute scoping call — direct with a senior operator. No sales rep. No automated proposal. Just an honest conversation about your threat model.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/request-audit" className="bg-black text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
              REQUEST RED TEAM ENGAGEMENT
            </Link>
            <Link to="/scoping-call" className="bg-transparent border border-black/20 text-black font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-black/10 transition-colors flex items-center justify-center gap-3">
              BOOK SCOPING CALL
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs opacity-70">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> NDA FIRST</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24HR RESPONSE</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> STRICT RULES OF ENGAGEMENT</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function Quote(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function Cloud(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
