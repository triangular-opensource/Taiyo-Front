import axios from "axios";
import React, { useState, useEffect } from "react";
import { GLOBAL_URL } from "../../../global/Constant";
import CustomItemCard from "../../Customs/CustomItemCard/CustomItemCard";
import {ReactComponent as Empty} from "../../../global/static/svg/empty.svg"
import useToken from "../../../config/useToken";
const Ads = (props) => {
    const [ads, setAd] = useState([]);
    const [adLoading, setAdLoading] = useState(true);
    const [error, setError] = useState(null);
    const {getToken} = useToken();


    const [url , setUrl] = useState(`${GLOBAL_URL}/ads/10`);

    useEffect(async () => 
    {
        setAdLoading(true)  
        await axios
            .get(url , 
                 {
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${getToken()}`,
                    },
                }
            )
            .then(async (response) => 
            {
                setAd(response.data.data);
                setAdLoading(false);
            })
            .catch(async (error) => {
                console.log(error.response);
                setError(error);
                setAdLoading(false);
            });

    }, [url]);

    
    
    
    return (
        <div className="container-fluid py-4 px-5">
            <div className="row my-4 mx-4">
                <div className="col-md-3">
                    <div className="container rounded-lg bg-light pt-4 ">
                        <div className="row ">
                            <div className="col-12">
                                <h5>Filters</h5>
                            </div>
                        </div>
                        <div className="row mb-3 ml-auto">
                            <div className="container">
                                <div className="row mb-1">
                                    <div className="col-12">
                                        <h6>Ad Type</h6>
                                    </div>
                                </div>
                                <div className="row ml-auto">
                                    <div className="col-12">

                                    <div className="custom-control custom-switch mt-2">
                                            <input
                                                type="radio"
                                                id="customRadio0"
                                                name="customRadio"
                                                className="custom-control-input"
                                                onClick=
                                                {async() =>
                                                    {
                                                        setUrl(`${GLOBAL_URL}/ads/10`)
                                                        
                                                    }
                                                }
                                                checked= {url ===  `${GLOBAL_URL}/ads/10` }
                                                
                                            />
                                            <label
                                                className="custom-control-label"
                                                for="customRadio0"
                                            >
                                                All 
                                            </label>
                                        </div>
                                        <div className="custom-control custom-switch mt-2">
                                            <input
                                                type="radio"
                                                id="customRadio1"
                                                name="customRadio"
                                                className="custom-control-input"
                                                onClick=
                                                {async() =>
                                                    {
                                                        setUrl(`${GLOBAL_URL}/ads/2`)
                                                
                                                    }
                                                }
                                                
                                            />
                                            <label
                                                className="custom-control-label"
                                                for="customRadio1"
                                            >
                                                Active Add
                                            </label>
                                        </div>
                                        <div className="custom-control custom-switch mt-2">
                                            <input
                                                type="radio"
                                                id="customRadio2"
                                                name="customRadio"
                                                className="custom-control-input"
                                                onClick=
                                                {async () =>
                                                    {
                                                        setUrl(`${GLOBAL_URL}/ads/3`)
                                                        
                                                    }
                                                }
                                            />
                                            <label
                                                className="custom-control-label"
                                                for="customRadio2"
                                            >
                                                InActive Add
                                            </label>
                                        </div>                       
                                        <div className="custom-control custom-switch mt-2">
                                            <input
                                                type="radio"
                                                id="customRadio3"
                                                name="customRadio"
                                                className="custom-control-input"
                                                onClick=
                                                {async () =>
                                                    {
                                                        setUrl(`${GLOBAL_URL}/ads/4`)
                                                    
                                                    }
                                                }
                                            />
                                            <label
                                                className="custom-control-label"
                                                for="customRadio3"
                                            >
                                                ShortListed Add
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    {
                    
                    adLoading ? (
                        <div className="d-flex justify-content-center align-items-center">
                            <div
                                className="spinner-border"
                                style={{ width: "4rem", height: "4rem" }}
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : 
                        
                    (ads.length !== 0) ? (
                        ads.map((ad) => (
                            <CustomItemCard key={ad.id} data={ad} />
                        ))
                    ) :
                   
                   <div class = "text-center">
                        <Empty/>
                    </div>
                
                
                
                }
                </div>
            </div>
        </div>
    );
};

export default Ads;
