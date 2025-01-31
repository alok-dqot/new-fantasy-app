import { CustomCarousel } from '@/components/home/HomeMatches';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import MatchDetailTabs from '@/components/match-detail/tabs';

import { BallIcon, BatIcon, Probability, ThisOver } from '@/pages/match/[id]';
import React from 'react'

const live = () => {
    return (
        <>
            <HomeWrapper>
                <TopMatchSection />
                <div className="m-detail-outer">
                    <MatchDetailTabs selectIndex={1} />
                </div>
                <LiveData />

            </HomeWrapper>

        </>
    )
}

export default live;




const LiveData = () => {
    return (
        <>
            <div className="row" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="col-md-8">
                    <div className="row live-data  bg-card	">
                        <div className="col-6 col-md-4 live-data-card">
                            <img src="/batter.png" alt="" />
                            <div className="txt p-3">
                                <h4>BK-Mohammad <BatIcon /></h4>
                                <h4>23 (12)</h4>
                            </div>

                        </div>
                        <div className="col-6 col-md-4 live-data-card">
                            <img src="/batter.png" alt="" />
                            <div className="txt p-3">
                                <h4>A Nawaz Shah </h4>
                                <h4>23 (12)</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 live-data-card">
                            <img src="/batter.png" alt="" />
                            <div className="txt p-3">
                                <h4>Nikin Jose <BallIcon /></h4>
                                <h4>23 (12)</h4>
                            </div>
                        </div>

                    </div>

                    <div className="over-data">


                        <CustomCarousel>
                            <ThisOver />
                            <ThisOver />
                            <ThisOver />

                        </CustomCarousel>

                    </div>

                    <CommentaryCard />

                </div>
                <div className="col-md-4">
                    <Probability />
                </div>
            </div>

        </>
    )
}











const CommentaryCard = () => {
    return (
        <>
            <div className="commentary-card">
                <div className="numbers">
                    <div className="over-number">85.5</div>
                    <div className="ball-number">2</div>
                </div>


                <div className="content-wrapper">

                    <div className="commentary-text">
                        <div className="players">J Bumrah to P Cummins</div>
                        <div className="description">
                            Bumrah goes for the yorker and nearly gets his man. 133.7 kmph. Cummins was up to the task and gets his bat down in time to flick it past forward short leg for a couple.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};






