import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export interface CurrentSeries {
  id: number;
  name: string;
}

let timeOut: any;
const path = "/feature/series";

const useCurrentSeries = create(
  combine(
    {
      series: {
        id: null as any,
        list: [] as CurrentSeries[],
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          try {
            const res = await Api.get(path);

            await set((prev) => ({
              series: {
                ...prev.series,
                list: res,
                total: res?.meta?.total,
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

export default useCurrentSeries;
