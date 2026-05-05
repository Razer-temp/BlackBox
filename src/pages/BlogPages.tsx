import React, { useState } from 'react';
import { ArrowDown, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles, authors } from '../data/articles';
import SEO from '../components/SEO';
import { useSound } from '../contexts/SoundContext';

const AuthorBio = ({ author }: { author: any }) => (
  <div className="border border-black/15 bg-white p-6 mb-8 shadow-[4px_4px_0_rgba(0,0,0,1)]">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold text-xl">
        {author.initial}
      </div>
      <div>
        <div className="font-bold uppercase tracking-widest text-sm">{author.name}</div>
        <div className="font-mono text-[10px] text-black/60">{author.role}</div>
      </div>
    </div>
    <div className="font-mono text-[10px] space-y-2 text-black/80">
      <div>■ {author.credentials}</div>
      <div>■ {author.achievements}</div>
      <div className="text-[#F26122]">■ {author.twitter}</div>
    </div>
  </div>
);

const ArticleCard = ({ article }: { article: any, key?: string }) => (
  <Link to={article.url} className="p-8 border-b border-r border-black/15 bg-[#E5E5E5] hover:bg-white transition-colors group cursor-crosshair flex flex-col h-full">
    <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-4">[{article.category}]</div>
    <h3 className="font-display text-2xl font-bold leading-tight mb-4 group-hover:text-[#F26122] transition-colors">{article.title}</h3>
    <p className="font-sans text-sm text-black/70 leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
    <div className="mt-auto pt-4 border-t border-black/10 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-black/60">
      <span>{article.readTime} · by {article.author.name}</span>
    </div>
  </Link>
);

const HeroArticle = ({ article }: { article: any }) => (
  <Link to={article.url} className="p-8 md:p-12 border-b border-black/15 bg-white group cursor-crosshair relative overflow-hidden block">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F26122]/5 to-transparent h-[200%] -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none z-0"></div>
    <div className="relative z-10">
      <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-6">[{article.category}]</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 group-hover:text-[#F26122] transition-colors">
        {article.title}
      </h2>
      <p className="font-sans text-base text-black/70 leading-relaxed mb-8 max-w-3xl">
        {article.excerpt}
      </p>
      <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest border-t border-black/15 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">{article.author.initial}</div>
          <div className="flex flex-col">
            <span className="font-bold">{article.author.name}</span>
            <span className="text-black/60">{article.author.role}</span>
          </div>
        </div>
        <div className="text-black/60">·</div>
        <div className="text-black/60">{article.readTime}</div>
        <div className="text-black/60">·</div>
        <div className="text-black/60">Updated: {article.date}</div>
      </div>
    </div>
  </Link>
);

const Sidebar = ({ showReport = false, showAdvisories = false }) => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { playSuccess } = useSound();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      playSuccess();
    }, 1000);
  };

  return (
  <div className="lg:col-span-4 bg-white flex flex-col">
    {/* Subscribe */}
    <div className="p-8 border-b border-black/15 bg-[#111] text-white">
      <h4 className="font-display text-xl font-bold uppercase tracking-tighter mb-4">WEEKLY THREAT INTEL BRIEF</h4>
      <p className="font-mono text-[10px] text-white/60 mb-6">Every Friday. CVE advisories, red team insights, and attack technique breakdowns — written by operators, not marketers.</p>
      <form onSubmit={handleSubscribe}>
        <input type="email" required placeholder="[ Work Email ]" className="w-full bg-white/5 border border-white/15 text-white font-mono text-xs p-3 mb-3 focus:outline-none focus:border-[#F26122] transition-colors disabled:opacity-50" disabled={isSubscribing || isSubscribed} />
        <button type="submit" disabled={isSubscribing || isSubscribed} className="w-full bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-4 py-3 hover:bg-white hover:text-black transition-colors mb-4 disabled:opacity-50 disabled:hover:bg-[#F26122] disabled:hover:text-white">
          {isSubscribing ? 'SUBSCRIBING...' : isSubscribed ? '✓ SUBSCRIBED' : 'SUBSCRIBE — IT\'S FREE'}
        </button>
      </form>
      <div className="font-mono text-[9px] text-white/60 uppercase tracking-widest text-center">
        3,200+ CISOs and security leaders already subscribed.<br/>
        Unsubscribe any time. Zero spam. Zero sales pitches.
      </div>
    </div>

    {/* Featured Authors */}
    <div className="p-8 border-b border-black/15 bg-[#E5E5E5]">
      <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">// FEATURED OPERATORS</h4>
      <AuthorBio author={authors.ghost} />
      <AuthorBio author={authors.null} />
    </div>

    {/* Latest CVEs */}
    {showAdvisories && (
      <div className="p-8 border-b border-black/15 bg-white">
        <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 text-black/60">LATEST CVE ADVISORIES</h4>
        <div className="space-y-6">
          <Link to="/threat-intel/cve-2024-xxxx-rce-exploitation" className="block group cursor-pointer">
            <div className="font-mono text-[10px] text-[#DC2626] font-bold mb-1">CVSS 9.8 (CRITICAL)</div>
            <h5 className="font-sans text-sm font-bold group-hover:text-[#F26122] transition-colors">CVE-2024-XXXX: Critical RCE</h5>
          </Link>
          <div className="group cursor-pointer">
            <div className="font-mono text-[10px] text-[#DC2626] font-bold mb-1">CVSS 9.1 (CRITICAL)</div>
            <h5 className="font-sans text-sm font-bold group-hover:text-[#F26122] transition-colors">CVE-2024-YYYY: Palo Alto Auth Bypass</h5>
          </div>
          <div className="group cursor-pointer">
            <div className="font-mono text-[10px] text-[#F26122] font-bold mb-1">CVSS 8.4 (HIGH)</div>
            <h5 className="font-sans text-sm font-bold group-hover:text-[#F26122] transition-colors">CVE-2024-ZZZZ: Ivanti VPN Exploit</h5>
          </div>
        </div>
      </div>
    )}

    {/* Download Report */}
    {showReport && (
      <div data-cursor="dark" className="p-8 border-b border-black/15 bg-[#F26122] text-white relative overflow-hidden group cursor-pointer">
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
          <Fingerprint className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-widest mb-4 font-bold text-black">
            [ FREE DOWNLOAD ]
          </div>
          <h4 className="font-display text-2xl font-bold leading-tight mb-4">
            2025 State of Red Teaming Report
          </h4>
          <p className="font-mono text-[10px] text-white/80 mb-6 max-w-[80%]">
            Attack vector breakdown from 2024 engagements. Average dwell time, initial access methods, and what your IR plan is missing.
          </p>
          <Link to="/request-audit" className="inline-block bg-black text-white font-mono text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition-colors">
            DOWNLOAD PDF
          </Link>
        </div>
      </div>
    )}
  </div>
  );
};

