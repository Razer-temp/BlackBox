import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Terminal, Check, ArrowRight, Globe, Smartphone, Database, FileCode2, AlertTriangle } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactFAQ } from '../components/ContactFAQ';
import SEO from '../components/SEO';

const appSecFaqs = [
  {
    q: "What's the difference between automated scanning and manual application penetration testing?",
    a: "Automated scanners like Nessus, Qualys, and OWASP ZAP are excellent at finding known vulnerabilities with known signatures — they're fast, consistent, and useful for compliance checklists. But they fundamentally cannot understand application business logic, chain multiple low-severity issues together, manipulate authenticated session flows creatively, or find vulnerabilities that require context about what data the application handles. Manual penetration testing finds the vulnerabilities that actually cause data breaches — IDOR chains, business logic flaws, multi-step authentication bypasses. These are the findings that end up in breach notifications."
  },
  {
    q: "Do you test both authenticated and unauthenticated application functionality?",
    a: "Yes. We test all access levels: unauthenticated (public-facing), standard user, premium/paid tiers, and administrative users. Broken access control testing — including privilege escalation between roles — is one of the most critical parts of any web application assessment. Many breaches occur because an attacker with a standard account can access admin functionality."
  },
  {
    q: "Can you test our GraphQL API specifically?",
    a: "Yes. We have deep experience with GraphQL API security testing, including introspection abuse, batching attacks, field-level authorization bypass, and mutation security. GraphQL introduces a significantly different attack surface from REST APIs and requires a different testing approach — our operators are specifically trained in GraphQL security assessment."
  },
  {
    q: "What is the OWASP Top 10 and do you cover all of it?",
    a: "The OWASP Top 10 is the globally recognized standard for the most critical web application security risks, updated regularly by the Open Web Application Security Project. Yes, we test comprehensively for all 10 categories — plus we go beyond them to test application-specific vulnerabilities, business logic flaws, and chained exploitation scenarios that the Top 10 framework doesn't fully address. We also test against the OWASP API Security Top 10 for API assessments and the OWASP MASVS for mobile applications."
  },
  {
    q: "How long does a web application penetration test take?",
    a: "A focused assessment of a single application typically takes 1–2 weeks. Complex applications with multiple user roles, extensive API surfaces, and microservice architectures may require 3–4 weeks. We provide a fixed timeline in our proposal after a scoping call — we scope based on number of unique functions, roles, and endpoints, not page count."
  },
  {
    q: "Do you test mobile app backend APIs separately from the mobile app itself?",
    a: "Yes — and we strongly recommend it. The mobile app and its backend API are separate attack surfaces that require separate testing. The mobile binary may be hardened, but the API it calls may accept requests from any client without proper authorization. We offer combined mobile + API packages that give you complete coverage of both layers simultaneously."
  },
  {
    q: "Can application security testing be used to satisfy PCI DSS requirements?",
    a: "Yes. PCI DSS v4.0 Requirement 6.4 mandates security testing of applications handling cardholder data. Blackbox Labs assessments generate compliance evidence packages aligned to PCI DSS requirements, including scope confirmation, testing methodology documentation, and finding records suitable for QSA review."
  },
  {
    q: "How much does web application penetration testing cost?",
    a: "Single web application assessments start at $12,000. Complex multi-role applications with extensive API surfaces range from $20,000–$45,000. API-only assessments start at $8,000. Mobile application testing starts at $10,000 per platform. Combined web + API + mobile packages offer the best value. We provide fixed-fee proposals after scoping — no hidden costs or hourly overruns."
  }
];

export const ApplicationSecurityTestingPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Application Security Testing",
        "provider": {
          "@type": "Organization",
          "name": "Blackbox Labs"
        },
        "description": "Manual web application penetration testing, API security assessment, and mobile app testing by OSCP-certified operators.",
        "serviceType": "Application Penetration Testing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": appSecFaqs.map(faq => ({
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
            "name": "Application Security Testing",
            "item": "https://blackboxlabs.com/services/application-security-testing"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-24">
      <SEO 
        title="Application Security Testing | Web App, API & Mobile | Blackbox Labs"
        description="Manual web application penetration testing, API security assessment, and mobile app testing by OSCP-certified operators. OWASP Top 10+, business logic flaws, IDOR chains. Request an assessment today."
        canonical="/services/application-security-testing"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* HERO SECTION */}
      <AnimatedSection id="hero" number="01" title="APP_SEC" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Services</span>
            <span>/</span>
            <span className="text-[#FF4500]">Application Security Testing</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ WEB APPS ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ REST & GraphQL APIs ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ MOBILE ]</span>
            <span className="px-3 py-1 border border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10">[ OWASP TOP 10+ ]</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Application <br/>
            Security <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-600">Testing.</span>
          </h1>

          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight">
              Automated Scanners Find What's Known.<br/>
              <span className="text-[#FF4500]">We Find What's Actually Dangerous.</span>
            </h2>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-6">
              Your web applications, APIs, and mobile apps are the most exposed layer of your organization — and the most frequently targeted. Automated scanners are good at finding known vulnerabilities. They are terrible at finding business logic flaws, IDOR chains, authentication bypasses, and the complex multi-step attack paths that lead to real data breaches.
            </p>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-12">
              Blackbox Labs performs 100% manual application security testing. Our OSCP and BSCP-certified operators use Burp Suite Pro, manual code review, and deep domain expertise to find what automated tools consistently miss — then show you exactly how the exploit works and what to fix first.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link to="/request-audit" className="bg-[#FF4500] text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 group">
                REQUEST AN APP SECURITY ASSESSMENT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/request-audit" className="bg-transparent border border-white/20 text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                DOWNLOAD SERVICE BRIEF
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap gap-6 font-mono text-xs text-white/50">
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-[#FF4500]" /> OWASP Top 10</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-[#FF4500]" /> OWASP API Security Top 10</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-[#FF4500]" /> OWASP MASVS</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-[#FF4500]" /> 100% Manual</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-[#FF4500]" /> OSCP · BSCP Certified</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-[#FF4500]" /> PCI DSS · HIPAA</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ASSESSMENT TYPES */}
      <AnimatedSection id="types" number="02" title="ASSESSMENT_TYPES" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Web App, API & Mobile — Complete Application Coverage</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TYPE 01: Web App */}
            <div className="bg-white border border-black/15 p-8 md:p-12 shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">TYPE 01</div>
                  <h3 className="font-display text-2xl font-bold">Web Application Pen Testing</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1 inline-block w-fit mb-6 font-bold">
                [ OWASP TOP 10+ · MANUAL ]
              </div>
              <p className="font-sans text-black/70 mb-6 leading-relaxed">
                A comprehensive manual assessment of your web applications — from the login page to the admin panel to every API endpoint your application exposes. We go beyond the OWASP Top 10 to find the vulnerabilities that scanners never reach: business logic flaws, multi-step exploitation chains, authentication bypasses, and privilege escalation paths that require human creativity to discover.
              </p>
              <p className="font-sans text-black/70 mb-8 leading-relaxed font-bold">
                This is not a Nessus scan with a cover page. Every finding is manually verified, exploited, and documented with a working proof-of-concept.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-black/10 pb-2">What We Test:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-black/70 mb-6">
                  <li>▸ Injection flaws (SQL, NoSQL, LDAP)</li>
                  <li>▸ Broken auth & session management</li>
                  <li>▸ Cross-Site Scripting (XSS)</li>
                  <li>▸ Broken Access Control & IDOR</li>
                  <li>▸ Security misconfigurations</li>
                  <li>▸ SSRF & XXE injection</li>
                  <li>▸ Business logic flaws</li>
                  <li>▸ Race conditions (TOCTOU)</li>
                  <li>▸ JWT token manipulation</li>
                  <li>▸ OAuth 2.0 misconfiguration</li>
                </ul>
                <div className="font-mono text-[10px] bg-[#FF4500]/10 text-[#FF4500] p-3 border border-[#FF4500]/20">
                  <span className="font-bold">Duration:</span> 1–3 weeks depending on application size and complexity
                </div>
              </div>
            </div>

            {/* TYPE 02: API */}
            <div className="bg-white border border-black/15 p-8 md:p-12 shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">TYPE 02</div>
                  <h3 className="font-display text-2xl font-bold">API Security Testing</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1 inline-block w-fit mb-6 font-bold">
                [ REST · GraphQL · gRPC · OWASP API TOP 10 ]
              </div>
              <p className="font-sans text-black/70 mb-8 leading-relaxed">
                APIs now account for the majority of web traffic — and the majority of data breaches. The OWASP API Security Top 10 documents the attack patterns that compromise APIs daily: Broken Object Level Authorization (BOLA), broken authentication, excessive data exposure, and mass assignment vulnerabilities that let attackers access data they were never meant to see.
              </p>
              <p className="font-sans text-black/70 mb-8 leading-relaxed">
                We test REST, GraphQL, and gRPC APIs with the same depth and manual creativity we apply to web applications — including endpoint enumeration, authorization testing across every user role, and business logic analysis that automated API scanners fundamentally cannot perform.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-black/10 pb-2">What We Test:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-black/70 mb-6">
                  <li>▸ BOLA / IDOR</li>
                  <li>▸ Broken Authentication</li>
                  <li>▸ Mass assignment</li>
                  <li>▸ Rate limiting bypass</li>
                  <li>▸ Broken Function Level Auth</li>
                  <li>▸ SSRF via API</li>
                  <li>▸ GraphQL introspection abuse</li>
                  <li>▸ API versioning abuse</li>
                  <li>▸ Unauthenticated endpoint discovery</li>
                  <li>▸ Insecure token storage</li>
                </ul>
                <div className="font-mono text-[10px] bg-[#FF4500]/10 text-[#FF4500] p-3 border border-[#FF4500]/20">
                  <span className="font-bold">Duration:</span> 1–2 weeks per API surface
                </div>
              </div>
            </div>

            {/* TYPE 03: Mobile */}
            <div className="bg-white border border-black/15 p-8 md:p-12 shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">TYPE 03</div>
                  <h3 className="font-display text-2xl font-bold">Mobile App Security Testing</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1 inline-block w-fit mb-6 font-bold">
                [ iOS · ANDROID · OWASP MASVS ]
              </div>
              <p className="font-sans text-black/70 mb-8 leading-relaxed">
                Mobile apps introduce a unique attack surface: local data storage, certificate pinning bypass opportunities, IPC mechanisms, and backend API connections that are often configured differently than web equivalents. We test iOS and Android applications against the OWASP Mobile Application Security Verification Standard (MASVS) using dynamic instrumentation, reverse engineering, and traffic interception.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-black/10 pb-2">What We Test:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-black/70 mb-6">
                  <li>▸ Insecure data storage</li>
                  <li>▸ Hardcoded credentials in binary</li>
                  <li>▸ Certificate pinning bypass</li>
                  <li>▸ Insecure network communication</li>
                  <li>▸ Reverse engineering & binary analysis</li>
                  <li>▸ Tapjacking & UI redressing</li>
                  <li>▸ Exported components abuse</li>
                  <li>▸ IPC vulnerabilities</li>
                </ul>
                <div className="font-mono text-[10px] bg-[#FF4500]/10 text-[#FF4500] p-3 border border-[#FF4500]/20">
                  <span className="font-bold">Duration:</span> 1–2 weeks per platform (iOS or Android)
                </div>
              </div>
            </div>

            {/* TYPE 04: SAST */}
            <div className="bg-white border border-black/15 p-8 md:p-12 shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                  <FileCode2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">TYPE 04</div>
                  <h3 className="font-display text-2xl font-bold">Source Code Review (SAST)</h3>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1 inline-block w-fit mb-6 font-bold">
                [ WHITE BOX · ALL LANGUAGES ]
              </div>
              <p className="font-sans text-black/70 mb-8 leading-relaxed">
                When you give us access to your source code, we can find vulnerabilities that no black-box test ever could — subtle cryptographic implementation errors, dangerous code paths that only trigger under specific conditions, hardcoded secrets buried in legacy modules, and architectural security flaws that require understanding the full codebase to appreciate.
              </p>
              <p className="font-sans text-black/70 mb-8 leading-relaxed">
                Our manual code review complements automated SAST tools — we validate, contextualize, and find what the scanner flags as a false positive but is actually a real exploit path when properly chained.
              </p>
              <div className="mt-auto">
                <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 border-b border-black/10 pb-2">Languages & Frameworks:</h4>
                <div className="font-mono text-xs text-black/70 leading-relaxed">
                  Python · Node.js · Java · Go · PHP · Ruby · C/C++ · .NET<br/>
                  React · Angular · Vue · Django · Laravel · Spring Boot · Rails
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* OWASP TABLES */}
      <AnimatedSection id="owasp" number="03" title="OWASP_STANDARDS" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          
          {/* Web Top 10 */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4">OWASP Top 10 (2021/2025) — Every One, Manually</h2>
            <p className="font-mono text-sm text-white/70 mb-8 max-w-3xl">
              Broken Access Control remains the #1 vulnerability in the 2025 OWASP Top 10 — 100% of applications tested were found to have some form of broken access control, with over 318,000 documented instances in the contributed dataset.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-[#FF4500] font-mono text-[10px] uppercase tracking-widest text-[#FF4500]">
                    <th className="p-4 w-16">#</th>
                    <th className="p-4 w-1/4">Vulnerability</th>
                    <th className="p-4 w-1/3">Real-World Impact</th>
                    <th className="p-4">How We Test</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-sm">
                  {[
                    { id: "A01", name: "Broken Access Control", impact: "Unauthorized data access, account takeover", test: "IDOR chain exploitation, privilege escalation" },
                    { id: "A02", name: "Cryptographic Failures", impact: "Data exposure, PII leakage", test: "TLS analysis, encryption review, hashing assessment" },
                    { id: "A03", name: "Injection", impact: "RCE, database access, auth bypass", test: "SQL, NoSQL, LDAP, command, template injection" },
                    { id: "A04", name: "Insecure Design", impact: "Business logic flaws, workflow bypass", test: "Manual creative testing, threat modeling" },
                    { id: "A05", name: "Security Misconfiguration", impact: "Exposed admin panels, debug endpoints", test: "Config review, header analysis, cloud misconfiguration" },
                    { id: "A06", name: "Vulnerable Components", impact: "Supply chain compromise", test: "SCA + manual validation of exploitability" },
                    { id: "A07", name: "Auth & Session Failures", impact: "Account takeover, session hijacking", test: "JWT attacks, session fixation, brute force" },
                    { id: "A08", name: "Software & Data Integrity", impact: "CI/CD compromise, update tampering", test: "Pipeline security review, integrity checking" },
                    { id: "A09", name: "Logging & Monitoring Failures", impact: "Breach goes undetected", test: "Log review, SIEM gap analysis" },
                    { id: "A10", name: "SSRF", impact: "Cloud metadata access, internal port scan", test: "Blind and non-blind SSRF, cloud instance exploitation" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-mono text-xs text-white/50">{row.id}</td>
                      <td className="p-4 font-bold text-white">{row.name}</td>
                      <td className="p-4 text-white/70">{row.impact}</td>
                      <td className="p-4 text-white/70 font-mono text-xs">{row.test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* API Top 10 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4">OWASP API Security Top 10</h2>
            <p className="font-mono text-sm text-white/70 mb-8 max-w-3xl">
              APIs now account for 83% of web traffic, making them prime attack targets — the average cost of an API breach is $4.88 million.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-[#FF4500] font-mono text-[10px] uppercase tracking-widest text-[#FF4500]">
                    <th className="p-4 w-16">#</th>
                    <th className="p-4 w-1/4">Vulnerability</th>
                    <th className="p-4 w-1/3">What Attackers Do</th>
                    <th className="p-4">Our Test Method</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-sm">
                  {[
                    { id: "API1", name: "Broken Object Level Auth (BOLA)", impact: "Access other users' data via ID manipulation", test: "Manual IDOR testing across all endpoints" },
                    { id: "API2", name: "Broken Authentication", impact: "Steal sessions, bypass auth", test: "JWT attacks, token replay, MFA bypass" },
                    { id: "API3", name: "Broken Object Property Auth", impact: "Mass assignment, data over-exposure", test: "Manual field-level authorization testing" },
                    { id: "API4", name: "Unrestricted Resource Consumption", impact: "DDoS, account enumeration", test: "Rate limit bypass, resource exhaustion" },
                    { id: "API5", name: "Broken Function Level Auth", impact: "Access admin endpoints", test: "Role-based access control testing" },
                    { id: "API6", name: "Unrestricted Access to Sensitive Flows", impact: "Abuse business logic at scale", test: "Manual workflow analysis" },
                    { id: "API7", name: "Server-Side Request Forgery", impact: "Cloud metadata access", test: "SSRF via URL parameters and headers" },
                    { id: "API8", name: "Security Misconfiguration", impact: "Exposed docs, debug endpoints", test: "Config assessment, CORS testing" },
                    { id: "API9", name: "Improper Inventory Management", impact: "Old API version exploitation", test: "Version abuse, shadow API discovery" },
                    { id: "API10", name: "Unsafe Consumption of APIs", impact: "Third-party API chain attacks", test: "Integration security review" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-mono text-xs text-white/50">{row.id}</td>
                      <td className="p-4 font-bold text-white">{row.name}</td>
                      <td className="p-4 text-white/70">{row.impact}</td>
                      <td className="p-4 text-white/70 font-mono text-xs">{row.test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </AnimatedSection>

      {/* REAL FINDINGS */}
      <AnimatedSection id="findings" number="04" title="REAL_FINDINGS" theme="light">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Vulnerabilities We Find That Scanners Miss</h2>
            <p className="font-mono text-sm text-black/70 max-w-3xl">
              These are real finding categories from Blackbox Labs application security engagements — the ones automated tools consistently miss because they require human creativity and understanding of business context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "IDOR Chain → Mass Account Takeover",
                type: "Broken Access Control (BOLA)",
                cvss: "9.8",
                example: "Sequential user IDs in API endpoints with no server-side authorization check. Automated script iterates IDs → 2.3M records extracted.",
                why: "Requires authentication + business context understanding to identify impact."
              },
              {
                id: "02",
                title: "JWT Algorithm Confusion → Admin Bypass",
                type: "Broken Authentication",
                cvss: "9.1",
                example: "RS256 JWT signature switched to HS256 — server accepts public key as HMAC secret, forged admin token accepted.",
                why: "Requires cryptographic understanding and manual token manipulation."
              },
              {
                id: "03",
                title: "Business Logic Price Manipulation",
                type: "Insecure Design",
                cvss: "8.6",
                example: "Cart total recalculated on client side — intercepting and modifying POST request purchases $500 item for $0.01.",
                why: "Scanner has no understanding of application business logic or expected values."
              },
              {
                id: "04",
                title: "GraphQL Introspection → Full Schema Exposure",
                type: "Security Misconfiguration",
                cvss: "7.5",
                example: "Production GraphQL endpoint with introspection enabled — complete schema exposed including admin mutations not linked in UI.",
                why: "Requires understanding of GraphQL and manual schema analysis to identify impact."
              },
              {
                id: "05",
                title: "SSRF via Image Upload → AWS Metadata",
                type: "Server-Side Request Forgery",
                cvss: "9.0",
                example: "Image URL parameter fetched server-side without validation → http://169.254.169.254/latest/meta-data/ → IAM credentials extracted → full AWS account access.",
                why: "Multi-step exploitation chain requiring domain knowledge and manual verification."
              }
            ].map((finding, i) => (
              <div key={i} className="bg-white border border-black/15 shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col">
                <div className="p-6 border-b border-black/15 bg-[#E5E5E5] flex justify-between items-start">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold mb-2">FINDING {finding.id}</div>
                    <h3 className="font-bold text-lg leading-tight">{finding.title}</h3>
                  </div>
                  <div data-cursor="dark" className={`px-2 py-1 font-mono text-xs font-bold text-white ${parseFloat(finding.cvss) >= 9.0 ? 'bg-[#DC2626]' : 'bg-[#FF4500]'}`}>
                    {finding.cvss}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-4">
                    Type: {finding.type}
                  </div>
                  <div className="mb-6">
                    <div className="font-bold text-xs uppercase mb-2">Example:</div>
                    <p className="font-mono text-xs text-black/70 leading-relaxed bg-black/5 p-3 border-l-2 border-black/20">
                      {finding.example}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="font-bold text-xs uppercase mb-2 text-[#FF4500]">Why Scanners Miss It:</div>
                    <p className="text-sm text-black/80">{finding.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* DELIVERABLES & STATS */}
      <AnimatedSection id="deliverables" number="05" title="DELIVERABLES" theme="dark">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Deliverables */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">What You Receive</h2>
              <p className="font-mono text-sm text-white/70 mb-12">
                Two documents. One for your security team. One for your board. Both fully actionable.
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-[#FF4500]" /> Technical Report
                  </h3>
                  <ul className="space-y-3 font-mono text-sm text-white/70">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Full vulnerability listing — CVSS-scored, manually verified</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Working proof-of-concept for every critical/high finding</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Exploitation chain narrative (how we went from step A to step Z)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> OWASP Top 10 / API Top 10 mapping for all findings</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Developer-friendly remediation guidance per finding</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Code snippets showing the vulnerable pattern and fixed version</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Free re-test of critical and high findings (90-day window)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#FF4500]" /> Executive Brief & Debrief
                  </h3>
                  <ul className="space-y-3 font-mono text-sm text-white/70">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Non-technical risk summary for board and C-suite</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Business impact context (not CVE numbers — dollar exposure)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> Compliance evidence package included</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" /> 2-hour technical walkthrough with your development team</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Stats & Quote */}
            <div className="flex flex-col justify-center">
              <div className="bg-[#111] border border-white/10 p-8 md:p-12 mb-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">96%</div>
                    <div className="font-mono text-xs text-white/50">Engagements with at least one Critical/High finding</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">100%</div>
                    <div className="font-mono text-xs text-white/50">Manual — zero automated scanner reports</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">9.8</div>
                    <div className="font-mono text-xs text-white/50">Highest CVSS score in our history</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">48<span className="text-2xl">hrs</span></div>
                    <div className="font-mono text-xs text-white/50">Avg time to first critical finding in web apps</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-white/10 p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#FF4500]/50 -mt-px -mr-px"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#FF4500]/50 -mb-px -ml-px"></div>
                
                <AlertTriangle className="w-12 h-12 text-[#FF4500]/20 mb-6" />
                <p className="text-xl font-display leading-relaxed mb-8">
                  "Two previous vendors gave us OWASP Top 10 compliance reports and called it done. Blackbox found a CVSS 9.8 IDOR chain in week one that exposed every user record in our system — 2.3 million accounts. That wasn't in any automated report. That required a human operator who understood what they were looking for."
                </p>
                <div className="font-mono text-sm text-white/50">
                  — CSO, Series C SaaS Platform (2.3M users)
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
                  { frame: "PCI DSS v4.0", req: "Req 6.4 — Application security testing", help: "Manual web app + API assessment + compliance evidence" },
                  { frame: "HIPAA", req: "Technical safeguard evaluation", help: "Application layer testing of systems handling PHI" },
                  { frame: "SOC 2 Type II", req: "CC6 — Logical access controls", help: "Web application and API authorization testing" },
                  { frame: "ISO 27001", req: "Annex A.14.2 — Security in dev & support", help: "SAST + DAST + manual assessment" },
                  { frame: "OWASP SAMM", req: "Verification practice — Security Testing", help: "Complete OWASP Top 10 coverage" },
                  { frame: "GDPR / CCPA", req: "Data protection by design", help: "Data exposure testing, PII access control" }
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
            faqs={appSecFaqs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our application security testing methodology, timelines, and deliverables."
            eyebrow="// APPLICATION SECURITY TESTING"
          />
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <section data-cursor="dark" className="py-32 px-8 md:px-12 bg-[#FF4500] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">
            Your application scanner says you're compliant.<br/>
            Our operators say you have a critical finding waiting to be discovered.
          </h2>
          <p className="text-xl mb-12 font-mono opacity-90 font-bold">
            98% of the time, we're right.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to="/request-audit" className="bg-black text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
              REQUEST AN APP SECURITY ASSESSMENT
            </Link>
            <Link to="/scoping-call" className="bg-transparent border border-black/20 text-black font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-black/10 transition-colors flex items-center justify-center gap-3">
              BOOK A SCOPING CALL
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs opacity-70">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> NDA FIRST</span>
            <span className="flex items-center gap-2"><Terminal className="w-4 h-4" /> 24HR RESPONSE</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> OWASP-ALIGNED</span>
          </div>
        </div>
      </section>
    </div>
  );
}
