import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Terminal, Check, ArrowRight, Mail, Phone, MessageSquare, Briefcase, Building2, UserX, BrainCircuit, AlertTriangle } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactFAQ } from '../components/ContactFAQ';
import SEO from '../components/SEO';

const socialEngFaqs = [
  {
    q: "Will employees be informed about the social engineering test?",
    a: "Only your CISO, security leadership, and legal counsel are informed. The employees being tested are not aware — that's what makes the results meaningful. Testing employees who know they're being tested produces artificial results that give false confidence. We operate under strict Rules of Engagement and never cause real harm to individuals."
  },
  {
    q: "What happens to employees who \"fail\" the test?",
    a: "Nothing punitive. Our philosophy is that failing a realistic social engineering test is not a character flaw — it's evidence that the training hasn't been effective enough. We strongly advise against name-and-shame approaches. Our reports identify departmental and role-based risk patterns without focusing on individuals, and provide specific training recommendations to address the gaps we find."
  },
  {
    q: "Can you simulate AI-powered social engineering, including deepfakes?",
    a: "Yes. We offer deepfake voice simulation as part of our advanced vishing engagements, testing how your executive protection protocols respond to calls from what sounds exactly like your CEO or CFO. This represents the current frontier of social engineering threat and is becoming increasingly relevant for financial institutions and high-value organizations."
  },
  {
    q: "How is this different from the phishing simulation tools our IT team already uses?",
    a: "Standard phishing simulation platforms (KnowBe4, Proofpoint, Cofense) send generic templates to all employees. They measure click rates. Blackbox Labs engagements are adversary simulations — we build custom pretexts based on OSINT specific to your organization, target specific roles and individuals most likely to be attacked in a real incident, chain multiple attack vectors together (email → phone → physical), and test your escalation and incident response processes under realistic conditions. The difference is compliance checkbox versus real threat assessment."
  },
  {
    q: "Can physical penetration testing be included?",
    a: "Yes. Physical social engineering — tailgating, badge cloning, impersonation — can be included as a standalone engagement or combined with digital social engineering for a full-scope assessment. Physical testing requires additional legal authorization and Rules of Engagement signed before commencement. We cover up to [N] physical locations per engagement depending on scope."
  },
  {
    q: "How long does a social engineering engagement take?",
    a: "Digital-only campaigns (phishing + vishing + smishing) typically run 1–3 weeks including campaign design, execution, and reporting. Physical engagements add 1–2 weeks per location. Full-scope multi-channel engagements with multiple campaigns run 4–6 weeks. We recommend quarterly testing — human behavior changes over time and requires ongoing measurement."
  },
  {
    q: "What does a social engineering assessment cost?",
    a: "Targeted spear-phishing campaigns start at $8,000. Combined phishing + vishing engagements start at $14,000. Full-scope multi-vector campaigns (digital + physical) typically range from $25,000–$60,000 depending on organization size, number of locations, and campaign complexity."
  }
];

