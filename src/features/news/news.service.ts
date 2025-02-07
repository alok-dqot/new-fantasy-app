import { Match } from "@/features/match/match.service";
import { Competition } from "@/types/MatchScoreCard";
import Api from "@/util/api";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export interface Blog {
  id: number;
  name: string;
  type: string;
  short_name: string;
  seo_title: string;
  seo_des: string;
  content: string;
  tag: string;
  match: Match;
  series: Competition;
  created_at: string;
  updated_at: string;
  data: any;
}

let timeOut: any;
const path = "/latest-news-and-articles";

const useNewsStore = create(
  combine(
    {
      blog: {
        id: null as any,
        list: {} as any,
        total: 0,
        page: 1,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        type: "news",
        all: {} as any,
        allBlogList: {} as any,
        allBlogListTotal: 0,
        latest: {} as any,

        allSeriesBlogList: {} as any,
        allSeriesBlogTotal: 0,
      },
    },
    (set, get) => ({
      get: {
        list: async ({ size }: { size?: number }) => {
          try {
            const res = await Api.get(path, { query: { size } });
            await set((prev) => ({
              blog: {
                ...prev.blog,
                list: res,
                total: res?.meta?.total,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
        allNews: async ({ size, type }: { size?: number; type?: string }) => {
          try {
            const res = await Api.get("/news/list", { query: { size } });
            await set((prev) => ({
              blog: {
                ...prev.blog,
                all: res,
                total: res?.total,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
        allBlogs: async ({
          size,
          type,
          match_id,
        }: {
          size?: number;
          type?: string;
          match_id?: number;
        }) => {
          try {
            const res = await Api.get("/blog/list", { query: { size } });
            await set((prev) => ({
              blog: {
                ...prev.blog,
                allBlogList: res,
                allBlogListTotal: res?.total,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
        latestNews: async ({ size }: { size?: number }) => {
          try {
            const res = await Api.get("/latest-news");
            await set((prev) => ({
              blog: {
                ...prev.blog,
                latest: res,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        },
        allseriesNews: async ({ size }: { size?: number }) => {
          try {
            const res = await Api.get("/series-latest-news", {
              query: { size },
            });
            await set((prev) => ({
              blog: {
                ...prev.blog,
                allSeriesBlogList: res,
                allSeriesBlogTotal: res?.total,
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

export default useNewsStore;
