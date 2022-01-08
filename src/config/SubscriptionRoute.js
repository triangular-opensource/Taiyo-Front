import React from 'react'
import { Redirect, Route } from 'react-router'
import useToken from './useToken';

const SubscriptionRoute = ({ component: Component, ...rest }) => {

    const { isUser, userData } = useToken();

    return (
        <Route { ...rest } render={props => {
                return isUser() && userData().package_type !== null ? <Component {...props} /> : <Redirect to='/packages' />
            }}>
        </Route>
    )
}

export default SubscriptionRoute
