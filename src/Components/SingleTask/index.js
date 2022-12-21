import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faImage, faBoxArchive, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
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

const SingleTask = ({data, handleRemoveTask, handleSavingTask}) => {

    const [taskDesc, setTaskDesc] = useState(data.content.description)
    const [taskTitle, setTaskTitle] = useState(data.content.title)
    const [taskBackground, setTaskBackground] = useState(data.background)
    const [lastModified, setNewLastModified] = useState(data.lastModified)
    const [isArchivied, setArchivied] = useState(data.archivied)
    const [isDone, setDone] = useState(data.done)
    const [taskDateGoal, setTaskDateGoal] = useState(data.dateGoal)


    const saveTask = taskId => {
        
    }

    const deleteTask = (taskId) => {
       
    }

    return (
        <CardTask>
            <TitleInput value={taskTitle} onChange={event => setTaskTitle(event.target.value)} />
            <DescTextArea value={taskDesc} onChange={event => setTaskDesc(event.target.value)}></DescTextArea>
            <ActionsContainer>
                {/* <ReminderBtn />
                <BackgroundBtn />
                <ArchiveBtn />
                <MoreOptionsBtn /> */}
                <ActionButton>
                    <FontAwesomeIcon icon={faBell} />
                </ActionButton>
                <ActionButton>
                    <FontAwesomeIcon icon={faImage} />
                </ActionButton>
                <ActionButton>
                    <FontAwesomeIcon icon={faBoxArchive} />
                </ActionButton>
                <ActionButton>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </ActionButton>
            </ActionsContainer>
        </CardTask>
    )
}

const ActionButton = (props) => {
    return (
        <button>
            {props.children}   
        </button>
    )
}

export default SingleTask