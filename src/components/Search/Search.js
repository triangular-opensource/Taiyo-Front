import {React , useState ,  useEffect } from 'react'
import "./Search.css"
import CustomSearchBar from '../../customComponents/CustomSearchBar/CustomSearchBar'
import CustomItemCard from '../../customComponents/CustomItemCard/CustomItemCard'
import { GLOBAL_URL } from '../../global/Constant'
import axios from 'axios'
import Loader from '../../customComponents/Loader/Loader'
function Search() {

    const [category, setCategory] = useState([]);
    const [ads, setAd] = useState([]);
    const [adLoading, setAdLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryLoading, setCategoryLoading] = useState(true)

    useEffect(() => {
        axios.get(`${GLOBAL_URL}/category`)
            .then(async (response) => {
                setCategory(response.data.data);
                setCategoryLoading(false)
            })
            .catch(async (error) => setError(error))
        
        axios.get(`${GLOBAL_URL}/ads`)
            .then(async (response) => {
                setAd(response.data.data);
                setAdLoading(false)
            })
            .catch(async (error) => setError(error))
    }, []);
    
    return (
        <div className="container-fluid py-4 px-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 search__col">
                    <CustomSearchBar placeholder="Location" /> 
                </div>
            </div>

            <div className="row my-4 mx-4">
                <div className="col-md-3">
                    <div className="container rounded-lg bg-light pt-4 ">
                        <div className="row "> 
                            <div className="col-12">
                                <h5>Filters</h5>
                            </div>
                        </div>
                        <div className="row mb-3 ml-auto">
                            <div className="container">
                                <div className="row mb-1">
                                    <div className="col-12">
                                       <h6>Ad Type</h6> 
                                    </div>
                                </div>
                                <div className="row ml-auto">
                                    <div className="col-12">
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadio1">Sell</label>
                                        </div>
                                        <div className="custom-control custom-switch mt-2">
                                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadio2">Buy</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 ml-auto">
                            <div className="container">
                                <div className="row mb-1">
                                    <div className="col-12">
                                       <h6>Category</h6>
                                    </div>
                                </div>
                                <div className="row ml-auto">
                                    <div className="col-12">
                                        {
                                            categoryLoading ? (
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            ) : 
                                            category.map(
                                                (cat) =>
                                                    <div key={cat.id} className="custom-control custom-switch my-1">
                                                        <input type="checkbox" className="custom-control-input" id={`check${cat.id}`} />
                                                        <label className="custom-control-label" htmlFor={`check${cat.id}`}>{cat.name}</label>
                                                    </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-9">
                {
                   (adLoading) ?   
                <div className="d-flex justify-content-center align-items-center">
                   <div className="spinner-border" style={{"width" : "4rem"  , "height" : "4rem"}} role="status">
                       <span className="sr-only">Loading...</span>
                   </div>
               </div>
                 :ads.map((ad) => (<CustomItemCard key={ad.id} data = {ad} />))
                }
                </div>
            </div>
        </div>
    )
}

export default Search
