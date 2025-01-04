import { Layout } from "@/CustomHook/layout";
import { CustomCarousel } from "@/components/HomeMatches";
import BasicTable from "@/components/table/table";
import Navbar from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Image from 'next/image';
import { CustomImg } from "@/helper/image.helper";



const Overview = () => {

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
            <Navbar />
            <Layout>

                <div className="overview-container container">
                    <div className="row">
                        <div className="col-md-9 career-section">
                            <SectionHeader />
                            <PlayerRecentForm />
                            < PlayerCareerStats />



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

            </Layout>
            <Footer />

        </>
    );
};
export default Overview;


export const SectionHeader = () => {
    return (
        <>
            <div className="section-header">
                <h2 className="section-title">Career & Stats</h2>
                <div className="tab-group">
                    <button className="tab active">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Batting
                    </button>
                    <button className="tab">
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

const PlayerRecentForm = () => {
    return (
        <>
            <div className="player-recent-form">
                <h6 className="player-name">Yashasvi Jaiswal Recent Form</h6>
                <p className="section-title">Batting</p>
                <CustomCarousel>


                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>

                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>
                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>
                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>
                    <div className="card player-recent-form__card">

                        <a href="#"><h5>4(2)</h5></a>
                        <small>IND vs AUS, Test</small>


                    </div>



                </CustomCarousel>

            </div>
        </>
    )
};

const PlayerCareerStats = () => {
    return (
        <>
            <div className="player-career-stats">
                <h6 className="player-name">Yashasvi Jaiswal Career Stats</h6>
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

