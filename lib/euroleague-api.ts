import { AdvancedPlayer, TraditionalPlayer } from "@/types/euroleague";

const baseUrl = "https://feeds.incrowdsports.com";

export async function fetchTraditional(): Promise<TraditionalPlayer[]> {
  const response = await fetch(
    `${baseUrl}/provider/euroleague-feeds/v3/competitions/E/statistics/players/traditional?seasonMode=Single&statistic=valuation&limit=1000&sortDirection=descending&seasonCode=E2025&statisticMode=perGame&statisticSortMode=perGame`
  );

  const data = (await response.json()) as { players: TraditionalPlayer[] };
  return data.players;
}

export async function fetchAdvanced(): Promise<AdvancedPlayer[]> {
  const response = await fetch(
    `${baseUrl}/provider/euroleague-feeds/v3/competitions/E/statistics/players/advanced?seasonMode=Single&statistic=effectiveFieldGoalPercentage&limit=1000&sortDirection=descending&seasonCode=E2025&statisticMode=perGame&statisticSortMode=perGame`
  );

  const data = (await response.json()) as { players: AdvancedPlayer[] };
  return data.players;
}
