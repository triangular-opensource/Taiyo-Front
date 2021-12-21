import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GLOBAL_URL } from '../../../global/Constant'
import PostNavbar from '../PostNavbar/PostNavbar'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from 'react-router-dom'

const AdInformation = () => {

    const MySwal = withReactContent(Swal)
    const history = useHistory()

    const ConfirmMessage = async (message, url) => {
        return await MySwal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I am Sure!'
        }).then((result) => {
            if (result.isConfirmed) {
                history.push(url)
            }
        })
    }

    const [postData, setPostData] = useState({
        category: null,
        product: null,
        buy_or_sell: ""
    })
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`${GLOBAL_URL}/category`)
        .then(async (response) => {
            setCategory(response.data.data)
            })
            .catch(async (error) => setError(error))
    }, [])

    const setAdInfoData = async () => {
        localStorage.setItem("adInfo", JSON.stringify(postData))
        await ConfirmMessage("Please check this data or you will have to enter these fields again!", "/post-ad/step-2")
    }
    
    const getProduct = async (category) => {
        await axios.get(`${GLOBAL_URL}/product/${category}`)
        .then(async (response) => {
            setProduct(await response.data.data)
        })
        .catch(async(error) => setError(error))
    }

    return (
        <div className="container my-5 auth-bg">
            <PostNavbar active1={true} post={postData} category={"aa"} />
            <div className='container pb-4'>
                <div className="row">
                    <div className="col-12 mx-3 pr-5">
                        <div className="form-group">
                            <label htmlFor="category">Category <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">Select suitable Category</span></label>
                            <select name="" value={postData.category} onChange={(e) => {setPostData({...postData, category: parseInt(e.target.value)}); getProduct(e.target.value)}} id="category" className="form-control">
                                <option value={""} selected={true} disabled>Choose...</option>
                                {
                                    category.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-3 pr-5">
                        <div className="form-group">
                            <label htmlFor="category">Product <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">Select suitable Product</span></label>
                            <select name="" id="category"value={postData.product} onChange={e => setPostData({...postData, product: parseInt(e.target.value)})} className="form-control">
                                <option value={""} selected={true} disabled>Choose...</option>
                                {
                                    product.map(prod => (
                                        <option key={prod.id} value={prod.id}>{prod.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-3 pr-5">
                        <div className="form-group">
                            <label htmlFor="buySell">Want to Buy/Sell <span className="text-danger">*</span></label>
                            <select className='form-control' value={postData.buy_or_sell} onChange={e => setPostData({...postData, buy_or_sell: e.target.value})} name="" id="buySell">
                                <option value=""selected disabled>Choose...</option>
                                <option value="Buy">Buy</option>
                                <option value="Sell">Sell</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span onClick={setAdInfoData}>
                            <button
                                style={{
                                    "cursor": !(postData.category && postData.product && postData.buy_or_sell) ? "not-allowed" : "pointer"
                                }}
                                disabled={!(postData.category && postData.product && postData.buy_or_sell)}
                                className="btn btn-primary float-right mx-3"
                            >
                                Next
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdInformation
