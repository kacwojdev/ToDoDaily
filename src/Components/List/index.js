import { useState } from 'react'
import EditableTitle from './EditableTitle'
import { EditBtn, ListWrapper, AddNewTaskBtn, ListContent, ListTitleWrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { nanoid } from 'nanoid'
import Task from '../Task'
import ContextMenu from '../ContextMenu'

const List = ({ listId, isSelected }) => {
    const [showContextMenu, setShowContextMenu] = useState(false)
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    const showTaskContextModal = event => {
        setShowContextMenu(!showContextMenu)
    }

    const addNewTaks = () => {
        setTasks([...tasks, nanoid()])
    }

    return (
        <ListWrapper active={isSelected}>
            <ListTitleWrapper>
                <EditableTitle title={'Dodaj tytuł listy'} />
                <EditBtn onClick={showTaskContextModal}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                    <ContextMenu show={showContextMenu} />
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

export default List
