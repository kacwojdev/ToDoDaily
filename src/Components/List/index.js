// react dep
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
//ids
import { nanoid } from 'nanoid'
//components
import EditableTitle from './EditableTitle'
import Task from '../Task'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons'

//styles
import { EditBtn, ListWrapper, AddNewTaskBtn, ListContent, ListTitleWrapper } from './style'
import { updateListTitle } from '../../firebase'

const List = ({ listId, title, isSelected, setContextMenuCoords }) => {
    const listEditBtnRef = useRef()

    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {})

    const showTaskContextModal = event => {
        setContextMenuCoords(
            {
                x: listEditBtnRef.current.getBoundingClientRect().x,
                y: listEditBtnRef.current.getBoundingClientRect().y
            },
            listId,
            null
        )
    }

    const addNewTaks = () => {
        setTasks([...tasks, nanoid()])
    }

    const saveNewTitle = title => {
        updateListTitle(listId, title)
    }

    return (
        <ListWrapper active={isSelected}>
            <ListTitleWrapper>
                <EditableTitle onBlur={saveNewTitle} title={title} />
                <EditBtn ref={listEditBtnRef} onClick={showTaskContextModal}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </EditBtn>
            </ListTitleWrapper>
            <ListContent>
                {tasks.map(task => (
                    <Task description="Dodaj opis do zadania." />
                ))}
            </ListContent>
            <AddNewTaskBtn onClick={addNewTaks}>
                <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faPlus} />
                Dodaj nowe zadanie
            </AddNewTaskBtn>
        </ListWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    setContextMenuCoords: (coords, listId, taskId) =>
        dispatch({ type: 'SET_CONTEXT_MENU_COORDS', coords, list: listId, task: taskId })
})

const mapStateToProps = state => ({
    contextMenuCoords: state.utils.contextMenuCoords
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
