import { useEffect, useRef, useState } from "react";
import { Users, Building2, GraduationCap, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: 1000, suffix: "+", label: "পরিবারকে সহায়তা প্রদান" },
  { icon: Building2, value: 500, suffix: "+", label: "উন্নয়ন প্রকল্প বাস্তবায়ন" },
  { icon: GraduationCap, value: 75, suffix: "+", label: "শিক্ষা প্রতিষ্ঠানে সহায়তা" },
  { icon: Heart, value: 25, suffix: " বছর", label: "জনসেবার অভিজ্ঞতা" },
];

const toBangla = (n: number) =>
  n.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1800;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl font-extrabold text-gradient">
      {toBangla(n)}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  return (
    <section className="relative section-y bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent-foreground px-4 py-2 text-xs font-bold tracking-wider uppercase">
            অর্জনসমূহ
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            সংখ্যায় <span className="text-gradient-animated">আমাদের অর্জন</span>
          </h2>
        </div>

        <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="group relative premium-card p-8 text-center"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform">
                <s.icon className="text-primary-foreground" size={26} />
              </div>
              <div className="mt-6">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm font-semibold text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
