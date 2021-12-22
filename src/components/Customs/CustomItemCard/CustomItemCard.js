import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { ReactComponent as LocationSvg } from "../../../global/static/svg/location.svg";
import "./CustomItemCard.css";
import { NavLink } from "react-router-dom";
import DefaultPic from "../../../global/static/defaultImage.png";

const CustomItemCard = (props) => {
    console.log(props.data)
    return (
        <div className="col-12 mb-2">
            <div className="row p-3 no-gutters border bg-white rounded overflow-hidden flex-row  h-100 position-relative   shadow-sm">
                <div className="col-3 text-center">
                    {
                        props.data.image_1_link
                            ?
                                <img
                                    className="rounded"
                                    style={{ maxHeight: "120px" }}
                                    src={props.data.image_1_link}
                                    alt="some"
                                />
                            :
                                <img
                                    className="rounded"
                                    style={{ maxHeight: "120px" }}
                                    src={DefaultPic}
                                    alt="some"
                                />
                    }
                </div>
                <div className="col-9 pl-3">
                    <div className="row">
                        <div className="col-6">
                            <h6>
                                #{props.data.id}
                                {
                                    props.data.buy_or_sell === "Sell"
                                        ? 
                                            <span style={{"fontSize" : "larger"}} className="ml-2 badge badge-info">Sell</span>
                                        :
                                            <span style={{"fontSize" : "larger"}} className="ml-2 badge badge-warning">Buy</span>
                                }
                            </h6>
                        </div>
                        <div className="col-6">
                            <span className="float-right">
                                <h5>&#8377; {props.data.basic_price} </h5>
                            </span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col ad__desc">
                            {props.data.product_description}
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col text-muted searchItem__location">
                            <LocationSvg />
                            <span> {props.data.author_business_address} </span>
                            <span> {props.data.author_country} </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 searchItem__timestamp">
                            Posted :{` ${Date(props.data.timestamp.slice(0, 10)).slice(0,16)}`}
                        </div>
                        <div className="col-4">
                            <NavLink to={`/post/${props.data.id}`}>
                                <CustomButton
                                    disabled={false}
                                    fontSize="16"
                                    data="Details"
                                    handleClick={() => {}}
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
