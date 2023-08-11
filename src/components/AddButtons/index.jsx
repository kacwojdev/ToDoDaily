// react deps
import React from 'react'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// styles
import { DarkenButton } from '../../styledComponents'

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
