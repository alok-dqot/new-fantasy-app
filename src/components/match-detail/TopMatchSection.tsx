import useMatchStore from '@/services/match/match.service';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const TopMatchSection = () => {
    const matchStore = useMatchStore();
    const {
        match: { detail, scorecard },
    } = matchStore;

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!router.isReady) return;

        matchStore.get.detail(`${id}`);

    }, [router.isReady]);

    return (
        <>

            <section className='score_main_sec'>
                <div className='container'>

                    <div className='match_title mt-4 mb-2'>
                        <h3>{detail?.title}</h3>

                    </div>

                    <div className='row align-items-center score_row '>
                        <div className='col-md-4 col-4 d-flex justify-content-center'>
                            <div className='score_content '>
                                <div className='team_img'>
                                    <Image
                                        src={detail?.teama?.image_url}
                                        alt={detail?.teama?.short_name}
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='score ms-4'>
                                    <h3>{detail?.teama?.short_name}</h3>
                                    <h4>
                                        {detail?.teama_full_score}{" "}
                                        <span>{detail?.teama?.overs}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-4'>
                            <div className='result_content'>
                                <h4>{detail?.status_note}</h4>
                            </div>
                        </div>
                        <div className='col-md-4 col-4 d-flex justify-content-center'>
                            <div className='score_content'>
                                <div className='score text-end'>
                                    <h3>{detail?.teamb?.short_name}</h3>
                                    <h4>
                                        {detail?.teamb_full_score}
                                        <span>{detail?.teamb?.overs}</span>
                                    </h4>
                                </div>
                                <div className='team_img ms-4'>
                                    <Image
                                        src={detail?.teamb?.image_url}
                                        alt={detail?.teamb?.short_name}
                                        width={60}
                                        height={60}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ height: '60px' }}>

            </div>

        </>
    )
}

export default TopMatchSection