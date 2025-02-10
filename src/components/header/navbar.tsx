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

import CloseIcon from '@mui/icons-material/Close';
import { size } from 'lodash';


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

	return (
		<>
			<div className="bg-container">
				<Container >
					<UpcomingMatches />

				</Container>


				<div className="back-color-carousel">

				</div>





			</div>
			<NavFirst />
			<br /><br />

		</>

	);
}

export default Navbar;



// Types definition
interface SubNavItem {
	title: string;
	url: string;
}

interface PageItem {
	title: string;
	url: string;
	subNav?: SubNavItem[];
}

interface MobileNavProps {
	onClose: () => void;
	pages: PageItem[];
}

interface ExpandedItems {
	[key: string]: boolean;
}



const MobileNav: React.FC<MobileNavProps> = ({ onClose, pages }) => {
	const navRef = useRef<HTMLDivElement>(null);
	const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

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

	const toggleSubmenu = (pageTitle: string, event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setExpandedItems(prev => ({
			...prev,
			[pageTitle]: !prev[pageTitle]
		}));
	};

	return (
		<>
			<div className="mobile-menu-overlay" onClick={onClose} />

			<Box ref={navRef} className="mb-nav-outer">
				<div className='close-section'>
					<CloseIcon onClick={onClose} />
				</div>


				{pages.map((page) => (
					<div key={page.title} className="mobile-menu-item">

						<Button

							fullWidth
							sx={{
								justifyContent: 'space-between',
								my: 1,
								textAlign: 'left',

								padding: '10px 20px',

							}}
							onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
								page.subNav?.length
									? toggleSubmenu(page.title, e)
									: onClose()
							}
						>
							{page.title}
							{page.subNav && page.subNav.length > 0 && (
								<span
									className={`menu-arrow ${expandedItems[page.title] ? 'rotated' : ''}`}
									style={{
										transform: expandedItems[page.title] ? 'rotate(90deg)' : 'none',
										transition: 'transform 0.3s ease'
									}}
								>
									›
								</span>
							)}
						</Button>



						{page.subNav && page.subNav.length > 0 && (
							<div
								className="submenu"
								style={{
									maxHeight: expandedItems[page.title] ? '500px' : '0',
									overflow: 'hidden',
									transition: 'max-height 0.3s ease-in-out',

								}}
							>
								{page.subNav.map((subItem) => (
									<Link key={subItem.title} href={subItem.url} passHref>
										<Button
											fullWidth
											component="a"
											sx={{
												justifyContent: 'left',
												pl: 4,
												textAlign: 'left',
												color: '#666',
												'&:hover': {
													backgroundColor: '#f5f5f5'
												}
											}}
											onClick={onClose}
										>
											{subItem.title}
										</Button>
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</Box>

		</>
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




const NavFirst = () => {

	const [isNav, setIsNav] = useState(false);

	const handleCloseNavMenu = () => {
		setIsNav(false);
		//document.body.style.position = 'fixed';
		document.body.style.overflow = 'auto';
	};

	const matchStore = useMatchStore();


	useEffect(() => {
		matchStore.get.featuredMatches();

		if (isNav) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isNav]);




	return (
		<>
			<div className='navbar-1'>
				<Container >
					<Toolbar disableGutters className="appbar-outer">
						<Link href="/home">
							<img src="/icons/logo.png" alt="Logo" />
						</Link>

						<Box sx={{ display: { xs: 'flex', md: 'none', color: 'var(--text-white)' } }}>
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


							{isNav && <MobileNav onClose={handleCloseNavMenu} pages={pages} />}
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
		</>
	)
};