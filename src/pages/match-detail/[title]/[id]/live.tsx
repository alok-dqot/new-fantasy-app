import { CustomCarousel } from '@/components/home/HomeMatches';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import MatchDetailTabs from '@/components/match-detail/tabs';
// import useUpcomingLiveStore from '@/features/match-detail/live';
import useMatchInfo from '@/features/match-detail/info';
import { useEffect } from 'react'
import { useRouter } from 'next/router';



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










export const BatIcon = () => {
    return (
        <svg width="18" style={{ marginLeft: '5px' }} height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.4726 3.54467L10.144 7.5347C9.87733 8.0093 9.58063 8.4687 9.22463 9.0173C9.58063
			 8.7507 10.0546 8.4687 10.604 8.098L14.6226 5.48867L12.4726 3.54467ZM12.1906 2.982C12.0126 2.982 11.82 2.982 11.7313 2.982C11.078 2.982 10.5146 3.26334 10.144 3.634L0.37067 13.6747C0.19267 13.7633 0 14.0453 0 14.5053C0 14.7867
			  0.0886701 15.0693 0.28134 15.4393C0.652 16.0027 1.112 16.552 1.49734 16.8333C1.95734 17.2933 2.98067 18.1387 3.91467 18.0493C4.286 18.0493 4.56734 17.9453 4.746 17.664L14.6226 7.7273C15.0826 7.164 15.2753 6.422 15.172 5.76934L12.1906
			   2.982ZM17.96 1.128C17.96 0.846 17.8713 0.564 17.5893 0.28267C17.4113 0.104 17.04 0 16.7586 0C16.388 0 16.106 0.104 15.824 0.386L13.036 3.26334L14.8013 4.93867L17.6926 2.04667C17.8713 1.78 18.064 1.49867 17.96 1.128Z" fill="var(--primary)" />
        </svg>

    )
}





export const BallIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.2281 4.58073C15.3111 4.75379 15.3935 4.92561 
			15.4902 5.09866C15.8346 6.0508 16 7.0029 16 8.0375C16 12.4533 12.4584 16 8.0483 16C5.62304 16 
			3.55583 14.9648 2.08084 13.3154C1.99845 13.233 1.90181 13.1436 1.8188 13.0605C3.63822 11.0663 
			5.71906 9.342 8.0483 7.8651C10.2116 6.4856 12.6374 5.44354 15.2281 4.58073ZM14.3602 3.1938C14.5393
			 3.37368 14.6223 3.54611 14.7047 3.71855C14.7871 3.80167 14.8837 3.9741 14.9667 4.06342C12.3754 
			 4.92561 9.9501 6.0508 7.7863 7.4371C5.45764 8.8172 3.37618 10.639 1.47437 12.6257C1.39198 12.4533
			  1.21295 12.2808 1.12994 12.1084C1.04755 12.0185 1.04755 11.9291 0.95091 11.846C2.86635 9.6868 5.01657
			   7.8651 7.4418 6.3957C9.5227 5.09866 11.8519 3.9741 14.3602 3.1938ZM13.0643 1.81431C13.2439 1.98674
			    13.4093 2.15918 13.6707 2.33161C13.7538 2.42155 13.9328 2.59399 14.0158 2.76643C11.5075 3.54611 
				9.2613 4.58073 7.1798 5.96767C4.76816 7.4371 2.59068 9.1689 0.68886 11.3287C0.60647 11.0663 0.52346 
				10.7215 0.44107 10.4591C0.35868 10.3766 0.35868 10.2041 0.26204 10.1142C2.08084 8.0375 4.16168 6.3125 6.4909 4.92561C8.4894 3.62923 10.722 2.67711 13.0643 1.81431ZM8.0483 0C9.6881 0 11.2455 0.51731 12.5408 1.46943C10.2946 2.24229 8.1307 3.28436 6.1465 4.49141C3.98265 5.87835 1.90181 7.5202 0.17903 9.4245C0.0966399 8.9896 0 8.4723 0 8.0375C0 3.62923 3.63822 0 8.0483 0Z" fill="var(--primary)" />
        </svg>

    )
}


export const Probability = () => {
    return (
        <>
            <div className="probability-container">
                <div className="header">
                    <h2 className="title">Probability</h2>
                    <div className="toggle-buttons">
                        <button className="toggle-btn active">% View</button>
                        <button className="toggle-btn">Odds View</button>
                    </div>
                </div>

                <div className="session-info">
                    Day 1: Session 3
                </div>

                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress-segment-ind"></div>
                        <div className="progress-segment-draw"></div>
                        <div className="progress-segment-aus"></div>
                    </div>

                    <div className="labels">
                        <div className="label">
                            <span className="team">IND </span>
                            <span className="percentage">25%</span>
                        </div>
                        <div className="label">
                            <span className="team">DRAW </span>
                            <span className="percentage">15%</span>
                        </div>
                        <div className="label">
                            <span className="team">AUS </span>
                            <span className="percentage">60%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};




