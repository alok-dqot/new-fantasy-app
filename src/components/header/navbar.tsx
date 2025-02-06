import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import HomePageCard from '../card/card';
import { titleToSlug } from '@/helpers/slugConverter';
import useUpcomingStore from '@/features/series/upcoming.service';
import NormalCarousel, { FullPageCarousel } from '../carousel/NormalCarousel';
import useMatchStore from '@/features/match/match.service';


const pages = [
	{ title: "Schedule", url: "/schedule/upcoming/all", icon: null, subNav: [] },
	{
		title: "Latest Matches",
		url: "/schedule/result",
		subNav: [
			{ title: "Recent Results", url: "/schedule/results/recent" },
			{ title: "Match Reports", url: "/schedule/results/reports" },
			{ title: "Highlights", url: "/schedule/results/highlights" },
		],
	},
	{
		title: "Fantasy",
		url: "/fantasy-matches",
		subNav: [
			{ title: "Fantasy Tips", url: "/fantasy/tips" },
			{ title: "Dream XI Predictions", url: "/fantasy/dreamxi" },
		],
	},
	{
		title: "Series",
		url: "/series",
		subNav: [
			{ title: "Ongoing Series", url: "/series/ongoing" },
			{ title: "Upcoming Series", url: "/series/upcoming" },
			{ title: "Past Series", url: "/series/past" },
		],
	},
	{
		title: "News",
		url: "/news?type=news",
		subNav: [
			{ title: "Top Stories", url: "/news/top-stories" },
			{ title: "Exclusive Interviews", url: "/news/interviews" },
		],
	},
	{
		title: "Stats Hub",
		url: "/series/128683/south-africa-tour-of-west-indies/stats?filter=mostrun",
		subNav: [
			{ title: "Most Runs", url: "/stats/most-runs" },
			{ title: "Most Wickets", url: "/stats/most-wickets" },
			{ title: "Best Averages", url: "/stats/best-averages" },
		],
	},
];

function Navbar() {
	const [isNav, setIsNav] = useState(false);

	const handleCloseNavMenu = () => {
		setIsNav(false);
		document.body.style.position = 'relative';
	};

	const matchStore = useMatchStore();


	useEffect(() => {
		matchStore.get.featuredMatches();

		if (isNav) {
			document.body.style.position = 'fixed';
		} else {
			document.body.style.position = 'relative';
		}
		return () => {
			document.body.style.position = 'relative';
		};
	}, [isNav]);

	return (
		<>
			<div className="bg-container">
				<Container >
					<UpcomingMatches />

				</Container>


				<div className="back-color-carousel">

				</div>
				<div className='navbar-1'>
					<Container >
						<Toolbar disableGutters className="appbar-outer">
							<Link href="/home">
								<img src="/icons/logo.png" alt="Logo" />
							</Link>

							<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size="large"
									aria-label="menu"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={() => setIsNav(!isNav)}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>


								{isNav && <MobileNav onClose={handleCloseNavMenu} />}
							</Box>


							<Box sx={{ display: { xs: 'none', md: 'flex', gap: '26px', }, py: '10px' }}>
								{pages.map((page) => (
									<Link key={page.title} href={page.url} passHref>

										<DropDown items={page.subNav}>

											{page.title}

										</DropDown>
									</Link>
								))}
							</Box>
						</Toolbar>
					</Container>

				</div>
			</div>

		</>

	);
}

export default Navbar;

const MobileNav = ({ onClose }: { onClose: () => void }) => {
	const navRef = useRef<HTMLDivElement>(null);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	return (
		<Box ref={navRef} className="mb-nav-outer">
			{pages.map((page) => (
				<Link key={page.title} href={page.url} passHref>
					<Button
						sx={{ justifyContent: 'left', my: 1 }}
						onClick={onClose}
					>
						{page.title}
					</Button>
				</Link>
			))}
		</Box>
	);
};







const DropDown = ({ children, items }: any) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="custom-dropdown"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<Button className="dropdown-trigger navbar-btn">
				{children}
			</Button>

			{items?.length > 0 && isOpen && (
				<div className="dropdown-menu">
					{items.map((item: any, index: number) => (
						<Link className="dropdown-item" href={item?.url}>{item.title}</Link>

					))}
				</div>
			)}
		</div>
	);
};
export { DropDown }














const UpcomingMatches = () => {


	const store = useUpcomingStore();

	useEffect(() => {
		store.get.list()
	}, [])

	// useEffect(() => {
	// 	const intervalId = setInterval(async () => {
	// 		await store.get.refreshmatches()
	// 	}, 10000);
	// 	return () => clearInterval(intervalId);
	// }, []);

	const filteredMatches = [
		...new Map(store.match?.totalList.map((item: any) => [item.id, item])).values() as any
	];

	return (
		<div className="hm-mt-slider-outer">

			<div className="seris-btn-outer">
				<FullPageCarousel isBtn={true}>
					<Button className={store.match.selectedSeriesId ? "hm-seris-btn" : "hm-seris-btn-selected"} onClick={() => {
						store.get.list()
					}}> All Matches {store.match.total}</Button>

					{
						store.match.seriesList?.map((series: any) => {
							return (
								<Button className={store.match.selectedSeriesId == series?.id ? "hm-seris-btn-selected" : "hm-seris-btn"} onClick={() => {
									store.get.seriesMatches(series.id)
								}} >{series?.code}</Button>
							)
						})
					}
				</FullPageCarousel>
			</div>

			<NormalCarousel>
				{filteredMatches?.length > 0 ? (
					filteredMatches.map((m: any) => (
						<Link href={`/match-detail/${titleToSlug(m?.title)}/${m.id}/info`}>
							<HomePageCard m={m} />
						</Link>
					))
				) : (
					<></>
				)}
			</NormalCarousel>
		</div>
	);
};
