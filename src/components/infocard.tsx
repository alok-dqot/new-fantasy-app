import LocationOnIcon from '@mui/icons-material/LocationOn';

const InfoCrad = ({ details }: any) => {
    return (

        <div className="card">
            <div className="header">
                <h5><span>Tournament</span></h5>

                <p>Big Bash League, 2024/25</p>
            </div>
            <div className="details">
                <h5><span>Match Details</span></h5>

                <div className="row">

                    <Details
                        details={details}
                    />
                    {/* <Details
                        details={details}
                    /> */}


                </div>

                <button className="probable-btn">Check Probable 11</button>
            </div>
            <div className="venue">
                <h5><span>Venue Details</span></h5>
                <p> <LocationOnIcon /> <span> Stadium:</span>	{details?.venue?.name}</p>
                <p> <LocationOnIcon /> <span>City:</span>	{details?.venue?.location}</p>
                <p> <LocationOnIcon /> <span>Country:</span>	{details?.venue?.country}</p>

            </div>
            <div className="MatchOfficial">
                <h5><span>Match Official</span></h5>
                <p>Umpir:{ }</p>
                <p> ThirdUmpir:</p>
                <p>Match Refree:</p>
            </div>
        </div>

    );
};

export { InfoCrad };


const Details = ({ details }: any) => {
    return (
        <>
            <div className="col-md-3 mt-3">
                <span>Date & Time:</span>
            </div>
            <div className="col-md-9 mt-3">
                <p>{details?.date_start_ist}</p>


            </div>
        </>
    )
}
export { Details }