// react dep
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
//redux
import { connect } from 'react-redux'
import { addTask, getContextMenuCoords, setContextMenuCoords, updateTasks } from '../../store'
// firebase
import { updateListTitle, tasksQuery, taskDoc } from '../../firebase'
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
import { setDoc } from 'firebase/firestore'

const List = ({ listId, tasks, title, isSelected, setContextMenuCoords, updateTasks, addTask }) => {
    const listEditBtnRef = useRef()

    const [tasksLoading, setTasksLoading] = useState(true)

    useEffect(() => {
        tasksQuery(listId, setTasksLoading).then(queriedTasks => {
            //updating local state
            // updateTasks(listId, [...queriedTasks])
            if (queriedTasks) {
                console.log('nie ma zadnych zadan na tej liscie')
            }
        })
    }, [])

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

    const addNewTask = () => {
        const newTaskId = `task_${nanoid()}`
        const newTask = {
            title: 'Twoje nowe zadanie',
            id: newTaskId,
            done: false,
            label: null,
            dueTime: null,
            backgroundColor: 'default'
        }
        addTask(listId, newTask)
        setDoc(taskDoc(listId, newTaskId), newTask)
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
                {tasksLoading
                    ? 'Loading'
                    : tasks
                    ? tasks.map(task => <Task description={task.title} />)
                    : 'Nie masz żadnych zadań'}
            </ListContent>
            <AddNewTaskBtn onClick={addNewTask}>
                <FontAwesomeIcon style={{ marginRight: '1rem' }} icon={faPlus} />
                Dodaj nowe zadanie
            </AddNewTaskBtn>
        </ListWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    setContextMenuCoords: (coords, listId, taskId) =>
        dispatch(setContextMenuCoords({ coords, list: listId, task: taskId })),
    updateTasks: (listId, updatedTasks) => dispatch(updateTasks({ listId, updatedTasks })),
    addTask: (listId, newTask) => dispatch(addTask({ listId, newTask }))
})

const mapStateToProps = state => ({
    contextMenuCoords: getContextMenuCoords(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
