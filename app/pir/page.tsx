import { type Metadata } from "next";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What is PIR? | EuroLeague Stats",
  description:
    "PIR (Performance Index Rating) explained — EuroLeague's all-in-one efficiency stat for evaluating player performance.",
};

const bars = [
  { flex: 18.4, value: "18.4", label: "Points", green: true, bright: true },
  { flex: 5.2, value: "5.2", label: "Reb", green: true, bright: false },
  { flex: 6.1, value: "6.1", label: "Assists", green: true, bright: true },
  { flex: 1.8, value: null, label: "Stl+Blk", green: true, bright: false },
  { flex: 1.8, value: null, label: "Drawn", green: true, bright: false },
  { flex: 4.8, value: "4.8", label: "Miss FG", green: false, bright: true },
  { flex: 1.2, value: null, label: "FT", green: false, bright: false },
  { flex: 2.8, value: "2.8", label: "TO", green: false, bright: true },
  { flex: 2.2, value: null, label: "Fouls", green: false, bright: false },
];

const takeaways = [
  {
    num: "01",
    color: "text-[#2E8B57]",
    title: "One number, whole night",
    desc: "Points, boards and turnovers folded into one sortable value.",
    descLong:
      "Instead of scanning points, boards and turnovers separately, PIR folds them into a single value you can sort a whole league by.",
  },
  {
    num: "02",
    color: "text-[#C0392B]",
    title: 'Rust isn\'t "bad"',
    desc: "Colors show the formula's direction, not a verdict.",
    descLong:
      "Green and rust show the formula's direction, not a verdict. A missed shot still counts against the ledger even on a great night.",
  },
  {
    num: "03",
    color: "text-scoreboard-amber",
    title: "Context",
    titleLong: "Context for the number",
    desc: "8 average · 15+ starter · 20+ All-EuroLeague.",
    descLong: null,
  },
];

