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

// Updated pages array with title and URL
const pages = [
	{ title: 'Schedule', url: '/schedule/upcoming/all', icon: <LibraryBooksIcon /> },
	{ title: 'Latest Matches', url: '/schedule/result', icon: <EventIcon /> },
	{ title: 'Fantasy', url: '/fantasy-matches', icon: <EmojiEventsIcon /> },
	{ title: 'Series', url: '/series', icon: <EventIcon /> },
	{ title: 'News', url: '/news?type=news', icon: <ArticleIcon /> },
	{ title: 'Stats Hub', url: '/stats-hub', icon: <BarChartIcon /> },
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
		<AppBar position="sticky" sx={{ boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 0%)' }}>
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


					<Box sx={{ display: { xs: 'none', md: 'flex', gap: '26px' } }}>
						{pages.map((page) => (
							<Link key={page.title} href={page.url} passHref>
								<Button
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
									className='navbar-btn'
								>
									{page?.icon}
									{page.title}
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

				</div>
			</div>
		</>
	)
}