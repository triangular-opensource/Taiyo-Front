import React from 'react'
import "./Search.css"
import CustomSearchBar from '../../customComponents/CustomSearchBar/CustomSearchBar'
import SearchItems from './SearchItems/SearchItems'

function Search() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 search__col">
                    <CustomSearchBar /> 
                </div>
            </div>
            <div className="row">
                <SearchItems />
                <SearchItems />
                <SearchItems />
            </div>
        </div>
    )
}

export default Search
