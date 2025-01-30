import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

const InfoCard = ({ details }: any) => {
    return (

        <div className="cric-card-outer info-card-outer">
            <h5>Tournament</h5>

            <span>{details?.competition?.name}</span>

            <h5>Match Details</h5>
            <div className="row">

                <Details
                    left="Date & Time :"
                    right={moment(details?.starting_at).format('MMMM Do YYYY, h:mm a')}
                />
                <Details
                    left="Match Number :"
                    right={`Match ${details.number}`}
                />





                {/* <button className="probable-btn">Check Probable 11</button> */}
            </div>
            <h5>Venue Details</h5>
            <div className="row">
                <Details
                    left={<><LocationOnIcon /> <span> Stadium:</span></>}
                    right={details?.venue?.name}
                />
                {/* <Details
                    left={<><LocationOnIcon /> <span> Country:</span></>}
                    right={details?.venue?.country}
                /> */}
                <Details
                    left={<><LocationOnIcon /> <span> City:</span></>}
                    right={details?.venue?.city}
                />


            </div>
            <h5>Match Official</h5>
            <div className="row">

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

export default InfoCard;


export const Details = ({ left, right }: any) => {
    return (
        <>
            <div className="col-md-3 mt-2">
                <span>{left}</span>
            </div>
            <div className="col-md-9 mt-2">
                <p>{right}</p>


            </div>
        </>
    )
}




