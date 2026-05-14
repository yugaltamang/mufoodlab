import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const APPLY_URL = "https://tally.so/r/441zRr";

const navItems = [
  { label: "Challenge", href: "#challenge" },
  { label: "Landscape", href: "#opportunity" },
  { label: "Solution", href: "#solution" },
  { label: "Kitchen", href: "#brands" },
  { label: "Mentors", href: "#mentors" },
  { label: "Apply", href: "#apply" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // Section not on current page — navigate home with hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <div className="lg:hidden">
      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div
          className="bg-ink/95 backdrop-blur-xl border-t border-paper/10"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 py-1 text-paper transition-all active:scale-95"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/20 bg-paper/5">
                {isOpen ? <X size={15} /> : <Menu size={15} />}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-md bg-green px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-paper"
            >
              Apply Now <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Slide-up panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
          <div
            className="absolute bottom-[60px] left-0 right-0 max-h-[70vh] overflow-y-auto border-t border-paper/15 bg-ink/95 backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-200"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <nav className="grid grid-cols-3 gap-px bg-paper/10">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="flex flex-col items-center justify-center gap-1.5 bg-ink px-2 py-5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-paper/70 transition-all hover:bg-paper/5 hover:text-paper active:scale-95"
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
