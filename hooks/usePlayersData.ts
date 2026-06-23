import { useQuery } from "@tanstack/react-query";
import {
  AdvancedPlayer,
  MergedPlayer,
  TraditionalPlayer,
} from "@/types/euroleague";
import { fetchAdvanced, fetchTraditional } from "@/lib/euroleague-api";

export function usePlayersData() {
  return useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const [traditional, advanced] = await Promise.all([
        fetchTraditional(),
        fetchAdvanced(),
      ]);
      const advancedMap = new Map(
        advanced.map((pObj: AdvancedPlayer): [string, AdvancedPlayer] => [
          pObj.player.code,
          pObj,
        ])
      );
      const mergedPlayers: MergedPlayer[] = traditional.map(
        (pObj: TraditionalPlayer) => {
          const trad = advancedMap.get(pObj.player.code);
          return { ...pObj, ...trad };
        }
      );
      return mergedPlayers;
    },
  });
}
