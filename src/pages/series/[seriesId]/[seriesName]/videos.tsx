import { Box, Button, Container, Grid } from '@mui/material'
import { SeriesCard } from './overview'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import { SeriesTabs } from '@/components/series/tabs'
import ReactPlayer from 'react-player'
import { titleToSlug } from '@/helpers/slugConverter'
import Nodata from '@/components/no-data/NoData'
import useSeriesVideoStore from '@/features/series/video.service'




const SeriesVideos = () => {
    const router = useRouter()

    const { seriesId } = router.query;

    const store = useSeriesVideoStore();

    const [page, setPage] = useState(10)

    useEffect(() => {
        if (!router.isReady) return

        store.get.list()

    }, [router.isReady, seriesId])


    const handleMore = () => {
        store.get.list()
        setPage(page + 10)
    }


    return (
        <div>
            <HomeWrapper>
                <Container sx={{ mb: 10 }}>

                    <div className="row">

                        <SeriesCard />
                        <SeriesTabs
                            selectIndex={5}

                        />
                    </div>



                    <Container className="dt-video">
                        <Grid container spacing={2} sx={{ mt: 2 }}>

                            {
                                store.video.list?.length > 0 ? store.video.list?.map((v: any) => {
                                    return (
                                        <Grid item sm={4} xs={10} md={2.8} sx={{ mx: 'auto' }}>

                                            <VideoCard
                                                v={v}
                                            />
                                        </Grid>
                                    )
                                })
                                    :
                                    <Grid item xs={8}>
                                        <Nodata />
                                    </Grid>
                            }

                        </Grid>

                        {store.video?.total >= page && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                            <Button className='bn-primary' type='button' style={{ padding: '7px 34px !important', }}
                                onClick={handleMore}
                            >Load More </Button>

                        </Box>
                        }

                    </Container>





                </Container>

            </HomeWrapper>
        </div>
    )
}

export default SeriesVideos



export const VideoCard = (props: any) => {
    const router = useRouter();


    return (
        <>

            <div className="blog-card-outer" style={{ padding: '0px', height: '200px' }}>

                <div className="blog-card-img video-card-img">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url={props?.v?.video_link}
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
                        onPlay={() => router.push(`/videos/${props?.v?.id}/${titleToSlug(props?.v?.title)}`)}
                    />

                </div>
            </div>

        </>
    )
}