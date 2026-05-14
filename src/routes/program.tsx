import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import essential01 from "@/assets/essential-01-kitchen.jpg";
import essential02 from "@/assets/essential-02-staff.jpg";
import essential03 from "@/assets/essential-03-consultant.jpg";
import essential04 from "@/assets/essential-04-fssai.jpg";
import essential05 from "@/assets/essential-05-supply.jpg";
import essential06 from "@/assets/essential-06-aggregator.jpg";
import essential07 from "@/assets/essential-07-mentor.jpg";
import essential08 from "@/assets/essential-08-tasting.jpg";
import heroChef from "@/assets/hero-chef.jpg";
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
          "The 60-day FOODLAB program: kitchen, compliance, supply chain, aggregator onboarding, mentorship and structured tastings — end-to-end incubation for India's next food brands.",
      },
      { property: "og:title", content: "The Program — FOODLAB" },
      {
        property: "og:description",
        content:
          "60 days. 4 pillars. From day 0 to a live brand on Zomato & Swiggy.",
      },
    ],
  }),
  component: ProgramPage,
});

function ProgramPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ============== TOP NAV ============== */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-ink px-6 py-4 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={muLogo} alt="Masters' Union" className="h-10 w-auto md:h-12" />
            <span className="h-7 w-px bg-ink/20" aria-hidden />
            <span className="font-display text-[15px] font-extrabold tracking-[-0.02em]">
              {WORDMARK}
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.14em] md:flex">
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
            className="inline-flex items-center gap-2 bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink"
          >
            Apply <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section className="relative bg-paper text-ink">
        <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
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
              <h1 className="mt-6 font-display text-[44px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[88px]">
                Sixty days. One
                <span className="ml-3 inline-block bg-green px-2 leading-none">live brand.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/75">
                A founder-first incubator that compresses two years of food-business
                paperwork, kitchen hunting, hiring and aggregator chasing into a single
                60-day sprint — so you can spend your obsession on what matters: the food
                and the brand.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative overflow-hidden border border-ink">
                <img
                  src={heroChef}
                  alt="Founder in a working kitchen"
                  className="h-[260px] w-full object-cover md:h-[340px]"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-px bg-ink/15 text-center">
                <Stat n="60" label="Days" />
                <Stat n="04" label="Pillars" />
                <Stat n="2×" label="Aggregators" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHAT'S INCLUDED — at a glance ============== */}
      <section className="border-y border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                What's included
              </span>
              <h2 className="mt-5 font-display text-[32px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[52px]">
                A full operating stack — pre-built.
              </h2>
            </div>
            <p className="max-w-md text-[14px] leading-relaxed text-paper/70">
              Skip the ₹15L+ pre-launch bill. Plug into a kitchen, a compliance team,
              vetted vendors and a live route to customers from week one.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-paper/15 md:grid-cols-4">
            <IncludedTile n="01" label="Production kitchen" />
            <IncludedTile n="02" label="Chefs on payroll" />
            <IncludedTile n="03" label="FSSAI + GST" />
            <IncludedTile n="04" label="Recipe & R&D" />
            <IncludedTile n="05" label="Pre-vetted vendors" />
            <IncludedTile n="06" label="Zomato + Swiggy onboarding" />
            <IncludedTile n="07" label="1:1 operator mentorship" />
            <IncludedTile n="08" label="Weekly customer tastings" />
          </div>
        </div>
      </section>

      {/* ============== TIMELINE ============== */}
      <section id="timeline" className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                The Timeline
              </span>
              <h2 className="mt-6 font-display text-[40px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[68px]">
                Day 0 to first
                <span className="ml-3 inline-block bg-green px-2 leading-none">order.</span>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-[14.5px] leading-relaxed text-ink/70">
              A structured 60-day arc. Four phases, weekly checkpoints, and a public
              launch on aggregator platforms.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-ink/15 md:grid-cols-4">
            <Phase
              days="Day 0 — 10"
              phase="01 · Discover"
              title="Brand, menu, math."
              points={[
                "Founder deep-dive & positioning",
                "Menu architecture + pricing",
                "Unit economics model",
              ]}
            />
            <Phase
              days="Day 11 — 25"
              phase="02 · Build"
              title="Kitchen + recipes locked."
              points={[
                "Kitchen station setup",
                "Chef onboarding + R&D sprints",
                "FSSAI / GST paperwork filed",
              ]}
            />
            <Phase
              days="Day 26 — 45"
              phase="03 · Wire-in"
              title="Supply, aggregators, ops."
              points={[
                "Vendor contracts + supply",
                "Zomato + Swiggy listings live",
                "Soft-launch tastings",
              ]}
            />
            <Phase
              days="Day 46 — 60"
              phase="04 · Launch"
              title="Live brand, real customers."
              points={[
                "Public launch on aggregators",
                "Weekly performance reviews",
                "Growth playbook handoff",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============== PILLARS — DETAILED ============== */}
      <section
        id="pillars"
        className="relative overflow-hidden border-b border-ink bg-paper text-ink"
        style={{
          backgroundImage: [
            "radial-gradient(60% 50% at 85% 0%, oklch(0.92 0.22 142 / 0.45), transparent 70%)",
            "radial-gradient(50% 40% at 0% 100%, oklch(0.92 0.22 142 / 0.3), transparent 65%)",
            "linear-gradient(to bottom, oklch(0.985 0.005 95), oklch(0.96 0.01 95))",
          ].join(", "),
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                The Pillars
              </span>
              <h2 className="mt-6 font-display text-[40px] font-extrabold leading-[0.92] tracking-[-0.035em] md:text-[68px]">
                Four pillars, fully wired in.
              </h2>
              <p className="mt-5 max-w-2xl text-[14.5px] leading-relaxed text-ink/75">
                Each pillar is an end-to-end system, not a workshop. You walk in with an
                idea and an obsession; you walk out with a running brand.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
            <PillarRow
              n="01"
              img={essential01}
              title="Kitchen & Team"
              body="A production-grade kitchen, equipment, prep stations, and chefs on payroll. You cook on day one — no real-estate hunt, no hiring scramble."
              points={["Cloud kitchen station", "Chefs & helpers", "Daily prep + KOT systems"]}
            />
            <PillarRow
              n="02"
              img={essential03}
              title="Recipe & Compliance"
              body="In-house consultants for menu R&D, food costing and standardisation. FSSAI, GST and packaging compliance handled end-to-end."
              points={["Recipe lab + costing", "FSSAI & GST registration", "Packaging & labelling"]}
            />
            <PillarRow
              n="03"
              img={essential05}
              title="Supply & Distribution"
              body="Pre-negotiated vendors for raw material, packaging and logistics. Onboarded onto Zomato and Swiggy with optimised listings."
              points={["Vetted ingredient supply", "Cold-chain & last-mile", "Aggregator onboarding"]}
            />
            <PillarRow
              n="04"
              img={essential07}
              title="Mentorship & Feedback"
              body="1:1 mentorship from operators who built food businesses from zero. Weekly tastings with real customers and structured growth reviews."
              points={["1:1 operator sessions", "Weekly customer tastings", "Growth review board"]}
            />
          </div>
        </div>
      </section>

      {/* ============== WHAT WE EXPECT ============== */}
      <section id="expect" className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                What we expect
              </span>
              <h2 className="mt-6 font-display text-[40px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[68px]">
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
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <span className="inline-block bg-green px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink">
                FAQ
              </span>
              <h2 className="mt-6 font-display text-[36px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[56px]">
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
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h2 className="font-display text-[40px] font-extrabold leading-[0.9] tracking-[-0.035em] md:text-[80px]">
                Ready to cook your
                <span className="ml-3 inline-block bg-green px-2 leading-none">first plate?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[14.5px] leading-relaxed text-ink/70">
                Cohort 01 closes 31 October. We review applications on a rolling basis.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-start justify-end gap-4">
              <a
                href={APPLY_URL}
                className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-green hover:text-ink"
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
      <footer className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-16">
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
          <img src={essential02} alt="" />
          <img src={essential04} alt="" />
          <img src={essential06} alt="" />
          <img src={essential08} alt="" />
        </>
      )}
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

// silence unused import warning
void (null as ReactNode);
