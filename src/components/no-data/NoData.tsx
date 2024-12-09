import { CustomImg } from "@/helper/image.helper"

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

