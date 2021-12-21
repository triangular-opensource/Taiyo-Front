import React from "react";
import "./CustomSearchBar.css";
import { ReactComponent as SearchSvg } from "../../global/static/svg/search.svg";
import Autocomplete from "react-google-autocomplete";
import alertMessage from "../../global/AlertProvider";

const CustomSearchBar = () => {
    return (
        <div className="wrapperSearch">
            <div className="search-input">
                <Autocomplete
                    apiKey="AIzaSyCDemNBz_ZjM1jrBq6WVMTYsPDFm1vX-uM"
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                />
                 <div onClick={() => alertMessage("search cliked")} className="icon">
                    <SearchSvg />
                </div>
            </div>
           
        </div>
    );
};

export default CustomSearchBar;
