import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import { CustomCarousel, CustomCarousel2 } from '../home/HomeMatches'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Updated pages array with title and URL
// const pages = [
// 	{ title: 'Schedule', url: '/schedule/upcoming/all', icon: <LibraryBooksIcon /> },
// 	{ title: 'Latest Matches', url: '/schedule/result', icon: <EventIcon /> },
// 	{ title: 'Fantasy', url: '/fantasy-matches', icon: <EmojiEventsIcon /> },
// 	{ title: 'Series', url: '/series', icon: <EventIcon /> },
// 	{ title: 'News', url: '/news?type=news', icon: <ArticleIcon /> },
// 	{ title: 'Stats Hub', url: '/series/128683/south-africa-tour-of-west-indies/stats?filter=mostrun', icon: <BarChartIcon /> },
// ];
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
	// const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [isNav, setIsNav] = useState(false);

	const handleCloseNavMenu = () => {
		setIsNav(false);
		document.body.style.position = 'relative';
	};

	useEffect(() => {
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
		<AppBar position="sticky" sx={{ background: "var(--primary)	", boxShadow: 'none' }}>
			<Container maxWidth="xl">
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
			<SeriesContainer />
		</AppBar>
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













const SeriesContainer = () => {
	return (
		<>

			<div className="short-match-nav-outer">
				<div className="sht-mtch-cont">
					<CustomCarousel2>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>
						<Button>Aus vs Ind</Button>

					</CustomCarousel2>

				</div>
			</div>
		</>
	)
}
