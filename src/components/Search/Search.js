import React from 'react'
import "./Search.css"
import CustomSearchBar from '../../customComponents/CustomSearchBar/CustomSearchBar'
import CustomItemCard from '../../customComponents/CustomItemCard/CustomItemCard'

function Search() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 search__col">
                    <CustomSearchBar /> 
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h4 className="text-center">Buy</h4>
                </div>
                <div className="col-md-6">
                    <h4 className="text-center">Sell</h4>
                </div>
                <div className="col-md-6" style={{maxHeight: "500px", overflowY: "scroll"}}>
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                </div>
                <div className="col-md-6" style={{maxHeight: "500px", overflowY: "scroll"}}>
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                </div>
            </div>
        </div>
    )
}

export default Search
