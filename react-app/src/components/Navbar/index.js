import React from 'react';
import { NavLink } from 'react-router-dom';
// import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import './Navbar.css'
import SearchBar from './SearchBar'
import NavBarLinks from './NavBarLinks';

const NavBar = () => {
	const user = useSelector((state) => state.session?.user);
	return (
		<nav>
			<ul id="navbarComponents">
				<li>Etsy</li>
				<li>
					<SearchBar />
				</li>
				<li>
					<NavBarLinks user={user} />
				</li>
			</ul >
		</nav >
	);
};

export default NavBar;