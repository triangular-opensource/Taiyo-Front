import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MAX_AD_IMAGE_UPLOAD } from '../../../global/Constant'
import PostNavbar from '../PostNavbar/PostNavbar';
import alertMessage from '../../../global/AlertProvider';
import { useHistory } from 'react-router-dom';
import { storage } from '../../../config/Firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const AdDetails = () => {

    const history = useHistory()

    const [postData, setPostData] = useState({})
    const [images, setImages] = useState([])
    const [excel, setExcel] = useState("")
    const [pdf, setPdf] = useState("")
    const [pdfFile, setPdfFile] = useState(null)
    const data = JSON.parse(localStorage.getItem("adDetail")) ? JSON.parse(localStorage.getItem("adDetail")) : false 

    const fileUpload = async () => {
        const storageRef = ref(storage, `Users/ProfilePics`)
        await uploadBytes(storageRef, pdfFile).then(async (snapshot) => {
            const imageRef = ref(storage, `Users/ProfilePics`)
            await getDownloadURL(imageRef).then((url) => {
                setExcel(url);
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
    }

    const uploadImages = (e) => {
        setImages(Array.from(e.target.files))
        if (images.length > MAX_AD_IMAGE_UPLOAD) {
            e.preventDefault();
            alertMessage("cannot upload more than 4 images!");
            return;
        }
    }
    
    useEffect(() => {
        const {category, product, buy_or_sell} = JSON.parse(localStorage.getItem("adInfo"));
        if (! (category && product && buy_or_sell)) {
            history.push("/post-ad/step-1")
        }
    }, [history])

    const setAdDetailData = () => {
        localStorage.setItem("adDetail", JSON.stringify(postData))
    }


    return (
        <div className="container my-5 auth-bg">
            <PostNavbar active2={true} post2={postData} />
            <div className='container pb-4'>
                <div className="row">
                    <div className="col-12 mx-3 pr-5">
                        <div className="form-group">
                            <label htmlFor="basicPrice">Basic Price <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">(₹ per metric ton. GST extra as applicable)</span></label>
                            <input type="text" name="" id="basicPrice" value={data.basic_price ? data.basic_price : postData.basic_price} onChange={e => setPostData({...postData, basic_price: e.target.value})} placeholder='Basic Price' className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-3 pr-5">
                        <div className="form-group">
                            <label htmlFor="prodDesc">Product Description <span style={{"fontSize":"smaller"}} className="ml-2 text-muted">Enter long description</span></label>
                            <textarea name="" id="" cols="30" value={data.description ? data.description : postData.description} onChange={e => setPostData({...postData, description: e.target.value})} rows="6" className="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity (MT) <span className="text-danger">*</span></label>
                            <input type="text" name="" id="quantity" value={data.quantity ? data.quantity : postData.quantity} onChange={e => setPostData({...postData, quantity: e.target.value})} placeholder='Quantity' className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="grad-spec">Grad/Spec <span className="text-danger">*</span></label>
                            <input type="text" name="" id="grad-spec" value={data.grad_or_spec ? data.grad_or_spec : postData.grad_or_spec} onChange={e => setPostData({...postData, grad_or_spec: e.target.value})} placeholder='Grad/Spec' className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="quality">Quality <span className="text-danger">*</span></label>
                            <select className='form-control' value={data.quality ? data.quality : postData.quality} onChange={e => setPostData({...postData, quality: e.target.value})} name="" id="quality">
                                <option value=""selected disabled>Choose...</option>
                                <option value="Prime">Prime</option>
                                <option value="Defective">Defective</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="temper">Temper <span className="text-danger">*</span></label>
                            <select className='form-control' value={data.temper ? data.temper : postData.temper} onChange={e => setPostData({...postData, temper: e.target.value})} name="" id="temper">
                                <option value=""selected disabled>Choose...</option>
                                <option value="Hard">Hard</option>
                                <option value="Soft">Soft</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="specNumber">Specification Number <span className="text-danger">*</span></label>
                            <input type="text" name="" id="specNumber" value={data.specification_number ? data.specification_number : postData.specification_number} onChange={e => setPostData({...postData, specification_number: e.target.value})} placeholder='Specification Number' className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="coating_gsm">Coating in GSM <span className="text-danger">*</span></label>
                            <input type="text" name="" id="coating_gsm" value={data.coating_in_gsm ? data.coating_in_gsm : postData.coating_in_gsm} onChange={e => setPostData({...postData, coating_in_gsm: e.target.value})} placeholder='Coating in GSM' className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="thickness">Thickness <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">(in mm)</span></label>
                            <input type="text" name="" id="thickness" value={data.thickness ? data.thickness : postData.thickness} onChange={e => setPostData({...postData, thickness: parseFloat(e.target.value)})} placeholder='Thickness' className="form-control" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="width">Width <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">(in mm)</span></label>
                            <input type="text" name="" id="width" value={data.width ? data.width : postData.width} onChange={e => setPostData({...postData, width: parseFloat(e.target.value)})} placeholder='Width' className="form-control" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="length">Length <span className="text-danger">*</span><span style={{"fontSize":"smaller"}} className="ml-2 text-muted">(in mm)</span></label>
                            <input type="text" name="" id="length" value={data.length ? data.length : postData.length} onChange={e => setPostData({...postData, length: parseFloat(e.target.value)})} placeholder='Length' className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-3 pr-5">
                        <label htmlFor="imageUpload">Upload Photos <span style={{"fontSize":"smaller"}} className="ml-2 text-muted">You can upload a maximum of 4 images. <b>Select all photos in single time.</b></span></label>
                        <div className="form-group custom-file">
                            <label htmlFor="imageUpload" className='custom-file-label'>Choose...</label>
                            <input type="file" accept='.jpeg, .jpg, .png' name="" id="imageUpload" onChange={e => uploadImages(e)} multiple className="custom-file-input" />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 mx-3 pr-5">
                        <label htmlFor="excelUpload">Upload Excel File </label>
                        <div className="form-group custom-file">
                            <label htmlFor="excelUpload" className='custom-file-label'>Choose...</label>
                            <input type="file" accept='.xlsx' name="" id="excelUpload" onChange={e => uploadImages(e)} className="custom-file-input" />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 mx-3 pr-5">
                        <label htmlFor="pdfUpload">Upload Pdf File </label>
                        <div className="form-group custom-file">
                            <label htmlFor="pdfUpload" className='custom-file-label'>Choose...</label>
                            <input type="file" accept='.pdf' name="" id="pdfUpload" onChange={e => uploadImages(e)} className="custom-file-input" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <NavLink onClick={setAdDetailData} to="/post-ad/step-3">
                        <button
                            style={{
                                "cursor": !(postData.basic_price && postData.description && postData.quantity && postData.grad_or_spec && postData.quality && postData.temper && postData.specification_number && postData.coating_in_gsm && postData.thickness && postData.width &&postData.length) ? "not-allowed" : "pointer"
                            }}
                            disabled={!(postData.basic_price && postData.description && postData.quantity && postData.grad_or_spec && postData.quality && postData.temper && postData.specification_number && postData.coating_in_gsm && postData.thickness && postData.width &&postData.length)}
                            className="btn btn-primary float-right mx-3"
                        >
                            Next
                        </button>
                    </NavLink>
                    <NavLink
                        className="btn btn-primary float-right" to="/post-ad/step-1">Previous</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdDetails
