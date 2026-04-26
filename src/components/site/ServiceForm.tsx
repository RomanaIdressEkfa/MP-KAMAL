import { useState } from "react";
import { Send, User, Phone, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?88)?01[3-9]\d{8}$/, "সঠিক বাংলাদেশি মোবাইল নম্বর দিন"),
  area: z.string().trim().min(2, "এলাকার নাম দিন").max(120),
  problem: z.string().trim().min(10, "সমস্যাটি বিস্তারিত লিখুন (১০+ অক্ষর)").max(1500),
});

const ServiceForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      area: String(fd.get("area") || ""),
      problem: String(fd.get("problem") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "ফর্মে ত্রুটি রয়েছে",
        description: parsed.error.issues[0]?.message ?? "অনুগ্রহ করে সব তথ্য সঠিকভাবে দিন",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "অভিযোগ গৃহীত হয়েছে ✓",
        description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ।",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="service" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* glow background */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />

      <div id="complaint" className="container mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col" data-aos="fade-right">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold tracking-wider uppercase">
              <ShieldCheck size={14} /> নাগরিক সেবা
            </span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-tight text-foreground">
              আপনার সমস্যা <span className="text-gradient">সরাসরি</span> আমাকে জানান
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              আপনার এলাকার যে কোনো সমস্যা — রাস্তা, পানি, বিদ্যুৎ, শিক্ষা, স্বাস্থ্য — যা-ই হোক, আমাকে জানান।
              প্রতিটি অভিযোগ ব্যক্তিগতভাবে দেখা হয়।
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, t: "১০০% গোপনীয়তা সুরক্ষিত", s: "আপনার তথ্য নিরাপদ থাকবে" },
                { icon: Send, t: "২৪ ঘণ্টায় সাড়া", s: "আমাদের টিম দ্রুত যোগাযোগ করবে" },
                { icon: User, t: "সরাসরি অফিসে যোগাযোগ", s: "প্রয়োজনে ব্যক্তিগত সাক্ষাৎ" },
              ].map((b) => (
                <div key={b.t} className="flex items-start gap-4 rounded-2xl bg-secondary/50 p-4 border border-border/60">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <b.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{b.t}</div>
                    <div className="text-sm text-muted-foreground">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl bg-card border border-border/70 p-8 sm:p-10 shadow-premium"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 -z-10 blur-md opacity-60" />

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">অভিযোগ ফর্ম</h3>
              <p className="mt-2 text-sm text-muted-foreground">সব তথ্য সঠিকভাবে পূরণ করুন</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field icon={User} name="name" label="আপনার নাম" placeholder="যেমন: করিম উদ্দিন" />
                <Field icon={Phone} name="phone" label="মোবাইল নম্বর" placeholder="01XXXXXXXXX" />
                <div className="sm:col-span-2">
                  <Field icon={MapPin} name="area" label="আপনার এলাকা" placeholder="ইউনিয়ন / ওয়ার্ড / গ্রাম" />
                </div>
                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground mb-2">
                    <MessageSquare size={16} className="text-primary" />
                    সমস্যার বিবরণ
                  </label>
                  <textarea
                    name="problem"
                    rows={5}
                    maxLength={1500}
                    placeholder="আপনার সমস্যাটি বিস্তারিতভাবে লিখুন..."
                    className="w-full rounded-2xl border-2 border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-primary px-8 py-5 text-lg font-bold text-primary-foreground shadow-premium hover:shadow-glow hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "পাঠানো হচ্ছে..." : (<><Send size={20} /> অভিযোগ পাঠান</>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  icon: Icon,
  name,
  label,
  placeholder,
}: {
  icon: typeof User;
  name: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-bold text-foreground mb-2">
      <Icon size={16} className="text-primary" />
      {label}
    </label>
    <input
      name={name}
      placeholder={placeholder}
      maxLength={200}
      className="w-full rounded-2xl border-2 border-border bg-background px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition-all"
    />
  </div>
);

export default ServiceForm;
