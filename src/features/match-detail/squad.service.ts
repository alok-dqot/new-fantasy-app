import { combine } from "zustand/middleware";
import { create } from "zustand";
import { Player } from "@/types/MatchScoreCard";
import { Team } from "@/services/match/match.service";
import Api from "@/util/api";

interface TeamSquad {
  id: number;
  list: Player[];
  team: Team[];
}

const useSquadStore = create(
  combine(
    {
      squad: {
        id: null as any,
        list: [] as TeamSquad[],
        teama: {} as Team,
        teamb: {} as Team,
      },
    },
    (set, get) => ({
      get: {
        list: async (matchId: number) => {
          try {
            const res = await Api.get(`/matches/${matchId}/squads`);
            await set((prev) => ({
              squad: {
                ...prev.squad,
                list: res,
                teama: res?.teama,
                teamb: res?.teamb,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
      },
    })
  )
);

export default useSquadStore;
