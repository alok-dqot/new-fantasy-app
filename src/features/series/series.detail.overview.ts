import { create } from "zustand";
import { combine } from "zustand/middleware";

import toast from "react-hot-toast";
import Api from "@/util/api";


export interface SeriesO {
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

export interface IPtsTable {
    id: number;
    competition_id: number;
    team_id: number;
    matches: number;
    win: number;
    loss: number;
    tied: number;
    nr: number;
    points: number;
    nrr: number;
    created_at: string;
    updated_at: string;
}

let timeOut: any;
const path = "/series/";

const useSeriesOStore = create(
    combine(
        {
            series: {
                id: null as any,
                list: {} as any,
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                paginate: true as boolean,
                series_id: null as any,
                team: [] as any,
                match: [] as any,
                raking: [] as any,
                ptsTable: [] as IPtsTable[],
            },
        },
        (set, get) => ({
            get: {
                list: async (series_id: string) => {


                    try {
                        const res = await Api.get(path + series_id)
                        await set((prev) => ({
                            series: {
                                ...prev.series,
                                list: res,
                                total: res?.meta?.total,
                                team: res?.teams,
                                match: res?.match,
                                ranking: res?.ranking,
                            },
                        }));
                    } catch (err) {

                    }


                },

                ptsTable: async (series_id: string) => {
                    try {
                        const res = await Api.get(path + series_id + "/standing")
                        await set((prev: any) => ({
                            series: {
                                ...prev.series,
                                ptsTable: res?.data,
                            },
                        }));
                    } catch (err) {

                    }

                },
            },
        }),
    ),
);

export default useSeriesOStore;
