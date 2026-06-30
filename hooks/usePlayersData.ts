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
    queryFn: async (): Promise<MergedPlayer[]> => {
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

      return traditional.map(
        (traditionalPlayer: TraditionalPlayer): MergedPlayer => {
          return {
            ...traditionalPlayer,
            ...advancedMap.get(traditionalPlayer.player.code),
          } as MergedPlayer;
        }
      );
    },
  });
}
