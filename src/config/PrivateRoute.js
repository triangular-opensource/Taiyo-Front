import React from 'react'
import { Redirect, Route } from 'react-router'
import useToken from './useToken';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { isUser } = useToken();

    return (
        <Route { ...rest } render={props => {
                return isUser ? <Component {...props} /> : <Redirect to='/login' />
            }}>
        </Route>
    )
}

export default PrivateRoute
