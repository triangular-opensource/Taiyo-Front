export const GLOBAL_URL = "https://taiyoindustries.herokuapp.com/api";
export const MAX_AD_IMAGE_UPLOAD = 4;
export const EMAIL_ERROR = "Please Enter Valid Email."
export const PASSWORD_ERROR = () => { 
    return (
                <ul style = {{    
                    fontSize: 'x-small',
                    color: 'red',
                    fontWeight: '600'
                    }}
                > 
                    <li> It contains at least 8 characters. </li>
                    <li> It contains at least one digit. </li>
                    <li> It contains at least one upper case alphabet. </li>
                    <li> It contains at least one lower case alphabet. </li>
                    <li> It contains at least one special character which includes !@#$%&*()-+=^. </li>
                    <li> It doesn’t contain any white space."  </li>
                </ul>
                )
            }