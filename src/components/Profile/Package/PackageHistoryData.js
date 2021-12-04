import React from 'react'

const PackageHistoryData = () => {
    return (
        <div className="container profileData__container bg-light mb-5 pb-1">
            <h6>Packages Purchase History</h6>
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Order#</th>
                            <th scope="col">Package(s)</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Order Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">2323</td>
                            <td className="">Basic</td>
                            <td className=""><span className="badge badge-secondary">Pending Payment</span></td>
                            <td className="">November 25, 2021</td>
                            <td className="">300.00</td>
                        </tr>
                        <tr>
                            <td className="">1213</td>
                            <td className="">Basic</td>
                            <td className=""><span className="badge badge-danger">Cancelled</span></td>
                            <td className="">November 25, 2021</td>
                            <td className="">300.00</td>
                        </tr>
                        <tr>
                            <td className="">6763</td>
                            <td className="">Premium</td>
                            <td className=""><span className="badge badge-success">Success</span></td>
                            <td className="">November 21, 2021</td>
                            <td className="">300.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PackageHistoryData
