import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getImgUrl } from '@/helper/common';
import { CustomImg } from '@/helper/image.helper';
import { titleToSlug } from '@/helpers/slugConverter';
import useSeriesNStore from '@/features/series/series.news.service';
import useSeriesOStore from '@/features/series/series.detail.overview';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import { SeriesTabs } from '@/components/series/tabs';
import Head from 'next/head';



const Index = () => {

    const route = useRouter()
    const store = useSeriesOStore()

    const { seriesId } = route.query

    const newsStore = useSeriesNStore()

    useEffect(() => {
        if (!route.isReady) return
        store.get.list(seriesId + '')
        newsStore.get.paginate({ series_id: seriesId + '' })

    }, [route.isReady, seriesId])

    return (
        <div>

            <HomeWrapper>
                <Container sx={{ mb: 10 }}>

                    <div className="row series__featured-match">
                        <SeriesCard />
                        <SeriesTabs
                            selectIndex={0}
                        />

                        <div className="col-md-8">
                            <div className="series-title" >
                                <h4 >Featured Matches</h4>
                                <Link className="" href={`/series/${seriesId}/${titleToSlug(store.series?.list?.details?.name)}/fixture`}>All Matches <ArrowLeft /></Link>

                            </div>

                            {
                                store.series.match?.length > 0 &&
                                store.series.match?.map((match: any) => {
                                    return (

                                        <SeriersOverViewCard
                                            match={match}
                                            competition={store.series.list?.details}
                                        />
                                    )
                                })
                            }


                            <SeriesInfoFull
                                detail={store.series?.list?.details}
                            />

                        </div>

                    </div>

                    <Grid container spacing={3}>


                        <Grid item xs={12} md={4} sx={{ mt: 5 }}>

                            <Grid container spacing={3}>

                                <Grid item xs={12}>
                                    {
                                        newsStore.series.list.length > 0 &&

                                        <>

                                            <div className="series-title" >
                                                <h3>Key Stats</h3>
                                                <Link className="series-card-btn" href={`/series/${seriesId}/${titleToSlug(store.series?.list?.details?.name)}/news`}>
                                                    All News <ArrowLeft /></Link>


                                            </div>


                                            {newsStore.series?.list?.slice(0, 5)?.map((news: any) => {
                                                return (
                                                    <>
                                                        <PlayerAritcleCard
                                                            news={news}
                                                        />
                                                    </>
                                                )
                                            })}

                                        </>
                                    }

                                </Grid>
                            </Grid>


                        </Grid>


                    </Grid>
                </Container>

            </HomeWrapper>

        </div >
    )
}

export default Index




export const SeriesCard = () => {
    const router = useRouter()
    const { seriesId } = router.query
    const store = useSeriesOStore()

    useEffect(() => {
        if (!router.isReady) return
        store.get.list(seriesId + '')

    }, [router.isReady, seriesId])
    const detail = store.series?.list?.details
    return (
        <>
            <Head>
                <title>{detail?.name}  </title>
            </Head>
            <div className='col-md-10' style={{ height: '240px', display: 'flex', alignItems: 'center' }}>

                <div className={`sr-main-cd cd`}>
                    <CustomImg
                        src={detail?.image_url}
                        alt={''}
                    />

                    <div className="series-top-card-o">
                        <h3 style={{ marginBlock: '5px' }}>{detail?.name}</h3>
                        <span >{moment(detail?.start_date).format('DD MMMM')} - {moment(detail?.end_date).format('DD MMMM')}</span>

                        <Link className="sr-c-btn" href={`/series/${seriesId}/${titleToSlug(detail?.name)}/fixture`}>
                            <h3>More  <ArrowLeft /></h3>
                        </Link>
                    </div>

                </div>



            </div>
            <div className="back-color-carousel">

            </div>
        </>
    )
}




export const SeriersOverViewCard = (props: any) => {

    console.log("pp", props)
    const router = useRouter()
    return (

        <>
            <div className=' row fixture-list mt-3'
                onClick={() => {
                    if (props?.match?.status?.toLowerCase() === 'live') {
                        router.push('/live-score/' + titleToSlug(props?.competition?.name) + '-' + titleToSlug(props?.match?.sub_title) + '/' + props.match?.id + '/scorecard')
                    }
                    else if (props?.match?.status?.toLowerCase() === 'completed') {
                        router.push('/live-score/' + titleToSlug(props?.competition?.name) + '-' + titleToSlug(props?.match?.sub_title) + '/' + props.match?.id + '/scorecard')
                    }
                    else if (props?.match?.status?.toLowerCase() === 'upcoming') {
                        router.push('/live-score/' + titleToSlug(props?.competition?.name) + '-' + titleToSlug(props?.match?.sub_title) + '/' + props.match?.id + '/info')
                    }
                    else {
                        router.push('/live-score/' + titleToSlug(props?.competition?.name) + '-' + titleToSlug(props?.match?.sub_title) + '/' + props.match?.id + '/info')
                    }

                }}
            >
                <div className='col-12 col-md-4 optional fix-status mt-2' >


                    {props?.match?.status?.toLowerCase() === 'live' ?
                        <div className="match-update">
                            <span>{''}</span>
                            <h2>LIVE </h2>
                        </div>

                        : props?.match?.status?.toLowerCase() == 'completed' ?
                            <h4 style={{ color: 'green' }}>Match Completed</h4>
                            :
                            <>
                                <h4 >{moment(props.match?.starting_at).format('Do MMM , h:mm A')}</h4>
                            </>

                    }


                </div>

                <div className='col-12 col-md-4 first se mt-2'>
                    <CustomImg
                        src={getImgUrl(props?.match?.teama?.image_url)}
                        alt={props.match?.teama?.code}
                    />


                    <h4>{props.match?.teama?.name}</h4>

                </div>

                <div className='col-12 col-md-4 second fix-status mt-2' >


                    {props?.match?.status?.toLowerCase() === 'live' ?
                        <div className="match-update">
                            <span>{''}</span>
                            <h2>LIVE </h2>
                        </div>

                        : props?.match?.status?.toLowerCase() == 'completed' ?
                            <h4 style={{ color: 'green' }}>Match Completed</h4>
                            :
                            <>
                                <h4 >{moment(props.match?.starting_at).format('Do MMM , h:mm A')}</h4>
                            </>

                    }


                </div>

                <div className='col-12 col-md-4 third se mt-2'>
                    <CustomImg
                        src={getImgUrl(props?.match?.teamb?.image_url)}
                        alt={props.match?.teamb?.code}
                    />

                    <h4 style={{ textAlign: 'right' }}>{props.match?.teamb?.name}</h4>

                </div>

                <div className='col-12 col-md-4 optional-2 fix-status mt-3' >


                    {props?.match?.status_note?.toLowerCase() === 'status_note' ?
                        <div className="match-update">
                            <span>{''}</span>
                            <h2>status-note </h2>
                        </div>

                        : props?.match?.status?.toLowerCase() == 'completed' ?
                            <h4 style={{ color: 'green' }}></h4>
                            :
                            <>
                                <h4 >{moment(props.match?.starting_at).format('Do MMM , h:mm A')}</h4>
                            </>

                    }


                </div>
            </div>
        </>

    )
}









