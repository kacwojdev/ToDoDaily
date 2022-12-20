import React, { useState } from 'react'
import styled from 'styled-components'

import { DarkenButton, CardTask } from '../styledComponents'

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
    padding: .7rem .5rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;

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
    padding: .7rem .5rem;
    border: none;
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

const SaveBtn = styled(DarkenButton)`
    background-color: #579357;
`

const CancelBtn = styled(DarkenButton)`
    background-color: red;
`

const SingleTask = ({dataKey, title, description, date, editing, handleRemoveTask, handleSavingTask}) => {

    const [taskDesc, setTaskDesc] = useState(description)
    const [taskTitle, setTaskTitle] = useState(title)

    const saveTask = taskId => {
        handleSavingTask(taskId, {title: taskTitle, desc: taskDesc, date: date})
        console.log('saving task with values', {title: taskTitle, desc: taskDesc, date: date})
    }

    const deleteTask = (taskId) => {
        handleRemoveTask(taskId)
    }

    return (
        <CardTask>
            <TitleInput value={taskTitle} onChange={event => setTaskTitle(event.target.value)} />
            <DescTextArea value={taskDesc} onChange={event => setTaskDesc(event.target.value)}></DescTextArea>
            <ActionsContainer>
                <span>{date}</span>
                <SaveBtn bgColor="#579357" onClick={() => saveTask(dataKey)}>Save</SaveBtn>
                <CancelBtn bgColor="#b55959" onClick={() => deleteTask(dataKey)}>Delete</CancelBtn>
            </ActionsContainer>
        </CardTask>
    )
}

export default SingleTask