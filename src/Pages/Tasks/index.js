import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderBar, PageHeader, HeaderBarGroup, GroupLabel, MainContentContainer } from '../../Components/styledComponents'

import SingleTask from '../../Components/SingleTask/index'
import {AddTaskButton} from '../../Components/AddButtons'

const TasksView = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: baseline;
    gap: 18px;
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
                <HeaderBarGroup>
                    <GroupLabel>GROUP / </GroupLabel>
                    <PageHeader>{params.groupId}</PageHeader>
                </HeaderBarGroup>
                <HeaderBarGroup>
                    <AddTaskButton handleCreatingNewTask={() => createNewTask('1')}>
                        + Create new task
                    </AddTaskButton>
                </HeaderBarGroup>
            </HeaderBar>
            <MainContentContainer>
                <TasksView>
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
                </TasksView>
            </MainContentContainer>
        </div>
    )
}

export default Tasks