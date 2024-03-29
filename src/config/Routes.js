import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../components/Auth/Login/Login'
import Register from '../components/Auth/Register/Register'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import PrivacyPolicy from '../components/Policiy/PrivacyPolicy/PrivacyPolicy'
import TermAndConditions from '../components/Policiy/TermsAndConditions/TermAndConditions'
import Chat from '../components/Profile/Chat/Chat'
import PackageHistory from '../components/Profile/Package/PackageHistory'
import Profile from '../components/Profile/Profile'
import Search from '../components/Search/Search'
import ItemPage from '../components/PostDetail/ItemPage' 
import Otp from '../components/Auth/Otp/Otp'
import RegisterSuccess from '../components/Auth/Register/RegisterSuccess/RegisterSuccess'
import ProfileEdit from '../components/Profile/ProfileEdit/ProfileEdit'
import ResetPassword from '../components/Auth/ResetPassword/ResetPassword'
import ResetPasswordSuccess from '../components/Auth/ResetPassword/ResetPasswordSuccess/ResetPasswordSuccess'
import Package from '../components/Packages/Package'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import ScrollButton from '../components/Customs/ScrollUp/ScrollUp'
import PrivateRoute from './PrivateRoute'
import Ads from '../components/Advertisement/Ads/Ads'
import Notification from '../components/Notification/Notification'
import Pdf from '../components/Customs/Pdf/Pdf'
import RegisterFailure from '../components/Auth/Register/RegisterFailure/RegisterFailure'
import SubscriptionRoute from './SubscriptionRoute'
import PostForm from '../components/BuySell/PostForm/PostForm'


const Routes = () => {

    return (
        <>
            <Header />
            <div className=''>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/about" component={() => <About />} />
                    <Route exact path="/contact" component={() => <Contact />} />
                    <SubscriptionRoute exact path="/post/:id" component={ItemPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <Route exact path="/chat" component={Chat} />
                    <PrivateRoute exact path="/package-history" component={PackageHistory} />
                    <Route exact path="/terms-and-conditions" component={TermAndConditions} />
                    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/packages" component={Package} />
                    <Route exact path="/search-detail" component={ItemPage} />
                    <PrivateRoute exact path="/edit-profile" component={ProfileEdit} />
                    <Route exact path="/otp" component={Otp} />
                    <Route exact path="/reset-password" component={ResetPassword} />
                    <Route exact path="/reset-password-success" component={ResetPasswordSuccess} />
                    <Route exact path="/register-success" component={RegisterSuccess} />
                    <Route exact path="/my-ads" component={Ads} /> 
                    <PrivateRoute exact path="/notification" component={Notification} />
                    <Route exact path="/pdf" component={Pdf} /> 
                    <SubscriptionRoute exact path="/post-ad" component={PostForm} /> 
                    <PrivateRoute exact path="/register-failure" component={RegisterFailure} />
                </Switch>
                <Footer />
                <ScrollButton />
            </div>
        </>
    )
}

export default Routes 
