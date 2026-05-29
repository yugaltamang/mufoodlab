import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Home, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { handleApplyClick } from "@/lib/apply-widget";

const APPLY_URL = "https://tally.so/r/441zRr";

type NavItem = {
  label: string;
  path: "/" | "/program";
  hash?: string;
};

const homeItems: NavItem[] = [
  { label: "Challenge", path: "/", hash: "challenge" },
  { label: "Landscape", path: "/", hash: "opportunity" },
  { label: "Solution", path: "/", hash: "solution" },
  { label: "Kitchen", path: "/", hash: "brands" },
  { label: "Mentors", path: "/", hash: "mentors" },
  { label: "Apply", path: "/", hash: "apply" },
];

const programItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Timeline", path: "/program", hash: "timeline" },
  { label: "Pillars", path: "/program", hash: "pillars" },
  { label: "Expect", path: "/program", hash: "expect" },
  { label: "FAQ", path: "/program", hash: "faq" },
  { label: "Apply", path: "/", hash: "apply" },
];

function scrollToHash(hash: string) {
  window.requestAnimationFrame(() => {
    const target = document.getElementById(hash);

    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 18;
    window.scrollTo({ top, behavior: "smooth" });
  });
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const items = useMemo(
    () => (location.pathname === "/program" ? programItems : homeItems),
    [location.pathname],
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleItemClick = async (item: NavItem) => {
    setIsOpen(false);

    if (location.pathname !== item.path) {
      await navigate({ to: item.path });
      if (item.hash) window.setTimeout(() => scrollToHash(item.hash!), 80);
      return;
    }

    if (item.hash) scrollToHash(item.hash);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="lg:hidden" aria-label="Sticky mobile navigation">
      <div
        className={`fixed inset-0 z-[70] bg-ink/75 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-section-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 bottom-[66px] z-[80] border-y border-paper/15 bg-ink text-paper shadow-2xl transition-transform duration-200 ease-out ${
          isOpen
            ? "pointer-events-auto visible translate-y-0"
            : "pointer-events-none invisible translate-y-[120%]"
        }`}
      >
        <div className="grid grid-cols-3 gap-px bg-paper/10">
          {items.map((item) => (
            <button
              key={`${item.path}-${item.hash ?? "top"}`}
              type="button"
              onClick={() => void handleItemClick(item)}
              className="min-h-[76px] bg-ink px-2 py-4 text-center text-[10.5px] font-bold uppercase tracking-[0.14em] text-paper/75 transition hover:bg-paper/10 hover:text-paper active:bg-green active:text-ink"
            >
              {item.label === "Home" ? (
                <span className="inline-flex items-center gap-1.5">
                  <Home size={13} /> Home
                </span>
              ) : (
                item.label
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-paper/10 bg-ink/95 text-paper backdrop-blur-xl">
        <div
          className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex min-h-11 items-center gap-2 text-paper transition active:scale-95"
            aria-expanded={isOpen}
            aria-controls="mobile-section-menu"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center border border-paper/25 bg-paper/5">
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>

          <a
            href={APPLY_URL}
            onClick={handleApplyClick}
            className="inline-flex min-h-10 items-center gap-1.5 bg-green px-4 text-[11px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-paper active:scale-95"
          >
            Apply Now <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}