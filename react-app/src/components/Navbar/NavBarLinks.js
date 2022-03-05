import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css'
import Account from './Account'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NavBarLinks({ user }) {
    return (
        <>
            <ul id="NavBarLinks">
                <li>
                    <i className="far fa-heart"></i>
                </li>
                <li>
                    <i class="fa-solid fa-store"></i>
                </li>
                <li>
                    <Account user={user} />
                </li>
                <li>
                    <i class="fa-solid fa-cart-shopping"></i>
                </li>
                {!user && (
                    <div>
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
                {user && (
                    <li>
                        <LogoutButton />
                    </li>
                )}
            </ul>
        </>
    )
}

export default NavBarLinks;