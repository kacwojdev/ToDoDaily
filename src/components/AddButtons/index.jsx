import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { DarkenButton } from '@globalStyles'

export const AddTasksGroupButton = ({ handleOpenModal }) => {
    return (
        <DarkenButton onClick={() => handleOpenModal()}>
            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faPlus} />
            New group
        </DarkenButton>
    )
}

export const AddTaskButton = ({ handleCreatingNewTask }) => {
    return (
        <DarkenButton onClick={() => handleCreatingNewTask()}>
            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faPlus} />
            New task
        </DarkenButton>
    )
}
