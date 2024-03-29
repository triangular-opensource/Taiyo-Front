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
import { Link } from "react-router-dom";
import {ReactComponent as Empty} from "../../global/static/svg/empty.svg"


const CustomItemPage = (props) => {
    const postId = props.match.params.id;
    const { getToken, userData } = useToken();
    const [ad, setAd] = useState([]);
    const [adLoading, setAdLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBid, setSelectedBid] = useState("off");
    const [bidList, setBidList] = useState([]);
    const [bidListLoading, setBidListLoading] = useState(true);
    const [amount, setAmount] = useState(0);
     
    const postBid = async () => 
    {

    // if(amount > 999)
    // {
    //     if(ad.buy_or_sell === 'Sell')
    //     {
    //         if(bidList.length === 0 )
    //             {
    //                 if(amount < ad.basic_price + 100 )
    //                 {
    //                     return alertMessage("Amount is 100Rs more than basic price");  
    //                 }
    //             }
    //         else
    //             {
    //                 if(amount < bidList[0].amount + 100 )
    //                 {
    //                     return alertMessage("Amount is 100Rs more than highest bid");  
    //                 }
    //             }
    //     }
    // }
    // else
    //     return alertMessage("Bid Always Greater Than 9999");
    

    //     if(ad.buy_or_sell === 'Buy')
    //     {
    //     if(bidList.length === 0)
    //     {
    //         if(amount > ad.basic_price - 100 )
    //             return alertMessage("Amount is 100Rs less than basic price");  
    //     }
    //     else
    //         if(amount < bidList[0].amount - 100 )
    //             return alertMessage("Amount is 100Rs less than least bid");  
    //     }

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
                setAmount(0)
                alertMessage("bid posted successfully");
                setBidList([...bidList, response.data.data]);
            })
            .catch(async (error) => {
                setError(error)})
    };
    useEffect(() => {
        axios
            .get(`${GLOBAL_URL}/ads-detail/${postId}`, {
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
    }, []);

    useEffect(() => {
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
    })
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };    

    const handleSubmit = async () => {
        await axios.put(`${GLOBAL_URL}/ads-detail/${ad.id}`, {
            "product": ad.product,
            "buy_or_sell": ad.buy_or_sell,
            "basic_price": ad.basic_price,
            "product_description": ad.product_description,
            "image_1_link": ad.image_1_link,
            "quality": ad.quality,
            "dimensions": ad.dimensions,
            "grade": ad.grade,
            "temper": ad.temper,
            "specification_number": ad.specification_number,
            "quantity": ad.quantity,
            "color": ad.color,
            "coating_in_gsm": ad.coating_in_gsm,
            "name": ad.name,
            "mobile_number": ad.mobile_number,
            "location": ad.location,
            "business_address": ad.business_address,
            "selected_bid": bidList[selectedBid].id,
            "approval": ad.approval,
            "visible" : ad.visible
        }, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 200) {
                alertMessage(`Bid selected of amount: Rs. ${bidList[selectedBid].amount}`)
                axios.get(`${GLOBAL_URL}/ads-detail/${postId}`, {
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
            }
        }).catch((error) => {
            console.log(error.response)
        })
    }

    const setAdApproval = async () => {
        await axios.put(`${GLOBAL_URL}/ads-detail/${ad.id}`, {
            "product": ad.product,
            "buy_or_sell": ad.buy_or_sell,
            "basic_price": ad.basic_price,
            "product_description": ad.product_description,
            "excel_file_link": ad?.excel_file_link,
            "pdf_file_link": ad?.pdf_file_link,
            "image_1_link": ad?.image_1_link,
            "image_2_link": ad?.image_2_link,
            "image_3_link": ad?.image_3_link,
            "image_4_link": ad?.image_4_link,
            "quality": ad.quality,
            "dimesions": ad.dimensions,
            "color": ad.color,
            "grade": ad.grade,
            "temper": ad.temper,
            "specification_number": ad.specification_number,
            "quantity": ad.quantity,
            "coating_in_gsm": ad.coating_in_gsm,
            "name": ad.name,
            "mobile_number": ad.mobile_number,
            "location": ad.location,
            "business_address": ad.business_address,
            "latitude" : ad.latitude,
            "longitude" : ad.longitude,
            "approval": true
        }, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            alertMessage("Congratulations")
        })
        .catch((error) => {
            console.log(error.response)
            alertMessage("Oops some error occured!")
        })
    }

    return adLoading === false && bidListLoading === false ? (
        <div className="container my-4">
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="row d-flex justify-content-center my-3">
                        <div className="col-md-6 d-flex justify-content-between align-items-center">
                            {
                                ad.buy_or_sell === "Sell"
                                    ? 
                                        <span style={{"fontSize" : "x-large"}} className="ml-2 py-3 px-4 badge badge-info">Stock for Sale</span>
                                    :
                                        <span style={{"fontSize" : "x-large"}} className="ml-2 py-3 px-4 badge badge-warning">Enquiry</span>
                            }
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <CountDown time={ad.bidding_close_date} />
                        </div>
                    </div>
                    <div className="row auth-bg pt-3">
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
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="3"
                                    ></li>
                                </ol>
                                <div className="carousel-inner image-height">
                                    <div className="carousel-item active">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <img
                                                className="d-block rounded"
                                                src={ad.image_1_link}
                                                alt="First slide"
                                                style={{"height": "300px"}}
                                            />
                                        </span>
                                    </div>
                                    <div className="carousel-item">
                                        <span className="d-flex justify-content-center align-items-center">
                                            
                                            {
                                            (ad.image_2_link) ? <img
                                                className="d-block rounded"
                                                src={ad.image_2_link}
                                                alt="Second slide"
                                                style={{"height": "300px"}}
                                            />
                                            :
                                            <Empty    style={{"height": "300px"}} />
                                            
                                            }

                                        </span>
                                    </div>
                                    <div className="carousel-item">
                                        <span className="d-flex justify-content-center align-items-center">
                                          
                                        {
                                            (ad.image_3_link) ? <img
                                                className="d-block rounded"
                                                src={ad.image_3_link}
                                                alt="third slide"
                                                style={{"height": "300px"}}
                                            />
                                            :
                                          
                                            <Empty    style={{"height": "300px"}} />  
                                            }

                                        </span>
                                    </div>
                                    <div className="carousel-item">
                                        <span className="d-flex justify-content-center align-items-center">
                                        {
                                            (ad.image_4_link) ? <img
                                                className="d-block rounded"
                                                src={ad.image_4_link}
                                                alt="fourth slide"
                                                style={{"height": "300px"}}
                                            />
                                            :
                                            
                                            
                                            <Empty    style={{"height": "300px"}} />
                                            
                                            }
                                        </span>
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
                                <div className="col-md-12">
                                    <div className="text-dark h3 mb-3">
                                        Ad Id : <span className="text-success">{ad.id}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="row mx-4">
                                            <div className="col-md-6">
                                                <h5>
                                                    {ad.product}
                                                </h5>
                                            </div>
                                            <div className="col-md-3">
                                                {
                                                    ad.excel_file_link
                                                        ?
                                                            <CustomButton fontSize="15" data="Excel" dataToggle="modal" dataTarget="#excelModal" padding='8' backgroundColor='gray' color='white' handleClick={togglePopup} />
                                                        :
                                                            <></>
                                                }
                                                    <Popup
                                                        target="excelModal"
                                                        title="Excel File Data"
                                                        content=
                                                        {
                                                            <>
                                                                <Excel fileLink={ad.excel_file_link} />
                                                            </>
                                                        }
                                                        handleClose={togglePopup}
                                                    />
                                            </div>
                                            <div className="col-md-3">
                                               {
                                                    ad.pdf_file_link
                                                        ?
                                                            <Link to={{pathname: "/pdf", hash: ad.pdf_file_link}} target="_blank">
                                                                <CustomButton
                                                                fontSize="15"
                                                                data="Pdf"
                                                                padding="8"
                                                                backgroundColor="gray"
                                                                color="white"
                                                                />
                                                            </Link>
                                                        :
                                                            <></>
                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ml-2 pl-5">
                                                <p>
                                                    {ad.product_description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ml-2 pl-5">
                                                <p className="font-weight-bold">
                                                    Base Price : <span style={{"color": "#3b62ab"}}>Rs. {ad.basic_price}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mx-4">
                                            <div className="col-md-6">
                                                {
                                                    ad.dimensions !== null
                                                        ?
                                                            <dl>
                                                                <dt>
                                                                    Dimensions
                                                                </dt>
                                                                <dd>
                                                                    <table className="ml-4">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Dimensions </div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.dimensions}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </dd>
                                                            </dl>
                                                        :
                                                            <></>
                                                }
                                                <dl>
                                                    <dt>
                                                        Features
                                                    </dt>
                                                    <dd>
                                                        <table className="ml-4">
                                                            <tbody>
                                                                {
                                                                    ad.quantity !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Quantity</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.quantity}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                                {
                                                                    ad.quality !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Quality</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.quality}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="col-md-6">
                                                <dl>
                                                    <dt>
                                                        Specification
                                                    </dt>
                                                    <dd>
                                                        <table className="ml-4">
                                                            <tbody>
                                                                {
                                                                    ad.temper !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Temper</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.temper}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                                {
                                                                    ad.grade !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Grade</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.grade}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                                {
                                                                    ad.specification_number !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Specification Number</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.specification_number}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                                {
                                                                    ad.coating_in_gsm !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Coating in GSM</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.coating_in_gsm}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                                {
                                                                    ad.color !== null
                                                                        ?
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="" style={{"fontSize" : "smaller"}}> Colour</div>
                                                                                </td>
                                                                                <td className="pl-4">
                                                                                    <strong style={{"color": "#3b62ab"}}>{ad.color}</strong>
                                                                                </td>
                                                                            </tr>
                                                                        :
                                                                            <></>
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="auth-bg py-3 px-3 rounded" style={{"background": "#e5e5e5"}}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="text-dark h4">Bids</div>
                                                </div>
                                            </div>
                                            
                                            {
                                                userData().id === ad.user
                                                ?
                                                    bidList.length === 0
                                                        ?
                                                            <>
                                                                <div className="row d-flex justify-content-center align-itmes-center">
                                                                    <Empty /> 
                                                                </div>
                                                                <span className="d-flex justify-content-center align-items-center">No Bids</span>
                                                            </>
                                                        :
                                                            ad.selected_bid === null
                                                                ?
                                                                    <>
                                                                        {
                                                                            bidList.map((bid, index) => (
                                                                                <div key={bid.id}>
                                                                                    <SelectBid bid={bid} key={bid.id} index={index} selectBid={setSelectedBid} />
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
                                                                ad.approval
                                                                ?
                                                                    <>
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                You have already selected a bid of Rs. {ad.selected_bid_amount}
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-3">
                                                                            <div className="col-12 h5 text-primary">
                                                                                Winner Details
                                                                            </div>
                                                                            <div className="col-12" style={{"fontSize": "smaller"}}>
                                                                                Name : <span className="text-dark font-weight-bold">{ad.user__first_name} {ad.user__midlle_name} {ad.user__last_name}</span>
                                                                            </div>
                                                                            <div className="col-12" style={{"fontSize": "smaller"}}>
                                                                                Email : <span className="text-dark font-weight-bold">{ad.user__email}</span>
                                                                            </div>
                                                                            <div className="col-12" style={{"fontSize": "smaller"}}>
                                                                                Phone : <span className="text-dark font-weight-bold">{ad.user__phone_number}</span>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                :
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            Waiting for bidder approval
                                                                        </div>
                                                                    </div>           
                                                    :
                                                        <>
                                                            {
                                                                (bidList.length === 0)
                                                                    ?
                                                                        <div className="row px-5">
                                                                            <Empty /> 
                                                                        </div>
                                                                    :
                                                                        ad.selected_bid === null
                                                                            ?
                                                                                bidList.map((bid, index) => (
                                                                                    <div key={bid.id}>
                                                                                        <SubmitBid key={bid.id} bid={bid} index={index} />
                                                                                        <hr />
                                                                                    </div>
                                                                                ))
                                                                            :
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        Bidding Closed!!!
                                                                                    </div>
                                                                                    {
                                                                                        userData().email === ad.user__email
                                                                                            ?
                                                                                                ad.approval
                                                                                                    ?
                                                                                                        <>
                                                                                                            <div className="row mt-3">
                                                                                                                <div className="col-12 h5 text-primary">
                                                                                                                    Owner Details
                                                                                                                </div>
                                                                                                                <div className="col-12" style={{"fontSize": "smaller"}}>
                                                                                                                    Name : <span className="text-dark font-weight-bold">{ad.name}</span>
                                                                                                                </div>
                                                                                                                <div className="col-12" style={{"fontSize": "smaller"}}>
                                                                                                                    Email : <span className="text-dark font-weight-bold">{ad.email}</span>
                                                                                                                </div>
                                                                                                                <div className="col-12" style={{"fontSize": "smaller"}}>
                                                                                                                    Phone : <span className="text-dark font-weight-bold">{ad.mobile_number}</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </>
                                                                                                    :
                                                                                                        <>
                                                                                                            <p>Your Bid has been selected </p>
                                                                                                            <button onClick={()  => 
                                                                                                                setAdApproval()} className="btn btn-sm btn-primary">                                              
                                                                                                                Approve Bid
                                                                                                            </button>
                                                                                                        </>
                                                                                            :
                                                                                                <></>
                                                                                    }
                                                                                </div>

                                                            }
                                                            {
                                                                ad.selected_bid !== null
                                                                    ?
                                                                        <></>
                                                                    :
                                                                        <div className="row px-2 mt-3">
                                                                            <div className="input-group">
                                                                                <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Bid value" aria-label="Bid value" aria-describedby="button-addon2" />
                                                                                <div className="input-group-append">
                                                                                <button className="btn btn-secondary" onClick={postBid} type="button" id="button-addon2">BID</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                            }
                                                        </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
