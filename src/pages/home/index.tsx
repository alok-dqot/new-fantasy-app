import React, { useEffect } from "react";
import useMatchStore from "@/services/match/match.service";
import useSeriesStore from "@/services/series/series.service";
import moment from "moment";
import { useRouter } from "next/router";
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import { CustomCarousel } from "@/components/HomeMatches";
import HomePageCard from "@/components/card/card";
import Link from "next/link";
import useNewsStore from "@/features/news/news.service";
import { DownloadAppComp, FollowUs, PicOfTheDay, PopularSeries, TopStories } from "@/components/home/cards";
import HomeRankTable from "@/components/rank/RankTable";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { titleToSlug } from "@/helpers/slugConverter";


function Index() {
	const matchStore = useMatchStore();

	const route = useRouter()
	const seriesStore = useSeriesStore()

	useEffect(() => {
		matchStore.get.featuredMatches();
		seriesStore.get.paginate({ size: 9 })
	}, []);


	const blogStore = useNewsStore();


	useEffect(() => {
		; (async () => {
			await blogStore.get.list({ size: 1, type: 'blog' });
		})();
	}, [])



	return (
		<HomeWrapper>

			<br />
			{/* <br /> */}

			<CustomCarousel>

				{matchStore.match?.featured_list?.length ? (
					matchStore.match?.featured_list?.map((m: any) => {
						return (
							<Link href={`/match-detail/${titleToSlug(m?.title)}/${m.id}/info`}>
								<HomePageCard m={m} />
							</Link>

						);
					})
				) : (
					<></>
				)}

			</CustomCarousel>
			{/* <br /> */}

			<div className="back-color-carousel">

			</div>
			<div className="row mt-2">
				<div className="col-md-3">
					<PopularSeries />
					<DownloadAppComp />
					<div className="team_add_image mt-5">
						<img src="/team_privew_exam.png" alt="#" className='img-fluid' />
					</div>

				</div>

				<div className="col-12 col-md-6">
					<TopStories />
					{
						blogStore.blog.list?.grid?.length > 0 && blogStore.blog.list?.grid?.map((b: any) => {
							return (
								<div className="hm-article-card mt-4" key={b?.id}>
									<Link href={`/blogdetail/${b?.id}`}>
										<div className="row">
											<div className="col-md-3">
												<img src={b?.image_url} alt="" />
											</div>
											<div className="col-md-9">

												<h3 className="limit-2">{b?.title}</h3>
												<p className='limit-2 mt-2'>{b?.meta_description}</p>
												<p className="cd-time"><CalendarMonthIcon />{moment(b?.created_at).startOf('hour').fromNow()}</p>

											</div>
										</div>
									</Link>
								</div>
							)
						})
					}
				</div>
				<div className="col-12 col-md-3">
					<HomeRankTable />
					<FollowUs />
					<PicOfTheDay />

				</div>
			</div>



			<div className="row">

				<div className="col-6 col-md-2 m-auto mt-3">

					<Link href="/news?type=news" className='btn btn-main'>See More</Link>
				</div>

			</div>


		</HomeWrapper>

	);
}

export default Index;


