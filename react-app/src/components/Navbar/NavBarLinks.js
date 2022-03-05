import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css'
import Account from './Account'


function NavBarLinks({ user }) {
    return (
        <>
            <ul id="NavBarLinks">
                <li>
                    <i className="far fa-heart"></i>
                </li>
                <li><Link to="/manage-listings" id="manageListings"> <i className="fa-solid fa-store">
                </i></Link>  </li>
                <li>
                    {user && <Account user={user} />}
                </li>
                <li>
                    <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
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
                {/* {user && (
                    <li>
                        <LogoutButton />
                    </li>
                )} */}
            </ul>
        </>
    )
}

export default NavBarLinks;