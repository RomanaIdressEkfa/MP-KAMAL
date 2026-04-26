import { Sparkles } from "lucide-react";

const visions = [
  { num: "০১", title: "শিক্ষিত আগামী", desc: "প্রতিটি শিশুর জন্য মানসম্মত শিক্ষা ও আধুনিক প্রতিষ্ঠান।" },
  { num: "০২", title: "সুস্থ জনপদ", desc: "প্রান্তিক মানুষের দোরগোড়ায় বিনামূল্যে স্বাস্থ্যসেবা।" },
  { num: "০৩", title: "কর্মসংস্থান", desc: "যুবকদের জন্য দক্ষতা প্রশিক্ষণ ও উদ্যোক্তা সহায়তা।" },
  { num: "০৪", title: "সবুজ পরিবেশ", desc: "পরিবেশবান্ধব উন্নয়ন ও বৃক্ষরোপণে অগ্রণী ভূমিকা।" },
];

const Vision = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-vision overflow-hidden text-primary-foreground">
      {/* Decorative orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto relative">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs font-bold tracking-wider uppercase border border-white/25">
            <Sparkles size={14} className="text-accent" /> আমাদের দৃষ্টিভঙ্গি
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            একটি <span className="text-gradient-gold">সমৃদ্ধ ও আলোকিত</span> আগামীর প্রত্যয়
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl">
            আমাদের স্বপ্ন একটি সুসংগঠিত, ন্যায়ভিত্তিক এবং উন্নত এলাকা — যেখানে প্রতিটি মানুষ মর্যাদার
            সাথে বাঁচবে, প্রতিটি স্বপ্ন পাবে ডানা।
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {visions.map((v, i) => (
            <div
              key={v.num}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 p-7 hover:bg-white/15 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="font-display text-5xl font-extrabold text-gradient-gold opacity-90">
                {v.num}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{v.desc}</p>
              <div className="mt-5 h-1 w-12 bg-gradient-gold rounded-full group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
