import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import MobileNav from "@/components/MobileNav";

import essential01 from "@/assets/essential-01-kitchen.webp";
import essential02 from "@/assets/essential-02-staff.webp";
import essential03 from "@/assets/essential-03-consultant.webp";
import essential04 from "@/assets/essential-04-fssai.webp";
import essential05 from "@/assets/essential-05-supply.webp";
import essential06 from "@/assets/essential-06-aggregator.webp";
import essential07 from "@/assets/essential-07-mentor.webp";
import essential08 from "@/assets/essential-08-tasting.webp";
import heroChef from "@/assets/hero-chef.webp";
import muLogo from "@/assets/masters-union-logo.svg";

const APPLY_URL = "https://tally.so/r/441zRr";
const WORDMARK = "FOODLAB\u00AE";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "The Program — FOODLAB · Masters' Union Food Lab" },
      {
        name: "description",
        content:
          "YC for food brands in India. A stage-gated incubator: Intent → Design → Proof → Profit → Scale. Kitchen, compliance, supply chain, aggregator onboarding and mentorship — handled.",
      },
      { property: "og:title", content: "The Program — FOODLAB" },
      {
        property: "og:description",
        content:
          "A stage-gated incubator for India's next food brands. From idea on paper to a live, profitable brand on Zomato & Swiggy.",
      },
    ],
  }),
  component: ProgramPage,
});

function ProgramPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink pb-16 lg:pb-0">
      {/* ============== TOP NAV ============== */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 border-b border-ink px-4 py-3 sm:px-6 sm:py-4 md:px-10">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={muLogo} alt="Masters' Union" className="h-8 w-auto sm:h-10 md:h-12" />
            <span className="hidden h-7 w-px bg-ink/20 sm:inline-block" aria-hidden />
            <span className="hidden font-display text-[13px] font-extrabold tracking-[-0.02em] sm:inline sm:text-[15px]">
              {WORDMARK}
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.14em] lg:flex">
            <Link to="/" className="hover:text-ink/60">
              Home
            </Link>
            <a className="text-ink underline-offset-4 underline" href="#timeline">
              Timeline
            </a>
            <a className="hover:text-ink/60" href="#pillars">
              Pillars
            </a>
            <a className="hover:text-ink/60" href="#expect">
              Expectations
            </a>
            <a className="hover:text-ink/60" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href={APPLY_URL}
            className="hidden items-center gap-2 bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink lg:inline-flex"
          >
            Apply <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section className="relative bg-paper text-ink">
        <div className="mx-auto max-w-[1500px] px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:px-10 md:pb-24 md:pt-14">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="meta uppercase tracking-[0.16em] text-ink/60 hover:text-ink"
            >
              ← Back to home
            </Link>
            <span className="meta uppercase tracking-[0.16em] text-ink/60">
              Cohort 01 · 2025–2026
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                The Program
              </span>
              <h1 className="mt-6 font-display text-[36px] font-extrabold leading-[0.95] tracking-[-0.035em] break-words sm:text-[44px] sm:leading-[0.9] md:text-[60px] lg:text-[88px]">
                YC for food brands
                <span className="ml-3 inline-block bg-green px-2 leading-none">in India.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/75">
                What AI does for software engineering, we do that for starting a cloud kitchen. Masters' Union Food Lab is an end-to-end incubator for new-age food brands in India. Kitchen, staff, compliance, supply chain, aggregator onboarding — handled. You bring the idea and the obsession.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative overflow-hidden border border-ink">
                <img
                  src={heroChef}
                  alt="Founder in a working kitchen"
                  className="h-[220px] w-full object-cover sm:h-[260px] md:h-[340px]"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-px bg-ink/15 text-center">
                <Stat n="05" label="Stages" />
                <Stat n="08" label="Essentials" />
                <Stat n="5%" label="Equity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STAGE-GATED OVERVIEW ============== */}
      <section className="border-y border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                How it works
              </span>
              <h2 className="mt-5 font-display text-[30px] font-extrabold leading-[1.0] tracking-[-0.03em] break-words sm:text-[36px] sm:leading-[0.95] md:text-[44px] lg:text-[56px]">
                A stage-gated program. Earn your way forward.
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-[14px] leading-relaxed text-paper/70">
              Once your idea gets shortlisted, you enter a stage-gated program. Each stage has clear targets and evaluation criteria. Only selected brands move forward at every stage. Speed, seriousness and quality &gt;&gt;&gt;
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-paper/15 sm:grid-cols-3 md:mt-14 md:grid-cols-5">
            {[
              ["01", "Intent"],
              ["02", "Design"],
              ["03", "Proof"],
              ["04", "Profit"],
              ["05", "Scale"],
            ].map(([n, label]) => (
              <div key={n} className="flex flex-col justify-between bg-ink p-5 md:p-6">
                <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-paper/55">{n}</div>
                <div className="mt-10 font-display text-[22px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[28px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== STAGES — DETAILED ============== */}
      <section id="timeline" className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                The Stages
              </span>
              <h2 className="mt-6 font-display text-[34px] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-[40px] sm:leading-[0.9] md:text-[68px]">
                From paper to a
                <span className="ml-3 inline-block bg-green px-2 leading-none">100Cr business.</span>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-[14.5px] leading-relaxed text-ink/70">
              Five stages. Pivots welcome. Only the brands ready for the next stage move forward.
            </p>
          </div>

          <div id="pillars" className="mt-12 flex flex-col gap-px bg-ink/15 md:mt-16">
            <Stage
              n="01"
              img={essential01}
              title="Fun-da-mentals!"
              tagline="Thinking clearly before cooking anything."
              body="This stage is about getting everything right on paper before touching the kitchen."
              provides={["1:1 access to mentors to develop your concept on paper", "Workshops & sessions", "Visits to live cloud kitchens"]}
              workOn={["Competitive analysis", "Brand definition (name, product, pricing)", "Ideal customer persona", "Unit economics and projected P&L", "12-month operating plan", "Go-to-market plan for first 100 customers"]}
              assignment="Food Lab Stage 1 [Brand Name]"
              tested="Clarity · Seriousness · Feasibility"
            />
            <Stage
              n="02"
              img={essential02}
              title="Pre-PMF"
              tagline="Kitchen access + paid trials."
              body="You move from paper into the kitchen. Real customers, real feedback, fast iteration."
              provides={["Kitchen space", "Equipment", "Staff", "Approved supply chain"]}
              workOn={["Conduct a target number of paid customer trials", "Document everything in the Customer Feedback Tracker", "Track and report inventory", "Periodic blind tastings vs submitted customer feedback"]}
              assignment="Food Lab Stage 2 Paid Trials Feedback Sheet [Brand Name]"
              tested="Speed of execution · Listening to feedback · Willingness to iterate · Operational discipline"
            />
            <Stage
              n="03"
              img={essential06}
              title="Demo Day"
              tagline="Earn your boarding pass to Zomato & Swiggy."
              body="Brands pitch to MU leadership, food entrepreneurs and VCs. Core question: ‘Why should this brand go live on Swiggy/Zomato?’"
              provides={["Pitch stage with food entrepreneurs, VCs and MU Food Lab leadership", "Selection driven by trial performance, feedback quality, product consistency and founder execution"]}
              workOn={["Submit FSSAI, PAN, GST, cancelled cheque", "Submit full menu with food shots", "Selected brands move to Launch", "Others get 30 days to iterate; pivots actively supported", "Brands deemed unfit may be phased out"]}
              assignment="Demo Day Pitch + Compliance Pack [Brand Name]"
              tested="Product consistency · Founder execution · Customer signal"
            />
            <Stage
              n="04"
              img={essential05}
              title="Road to PMF"
              tagline="Building a real business."
              body="You work on reaching PMF — positive operating margins for 3 consecutive months."
              provides={["Live aggregator presence on Zomato & Swiggy", "Operator mentorship on growth & margins", "Weekly performance reviews"]}
              workOn={["Acquiring 1st, 10th, 100th customer", "Building in public through content", "Iterating on product", "Improving ratings and repeat rate", "Launching new products", "Tightening operations and margins"]}
              assignment="Food Lab Stage 4 [Brand Name]"
              tested="Repeat rate · Ratings · Operating margin · Content & brand"
            />
            <Stage
              n="05"
              img={essential07}
              title="Graduate"
              tagline="Exit the lab. Keep cooking."
              body="Graduated brands exit Food Lab and continue independently — with paying customers and operational muscle."
              provides={["A proven product", "Paying customers", "Operational muscle", "A brand ready to scale", "Access to funding"]}
              workOn={["Masters' Union Food Lab reserves the right to take 5% equity in your business", "We continue to be part of your journey scaling to a ₹100Cr+ business"]}
              assignment="Graduation review & cap-table update"
              tested="Readiness to scale independently"
            />
          </div>
        </div>
      </section>

      {/* ============== WHAT WE EXPECT ============== */}
      <section id="expect" className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                What we expect
              </span>
              <h2 className="mt-6 font-display text-[34px] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-[40px] sm:leading-[0.9] md:text-[68px]">
                You bring the
                <span className="ml-3 inline-block bg-green px-2 leading-none">obsession.</span>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-[14.5px] leading-relaxed text-ink/70">
              Founders who finish the program have one thing in common — they were in the
              kitchen, every week, for sixty days.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-ink/15 md:grid-cols-3">
            <Expect
              n="01"
              title="Full-time founders only"
              body="The 60-day arc is intense. Side-projects don't survive it."
            />
            <Expect
              n="02"
              title="In Delhi NCR for the cohort"
              body="The kitchen is in Sector 67, Gurugram. You'll be on the floor most weeks."
            />
            <Expect
              n="03"
              title="Open to feedback"
              body="Tastings are public. Numbers are reviewed weekly. Iteration is the job."
            />
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="faq" className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                FAQ
              </span>
              <h2 className="mt-6 font-display text-[30px] font-extrabold leading-[1.0] tracking-[-0.03em] sm:text-[36px] sm:leading-[0.95] md:text-[56px]">
                Quick answers, no fluff.
              </h2>
            </div>
            <div className="md:col-span-7">
              <Faq
                q="Who is FOODLAB for?"
                a="Aspiring food founders with a clear menu idea, an obsession for execution, and the bandwidth to commit full-time to a 60-day sprint."
              />
              <Faq
                q="Do I need prior restaurant experience?"
                a="No. Many of our founders are first-timers. We provide the kitchen, chefs, compliance and aggregator wiring; you provide the brand and obsession."
              />
              <Faq
                q="What does it cost?"
                a="Cohort fees are shared after the application review. The math compares favourably to the ₹15L+ pre-launch cost most founders pay solo."
              />
              <Faq
                q="What happens after Day 60?"
                a="You exit with a live brand on Zomato & Swiggy, a working kitchen relationship, and a growth playbook. Ongoing support is available via the alumni track."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h2 className="font-display text-[34px] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-[40px] sm:leading-[0.9] md:text-[80px]">
                Ready to cook your
                <span className="ml-3 inline-block bg-green px-2 leading-none">first plate?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[14.5px] leading-relaxed text-ink/70">
                Cohort 01 closes 31 October. We review applications on a rolling basis.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-stretch justify-end gap-4 md:items-start">
              <a
                href={APPLY_URL}
                className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink"
              >
                Apply to cohort 01 <span aria-hidden>→</span>
              </a>
              <Link
                to="/"
                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/60 hover:text-ink"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <span className="font-display text-[14vw] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[180px]">
            {WORDMARK}
          </span>
          <div className="flex flex-col items-end gap-3">
            <img src={muLogo} alt="Masters' Union" className="h-8 w-auto md:h-10" />
            <span className="meta uppercase tracking-[0.14em] text-ink/60">
              © Masters' Union {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>

      {/* unused import warden */}
      {false && (
        <>
          <img src={essential03} alt="" />
          <img src={essential04} alt="" />
          <img src={essential08} alt="" />
          <IncludedTile n="00" label="" />
          <Phase days="" phase="" title="" points={[]} />
          <PillarRow n="" img={essential03} title="" body="" points={[]} />
        </>
      )}

      {/* Mobile / tablet sticky nav */}
      <MobileNav />
    </div>
  );
}

/* ===================== PRIMITIVES ===================== */

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-paper px-3 py-4">
      <div className="font-display text-[28px] font-extrabold leading-none tracking-[-0.02em] md:text-[36px]">
        {n}
      </div>
      <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/55">
        {label}
      </div>
    </div>
  );
}

