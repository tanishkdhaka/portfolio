"use client";

import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "./hooks/useMediaQuery";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

// 1. CHANGED: Darkened and saturated colors for better contrast on white
const CLR = {
  accurate: "#6fa3ff",      // B.Tech College
  flexmind: "#9898c0",           // Internship
  sabar: "#4dd98a",         // Sabar Store
  nextias: "#ffaa2e",       // NEXTIAS
  gate:"#9F2B68" // GATE
} as const;

type EntryId = keyof typeof CLR;
type Weight = "early" | "mid" | "recent";
type Track = "professional" | "education";

type Entry = {
  id: EntryId;
  track: Track;
  weight: Weight;
  role: string;
  company: string;
  period: string;
  start: Date;
  end: Date | "present";
  bullets: string[];
};

// ── Bar content layout constants ───────────────────────────────────────────
const PAD_X = 14;
const PAD_TOP = 12;
const PAD_BOTTOM = 16;
const BULLET_MARK = 14;
const ROLE_H = 20;
const COMPANY_H = 12;
const DIVIDER_H = 15;
const BAR_HDR_H = PAD_TOP + ROLE_H + COMPANY_H + DIVIDER_H;
const BULLET_GAP = 4;
const FONT_PX = 13.2;
const FONT_LH = 1.48;

const MOBILE_FONT_PX = 11.2;

const _measureCache = new Map<string, number>();

function measureBarH(e: Entry, barWidth: number, fontPx = FONT_PX): number {
  const key = `${e.id}-${Math.round(barWidth)}-${fontPx}-${e.bullets.length}`;
  if (_measureCache.has(key)) return _measureCache.get(key)!;

  const textW = barWidth - PAD_X * 2 - BULLET_MARK;
  let bulletsH = 0;

  if (typeof window !== "undefined" && textW > 0) {
    try {
      const ctx = document.createElement("canvas").getContext("2d")!;
      ctx.font = `${fontPx}px "DM Sans", sans-serif`;
      const lineH = fontPx * FONT_LH;
      e.bullets.forEach((bullet, bi) => {
        const words = bullet.split(" ");
        let lines = 0,
          cur = "";
        for (const w of words) {
          const test = cur ? `${cur} ${w}` : w;
          if (ctx.measureText(test).width > textW && cur) {
            lines++;
            cur = w;
          } else cur = test;
        }
        if (cur) lines++;
        bulletsH += Math.ceil(lines * lineH);
        if (bi < e.bullets.length - 1) bulletsH += BULLET_GAP;
      });
    } catch {
      bulletsH = e.bullets.length * Math.ceil(fontPx * FONT_LH);
    }
  } else {
    bulletsH = e.bullets.length * Math.ceil(fontPx * FONT_LH);
  }

  const h = BAR_HDR_H + bulletsH + PAD_BOTTOM;
  _measureCache.set(key, h);
  return h;
}

