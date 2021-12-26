import React from "react";
import useToken from "../../../config/useToken";

const Friends = () => {
    const { userData } = useToken();
    return (
        <div className="container profileData__container bg-light mb-5 pb-5">
            <div>
                <h4>Friends</h4>
            </div>
            <div>
                {userData().friends ? (
                    userData().friends.map((friend) => (
                        <div>

                        <hr />
                        <div className="bg-white px-3 py-3">
                            <div className="row  ">
                                <div className="col-md-1  ">
                                    <img
                                        style={{
                                            height: "75px",
                                            width: "75px",
                                            borderRadius: "50%",
                                        }}
                                        src={friend.image}
                                        alt="profile"
                                    />
                                </div>
                                <div className="col-md-10 mt-1 ml-1">
                                    <div className="row">
                                    {friend.middle_name === null ? (
                                        
                                            "Name : "
                                            + friend.first_name +
                                                " " +
                                                friend.last_name
                                        
                                    ) : (
                                        
                                            "Name : "
                                            +friend.first_name +
                                                " " +
                                                friend.middle_name +
                                                " " +
                                                friend.last_name
                                    
                                    )}
                                </div>
                                    <div className="row">
                                         {"Email : "  + friend.email} 
                                    </div>
                                    <div className="row">
                                        {"Phone Number : " + "+91"+friend.phone_number}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mb-5">
                        <h5>YOU HAVE NO FRIENDS</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Friends;
