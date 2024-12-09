import { getImgUrl } from "@/helper/common"
import { CustomImg } from "@/helper/image.helper"
import { titleToSlug } from "@/helpers/slugConverter"
import moment from "moment"
import { useRouter } from "next/router"
import React from "react"

export const ScheduleCardWithDate = React.memo((props: any) => {


    const router = useRouter()

    return (

        <div className="schedule-card-outer"
            onClick={() => {
                if (props?.match?.status.toLowerCase() === 'live') {
                    router.push('/live-score/' + titleToSlug(props?.match?.title) + '/' + props?.match?.id + '/scorecard')
                }
                else if (props?.match?.status.toLowerCase() === 'completed') {
                    router.push('/live-score/' + titleToSlug(props?.match?.title) + '/' + props?.match?.id + '/scorecard')
                }
                else if (props?.match?.status.toLowerCase() === 'upcoming') {
                    router.push('/live-score/' + titleToSlug(props?.match?.title) + '/' + props?.match?.id + '/info')
                }
                else {
                    router.push('/live-score/' + titleToSlug(props?.match?.title) + '/' + props?.match?.id + '/info')
                }
            }}
            key={props?.match?.id}
        >
            <h5 className="limit-1 sch-card-date">{moment(props?.match?.starting_at).format('Do MMMM YYYY, h:mm a')}</h5>
            <div className="header">

                <h3 className="limit-1">{props?.match?.format}</h3>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.347868 11.283C-0.0981488 10.847 -0.13315 10.24 0.347868 9.70697L4.09502 5.79882L0.347868 1.89066C-0.13315 1.35764 -0.0981488 0.749617 0.347868 0.3166C0.792886 -0.119418 1.54492 -0.0914166 1.96293 0.3166C2.38095 0.722616 6.46511 5.01179 6.46511 5.01179C6.57097 5.11392 6.65516 5.23634 6.71266 5.37173C6.77017 5.50713 6.7998 5.65272 6.7998 5.79982C6.7998 5.94691 6.77017 6.0925 6.71266 6.2279C6.65516 6.36329 6.57097 6.48571 6.46511 6.58785C6.46511 6.58785 2.38095 10.875 1.96293 11.283C1.54492 11.692 0.792886 11.719 0.347868 11.283Z" fill="#FF3131" />
                </svg>

            </div>

            <div className="teama-score">

                <div className="teama">
                    <CustomImg
                        src={getImgUrl(props?.match?.teama?.image_url)}
                        alt={props?.match?.teama?.short_name}
                    />
                    <h3>{props?.match?.teama?.short_name}</h3>
                </div>

                <div className="score">
                    {props?.match?.teama_runs != '0.0' && <h5> {props?.match?.teama_runs}/{props?.match?.teama_wicket} ({props?.match?.teama_overs})</h5>}
                    {/* <h3>{props?.match?.teama?.teama_overs === '0.0' ? '' : props?.match?.teama?.teama_overs}</h3> */}
                </div>

            </div>
            <div className="teama-score">

                <div className="teama">
                    <CustomImg
                        src={props?.match?.teamb?.image_url}
                        alt='team a'
                    />
                    <h3>{props?.match?.teamb?.short_name}</h3>
                </div>

                <div className="score">
                    {/* <h5>{props?.match?.teamb_full_score}</h5> */}
                    {props?.match?.teamb_overs != '0.0' && <h5>{props?.match?.teamb_runs}/{props?.match?.teamb_wicket} ({props?.match?.teamb_overs})</h5>}
                    {/* <h3>{props?.match?.teama?.teamb_overs === '0.0' ? '' : props?.match?.teama?.teamb_overs}</h3> */}
                </div>

            </div>
            <h4 className="limit-1">{props?.match?.status_note ? props?.match?.status_note : moment(props?.match?.starting_at).format("MMM Do YY") + '• Watch live at ' + moment(props?.match?.starting_at).format("h:mm a")}</h4>
        </div >

    )


})
