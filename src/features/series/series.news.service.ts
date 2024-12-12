import Api from '@/util/api';
import { create } from 'zustand'
import { combine } from 'zustand/middleware'




export interface SeriesN {
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
const path = '/news/'

const useSeriesNStore = create(
    combine(
        {
            series: {
                id: null as any,
                list: {} as any,
                total: 0,
                page: 1,
                size: 20,

                series_id: null as any,
                more: [] as any,
                latest: {} as any,
            }
        },
        (set, get) => ({
            get: {
                list: async (p: any) => {
                    const {
                        series: { page, size, series_id }
                    } = get()


                    try {
                        const res = await Api.get(`/competitions/${series_id}/articles`, { query: { page, size } })
                        set(prev => ({
                            series: {
                                ...prev.series,
                                list: res,
                                more: res?.data?.more,
                                latest: res?.data?.latest,
                                total: res?.meta?.total,

                            }
                        }))
                    }
                    catch (err) {
                        console.log(err)
                    }

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
                    series_id?: string
                }) => {
                    set(prev => ({ series: { ...prev.series, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            series: {
                                ...prev.series,
                                page: page || prev.series.page,
                                size: size || prev.series.size,
                                // search: search || prev.series.search,

                                series_id: series_id || prev.series.series_id,
                            }
                        }))
                        useSeriesNStore.getState().get.list({})
                    }

                    // if (search) {
                    //     timeOut = setTimeout(() => {
                    //         init()
                    //     }, 1000)
                    //     set(prev => ({ series: { ...prev.series, search: search } }))
                    //     return
                    // }
                    init()
                }
            },

        })
    )
)

export default useSeriesNStore
