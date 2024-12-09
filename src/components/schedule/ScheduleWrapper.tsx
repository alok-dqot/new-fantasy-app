import NormalCarousel from "../carousel/NormalCarousel"
import { ScheduleCardWithDate } from "./ScheduleCard"

const ScheduleCardWrapper = ({ sch }: { sch: any }) => {
    return (
        <>


            {sch?.matches?.length > 0 &&
                <NormalCarousel>

                    {[...sch?.matches, {}]?.map((match: any) => {
                        if (Object.keys(match)?.length > 0) {
                            return (

                                <ScheduleCardWithDate
                                    match={match}
                                />

                            )

                        }
                        else {
                            <div className='empty-box' style={{ width: '300px' }}></div>
                        }
                    })

                    }


                </NormalCarousel>
            }
        </>
    )
}

export default ScheduleCardWrapper
