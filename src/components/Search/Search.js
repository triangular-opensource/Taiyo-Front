import {React , useState ,  useEffect } from 'react'
import "./Search.css"
import CustomSearchBar from "../Customs/CustomSearchBar/CustomSearchBar"
import CustomItemCard from '../Customs/CustomItemCard/CustomItemCard'
import { GLOBAL_URL } from '../../global/Constant'
import axios from 'axios'
import {ReactComponent as Empty} from "../../global/static/svg/empty.svg"

import { usePlacesWidget } from 'react-google-autocomplete'
import haversine from "haversine-distance"

const Search = () => {

    const [category, setCategory] = useState([]);
    const [ads, setAd] = useState([]);
    const [adLoading, setAdLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryLoading, setCategoryLoading] = useState(true)
    const [adType, setAdType] = useState("all")
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [place, setPlace] = useState(null)

    useEffect(() => {
        let url = `${GLOBAL_URL}/ads/1`
        if (categoryFilter !== "all" && adType === "all") {
            url = `${GLOBAL_URL}/ads/7?id=${categoryFilter}`
        } else if (categoryFilter !== "all" && adType === "sell") {
            url = `${GLOBAL_URL}/ads/9?id=${categoryFilter}`
        } else if (categoryFilter !== "all" && adType === "buy") {
            url = `${GLOBAL_URL}/ads/8?id=${categoryFilter}`
        } else if (adType === "all") {
            url = `${GLOBAL_URL}/ads/1`
        } else if (adType === "sell") {
            url = `${GLOBAL_URL}/ads/6`
        } else if (adType === "buy") {
            url = `${GLOBAL_URL}/ads/5`
        }
        axios.get(url)
            .then(async (response) => {
                setAd(response.data.data);
                console.log(response.data.data);
                setAdLoading(false)
            })
            .catch(async (error) => console.log(error.response))
    }, [adType, categoryFilter]);

    useEffect(() => {
        axios.get(`${GLOBAL_URL}/category`)
            .then(async (response) => {
                setCategory(response.data.data);
                setCategoryLoading(false)
            })
            .catch(async (error) => 
            setError(error))
    }, []);

    useEffect(() => {
        const calculateDistance = (lat1, long1, lat2, long2) => {
            const a = { lat: lat1, lon: long1 }
            const b = { lat: lat2, lon: long2 }
            return haversine(a, b)/1000
        }
        const getDis = () => {
            setAdLoading(true)
            let x=[]
            ads.forEach((ad) => (  
                x.push([
                    calculateDistance(place.geometry.location.lat(), place.geometry.location.lng(), ad.latitude, ad.longitude), ad
                ])))
                x.sort(function(a,b){return a[0] - b[0]})
                let y=[]
                x.forEach((data) => {
                    y.push(data[1])
                })
                setAd(y)
                setAdLoading(false)
        }
        getDis()               
    }, [place])

    const { ref } = usePlacesWidget({
        apiKey: "AIzaSyCDemNBz_ZjM1jrBq6WVMTYsPDFm1vX-uM",
        onPlaceSelected: (place) => setPlace(place)
    })
    
    return (
        <div className="container-fluid py-4 px-5">

            <div className="row my-4 ">
                <div className="col-md-3">
                    <div className="container rounded-lg pt-4 pb-1" style={{"background": "#eeeded", "fontSize": "smaller"}}>


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
                                        <div className="custom-control custom-switch mb-1" onClick={() => {setAdType("all"); setAdLoading(true)}}>
                                            <input type="radio" value={adType} checked={adType === "all"} id="adTypeAll" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="adTypeAll">All</label>
                                        </div>
                                        <div className="custom-control custom-switch mb-1" onClick={() => {setAdType("sell"); setAdLoading(true)}}>
                                            <input type="radio" value={adType} checked={adType === "sell"} id="adTypeSell" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="adTypeSell">Sell</label>
                                        </div>
                                        <div className="custom-control custom-switch mt-2" onClick={() => {setAdType("buy"); setAdLoading(true)}}>
                                            <input type="radio" value={adType} checked={adType === "buy"} id="adTypeBuy" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="adTypeBuy">Buy</label>
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
                                            categoryLoading
                                                ?
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div className="spinner-border" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </div>
                                                :
                                                    <>
                                                        <div className="custom-control custom-switch my-1" onClick={() => {setCategoryFilter("all"); setAdLoading(true)}}>
                                                            <input type="checkbox" value={categoryFilter} checked={categoryFilter === "all"} className="custom-control-input" id="categoryFilterAll" />
                                                            <label className="custom-control-label" htmlFor="categoryFilterAll">All</label>
                                                        </div>
                                                        {
                                                            category.map(
                                                                (cat) =>
                                                                <div key={cat.id} className="custom-control custom-switch my-1" onClick={() => {setCategoryFilter(cat.id); setAdLoading(true)}}>
                                                                    <input type="checkbox" value={categoryFilter} checked={categoryFilter === cat.id} className="custom-control-input" id={`categoryFilter${cat.id}`} />
                                                                    <label className="custom-control-label" htmlFor={`categoryFilter${cat.id}`}>{cat.name}</label>
                                                                </div>
                                                            )
                                                        }
                                                    </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>



                        

                        <div className="row mb-3 ml-auto">
                            <div className="container">
                                <div className="row mb-1">
                                    <div className="col-12">
                                       <h6>Location</h6> 
                                    </div>
                                </div>


                            <div className="row ml-auto">
                                <div className="col-12 ">
                                    <input type="text" class="form-control" placeholder="Search" name = "" ref = {ref} id = "" />
                                </div>
                            </div>

                            </div>
                        </div>    



                    </div>

                </div>
                <div className="col-md-9">
                {
                    adLoading
                        ?   
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="spinner-border" style={{"width" : "4rem"  , "height" : "4rem"}} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        :
                            ads.length === 0
                                ?
                                    <>
                                        <div className="row d-flex justify-content-center align-itmes-center">
                                            <Empty /> 
                                        </div>
                                        <span className="d-flex justify-content-center align-items-center">No Ads</span>
                                    </>
                                :
                                    ads.map((ad) => (
                                        <CustomItemCard key={ad.id} data={ad} />
                                        )
                                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Search
