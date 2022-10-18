import React, { useState, useEffect } from 'react'
import { removeElementAtIndex } from '../../helpers'
import styled from 'styled-components'

const TasksBox = ({title, type}) => {

    const TasksContainer = styled.div`
        padding: 10px;
        border: 2px solid #262626;
    `

    const TasksCategoryName = styled.h2`
        color: grey;
    `

    const NewTaskButton = styled.button`
        padding: 25px;
        color: white;
        background: green;
        border: none;
        border-radius: 25px;
    `

    const defaultTasks = [{
        title: "Lorem",
        desc: "Lorem ipsum dolor sit amet. qafasdf 2  awsfaef 2 2 ",
        date: new Date().toLocaleTimeString(),
    },
    {
        title: "Lorem 2",
        desc: "Lorem ipsum dolor sit amet. asd q we r23 2 23 2 af a",
        date: new Date().toLocaleTimeString(),
    },
    {
        title: "Lorem 3",
        desc: "Lorem ipsum dolor sit amet. asdf wewq sad fqwe fqw ",
        date: new Date().toLocaleTimeString(),
    },
    {
        title: "Lorem 4",
        desc: "Lorem ipsum dolor sit amet. asdfas sadf ",
        date: new Date().toLocaleTimeString(),
    }]
    localStorage.setItem(`tasks-${type}`,JSON.stringify(defaultTasks))
    const taskDataFromLocaleStorage = JSON.parse(localStorage.getItem(`tasks-${type}`))

    const [listOfTasks, setListOfTasks] = useState(taskDataFromLocaleStorage)
    const [num, increment] = useState(0);

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
        setListOfTasks(newArray)
        increment(num+1)
        localStorage.setItem(`tasks-${type}`, JSON.stringify(listOfTasks))

        console.log('r u sure wanna delete task od id ', taskId, ' ?')
    }

    return (
        <TasksContainer>
            <TasksCategoryName>{title}</TasksCategoryName>
            {listOfTasks.map((singleTask, index)  => <SingleTask 
                                                key={index}
                                                dataKey={index}
                                                title={singleTask.title}
                                                description={singleTask.desc}
                                                date={singleTask.date} 
                                                editing={false}
                                                handleRemoveTask={handleRemoveTask}
                                                 />)} 
            <NewTaskButton onClick={() => createNewTask()}>New task</NewTaskButton>  
        </TasksContainer>
    )
}

const SingleTask = ({dataKey, title, description, date, editing, handleRemoveTask}) => {

    const SingleTaskContainer = styled.div`
        margin: 10px 0;
        padding: 10px;
        background: white;
        color: grey;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
    `

    const SingleTaskHeader = styled.h3`
        margin: 0;
    `

    const SingleTaskDescription = styled.p`
        margin: 10px 0;
    `

    const ActionButton = styled.button`
        background: grey;
        color: white;
        padding: 15px 30px;
        width: max-content;
    `

    const ActionsContainer = styled.div`
        display: flex;
        flex-direction: row-reversed;
        justify-content: space-between;
    `

    const [taskData, setTaskData] = useState({title: title, desc: description, date: date})
    const [isEditing, setEditingState] = useState(editing)

    const saveTask = () => {
        console.log('saving task with values', taskData)
        setEditingState(false)
    }

    const editTask = () => {
        setEditingState(true)
    }

    const deleteTask = (taskId) => {
        handleRemoveTask(taskId)
    }

    const handleDataChange = (event) => {


        if (event.target.tagName === "INPUT") {
            setTaskData({title: event.target.value, desc: taskData.desc, date: taskData.date})
        } else if (event.target.tagName === "TEXTAREA") {
            setTaskData({title: taskData.value, desc: event.target.value, data: taskData.date})
        } else {
            console.log('Something went wrong with task changing data function');
        }

        console.log(`new task data: title - ${taskData.title}, desc - ${taskData.desc}, date - ${taskData.date}`)
    }


    return isEditing ? (
        <SingleTaskContainer>
            <input value={taskData.title} onChange={handleDataChange} />
            <textarea value={taskData.desc} onChange={handleDataChange}>

            </textarea>
            <ActionsContainer>
                <span>{date}</span>
                <ActionButton onClick={() => saveTask({})}>Save</ActionButton>
                <ActionButton onClick={() => deleteTask(dataKey)}>Delete</ActionButton>
            </ActionsContainer>
        </SingleTaskContainer>
    ) : (
        <SingleTaskContainer>
            <SingleTaskHeader>
                {title}
            </SingleTaskHeader>
            <SingleTaskDescription>
                {description}
            </SingleTaskDescription>
            <ActionsContainer>
                <span>{date}</span>
                <ActionButton onClick={() => editTask()}>Edit</ActionButton>
            </ActionsContainer>
        </SingleTaskContainer>
    )
}

export default TasksBox;