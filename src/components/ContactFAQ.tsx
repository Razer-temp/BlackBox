import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

interface ContactFAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

const defaultFaqs = [
  {
    q: "How long does it take to get a proposal after I submit?",
    a: "A senior operator reviews every intake within 24 hours. After a 30-min scoping call, proposals are delivered within 5 business days."
  },
  {
    q: "Do I need to sign an NDA before we talk?",
    a: "We offer mutual NDA before any scoping call. No sensitive information is shared before legal protections are in place."
  },
  {
    q: "What's the minimum engagement size?",
    a: "Our smallest engagements start at $25,000. Enterprise red team operations typically range from $75,000–$250,000+ depending on scope and duration."
  },
  {
    q: "Do you work with companies outside the US?",
    a: "Yes. We have operators across North America, Europe, and APAC. We have executed engagements in 23 countries and comply with local legal requirements for authorized testing."
  },
  {
    q: "Can you work within our existing compliance framework?",
    a: "Yes. We have experience with DORA, TIBER-EU, CBEST, PCI DSS, HIPAA, CMMC, FedRAMP, and SOC 2 scoping requirements. Mention your framework in the intake form."
  },
  {
    q: "What if we've already had a penetration test?",
    a: "Most of our clients come to us after previous assessments left them unsatisfied. We regularly find critical vulnerabilities that other firms missed. That's not a sales claim — it's what our case studies document."
  }
];

export const ContactFAQ = ({ 
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Before a visitor fills out a form, they need to trust you. These visual cues validate our credibility in seconds.",
  eyebrow = "// DECLASSIFIED INTEL"
}: ContactFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[#E5E5E5] border-t border-black/15">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-8 md:p-12 lg:p-20 border-r border-black/15 bg-white">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-4">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
            {title}
          </h2>
          <p className="font-mono text-xs text-black/60 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-20">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border border-black/15 bg-white transition-all duration-300 ${openIndex === idx ? 'shadow-[4px_4px_0_rgba(242,97,34,1)] border-black' : 'hover:border-black hover:shadow-[4px_4px_0_rgba(0,0,0,1)]'}`}
              >
                <button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#F26122]' : 'text-black/60'}`} />
                </button>
                <div 
                  className={`grid transition-all duration-300 ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 font-mono text-sm text-black/70 leading-relaxed border-t border-black/5 mt-2">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
