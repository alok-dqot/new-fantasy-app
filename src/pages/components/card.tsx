

const Card=()=>{

    return(
        <>
       <div className="match-card">
    <div className="match-header">
        <span className="live-indicator">Live</span>
        <span className="match-time">10:30 AM, 29-Nov • Dubai, United Arab...</span>
    </div>
    <div className="teams">
        <div className="team">
            <div className="team-flag">
                <img src="https://cdn.mycricketapi.com/teams/brhw.png" alt="Bangladesh flag"/>
            </div>
            <span className="team-name">AFG19</span>
           
        </div>
        <div className="team">
            <div className="team-flag">
                <img src="https://cdn.mycricketapi.com/teams/brhw.png" alt="Afghanistan flag"/>
            </div>
            <span className="team-name">AFG19</span>
            <span className="team-score">102/1 (26.4)</span>
        </div>
    </div>
    <div className="navigation">
        <a href="#" className="nav-item active">Series</a>
        <a href="#" className="nav-item">Table</a>
        <a href="#" className="nav-item">Schedule</a>
        <a href="#" className="nav-item">News</a>
    </div>
       </div>
        </>
    );
        
    
}

export default Card;