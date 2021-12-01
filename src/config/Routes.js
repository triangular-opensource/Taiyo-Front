import React from 'react'
import { Route, Switch } from 'react-router'
import About from '../components/About/About'
import Login from '../components/Auth/Login/Login'
import Register from '../components/Auth/Register/Register'
import BuySell from '../components/BuySell/BuySell'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Profile from '../components/Profile/Profile'
import useAuth from './AuthContext'

const Routes = () => {
    const { loading } = useAuth();

    return (
        <>
            {
                loading
                ?
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                :(
                    <>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/buy-sell" component={BuySell} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/profile" component={Profile} />
                        </Switch>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Routes
