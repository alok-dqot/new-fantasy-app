import { create } from "zustand";
import { combine } from "zustand/middleware";

import toast from "react-hot-toast";
import Api from "@/util/api";

export interface Navbar {
  id: number;
  title: string;
  compitition: any;
  thum_img: string;
  des: string;
  videoLink: string;
  video_link: string;
}

export interface CompTeam {
  competition: object;
  video: object;
}

export interface Country {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

let timeOut: any;
const path = "/feature/menu";

const useNavFeatureStore = create(
  combine(
    {
      navFeature: {
        id: null as any,
        list: [] as Navbar[],
        total: 0,
        page: 1,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        filter: null as string | null,
        series_id: "",
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            navFeature: { page, size, search, paginate },
          } = get();

          toast.promise(Api.get(path, { query: { size } }), {
            loading: "fetching...",
            success: (res: any) => {
              set((prev) => ({
                navFeature: {
                  ...prev.navFeature,
                  list: res?.data,
                  total: res?.meta?.total,
                },
              }));
              return res?.message || "fetched";
            },
            error: (err: any) => {
              return err;
            },
          });
        },
        paginate: ({
          page,
          size,
          search,
          paginate,
          filter,
        }: // series_id,
        {
          page?: number;
          size?: number;
          search?: string;
          paginate?: boolean;
          filter?: string;
          // series_id?: string
        }) => {
          set((prev) => ({
            navFeature: { ...prev.navFeature, search: search || "" },
          }));

          clearTimeout(timeOut);

          const init = () => {
            set((prev) => ({
              navFeature: {
                ...prev.navFeature,
                page: page || prev.navFeature.page,
                size: size || prev.navFeature.size,
                search: search || prev.navFeature.search,
                // series_id: series_id || prev.video.series_id,
                paginate: paginate ?? true,
                filter: filter || null,
              },
            }));
            useNavFeatureStore.getState().get.list();
          };

          if (search) {
            timeOut = setTimeout(() => {
              init();
            }, 1000);
            set((prev) => ({
              navFeature: { ...prev.navFeature, search: search },
            }));
            return;
          }
          init();
        },
      },
      select: (id: any) =>
        set((prev) => ({ navFeature: { ...prev.navFeature, id: id } })),
    })
  )
);

export default useNavFeatureStore;
