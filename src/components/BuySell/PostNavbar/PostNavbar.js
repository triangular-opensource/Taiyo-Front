import React from "react";
import { NavLink } from "react-router-dom";
import "./PostNavbar.css"

const PostNavbar = ({active1, active2, active3, post, post2}) => {

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
                            !(post?.category && post?.product && post?.buy_or_sell)
                                ?
                                    "nav-link PostNavbar__pill disabled"
                                :
                                    active2 && active3
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
                            (!(post?.category && post?.product && post?.buy_or_sell) && ((post2?.basic_price && post2?.description && post2?.quantity && post2?.grad_or_spec && post2?.quality && post2?.temper && post2?.specification_number && post2?.coating_in_gsm && post2?.thickness && post2?.width &&post2?.length))) && (!active1)
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
