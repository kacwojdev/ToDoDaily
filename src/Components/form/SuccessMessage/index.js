//icons
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//styles
import { Success } from './styles'

const SuccessMessage = ({ message }) => {
    return (
        <Success>
            {message}
            <FontAwesomeIcon icon={faCheck} />
        </Success>
    )
}

export default SuccessMessage
