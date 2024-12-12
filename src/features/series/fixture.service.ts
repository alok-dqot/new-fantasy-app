
import Api from '@/util/api'
import { create } from 'zustand'
import { combine } from 'zustand/middleware'


let timeOut: any
const path = '/series/'

const useSeriesFixtureStore = create(
    combine(
        {
            fixture: {
                id: null as any,
                list: {} as any,
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                series_id: null as any,
                teams: [] as any,
                venues: [] as any,
                match: [] as any,
                teamId: 0 as number,
                venueId: 0 as number,
                seriesId: 0 as number,
            }
        },
        (set, get) => ({
            get: {
                list: async () => {
                    const {
                        fixture: { page, size, search, seriesId, teamId, venueId }
                    } = get()
                    try {

                        const res = await Api.get(`/competitions/${seriesId}/matches`, { query: { team_id: teamId, venue_id: venueId, size: size } })
                        await set(prev => ({
                            fixture: {
                                ...prev.fixture,
                                list: res?.data?.data,
                                total: res?.data?.meta?.total,

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
                    teamId,
                    venueId,
                    type,
                    seriesId,
                }: {
                    page?: number
                    size?: number
                    search?: string
                    teamId?: number
                    seriesId?: number
                    venueId?: number
                    type?: string
                }) => {
                    set(prev => ({ fixture: { ...prev.fixture, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            fixture: {
                                ...prev.fixture,
                                page: page || prev.fixture.page,
                                size: size || prev.fixture.size,
                                search: search || prev.fixture.search,
                                seriesId: seriesId || prev.fixture.seriesId,
                                teamId: teamId == 0 ? 0 : teamId || prev.fixture.teamId,
                                venueId: venueId == 0 ? 0 : venueId || prev.fixture.venueId,
                            }
                        }))
                        useSeriesFixtureStore.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 1000)
                        set(prev => ({ fixture: { ...prev.fixture, search: search } }))
                        return
                    }
                    init()
                }
            },

            getTeamVenue: async (seriesId: number) => {
                try {
                    const res = await Api.get(`/competitions/${seriesId}/teams-venue`)
                    await set(prev => ({
                        fixture: {
                            ...prev.fixture,
                            teams: res?.teams,
                            venues: res?.venue,

                        }
                    }))
                }
                catch (err) {
                    console.log(err)
                }
            }

        })
    )
)

export default useSeriesFixtureStore
