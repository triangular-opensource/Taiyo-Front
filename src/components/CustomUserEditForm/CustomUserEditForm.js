import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInputField/CustomInput'
import CustomText from '../CustomText/CustomText'

import './CustomUserEditForm.css'

function CustomUserEditForm (){
    const style={
        color:'#282d32',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
    
    return (
    <div className="container">
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
<div className="card h-100 ">
    
	<div className="card-body">
        <div className="aParent">
            <div className="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="user__image"/>                              
	        </div>
            <h6 className="mt-2 text-primary">Kartikeya Sharma</h6>
        </div>
        
	<div className="row gutters">
		<div className="mt-4 mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <CustomText name="Personal Details" weight="bold" size="large" color="white"/>
		</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="Full Name" weight="light" size="large" color="white"/>
					<CustomInput/>
			</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="Email" weight="light" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="Phone No." weight="light" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
			< div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
                <CustomText name="Type" weight="light" size="large" color="white"/>
			</div>
            <CustomInput/>
			</div>
		</div>
		<div className="row gutters">
			<div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <CustomText name="ADDRESS" weight="bold" size="large" color="white"/>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="Street" weight="light" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="City" weight="light" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="State" weight="light" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
                <CustomText name="Zip Code" weight="light" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="mt-3 mb-2">
					<CustomText name="GST ID" weight="bold" size="large" color="white"/>
					<CustomInput/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right" >
					<CustomButton data={"Update"} style={style}/>	
				</div>
			</div>
		</div>
        
	
</div>
</div>
</div>
</div>
    )
}

export default CustomUserEditForm
