import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInputField/CustomInput'

import './CustomUserEditForm.css'

function CustomUserEditForm (){
    const style={
        color:'#282d32',
    }
    return (
    <div class="container ">
<div class="row gutters ">

<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
<div class="card h-100 ">
    
	<div class="card-body">
    <div class="user-avatar col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                    
				</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
				<h6 class="mb-2 text-primary">Personal Details</h6>

			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Full Name</label>
					<CustomInput/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<CustomInput/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Phone</label>
					<CustomInput/>
				</div>
			</div>
			< div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <label class="form-group">I am</label>
                <div>
                <select >
                    <option value="broker">Broker</option>
                    <option value="dealer">dealer</option>
                </select>
                </div> 

			</div>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Street</label>
					<CustomInput/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="ciTy">City</label>
					<CustomInput/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="sTate">State</label>
					<CustomInput/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="zIp">Zip Code</label>
					<CustomInput/>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="mt-3 mb-2 text-primary">
					<label>GST ID</label>
					<CustomInput/>
				</div>
			</div>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-right" >
					<CustomButton data={"Update"} style={style}/>	
				</div>
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
