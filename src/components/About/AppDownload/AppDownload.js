import React from 'react'
import "./AppDownload.css"
import { ReactComponent as AndroidSvg } from "../../../static/android.svg";
import { ReactComponent as AppleSvg } from "../../../static/apple.svg";

function AppDownload() {
    return (
        <div className="bg-secondary contain">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 h2 text-center text-light download__head py-5">
                        Download App
                    </div>
                </div>
                <div className="row contain__row pb-5">
                    <div className="col-md-6 my-1">
                        <div className="download__card container">
                            <div className="row my-3 pb-3">
                                <div className="col-3">
                                    <AndroidSvg />
                                </div>
                                <div className="col-9">
                                    <div className="container">
                                        <div className="row download__from">
                                            Download From
                                        </div>
                                        <div className="row store__name">
                                            Android Store
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-1">
                        <div className="download__card container">
                        <div className="row my-3 pb-3">
                                <div className="col-3">
                                    <AppleSvg />
                                </div>
                                <div className="col-9">
                                    <div className="container">
                                        <div className="row download__from">
                                            Download From
                                        </div>
                                        <div className="row store__name">
                                            Ios Store
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload
