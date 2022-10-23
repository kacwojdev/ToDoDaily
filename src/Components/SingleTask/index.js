import React, { useState } from 'react'
import styled from 'styled-components'

import { OptionsIcon } from '../../Assets/index'

const SingleTaskContainer = styled.div`
    max-width: 400px;
    margin: 10px 20px 0 0;
    padding: 10px;
    background: ${props => props.bgColor};
    color: grey;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 0 rgb(22,28,37);
    transition: .1s ease-in;
    
    &:hover {
        background-color:#e5e5e5;
        box-shadow: 0 5px 0 rgb(52, 186, 235);
        cursor: pointer;
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
    align-items: baseline;

    & span {
        font-size: 0.7em;
    }
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
    height: max-content;
    width: 100%;
    overflow: auto;
    padding: 5px;
    border: none;
    background: #e5e5e5;
    border-radius: 10px;
    resize: none;

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
        <SingleTaskContainer 
            bgColor="white">
            <SingleTaskHeader>
                {title}
            </SingleTaskHeader>
            <SingleTaskDescription>
                {description}
            </SingleTaskDescription>
            <ActionsContainer>
                <span>{date}</span>
                <ActionButton bgColor="none" onClick={() => editTask()}>
                    <img src={OptionsIcon} alt="Options" />
                </ActionButton>
            </ActionsContainer>
        </SingleTaskContainer>
    )
}

export default SingleTask