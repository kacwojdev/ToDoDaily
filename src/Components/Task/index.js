import { TaskBox, TaskContent } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Task = () => {
    return (
        <TaskBox>
            <button>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <TaskContent>
                <h6>Marchewka</h6>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </TaskContent>
        </TaskBox>
    )
}

export default Task
