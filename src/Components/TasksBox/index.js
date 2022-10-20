import React, { useState, useEffect } from 'react'
import { removeElementAtIndex } from '../../helpers'
import styled from 'styled-components'

import optionsIcon from '../../Assets/options.png'

const TasksContainer = styled.div`
    margin-top: 50px;
    padding: 10px 10px;
    margin-right: 50px;
    background: #222a38;
    border-radius: 25px;
`

const TasksCategoryName = styled.h2`
    color: grey;
`

const NewTaskButton = styled.button`
    width: 100%;
    padding: 10px;
    color: #d5d5d5;
    font-weight: 700;
    background: #579357;
    border: none;
    border-radius: 15px;
    transition: .1s ease-in;

    &:hover {
        background-color: #77bf77;
        color: white;
    }
`

const TasksBox = ({title, type}) => {

    const defaultTasks = [{
        title: "Your favourite title goes here",
        desc: "Create yours first task here. Edit this or create the new one :D",
        date: new Date().toLocaleTimeString(),
    }]

    const [listOfTasks, setListOfTasks] = useState([])

    useEffect(() => {
        console.log('use effect')
        let taskDataFromLocaleStorage = [defaultTasks]
        JSON.parse(localStorage.getItem('tasks-${type}')) == null ? taskDataFromLocaleStorage = JSON.parse(localStorage.getItem(`tasks-${type}`)) : taskDataFromLocaleStorage = defaultTasks
        setListOfTasks(taskDataFromLocaleStorage)
    }, [])

    const createNewTask = () => {
        const newTask = {
            title: "Task title",
            description: "Task description",
            date: new Date().toLocaleTimeString(),
        }
        setListOfTasks(listOfTasks.concat([newTask]));
        localStorage.setItem(`tasks-${type}`, JSON.stringify(listOfTasks))

        console.log("new list of tasks: ", listOfTasks);
    }

    const handleRemoveTask = (taskId) => {

        const newArray = removeElementAtIndex(listOfTasks, taskId)
        setListOfTasks([...newArray])

        localStorage.setItem(`tasks-${type}`, JSON.stringify(listOfTasks))

        console.log('r u sure wanna delete task od id ', taskId, ' ?')
    }

    const handleSavingTask = (taskId, newTaskData) => {
        const newArray = listOfTasks;
        newArray[taskId] = newTaskData;
        setListOfTasks([...newArray])
        localStorage.setItem(`tasks-${type}`, JSON.stringify(listOfTasks));
    }

    return (
        <TasksContainer>
            <TasksCategoryName>{title}</TasksCategoryName>
            {listOfTasks != null ? listOfTasks.map((singleTask, index)  => <SingleTask 
                                                key={index}
                                                dataKey={index}
                                                title={singleTask.title}
                                                description={singleTask.desc}
                                                date={singleTask.date} 
                                                editing={false}
                                                handleRemoveTask={handleRemoveTask}
                                                handleSavingTask={handleSavingTask}
                                                 />) : "Something went wrong with fetching data.."} 
            <NewTaskButton onClick={() => createNewTask()}>New task</NewTaskButton>  
        </TasksContainer>
    )
}

const SingleTaskContainer = styled.div`
    margin: 10px 0;
    padding: 10px;
    background: ${props => props.bgColor};
    color: grey;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    transition: .1s ease-in;

    &:hover {
        background-color:#e5e5e5;
    }
`

const SingleTaskHeader = styled.h3`
    margin: 0;
`

const SingleTaskDescription = styled.p`
    margin: 10px 0;
`

const ActionButton = styled.button`
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 50px;
    background: ${props => props.bgColor};
    color: white;
    transition: .1s ease-in;

    &:hover {
        background: #dfdfdf;
    }
`

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row-reversed;
    justify-content: space-between;
`

const TitleInput = styled.input`
    padding: 5px;
    border: none;
    background: #e5e5e5;
    border-radius: 10px;

    &:hover {
        background:#dbd9d9;
    }

    &:active {
        background:#dbd9d9;
        border: none;
    }
`

const DescTextArea = styled.textarea`
    padding: 5px;
    border: none;
    background: #e5e5e5;
    border-radius: 10px;

    &:hover {
        background:#dbd9d9;
    }

    &:active {
        background:#dbd9d9;
        border: none;
    }
`

const SingleTask = ({dataKey, title, description, date, editing, handleRemoveTask, handleSavingTask}) => {

    const [isEditing, setEditingState] = useState(editing)
    const [taskDesc, setTaskDesc] = useState(description)
    const [taskTitle, setTaskTitle] = useState(title)

    const saveTask = taskId => {
        handleSavingTask(taskId, {title: taskTitle, desc: taskDesc, date: date})
        console.log('saving task with values', {title: taskTitle, desc: taskDesc, date: date})
        setEditingState(false)
    }

    const editTask = () => {
        setEditingState(true)
    }

    const deleteTask = (taskId) => {
        handleRemoveTask(taskId)
    }


    return isEditing ? (
        <SingleTaskContainer bgColor="#e5e5e5">
            <TitleInput value={taskTitle} onChange={event => setTaskTitle(event.target.value)} />
            <DescTextArea value={taskDesc} onChange={event => setTaskDesc(event.target.value)}></DescTextArea>
            <ActionsContainer>
                <span>{date}</span>
                <ActionButton bgColor="#579357" onClick={() => saveTask(dataKey)}>Save</ActionButton>
                <ActionButton bgColor="#b55959" onClick={() => deleteTask(dataKey)}>Delete</ActionButton>
            </ActionsContainer>
        </SingleTaskContainer>
    ) : (
        <SingleTaskContainer bgColor="white">
            <SingleTaskHeader>
                {title}
            </SingleTaskHeader>
            <SingleTaskDescription>
                {description}
            </SingleTaskDescription>
            <ActionsContainer>
                <span>{date}</span>
                <ActionButton bgColor="none" onClick={() => editTask()}>
                    <img src={optionsIcon} alt="Options" />
                </ActionButton>
            </ActionsContainer>
        </SingleTaskContainer>
    )
}

export default TasksBox;