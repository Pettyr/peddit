import React, { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../features/search/searchResultsSlice'
import ROUTES from '../app/routes';

const SearchBar = () => {
    const searchInputRef = useRef();
    const navigate = useNavigate(); // React Router's navigation hook
    const dispatch = useDispatch()

    const onSearchHandler = (e) => {
        e.preventDefault();

        const query = searchInputRef.current.value
        const queryString = createSearchParams({q: query}).toString()
        console.log('queryString:', queryString)
        navigate(ROUTES.searchResultsRoute(queryString))

        dispatch(fetchSearchResults(queryString))
    }


    return (
    <form onSubmit={onSearchHandler} className="search-form"> 
            <input type="text" placeholder="Search Peddit" ref={searchInputRef} />
            <button type="submit"> 🔎 </button>
    </form>
    )
}

export default SearchBar;