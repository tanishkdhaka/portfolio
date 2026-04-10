"use client";
import { useState, useEffect, useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const SERVICES = [
  { label: "Landing Page", time: "1–2 weeks" },
  { label: "Portfolio Site", time: "1–2 weeks" },
  { label: "Full Web App", time: "4–8 weeks" },
  { label: "UI Redesign", time: "1–3 weeks" },
  { label: "Other", time: "Let's discuss" },
];

const STATS = [
  { num: "48h", label: "Response time" },
  { num: "5+", label: "Projects shipped" },
  { num: "100%", label: "On-time delivery" },
];

const TRUST = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Framer Motion", "Node.js",
];

export default function HirePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [spotsLeft] = useState(2);
  const [elapsed, setElapsed] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  // Urgency timer — shows how long the page has been open
  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          projectDetails: `Service: ${selected}\n\n${formData.details}`,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
    } catch {
      alert("Something went wrong. Email me directly at info@tanishkdhaka.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${bebas.className} bg-[#fff5ee] min-h-screen text-black overflow-x-hidden`}
    >
      {/* ── URGENCY BAR ── */}
      <div className="w-full bg-black text-white py-2 px-4 flex items-center justify-center gap-3 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span style={{ fontFamily: "monospace" }} className="text-xs tracking-wide">
          Only <span className="text-[#8082F8] font-bold">{spotsLeft} spots</span> open this month
          &nbsp;·&nbsp;
          <span className="opacity-60">You've been here {elapsed}s — don't leave without reaching out</span>
        </span>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-screen-lg mx-auto px-5 md:px-10 pt-16 pb-10">
        {/* eyebrow */}
        <p
          className="text-xs tracking-[0.2em] uppercase text-[#8082F8] mb-4"
          style={{ fontFamily: "monospace" }}
        >
          Freelance · Next.js & React · Delhi, India · Remote worldwide
        </p>

        {/* headline — pain-first */}
        <h1 className="text-[13vw] md:text-[9vw] leading-none uppercase tracking-tight mb-4">
          Your site
          <br />
          <span className="text-[#8082F8]">isn't</span> fast
          <br />
          enough.
        </h1>

        <p
          className="text-base md:text-xl max-w-xl leading-relaxed mb-8 normal-case opacity-80"
          style={{ fontFamily: "monospace" }}
        >
          Slow load times, bad SEO, and outdated UI are costing you clients every day.
          I build Next.js websites that load instantly, rank on Google, and
          actually convert visitors — starting this week.
        </p>

        {/* Above-the-fold CTA */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={scrollToForm}
            className="bg-black text-white px-10 py-5 text-xl uppercase tracking-wider hover:bg-[#8082F8] transition-colors duration-200 flex items-center gap-3"
          >
            Start my project
            <span className="text-2xl">→</span>
          </button>
          <a
            href="mailto:info@tanishkdhaka.com"
            className="border-2 border-black px-10 py-5 text-xl uppercase tracking-wider hover:border-[#8082F8] hover:text-[#8082F8] transition-colors duration-200"
            style={{ fontFamily: "monospace" }}
          >
            Email directly
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-0 border border-black">
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              className="flex-1 min-w-[100px] p-5 border-r last:border-r-0 border-black"
            >
              <div className="text-4xl md:text-5xl text-[#8082F8]">{num}</div>
              <div
                className="text-xs uppercase tracking-widest opacity-60 mt-1"
                style={{ fontFamily: "monospace" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="max-w-screen-lg mx-auto px-5 md:px-10 py-16 border-t border-black border-opacity-20">
        <h2 className="text-4xl md:text-6xl uppercase mb-10">
          Sound <span className="text-[#8082F8]">familiar?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-0">
          {[
            { problem: "Your site loads in 5+ seconds", cost: "53% of users leave after 3s" },
            { problem: "You're invisible on Google", cost: "92% of clicks go to page 1" },
            { problem: "Your UI looks outdated", cost: "75% judge credibility by design" },
          ].map(({ problem, cost }) => (
            <div
              key={problem}
              className="border border-black p-6 md:p-8 group hover:bg-black hover:text-white transition-colors duration-200"
            >
              <div className="text-3xl mb-4 opacity-20 group-hover:opacity-40">✕</div>
              <p className="text-lg uppercase mb-3">{problem}</p>
              <p
                className="text-xs opacity-60 normal-case"
                style={{ fontFamily: "monospace" }}
              >
                {cost}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION / WHAT YOU GET ── */}
      <section className="max-w-screen-lg mx-auto px-5 md:px-10 py-16 border-t border-black border-opacity-20">
        <h2 className="text-4xl md:text-6xl uppercase mb-10">
          What you <span className="text-[#8082F8]">get</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-0">
          {[
            { title: "Sub-2s load time", desc: "Next.js server rendering, image optimization, and Core Web Vitals tuning built in from day one." },
            { title: "Ranks on Google", desc: "Semantic HTML, metadata, schema markup, sitemap — every page built to be found." },
            { title: "Looks premium", desc: "Custom animations, pixel-perfect UI, and mobile-first design that makes your brand look serious." },
            { title: "Clean handoff", desc: "Documented, readable code. You own it fully. No lock-in, no monthly fees, no mystery." },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="border border-black p-6 md:p-8 flex gap-5"
            >
              <span className="text-[#8082F8] text-3xl mt-1 flex-shrink-0">✓</span>
              <div>
                <p className="text-xl uppercase mb-2">{title}</p>
                <p
                  className="text-sm leading-relaxed opacity-70 normal-case"
                  style={{ fontFamily: "monospace" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH TRUST STRIP ── */}
      <section className="border-t border-b border-black border-opacity-20 py-6 overflow-hidden">
        <div className="flex gap-10 animate-[marquee_15s_linear_infinite] whitespace-nowrap">
          {[...TRUST, ...TRUST, ...TRUST].map((t, i) => (
            <span
              key={i}
              className="text-2xl uppercase tracking-widest opacity-30 flex-shrink-0"
            >
              {t} ·
            </span>
          ))}
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section
        ref={formRef}
        className="max-w-screen-lg mx-auto px-5 md:px-10 py-20"
      >
        {/* Scarcity reminder */}
        <div
          className="flex items-center gap-3 mb-8 border border-[#8082F8] px-5 py-3 w-fit"
          style={{ fontFamily: "monospace" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#8082F8] animate-pulse" />
          <span className="text-sm normal-case">
            <span className="font-bold text-[#8082F8]">{spotsLeft} spots</span> remaining this month
          </span>
        </div>

        <h2 className="text-4xl md:text-7xl uppercase leading-none mb-3">
          Let's build
          <br />
          <span className="text-[#8082F8]">something</span>
          <br />
          great.
        </h2>
        <p
          className="text-sm opacity-60 mb-10 normal-case"
          style={{ fontFamily: "monospace" }}
        >
          Fill this in — I respond within 48 hours, usually same day.
        </p>

        {sent ? (
          // ── SUCCESS STATE ──
          <div className="border-2 border-[#8082F8] p-10 md:p-16 text-center">
            <div className="text-7xl text-[#8082F8] mb-6">✓</div>
            <h3 className="text-4xl uppercase mb-4">Message received!</h3>
            <p
              className="text-sm opacity-70 normal-case max-w-sm mx-auto"
              style={{ fontFamily: "monospace" }}
            >
              I'll get back to you within 48 hours. Check your inbox — including spam just in case.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-0 max-w-2xl">

            {/* Step 1 — service selection */}
            <div className="mb-8">
              <p
                className="text-xs uppercase tracking-widest mb-4 opacity-60"
                style={{ fontFamily: "monospace" }}
              >
                01 — What do you need?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {SERVICES.map(({ label, time }) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => { setSelected(label); setStep(2); }}
                    className={`border p-4 text-left transition-all duration-150 ${
                      selected === label
                        ? "border-[#8082F8] bg-[#8082F8] text-white"
                        : "border-black hover:border-[#8082F8]"
                    }`}
                  >
                    <p className="text-base uppercase">{label}</p>
                    <p
                      className="text-xs opacity-60 mt-1 normal-case"
                      style={{ fontFamily: "monospace" }}
                    >
                      {time}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 — contact details (reveals after service selected) */}
            <div
              className={`flex flex-col gap-4 transition-all duration-300 ${
                step === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p
                className="text-xs uppercase tracking-widest opacity-60"
                style={{ fontFamily: "monospace" }}
              >
                02 — Your details
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="bg-transparent border border-black px-5 py-4 text-lg uppercase tracking-wide placeholder:opacity-30 placeholder:normal-case focus:outline-none focus:border-[#8082F8] transition-colors"
                  style={{ fontFamily: "monospace" }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="bg-transparent border border-black px-5 py-4 text-lg uppercase tracking-wide placeholder:opacity-30 placeholder:normal-case focus:outline-none focus:border-[#8082F8] transition-colors"
                  style={{ fontFamily: "monospace" }}
                />
              </div>

              <textarea
                placeholder="Tell me about your project — what you need, your timeline, any details..."
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData((p) => ({ ...p, details: e.target.value }))}
                className="bg-transparent border border-black px-5 py-4 text-base placeholder:opacity-30 placeholder:normal-case focus:outline-none focus:border-[#8082F8] transition-colors resize-none normal-case"
                style={{ fontFamily: "monospace" }}
              />

              <button
                type="submit"
                disabled={loading || !selected}
                className="bg-black text-white py-5 text-2xl uppercase tracking-widest hover:bg-[#8082F8] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                {loading ? (
                  <span style={{ fontFamily: "monospace" }} className="text-base normal-case animate-pulse">
                    Sending...
                  </span>
                ) : (
                  <>
                    Send project brief
                    <span>→</span>
                  </>
                )}
              </button>

              <p
                className="text-xs opacity-40 text-center normal-case"
                style={{ fontFamily: "monospace" }}
              >
                No spam. No sales calls. Just a reply about your project.
              </p>
            </div>
          </form>
        )}
      </section>

      {/* ── BOTTOM TRUST ── */}
      <section className="border-t border-black border-opacity-20 max-w-screen-lg mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-2xl uppercase">Tanishk Dhaka</p>
          <p
            className="text-xs opacity-50 normal-case mt-1"
            style={{ fontFamily: "monospace" }}
          >
            Next.js · React · TypeScript · Delhi, India · Remote worldwide
          </p>
        </div>
        <a
          href="mailto:info@tanishkdhaka.com"
          className="text-sm underline underline-offset-4 opacity-50 hover:opacity-100 hover:text-[#8082F8] transition-colors normal-case"
          style={{ fontFamily: "monospace" }}
        >
          info@tanishkdhaka.com
        </a>
      </section>

      {/* Marquee keyframe */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}