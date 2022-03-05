import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';


function Account(user) {
    const username = Object.values(user)[0].username

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu])


    return (
        <>
            <button id="accountMenu" onClick={openMenu}>
                <i className="fas fa-user-circle"></i>
                <i className="fa-solid fa-caret-down"></i>

            </button>
            {showMenu && (
                <ul id="dropdownList">
                    <li>Welcome, {username}!</li>
                    <li><Link to="/purchases" >Purchases and reviews</Link>  </li>
                    <li className="buttonli">
                        <LogoutButton />
                    </li>
                </ul >)
            }
        </>
    )
}

export default Account;
