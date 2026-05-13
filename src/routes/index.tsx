import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const APPLY_URL = "https://tally.so/r/441zRr";

const ESSENTIALS = [
  ["01", "Fully equipped kitchen facility", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/ydv6co3v_kitchen-facility.png"],
  ["02", "Professional kitchen staff", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/j6dqwb91_kitchen-staff.png"],
  ["03", "Food consultant & culinary expertise", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/cfj2rs06_food-consultant.png"],
  ["04", "FSSAI licensing & compliance", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/sm32ldou_fssai-compliance.png"],
  ["05", "Procurement & supply chain", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/qffn8ok7_supply-chain.png"],
  ["06", "Aggregator onboarding (Zomato, Swiggy)", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/mqai8hq4_aggregator.png"],
  ["07", "Mentorship from food operators", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/v4p2zo96_mentorship.png"],
  ["08", "Structured feedback & blind tastings", "https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/13r4h227_feedback-tastings.png"],
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ============== TOP NAV ============== */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-ink px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="grid size-8 place-items-center border border-ink text-[11px] font-bold tracking-tighter">MU</span>
          <span className="text-sm font-bold tracking-tight">Masters' Union — Food&nbsp;Lab</span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex">
          <a className="underline-link" href="#program">Program</a>
          <a className="underline-link" href="#opportunity">Opportunity</a>
          <a className="underline-link" href="#solution">Essentials</a>
          <a className="underline-link" href="#brands">Brands</a>
          <a className="underline-link" href="#mentors">Mentors</a>
          <a className="underline-link" href="#beyond">Beyond Cloud</a>
        </nav>
        <a href={APPLY_URL} className="border border-ink px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] hover:bg-ink hover:text-paper">
          Apply →
        </a>
      </header>

      {/* ============== BENTO HERO (Unit8-inspired) ============== */}
      <section id="program" className="mx-auto max-w-[1400px] border-b border-ink">
        <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-4 md:gap-4 md:p-4">
          {/* Tile 1 — Wide black headline (2 cols) */}
          <Tile className="md:col-span-2 md:row-span-1 aspect-[2/1] bg-ink text-paper">
            <TileHeader brand="Food Lab." tag="cohort 01" dark />
            <TileCircle dark />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <div className="meta uppercase tracking-[0.14em] text-paper/70">
                Applications open · ranked among India's top incubators (CIO Apps 2025).
              </div>
              <h1 className="mt-3 font-display text-[34px] font-bold leading-[0.95] md:text-[52px]">
                Spoiler alert!<br/>We're cooking.
              </h1>
            </div>
          </Tile>

          {/* Tile 2 — Big yellow logo block */}
          <Tile className="aspect-square text-ink" style={{ background: "var(--yellow)" }}>
            <TileHeader brand="Food Lab." tag="™" />
            <TileCircle />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <div className="font-display text-[18vw] font-bold leading-[0.85] md:text-[88px]">
                Food<br/>Lab<sub className="align-baseline text-[0.35em] font-medium">8</sub>
              </div>
              <div className="mt-3 meta uppercase tracking-[0.14em]">
                Cohort 01<br/>2025 — 2026, ₹0 setup
              </div>
            </div>
          </Tile>

          {/* Tile 3 — Code/data dark accent */}
          <Tile className="aspect-square bg-ink text-paper">
            <TileHeader brand="Food Lab." tag="brief" dark />
            <TileCircle dark />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <h2 className="font-display text-[28px] font-bold leading-[0.95] md:text-[34px]">
                Meet the next gen of Indian food founders.
              </h2>
              <div className="mt-4 meta uppercase tracking-[0.14em] text-paper/60">
                Intake Oct '25, New Delhi
              </div>
            </div>
            <pre aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden p-4 font-mono text-[10px] leading-[1.3] text-paper/15">
{`const cohort = await foodLab.open({
  city: "Delhi NCR",
  seats: 12,
  verticals: ["cloud","FMCG","RTE"],
});
cohort.on("apply", (f) => f.cook());`}
            </pre>
          </Tile>

          {/* Tile 4 — Photo + light card combo (2 cols) */}
          <Tile className="md:col-span-2 aspect-[2/1] grid grid-cols-2 gap-0 bg-paper text-ink overflow-hidden p-0">
            <div className="relative p-6 md:p-8">
              <h2 className="font-display text-[28px] font-bold leading-[0.95] md:text-[40px]">
                Journey is<br/>the reward.
              </h2>
              <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-ink/75">
                Food Lab is more than a programme. It's a 60-day journey: real
                kitchens, real customers, honest feedback, structured tastings —
                and a clear path to becoming a founder.
              </p>
              <div className="absolute inset-x-6 bottom-5 md:inset-x-8 meta uppercase tracking-[0.14em] text-ink/60">
                01 / 04 — The promise
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
                alt="Food founder at the kitchen pass"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <span className="absolute right-4 top-4 grid size-6 place-items-center rounded-full border border-paper bg-paper/20 text-[10px] font-bold text-paper">02</span>
            </div>
          </Tile>

          {/* Tile 5 — Blue manifesto block (2 cols) */}
          <Tile className="md:col-span-2 aspect-[2/1] text-paper" style={{ background: "var(--magenta)" }}>
            <TileHeader brand="Food Lab." tag="manifesto" dark />
            <TileCircle dark />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <h2 className="font-display text-[34px] font-bold leading-[0.95] md:text-[52px]">
                Customer comes first.<br/>Always.
              </h2>
              <p className="mt-4 max-w-[44ch] text-[13px] leading-relaxed text-paper/85">
                Typical incubators sell you a deck. We hand you a kitchen, staff,
                FSSAI, supply chain and aggregator onboarding — and ship your
                first plate by week eight.
              </p>
            </div>
          </Tile>

          {/* Tile 6 — Photo: kitchen team */}
          <Tile className="aspect-square bg-paper overflow-hidden p-0">
            <img
              src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&w=1200&q=80"
              alt="Kitchen brigade"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <span className="absolute right-4 top-4 grid size-6 place-items-center rounded-full border border-paper bg-paper/20 text-[10px] font-bold text-paper">03</span>
            <div className="absolute inset-x-6 bottom-6 text-paper">
              <div className="meta uppercase tracking-[0.14em] text-paper/80">From the brigade</div>
              <div className="mt-2 font-display text-[22px] font-bold leading-[0.95]">
                Built by operators, not slides.
              </div>
            </div>
          </Tile>

          {/* Tile 7 — Light tile, headline */}
          <Tile className="aspect-square bg-secondary text-ink">
            <TileHeader brand="Food Lab." tag="outcome" />
            <TileCircle />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <h2 className="font-display text-[28px] font-bold leading-[0.95] md:text-[40px]">
                We are the fortunate ones.
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/75">
                India's food delivery market is just scratching the surface — 4%
                of the population orders online vs 40–50% in the US and China.
              </p>
            </div>
          </Tile>
        </div>
      </section>

      {/* ============== INTRO STRIP ============== */}
      <section className="mx-auto max-w-[1400px] grid grid-cols-1 gap-10 border-b border-ink px-6 py-12 md:grid-cols-12 md:px-10 md:py-16">
        <div className="md:col-span-3 meta uppercase tracking-[0.14em]">
          <div>Programme Brief</div>
          <div className="mt-2 text-ink/60">No. 0001 / Cohort 01</div>
        </div>
        <h1 className="md:col-span-9 font-display text-[44px] font-bold leading-[0.95] md:text-[68px]">
          For the next generation of food brands in India.
          <span className="text-ink/50"> An end-to-end incubator — kitchen, staff, compliance, supply chain, aggregator onboarding — handled. You bring the idea and the obsession.</span>
        </h1>
      </section>

      {/* ============== STATS ROW ============== */}
      <section id="opportunity" className="mx-auto grid max-w-[1400px] grid-cols-2 border-b border-ink md:grid-cols-4">
        <Stat n="01" kpi="4%" label="India" caption="of population orders food online" />
        <Stat n="02" kpi="40–50%" label="USA & China" caption="10× headroom waiting in India" hi="var(--yellow)" />
        <Stat n="03" kpi="34×" label="China vs India" caption="1.7 Cr restaurants vs 5 L" />
        <Stat n="04" kpi="2×" label="Next 5 yrs" caption="Swiggy + Zomato projected growth" hi="var(--pink)" />
      </section>

      {/* ============== INVOICE ============== */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px border-b border-ink bg-ink md:grid-cols-2">
        <div className="bg-paper p-8 md:p-12">
          <span className="pill border border-ink">The Challenge — 0X</span>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.92] md:text-7xl">
            Before you sell a single plate, the bill is already <span className="relative inline-block"><span className="absolute inset-x-0 top-[55%] h-[42%] -z-0" style={{ background: "var(--yellow)" }} /><span className="relative">due.</span></span>
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed">
            Most aspiring food entrepreneurs never get to the cooking part. They get stuck paying for everything that comes <em>before</em> the cooking. Most great food ideas die right here.
          </p>
        </div>
        <div className="bg-paper p-8 md:p-12 font-mono text-ink">
          <div className="flex items-center justify-between border-b border-ink pb-3 text-[11px] uppercase tracking-[0.14em]">
            <span>Masters' Union Food Lab</span>
            <span>Invoice #0001</span>
          </div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink/60">
            Pre-Launch Bill · Founder Edition · Day 0 of 60
          </div>
          <ul className="mt-8 space-y-3 text-[14px]">
            <LineItem n="01" item="Kitchen rent + setup" amount="₹6,00,000" />
            <LineItem n="02" item="R&D + chef consultant" amount="₹3,00,000" />
            <LineItem n="03" item="Working capital" amount="₹6,00,000" />
            <li className="flex justify-between border-t border-ink pt-3">
              <span>Subtotal</span>
              <span className="font-semibold">₹15,00,000</span>
            </li>
            <li className="flex justify-between text-ink/60"><span>+ Your time</span><span>~60 days</span></li>
            <li className="flex justify-between text-ink/60"><span>+ Luck required</span><span>★★★★★</span></li>
          </ul>
          <div className="mt-8 flex items-end justify-between border-t border-ink pt-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-ink/60">Total due</div>
              <div className="font-display text-5xl font-bold">₹15L+</div>
            </div>
            <div className="relative text-right text-[11px] uppercase tracking-[0.14em]">
              Customers served: 0
              <div className="mt-1 inline-block px-2 py-0.5 text-ink" style={{ background: "var(--pink)" }}>— UNPAID —</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== ESSENTIALS / SOLUTION ============== */}
      <section id="solution" className="mx-auto max-w-[1400px] border-b border-ink">
        <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-4 md:gap-4 md:p-4">
          {/* Headline tile (2x2) */}
          <Tile className="md:col-span-2 md:row-span-2 aspect-square text-paper" style={{ background: "var(--magenta)" }}>
            <TileHeader brand="Food Lab." tag="the solution" dark />
            <TileCircle dark />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <div className="meta uppercase tracking-[0.14em] text-paper/70">
                Eight essentials, included.
              </div>
              <h2 className="mt-3 font-display text-[40px] font-bold leading-[0.92] md:text-[68px]">
                That's where<br/>Food Lab<br/>comes in.
              </h2>
              <p className="mt-5 max-w-[40ch] text-[13px] leading-relaxed text-paper/85">
                Kitchen, staff, FSSAI, supply chain, aggregator onboarding,
                mentorship, R&amp;D and feedback — wired in from day one. You
                bring the idea and the obsession.
              </p>
            </div>
          </Tile>

          {/* Yellow stat tile */}
          <Tile className="aspect-square text-ink" style={{ background: "var(--yellow)" }}>
            <TileHeader brand="Food Lab." tag="kit" />
            <TileCircle />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <div className="font-display text-[64px] font-bold leading-[0.85] md:text-[88px]">08</div>
              <div className="mt-2 meta uppercase tracking-[0.14em]">Essentials, day one</div>
            </div>
          </Tile>

          {/* Dark code tile */}
          <Tile className="aspect-square bg-ink text-paper">
            <TileHeader brand="Food Lab." tag="stack" dark />
            <TileCircle dark />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <h3 className="font-display text-[24px] font-bold leading-[0.95] md:text-[28px]">
                Driven by outcome.
              </h3>
              <div className="mt-3 meta uppercase tracking-[0.14em] text-paper/60">
                60 days · 1 launch
              </div>
            </div>
            <pre aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden p-4 font-mono text-[10px] leading-[1.3] text-paper/15">
{`stack.kitchen   = "fully equipped";
stack.compliance = "FSSAI ready";
stack.supply    = "vendor mapped";
stack.aggregator = ["zomato","swiggy"];
launch(brand);`}
            </pre>
          </Tile>

          {/* 4 image tiles for first 4 essentials */}
          {ESSENTIALS.slice(0, 4).map(([n, label, img]) => (
            <Tile key={n} className="aspect-square overflow-hidden p-0 bg-paper">
              <img src={img} alt={label} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 30%, rgba(0,0,0,0.7) 100%)" }} />
              <div className="absolute inset-x-5 top-4 flex justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-paper">
                <span>Food Lab.</span>
                <span className="grid size-6 place-items-center rounded-full border border-paper/70 bg-paper/15">{n}</span>
              </div>
              <div className="absolute inset-x-5 bottom-5 font-display text-[18px] font-bold leading-[0.95] text-paper md:text-[20px]">
                {label}
              </div>
            </Tile>
          ))}

          {/* Light tile — pull-quote */}
          <Tile className="md:col-span-2 aspect-[2/1] bg-secondary text-ink">
            <TileHeader brand="Food Lab." tag="from cohort 01" />
            <TileCircle />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <h3 className="font-display text-[26px] font-bold leading-[0.95] md:text-[36px]">
                "Real kitchens. Real customers. And a clear path to becoming founders."
              </h3>
              <div className="mt-4 meta uppercase tracking-[0.14em] text-ink/60">
                — Cohort manifesto
              </div>
            </div>
          </Tile>

          {/* Last 4 image tiles */}
          {ESSENTIALS.slice(4).map(([n, label, img]) => (
            <Tile key={n} className="aspect-square overflow-hidden p-0 bg-paper">
              <img src={img} alt={label} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 30%, rgba(0,0,0,0.7) 100%)" }} />
              <div className="absolute inset-x-5 top-4 flex justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-paper">
                <span>Food Lab.</span>
                <span className="grid size-6 place-items-center rounded-full border border-paper/70 bg-paper/15">{n}</span>
              </div>
              <div className="absolute inset-x-5 bottom-5 font-display text-[18px] font-bold leading-[0.95] text-paper md:text-[20px]">
                {label}
              </div>
            </Tile>
          ))}
        </div>
      </section>

      {/* ============== BRANDS ============== */}
      <section id="brands" className="mx-auto max-w-[1400px] border-b border-ink">
        <div className="grid grid-cols-1 gap-8 px-6 py-14 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-4">
            <span className="pill border border-ink">From our kitchen</span>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.92] md:text-7xl">
              Brands already{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 top-[55%] h-[42%] -z-0" style={{ background: "var(--pink)" }} />
                <span className="relative">cooking.</span>
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end text-[15px] leading-relaxed">
            Built by MU students. Serving real customers. Growing every week.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border-t border-ink bg-ink md:grid-cols-2">
          <BrandCard
            tag="Delhi · Gurgaon"
            name="Lexi's Gourmet Sandwiches"
            tagline="Gurgaon's highest-rated gourmet sandwich brand"
            body="What started as a passion for bold, indulgent sandwiches became Gurgaon's top-rated gourmet sandwich brand. Cult favorites: truffle mushroom ciabattas and crispy katsu sandos. Now expanding to Delhi."
            img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/y11vvcni_Lexi%27s%20Gourmet%20Sandwiches.png"
            follow="https://www.instagram.com/lexis_sandos/?hl=en"
            hi="var(--yellow)"
          />
          <BrandCard
            tag="Lajpat Nagar · Delhi"
            name="Woody's Pizzeria"
            tagline="Neapolitan-inspired, made for the Indian palate"
            body="Kanav started baking pizzas in 2011. After years perfecting Neapolitan recipes, he launched Woody's — now live in Lajpat Nagar. Customers keep calling it the best pizza they've ever had."
            img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/yr5s9vfq_Woody%27s%20Pizzeria.png"
            follow="https://www.instagram.com/woodyspizzeria/?hl=en"
            hi="var(--green)"
          />
        </div>
      </section>

      {/* ============== MENTORS ============== */}
      <section id="mentors" className="mx-auto max-w-[1400px] border-b border-ink px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="pill border border-ink">Mentors & Partners</span>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.92] md:text-7xl">
              Learn from people who've built food businesses{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 top-[55%] h-[42%] -z-0" style={{ background: "var(--yellow)" }} />
                <span className="relative">from zero.</span>
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end">
            <div className="meta uppercase tracking-[0.14em] text-ink/60">Aggregator partners</div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="border border-ink px-3 py-1 text-[12px] font-semibold">Zomato</span>
              <span className="border border-ink px-3 py-1 text-[12px] font-semibold">Swiggy</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-paper p-4">
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">
                  M.{String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-display text-[22px] font-bold leading-[0.92]">
                  Coming<br/>soon
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============== BEYOND CLOUD ============== */}
      <section id="beyond" className="mx-auto max-w-[1400px] grid grid-cols-1 gap-px border-b border-ink bg-ink md:grid-cols-12">
        <div className="bg-paper p-8 md:col-span-5 md:p-12">
          <span className="pill border border-ink">Beyond cloud kitchens</span>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.92] md:text-6xl">
            Think bigger.{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 top-[15%] h-[80%] -z-0" style={{ background: "var(--pink)" }} />
              <span className="relative">We're building</span>
            </span>{" "}
            for all of food.
          </h2>
        </div>
        <div className="bg-paper p-8 md:col-span-7 md:p-12">
          <p className="max-w-2xl text-[15px] leading-relaxed">
            Cloud kitchens are where we start — but Food Lab is designed to incubate any food &amp; beverage brand. Packaged snacks, beverages, health foods, ready-to-eat, condiments — if it's food and it can scale, we want to hear about it.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2">
            {["Cloud kitchens", "Delivery-first brands", "Packaged foods / FMCG", "Beverages", "Ready-to-eat", "Condiments & sauces"].map((c, i) => (
              <li key={c} className="flex items-center justify-between bg-paper px-4 py-3 text-[14px] font-medium">
                <span>{c}</span>
                <span className="font-mono text-[10px] text-ink/50">0{i+1}</span>
              </li>
            ))}
          </ul>
          <a href={APPLY_URL} className="mt-8 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-paper hover:text-ink">
            Register your interest →
          </a>
        </div>
      </section>

      {/* ============== APPLY POSTER ============== */}
      <section id="apply" className="mx-auto max-w-[1400px] border-b border-ink">
        <div className="relative">
          <Poster
            dateLabel={`Apply by\n31 Oct, 21:00`}
            topRight="‘Real kitchens. Real customers. Real founders.’\n(Admissions open)"
            eye="04"
            img="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1600&q=80"
            alt="Hands kneading dough"
            headline={<>Build your<br/><span className="italic font-medium">food</span> brand.</>}
            highlights={[
              { color: "var(--yellow)", className: "left-[8%] top-[40%] w-[55%] h-[10%]" },
              { color: "var(--pink)", className: "left-[20%] top-[52%] w-[40%] h-[8%]" },
              { color: "var(--green)", className: "left-[40%] top-[20%] w-[30%] h-[8%]" },
            ]}
            subline="Cohort 01\n2025 — 2026\nNew Delhi"
            bottomLeft="Food Lab"
            bottomRight={"Apply at\ntally.so/r/441zRr"}
            big
          />
          <a
            href={APPLY_URL}
            className="absolute bottom-8 right-8 z-10 inline-flex items-center gap-3 border border-ink bg-paper px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] hover:bg-ink hover:text-paper"
          >
            Start application →
          </a>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
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
              <button className="text-[12px] font-semibold uppercase tracking-[0.14em]">Subscribe ›</button>
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <span className="font-display text-[14vw] font-bold leading-[0.85] md:text-[160px]">Food Lab.</span>
          <span className="meta uppercase tracking-[0.14em] text-ink/60">
            © Masters' Union {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ===================== POSTER ===================== */
function Poster({
  dateLabel,
  topRight,
  eye,
  img,
  alt,
  headline,
  highlights,
  subline,
  bottomLeft,
  bottomRight,
  big,
}: {
  dateLabel: string;
  topRight: string;
  eye: string;
  img: string;
  alt: string;
  headline: React.ReactNode;
  highlights: { color: string; className: string }[];
  subline: string;
  bottomLeft: string;
  bottomRight: string;
  big?: boolean;
}) {
  return (
    <article className={`relative overflow-hidden bg-paper ${big ? "aspect-[16/9]" : "aspect-[3/4]"}`}>
      {/* Photo */}
      <img src={img} alt={alt} className="absolute inset-0 h-full w-full object-cover grayscale" loading="eager" />
      {/* Soft white overlay so type stays readable */}
      <div className="absolute inset-0 bg-paper/35" />
      {/* Thin grid lines */}
      <div className="pointer-events-none absolute inset-0 poster-grid opacity-60" />
      {/* Diagonal hairline */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent calc(50% - 0.5px), var(--rule) 50%, transparent calc(50% + 0.5px))" }} />
      </div>

      {/* Highlight blocks */}
      {highlights.map((h, i) => (
        <span key={i} className={`hl ${h.className}`} style={{ background: h.color }} />
      ))}

      {/* Top row */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
        <div className="border border-ink bg-paper px-2 py-1 meta whitespace-pre-line">
          {dateLabel}
        </div>
        <div className="hidden md:block max-w-[55%] text-right meta whitespace-pre-line text-ink/80">
          {topRight}
        </div>
        <div className="grid size-7 place-items-center rounded-full border border-ink bg-paper text-[10px] font-bold">
          {eye}
        </div>
      </div>

      {/* Subline (left, mid) */}
      <div className="absolute left-5 top-[42%] hidden md:block meta whitespace-pre-line text-ink/80">
        {subline}
      </div>

      {/* Headline */}
      <h2 className={`absolute left-5 right-5 ${big ? "bottom-20" : "bottom-16"} font-display font-bold tracking-[-0.04em] leading-[0.86] ${big ? "text-[10vw] md:text-[140px]" : "text-[14vw] md:text-[64px]"}`}>
        {headline}
      </h2>

      {/* Bottom row */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-ink bg-paper px-5 py-3 md:px-6">
        <span className="font-display text-[18px] font-bold tracking-tight">{bottomLeft}</span>
        <span className="meta whitespace-pre-line text-right text-ink/80">{bottomRight}</span>
      </div>
    </article>
  );
}

/* ===================== STAT ===================== */
function Stat({ n, kpi, label, caption, hi }: { n: string; kpi: string; label: string; caption: string; hi?: string }) {
  return (
    <div className="relative border-b border-r border-ink p-6 last:border-r-0 md:p-8">
      <div className="flex items-center justify-between meta uppercase tracking-[0.14em] text-ink/60">
        <span>{n}</span>
        <span>{label}</span>
      </div>
      <div className="relative mt-6 inline-block font-display text-5xl font-bold md:text-6xl">
        {hi && <span className="absolute inset-x-[-4px] top-[55%] h-[42%] -z-0" style={{ background: hi }} />}
        <span className="relative">{kpi}</span>
      </div>
      <div className="mt-4 text-[14px] leading-relaxed">{caption}</div>
    </div>
  );
}

/* ===================== LINE ITEM ===================== */
/* ===================== TILE (bento) ===================== */
function Tile({
  className = "",
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden border border-ink p-6 md:p-8 ${className}`} style={style}>
      {children}
    </div>
  );
}

function TileHeader({ brand, tag, dark }: { brand: string; tag?: string; dark?: boolean }) {
  return (
    <div className={`absolute inset-x-6 top-5 md:inset-x-8 flex items-start justify-between ${dark ? "text-paper" : "text-ink"}`}>
      <span className="font-display text-[15px] font-bold tracking-tight">{brand}</span>
      {tag && <span className="meta uppercase tracking-[0.14em] opacity-70">{tag}</span>}
    </div>
  );
}

function TileCircle({ dark }: { dark?: boolean }) {
  const stroke = dark ? "rgba(255,255,255,0.45)" : "rgba(20,20,20,0.45)";
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -right-12 -top-12 size-[60%] opacity-80"
    >
      {[80, 65, 50, 35].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke={stroke} strokeWidth="1" />
      ))}
    </svg>
  );
}

function LineItem({ n, item, amount }: { n: string; item: string; amount: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-2">
      <span className="text-ink/50">{n}</span>
      <span className="flex-1">{item}</span>
      <span className="font-semibold">{amount}</span>
    </li>
  );
}

/* ===================== BRAND CARD ===================== */
function BrandCard({
  tag, name, tagline, body, img, follow, hi,
}: {
  tag: string; name: string; tagline: string; body: string; img: string; follow: string; hi: string;
}) {
  return (
    <article className="bg-paper">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink">
        <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-6 top-[60%] h-[10%] w-[55%]" style={{ background: hi, mixBlendMode: "multiply" }} />
        <div className="absolute inset-x-0 top-0 flex justify-between p-4 text-[10px] font-semibold uppercase tracking-[0.14em]">
          <span className="border border-ink bg-paper px-2 py-1">{tag}</span>
          <span className="border border-ink bg-paper px-2 py-1">Live</span>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-4xl font-bold leading-[0.92] md:text-5xl">{name}</h3>
        <p className="mt-3 text-[14px] font-semibold italic">{tagline}</p>
        <p className="mt-4 text-[14px] leading-relaxed text-ink/80">{body}</p>
        <div className="mt-6 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.14em]">
          <a href={follow} target="_blank" rel="noreferrer" className="underline-link">Follow on Instagram →</a>
          <span className="text-ink/50">Available on Zomato</span>
        </div>
      </div>
    </article>
  );
}
