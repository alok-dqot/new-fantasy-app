import { CustomCarousel } from '@/components/HomeMatches';
import MatchDetailTabs from '@/components/match-detail/tabs';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import { Batter, Bowler, Extra, Partnerships, Wickets } from '@/components/scorecard';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import useScoreCardStore from '@/features/match-detail/scorecard';
import { fullScore } from '@/helpers/full_score.helper';
import { BallIcon, BatIcon, Probability, ThisOver } from '@/pages/match/[id]';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap';

const scorecard = () => {
    return (
        <><LiveData /></>
    )
}

export default scorecard;




const LiveData = () => {



    const route = useRouter()
    const store = useScoreCardStore()

    const { id } = route.query
    useEffect(() => {
        if (!route.isReady) return

        store.get.list(id as any);



    }, [route.isReady, id])



    return (

        <>

            <HomeWrapper>
                <TopMatchSection />
                <div className="m-detail-outer">
                    <MatchDetailTabs selectIndex={2} />
                </div>


                <div className='scorecars_tabs_main'>
                    <Accordion defaultActiveKey='0'>
                        {store.score.list?.length ? (
                            store.score.list?.map((inning: any, index: number) => {
                                return (

                                    <Accordion.Item eventKey={`${index}`}>
                                        <Accordion.Header>
                                            <div className='team_main'>
                                                <div className='team_img'>
                                                    {/* <img
                                                        src={'#'}
                                                        alt='#'
                                                        className='img-fluid'
                                                    /> */}
                                                    <h5>{inning?.name}</h5>
                                                </div>
                                                <h6>{fullScore(inning.runs, inning.wickets, inning.overs)}</h6>
                                            </div>
                                        </Accordion.Header>

                                        <Accordion.Body>
                                            <div className="score-body">
                                                <div className="scorecard">

                                                    {/* <CricketScorbord /> */}

                                                    <div className="cricket-better-score">

                                                        <div className="score-table">

                                                            <Batter batter={inning.batsmen} />
                                                            {/* <Extra
                                                        extra={inning.extra_runs}
                                                        equations={inning.equations}


                                                    /> */}
                                                            <Bowler bowler={inning.bowlers} />
                                                            <Wickets wicket={inning.fows} />
                                                            <Partnerships partnership={inning.current_partnership} />

                                                        </div>


                                                    </div>

                                                </div>


                                            </div>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </Accordion>
                </div>

            </HomeWrapper>
        </>
    )
}









