import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css'


function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${searchInput}`)
    };

    return (
        <div id="searchDiv">
            <form onSubmit={handleSubmit} id="searchInput">
                <input
                    placeholder='Search for anything'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    autoComplete='off'>
                </input>
            </form>
        </div>
    )
}

export default SearchBar;