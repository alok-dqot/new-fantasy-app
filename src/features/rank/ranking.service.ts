import { create } from "zustand";
import { combine } from "zustand/middleware";
import toast from "react-hot-toast";
import Api from "@/util/api";

export interface Player {
  image_url: string;
  rating: number;
  id: number;
  name: string;
  short_name: string;
  date_of_birth: string;
  gender: string;
  country_id: number;
  image: string;
  playing_role: string;
  batting_style: string;
  bowling_style: string;
  credit: string;
  nationality: any;
  created_at: string;
  updated_at: string;
  country: Country;
  format: string;

  change: string;
  shortname: string;
  path: string;
  team_name: string;
  player_name: string;
  points: number;
  country_img: string;
}

export interface Country {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

let timeOut: any;
// const path = '/teams/rank/all'

const useMensRankStore = create(
  combine(
    {
      player: {
        id: null as any,
        list: [] as Player[],
        data: null as any,
        total: 0,
        page: 1,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        format: "ALL",
        gender: "M",
        path: "",
        type: "BAT",
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            player: { path, format, gender, type },
          } = get();

          toast.promise(Api.get(path, { query: { format, type, gender } }), {
            loading: "fetching...",
            success: (res) => {
              // console.log(res.data)
              set((prev) => ({
                player: {
                  ...prev.player,
                  list: res?.data,
                  total: res?.meta?.total,
                },
              }));
              return res?.message || "fetched";
            },
            error: (err) => {
              return err;
            },
          });
        },
        paginate: ({
          page,
          size,
          search,
          paginate,
          format,
          gender,
          path,
          type,
        }: {
          page?: number;
          size?: number;
          search?: string;
          paginate?: boolean;
          format: string;
          gender: string;
          path: string;
          type?: string;
        }) => {
          set((prev) => ({ player: { ...prev.player, search: search || "" } }));

          clearTimeout(timeOut);

          const init = () => {
            set((prev) => ({
              player: {
                ...prev.player,
                page: page || prev.player.page,
                size: size || prev.player.size,
                search: search || prev.player.search,
                paginate: paginate ?? true,
                format: format || prev.player.format,
                gender: gender || prev.player.gender,
                path: path,
                type: type || prev.player.type,
              },
            }));
            useMensRankStore.getState().get.list();
          };

          init();
        },
      },
      select: (id: any) =>
        set((prev) => ({ player: { ...prev.player, id: id } })),
    })
  )
);

export default useMensRankStore;
