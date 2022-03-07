import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import './Navbar.css'
import SearchBar from './SearchBar'
import NavBarIcons from './NavBarIcons';

const NavBar = () => {
	const user = useSelector((state) => state.session?.user);
	return (
		<nav>
			<ul id="navbarComponents">
				<li>
					<NavLink to='/' exact={true} activeClassName='active'>
						<img id="logo" src="https://live.staticflickr.com/65535/51921133284_ef49d3c445.jpg" alt="logo"></img>
					</NavLink>
				</li>
				<li>
					<SearchBar />
				</li>
				<li>
					<NavBarIcons user={user} />
				</li>
			</ul >
			<div id="petTypes">
				<ul>
					<li><Link to='/pets/1'>Cats</Link></li>
					<li><Link to='/pets/2'>Dogs</Link></li>
					<li><Link to='/pets/3'>Birds</Link></li>
					<li><Link to='/pets/4'>Reptiles</Link></li>
				</ul>
			</div>
		</nav >
	);
};

export default NavBar;
