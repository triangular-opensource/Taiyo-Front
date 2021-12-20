import {React , useState , useEffect  , useRef} from 'react'
import './CustomSearchBar.css'
import {ReactComponent as SearchSvg} from '../../global/static/svg/search.svg'
import Autocomplete from 'react-google-autocomplete'

const CustomSearchBar = (props) => 
{
  return (
  <div className="wrapper">
    <div className='search-input'>
  <Autocomplete 
  apiKey="AIzaSyCDemNBz_ZjM1jrBq6WVMTYsPDFm1vX-uM"
  onPlaceSelected={(place) => {
    console.log(place);
  }}
  />
    <div className="icon"><SearchSvg /></div>
  </div>
  </div>

  );
};

export default CustomSearchBar