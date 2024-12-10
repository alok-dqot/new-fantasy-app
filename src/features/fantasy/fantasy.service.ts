import Api from '@/util/api';
import { create } from 'zustand'
import { combine } from 'zustand/middleware';



export interface Fantasy {
    id: number
    title: string;
    compitition: any;
    thum_img: string;
    des: string;
    videoLink: string;
    video_link: string;
}


export interface CompTeam {
    competition: object
    video: object
}

export interface Country {
    id: number
    name: string
    created_at: string
    updated_at: string
}

let timeOut: any
const path = '/feature-analysis'

const useFantasyStore = create(
    combine(
        {
            fantasy: {
                id: null as any,
                list: [] as Fantasy[],
                total: 0,
                format: [] as any,
                series: [] as any,
                teams: [] as any,
            }
        },
        (set, get) => ({
            get: {
                list: async (size?: number, page?: number,) => {

                    try {
                        const res = await Api.get(path, { query: { size, page } })
                        set(prev => ({
                            fantasy: {
                                ...prev.fantasy,
                                list: res?.data,
                                total: res?.meta?.total
                            }
                        }))

                    } catch (error) {
                        console.log(error)
                    }
                },

            },


        })
    )
)

export default useFantasyStore
