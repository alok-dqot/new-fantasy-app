


import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import toast from 'react-hot-toast'
import Api from '@/util/api'




export interface Squad {
    id: number
    name: string
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
    data: any

}

let timeOut: any


const useSquadStore = create(
    combine(
        {
            squad: {
                id: null as any,
                list: {} as any,
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                series_id: null as any,
                team: [] as any,
                match: [] as any,
                players: [] as any,
            }
        },
        (set, get) => ({
            get: {
                list: async () => {
                    const {
                        squad: { page, size, search, series_id }
                    } = get()

                    toast.promise(Api.get(`competitions/${series_id}/squads`), {
                        loading: 'fetching...',
                        success: res => {
                            console.log(res)
                            set(prev => ({
                                squad: {
                                    ...prev.squad,
                                    list: res?.data,
                                    total: res?.meta?.total,

                                }
                            }))
                            return res?.message || 'fetched'
                        },
                        error: err => {
                            return err
                        }
                    })
                },
                paginate: ({
                    page,
                    size,
                    search,

                    type,
                    series_id,
                }: {
                    page?: number
                    size?: number
                    search?: string

                    type?: string
                    series_id: string
                }) => {
                    set(prev => ({ squad: { ...prev.squad, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            squad: {
                                ...prev.squad,
                                page: page || prev.squad.page,
                                size: size || prev.squad.size,
                                search: search || prev.squad.search,
                                // paginate: paginate ?? true,
                                // type: type || '',/
                                series_id: series_id || prev.squad.series_id,
                            }
                        }))
                        useSquadStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 1000)
                        set(prev => ({ squad: { ...prev.squad, search: search } }))
                        return
                    }
                    init()
                }
            },

            get_player: async (series_id: number, team_id: number) => {

                toast.promise(Api.get(`/competitions/${series_id}/teams/${team_id}`), {
                    loading: 'fetching...',
                    success: res => {
                        console.log(res)
                        set(prev => ({
                            squad: {
                                ...prev.squad,
                                players: res?.data,
                                // total: res?.meta?.total,
                            }
                        }))
                        return res?.message || 'fetched'
                    },
                    error: err => {
                        return err
                    }
                })
            }
        })
    )
)

export default useSquadStore
