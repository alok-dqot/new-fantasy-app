import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SeriesTabs } from '@/components/series/tabs';
import { SeriesCard } from './overview';
import useSeriesFixtureStore from '@/features/series/fixture.service';




const Index = () => {

    const router = useRouter()


    const { seriesId } = router.query

    const store = useSeriesFixtureStore()

    useEffect(() => {
        if (!router.isReady) return
        store.getTeamVenue(seriesId as any)

    }, [router.isReady, seriesId])



    return (
        <div>

            <>
                <Container sx={{ mb: 10 }}>
                    <Grid container>


                        <Grid item xs={12} md={8} sx={{ my: 6, }}>
                            <SeriesCard />
                        </Grid>

                    </Grid>



                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} spacing={3}>

                            <SeriesTabs
                                selectIndex={6}

                            />
                            <br />


                            <VenueCards venues={store.fixture.venues} />



                        </Grid>


                    </Grid>
                </Container>

            </>

        </div >
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
                            <div className='venue-card-outer'>
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