// ── Data ──────────────────────────────────────────────────────────────────
const ENTRIES: Entry[] = [
  {
    id: "accurate",
    track: "education",
    weight: "early",
    role: "B.Tech Computer Science and Engineering",
    company: "Accurate Institute of Management & Technology",
    period: "Aug 2020 – Dec 2024",
    start: new Date(2020, 7), // August 2020
    end: new Date(2024, 7),  // December 2024
    bullets: [
      "Graduated with a cumulative CGPA of 6.7",
      "Solved 300+ DSA problems across competitive platforms (160+ on LeetCode) covering dynamic programming, trees, graphs, and advanced data structures",
    ],
  },
  {
    id: "flexmind",
    track: "professional",
    weight: "recent",
    role: "Frontend Developer (Intern)",
    company: "flexmind company",
    period: "June 2024 – Dec 2024",
    start: new Date(2024, 5),  // June 2024
    end: new Date(2024, 11),   // December 2024
    bullets: [
      "Collaborated on building user-facing features using modern frontend frameworks and libraries",
      "Optimized interface responsiveness and ensured standard layout consistency across modules",
    ],
  },
  {
    id: "sabar",
    track: "professional",
    weight: "early",
    role: "Fullstack Developer",
    company: "Sabar Store",
    period: "Dec 2024 – Sep 2025",
    start: new Date(2024, 11), // December 2024
    end: new Date(2025, 8),    // September 2025
    bullets: [
      "Developed and maintained a Next.js-based e-commerce platform, delivering customer-facing features and functionality enhancements",
      "Built reusable React and Tailwind CSS components that improved development efficiency and maintained UI consistency across the application",
      "Integrated REST APIs and implemented dynamic data-driven interfaces for product listings, user interactions, and business workflows",
      "Diagnosed and resolved production issues, reducing bugs and improving application stability and performance",
      "Worked across frontend and backend layers to implement feature requests and support day-to-day platform operations",
    ],
  },
  {
    id: "gate",
    track: "education", // Placed in education track so it flows properly in the timeline
    weight: "mid",
    role: "Career Break – GATE Preparation",
    company: "Self-Study",
    period: "Oct 2025 – Feb 2026",
    start: new Date(2025, 9), // October 2025
    end: new Date(2026, 1),   // February 2026
    bullets: [
      "Took a dedicated career break to undergo rigorous full-time preparation for the Graduate Aptitude Test in Engineering (GATE) 2026",
      "Successfully qualified in both the Computer Science and Information Technology (CSE) and Data Science and Artificial Intelligence (DA) papers",
    ],
  },
  {
    id: "nextias",
    track: "professional",
    weight: "recent",
    role: "Frontend Developer",
    company: "NEXTIAS (Made Easy)",
    period: "Mar 2026 – Present",
    start: new Date(2026, 2),  // March 2026
    end: "present",   // June 2026
    bullets: [
      "Migration of an existing Angular and Bootstrap-based website to React and Tailwind CSS components; 30+ pages have been migrated to date",
      "Built reusable UI components (cards, navbars, forms, tables) that standardized layout patterns across the migrated codebase",
      "Designed and developed landing pages for events and ad campaigns, translating briefs into responsive, conversion-focused layouts",
      "Maintained pixel-consistent implementation by closely following design references and aligning with existing page styles",
    ],
  },
];

const PRO = ENTRIES.filter((e) => e.track === "professional");
const EDU = ENTRIES.filter((e) => e.track === "education");

const ORIGIN = new Date(2020, 0, 1);
const AXIS_END = new Date(2027, 6, 1);
const TODAY = new Date();
const YEAR_MARKS = [ 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];

function toMonths(d: Date): number {
  return (
    (d.getFullYear() - ORIGIN.getFullYear()) * 12 +
    (d.getMonth() - ORIGIN.getMonth())
  );
}
const TOTAL_MONTHS = toMonths(AXIS_END);

const PRO_PROJ = [...PRO].sort((a, b) => a.start.getTime() - b.start.getTime());
const EDU_PROJ = [...EDU].sort((a, b) => a.start.getTime() - b.start.getTime());

function assignLanes(entries: Entry[]): Map<EntryId, number> {
  const sorted = [...entries].sort(
    (a, b) => a.start.getTime() - b.start.getTime(),
  );
  const laneEnd: number[] = [];
  const out = new Map<EntryId, number>();
  for (const e of sorted) {
    const endM = toMonths(e.end === "present" ? TODAY : (e.end as Date)) + 1;
    let lane = laneEnd.findIndex((m) => m <= toMonths(e.start));
    if (lane === -1) lane = laneEnd.length;
    laneEnd[lane] = endM;
    out.set(e.id, lane);
  }
  return out;
}

const PRO_LANE = assignLanes(PRO);
const EDU_LANE = assignLanes(EDU);
const PRO_PROJ_LANE = assignLanes(PRO);
const EDU_PROJ_LANE = assignLanes(EDU);
const ALL_LANE = assignLanes(ENTRIES);

