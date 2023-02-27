import { useState, useRef } from 'react'
import { EditBtn, DoneBtn, TaskBox, TaskContent, OverlayContent } from './style'
import EditableDescription from './EditableDescription'
import ContextMenu from '../ContextMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Task = ({ description }) => {
    const optionButtonRef = useRef()
    const [showContextMenu, setShowContextMenu] = useState(false)
    const [done, setDone] = useState(false)

    const showTaskContextModal = event => {
        setShowContextMenu(!showContextMenu)
    }

    const setTaskDone = event => {
        console.log('done')
        setDone(!done)
    }

    return (
        <TaskBox style={{ boxShadow: done ? 'none' : '0 0 10px 10px rgb(0 0 0 / 3%)' }}>
            <DoneBtn done={done} onClick={setTaskDone}>
                <FontAwesomeIcon icon={faCheck} />
            </DoneBtn>
            <TaskContent>
                <EditableDescription
                    style={{
                        textDecoration: done ? 'line-through' : 'none',
                        color: done ? 'grey' : 'black'
                    }}
                    content={description}
                />
                <EditBtn ref={optionButtonRef} onClick={showTaskContextModal}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                    <ContextMenu show={showContextMenu} />
                </EditBtn>
            </TaskContent>
        </TaskBox>
    )
}

export default Task
