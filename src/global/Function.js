import axios from 'axios';
import { GLOBAL_URL } from './Constant';
import  alertMessage from './AlertProvider'

export async function postContact(name, email, subject , message ) 
{   
    if(name === "" || subject === "" || message === "")
        return  alertMessage(<p> Please Fill all the fields</p>);


    await axios.post(`${GLOBAL_URL}/contact`, {
            "name" :  name ,
            "email" : email ,
            "subject" : subject ,
            "message" : message
        }).then(async (response) => {
            alertMessage(<p> Thankyou for Contacting Us , We Will Get Back To You</p>);
    }).catch(async (error) =>  alertMessage(<p> OOps Some Problem Occur </p>) )
}




export async function postNewsLetter(email) {
    await axios.post(`${GLOBAL_URL}/news-letter`, {
        "email": email
    }).then(res =>alertMessage({html: <p> Request Of NewsLetter Sent </p>, icon:"success"}) ).catch(async (error) => alertMessage(<p> OOPs Some Problem Occur </p>))
}



