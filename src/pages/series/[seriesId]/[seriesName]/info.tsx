import { Container, Grid } from '@mui/material'
import { SeriesCard, SeriesInfoFull } from './overview'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import { SeriesTabs } from '@/components/series/tabs'




const SeriesNews = () => {


    return (
        <div>
            <HomeWrapper>
                <Container sx={{ mb: 10 }}>
                    <Grid container>


                        <Grid item xs={12} md={8} sx={{ my: 6 }}>
                            <SeriesCard />

                        </Grid>

                    </Grid>



                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} sx={{ mb: 3 }}>
                            <SeriesTabs
                                selectIndex={5}

                            />
                            <SeriesInfoFull />
                        </Grid>


                    </Grid>
                </Container>

            </HomeWrapper>
        </div>
    )
}

export default SeriesNews