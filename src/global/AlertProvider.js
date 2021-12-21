import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default async function alertMessage(message)
{
    return await MySwal.fire(message)
}

export const ConfirmMessage = async (message, url) => {
    const history = useHistory()
    return await MySwal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I am Sure!'
    }).then((result) => {
        if (result.isConfirmed) {
            history.push(url)
        }
    })
}
