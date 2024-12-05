import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import Link from "next/link";
import useMatchStore from "@/services/match/match.service";
import moment from "moment";
import Card from "./card";

function ScoreCardSlider() {
	const matchStore = useMatchStore();

	return (
		<>
			<div className='swiper_score_card'>
				<div className='heading'>
					<h2>Featured Matches</h2>
				</div>
				<Swiper
					slidesPerView={3}
					spaceBetween={20}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					cssMode={true}
					navigation={true}
					keyboard={true}
					modules={[Autoplay, Navigation]}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
					className='mySwiper'>
					{matchStore.match?.featured_list?.length ? (
						matchStore.match?.featured_list?.map((item) => {
							return (
								<SwiperSlide>
									<Link href={`/match/${item.match_id}`}>



										<Card />

									</Link>
								</SwiperSlide>
							);
						})
					) : (
						<></>
					)}
				</Swiper>
			</div >
		</>
	);
}

export default ScoreCardSlider;
