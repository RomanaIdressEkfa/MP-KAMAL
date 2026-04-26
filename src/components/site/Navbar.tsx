import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "হোম" },
  { href: "#about", label: "আমাদের সম্পর্কে" },
  { href: "#activities", label: "কার্যক্রম" },
  { href: "#service", label: "সেবা" },
  { href: "#complaint", label: "অভিযোগ জানান" },
  { href: "#contact", label: "যোগাযোগ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
            <span className="font-display text-primary-foreground text-xl font-bold">জ</span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">জননেতা রহমান</div>
            <div className="text-[11px] font-medium text-primary tracking-wide">আপনার সেবায় নিবেদিত</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-[15px]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#complaint"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft hover:shadow-premium hover:scale-105 transition-all duration-300"
        >
          অভিযোগ জানান
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-lg p-2 text-foreground hover:bg-secondary"
          aria-label="মেনু"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto mt-3 rounded-2xl glass shadow-elevated p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg font-semibold text-foreground/85 hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#complaint"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-full bg-gradient-primary px-5 py-3 font-bold text-primary-foreground shadow-soft"
              >
                অভিযোগ জানান
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
