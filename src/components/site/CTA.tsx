import { MessageSquareWarning, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div
          data-aos="zoom-in"
          className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-primary p-8 sm:p-12 lg:p-16 shadow-premium"
        >
          {/* Glow */}
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative text-center max-w-3xl mx-auto text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-xs font-bold tracking-wider uppercase border border-white/25">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              এখনই পদক্ষেপ নিন
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              আপনার সমস্যার কথা জানাতে <br />
              <span className="text-gradient-gold">এখনই যোগাযোগ করুন</span>
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/90 leading-relaxed">
              প্রতিটি অভিযোগ আমাদের কাছে গুরুত্বপূর্ণ। আপনার একটি বার্তা — সমাধানের সূচনা।
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#complaint"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 text-base font-bold shadow-elevated hover:shadow-glow hover:scale-105 transition-all"
              >
                <MessageSquareWarning size={20} />
                অভিযোগ জানান
              </a>
              <a
                href="tel:+8801700000000"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border-2 border-white/40 text-white px-8 py-4 text-base font-bold hover:bg-white/25 hover:scale-105 transition-all"
              >
                <Phone size={20} />
                সরাসরি কল করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
