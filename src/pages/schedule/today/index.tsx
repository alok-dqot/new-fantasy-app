import Nodata from '@/components/no-data/NoData';
import ScheduleCardWrapper from '@/components/schedule/ScheduleWrapper';
import SchTabs, { FormatTabs } from '@/components/schedule/SchTab';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import useScheduleStore from '@/features/schedule/schedule.service';
import { titleToSlug } from '@/helpers/slugConverter';
import { Button, Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const index = () => {

    const router = useRouter()

    const { type } = router?.query;

    const store = useScheduleStore()

    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        if (!router?.isReady) return
        store.get.paginate({ status: 'today', format: 'all', size: 10 } as any)
    }, [router?.isReady, type])

    return (
        <>
            <HomeWrapper>
                <Container sx={{ pl: "30px" }}>

                    {/* <CricketMatchesTabs /> */}


                    <Grid container sx={{ mt: 6, }}>
                        <SchTabs
                            selected={0}
                        />
                    </Grid>



                    <Grid container>
                        {
                            store.schedule?.list?.length > 0 ? store.schedule?.list?.map((sch: any) => {

                                return (
                                    <>

                                        <Grid item xs={12} key={sch?.competiton_id} >

                                            <div className="schedule-title" >
                                                <h3 onClick={() => {
                                                    router.push(`/series/${sch?.competiton_id}/${titleToSlug(sch?.name)}/fixture`)
                                                }}>{sch?.name}</h3>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} >

                                            <ScheduleCardWrapper sch={sch} />

                                        </Grid>
                                    </>
                                )
                            })
                                :
                                <>
                                    <div style={{ height: '40px', width: '100%' }}></div>
                                    <Nodata />
                                </>
                        }
                    </Grid>
                    {
                        pageSize < store.schedule?.total ?
                            <Button className='btn-primary hm-load-btn' variant='outlined' onClick={() => {
                                setPageSize(pageSize + 10)
                                store.get.paginate({ status: 'today', format: type, size: pageSize + 10 } as any)
                            }}
                                sx={{ border: 'solid 1px var(--primary) !important' }}
                            > More Matches</Button>
                            : <div style={{ height: '30px' }}></div>
                    }

                </Container>
            </HomeWrapper>
        </>
    )
}

export default index