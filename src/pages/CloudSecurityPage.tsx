import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Terminal, Check, ArrowRight, Cloud, Server, Database, Key, Box, Network } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactFAQ } from '../components/ContactFAQ';
import SEO from '../components/SEO';

const cloudFaqs = [
  {
    q: "What's the difference between a CSPM tool and a manual cloud security assessment?",
    a: "Cloud Security Posture Management (CSPM) tools like Wiz, Orca, and Prisma Cloud are excellent at finding known misconfigurations at scale — they compare your configuration against a ruleset and flag deviations. What they cannot do is chain multiple medium-severity misconfigurations together into a realistic attack path, understand business context that makes a \"low severity\" finding critical in your specific environment, or find novel attack vectors that haven't been coded into their rules yet. Manual cloud penetration testing does all three. We recommend both — CSPM for continuous monitoring, manual assessment for annual deep-dive validation."
  },
  {
    q: "Do you assess multi-cloud environments?",
    a: "Yes. We commonly assess organizations running workloads across AWS, Azure, and GCP simultaneously, including the cross-cloud trust relationships and identity federation configurations that connect them. Multi-cloud environments introduce unique attack surfaces — particularly where identities can traverse between cloud providers — and benefit from assessment by operators who understand all three platforms."
  },
  {
    q: "Will cloud security testing impact our production workloads?",
    a: "No. Cloud security assessments are designed to be non-destructive. Configuration reviews use read-only access where possible. Exploitation testing is performed in carefully controlled conditions with your team informed of all actions before they occur. We have never caused an unplanned production outage in our history of cloud security engagements. We can also test against staging environments that mirror production configuration."
  },
  {
    q: "Do we need to provide you with administrative access?",
    a: "For a configuration review, we request read-only access (SecurityAudit in AWS, Reader in Azure, Viewer in GCP). For penetration testing that includes exploitation, we begin with a low-privileged account representing a realistic attacker foothold and attempt to escalate from there — which is more realistic and more valuable than starting from admin access."
  },
  {
    q: "Does Blackbox Labs test Kubernetes and container environments?",
    a: "Yes. Kubernetes and container security is a specialist capability within our cloud security practice. We assess EKS (AWS), AKS (Azure), and GKE (GCP) managed clusters as well as self-managed Kubernetes environments, aligned to the CIS Kubernetes Benchmark and real-world attack techniques including container escape, RBAC abuse, supply chain attacks, and node compromise."
  },
  {
    q: "How long does a cloud security assessment take?",
    a: "Single-cloud assessments (one provider, one account) typically take 1–2 weeks. Multi-cloud assessments or large enterprise environments with multiple accounts and complex IAM architectures may require 3–4 weeks. Kubernetes-specific assessments add 1 week. We scope based on number of accounts, services in use, and testing objectives — and provide a fixed timeline in our proposal."
  },
  {
    q: "How much does a cloud security assessment cost?",
    a: "Single-cloud configuration reviews start at $15,000. Full cloud penetration testing assessments (including exploitation) start at $25,000. Multi-cloud assessments and those including Kubernetes typically range from $35,000–$80,000 depending on scope and environment complexity. We provide fixed-fee proposals after a scoping call."
  }
];

