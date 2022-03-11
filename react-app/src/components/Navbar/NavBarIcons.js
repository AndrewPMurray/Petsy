import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import Account from './Account';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import { useEffect, useState } from 'react';

function NavBarIcons({ user }) {
    const cartObj = useSelector((state) => state.cart);
    const cart = Object.values(cartObj)
    const [cartCount, setCartCount] = useState(0);
	  const cartObj = useSelector((state) => state.cart);

	useEffect(() => {
		setCartCount(0);
		for (const object in cartObj) {
			setCartCount((prev) => prev + cartObj[object].count);
		}
	}, [cartObj]);

    return (
        <>
            <ul id="NavBarIcons">
                {!user && (
                    <div id="NotLoggedNavButtons">
                        <li>
                            <LoginFormModal />
                        </li>
                        {/* <li>
                            <SignupFormModal />
                        </li> */}
                    </div>
                )}
                {user &&
                    <li>
                        <Link to="/favorites" id="favorites">
                            <div className="faIcons">
                                <i className="far fa-heart"></i>
                            </div>
                        </Link>
                    </li>
                }

				{user && (
					<li>
						<Link to='/manage-listings' id='manageListings'>
							<div className='faIcons'>
								<i className='fa-solid fa-store'></i>
							</div>
						</Link>
					</li>
				)}
                <li>
                    {user && <Account user={user} />}
                </li>
                <li>
                    <Link to="/cart">
                        <div className="faIcons">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <div className="cart-icon">
                                <div className='amount-cart-small'>{cartCount}</div>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </>
    )
				</li>
				{!user && (
					<div id='NotLoggedNavButtons'>
						<li>
							<LoginFormModal />
						</li>
						<li>
							<SignupFormModal />
						</li>
					</div>
				)}
			</ul>
		</>
	);
}

export default NavBarIcons;
