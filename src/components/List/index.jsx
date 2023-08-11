import { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTask, getContextMenuCoords, setContextMenuCoords, updateTasks } from '../../store'
import { updateListTitle, tasksQuery, taskDoc } from '../../firebase'
import { nanoid } from 'nanoid'
import EditableTitle from './EditableTitle'
import Task from '../Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons'
import { EditBtn, ListWrapper, AddNewTaskBtn, ListContent, ListTitleWrapper } from './style'
import { setDoc } from 'firebase/firestore'

const List = ({ listId, tasks, title, isSelected, setContextMenuCoords, updateTasks, addTask }) => {
    const listEditBtnRef = useRef()

    const [tasksLoading, setTasksLoading] = useState(true)

    useEffect(() => {
        tasksQuery(listId, setTasksLoading).then(queriedTasks => {
            updateTasks(listId, [...queriedTasks])
        })
    }, [])

    const showTaskContextModal = () => {
        if (window.innerWidth > listEditBtnRef.current.getBoundingClientRect().x + 160) {
            setContextMenuCoords(
                {
                    x: listEditBtnRef.current.getBoundingClientRect().x,
                    y: listEditBtnRef.current.getBoundingClientRect().y
                },
                listId,
                null
            )
        } else {
            setContextMenuCoords(
                {
                    x: window.innerWidth - 180,
                    y: listEditBtnRef.current.getBoundingClientRect().y
                },
                listId,
                null
            )
        }
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
                <EditBtn
                    aria-label="Opcje listy"
                    ref={listEditBtnRef}
                    onClick={showTaskContextModal}
                >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </EditBtn>
            </ListTitleWrapper>
            <ListContent>
                {tasksLoading
                    ? 'Loading'
                    : tasks.map(task => (
                          <Task
                              key={task.id}
                              taskId={task.id}
                              listId={listId}
                              description={task.title}
                              isDone={task.done}
                          />
                      ))}
            </ListContent>
            <AddNewTaskBtn aria-label="Dodaj nowe zadanie do listy" onClick={addNewTask}>
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
