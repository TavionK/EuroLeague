import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "What is PIR? | EuroLeague Stats",
  description:
    "PIR (Performance Index Rating) explained — EuroLeague's all-in-one efficiency stat for evaluating player performance.",
};

export default function Pir() {
  return (
    <section>
      <h1>What is PIR?</h1>
      <p>
        PIR (Performance Index Rating) is EuroLeague's all-in-one efficiency
        stat — a single number that tries to capture a player's total
        statistical contribution to a game, both good and bad.
      </p>

      <h2>The formula</h2>
      <p>
        PIR = (Points + Rebounds + Assists + Steals + Blocks + Drawn Fouls) -
        (Missed FGs + Missed FTs + Turnovers + Fouls Committed)
      </p>
      <p>
        Everything a player does well adds to the score. Everything that hurts
        their team — missed shots, turnovers, fouls — subtracts from it. The
        result is a rough single-number snapshot of "how much did this player
        help their team win."
      </p>

      <h2>Why it matters</h2>
      <p>
        Box scores are full of numbers, but no single stat tells you who
        actually played well. A player can score 20 points but shoot 6-for-20
        and turn the ball over five times — points alone don't capture that
        trade-off. PIR does, because missed shots and turnovers count against
        the score.
      </p>
      <p>
        For fans new to EuroLeague, PIR is a fast way to answer "who's actually
        good?" without needing years of context on the league. Sorting a
        leaderboard by PIR surfaces the most impactful players, full stop.
      </p>

      <h2>How it compares to the NBA</h2>
      <p>
        The NBA doesn't have an official equivalent, but PIR is conceptually
        similar to <strong>Player Efficiency Rating (PER)</strong> or
        <strong>Game Score</strong> — both are "everything-in-one-number" stats
        designed to summarize a box score performance. If you're used to
        checking PER or Game Score to gauge who balled out, PIR is EuroLeague's
        version of that same idea.
      </p>
      <p>
        One difference worth noting: PIR is simpler and more linear than PER (no
        pace adjustments, no per-minute normalization), which makes it easier to
        explain but also means it can favor high-minute, high-usage players.
      </p>
    </section>
  );
}
