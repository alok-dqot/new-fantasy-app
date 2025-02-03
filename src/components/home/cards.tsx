import useNewsStore from "@/features/news/news.service";
import useSeriesStore from "@/features/series/series.service";
import moment from "moment";
import Link from "next/link"
import { useEffect } from "react"

export const DownloadAppComp = () => {
    return (

        <div className="dwnld-card lv-card mt-4">
            <h4>Download the app</h4>
            <a href="#"><img src="/home/android.png" className='img-fluid' alt="" /> Android App </a>
            <a href="#"> <img src="/home/ios.png" alt="" /> iOS App </a>
        </div>
    )
}

export const FollowUs = () => {
    return (

        <div className="followus-card lv-card mt-3" >
            <h4>Follow Us</h4>
            <a href="#"><img src="/home/youtube.png" alt="" /> YouTube </a>
            <a href="#"><img src="/home/facebook.png" alt="" />Facebook </a>
            <a href="#"><img src="/home/instagram.png" alt="" />Instagram </a>

        </div>

    )
}

export const PicOfTheDay = () => {
    return (

        <div className="pic-day-card lv-card mt-3" >
            <h4>Picture Of The Day</h4>
            <img src="/pic-day.jpg" alt="" />

        </div>

    )
}
export const AuctionCard = () => {
    return (

        <div className="pic-day-card lv-card mt-3" >
            <h4>Picture Of The Day</h4>
            <img src="/pic-day.jpg" alt="" />

        </div>

    )
}





export const TopStories = () => {
    const blogStore = useNewsStore();





    return (
        <>
            <div className="lv-card pp-ser-card">
                <h4>Top Stories</h4>

                <div className="latest-card">
                    <img src={blogStore.blog.allBlogList?.latest?.image_url} alt="" />
                    <div className="bigcard-content">
                        <Link href={`/blogdetail/${blogStore.blog.allBlogList.latest?.id}`}><h5>{blogStore.blog.allBlogList?.latest?.title}</h5></Link>
                        <small>{moment(blogStore.blog.allBlogList?.latest?.updated_at).endOf('day').fromNow()}</small>
                    </div>

                </div>


                {/* <Link href="/news?q=news" className='btn btn-primary'>See More</Link> */}

            </div>
        </>
    )
}








export const PopularSeries = () => {

    const store = useSeriesStore()

    useEffect(() => {
        store.get.list()
    }, [])

    return (
        <>


            <div className="lv-card sr-outer">
                <h4>Popular Series</h4>
                {store.s.list.length > 0 && store.s?.list?.slice(0, 8).map((series: any) => {
                    return (
                        <Link href={`#`} key={series?.id} className="ser-name" >{series?.name}</Link>
                    )
                })}

                <Link href="#" className='btn btn-main more'>See More</Link>

            </div>



        </>
    );
}