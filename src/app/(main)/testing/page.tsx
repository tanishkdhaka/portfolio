

import Image from "next/image";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const programFeatures = [
  {
    title: "Intensive & Phased Testing",
    desc: (
      <>
        <strong>Alternate-day, structured tests</strong> build mental stamina,{" "}
        <strong>sustain focus</strong>, and prevent performance dips as Prelims
        approaches.
      </>
    ),
  },
  {
    title: "Complete Syllabus Coverage",
    desc: (
      <>
        <strong>End-to-end syllabus mapping</strong> ensures{" "}
        <strong>zero blind spots,</strong> eliminating last-minute surprises on
        exam day.
      </>
    ),
  },
  {
    title: "PYQ-Integrated Framework",
    desc: (
      <>
        Continuous integration of{" "}
        <strong>UPSC Previous Year Questions</strong> helps internalise{" "}
        <strong>UPSC thinking,</strong> identify{" "}
        <strong>recurring themes,</strong> and avoid low-yield areas.
      </>
    ),
  },
  {
    title: "UPSC-Style Question Pool",
    desc: (
      <>
        Questions inspired by <strong>CSE, CAPF, Geo-Scientist</strong> and
        other UPSC exams sharpen the ability to{" "}
        <strong>decode new and unconventional UPSC patterns.</strong>
      </>
    ),
  },
  {
    title: "Detailed & Lucid Solutions",
    desc: (
      <>
        Clear, <strong>structured explanations</strong> strengthen{" "}
        <strong>core concepts</strong> and improve{" "}
        <strong>option analysis,</strong> reducing blind guesses and careless
        errors.
      </>
    ),
  },
  {
    title: "Accuracy-Probability Mapping",
    desc: (
      <>
        Tracks attempts made with{" "}
        <strong>certainty vs logical deduction</strong>, enabling{" "}
        <strong>better risk management</strong> and an{" "}
        <strong>optimal attempt strategy.</strong>
      </>
    ),
  },
  {
    title: "Hybrid Course Access",
    desc: (
      <>
        Students can take tests <strong>either online or offline</strong> as per
        their convenience to ensure <strong>seamless access.</strong>
      </>
    ),
  },
  {
    title: "Daily Rank List",
    desc: (
      <>
        <strong>Daily benchmarking</strong> keeps preparation grounded,{" "}
        <strong>competitive, and accountable,</strong> reflecting real
        improvement over time.
      </>
    ),
  },
  {
    title: "PTS Portal with Advanced Analytics",
    desc: (
      <>
        A unified digital platform to attempt tests,{" "}
        <strong>analyse performance deeply</strong>, and{" "}
        <strong>track topic-wise progress</strong>, converting every test into{" "}
        <strong>actionable feedback.</strong>
      </>
    ),
  },
  {
    title: "Subject-Wise Insight Reports",
    desc: (
      <>
        <strong>Subject wise Post-test analytics</strong> clearly highlight{" "}
        <strong>strengths, weak areas, recurring mistakes</strong>, and{" "}
        <strong>peer comparison</strong> before moving ahead.
      </>
    ),
  },
  {
    title: "Customized Remedial Tests",
    desc: (
      <>
        Targeted follow-up papers{" "}
        <strong>based only on wrong and unattempted questions</strong> ensure
        immediate <strong>correction and prevent error repetition.</strong>
      </>
    ),
  },
  {
    title: "Prelims Strategy Workshops (Online)",
    desc: (
      <>
        <strong>Expert-led sessions</strong> refine attempt{" "}
        <strong>
          strategy, time management, and decision-making
        </strong>{" "}
        under pressure.
      </>
    ),
  },
  {
    title: "Quick Doubt Resolution",
    desc: (
      <>
        <strong>QR-based doubt resolution</strong> enables fast, mentor-verified
        clarity, ensuring smooth,{" "}
        <strong>focused revision without interruption.</strong>
      </>
    ),
  },
  {
    title: "High Reflection Incidence",
    desc: (
      <>
        Tests are closely aligned with{" "}
        <strong>UPSC Prelims standards,</strong> with multiple{" "}
        <strong>questions mirroring actual CSE patterns</strong>, ensuring
        practice converts into marks.
      </>
    ),
  },
];

interface TagProps {
  label: string;
  variant?: "default" | "red" | "yellow";
}

const tagColors: Record<NonNullable<TagProps["variant"]>, string> = {
  default: "bg-[#2b66b1] text-white",
  red: "bg-red-500 text-white",
  yellow: "bg-yellow-400 text-black",
};

