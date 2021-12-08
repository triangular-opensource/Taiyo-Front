import axios from 'axios';
import { GLOBAL_URL } from './Constant';
import  alertFire from './AlertProvider'

export async function postContact(name, email, subject , message ) 
{   
    await axios.post(`${GLOBAL_URL}/contact`, {
            "name" :  name ,
            "email" : email ,
            "subject" : subject ,
            "message" : message
        }).then(async (response) => {
            alertFire(<p> Thankyou for Contacting Us , We Will Get Back To You</p>);
    }).catch(async (error) =>alertFire(<p> OOps Some Problem Occur </p>) )
}

export async function postNewsLetter(email) {
    await axios.post(`${GLOBAL_URL}/news-letter`, {
        "email": email
    }).then(res =>alertFire(<p> Request Of NewsLetter Sent </p>) ).catch(async (error) =>alertFire(<p> OOPs Some Problem Occur </p>))
}

