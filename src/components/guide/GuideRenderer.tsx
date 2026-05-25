"use client";

import React, { useState, useCallback, useMemo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuideRendererProps {
  content: string;
  lang: "ar" | "en";
}

/* ─── Copy Button ─── */
function CodeCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-all",
        copied
          ? "bg-[#00ff66]/20 text-[#00ff66]"
          : "bg-white/5 text-[#7a8ba8] hover:bg-white/10 hover:text-[#e8edf5]"
      )}
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

/* ─── Alert Type Detection ─── */
function getAlertType(text: string): "error" | "success" | "tip" | "warning" | "quote" {
  const trimmed = text.trim();
  if (trimmed.startsWith("❌") || trimmed.startsWith("**خطأ**") || trimmed.startsWith("**Error**")) return "error";
  if (trimmed.startsWith("✅") || trimmed.startsWith("**ملاحظة**") || trimmed.startsWith("**Note**")) return "success";
  if (trimmed.startsWith("💡") || trimmed.startsWith("**نصيحة**") || trimmed.startsWith("**Tip**")) return "tip";
  if (trimmed.startsWith("⚠️") || trimmed.startsWith("**تحذير**") || trimmed.startsWith("**Warning**")) return "warning";
  return "quote";
}

const alertStyles: Record<string, string> = {
  error: "border-[#ff3d5a]/40 bg-[#ff3d5a]/5",
  success: "border-[#00ff66]/40 bg-[#00ff66]/5",
  tip: "border-[#ffab00]/40 bg-[#ffab00]/5",
  warning: "border-[#ffab00]/40 bg-[#ffab00]/5",
  quote: "border-[#1e2d4d] bg-[#0f1628]/50",
};

const alertIcons: Record<string, string> = {
  error: "❌",
  success: "✅",
  tip: "💡",
  warning: "⚠️",
  quote: "💬",
};

