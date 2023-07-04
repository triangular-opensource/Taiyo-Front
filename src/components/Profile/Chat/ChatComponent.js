import React from 'react'

const ChatComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="container">
                        <div className="row">
                            Queries
                            <span className="float-right">Sent Offers | Received Offers | Blocked Users</span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                Nothing Found
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    No message received on this ad yet
                </div>
            </div>
        </div>
    )
}

export default ChatComponent
