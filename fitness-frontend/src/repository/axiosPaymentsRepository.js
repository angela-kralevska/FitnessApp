import axios from '../custom-axios/axios.js'
import qs from 'qs'

const PaymentsService = {
    fetchPayments: () => {
        return axios.get("/api/payments");
    },
    fetchPaymentsPaged: (page, pageSize) => {
        return axios.get("/api/payments", {
            params: {
                'page': page, 'page-size': pageSize
            }
        })
    },
    createPayment: (payment) => {
        const data = {
            ...payment
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/payments",formParams
        )
    },
    
    deletePayment: (paymentId) => {
        return axios.delete(`/api/payments/${paymentId}`);
    },
    

}

export default PaymentsService;
