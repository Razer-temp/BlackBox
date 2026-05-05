import React, { useEffect } from 'react';
import { CompanyPageLayout } from '../../components/CompanyPageLayout';
import { AnimatedSection } from '../../components/AnimatedSection';
import { Terminal, ArrowRight } from 'lucide-react';

export const CareersPage = () => {
  useEffect(() => {
    document.title = "Careers at Blackbox Labs | Red Team Operator Jobs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Join Blackbox Labs — elite offensive security firm. Open roles for red team operators, vulnerability researchers, exploit developers, and social engineers.');
  }, []);

  const openRoles = [
    {
      title: "SENIOR RED TEAM OPERATOR",
      reqs: "OSCP/CRTO minimum · 3+ years red team experience · Custom tool development capability · Active Directory attack expertise · DEF CON/Black Hat speaker preferred"
    },
    {
      title: "VULNERABILITY RESEARCHER",
      reqs: "Binary analysis (IDA Pro/Ghidra) · Fuzzing experience (AFL++/libFuzzer) · CVE credits · Exploit development · Reverse engineering on closed-source targets"
    },
    {
      title: "CLOUD SECURITY SPECIALIST",
      reqs: "AWS/Azure/GCP certified · IAM attack path expertise · Kubernetes security · Container escape research · Terraform/IaC security review experience"
    },
    {
      title: "APPLICATION SECURITY OPERATOR",
      reqs: "Web app pen test expertise · API security (REST/GraphQL) · Burp Suite Pro mastery · Business logic vulnerability focus · BSCP preferred"
    },
    {
      title: "SOCIAL ENGINEER",
      reqs: "Phishing infrastructure build experience · Vishing + physical intrusion · OSINT specialist · Physical security bypass · Zero ego, full operator"
    },
    {
      title: "OPEN APPLICATION",
      reqs: "None of the above fit exactly? Send us your work — CVEs, published research, conference talks, CTF writeups, or just the thing you broke that you shouldn't have been able to break."
    }
  ];

  return (
    <CompanyPageLayout 
      title="Join the Red Team" 
      subtitle="We're Looking for Operators. Not Checkbox Tickers."
      breadcrumb="Careers"
    >
      <AnimatedSection id="intro" number="02" title="CULTURE" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-sm text-black/70 leading-relaxed mb-6">
                Blackbox Labs doesn't hire penetration testers who run Nessus and call it a red team. We hire operators — people who think like threat actors, write their own tools, find their own CVEs, and care deeply about the craft of offensive security.
              </p>
              <p className="font-mono text-sm text-black/70 leading-relaxed mb-6">
                If you've presented at DEF CON, filed a CVE against something nobody else was looking at, built a custom C2 framework for a specific engagement need, or broken something that everyone said was unbreakable — we want to talk.
              </p>
              <p className="font-mono text-sm text-black/70 leading-relaxed">
                We operate lean. Everyone here is a senior operator. There are no junior analysts getting in your way. There are no account managers between you and the client. There is just the work.
              </p>
            </div>
            
            <div className="bg-black text-white p-8 border border-black/15 shadow-[8px_8px_0_rgba(255,69,0,1)]">
              <h3 className="font-display text-2xl font-bold mb-6 text-[#FF4500]">Why Blackbox Labs:</h3>
              <ul className="space-y-4 font-mono text-xs text-white/80">
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Work on the most complex, highest-stakes engagements in the industry</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Quarterly research time — 20% of your time is yours to spend on original vulnerability research</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> No micromanagement. You own your engagements end-to-end</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Conference budget — DEF CON, Black Hat actively encouraged</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Competitive compensation + performance bonuses tied to outcomes</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Remote-first — we don't care where you work, only what you produce</li>
                <li className="flex items-start gap-3"><span className="text-[#FF4500]">▸</span> Internal tooling budget — if you need a tool, build it and we'll fund it</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="roles" number="03" title="OPEN_ROLES" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Open Roles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {openRoles.map((role, i) => (
              <div key={i} className="bg-[#111] border border-white/15 p-6 hover:border-[#FF4500] transition-colors group flex flex-col">
                <div className="text-white/60 mb-4 flex items-center gap-2 font-mono text-xs">
                  <Terminal className="w-4 h-4" />
                  <span>root@blackbox:~# ./apply --role="{role.title.toLowerCase().replace(/ /g, '-')}"</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#FF4500] mb-4">[ {role.title} ]</h3>
                <p className="font-mono text-xs text-white/70 leading-relaxed mb-8 flex-grow">
                  <span className="text-white/60 block mb-2">Requirements:</span>
                  {role.reqs}
                </p>
                <a href="mailto:careers@blackboxlabs.com" className="font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-white group-hover:text-[#FF4500] transition-colors mt-auto pt-4 border-t border-white/10">
                  [ APPLY → ]
                </a>
              </div>
            ))}
          </div>

          <div className="bg-black border border-red-500/30 p-8 font-mono text-sm text-red-500/80 mb-16">
            <div className="mb-4 text-red-500 font-bold">// What We Don't Want:</div>
            <div className="space-y-2">
              <div>// People who rely entirely on automated tools</div>
              <div>// People who need to be told what to find</div>
              <div>// People who write reports from scanner output</div>
              <div>// People who haven't broken anything recently</div>
              <div>// People who think certifications replace craft</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Application Process:</h3>
              <div className="space-y-6 font-mono text-sm text-white/70">
                <div className="flex gap-4">
                  <span className="text-[#FF4500] font-bold">01.</span>
                  <p>Send your application — no cover letter required. Send your CVEs, your research, your talks, your GitHub. Show us the work.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#FF4500] font-bold">02.</span>
                  <p>Technical screening — a short, practical exercise relevant to the role. Not a whiteboard. Real work.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#FF4500] font-bold">03.</span>
                  <p>Engagement walkthrough — talk through a past engagement with a senior operator. No gotchas. Just conversation.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#FF4500] font-bold">04.</span>
                  <p>Offer — fixed salary + performance structure. Clear, no games.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111] border border-white/15 p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Contact:</h3>
              <div className="space-y-4 font-mono text-sm text-white/70">
                <p><span className="text-white/50 w-24 inline-block">Email:</span> <a href="mailto:careers@blackboxlabs.com" className="text-[#FF4500] hover:underline">careers@blackboxlabs.com</a></p>
                <p><span className="text-white/50 w-24 inline-block">PGP:</span> <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc" className="hover:text-white">[Download Key]</a> — encrypted submissions welcome</p>
                <p><span className="text-white/50 w-24 inline-block">Location:</span> Remote · Global · Operators Everywhere</p>
              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>
    </CompanyPageLayout>
  );
};
