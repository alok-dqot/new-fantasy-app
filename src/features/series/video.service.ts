import Api from '@/util/api';
import { create } from 'zustand'
import { combine } from 'zustand/middleware'



export interface Video {
    id: number
    name: string
    title: string;
    type: string;
    short_name: string;
    seo_title: string;
    seo_des: string;
    content: string;
    tag: string
    match: any;
    series: any;
    created_at: string
    updated_at: string;

}

let timeOut: any
const path = '/videos'

const useSeriesVideoStore = create(
    combine(
        {
            video: {
                id: null as any,
                list: null as any,
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                paginate: true as boolean,
                type: 'news',
            }
        },
        (set, get) => ({
            get: {
                list: async () => {
                    const {
                        video: { page, size, search, type, id }
                    } = get()

                    try {
                        const res = await Api.get(`/videos`, { query: { page, size, search } })
                        set(prev => ({
                            video: {
                                ...prev.video,
                                list: res,
                            }
                        }))
                    }
                    catch (err) {
                        console.log(err)
                    }
                }
            },

        })
    )
)

export default useSeriesVideoStore
