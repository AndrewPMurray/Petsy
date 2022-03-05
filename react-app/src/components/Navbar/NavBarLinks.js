import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css'


function NavBarLinks({ user }) {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/' exact={true} activeClassName='active'>
                        Home
                    </NavLink>
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
                <li>
                    <NavLink to='/users' exact={true} activeClassName='active'>
                        Users
                    </NavLink>
                </li>
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