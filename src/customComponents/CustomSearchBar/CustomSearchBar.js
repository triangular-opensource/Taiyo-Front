  import {React , useState , useEffect  , useRef} from 'react'
import './CustomSearchBar.css'
import Autocomplete from "react-google-autocomplete";

const CustomSearchBar = () => {
 
  return (
    // <div className="wrapper">
    //   <div className="search-input">
    //     <input type="text" placeholder={props.placeholder}/>
    //     <div className="icon"><GlobalSvg /></div>
    //   </div>
    // </div>


  <Autocomplete
  apiKey="AIzaSyBebUjvEESxtkjRTfYEknr0Qn6rnTQGfjc"
  onPlaceSelected={(place) => {
    console.log(place);
  }}
/>

  );
};

export default CustomSearchBar