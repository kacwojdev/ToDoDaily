import React, { useState, useEffect } from 'react'
import { removeElementAtIndex } from '../../helpers'
import styled from 'styled-components'

import SingleTask from '../SingleTask/index'


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
        console.log('use effect', defaultTasks, type)
        let taskDataFromLocaleStorage = [defaultTasks]
        JSON.parse(localStorage.getItem(`tasks-${type}`)) != null ? taskDataFromLocaleStorage = JSON.parse(localStorage.getItem(`tasks-${type}`)) : taskDataFromLocaleStorage = defaultTasks
        setListOfTasks(taskDataFromLocaleStorage)
        // eslint-disable-next-line
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

export default TasksBox