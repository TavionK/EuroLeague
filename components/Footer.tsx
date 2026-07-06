import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-ink-navy px-5 py-8 md:px-12 md:py-10">
      <div className="md:grid md:grid-cols-[2fr_1.5fr_1.5fr] md:gap-12">

        {/* Brand column */}
        <div className="mb-5 md:mb-0">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="h-6 w-6 shrink-0 rounded-md bg-[#2E8B57]" />
            <span
              className={`${anton.className} text-xl uppercase tracking-wide text-white`}
            >
              Ledger
            </span>
          </div>

          {/* Mobile: condensed data line */}
          <p className="mb-3 font-mono text-xs text-gray-500 md:hidden">
            DATA · feeds.incrowdsports.com · E2025
          </p>

          {/* Desktop: tagline */}
          <p className="hidden text-sm leading-relaxed text-gray-400 md:block">
            An independent EuroLeague reference for American fans. Every stat,
            one ledger: what a player added, minus what they gave back.
          </p>
        </div>

        {/* Data Source column — desktop only */}
        <div className="hidden md:block">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Data Source
          </p>
          <p className="mb-1 text-sm font-medium text-white/80">
            EuroLeague official feeds
          </p>
          <p className="mb-2 font-mono text-xs text-gray-500">
            feeds.incrowdsports.com
          </p>
          <p className="text-xs text-gray-500">Season E2025 · updated nightly</p>
        </div>

        {/* Methodology column */}
        <div>
          {/* Mobile: short blurb */}
          <p className="text-xs leading-relaxed text-gray-500 md:hidden">
            208 qualified players, per-game. Green / rust denote formula
            direction, not a judgment.
          </p>

          {/* Desktop: full methodology */}
          <div className="hidden md:block">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Methodology
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              PIR is returned pre-calculated as{" "}
              <span className="text-scoreboard-amber">valuation</span>.
              Leaderboard covers 208 qualified players (per-game mode). Green /
              rust denote formula direction, not a judgment on the stat.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
