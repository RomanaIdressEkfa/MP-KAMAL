import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-primary-deep text-primary-foreground overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container mx-auto relative py-12 lg:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="font-display text-xl font-bold">ক</span>
              </span>
              <div>
                <div className="font-display text-xl font-bold">
                  মোহাম্মদ কামাল হোসেন এমপি
                </div>
                <div className="text-xs text-primary-foreground/70">
                  আপনার সেবায় নিবেদিত
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed max-w-md">
              জনগণের পাশে দাঁড়িয়ে, ন্যায় ও উন্নয়নের পথে অবিচল। আপনার
              বিশ্বাসই আমাদের শক্তি।
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Youtube, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-10 w-10 rounded-xl bg-white/10 hover:bg-gradient-primary hover:scale-110 hover:shadow-glow flex items-center justify-center transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg">দ্রুত লিংক</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {[
                ["#about", "আমাদের সম্পর্কে"],
                ["#activities", "কার্যক্রম"],
                ["#service", "সেবা"],
                ["#complaint", "অভিযোগ জানান"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-accent transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg">যোগাযোগ</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent shrink-0" />
                <span>প্রধান কার্যালয়, সদর উপজেলা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-accent transition"
                >
                  +৮৮০ ১৭০০-০০০০০০
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:contact@jononeta.bd"
                  className="hover:text-accent transition"
                >
                  contact@jononeta.bd
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© ২০২৬ মোহাম্মদ কামাল হোসেন এমপি। সর্বস্বত্ব সংরক্ষিত।</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            জনগণের সেবায়, ২৪/৭
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
