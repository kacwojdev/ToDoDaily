import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { removeElementAtIndex } from '../../helpers'
import styled from 'styled-components'

import SingleTask from '../SingleTask/index'


const TasksContainer = styled.div`
    margin: 50px;
    padding: 25px;
    background: #222a38;
    border-radius: 25px;
`

const TasksContainerBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: baseline;
`

const TasksCategoryName = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 50px;
    border-bottom: 2px solid rgb(22,28,37);
`

const NewTaskButton = styled.button`
    height: max-content;
    width: 200px;
    margin-bottom: 40px;
    border: 2px solid rgb(29,48,69);
    border-radius: 20px;
    padding: 5px 15px;
    color: rgb(29,48,69);
    box-shadow: 0px 5px 0 rgb(22,28,37);
    transition: .1s ease-in;

    &:hover {
        transform: translate(0, 10px);
        box-shadow: 0px 0px 0 rgb(112, 181, 131);
        border-color: rgb(112, 181, 131);
        color: rgb(112, 181, 131);
        cursor: pointer;
    }
`

const TasksBox = ({title, type}) => {

    const defaultTasks = [{
        title: "Your favourite title goes here",
        desc: "Create yours first task here. Edit this or create the new one :D",
        date: new Date().toLocaleTimeString(),
    }]

    const [listOfTasks, setListOfTasks] = useState([])
    const {groupId} = useParams()

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
            <TasksCategoryName>{groupId}</TasksCategoryName>
            <NewTaskButton onClick={() => createNewTask()}>
                <h3>New task</h3>
            </NewTaskButton>  
            <TasksContainerBody>
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
            </TasksContainerBody>
        </TasksContainer>
    )
}

export default TasksBox