import { create } from "zustand";
import { combine } from "zustand/middleware";
// import { Match } from "../Matches/matchServices"
// import { Player } from "../players/player.service"
// import { Team } from "../teams/teamService"
import Api from "@/util/api";
import { Match, Player, Team } from "@/features/match/match.service";

const path = "/home/matches";
var timeOut = 5000;

const useUpcomingLiveStore = create(
  combine(
    {
      match: {
        id: null as any,
        list: [] as Match[],
        total: 0,
        page: 1,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Match | undefined,
        batTeamPlayer: [] as Player[],
        bowlTeamPlayer: [] as Player[],
        batTeam: undefined as Team | undefined,
        bowlTeam: undefined as Team | undefined,
      },
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            match: { page, size, search },
          } = get();

          try {
            const res = await Api.get(path, { query: { page, size } });
            await set((prev) => ({
              match: {
                ...prev.match,
                list: res.data,
                total: res?.meta?.total,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },

        detail: async (id: number) => {
          try {
            const res = await Api.get(`${path}/${id}`);
            await set((prev) => ({
              match: {
                ...prev.match,
                detail: res,
                id: id,
                bowlTeamPlayer: res?.bowlTeamPlayer,
                batTeamPlayer: res?.batTeamPlayer,
                batTeam: res?.batTeam,
                bowlTeam: res?.bowlTeam,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
        paginate: ({
          page,
          size,
          search,
          paginate,
        }: {
          page?: number;
          size?: number;
          search?: string;
          paginate?: boolean;
        }) => {
          set((prev) => ({ match: { ...prev.match, search: search || "" } }));

          clearTimeout(timeOut);

          const init = () => {
            set((prev) => ({
              match: {
                ...prev.match,
                page: page || prev.match.page,
                size: size || prev.match.size,
                search: search || prev.match.search,
                paginate: paginate ?? true,
              },
            }));
            useUpcomingLiveStore.getState().get.list();
          };

          init();
        },
      },
      select: (id: any) =>
        set((prev) => ({ match: { ...prev.match, id: id } })),

      addDetails: (data: any, total?: number) => {
        set((prev) => ({
          match: {
            ...prev.match,
            list: data,
            total: total || 10,
          },
        }));
      },
    })
  )
);

export default useUpcomingLiveStore;
