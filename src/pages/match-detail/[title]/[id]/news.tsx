import React from 'react'
import TopMatchSection from '@/components/match-detail/TopMatchSection'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import MatchDetailTabs from '@/components/match-detail/tabs'

const News = () => {
    return (
        <>
            <HomeWrapper>
                <TopMatchSection />
                <div className="m-detail-outer">
                    <MatchDetailTabs selectIndex={4} />
                </div>
                <NewsData />
            </HomeWrapper>
        </>
    )
};

export default News




const NewsData = () => {

    const newsCards = [
        {
            title: "Australia optimistic about Ellyse Perry's fitness after injuring hip",
            date: "30-Jan-2025",
            timeAgo: "20 hrs ago",
            author: "Alex Malcolm",
            imageUrl: "/match-news.webp"
        },
        {
            title: "Smith announces availability for upcoming T20 series",
            date: "30-Jan-2025",
            timeAgo: "22 hrs ago",
            author: "Sarah Thompson",
            imageUrl: "/match-news-second.webp"
        },
        {
            title: "Women's Ashes: England secure crucial win in second ODI",
            date: "29-Jan-2025",
            timeAgo: "1 day ago",
            author: "James Wilson",
            imageUrl: "/match-news.webp"
        },
        {
            title: "Cricket Australia announces new domestic tournament structure",
            date: "29-Jan-2025",
            timeAgo: "1 day ago",
            author: "Michael Chen",
            imageUrl: "/match-news-second.webp"
        },
        {
            title: "Rising star Jessica Williams joins national training camp",
            date: "28-Jan-2025",
            timeAgo: "2 days ago",
            author: "David Roberts",
            imageUrl: "/match-news.webp"
        },
        {
            title: "New bowling coach appointed for national women's team",
            date: "28-Jan-2025",
            timeAgo: "2 days ago",
            author: "Emma Davis",
            imageUrl: "/match-news-second.webp"
        },
        {
            title: "Stadium upgrades announced for upcoming international series",
            date: "27-Jan-2025",
            timeAgo: "3 days ago",
            author: "Tom Anderson",
            imageUrl: "/match-news.webp"
        }
    ];

    return (
        <>
            <div className='row news-section g-4'>
                {
                    newsCards?.map((carddata) => {
                        return (
                            <>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className="news-card">
                                        <img
                                            src={carddata.imageUrl}
                                            alt="Sports players celebrating"
                                            className="news-card__image img-fluid"
                                        />
                                        <div className="news-card__content">
                                            <h2 className="news-card__title">
                                                {carddata.title}
                                            </h2>
                                            <div className="news-card__meta">
                                                <span className="news-card__date">{carddata.date}</span>
                                                <span className="news-card__dot">•</span>
                                                <span className="news-card__time">{carddata.timeAgo}</span>
                                                <span className="news-card__dot">•</span>
                                                <span className="news-card__author">{carddata.author}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>




        </>
    )
};