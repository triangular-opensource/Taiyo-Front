import "./App.css";
import CustomLogin from "./components/CustomLogin/CustomLogin";
import CustomMoneyBox from "./components/CustomMoneyBox/CustomMoneyBox";
import CustomRegister from "./components/CustomRegister/CustomRegister";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {

	
  	return (
		<div className="App"> 
			<Header />
			<CustomLogin/>
			<CustomRegister/>
			<CustomMoneyBox/>
			<Footer />
		</div>
	)
}

export default App;
