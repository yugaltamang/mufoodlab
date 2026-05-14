import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

import essential01 from "@/assets/essential-01-kitchen.jpg";
import essential02 from "@/assets/essential-02-staff.jpg";
import essential03 from "@/assets/essential-03-consultant.jpg";
import essential05 from "@/assets/essential-05-supply.jpg";
import essential07 from "@/assets/essential-07-mentor.jpg";
import essential08 from "@/assets/essential-08-tasting.jpg";
import heroFounder from "@/assets/hero-founder.jpg";
import heroChef from "@/assets/hero-chef.jpg";
import heroWok from "@/assets/hero-wok.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const APPLY_URL = "https://tally.so/r/441zRr";
const WORDMARK = "Food Lab\u00AE";

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
            <a className="hover:text-ink/60" href="#program">Program</a>
            <a className="hover:text-ink/60" href="#opportunity">Opportunity</a>
            <a className="hover:text-ink/60" href="#solution">Pillars</a>
            <a className="hover:text-ink/60" href="#brands">Brands</a>
            <a className="hover:text-ink/60" href="#mentors">Mentors</a>
          </nav>
          <a
            href={APPLY_URL}
            className="inline-flex items-center gap-2 bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink"
          >
            Apply <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section id="program" className="relative overflow-hidden bg-[oklch(0.97_0.04_142)] text-ink">
        {/* Soft directional rays */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0 80px, rgba(0,0,0,0.05) 80px 81px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          {/* Top meta row */}
          <div className="mb-8 flex items-start justify-between">
            <div className="font-display text-[13px] font-semibold leading-tight tracking-tight text-ink/90">
              Ready To Launch<br />Cohort 01
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 min-w-9 place-items-center rounded-full border border-ink/40 px-3 text-[11px] font-bold uppercase tracking-[0.14em]">60d</span>
              <span className="grid h-9 min-w-9 place-items-center rounded-full border border-ink/40 px-3 text-[11px] font-bold uppercase tracking-[0.14em]">2025</span>
            </div>
          </div>

          {/* Poster bento grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {/* Card 1 — Dark headline poster */}
            <PosterCard tone="dark" className="col-span-2 md:col-span-1 md:row-span-2">
              <PosterBrandRow tone="dark" />
              <ArrowMark tone="dark" />
              <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[0.92] tracking-[-0.035em] md:text-[52px]">
                Launch<br />Your Food<br />Brand
              </h1>
              <p className="mt-5 text-[12.5px] leading-relaxed text-paper/70">
                Let's scale your kitchen — operationally. We handle compliance, supply chain,
                staffing & aggregator onboarding so you can focus on the food.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href={APPLY_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink hover:opacity-90"
                >
                  Apply Now
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-paper/15 pt-4 text-[10.5px] font-medium text-paper/60">
                <span className="uppercase tracking-[0.14em] text-paper/80">Cohort 01</span>
                <span>·</span>
                <span>foodlab.in</span>
              </div>
            </PosterCard>

            {/* Card 2 — Photo with green arrow corner */}
            <PosterCard tone="photo" className="row-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroChef})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute right-0 top-0 grid h-24 w-24 place-items-center bg-green text-ink">
                <ArrowGlyph className="h-10 w-10" />
              </div>
              <div className="relative mt-auto">
                <h2 className="font-display text-[28px] font-extrabold leading-[0.95] tracking-[-0.03em] text-paper md:text-[34px]">
                  Kitchens.<br />Brands.<br />Results.
                </h2>
              </div>
            </PosterCard>

            {/* Card 3 — Light green poster with quote */}
            <PosterCard tone="light">
              <PosterBrandRow tone="light" />
              <QuoteMark className="text-ink/80" />
              <h2 className="mt-3 font-display text-[26px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[30px]">
                Built. Branded.<br />Delivered.
              </h2>
              <p className="mt-3 text-[12px] leading-relaxed text-ink/75">
                We don't just consult — we run the playbook with you, end-to-end, in 60 days.
              </p>
            </PosterCard>

            {/* Card 4 — Dark stat poster */}
            <PosterCard tone="dark">
              <div className="flex items-start justify-between">
                <PosterBrandRow tone="dark" />
                <ArrowGlyph className="h-7 w-7 text-green" />
              </div>
              <div className="mt-auto">
                <div className="font-display text-[64px] font-extrabold leading-[0.85] tracking-[-0.04em] text-green md:text-[76px]">
                  60<span className="text-paper">d</span>
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/70">
                  Idea → live brand
                </div>
              </div>
            </PosterCard>

            {/* Card 5 — Why choose us checklist */}
            <PosterCard tone="light" className="col-span-2 md:col-span-2">
              <div className="flex items-start justify-between">
                <PosterBrandRow tone="light" />
                <QuoteMark className="text-ink/70" />
              </div>
              <h2 className="mt-4 font-display text-[28px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[34px]">
                Why founders choose Food Lab
              </h2>
              <ul className="mt-5 grid gap-2.5 text-[13px] font-medium text-ink/85 md:grid-cols-2">
                {[
                  "We don't theorise — we operate kitchens",
                  "We don't sell decks — we ship brands",
                  "We don't chase trends — we build cash-flow",
                  "We don't hand off — we stay till launch",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-block h-2 w-2 shrink-0 rounded-full bg-ink" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-ink/15 pt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/70">
                <span>Register Now</span>
                <span>foodlab.in</span>
              </div>
            </PosterCard>
          </div>
        </div>
      </section>

      {/* ============== INTRO STRIP ============== */}
      <section className="mx-auto max-w-[1500px] grid grid-cols-1 gap-8 border-b border-ink px-6 py-14 md:grid-cols-12 md:px-10 md:py-20">
        <div className="md:col-span-3 meta uppercase tracking-[0.14em] text-ink/60">
          <div className="text-ink">Programme brief</div>
          <div className="mt-2">No. 0001 · Cohort 01</div>
        </div>
        <h2 className="md:col-span-9 font-display text-[44px] font-extrabold leading-[0.92] tracking-[-0.035em] md:text-[80px]">
          For the next generation of food brands in India.
          <span className="text-ink/40"> An end-to-end incubator — kitchen, staff, compliance, supply chain, aggregator onboarding — handled. You bring the idea and the obsession.</span>
        </h2>
      </section>

      {/* ============== STATS POSTER ROW ============== */}
      <section id="opportunity" className="border-b border-ink">
        <div className="mx-auto max-w-[1500px] px-3 py-3 md:px-4 md:py-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <PosterStat big="04%" eyebrow="01 — India" footnote="of population orders food online" />
            <PosterStat big="40–50%" eyebrow="02 — USA & China" footnote="10× headroom waiting in India" green />
            <PosterStat big="34×" eyebrow="03 — China vs India" footnote="1.7 Cr restaurants vs 5 L" />
            <PosterStat big="2×" eyebrow="04 — Next 5 yrs" footnote="Swiggy + Zomato projected growth" green />
          </div>
        </div>
      </section>

      {/* ============== INVOICE / CHALLENGE ============== */}
      <section className="border-b border-ink">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 md:grid-cols-2">
          <div className="border-b border-ink p-8 md:border-b-0 md:border-r md:p-14">
            <div className="meta uppercase tracking-[0.18em] text-ink/60">The challenge — 0X</div>
            <h2 className="mt-6 font-display text-[44px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[80px]">
              Before you sell a single plate, the bill is already
              <span className="ml-3 inline-block bg-green px-2 leading-none">due.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/75">
              Most aspiring food entrepreneurs never get to the cooking part. They get stuck paying for everything that comes <em>before</em> the cooking. Most great food ideas die right here.
            </p>
          </div>
          <div className="bg-ink p-8 font-mono text-paper md:p-14">
            <div className="flex items-center justify-between border-b border-paper/30 pb-3 text-[11px] uppercase tracking-[0.14em]">
              <span>Food Lab — Pre-Launch Bill</span>
              <span>Invoice #0001</span>
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-paper/60">Founder Edition · Day 0 of 60</div>
            <ul className="mt-8 space-y-3 text-[14px]">
              <LineItem n="01" item="Kitchen rent + setup" amount="₹6,00,000" />
              <LineItem n="02" item="R&D + chef consultant" amount="₹3,00,000" />
              <LineItem n="03" item="Working capital" amount="₹6,00,000" />
              <li className="flex justify-between border-t border-paper/30 pt-3">
                <span>Subtotal</span>
                <span className="font-semibold">₹15,00,000</span>
              </li>
              <li className="flex justify-between text-paper/60"><span>+ Your time</span><span>~60 days</span></li>
              <li className="flex justify-between text-paper/60"><span>+ Luck required</span><span>★★★★★</span></li>
            </ul>
            <div className="mt-10 flex items-end justify-between border-t border-paper/30 pt-5">
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-paper/60">Total due</div>
                <div className="font-display text-5xl font-extrabold">₹15L+</div>
              </div>
              <div className="text-right text-[11px] uppercase tracking-[0.14em]">
                Customers served: 0
                <div className="mt-1 inline-block bg-green px-2 py-0.5 text-ink">— UNPAID —</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PILLARS POSTER WALL ============== */}
      <section id="solution" className="border-b border-ink">
        <div className="mx-auto max-w-[1500px] px-3 py-3 md:px-4 md:py-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            <PosterText
              kicker="The solution"
              title={<>Four pillars,<br/>fully wired in.</>}
              footnote="60 days — 1 launch"
              green
            />
            <PillarPoster n="01" title="Kitchen & Team" img={essential01} points={["Production kitchen", "Chefs on payroll"]} />
            <PillarPoster n="02" title="Recipe & Compliance" img={essential03} points={["Consultants & R&D", "FSSAI handled"]} />
            <PillarPoster n="03" title="Supply & Distribution" img={essential05} points={["Pre-vetted vendors", "Zomato + Swiggy onboarding"]} />
            <PillarPoster n="04" title="Mentorship & Feedback" img={essential07} points={["1:1 with operators", "Weekly tastings"]} />
          </div>
        </div>
      </section>

      {/* ============== BRANDS ============== */}
      <section id="brands" className="border-b border-ink">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 py-14 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-5">
            <div className="meta uppercase tracking-[0.18em] text-ink/60">From our kitchen</div>
            <h2 className="mt-6 font-display text-[48px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[88px]">
              Brands already
              <span className="ml-3 inline-block bg-green px-2 leading-none">cooking.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end text-[15px] leading-relaxed text-ink/75">
            Built by MU students. Serving real customers. Growing every week.
          </p>
        </div>
        <div className="mx-auto max-w-[1500px] px-3 pb-3 md:px-4 md:pb-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            <BrandCard
              tag="Delhi · Gurgaon"
              name="Lexi's Gourmet Sandwiches"
              tagline="Gurgaon's highest-rated gourmet sandwich brand"
              body="What started as a passion for bold, indulgent sandwiches became Gurgaon's top-rated gourmet sandwich brand. Cult favorites: truffle mushroom ciabattas and crispy katsu sandos. Now expanding to Delhi."
              img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/y11vvcni_Lexi%27s%20Gourmet%20Sandwiches.png"
              follow="https://www.instagram.com/lexis_sandos/?hl=en"
            />
            <BrandCard
              tag="Lajpat Nagar · Delhi"
              name="Woody's Pizzeria"
              tagline="Neapolitan-inspired, made for the Indian palate"
              body="Kanav started baking pizzas in 2011. After years perfecting Neapolitan recipes, he launched Woody's — now live in Lajpat Nagar. Customers keep calling it the best pizza they've ever had."
              img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/yr5s9vfq_Woody%27s%20Pizzeria.png"
              follow="https://www.instagram.com/woodyspizzeria/?hl=en"
            />
          </div>
        </div>
      </section>

      {/* ============== MENTORS ============== */}
      <section id="mentors" className="border-b border-ink">
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 gap-8 px-6 py-14 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-7">
            <div className="meta uppercase tracking-[0.18em] text-ink/60">Mentors & partners</div>
            <h2 className="mt-6 font-display text-[44px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[76px]">
              Learn from operators who built food businesses
              <span className="ml-3 inline-block bg-green px-2 leading-none">from zero.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end">
            <div className="meta uppercase tracking-[0.14em] text-ink/60">Aggregator partners</div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="border border-ink px-3 py-1 text-[12px] font-bold uppercase tracking-[0.14em]">Zomato</span>
              <span className="border border-ink px-3 py-1 text-[12px] font-bold uppercase tracking-[0.14em]">Swiggy</span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1500px] px-3 pb-3 md:px-4 md:pb-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <PosterMentor key={i} n={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        </div>
      </section>

      {/* ============== APPLY POSTER ============== */}
      <section id="apply" className="border-b border-ink">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink md:aspect-auto">
            <img src={heroWok} alt="Hands at work in a working kitchen" className="absolute inset-0 h-full w-full object-cover grayscale" />
            <div className="absolute inset-0 bg-ink/30" />
            <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-paper px-2 py-1 meta uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-green" /> Admissions open
            </div>
            <div className="absolute bottom-6 right-6 meta uppercase tracking-[0.14em] text-paper">{WORDMARK}</div>
          </div>
          <div className="bg-green p-8 md:p-14">
            <div className="meta uppercase tracking-[0.18em]">Apply by 31 Oct, 21:00</div>
            <h2 className="mt-6 font-display text-[56px] font-extrabold leading-[0.86] tracking-[-0.04em] md:text-[120px]">
              Build your<br/>food brand.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed">
              Cohort 01 · 2025–2026 · New Delhi. Real kitchens. Real customers. Real founders.
            </p>
            <a href={APPLY_URL} className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-paper hover:text-ink">
              Start application <span aria-hidden>→</span>
            </a>
            <div className="mt-10 flex items-end justify-between border-t border-ink pt-4 text-[11px] uppercase tracking-[0.14em]">
              <span>{WORDMARK}</span>
              <span>tally.so/r/441zRr</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-ink pb-12 md:grid-cols-4">
          <div className="meta uppercase tracking-[0.14em]">
            Cohort 01<br/>2025 — 2026
            <div className="mt-2 text-ink/60">Apply by 31 October</div>
          </div>
          <address className="not-italic text-[14px] leading-relaxed">
            <div className="font-semibold">Masters' Union Food Lab</div>
            Sector 67, Gurugram<br/>Haryana 122102, India<br/>
            <a href="mailto:foodlab@mastersunion.org" className="underline-link">foodlab@mastersunion.org</a>
          </address>
          <div className="text-[14px] leading-relaxed">
            <div className="font-semibold">Visit the kitchen</div>
            By appointment only<br/>Mon — Sat · 11:00 — 19:00<br/>
            <a href={APPLY_URL} className="underline-link">Book a tour →</a>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="text-[14px]">
            <label className="font-semibold">Subscribe to the kitchen brief</label>
            <div className="mt-3 flex items-center border-b border-ink pb-2">
              <input type="email" placeholder="Email" className="flex-1 bg-transparent text-[14px] placeholder:text-ink/50 focus:outline-none" />
              <button className="text-[12px] font-bold uppercase tracking-[0.14em]">Subscribe ›</button>
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <span className="font-display text-[14vw] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[180px]">{WORDMARK}</span>
          <span className="meta uppercase tracking-[0.14em] text-ink/60">© Masters' Union {new Date().getFullYear()}</span>
        </div>
      </footer>

      {/* unused import warden */}
      {false && <img src={essential08} alt="" />}
    </div>
  );
}

/* ===================== POSTER PRIMITIVES ===================== */

function PosterShell({
  children,
  className = "",
  style,
  dark,
  green,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  green?: boolean;
}) {
  const tone = green
    ? "bg-green text-ink"
    : dark
    ? "bg-ink text-paper"
    : "bg-paper text-ink";
  return (
    <article className={`relative aspect-[3/4] overflow-hidden border border-ink ${tone} ${className}`} style={style}>
      {children}
      <div className="pointer-events-none absolute inset-x-3 bottom-2 flex items-end justify-between text-[10px] font-bold uppercase tracking-[0.14em] opacity-90">
        <span>{WORDMARK}</span>
        <span className="opacity-60">foodlab.in</span>
      </div>
    </article>
  );
}

function PosterText({
  kicker,
  title,
  footnote,
  green,
}: {
  kicker: string;
  title: ReactNode;
  footnote?: string;
  green?: boolean;
}) {
  return (
    <PosterShell green={green}>
      <div className="absolute inset-x-4 top-4 meta uppercase tracking-[0.14em]">{kicker}</div>
      <h3 className="absolute inset-x-4 top-14 font-display text-[26px] font-extrabold leading-[0.92] tracking-[-0.03em] md:text-[34px]">
        {title}
      </h3>
      {footnote && (
        <div className="absolute inset-x-4 bottom-10 meta uppercase tracking-[0.14em] opacity-70">{footnote}</div>
      )}
    </PosterShell>
  );
}

function PosterIndex({ eyebrow, items }: { eyebrow: string; items: [string, string][] }) {
  return (
    <PosterShell>
      <div className="absolute inset-x-4 top-4 flex items-center justify-between meta uppercase tracking-[0.14em]">
        <span className="text-green">●</span>
        <span className="opacity-70">{eyebrow}</span>
      </div>
      <ul className="absolute inset-x-4 top-14 space-y-3">
        {items.map(([n, label]) => (
          <li key={n} className="border-b border-ink/15 pb-2">
            <div className="flex items-baseline justify-between font-display text-[20px] font-extrabold tracking-[-0.02em]">
              <span>{n}</span>
            </div>
            <div className="mt-1 text-[11px] leading-snug text-ink/70">{label}</div>
          </li>
        ))}
      </ul>
    </PosterShell>
  );
}

function PosterGreenWord({ word }: { word: string }) {
  return (
    <PosterShell green>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h3 className="font-display text-[40px] font-extrabold leading-[0.86] tracking-[-0.04em] md:text-[56px]">
          <span className="block">{word.split(" ")[0]}</span>
          <span className="block">{word.split(" ").slice(1).join(" ")}</span>
        </h3>
      </div>
      <div className="absolute left-4 top-4 meta uppercase tracking-[0.14em]">Manifesto · 01</div>
    </PosterShell>
  );
}

function PosterPhoto({
  img,
  caption,
  sub,
  tall,
}: {
  img: string;
  caption: string;
  sub: string;
  tall?: boolean;
}) {
  return (
    <PosterShell className={tall ? "aspect-[3/4]" : ""}>
      <img src={img} alt={caption} className="absolute inset-0 h-full w-full object-cover grayscale" loading="lazy" />
      <div className="absolute inset-0 bg-paper/10" />
      <div className="absolute right-3 top-3 bg-paper px-2 py-1 meta uppercase tracking-[0.14em]">{caption}</div>
      <div className="absolute left-3 bottom-10 right-3 bg-paper p-3 text-[11px] leading-snug">
        {sub}
      </div>
    </PosterShell>
  );
}

function PosterPortrait({ img, title, subtitle }: { img: string; title: string; subtitle: string }) {
  return (
    <PosterShell>
      <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
      <div className="absolute right-3 bottom-12 max-w-[70%] bg-paper p-3">
        <div className="font-display text-[18px] font-extrabold tracking-[-0.02em]">{title}</div>
        <div className="text-[11px] uppercase tracking-[0.14em] text-ink/60">— {subtitle}</div>
      </div>
    </PosterShell>
  );
}

function PosterCircle({
  img,
  caption,
  sub,
  light,
}: {
  img: string;
  caption: string;
  sub: string;
  light?: boolean;
}) {
  return (
    <PosterShell className={light ? "" : ""} green={false}>
      <div className="absolute inset-x-4 top-4 meta uppercase tracking-[0.14em]">{caption}</div>
      <div className="absolute inset-x-6 top-12 aspect-square overflow-hidden rounded-full">
        <img src={img} alt={caption} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-x-4 bottom-10 text-[11px] leading-snug text-ink/75">{sub}</div>
    </PosterShell>
  );
}

function PosterStat({
  big,
  eyebrow,
  footnote,
  green,
}: {
  big: string;
  eyebrow: string;
  footnote: string;
  green?: boolean;
}) {
  return (
    <PosterShell green={green}>
      <div className="absolute inset-x-4 top-4 meta uppercase tracking-[0.14em]">{eyebrow}</div>
      <div className="absolute inset-x-4 bottom-12">
        <div className="font-display text-[64px] font-extrabold leading-[0.85] tracking-[-0.045em] md:text-[88px]">{big}</div>
        <div className="mt-2 text-[12px] leading-snug">{footnote}</div>
      </div>
    </PosterShell>
  );
}

function PillarPoster({
  n,
  title,
  img,
  points,
}: {
  n: string;
  title: string;
  img: string;
  points: string[];
}) {
  return (
    <PosterShell>
      <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover grayscale" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/10 to-ink/80" />
      <div className="absolute inset-x-3 top-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-paper">
        <span>Pillar {n}</span>
        <span className="grid size-6 place-items-center rounded-full bg-green text-ink">{n}</span>
      </div>
      <div className="absolute inset-x-3 bottom-10 text-paper">
        <h3 className="font-display text-[22px] font-extrabold leading-[0.92] tracking-[-0.02em] md:text-[26px]">{title}</h3>
        <ul className="mt-2 space-y-1">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[11px] leading-snug text-paper/85">
              <span className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-green" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </PosterShell>
  );
}

function PosterMentor({ n }: { n: string }) {
  return (
    <PosterShell>
      <div className="absolute inset-x-4 top-4 flex items-center justify-between meta uppercase tracking-[0.14em] text-ink/60">
        <span>M.{n}</span>
        <span className="text-green">●</span>
      </div>
      <div className="absolute inset-x-4 bottom-12 font-display text-[22px] font-extrabold leading-[0.92] tracking-[-0.02em]">
        Coming<br/>soon
      </div>
    </PosterShell>
  );
}

function LineItem({ n, item, amount }: { n: string; item: string; amount: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-paper/15 pb-2">
      <span className="text-paper/50">{n}</span>
      <span className="flex-1">{item}</span>
      <span className="font-semibold">{amount}</span>
    </li>
  );
}

function BrandCard({
  tag, name, tagline, body, img, follow,
}: {
  tag: string; name: string; tagline: string; body: string; img: string; follow: string;
}) {
  return (
    <article className="border border-ink bg-paper">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink">
        <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-x-0 top-0 flex justify-between p-3 text-[10px] font-bold uppercase tracking-[0.14em]">
          <span className="bg-paper px-2 py-1">{tag}</span>
          <span className="bg-green px-2 py-1">Live</span>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-[40px] font-extrabold leading-[0.92] tracking-[-0.035em] md:text-[52px]">{name}</h3>
        <p className="mt-3 text-[14px] font-semibold italic">{tagline}</p>
        <p className="mt-4 text-[14px] leading-relaxed text-ink/75">{body}</p>
        <div className="mt-6 flex items-center justify-between text-[12px] font-bold uppercase tracking-[0.14em]">
          <a href={follow} target="_blank" rel="noreferrer" className="underline-link">Follow on Instagram →</a>
          <span className="text-ink/50">Available on Zomato</span>
        </div>
      </div>
    </article>
  );
}

function FloatingPill({ className = "", dot, label }: { className?: string; dot: string; label: string }) {
  return (
    <div
      className={`absolute z-10 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.02em] text-paper backdrop-blur-md ${className}`}
    >
      <span className={`size-2 rounded-full ${dot}`} />
      {label}
    </div>
  );
}

function PosterCard({
  tone,
  className = "",
  children,
}: {
  tone: "dark" | "light" | "photo";
  className?: string;
  children: ReactNode;
}) {
  const base =
    tone === "light"
      ? "bg-[oklch(0.92_0.22_142)] text-ink"
      : "bg-ink text-paper";
  return (
    <article
      className={`relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl p-6 md:min-h-[320px] md:p-7 ${base} ${className}`}
    >
      {children}
    </article>
  );
}

function PosterBrandRow({ tone }: { tone: "dark" | "light" }) {
  const ring = tone === "dark" ? "border-paper/30" : "border-ink/30";
  const text = tone === "dark" ? "text-paper/80" : "text-ink/80";
  const dot = tone === "dark" ? "bg-green" : "bg-ink";
  return (
    <div className={`inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${text}`}>
      <span className={`grid size-5 place-items-center rounded-full border ${ring}`}>
        <span className={`size-1.5 rounded-full ${dot}`} />
      </span>
      Food Lab
    </div>
  );
}

function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 18L18 6M18 6H8M18 6V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

function ArrowMark({ tone }: { tone: "dark" | "light" }) {
  return (
    <div className={`absolute right-5 top-5 grid size-12 place-items-center ${tone === "dark" ? "bg-green text-ink" : "bg-ink text-green"}`}>
      <ArrowGlyph className="h-6 w-6" />
    </div>
  );
}

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`h-7 w-7 ${className}`} fill="currentColor" aria-hidden>
      <path d="M10 8c-3 1.5-5 4.5-5 9v7h8v-9H8c0-3 1-5 3-6L10 8zm14 0c-3 1.5-5 4.5-5 9v7h8v-9h-5c0-3 1-5 3-6l-1-1z" />
    </svg>
  );
}
