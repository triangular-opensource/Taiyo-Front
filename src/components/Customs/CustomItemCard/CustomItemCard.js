import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { ReactComponent as LocationSvg } from "../../../global/static/svg/location.svg";
import "./CustomItemCard.css";
import { NavLink } from "react-router-dom";
import DefaultPic from "../../../global/static/defaultImage.png";
import CountDown from "../../Countdown/CountDown"

const CustomItemCard = (props) => {
    return (
        <div className="col-12 mb-2">
            <div className="row p-3 no-gutters border bg-white rounded overflow-hidden flex-row  h-100 position-relative   shadow-sm">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    {
                        props.data.image_1_link
                            ?
                                <img
                                    className="rounded"
                                    style={{ maxHeight: "120px", "width": "inherit" }}
                                    src={props.data.image_1_link}
                                    alt="some"
                                />
                            :
                                <img
                                    className="rounded"
                                    style={{ maxHeight: "120px", "width": "inherit" }}
                                    src={DefaultPic}
                                    alt="some"
                                />
                    }
                </div>
                <div className="col-9 pl-3">
                    <div className="row">
                        <div className="col-3 px-0 pl-3">
                            <h6>
                                <span className="">#{props.data.id}</span>
                                {
                                    props.data.buy_or_sell === "Sell"
                                        ? 
                                            <span style={{"fontSize" : "smaller"}} className="ml-2 badge badge-info">Stock for Sale</span>
                                        :
                                            <span style={{"fontSize" : "smaller"}} className="ml-2 badge badge-warning">Enquiry</span>
                                }
                            </h6>
                        </div>
                        <div className="col-6 px-0">
                            <CountDown time={props.data.bidding_close_date} styleClass="countdown_timer_div_small" />
                        </div>
                        <div className="col-3 pl-0">
                            <span className="float-right">
                                <h5>&#8377; {props.data.basic_price} </h5>
                            </span>
                        </div>
                    </div>
                    <div className="row ">
                    <span style={{"fontSize" : "smaller" , "fontWeight" : "bold"}} className="ml-3 ">   {props.data.product} </span>
                    {/* <span style={{"fontSize" : "smaller"}} className="ml-2 badge badge-success">    {props.data.sub_category} </span>
                    <span style={{"fontSize" : "smaller"}} className="ml-2 badge badge-success">    {props.data.category} </span> */}
                    
                        
                    </div>
                    <div className="row my-1">
                        <div className="col text-muted searchItem__location">
                            <LocationSvg />
                            <span> {props.data.location} </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 searchItem__timestamp">
                            Posted :{` ${new Date(props.data.timestamp).toString().slice(0 , 24)}`}
                        </div>
                        <div className="col-4">
                            <NavLink to={`/post/${props.data.id}`}>
                                <CustomButton
                                    disabled={false}
                                    fontSize="16"
                                    data="Details"
                                    padding="7"
                                    backgroundColor="black"
                                    color="white"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomItemCard;
