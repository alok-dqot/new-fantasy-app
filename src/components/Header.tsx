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
import { CustomCarousel, CustomCarousel2 } from './HomeMatches'
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
	{ title: 'Schedule', url: '/schedule/upcoming/all', icon: <KeyboardArrowDownIcon /> },
	{ title: 'Latest Matches', url: '/schedule/result', icon: <KeyboardArrowDownIcon /> },
	{ title: 'Fantasy', url: '/fantasy-matches', icon: <KeyboardArrowDownIcon /> },
	{ title: 'Series', url: '/series', icon: <KeyboardArrowDownIcon /> },
	{ title: 'News', url: '/news?type=news', icon: <KeyboardArrowDownIcon /> },
	{ title: 'Stats Hub', url: '/series/128683/south-africa-tour-of-west-indies/stats?filter=mostrun', icon: <KeyboardArrowDownIcon /> },
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
								<Button
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
									className='navbar-btn'
								>
									<DropDown items={[
										'Action 1',
										'Action 2',
										'Action 3',
										'Action 1',
										'Action 2',
										'Action 3',
										'Action 1',
										'Action 2',
										'Action 3'

									]}>

										{page.title}
										{page?.icon}
									</DropDown>


								</Button>
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


interface DropDownProps {
	children: React.ReactNode;
	items: string[];
}

const DropDown = ({ children, items }: DropDownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="custom-dropdown"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<div className="dropdown-trigger">
				{children}
			</div>

			{isOpen && (
				<ul className="dropdown-menu">
					{items.map((item, index) => (
						<li key={index}>
							<a className="dropdown-item" href="#">{item}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
export { DropDown }