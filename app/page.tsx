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

  const [searchTerm, setSearchTerm] = useState("");
  const [sortDir, setSortDir] = useState<SortDirection>("desc");
  const [sortCategory, setSortCategory] = useState<SortCategories>("pir");

  function handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function normalizeName(name: string): string {
    const parts: string[] = name
      .split(".,")
      .map((name: string): string => name.trim());
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`.toLowerCase();
    }
    return name.toLowerCase();
  }

  function filterArr(arr: MergedPlayer[]): MergedPlayer[] {
    const tokens: string[] = searchTerm
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (tokens.length === 0) return arr;

    return arr.filter((p: MergedPlayer): boolean => {
      const teamName: string = p.player.team.name.toLowerCase();
      const playerName: string = normalizeName(p.player.name);
      const haystack: string = `${playerName} ${teamName}`;

      return tokens.every((token: string) => haystack.includes(token));
    });
  }

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
      if (result.data.length > 0) {
        const filteredArr: MergedPlayer[] = filterArr(result.data);

        if (filteredArr.length > 0) {
          const sortedArr: MergedPlayer[] = sortArr(filteredArr);
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
          res = <EmptyState message={"No players match your search"} />;
        }
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
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-center">Player Leaderboard</h1>
      <input
        className="mb-4 border-2 border-gray-600"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Enter player or team name"
      />
      {res}
    </main>
  );
}
