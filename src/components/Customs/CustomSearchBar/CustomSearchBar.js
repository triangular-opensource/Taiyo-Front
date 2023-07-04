import React from "react";
import "./CustomSearchBar.css";
import { ReactComponent as SearchSvg } from "../../../global/static/svg/search.svg";
import Autocomplete from "react-google-autocomplete";
import alertMessage from "../../../global/AlertProvider";

const CustomSearchBar = ({placeholder ,  onClick}) => {
    return (
        <div className="wrapperSearch">
            <div className="search-input">
                <Autocomplete
                    apiKey="AIzaSyCDemNBz_ZjM1jrBq6WVMTYsPDFm1vX-uM"
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                />
                <div
                    onClick={() => onClick()}
                    className="icon border mt-1 d-flex justify-content-center align-items-center bg-secondary rounded text-white"
                >
                    <SearchSvg style={{ color: "white" }} />
                </div>
            </div>
        </div>
    );
};

export default CustomSearchBar;
