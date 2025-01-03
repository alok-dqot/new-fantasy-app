import { Layout } from "@/CustomHook/layout";
import Navbar from "@/components/Header";
import Footer from "@/components/footer/Footer";

const MatchNews = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <div className="container news-container">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <a href="#" className="article-card">
                                <img src="/news-1.webp" alt="PAK vs SA Test" className="article-image" />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="author">POULOMI CHAKRABORTY</span>
                                        <span className="date">26 DEC 2024</span>
                                    </div>
                                    <h2 className="article-title">Where To Watch PAK vs SA 1st Test? Channel, Live Streaming, Date And Time</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="#" className="article-card">
                                <img src="/news-2.webp" alt="SA vs PAK Prediction" className="article-image" />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="author">POULOMI CHAKRABORTY</span>
                                        <span className="date">26 DEC 2024</span>
                                    </div>
                                    <h2 className="article-title">SA vs PAK 1st Test Match Prediction: Who Will Win Today's 1st Test Match Between South Africa and Pakistan?</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="#" className="article-card">
                                <img src="/news-3.webp" alt="Naseem Shah and Haris Rauf" className="article-image" />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="author">JATIN</span>
                                        <span className="date">19 DEC 2024</span>
                                    </div>
                                    <h2 className="article-title">Naseem Shah And Haris Rauf Embarrass Temba Bavuma With Perfectly Timed Dismissal</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="#" className="article-card">
                                <img src="/news-3.webp" alt="SA vs PAK Dream11" className="article-image" />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="author">POULOMI CHAKRABORTY</span>
                                        <span className="date">16 DEC 2024</span>
                                    </div>
                                    <h2 className="article-title">SA vs PAK Dream11 Prediction Today Match, Fantasy Cricket Tips, Pitch Report – Pakistan Tour Of South Africa 2024, 1st ODI</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-12">
                            <article className="featured-article">
                                <img src="/news-3.webp" alt="SA vs SL Day 1" className="featured-image" />
                                <div className="featured-content">
                                    <div className="article-meta">
                                        <span className="author">AAKASH SAINI</span>
                                        <span className="date">5 DEC 2024</span>
                                    </div>
                                    <h2 className="featured-title">SA vs SL Day 1 Highlights: Bavuma, Rickelton Ensure South Africa Take Opening Day Honours</h2>
                                    <p className="article-description">SA vs SL Match Highlights: Here's the complete timeline from the second Test match between South Africa and Sri Lanka.</p>
                                </div>
                            </article>
                        </div>

                        <div className="col-12">
                            <article className="featured-article">
                                <img src="/news-3.webp" alt="SA vs SL Day 1" className="featured-image" />
                                <div className="featured-content">
                                    <div className="article-meta">
                                        <span className="author">AAKASH SAINI</span>
                                        <span className="date">5 DEC 2024</span>
                                    </div>
                                    <h2 className="featured-title">SA vs SL Day 1 Highlights: Bavuma, Rickelton Ensure South Africa Take Opening Day Honours</h2>
                                    <p className="article-description">SA vs SL Match Highlights: Here's the complete timeline from the second Test match between South Africa and Sri Lanka.</p>
                                </div>
                            </article>
                        </div>

                        <div className="col-12">
                            <article className="featured-article">
                                <img src="/news-3.webp" alt="SA vs SL Day 1" className="featured-image" />
                                <div className="featured-content">
                                    <div className="article-meta">
                                        <span className="author">AAKASH SAINI</span>
                                        <span className="date">5 DEC 2024</span>
                                    </div>
                                    <h2 className="featured-title">SA vs SL Day 1 Highlights: Bavuma, Rickelton Ensure South Africa Take Opening Day Honours</h2>
                                    <p className="article-description">SA vs SL Match Highlights: Here's the complete timeline from the second Test match between South Africa and Sri Lanka.</p>
                                </div>
                            </article>
                        </div>

                        <div className="col-12">
                            <article className="featured-article">
                                <img src="/news-3.webp" alt="SA vs SL Day 1" className="featured-image" />
                                <div className="featured-content">
                                    <div className="article-meta">
                                        <span className="author">AAKASH SAINI</span>
                                        <span className="date">5 DEC 2024</span>
                                    </div>
                                    <h2 className="featured-title">SA vs SL Day 1 Highlights: Bavuma, Rickelton Ensure South Africa Take Opening Day Honours</h2>
                                    <p className="article-description">SA vs SL Match Highlights: Here's the complete timeline from the second Test match between South Africa and Sri Lanka.</p>
                                </div>
                            </article>
                        </div>

                        <div className="col-12">
                            <article className="featured-article">
                                <img src="/news-3.webp" alt="SA vs SL Day 1" className="featured-image" />
                                <div className="featured-content">
                                    <div className="article-meta">
                                        <span className="author">AAKASH SAINI</span>
                                        <span className="date">5 DEC 2024</span>
                                    </div>
                                    <h2 className="featured-title">SA vs SL Day 1 Highlights: Bavuma, Rickelton Ensure South Africa Take Opening Day Honours</h2>
                                    <p className="article-description">SA vs SL Match Highlights: Here's the complete timeline from the second Test match between South Africa and Sri Lanka.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </Layout>
            <Footer />

        </>
    )
};

export default MatchNews;