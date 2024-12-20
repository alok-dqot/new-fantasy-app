import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useSeriesStatsStore = create(
  combine(
    {
      stats: {
        id: null as any,
        list: null as any,
        total: 0,
        page: 1,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        filterList: [],
        filterData: [],
        tableData: [],
        tableHeader: [],
      },
    },
    (set, get) => ({
      get: {
        filterList: async () => {
          try {
            const res = await Api.get(`/competitions/statstype`);
            set((prev) => ({
              stats: {
                ...prev.stats,
                filterList: res,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
        filteredData: async ({ id, type }: { id: number; type: string }) => {
          if (!id) return;
          set((prev) => ({
            stats: {
              ...prev.stats,
              tableData: [],
            },
          }));
          try {
            const res = await Api.get(`competitions/${id}/stats/${type}`);
            const tableData1 = Object.keys(res)[1];
            // console.log(res[tableData1]?.value)
            set((prev) => ({
              stats: {
                ...prev.stats,
                tableHeader: res[tableData1]?.header,
                tableData: res[tableData1]?.value,
              },
            }));
          } catch (err) {
            console.log(err);
            set((prev) => ({
              stats: {
                ...prev.stats,
                tableHeader: [],
                tableData: [],
              },
            }));
          }
        },
      },
    })
  )
);

export default useSeriesStatsStore;
