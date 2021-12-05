import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import  { AuthProvider } from "./config/AuthContext";
import Routes from './config/Routes';


function App() {

  	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App;
