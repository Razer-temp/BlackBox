import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Clock, Lock, CheckCircle2, Calendar, MessageSquare, Terminal } from 'lucide-react';
import { ContactFAQ } from '../components/ContactFAQ';
import SEO from '../components/SEO';

// -----------------------------------------------------------------------------
// PAGE 3: /contact (General Contact Hub)
// -----------------------------------------------------------------------------
export const ContactHub = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ContactPage"],
    "name": "Blackbox Labs",
    "image": "https://blackboxlabs.com/logo.png",
    "email": "ops@blackboxlabs.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Emergency IR Retainer",
      "email": "ops@blackboxlabs.com",
      "availableLanguage": "English"
    }
  };

  return (
    <div className="flex-grow flex flex-col bg-[#E5E5E5]">
      <SEO 
        title="Red Team Firm Contact | Blackbox Labs"
        description="Contact Blackbox Labs for red team services, penetration testing, and offensive security engagements. Choose your execution path."
        canonical="/contact"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {/* Hero */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 bg-white text-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-6">
          Contact Blackbox Labs
        </h1>
        <p className="font-mono text-sm uppercase tracking-widest text-black/60 max-w-2xl mx-auto">
          THREE WAYS TO REACH US. CHOOSE YOUR EXECUTION PATH.
        </p>
      </div>

      {/* 3 Execution Paths */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/15">
        {/* Path 1 */}
        <Link to="/request-audit" className="p-12 border-r border-black/15 bg-white group hover:bg-[#111] hover:text-white transition-colors duration-500 flex flex-col items-center text-center cursor-crosshair">
          <div className="w-16 h-16 rounded-full border-2 border-[#DC2626] flex items-center justify-center mb-8 group-hover:bg-[#DC2626] transition-colors">
            <Shield className="w-6 h-6 text-[#DC2626] group-hover:text-white" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">REQUEST AN AUDIT</h2>
          <p className="font-mono text-xs text-black/60 group-hover:text-white/60 mb-8 flex-grow">
            Full intake form for scoped engagements. Tell us about your environment.
          </p>
          <div className="font-mono text-[10px] uppercase tracking-widest border border-black group-hover:border-white px-6 py-3 flex items-center gap-2">
            START FORM <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Path 2 */}
        <Link to="/scoping-call" className="p-12 border-r border-black/15 bg-white group hover:bg-[#111] hover:text-white transition-colors duration-500 flex flex-col items-center text-center cursor-crosshair">
          <div className="w-16 h-16 rounded-full border-2 border-[#F26122] flex items-center justify-center mb-8 group-hover:bg-[#F26122] transition-colors">
            <Calendar className="w-6 h-6 text-[#F26122] group-hover:text-white" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">BOOK A SCOPING CALL</h2>
          <p className="font-mono text-xs text-black/60 group-hover:text-white/60 mb-8 flex-grow">
            30-min direct call with a senior operator. No sales reps.
          </p>
          <div className="font-mono text-[10px] uppercase tracking-widest border border-black group-hover:border-white px-6 py-3 flex items-center gap-2">
            BOOK NOW <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Path 3 */}
        <div className="p-12 bg-white group hover:bg-[#111] hover:text-white transition-colors duration-500 flex flex-col items-center text-center cursor-crosshair">
          <div className="w-16 h-16 rounded-full border-2 border-black group-hover:border-white flex items-center justify-center mb-8">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">GENERAL INQUIRY</h2>
          <p className="font-mono text-xs text-black/60 group-hover:text-white/60 mb-8 flex-grow">
            Press, media, partnerships, CVE disclosure, or other inquiries.
          </p>
          <a href="mailto:ops@blackboxlabs.com" className="font-mono text-[10px] uppercase tracking-widest border border-black group-hover:border-white px-6 py-3 flex items-center gap-2">
            CONTACT <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Direct Contacts & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border-b border-black/15">
        <div className="p-8 border-r border-black/15">
          <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-[#F26122]">// ENCRYPTED COMMS</h4>
          <ul className="font-mono text-xs space-y-3">
            <li><span className="text-black/60">Signal:</span> @BlackboxLabs</li>
            <li><span className="text-black/60">PGP:</span> <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc" className="underline hover:text-[#F26122]">Download Key</a></li>
            <li><span className="text-black/60">Proton:</span> ops@blackboxlabs.com</li>
          </ul>
        </div>
        <div className="p-8 border-r border-black/15">
          <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-[#F26122]">// OFFICES</h4>
          <p className="font-mono text-xs text-black/80 leading-relaxed">
            Blackbox Labs operates remotely — operators embedded globally.<br/><br/>
            Primary jurisdiction: United States<br/>
            EU data handling: GDPR compliant
          </p>
        </div>
        <div className="p-8 border-r border-black/15">
          <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-[#F26122]">// MEDIA & PRESS</h4>
          <p className="font-mono text-xs text-black/80 leading-relaxed mb-4">
            For press inquiries, expert commentary, or media assets.
          </p>
          <a href="mailto:press@blackboxlabs.com" className="font-mono text-xs underline hover:text-[#F26122]">press@blackboxlabs.com</a>
        </div>
        <div className="p-8">
          <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-[#F26122]">// RESPONSIBLE DISCLOSURE</h4>
          <p className="font-mono text-xs text-black/80 leading-relaxed mb-4">
            We acknowledge all valid submissions within 48 hours.
          </p>
          <a href="mailto:security@blackboxlabs.com" className="font-mono text-xs underline hover:text-[#F26122] block mb-2">security@blackboxlabs.com</a>
          <Link to="/thanks" className="font-mono text-xs underline hover:text-[#F26122]">Hall of Fame</Link>
        </div>
      </div>

      <ContactFAQ />
    </div>
  );
};

// -----------------------------------------------------------------------------
// PAGE 2: /scoping-call (Direct Calendar Booking)
// -----------------------------------------------------------------------------
export const ScopingCall = () => {
  return (
    <div className="flex-grow flex flex-col bg-[#E5E5E5]">
      <SEO 
        title="Book a Cybersecurity Assessment | Blackbox Labs"
        description="Schedule a red team scoping call. 30 minutes. No sales pitch. Just operators. Pick a time that works to discuss your threat model."
        canonical="/scoping-call"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Left Column: Calendar */}
        <div className="lg:col-span-8 border-r border-black/15 bg-white flex flex-col">
          <div className="p-8 md:p-12 lg:p-20 border-b border-black/15">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Book a Scoping Call
            </h1>
            <h2 className="font-mono text-sm md:text-base text-black/60 leading-relaxed max-w-2xl">
              30 minutes. No sales pitch. Just operators. Pick a time that works. You'll speak directly with a senior red team operator — not a sales rep, not a solutions engineer. Just someone who's been inside networks like yours and knows what to look for.
            </h2>
          </div>
          
          <div className="p-8 md:p-12 lg:p-20 flex-grow flex flex-col items-center justify-center bg-[#E5E5E5]">
            {/* Simulated Calendly Embed */}
            <div className="w-full max-w-3xl bg-white border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)] p-8 flex flex-col items-center justify-center min-h-[500px]">
              <Calendar className="w-12 h-12 text-black/60 mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2">Select a Date & Time</h3>
              <p className="font-mono text-xs text-black/60 mb-8">[ CALENDAR EMBED — Calendly / Cal.com ]</p>
              <div className="w-full max-w-md border border-black/10 p-6 text-center">
                <p className="font-mono text-xs text-black/80 mb-4">Available: Monday–Friday, 8AM–6PM EST</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold">Response guarantee: Confirmed within 1 business hour</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="lg:col-span-4 bg-white flex flex-col">
          <div className="p-8 border-b border-black/15 bg-[#111] text-white">
            <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-white/60">// WHAT WE'LL COVER</h4>
            <ul className="font-mono text-xs space-y-4 text-white/80">
              <li className="flex items-start gap-3"><span className="text-[#F26122]">▸</span> Your current threat model & security posture</li>
              <li className="flex items-start gap-3"><span className="text-[#F26122]">▸</span> What engagements make sense for your environment</li>
              <li className="flex items-start gap-3"><span className="text-[#F26122]">▸</span> Timeline, scope, and logistics</li>
              <li className="flex items-start gap-3"><span className="text-[#F26122]">▸</span> Any questions you have about our methodology</li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/15 font-mono text-[10px] text-white/50 leading-relaxed">
              No commitment required. No invoice before you're ready. Just an honest conversation.
            </div>
          </div>

          <div className="p-8 border-b border-black/15">
            <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// PREFER TO REACH US DIRECTLY?</h4>
            <ul className="font-mono text-xs space-y-4 text-black/80 mb-8">
              <li><span className="font-bold">Signal:</span> @BlackboxLabs</li>
              <li><span className="font-bold">PGP Key:</span> <a href="/pgp-key.asc" download="blackboxlabs-pgp-key.asc" className="underline hover:text-[#F26122]">[Download Public Key]</a></li>
              <li><span className="font-bold">Encrypted Email:</span> ops@blackboxlabs.com</li>
              <li className="text-[#DC2626]"><span className="font-bold">Emergency IR Retainer:</span> +1 (XXX) XXX-XXXX</li>
            </ul>
            
            <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-black/60">// VERIFIED BUG BOUNTY SUBMISSIONS</h4>
            <a href="mailto:security@blackboxlabs.com" className="font-mono text-xs underline hover:text-[#F26122]">security@blackboxlabs.com</a>
          </div>
        </div>
      </div>
      <ContactFAQ />
    </div>
  );
};

import { useSound } from '../contexts/SoundContext';

// -----------------------------------------------------------------------------
// PAGE 1: /request-audit (Main Conversion Page)
// -----------------------------------------------------------------------------
export const RequestAudit = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { playSuccess } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playSuccess();
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#E5E5E5] text-[#111] font-sans selection:bg-[#F26122] selection:text-white flex flex-col border-x border-black/15 max-w-[1600px] mx-auto relative">
        <SEO 
          title="Request a Red Team Audit | Blackbox Labs — Offensive Security"
          description="Start your red team engagement with Blackbox Labs. Complete our intake form and a senior operator will contact you within 24 hours. Strict NDA. All engagements authorized."
          canonical="/request-audit"
        />
        <div className="border-b border-black/15 bg-white p-6 flex justify-between items-center sticky top-0 z-50">
          <div className="font-display font-bold text-xl tracking-widest flex items-center gap-2">
            BLACKBOX_LABS <span className="text-[#F26122] font-mono text-[10px] uppercase tracking-widest ml-4 hidden sm:inline-block">[ SECURE INTAKE PORTAL ]</span>
          </div>
          <Link to="/" className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#F26122] transition-colors">
            <ArrowLeft className="w-3 h-3" /> RETURN TO MAIN SITE
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="bg-white border border-black p-12 max-w-2xl text-center shadow-[8px_8px_0_rgba(242,97,34,1)]">
            <div className="w-16 h-16 bg-[#F26122] text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">Transmission Successful</h2>
            <p className="font-mono text-sm text-black/70 mb-8">
              Your intake request has been securely transmitted. A senior operator will review your requirements and contact you within 24 hours to schedule a scoping call.
            </p>
            <Link to="/" className="inline-flex bg-black text-white font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#F26122] transition-colors items-center gap-3">
              RETURN TO HOME <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#111] font-sans selection:bg-[#F26122] selection:text-white flex flex-col border-x border-black/15 max-w-[1600px] mx-auto relative">
      <SEO 
        title="Request a Red Team Audit | Blackbox Labs — Offensive Security"
        description="Start your red team engagement with Blackbox Labs. Complete our intake form and a senior operator will contact you within 24 hours. Strict NDA. All engagements authorized."
        canonical="/request-audit"
      />
      {/* Minimal Header (No Nav) */}
      <div className="border-b border-black/15 bg-white p-6 flex justify-between items-center sticky top-0 z-50">
        <div className="font-display font-bold text-xl tracking-widest flex items-center gap-2">
          BLACKBOX_LABS <span className="text-[#F26122] font-mono text-[10px] uppercase tracking-widest ml-4 hidden sm:inline-block">[ SECURE INTAKE PORTAL ]</span>
        </div>
        <Link to="/" className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#F26122] transition-colors">
          <ArrowLeft className="w-3 h-3" /> ABORT / RETURN TO MAIN SITE
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Left Column: Form */}
        <div className="lg:col-span-8 border-r border-black/15 bg-white flex flex-col">
          <div className="p-8 md:p-12 lg:p-20 border-b border-black/15">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Request an Audit
            </h1>
            <h2 className="font-mono text-sm md:text-base text-black/60 leading-relaxed max-w-2xl">
              Tell us about your environment. We'll tell you how we'd breach it.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 lg:p-20 bg-[#E5E5E5] flex-grow">
            <div className="max-w-3xl mx-auto space-y-12">
              
              {/* STEP 1 */}
              <div className={`bg-white border border-black/15 p-8 transition-all duration-500 ${step === 1 ? 'shadow-[8px_8px_0_rgba(242,97,34,1)] border-black' : 'opacity-50 grayscale'}`}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-6">STEP 1 OF 3 — ABOUT YOU</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Full Name*</label>
                    <input type="text" className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122]" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Work Email* <span className="text-black/60 font-normal">(No Gmail/Hotmail)</span></label>
                    <input type="email" className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122]" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Company Name*</label>
                    <input type="text" className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122]" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Job Title / Role*</label>
                    <input type="text" className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122]" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Company Size</label>
                    <select className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] bg-white appearance-none">
                      <option>1–99 employees</option>
                      <option>100–499</option>
                      <option>500–2,499</option>
                      <option>2,500–9,999</option>
                      <option>10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Industry*</label>
                    <select className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] bg-white appearance-none">
                      <option>Financial Services</option>
                      <option>Healthcare / Life Sciences</option>
                      <option>Defense / Government</option>
                      <option>Technology / SaaS</option>
                      <option>Cryptocurrency / Web3</option>
                      <option>Manufacturing / Critical Infrastructure</option>
                      <option>Insurance / Professional Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                {step === 1 && (
                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setStep(2)} className="bg-black text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-[#F26122] transition-colors flex items-center gap-2">
                      CONTINUE TO STEP 2 <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* STEP 2 */}
              <div className={`bg-white border border-black/15 p-8 transition-all duration-500 relative ${step === 2 ? 'shadow-[8px_8px_0_rgba(242,97,34,1)] border-black' : step < 2 ? 'opacity-30 grayscale pointer-events-none' : 'opacity-50 grayscale'}`}>
                {step < 2 && <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-[1px]"><Lock className="w-8 h-8 text-black/60" /></div>}
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-6">STEP 2 OF 3 — YOUR ENGAGEMENT</div>
                <div className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Engagement Type* <span className="text-black/60 font-normal">(Select primary)</span></label>
                    <select className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] bg-white appearance-none">
                      <option>Red Team Operation</option>
                      <option>Network Penetration Test</option>
                      <option>Application Security Assessment</option>
                      <option>Cloud Security Audit</option>
                      <option>Social Engineering Test</option>
                      <option>Vulnerability Research</option>
                      <option>Not Sure — Need Guidance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs font-bold mb-4">Preferred Scope</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm">
                      <label className="flex items-center gap-3 p-3 border border-black/20 cursor-pointer hover:border-black">
                        <input type="radio" name="scope" className="accent-[#F26122]" /> Black Box (No prior knowledge)
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-black/20 cursor-pointer hover:border-black">
                        <input type="radio" name="scope" className="accent-[#F26122]" /> Grey Box (Limited knowledge)
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-black/20 cursor-pointer hover:border-black">
                        <input type="radio" name="scope" className="accent-[#F26122]" /> White Box (Full access)
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-black/20 cursor-pointer hover:border-black">
                        <input type="radio" name="scope" className="accent-[#F26122]" /> Not Sure
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs font-bold mb-2">Timeline</label>
                      <select className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] bg-white appearance-none">
                        <option>ASAP (within 30 days)</option>
                        <option>Next Quarter</option>
                        <option>Planning for next 6 months</option>
                        <option>Annual / recurring program</option>
                        <option>Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs font-bold mb-2">Approximate Budget Range</label>
                      <select className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] bg-white appearance-none">
                        <option>$25K – $50K</option>
                        <option>$50K – $100K</option>
                        <option>$100K – $250K</option>
                        <option>$250K+</option>
                        <option>Not Yet Determined</option>
                      </select>
                    </div>
                  </div>
                </div>
                {step === 2 && (
                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(1)} className="text-black/60 font-mono text-[10px] uppercase tracking-widest hover:text-black transition-colors">
                      ← BACK
                    </button>
                    <button onClick={() => setStep(3)} className="bg-black text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-[#F26122] transition-colors flex items-center gap-2">
                      CONTINUE TO STEP 3 <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* STEP 3 */}
              <div className={`bg-white border border-black/15 p-8 transition-all duration-500 relative ${step === 3 ? 'shadow-[8px_8px_0_rgba(242,97,34,1)] border-black' : 'opacity-30 grayscale pointer-events-none'}`}>
                {step < 3 && <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-[1px]"><Lock className="w-8 h-8 text-black/60" /></div>}
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-6">STEP 3 OF 3 — CONTEXT</div>
                <div className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Target Environment Description</label>
                    <textarea 
                      rows={4} 
                      className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] resize-none"
                      placeholder="Describe your infrastructure — on-prem, cloud providers, application stack, number of endpoints, known sensitive assets. The more context, the better we can scope the engagement."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">Primary Security Concern</label>
                    <textarea 
                      rows={3} 
                      className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] resize-none"
                      placeholder="What keeps you up at night? Ransomware? Insider threats? Pre-IPO due diligence? Nation-state actors? Be specific."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-bold mb-2">How Did You Hear About Us?</label>
                    <select className="w-full border border-black/20 p-3 font-mono text-sm focus:outline-none focus:border-[#F26122] bg-white appearance-none">
                      <option>Google Search</option>
                      <option>LinkedIn</option>
                      <option>Referred by a colleague</option>
                      <option>DEF CON / Black Hat</option>
                      <option>Dark Reading / The Hacker News</option>
                      <option>CVE Research / Blog Post</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="pt-6 border-t border-black/10 space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 accent-[#F26122]" />
                      <span className="font-mono text-xs text-black/80 group-hover:text-black">I confirm this request is for an authorized engagement and I have the authority to commission security testing on the described systems.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 accent-[#F26122]" />
                      <span className="font-mono text-xs text-black/80 group-hover:text-black">I agree to Blackbox Labs' standard NDA and Rules of Engagement framework prior to any work commencing.</span>
                    </label>
                  </div>
                </div>
                {step === 3 && (
                  <div className="mt-8 pt-8 border-t border-black/15 flex flex-col items-end">
                    <button type="submit" disabled={isSubmitting} className="bg-[#F26122] text-white font-mono text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-black transition-colors flex items-center gap-3 w-full md:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? 'TRANSMITTING...' : 'SUBMIT INTAKE FORM'} <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="mt-4 font-mono text-[10px] text-black/60 flex items-center gap-2 text-right">
                      <Lock className="w-3 h-3" /> Encrypted submission · NDA signed before scoping · Senior operator responds within 24 hours
                    </div>
                  </div>
                )}
              </div>

            </div>
          </form>
        </div>

        {/* Right Column: Sticky Trust Signals */}
        <div className="lg:col-span-4 bg-white border-l border-black/15 relative hidden lg:block">
          <div className="sticky top-[89px] flex flex-col h-[calc(100vh-89px)] overflow-y-auto">
            
            {/* What Happens Next */}
            <div className="p-8 border-b border-black/15 bg-[#111] text-white">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-white/50">// WHAT HAPPENS NEXT</h4>
              <div className="font-mono text-xs space-y-6 relative before:absolute before:inset-y-2 before:left-[11px] before:w-[1px] before:bg-white/20">
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-[#F26122] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">01</div>
                  <div className="pt-1">You submit this form</div>
                </div>
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">02</div>
                  <div className="pt-1 text-white/70">Senior operator reviews within 24 hrs</div>
                </div>
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">03</div>
                  <div className="pt-1 text-white/70">30-min scoping call — direct with ops</div>
                </div>
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">04</div>
                  <div className="pt-1 text-white/70">NDA + Rules of Engagement signed</div>
                </div>
                <div className="flex gap-4 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">05</div>
                  <div className="pt-1 text-white/70">Proposal delivered within 5 business days. Engagement starts on your terms.</div>
                </div>
              </div>
            </div>

            {/* Commitment Badges */}
            <div className="p-8 border-b border-black/15 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold"><Lock className="w-4 h-4 text-[#F26122]" /> Strict NDA</div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold"><Clock className="w-4 h-4 text-[#F26122]" /> 24hr Response</div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold"><Shield className="w-4 h-4 text-[#F26122]" /> Authorized Only</div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold"><Terminal className="w-4 h-4 text-[#F26122]" /> No Sales Pitch</div>
            </div>

            {/* Mini Testimonial */}
            <div className="p-8 border-b border-black/15 bg-[#E5E5E5]">
              <div className="font-mono text-sm text-black/80 italic leading-relaxed mb-4">
                "I submitted the intake form on a Tuesday. Ghost called me on Wednesday morning. We were scoped and contracted by Friday. That's how enterprise security should work."
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest font-bold">
                — CISO, Global Financial Institution
              </div>
            </div>

            {/* Trust Stats */}
            <div className="p-8 border-b border-black/15">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-black/60">// TRUST STATS</h4>
              <ul className="font-mono text-xs space-y-3 text-black/80">
                <li className="flex items-start gap-2"><span className="text-[#F26122]">■</span> 98% of engagements uncover critical findings</li>
                <li className="flex items-start gap-2"><span className="text-[#F26122]">■</span> 4.9/5 client satisfaction score</li>
                <li className="flex items-start gap-2"><span className="text-[#F26122]">■</span> NPS: 78 — among the highest in offensive security</li>
                <li className="flex items-start gap-2"><span className="text-[#F26122]">■</span> 100% of clients under strict NDA</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="p-8">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 text-black/60">// CERTIFICATIONS</h4>
              <div className="flex flex-wrap gap-2">
                {['OSCP', 'CRTO', 'CREST', 'MITRE ATT&CK', 'CVE Researcher'].map(cert => (
                  <span key={cert} className="border border-black/20 px-2 py-1 font-mono text-[10px] font-bold text-black/60">{cert}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <ContactFAQ />
    </div>
  );
};
