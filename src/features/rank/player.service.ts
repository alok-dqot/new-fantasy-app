import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const usePlayerRankStore = create(
  combine(
    {
      player: {
        id: null as any,
        list: [] as any,
        data: null as any,
        size: 5,
        format: "ALL",
        gender: "M",
      },
    },
    (set, get) => ({
      get: {
        list: async ({ gender, size }: { gender: string; size: number }) => {
          try {
            const res = await Api.get("/player/rank/all", {
              query: { size, gender },
            });
            await set((prev) => ({
              player: {
                ...prev.player,
                list: res,
                total: res?.meta?.total,
              },
            }));
          } catch (err) {}
        },
        
        //  info:async ({ gender, size }: { gender: string; size: number }) => {
        //   try {
        //     const res = await Api.get("/player/rank/all", {
        //       query: { size, gender },
        //     });
        //     await set((prev) => ({
        //       player: {
        //         ...prev.player,
        //         list: res,
        //         total: res?.meta?.total,
        //       },
        //     }));
        //   } catch (err) {}
        // },

      },
    })
  )
);

export default usePlayerRankStore;
