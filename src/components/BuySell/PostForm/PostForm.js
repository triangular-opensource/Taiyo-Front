import axios from 'axios'
import { getDownloadURL, ref as storeRef, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { storage } from '../../../config/Firebase'
import useToken from '../../../config/useToken'
import alertMessage from '../../../global/AlertProvider'
import { GLOBAL_URL, MAX_AD_IMAGE_UPLOAD } from '../../../global/Constant'
import "./PostForm.css"
import Popup from '../../Customs/Popup/Popup';
import TermAndConditions from '../../Policiy/TermsAndConditions/TermAndConditions';
import ReactGoogleAutocomplete, { usePlacesWidget } from "react-google-autocomplete";

const PostForm = () => {

    const {getToken} = useToken();

    const history = useHistory()

    window.onoffline = () => {
        alertMessage("OOps internet gone!!!");
    }
    window.ononline = () => {
        alertMessage("Connection Restored👍");
    }

    const [postData, setPostData] = useState({
        category: "",
        product: "",
        buy_or_sell: "",
        product_name: "",
        basic_price: "",
        description: "",
        quantity: "",
        grade: "",
        quality: "",
        temper: "",
        specification_number: "",
        coating_in_gsm: "",
        dimensions: "",
        color: "",
        image_1_link: "",
        image_2_link: "",
        image_3_link: "",
        image_4_link: "",
        excel_file_link: "",
        pdf_file_link: "",
        name: "",
        number: "",
        address: "",
        latitude: "",
        longitude: "",
        location: "",
        t_and_c: false
    })
    const [imageLinks, setImageLinks] = useState([])
    const [excel, setExcel] = useState(null)
    const [pdfFile, setPdfFile] = useState(null)
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [loading, setLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(null)
    const [excelLoading, setExcelLoading] = useState(null)
    const [pdfLoading, setPdfLoading] = useState(null)
    const [place, setPlace] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState({
        quality: true,
        temper: true,
        dimensions: true,
        grade: true,
        specification_number: true,
        quantity: true,
        coating_in_gsm: true,
        color: true
    })

    useEffect(() => {
        axios.get(`${GLOBAL_URL}/category`)
        .then(async (response) => {
            setCategory(response.data.data)
            })
            .catch(async (error) => setError(error))
    }, [])

    const getProduct = async (category) => {
        await axios.get(`${GLOBAL_URL}/product/${category}`)
        .then(async (response) => {
            setProducts(await response.data.data)
        })
        .catch(async(error) => setError(error))
    }

    const fileUpload = async (file, name) => {
        console.log("uploading")
        const storageRef = storeRef(storage, `Advertisements/${postData.basic_price}_${postData.description}/${file.name}`)
        await uploadBytes(storageRef, file).then(async (snapshot) => {
            const fileRef = storeRef(storage, `Advertisements/${postData.basic_price}_${postData.description}/${file.name}`)
            await getDownloadURL(fileRef).then(async (url) => {
                setPostData(postData => ({...postData, [name] : url}))
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error)) 
    }

    
    const uploadImages = async (e) => {
        setImageLoading(true);
        const imageList = Array.from(e.target.files)
        if (imageList.length > MAX_AD_IMAGE_UPLOAD) {
            alertMessage("cannot upload more than 4 images!");
            return;
        } else {
            for (let i = 0; i < imageList.length; i++) {
                await fileUpload(e.target.files[i], `image_${i + 1}_link`);
            }
        }
        setImageLoading(false)
    }

    const uploadExcelFile = (e) => {
        setExcelLoading(true)
        console.log("uploading excel file")
        console.log(excel)
        fileUpload(e.target.files[0], 'excel_file_link')
        setExcelLoading(false)
    }

    const uploadPdfFile = (e) => {
        setPdfLoading(true)
        console.log("uploading pdf file")
        console.log(pdfFile)
        fileUpload(e.target.files[0], 'pdf_file_link')
        setPdfLoading(false)
    }

    const savePost = async () => {
        await axios.post(`${GLOBAL_URL}/post-ads`, {
            "product": postData.product,
            "buy_or_sell": postData.buy_or_sell,
            "basic_price": postData.basic_price,
            "product_description": postData.description,
            "excel_file_link": postData?.excel_file_link,
            "pdf_file_link": postData?.pdf_file_link,
            "image_1_link": postData?.image_1_link,
            "image_2_link": postData?.image_2_link,
            "image_3_link": postData?.image_3_link,
            "image_4_link": postData?.image_4_link,
            "quality": postData.quality,
            "dimesions": postData.dimensions,
            "color": postData.color,
            "grade": postData.grade,
            "temper": postData.temper,
            "specification_number": postData.specification_number,
            "quantity": postData.quantity === "" ? 0 : postData.quantity,
            "coating_in_gsm": postData.coating_in_gsm,
            "name": postData.name,
            "mobile_number": postData.number,
            "location": postData.location,
            "business_address": postData.address,
            "latitude" : postData.latitude,
            "longitude" : postData.longitude
        }, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            alertMessage("Ad Posted Succesfully")
            history.push("/search");

        })
        .catch((error) => {
            console.log(error.response)
            alertMessage("Oops some error occured!")
        })
    }

    return (
        <div className="container my-5 auth-bg">

            {/* block PostNavbar */}
            <div className="py-4">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div
                            onClick={() => {setActive1(true);setActive2(false);setActive3(false)}}
                            className={active1 ? "nav-link PostNavbar__pill active" : "nav-link PostNavbar__pill"}
                            style={active1 ? {"background": `rgb(92, 92, 92)`, "color": "white"}: {}}
                        >
                            Ad Information
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div
                            onClick={() => {setActive1(false);setActive2(true);setActive3(false)}}
                            className={
                                !(postData?.category && postData?.product && postData?.buy_or_sell)
                                    ?
                                        "nav-link PostNavbar__pill disabled"
                                    :
                                        active2 && active3
                                            ?
                                                "nav-link PostNavbar__pill active"
                                            :
                                                "nav-link PostNavbar__pill"
                            }
                            style={active2 ? {"background": `rgb(92, 92, 92)`, "color": "white"}: {}}
                        >
                            Ad Details
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div
                            onClick={() => {setActive1(false);setActive2(false);setActive3(true)}}
                            className={
                                ((postData?.category && postData?.product && postData?.buy_or_sell) && ((postData?.basic_price && postData?.description && postData?.quantity && postData?.grade && postData?.quality && postData?.temper && postData?.specification_number && postData?.coating_in_gsm && postData?.dimensions && postData?.image_1_link && imageLoading)))
                                    ?   
                                        active3 && !active1 && !active2
                                            ?
                                                "nav-link PostNavbar__pill active"
                                            :
                                                "nav-link PostNavbar__pill"
                                    : 
                                        "nav-link PostNavbar__pill disabled"
                            }
                            style={active3 ? {"background": `rgb(92, 92, 92)`, "color": "white"}: {}}
                        >
                            User Information
                        </div>
                    </li>
                </ul>
            </div>
            {/* Endblock PostNavbar */}

            {/* Block AdInformation */}
            {
                active1
                    ?
                        <div className='container pb-4'>
                            <div className="row">
                                <div className="col-12 mx-3 pr-5">
                                    <div className="form-group">
                                        <label htmlFor="category">Category <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">Select suitable Category</span></label>
                                        <select name="" value={postData?.category} onChange={(e) => {setPostData({...postData, category: parseInt(e.target.value)}); getProduct(e.target.value)}} id="category" className="form-control">
                                            <option value={""} defaultValue={""} disabled>Choose...</option>
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
                                        <select
                                            name=""
                                            id="category"
                                            value={postData.product}
                                            onChange={async (e) => {
                                                setPostData({...postData, product: e.target.value});
                                                const prod = products.find((prod) => prod.name === e.target.value);
                                                setSelectedProduct({
                                                    ...selectedProduct,
                                                    quality: prod.quality,
                                                    temper: prod.temper,
                                                    dimensions: prod.dimensions,
                                                    grade: prod.grade,
                                                    specification_number: prod.specification_number,
                                                    quantity: prod.quantity,
                                                    coating_in_gsm: prod.coating_in_gsm,
                                                    color: prod.coating_in_gsm
                                                });
                                            }}
                                            className="form-control"
                                        >
                                            <option value={""} selected disabled>Choose...</option>
                                            {
                                                products.map(prod => (
                                                    <option key={prod.id} value={prod.name}>{prod.name}</option>
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
                                        <select className='form-control' value={postData.buy_or_sell} onChange={e => {setPostData({...postData, buy_or_sell: e.target.value})}} name="" id="buySell">
                                            <option value={""} defaultValue={""} disabled>Choose...</option>
                                            <option value="Buy">Buy</option>
                                            <option value="Sell">Sell</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <span onClick={() => {setActive1(false);setActive2(true);setActive3(false)}}>
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
                    :
                        <></>
            }
            {/* Endblock AdInformation */}

            {/* Block AdDetail */}
            {
                active2
                    ?
                        <div className='container pb-4'>
                            <div className="row">
                                <div className="col-12 mx-3 pr-5">
                                    <div className="form-group">
                                        <label htmlFor="basicPrice">Basic Price <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">(₹ per metric ton. GST extra as applicable)</span></label>
                                        <input type="text" name="" min={4} minLength={4} max={6} maxLength={6} id="basicPrice" value={postData.basic_price} onChange={e => setPostData({...postData, basic_price: e.target.value})} placeholder='Basic Price' className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mx-3 pr-5">
                                    <div className="form-group">
                                        <label htmlFor="prodDesc">Product Description <span style={{"fontSize":"smaller"}} className="ml-2 text-muted">Enter long description</span></label>
                                        <textarea name="" id="" cols="30" value={postData.description} onChange={e => setPostData({...postData, description: e.target.value})} rows="6" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row px-3">
                                {
                                    selectedProduct.quantity
                                        ?
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="quantity">Quantity (MT) <span className="text-danger">*</span></label>
                                                    <input type="text" name="" id="quantity" value={postData.quantity} onChange={e => setPostData({...postData, quantity: e.target.value})} placeholder='Quantity' className="form-control" />
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.coating_in_gsm
                                        ?
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="coating_gsm">Coating in GSM <span className="text-danger">*</span></label>
                                                    <input type="text" name="" id="coating_gsm" value={postData.coating_in_gsm} onChange={e => setPostData({...postData, coating_in_gsm: e.target.value})} placeholder='Coating in GSM' className="form-control" />
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.quality
                                        ?
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="quality">Quality <span className="text-danger">*</span></label>
                                                    <select className='form-control' value={postData.quality} onChange={e => setPostData({...postData, quality: e.target.value})} name="" id="quality">
                                                        <option value=""selected disabled>Choose...</option>
                                                        <option value="Prime">Prime</option>
                                                        <option value="Defective">Defective</option>
                                                    </select>
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.temper
                                        ?
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="temper">Temper <span className="text-danger">*</span></label>
                                                    <select className='form-control' value={postData.temper} onChange={e => setPostData({...postData, temper: e.target.value})} name="" id="temper">
                                                        <option value=""selected disabled>Choose...</option>
                                                        <option value="Hard">Hard</option>
                                                        <option value="Soft">Soft</option>
                                                    </select>
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.grade
                                        ?
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="grad-spec">Grade <span className="text-danger">*</span></label>
                                                    <input type="text" name="" id="grade" value={postData.grade} onChange={e => setPostData({...postData, grade: e.target.value})} placeholder='Grade' className="form-control" />
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.specification_number
                                        ?
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="specNumber">Specification Number <span className="text-danger">*</span></label>
                                                    <input type="text" name="" id="specNumber" value={postData.specification_number} onChange={e => setPostData({...postData, specification_number: e.target.value})} placeholder='Specification Number' className="form-control" />
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.dimensions
                                        ?
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="dimensions">Dimensions <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">thickness/dia <b>x</b> width <b>x</b> length</span></label>
                                                    <input type="text" name="" id="dimensions" value={postData.dimensions} onChange={e => setPostData({...postData, dimensions: e.target.value})} placeholder='Dimensions' className="form-control" />
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                                {
                                    selectedProduct.color
                                        ?
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="color">Colour <span className="text-danger">*</span></label>
                                                    <input type="text" name="" id="color" value={postData.color} onChange={e => setPostData({...postData, color: e.target.value})} placeholder='Colour' className="form-control" />
                                                </div>
                                            </div>
                                        :
                                            <></>
                                }
                            </div>
                            <div className="row">
                                <div className="col-12 mx-3 pr-5">
                                    <label htmlFor="imageUpload">Upload Photos <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">You can upload a maximum of 4 images. <b>Select all photos in single time. <span className="text-primary">Uploading 1 image is compulsory.</span> </b></span></label>
                                    {
                                        imageLoading === null
                                            ?
                                                <></>
                                                :
                                                    imageLoading === true
                                                        ?
                                                            <div className="d-flex justify-content-center align-items-center mb-2 text-info">
                                                                <span className="mx-2">Uploading Images</span>
                                                                <div className="spinner-grow" role="status">
                                                                    <span className="sr-only">Loading...</span>
                                                                </div>
                                                            </div>
                                                        :
                                                            <div className="d-flex justify-content-center align-items-center mb-2 text-success">
                                                                <span className="mx-2">Images Uploaded</span><i className="icon ion-checkmark-circled"></i>
                                                            </div>
                                    }
                                    <div className="form-group custom-file">
                                        <label htmlFor="imageUpload" className='custom-file-label'>Choose...</label>
                                        <input type="file" accept='.jpeg, .jpg, .png' name="" id="imageUpload" onChange={async (e) => await uploadImages(e)} multiple className="custom-file-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 mx-3 pr-5">
                                    <label htmlFor="excelUpload">Upload Excel File </label>
                                    {
                                        excelLoading === null
                                            ?
                                                <></>
                                            :
                                                excelLoading === true
                                                    ?
                                                        <div className="d-flex justify-content-center align-items-center mb-2 text-info">
                                                            <span className="mx-2">Uploading Excel File</span>
                                                            <div className="spinner-grow" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        </div>
                                                    :
                                                        <div className="d-flex justify-content-center align-items-center mb-2 text-success">
                                                            <span className="mx-2">Excel File Uploaded</span><i className="icon ion-checkmark-circled"></i>
                                                        </div>
                                    }
                                    <div className="form-group custom-file">
                                        <label htmlFor="excelUpload" className='custom-file-label'>Choose...</label>
                                        <input type="file" accept='.xlsx' name="" id="excelUpload" onChange={e => {setExcel(e.target.files[0]); uploadExcelFile(e)}} className="custom-file-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-12 mx-3 pr-5">
                                    <label htmlFor="pdfUpload">Upload Pdf File </label>
                                    {
                                        pdfLoading === null
                                            ?
                                                <></>
                                            :
                                                pdfLoading === true
                                                    ?
                                                        <div className="d-flex justify-content-center align-items-center mb-2 text-info">
                                                            <span className="mx-2">Uploading Pdf File</span>
                                                            <div className="spinner-grow" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        </div>
                                                    :
                                                        <div className="d-flex justify-content-center align-items-center mb-2 text-success">
                                                            <span className="mx-2">Pdf File Uploaded</span><i className="icon ion-checkmark-circled"></i>
                                                        </div>
                                    }
                                    <div className="form-group custom-file">
                                        <label htmlFor="pdfUpload" className='custom-file-label'>Choose...</label>
                                        <input type="file" accept='.pdf' name="" id="pdfUpload" onChange={e => {setPdfFile(e.target.files[0]);uploadPdfFile(e)}} className="custom-file-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <div onClick={()=>{setActive1(false);setActive2(false);setActive3(true)}}>
                                    <button
                                        style={{
                                            "cursor": !(
                                                postData.basic_price &&
                                                postData.description &&
                                                (selectedProduct.quantity ? postData.quantity : true) &&
                                                (selectedProduct.grade ? postData.grade : true) &&
                                                (selectedProduct.quality ? postData.quality : true) &&
                                                (selectedProduct.temper ? postData.temper : true) &&
                                                (selectedProduct.specification_number ? postData.specification_number : true) &&
                                                (selectedProduct.coating_in_gsm ? postData.coating_in_gsm : true) &&
                                                (selectedProduct.dimensions ? postData.dimensions : true) &&
                                                postData.image_1_link
                                            ) ? "not-allowed" : "pointer"
                                        }}
                                        disabled={
                                            !(
                                                postData.basic_price &&
                                                postData.description &&
                                                (selectedProduct.quantity ? postData.quantity : true) &&
                                                (selectedProduct.grade ? postData.grade : true) &&
                                                (selectedProduct.quality ? postData.quality : true) &&
                                                (selectedProduct.temper ? postData.temper : true) &&
                                                (selectedProduct.specification_number ? postData.specification_number : true) &&
                                                (selectedProduct.coating_in_gsm ? postData.coating_in_gsm : true) &&
                                                (selectedProduct.dimensions ? postData.dimensions : true) &&
                                                postData.image_1_link
                                            )
                                        }
                                        className="btn btn-primary float-right mx-3"
                                    >
                                        Next
                                    </button>
                                </div>
                                <div
                                    onClick={() => {setActive1(true);setActive2(false);setActive3(false)}}
                                    className="btn btn-primary float-right">Previous</div>
                                </div>
                            </div>
                        </div>
                    :
                        <></>
            }
            {/* Endblock AdDetail */}

            {/* Block UserInformation */}
            {
                active3
                    ?
                        <div className='container pb-4'>
                            <div className="row mx-2">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="authorCity">
                                            Location <span className="text-danger">*</span>
                                        </label>
                                        {/* <input type="text" name="" ref={ref} id="" placeholder='Location' class="form-control" /> */}
                                        <ReactGoogleAutocomplete
                                            apiKey="AIzaSyCDemNBz_ZjM1jrBq6WVMTYsPDFm1vX-uM"
                                            onPlaceSelected={(place) => {
                                                let x = "" ;
                                                place.address_components.map(dat => (
                                                    x = x + dat.long_name + " ,"
                                                ))
                                                x = x.slice(0,x.length-2)
                                                console.log(x)
                                                console.log("alankar")
                                                setPostData({
                                                    ...postData,
                                                    latitude: place.geometry.location.lat(),
                                                    longitude: place.geometry.location.lng(),
                                                    location: x
                                                })
                                            }
                                        }
                                        className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-2">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="authorName">Your Name <span className="text-danger">*</span></label>
                                        <input type="text" name="" value={postData.name} onChange={e => setPostData({...postData, name: e.target.value})} placeholder='Your Name' id="authorName" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="authorMobile">Mobile Number <span className="text-danger">*</span></label>
                                        <input type="text" name="" max={10} maxLength={10} value={postData.number} onChange={e => setPostData({...postData, number: e.target.value})} placeholder='Mobile Number' id="authorMobile" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-2">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="authorAddress">Business Address <span className="text-danger">*</span></label>
                                        <input type="text" name=""  value={postData.address} onChange={e => setPostData({...postData, address: e.target.value})} placeholder='Business Address' id="authorAddress" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-2">
                                <div className="col-12">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" value={postData.t_and_c} onChange={e => setPostData({...postData, t_and_c: e.target.checked})} name="" id="adTerms" className="custom-control-input" />
                                            <label htmlFor="adTerms" className="custom-control-label">
                                                I agree to 
                                            </label>
                                            <span className="text-primary pl-1" style={{"cursor": "pointer"}} data-target="#tncModal" data-toggle="modal">Terms & Conditions</span>
                                        </div>
                                    </div>
                                </div>
                                <Popup
                                    target="tncModal"
                                    title="Terms and Conditions"
                                    content={
                                        <>
                                            <TermAndConditions />
                                        </>
                                    }
                                />
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className="btn btn-success float-right mx-3"
                                        onClick={() => savePost()}
                                    >
                                        Submit
                                    </div>
                                    <div
                                        onClick={() => {setActive1(false);setActive2(true);setActive3(false)}} 
                                        className="btn btn-primary float-right"
                                    >
                                        Previous
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                        <></>
            }
            {/* Endblock UserInformation */}
        </div>
    )
}

export default PostForm







    
