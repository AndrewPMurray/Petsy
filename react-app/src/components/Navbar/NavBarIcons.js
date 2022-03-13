import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import Account from './Account';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import { useEffect, useState } from 'react';

function NavBarIcons({ user }) {
	const cartObj = useSelector((state) => state.cart);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		setCartCount(0);
		for (const object in cartObj) {
			setCartCount((prev) => prev + cartObj[object].count);
		}
	}, [cartObj]);

	return (
		<>
			<ul id='NavBarIcons'>
				{!user && (
					<div id='NotLoggedNavButtons'>
						<li>
							<LoginFormModal />
						</li>
						{/* <li>
                            <SignupFormModal />
                        </li> */}
					</div>
				)}
				{user && (
					<li>
						<Link to='#' id='favorites'>
							<div className='faIcons' id='fav-heart'>
								<i className='far fa-heart'></i>
								<p id='temp-message-fav'>Coming soon!</p>
							</div>
						</Link>
					</li>
				)}

				{user && (
					<li>
						<Link to='/manage-listings' id='manageListings'>
							<div className='faIcons'>
								<i className='fa-solid fa-store'></i>
							</div>
						</Link>
					</li>
				)}
				<li>{user && <Account user={user} />}</li>
				<li>
					<Link to='/cart'>
						<div className='faIcons'>
							<i className='fa-solid fa-cart-shopping'></i>
							<div className='cart-icon'>
								<div className='amount-cart-small'>{cartCount}</div>
							</div>
						</div>
					</Link>
				</li>
			</ul>
		</>
	);

	{
		!user && (
			<div id='NotLoggedNavButtons'>
				<li>
					<LoginFormModal />
				</li>
				<li>
					<SignupFormModal />
				</li>
			</div>
		);
	}
}

export default NavBarIcons;
