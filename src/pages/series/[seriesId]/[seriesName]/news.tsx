import { Container, Grid, Link } from '@mui/material'
import { SeriesCard } from './overview'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import moment from 'moment'
import NormalCarousel from '@/components/carousel/NormalCarousel'
import Nodata from '@/components/no-data/NoData'
import { CustomImg } from '@/helper/image.helper'
import { titleToSlug } from '@/helpers/slugConverter'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import useSeriesNStore from '@/features/series/series.news.service'
import { SeriesTabs } from '@/components/series/tabs'
import { AdsBanner } from '@/components/ads/Ads'



const SeriesNews = () => {
    const router = useRouter()

    const { seriesId } = router.query
    const store = useSeriesNStore();

    useEffect(() => {
        if (!router.isReady) return

        store.get.paginate({ series_id: seriesId } as any)


    }, [router.isReady, seriesId])



    return (
        <div>
            <HomeWrapper>
                <Container sx={{ mb: 10 }}>

                    <div className="row">

                        <SeriesCard />
                        <SeriesTabs
                            selectIndex={4}
                        />

                    </div>

                    <div className="player-news-container">

                        <div className="blog-wrapper">

                            {store.series?.latest?.top ?
                                <>

                                    <ArticleContainer
                                        isRanking={true}
                                        data={store?.series?.latest?.top}
                                        title={"News & Blogs"}
                                        news={store?.series?.latest?.grid1}

                                    />


                                    <div className='row'>
                                        <div className="col-12 col-md-6">
                                            {
                                                store.series?.latest?.grid2?.length > 0 && store.series?.latest?.grid2?.map((b: any) => {
                                                    return (
                                                        <div className="hm-article-card mt-4" key={b?.id}>
                                                            <Link href={`/blogdetail/${b?.id}`}>
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <img src={b?.image_url} alt="" />
                                                                    </div>
                                                                    <div className="col-md-9">

                                                                        <h3 className="limit-2">{b?.title}</h3>
                                                                        <p className='limit-2 mt-2'>{b?.meta_description}</p>
                                                                        {/* <p className="cd-time"><CalendarMonthIcon />{moment(b?.created_at).startOf('hour').fromNow()}</p> */}

                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }


                                        </div>
                                    </div>
                                </>

                                :
                                <>
                                    <Grid container>
                                        <Grid item xs={7.8}>


                                            <Nodata />
                                        </Grid>

                                    </Grid>

                                </>
                            }
                        </div>

                    </div>




                    <Grid container spacing={2}>
                        {
                            store?.series.more?.length > 0 &&
                            <>
                                <div className="series-title" >
                                    <h2 >More Articles</h2>
                                </div>
                                {store?.series.more?.map((blog: any) => {

                                    return (
                                        <Grid item xs={12} key={blog?.id}>
                                            <MatchArticleCard blog={blog} />
                                        </Grid>


                                    )
                                })}
                            </>
                        }

                    </Grid>



                </Container>

            </HomeWrapper>
        </div>
    )
}

export default SeriesNews



export const PlayerAritcleCard = (props: any) => {
    return (
        <>
            <div className="player-article-card-outer">
                <CustomImg
                    src={props?.news?.image_url}
                    alt={props?.news?.img_alt_text}
                />

                <div className="article-card-text">
                    <span>{moment(props?.news?.created_at).startOf('day').fromNow()}</span>
                    <h3>{props?.news?.title} </h3>
                </div>
            </div>
        </>
    )
}



export const MatchArticleCard = (props: any) => {
    const router = useRouter()
    const maxLength = 200;
    const content = props?.blog?.content || '';
    const truncatedContent = content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    return (
        <>

            <Grid xs={12} md={8} onClick={() => router.push(`//sprt-news/${props?.blog?.id}/${titleToSlug(props?.blog?.title)}`)} style={{ cursor: 'pointer' }}>
                <Grid container className="news-card" columnGap={2}>
                    <Grid item xs={4} className="news-image">
                        <CustomImg
                            src={props?.blog?.image_url}
                            alt={props?.blog?.img_alt_text}

                        />
                    </Grid>
                    <Grid item xs={7.4} className="news-content">
                        <h5 className="news-title limit-2">{props?.blog?.title}</h5>
                        <div className='excerpt limit-2' dangerouslySetInnerHTML={{ __html: truncatedContent }}></div>
                        <MetaTimeAndDate
                            date={props?.blog?.created_at}
                            size={11}
                        />
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}





const ArticleContainer = (props: any) => {

    const router = useRouter()
    const maxLength = 200;
    const content = props?.data?.content || '';

    const truncatedContent = content.length > maxLength ? content.substring(0, maxLength) + '...' : content;



    return (
        <>


            <div className='row'>
                <div className="col-12 col-md-8">
                    <h2 style={{ marginBottom: '30px', fontSize: '20px', marginTop: '40px' }}>{props?.title}</h2>
                    <Link className='match-info-card' style={{ cursor: 'pointer' }}
                        href={`/sports-news/${props?.data?.id}/${titleToSlug(props?.data?.title)}`}


                        target='_new'>

                        <div className="match-info">
                            <div className="img-box">
                                <CustomImg
                                    src={props?.data?.image_url}
                                    alt={props?.data?.img_alt_text}
                                />

                            </div>
                            <div className="txt">


                                <h2>{props?.data?.title}</h2>
                                <div className='match-article-content' dangerouslySetInnerHTML={{ __html: truncatedContent }}></div>

                                <h4>{moment(props?.data?.created_at).startOf('hour').fromNow()}</h4>

                            </div>
                        </div>

                    </Link>
                    {
                        props?.news?.length > 0 && props?.news?.map((b: any) => {
                            return (
                                <div className="hm-article-card mt-4" key={b?.id}>
                                    <Link href={`/blogdetail/${b?.id}`}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <CustomImg src={b?.image_url} alt="" />
                                            </div>
                                            <div className="col-md-9">

                                                <h3 className="limit-2">{b?.title}</h3>
                                                <p className='limit-2 mt-2'>{b?.meta_description}</p>
                                                {/* <p className="cd-time"><CalendarMonthIcon />{moment(b?.created_at).startOf('hour').fromNow()}</p> */}

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }


                </div>


                <div className="col-md-4 mt-5">
                    <AdsBanner />
                </div>
            </div>


        </>
    )
}







export const MetaTimeAndDate = (props: any) => {
    return (
        <>
            <div className="meta-info">
                <span className="date" style={{ fontSize: props?.size + 'px' || '11px' }}> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9 1.4H10.5V0.7C10.5 0.514348 10.4263 0.336301 10.295 0.205025C10.1637 0.0737498 9.98565 0 9.8 0C9.61435 0 9.4363 0.0737498 9.30503 0.205025C9.17375 0.336301 9.1 0.514348 9.1 0.7V1.4H4.9V0.7C4.9 0.514348 4.82625 0.336301 4.69497 0.205025C4.5637 0.0737498 4.38565 0 4.2 0C4.01435 0 3.8363 0.0737498 3.70503 0.205025C3.57375 0.336301 3.5 0.514348 3.5 0.7V1.4H2.1C1.54305 1.4 1.0089 1.62125 0.615076 2.01508C0.221249 2.4089 0 2.94305 0 3.5V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V3.5C14 2.94305 13.7788 2.4089 13.3849 2.01508C12.9911 1.62125 12.457 1.4 11.9 1.4ZM12.6 11.9C12.6 12.0857 12.5263 12.2637 12.395 12.395C12.2637 12.5263 12.0857 12.6 11.9 12.6H2.1C1.91435 12.6 1.7363 12.5263 1.60503 12.395C1.47375 12.2637 1.4 12.0857 1.4 11.9V7H12.6V11.9ZM12.6 5.6H1.4V3.5C1.4 3.31435 1.47375 3.1363 1.60503 3.00503C1.7363 2.87375 1.91435 2.8 2.1 2.8H3.5V3.5C3.5 3.68565 3.57375 3.8637 3.70503 3.99497C3.8363 4.12625 4.01435 4.2 4.2 4.2C4.38565 4.2 4.5637 4.12625 4.69497 3.99497C4.82625 3.8637 4.9 3.68565 4.9 3.5V2.8H9.1V3.5C9.1 3.68565 9.17375 3.8637 9.30503 3.99497C9.4363 4.12625 9.61435 4.2 9.8 4.2C9.98565 4.2 10.1637 4.12625 10.295 3.99497C10.4263 3.8637 10.5 3.68565 10.5 3.5V2.8H11.9C12.0857 2.8 12.2637 2.87375 12.395 3.00503C12.5263 3.1363 12.6 3.31435 12.6 3.5V5.6Z" fill="#747474" />
                </svg>
                    {moment(props?.date).format('LL')}</span>

            </div>
        </>
    )
}

