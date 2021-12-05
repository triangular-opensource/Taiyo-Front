import React from 'react'
import useAuth from '../../../config/AuthContext'

function Login() {

    const {login} = useAuth();
    const fun = () => {
        return login("alankar.18bci1037@abes.ac.in", "1234")
    }

    return (
        <div>
            <button onClick={fun}>login</button>
            Hello From login
        </div>
    )
}

export default Login