// ── Vertical chart layout constants ──────────────────────────────────────
const CHART_PAD_T = 60;
const CHART_PAD_B = 80;
const CHART_EDGE_L = 40;
const CHART_EDGE_R = 40;
const CHART_MULT_V = 1.4;
const SPINE_RATIO = 0.5;
const PRO_SPINE_X_GAP = 40;
const EDU_SPINE_X_GAP = 40;
const PROJ_W = 2;
const PROJ_X_GAP = 16;
const BAR_X_GAP = 22;
const MAX_PRO_LANE_W = 320;
const MAX_EDU_LANE_W = 380;

const N_PRO_PROJ_ROWS = new Set(assignLanes(PRO).values()).size;
const N_EDU_PROJ_ROWS = new Set(assignLanes(EDU).values()).size;

// ── Mobile Gantt constants ─────────────────────────────────────────────────
const MOBILE_SPINE_X_PX = 28;
const MOBILE_SPINE_GAP = 6;
const MOBILE_PROJ_W = 2;
const MOBILE_PROJ_X_GAP = 6;
const MOBILE_INTER_BAND_GAP = 4;
const MOBILE_BAR_X_GAP = 14;
const MOBILE_CARD_MARGIN_R = 8;

function buildMobileDims(vpW: number, vpH: number) {
  const chartH = Math.max(vpH * CHART_MULT_V, 1400);
  const monthPx = (chartH - CHART_PAD_T - CHART_PAD_B) / TOTAL_MONTHS;
  const SPINE_X = MOBILE_SPINE_X_PX;

  const toPy = (d: Date) =>
    CHART_PAD_T + (TOTAL_MONTHS - toMonths(d)) * monthPx;

  const bH = (s: Date, e: Date | "present") => {
    const endM = e === "present" ? toMonths(TODAY) : toMonths(e as Date);
    return Math.max(monthPx * 2, (endM - toMonths(s)) * monthPx);
  };

  const proBandW =
    N_PRO_PROJ_ROWS * MOBILE_PROJ_W +
    Math.max(0, N_PRO_PROJ_ROWS - 1) * MOBILE_PROJ_X_GAP;
  const eduBandW =
    N_EDU_PROJ_ROWS * MOBILE_PROJ_W +
    Math.max(0, N_EDU_PROJ_ROWS - 1) * MOBILE_PROJ_X_GAP;

  const proStripStart = SPINE_X + MOBILE_SPINE_GAP;
  const eduStripStart = proStripStart + proBandW + MOBILE_INTER_BAND_GAP;
  const cardLeft = eduStripStart + eduBandW + MOBILE_BAR_X_GAP;
  const laneW = Math.max(160, vpW - MOBILE_CARD_MARGIN_R - cardLeft);

  const barLeft = () => cardLeft;

  const projLeft = (e: Entry) => {
    if (e.track === "professional") {
      const row = PRO_PROJ_LANE.get(e.id) ?? 0;
      return proStripStart + row * (MOBILE_PROJ_W + MOBILE_PROJ_X_GAP);
    }
    const row = EDU_PROJ_LANE.get(e.id) ?? 0;
    return eduStripStart + row * (MOBILE_PROJ_W + MOBILE_PROJ_X_GAP);
  };

  const entryH: Partial<Record<EntryId, number>> = {};
  for (const e of ENTRIES) {
    entryH[e.id] = measureBarH(e, laneW, MOBILE_FONT_PX);
  }

  return {
    chartH,
    monthPx,
    SPINE_X,
    toPy,
    bH,
    barLeft,
    laneW,
    entryH: entryH as Record<EntryId, number>,
    projLeft,
  };
}

