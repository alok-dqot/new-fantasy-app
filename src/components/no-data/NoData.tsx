import { CustomImg } from "@/helper/image.helper";
import { useEffect } from "react";

const Nodata = () => {
    return (
        <>
            <div className="no-data-o">
                <CustomImg src='/icons/nodata.svg' alt='no-data' />
            </div>
        </>
    )
}

export default Nodata




export const NoDataImg = () => {
    return (
        <>
            <div className="no-data-o">
                <CustomImg src='/icons/nodata.png' alt='no-data' />
            </div>
        </>
    )
}



export const Loading = () => {

    useEffect(() => {
        setTimeout(() => {

        }, 30000);
    }, [])


    return (
        <div className="loader-container col-8">
            <svg className="loader" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
            </svg>
        </div>
    );
};