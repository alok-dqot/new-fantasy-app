import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export interface Footer {
  id: number;
  name: string;
  type: string;
  short_name: string;
  seo_title: string;
  seo_des: string;
  content: string;
  tag: string;
  match: any;
  series: any;
  created_at: string;
  updated_at: string;
  data: any;
}

let timeOut: any;
const path = "/setting";

const useFooterStore = create(
  combine(
    {
      footer: {
        id: null as any,
        list: {} as any,
        total: 0,
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          try {
            const res = await Api.get(path + "/social_media", { query: {} });
            set((prev) => ({
              footer: {
                ...prev.footer,
                list: res?.data,
                total: res?.meta?.total,
              },
            }));
          } catch (error) {}
        },
      },
    })
  )
);

export default useFooterStore;
