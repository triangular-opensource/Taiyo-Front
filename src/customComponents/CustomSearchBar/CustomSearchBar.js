  import {React , useState , useEffect  , useRef} from 'react'
import './CustomSearchBar.css'
import {ReactComponent as GlobalSvg} from '../../global/static/svg/search.svg'


const CustomSearchBar = (props) => {
 
  return (
    <div className="wrapper">
      <div className="search-input">
        <input type="text" placeholder={props.placeholder}/>
        <div className="icon"><GlobalSvg /></div>
      </div>
    </div>
//   <Autocomplete
//   apiKey="AIzaSyBebUjvEESxtkjRTfYEknr0Qn6rnTQGfjc"
//   onPlaceSelected={(place) => {
//     console.log(place);
//   }}
// />

  );
};

export default CustomSearchBar