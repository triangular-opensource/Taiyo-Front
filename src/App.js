import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import About from "./components/About/About";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import BuySell from "./components/BuySell/BuySell";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Profile from './components/Profile/Profile';
import AuthProvider from "./config/AuthContext";

function App() {

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => (
		axios.get("https://taiyoindustries.herokuapp.com/api/general-info", {
        headers: {
            "Content-Type": "application/json"
        }
		}).then(response => {
			setData(response.data.data[0])
		}).catch(error => setError(error))
		.finally(() => setLoading(false))
	), [])

  	return (
		  <BrowserRouter>
				<AuthProvider>
		  			{
					  !loading && !data
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
		  			)}
				</AuthProvider>
			</BrowserRouter>
	)
}

export default App;
