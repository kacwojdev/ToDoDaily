import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import EditableTitle from './EditableTitle'
import { EditBtn, ListWrapper, AddNewTaskBtn, ListContent, ListTitleWrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons'
import { nanoid } from 'nanoid'
import Task from '../Task'
import { connect } from 'react-redux'

const List = ({ listId, isSelected, setContextMenuCoords }) => {
    const listEditBtnRef = useRef()

    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    const showTaskContextModal = event => {
        setContextMenuCoords({
            x: listEditBtnRef.current.getBoundingClientRect().x,
            y: listEditBtnRef.current.getBoundingClientRect().y
        })
    }

    const addNewTaks = () => {
        setTasks([...tasks, nanoid()])
    }

    return (
        <ListWrapper active={isSelected}>
            <ListTitleWrapper>
                <EditableTitle title={'Dodaj tytuł listy'} />
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
    setContextMenuCoords: coords => dispatch({ type: 'SET_CONTEXT_MENU_COORDS', coords })
})

const mapStateToProps = state => ({
    contextMenuCoords: state.utils.contextMenuCoords
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
