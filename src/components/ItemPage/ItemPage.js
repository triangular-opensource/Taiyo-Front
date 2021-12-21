import React, { useState, useEffect } from "react";
import CustomText from "../../customComponents/CustomText/CustomText";
import CustomButton from "../../customComponents/CustomButton/CustomButton";
import "./ItemPage.css";
import Popup from "../../customComponents/Popup/Popup";
import Excel from "../../customComponents/Excel/Excel";
import { useHistory } from "react-router-dom";
import CustomInput from "../../customComponents/CustomInputField/CustomInput";
import { GLOBAL_URL } from "../../global/Constant";
import axios from "axios";
import useToken from "../../config/useToken";
import alertMessage from "../../global/AlertProvider";

const CustomItemPage = (props) => {
    const postId = props.match.params.id;
    const history = useHistory();
    const { getToken, userData } = useToken();
    const [ad, setAd] = useState([]);
    const [adLoading, setAdLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bidList, setBidList] = useState([]);
    const [bidListLoading, setBidListLoading] = useState(true);
    const [amount, setAmount] = useState("");
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
                        Authorization: `Token ${getToken()}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(async (response) => {
                alertMessage("bid posted successfully");
                setBidList([...bidList, response.data.data]);
            })
            .catch(async (error) => setError(error));
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
                console.log(response.data.data);
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
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    async function handleSubmit(event) {}
    return adLoading === false && bidListLoading === false ? (
        <div className="container-fluid my-4">
            <div className="row no-gutters">
                <div className="col-md-8 mx-5">
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
                                <div class="text-dark"> #{ad.id}</div>
                            </div>
                        </div>
                        {bidList.map((bid) => (
                            <div className="row mt-1 mb-1 ">
                                <div className="col-9">
                                    <CustomText name={`Rs.${bid.amount}`} />
                                </div>
                                <div className="col-3">
                                    <CustomText name={`#${bid.user}`} />
                                </div>
                            </div>
                        ))}
                        <div className="row">
                            <div className="col-9">
                                <CustomInput
                                    placeholder="Enter Amount"
                                    margin="0px 0px 0px 0px"
                                    value={amount}
                                    onChangeValue={(event) =>
                                        setAmount(event.target.value)
                                    }
                                    type="number"
                                />
                            </div>
                            <div className="col-3">
                                <CustomButton
                                    fontSize="17"
                                    marginTop="5"
                                    data="BID"
                                    padding="8"
                                    backgroundColor="gray"
                                    color="white"
                                    handleClick={postBid}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default CustomItemPage;
