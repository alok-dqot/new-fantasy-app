import useNewsStore from '@/features/news/news.service';
import useCurrentSeries from '@/features/series/series.service';
import { titleToSlug } from '@/helpers/slugConverter';
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect } from 'react';
import HomeRankTable from './rank/RankTable';

const PopularSeries = () => {

    const store = useCurrentSeries()

    useEffect(() => {
        store.get.list()
    }, [])

    return (
        <>

            <div className="row mt-5">

                <div className="col-md-3" >

                    <div className="popularS-card sr-outer">
                        <h4>Popular Series</h4>
                        {store.s.list.length > 0 && store.s?.list?.slice(0, 5).map((series: any) => {
                            return (
                                <Link href={`#`} key={series?.id} className="ser-name" >{series?.name}</Link>
                            )
                        })}

                        <Link href="#" className='btn btn-primary'>See More</Link>

                    </div>

                    <DownloadAppComp />






                </div>

                <div className="col-md-6">
                    <TopStories />
                </div>
                <div className="col-md-3">

                    <HomeRankTable />
                    <FollowUs />
                </div>

            </div >


        </>
    );
}

export default PopularSeries;





const RankPlayer = () => {
    return (
        <div className="topRanking-card popularS-card" style={{ marginTop: 20, }}>
            <h4>TOP RANKINGS</h4>
            <p><span></span> <small className="first">No.1 Batter</small> <br /> <small className="second">Babar Azam</small></p>
            <p><span></span> <small>No.1 Batter</small> <br /> <small>Babar Azam</small></p>
            <p><span></span> <small>No.1 Batter</small><br /> <small>Babar Azam</small></p>
            <p><span></span> <small>No.1 Batter</small> <br /> <small>Babar Azam</small></p>



            <Link href="#" className='btn btn-primary'>See More</Link>
        </div>
    )
}





const DownloadAppComp = () => {
    return (

        <div className="downloadApp-card popularS-card " style={{ marginTop: 20, }}>
            <h4>Download the app</h4>
            <p> <a href="#"><img src="/home/android.png" className='img-fluid' alt="" /> Android App </a> </p>
            <p className="last-p"> <a href="#"> <img src="/home/ios.png" alt="" /> iOS App </a> </p>
        </div>
    )
}




const FollowUs = () => {
    return (

        <div className="followus-card popularS-card mt-5" >
            <h4>Follow Us</h4>
            <p> <a href="#"><img src="/home/youtube.png" alt="" /> You Tube </a></p>
            <p> <a href="#"><img src="/home/facebook.png" alt="" />Facebook </a></p>
            <p className="last-p"> <a href="#"><img src="/home/instagram.png" alt="" />instagram </a></p>

        </div>

    )
}






const TopStories = () => {
    const blogStore = useNewsStore();


    useEffect(() => {
        ; (async () => {
            await blogStore.get.list({ size: 1, type: 'blog' });
        })();
    }, [])


    return (
        <>
            <div className="TopStories-card popularS-card ">
                <h4>Top Stories</h4>

                <div className="big-card">
                    <img src={blogStore.blog.list?.latest?.image_url} alt="" />
                    <div className="bigcard-content">
                        <Link href={`/blogdetail/${blogStore.blog.list.latest?.id}`}><h5>{blogStore.blog.list?.latest?.title}</h5></Link>
                        <small>{moment(blogStore.blog.list?.latest?.updated_at).endOf('day').fromNow()}</small>
                    </div>

                </div>


                {/* <Link href="/news?q=news" className='btn btn-primary'>See More</Link> */}

            </div>
        </>
    )
}