const FilterBar = ({ activeFilter }: { activeFilter: string }) => {
  const filters = [
    { label: '[ ALL ]', path: '/blog' },
    { label: '[ CVE ADVISORIES ]', path: '/threat-intel' },
    { label: '[ RESEARCH ]', path: '/research' },
    { label: '[ RED TEAM ]', path: '/blog' },
    { label: '[ CISO GUIDES ]', path: '/blog' },
    { label: '[ CLOUD ]', path: '/blog' },
    { label: '[ APPLICATION ]', path: '/blog' }
  ];

  return (
    <div className="border-b border-black/15 bg-white overflow-x-auto sticky top-0 z-20">
      <div className="flex items-center font-mono text-[10px] uppercase tracking-widest min-w-max">
        {filters.map((filter) => (
          <Link 
            key={filter.label}
            to={filter.path}
            className={`px-6 py-4 border-r border-black/15 transition-colors ${
              activeFilter === filter.label 
                ? 'bg-black text-white hover:bg-black/80' 
                : 'hover:bg-black/5 text-black/60 hover:text-black'
            }`}
          >
            {filter.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const BlogHub = () => {
  const heroArticle = articles.find(a => a.id === 'kerberoasting-walkthrough');
  const gridArticles = articles.filter(a => a.id !== 'kerberoasting-walkthrough');

  return (
    <div className="flex-grow flex flex-col relative z-10 bg-[#E5E5E5]">
      <SEO 
        title="Threat Intelligence & Red Team Research | Blackbox Labs"
        description="Read the latest threat intelligence, red team research, CVE advisories, and CISO guides from the operators at Blackbox Labs."
        canonical="/blog"
      />
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 bg-[#111] text-white">
        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter mb-6">
          Threat Intelligence.<br/>
          Red Team Research.<br/>
          <span className="text-[#F26122]">No Filler.</span>
        </h1>
      </div>

      <FilterBar activeFilter="[ ALL ]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        <div className="lg:col-span-8 border-r border-black/15 flex flex-col">
          {heroArticle && <HeroArticle article={heroArticle} />}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {gridArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="p-8 flex justify-center">
            <button className="font-mono text-[10px] uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors flex items-center gap-3 opacity-50 cursor-not-allowed">
              NO MORE INTEL <ArrowDown className="w-3 h-3" />
            </button>
          </div>
        </div>
        <Sidebar showReport={true} />
      </div>
    </div>
  );
};

export const ThreatIntelPage = () => {
  const heroArticle = articles.find(a => a.id === 'cve-2024-xxxx');
  const gridArticles = articles.filter(a => a.category === 'THREAT INTEL' && a.id !== 'cve-2024-xxxx');

  return (
    <div className="flex-grow flex flex-col relative z-10 bg-[#E5E5E5]">
      <SEO 
        title="CVE Advisories & Threat Intelligence | Blackbox Labs"
        description="Live CVE advisories, zero-day intelligence, and vulnerability breakdowns from Blackbox Labs researchers."
        canonical="/threat-intel"
      />
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 bg-[#111] text-white">
        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter mb-6">
          Live Advisories.<br/>
          CVE Breakdowns.<br/>
          <span className="text-[#F26122]">Zero-Day Intel.</span>
        </h1>
      </div>

      <FilterBar activeFilter="[ CVE ADVISORIES ]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        <div className="lg:col-span-8 border-r border-black/15 flex flex-col">
          {heroArticle && <HeroArticle article={heroArticle} />}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {gridArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        <Sidebar showReport={false} showAdvisories={true} />
      </div>
    </div>
  );
};

export const ResearchPage = () => {
  const heroArticle = articles.find(a => a.id === 'ransomware-2025');
  const gridArticles = articles.filter(a => (a.category === 'RESEARCH' || a.category === 'CISO GUIDE') && a.id !== 'ransomware-2025');

  return (
    <div className="flex-grow flex flex-col relative z-10 bg-[#E5E5E5]">
      <SEO 
        title="Security Research & Whitepapers | Blackbox Labs"
        description="Deep-dive security research, whitepapers, and CISO guides covering advanced attack vectors and defensive strategies."
        canonical="/research"
      />
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 bg-[#111] text-white">
        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter mb-6">
          Deep Whitepapers.<br/>
          Original Reports.<br/>
          <span className="text-[#F26122]">Operator Insights.</span>
        </h1>
      </div>

      <FilterBar activeFilter="[ RESEARCH ]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        <div className="lg:col-span-8 border-r border-black/15 flex flex-col">
          {heroArticle && <HeroArticle article={heroArticle} />}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {gridArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        <Sidebar showReport={true} />
      </div>
    </div>
  );
};
