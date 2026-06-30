import { MergedPlayer } from "@/types/euroleague";

interface PlayerTableProps {
  mergedPlayersArray: MergedPlayer[];
}

export default function PlayerTable({ mergedPlayersArray }: PlayerTableProps) {
  console.log(mergedPlayersArray);
  return (
    <div className="flex w-full items-center justify-center">
      <table className="w-8/10 border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">Rank</th>
            <th className="border border-gray-500 p-2">Name</th>
            <th className="border border-gray-500 p-2">PPG</th>
            <th className="border border-gray-500 p-2">APG</th>
            <th className="border border-gray-500 p-2">RPG</th>
            <th className="border border-gray-500 p-2">PIR</th>
          </tr>
        </thead>
        <tbody>
          {mergedPlayersArray.map((p: MergedPlayer, index: number) => (
            <tr key={p.player.code}>
              <td className="border border-gray-500 p-2">{index + 1}</td>
              <td className="border border-gray-500 p-2">{p.player.name}</td>
              <td className="border border-gray-500 p-2">{p.pointsScored}</td>
              <td className="border border-gray-500 p-2">{p.assists}</td>
              <td className="border border-gray-500 p-2">{p.totalRebounds}</td>
              <td className="border border-gray-500 p-2">{p.pir}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
