import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css'
import Account from './Account'


function NavBarLinks({ user }) {
    return (
        <>
            <ul id="NavBarLinks">
                <li>
                    <Link to="/favorites" id="favorites">
                        <div className="faIcons">
                            <i className="far fa-heart"></i>
                        </div>
                    </Link>
                </li>
                <li>

                    <Link to="/manage-listings" id="manageListings">
                        <div className="faIcons">
                            <i className="fa-solid fa-store">
                            </i>
                        </div>
                    </Link>

                </li>
                <li>
                    {user && <Account user={user} />}
                </li>
                <li>
                    <Link to="/cart">
                        <div className="faIcons">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </Link>
                </li>
                {!user && (
                    <div id="NotLoggedNavButtons">
                        <li>
                            <NavLink to='/login' exact={true} activeClassName='active'>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign-up' exact={true} activeClassName='active'>
                                Sign Up
                            </NavLink>
                        </li>
                    </div>
                )}
                {/* <li>
                    <NavLink to='/users' exact={true} activeClassName='active'>
                        Users
                    </NavLink>
                </li> */}
            </ul>
        </>
    )
}

export default NavBarLinks;