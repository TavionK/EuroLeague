import {
  MergedPlayer,
  SortCategories,
  SortDirection,
} from "@/types/euroleague";

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
    console.log("clicked");
  }

  return (
    <div className="flex w-full items-center justify-center">
      <table className="w-8/10 border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">Rank</th>
            <th className="border border-gray-500 p-2">Team</th>
            <th className="border border-gray-500 p-2">Name</th>
            <th className="border border-gray-500 p-2">
              <button onClick={() => setNewSortCategory("pointsScored")}>
                PPG
              </button>
            </th>
            <th className="border border-gray-500 p-2">
              <button onClick={() => setNewSortCategory("assists")}>APG</button>
            </th>
            <th className="border border-gray-500 p-2">
              <button onClick={() => setNewSortCategory("totalRebounds")}>
                RPG
              </button>
            </th>
            <th className="border border-gray-500 p-2">
              <button onClick={() => setNewSortCategory("pir")}>PIR</button>
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
