import React, { useEffect } from 'react'
import TopMatchSection from '@/components/match-detail/TopMatchSection'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import MatchDetailTabs from '@/components/match-detail/tabs'
import useMatchInfo from '@/features/match-detail/info'
import { useRouter } from 'next/router'
import useSquadStore from '@/features/match-detail/squad.service'

const squads = () => {
    return (
        <>


            <HomeWrapper>
                <TopMatchSection />
                <div className="m-detail-outer">
                    <MatchDetailTabs selectIndex={3} />
                </div>
                <SquadsData />
            </HomeWrapper>






        </>
    )
}

export default squads




const SquadsData = () => {

    const store = useSquadStore()

    const router = useRouter()

    const { id } = router.query

    useEffect(() => {
        if (!router?.isReady) return
        store.get.list(id as any)
    }, [router.isReady, id])

    const matchInfo = useMatchInfo()
    const info = matchInfo?.match_info?.list;


    const teama = store?.squad.teama;
    const teamb = store?.squad.teamb;



    return (
        <>
            {/* <div className="container"> */}


            <div className="Squads-Section">

                <div className="team-first card">
                    <div className="team-header">
                        <h2>{teama.name}</h2>
                    </div>
                    <div className="players-list">
                        {
                            teama.playingPlayers?.length > 0 && teama.playingPlayers.map((p) => {
                                return (
                                    <>
                                        <div className="player-item" >
                                            {/* <span className="player-number">1</span> */}
                                            <div className="player-info">
                                                <span className="player-name">{p?.name}</span>
                                                <span className="player-role">{p?.playing_role}</span>
                                            </div>
                                            {p?.is_captain ? <span className="player-captain">(c)</span> : ''}
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>

                <div className="Squads-Section">

                    <div className="team-first card">
                        <div className="team-header">
                            <h2>{teamb.name}</h2>
                        </div>
                        <div className="players-list">
                            {
                                teamb.playingPlayers?.length > 0 && teamb.playingPlayers.map((p) => {
                                    return (
                                        <>
                                            <div className="player-item" >
                                                {/* <span className="player-number">1</span> */}
                                                <div className="player-info">
                                                    <span className="player-name">{p?.name}</span>
                                                    <span className="player-role">{p?.playing_role}</span>
                                                </div>
                                                {p?.is_captain ? <span className="player-captain">(c)</span> : ''}
                                            </div>
                                        </>
                                    )
                                })
                            }


                        </div>
                    </div>



                </div>
            </div>
            {/* </div> */}
        </>
    )
}