import axios from "axios";
import React, { useState, useEffect } from "react";
import useToken from "../../config/useToken";
import { GLOBAL_URL } from "../../global/Constant";

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
                await setNotificationLoading(false);
            })
            .catch(async (error) => setError(error));
    });

    return (
        <div className="container my-4">
            {notificationLoading ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div
                        className="spinner-border"
                        style={{ width: "4rem", height: "4rem" }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                notification.map((notify) => (
                    <div key={notify.id} className="alert alert-warning alert-dismissible fade show">
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
                                <div>{notify.text}</div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Notification;
