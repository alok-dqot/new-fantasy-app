
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import useNewsStore from '@/features/news/news.service'
import useVideoNewsStore from '@/features/news/news.video'
import { CustomImg } from '@/helper/image.helper'
import { MetaTags } from '@/helpers/meta.helper'
import { titleToSlug } from '@/helpers/slugConverter'
import { Box, Button, Container, Grid, Link, Tab, Tabs } from '@mui/material'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'




const index = () => {
    const store = useNewsStore()
    const router = useRouter()

    const { type } = router.query

    const [pageSize, setPageSize] = useState(20)
    const [tab, setTabs] = useState(0)

    useEffect(() => {
        if (!router.isReady) return

        if (type === 'home') {
            setTabs(0)
        }
        else if (type === 'news') {
            setTabs(1)
        }
        else if (type === 'blog') {
            setTabs(2)
        }
        else {
            setTabs(3)
        }

        store.get.allNews({ size: pageSize })

    }, [router.isReady, type])




    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue)

        let type;


        if (newValue === 0) {
            type = 'home'
        }

        else if (newValue === 1) {
            type = 'news'
        }

        else if (newValue === 2) {
            type = 'blog'
        }

        else {
            type = 'videos'
        }

        router.push({
            query: { type: type }
        }, undefined, { shallow: true });


    }


    return (
        <>
            <MetaTags pageName={'NEWS'} />
            <HomeWrapper>

                <Container>
                    <div className="player-news-container">

                        <h2 className="sch-h2" style={{ marginTop: '30px', marginBottom: '35px' }}>News </h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={9}>

                                <div className="" style={{ paddingBlock: '6px', backgroundColor: 'var(--bg-card)', color: 'white', borderRadius: '10px', marginBlock: '10px' }}>

                                    <Tabs value={tab} centered className='' variant="standard" onChange={handleChangeTab}>
                                        <Tab label={"Home"} />
                                        <Tab label="News" />
                                        <Tab label="Blog" />
                                        {/* <Tab label="Videos " /> */}
                                    </Tabs>

                                </div>
                            </Grid>

                        </Grid>

                        <div style={{ height: '20px' }}></div>
                        {(tab === 0 || tab == 1) && <NewsCom tab={tab} />}
                        {(tab === 0 || tab == 2) && <BlogComp tab={tab} />}


                        {/* {(tab === 0 || tab == 3) && <VideoComp tab={tab} />} */}
                    </div>



                </Container>

            </HomeWrapper>

        </>
    )
}

export default index



