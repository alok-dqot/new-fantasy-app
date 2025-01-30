import PlayerContainer, { PlayerProfileTabs } from "@/CustomHook/layout";
import { CustomCarousel } from "@/components/HomeMatches";
import BasicTable from "@/components/table/table";

import Link from "next/link";
import Image from 'next/image';
import { CustomImg } from "@/helper/image.helper";
import { useState, useEffect } from "react";



const Overview = () => {
    const [isClicked, setIsClicked] = useState(0)


    const [apiData, setApiData] = useState(null);


    const API = "https://api.sportswiz.live/score/players/143859";


    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
            })
            .catch((error) => console.log(error))
    }, []);

    // console.log(apiData);


    const newsVideosData = [
        {
            id: 1,
            title: "[Watch] Scott Boland Packs Yashasvi Jaiswal Out Of Sydney Ground With An Absolute Jaffa",
            author: "SOUMYAJIT DUTTA",
            timeAgo: "5 HRS AGO",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        },
        {
            id: 2,
            title: "[Watch] Yashasvi Jaiswal Hurts Mitchell Starc's Pride With Rampant Thrashing In Sydney",
            author: "RAJGEETA",
            timeAgo: "6 HRS AGO",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        },
        {
            id: 3,
            title: "'Oye, Shot Nahi Lag Rahe Ab?': Yashasvi Jaiswal Gives Konstas A Taste Of His Own Medicine",
            author: "SOUMYAJIT DUTTA",
            timeAgo: "8 HRS AGO",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        },
        {
            id: 4,
            title: "[Watch] Siraj Takes Bumrah's Revenge As Jaiswal Jumps In Air To Enjoy Konstas' Wicket",
            author: "AKSHITA PATEL",
            timeAgo: "10 HRS AGO",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        },
        {
            id: 5,
            title: "[Watch] Yashasvi Jaiswal Gets Teased By Scott Boland With A Clap On The Face After Wicket",
            author: "PROBUDHA BHATTACHARJEE",
            timeAgo: "1 JAN 2025",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        }
    ];

    return (
        <>
            <PlayerContainer>
                <PlayerProfileTabs selectIndex={0} />

                <div className="overview-container container">
                    <div className="row">

                        <div className="col-md-9 career-section">
                            <SectionHeader />
                            <PlayerRecentForm />
                            <PlayerCareerStats />



                        </div>

                        <div className="col-md-3 latest-section">
                            <div className="latest-update">
                                <h2>Latest Update</h2>
                                <div className="row">

                                    <div className="col-md-12">
                                        {
                                            newsVideosData?.map((newsvideodata: any) => {
                                                return (
                                                    <ArticleCard newsvideodata={newsvideodata} />
                                                )
                                            })
                                        }

                                    </div>






                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </PlayerContainer>
        </>
    );
};
export default Overview;


export const SectionHeader = ({ setIsClicked, isClicked }: any) => {
    return (
        <>
            <div className="section-header">
                <h2 className="section-title">Career & Stats</h2>
                <div className="tab-group">
                    <button className={`${isClicked == 0 ? 'tab active' : 'tab'}`} onClick={() => {
                        setIsClicked(0)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Batting
                    </button>
                    <button className={`${isClicked == 1 ? 'tab active' : 'tab'}`} onClick={() => {
                        setIsClicked(1)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Bowling
                    </button>
                </div>
            </div>
        </>
    )
}

const BattingSection = ({ playerdata }: any) => {
    return (
        <>
            <PlayerRecentForm playerdata={playerdata} />
            < PlayerCareerStatsBatting playerdata={playerdata} />
        </>
    );
};

const BowllingSection = () => {
    return (
        <>

            <PlayerRecentForm />
            < PlayerCareerStatsBowlling />

        </>
    )
};

const PlayerRecentForm = ({ playerdata }: any) => {
    const [recentForm, setRecentForm] = useState([])
    const API = "https://api.sportswiz.live/score/player/143859/last-five-matches?type=all";
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setRecentForm(data)
            })
            .catch((error) => console.log(error))

    }, [])
    console.log(recentForm)

    return (
        <>
            <div className="player-recent-form">
                <h6 className="player-name">{playerdata?.data?.name} Recent Form</h6>
                <p className="section-title">Batting</p>
                <CustomCarousel>

                    {
                        recentForm?.map((recentdata: any) => {
                            return (
                                <div className="card player-recent-form__card">

                                    <a href="#"><h5>4(2)</h5></a>
                                    <small>{recentdata.sub_title},{recentdata?.format} </small>
                                    <big>{recentdata?.score}</big>

                                </div>
                            )
                        })

                    }




                </CustomCarousel>

            </div>
        </>
    )
};

