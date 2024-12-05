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

const pages = ['Schedule', 'Latest Matches', 'Fantasy', 'Series', 'News', 'Stats Hub'];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const [isNav, setIsNav] = useState(false)

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);

		setIsNav(false)
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
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar disableGutters className='appbar-outer'>
					<Link href={'/home'}>
						<img src="/icons/logo.png" alt="" />
					</Link>

					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={() => setIsNav(!isNav)}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>


						{isNav && <MobileNav onClose={handleCloseNavMenu} />}


					</Box>


					<Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

				</Toolbar>
			</Container>
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
		<Box
			ref={navRef}
			className="mb-nav-outer"

		>
			{pages.map((page) => (
				<Button
					key={page}
					sx={{ justifyContent: 'left', my: 1 }}
					onClick={onClose}
				>
					{page}
				</Button>
			))}
		</Box>
	);
};