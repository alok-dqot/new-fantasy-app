import LocationOnIcon from '@mui/icons-material/LocationOn';

const InfoCrad = ({ details }: any) => {
    return (

        <div className="card">
            <div className="header">
                <h5><span>Tournament</span></h5>
                <Details
                    right={details?.competition?.title}
                    left={''}
                />
            </div>
            <div className="details">
                <h5><span>Match Details</span></h5>

                <div className="row">

                    <Details
                        left="Date"
                        right={details?.date_start_ist}
                    />



                </div>

                {/* <button className="probable-btn">Check Probable 11</button> */}
            </div>
            <div className="venue row">
                <h5><span>Venue Details</span></h5>
                <Details
                    left={<><LocationOnIcon /> <span> Stadium:</span></>}
                    right={details?.venue?.name}
                />
                <Details
                    left={<><LocationOnIcon /> <span> Country:</span></>}
                    right={details?.venue?.country}
                />
                <Details
                    left={<><LocationOnIcon /> <span> City:</span></>}
                    right={details?.venue?.location}
                />


            </div>
            <div className="MatchOfficial row">
                <h5><span>Match Official</span></h5>

                <Details
                    left="Umpire"
                    right={details?.umpires}
                />
                <Details
                    left="Match Refree"
                    right={details?.referee}
                />

            </div>
        </div>

    );
};

export { InfoCrad };


const Details = ({ left, right }: any) => {
    return (
        <>
            <div className="col-md-3 mt-3">
                <span>{left}</span>
            </div>
            <div className="col-md-9 mt-3">
                <p>{right}</p>


            </div>
        </>
    )
}
export { Details };