export const SeriesInfoFull = (props?: any) => {
    const router = useRouter()
    const { seriesId } = router.query
    const store = useSeriesOStore()
    useEffect(() => {
        if (!router.isReady) return
        store.get.list(seriesId + '')

    }, [router.isReady, seriesId])
    const detail = store.series?.list?.details

    return (
        <>
            <div className="sr-info-outer bg-card mt-3" >
                <h2>Series Details</h2>


                <div className="sr-info-body">
                    <AboutHead
                        title='Title'
                        value={detail?.name}
                    />
                    <AboutHead
                        title='Start at'
                        value={moment(detail?.starting_at).format('DD MMMM YYYY')}
                    />
                    <AboutHead
                        title='End at'
                        value={moment(detail?.end_date).format('DD MMMM YYYY')}
                    />
                    <AboutHead
                        title='Format'
                        value={detail?.format}
                    />
                    <AboutHead
                        title='Type'
                        value={detail?.type}
                    />
                    <AboutHead
                        title='Total Matches'
                        value={detail?.total_matches}
                    />
                    <AboutHead
                        title='Status'
                        value={detail?.status}
                    />



                </div>

            </div >
        </>
    )
}


const PlayerAritcleCard = (props: any) => {
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



export const AboutHead = (about: any) => {
    return (
        <div className="row info-txt mt-2">
            <div className='col-4'>
                <h4>{about.title}</h4>
            </div>
            <div className='col-8'>

                <h3>{about.value}</h3>

            </div>
        </div>
    )
}




// const MostRunsCard = () => {
//     return (
//         <>
//             <div className="player-of-the-match-card-wrapper series-most">
//                 <h3>Most Runs</h3>
//                 <div className="new-player-details">
//                     <div className="new-player-img-name">
//                         <Image src={IconImg} alt='logo' />
//                         <div className="name">
//                             <h5>Virat Kohali</h5>
//                             <h3>23 Years</h3>
//                         </div>
//                     </div>

//                     <div className="best-score-1">
//                         <h4>129</h4>

//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }


interface Tags {
    title: string;
    url?: string;
}
const TopTags = (props: Tags) => {

    return (
        <Link href={props?.url + ''} className="series-tag">{props?.title} </Link>
    )
}



{/* <div className="series-title" >
                            <h3>Player Info</h3>
                        </div>

                        <MostRunsCard /> */}



const ArrowLeft = () => {
    return (
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.769597 0.310051C0.671753 0.407694 0.594128 0.523675 0.541164 0.651356C0.4882 0.779037 0.460937 0.91591 0.460938 1.05414C0.460937 1.19237 0.4882 1.32924 0.541164 1.45692C0.594128 1.58461 0.671753 1.70059 0.769597 1.79823L4.86473 5.89336L0.769597 9.9885C0.671882 10.0862 0.59437 10.2022 0.541487 10.3299C0.488604 10.4576 0.461384 10.5944 0.461384 10.7326C0.461384 10.8708 0.488604 11.0076 0.541487 11.1353C0.59437 11.263 0.671882 11.379 0.769597 11.4767C0.867312 11.5744 0.983317 11.6519 1.11099 11.7048C1.23866 11.7577 1.3755 11.7849 1.51369 11.7849C1.65188 11.7849 1.78871 11.7577 1.91639 11.7048C2.04406 11.6519 2.16006 11.5744 2.25778 11.4767L7.10228 6.63218C7.20012 6.53453 7.27775 6.41855 7.33071 6.29087C7.38368 6.16319 7.41094 6.02632 7.41094 5.88809C7.41094 5.74986 7.38368 5.61298 7.33071 5.4853C7.27775 5.35762 7.20012 5.24164 7.10228 5.144L2.25778 0.299496C1.85671 -0.101574 1.18122 -0.101574 0.769597 0.310051Z" fill="#1976d2" />
        </svg>


    )
}