const Tag = ({ label, variant = "default" }: TagProps) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[variant]}`}
  >
    {label}
  </span>
);

interface TestCardProps {
  title: string;
  description: React.ReactNode;
  tags: TagProps[];
}

const testTypes: TestCardProps[] = [
  {
    title: "Sectional Tests",
    description: (
      <>
        These <strong>half-length, topic-focused tests</strong> help you{" "}
        <strong>build depth and accuracy</strong> within a subject. By testing
        you soon after study and revision, they{" "}
        <strong>highlight conceptual gaps</strong> early,{" "}
        <strong>improve option elimination</strong>, and ensure each subject
        becomes a strength, not a liability. Conducted on{" "}
        <strong>weekdays as per syllabus.</strong>
      </>
    ),
    tags: [
      { label: "50 Questions" },
      { label: "1 Hour" },
      { label: "Non-Flexible", variant: "red" },
    ],
  },
  {
    title: "Subject-Specific Full Tests",
    description: (
      <>
        These tests help you <strong>consolidate an entire subject</strong> in
        one sitting. They train you to{" "}
        <strong>link topics, manage fatigue,</strong> and{" "}
        <strong>maintain accuracy</strong> across a longer paper, exactly what{" "}
        <strong>UPSC demands</strong> when questions span{" "}
        <strong>multiple sub-themes</strong> of the same subject.{" "}
        <strong>Scheduled on weekends.</strong>
      </>
    ),
    tags: [
      { label: "100 Questions" },
      { label: "2 Hours" },
      { label: "Flexible", variant: "yellow" },
    ],
  },
  {
    title: "Full Length Tests (FLTs)",
    description: (
      <>
        <strong>FLTs</strong> are designed to build the{" "}
        <strong>Prelims mindset</strong>. They train you in{" "}
        <strong>
          real-time decision-making, what to attempt, what to skip, and how to
          manage risk
        </strong>{" "}
        under time pressure. These tests are crucial for refining{" "}
        <strong>attempt strategy, elimination skills, and time management.</strong>
      </>
    ),
    tags: [
      { label: "100 Questions" },
      { label: "2 Hours" },
      { label: "Flexible", variant: "yellow" },
    ],
  },
  {
    title: "Anubhav (All India Open Tests)",
    description: (
      <>
        <strong>Anubhav</strong> recreates the actual{" "}
        <strong>UPSC exam environment.</strong> Conducted{" "}
        <strong>once every month</strong>, these tests{" "}
        <strong>simulate exam-day pressure, competition</strong>, and
        uncertainty, helping you benchmark yourself nationally and assess true
        readiness. Dates are communicated well in advance to allow{" "}
        <strong>focused preparation.</strong>
      </>
    ),
    tags: [
      { label: "100 Questions" },
      { label: "2 Hours" },
      { label: "Non-Flexible", variant: "red" },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionHeading = ({
  black,
  blue,
}: {
  black: string;
  blue: string;
}) => (
  <div className="flex justify-center mt-10 mb-8">
    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center">
      <span className="text-black">{black} </span>
      <span className="text-[#1f5ea8]">{blue}</span>
    </h2>
  </div>
);

const NoticeBar = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full bg-[#d7d2d2] text-black font-bold text-lg p-3 rounded mb-4">
    {children}
  </div>
);

const FeatureCard = ({
  title,
  desc,
}: {
  title: string;
  desc: React.ReactNode;
}) => (
  <div className="border-[3px] border-[#0e50a2] rounded-2xl h-full">
    <div className="py-2 px-4">
      <p className="text-center mb-1 bg-[#0e50a2] text-white text-lg font-bold rounded-md py-1 px-2">
        {title}
      </p>
      <p className="text-center mt-3 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TestCard = ({ title, description, tags }: TestCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="bg-[#2b66b1] text-white font-bold text-center py-4 px-6">
      {title}
    </div>
    <div className="p-6">
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map((t, i) => (
          <Tag key={i} {...t} />
        ))}
      </div>
    </div>
  </div>
);

const CdnImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  // Using a regular <img> tag for external CDN images.
  // If you add the CDN hostname to next.config.js remotePatterns,
  // you can swap this for <Image /> from "next/image".
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    className={`w-full max-w-3xl shadow-md rounded ${className}`}
  />
);

// ─── Page Component ───────────────────────────────────────────────────────────

export default function PrelimsBoosterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-1">
      {/* Top Notice */}
      <div className="mt-2">
        <NoticeBar>
          Note: PBT - Inner Circle tests are available exclusively for NEXT IAS
          students from Foundation batch (GS or Optional), AIM, or CA-VA.
        </NoticeBar>

        {/* Download Button */}
        <a
          href="https://cdnstatic.nextias.com/newuploads/Nextias/2026/1/prelims-booster.pdf"
          className="inline-flex items-center gap-2 text-white bg-[#015ba5] rounded p-3 max-w-[255px] mt-3"
        >
          <svg
            fill="white"
            height="20"
            width="20"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.5 9.9V14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9.9a.5.5 0 0 0-1 0V14a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V9.9a.5.5 0 0 0-1 0z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L4.854 7.646a.5.5 0 1 0-.708.708l3.5 3.5z" />
          </svg>
          <span>Download Detailed Schedule</span>
        </a>

        {/* Hero Image */}
        <div className="flex justify-center mb-2 mt-8">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/inner-circle-pic.png"
            alt="Inner Circle"
          />
        </div>

        {/* Note below hero */}
        <p className="text-center mt-2">
          <strong>Note:</strong> Students currently enrolled in the{" "}
          <strong>GS Foundation</strong> or <strong>AIM (CSE 2026)</strong>{" "}
          batches do not need to register separately for this program.
        </p>

        {/* ── PBTs Program Features ── */}
        <SectionHeading black="What does the" blue="PBTs Program Include?" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programFeatures.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} />
          ))}
        </div>

        {/* ── Tests Explained ── */}
        <SectionHeading black="PBTs Tests" blue="Explained" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-5">
          {testTypes.map((t, i) => (
            <TestCard key={i} {...t} />
          ))}
        </div>

        {/* A-Week Image */}
        <div className="flex justify-center mb-5 mt-8">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/a-week.png"
            alt="A week in PBTs"
          />
        </div>

        {/* Reflection Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/reflection-booster.png"
            alt="Prelims questions reflections CSE 2025"
          />
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/new-reflection.png"
            alt="Prelims questions reflections CSE 2025"
          />
        </div>

        <div className="flex justify-center mb-5 mt-5">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/reflection3.png"
            alt="Reflection 3"
          />
        </div>

        <div className="flex justify-center mb-5 mt-5">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/learning.png"
            alt="Learning and testing loop in PBTs"
          />
        </div>

        <div className="flex justify-center mb-3 mt-5">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/what-do-we-commit-to-provide.png"
            alt="What do we commit to provide"
          />
        </div>

        <p className="text-center text-sm text-gray-600">
          *Students writing tests (online or offline) only on exam day at
          specified time will be considered for ranklist.
        </p>

        {/* ── Batch Details Table ── */}
        <div className="px-4 mt-8 pb-8">
          <h2 className="text-[#003049] font-bold text-2xl text-center mb-1">
            Batch Details
          </h2>
          <p className="text-center mb-4">
            Prelims Booster Test Series for the Inner Circle
          </p>

          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <thead className="bg-[#015ba5] border-b-4 border-slate-200">
                <tr className="text-left text-sm text-white tracking-wide">
                  {["Mode", "Fee", "Start Date", "Detailed Schedule", "Brochure"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-3 py-3 font-semibold text-center border-2 border-slate-300 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-sm text-slate-900 border-b-[5px] border-[#73a7f4]">
                <tr className="bg-[#eef6ff]">
                  <td className="px-2 py-4 border-2 border-slate-200 text-center">
                    Offline/Online
                  </td>
                  <td className="px-2 py-4 border-2 border-slate-200 text-center">
                    Rs. 3,390 + GST
                  </td>
                  <td className="px-2 py-4 border-2 border-slate-200 text-center">
                    2nd Feb, 2026
                  </td>
                  <td className="px-2 py-4 border-2 border-slate-200 text-center">
                    <a
                      href="https://cdnstatic.nextias.com/newuploads/Nextias/2026/1/prelims-booster.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-800 font-semibold hover:text-blue-600 underline decoration-2 underline-offset-4"
                    >
                      View Schedule
                    </a>
                  </td>
                  <td className="px-2 py-4 border-2 border-slate-200 text-center">
                    <a
                      href="https://cdnstatic.nextias.com/newuploads/Nextias/2025/12/prelims-booster-test.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-800 font-semibold hover:text-blue-600 underline decoration-2 underline-offset-4"
                    >
                      View Brochure
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Register CTA */}
        <div className="flex justify-center">
          <a
            href="https://forms.nextias.com/nextias/form/PrelimsBooster/formperma/M8_AzZoNIVKrlz04eo0JaNh3h68MlM4Qv7JYCIzzUV4"
            target="_blank"
            rel="noreferrer"
            className="bg-[#015ba5] text-white py-2 px-4 rounded hover:bg-[#014a8a] transition-colors"
          >
            Fill out the form to register
          </a>
        </div>

        {/* Bottom Notice */}
        <NoticeBar>
          Note: PBT - Inner Circle tests are available exclusively for NEXT IAS
          students from Foundation batch (GS or Optional), AIM, or CA-VA.
        </NoticeBar>

        {/* Analytics & Numbers Images */}
        <div className="flex justify-center mb-5">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/prelims-booster.png"
            alt="PBTs test analytics explained"
          />
        </div>

        <div className="flex justify-center mb-5">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/prelims-in-numbers.png"
            alt="Prelims booster in numbers"
          />
        </div>

        <div className="flex justify-center mb-5">
          <CdnImage
            src="https://cdnstatic.nextias.com/cdn-cgi/image/format=auto/resources/images/pbt-schedule.png"
            alt="PBTs schedule"
          />
        </div>
      </div>
    </div>
  );
}