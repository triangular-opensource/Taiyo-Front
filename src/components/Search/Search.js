import {React , useState ,  useEffect } from 'react'
import "./Search.css"
import CustomSearchBar from '../../customComponents/CustomSearchBar/CustomSearchBar'
import CustomItemCard from '../../customComponents/CustomItemCard/CustomItemCard'
import CustomText from '../../customComponents/CustomText/CustomText'
import { GLOBAL_URL } from '../../global/Constant'
import axios from 'axios'
function Search() {

    const [category, setCategory] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSubscription = async () => {
            await axios.get(`${GLOBAL_URL}/category`)
            .then(async (response) => {
                setCategory(response.data.data);
                setLoading(false)
            })
            .catch(async (error) => setError(error))
        }
        getSubscription();
    }, []);
    
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4 search__col">
                    <CustomSearchBar placeholder = "Location" /> 
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className = "row">
                     { category.map((cat) => <div className="auth-bg py-2 px-3 mx-4"> <CustomText name = {cat.name}/> </div> )}
            </div>

            <div className="row mt-4 mx-4">
                <div className="col-md-6">
                    <h4 className="text-center">Buy</h4>
                </div>
                <div className="col-md-6">
                    <h4 className="text-center">Sell</h4>
                </div>
                <div className="col-md-6" style={{maxHeight: "500px", overflowY: "scroll"}}>
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                </div>
                <div className="col-md-6" style={{maxHeight: "500px", overflowY: "scroll"}}>
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                </div>
            </div>
        </div>
    )
}

export default Search
