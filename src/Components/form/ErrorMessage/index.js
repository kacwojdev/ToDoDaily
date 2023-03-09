//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
// styles
import { Error } from './styles'

const ErrorMessage = ({ message }) => {
    return (
        <Error>
            {message}
            <FontAwesomeIcon icon={faCircleExclamation} />
        </Error>
    )
}

export default ErrorMessage
