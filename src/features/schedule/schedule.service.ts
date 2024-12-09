import Api from '@/util/api';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';


export interface Schedule {
    id: number
    img: string;
    url: string;

}

let timeOut: any
const path = '/featureSeries'

const useScheduleStore = create(
    combine(
        {
            schedule: {
                id: null as any,
                list: [] as Schedule[],
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                // paginate: true as boolean,
                status: null as string | null,
                format: null as string | null,
            }
        },
        (set, get) => ({
            get: {
                list: async () => {
                    const {
                        schedule: { page, size, status, format }
                    } = get()

                    try {

                        const res = await Api.get(path, { query: { type: status, format: format, size } });
                        set(prev => ({
                            schedule: {
                                ...prev.schedule,
                                list: res?.data,
                                total: res?.meta?.total
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

                    status,
                    format,
                }: {
                    page?: number
                    size?: number
                    search?: string

                    status?: string
                    format?: string
                }) => {
                    set(prev => ({ schedule: { ...prev.schedule, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            schedule: {
                                ...prev.schedule,
                                page: page || prev.schedule.page,
                                size: size || prev.schedule.size,
                                status: status || prev.schedule.status,
                                format: format || prev.schedule.format,
                            }
                        }))
                        useScheduleStore.getState().get.list()
                    }

                    init()
                }
            },


        })
    )
)

export default useScheduleStore
