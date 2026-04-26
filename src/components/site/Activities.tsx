import a1 from "@/assets/activity-1.jpg";
import a2 from "@/assets/activity-2.jpg";
import a3 from "@/assets/activity-3.jpg";
import a4 from "@/assets/activity-4.jpg";
import a5 from "@/assets/activity-5.jpg";
import a6 from "@/assets/activity-6.jpg";
import { Calendar } from "lucide-react";

const items = [
  { img: a1, title: "বন্যার্তদের পাশে", date: "জুলাই ২০২৪", desc: "৫০০+ পরিবারের মাঝে ত্রাণ সামগ্রী বিতরণ ও জরুরি চিকিৎসা সহায়তা।" },
  { img: a2, title: "নতুন বিদ্যালয় উদ্বোধন", date: "মার্চ ২০২৪", desc: "৩টি নতুন প্রাথমিক বিদ্যালয় উদ্বোধন এবং ছাত্রছাত্রীদের জন্য বিনামূল্যে বই বিতরণ।" },
  { img: a3, title: "স্বাস্থ্যসেবা ক্যাম্প", date: "ফেব্রুয়ারি ২০২৪", desc: "১২টি ইউনিয়নে বিনামূল্যে স্বাস্থ্য পরীক্ষা ও ঔষধ সরবরাহ।" },
  { img: a4, title: "জনসমাবেশ ও মতবিনিময়", date: "জানুয়ারি ২০২৪", desc: "এলাকার উন্নয়ন পরিকল্পনায় জনগণের প্রত্যক্ষ মতামত গ্রহণ।" },
  { img: a5, title: "বৃক্ষরোপণ কর্মসূচি", date: "জুন ২০২৪", desc: "শিশুদের সাথে নিয়ে ১০,০০০+ গাছ রোপণ — সবুজ আগামীর প্রতিশ্রুতি।" },
  { img: a6, title: "যুব উদ্যোক্তা প্রশিক্ষণ", date: "এপ্রিল ২০২৪", desc: "তরুণদের জন্য বিনামূল্যে দক্ষতা উন্নয়ন প্রশিক্ষণ ও ঋণ সহায়তা।" },
];

const Activities = () => {
  return (
    <section id="activities" className="relative py-24 lg:py-32 section-soft overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold tracking-wider uppercase">
            সাম্প্রতিক কার্যক্রম
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
            জনগণের জন্য <span className="text-gradient">নিরন্তর কাজ</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">প্রতিদিন, প্রতিনিয়ত — মানুষের পাশে থাকার অঙ্গীকার।</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((it, i) => (
            <article
              key={it.title}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 120}
              className="group premium-card overflow-hidden"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-bold text-primary shadow-soft">
                  <Calendar size={12} /> {it.date}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-xl font-bold drop-shadow-md">{it.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  বিস্তারিত পড়ুন →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
