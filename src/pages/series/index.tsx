import React, { useEffect, useState } from "react";
import Header from "../../components/header/navbar";
import moment from "moment";
import { CustomImg } from "@/helper/image.helper";
import { titleToSlug } from "@/helpers/slugConverter";
import { useRouter } from "next/router";
import Footer from "@/components/footer/Footer";
import useSeriesStore from "@/features/series/series.service";
import HomeWrapper from "@/components/wrapper/HomeWrapper";

function Index() {

    const seriesStore = useSeriesStore()

    const [size, setSize] = useState(25)

    useEffect(() => {
        seriesStore.get.paginate({ size: size })
    }, []);


    return (
        <HomeWrapper>
            <section className='cricket_match_blog_sec'>

                <div className='heading'>
                    <h2>ALL Series</h2>

                </div>
                <div className='row'>
                    {
                        seriesStore.s.list.length > 0 && seriesStore.s.list?.map((ser: any) => {

                            // console.log(ser)
                            return (

                                <div className="col-12 col-md-6" key={ser.id} >
                                    <SerierUpCard
                                        img={ser.image_url}
                                        id={ser.id}
                                        title={ser.name}
                                        start_date={ser.start_date}
                                        end_date={ser.end_date}
                                        totalMatches={ser?.total_matches}
                                        totalTeams={ser?.total_teams}
                                        format={ser?.format}
                                    />
                                </div>


                            )
                        })
                    }


                </div>

                <div className='load_more_btn text-center mt-4'>
                    <button className='btn btn-primary laod_more_btn' onClick={() => {
                        seriesStore.get.paginate({ size: size + 10 })
                        setSize(size + 10)
                    }}>
                        Load More
                        <svg width='9' height='15' viewBox='0 0 9 15' fill='none'>
                            <path
                                d='M0.39915 0.392561C0.525602 0.268121 0.675804 0.169395 0.841157 0.102034C1.00651 0.0346731 1.18377 0 1.36278 0C1.5418 0 1.71905 0.0346731 1.88441 0.102034C2.04976 0.169395 2.19996 0.268121 2.32641 0.392561L8.60027 6.55393C8.72698 6.67812 8.82751 6.82562 8.8961 6.98801C8.96469 7.1504 9 7.32448 9 7.50028C9 7.67609 8.96469 7.85017 8.8961 8.01256C8.82751 8.17494 8.72698 8.32245 8.60027 8.44664L2.32641 14.608C2.19987 14.7323 2.04963 14.8309 1.88429 14.8981C1.71895 14.9654 1.54174 15 1.36278 15C1.18382 15 1.00661 14.9654 0.841268 14.8981C0.675927 14.8309 0.525696 14.7323 0.39915 14.608C0.272604 14.4837 0.172222 14.3362 0.103736 14.1738C0.0352497 14.0114 0 13.8374 0 13.6617C0 13.4859 0.0352497 13.3119 0.103736 13.1495C0.172222 12.9871 0.272604 12.8396 0.39915 12.7153L5.70254 7.49357L0.39915 2.28527C-0.133924 1.76175 -0.120255 0.902653 0.39915 0.392561Z'
                                fill='white'
                            />
                        </svg>
                    </button>
                </div>

            </section>

        </HomeWrapper>
    );
}

export default Index;











interface SeriesListProps {
    id: number;
    img?: string;
    title: string;
    start_date: string;
    end_date: string;
    totalMatches: string;
    totalTeams: string;
    format: string;
}

const SerierUpCard: React.FC<SeriesListProps> = ({ id, img, title, start_date, end_date, totalMatches, totalTeams, format }) => {
    const router = useRouter()
    return <>

        <div className={`series-outer-card`}>
            <CustomImg src={img + ''} alt={title || ''} />

            <div className="ser-match-card" onClick={() => {
                router.push('series/' + id + '/' + titleToSlug(title) + '/overview')
            }}>
                <h3>{title}  </h3>

                <p className='ser-spn'>Total Matches : {totalMatches} , Total Teams : {totalTeams}</p>
                <p className='ser-spn'>Format : {format}</p>
                <p className='ser-spn'>({moment(start_date).format('DD MMM')} - {moment(end_date).format('DD MMM')})</p>


                <h4 onClick={() => {
                    router.push('series/' + id + '/' + titleToSlug(title) + '/overview')
                }}>View <ArrowLeft /></h4>

            </div>

        </div >
    </>;
}









const ArrowLeft = () => {
    return (
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.769597 0.310051C0.671753 0.407694 0.594128 0.523675 0.541164 0.651356C0.4882 0.779037 0.460937 0.91591 0.460938 1.05414C0.460937 1.19237 0.4882 1.32924 0.541164 1.45692C0.594128 1.58461 0.671753 1.70059 0.769597 1.79823L4.86473 5.89336L0.769597 9.9885C0.671882 10.0862 0.59437 10.2022 0.541487 10.3299C0.488604 10.4576 0.461384 10.5944 0.461384 10.7326C0.461384 10.8708 0.488604 11.0076 0.541487 11.1353C0.59437 11.263 0.671882 11.379 0.769597 11.4767C0.867312 11.5744 0.983317 11.6519 1.11099 11.7048C1.23866 11.7577 1.3755 11.7849 1.51369 11.7849C1.65188 11.7849 1.78871 11.7577 1.91639 11.7048C2.04406 11.6519 2.16006 11.5744 2.25778 11.4767L7.10228 6.63218C7.20012 6.53453 7.27775 6.41855 7.33071 6.29087C7.38368 6.16319 7.41094 6.02632 7.41094 5.88809C7.41094 5.74986 7.38368 5.61298 7.33071 5.4853C7.27775 5.35762 7.20012 5.24164 7.10228 5.144L2.25778 0.299496C1.85671 -0.101574 1.18122 -0.101574 0.769597 0.310051Z" fill="#1976d2" />
        </svg>


    )
}
