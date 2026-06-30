"use client";
import { usePlayersData } from "@/hooks/usePlayersData";
import { ErrorState, EmptyState, LoadingState } from "@/components/TableStates";
import PlayerTable from "@/components/PlayerTable";

export default function Home() {
  const result = usePlayersData();
  console.log(result);
  let res;
  switch (result.status) {
    case "success":
      console.log("success");
      if (result.data.length > 0) {
        res = <PlayerTable mergedPlayersArray={result.data} />;
      } else {
        res = <EmptyState />;
      }

      break;
    case "error":
      console.log(result.error);
      res = <ErrorState />;
      break;
    case "pending":
      console.log("pending");
      res = <LoadingState />;
      break;
  }

  return (
    <main>
      <h1>Player Leaderboard</h1>
      {res}
    </main>
  );
}
