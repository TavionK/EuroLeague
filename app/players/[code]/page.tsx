import { fetchTraditional } from "@/lib/euroleague-api";
import { notFound } from "next/navigation";
import { TraditionalPlayer } from "@/types/euroleague";

export const revalidate = 86400;

export async function generateStaticParams() {
  const players: TraditionalPlayer[] = await fetchTraditional();

  return players.map((player: TraditionalPlayer): { code: string } => ({
    code: player.player.code,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<
  | { title?: undefined; description?: undefined }
  | { title: string; description: string }
> {
  const { code } = await params;
  const players: TraditionalPlayer[] = await fetchTraditional();
  const player: TraditionalPlayer | undefined = players.find(
    (p: TraditionalPlayer): boolean => p.player.code === code
  );

  if (!player) return {};

  return {
    title: `${player.player.name} — EuroLeague Stats`,
    description: `${player.player.name}'s PIR, points, rebounds, assists and more for the current EuroLeague season.`,
  };
}

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const players: TraditionalPlayer[] = await fetchTraditional();
  const player: TraditionalPlayer | undefined = players.find(
    (p: TraditionalPlayer): boolean => p.player.code === code
  );

  if (!player) {
    notFound();
  }

  return (
    <div>
      <h1>{player.player.name}</h1>
      <p>{player.player.team.name}</p>
      {/* stat layout goes here */}
    </div>
  );
}
