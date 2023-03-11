// react deps
import { useRef } from 'react'
// redux
import { connect } from 'react-redux'
import { getAllLists, getContextMenuCoords, setContextMenuCoords, setTaskDone } from '../../store'
//firebse
import { updateTaskDescription } from '../../firebase'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
//styles
import { EditBtn, DoneBtn, TaskBox, TaskContent } from './style'
import EditableDescription from './EditableDescription'
import { updateTaskDone } from '../../firebase'

const Task = ({ description, setContextMenuCoords, listId, taskId, isDone, setTaskDone }) => {
    const optionButtonRef = useRef()

    const showTaskContextModal = event => {
        setContextMenuCoords(
            {
                x: optionButtonRef.current.getBoundingClientRect().x,
                y: optionButtonRef.current.getBoundingClientRect().y
            },
            listId,
            taskId
        )
    }

    const handleTaskStateChange = event => {
        updateTaskDone(listId, taskId, !isDone)
        setTaskDone(listId, taskId, !isDone)
    }

    const saveNewDescription = title => {
        updateTaskDescription(listId, taskId, title)
    }

    return (
        <TaskBox style={{ boxShadow: isDone ? 'none' : '0 0 10px 10px rgb(0 0 0 / 3%)' }}>
            <DoneBtn done={isDone} onClick={handleTaskStateChange}>
                <FontAwesomeIcon icon={faCheck} />
            </DoneBtn>
            <TaskContent>
                <EditableDescription
                    onBlur={saveNewDescription}
                    style={{
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: isDone ? 'grey' : 'black'
                    }}
                    content={description}
                />
                <EditBtn ref={optionButtonRef} onClick={showTaskContextModal}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </EditBtn>
            </TaskContent>
        </TaskBox>
    )
}

const mapStateToProps = state => ({
    contextMenuCoords: getContextMenuCoords(state),
    lists: getAllLists(state)
})

const mapDispatchToProps = dispatch => ({
    setContextMenuCoords: (coords, listId, taskId) =>
        dispatch(setContextMenuCoords({ coords, list: listId, task: taskId })),
    setTaskDone: (listId, taskId, isDone) => dispatch(setTaskDone({ listId, taskId, isDone }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
