import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquareWarning } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "জনসেবায় প্রতিশ্রুতিবদ্ধ",
    title: "জনগণের পাশে,",
    titleAccent: "উন্নয়নের পথে",
    sub: "আপনার সেবায় নিবেদিত একজন দায়িত্বশীল প্রতিনিধি — প্রতিটি কণ্ঠস্বর, প্রতিটি স্বপ্ন আমাদের অগ্রাধিকার।",
  },
  {
    image: hero2,
    eyebrow: "গ্রাম থেকে শহর",
    title: "প্রতিটি মানুষের",
    titleAccent: "কথা শুনি",
    sub: "প্রান্তিক মানুষের সমস্যা সমাধানে নিরলস পরিশ্রম — আপনার দরজায় পৌঁছে যাওয়াই আমার অঙ্গীকার।",
  },
  {
    image: hero3,
    eyebrow: "উন্নয়নের অগ্রদূত",
    title: "আধুনিক বাংলাদেশ,",
    titleAccent: "সমৃদ্ধ আগামী",
    sub: "শিক্ষা, স্বাস্থ্য, অবকাঠামো — প্রতিটি ক্ষেত্রে দৃশ্যমান পরিবর্তন এনে গড়ব ভবিষ্যৎ।",
  },
];

// Lightweight CSS-driven particle field (no Three.js needed for this look)
const Particles = () => {
  const dots = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 6;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const dur = 6 + Math.random() * 10;
        const delay = Math.random() * 6;
        return (
          <span
            key={i}
            className="particle animate-float"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              opacity: 0.4 + Math.random() * 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

const Hero = () => {
  const [active, setActive] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={s.image}
            alt={s.title + " " + s.titleAccent}
            className="absolute inset-0 h-full w-full object-cover scale-105"
            style={{
              transform: i === active ? "scale(1.08)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      <Particles />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center pt-20">
        <div className="max-w-3xl">
          {slides.map((s, i) => (
            <div
              key={i}
              className="transition-all duration-700"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(20px)",
                position: i === active ? "relative" : "absolute",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white border border-white/20 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                {s.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] drop-shadow-2xl">
                {s.title}
                <br />
                <span className="text-gradient-gold">{s.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                {s.sub}
              </p>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#complaint"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <MessageSquareWarning size={20} />
              আপনার অভিযোগ জানান
            </a>
            <a
              href="#activities"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 px-8 py-4 text-base font-bold text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
            >
              কার্যক্রম দেখুন
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Dots */}
          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`স্লাইড ${i + 1}`}
                className="group flex items-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-12 bg-accent shadow-gold" : "w-6 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70 animate-float">
        <span className="text-xs font-semibold tracking-widest">SCROLL</span>
        <div className="mt-2 h-10 w-[2px] bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
