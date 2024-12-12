import React from 'react'

import HomeWrapper from '@/components/wrapper/HomeWrapper'
import Api from '@/util/api';
import Head from 'next/head';
import { titleToSlug } from '@/helpers/slugConverter';
import moment from 'moment';


function index({ data }: any) {

    return (
        <>
            <Head>
                <title>{data?.title}</title>
                <meta name="description" content={data?.content.slice(0, 120) || "Latest sports news and updates"} />
                <meta name="keywords" content={data?.keywords || "sports, cricket, news"} />
                <meta property="og:title" content={data?.title} />
                <meta property="og:description" content={data?.content.slice(0, 100) || "Latest sports news and updates"} />
                <meta property="og:image" content={data?.image_url || "/logo.jpg"} />
                <meta property="og:url" content={`https://sportswiz.live/sports-news/${data?.id}/${titleToSlug(data?.title)}`} />
                <meta name="twitter:card" content="" />
                <meta name="twitter:title" content={data?.title} />
                <meta name="twitter:description" content={data?.content.slice(0, 20) || "Latest sports news and updates "} />
                <meta name="twitter:image" content={data?.image_url || "/logo.jpg"} />
                <link rel="canonical" href={`https://sportswiz.live/sports-news/${data?.id}/${titleToSlug(data?.title)}`} />
            </Head>
            <HomeWrapper>
                <section className='blog_detail_sec'>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blog_detail_content">
                                        <div className="heading">
                                            <h1 className='title'>{data?.title}</h1>
                                        </div>
                                        <div className="admin">
                                            <div className="avtar">
                                                <img src="/avtar_.png" alt="avtar" className='img-fluid' />
                                            </div>
                                            <div className="name">
                                                <h4>{data?.author?.name}</h4>
                                                <h5>Published - {moment(data?.created_at).format('llll')}</h5>
                                            </div>
                                        </div>
                                        <div className="blog_img">
                                            <img src={data?.image_url} alt="blog img" className='img-fluid' />
                                        </div>

                                        <div className="detail-content" dangerouslySetInnerHTML={{ __html: data?.content }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mini_cricket_banner">
                                <img src="/cricket_mini_banner.png" alt="#" className='img-fluid' />
                            </div>
                            <div className="team_add_image">
                                <img src="/team_privew_exam.png" alt="#" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </section>
            </HomeWrapper>
        </>
    )
}

export default index;


export async function getServerSideProps(context: any) {
    try {
        const id = context.params.blogId;

        const data = await Api.get(`/news/${id}`,);
        // console.log(data)
        return {
            props: {
                data
            }
        };
    } catch (error) {

        console.error('Error fetching data:', error);
        return {
            props: {
                data: {}
            }
        };
    }
}