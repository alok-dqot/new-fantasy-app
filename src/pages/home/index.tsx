import React, { useEffect } from "react";
import useMatchStore from "@/services/match/match.service";
import useSeriesStore from "@/services/series/series.service";
import moment from "moment";
import { useRouter } from "next/router";
import DetailTabs from "@/components/MatchDetailTabs";
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import { CustomCarousel } from "@/components/HomeMatches";
import HomePageCard from "@/components/card";
import Link from "next/link";
import useNewsStore from "@/features/news/news.service";
import { DownloadAppComp, FollowUs, PicOfTheDay, PopularSeries, TopStories } from "@/components/home/cards";
import HomeRankTable from "@/components/rank/RankTable";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


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
			<br />
			<CustomCarousel>

				{matchStore.match?.featured_list?.length ? (
					matchStore.match?.featured_list?.map((m) => {
						return (
							<Link href={`/match/${m.match_id}`}>
								<HomePageCard m={m} />
							</Link>

						);
					})
				) : (
					<></>
				)}

			</CustomCarousel>

			<div className="row mt-5">
				<div className="col-md-3">
					<PopularSeries />
					<DownloadAppComp />

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

												<h3>{b?.title}</h3>
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

					<Link href="/news?type=news" className='btn btn-primary '>See More</Link>
				</div>

			</div>


		</HomeWrapper>

	);
}

export default Index;










const MatchDetail = () => {
	return (
		<>

			<div className="row">
				<div className="match-card">
					<div className="match-header">
						<span className="live-indicator">Live</span>
						<span className="match-time">10:30 AM, 29-Nov • Dubai, United Arab...</span>
					</div>
					<div className="teams">
						<div className="team">
							<div className="team-flag">
								<img src="https://cdn.mycricketapi.com/teams/brhw.png" alt="Bangladesh flag" />
							</div>
							<span className="team-name">AFG19</span>

						</div>
						<div className="team">
							<div className="team-flag">
								<img src="https://cdn.mycricketapi.com/teams/brhw.png" alt="Afghanistan flag" />
							</div>
							<span className="team-name">AFG19</span>
							<span className="team-score">102/1 (26.4)</span>
						</div>

						<span className="status_note">Toss in Progress</span>

					</div>
					{/* <div className="navigation">
							<a href="#" className="nav-item active">Series</a>
							<a href="#" className="nav-item">Table</a>
							<a href="#" className="nav-item">Schedule</a>
							<a href="#" className="nav-item">News</a>
						</div> */}

					<div className="on-card-player">
						<img src="https://www.cricket.com/images/MOM2.png" alt="" />
						<div className="p-name">
							<h3>Virat Kohali</h3>
							<p>	Player of the Match</p>
						</div>
					</div>
				</div>
			</div>


			<DetailTabs />
		</>
	)
}

