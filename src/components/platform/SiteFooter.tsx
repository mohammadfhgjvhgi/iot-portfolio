"use client";

import { Send, Facebook, MessageCircle, Mail, Heart, Cpu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props { onTabChange: (t: string) => void; }

const links = [
  { id: "home", label: "الرئيسية" },
  { id: "learning", label: "المسار التعليمي" },
  { id: "projects", label: "المشاريع" },
  { id: "sensors", label: "الحساسات" },
  { id: "environments", label: "بيئات البرمجة" },
  { id: "support", label: "الدعم الفني" },
  { id: "about", label: "من نحن" },
];

const socials = [
  { href: "https://t.me/Mashari3_AI_Arduino", label: "قناة تليجرام", icon: Send },
  { href: "https://t.me/Arsuino1", label: "مجموعة النقاش", icon: MessageCircle },
  { href: "https://www.facebook.com/share/1HnZactzYD/", label: "فيسبوك", icon: Facebook },
];

export default function SiteFooter({ onTabChange }: Props) {
  return (
    <footer className="border-t border-border/30 bg-muted/20 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center"><Cpu className="h-4 w-4 text-white" /></div>
              <div className="flex flex-col"><span className="text-xs font-bold leading-tight">مشاريع إلكترونية</span><span className="text-[9px] text-muted-foreground">وذكاء اصطناعي</span></div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">منصة تعليمية عربية لمشاريع المتحكمات الدقيقة والذكاء الاصطناعي. محتوى حقيقي، أكواد مختبرة، ومجتمع داعم.</p>
            <div className="flex gap-1.5">
              {socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"><s.icon className="h-3.5 w-3.5" /></a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-muted-foreground">الأقسام</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.id}><button onClick={() => { onTabChange(l.id); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-muted-foreground">تواصل معنا</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><s.icon className="h-3.5 w-3.5 shrink-0" />{s.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-muted-foreground">النشرة البريدية</h4>
            <p className="text-xs text-muted-foreground mb-3">اشترك ليصلك كل مشروع جديد</p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const em = f.get("email");
              if (em) {
                try {
                  const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: String(em) }) });
                  const data = await res.json();
                  if (res.ok) {
                    toast.success("تم الاشتراك بنجاح!");
                  } else {
                    toast.error(data.error || "حدث خطأ أثناء الاشتراك");
                  }
                } catch {
                  toast.error("حدث خطأ أثناء الاشتراك");
                }
              }
              (e.target as HTMLFormElement).reset();
            }} className="flex gap-1.5">
              <Input name="email" type="email" required placeholder="بريدك الإلكتروني" className="text-xs h-8 rounded-lg" dir="ltr" />
              <Button type="submit" size="sm" className="h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-semibold px-3 shrink-0">اشتراك</Button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-muted-foreground flex items-center gap-1">صُنع بـ <Heart className="h-2.5 w-2.5 text-red-500 fill-red-500" /> بواسطة <span className="font-semibold text-foreground">عمار مشارقة</span> و <span className="font-semibold text-foreground">محمد عقيلي</span> — فلسطين 🇵🇸</p>
          <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