/* ─── Slugify helper ─── */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/* ─── Main Component ─── */
export default function GuideRenderer({ content, lang }: GuideRendererProps) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  const components = useMemo(
    () => ({
      /* Code blocks */
      code(props: React.HTMLAttributes<HTMLElement> & { inline?: boolean; className?: string; children?: React.ReactNode }) {
        const { className, children, inline, ...rest } = props;
        const match = /language-(\w+)/.exec(className || "");
        const codeString = String(children).replace(/\n$/, "");

        if (!inline && match) {
          return (
            <div className="relative group my-4 rounded-xl overflow-hidden border border-[#1e2d4d]">
              <CodeCopyButton text={codeString} />
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  background: "#0a0f1a",
                  padding: "1rem 1.25rem",
                  fontSize: "0.8rem",
                  lineHeight: "1.7",
                }}
                codeTagProps={{
                  className: "text-[#e8edf5]",
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          );
        }

        // Inline code
        return (
          <code
            className="inline-flex items-center rounded-md bg-[#151d33] border border-[#1e2d4d] px-1.5 py-0.5 font-mono text-sm text-[#e8edf5] before:content-['`'] after:content-['`']"
            {...rest}
          >
            {children}
          </code>
        );
      },

      /* Headings with anchor links */
      h1(props: React.HTMLAttributes<HTMLHeadingElement>) {
        const { children, ...rest } = props;
        const text = String(children).replace(/[`#]/g, "");
        return (
          <h1 id={slugify(text)} className="scroll-mt-20 text-3xl md:text-4xl font-bold gradient-neon-text mb-6 mt-8" {...rest}>
            {children}
          </h1>
        );
      },
      h2(props: React.HTMLAttributes<HTMLHeadingElement>) {
        const { children, ...rest } = props;
        const text = String(children).replace(/[`#]/g, "");
        return (
          <h2 id={slugify(text)} className="scroll-mt-20 text-xl md:text-2xl font-bold text-[#e8edf5] mb-4 mt-10 flex items-center gap-2 group" {...rest}>
            <span className="hidden group-hover:inline-block text-[#00ff66] text-lg">#</span>
            {children}
          </h2>
        );
      },
      h3(props: React.HTMLAttributes<HTMLHeadingElement>) {
        const { children, ...rest } = props;
        const text = String(children).replace(/[`#]/g, "");
        return (
          <h3 id={slugify(text)} className="scroll-mt-20 text-lg md:text-xl font-semibold text-[#e8edf5] mb-3 mt-8" {...rest}>
            {children}
          </h3>
        );
      },
      h4(props: React.HTMLAttributes<HTMLHeadingElement>) {
        const { children, ...rest } = props;
        return (
          <h4 className="scroll-mt-20 text-base md:text-lg font-semibold text-[#c5cdd8] mb-2 mt-6" {...rest}>
            {children}
          </h4>
        );
      },

      /* Paragraph */
      p(props: React.HTMLAttributes<HTMLParagraphElement>) {
        const { children, ...rest } = props;
        return (
          <p className="text-[#c5cdd8] leading-relaxed mb-4 text-sm md:text-base" {...rest}>
            {children}
          </p>
        );
      },

      /* Links */
      a(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
        const { href, children, ...rest } = props;
        const isExternal = href && (href.startsWith("http://") || href.startsWith("https://"));
        return (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-[#00e5ff] hover:text-[#00ff66] underline underline-offset-2 decoration-[#00e5ff]/30 hover:decoration-[#00ff66]/50 transition-colors"
            {...rest}
          >
            {children}
            {isExternal && <span className="inline-block ml-1 opacity-50">↗</span>}
          </a>
        );
      },

      /* Tables */
      table(props: React.TableHTMLAttributes<HTMLTableElement>) {
        return (
          <div className="my-4 overflow-x-auto rounded-xl border border-[#1e2d4d]">
            <table className="w-full text-sm" {...props} />
          </div>
        );
      },
      thead(props: React.HTMLAttributes<HTMLTableSectionElement>) {
        return <thead className="bg-[#151d33] border-b border-[#1e2d4d]" {...props} />;
      },
      th(props: React.ThHTMLAttributes<HTMLTableCellElement>) {
        return (
          <th className="px-4 py-2.5 text-start font-semibold text-[#e8edf5] text-xs uppercase tracking-wider" {...props}>
            {props.children}
          </th>
        );
      },
      td(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
        return (
          <td className="px-4 py-2.5 border-b border-[#1e2d4d]/50 text-[#c5cdd8]" {...props}>
            {props.children}
          </td>
        );
      },
      tr(props: React.ThHTMLAttributes<HTMLTableRowElement>) {
        return (
          <tr className="hover:bg-[#151d33]/50 transition-colors" {...props}>
            {props.children}
          </tr>
        );
      },

      /* Blockquotes */
      blockquote(props: React.HTMLAttributes<HTMLQuoteElement>) {
        const text = String(props.children || "");
        const alertType = getAlertType(text);
        const icon = alertIcons[alertType];

        // Strip leading icon/keyword from content
        let cleanText = text;
        if (["error", "success", "tip", "warning"].includes(alertType)) {
          cleanText = text.replace(/^[❌✅💡⚠️]\s*/, "").replace(/^\*\*(خطأ|Error|ملاحظة|Note|نصيحة|Tip|تحذير|Warning)\*\*[:\s]*/, "");
        }

        return (
          <blockquote
            className={cn(
              "my-4 rounded-xl border-l-4 p-4",
              alertStyles[alertType]
            )}
            {...props}
          >
            <div className="flex items-start gap-2">
              <span className="text-lg shrink-0 mt-0.5">{icon}</span>
              <div className="text-sm leading-relaxed text-[#c5cdd8]">{cleanText}</div>
            </div>
          </blockquote>
        );
      },

      /* Lists */
      ul(props: React.HTMLAttributes<HTMLUListElement>) {
        return (
          <ul className="my-3 space-y-1.5" dir={dir} {...props}>
            {props.children}
          </ul>
        );
      },
      ol(props: React.HTMLAttributes<HTMLOListElement>) {
        return (
          <ol className="my-3 space-y-1.5 list-decimal list-inside" dir={dir} {...props}>
            {props.children}
          </ol>
        );
      },
      li(props: React.LiHTMLAttributes<HTMLLIElement>) {
        return (
          <li className="flex items-start gap-2 text-sm text-[#c5cdd8]" {...props}>
            <span className="text-[#00ff66] mt-1 shrink-0">•</span>
            <span>{props.children}</span>
          </li>
        );
      },

      /* Strong */
      strong(props: React.HTMLAttributes<HTMLElement>) {
        return <strong className="font-bold text-[#e8edf5]" {...props} />;
      },

      /* Horizontal rule */
      hr(props: React.HTMLAttributes<HTMLHRElement>) {
        return <hr className="my-8 border-t border-[#1e2d4d]" {...props} />;
      },

      /* Images */
      img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
        const { alt, ...rest } = props;
        return (
          <img
            alt={alt || ""}
            className="my-4 max-w-full rounded-xl border border-[#1e2d4d]"
            loading="lazy"
            {...rest}
          />
        );
      },

      /* Pre - let code handle it */
      pre(props: React.HTMLAttributes<HTMLDivElement>) {
        const { children, ...rest } = props;
        return <div {...rest}>{children}</div>;
      },
    }),
    [dir]
  );

  return (
    <div dir={dir} className="markdown-content">
      <Markdown remarkPlugins={[remarkGfm]} components={components as never}>
        {content}
      </Markdown>
    </div>
  );
}