export default function Pir() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ink-navy px-5 pt-10 pb-10 md:px-12 md:pt-14 md:pb-14">
        <p className="text-scoreboard-amber mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase">
          The one number
          <span className="hidden md:inline"> · Performance Index Rating</span>
        </p>

        <h1
          className={`${anton.className} mb-5 text-[3.25rem] leading-[0.95] text-white uppercase md:text-[5rem]`}
        >
          <span className="md:hidden">Read a game like a ledger</span>
          <span className="hidden md:block">
            Read a whole game like a ledger
          </span>
        </h1>

        {/* Mobile description */}
        <p className="mb-8 text-sm leading-relaxed text-gray-400 md:hidden">
          EuroLeague settles a whole box score into one number: everything a
          player <span className="text-navy-green font-semibold">added</span>,
          minus what they{" "}
          <span className="text-navy-rust font-semibold">gave back</span>. No
          exact NBA equivalent.
        </p>

        {/* Desktop description */}
        <p className="mb-10 hidden max-w-2xl text-sm leading-relaxed text-gray-400 md:block">
          American box scores make you juggle a dozen columns. EuroLeague
          settles them into one:{" "}
          <span className="font-semibold text-white">PIR</span>. Everything a
          player <span className="text-navy-green font-semibold">added</span> on
          the floor, minus everything they{" "}
          <span className="text-navy-rust font-semibold">gave back</span> — a
          single running total. There&apos;s no exact NBA equivalent; think of
          it as a live plus/minus for one player&apos;s own production.
        </p>

        {/* Formula card */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 px-5 py-7 text-center md:flex-row md:items-stretch md:gap-4 md:px-8 md:py-6 md:text-left">
          {/* Green box */}
          <div className="w-full rounded-xl border border-[#2E8B57]/40 bg-[#1c3d2c] px-4 py-4 md:flex md:flex-1 md:items-center md:gap-4">
            <span className="hidden shrink-0 rounded bg-[#2E8B57]/20 px-1.5 py-1 text-[9px] font-bold tracking-widest text-[#2E8B57] uppercase md:block">
              ADD
            </span>
            <div>
              <p className="text-sm font-medium tracking-wide text-white/90">
                Points · Rebounds · Assists
              </p>
              <p className="text-sm font-medium tracking-wide text-white/90">
                Steals · Blocks · Drawn fouls
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="h-0.5 w-5 rounded-full bg-gray-500 md:hidden" />
            <span className="hidden font-mono text-xl text-gray-400 md:block">
              −
            </span>
          </div>

          {/* Red box */}
          <div className="w-full rounded-xl border border-[#C0392B]/40 bg-[#3d1c1c] px-4 py-4 md:flex md:flex-1 md:items-center md:gap-4">
            <span className="hidden shrink-0 rounded bg-[#C0392B]/20 px-1.5 py-1 text-[9px] font-bold tracking-widest text-[#C0392B] uppercase md:block">
              SUB
            </span>
            <div>
              <p className="text-sm font-medium tracking-wide text-white/90">
                Missed FG · Missed FT
              </p>
              <p className="text-sm font-medium tracking-wide text-white/90">
                Turnovers · Fouls committed
              </p>
            </div>
          </div>

          {/* Equals */}
          <div className="flex shrink-0 items-center justify-center">
            <span className="font-mono text-gray-400 md:text-xl">=</span>
          </div>

          {/* PIR box */}
          <div className="border-scoreboard-amber/40 bg-scoreboard-amber/15 shrink-0 self-center rounded-md border-2 px-10 py-3">
            <p
              className={`${anton.className} text-scoreboard-amber text-3xl tracking-[0.15em]`}
            >
              PIR
            </p>
          </div>
        </div>
      </section>

      {/* ── Worked Example ── */}
      <section className="bg-warm-bone px-5 py-10 md:px-12 md:py-12">
        {/* Header row */}
        <div className="mb-7 md:mb-8 md:flex md:items-center md:justify-between md:gap-12">
          <div className="shrink-0">
            <p className="text-scoreboard-amber mb-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
              Worked example
              <span className="hidden md:inline">
                {" "}
                · One game of production
              </span>
            </p>
            <h2
              className={`${anton.className} text-[2.5rem] leading-none uppercase md:text-[3rem]`}
            >
              <span className="md:hidden">Campazzo&apos;s 22.3</span>
              <span className="hidden md:block">F. Campazzo&apos;s 22.3</span>
            </h2>
          </div>

          {/* Desktop: side description */}
          <p className="hidden max-w-xs pt-8 text-sm leading-relaxed text-gray-500 md:block">
            Each block below is one stat, sized to how much it moved the ledger.
            The green run is what he built; the rust tail is what came off.
            What&apos;s left standing is his PIR.
          </p>
        </div>

        {/* Bar chart */}
        <div className="mb-4">
          {/* Mobile: simple +/- labels */}
          <div className="mb-1.5 flex justify-between font-mono text-xs font-semibold md:hidden">
            <span className="text-[#2E8B57]">+33.3</span>
            <span className="text-[#C0392B]">−11.0</span>
          </div>

          {/* Desktop: four-point scale labels */}
          <div className="mb-1.5 hidden justify-between font-mono text-xs md:flex">
            <span className="text-gray-400">0</span>
            <span className="font-semibold text-[#2E8B57]">+33.3 added</span>
            <span className="font-semibold text-[#C0392B]">−11.0 back</span>
            <span className="text-gray-400">44.3 total</span>
          </div>

          {/* Bars */}
          <div className="flex h-11 gap-0.5 overflow-hidden rounded-lg md:h-14">
            {bars.map((bar, i) => (
              <div
                key={i}
                className={`flex items-center justify-center text-xs font-bold text-white ${
                  bar.green
                    ? bar.bright
                      ? "bg-[#2E8B57]"
                      : "bg-[#216B43]"
                    : bar.bright
                      ? "bg-[#C0392B]"
                      : "bg-[#E4796B]"
                }`}
                style={{ flex: bar.flex }}
              >
                {bar.value}
              </div>
            ))}
          </div>

          {/* Desktop: stat labels below bars */}
          <div className="mt-1 hidden md:flex">
            {bars.map((bar, i) => (
              <div
                key={i}
                className="flex justify-center overflow-hidden"
                style={{ flex: bar.flex }}
              >
                <span className="truncate text-[9px] text-gray-400">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Result card */}
        <div className="bg-ink-navy mb-7 flex items-center gap-4 rounded-2xl px-5 py-4 md:mb-10">
          <div className="shrink-0">
            <span
              className={`${anton.className} text-scoreboard-amber block text-5xl leading-none`}
            >
              22.3
            </span>
            <span className="hidden text-[9px] tracking-widest text-gray-500 uppercase md:block">
              NET PIR · per game
            </span>
          </div>

          {/* Mobile result text */}
          <p className="text-xs leading-relaxed text-gray-400 md:hidden">
            <span className="font-semibold text-[#2E8B57]">+33.3</span> built,{" "}
            <span className="font-semibold text-[#C0392B]">−11.0</span> back.
            Avg&nbsp;≈&nbsp;8, elite&nbsp;≈&nbsp;20+.
          </p>

          {/* Desktop result text */}
          <p className="hidden text-sm leading-relaxed text-gray-400 md:block">
            <span className="font-semibold text-[#2E8B57]">+33.3</span> built,{" "}
            <span className="font-semibold text-[#C0392B]">−11.0</span> given
            back. A PIR near{" "}
            <span className="font-semibold text-white">20+</span> marks an
            All-EuroLeague-level engine; the league average lands around{" "}
            <span className="font-semibold text-white">8</span>.
          </p>
        </div>

        {/* Takeaway cards */}
        <div>
          {/* Desktop section header */}
          <div className="mb-5 hidden items-center gap-4 md:flex">
            <p className="shrink-0 text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
              How to read it
            </p>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
            {takeaways.map(
              ({ num, color, title, titleLong, desc, descLong }) => (
                <div
                  key={num}
                  className="rounded-2xl bg-white px-5 py-5 shadow-sm"
                >
                  <p className={`${color} mb-1.5 text-sm font-bold`}>{num}</p>
                  <h3 className="mb-1.5 text-base font-bold">
                    <span className="md:hidden">{title}</span>
                    <span className="hidden md:block">
                      {titleLong ?? title}
                    </span>
                  </h3>
                  {/* Mobile desc */}
                  <p className="text-sm leading-relaxed text-gray-500 md:hidden">
                    {desc}
                  </p>
                  {/* Desktop desc */}
                  {descLong ? (
                    <p className="hidden text-sm leading-relaxed text-gray-500 md:block">
                      {descLong}
                    </p>
                  ) : (
                    <p className="hidden text-sm leading-relaxed text-gray-500 md:block">
                      Roughly:{" "}
                      <span className="font-semibold text-gray-700">8</span> is
                      average,{" "}
                      <span className="font-semibold text-gray-700">15+</span>{" "}
                      is a clear starter,{" "}
                      <span className="font-semibold text-gray-700">20+</span>{" "}
                      is All-EuroLeague territory.
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
