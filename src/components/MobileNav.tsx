import { useState } from "react";
import { Menu, X } from "lucide-react";

const APPLY_URL = "https://tally.so/r/441zRr";

const navItems = [
  { label: "The Challenge", href: "#challenge" },
  { label: "Food Landscape", href: "#opportunity" },
  { label: "The Solution", href: "#solution" },
  { label: "From Our Kitchen", href: "#brands" },
  { label: "Mentors & Partners", href: "#mentors" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-ink/95 backdrop-blur-xl" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 py-1 text-paper transition-all active:scale-95 md:hidden"
            >
              <div className="flex h-9 w-9 items-center justify-center border border-paper/25 bg-ink">
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
            <nav className="hidden flex-1 items-center gap-5 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-paper/80 transition-colors hover:text-paper"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-paper"
            >
              Apply <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide-up panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
          <div
            className="absolute bottom-[60px] left-0 right-0 max-h-[70vh] overflow-y-auto border-t border-paper/15 bg-ink animate-in slide-in-from-bottom-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center justify-between border-b border-paper/10 px-5 py-4 text-left text-[12px] font-bold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-paper/5 active:scale-[0.99]"
                >
                  <span>{item.label}</span>
                  <span aria-hidden className="text-paper/40">→</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
