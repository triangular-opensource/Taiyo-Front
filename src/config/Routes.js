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
import PrivacyPolicy from '../components/Policiy/PrivacyPolicy/PrivacyPolicy'
import TermAndConditions from '../components/Policiy/TermsAndConditions/TermAndConditions'
import Chat from '../components/Profile/Chat/Chat'
import PackageHistory from '../components/Profile/Package/PackageHistory'
import Profile from '../components/Profile/Profile'

const Routes = () => {

    return (
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
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/package-history" component={PackageHistory} />
                <Route exact path="/terms-and-conditions" component={TermAndConditions} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            </Switch>
            <Footer />
        </>
    )
}

export default Routes
