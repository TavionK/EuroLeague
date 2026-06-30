import { MergedPlayer, SortCategories } from "@/types/euroleague";

interface PlayerTableProps {
  mergedPlayersArray: MergedPlayer[];
  setSortCategory: (category: SortCategories) => void;
}

export default function PlayerTable({
  mergedPlayersArray,
  setSortCategory,
}: PlayerTableProps) {
  console.log(mergedPlayersArray);
  function setNewSortCategory(category: SortCategories) {
    setSortCategory(category);
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
            <th
              onClick={() => setNewSortCategory("pointsScored")}
              className="border border-gray-500 p-2"
            >
              PPG
            </th>
            <th
              onClick={() => setNewSortCategory("assists")}
              className="border border-gray-500 p-2"
            >
              APG
            </th>
            <th
              onClick={() => setNewSortCategory("totalRebounds")}
              className="border border-gray-500 p-2"
            >
              RPG
            </th>
            <th
              onClick={() => setNewSortCategory("pir")}
              className="border border-gray-500 p-2"
            >
              PIR
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
