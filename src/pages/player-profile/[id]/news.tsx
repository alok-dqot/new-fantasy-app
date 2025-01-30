import PlayerContainer, { PlayerProfileTabs } from "@/CustomHook/layout";

const MatchNews = () => {

    const newsVideosData = [
        {
            id: 1,
            title: "[Watch] Scott Boland Packs Yashasvi Jaiswal Out Of Sydney Ground With An Absolute Jaffa",
            author: "SOUMYAJIT DUTTA",
            timeAgo: "5 HRS AGO",
            date: "3 JAN 2025",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        },
        {
            id: 2,
            title: "'Oye, Shot Nahi Lag Rahe Ab?': Yashasvi Jaiswal Gives Konstas A Taste Of His Own Medicine",
            author: "SOUMYAJIT DUTTA",
            timeAgo: "8 HRS AGO",
            date: "3 JAN 2025",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        },
        {
            id: 3,
            title: "[Watch] Yashasvi Jaiswal Hurts Mitchell Starc's Pride With Rampant Thrashing In Sydney",
            author: "RAJGEETA",
            timeAgo: "6 HRS AGO",
            date: "3 JAN 2025",
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
            date: "3 JAN 2025",
            imageUrl: "/news-3.webp",
            img: "/news-3.webp",
            category: "Cricket",
            type: "Match Highlight",
            isVideo: true
        }
    ];

    const newsCardsData = [
        {
            id: 1,
            title: "[Watch] Yashasvi Jaiswal Gets Teased By Scott Boland With A Clap On The Face After Wicket",
            description: "Scott Boland was seen celebrating on the face of Jaiswal after the batter's dismissal in the fifth Test of the BGT 2024-25. Here is a look at the event.",
            author: "PROBUDHA BHATTACHARJEE",
            date: "3 JAN 2025",
            imageUrl: "image-url-1.jpg", // You'll need to replace with actual image URLs
            category: "Cricket",
            type: "Match Highlight"
        },
        {
            id: 2,
            title: "Yashasvi Jaiswal And...? 3 Indian Batters Who Performed Brilliantly In Test Cricket In 2024",
            description: "In this article, take a look at three such batting performances that defined India's supremacy in Test cricket in 2024.",
            author: "SAKSHI SHARMA",
            date: "1 JAN 2025",
            imageUrl: "image-url-2.jpg",
            category: "Cricket",
            type: "Analysis"
        },
        {
            id: 3,
            title: "Kohli, Rohit To Be Rested? Jaiswal Toppled And BBL Roundup – December 31 Cricket Highlights",
            description: "A daily recap of five of the biggest cricket news that emerged out of Tuesday, December 31; from Ayush Mhatre's record day in Vijay Hazare Trophy to Deepti Sharma's rise in rankings.",
            author: "AAKASH SAINI",
            date: "1 JAN 2025",
            imageUrl: "image-url-3.jpg",
            category: "Cricket",
            type: "News Roundup"
        },
        {
            id: 4,
            title: "Tendulkar's Record Unbroken As Yashasvi Jaiswal Falls Short Despite MCG Heroics",
            description: "Yashasvi Jaiswal falls short of legendary batter Sachin Tendulkar for an elite all-time Indian batting record despite his splendid outing at the MCG.",
            author: "AAKASH SAINI",
            date: "31 DEC 2024",
            imageUrl: "image-url-4.jpg",
            category: "Cricket",
            type: "Match Report"
        },
        {
            id: 5,
            title: "Ayush Mhatre Scripts History At 17: Shatters Yashasvi Jaiswal's World Record After VHT Heroics",
            description: "This article will talk about Ayush Mhatre who has shattered Yashasvi Jaiswal's long-standing world record.",
            author: "ABHINAVTYAGI",
            date: "31 DEC 2024",
            imageUrl: "image-url-5.jpg",
            category: "Cricket",
            type: "Breaking News"
        }
    ];


    return (
        <>
            <PlayerContainer>
                <PlayerProfileTabs selectIndex={2} />

                <div className="container news-container">
                    <div className="row g-3">
                        {
                            newsVideosData?.map((newsvideodata) => {
                                return (
                                    <div className="col-md-6">
                                        <a href="#" className="article-card">
                                            <img src="/news-1.webp" alt="PAK vs SA Test" className="article-image" />
                                            <div className="article-content">
                                                <div className="article-meta">
                                                    <span className="author">{newsvideodata?.author}</span>
                                                    <span className="date">{newsvideodata?.date}</span>
                                                </div>
                                                <h2 className="article-title limit-2">{newsvideodata?.title}</h2>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }




                        {
                            newsCardsData?.map((newscarddata) => {
                                return (
                                    <div className="col-12">
                                        <article className="featured-article">
                                            <img src="/news-3.webp" alt="SA vs SL Day 1" className="featured-image" />
                                            <div className="featured-content">
                                                <div className="article-meta">
                                                    <span className="author">{newscarddata?.author}</span>
                                                    <span className="date">{newscarddata?.date}</span>
                                                </div>
                                                <h2 className="featured-title">{newscarddata?.title}</h2>
                                                <p className="article-description">{newscarddata?.description}</p>
                                            </div>
                                        </article>
                                    </div>
                                )
                            })
                        }




                    </div>
                </div>
            </PlayerContainer>

        </>
    )
};

export default MatchNews;