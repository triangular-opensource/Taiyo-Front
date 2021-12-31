import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GLOBAL_URL } from '../../../global/Constant'
import useToken from "../../../config/useToken"

const PackageHistoryData = () => {

    const {getToken} = useToken()
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${GLOBAL_URL}/auth/payment-history`, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Content-Type": "application/json"
            }
        }).then(async (response) => {
            setPayments(await response.data.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error.response)
        })
    }, [])

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
                        {
                            loading
                                ?
                                    <tr>
                                        <td colSpan={5}>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                :
                                    payments.map(payment => {
                                        const payment_date = new Date(payment.timestamp);
                                        return (
                                            <tr key={payment.id}>
                                                <td className="text-center">#{payment.id}</td>
                                                <td className="text-center">{payment.package}</td>
                                                <td className="text-center">{payment.paid ?<span className="badge badge-success">Success</span>: <span className="badge badge-danger">Failure</span>}</td>
                                                <td className="text-center">
                                                    {`${payment_date.getHours()}:${payment_date.getMinutes()} ${payment_date.getDate()}-${payment_date.getMonth() + 1}-${payment_date.getFullYear()}`}
                                                </td>
                                                <td className="text-center">{payment.amount}</td>
                                            </tr>
                                    )})
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PackageHistoryData
