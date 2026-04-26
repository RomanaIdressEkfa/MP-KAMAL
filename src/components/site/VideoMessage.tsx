import { Play, Quote } from "lucide-react";
import heroBg from "@/assets/hero-2.jpg";

const VideoMessage = () => {
  return (
    <section className="relative section-y bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Video block */}
          <div data-aos="fade-right" className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-premium group cursor-pointer">
              <img src={heroBg} alt="নেতার বার্তা" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-hero" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                  <div className="relative h-24 w-24 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-accent-foreground ml-1" size={36} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold tracking-widest uppercase opacity-80">বিশেষ বার্তা</div>
                <div className="font-display text-2xl font-bold mt-1">জনগণের উদ্দেশ্যে</div>
              </div>
            </div>
            <div className="absolute -z-10 -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          </div>

          {/* Message */}
          <div data-aos="fade-left">
            <Quote className="text-primary/30" size={64} />
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
              আমার <span className="text-gradient">বার্তা</span> আপনাদের প্রতি
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              "প্রিয় ভাই ও বোনেরা, আপনাদের ভালোবাসা ও বিশ্বাসই আমার পথচলার শক্তি। আমি প্রতিশ্রুতিবদ্ধ —
              এই এলাকার প্রতিটি মানুষের কল্যাণে কাজ করে যাব। কোনো সমস্যা ছোট নয়, কোনো অভিযোগ উপেক্ষিত নয়।"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-16 bg-gradient-primary rounded-full" />
              <div>
                <div className="font-display text-lg font-bold text-foreground">জননেতা রহমান</div>
                <div className="text-sm text-muted-foreground">আপনার নেতা</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoMessage;
