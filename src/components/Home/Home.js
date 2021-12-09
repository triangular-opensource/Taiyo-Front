import React from 'react'

function Home() {

    let user = localStorage.getItem("user");

    console.log(JSON.parse(user)[0])

    return (
        <div>
        </div>
    )
}

export default Home
