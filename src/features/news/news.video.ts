import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import toast from 'react-hot-toast'
import Api from '@/util/api'






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
const path = '/videos/series'

const useVideoNewsStore = create(
    combine(
        {
            video: {
                id: null as any,
                list: null as any,
                search: null as any,
                size: 10 as number,
                total: null as any,
            }
        },
        (set, get) => ({
            get: {
                list: async ({ search, size }: { search?: string, size?: number }) => {


                    try {
                        const res = await Api.get(path, { query: { search, size: size } })
                        set(prev => ({
                            video: {
                                ...prev.video,
                                list: res?.data,
                                total: res?.meta?.total
                            }
                        }))
                    } catch (err) {
                        console.log(err)
                    }

                },

            },

        })
    )
)

export default useVideoNewsStore
