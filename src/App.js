import "./App.css";
import CustomContainer from "./components/CustomContainer/CustomContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {

	
  	return (
		<div className="App"> 
			<Header />
			<br />
			<br />
			<CustomContainer salary="Basic" money="300" validity = "validity upto 20 days"/>
			<Footer />
		</div>
	)
}

export default App;
