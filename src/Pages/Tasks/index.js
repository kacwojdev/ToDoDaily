import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderBar, PageHeader,  } from '../../Components/styledComponents'

import SingleTask from '../../Components/SingleTask/index'
import {AddTaskButton} from '../../Components/AddButtons'

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


const GroupNameLabelBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
`

const GroupLabel = styled.div`
    font-size: .7rem;
    color: rgb(112 112 112);
`

const Tasks = () => {

   
    const [listOfTasks, setListOfTasks] = useState([])
    const params = useParams()

    const createNewTask = id => {
        const newTask = {
            title: "Task title",
            desc: "Task description",
            date: new Date().toLocaleTimeString(),
        }
        setListOfTasks(listOfTasks.concat([newTask]));
    }

    const handleRemoveTask = (taskId) => {
        console.log(taskId)
        const newArray = listOfTasks
        newArray.splice(taskId, 1)
        setListOfTasks([...newArray])
    }

    const handleSavingTask = (taskId, newTaskData) => {
        const newArray = listOfTasks;
        newArray[taskId] = newTaskData;
        setListOfTasks([...newArray])
    }

    return (
        <div>
            <HeaderBar>
                <GroupNameLabelBox>
                    <GroupLabel>GROUP / </GroupLabel>
                    <PageHeader>{params.groupId}</PageHeader>
                </GroupNameLabelBox>
                <AddTaskButton>
                    + Create new task
                </AddTaskButton>
            </HeaderBar>
            <TasksContainer>
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
        </div>
    )
}

export default Tasks