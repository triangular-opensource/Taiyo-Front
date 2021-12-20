import React from "react";
import { NavLink } from "react-router-dom";
import "./PostNavbar.css"

const PostNavbar = ({active1, active2, active3, post, category}) => {

    return (
        <div className="py-4">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <NavLink className={active1 ? "nav-link PostNavbar__pill active" : "nav-link PostNavbar__pill"} to="/post-ad/step-1">
                        Ad Information
                    </NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink
                        className={
                            !(category && post.product && post.buy_or_sell)
                                ?
                                    "nav-link PostNavbar__pill disabled"
                                :
                                    active2
                                        ?
                                            "nav-link PostNavbar__pill active"
                                        :
                                            "nav-link PostNavbar__pill"
                        }
                        to="/post-ad/step-2">
                        Ad Details
                    </NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink
                        className={
                            !(category && post.product && post.buy_or_sell) && !active1
                                ?
                                    active3 && !active1 && !active2
                                        ?
                                            "nav-link PostNavbar__pill active"
                                        :
                                            "nav-link PostNavbar__pill"
                                : 
                                    "nav-link PostNavbar__pill disabled"
                        }
                        to="/post-ad/step-3"
                    >
                        User Information
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default PostNavbar;
