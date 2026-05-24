"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Trash2,
  Bot,
  User,
  ExternalLink,
  Zap,
} from "lucide-react";
import { useLang } from "@/lib/language";
import faqData from "@/data/faq.json";

/* ═══ TYPES ═══ */
interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  isAI?: boolean;
}

/* ═══ NVIDIA NIM CONFIG (direct fallback for static export) ═══ */
const NVIDIA_DIRECT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = process.env.NEXT_PUBLIC_NVIDIA_API_KEY || "";

const SYSTEM_PROMPTS = {
  ar: "أنت مساعد تقني خبير في أنظمة إنترنت الأشياء (IoT). أنت تعمل لصالح فريق 'مشاريع للأنظمة الذكية'. أجب فقط بناءً على خدمات الفريق ومشاريعهم. لا تختلق. إذا كان السؤال خارج نطاق الفريق، اقترح التواصل عبر تليجرام. أجب بإيجاز (أقل من 100 كلمة).",
  en: "You are a technical expert assistant for IoT systems. You work for 'Smart Systems Lab'. Answer only based on the team's services and projects. Don't fabricate. If outside scope, suggest contacting via Telegram. Answer briefly (under 100 words).",
} as const;

/* ═══ LANGUAGE DETECTION ═══ */
function isArabic(text: string): boolean {
  const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicPattern.test(text);
}

/* ═══ FAQ MATCHING ═══ */
function findBestAnswer(query: string): { answer: string; score: number } {
  const normalizedQuery = query.toLowerCase().trim();
  const words = normalizedQuery.split(/\s+/);
  let bestMatch = { answer: "", score: 0 };

  for (const faq of faqData) {
    let score = 0;
    for (const keyword of faq.keywords) {
      const kw = keyword.toLowerCase();
      if (normalizedQuery.includes(kw)) {
        score += kw.length * 3;
      }
      for (const word of words) {
        if (kw.includes(word) && word.length > 1) {
          score += word.length * 2;
        }
        if (word.includes(kw) && kw.length > 1) {
          score += kw.length * 2;
        }
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { answer: faq.answer_ar, score };
    }
  }

  const queryIsArabic = isArabic(query);
  if (bestMatch.score > 2) {
    for (const faq of faqData) {
      let score = 0;
      for (const keyword of faq.keywords) {
        const kw = keyword.toLowerCase();
        if (normalizedQuery.includes(kw)) score += kw.length * 3;
        for (const word of words) {
          if (kw.includes(word) && word.length > 1) score += word.length * 2;
          if (word.includes(kw) && kw.length > 1) score += kw.length * 2;
        }
      }
      if (score === bestMatch.score) {
        return {
          answer: queryIsArabic ? faq.answer_ar : faq.answer_en,
          score,
        };
      }
    }
  }

  return bestMatch;
}

function getDefaultResponse(lang: "ar" | "en"): string {
  return lang === "ar"
    ? "عذراً، لم أجد إجابة مناسبة لسؤالك. 💭\n\nيمكنك التواصل مباشرة مع الفريق عبر تليجرام للحصول على إجابة مفصلة!"
    : "Sorry, I couldn't find a suitable answer for your question. 💭\n\nYou can contact the team directly via Telegram for a detailed answer!";
}

function getGreeting(lang: "ar" | "en", isAIMode: boolean): string {
  if (isAIMode) {
    return lang === "ar"
      ? "أهلاً وسهلاً! 👋\n\nأنا **خبير IoT الذكي** ⚡ لفريق **مشاريع للأنظمة الذكية**\n\nيمكنني الإجابة على أسئلتك التقنية المتقدمة باستخدام الذكاء الاصطناعي.\n\n**جرب أن تسأل:** \"كيف يمكن ربط أجهزة الاستشعار بالسحابة؟\""
      : "Hello! 👋\n\nI'm the **AI IoT Expert** ⚡ for **Smart Systems Lab**\n\nI can answer your advanced technical questions using AI.\n\n**Try asking:** \"How can I connect sensors to the cloud?\"";
  }
  return lang === "ar"
    ? "أهلاً وسهلاً! 👋\n\nأنا المساعد الذكي لفريق **مشاريع للأنظمة الذكية** 🟢\n\nيمكنني مساعدتك في معرفة:\n• خدماتنا 🛠️\n• مشاريعنا 🏗️\n• التقنيات المستخدمة ⚙️\n• معلومات عن الفريق 👥\n\n**جرب أن تسأل:** \"ما هي خدماتكم؟\" أو \"ما هو مشروع الخزنة الذكية؟\""
    : "Hello and welcome! 👋\n\nI'm the smart assistant for **Smart Systems Lab** 🟢\n\nI can help you learn about:\n• Our services 🛠️\n• Our projects 🏗️\n• Technologies we use ⚙️\n• Our team info 👥\n\n**Try asking:** \"What are your services?\" or \"What is the smart safe project?\"";
}

function getAIErrorMessage(lang: "ar" | "en"): string {
  return lang === "ar"
    ? "عذراً، حدث خطأ في الاتصال. حاول مرة أخرى أو تواصل عبر تليجرام"
    : "Sorry, connection error. Try again or contact us via Telegram.";
}

/* ═══ SIMPLE MARKDOWN RENDERER ═══ */
function SimpleMarkdown({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        const rendered = parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="font-bold text-[#e8edf5]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={j}>{part}</span>;
        });

        if (line.trim() === "") {
          return <br key={i} />;
        }

        if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
          return (
            <div key={i} className="flex items-start gap-2 ml-1">
              <span className="text-[#00ff66] mt-0.5 shrink-0">•</span>
              <span>{rendered}</span>
            </div>
          );
        }

        return (
          <p key={i} className="leading-relaxed">
            {rendered}
          </p>
        );
      })}
    </>
  );
}

/* ═══ AI RESPONSE FETCHER (direct NVIDIA for static export) ═══ */
async function fetchAIResponse(
  chatMessages: { role: string; content: string }[],
  language: "ar" | "en"
): Promise<string | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const systemPrompt =
      SYSTEM_PROMPTS[language] || SYSTEM_PROMPTS.en;

    const response = await fetch(NVIDIA_DIRECT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-405b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          ...chatMessages,
        ],
        max_tokens: 150,
        temperature: 0.2,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (response.ok) {
      const data = await response.json();
      return data.choices?.[0]?.message?.content || null;
    }

    return null;
  } catch {
    clearTimeout(timeout);
    return null;
  }
}

/* ═══ CHATBOT COMPONENT ═══ */
export default function ChatBot() {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [isAIMode, setIsAIMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasGreeted = useRef(false);
  const lastModeRef = useRef(isAIMode);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isAIThinking]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  const openChat = useCallback(() => {
    setIsOpen(true);
    if (!hasGreeted.current) {
      hasGreeted.current = true;
      lastModeRef.current = isAIMode;
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "bot",
          content: getGreeting(lang, isAIMode),
          timestamp: new Date(),
        },
      ]);
    }
  }, [lang, isAIMode]);

  const toggleAIMode = useCallback(() => {
    setIsAIMode((prev) => {
      const next = !prev;
      if (hasGreeted.current && lastModeRef.current !== next) {
        lastModeRef.current = next;
        setMessages((msgs) => [
          ...msgs,
          {
            id: crypto.randomUUID(),
            role: "bot",
            content:
              next
                ? lang === "ar"
                  ? "⚡ تم تفعيل وضع الخبير الذكي. يمكنني الآن الإجابة بذكاء اصطناعي متقدم!"
                  : "⚡ AI Expert mode activated. I can now answer with advanced AI!"
                : lang === "ar"
                  ? "🟢 تم العودة إلى الوضع المحلي. أنا المساعد الذكي العادي الآن."
                  : "🟢 Back to local mode. I'm the regular smart assistant now.",
            timestamp: new Date(),
          },
        ]);
      }
      return next;
    });
  }, [lang]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const queryLang = isArabic(text) ? ("ar" as const) : ("en" as const);

    if (isAIMode) {
      // AI Mode
      setIsAIThinking(true);

      const chatHistory = messages
        .filter((m) => m.content)
        .slice(-6)
        .map((m) => ({ role: m.role, content: m.content }));
      chatHistory.push({ role: "user", content: text });

      const aiResponse = await fetchAIResponse(chatHistory, queryLang);
      setIsAIThinking(false);
      setIsTyping(false);

      if (aiResponse) {
        const botMsg: Message = {
          id: crypto.randomUUID(),
          role: "bot",
          content: aiResponse,
          timestamp: new Date(),
          isAI: true,
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        // Fallback to local FAQ when AI is unavailable
        const { answer, score } = findBestAnswer(text);
        const responseText =
          score > 2
            ? `${getAIErrorMessage(queryLang)} ⚠️\n\n${answer}`
            : `${getAIErrorMessage(queryLang)} ⚠️\n\n${getDefaultResponse(queryLang)}`;

        const botMsg: Message = {
          id: crypto.randomUUID(),
          role: "bot",
          content: responseText,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } else {
      // Local FAQ Mode
      setTimeout(() => {
        const { answer, score } = findBestAnswer(text);
        const responseText = score > 2 ? answer : getDefaultResponse(queryLang);

        const botMsg: Message = {
          id: crypto.randomUUID(),
          role: "bot",
          content: responseText,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 600 + Math.random() * 600);
    }
  }, [input, isAIMode, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    hasGreeted.current = false;
    lastModeRef.current = isAIMode;
    setTimeout(() => {
      hasGreeted.current = true;
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "bot",
          content: getGreeting(lang, isAIMode),
          timestamp: new Date(),
        },
      ]);
    }, 100);
  };

  const telegramLink =
    lang === "ar"
      ? "https://t.me/Mashari3_AI_Arduino"
      : "https://t.me/Mashari3_AI_Arduino";
  const telegramLabel =
    lang === "ar" ? "تحدث معنا على تليجرام 💬" : "Talk to us on Telegram 💬";

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => isOpen ? setIsOpen(false) : openChat()}
        data-chat-btn="true"
        className={`fixed z-50 flex items-center justify-center shadow-lg transition-shadow ${
          isOpen ? "hidden" : "flex"
        }`}
        style={{
          bottom: "1.5rem",
          left: lang === "ar" ? "1.5rem" : "auto",
          right: lang !== "ar" ? "1.5rem" : "auto",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="relative">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_#00ff6640] ${
              isAIMode
                ? "bg-gradient-to-br from-cyan-400 to-cyan-600"
                : "gradient-neon"
            }`}
          >
            <MessageCircle className="h-6 w-6 text-[#0a0f1a]" />
          </div>
          <div
            className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
              isAIMode
                ? "bg-gradient-to-br from-cyan-400 to-cyan-600"
                : "gradient-neon"
            }`}
          />
          {isAIMode && (
            <span className="absolute -top-1 -right-1 text-sm">⚡</span>
          )}
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-50"
            style={{
              bottom: "1.5rem",
              left: lang === "ar" ? "1.5rem" : "auto",
              right: lang !== "ar" ? "1.5rem" : "auto",
              width: "min(380px, calc(100vw - 2rem))",
              maxHeight: "min(560px, calc(100vh - 4rem))",
            }}
          >
            <div
              className="glass-card-dark rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-black/40"
              style={{ height: "100%" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e2d4d] bg-[#0c1220]/80">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isAIMode
                        ? "bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "gradient-neon"
                    }`}
                  >
                    <Bot className="h-4 w-4 text-[#0a0f1a]" />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-bold ${
                        isAIMode
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500"
                          : "gradient-neon-text"
                      }`}
                    >
                      {isAIMode ? (
                        <>
                          {lang === "ar" ? "خبير IoT الذكي" : "AI IoT Expert"}{" "}
                          <span className="inline-block text-xs">⚡</span>
                        </>
                      ) : (
                        <>{lang === "ar" ? "المساعد الذكي" : "Smart Assistant"}</>
                      )}
                    </p>
                    <p
                      className={`text-[10px] flex items-center gap-1 ${
                        isAIMode ? "text-cyan-400" : "text-[#00ff66]"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          isAIMode ? "bg-cyan-400" : "bg-[#00ff66]"
                        }`}
                      />
                      {isAIMode
                        ? lang === "ar"
                          ? "وضع الذكاء الاصطناعي"
                          : "AI Mode"
                        : lang === "ar"
                          ? "متصل الآن"
                          : "Online now"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {/* AI Toggle Button */}
                  <button
                    onClick={toggleAIMode}
                    className={`p-1.5 rounded-lg transition-all text-xs font-medium ${
                      isAIMode
                        ? "bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 border border-cyan-500/30"
                        : "hover:bg-white/5 text-[#7a8ba8] hover:text-cyan-400"
                    }`}
                    aria-label={
                      lang === "ar"
                        ? isAIMode
                          ? "تبديل إلى الوضع المحلي"
                          : "تبديل إلى وضع الخبير"
                        : isAIMode
                          ? "Switch to local mode"
                          : "Switch to expert mode"
                    }
                    title={
                      lang === "ar"
                        ? isAIMode
                          ? "الوضع المحلي"
                          : "اسأل الخبير ⚡"
                        : isAIMode
                          ? "Local Mode"
                          : "Ask the Expert ⚡"
                    }
                  >
                    <Zap className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={clearChat}
                    className="p-1.5 rounded-lg hover:bg-white/5 transition-colors text-[#7a8ba8] hover:text-[#00e5ff]"
                    aria-label={lang === "ar" ? "مسح المحادثة" : "Clear chat"}
                    title={lang === "ar" ? "مسح المحادثة" : "Clear chat"}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/5 transition-colors text-[#7a8ba8] hover:text-[#ff3d5a]"
                    aria-label={lang === "ar" ? "إغلاق" : "Close"}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div
                className="flex-1 overflow-y-auto p-4 space-y-3 code-scroll"
                style={{ minHeight: "280px", maxHeight: "400px" }}
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2 ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        msg.role === "user"
                          ? "bg-[#00e5ff20] text-[#00e5ff]"
                          : msg.isAI
                            ? "bg-gradient-to-br from-cyan-400 to-cyan-600 text-[#0a0f1a]"
                            : "gradient-neon text-[#0a0f1a]"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User className="h-3.5 w-3.5" />
                      ) : (
                        <Bot className="h-3.5 w-3.5" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#00e5ff15] border border-[#00e5ff20] text-[#e8edf5] rounded-tr-sm"
                          : msg.isAI
                            ? "bg-[#0a1e2e] border border-cyan-500/20 text-[#c5cdd8] rounded-tl-sm"
                            : "bg-[#151d33] border border-[#1e2d4d] text-[#c5cdd8] rounded-tl-sm"
                      }`}
                    >
                      {/* AI sparkle badge */}
                      {msg.isAI && (
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-cyan-400 text-[10px] font-semibold">
                            ⚡ AI
                          </span>
                        </div>
                      )}
                      <SimpleMarkdown text={msg.content} />
                      <div
                        className={`text-[9px] text-[#3d506e] mt-1.5 ${
                          msg.role === "user" ? "text-left" : "text-right"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* AI Thinking Indicator */}
                {isAIThinking && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shrink-0">
                      <Bot className="h-3.5 w-3.5 text-[#0a0f1a]" />
                    </div>
                    <div className="bg-[#0a1e2e] border border-cyan-500/20 rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 text-[11px] font-medium">
                          ⚡ {lang === "ar" ? "الخبير يفكر..." : "AI is thinking..."}
                        </span>
                        <div className="flex gap-1">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            style={{
                              animation: "pulse-neon 1.4s ease-in-out infinite",
                              animationDelay: "0s",
                            }}
                          />
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            style={{
                              animation: "pulse-neon 1.4s ease-in-out infinite",
                              animationDelay: "0.2s",
                            }}
                          />
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            style={{
                              animation: "pulse-neon 1.4s ease-in-out infinite",
                              animationDelay: "0.4s",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Local Typing Indicator */}
                {isTyping && !isAIThinking && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full gradient-neon flex items-center justify-center shrink-0">
                      <Bot className="h-3.5 w-3.5 text-[#0a0f1a]" />
                    </div>
                    <div className="bg-[#151d33] border border-[#1e2d4d] rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full bg-[#00ff66]"
                          style={{
                            animation: "pulse-neon 1.4s ease-in-out infinite",
                            animationDelay: "0s",
                          }}
                        />
                        <span
                          className="w-2 h-2 rounded-full bg-[#00ff66]"
                          style={{
                            animation: "pulse-neon 1.4s ease-in-out infinite",
                            animationDelay: "0s",
                          }}
                        />
                        <span
                          className="w-2 h-2 rounded-full bg-[#00ff66]"
                          style={{
                            animation: "pulse-neon 1.4s ease-in-out infinite",
                            animationDelay: "0.4s",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Telegram Fallback Button (shown after bot can't answer) */}
              {messages.length > 1 &&
                messages[messages.length - 1].role === "bot" &&
                !isAIMode &&
                findBestAnswer(
                  messages
                    .filter((m) => m.role === "user")
                    .pop()?.content || ""
                ).score <= 2 && (
                  <motion.a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-4 mb-2 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-[#0088cc] bg-[#0088cc10] border border-[#0088cc25] hover:bg-[#0088cc20] transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {telegramLabel}
                  </motion.a>
                )}

              {/* Input Area */}
              <div className="px-3 py-3 border-t border-[#1e2d4d] bg-[#0c1220]/80">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      lang === "ar"
                        ? isAIMode
                          ? "اسأل الخبير الذكي..."
                          : "اكتب سؤالك هنا..."
                        : isAIMode
                          ? "Ask the AI expert..."
                          : "Type your question here..."
                    }
                    dir={lang === "ar" ? "rtl" : "ltr"}
                    disabled={isAIThinking}
                    className={`flex-1 rounded-xl px-3.5 py-2.5 text-sm text-[#e8edf5] placeholder:text-[#3d506e] outline-none transition-all ${
                      isAIThinking
                        ? "bg-[#0a0f1a] border border-cyan-500/30 opacity-60 cursor-wait"
                        : "bg-[#0a0f1a] border border-[#1e2d4d] focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff6630]"
                    }`}
                  />
                  <motion.button
                    onClick={sendMessage}
                    disabled={!input.trim() || isTyping || isAIThinking}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity text-[#0a0f1a] ${
                      isAIMode
                        ? "bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_12px_#06b6d430]"
                        : "gradient-neon shadow-[0_0_12px_#00ff6630]"
                    }`}
                    aria-label={lang === "ar" ? "إرسال" : "Send"}
                  >
                    {isAIThinking ? (
                      <Zap className="h-4 w-4 animate-pulse" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
