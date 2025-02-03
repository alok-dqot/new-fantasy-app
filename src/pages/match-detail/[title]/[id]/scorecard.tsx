import MatchDetailTabs from '@/components/match-detail/tabs';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import useScoreCardStore from '@/features/match-detail/scorecard';
import { fullScore } from '@/helpers/full_score.helper';
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

                                                            <Batter batter={inning.batsmans} />
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










const Batter = ({ batter }: any) => {

    const router = useRouter()

    return (
        <>
            <table>
                <thead>
                    <tr className="header-row">
                        <th className="betsman">BATTER</th>
                        <th className="players-run">R</th>
                        <th className="players-ball">B</th>
                        <th className="players-four">4s</th>
                        <th className="players-six">6s</th>
                        <th className="players-sr">SR</th>
                        {/* <th ></th>
                                        <th ></th> */}
                    </tr>
                </thead>

                <tbody>

                    {
                        batter?.map(
                            (batsmen: any) => {
                                return (
                                    <>

                                        <tr>
                                            <td
                                                className="name"
                                                onClick={() => router.push(`/player-profile/${batsmen?.id}/matches`)}
                                            >{batsmen?.name}<br />
                                                <span className="extra-info">{batsmen?.how_out}</span>
                                            </td>

                                            <td>{batsmen?.runs}</td>
                                            <td>{batsmen?.ball_faced}</td>
                                            <td>{batsmen?.fours}</td>
                                            <td>{batsmen?.sixes}</td>
                                            <td>{batsmen?.strike_rate}</td>
                                        </tr>
                                    </>
                                )

                            }
                        )
                    }


                </tbody>

            </table>
        </>
    );
};
export { Batter }


const Extra = ({ extra, equations }: any) => {

    return (
        <>


            <div className="extra " >
                <div className="row-first">
                    <div className="extras"><p> Extras:</p></div>
                    <div className="extra-details"><p> 9(b: {extra?.byes
                    }, lb: {extra.legbyes}, nb: {extra.noballs}, wd: {extra.wides}) </p></div>
                </div>
                <div className="row-second">
                    <p>Total:100</p>
                    <p className="over">Overs:{equations.overs}</p>
                    <p className="rr">RR:{equations.runrate}</p>
                </div>
            </div>
        </>

    );
};
export { Extra }



const Bowler = ({ bowler }: any) => {

    return (
        <>
            <div className="score-table-bowlers mt-4">
                <table>
                    <thead>
                        <tr className="header-row">
                            <th className="">Bowler</th>
                            <th className="players-over">O</th>
                            <th className="players-match">M</th>
                            <th className="players-run">R</th>
                            <th className="players-wicket">W</th>
                            <th className="players-er">ER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bowler?.map((bowler: any) => {
                                return (
                                    <tr>
                                        <td className="name">{bowler?.name}</td>
                                        <td>{bowler?.overs}</td>
                                        <td>{bowler?.maidens}</td>
                                        <td>{bowler?.runs}</td>
                                        <td>{bowler?.wickets}</td>
                                        <td>{bowler?.economy_rate}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};
export { Bowler }


const Wickets = ({ wicket }: any) => {
    return (
        <>
            <div className="FALL-OF-WICKETS mt-4">

                <table>
                    <thead>
                        <tr className="header-row">
                            <th>Fall of Wickets</th>
                            <th>Score</th>
                            <th>Over</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            wicket?.map(
                                (fows: any) => {
                                    return (
                                        <tr>
                                            <td className="name">{fows?.name}</td>
                                            <td>{fows?.score_at_dismissal}</td>
                                            <td>{fows?.overs_at_dismissal}</td>
                                        </tr>
                                    );
                                }
                            )
                        }



                    </tbody>
                </table>
            </div>
        </>
    );
};
export { Wickets }


const Partnerships = ({ partnership }: any) => {
    // console.log(partnership)
    return (
        <>
            <div className="Partnerships-Stats">

                <h5>Partnerships Stats</h5>
                <div className="all-state">

                    {partnership?.batsmen?.length > 0 &&
                        <div className="stats1">

                            <div className="name">{partnership?.batsmen[0].name} <br />
                                <span className="extra-info">{partnership?.batsmen[0].runs}({partnership?.batsmen[0].balls})</span>

                            </div>

                            <div className="center">
                                <span>{partnership?.runs}({partnership?.balls})</span>
                            </div>

                            <div className="name">{partnership?.batsmen[1].name}<br />
                                <span>{partnership?.batsmen[1].runs}({partnership?.batsmen[1].balls})</span>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </>
    );
};
export { Partnerships }