function buildDims(vpW: number, vpH: number) {
  const chartH = Math.max(vpH * CHART_MULT_V, 1400);
  const monthPx = (chartH - CHART_PAD_T - CHART_PAD_B) / TOTAL_MONTHS;
  const SPINE_X = Math.round(vpW * SPINE_RATIO);

  const toPy = (d: Date) =>
    CHART_PAD_T + (TOTAL_MONTHS - toMonths(d)) * monthPx;

  const bH = (s: Date, e: Date | "present") => {
    const endM = e === "present" ? toMonths(TODAY) : toMonths(e as Date);
    return Math.max(monthPx * 2, (endM - toMonths(s)) * monthPx);
  };

  const proProjBandW =
    N_PRO_PROJ_ROWS * PROJ_W + Math.max(0, N_PRO_PROJ_ROWS - 1) * PROJ_X_GAP;
  const proCardLeft = SPINE_X + PRO_SPINE_X_GAP + proProjBandW + BAR_X_GAP;
  const proLaneW = Math.min(
    MAX_PRO_LANE_W,
    Math.max(100, vpW - CHART_EDGE_R - proCardLeft),
  );
  
  const proBarLeft = () => proCardLeft;
  const proProj_left = (e: Entry) => {
    const row = PRO_PROJ_LANE.get(e.id) ?? 0;
    return SPINE_X + PRO_SPINE_X_GAP + row * (PROJ_W + PROJ_X_GAP);
  };

  const eduProjBandW =
    N_EDU_PROJ_ROWS * PROJ_W + Math.max(0, N_EDU_PROJ_ROWS - 1) * PROJ_X_GAP;
  const eduCardRight = SPINE_X - EDU_SPINE_X_GAP - eduProjBandW - BAR_X_GAP;
  const eduLaneW = Math.min(
    MAX_EDU_LANE_W,
    Math.max(100, eduCardRight - CHART_EDGE_L),
  );
  
  const eduBarLeft = () => eduCardRight - eduLaneW;
  const eduProj_left = (e: Entry) => {
    const row = EDU_PROJ_LANE.get(e.id) ?? 0;
    return SPINE_X - EDU_SPINE_X_GAP - PROJ_W - row * (PROJ_W + PROJ_X_GAP);
  };

  const entryH: Partial<Record<EntryId, number>> = {};
  for (const e of ENTRIES) {
    const laneW = e.track === "professional" ? proLaneW : eduLaneW;
    entryH[e.id] = measureBarH(e, laneW);
  }

  return {
    chartH,
    monthPx,
    SPINE_X,
    toPy,
    bH,
    proBarLeft,
    eduBarLeft,
    proLaneW,
    eduLaneW,
    entryH: entryH as Record<EntryId, number>,
    proProj_left,
    eduProj_left,
  };
}

function cardCenterY(
  e: Entry,
  lane: number,
  allEntries: Entry[],
  laneMap: Map<EntryId, number>,
  monthPx: number,
  pickLatest = false,
): number {
  const eS = toMonths(e.start);
  const eE = toMonths(e.end === "present" ? TODAY : (e.end as Date));
  const midY = (mA: number, mB: number) =>
    CHART_PAD_T + (TOTAL_MONTHS - (mA + mB) / 2) * monthPx;

  const blocked: Array<[number, number]> = [];
  for (const o of allEntries) {
    if (o.id === e.id || (laneMap.get(o.id) ?? 0) === lane) continue;
    const oS = toMonths(o.start);
    const oE = toMonths(o.end === "present" ? TODAY : (o.end as Date));
    if (oE > eS && oS < eE) blocked.push([Math.max(oS, eS), Math.min(oE, eE)]);
  }

  if (blocked.length === 0) return midY(eS, eE);

  blocked.sort((a, b) => a[0] - b[0]);
  const gaps: Array<[number, number]> = [];
  if (blocked[0][0] > eS) gaps.push([eS, blocked[0][0]]);
  for (let i = 0; i < blocked.length - 1; i++) {
    if (blocked[i][1] < blocked[i + 1][0])
      gaps.push([blocked[i][1], blocked[i + 1][0]]);
  }
  if (blocked[blocked.length - 1][1] < eE)
    gaps.push([blocked[blocked.length - 1][1], eE]);

  if (gaps.length === 0) return midY(eS, eE);

  if (pickLatest) {
    const latest = gaps.reduce((a, b) => (b[0] > a[0] ? b : a));
    return midY(latest[0], latest[1]);
  }

  const best = gaps.reduce((a, b) => (b[1] - b[0] > a[1] - a[0] ? b : a));
  return midY(best[0], best[1]);
}
type CardLayout = {
  id: EntryId;
  top: number;
  height: number;
};

