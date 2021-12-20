import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../components/Auth/Login/Login'
import Register from '../components/Auth/Register/Register'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import PrivacyPolicy from '../components/Policiy/PrivacyPolicy/PrivacyPolicy'
import TermAndConditions from '../components/Policiy/TermsAndConditions/TermAndConditions'
import Chat from '../components/Profile/Chat/Chat'
import PackageHistory from '../components/Profile/Package/PackageHistory'
import Profile from '../components/Profile/Profile'
import Search from '../components/Search/Search'
import ItemPage from '../components/ItemPage/ItemPage' 
import Otp from '../components/Auth/Otp/Otp'
import RegisterSuccess from '../components/Auth/Register/RegisterSuccess/RegisterSuccess'
import ProfileEdit from '../components/Profile/ProfileEdit/ProfileEdit'
import ResetPassword from '../components/Auth/ResetPassword/ResetPassword'
import ResetPasswordSuccess from '../components/Auth/ResetPassword/ResetPasswordSuccess/ResetPasswordSuccess'
import Package from '../components/Packages/Package'
import AdInformation from '../components/BuySell/AdInformation/AdInformation'
import AdDetails from '../components/BuySell/AdDetails/AdDetails'
import UserInformation from '../components/BuySell/UserInformation/UserInformation'

const Routes = () => {

    return (
        <>
            <Header />
            <div className='mt-4 pt-4'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/#about" component={Home} />
                <Route exact path="/#contact" component={Home} />
                <Route exact path="/post-ad/step-1" component={AdInformation} />
                <Route exact path="/post-ad/step-2" component={AdDetails} />
                <Route exact path="/post-ad/step-3" component={UserInformation} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/package-history" component={PackageHistory} />
                <Route exact path="/terms-and-conditions" component={TermAndConditions} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/packages" component={Package} />
                <Route exact path="/search-detail" component={ItemPage} />
                <Route exact path="/edit-profile" component={ProfileEdit} />
                <Route exact path="/otp" component={Otp} />
                <Route exact path="/reset-password" component={ResetPassword} />
                <Route exact path="/reset-password-success" component={ResetPasswordSuccess} />
                <Route exact path="/register-success" component={RegisterSuccess} />
            </Switch>
            <Footer />
            </div>
        </>
    )
}

export default Routes 