export const CloudSecurityPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Cloud Security Assessment",
        "provider": {
          "@type": "Organization",
          "name": "Blackbox Labs"
        },
        "description": "Manual cloud security assessment and penetration testing across AWS, Azure, and GCP.",
        "serviceType": "Cloud Penetration Testing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": cloudFaqs.map(faq => ({
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
            "name": "Cloud Security Assessment",
            "item": "https://blackboxlabs.com/services/cloud-security-assessment"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-24">
      <SEO 
        title="Cloud Security Assessment | AWS, Azure & GCP | Blackbox Labs"
        description="Manual cloud security assessment and penetration testing across AWS, Azure, and GCP. IAM misconfiguration, container escape, S3 exposure, Kubernetes attack paths. Request an assessment."
        canonical="/services/cloud-security-assessment"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* HERO SECTION */}
      <AnimatedSection id="hero" number="01" title="CLOUD_SEC" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Services</span>
            <span>/</span>
            <span className="text-[#FF4500]">Cloud Security Assessment</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ AWS ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ AZURE ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ GCP ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ KUBERNETES ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ IAM ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ SERVERLESS ]</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Cloud Security <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-600">Assessment.</span>
          </h1>

          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight">
              Your Cloud Provider Secures the Infrastructure.<br/>
              <span className="text-[#FF4500]">You're Responsible for Everything Else.</span>
            </h2>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-6">
              The AWS Shared Responsibility Model makes one thing clear: Amazon secures the cloud. You secure what's in it. And according to Gartner, through 2025 an estimated 99% of cloud security failures result from customer misconfigurations — not from provider vulnerabilities.
            </p>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-12">
              Blackbox Labs conducts manual cloud security assessments and penetration tests across AWS, Azure, and GCP — mapping your IAM attack surface, chaining misconfigurations into real exploit paths, testing container and Kubernetes security, and finding the configuration errors that automated cloud security posture tools consistently miss because they require human judgment to chain together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link to="/request-audit" className="bg-[#FF4500] text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 group">
                REQUEST A CLOUD SECURITY ASSESSMENT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/request-audit" className="bg-transparent border border-white/20 text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                DOWNLOAD SERVICE BRIEF
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">
              <span>[ AWS · Azure · GCP ]</span>
              <span>[ Kubernetes ]</span>
              <span>[ CSPM + Manual ]</span>
              <span>[ SOC 2 · PCI DSS · ISO 27001 ]</span>
              <span>[ OSCP Certified ]</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* THREAT REALITY */}
      <AnimatedSection id="threat-reality" number="02" title="THREAT_REALITY" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Why Cloud Security Is Different — And Why It Requires Manual Testing</h2>
            <p className="font-mono text-sm text-black/70 max-w-3xl mb-6">
              Cloud environments introduce attack vectors that traditional network and application testing never encounters. IAM roles and trust policies create privilege escalation paths invisible to network scanners. Storage buckets exposed to the internet can be discovered in seconds by anyone running Shodan. Serverless functions with excessive permissions can become stepping stones to full account compromise.
            </p>
            <p className="font-mono text-sm text-black/70 max-w-3xl">
              Automated cloud security posture management (CSPM) tools are excellent at finding known misconfigurations at scale. They are poor at chaining multiple medium-severity findings into a critical attack path — the way a real attacker would. <span className="font-bold text-black">That's what Blackbox Labs does.</span>
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
                  { stat: "The global average cost of a cloud breach in 2025 was $4.4 million — a direct link exists between risk scale and business impact", source: "Wiz / IBM 2025" },
                  { stat: "Through 2025, 99% of cloud security failures result from customer misconfigurations, not provider vulnerabilities", source: "BSG Blog / Gartner" },
                  { stat: "IAM is often the top vulnerability in AWS because a single misconfigured role or leaked credential can cascade across connected environments", source: "Wiz / Wiz Research 2025" },
                  { stat: "In 2019, Capital One experienced a breach affecting over 100 million customers — starting with a single SSRF vulnerability exploiting the AWS Instance Metadata Service", source: "Aikido / Cloud Security Research" }
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

      {/* PLATFORMS */}
      <AnimatedSection id="platforms" number="03" title="PLATFORMS" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">AWS, Azure & GCP — Complete Multi-Cloud Coverage</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AWS */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#FF9900] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF9900] group-hover:bg-[#FF9900] group-hover:text-black transition-colors">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF9900] font-bold">PLATFORM 01</div>
                  <h3 className="font-display text-xl font-bold">AWS Security Assessment</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF9900]/20">
                [ MOST DEPLOYED CLOUD PLATFORM ]
              </div>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                AWS is the world's most-used cloud platform — and the most frequently targeted. Our AWS security assessments go beyond automated CSPM scanning to manually chain IAM misconfigurations, exposed services, and privilege escalation paths into demonstrable attack scenarios with real business impact.
              </p>
              <div className="mt-auto space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">IDENTITY & ACCESS MANAGEMENT (IAM):</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ Over-permissioned IAM roles and policies</li>
                    <li>▸ Trust policy misconfiguration</li>
                    <li>▸ Wildcard permissions (*) in production</li>
                    <li>▸ IAM user long-term access key exposure</li>
                    <li>▸ Instance profile abuse (IMDSv1)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">STORAGE & DATA:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ Public S3 bucket exposure</li>
                    <li>▸ S3 bucket policy misconfiguration</li>
                    <li>▸ Secrets Manager access review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">CONTAINERS & SERVERLESS:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ EKS/ECS misconfiguration</li>
                    <li>▸ Lambda environment variable secret exposure</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AZURE */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#0089D6] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#0089D6] group-hover:bg-[#0089D6] group-hover:text-black transition-colors">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#0089D6] font-bold">PLATFORM 02</div>
                  <h3 className="font-display text-xl font-bold">Azure Security Assessment</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#0089D6]/10 text-[#0089D6] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#0089D6]/20">
                [ ENTERPRISE CLOUD LEADER ]
              </div>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                Azure's deep integration with Microsoft 365, Active Directory, and Entra ID creates unique attack paths that bridge cloud and on-premises environments. Azure AD (Entra ID) misconfiguration is the most common entry point for cloud-to-on-prem lateral movement.
              </p>
              <div className="mt-auto space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">IDENTITY & ACCESS:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ Entra ID (Azure AD) misconfiguration</li>
                    <li>▸ Privileged Identity Management (PIM) bypass</li>
                    <li>▸ Service principal over-permissioning</li>
                    <li>▸ Managed identity abuse</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">CLOUD-TO-ON-PREM:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ Azure AD Connect synchronization security</li>
                    <li>▸ Pass-through authentication attack paths</li>
                    <li>▸ Hybrid identity escalation scenarios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">CONTAINERS & SERVERLESS:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ AKS (Azure Kubernetes Service) configuration</li>
                    <li>▸ Azure Functions over-permissioning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GCP */}
            <div className="bg-[#111] border border-white/15 p-8 flex flex-col hover:border-[#EA4335] transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#EA4335] group-hover:bg-[#EA4335] group-hover:text-black transition-colors">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#EA4335] font-bold">PLATFORM 03</div>
                  <h3 className="font-display text-xl font-bold">GCP Security Assessment</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#EA4335]/10 text-[#EA4335] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#EA4335]/20">
                [ GROWING ENTERPRISE ADOPTION ]
              </div>
              <p className="font-sans text-white/70 mb-8 leading-relaxed text-sm">
                GCP's organization-level resource hierarchy and IAM workload identity federation introduce unique privilege escalation paths. Service account key sprawl — JSON keys downloaded and stored insecurely — is the most common initial access vector in GCP environments.
              </p>
              <div className="mt-auto space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">IDENTITY & ACCESS:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ Service account key exposure and sprawl</li>
                    <li>▸ Over-permissioned service accounts</li>
                    <li>▸ Workload identity federation misconfiguration</li>
                    <li>▸ GCP IAM primitive roles (Owner, Editor, Viewer)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">STORAGE & DATA:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ GCS bucket public access</li>
                    <li>▸ Uniform bucket-level access not enforced</li>
                    <li>▸ BigQuery dataset exposure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-3 border-b border-white/10 pb-2 text-white/50">CONTAINERS & SERVERLESS:</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-white/70">
                    <li>▸ GKE cluster misconfiguration</li>
                    <li>▸ Cloud Run and Cloud Functions permissions</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Kubernetes Section */}
          <div className="mt-16 bg-[#1A1A1A] border border-white/15 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="font-mono text-[10px] uppercase tracking-widest bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 inline-block w-fit mb-6 font-bold border border-[#FF4500]/20">
                  [ SPECIALIST CAPABILITY ]
                </div>
                <h3 className="text-3xl font-display font-bold uppercase mb-6">Kubernetes & Container Security</h3>
                <p className="font-mono text-sm text-white/70 leading-relaxed mb-6">
                  Kubernetes environments are among the most complex attack surfaces in modern cloud infrastructure. Misconfigured RBAC, exposed API servers, over-privileged containers, and missing network policies create lateral movement paths that span from a compromised developer workstation to full cluster control.
                </p>
                <p className="font-mono text-sm text-white/70 leading-relaxed">
                  Blackbox Labs performs dedicated Kubernetes security assessments aligned to the CIS Kubernetes Benchmark, NIST SP 800-190, and real-world attack techniques observed in production incident response.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs text-white/80">
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> RBAC misconfiguration (cluster-admin bindings)</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Exposed Kubernetes API server</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Privileged container and pod security context abuse</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Container escape via mounted volumes and host paths</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Service account token over-permissioning</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Network policy gaps (pod-to-pod unrestricted)</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Secrets stored in plaintext (not etcd encrypted)</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Supply chain: malicious image in container registry</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> Node compromise via kubelet API</div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0" /> CI/CD pipeline security (GitHub Actions, ArgoCD)</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ATTACK CHAINS */}
      <AnimatedSection id="attack-chains" number="04" title="ATTACK_CHAINS" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">The Attack Chains That Lead to Full Account Compromise</h2>
            <p className="font-mono text-sm text-black/70 max-w-3xl">
              These are real attack chains documented in Blackbox Labs cloud security engagements — not theoretical scenarios. Each begins with a single misconfiguration and ends with complete cloud environment compromise.
            </p>
          </div>

          <div className="space-y-8">
            {/* CHAIN 01 */}
            <div className="bg-[#111] text-white p-6 md:p-8 border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">CHAIN 01</div>
                <h3 className="font-display text-xl font-bold">SSRF → IMDSv1 → Full Account Compromise</h3>
              </div>
              <div className="font-mono text-sm mb-6">
                <span className="text-white/50">Starting Point:</span> Web application with SSRF vulnerability
              </div>
              <div className="bg-black p-6 font-mono text-xs md:text-sm text-[#00FF00] leading-relaxed border border-white/10 overflow-x-auto">
                <div className="text-white/50 mb-4">// ATTACK PATH EXECUTION</div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>SSRF exploited to reach http://169.254.169.254/</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>AWS Instance Metadata Service (IMDSv1) returns IAM role credentials</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Credentials used to enumerate S3 buckets and IAM permissions</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">Over-permissioned role allows iam:CreateAccessKey</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">Permanent credentials created for persistence</span>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                  <span className="text-[#FF0000] font-bold shrink-0">→</span>
                  <span className="text-[#FF0000] font-bold">FULL ACCOUNT ACCESS ACHIEVED</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 font-mono text-xs">
                <div className="bg-white/5 px-4 py-2 border border-white/10"><span className="text-white/50">Real Precedent:</span> Capital One (100M+ records)</div>
                <div className="bg-white/5 px-4 py-2 border border-white/10"><span className="text-white/50">Prevention:</span> IMDSv2 enforcement, SSRF protection</div>
              </div>
            </div>

            {/* CHAIN 02 */}
            <div className="bg-[#111] text-white p-6 md:p-8 border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">CHAIN 02</div>
                <h3 className="font-display text-xl font-bold">Public S3 Bucket → Credential Discovery → Lateral Movement</h3>
              </div>
              <div className="font-mono text-sm mb-6">
                <span className="text-white/50">Starting Point:</span> Publicly readable S3 bucket
              </div>
              <div className="bg-black p-6 font-mono text-xs md:text-sm text-[#00FF00] leading-relaxed border border-white/10 overflow-x-auto">
                <div className="text-white/50 mb-4">// ATTACK PATH EXECUTION</div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Automated bucket enumeration (using bucket names from DNS, CloudTrail logs)</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Application configuration files discovered in bucket</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">AWS access keys found in .env or config.json files</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Credentials validated → IAM enumeration</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">Cross-account role assumption via misconfigured trust policy</span>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                  <span className="text-[#FF0000] font-bold shrink-0">→</span>
                  <span className="text-[#FF0000] font-bold">PRODUCTION ACCOUNT COMPROMISED FROM DEV BUCKET</span>
                </div>
              </div>
            </div>

            {/* CHAIN 03 */}
            <div className="bg-[#111] text-white p-6 md:p-8 border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">CHAIN 03</div>
                <h3 className="font-display text-xl font-bold">Kubernetes RBAC → Container Escape → Host Compromise</h3>
              </div>
              <div className="font-mono text-sm mb-6">
                <span className="text-white/50">Starting Point:</span> Compromised application pod
              </div>
              <div className="bg-black p-6 font-mono text-xs md:text-sm text-[#00FF00] leading-relaxed border border-white/10 overflow-x-auto">
                <div className="text-white/50 mb-4">// ATTACK PATH EXECUTION</div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Pod running as root with hostPath mount to /</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">Container escape via chroot to host filesystem</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Kubelet credentials discovered on host</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>kubelet API used to deploy privileged pods on all nodes</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">Node instance profiles have AWS admin IAM permissions</span>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                  <span className="text-[#FF0000] font-bold shrink-0">→</span>
                  <span className="text-[#FF0000] font-bold">FULL AWS ACCOUNT COMPROMISE FROM SINGLE POD</span>
                </div>
              </div>
            </div>

            {/* CHAIN 04 */}
            <div className="bg-[#111] text-white p-6 md:p-8 border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">CHAIN 04</div>
                <h3 className="font-display text-xl font-bold">Azure AD → Cloud-to-On-Prem Lateral Movement</h3>
              </div>
              <div className="font-mono text-sm mb-6">
                <span className="text-white/50">Starting Point:</span> Compromised Azure service principal
              </div>
              <div className="bg-black p-6 font-mono text-xs md:text-sm text-[#00FF00] leading-relaxed border border-white/10 overflow-x-auto">
                <div className="text-white/50 mb-4">// ATTACK PATH EXECUTION</div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Service principal has User.ReadWrite.All Graph permission</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">Attacker modifies Azure AD user → adds phone number for MFA</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Authenticates as target user to Azure AD</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span>Azure AD Connect sync account discovered</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[#FF4500] shrink-0">→</span>
                  <span className="text-yellow-400">On-premises AD compromised via sync account</span>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                  <span className="text-[#FF0000] font-bold shrink-0">→</span>
                  <span className="text-[#FF0000] font-bold">DOMAIN ADMIN ACHIEVED IN ON-PREMISES ENVIRONMENT</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* METHODOLOGY */}
      <AnimatedSection id="methodology" number="05" title="METHODOLOGY" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">How We Conduct a Cloud Security Assessment</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 md:before:ml-8 before:-translate-x-px md:before:translate-x-0 before:w-0.5 before:bg-white/10">
            {[
              {
                phase: "01",
                title: "DISCOVERY & ENUMERATION",
                desc: "Map your complete cloud footprint: accounts, subscriptions, projects, services, and external attack surface. Identify all IAM identities, roles, policies, and trust relationships. Tools: ScoutSuite, Prowler, CloudMapper, manual AWS/Azure/GCP CLI enumeration."
              },
              {
                phase: "02",
                title: "CONFIGURATION REVIEW",
                desc: "Systematic review of security configurations across all cloud services against CIS Benchmarks and provider security best practices. Focus: IAM, storage, network, compute, monitoring, logging, encryption."
              },
              {
                phase: "03",
                title: "ATTACK PATH ANALYSIS",
                desc: "Manual chaining of misconfigurations into realistic attack paths. This is where automated CSPM tools fail — human operators chain medium-severity findings into critical paths. Use of BloodHound for Azure AD, manual IAM trust policy analysis for AWS, GCP IAM binding analysis for GCP."
              },
              {
                phase: "04",
                title: "EXPLOITATION & PROOF-OF-CONCEPT",
                desc: "Safe exploitation of identified attack paths to demonstrate real-world impact. Evidence collection: S3 object access, IAM credential generation, cross-account role assumption, container escape demonstration."
              },
              {
                phase: "05",
                title: "REPORTING & REMEDIATION GUIDANCE",
                desc: "Dual-document delivery: technical report + executive brief. Attack path diagrams. Remediation code snippets (Terraform/CloudFormation/Bicep where applicable). Compliance evidence package. Free re-test within 90 days."
              }
            ].map((step, i) => (
              <div key={i} className="relative flex items-start gap-6 md:gap-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#111] border-4 border-black shadow-[0_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-center font-display font-bold text-xl md:text-2xl text-[#FF4500] shrink-0 relative z-10">
                  {step.phase}
                </div>
                <div className="bg-[#111] border border-white/15 p-6 md:p-8 flex-grow mt-2 hover:border-[#FF4500] transition-colors">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-4">PHASE {step.phase} — {step.title}</h3>
                  <p className="font-mono text-sm text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/15">
            <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-white/50">Frameworks Aligned:</h4>
            <div className="flex flex-wrap gap-4 font-mono text-xs text-white/70">
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ CIS AWS Benchmark ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ CIS Azure Benchmark ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ CIS GCP Benchmark ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ NIST 800-144 ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ CSA CCM ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ AWS Well-Architected Framework ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ CIS Kubernetes Benchmark ]</span>
              <span className="bg-white/5 px-3 py-1 border border-white/10">[ NIST SP 800-190 ]</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* COMPLIANCE & STATS */}
      <AnimatedSection id="compliance" number="06" title="COMPLIANCE" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4">Meet Cloud Compliance Requirements</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px] bg-white border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
                  <thead>
                    <tr className="border-b-2 border-black font-mono text-[10px] uppercase tracking-widest text-black">
                      <th className="p-4 bg-[#E5E5E5]">Framework</th>
                      <th className="p-4 bg-[#E5E5E5]">Cloud Requirement</th>
                      <th className="p-4 bg-[#E5E5E5]">How We Help</th>
                    </tr>
                  </thead>
                  <tbody className="font-sans text-sm">
                    {[
                      { frame: "SOC 2 Type II", req: "CC6 — Logical access, CC7 — System ops", help: "Cloud IAM + configuration evidence" },
                      { frame: "PCI DSS v4.0", req: "Req 11.3 — Penetration testing", help: "Cloud pen test with compliance evidence package" },
                      { frame: "ISO 27001", req: "Annex A.12 — Operations security", help: "Cloud configuration review + penetration test" },
                      { frame: "HIPAA", req: "Technical safeguard evaluation", help: "Cloud assessment of PHI storage and access" },
                      { frame: "FedRAMP", req: "CA-8 — Penetration testing", help: "Government-grade cloud security assessment" },
                      { frame: "NIST CSF", req: "Protect/Detect functions", help: "Cloud control mapping to NIST framework" },
                      { frame: "CIS Benchmarks", req: "AWS/Azure/GCP hardening", help: "Full CIS benchmark assessment per platform" }
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

            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-black text-white p-8 border border-black/15 shadow-[8px_8px_0_rgba(242,97,34,1)]">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-white/50">// ENGAGEMENT STATS</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-display font-bold text-[#FF4500] mb-2">97%</div>
                    <div className="font-mono text-xs text-white/70">Engagements with at least one Critical/High finding</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-[#FF4500] mb-2">4 hrs</div>
                    <div className="font-mono text-xs text-white/70">Avg time to first critical finding in cloud env</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-[#FF4500] mb-2">82%</div>
                    <div className="font-mono text-xs text-white/70">Environments with at least one IAM privilege escalation path</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-[#FF4500] mb-2">100%</div>
                    <div className="font-mono text-xs text-white/70">Findings manually verified — no scanner dumps</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#E5E5E5] border border-black/15 p-8 relative">
                <Terminal className="w-8 h-8 text-[#FF4500] mb-6" />
                <p className="text-lg font-display leading-relaxed mb-6">
                  "We had a comprehensive cloud security program — GuardDuty, Security Hub, Macie — the full AWS security stack. Blackbox chained an IMDSv1 exposure in a dev environment through a misconfigured IAM trust policy into full production account access in under 4 hours. No single tool flagged the chain. That's why you need operators, not scanners."
                </p>
                <div className="font-mono text-xs text-black/60 font-bold">
                  — VP of Infrastructure Security, Fortune 500 Technology Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection id="faq" number="07" title="FAQ" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <ContactFAQ 
            faqs={cloudFaqs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our cloud security methodology, access requirements, and reporting."
            eyebrow="// CLOUD SECURITY ASSESSMENT"
          />
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <section data-cursor="dark" className="py-32 px-8 md:px-12 bg-[#FF4500] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">
            Your CSPM says you're secure.<br/>
            Your IAM trust policies tell a different story.
          </h2>
          <p className="text-xl mb-12 font-mono opacity-90 font-bold">
            99% of cloud breaches start with misconfiguration.<br/>
            We find the ones your tools chain together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to="/request-audit" className="bg-black text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
              REQUEST A CLOUD SECURITY ASSESSMENT
            </Link>
            <Link to="/scoping-call" className="bg-transparent border border-black/20 text-black font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-black/10 transition-colors flex items-center justify-center gap-3">
              BOOK A SCOPING CALL
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs opacity-70">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> NDA FIRST</span>
            <span className="flex items-center gap-2"><Terminal className="w-4 h-4" /> 24HR RESPONSE</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> NON-DESTRUCTIVE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
