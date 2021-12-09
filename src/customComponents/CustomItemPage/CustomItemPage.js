import React from 'react'
import CustomText from '../CustomText/CustomText'
import './CustomItemPage.css'

function CustomItemPage(){
    return (
        <div className = "container-fluid py-5 auth-bg px-5">
        <div className="row no-gutters item-bg">
                <div className="col-md-12">
                                <div id="carouselExampleIndicators" class="carousel slide image-height" data-ride="carousel">
                                    <ol class="carousel-indicators image-height">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                <div class="carousel-inner image-height">
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Third slide"/>
                                    </div>
                                </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                  </div>
                </div>
                <div className="form-row col-md-12">
                <span>
                </span>
                    </div>
                    <div className="form-row col-md-12">
                    <CustomText name= "location " weight='bold' size= 'large'/>
                    </div>
                    <div className="form-row col-md-12">
                    <CustomText name= "location " weight='bold' size= 'large'/>
                    </div>
                    <div className="form-row col-md-12">
                    <CustomText name= "location " weight='bold' size= 'large'/>
                    </div>
                    <div className="form-row col-md-12">
                    <CustomText name= "location " weight='200' size= 'large'/>
                    </div>
                    <div className="form-row col-md-12">
                    <CustomText name= "location " weight='200' size= 'large'/>
                    </div>

            </div>
        </div>
    )
}

export default CustomItemPage