function IncludedTile({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col justify-between bg-ink p-5 md:p-6">
      <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-paper/55">
        {n}
      </div>
      <div className="mt-10 font-display text-[20px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[24px]">
        {label}
      </div>
    </div>
  );
}

function Phase({
  days,
  phase,
  title,
  points,
}: {
  days: string;
  phase: string;
  title: string;
  points: string[];
}) {
  return (
    <div className="flex flex-col bg-paper p-5 md:p-6">
      <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-ink/55">
        {days}
      </div>
      <div className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
        {phase}
      </div>
      <h3 className="mt-5 font-display text-[22px] font-extrabold leading-[1.0] tracking-[-0.02em] md:text-[26px]">
        {title}
      </h3>
      <ul className="mt-5 space-y-2 border-t border-ink/15 pt-4 text-[12.5px] leading-relaxed text-ink/70">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-green" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarRow({
  n,
  img,
  title,
  body,
  points,
}: {
  n: string;
  img: string;
  title: string;
  body: string;
  points: string[];
}) {
  return (
    <article className="grid grid-cols-1 gap-5 bg-paper md:grid-cols-5 md:gap-6">
      <div className="relative aspect-[4/3] overflow-hidden border border-ink md:col-span-2 md:aspect-auto">
        <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute left-3 top-3 bg-green px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
          {n}
        </span>
      </div>
      <div className="md:col-span-3">
        <h3 className="font-display text-[26px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[32px]">
          {title}
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink/70">{body}</p>
        <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-ink/15 pt-4 text-[12.5px] leading-relaxed text-ink/75">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-green" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Expect({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex flex-col bg-paper p-5 md:p-6">
      <div className="font-display text-[44px] font-extrabold leading-none tracking-[-0.035em] text-ink/90">
        {n}
      </div>
      <h3 className="mt-5 font-display text-[20px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[24px]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-ink/70">{body}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-t border-paper/20 py-5 first:border-t-0">
      <summary className="flex cursor-pointer items-center justify-between gap-6 text-[15px] font-semibold tracking-[-0.01em] text-paper md:text-[18px]">
        {q}
        <span
          aria-hidden
          className="inline-grid size-7 shrink-0 place-items-center border border-paper/30 text-[14px] transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-paper/70">{a}</p>
    </details>
  );
}

function Stage({
  n,
  img,
  title,
  tagline,
  body,
  provides,
  workOn,
  assignment,
  tested,
}: {
  n: string;
  img: string;
  title: string;
  tagline: string;
  body: string;
  provides: string[];
  workOn: string[];
  assignment: string;
  tested: string;
}) {
  return (
    <article className="grid grid-cols-1 gap-6 bg-paper p-5 md:grid-cols-12 md:gap-8 md:p-8">
      <div className="md:col-span-4">
        <div className="relative aspect-[4/3] overflow-hidden border border-ink">
          <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute left-3 top-3 bg-green px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
            Stage {n}
          </span>
        </div>
        <div className="mt-4 text-[10.5px] font-mono uppercase tracking-[0.16em] text-ink/55">
          Tested on
        </div>
        <div className="mt-1 text-[12.5px] leading-snug text-ink/75">{tested}</div>
      </div>

      <div className="md:col-span-8">
        <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/55">
          Stage {n}
        </div>
        <h3 className="mt-2 font-display text-[26px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[36px]">
          {title}
        </h3>
        <p className="mt-2 text-[13.5px] font-semibold italic text-ink/80">{tagline}</p>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink/70">{body}</p>

        <div className="mt-6 grid grid-cols-1 gap-6 border-t border-ink/15 pt-5 md:grid-cols-2">
          <div>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
              What MU provides
            </div>
            <ul className="mt-3 space-y-1.5 text-[12.5px] leading-relaxed text-ink/75">
              {provides.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-green" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
              You work on
            </div>
            <ul className="mt-3 space-y-1.5 text-[12.5px] leading-relaxed text-ink/75">
              {workOn.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-green" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 inline-flex max-w-full items-center gap-2 border border-ink bg-ink px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-paper">
          <span className="text-green">●</span>
          <span className="truncate">Assignment — {assignment}</span>
        </div>
      </div>
    </article>
  );
}

// silence unused import warning
void (null as ReactNode);
