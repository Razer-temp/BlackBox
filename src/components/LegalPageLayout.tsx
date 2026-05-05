import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import SEO from './SEO';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  toc?: { id: string; label: string }[];
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children, toc }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScrollSpy = () => {
      // Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)) : 0;
      setScrollProgress(progress);

      if (!toc || toc.length === 0) return;

      const halfScreen = window.innerHeight / 2;
      let currentActive = toc[0].id; // Default to the first section

      for (const item of toc) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the screen,
          // it becomes the current active section.
          if (rect.top <= halfScreen) {
            currentActive = item.id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    // Run once on mount to set initial state
    handleScrollSpy();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [toc]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate a consistent document ID based on the title
  const docRef = `LGL-${title.replace(/[^A-Z]/gi, '').substring(0, 3).toUpperCase()}-01`;

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-white pt-32 pb-24">
      <SEO 
        title={`${title} | Blackbox Labs`}
        description={`Blackbox Labs ${title.toLowerCase()} — how we collect, use, and protect your information.`}
        noIndex={title === 'Terms of Service'}
      />
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/15 pb-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Legal</span>
            <span>/</span>
            <span className="text-[#FF4500]">{title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">{title}</h1>
          <div className="font-mono text-xs text-[#FF4500] flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>LAST_UPDATED: {lastUpdated}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-invert prose-p:font-sans prose-p:text-white/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[#FF4500] prose-a:no-underline hover:prose-a:underline prose-li:font-sans prose-li:text-white/70 prose-strong:text-white max-w-none">
              {children}
            </div>
          </div>

          {/* Sidebar TOC - Tactical Document HUD */}
          {toc && toc.length > 0 && (
            <div className="lg:w-1/3 hidden lg:block">
              <div className="sticky top-32 bg-[#111] border-t-2 border-[#FF4500] border-x border-b border-white/10 flex flex-col relative overflow-hidden">
                
                {/* Progress Bar */}
                <div 
                  className="absolute top-0 left-0 h-[2px] bg-[#FF4500] transition-all duration-150 ease-out z-10"
                  style={{ width: `${scrollProgress}%` }}
                />

                {/* Metadata Section */}
                <div className="p-6 border-b border-white/10 bg-black/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#00FF41] bg-[#00FF41]/10 px-2 py-1">
                      [ TLP: CLEAR ]
                    </span>
                    <span className="font-mono text-[10px] text-white/60">
                      DOC_REF: {docRef}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-white/50 mt-4 flex justify-between">
                    <span>READING_PROGRESS:</span>
                    <span className="text-[#FF4500]">{Math.round(scrollProgress)}%</span>
                  </div>
                </div>

                {/* TOC Section */}
                <div className="p-6 flex-grow">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-white/50">// INDEX</h4>
                  <ul className="space-y-4 font-mono text-xs">
                    {toc.map((item, index) => {
                      const isActive = activeSection === item.id;
                      const num = (index + 1).toString().padStart(2, '0');
                      return (
                        <li key={index}>
                          <a 
                            href={`#${item.id}`} 
                            onClick={(e) => handleScroll(e, item.id)}
                            className={`flex items-start gap-2 transition-all duration-200 group ${
                              isActive 
                                ? 'text-[#FF4500] font-bold' 
                                : 'text-white/50 hover:text-white'
                            }`}
                          >
                            <span className={`shrink-0 ${isActive ? 'text-[#FF4500]' : 'text-white/60 group-hover:text-white/80'}`}>
                              {isActive ? `> [ ${num} ]` : `  [ ${num} ]`}
                            </span>
                            <span className={isActive ? 'translate-x-1 transition-transform' : 'transition-transform group-hover:translate-x-1'}>
                              {item.label}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Quick Actions Section */}
                <div className="p-6 border-t border-white/10 bg-black/40 font-mono text-[11px] flex flex-col gap-3">
                  <h4 className="text-white/60 mb-2">// QUICK_ACTIONS</h4>
                  <button onClick={handlePrint} className="text-left text-white/60 hover:text-[#FF4500] transition-colors flex items-center gap-2">
                    <span className="text-[#FF4500] opacity-50">#</span> [ PRINT_RECORD ]
                  </button>
                  <button onClick={handleCopyLink} className="text-left text-white/60 hover:text-[#FF4500] transition-colors flex items-center gap-2">
                    <span className="text-[#FF4500] opacity-50">#</span> {copied ? '[ LINK_COPIED_TO_CLIPBOARD ]' : '[ COPY_PERMALINK ]'}
                  </button>
                  <a href="mailto:legal@blackboxlabs.com" className="text-left text-white/60 hover:text-[#FF4500] transition-colors flex items-center gap-2">
                    <span className="text-[#FF4500] opacity-50">#</span> [ CONTACT_LEGAL ]
                  </a>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