const PlayerCareerStatsBatting = ({ playerdata }: any) => {
    return (
        <>
            <div className="player-career-stats">
                <h6 className="player-name">{playerdata?.data?.name} Career Stats</h6>
                <p className="section-title">Batting</p>
                <BasicTable />



                <div className="played-for">
                    <h6 className="player-name">Teams played for</h6>
                    <ul>
                        <li>India U19</li>
                        <li>Mumbai</li>
                        <li>India U19 A</li>
                        <li>North Mumbai Panthers</li>
                        <li>India B</li>
                        <li> Rajasthan Royals</li>


                    </ul>
                </div>

                <div className="about-player">
                    <div className="header-section">
                        <h2 className="header-title">About {playerdata?.data?.name}</h2>
                        <a href="#" className="player-info-link">Player Info </a>
                    </div>

                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="info-label">Name</td>
                                <td className="info-value"> {playerdata?.data?.name}</td>
                            </tr>
                            <tr>
                                <td className="info-label">Gender</td>
                                <td className="info-value"> {playerdata?.data?.gender}</td>
                            </tr>
                            <tr>
                                <td className="info-label">Birth</td>
                                <td className="info-value">{playerdata?.data?.date_of_birth}</td>
                            </tr>
                            <tr>
                                <td className="info-label">Birth Place</td>
                                <td className="info-value">Suriyawan, Bhadohi, Uttar Pradesh</td>
                            </tr>
                            <tr>
                                <td className="info-label">Height</td>
                                <td className="info-value">6 Ft 0 In</td>
                            </tr>
                            <tr>
                                <td className="info-label">Nationality</td>
                                <td className="info-value">{playerdata?.data?.nationality}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="player-description">
                        Yashasvi Jaiswal became a prominent name in Indian cricket after a stellar Under-19 World Cup held in 2020 where he was awarded the man of the tournament. He piled on more than 400 runs in the tournament and the fact that he has to struggle a lot to reach that level made his success even sweeter for him. Yashasvi has had to deal with severe hardships during his junior days of playing cricket when he was not selected for the Indian U-19 side...
                        <a href="#" className="continue-reading">continue reading</a>
                    </p>
                </div>
            </div>
        </>
    )
};

const PlayerCareerStatsBowlling = () => {
    return (
        <>
            <div className="player-career-stats">
                <h6 className="player-name">Yashasvi Jaiswal Career Stats</h6>
                <p className="section-title">Batting</p>
                <BasicTable />

                <div className="Debut-Information">
                    <h6 className="player-name">Career Debut Information</h6>
                    <div className="Debut-Information__content">
                        <table className="debut-table">
                            <tbody>
                                <tr>
                                    <td className="debut-type">Test Debut</td>
                                    <td className="debut-match">
                                        <a href="#" className="match-link">South Africa v India SuperSport Park, Centurion, 26-12-2023</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="debut-type">First class Debut</td>
                                    <td className="debut-match">
                                        <a href="#" className="match-link">W Province vs Easterns at Cape Town- March 14 - 16, 2013</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="debut-type">LIST A Debut</td>
                                    <td className="debut-match">
                                        <a href="#" className="match-link">W Province vs Namibia at Cape Town- December 07, 2013</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="debut-type">100B Debut</td>
                                    <td className="debut-match">
                                        <a href="#" className="match-link">Birmingham Phoenix v Southern Brave Lord's, London, 21-8-2021</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="debut-type">T20-Blast Debut</td>
                                    <td className="debut-match">
                                        <a href="#" className="match-link">Durham v Worcestershire Riverside Ground, Chester-le-Street, 1-6-2022</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="played-for">
                    <h6 className="player-name">Teams played for</h6>
                    <ul>
                        <li>India U19</li>
                        <li>Mumbai</li>
                        <li>India U19 A</li>
                        <li>North Mumbai Panthers</li>
                        <li>India B</li>
                        <li> Rajasthan Royals</li>


                    </ul>
                </div>

                <div className="about-player">
                    <div className="header-section">
                        <h2 className="header-title">About Yashasvi Jaiswal</h2>
                        <a href="#" className="player-info-link">Player Info </a>
                    </div>

                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="info-label">Name</td>
                                <td className="info-value">Yashasvi Jaiswal</td>
                            </tr>
                            <tr>
                                <td className="info-label">Gender</td>
                                <td className="info-value">Male</td>
                            </tr>
                            <tr>
                                <td className="info-label">Birth</td>
                                <td className="info-value">28 Dec 2001</td>
                            </tr>
                            <tr>
                                <td className="info-label">Birth Place</td>
                                <td className="info-value">Suriyawan, Bhadohi, Uttar Pradesh</td>
                            </tr>
                            <tr>
                                <td className="info-label">Height</td>
                                <td className="info-value">6 Ft 0 In</td>
                            </tr>
                            <tr>
                                <td className="info-label">Nationality</td>
                                <td className="info-value">Indian</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="player-description">
                        Yashasvi Jaiswal became a prominent name in Indian cricket after a stellar Under-19 World Cup held in 2020 where he was awarded the man of the tournament. He piled on more than 400 runs in the tournament and the fact that he has to struggle a lot to reach that level made his success even sweeter for him. Yashasvi has had to deal with severe hardships during his junior days of playing cricket when he was not selected for the Indian U-19 side...
                        <a href="#" className="continue-reading">continue reading</a>
                    </p>
                </div>

            </div>
        </>
    )
};

const ArticleCard = ({ newsvideodata }: any) => {
    return (
        <>

            <Link href="/news/sa-vs-pak-prediction" className="article-card">
                <div className="article-image">
                    {/* <CustomImg
                        src="/news-2.webp"
                        alt="SA vs PAK Prediction"


                    /> */}
                    <img src="/news-2.webp" alt="SA vs PAK Prediction" className="img-fluid" />
                </div>
                <div className="article-content">
                    <div className="article-meta">
                        <small className="author">
                            {newsvideodata?.author} <span>{newsvideodata?.timeAgo}</span>
                        </small>
                    </div>
                    <p className="article-title">
                        {newsvideodata?.title}
                    </p>
                </div>
            </Link>
        </>
    )
};

