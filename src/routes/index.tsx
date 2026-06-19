import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

import MobileNav from "@/components/MobileNav";
import { handleApplyClick } from "@/lib/apply-widget";

import essential01 from "@/assets/essential-01-kitchen.webp";
import essential02 from "@/assets/essential-02-staff.webp";
import essential03 from "@/assets/essential-03-consultant.webp";
import essential05 from "@/assets/essential-05-supply.webp";
import essential07 from "@/assets/essential-07-mentor.webp";
import essential08 from "@/assets/essential-08-tasting.webp";
import heroFounder from "@/assets/hero-founder.webp";
import heroDitya from "@/assets/hero-ditya.jpg.asset.json";
import admissionsOpen from "@/assets/admissions-open.jpg.asset.json";
import heroWok from "@/assets/hero-wok.webp";
import muLogo from "@/assets/masters-union-logo.svg";
import brandLexis from "@/assets/brand-lexis.png";
import brandWoodys from "@/assets/brand-woodys.png";
import woodysLogo from "@/assets/woodys-logo.jpeg";
import mentorAnkit from "@/assets/mentor-ankit.png.asset.json";
import mentorAbhijeet from "@/assets/mentor-abhijeet.png";
import mentorAnshul from "@/assets/mentor-anshul.png";
import mentorKabir from "@/assets/mentor-kabir.jpeg";
import mentorAlex from "@/assets/mentor-alex.jpg";
import mentorSwarup from "@/assets/mentor-swarup.png";
import mentorAnshu from "@/assets/mentor-anshu.jpeg";
import mentorSumit from "@/assets/mentor-sumit.jpeg";
import mentorSaksham from "@/assets/mentor-saksham.jpeg";
import solution01 from "@/assets/solution-01.png.asset.json";
import solution02 from "@/assets/solution-02.png.asset.json";
import solution03 from "@/assets/solution-03.png.asset.json";
import solution04 from "@/assets/solution-04.png.asset.json";
import solution05 from "@/assets/solution-05.png.asset.json";
import solution06 from "@/assets/solution-06.png.asset.json";
import mentorNaveen from "@/assets/mentor-naveen.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const APPLY_URL = "https://tally.so/r/441zRr";
const WORDMARK = "FOODLAB\u00AE";

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink pb-16 lg:pb-0">
      {/* ============== TOP NAV ============== */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 border-b border-ink px-4 py-3 sm:px-6 sm:py-4 md:px-10">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img src={muLogo} alt="Masters' Union" className="h-8 w-auto sm:h-10 md:h-12" />
            <span className="hidden h-7 w-px bg-ink/20 sm:inline-block" aria-hidden />
            <span className="hidden font-display text-[13px] font-extrabold tracking-[-0.02em] sm:inline sm:text-[15px]">{WORDMARK}</span>
          </a>
          <nav className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.14em] lg:flex">
            <a className="hover:text-ink/60" href="#opportunity">The Food Landscape</a>
            <a className="hover:text-ink/60" href="#challenge">The Challenge</a>
            <a className="hover:text-ink/60" href="#solution">The Solution</a>
            <a className="hover:text-ink/60" href="#brands">From Our Kitchen</a>
            <a className="hover:text-ink/60" href="#mentors">Mentors & Partners</a>
          </nav>
          <a
            href={APPLY_URL}
            onClick={handleApplyClick}
            className="hidden items-center gap-2 bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink lg:inline-flex"
          >
            Apply <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section id="program" className="relative bg-paper text-ink">
        <div className="mx-auto max-w-[1500px] px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 md:px-10 md:pb-20 md:pt-12">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-end sm:mb-6">
            <span className="meta uppercase tracking-[0.16em] text-ink/60">Cohort 01 · 2025</span>
          </div>

          {/* Hero image */}
          <div className="relative overflow-hidden border border-ink">
            <img
              src={heroDitya.url}
              alt="Ditya — founder at The Bowl Truth, a graduate of Masters' Union Food Lab"
              className="h-[220px] w-full object-cover object-center sm:h-[300px] md:h-[400px] lg:h-[520px]"
            />
          </div>

          {/* Headline + sub */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:gap-7 md:mt-10 md:grid-cols-12 md:gap-10">
            <h1 className="md:col-span-8 font-display text-[28px] font-extrabold leading-[0.96] tracking-[-0.035em] break-words sm:text-[40px] sm:leading-[0.92] md:text-[54px] lg:text-[68px]">
              For the Next Gen of Food Brands in India.
            </h1>
            <div className="md:col-span-4 self-end">
              <p className="text-[13.5px] leading-relaxed text-ink/70 sm:text-[14px]">
                Masters' Union Food Lab is an end-to-end incubator for new-age food brands in India. Kitchen, staff, compliance, supply chain, aggregator onboarding — handled. You bring the idea and the obsession.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={APPLY_URL}
                  onClick={handleApplyClick}
                  className="inline-flex items-center justify-center gap-2 bg-ink px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink"
                >
                  Apply now <span aria-hidden>→</span>
                </a>
                <Link
                  to="/program"
                  className="inline-flex items-center justify-center gap-2 border border-ink px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-paper"
                >
                  Explore the program
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============== THE FOOD LANDSCAPE ============== */}
      <section id="opportunity" className="border-b border-ink bg-paper text-ink">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20">
          <div className="border-b border-ink pb-5 sm:pb-6">
            <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
              The Opportunity
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 md:grid-cols-12 md:gap-10">
            <h2 className="md:col-span-7 font-display text-[28px] font-extrabold leading-[0.96] tracking-[-0.035em] break-words sm:text-[40px] sm:leading-[0.92] md:text-[48px] lg:text-[64px]">
              Indian food delivery is just scratching the
              <span className="ml-2 inline-block bg-green px-2 leading-none">surface.</span>
            </h2>
            <p className="md:col-span-5 self-end text-[14px] leading-relaxed text-ink/70 sm:text-[14.5px]">
              India's food economy is decades behind the West and China. The next decade belongs to whoever shows up first.
            </p>
          </div>

          {/* 4-column numbered breakdown */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:mt-12 md:grid-cols-4 md:gap-8">
            {[
              {
                n: "01",
                eyebrow: "Food Ordering Population",
                title: "India 4% vs 40–50%",
                body: "Only 4% of Indians order food online vs 40–50% in USA & China. 10× headroom in India alone.",
              },
              {
                n: "02",
                eyebrow: "Number of Restaurants",
                title: "8 L vs 1.2 Cr",
                body: "India has ~8 lakh restaurants vs China's 1.2 crore. China is 15× India's market today.",
              },
              {
                n: "03",
                eyebrow: "Consumer Power",
                title: "Rising disposable income",
                body: "Disposable income is climbing — Indians are eating in and ordering more, every quarter.",
              },
              {
                n: "04",
                eyebrow: "Aggregator Growth",
                title: "2× in next 5 years",
                body: "Swiggy + Zomato projected to double — and they need new sticky brands to fuel that growth.",
              },
            ].map((c) => (
              <div key={c.n} className="flex flex-col">
                <div className="font-display text-[44px] font-extrabold leading-none tracking-[-0.035em] text-ink/90">
                  {c.n}
                </div>
                <div className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink/55">
                  {c.eyebrow}
                </div>
                <h3 className="mt-2 font-display text-[20px] font-extrabold leading-[1.05] tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CHALLENGE ============== */}
      <section id="challenge" className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* LEFT — narrative + cost breakdown */}
            <div className="lg:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                The Challenge
              </span>
              <h2 className="mt-5 font-display text-[28px] font-extrabold leading-[0.96] tracking-[-0.035em] break-words sm:text-[40px] sm:leading-[0.9] md:text-[52px] lg:text-[64px]">
                Before you sell a single plate, the bill is already
                <span className="ml-2 inline-block bg-green px-2 leading-none text-ink">due.</span>
              </h2>
              <p className="mt-5 max-w-[58ch] text-[14px] leading-relaxed text-paper/75 sm:text-[15px]">
                For India's next generation of food brands, most founders never get to the cooking part. They get stuck paying for everything that comes <em>before</em> the cooking — and most great food ideas die right here.
              </p>
              {/* Challenge blocks */}
              <div className="mt-8">
                {/* 01–04 grid */}
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                  {/* 01 NO KITCHEN */}
                  <div className="border-t border-paper/15 py-5 sm:border-r sm:pr-6 sm:py-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">01</span>
                    <h3 className="mt-2 font-display text-[17px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-paper sm:text-[19px]">
                      No Kitchen
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-paper/65">
                      You can't test a food business from your home kitchen. Before your first trial, you need access to a commercial kitchen.
                    </p>
                  </div>
                  {/* 02 CULINARY SKILLS */}
                  <div className="border-t border-paper/15 py-5 sm:pl-6 sm:py-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">02</span>
                    <h3 className="mt-2 font-display text-[17px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-paper sm:text-[19px]">
                      Culinary Skills
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-paper/65">
                      Great food isn't built on guesswork. Either become the chef or find someone who already is.
                    </p>
                  </div>
                  {/* 03 NO EQUIPMENT */}
                  <div className="border-t border-paper/15 py-5 sm:border-r sm:border-t-0 sm:pr-6 sm:py-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">03</span>
                    <h3 className="mt-2 font-display text-[17px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-paper sm:text-[19px]">
                      No Equipment
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-paper/65">
                      If your product needs a deep fryer, oven, blast chiller, or dough mixer, you need the real thing. A home setup won't cut it.
                    </p>
                  </div>
                  {/* 04 COMPLIANCE MAZE */}
                  <div className="border-t border-paper/15 py-5 sm:border-t-0 sm:pl-6 sm:py-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">04</span>
                    <h3 className="mt-2 font-display text-[17px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-paper sm:text-[19px]">
                      Compliance Maze
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-paper/65">
                      FSSAI, GST, company registration, bank accounts, vendor onboarding. The paperwork starts long before the customers do.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT — editorial receipt */}
            <div className="lg:col-span-5 lg:pt-2">
              <Receipt />
            </div>
          </div>
        </div>
      </section>

      {/* ============== SOLUTION — PROGRAMME + PILLARS ============== */}
      <section
        id="solution"
        className="relative overflow-hidden border-b border-ink bg-paper text-ink"
        style={{
          backgroundImage: [
            "radial-gradient(60% 50% at 85% 0%, rgba(247, 213, 68, 0.55), transparent 70%)",
            "radial-gradient(50% 40% at 0% 100%, rgba(247, 213, 68, 0.35), transparent 65%)",
            "linear-gradient(to bottom, oklch(0.985 0.005 95), oklch(0.96 0.01 95))",
          ].join(", "),
        }}
      >
        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Abstract overlapping shapes watermark */}
        <svg
          aria-hidden
          viewBox="0 0 240 240"
          fill="none"
          className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] text-ink/[0.10] md:-right-12 md:-top-12 md:h-[300px] md:w-[300px]"
        >
          <rect x="20" y="20" width="140" height="140" stroke="currentColor" strokeWidth="1.5" />
          <rect x="60" y="60" width="140" height="140" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="160" cy="80" r="60" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="80" cy="160" r="40" fill="currentColor" opacity="0.5" />
          <path d="M30 200 Q120 100 210 200" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 40 L210 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>
        <div className="relative">
        <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          {/* Header row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                The Solution
              </span>
              <div className="mt-4 meta uppercase tracking-[0.16em] text-ink/55">
                Masters' Union Food Lab
              </div>
              <h2 className="mt-2 font-display text-[28px] font-extrabold leading-[0.95] tracking-[-0.035em] break-words sm:text-[36px] sm:leading-[0.92] md:text-[44px] lg:text-[52px]">
                That's where Masters' Union Food Lab comes in.
              </h2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-ink/75">
                Get access to everything you need to launch your food brand — kitchen, staff, compliance, supply chain, mentorship — handled.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3 md:items-start md:pt-2">
              <div className="meta uppercase tracking-[0.16em] text-ink/55">
                Everything you need · handled
              </div>
              <Link
                to="/program"
                className="inline-flex w-full items-center justify-center gap-2 bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink sm:w-auto sm:py-2.5"
              >
                See full program details <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Six essentials */}
          <div className="mt-6 grid grid-cols-1 gap-px bg-ink/15 sm:mt-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["01", "Fully equipped kitchen facility", solution01.url],
              ["02", "Culinary expert & professional kitchen staff", solution02.url],
              ["03", "Procurement & supply chain", solution03.url],
              ["04", "FSSAI licensing & compliance", solution04.url],
              ["05", "Aggregator onboarding (Zomato, Swiggy)", solution05.url],
              ["06", "Mentorship from food operators", solution06.url],
            ].map(([n, label, img]) => (
              <div key={n} className="relative flex flex-col bg-paper p-3 md:p-4">
                <div className="font-display text-[28px] font-extrabold leading-none tracking-[-0.03em] text-ink/90 md:text-[34px]">
                  {n}
                </div>
                <div className="-mt-4 flex flex-1 items-center justify-center md:-mt-5">
                  <img
                    src={img}
                    alt={label}
                    loading="lazy"
                    className="h-24 w-full object-contain mix-blend-multiply md:h-28"
                  />
                </div>
                <div className="mt-1 border-t border-ink/15 pt-2 text-[12.5px] font-semibold leading-snug">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </section>

      {/* ============== BRANDS ============== */}
      <section id="brands" className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          {/* Header */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <span className="inline-block bg-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                From our kitchen
              </span>
              <h2 className="mt-3 font-display text-[32px] font-extrabold leading-[0.95] tracking-[-0.035em] break-words sm:text-[38px] sm:leading-[0.9] md:text-[44px] lg:text-[52px]">
                Brands already
                <span className="ml-3 inline-block bg-green px-2 leading-none">cooking.</span>
              </h2>
            </div>
            <p className="md:col-span-4 self-end text-[13px] leading-relaxed text-ink/70">
              Built by MU students. Serving real customers. Growing every week.
            </p>
          </div>

          {/* Brand list */}
          <div className="mt-6 grid grid-cols-1 gap-px bg-ink/10 md:mt-8 md:grid-cols-2">
            <BrandCard
              tag="Delhi · Gurgaon"
              name="Lexi's Gourmet Sandwiches"
              tagline="Gurgaon's highest-rated gourmet sandwich brand"
              body="What started as a passion for bold, indulgent sandwiches became Gurgaon's top-rated gourmet sandwich brand. Cult favorites: truffle mushroom ciabattas and crispy katsu sandos. Now expanding to Delhi."
              img="https://customer-assets.emergentagent.com/job_food-venture-5/artifacts/y11vvcni_Lexi%27s%20Gourmet%20Sandwiches.png"
              team={brandLexis}
              follow="https://www.instagram.com/lexis_sandos/?hl=en"
            />
            <BrandCard
              tag="Lajpat Nagar · Delhi"
              name="Woody's Pizzeria"
              tagline="Neapolitan-inspired, made for the Indian palate"
              body="Kanav started baking pizzas in 2011. After years perfecting Neapolitan recipes, he launched Woody's — now live in Lajpat Nagar. Customers keep calling it the best pizza they've ever had."
              img={woodysLogo}
              team={brandWoodys}
              follow="https://www.instagram.com/woodyspizzeria/?hl=en"
            />
          </div>
        </div>
      </section>

      {/* ============== MENTORS ============== */}
      <section id="mentors" className="border-b border-ink">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <div className="meta uppercase tracking-[0.18em] text-ink/60">Mentors & partners</div>
              <h2 className="mt-4 font-display text-[28px] font-extrabold leading-[0.96] tracking-[-0.035em] break-words sm:text-[40px] sm:leading-[0.9] md:text-[52px] lg:text-[72px]">
                Learn from operators who built businesses
                <span className="ml-2 inline-block bg-green px-2 leading-none">from zero.</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 self-end">
              <div className="meta uppercase tracking-[0.14em] text-ink/60">Aggregator partners</div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex h-10 items-center gap-2 border border-ink bg-paper px-3">
                  <img
                    src="https://cdn.simpleicons.org/zomato/E23744"
                    alt="Zomato"
                    className="h-4 w-auto"
                    loading="lazy"
                  />
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em]">Zomato</span>
                </span>
                <span className="inline-flex h-10 items-center gap-2 border border-ink bg-paper px-3">
                  <img
                    src="https://cdn.simpleicons.org/swiggy/FC8019"
                    alt="Swiggy"
                    className="h-4 w-auto"
                    loading="lazy"
                  />
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em]">Swiggy</span>
                </span>
              </div>
            </div>
          </div>

          {(() => {
            const mentors = [
              { name: "Ankit Tiwari", role: "Ex Leela, Oberoi, Salad Days", img: mentorAnkit.url },
              { name: "Abhijeet Joshi", role: "AVP · Zomato", img: mentorAbhijeet },
              { name: "Anshul Aggarwal", role: "Customer Retention · Nando's", img: mentorAnshul },
              { name: "Kabir Chugh", role: "Serial Food Entrepreneur & Creator", img: mentorKabir },
              { name: "Alex Francis", role: "Co-founder · Lexi's Gourmet Sandwiches", img: mentorAlex, imgPosition: "center 15%" },
              { name: "Swarup Potta", role: "Ex ISRO, Urban Company · IIT Madras", img: mentorSwarup, imgPosition: "center 20%" },
              { name: "Anshu Mehta", role: "Finance · CFA Charterholder · Ex-Futures First", img: mentorAnshu },
              { name: "Sumit Vijapure", role: "EIR · Masters' Union", img: mentorSumit },
              { name: "Saksham Kotiya", role: "Head of Entrepreneurship & Investments · Masters' Union", img: mentorSaksham },
              { name: "Naveen Balaji", role: "6 years at Zomato", img: mentorNaveen, imgPosition: "center 20%" },
            ];
            return (
              <div className="mt-8 -mx-4 overflow-hidden sm:-mx-6 md:-mx-10 md:mt-12 group">
                <div className="flex w-max gap-4 sm:gap-6 md:gap-8 animate-mentor-marquee group-hover:[animation-play-state:paused]">
                  {[...mentors, ...mentors].map((m, i) => (
                    <div key={i} className="w-[140px] shrink-0 sm:w-[180px] md:w-[220px]" aria-hidden={i >= mentors.length ? true : undefined}>
                      <MentorCircle n={String((i % mentors.length) + 1).padStart(2, "0")} name={m.name} role={m.role} img={m.img} imgPosition={m.imgPosition} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ============== NOT JUST CLOUD KITCHENS ============== */}
      <section id="scope" className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                Not just cloud kitchens
              </span>
              <h2 className="mt-5 font-display text-[28px] font-extrabold leading-[0.96] tracking-[-0.035em] break-words sm:text-[40px] sm:leading-[0.9] md:text-[52px] lg:text-[72px]">
                Think bigger. We're building for
                <span className="ml-2 inline-block bg-green px-2 leading-none text-ink">all of food.</span>
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-[14px] leading-relaxed text-paper/75 sm:text-[14.5px]">
              Cloud kitchens are where we start — but Food Lab is designed to incubate any food &amp; beverage brand. Packaged snacks, beverages, health foods, ready-to-eat, condiments — if it's food and it can scale, we want to hear about it.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-paper/15 md:mt-14 md:grid-cols-5">
            {[
              ["01", "Cloud Kitchens", true],
              ["02", "D2C Food Brands", false],
              ["03", "Beverages", false],
              ["04", "Restaurants", false],
              ["05", "Food Tech", false],
            ].map(([n, label, live]) => (
              <div key={n as string} className="relative flex flex-col justify-between bg-ink p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div className={`text-[10.5px] font-mono uppercase tracking-[0.16em] ${live ? "text-paper/55" : "text-paper/30"}`}>{n}</div>
                  {live ? (
                    <span className="inline-flex items-center gap-1.5 bg-green px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" /> Live
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-paper/40">Soon</span>
                  )}
                </div>
                <div className={`mt-8 font-display text-[20px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[24px] ${live ? "text-paper" : "text-paper/35"}`}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={APPLY_URL}
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center gap-2 bg-green px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-paper"
            >
              Register your interest <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============== APPLY POSTER ============== */}
      <section id="apply" className="border-b border-ink">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden bg-ink sm:aspect-[4/3] md:aspect-auto">
            <img src={admissionsOpen.url} alt="Founder at a working kitchen" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-paper px-2 py-1 meta uppercase tracking-[0.14em] sm:left-6 sm:top-6">
              <span className="size-1.5 rounded-full bg-green" /> Admissions open
            </div>
            <div className="absolute bottom-4 right-4 meta uppercase tracking-[0.14em] text-paper sm:bottom-6 sm:right-6">{WORDMARK}</div>
          </div>
          <div className="bg-green p-5 sm:p-8 md:p-12 lg:p-14">
            <h2 className="font-display text-[36px] font-extrabold leading-[0.92] tracking-[-0.04em] break-words sm:text-[52px] sm:leading-[0.86] md:text-[64px] lg:text-[110px]">
              Build your<br/>food brand.
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed sm:text-[15px]">
              Gurugram. Real kitchens. Real customers. Real founders.
            </p>
            <a href={APPLY_URL} onClick={handleApplyClick} className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-paper hover:text-ink sm:mt-8 sm:w-auto">
              Start application <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 border-b border-ink pb-10 sm:gap-10 md:grid-cols-4 md:pb-12">
          <div className="meta uppercase tracking-[0.14em]">
            Cohort 01<br/>2025 — 2026
            <div className="mt-2 text-ink/60">Apply by 31 October</div>
          </div>
          <address className="not-italic text-[14px] leading-relaxed">
            <div className="font-semibold">Masters' Union Food Lab</div>
            Sector 67, Gurugram<br/>Haryana 122102, India<br/>
            <a href="mailto:foodlab@mastersunion.org" className="underline-link break-all">foodlab@mastersunion.org</a>
          </address>
          <form onSubmit={(e) => e.preventDefault()} className="text-[14px] md:col-span-2">
            <label className="font-semibold">Subscribe to the kitchen brief</label>
            <div className="mt-3 flex items-center gap-2 border-b border-ink pb-2">
              <input type="email" placeholder="Email" className="min-w-0 flex-1 bg-transparent text-[14px] placeholder:text-ink/50 focus:outline-none" />
              <button className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em]">Subscribe ›</button>
            </div>
          </form>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 sm:mt-10 sm:gap-6">
          <span className="font-display text-[14vw] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[110px] lg:text-[180px]">{WORDMARK}</span>
          <div className="flex flex-col items-end gap-2 sm:gap-3">
            <img src={muLogo} alt="Masters' Union" className="h-7 w-auto sm:h-8 md:h-10" />
            <span className="meta uppercase tracking-[0.14em] text-ink/60">© Masters' Union {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* unused import warden */}
      {false && <img src={essential08} alt="" onLoad={() => void [essential01, essential02, essential03, essential05, essential07, heroFounder, PillarPoster]} />}

      {/* Mobile / tablet sticky nav */}
      <MobileNav />
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

function MentorCircle({ n, name, role, img, imgPosition }: { n: string; name: string; role: string; img?: string; imgPosition?: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-full border border-ink/20 bg-ink/5">
        {img ? (
          <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: imgPosition ?? "center" }} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[28px] font-extrabold tracking-[-0.02em] text-ink/30">
              M.{n}
            </span>
          </div>
        )}
        <span className="absolute right-3 top-3 text-[10px] text-green">●</span>
      </div>
      <div className="mt-4 font-display text-[15px] font-extrabold leading-tight tracking-[-0.01em] text-ink">
        {name}
      </div>
      <div className="mt-1 meta uppercase tracking-[0.14em] text-ink/55">
        {role}
      </div>
    </div>
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

function CostTile({ n, label, amount, sub }: { n: string; label: string; amount: string; sub: string }) {
  return (
    <div className="flex flex-col justify-between bg-ink p-5 md:p-6">
      <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.16em] text-paper/55">
        <span>{n}</span>
        <span>Cost</span>
      </div>
      <div className="mt-8 font-display text-[40px] font-extrabold leading-none tracking-[-0.02em] md:text-[52px]">
        {amount}
      </div>
      <div className="mt-4 border-t border-paper/15 pt-3">
        <div className="text-[13px] font-semibold leading-tight text-paper">{label}</div>
        <div className="mt-1 text-[11.5px] leading-snug text-paper/55">{sub}</div>
      </div>
    </div>
  );
}

function Receipt() {
  const items: [string, string, string][] = [
    ["01", "Kitchen rent + setup", "₹6,00,000"],
    ["02", "R&D + chef consultant", "₹3,00,000"],
    ["03", "Compliance + onboarding", "₹1,50,000+"],
    ["04", "Working capital", "₹6,00,000"],
  ];
  const dots = ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      whileHover={{ rotate: 0, y: -4 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-[520px]"
      style={{ transformOrigin: "top center" }}
    >
      {/* Drop shadow / paper stack */}
      <div className="absolute inset-0 translate-x-2 translate-y-3 bg-paper/10" aria-hidden />
      <div className="absolute inset-0 translate-x-1 translate-y-1.5 bg-paper/20" aria-hidden />

      {/* Receipt paper */}
      <div
        className="relative bg-paper text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.018) 0px, rgba(0,0,0,0.018) 1px, transparent 1px, transparent 3px)",
        }}
      >
        {/* Top perforation */}
        <div
          className="h-3 w-full bg-ink"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle 5px at 10px 0, transparent 98%, black 100%)",
            WebkitMaskSize: "20px 12px",
            WebkitMaskRepeat: "repeat-x",
            maskImage:
              "radial-gradient(circle 5px at 10px 0, transparent 98%, black 100%)",
            maskSize: "20px 12px",
            maskRepeat: "repeat-x",
            backgroundColor: "var(--paper)",
          }}
          aria-hidden
        />

        <div className="px-5 pt-6 pb-7 font-mono text-[11.5px] leading-relaxed text-ink/90 sm:px-9 sm:pt-7 sm:pb-8 sm:text-[13px]">
          {/* Header */}
          <div className="text-center">
            <div className="font-bold uppercase tracking-[0.22em] text-ink">Without Masters' Union Food Lab</div>
            <div className="mt-1.5 uppercase tracking-[0.16em] text-ink/70">Pre-Launch Bill · Founder Edition</div>
            <div className="mt-1 uppercase tracking-[0.14em] text-ink/55">Invoice #0001 · Day 0 of 60</div>
          </div>

          <Dashed />

          {/* Line items + UNPAID stamp */}
          <div className="relative">
            {items.map(([n, label, amount], i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.45 }}
                className="flex items-baseline gap-3 py-1.5"
              >
                <span className="w-6 shrink-0 text-ink/55">{n}</span>
                <span className="shrink-0 text-ink">{label}</span>
                <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/30">{dots}</span>
                <span className="shrink-0 font-semibold text-ink">{amount}</span>
              </motion.div>
            ))}

            {/* UNPAID stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 1.4, rotate: -25 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute -top-2 right-2 select-none border-[2.5px] border-red-600 px-3 py-1 font-mono text-[15px] font-extrabold uppercase tracking-[0.22em] text-red-600 sm:right-6"
              style={{ opacity: 0.85, mixBlendMode: "multiply" }}
            >
              Unpaid
            </motion.div>
          </div>

          <Dashed />

          {/* Subtotal */}
          <div className="flex items-baseline gap-3 py-1">
            <span className="shrink-0 uppercase tracking-[0.16em] text-ink/70">Subtotal</span>
            <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/30">{dots}</span>
            <span className="shrink-0 font-semibold text-ink">₹15,00,000</span>
          </div>

          {/* Hidden costs */}
          <div className="mt-4 text-ink/70">+ Hidden costs</div>
          <div className="mt-1 flex items-baseline gap-3 py-1">
            <span className="shrink-0 text-ink">Your time</span>
            <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/30">{dots}</span>
            <span className="shrink-0 font-semibold text-ink">~60 days</span>
          </div>
          <div className="flex items-baseline gap-3 py-1">
            <span className="shrink-0 text-ink">Luck required</span>
            <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/30">{dots}</span>
            <span className="shrink-0 font-semibold text-ink">★★★★★</span>
          </div>
        </div>

        {/* TOTAL DUE — dark block */}
        <div className="bg-ink px-5 py-4 text-paper sm:px-9 sm:py-5">
          <div className="flex items-end justify-between gap-3">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-green">
              Total Due
            </div>
            <div className="font-display text-[36px] font-extrabold leading-none tracking-[-0.03em] text-green sm:text-[56px]">
              ₹15L+
            </div>
          </div>
          <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/55">
            Before a single customer order
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pt-4 pb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/70 sm:px-9 sm:pt-5 sm:text-[11.5px]">
          <div className="flex items-baseline gap-3 py-1">
            <span className="shrink-0">Paid by</span>
            <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/25">{dots}</span>
            <span className="shrink-0 font-semibold text-ink">You</span>
          </div>
          <div className="flex items-baseline gap-3 py-1">
            <span className="shrink-0">Customers served</span>
            <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/25">{dots}</span>
            <span className="shrink-0 font-semibold text-ink">0</span>
          </div>
          <div className="flex items-baseline gap-3 py-1">
            <span className="shrink-0">Status</span>
            <span className="min-w-0 flex-1 overflow-hidden truncate text-ink/25">{dots}</span>
            <span className="shrink-0 font-bold text-red-600">Unpaid</span>
          </div>
          <div className="mt-3 pb-1 text-center text-[10.5px] tracking-[0.18em] text-ink/45">
            ~ Thank you for playing ~
          </div>
        </div>

        {/* Bottom perforated zig-zag edge */}
        <div
          className="h-3 w-full bg-ink"
          style={{
            WebkitMaskImage:
              "linear-gradient(135deg, var(--paper) 25%, transparent 25%), linear-gradient(225deg, var(--paper) 25%, transparent 25%)",
            WebkitMaskSize: "14px 14px",
            WebkitMaskPosition: "0 0, 7px 0",
            maskImage:
              "linear-gradient(135deg, var(--paper) 25%, transparent 25%), linear-gradient(225deg, var(--paper) 25%, transparent 25%)",
            maskSize: "14px 14px",
            maskPosition: "0 0, 7px 0",
            backgroundColor: "var(--paper)",
          }}
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

function Dashed() {
  return (
    <div
      className="my-3 h-px w-full"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 50%, transparent 0)",
        backgroundSize: "6px 1px",
        backgroundRepeat: "repeat-x",
        color: "rgba(0,0,0,0.35)",
      }}
      aria-hidden
    />
  );
}


