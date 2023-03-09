// react deps
import { useState, useRef } from 'react'
// redux
import { connect } from 'react-redux'
import { getContextMenuCoords, setContextMenuCoords } from '../../store'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
//styles
import { EditBtn, DoneBtn, TaskBox, TaskContent } from './style'
import EditableDescription from './EditableDescription'

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
    contextMenuCoords: getContextMenuCoords(state)
})

const mapDispatchToProps = dispatch => ({
    setContextMenuCoords: coords => dispatch(setContextMenuCoords({ coords }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
