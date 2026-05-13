import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const APPLY_URL = "https://tally.so/r/441zRr";

const TAGS = [
  { label: "KITCHEN", color: "bg-yellow text-ink" },
  { label: "STAFF", color: "bg-pink text-ink" },
  { label: "COMPLIANCE", color: "bg-green text-paper" },
  { label: "SUPPLY CHAIN", color: "bg-magenta text-ink" },
  { label: "MENTORSHIP", color: "bg-ink text-paper" },
  { label: "AGGREGATORS", color: "bg-yellow text-ink" },
  { label: "R&D", color: "bg-pink text-ink" },
  { label: "FMCG", color: "bg-green text-paper" },
];

const ESSENTIALS = [
  ["01", "Fully equipped kitchen facility", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/ydv6co3v_kitchen-facility.png"],
  ["02", "Professional kitchen staff", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/j6dqwb91_kitchen-staff.png"],
  ["03", "Food consultant & culinary expertise", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/cfj2rs06_food-consultant.png"],
  ["04", "FSSAI licensing & compliance", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/sm32ldou_fssai-compliance.png"],
  ["05", "Procurement & supply chain", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/qffn8ok7_supply-chain.png"],
  ["06", "Aggregator onboarding (Zomato, Swiggy)", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/mqai8hq4_aggregator.png"],
  ["07", "Mentorship from food operators", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/v4p2zo96_mentorship.png"],
  ["08", "Structured feedback & blind tastings", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/13r4h227_feedback-tastings.png"],
];

function Index() {
  return (
    <div className="min-h-screen bg-yellow">
      {/* Outer yellow margin frame, like the Teatro poster */}
      <div className="mx-auto max-w-[1280px] px-4 py-6 md:px-8 md:py-10">
        <div className="frame border-2 border-ink">
          {/* ============== TOP NAV ============== */}
          <header className="flex flex-wrap items-start justify-between gap-6 px-6 py-6 md:px-10">
            <a href="#" className="flex items-center gap-3">
              <div className="grid size-12 place-items-center border-2 border-ink">
                <span className="font-display text-xl font-black leading-none">MU</span>
              </div>
              <div className="font-display text-xl font-bold leading-tight">
                Masters' Union
                <br />
                Food Lab
              </div>
            </a>

            <nav className="hidden flex-1 justify-center gap-10 text-sm font-semibold md:flex">
              <ul className="space-y-1">
                <li><a className="underline-link" href="#program">Program</a></li>
                <li><a className="underline-link" href="#opportunity">Opportunity</a></li>
                <li><a className="underline-link" href="#brands">Brands</a></li>
              </ul>
              <ul className="space-y-1">
                <li><a className="underline-link" href="#mentors">Mentors</a></li>
                <li><a className="underline-link" href="#beyond">Beyond Cloud</a></li>
                <li><a className="underline-link" href="#apply">Apply</a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 text-sm font-semibold">
              <a href={APPLY_URL} className="underline-link">Newsletter</a>
              <span className="text-ink/40">EN / हिं</span>
            </div>
          </header>

          {/* ============== TAG STRIP ============== */}
          <div className="flex flex-wrap items-center gap-2 border-y-2 border-ink px-6 py-4 md:px-10">
            {TAGS.map((t) => (
              <span key={t.label} className={`pill border border-ink ${t.color}`}>{t.label}</span>
            ))}
          </div>

          {/* ============== HERO BENTO ============== */}
          <section id="program" className="grid grid-cols-1 md:grid-cols-3">
            {/* Pink card — left */}
            <article className="border-b-2 border-ink bg-pink p-6 md:border-b-0 md:border-r-2 md:p-10">
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                For the next gen
                <br />
                <span className="italic font-medium">of food brands</span>
                <br />
                in India.
              </h1>
              <div className="mt-6 flex items-start justify-between gap-4 text-xs font-semibold uppercase tracking-wider">
                <div>
                  Cohort 01
                  <br />
                  2025 — 2026
                </div>
                <div className="text-right">
                  Applications
                  <br />
                  open now
                </div>
              </div>

              <p className="mt-8 max-w-sm text-sm leading-relaxed">
                An end-to-end incubator for new-age food brands. Kitchen, staff,
                compliance, supply chain, aggregator onboarding — handled. You
                bring the idea and the obsession.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="pill border border-ink bg-ink text-paper">PROGRAM</span>
                <span className="pill border border-ink">@ NEW DELHI</span>
              </div>
            </article>

            {/* Center editorial photo */}
            <figure className="relative border-b-2 border-ink md:border-b-0 md:border-r-2">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                alt="Chef plating in a kitchen"
                className="h-full max-h-[640px] w-full object-cover"
                loading="eager"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-paper mix-blend-difference">
                <span>Cloud Kitchen · Delhi NCR</span>
                <span>Plate 04 / 12</span>
              </figcaption>
            </figure>

            {/* Yellow card — right */}
            <article className="bg-yellow p-6 md:p-10">
              <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                The Indian food
                <br />
                delivery market
                <br />
                <span className="italic font-medium">is just scratching</span>
                <br />
                the surface.
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-semibold uppercase tracking-wider">
                <div>
                  October
                  <br />
                  Cohort intake
                </div>
                <div className="text-right">
                  Apply by
                  <br />
                  31 — 21:00
                </div>
              </div>

              <p className="mt-8 text-sm leading-relaxed">
                India is decades behind the West and China. The next decade
                belongs to whoever shows up first.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="pill border border-ink bg-pink">OPPORTUNITY</span>
                <a href={APPLY_URL} className="pill border border-ink bg-ink text-paper">
                  APPLY NOW →
                </a>
              </div>
            </article>
          </section>

          {/* ============== STATS ROW ============== */}
          <section id="opportunity" className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-4">
            <Stat kpi="4%" label="India" caption="Food ordering population" />
            <Stat kpi="40–50%" label="USA & China" caption="10× headroom in India alone" dark />
            <Stat kpi="34×" label="China vs India" caption="1.7 Cr restaurants vs 5 L" />
            <Stat kpi="2×" label="In 5 years" caption="Swiggy + Zomato projected growth" accent />
          </section>

          {/* ============== INVOICE BENTO ============== */}
          <section className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2">
            {/* Left text */}
            <div className="border-b-2 border-ink bg-paper p-6 md:border-b-0 md:border-r-2 md:p-10">
              <span className="pill border border-ink bg-magenta">THE CHALLENGE</span>
              <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Before you sell
                <br />
                a single plate,
                <br />
                <span className="italic">the bill is</span>
                <br />
                already due.
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed">
                Most aspiring food entrepreneurs never get to the cooking part.
                They get stuck paying for everything that comes <em>before</em>{" "}
                the cooking. Most great food ideas die right here.
              </p>
            </div>

            {/* Invoice card */}
            <div className="bg-ink p-6 text-paper md:p-10 font-mono">
              <div className="flex items-center justify-between border-b border-paper/30 pb-3 text-[11px] uppercase tracking-wider">
                <span>Masters' Union Food Lab</span>
                <span>Invoice #0001</span>
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-paper/60">
                Pre-Launch Bill · Founder Edition · Day 0 of 60
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                <LineItem n="01" item="Kitchen rent + setup" amount="₹6,00,000" />
                <LineItem n="02" item="R&D + chef consultant" amount="₹3,00,000" />
                <LineItem n="03" item="Working capital" amount="₹6,00,000" />
                <li className="flex justify-between border-t border-paper/30 pt-3 text-paper/80">
                  <span>Subtotal</span>
                  <span>₹15,00,000</span>
                </li>
                <li className="flex justify-between text-paper/60">
                  <span>+ Your time</span>
                  <span>~60 days</span>
                </li>
                <li className="flex justify-between text-paper/60">
                  <span>+ Luck required</span>
                  <span>★★★★★</span>
                </li>
              </ul>

              <div className="mt-6 flex items-end justify-between border-t-2 border-paper pt-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-paper/60">Total due</div>
                  <div className="font-display text-4xl font-bold">₹15L+</div>
                </div>
                <div className="text-right text-[11px] uppercase tracking-wider text-paper/60">
                  Paid by YOU
                  <br />
                  Customers served: 0
                  <br />
                  <span className="text-magenta">— UNPAID —</span>
                </div>
              </div>
              <div className="mt-6 text-center text-[11px] uppercase tracking-wider text-paper/40">
                ~ thank you for playing ~
              </div>
            </div>
          </section>

          {/* ============== SOLUTION / ESSENTIALS ============== */}
          <section className="border-t-2 border-ink bg-paper px-6 py-10 md:px-10 md:py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="pill border border-ink bg-yellow">THE SOLUTION</span>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                  That's where{" "}
                  <span className="bg-pink px-2">Masters' Union</span>
                  <br />
                  <span className="italic">Food Lab</span> comes in.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed">
                Eight essentials, included. Everything you need to launch your
                food brand — kitchen, staff, compliance, supply chain, mentorship.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
              {ESSENTIALS.map(([n, label, img], i) => (
                <article
                  key={n}
                  className={`group relative aspect-square overflow-hidden border-ink ${
                    i % 4 !== 3 ? "lg:border-r-2" : ""
                  } ${i % 2 !== 1 ? "sm:border-r-2 lg:border-r-2" : "sm:border-r-0"} ${
                    i < ESSENTIALS.length - (ESSENTIALS.length % 4 || 4) ? "border-b-2" : ""
                  }`}
                >
                  <img src={img} alt={label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute left-4 top-4 font-mono text-xs font-semibold text-paper">{n}</div>
                  <div className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold leading-tight text-paper">
                    {label}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ============== BRANDS ============== */}
          <section id="brands" className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2">
            <div className="border-b-2 border-ink bg-green p-6 text-paper md:col-span-2 md:border-b-2 md:p-10">
              <span className="pill border border-paper">FROM OUR KITCHEN</span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Brands already <span className="italic">cooking.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/80">
                Built by MU students. Serving real customers. Growing every week.
              </p>
            </div>

            <BrandCard
              tag="DELHI / GURGAON"
              tagColor="bg-pink"
              name="Lexi's Gourmet Sandwiches"
              tagline="Gurgaon's highest-rated gourmet sandwich brand"
              body="What started as a passion for bold, indulgent sandwiches became Gurgaon's top-rated gourmet sandwich brand. Cult favorites: truffle mushroom ciabattas and crispy katsu sandos. Now expanding to Delhi."
              img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/y11vvcni_Lexi%27s%20Gourmet%20Sandwiches.png"
              follow="https://www.instagram.com/lexis_sandos/?hl=en"
              border="md:border-r-2"
            />
            <BrandCard
              tag="LAJPAT NAGAR · DELHI"
              tagColor="bg-yellow"
              name="Woody's Pizzeria"
              tagline="Neapolitan-inspired, made for the Indian palate"
              body="Kanav started baking pizzas in 2011. After years perfecting Neapolitan recipes, he launched Woody's — now live in Lajpat Nagar. Customers keep calling it the best pizza they've ever had."
              img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/yr5s9vfq_Woody%27s%20Pizzeria.png"
              follow="https://www.instagram.com/woodyspizzeria/?hl=en"
            />
          </section>

          {/* ============== MENTORS ============== */}
          <section id="mentors" className="border-t-2 border-ink bg-paper px-6 py-10 md:px-10 md:py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="pill border border-ink bg-magenta">MENTORS & PARTNERS</span>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                  Learn from people who've built food businesses{" "}
                  <span className="italic">from zero.</span>
                </h2>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
                <span>Partnered with</span>
                <span className="rounded-full border border-ink px-3 py-1">Zomato</span>
                <span className="rounded-full border border-ink px-3 py-1">Swiggy</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px border-2 border-ink bg-ink sm:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-square bg-paper p-4">
                  <div className="flex h-full flex-col justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display text-lg font-bold leading-none">Coming</div>
                      <div className="font-display text-lg font-bold italic leading-none">soon</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============== BEYOND CLOUD ============== */}
          <section id="beyond" className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-5">
            <div className="border-b-2 border-ink bg-magenta p-6 md:col-span-2 md:border-b-0 md:border-r-2 md:p-10">
              <span className="pill border border-ink bg-paper">NOT JUST CLOUD KITCHENS</span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Think bigger.
                <br />
                <span className="italic">We're building</span>
                <br />
                for all of food.
              </h2>
            </div>
            <div className="bg-paper p-6 md:col-span-3 md:p-10">
              <p className="max-w-2xl text-sm leading-relaxed">
                Cloud kitchens are where we start — but Food Lab is designed to
                incubate any food & beverage brand. Packaged snacks, beverages,
                health foods, ready-to-eat, condiments — if it's food and it can
                scale, we want to hear about it.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Cloud kitchens", "Delivery-first brands", "Packaged foods / FMCG", "Beverages", "Ready-to-eat"].map((c) => (
                  <span key={c} className="pill border-2 border-ink bg-yellow text-base normal-case tracking-normal">
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={APPLY_URL}
                className="mt-8 inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
              >
                Register your interest →
              </a>
            </div>
          </section>

          {/* ============== APPLY CTA ============== */}
          <section id="apply" className="border-t-2 border-ink bg-yellow px-6 py-16 text-center md:px-10 md:py-24">
            <span className="pill border border-ink bg-ink text-paper">ADMISSIONS OPEN</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold md:text-7xl lg:text-8xl">
              Build your <span className="italic">food</span> brand.
            </h2>
            <a
              href={APPLY_URL}
              className="mt-10 inline-flex items-center gap-3 border-2 border-ink bg-ink px-8 py-4 text-base font-semibold text-paper transition hover:bg-pink hover:text-ink"
            >
              START APPLICATION →
            </a>
            <blockquote className="mx-auto mt-10 max-w-xl font-display text-xl italic md:text-2xl">
              "Real kitchens. Real customers. And a clear path to becoming founders."
            </blockquote>
          </section>
        </div>

        {/* ============== FOOTER (black, like Teatro) ============== */}
        <footer className="mt-6 border-2 border-ink bg-ink p-6 text-paper md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="text-xs font-semibold uppercase tracking-wider">
              Cohort 01
              <br />
              2025 — 2026
              <br />
              <span className="text-paper/50">Apply by 31 October</span>
            </div>

            <address className="not-italic text-sm leading-relaxed">
              <div className="font-semibold">Masters' Union Food Lab</div>
              Sector 67, Gurugram
              <br />
              Haryana 122102, India
              <br />
              <a href="mailto:foodlab@mastersunion.org" className="underline-link">foodlab@mastersunion.org</a>
            </address>

            <div className="text-sm leading-relaxed">
              <div className="font-semibold">Visit the kitchen</div>
              By appointment only
              <br />
              Mon — Sat · 11:00 — 19:00
              <br />
              <a href={APPLY_URL} className="underline-link">Book a tour →</a>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="text-sm"
            >
              <label className="font-semibold">Subscribe to the kitchen brief</label>
              <div className="mt-3 flex items-center border-b border-paper/40 pb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent text-sm placeholder:text-paper/50 focus:outline-none"
                />
                <button className="text-sm font-semibold">Subscribe ›</button>
              </div>
            </form>
          </div>

          <div className="mt-12 flex items-end justify-between">
            <span className="font-display text-5xl font-black md:text-7xl">Food Lab.</span>
            <span className="text-[11px] uppercase tracking-wider text-paper/50">
              © Masters' Union {new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Stat({
  kpi,
  label,
  caption,
  dark,
  accent,
}: {
  kpi: string;
  label: string;
  caption: string;
  dark?: boolean;
  accent?: boolean;
}) {
  const bg = dark ? "bg-ink text-paper" : accent ? "bg-pink text-ink" : "bg-paper text-ink";
  return (
    <div className={`border-b-2 border-ink p-6 last:border-b-0 md:border-b-0 md:border-r-2 md:p-8 md:last:border-r-0 ${bg}`}>
      <div className="font-mono text-[11px] uppercase tracking-wider opacity-70">{label}</div>
      <div className="mt-3 font-display text-5xl font-bold md:text-6xl">{kpi}</div>
      <div className="mt-3 text-sm">{caption}</div>
    </div>
  );
}

function LineItem({ n, item, amount }: { n: string; item: string; amount: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-paper/15 pb-2">
      <span className="text-paper/60">{n}</span>
      <span className="flex-1">{item}</span>
      <span className="font-semibold">{amount}</span>
    </li>
  );
}

function BrandCard({
  tag,
  tagColor,
  name,
  tagline,
  body,
  img,
  follow,
  border = "",
}: {
  tag: string;
  tagColor: string;
  name: string;
  tagline: string;
  body: string;
  img: string;
  follow: string;
  border?: string;
}) {
  return (
    <article className={`bg-paper ${border}`}>
      <div className="aspect-[4/3] overflow-hidden border-b-2 border-ink">
        <img src={img} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-6 md:p-8">
        <span className={`pill border border-ink ${tagColor}`}>{tag}</span>
        <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">{name}</h3>
        <p className="mt-2 text-sm font-semibold italic">{tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80">{body}</p>
        <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
          <a href={follow} target="_blank" rel="noreferrer" className="underline-link">Follow →</a>
          <span className="text-ink/40">Available on Zomato</span>
        </div>
      </div>
    </article>
  );
}
