import { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { EditBtn, DoneBtn, TaskBox, TaskContent } from './style'
import EditableDescription from './EditableDescription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Task = ({ description, setContextMenuCoords }) => {
    const optionButtonRef = useRef()
    const [done, setDone] = useState(false)

    const showTaskContextModal = event => {
        setContextMenuCoords({
            x: optionButtonRef.current.getBoundingClientRect().x,
            y: optionButtonRef.current.getBoundingClientRect().y
        })
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
                </EditBtn>
            </TaskContent>
        </TaskBox>
    )
}

const mapStateToProps = state => ({
    contextMenuCoords: state.utils.contextMenuCoords
})

const mapDispatchToProps = dispatch => ({
    setContextMenuCoords: coords => dispatch({ type: 'SET_CONTEXT_MENU_COORDS', coords })
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
