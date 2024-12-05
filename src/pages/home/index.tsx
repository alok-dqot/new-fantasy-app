import React, { useEffect } from "react";

import Image from "next/image";
import useMatchStore from "@/services/match/match.service";
import useSeriesStore from "@/services/series/series.service";
import moment from "moment";
import { useRouter } from "next/router";
import EmblaCarousel from "../../components/ScoreCardSlider";
import DetailTabs from "@/components/MatchDetailTabs";
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import PopularSeries from "@/components/PopularSeries";

function Index() {
	const matchStore = useMatchStore();

	const route = useRouter()
	const seriesStore = useSeriesStore()

	useEffect(() => {
		matchStore.get.featuredMatches();

		seriesStore.get.paginate({ size: 9 })
	}, []);
	return (
		<HomeWrapper>


			{/* <ScoreCardSlider /> */}
			< EmblaCarousel />
			<PopularSeries />

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

