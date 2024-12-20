import Tabs from "react-bootstrap/Tabs";



const ScoreCard = () => {
    return (
        <>



            <div className="score-body">
                <div className="scorecard">

                    <CricketScorbord />

                    <div className="cricket-better-score">

                        <div className="score-table">

                            {/* <Batter /> */}
                            {/* <Extra />
                            <Bowler />
                            <Wickets />
                            <Partnerships /> */}


                        </div>


                    </div>



                    < CricketScorbord />

                </div>
            </div>

        </>
    );
};

export default ScoreCard;


const CricketScorbord = () => {
    return (
        <>
            <div className="cricket-scorboard">
                <div className="team">
                    <img src="/ind.jpg" alt="Pakistan Team Logo" />
                    <p>IND-W</p>
                </div>
                <div className="score">
                    <p>184.8(20.0)</p>

                </div>
            </div>
        </>
    );
};

export { CricketScorbord }

const Batter = ({ batter }: any) => {

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
                                                className="name">{batsmen?.name}<br />
                                                <span className="extra-info">{batsmen?.how_out}</span>
                                            </td>

                                            <td>{batsmen?.runs}</td>
                                            <td>{batsmen?.balls_faced}</td>
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
    console.log(extra)

    return (
        <>


            <div className="extra " >
                <div className="row-first">
                    <div className="extras"><p> Extras:</p></div>
                    <div className="extra-details"><p> 9(b: {extra.byes
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
            <div className="score-table-bowlers">
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
                                        <td>{bowler?.runs_conceded}</td>
                                        <td>{bowler?.wickets}</td>
                                        <td>{bowler?.econ}</td>
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
            <div className="FALL-OF-WICKETS">

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

    return (
        <>
            <div className="Partnerships-Stats">

                <h5>Partnerships Stats</h5>
                <div className="all-state">


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


                </div>
            </div>
        </>
    );
};
export { Partnerships }



