import { Autocomplete, Box, Button, Container, Grid, TextField } from "@mui/material";
import { SeriesCard } from "./overview"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import moment from "moment"
import useSeriesFixtureStore from "@/features/series/fixture.service"
import HomeWrapper from "@/components/wrapper/HomeWrapper"
import { SeriesTabs } from "@/components/series/tabs"
// import { titleToSlug } from "@/helpers/slugConverter"
import { CustomImg } from "@/helper/image.helper"
import { getImgUrl } from "@/helper/common"
import { AdsBanner } from "@/components/ads/Ads"





const Matches = () => {

    const router = useRouter()

    const [page, setPage] = useState(10)

    const { seriesId } = router.query

    const store = useSeriesFixtureStore()

    const [team, setTeam] = useState({ id: '', name: '' })
    const [venue, setVenue] = useState({ id: '', name: '' })




    useEffect(() => {
        if (!router.isReady) return

        store.get.paginate({ seriesId } as any)
        store.getTeamVenue(seriesId as any)

    }, [router.isReady, seriesId])


    const handleMore = () => {
        store.get.paginate({ size: page + 10 } as any)
        setPage(page + 10)
    }

    return (
        <div>

            <HomeWrapper>
                <Container sx={{ mb: 10 }}>

                    <div className="row">
                        <SeriesCard />

                        <SeriesTabs
                            selectIndex={1}
                        />

                    </div>


                    <div className="row">

                        <div className="col-12 col-md-8 " >

                            <div className="sr-title">

                                <h4>Schedule</h4>
                                <div className="fltr-o">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={store.fixture.teams}
                                        getOptionLabel={(option: any) => {
                                            return option.name;
                                        }}
                                        value={team}
                                        onChange={(e, value: any) => {
                                            // console.log(value)
                                            if (value) {

                                                store.get.paginate({ teamId: value?.id } as any)
                                                setTeam({ id: value?.id, name: value?.name } as any)
                                            }
                                            else {
                                                setTeam({ id: '', name: '' })
                                                store.get.paginate({ teamId: 0 } as any)
                                            }
                                        }}
                                        sx={{ maxWidth: 300, width: '100%', background: 'var(--text-white)' }}
                                        renderInput={(params) => <TextField {...params} label="Team" size="small" />}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={store.fixture.venues}
                                        getOptionLabel={(option: any) => {
                                            return option.name;
                                        }}
                                        value={venue}
                                        onChange={(e, value) => {

                                            if (value) {

                                                setVenue({ id: value?.id, name: value?.name } as any)
                                                store.get.paginate({ venueId: value?.id } as any)
                                            }
                                            else {
                                                setVenue({ id: '', name: '' })
                                                store.get.paginate({ venueId: 0 } as any)
                                            }
                                        }}
                                        sx={{ maxWidth: 300, width: '100%', background: 'var(--text-white)' }}
                                        renderInput={(params) => <TextField {...params} label="Stadium" size="small" sx={{ borderRadius: '25px' }} />}
                                    />
                                    <Button className="series-tag" onClick={() => {
                                        store.get.paginate({ teamId: 0, venueId: 0 })
                                        setVenue({ id: '', name: '' })
                                        setTeam({ id: '', name: '' })
                                    }}>Clear </Button>
                                </div>
                            </div>


                            {

                                store?.fixture?.list?.length > 0 && store?.fixture?.list?.map((match: any) => {
                                    return (
                                        <SeriesMatchCard
                                            data={match}
                                        />
                                    )
                                })
                            }

                            {store.fixture?.total >= page && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                                <Button className='bn-primary' type='button' style={{ padding: '7px 34px !important', }}
                                    onClick={handleMore}
                                >Load More </Button>

                            </Box>}


                        </div>

                        <div className="col-md-4 mt-5">
                            <AdsBanner />
                        </div>


                    </div>
                </Container >



            </HomeWrapper>

        </div >
    )
}

export default Matches









export const SeriesMatchCard = (props: any) => {

    const router = useRouter()

    const status = props?.data?.status?.toLowerCase()




    return (
        <Grid container spacing={0} className='fixture-list series-overview'
            onClick={() => {
                // if (props?.data?.status?.toLowerCase() === 'live') {
                //     router.push('/live-score/' + titleToSlug(props?.data?.competition?.name) + '-' + titleToSlug(props?.data?.sub_title) + '/' + props.data?.id + '/scorecard')
                // }
                // else if (props?.data?.status?.toLowerCase() === 'completed') {
                //     router.push('/live-score/' + titleToSlug(props?.data?.competition?.name) + '-' + titleToSlug(props?.data?.sub_title) + '/' + props.data?.id + '/scorecard')
                // }
                // else if (props?.data?.status?.toLowerCase() === 'upcoming') {
                //     router.push('/live-score/' + titleToSlug(props?.data?.competition?.name) + '-' + titleToSlug(props?.data?.sub_title) + '/' + props.data?.id + '/info')
                // }
                // else {
                //     router.push('/live-score/' + titleToSlug(props?.data?.competition?.name) + '-' + titleToSlug(props?.data?.sub_title) + '/' + props.data?.id + '/info')
                // }
                router.push('/match/' + props.data?.id)
            }}

        >
            <Grid item xs={12} md={12} className="series-match-date">
                <span>{moment(props?.data?.starting_at).format('DD MMM YYYY, ddd, h:mm A z')}</span>

                {status === 'completed' && (
                    <span className="result"><Dot /> Result | {props?.data?.status_note}</span>
                )}
                {status === 'upcoming' && (
                    <span className="live"><Dot /> Upcoming scheduled</span>
                )}
                {status === 'live' && (
                    <span className="live"><Dot /> Live </span>
                )}
                {status === 'abandoned' && (
                    <span className="live"><Dot /> {props?.data.status_note}</span>
                )}



            </Grid>

            <Grid item xs={7} sx={{ position: 'relative', marginTop: '15px' }}>
                <div className='fixture-list-teama'>

                    <CustomImg
                        src={getImgUrl(props?.data?.teama?.image_url)}
                        alt={props?.data?.teama?.short_name}
                    />
                    <div>
                        <h4>{props?.data?.teama?.short_name}</h4>
                        {(status === 'completed' || status === 'live') && props?.data?.teama_score && <span style={{ marginLeft: '10px', color: 'var(--text-secondary)', letterSpacing: '1.2px' }}>{props?.data?.teama_score}</span>}
                    </div>
                </div>

                {(status == 'upcoming') && <Button variant="outlined" className="m-nt-strt-btn">Match Yet To Start</Button>}
                <div className='fixture-list-teama' style={{ marginTop: '20px' }}>
                    <CustomImg
                        src={getImgUrl(props?.data?.teamb?.image_url)}
                        alt={props?.data?.teamb?.short_name}
                    />
                    <div>
                        <h4>{props?.data?.teamb?.short_name}</h4>
                        {(status === 'completed' || status === 'live') && props?.data?.teamb_score && <span style={{ marginLeft: '10px', color: 'var(--text-secondary)', letterSpacing: '1.2px' }}>{props?.data?.teamb_score}</span>}

                    </div>
                </div>
            </Grid>

            <Grid item xs={5} className='fixture-list-team-1' >
                <div className="series-status">
                    <p>{props?.data?.format} on </p>
                    <h4 style={{ marginTop: '5px' }} >{props?.data?.venue?.name}</h4>
                </div>
            </Grid>

            <Grid item xs={6} className='fixture-list-teamb'>

            </Grid>
        </Grid>
    )
}





export const Dot = () => {
    return (
        <>

            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#FF3131" />
            </svg>

        </>
    )
}