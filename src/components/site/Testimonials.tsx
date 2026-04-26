import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import p1 from "@/assets/person-1.jpg";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";

const reviews = [
  {
    img: p1,
    name: "মোঃ করিম উদ্দিন",
    role: "ব্যবসায়ী, সদর উপজেলা",
    text: "আমাদের এলাকায় বিদ্যুৎ সমস্যা ছিল বছরের পর বছর। নেতাকে জানানোর পর মাত্র দু'সপ্তাহে সমাধান হয়ে গেছে। সত্যিই তিনি জনগণের নেতা।",
  },
  {
    img: p2,
    name: "শাহানা বেগম",
    role: "শিক্ষিকা, প্রাথমিক বিদ্যালয়",
    text: "মেয়েদের শিক্ষার জন্য তিনি যা করছেন, তা প্রশংসনীয়। আমাদের বিদ্যালয়ে নতুন ভবন ও বিনামূল্যে বই — সব তাঁর উদ্যোগে।",
  },
  {
    img: p3,
    name: "আলহাজ্ব রফিক মিয়া",
    role: "অবসরপ্রাপ্ত শিক্ষক",
    text: "আমার দীর্ঘ জীবনে এমন দায়িত্বশীল জনপ্রতিনিধি কম দেখেছি। তিনি ফোন ধরেন, কথা শোনেন, এবং কাজ করেন।",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="relative section-y section-soft overflow-hidden">
      <div className="absolute inset-0 section-radial pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="eyebrow">
            জনগণের মতামত
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            যা <span className="text-gradient-animated">বলছেন তাঁরা</span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative rounded-3xl bg-card border border-border/60 p-7 sm:p-10 lg:p-14 shadow-premium">
            <Quote className="absolute top-6 right-6 text-primary/15" size={80} />

            <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative mx-auto sm:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50" />
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="relative h-32 w-32 rounded-full object-cover ring-4 ring-card shadow-elevated"
                />
              </div>
              <div>
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-lg sm:text-xl text-foreground leading-relaxed font-medium">
                  "{r.text}"
                </p>
                <div className="mt-6">
                  <div className="font-display text-lg font-bold text-foreground">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {reviews.map((_, k) => (
                  <button
                    key={k}
                    aria-label={`মতামত ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-10 bg-gradient-primary" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="h-11 w-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center"
                  aria-label="পূর্ববর্তী"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition flex items-center justify-center"
                  aria-label="পরবর্তী"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
