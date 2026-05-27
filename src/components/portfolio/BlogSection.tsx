"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  BookOpen, Clock, Calendar, ArrowRight, ArrowLeft,
  X, ChevronRight, Code2, User, Tag
} from "lucide-react";
import { useLang } from "@/lib/language";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

/* ═══ ANIMATION VARIANTS ═══ */
const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

/* ═══ SIMPLE MARKDOWN RENDERER FOR BLOG ═══ */
function BlogMarkdown({ text, lang }: { text: string; lang: "ar" | "en" }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip table separator lines
    if (line.trim().startsWith("|---") || line.trim().startsWith("| ---")) continue;

    // Table rows
    if (line.trim().startsWith("|")) {
      const cells = line.split("|").filter(c => c.trim() !== "").map(c => c.trim());
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(cells);
      // Check if next line is not a table row
      const nextLine = lines[i + 1];
      if (!nextLine || (!nextLine.trim().startsWith("|"))) {
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-4 rounded-xl glass-card-dark">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1e2d4d]">
                  {tableRows[0]?.map((cell, ci) => (
                    <th key={ci} className="px-4 py-2 text-left text-xs font-semibold text-[#00ff66]">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri} className="border-b border-[#1e2d4d]/50 last:border-0">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2 text-xs text-[#c5cdd8]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }
      continue;
    }

    inTable = false;

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={`br-${i}`} className="h-3" />);
      continue;
    }

    // Headers
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${i}`} className="text-lg font-bold text-[#e8edf5] mt-6 mb-3 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#00ff66] rounded-full shrink-0" />
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    // List items
    if (line.trim().startsWith("- ")) {
      elements.push(
        <div key={`li-${i}`} className="flex items-start gap-2 ml-2 my-1">
          <span className="text-[#00ff66] mt-1 shrink-0">•</span>
          <span className="text-sm text-[#c5cdd8] leading-relaxed">{renderInline(line.trim().slice(2))}</span>
        </div>
      );
      continue;
    }

    // Bold text inline
    elements.push(
      <p key={`p-${i}`} className="text-sm text-[#c5cdd8] leading-relaxed my-2" dir={lang === "ar" ? "rtl" : "ltr"}>
        {renderInline(line)}
      </p>
    );
  }

  return <>{elements}</>;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-[#e8edf5]">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

/* ═══ BLOG POST CARD ═══ */
function BlogCard({ post, index, onClick }: { post: BlogPost; index: number; onClick: () => void }) {
  const { lang, isRTL } = useLang();
  const title = lang === "ar" ? post.title.ar : post.title.en;
  const excerpt = lang === "ar" ? post.excerpt.ar : post.excerpt.en;
  const readTime = lang === "ar" ? post.readTime.ar : post.readTime.en;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-card-dark rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300 gradient-card-border"
    >
      {/* Top color bar */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${post.color}, ${post.color}60, transparent)` }} />

      <div className="p-5 sm:p-6">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: `${post.color}12`,
              color: post.color,
              border: `1px solid ${post.color}30`,
            }}
          >
            {post.category === "hardware" ? (lang === "ar" ? "عتاد" : "Hardware") :
             post.category === "project" ? (lang === "ar" ? "مشروع" : "Project") :
             (lang === "ar" ? "درس" : "Tutorial")}
          </span>
          <span className="text-[10px] text-[#3d506e] flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#e8edf5] mb-2 group-hover:text-[#00ff66] transition-colors line-clamp-2" dir={isRTL() ? "rtl" : "ltr"}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-[#7a8ba8] leading-relaxed mb-4 line-clamp-3" dir={isRTL() ? "rtl" : "ltr"}>
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1e2d4d]/50">
          <div className="flex items-center gap-1.5 text-[10px] text-[#7a8ba8]">
            <User className="h-3 w-3" />
            <span>{lang === "ar" ? post.author.ar : post.author.en}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#7a8ba8] flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
            <span className="text-[#00ff66] text-xs font-medium flex items-center gap-1">
              {lang === "ar" ? "اقرأ المزيد" : "Read more"}
              {isRTL() ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══ BLOG POST MODAL ═══ */
function BlogPostModal({ post, onClose }: { post: BlogPost | null; onClose: () => void }) {
  const { lang, isRTL } = useLang();
  const [showCode, setShowCode] = useState<number | null>(null);

  if (!post) return null;

  const title = lang === "ar" ? post.title.ar : post.title.en;
  const readTime = lang === "ar" ? post.readTime.ar : post.readTime.en;
  const content = lang === "ar" ? post.content.ar : post.content.en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-8 pb-8 overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10 w-full max-w-3xl glass-card-dark rounded-2xl overflow-hidden gradient-card-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[#1e2d4d] bg-[#0c1220]/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-[#00ff66]" />
            <span className="text-xs text-[#00ff66] font-medium">
              {lang === "ar" ? "المدونة التقنية" : "Tech Blog"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors text-[#7a8ba8] hover:text-[#ff3d5a]"
            aria-label={lang === "ar" ? "إغلاق" : "Close"}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8" dir={isRTL() ? "rtl" : "ltr"}>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `${post.color}12`,
                color: post.color,
                border: `1px solid ${post.color}30`,
              }}
            >
              {post.category === "hardware" ? (lang === "ar" ? "عتاد" : "Hardware") :
               post.category === "project" ? (lang === "ar" ? "مشروع" : "Project") :
               (lang === "ar" ? "درس" : "Tutorial")}
            </span>
            <span className="text-[10px] text-[#7a8ba8] flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="text-[10px] text-[#7a8ba8] flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
            <span className="text-[10px] text-[#7a8ba8] flex items-center gap-1">
              <User className="h-3 w-3" />
              {lang === "ar" ? post.author.ar : post.author.en}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold gradient-neon-text mb-6">
            {title}
          </h1>

          {/* Blog Content */}
          <div className="prose-custom">
            <BlogMarkdown text={content} lang={lang} />
          </div>

          {/* Code Blocks */}
          {post.codeBlocks.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#1e2d4d]">
              <h3 className="text-lg font-bold gradient-neon-text mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                {lang === "ar" ? "الكود البرمجي" : "Source Code"}
              </h3>

              {post.codeBlocks.map((block, i) => (
                <div key={i} className="mb-4">
                  {/* Code Toggle */}
                  <button
                    onClick={() => setShowCode(showCode === i ? null : i)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card-dark hover:bg-white/5 transition-colors text-sm w-full"
                  >
                    <ChevronRight className={`h-4 w-4 text-[#00ff66] transition-transform ${showCode === i ? "rotate-90" : ""}`} />
                    <span className="text-[#e8edf5] font-medium">
                      {lang === "ar" ? block.captionAr : block.captionEn}
                    </span>
                    <span className="ml-auto text-[10px] text-[#3d506e] font-mono">
                      {block.language}
                    </span>
                  </button>

                  {/* Code Block */}
                  <AnimatePresence>
                    {showCode === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 rounded-xl overflow-hidden border border-[#1e2d4d] bg-[#080c16]">
                          <div className="flex items-center justify-between px-4 py-2 bg-[#0c1220] border-b border-[#1e2d4d]">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ff3d5a]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ffab00]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" />
                            </div>
                            <span className="text-[10px] text-[#3d506e] font-mono">{block.language}</span>
                          </div>
                          <pre className="p-4 overflow-x-auto code-scroll">
                            <code className="text-xs sm:text-sm text-[#c5cdd8] font-mono leading-relaxed whitespace-pre">
                              {block.code}
                            </code>
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* Close button */}
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl neon-border text-[#00ff66] hover:bg-[#00ff66]/10 transition-all text-sm font-medium"
            >
              <X className="h-4 w-4" />
              {lang === "ar" ? "إغلاق المقال" : "Close Article"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══ MAIN BLOG SECTION ═══ */
export default function BlogSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div ref={ref}>
      <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post, i) => (
          <div key={post.slug} data-blog-post={post.slug}>
            <BlogCard
              post={post}
              index={i}
              onClick={() => setSelectedPost(post)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
