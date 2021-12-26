import React, { useState, useEffect } from "react";
import CustomText from "../Customs/CustomText/CustomText";
import CustomButton from "../Customs/CustomButton/CustomButton";
import "./ItemPage.css";
import Popup from "../Customs/Popup/Popup";
import Excel from "../Customs/Excel/Excel";
import { GLOBAL_URL } from "../../global/Constant";
import axios from "axios";
import useToken from "../../config/useToken";
import alertMessage from "../../global/AlertProvider";
import SelectBid from "./Bids/SelectBid";
import SubmitBid from "./Bids/SubmitBid";
import CountDown from "../Countdown/CountDown";

const CustomItemPage = (props) => {
    const postId = props.match.params.id;
    const { getToken, userData } = useToken();
    const [ad, setAd] = useState([]);
    const [adLoading, setAdLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBid, setSelectedBid] = useState("off");
    const [bidList, setBidList] = useState([]);
    const [bidListLoading, setBidListLoading] = useState(true);
    const [amount, setAmount] = useState(null);
     
    const postBid = async () => {
        await axios
            .post(
                `${GLOBAL_URL}/ads/bid`,
                {
                    amount: amount,
                    user: userData().id,
                    selected: false,
                    advertisement: postId,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Token ${getToken()}`,
                    },
                }
            )
            .then(async (response) => {
                alertMessage("bid posted successfully");
                setBidList([...bidList, response.data.data]);
            })
            .catch(async (error) => {
                setError(error)})
    };
    useEffect(() => {
        axios
            .get(`${GLOBAL_URL}/ads/${postId}`, {
                headers: {
                    Authorization: `Token ${getToken()}`,
                    "Content-Type": "application/json",
                },
            })
            .then(async (response) => {
                setAd(response.data.data);
                setAdLoading(false);
            })
            .catch(async (error) => setError(error));
        axios
            .get(`${GLOBAL_URL}/ads/bid/${postId}`, {
                headers: {
                    Authorization: `Token ${getToken()}`,
                    "Content-Type": "application/json",
                },
            })
            .then(async (response) => {
                setBidList(response.data.data);
                setBidListLoading(false);
            })
            .catch(async (error) => setError(error));
    }, [getToken, postId]);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };    
    
    const handleSubmit = async () => {
        await axios.put(`${GLOBAL_URL}/ads/${ad.id}`, {
            "product": ad.product,
            "buy_or_sell": ad.buy_or_sell,
            "basic_price": ad.basic_price,
            "product_description": ad.product_description,
            "image_1_link": ad.image_1_link,
            "quality": ad.quality,
            "thickness": ad.thickness,
            "width": ad.width,
            "length": ad.length,
            "grade_or_spec": ad.grade_or_spec,
            "temper": ad.temper,
            "specification_number": ad.specification_number,
            "quantity": ad.quantity,
            "coating_in_gsm": ad.coating_in_gsm,
            "author_name": ad.author_name,
            "author_mobile_number": ad.author_mobile_number,
            "author_country": ad.author_country,
            "author_business_address": ad.author_business_address,
            "selected_bid": bidList[selectedBid - 1].id,
        }, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 200) {
                alertMessage(`Bid selected of amount: Rs. ${bidList[selectedBid - 1].amount}`)
            }
        }).catch((error) => {
            console.log(error.response)
        })
    }

    return adLoading === false && bidListLoading === false ? (
        <div className="container-fluid my-4">
            <div className="row no-gutters">
                <div className="col-md-8 mx-5">
                    <div className="row d-flex justify-content-center my-3">
                        <CountDown time={ad.bidding_close_date} />
                    </div>
                    <div className="row auth-bg">
                        <div className="col-md-12">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide image-height"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators image-height">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        className="active"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="1"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="2"
                                    ></li>
                                </ol>
                                <div className="carousel-inner image-height">
                                    <div className="carousel-item active">
                                        <img
                                            className="d-block w-100"
                                            src={ad.image_1_link}
                                            alt="First slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100"
                                            src={ad.image_2_link}
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100"
                                            src={ad.image_3_link}
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100"
                                            src={ad.image_4_link}
                                            alt="Third slide"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="container-fluid py-3">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="text-dark h5">
                                        #{ad.id}
                                    </div>
                                    <div className="text-dark">
                                        Dimensions
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4" style={{"fontSize" : "smaller"}}> Thickness : {ad.thickness} </div>
                                        <div className="col-md-4"  style={{"fontSize" : "smaller"}}> Width : {ad.width} </div>
                                        <div className="col-md-4"  style={{"fontSize" : "smaller"}}> Length : {ad.length} </div>
                                    </div>
                                    <div className="text-dark">
                                        Feature
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3"  style={{"fontSize" : "smaller"}}>Quantity : {ad.quantity} </div>
                                        <div className="col-md-3"  style={{"fontSize" : "smaller"}}>Quality : {ad.quality} </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <CustomButton fontSize="15" data="Excel" dataToggle="modal" dataTarget="#exampleModal" padding='8' backgroundColor='gray' color='white' handleClick={togglePopup} />
                                        <Popup
                                            content=
                                            {
                                                <>
                                                    <CustomText
                                                        name="Excel File Data"
                                                        color="grey"
                                                        size="xx-large"
                                                        weight="400"
                                                    />
                                                    <Excel />
                                                </>
                                            }
                                            handleClose={togglePopup}
                                        />
                                </div>
                                <div className="col-md-2">
                                    <CustomButton
                                        fontSize="15"
                                        data="Pdf"
                                        padding="8"
                                        backgroundColor="gray"
                                        color="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="auth-bg py-3 px-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-dark h4"> #{ad.id}</div>
                            </div>
                        </div>
                        
                        {
                            userData().id === ad.user
                            ?
                                ad.selected_bid === null
                                    ?
                                        <>
                                            {
                                                bidList.map((bid) => (
                                                    <div key={bid.id}>
                                                        <SelectBid bid={bid} key={bid.id} selectBid={setSelectedBid} />
                                                        <hr />
                                                    </div>
                                                ))
                                            }
                                            <div className="row">
                                                <div className="col-12">
                                                    <div onClick={() => handleSubmit()} className="btn btn-secondary w-100 mt-3">Choose Bid</div>
                                                </div>
                                            </div>
                                        </>
                                    :
                                        <div className="row">
                                            <div className="col-12">
                                                You have already selected a bid of Rs. {bidList[ad.selected_bid - 1].amount}!
                                            </div>
                                        </div>
                                :
                                    <>
                                        {
                                            bidList.map((bid) => (
                                                <div key={bid.id}>
                                                    <SubmitBid key={bid.id} bid={bid} />
                                                    <hr />
                                                </div>
                                            ))
                                        }
                                        <div className="row px-2 mt-3">
                                            <div className="input-group">
                                                <input type="number" className="form-control" onChange={(e) => setAmount(e.target.value)} placeholder="Enter Bid value" aria-label="Bid value" aria-describedby="button-addon2" />
                                                <div className="input-group-append">
                                                <button className="btn btn-secondary" onClick={postBid} type="button" id="button-addon2">BID</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                        }
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="d-flex justify-content-center align-items-center w-100 h-100 my-5 py-5">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default CustomItemPage;