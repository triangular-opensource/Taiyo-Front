import React from 'react'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar'
import ChatComponent from './ChatComponent'

const Chat = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <ProfileHeader />
                    <ProfileNavbar />
                </div>
                <div className="col-md-12">
                    <ChatComponent />
                </div>
            </div>
        </div>
    )
}

export default Chat
