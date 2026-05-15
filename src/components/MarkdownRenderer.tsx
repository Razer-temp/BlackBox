import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { Components } from 'react-markdown'

interface MarkdownRendererProps {
  content: string
  className?: string
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-black uppercase tracking-widest text-black mb-6 mt-8 border-b border-[#F26122]/30 pb-3">
      {children}
    </h1>
  ),
  h2: ({ children }) => {
    const text = String(children);
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return (
      <h2 id={id} className="text-xl font-black uppercase tracking-wider text-[#F26122] mb-4 mt-8 scroll-mt-32">
        // {text.toUpperCase()}
      </h2>
    );
  },
  h3: ({ children }) => (
    <h3 className="text-lg font-bold uppercase tracking-wide text-black/90 mb-3 mt-6">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-black/80 leading-relaxed mb-4 font-mono text-sm">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-[#F26122] hover:text-orange-400 underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="text-black font-bold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-black/80 italic">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#F26122] pl-4 my-6 bg-black/5 py-3 pr-3">
      <div className="text-black/60 font-mono text-sm italic">{children}</div>
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 space-y-1 pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 space-y-1 pl-0 list-none counter-reset-item">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-black/80 font-mono text-sm">
      <span className="text-[#F26122] mt-1 shrink-0">▸</span>
      <span>{children}</span>
    </li>
  ),
  hr: () => (
    <hr className="border-black/10 my-8" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse font-mono text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[#F26122]/50">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="text-left text-[#F26122] font-bold uppercase tracking-wider py-2 px-3 text-xs">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="text-black/80 py-2 px-3 border-b border-black/5">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-black/5 transition-colors">{children}</tr>
  ),
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    const isBlock = !!match

    if (isBlock) {
      return (
        <div className="my-6 rounded-sm overflow-hidden border border-black/10">
          <div className="flex items-center justify-between bg-[#111] border-b border-white/10 px-3 py-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-white/60 font-mono text-xs uppercase tracking-widest">
              {match[1]}
            </span>
          </div>
          <SyntaxHighlighter
            language={match[1]}
            style={vscDarkPlus as any}
            PreTag="div"
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'rgba(0,0,0,0.6)',
              fontSize: '0.8rem',
              lineHeight: '1.6',
            }}
            codeTagProps={{
              style: { fontFamily: "'Share Tech Mono', monospace" }
            }}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      )
    }

    return (
      <code
        className="bg-[#F26122]/10 text-orange-400 px-1.5 py-0.5 rounded-sm font-mono text-xs border border-[#F26122]/20"
        {...props}
      >
        {children}
      </code>
    )
  },
  img: ({ src, alt }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-sm border border-black/10"
        loading="lazy"
      />
      {alt && (
        <figcaption className="text-black/60 font-mono text-xs text-center mt-2">
          // {alt}
        </figcaption>
      )}
    </figure>
  ),
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  if (!content || content.trim() === '') {
    return (
      <div className="text-black/60 font-mono text-sm py-8 text-center">
        // [CONTENT LOADING...]
      </div>
    )
  }

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
