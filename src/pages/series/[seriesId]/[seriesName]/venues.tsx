import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SeriesTabs } from '@/components/series/tabs';
import { SeriesCard } from './overview';
import useSeriesFixtureStore from '@/features/series/fixture.service';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import { AdsBanner } from '@/components/ads/Ads';




const Index = () => {

    const router = useRouter()


    const { seriesId } = router.query

    const store = useSeriesFixtureStore()

    useEffect(() => {
        if (!router.isReady) return
        store.getTeamVenue(seriesId as any)

    }, [router.isReady, seriesId])



    return (
        <HomeWrapper>

            <>
                <Container sx={{ mb: 10 }}>


                    <div className="row">

                        <SeriesCard />
                        <SeriesTabs
                            selectIndex={6}

                        />

                        <div className="col-md-8">

                            <VenueCards venues={store.fixture.venues} />
                        </div>

                        <div className="col-md-4 mt-5">
                            <AdsBanner />
                        </div>

                    </div>


                </Container>

            </>

        </HomeWrapper >
    )
}

export default Index




const VenueCards = (props: any) => {
    return (
        <div>
            {
                props?.venues?.length > 0 && props?.venues?.map((venue: any) => {
                    return (
                        <>
                            <div className='venue-card-outer mt-4'>
                                <img src='/icons/stadium.png' alt='img-fluid' />
                                <div className="venue-txt">
                                    <h3>{venue?.name}</h3>
                                    <p>{venue?.city} </p>

                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })
            }

        </div>

    )

}