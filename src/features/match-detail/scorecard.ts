import { create } from "zustand";
import { combine } from "zustand/middleware";
import Api from "@/util/api";

export interface ScoreCard {
  id: number;
  order: number;
  name: string;
  type: string;
  format: string;
  start_date: string;
  end_date: string;
  competition_id: number;
  created_at: string;
  updated_at: string;
  competition: any;
  batting: BattingPlayer[];
  bowling: BallDetails[];
  fow: BowlerStats[];
}

interface BattingPlayer {
  player_id: number;
  name: string;
  player_img: string;
  ball_faced: number;
  runs: number;
  fours: number;
  sixes: number;
  strike_rate: string;
  how_out: string;
  out_by_id: number;
  out_by: string;
  out_by_img: string;
  value: string;
}

interface BallDetails {
  balls: number;
  four: string;
  non_striker_id: number;
  runs: string;
  six: string;
  striker_id: number;
}

interface BowlerStats {
  economy_rate: string;
  id: number;
  maidens: number;
  name: string;
  overs: number;
  runs: number;
  wickets: number;
  wide: number;
}

const useScoreCardStore = create(
  combine(
    {
      score: {
        id: null as any,
        list: {} as any,
        total: 0,
        page: 1,
        size: 10,
        search: null as string | null,
      },
    },
    (set, get) => ({
      get: {
        list: async (matchId: number) => {
          try {
            const res = await Api.get(`/matches/${matchId}/statistics`);
            await set((prev) => ({
              score: {
                ...prev.score,
                list: res.data,
              },
            }));
          } catch (error) {}
        },
      },
      select: (id: any) =>
        set((prev) => ({ score: { ...prev.score, id: id } })),
    })
  )
);

export default useScoreCardStore;
