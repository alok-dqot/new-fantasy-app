import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import moment from 'moment';
import useFantasyStore from '@/features/fantasy/fantasy.service';
import { getImgUrl } from '@/helper/common';
import { CustomImg } from '@/helper/image.helper';
import { MetaTags } from '@/helpers/meta.helper';
import { titleToSlug } from '@/helpers/slugConverter';
import Nodata from '../no-data/NoData';


const FantasyComp = () => {

    const store = useFantasyStore();

    const [size, setSize] = useState(10)

    useEffect(() => {
        store.get.list(size, 1)
    }, [])

    return (
        <>

            <MetaTags pageName='fantasy' />

            <Grid item xs={12} md={7.8}>
                {store.fantasy.list.length > 0 ? store.fantasy.list?.map((match: any, index) => {
                    return (
                        <React.Fragment key={index}>
                            <FantasyCardMatchCard
                                match={match}
                            />
                        </React.Fragment>
                    )
                })
                    :
                    <>
                        <Nodata />
                    </>


                }

            </Grid>
            <Grid item xs={12}>
                {size < store.fantasy.total && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    <button className="btn btn-main " type="button" style={{ padding: '7px 34px' }} onClick={() => {
                        store.get.list(size + 5, 1)
                        setSize(size + 5)
                    }}>
                        Load More
                    </button>
                </Box>
                }
            </Grid>

            {
                store?.fantasy?.list.length > 0 &&
                <Grid item xs={4}>
                    {/* <ScheduleCard /> */}
                </Grid>
            }



        </>
    )
}

export default FantasyComp



const FantasyCardMatchCard = (props: any) => {
    return (
        <>
            <h2 className='fantasy-card-title'>{props?.match?.name}</h2>
            <div className="fantasy-match-card-outer">
                <Link
                    href={'#'}
                    // href={`/fantasy-tips/${props?.match?.id}/${titleToSlug(props?.match?.name)}/${props?.match?.analysis_id}`}
                    className='fantasy-card-link'>
                    <Grid container>
                        <Grid item xs={12}>

                            <h3 className="match-time">Match starts at {moment(props?.match?.startDate).format('MMMM Do YYYY h:mm a')}</h3>
                        </Grid>
                        <Grid item xs={5.7}>
                            <div className="fantasy-team-info">
                                <div className="teama">
                                    <CustomImg
                                        src={getImgUrl(props?.match?.teama?.image_url)}
                                        alt={props?.match?.teama?.name}
                                    />
                                    <h3>{props?.match?.teama?.name}</h3>
                                </div>
                                <div className="teamb">
                                    <CustomImg
                                        src={getImgUrl(props?.match?.teamb?.image_url)}
                                        alt={props?.match?.teamb?.name}
                                    />
                                    <h3>{props?.match?.teamb?.name}</h3>
                                </div>

                            </div>
                            <h4 className='fantasy-match-series'>{props?.match?.c_code}</h4>
                        </Grid>
                        <Grid item xs={0.2}>
                            <div className="horizontal-line">

                            </div>
                        </Grid>
                        <Grid item xs={5.5} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="tips-by">
                                <img src={props.match.fantasyPromoter?.logo} alt="team a" />
                                <h3>{props.match.fantasyPromoter?.name}</h3>

                            </div>

                        </Grid>


                    </Grid>
                </Link>
            </div >

        </>
    )
}