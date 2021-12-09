import React from 'react'
import "./Search.css"
import CustomSearchBar from '../../customComponents/CustomSearchBar/CustomSearchBar'
import SearchItems from './SearchItems/SearchItems'

function Search() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12 search__col">
                    <CustomSearchBar /> 
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h4 className="text-center">Buy</h4>
                    <SearchItems />
                    <SearchItems />
                    <SearchItems />
                    <SearchItems />
                </div>
                <div className="col-md-6">
                    <h4 className="text-center">Sell</h4>
                    <SearchItems />
                    <SearchItems />
                </div>
            </div>
        </div>
    )
}

export default Search
