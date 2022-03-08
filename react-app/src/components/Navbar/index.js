// import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import './Navbar.css';
import SearchBar from './SearchBar';
import NavBarIcons from './NavBarIcons';

const NavBar = () => {
	const user = useSelector((state) => state.session?.user);

	return (
		<nav>
			<div id='navbarComponents'>
				<NavLink to='/' exact={true} activeClassName='active'>
					<img
						id='logo'
						src='https://live.staticflickr.com/65535/51921133284_ef49d3c445.jpg'
						alt='logo'
					></img>
				</NavLink>
				<SearchBar />
				<NavBarIcons user={user} />
			</div>
			<div id='petTypes'>
				<Link to='/pets/1'>Cats</Link>
				<Link to='/pets/2'>Dogs</Link>
				<Link to='/pets/3'>Birds</Link>
				<Link to='/pets/4'>Reptiles</Link>
			</div>
		</nav>
	);
};

export default NavBar;
