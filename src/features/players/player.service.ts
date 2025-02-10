import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";


const usePlayerInfoStore = create(
  combine(
    {
      player: {
     
        detail:{} as any,
      },
    },
    (set, get) => ({
      get: {
        info: async (playerId: number) => {
          try {
            const res = await Api.get(`/players/${playerId}`);
            await set((prev) => ({
              player: {
                ...prev.player,
                detail: res.data,
              },
            }));
          } catch (error) {}
        },
      },
     
    })
  )
);

export default usePlayerInfoStore;
