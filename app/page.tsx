"use client";
import { usePlayersData } from "@/hooks/usePlayersData";
import { ErrorState, EmptyState, LoadingState } from "@/components/TableStates";
import PlayerTable from "@/components/PlayerTable";
import { useState } from "react";
import {
  MergedPlayer,
  SortCategories,
  SortDirection,
} from "@/types/euroleague";

export default function Home() {
  const result = usePlayersData();
  console.log(result);

  const [sortDir, setSortDir] = useState<SortDirection>("desc");
  const [sortCategory, setSortCategory] = useState<SortCategories>("pir");

  function sortArr(arr: MergedPlayer[]): MergedPlayer[] {
    const sortedArr: MergedPlayer[] = [...arr];
    sortedArr.sort((a: MergedPlayer, b: MergedPlayer): number => {
      if (sortDir === "asc") {
        return a[sortCategory] - b[sortCategory];
      }
      // descending - Higher first
      else {
        return -(a[sortCategory] - b[sortCategory]);
      }
    });
    return sortedArr;
  }

  let res;
  switch (result.status) {
    case "success":
      console.log("success");
      if (result.data.length > 0) {
        const sortedArr: MergedPlayer[] = sortArr(result.data);
        res = (
          <PlayerTable
            mergedPlayersArray={sortedArr}
            sortCategory={sortCategory}
            setSortCategory={setSortCategory}
            sortDir={sortDir}
            setSortDir={setSortDir}
          />
        );
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
