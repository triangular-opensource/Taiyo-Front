import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export async function alertMessage(message)
{
    return await MySwal.fire(message)
}

export default alertMessage