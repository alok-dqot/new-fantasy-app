import { Match } from "@/services/match/match.service";
import moment from "moment";


const HomePageCard = ({ m }: { m: Match }) => {


    return (

        <div className="match-card">
            <div className="match-header">
                <MatchStatus match={m} />
                {/* <span className="match-time limit-1">{moment(m?.date_start).format('LT, DD MMM')}, {m?.competition?.title}</span> */}
            </div>
            <div className="teams">
                <div className="team">
                    <div className="team-flag">
                        <img src={m?.teama?.image_url} alt={m?.teama?.short_name} />
                    </div>
                    <span className="team-name">{m?.teama?.short_name}</span>
                    <span className="team-score">{m?.teama_full_score}</span>


                </div>
                <div className="team">
                    <div className="team-flag">
                        <img src={m?.teamb?.image_url} alt={m?.teamb?.short_name} />
                    </div>
                    <span className="team-name">{m?.teamb?.short_name}</span>
                    <span className="team-score">{m?.teamb_full_score}</span>
                </div>
            </div>
            {/* <div className="navigation">
                <a href="#" className="nav-item active">{m?.title}</a>
                {/* <a href="#" className="nav-item">Table</a>
                <a href="#" className="nav-item">Schedule</a>
                <a href="#" className="nav-item">News</a>
            </div> */}

            <div className="navigation">
                <p className="limit-1">{m?.title}</p>
            </div>
        </div>

    );


}

export default HomePageCard;






const MatchStatus = ({ match }: any) => {
    // console.log(match)
    const { status, starting_at, toss_won_team_id, teama, teamb, elected, status_note } = match;
    const isLiveOrCompleted = status?.toLowerCase() === 'live' || status?.toLowerCase() === 'completed';

    if (isLiveOrCompleted) {
        const tossWinner = toss_won_team_id === teama.id ? teama.name : teamb.name;
        return (
            <div className="match-time limit-1">
                <span>
                    {status_note && ` ${status_note}`}
                </span>
            </div>
        );
    }

    const startTime = moment(starting_at);
    const isToday = startTime.isSame(moment(), 'day');
    const timeFormat = isToday ? 'h:mm a' : 'MMM Do YY, h:mm a';

    return (
        <div className="match-time limit-1">
            <span>{isToday ? `Today at ${startTime.format(timeFormat)}` : `Starts at ${startTime.format(timeFormat)}`}</span>
        </div>
    );
};