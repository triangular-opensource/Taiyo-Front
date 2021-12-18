import { React, useState } from 'react'
import CustomText from '../../customComponents/CustomText/CustomText'
import CustomButton from '../../customComponents/CustomButton/CustomButton'
import './ItemPage.css'
import Popup from '../../customComponents/Popup/Popup'
import Excel from '../../customComponents/Excel/Excel'
import { useHistory } from "react-router-dom";


function CustomItemPage() {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    async function handleSubmit(event) {
        ;
    }

    return (
        <div className="container-fluid my-4 py-5 auth-bg px-5">
            <div className="row no-gutters ">
                <div className="col-md-12">
                    <div id="carouselExampleIndicators" className="carousel slide image-height" data-ride="carousel">
                        <ol className="carousel-indicators image-height">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner image-height">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="container-fluid py-3">
                    <div className="row">
                        <div className="col-md-10">
                            <CustomText name="Sddsffdsdfs" color='grey' size='xx-large' weight='400' />
                        </div>
                        <div className="col-md-1">
                            <CustomButton fontSize="17" data="Excel" padding='12' backgroundColor='gray' color='white' handleClick={togglePopup} />
                            {
                                isOpen && <Popup
                                    content=
                                    {
                                        <>
                                            <CustomText name="Excel File Data" color="grey" size='xx-large' weight='400' />
                                            <Excel />
                                        </>
                                    }
                                    handleClose={togglePopup}
                                />}

                        </div>
                        <div className="col-md-1">
                            <CustomButton fontSize="17" data="Pdf" handleClick={history.push("./pdf")} padding='12' backgroundColor='gray' color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomItemPage
