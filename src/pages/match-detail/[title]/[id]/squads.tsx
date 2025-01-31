import React from 'react'
import TopMatchSection from '@/components/match-detail/TopMatchSection'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import MatchDetailTabs from '@/components/match-detail/tabs'

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
    return (
        <>
            {/* <div className="container"> */}


            <div className="Squads-Section">

                <div className="team-first card">
                    <div className="team-header">
                        <h2>Sri Lanka</h2>
                    </div>
                    <div className="players-list">
                        <div className="player-item" >
                            {/* <span className="player-number">1</span> */}
                            <div className="player-info">
                                <span className="player-name">Arpit Rana</span>
                                <span className="player-role">Batsman</span>
                            </div>
                        </div>
                        <div className="player-item" >
                            {/* <span className="player-number">2</span> */}
                            <div className="player-info">
                                <span className="player-name">Sanat Sangwan</span>
                                <span className="player-role">All-rounder</span>
                            </div>
                        </div>
                        <div className="player-item">
                            {/* <span className="player-number">3</span> */}
                            <div className="player-info">
                                <span className="player-name">Yash Dhull</span>
                                <span className="player-role">Top-Order Batter</span>
                            </div>
                        </div>
                        <div className="player-item" >
                            {/* <span className="player-number">5</span> */}
                            <div className="player-info">
                                <span className="player-name">Virat Kohli</span>
                                <span className="player-role">Top-Order Batter</span>
                            </div>
                        </div>
                        <div className="player-item" >
                            {/* <span className="player-number">6</span> */}
                            <div className="player-info">
                                <span className="player-name">Virat Kohli</span>
                                <span className="player-role">Top-Order Batter</span>
                            </div>
                        </div>
                        <div className="player-item" >
                            {/* <span className="player-number">7</span> */}
                            <div className="player-info">
                                <span className="player-name">Virat Kohli</span>
                                <span className="player-role">Top-Order Batter</span>
                            </div>
                        </div>
                        <div className="player-item" >
                            {/* <span className="player-number">8</span> */}
                            <div className="player-info">
                                <span className="player-name">Virat Kohli</span>
                                <span className="player-role">Top-Order Batter</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="team-second card">
                    <div className="team-header">
                        <h2>Australia</h2>
                    </div>
                    <div className="players-list">
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Anchit Yadav</span>
                                <span className="player-role">Batsman</span>
                            </div>
                        </div>
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Vivek Singh</span>
                                <span className="player-role">Opening Batter</span>
                            </div>
                        </div>
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Suraj Ahuja</span>
                                <span className="player-role">Wicketkeeper Batter</span>
                            </div>
                            <span className="player-captain">(c)</span>
                        </div>
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Mohammad Saif</span>
                                <span className="player-role">Batsman</span>
                            </div>
                        </div>
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Mohammad Saif</span>
                                <span className="player-role">Batsman</span>
                            </div>
                        </div>
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Mohammad Saif</span>
                                <span className="player-role">Batsman</span>
                            </div>
                        </div>
                        <div className="player-item" >

                            <div className="player-info">
                                <span className="player-name">Mohammad Saif</span>
                                <span className="player-role">Batsman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}