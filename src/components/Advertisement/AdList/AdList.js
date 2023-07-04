import React from 'react'

const AdList = () => {
    return (
        <div className="col-md-4 my-2">
            <div className="row no-gutters border bg-white rounded overflow-hidden flex-md-row mb-1 shadow h-md-100 position-relative">
                <div className="col p-3 position-static">
                    <div className="row">
                        <div className="col">
                            <h5 className="float-right badge badge-success p-2 mx-1">Active</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Coated Flat Steel
                        </div>
                        <div className="col-6">
                            GP Galvanized
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            some description
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            price
                        </div>
                        <div className="col-7">
                            some location
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <select id="adStatus" className="form-control">
                                <option selected disabled>Ad Status</option>
                                <option>Active</option>
                                <option>Expired</option>
                                <option>Sold</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5 className="badge badge-secondary p-2 mr-1">Mark Featured</h5>
                            <h5 className="badge badge-secondary p-2 mx-1">Mark Featured</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2">
                            Views
                        </div>
                        <div className="col-7">
                            Timestamp
                        </div>
                        <div className="col-1">
                            X
                        </div>
                        <div className="col-1">
                            E
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdList
