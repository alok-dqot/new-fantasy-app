import Nodata, { Loading } from '@/components/no-data/NoData';
import ScheduleCardWrapper from '@/components/schedule/ScheduleWrapper';
import SchTabs, { FormatTabs } from '@/components/schedule/SchTab';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import useScheduleStore from '@/features/schedule/schedule.service';
import { titleToSlug } from '@/helpers/slugConverter';
import { Button, Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useActionState, useEffect, useState, useTransition } from 'react'

const index = () => {

    const router = useRouter()

    const { type } = router?.query;

    const store = useScheduleStore()

    const [pageSize, setPageSize] = useState(10);

    const [pending, setTransition] = useTransition()

    useEffect(() => {
        if (!router?.isReady) return
        setTransition(async () => {
            await store.get.paginate({ status: 'result', format: 'all', size: pageSize } as any)
        })
    }, [router?.isReady, type])

    return (
        <>
            <HomeWrapper>
                <Container sx={{ pl: "30px" }}>

                    {/* <CricketMatchesTabs /> */}


                    <div className='row mt-6' >
                        <SchTabs
                            selected={1}
                        />
                    </div>



                    <div className='row '>
                        {
                            store.schedule?.list?.length > 0 ? store.schedule?.list?.map((sch: any) => {

                                return (
                                    <>

                                        <div className='col-12' key={sch?.competiton_id} >

                                            <div className="schedule-title" >
                                                <h3 onClick={() => {
                                                    router.push(`/series/${sch?.competiton_id}/${titleToSlug(sch?.name)}/fixture`)
                                                }}>{sch?.name}</h3>
                                            </div>
                                        </div>
                                        <div className='col-12'  >

                                            <ScheduleCardWrapper sch={sch} />

                                        </div>
                                    </>
                                )
                            })
                                :
                                <>
                                    <div style={{ height: '40px', width: '100%' }}></div>
                                    <Loading />
                                </>
                        }
                    </div>


                    {
                        pageSize < store.schedule?.total ?
                            <button className='btn btn-main-outline mt-4' onClick={() => {
                                setPageSize(pageSize + 10)
                                store.get.paginate({ status: 'today', format: type, size: pageSize + 10 } as any)
                            }}

                            > More Matches</button>
                            : <div style={{ height: '30px' }}></div>
                    }

                </Container>
            </HomeWrapper>
        </>
    )
}

export default index