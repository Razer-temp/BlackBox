import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { articles } from '../data/articles';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SEO from '../components/SEO';

export const ArticlePage = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Find article by matching the URL end
  const article = articles.find(a => a.url.endsWith(id || ''));

  // Dynamically define the TOC for the article based on its content
  const toc = React.useMemo(() => {
    const dynamicToc = [{ id: 'executive-summary', label: 'EXECUTIVE_SUMMARY' }];
    
    if (article?.content) {
      const headings = article.content.match(/^##\s+(.+)$/gm);
      if (headings) {
        headings.forEach(heading => {
          const text = heading.replace(/^##\s+/, '');
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const label = text.toUpperCase().replace(/\s+/g, '_');
          dynamicToc.push({ id, label });
        });
      }
    }
    return dynamicToc;
  }, [article]);

  useEffect(() => {
    const handleScrollSpy = () => {
      // Calculate reading progress based on the main content
      let progress = 0;
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const absoluteBottom = window.scrollY + rect.bottom;
        const totalScrollable = absoluteBottom - window.innerHeight;
        
        if (totalScrollable > 0) {
          progress = (window.scrollY / totalScrollable) * 100;
        } else {
          progress = 100;
        }
      }
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const halfScreen = window.innerHeight / 2;
      let currentActive = toc[0].id; // Default to the first section

      for (const item of toc) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= halfScreen) {
            currentActive = item.id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
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

  const handleShareX = () => {
    if (article) {
      const text = encodeURIComponent(`Reading: ${article.title} via @blackboxlabs`);
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
  };

  if (!article) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-20 text-center">
        <h1 className="font-display text-4xl font-bold mb-4">404 - CLASSIFIED RECORD NOT FOUND</h1>
        <p className="font-mono text-sm text-black/60 mb-8">The requested intelligence dossier does not exist or has been redacted.</p>
        <Link to="/blog" className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-black transition-colors">
          RETURN TO INTEL HUB
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col relative z-10 bg-[#E5E5E5]">
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/blog/${article.url.split('/').pop()}`}
        ogType="article"
        article={{
          publishedTime: article.date,
          author: article.author.name,
        }}
      />
      {/* Top Navigation Bar */}
      <div className="border-b border-black/15 bg-white p-4 flex justify-between items-center sticky top-0 z-20">
        <Link to="/blog" className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#F26122] transition-colors">
          <ArrowLeft className="w-3 h-3" /> BACK TO INTEL FEED
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={handleCopyLink} className="text-black/60 hover:text-black transition-colors" title="Copy Link"><Share2 className="w-4 h-4" /></button>
          <button onClick={handleBookmark} className={`${isBookmarked ? 'text-[#F26122]' : 'text-black/60 hover:text-black'} transition-colors`} title="Bookmark"><Bookmark className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Main Content */}
        <div className="lg:col-span-8 border-r border-black/15 bg-white" ref={contentRef}>
          {/* Article Header */}
          <div className="p-8 md:p-12 lg:p-20 border-b border-black/15">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-6">
              [{article.category}] // {article.type}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {article.title}
            </h1>

            {/* Author Meta */}
            <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-widest border-t border-black/15 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">
                  {article.author.initial}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">{article.author.name}</span>
                  <span className="text-black/60">{article.author.role}</span>
                </div>
              </div>
              <div className="text-black/60 hidden sm:block">·</div>
              <div className="text-black/60">{article.readTime}</div>
              <div className="text-black/60 hidden sm:block">·</div>
              <div className="text-black/60">Updated: {article.date}</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 lg:p-20 font-sans text-base md:text-lg text-black/80 leading-relaxed space-y-8 max-w-4xl">
            <div id="executive-summary" className="scroll-mt-32">
              <p className="font-bold text-xl leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <MarkdownRenderer
              content={(article as any).content || '## Content Coming Soon\n\nThis dossier is currently being redacted for public release.'}
              className="max-w-none mt-8"
            />
          </div>
        </div>

        {/* Sidebar - Intel Dossier HUD */}
        <div className="lg:col-span-4 bg-[#E5E5E5] border-l border-black/15">
          <div className="lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] flex flex-col overflow-y-auto">

            {/* Progress Bar */}
            <div
              className="absolute top-0 left-0 h-[2px] bg-[#F26122] transition-all duration-150 ease-out z-10"
              style={{ width: `${scrollProgress}%` }}
            />

            {/* Metadata Section */}
            <div className="p-8 border-b border-black/15 bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-green-600 bg-green-100 px-2 py-1 font-bold">
                  [ TLP: CLEAR ]
                </span>
                <span className="font-mono text-[10px] text-black/60">
                  REF: OP-{article.id.toString().padStart(3, '0')}-26
                </span>
              </div>
              <div className="font-mono text-xs text-black/60 mt-4 flex justify-between">
                <span>READING_PROGRESS:</span>
                <span className="text-[#F26122] font-bold">{Math.round(scrollProgress)}%</span>
              </div>
            </div>

            {/* Operator Profile */}
            <div className="p-8 border-b border-black/15 bg-white">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// LEAD_RESEARCHER</h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl shrink-0">
                  {article.author.initial}
                </div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-base">{article.author.name}</div>
                  <div className="font-mono text-[10px] text-black/60">{article.author.role}</div>
                </div>
              </div>
              <div className="font-mono text-[10px] space-y-2 text-black/80 mb-6 bg-[#F5F5F5] p-4 border border-black/10">
                <div>&gt; CREDENTIALS: {article.author.credentials}</div>
                <div>&gt; ACHIEVEMENTS: {article.author.achievements}</div>
                <div className="text-[#F26122]">&gt; COMMS: {article.author.twitter}</div>
              </div>
            </div>

            {/* TOC Section */}
            <div className="p-8 flex-grow bg-white border-b border-black/15">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// DOSSIER_INDEX</h4>
              <ul className="space-y-4 font-mono text-xs">
                {toc.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const num = (index + 1).toString().padStart(2, '0');
                  return (
                    <li key={index}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                        className={`flex items-start gap-2 transition-all duration-200 group ${isActive
                            ? 'text-[#F26122] font-bold'
                            : 'text-black/60 hover:text-black'
                          }`}
                      >
                        <span className={`shrink-0 ${isActive ? 'text-[#F26122]' : 'text-black/60 group-hover:text-black/80'}`}>
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
            <div className="p-8 bg-[#111] text-white font-mono text-[11px] flex flex-col gap-4 mt-auto">
              <h4 className="text-white/60 mb-2">// QUICK_ACTIONS</h4>
              <button onClick={handlePrint} className="text-left text-white/60 hover:text-[#F26122] transition-colors flex items-center gap-2">
                <span className="text-[#F26122] opacity-50">#</span> [ PRINT_DOSSIER ]
              </button>
              <button onClick={handleCopyLink} className="text-left text-white/60 hover:text-[#F26122] transition-colors flex items-center gap-2">
                <span className="text-[#F26122] opacity-50">#</span> {copied ? '[ LINK_COPIED_TO_CLIPBOARD ]' : '[ COPY_SECURE_LINK ]'}
              </button>
              <button onClick={handleShareX} className="text-left text-white/60 hover:text-[#F26122] transition-colors flex items-center gap-2">
                <span className="text-[#F26122] opacity-50">#</span> [ SHARE_ON_X ]
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