function resolveCardCollisions(
  cards: CardLayout[],
  gap = 32,
): Record<EntryId, number> {
  const sorted = [...cards].sort((a, b) => a.top - b.top);

  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const curr = sorted[i];

    const requiredTop = prev.top + prev.height + gap;

    if (curr.top < requiredTop) {
      curr.top = requiredTop;
    }
  }

  return sorted.reduce(
    (acc, card) => {
      acc[card.id] = card.top;
      return acc;
    },
    {} as Record<EntryId, number>,
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export function ExperienceTimeline() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [vpW, setVpW] = useState(1440);
  const [vpH, setVpH] = useState(900);

  useEffect(() => {
    setMounted(true);
    const sync = () => {
      setVpW(window.innerWidth);
      setVpH(window.innerHeight);
    };
    sync();
    window.addEventListener("resize", sync, { passive: true });
    return () => window.removeEventListener("resize", sync);
  }, []);

  const dims = useMemo(() => buildDims(vpW, vpH), [vpW, vpH]);
  const mDims = useMemo(() => buildMobileDims(vpW, vpH), [vpW, vpH]);
 const {
    chartH,
    SPINE_X,
    toPy,
    bH,
    proBarLeft,
    eduBarLeft,
    proLaneW,
    eduLaneW,
    entryH,
    proProj_left,
    eduProj_left,
    monthPx,
  } = dims;
  const proCardPositions = useMemo(() => {
  const cards: CardLayout[] = PRO.map((e) => {
    const lane = PRO_LANE.get(e.id) ?? 0;

    const cy = cardCenterY(
      e,
      lane,
      PRO,
      PRO_LANE,
      monthPx,
    );

    return {
      id: e.id,
      top: cy - entryH[e.id] / 2,
      height: entryH[e.id],
    };
  });

  return resolveCardCollisions(cards, 40);
}, [entryH, monthPx]);

const eduCardPositions = useMemo(() => {
  const cards: CardLayout[] = EDU.map((e) => {
    const lane = EDU_LANE.get(e.id) ?? 0;

    const cy = cardCenterY(
      e,
      lane,
      EDU,
      EDU_LANE,
      monthPx,
    );

    return {
      id: e.id,
      top: cy - entryH[e.id] / 2,
      height: entryH[e.id],
    };
  });

  return resolveCardCollisions(cards, 40);
}, [entryH, monthPx]);
  
  const renderBar = (
    e: Entry,
    top: number,
    left: number,
    width: number,
    height: number,
    fontPx = FONT_PX,
    isMobileView = false,
  ) => {
    const clr = CLR[e.id];
    const roleFontSize = fontPx < FONT_PX ? "0.72rem" : "0.80rem";

    const header = isMobileView ? (
      <>
        {/* 2. CHANGED: Text colors to dark gray (#111827) */}
        <span
          style={{
            fontFamily: FONT_SANS,
            fontWeight: 600,
            fontSize: roleFontSize,
            color: "#111827",
            lineHeight: 1.25,
            display: "block",
            marginBottom: 2,
          }}
        >
          {e.role}
        </span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.50rem",
            color: clr, // Changed to exact color instead of adding "bb" opacity
            letterSpacing: "0.04em",
            display: "block",
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          {e.company}
        </span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.44rem",
            color: "rgba(0,0,0,0.5)", // Darkened text
            letterSpacing: "0.06em",
            display: "block",
            lineHeight: 1.6,
          }}
        >
          {e.period}
        </span>
      </>
    ) : (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 6,
            marginBottom: 2,
          }}
        >
          {/* 2. CHANGED: Text colors to dark gray (#111827) */}
          <span
            style={{
              fontFamily: FONT_SANS,
              fontWeight: 600,
              fontSize: roleFontSize,
              color: "#111827",
              lineHeight: 1.25,
            }}
          >
            {e.role}
          </span>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.44rem",
              color: "rgba(0,0,0,0.5)", // Darkened text
              letterSpacing: "0.06em",
              flexShrink: 0,
            }}
          >
            {e.period}
          </span>
        </div>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.50rem",
            color: clr, // Changed to exact color
            letterSpacing: "0.04em",
            display: "block",
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          {e.company}
        </span>
      </>
    );

    const bulletsEl = (
      <div
        style={{
          padding: `0 ${PAD_X}px ${PAD_BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          gap: BULLET_GAP,
        }}
      >
        {e.bullets.map((b, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: 5, alignItems: "flex-start" }}
          >
            <span
              style={{
                color: clr,
                fontSize: "0.42rem",
                flexShrink: 0,
                marginTop: "0.22rem",
                opacity: 0.9,
              }}
            >
              ▪
            </span>
            {/* 2. CHANGED: Bullet text color to dark gray */}
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: `${fontPx}px`,
                lineHeight: FONT_LH,
                color: "rgba(0,0,0,0.7)",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              {b}
            </span>
          </div>
        ))}
      </div>
    );

    const headerEl = (
      <div style={{ padding: `${PAD_TOP}px ${PAD_X}px 0`, flexShrink: 0 }}>
        {header}
        {/* 3. CHANGED: Divider line darkened */}
        <div
          style={{
            height: 1,
            background: `${clr}40`,
            marginTop: 5,
            marginBottom: 9,
          }}
        />
      </div>
    );

    return (
      <div
        key={e.id}
        style={{
          position: "absolute",
          left,
          top,
          width,
          height,
          // 3. CHANGED: Card background and borders slightly darkened
          background: `linear-gradient(180deg, ${clr}15 0%, ${clr}05 100%)`,
          borderLeft: `2px solid ${clr}`,
          borderTop: `1px solid ${clr}40`,
          borderBottom: `1px solid ${clr}40`,
          borderRight: `1px solid ${clr}40`,
          borderRadius: "3px",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff5ee", // Added solid background behind gradient
        }}
      >
        {headerEl}
        {bulletsEl}
      </div>
    );
  };
const mobileCardPositions = useMemo(() => {
  const cards: CardLayout[] = ENTRIES.map((e) => {
    let cy: number;

    if (e.id === "accurate") {
      cy = mDims.toPy(e.end as Date) + mDims.entryH[e.id] / 2;
    } else if (e.track === "professional") {
      const lane = PRO_LANE.get(e.id) ?? 0;

      cy = cardCenterY(
        e,
        lane,
        PRO,
        PRO_LANE,
        mDims.monthPx,
      );
    } else {
      const lane = ALL_LANE.get(e.id) ?? 0;

      cy = cardCenterY(
        e,
        lane,
        ENTRIES,
        ALL_LANE,
        mDims.monthPx,
        true,
      );
    }

    return {
      id: e.id,
      top: cy - mDims.entryH[e.id] / 2,
      height: mDims.entryH[e.id],
    };
  });

  return resolveCardCollisions(cards, 32);
}, [mDims]);
  if (isMobile) {
    const {
      chartH: mChartH,
      SPINE_X: mSpineX,
      toPy: mToPy,
      bH: mBH,
      barLeft: mBarLeft,
      laneW: mLaneW,
      entryH: mEntryH,
      projLeft: mProjLeft,
      monthPx: mMonthPx,
    } = mDims;

    return (
      // 1. CHANGED: Main container background to white
      <div id="experience" style={{ display: "flex", flexDirection: "column", backgroundColor: "#fff5ee" }}>
        {/* Header */}
        <div style={{ padding: "0.7rem 4vw 0.6rem", flexShrink: 0 }}>
        
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontWeight: 800,
              fontSize: "clamp(1.85rem, 7.5vw, 2.4rem)",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: "#111827", // Darkened heading
              margin: 0,
            }}
          >
            The trajectory.
          </h2>
        </div>

        {/* Chart strip */}
        <div style={{ position: "relative", width: "100%", height: mChartH }}>
          {YEAR_MARKS.map((y) => (
            <div
              key={y}
              style={{
                position: "absolute",
                top: mToPy(new Date(y, 0, 1)),
                left: 0,
                right: 0,
                height: 1,
                background: "rgba(0,0,0,0.06)", // 3. CHANGED: Background line
              }}
            />
          ))}

          {(() => {
            const GAP = 11;
            const markYs = YEAR_MARKS.map((y) =>
              mToPy(new Date(y, 0, 1)),
            ).sort((a, b) => a - b);
            const segs: Array<{ top: number; height: number }> = [];
            let prev = 0;
            for (const my of markYs) {
              const h = my - GAP - prev;
              if (h > 0) segs.push({ top: prev, height: h });
              prev = my + GAP;
            }
            const tail = mChartH - prev;
            if (tail > 0) segs.push({ top: prev, height: tail });
            return segs.map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: mSpineX,
                  top: s.top,
                  height: s.height,
                  width: 1,
                  background: "rgba(0,0,0,0.15)", // 3. CHANGED: Vertical spine line
                }}
              />
            ));
          })()}

          {YEAR_MARKS.map((y) => {
            const yPos = mToPy(new Date(y, 0, 1));
            return (
              <div key={y}>
                <div
                  style={{
                    position: "absolute",
                    top: yPos,
                    left: mSpineX - 4,
                    width: 8,
                    height: 1,
                    background: "rgba(0,0,0,0.25)", // 3. CHANGED: Dash mark
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: yPos - 7,
                    left: 0,
                    width: mSpineX - 3,
                    textAlign: "right",
                    fontFamily: FONT_MONO,
                    fontSize: "0.44rem",
                    letterSpacing: "0.04em",
                    color: "rgba(0,0,0,0.5)", // 2. CHANGED: Year text
                  }}
                >
                  {y}
                </span>
              </div>
            );
          })}

          {ENTRIES.map((e) => {
            const endDate = e.end === "present" ? TODAY : (e.end as Date);
            const stripTop = mToPy(endDate);
            const stripHv = mBH(e.start, e.end);
            return (
              <div
                key={`mp-${e.id}`}
                style={{
                  position: "absolute",
                  top: e.end === "present" ? stripTop - 20 : stripTop,
                  left: mProjLeft(e),
                  width: MOBILE_PROJ_W,
                  height: e.end === "present" ? stripHv + 20 : stripHv,
                  background: CLR[e.id],
                  borderRadius: 2,
                  opacity: 0.82,
                }}
              />
            );
          })}

          {ENTRIES.map((e) => {
            let cy: number;
            if (e.id === "accurate") {
              cy = mToPy(e.end as Date) + mEntryH[e.id] / 2;
            } else if (e.track === "professional") {
              const lane = PRO_LANE.get(e.id) ?? 0;
              cy = cardCenterY(e, lane, PRO, PRO_LANE, mMonthPx);
            } else {
              const lane = ALL_LANE.get(e.id) ?? 0;
              cy = cardCenterY(e, lane, ENTRIES, ALL_LANE, mMonthPx, true);
            }
             const top = mobileCardPositions[e.id];
            return renderBar(
              e,
              top,
              mBarLeft(),
              mLaneW,
              mEntryH[e.id],
              MOBILE_FONT_PX,
              true,
            );
          })}
        </div>
      </div>
    );
  }

 
// Prevent hydration mismatch
  if (!mounted) return <div id="experience" style={{ minHeight: "100vh", backgroundColor: "#fff5ee" }} />;

  return (
    // 1. CHANGED: Main container background to white
    <div id="experience" style={{ display: "flex", flexDirection: "column", backgroundColor: "#fff5ee" }}>
  

      {/* Chart strip */}
      <div style={{ position: "relative", width: "100%", height: chartH }}>
        {YEAR_MARKS.map((y) => (
          <div
            key={y}
            style={{
              position: "absolute",
              top: toPy(new Date(y, 0, 1)),
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(0,0,0,0.06)", // 3. CHANGED: Grid line
            }}
          />
        ))}

        {(() => {
          const GAP = 11;
          const markYs = YEAR_MARKS.map((y) => toPy(new Date(y, 0, 1))).sort(
            (a, b) => a - b,
          );
          const segs: Array<{ top: number; height: number }> = [];
          let prev = 0;
          for (const my of markYs) {
            const h = my - GAP - prev;
            if (h > 0) segs.push({ top: prev, height: h });
            prev = my + GAP;
          }
          const tail = chartH - prev;
          if (tail > 0) segs.push({ top: prev, height: tail });
          return segs.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: SPINE_X,
                top: s.top,
                height: s.height,
                width: 1,
                background: "rgba(0,0,0,0.15)", // 3. CHANGED: Vertical spine line
              }}
            />
          ));
        })()}

        {YEAR_MARKS.map((y) => {
          const yPos = toPy(new Date(y, 0, 1));
          return (
            <div key={y}>
              <div
                style={{
                  position: "absolute",
                  top: yPos,
                  left: SPINE_X - 5,
                  width: 11,
                  height: 1,
                  background: "rgba(0,0,0,0.25)", // 3. CHANGED: Dash mark
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: yPos - 9,
                  left: SPINE_X,
                  transform: "translateX(-50%)",
                  fontFamily: FONT_MONO,
                  fontSize: "0.58rem",
                  letterSpacing: "0.06em",
                  color: "rgba(0,0,0,0.5)", // 2. CHANGED: Year text
                  whiteSpace: "nowrap",
                }}
              >
                {y}
              </span>
            </div>
          );
        })}

        {PRO_PROJ.map((e) => {
          const endDate = e.end === "present" ? TODAY : (e.end as Date);
          const stripTop = toPy(endDate);
          const stripH = bH(e.start, e.end);
          return (
            <div
              key={`pp-${e.id}`}
              style={{
                position: "absolute",
                top: e.end === "present" ? stripTop - 20 : stripTop,
                left: proProj_left(e),
                width: PROJ_W,
                height: e.end === "present" ? stripH + 20 : stripH,
                background: CLR[e.id],
                borderRadius: 2,
                opacity: 0.82,
              }}
            />
          );
        })}

        {EDU_PROJ.map((e) => {
          const stripTop = toPy(e.end as Date);
          const stripH = bH(e.start, e.end as Date);
          return (
            <div
              key={`ep-${e.id}`}
              style={{
                position: "absolute",
                top: stripTop,
                left: eduProj_left(e),
                width: PROJ_W,
                height: stripH,
                background: CLR[e.id],
                borderRadius: 2,
                opacity: 0.82,
              }}
            />
          );
        })}

       {PRO.map((e) =>
  renderBar(
    e,
    proCardPositions[e.id],
    proBarLeft(),
    proLaneW,
    entryH[e.id],
  )
)}
{EDU.map((e) =>
  renderBar(
    e,
    eduCardPositions[e.id],
    eduBarLeft(),
    eduLaneW,
    entryH[e.id],
  )
)}
      </div>
    </div>
  );
}