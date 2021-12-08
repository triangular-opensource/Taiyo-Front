import React from 'react'
import "./Search.css"
import CustomSearchBar from '../../customComponents/CustomSearchBar/CustomSearchBar'

function Search() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 search__col">
                    <CustomSearchBar /> 
                </div>
            </div>
        </div>
    )
}

export default Search
