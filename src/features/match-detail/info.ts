import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import Api from '@/util/api'
import { Team } from '@/services/match/match.service'

// import { Team } from '../teams/teamService'

export interface ScoreCard {
    starting_at: string
    inning: any
    id: number
    order: number
    name: string
    type: string
    format: string
    start_date: string
    end_date: string
    competition_id: number
    created_at: string
    updated_at: string
    // competition: Competition
    batting: BattingPlayer[]
    bowling: BallDetails[]
    fow: BowlerStats[]
    toss_won_team: any
    elected: string;
    teama_runs: string
    teama_wicket: string
    teama_overs: string
    teamb_runs: string
    teamb_wicket: string
    teamb_overs: string

    status: string


    image: string;
    score: string
    overs: string
    teama: Team
    teamb: Team

}

interface BattingPlayer {
    player_id: number;
    name: string;
    player_img: string;
    ball_faced: number;
    runs: number;
    fours: number;
    sixes: number;
    strike_rate: string;
    how_out: string;
    out_by_id: number;
    out_by: string;
    out_by_img: string;
    value: string;
}

interface BallDetails {
    balls: number;
    four: string;
    non_striker_id: number;
    runs: string;
    six: string;
    striker_id: number;
}

interface BowlerStats {
    economy_rate: string;
    id: number;
    maidens: number;
    name: string;
    overs: number;
    runs: number;
    wickets: number;
    wide: number;
}

let timeOut: any
// const path = '/match_info'

const useMatchInfo = create(
    combine(
        {
            match_info: {
                id: null as any,
                list: {} as ScoreCard,
                total: 0,
                page: 1,
                size: 10,
                search: null as string | null,
                paginate: true as boolean,
                teama: {} as any,
                teamb: {} as any,
                series: {} as any,
                venue: {} as any,
                matchId: '',
                teamForm: [] as any,
                banner: [] as any,
                headToHead: [] as any,
                umpire: [] as any,
                recentVenueMatches: [] as any,
                status_note: null as any,
                fantasy: {} as any,
                innings: [] as any,
                pitch: '' as string,
            } as any
        },
        (set, get) => ({
            get: {
                list: async () => {
                    const {
                        match_info: { matchId, page, size, search, paginate }
                    } = get()

                    try {
                        const res = await Api.get(`/matches/${matchId}/info`, {})

                        await set(prev => ({

                            match_info: {
                                ...prev.match_info,
                                list: res,
                                total: res?.meta?.total,
                                venue: res?.venue,
                                series: res?.competition,
                                teama: res?.teama,
                                teamb: res?.teamb,
                                banner: res?.banner,
                                teamForm: res?.teamForm,
                                headToHead: res?.headToHead,
                                umpire: res?.umpire,
                                recentVenueMatches: res?.recentVenueMatches,
                                status_note: res?.status_note,
                                fantasy: res?.fantasy,
                                innings: res?.innings,
                                pitch: res?.pitch
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
                    paginate,
                    matchId,
                }: {
                    page?: number
                    size?: number
                    search?: string
                    paginate?: boolean
                    matchId: string
                }) => {
                    set(prev => ({ match_info: { ...prev.match_info, search: search || '' } }))

                    clearTimeout(timeOut)

                    const init = () => {
                        set(prev => ({
                            match_info: {
                                ...prev.match_info,
                                page: page || prev.match_info.page,
                                size: size || prev.match_info.size,
                                search: search || prev.match_info.search,
                                paginate: paginate ?? true,
                                matchId: matchId || prev.match_info.matchId
                            }
                        }))
                        useMatchInfo.getState().get.list()
                    }

                    if (search) {
                        timeOut = setTimeout(() => {
                            init()
                        }, 1000)
                        set(prev => ({ match_info: { ...prev.match_info, search: search } }))
                        return
                    }
                    init()
                }
            },
            select: (id: any) => set(prev => ({ match_info: { ...prev.match_info, id: id } })),

            resetList: () => {
                set((prev: any) => ({
                    match_info: {
                        ...prev.match_info,
                        list: [],
                    }
                }));
            }


        })
    )
)

export default useMatchInfo