function BrandCard({
  tag, name, tagline, body, img, team, follow,
}: {
  tag: string; name: string; tagline: string; body: string; img: string; team: string; follow: string;
}) {
  const [firstWord, ...restWords] = name.split(" ");
  const rest = restWords.join(" ");

  return (
    <article className="group relative flex flex-col bg-paper p-5 text-ink md:p-6">
      {/* Top meta row */}
      <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
        <span>{tag}</span>
        <span className="inline-flex items-center gap-1.5 text-ink">
          <span className="size-1.5 rounded-full bg-green" /> Live
        </span>
      </div>

      {/* Team photo */}
      <div className="relative mt-3 aspect-[16/7] w-full overflow-hidden bg-ink">
        <img
          src={team}
          alt={`${name} team`}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 45%, #000 55%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 45%, #000 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Logo + headline */}
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-20 shrink-0 items-center justify-center bg-[oklch(0.97_0.01_95)] p-2">
          <img
            src={img}
            alt={`${name} logo`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="font-display text-[22px] font-extrabold leading-[0.92] tracking-[-0.03em] md:text-[26px]">
          <span className="font-display italic">{firstWord}</span>{" "}
          {rest && (
            <span className="bg-green px-1.5 leading-none text-ink">{rest}</span>
          )}
        </h3>
      </div>

      {/* Tagline + body */}
      <p className="mt-3 text-[12.5px] font-semibold italic text-ink/80">{tagline}</p>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/70">{body}</p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.16em]">
        <a href={follow} target="_blank" rel="noreferrer" className="underline-link">
          Instagram →
        </a>
        <span className="text-ink/50">On Zomato</span>
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
