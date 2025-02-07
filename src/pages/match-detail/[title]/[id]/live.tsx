import { CustomCarousel } from '@/components/home/HomeMatches';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import MatchDetailTabs from '@/components/match-detail/tabs';
// import useUpcomingLiveStore from '@/features/match-detail/live';
import useMatchInfo from '@/features/match-detail/info';
import { useEffect } from 'react'
import { useRouter } from 'next/router';

import { BallIcon, BatIcon, Probability, } from '@/pages/match/[id]';
import { MatchInfo } from '@/helper/helper';



const live = () => {
    const route = useRouter()
    const store = useMatchInfo()
    const { id } = route.query
    const info = store.match_info.list;
    useEffect(() => {
        if (!route.isReady) return

        store.get.paginate({ matchId: id } as any);

    }, [route.isReady, id])

    // console.log("live", info)

    return (
        <>
            <HomeWrapper>
                <TopMatchSection />
                <div className="m-detail-outer">
                    <MatchDetailTabs selectIndex={1} />
                </div>
                <LiveData info={info.liveData} />

            </HomeWrapper>

        </>
    )
}

export default live;




const LiveData = ({ info }: any) => {
    if (!info) {
        return (
            <></>
        )
    }

    return (
        <>
            <div className="row" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="col-md-8">
                    <div className="row live-data  bg-card	">
                        <div className="col-6 col-md-4 live-data-card">
                            <img src="/batter.png" alt="" />
                            <div className="txt p-3">
                                <h4>{info?.stricker?.short_name} <BatIcon /></h4>
                                <h4> {info?.stricker?.runs} ({info?.stricker?.ball_faced})</h4>
                            </div>

                        </div>
                        <div className="col-6 col-md-4 live-data-card">
                            <img src="/batter.png" alt="" />
                            <div className="txt p-3">
                                <h4>{info?.nonStricker?.short_name}</h4>
                                <h4>{info?.nonStricker?.runs} ({info?.nonStricker?.ball_faced})</h4>
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
                            <ThisOver over={info?.currentOver} />
                            <Lastover lastover={info?.lastOver} />



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






export const ThisOver = ({ over }: any) => {
    // console.log("info", over)
    const totalRuns = over?.reduce((total: number, ball: any) => {
        return total + (ball.runs || 0);
    }, 0) || 0;

    return (
        <>

            <div className="this-over">
                <h6 className="over-name">This Over :</h6>
                {
                    over?.map((o: any) => {
                        if (o.runs == 6) {
                            return (

                                <Run6th run={6} />
                            )
                        }

                        if (o.runs == 4) {
                            return (
                                <Run4th run={4} />
                            )
                        }


                        if (o.is_wicket == 1) {
                            return (
                                <span className="over-run">w</span>
                            )
                        }

                        return (
                            <>

                                <span className="over-run">{o.runs}</span>
                            </>
                        )
                    })
                }


                <p className="total-run">= {totalRuns}</p>
            </div>

        </>
    )
};


export const Lastover = ({ lastover }: any) => {
    // console.log("info", lastover)
    const totalRuns = lastover?.reduce((total: number, ball: any) => {
        return total + (ball.runs || 0);
    }, 0) || 0;



    return (
        <>

            <div className="this-over">
                <h6 className="over-name">Last Over :</h6>
                {
                    lastover?.map((o: any) => {
                        if (o.runs == 6) {
                            return (

                                <Run6th run={6} />
                            )
                        }

                        if (o.runs == 4) {
                            return (
                                <Run4th run={4} />
                            )
                        }


                        if (o.is_wicket == 1) {
                            return (
                                <span className="over-run">w</span>
                            )
                        }

                        return (
                            <>

                                <span className="over-run">{o.runs}</span>
                            </>
                        )
                    })
                }


                <p className="total-run">= {totalRuns}</p>
            </div>

        </>
    )
};


const Run4th = ({ run }: any) => {
    return (
        <>
            <span className={`over-run ${run == 4 ? 'over-4th' : ''} `}>{run}</span >
        </>
    )
}

const Run6th = ({ run }: any) => {
    return (
        <>
            <span className="over-run over-4th">{run}</span>
        </>
    )
}
