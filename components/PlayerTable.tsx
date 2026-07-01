import {
  MergedPlayer,
  SortCategories,
  SortDirection,
} from "@/types/euroleague";

import { CircleQuestionMark } from "lucide-react";
import { Popover } from "radix-ui";
import Link from "next/link";

interface PlayerTableProps {
  mergedPlayersArray: MergedPlayer[];
  setSortCategory: (category: SortCategories) => void;
  sortCategory: SortCategories;
  sortDir: SortDirection;
  setSortDir: (direction: SortDirection) => void;
}

export default function PlayerTable({
  mergedPlayersArray,
  setSortCategory,
  setSortDir,
  sortCategory,
  sortDir,
}: PlayerTableProps) {
  function setNewSortCategory(category: SortCategories): void {
    if (category !== sortCategory) {
      setSortDir("desc");
      setSortCategory(category);
    } else {
      if (sortDir === "asc") {
        setSortDir("desc");
      } else {
        setSortDir("asc");
      }
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      <table className="w-8/10 border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">Rank</th>
            <th className="border border-gray-500 p-2">Team</th>
            <th className="border border-gray-500 p-2">Name</th>
            <th
              aria-sort={
                sortCategory === "pointsScored"
                  ? sortDir === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
              className="border border-gray-500 p-2"
            >
              <button onClick={() => setNewSortCategory("pointsScored")}>
                PPG
              </button>
            </th>
            <th
              aria-sort={
                sortCategory === "assists"
                  ? sortDir === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
              className="border border-gray-500 p-2"
            >
              <button onClick={() => setNewSortCategory("assists")}>APG</button>
            </th>
            <th
              aria-sort={
                sortCategory === "totalRebounds"
                  ? sortDir === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
              className="border border-gray-500 p-2"
            >
              <button onClick={(): void => setNewSortCategory("totalRebounds")}>
                RPG
              </button>
            </th>
            <th
              aria-sort={
                sortCategory === "pir"
                  ? sortDir === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
              className="border border-gray-500 p-2"
            >
              <div className="flex items-center justify-between">
                <button onClick={(): void => setNewSortCategory("pir")}>
                  PIR
                </button>
                <Popover.Root>
                  <Popover.Trigger
                    className="Trigger"
                    aria-label="What is PIR?"
                  >
                    <CircleQuestionMark aria-hidden="true" />
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content sideOffset={3}>
                      <Popover.Arrow className="fill-gray-400" />
                      <div className="rounded-md bg-gray-400 p-3">
                        <p>
                          PIR combines everything a player does well, and
                          subtracts everything that hurts their team, into one
                          number.{" "}
                        </p>
                        <Link href="/pir" className="underline">
                          Learn More about PIR.
                        </Link>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {mergedPlayersArray.map((p: MergedPlayer, index: number) => {
            const nameParts: string[] = p.player.name.split(",");
            const fName = nameParts[1].trimStart();
            const lName = nameParts[0];
            return (
              <tr key={p.player.code}>
                <td className="border border-gray-500 p-2">{index + 1}</td>
                <td className="border border-gray-500 p-2">
                  {p.player.team.name}
                </td>
                <td className="border border-gray-500 p-2">
                  {fName + " " + lName}
                </td>
                <td className="border border-gray-500 p-2">{p.pointsScored}</td>
                <td className="border border-gray-500 p-2">{p.assists}</td>
                <td className="border border-gray-500 p-2">
                  {p.totalRebounds}
                </td>
                <td className="border border-gray-500 p-2">{p.pir}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
