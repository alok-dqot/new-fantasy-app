import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const path = "/home/featured/matches";

const useUpcomingStore = create(
  combine(
    {
      match: {
        id: null as any,
        seriesList: [] as any,
        list: [] as any,
        totalList: [] as any,
        selectedSeriesId: null as any,
        total: null as any,
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          try {
            const res = await Api.get(path);

            await set((prev) => ({
              match: {
                ...prev.match,
                seriesList: res?.data,
                totalList: res.allMatches,
                selectedSeriesId: null,
                total: res.allMatches?.length,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },

        seriesMatches: (seriesId: any) => {
          let seriesList = get().match.seriesList;
          const series = seriesList.find(
            (series: any) => series.id === seriesId
          ) as any;
          set((prev) => ({
            match: {
              ...prev.match,
              totalList: series ? series.matches : [],
              selectedSeriesId: seriesId,
            },
          }));
        },
        refreshmatches: async () => {
          let seriesId = get().match.selectedSeriesId;

          try {
            const res = await Api.get(path);
            const series = await res.data.find(
              (series: any) => series.id === seriesId
            );

            await set((prev) => ({
              match: {
                ...prev.match,
                seriesList: res.data,
                totalList: seriesId ? series.matches : res.allMatches,
                total: res.allMatches?.length,
              },
            }));
          } catch (error) {
            console.log(error);
          }
        },
      },
    })
  )
);

export default useUpcomingStore;
