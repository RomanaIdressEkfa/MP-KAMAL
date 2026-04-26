import aboutLeader from "@/assets/about-leader.jpg";
import activity4 from "@/assets/activity-4.jpg";
import { Award, CheckCircle2, Heart, Users } from "lucide-react";

const points = [
  "২৫+ বছরের জনসেবার অভিজ্ঞতা",
  "শিক্ষা ও স্বাস্থ্য খাতে বিশেষ অবদান",
  "নারী ও যুব ক্ষমতায়নে অগ্রদূত",
  "স্বচ্ছ ও জবাবদিহিমূলক নেতৃত্ব",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative section-soft section-y overflow-hidden"
    >
      <div className="absolute inset-0 section-radial pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Images */}
          <div className="relative" data-aos="fade-right">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl bg-gradient-primary opacity-20 blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-3xl bg-accent opacity-30 blur-2xl animate-float-slow" />

            <div className="relative grid grid-cols-5 gap-3 sm:gap-4">
              <div className="col-span-3 group rounded-3xl overflow-hidden shadow-premium aspect-[4/5] relative">
                <img
                  src={aboutLeader}
                  alt="মোহাম্মদ কামাল হোসেন এমপি"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
                <div className="rounded-3xl overflow-hidden shadow-elevated aspect-square group">
                  <img
                    src={activity4}
                    alt="জনসমাবেশে নেতা"
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                  />
                </div>
                <div className="rounded-3xl bg-gradient-primary p-5 shadow-glow text-primary-foreground flex-1 flex flex-col justify-center hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                  <div className="relative font-display text-3xl sm:text-4xl font-extrabold">
                    ২৫+
                  </div>
                  <div className="relative text-sm font-medium opacity-90 mt-1">
                    বছরের জনসেবা
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <span className="eyebrow">
              <Award size={14} />
              আমাদের সম্পর্কে
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              পরিচিতি{" "}
              <span className="text-gradient-animated">
                মোহাম্মদ কামাল হোসেন এমপি
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              একজন নিবেদিতপ্রাণ জনপ্রতিনিধি, যিনি দুই যুগেরও বেশি সময় ধরে
              সাধারণ মানুষের পাশে দাঁড়িয়েছেন। তাঁর নেতৃত্বে এলাকার শিক্ষা,
              স্বাস্থ্য, কৃষি ও অবকাঠামো খাতে এসেছে দৃশ্যমান উন্নয়ন।
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              "মানুষের সেবা করাই আমার একমাত্র ব্রত। প্রতিটি অভিযোগ আমার কাছে
              গুরুত্বপূর্ণ — কারণ আপনার বিশ্বাসই আমার সবচেয়ে বড় সম্পদ।"
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {points.map((p, i) => (
                <li
                  key={p}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-start gap-3 rounded-2xl bg-card border border-border/60 p-4 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  <CheckCircle2
                    className="text-primary shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-sm font-semibold text-foreground">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Users className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">
                    ৫০ হাজার+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    সরাসরি উপকারভোগী
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Heart className="text-accent-foreground" size={22} />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">
                    ১২+ পুরস্কার
                  </div>
                  <div className="text-xs text-muted-foreground">
                    সমাজসেবায় স্বীকৃতি
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
