import "./App.css";
import CustomLogin from "./components/CustomLogin/CustomLogin";
import CustomMoneyBox from "./components/CustomMoneyBox/CustomMoneyBox";
import CustomMoneyBoxRegular from "./components/CustomMoneyBox/CustomMoneyBoxRegular";
import CustomRegister from "./components/CustomRegister/CustomRegister";
import CustomUserEditForm from "./components/CustomUserEditForm/CustomUserEditForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {

	
  	return (
		<div className="App"> 
			<Header />
			<CustomLogin/>
			<CustomRegister/>
			<CustomMoneyBox/>
			<CustomMoneyBoxRegular/>
			<CustomUserEditForm/>
			<Footer />
		</div>
	)
}

export default App;