export const SocialEngineeringPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Social Engineering Testing",
        "provider": {
          "@type": "Organization",
          "name": "Blackbox Labs"
        },
        "description": "Blackbox Labs simulates real-world social engineering attacks — hand-crafted spear-phishing, vishing operations, smishing, and physical intrusion.",
        "serviceType": "Social Engineering Penetration Testing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": socialEngFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://blackboxlabs.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://blackboxlabs.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Social Engineering Testing",
            "item": "https://blackboxlabs.com/services/social-engineering"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-24">
      <SEO 
        title="Social Engineering Testing | Phishing, Vishing & Physical | Blackbox Labs"
        description="Blackbox Labs simulates real-world social engineering attacks — hand-crafted spear-phishing, vishing operations, smishing, and physical intrusion. Find out how far your human layer can be exploited. Request an assessment."
        canonical="/services/social-engineering"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* HERO SECTION */}
      <AnimatedSection id="hero" number="01" title="SOCIAL_ENG" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Services</span>
            <span>/</span>
            <span className="text-[#FF4500]">Social Engineering Testing</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ PHISHING ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ VISHING ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ SMISHING ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ PHYSICAL ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ BEC ]</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Social <br/>
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-600">Testing.</span>
          </h1>

          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight">
              Your Firewall Is Excellent.<br/>
              <span className="text-[#FF4500]">Your People Are a Different Story.</span>
            </h2>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-6">
              The most sophisticated firewall in the world can't stop a well-trained social engineer. 68% of data breaches in 2024 were attributed to human error — and attackers know it. Social engineering isn't a last resort. For most threat actors, it's the first call they make.
            </p>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-12">
              Blackbox Labs designs and executes social engineering engagements that go far beyond canned phishing templates. Every campaign is hand-crafted using real OSINT on your organization and your people — creating scenarios realistic enough to fool even your most security-aware employees. Because that's exactly what real threat actors do.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link to="/request-audit" className="bg-[#FF4500] text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 group">
                REQUEST A SOCIAL ENGINEERING ASSESSMENT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/request-audit" className="bg-transparent border border-white/20 text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                DOWNLOAD SERVICE BRIEF
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-white/50">
              <div><span className="text-[#FF4500] font-bold text-lg block mb-1">98%</span> of cyberattacks involve social engineering</div>
              <div><span className="text-[#FF4500] font-bold text-lg block mb-1">$2.77B</span> in BEC losses reported to FBI in 2024</div>
              <div><span className="text-[#FF4500] font-bold text-lg block mb-1">442%</span> surge in vishing attacks in late 2024</div>
              <div><span className="text-[#FF4500] font-bold text-lg block mb-1">68%</span> of breaches caused by human error</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* RISK MATRIX (STATS) */}
      <AnimatedSection id="risk" number="02" title="THE_RISK" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">The Numbers That Should Worry Your Board</h2>
            <p className="font-mono text-sm text-black/70 max-w-3xl">
              Technical security has never been stronger. Endpoint detection, MFA, network segmentation — organizations have invested billions. And yet breaches keep happening. The reason is simple: attackers stopped trying to defeat your technology. They started calling your employees instead.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px] bg-white border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <thead>
                <tr className="border-b-2 border-[#FF4500] font-mono text-[10px] uppercase tracking-widest text-[#FF4500]">
                  <th className="p-6 w-2/3 bg-black/5">Stat</th>
                  <th className="p-6 w-1/3 bg-black/5">Source</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm">
                {[
                  { stat: "68% of data breaches in 2024 were attributed to human error, including social engineering scams", source: "Secureframe / Verizon DBIR 2024" },
                  { stat: "Vishing attacks surged 442% in late 2024 — AI-powered deepfakes now drive multimillion-dollar scams including a $25.6M Arup case", source: "DeepStrike / Unit 42 / Palo Alto" },
                  { stat: "Business Email Compromise caused $2.77 billion in reported losses to the FBI in 2024 — the second-costliest cybercrime type", source: "Secureframe / FBI IC3 2024" },
                  { stat: "60% of security breaches involve human error, according to the Verizon DBIR 2025", source: "Keepnet Labs / Verizon DBIR 2025" },
                  { stat: "Social engineering attacks led to data exposure in 60% of cases — 16 percentage points higher than overall incidents", source: "GitNux / Unit 42 IR Report 2025" },
                  { stat: "AI-crafted phishing emails achieved 54% click rates in 2025 academic studies, compared to 12% for human-written ones", source: "Keepnet Labs / 2025 Academic Study" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/10 hover:bg-black/5 transition-colors">
                    <td className="p-6 font-bold text-black text-base">{row.stat}</td>
                    <td className="p-6 text-black/60 font-mono text-xs">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ATTACK VECTORS */}
      <AnimatedSection id="vectors" number="03" title="ATTACK_VECTORS" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Every Way a Social Engineer Gets In</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* VECTOR 01 */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF4500] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-black transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">VECTOR 01</div>
                  <h3 className="font-display text-xl font-bold">Spear Phishing & Whaling</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                [ MOST COMMON INITIAL ACCESS ]
              </div>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-sm">
                Generic phishing is dead. Real threat actors — and Blackbox Labs — conduct targeted spear-phishing campaigns built on hours of OSINT research into your organization, your employees' roles, their communication patterns, and the specific vendors and services your company uses.
              </p>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                Whaling targets executives directly — CFOs, CEOs, General Counsels — with hyper-personalized pretexts that exploit their authority and their busy schedules. We have achieved a 34% click rate against C-suite targets in engagements where the client was confident their executives were "security-aware." They were. It didn't help.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-white/10 pb-2 text-white/50">What we create:</h4>
                <ul className="space-y-2 font-mono text-xs text-white/70">
                  <li>▸ Spoofed domains passing visual inspection</li>
                  <li>▸ Cloned login portals with credential harvesting</li>
                  <li>▸ Malicious attachments bypassing email filters</li>
                  <li>▸ AiTM proxy campaigns stealing MFA tokens</li>
                  <li>▸ QR code phishing (quishing)</li>
                  <li>▸ Executive & vendor impersonation</li>
                </ul>
              </div>
            </div>

            {/* VECTOR 02 */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF4500] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-black transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">VECTOR 02</div>
                  <h3 className="font-display text-xl font-bold">Vishing — Voice Phishing</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                [ HIGHEST SUCCESS RATE ]
              </div>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-sm">
                A convincing phone call is more persuasive than any email. When someone believes they're speaking to a real person — an IT support engineer, a vendor, a bank representative, a regulator — their guard drops instantly.
              </p>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                Our operators conduct vishing campaigns that simulate the exact calls real threat actors make: urgent IT support requests that require "immediate verification," vendor calls requesting payment changes, executive assistants asking for calendar access, and HR processes that require "system updates."
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-white/10 pb-2 text-white/50">What we test:</h4>
                <ul className="space-y-2 font-mono text-xs text-white/70">
                  <li>▸ IT helpdesk impersonation</li>
                  <li>▸ Executive assistant pretexting</li>
                  <li>▸ Vendor relationship exploitation</li>
                  <li>▸ Regulatory/compliance impersonation</li>
                  <li>▸ MFA bypass via social engineering</li>
                  <li>▸ AI-enhanced voice synthesis (deepfakes)</li>
                </ul>
              </div>
            </div>

            {/* VECTOR 03 */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF4500] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-black transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">VECTOR 03</div>
                  <h3 className="font-display text-xl font-bold">Smishing — SMS Phishing</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                [ 9X MORE EFFECTIVE THAN EMAIL ]
              </div>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-sm">
                SMS click-through rates for social engineering campaigns range from 19% to 36% — versus 2–4% for email phishing. Mobile devices are trusted environments. Employees check SMS faster, with less scrutiny, and often on personal devices with fewer controls.
              </p>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                We design smishing campaigns that simulate the messages your employees are most likely to trust: IT security alerts, delivery notifications, executive communications, two-factor authentication prompts, and HR notifications.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-white/10 pb-2 text-white/50">What we test:</h4>
                <ul className="space-y-2 font-mono text-xs text-white/70">
                  <li>▸ Fake MFA / 2FA code requests</li>
                  <li>▸ Executive communication impersonation</li>
                  <li>▸ IT security alert lures</li>
                  <li>▸ HR and payroll notification scenarios</li>
                  <li>▸ Credential harvesting via mobile portals</li>
                  <li>▸ QR code delivery via SMS (quishing)</li>
                </ul>
              </div>
            </div>

            {/* VECTOR 04 */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF4500] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-black transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">VECTOR 04</div>
                  <h3 className="font-display text-xl font-bold">Business Email Compromise</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                [ $2.77B IN FBI-REPORTED LOSSES ]
              </div>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-sm">
                BEC is the most financially devastating social engineering attack in existence. Attackers compromise or impersonate executive email accounts to redirect wire transfers, modify payroll details, and authorize fraudulent transactions — often bypassing all technical controls because the email looks completely legitimate.
              </p>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                We simulate full BEC attack chains: executive account compromise, impersonation via lookalike domains, vendor email hijacking, and payroll fraud scenarios targeting finance, HR, and accounts payable teams.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-white/10 pb-2 text-white/50">What we test:</h4>
                <ul className="space-y-2 font-mono text-xs text-white/70">
                  <li>▸ CEO/CFO impersonation → wire transfers</li>
                  <li>▸ Vendor email compromise → invoice redirection</li>
                  <li>▸ Payroll diversion targeting HR/Finance</li>
                  <li>▸ M&A / legal document lures</li>
                  <li>▸ Lookalike domain detection resistance</li>
                  <li>▸ Response chain analysis</li>
                </ul>
              </div>
            </div>

            {/* VECTOR 05 */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF4500] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-black transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">VECTOR 05</div>
                  <h3 className="font-display text-xl font-bold">Physical Pen Testing</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                [ ON-SITE INTRUSION ]
              </div>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-sm">
                Every digital control you have can be bypassed by someone who simply walks through your door. Badge cloning, tailgating, impersonation of maintenance workers, delivery personnel, or IT contractors — physical social engineering attacks are executed at your locations.
              </p>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                Our operators have walked into server rooms, executive floors, and data centers at organizations that were confident their physical security was impenetrable. They were wrong.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-white/10 pb-2 text-white/50">What we test:</h4>
                <ul className="space-y-2 font-mono text-xs text-white/70">
                  <li>▸ Tailgating and piggyback entry</li>
                  <li>▸ Badge / RFID cloning attacks</li>
                  <li>▸ Impersonation of maintenance/IT personnel</li>
                  <li>▸ USB drop campaigns (hardware attacks)</li>
                  <li>▸ Server room and data center access</li>
                  <li>▸ Camera and surveillance bypass</li>
                </ul>
              </div>
            </div>

            {/* VECTOR 06 */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF4500] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-black transition-colors">
                  <UserX className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">VECTOR 06</div>
                  <h3 className="font-display text-xl font-bold">Pretexting & Impersonation</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                [ CROSS-CHANNEL ]
              </div>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-sm">
                Pretexting is the foundation of every sophisticated social engineering campaign. Before the phone rings, before the email lands, a skilled social engineer has built a complete false identity — LinkedIn profile, business email address, website, phone number — designed to survive verification attempts.
              </p>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                We test how your employees respond to sophisticated multi-channel impersonation: do they verify identity? Do they escalate? Do they follow your security policies when someone sounds convincing enough?
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-white/10 pb-2 text-white/50">What we test:</h4>
                <ul className="space-y-2 font-mono text-xs text-white/70">
                  <li>▸ Fake vendor / contractor identity construction</li>
                  <li>▸ Executive assistant manipulation</li>
                  <li>▸ IT helpdesk identity exploitation</li>
                  <li>▸ Regulatory body / auditor impersonation</li>
                  <li>▸ Multi-stage relationship building</li>
                  <li>▸ Cross-channel verification bypass</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* METHODOLOGY */}
      <AnimatedSection id="methodology" number="04" title="METHODOLOGY" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">How We Run a Social Engineering Engagement</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 md:before:ml-8 before:-translate-x-px md:before:translate-x-0 before:w-0.5 before:bg-black/10">
            {[
              {
                phase: "01",
                title: "INTELLIGENCE & TARGET PROFILING",
                desc: "OSINT research on your organization, key employees, vendors, communication patterns, technology stack, and publicly exposed information that attackers would use. LinkedIn, WHOSINT, breach databases, email harvesting, company directories. This phase is often the most revealing."
              },
              {
                phase: "02",
                title: "PRETEXT DEVELOPMENT",
                desc: "Custom campaign design based on intelligence gathered. Domain registration and spoofing, clone portal creation, script development, identity fabrication, physical props preparation (where in scope). Every pretext is vetted against your specific organizational context."
              },
              {
                phase: "03",
                title: "CAMPAIGN EXECUTION",
                desc: "Controlled delivery of attack scenarios across agreed channels: email, phone, SMS, and/or physical. Real-time tracking of responses, credential submissions, link clicks, and employee escalation behavior. No real damage. Complete documentation."
              },
              {
                phase: "04",
                title: "ESCALATION & CHAIN TESTING",
                desc: "Where permitted: follow-on exploitation of successful initial access. Testing how far a successful social engineer can go — from initial credential harvest to system access request to wire transfer authorization."
              },
              {
                phase: "05",
                title: "REPORTING & REMEDIATION",
                desc: "Detailed metrics report: click rates, credential submission rates, escalation rates, detection rates. MITRE ATT&CK mapping. Individual and departmental risk scoring. Specific remediation recommendations for security awareness training, policy, and technical controls."
              }
            ].map((step, i) => (
              <div key={i} className="relative flex items-start gap-6 md:gap-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-[#E5E5E5] shadow-[0_0_0_2px_rgba(0,0,0,0.1)] flex items-center justify-center font-display font-bold text-xl md:text-2xl text-[#FF4500] shrink-0 relative z-10">
                  {step.phase}
                </div>
                <div className="bg-white border border-black/15 p-6 md:p-8 shadow-[4px_4px_0_rgba(0,0,0,1)] flex-grow mt-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-4">PHASE {step.phase} — {step.title}</h3>
                  <p className="font-mono text-sm text-black/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* BENCHMARKS & AI THREAT */}
      <AnimatedSection id="benchmarks" number="05" title="BENCHMARKS" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Benchmarks */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Real Results From Real Engagements</h2>
              
              <div className="bg-[#111] border border-white/20 p-6 md:p-8 font-mono text-sm mb-8">
                <div className="text-white/60 mb-6 pb-4 border-b border-white/10">ENGAGEMENT BENCHMARKS — BLACKBOX LABS DATA</div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[#FF4500] font-bold mb-1">
                      <span>Average spear-phishing click rate:</span>
                      <span>34%</span>
                    </div>
                    <div className="text-white/60 text-xs">(Industry average for targeted campaigns)</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[#FF4500] font-bold mb-1">
                      <span>Average credential submission rate:</span>
                      <span>19%</span>
                    </div>
                    <div className="text-white/60 text-xs">(% of click recipients who entered credentials)</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[#FF4500] font-bold mb-1">
                      <span>Vishing compliance rate:</span>
                      <span>52%</span>
                    </div>
                    <div className="text-white/60 text-xs">(% of targets who followed attacker instructions)</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[#FF4500] font-bold mb-1">
                      <span>Physical intrusion success rate:</span>
                      <span>67%</span>
                    </div>
                    <div className="text-white/60 text-xs">(% of on-site attempts that gained unauthorized access)</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[#FF4500] font-bold mb-1">
                      <span>Average employee escalation rate:</span>
                      <span>12%</span>
                    </div>
                    <div className="text-white/60 text-xs">(% who correctly reported the attempt)</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[#FF4500] font-bold mb-1">
                      <span>Executive (C-suite) click rate:</span>
                      <span>28%</span>
                    </div>
                    <div className="text-white/60 text-xs">(Senior leadership is not immune)</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border-l-4 border-[#FF4500] p-6">
                <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Reality check:</h4>
                <p className="text-white/70 font-mono text-sm leading-relaxed">
                  Your employees are not failing because they're careless. They're failing because skilled social engineers are very good at what they do. The solution isn't blame. It's realistic testing, targeted training, and better processes.<br/><br/>
                  <span className="text-white font-bold">That's what Blackbox Labs delivers.</span>
                </p>
              </div>
            </div>

            {/* Right: AI Threat & Testimonial */}
            <div className="flex flex-col gap-8">
              <div className="bg-[#FF4500] text-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-black/50">
                  <BrainCircuit className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 bg-black text-white px-3 py-1 inline-block">
                    2025 THREAT LANDSCAPE
                  </div>
                  <h3 className="text-3xl font-display font-bold uppercase mb-6">The New Threat:<br/>AI-Powered Social Engineering</h3>
                  <p className="font-mono text-sm leading-relaxed mb-4 font-bold">
                    The threat landscape has fundamentally changed. AI-generated phishing emails achieve 54% click rates versus 12% for human-written ones. Deepfake voice synthesis can convincingly impersonate executives in real time. Automated social engineering platforms can launch thousands of personalized campaigns simultaneously.
                  </p>
                  <p className="font-mono text-sm leading-relaxed mb-6">
                    Blackbox Labs tests your defenses against AI-enhanced social engineering — including deepfake voice scenarios, AI-generated personalized email campaigns, and the emerging threat of agentic social engineering attacks.
                  </p>
                  <div className="bg-black/20 p-4 font-bold text-sm">
                    If your security awareness training was built for 2020's social engineering threats, it's already obsolete.
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-white/10 p-8 md:p-12 relative">
                <AlertTriangle className="w-12 h-12 text-[#FF4500]/20 mb-6" />
                <p className="text-xl font-display leading-relaxed mb-8">
                  "Our employees complete security awareness training quarterly. Blackbox ran a vishing campaign and 67% of our finance team followed social engineering instructions from a 'fake IT caller' within the first hour of the test. We had a 97% training completion rate. It didn't matter. Blackbox didn't shame us — they fixed us."
                </p>
                <div className="font-mono text-sm text-white/50">
                  — Head of Security Operations, Global Insurance Firm (45,000 employees)
                </div>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* COMPLIANCE */}
      <AnimatedSection id="compliance" number="06" title="COMPLIANCE" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4">Satisfy Your Compliance Requirements</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <thead>
                <tr className="border-b-2 border-black font-mono text-[10px] uppercase tracking-widest text-black">
                  <th className="p-4 bg-[#E5E5E5]">Framework</th>
                  <th className="p-4 bg-[#E5E5E5]">Requirement</th>
                  <th className="p-4 bg-[#E5E5E5]">How We Help</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm">
                {[
                  { frame: "PCI DSS v4.0", req: "Req 12.6 — Security awareness program", help: "Phishing simulation + metrics for compliance evidence" },
                  { frame: "HIPAA", req: "45 CFR 164.308(a)(5) — Awareness training", help: "Healthcare-specific phishing + vishing scenarios" },
                  { frame: "ISO 27001", req: "Annex A.6.3 — Information security awareness", help: "Social engineering assessment + training gap analysis" },
                  { frame: "NIST 800-53", req: "AT-2 — Literacy training & awareness", help: "Phishing simulation aligned to NIST controls" },
                  { frame: "SOC 2 Type II", req: "CC1.4 — Human resources controls", help: "Employee awareness evidence for audit" },
                  { frame: "CMMC Level 2", req: "AT.2.056 — Cybersecurity awareness training", help: "DoD-aligned phishing and awareness testing" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/10 hover:bg-black/5 transition-colors">
                    <td className="p-4 font-bold text-black">{row.frame}</td>
                    <td className="p-4 text-black/70 font-mono text-xs">{row.req}</td>
                    <td className="p-4 text-black/70">{row.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection id="faq" number="07" title="FAQ" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <ContactFAQ 
            faqs={socialEngFaqs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our social engineering methodology, rules of engagement, and reporting."
            eyebrow="// SOCIAL ENGINEERING TESTING"
          />
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <section data-cursor="dark" className="py-32 px-8 md:px-12 bg-[#FF4500] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">
            Your employees are being targeted right now.
          </h2>
          <p className="text-xl mb-12 font-mono opacity-90 font-bold">
            We can tell you which ones are most vulnerable — and exactly what it takes to get past them.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to="/request-audit" className="bg-black text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
              REQUEST A SOCIAL ENGINEERING ASSESSMENT
            </Link>
            <Link to="/scoping-call" className="bg-transparent border border-black/20 text-black font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-black/10 transition-colors flex items-center justify-center gap-3">
              BOOK A SCOPING CALL
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs opacity-70">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> NDA FIRST</span>
            <span className="flex items-center gap-2"><Terminal className="w-4 h-4" /> 24HR RESPONSE</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> NO EMPLOYEE SHAMING</span>
          </div>
        </div>
      </section>
    </div>
  );
}
