import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useToken from "../../config/useToken";
import { GLOBAL_URL } from "../../global/Constant";
import {ReactComponent as Empty} from "../../global/static/svg/empty.svg"

const Notification = () => {
    const { getToken } = useToken();
    const [notification, setNotification] = useState([]);
    const [notificationLoading, setNotificationLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${GLOBAL_URL}/auth/notification`, {
                headers: {
                    Authorization: `Token ${getToken()}`,
                    "Content-Type": "application/json",
                },
            })
            .then(async (response) => {
                setNotification(await response.data.data);
                setNotificationLoading(false);
            })
            .catch(async (error) => console.log(error.response));
    }, []);

    const deleteNotification = async (id) => {
        axios.delete(`${GLOBAL_URL}/auth/notification/${id}`, {
            headers: {
                Authorization: `Token ${getToken()}`,
                "Content-Type": "application/json",
            },
        }).then(response => {console.log(response.data)})
        .catch(async (error) => setError(await error.response))
    }

    return (
        <div className="container my-4">
            {
                notificationLoading
                    ?
                        <div className="d-flex justify-content-center align-items-center my-5 py-5">
                            <div
                                className="spinner-border"
                                style={{ width: "4rem", height: "4rem" }}
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    : 
                        (notification.length!==0) ?
                        notification.map((notify) => (
                            <div key={notify.id}>
                                <div className="alert alert-secondary alert-dismissible fade show">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="h5">
                                                        {notify.heading}
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    {notify.create_time.slice(0, 10)}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>
                                                    {notify.text}
                                                </p>
                                                <div style={{"marginRight": "-40px"}}>
                                                    <NavLink
                                                        to={`post/${notify.ad}`}
                                                        className={"btn btn-dark btn-sm float-right"}
                                                        >
                                                        Open
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => deleteNotification(notify.id)}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        ))
                        : 
                        <div className= "w-100 my-5 py-5 d-flex justify-content-center align-items-center flex-column">
                            
                            <Empty />
                        
                            <div className="h4 mt-2">No Notifications</div>
                        </div>
            }
        </div>
    );
};

export default Notification;
