import axios from 'axios';
import { GLOBAL_URL } from './Constant';
import  alertMessage from './AlertProvider'





export async function postNewsLetter(email) {
    await axios.post(`${GLOBAL_URL}/news-letter`, {
        "email": email
    }).then(res =>alertMessage({html: <p> Request Of NewsLetter Sent </p>, icon:"success"}) ).catch(async (error) => alertMessage(<p> OOPs Some Problem Occur </p>))
}



