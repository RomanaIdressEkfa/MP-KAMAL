import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import g1 from "@/assets/activity-1.jpg";
import g2 from "@/assets/activity-2.jpg";
import g3 from "@/assets/activity-3.jpg";
import g4 from "@/assets/activity-4.jpg";
import g5 from "@/assets/activity-5.jpg";
import g6 from "@/assets/activity-6.jpg";
import g7 from "@/assets/hero-1.jpg";
import g8 from "@/assets/hero-2.jpg";
import g9 from "@/assets/hero-3.jpg";

const photos = [
  { src: g7, span: "row-span-2" },
  { src: g1, span: "" },
  { src: g2, span: "" },
  { src: g8, span: "row-span-2" },
  { src: g3, span: "" },
  { src: g5, span: "" },
  { src: g4, span: "row-span-2" },
  { src: g6, span: "" },
  { src: g9, span: "" },
];

const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative section-y bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="eyebrow">
            ফটো গ্যালারি
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            স্মরণীয় <span className="text-gradient-animated">মুহূর্তগুলো</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">জনসেবার পথে চলার পথে কিছু মূল্যবান মুহূর্ত।</p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(p.src)}
              data-aos="zoom-in"
              data-aos-delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1 ${p.span}`}
            >
              <img
                src={p.src}
                alt={`গ্যালারি ছবি ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-glow scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="text-primary" size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-primary-deep/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition"
            onClick={() => setOpen(null)}
            aria-label="বন্ধ"
          >
            <X size={22} />
          </button>
          <img
            src={open}
            alt="বড় ছবি"
            className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-premium animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