const NewsCom = ({ tab }: { tab: number }) => {
    const store = useNewsStore();
    const router = useRouter();
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        if (!router.isReady) return;
        store.get.allNews({ size: pageSize });
    }, [router.isReady]);
    useEffect(() => {
        if (tab === 1) {
            const handleScroll = () => {
                const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
                if (bottom) {
                    handleMore();
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [pageSize, tab]);

    const handleMore = () => {
        store.get.allNews({ size: pageSize });
        setPageSize(pageSize + 10);
    };

    const news = store.blog.all;


    return (
        <div className="blog-wrapper">
            <Grid container gap={2}>
                {news?.latest ? (
                    <Grid item xs={12} md={9}>
                        <Link
                            className="match-info-card"
                            style={{ cursor: 'pointer' }}
                            href={`/blogdetail/${news?.latest?.id}`}
                            target="_new"
                        >
                            <div className="match-info">
                                <div className="img-box">
                                    <CustomImg src={news?.latest?.image_url} alt={news?.latest?.img_alt_text || 'news-card'} />
                                </div>
                                <div className="txt news-txt">
                                    <h2>{news?.latest?.title}</h2>
                                    <div
                                        className="match-article-content limit-3"
                                        dangerouslySetInnerHTML={{ __html: news?.latest?.content }}
                                    ></div>
                                    <h4>{moment(news?.latest?.created_at).startOf('hour').fromNow()}</h4>
                                </div>
                            </div>
                        </Link>

                        <Grid container sx={{ mt: '20px' }} gap={1}>
                            {news?.grid?.length > 0 &&
                                [...(news?.grid || [])].map((news: any, index: number) => (
                                    <Grid key={index} item xs={11} sm={5.5} md={3.83} sx={{ mx: 'auto' }}>
                                        <div
                                            className="blog-card-outer news-sp"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                router.push(`/blogdetail/${news?.id}/`);
                                            }}
                                        >
                                            <div className="blog-card-img">
                                                <CustomImg src={news?.image_url} alt={news?.latest?.img_alt_text || 'news-card'} />
                                            </div>
                                            <h2 className="headline limit-2">{news?.title}</h2>
                                            <div className="meta-info" style={{ marginTop: '17px' }}>
                                                <span className="date" style={{ fontSize: '11px' }}>
                                                    <svg
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11.9 1.4H10.5V0.7C10.5 0.514348 10.4263 0.336301 10.295 0.205025C10.1637 0.0737498 9.98565 0 9.8 0C9.61435 0 9.4363 0.0737498 9.30503 0.205025C9.17375 0.336301 9.1 0.514348 9.1 0.7V1.4H4.9V0.7C4.9 0.514348 4.82625 0.336301 4.69497 0.205025C4.5637 0.0737498 4.38565 0 4.2 0C4.01435 0 3.8363 0.0737498 3.70503 0.205025C3.57375 0.336301 3.5 0.514348 3.5 0.7V1.4H2.1C1.54305 1.4 1.0089 1.62125 0.615076 2.01508C0.221249 2.4089 0 2.94305 0 3.5V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V3.5C14 2.94305 13.7788 2.4089 13.3849 2.01508C12.9911 1.62125 12.457 1.4 11.9 1.4ZM12.6 11.9C12.6 12.0857 12.5263 12.2637 12.395 12.395C12.2637 12.5263 12.0857 12.6 11.9 12.6H2.1C1.91435 12.6 1.7363 12.5263 1.60503 12.395C1.47375 12.2637 1.4 12.0857 1.4 11.9V7H12.6V11.9ZM12.6 5.6H1.4V3.5C1.4 3.31435 1.47375 3.1363 1.60503 3.00503C1.7363 2.87375 1.91435 2.8 2.1 2.8H3.5V3.5C3.5 3.68565 3.57375 3.8637 3.70503 3.99497C3.8363 4.12625 4.01435 4.2 4.2 4.2C4.38565 4.2 4.5637 4.12625 4.69497 3.99497C4.82625 3.8637 4.9 3.68565 4.9 3.5V2.8H9.1V3.5C9.1 3.68565 9.17375 3.8637 9.30503 3.99497C9.4363 4.12625 9.61435 4.2 9.8 4.2C9.98565 4.2 10.1637 4.12625 10.295 3.99497C10.4263 3.8637 10.5 3.68565 10.5 3.5V2.8H11.9C12.0857 2.8 12.2637 2.87375 12.395 3.00503C12.5263 3.1363 12.6 3.31435 12.6 3.5V5.6Z"
                                                            fill="#747474"
                                                        />
                                                    </svg>
                                                    {moment(news?.created_at).format('LL')}
                                                </span>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>

                ) : (
                    <Grid item xs={8} className="no-data">
                        <CustomImg src="/icons/nodata.svg" alt="no-data" />
                    </Grid>
                )}

            </Grid>
        </div>
    );
};





const VideoComp = ({ tab }: { tab: number }) => {

    const videoStore = useVideoNewsStore()
    const router = useRouter()

    const [page, setPage] = useState(10)


    useEffect(() => {
        if (!router.isReady) return
        videoStore.get.list({ size: page })

    }, [router.isReady])


    const handleMore = () => {
        videoStore.get.list({ size: page + 10 } as any)
        setPage(page + 10)
    }



    const fVideo = videoStore.video?.list?.length > 0 && videoStore.video.list[0]
    return (
        <>

            {
                videoStore.video?.list?.length > 0 ?
                    <div className="blog-wrapper" style={{ marginTop: '20px' }}>
                        <Grid container gap={2}>


                            <Grid item xs={12} md={10} >
                                <Link className='match-info-card'
                                    href={`/videos/${fVideo?.id}/${titleToSlug(fVideo?.title)}`} target='_new'>

                                    {fVideo?.video_link && <div className="match-info">
                                        <div className="img-box">
                                            <ReactPlayer
                                                width="100%"
                                                height="100%"
                                                url={fVideo?.video_link}
                                                playing={false}
                                                muted={true}
                                                light={false}
                                                pip={false}
                                                controls={false}
                                                className='video-react-player'

                                                config={{
                                                    file: {
                                                        attributes: {
                                                            controlsList: 'nodownload',
                                                        },
                                                    },
                                                    youtube: { playerVars: { rel: 0 } }
                                                }}
                                                onPlay={() => router.push(`/videos/${fVideo?.id}/${titleToSlug(fVideo?.title)}`)}
                                            />

                                        </div>
                                        <div className="txt">

                                            <h2>{fVideo?.title}</h2>
                                            <div className='match-article-content limit-3' dangerouslySetInnerHTML={{ __html: fVideo?.des }}></div>

                                            <h4>{moment(fVideo?.created_at).startOf('hour').fromNow()}</h4>
                                        </div>
                                    </div>
                                    }
                                </Link>


                                <Grid container sx={{ mt: '20px' }} gap={2}>

                                    {
                                        videoStore.video?.list?.length > 0 && videoStore.video?.list?.slice(1,)?.map((n: any) => {

                                            return (
                                                <>
                                                    <Grid xs={12} sm={5} md={3.9} sx={{ mx: 'auto' }}>
                                                        <div className="blog-card-outer" style={{ padding: '0px', height: '200px' }}>

                                                            <ReactPlayer
                                                                width="100%"
                                                                height="100%"
                                                                url={n?.video_link}
                                                                playing={false}
                                                                muted={true}
                                                                light={false}
                                                                pip={false}
                                                                controls={false}
                                                                className='video-react-player'

                                                                config={{
                                                                    file: {
                                                                        attributes: {
                                                                            controlsList: 'nodownload',
                                                                        },
                                                                    },
                                                                    youtube: { playerVars: { rel: 0 } }
                                                                }}
                                                                onPlay={() => router.push(`/videos/${n?.id}/${titleToSlug(n?.title)}`)}
                                                            />


                                                        </div>

                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }



                                </Grid>
                                {videoStore.video?.total >= page && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                                    <Button className='bn-primary' type='button' style={{ padding: '7px 34px !important', }}
                                        onClick={handleMore}
                                    >Load More </Button>

                                </Box>}


                            </Grid>



                        </Grid>


                    </div >

                    :
                    <Grid item xs={8} className='no-data'>
                        {
                            (tab == 2) &&
                            <CustomImg src='/icons/nodata.svg' alt='no-data' />
                        }
                    </Grid>
            }
        </>
    )
}







const BlogComp = ({ tab }: { tab: number }) => {
    const store = useNewsStore();
    const router = useRouter();
    const [pageSize, setPageSize] = useState(11);

    useEffect(() => {
        if (!router.isReady) return;
        store.get.allBlogs({ size: pageSize });
    }, [router.isReady]);

    useEffect(() => {
        if (tab === 2) {
            const handleScroll = () => {
                const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
                if (bottom) {
                    handleMore();
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [pageSize, tab]);

    const handleMore = () => {
        store.get.allBlogs({ size: pageSize });
        setPageSize(pageSize + 10);
    };

    const news = store.blog.allBlogList;


    return (
        <div className="blog-wrapper">
            <Grid container gap={2}>


                <Grid item xs={12} md={8.1}>
                    <Link
                        className="match-info-card"
                        style={{ cursor: 'pointer' }}
                        href={`/blogdetail/${news?.latest?.id}`}
                        target="_new"
                    >
                        <div className="match-info">
                            <div className="img-box">
                                <CustomImg src={news?.latest?.image_url} alt={news?.latest?.img_alt_text || 'news-card'} />
                            </div>
                            <div className="txt news-txt">
                                <h2>{news?.latest?.title}</h2>
                                <div
                                    className="match-article-content limit-3"
                                    dangerouslySetInnerHTML={{ __html: news?.latest?.content }}
                                ></div>
                                <h4>{moment(news?.latest?.created_at).startOf('hour').fromNow()}</h4>
                            </div>
                        </div>
                    </Link>

                    <Grid container sx={{ mt: '20px' }} gap={1}>
                        {news?.grid?.length > 0 &&
                            [...(news?.grid || [])].map((news: any, index: number) => (
                                <Grid key={index} item xs={11} sm={5.5} md={3.83} sx={{ mx: 'auto' }}>
                                    <div
                                        className="blog-card-outer news-sp"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            router.push(`/blogdetail/${news?.id}/`);
                                        }}
                                    >
                                        <div className="blog-card-img">
                                            <CustomImg src={news?.image_url} alt={news?.latest?.img_alt_text || 'news-card'} />
                                        </div>
                                        <h2 className="headline limit-2">{news?.title}</h2>
                                        <div className="meta-info" style={{ marginTop: '17px' }}>
                                            <span className="date" style={{ fontSize: '11px' }}>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11.9 1.4H10.5V0.7C10.5 0.514348 10.4263 0.336301 10.295 0.205025C10.1637 0.0737498 9.98565 0 9.8 0C9.61435 0 9.4363 0.0737498 9.30503 0.205025C9.17375 0.336301 9.1 0.514348 9.1 0.7V1.4H4.9V0.7C4.9 0.514348 4.82625 0.336301 4.69497 0.205025C4.5637 0.0737498 4.38565 0 4.2 0C4.01435 0 3.8363 0.0737498 3.70503 0.205025C3.57375 0.336301 3.5 0.514348 3.5 0.7V1.4H2.1C1.54305 1.4 1.0089 1.62125 0.615076 2.01508C0.221249 2.4089 0 2.94305 0 3.5V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V3.5C14 2.94305 13.7788 2.4089 13.3849 2.01508C12.9911 1.62125 12.457 1.4 11.9 1.4ZM12.6 11.9C12.6 12.0857 12.5263 12.2637 12.395 12.395C12.2637 12.5263 12.0857 12.6 11.9 12.6H2.1C1.91435 12.6 1.7363 12.5263 1.60503 12.395C1.47375 12.2637 1.4 12.0857 1.4 11.9V7H12.6V11.9ZM12.6 5.6H1.4V3.5C1.4 3.31435 1.47375 3.1363 1.60503 3.00503C1.7363 2.87375 1.91435 2.8 2.1 2.8H3.5V3.5C3.5 3.68565 3.57375 3.8637 3.70503 3.99497C3.8363 4.12625 4.01435 4.2 4.2 4.2C4.38565 4.2 4.5637 4.12625 4.69497 3.99497C4.82625 3.8637 4.9 3.68565 4.9 3.5V2.8H9.1V3.5C9.1 3.68565 9.17375 3.8637 9.30503 3.99497C9.4363 4.12625 9.61435 4.2 9.8 4.2C9.98565 4.2 10.1637 4.12625 10.295 3.99497C10.4263 3.8637 10.5 3.68565 10.5 3.5V2.8H11.9C12.0857 2.8 12.2637 2.87375 12.395 3.00503C12.5263 3.1363 12.6 3.31435 12.6 3.5V5.6Z"
                                                        fill="#747474"
                                                    />
                                                </svg>
                                                {moment(news?.created_at).format('LL')}
                                            </span>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                </Grid>



            </Grid>
        </div >
    );
};
