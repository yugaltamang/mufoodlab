import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import heroWok from "@/assets/hero-wok.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const APPLY_URL = "https://tally.so/r/441zRr";
const WORDMARK = "Food Lab\u00AE";

type Opportunity = {
  num: string;
  kicker: string;
  title: string;
  body: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    num: "01",
    kicker: "Food Ordering Population",
    title: "10× headroom in India",
    body: "Only 4% of Indians order food online today, vs 40–50% in USA & China. The runway to catch up is enormous.",
  },
  {
    num: "02",
    kicker: "Number of Restaurants",
    title: "34× the market size",
    body: "India has ~5 lakh restaurants. China has 1.7 crore. The category is structurally under-supplied at every price point.",
  },
  {
    num: "03",
    kicker: "Consumer Power",
    title: "Rising disposable income",
    body: "Indians are eating out and ordering in more every quarter as household spending climbs across tier-1 and tier-2 cities.",
  },
  {
    num: "04",
    kicker: "Aggregator Growth",
    title: "Swiggy + Zomato 2× in 5y",
    body: "The two largest aggregators are projected to double — and they need new sticky brands to put in front of customers.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ============== TOP NAV ============== */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-ink px-6 py-4 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-full bg-green text-[11px] font-black tracking-tighter">F</span>
            <span className="font-display text-[15px] font-extrabold tracking-[-0.02em]">{WORDMARK}</span>
          </a>
          <nav className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.14em] md:flex">
            <a className="hover:text-ink/60" href="#opportunity">Opportunity</a>
            <a className="hover:text-ink/60" href="#program">Program</a>
            <a className="hover:text-ink/60" href="#apply">Apply</a>
          </nav>
          <a
            href={APPLY_URL}
            className="inline-flex items-center gap-2 bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink"
          >
            Apply <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* ============== HERO INTRO ============== */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-[1500px] px-6 pb-10 pt-14 md:px-10 md:pb-16 md:pt-20">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
            <span className="size-1.5 rounded-full bg-green" />
            The Opportunity
          </div>
          <h1 className="mt-5 max-w-[18ch] font-display text-[44px] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[72px]">
            Indian food delivery is just scratching the surface.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-ink/70 md:text-[16px]">
            India's food economy is decades behind the West and China. The next decade belongs to whoever shows up first — with the kitchen, the brand, and the operating muscle to scale.
          </p>
        </div>
      </section>

      {/* ============== OPPORTUNITY POSTER ============== */}
      <section id="opportunity" className="bg-paper">
        <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-20">
          {/* Poster card */}
          <div className="rounded-[14px] border border-ink/10 bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:p-8">
            {/* Hero image */}
            <div
              className="relative aspect-[16/6] w-full overflow-hidden rounded-[8px] bg-cover bg-center"
              style={{ backgroundImage: `url(${heroWok})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur">
                <span className="size-1.5 rounded-full bg-green" />
                Market Snapshot · 2025
              </div>
            </div>

            {/* Numbered grid */}
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {OPPORTUNITIES.map((o, i) => (
                <OpportunityCell key={o.num} item={o} divider={i > 0} />
              ))}
            </div>
          </div>

          {/* Footer CTA row */}
          <div id="apply" className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-ink/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-[52ch] font-display text-[20px] font-bold leading-tight tracking-[-0.02em] md:text-[24px]">
              The window is open. We help you walk through it in 60 days, not 6 quarters.
            </p>
            <a
              href={APPLY_URL}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-paper hover:bg-green hover:text-ink"
            >
              Apply to Cohort 01 <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="border-t border-ink/15 bg-paper">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-3">
            <span className="grid size-6 place-items-center rounded-full bg-green text-[10px] font-black">F</span>
            <span className="font-display text-[13px] font-bold">{WORDMARK}</span>
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/50">
            Masters' Union Food Lab · foodlab.in
          </div>
        </div>
      </footer>
    </div>
  );
}

function OpportunityCell({ item, divider }: { item: Opportunity; divider: boolean }): ReactNode {
  return (
    <div className={`relative ${divider ? "lg:pl-8 lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:h-[calc(100%-1rem)] lg:before:w-px lg:before:bg-ink/10" : ""}`}>
      <div className="font-display text-[44px] font-extrabold leading-none tracking-[-0.04em] text-ink md:text-[56px]">
        {item.num}
      </div>
      <div className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/55">
        {item.kicker}
      </div>
      <h3 className="mt-2 font-display text-[20px] font-extrabold leading-[1.05] tracking-[-0.025em] md:text-[22px]">
        {item.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-ink/65">
        {item.body}
      </p>
    </div>
  );
}
