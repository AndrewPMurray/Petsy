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
				<li>
					<NavLink to='/' exact={true} activeClassName='active'>
						PETSY
						{/* LOGO HERE INSTEAD OF TEXT*/}
					</NavLink>
				</li>
				<li>
					<SearchBar />
				</li>
				<li>
					<NavBarLinks user={user} />
				</li>
			</ul >
			<div id="petTypes">
				<ul>
					<li>Dog</li>
					<li>Cat</li>
					<li>Reptile</li>
					<li>Fish</li>
				</ul>
			</div>
		</nav >
	);
};

export default NavBar;
