import moment from "moment";


const HomePageCard = ({ m }: { m: any }) => {


    return (

        <div className="match-card">
            <div className="match-header">
                <span className="live-indicator">Live</span>
                <span className="match-time limit-1">{moment(m?.date_start).format('LT, DD MMM')}, {m?.competition?.title}</span>
            </div>
            <div className="teams">
                <div className="team">
                    <div className="team-flag">
                        <img src={m?.teama?.logo_url} alt="Bangladesh flag" />
                    </div>
                    <span className="team-name">{m?.teama?.short_name}</span>
                    <span className="team-score">{m?.teama?.scores_full}</span>


                </div>
                <div className="team">
                    <div className="team-flag">
                        <img src={m?.teamb?.image_url} alt="Afghanistan flag" />
                    </div>
                    <span className="team-name">{m?.teamb?.short_name}</span>
                    <span className="team-score">{m?.teamb?.scores_full}</span>
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