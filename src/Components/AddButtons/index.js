import React from 'react'
import styled from 'styled-components'
import { DarkenButton } from '../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddTasksGroupButton = ({handleCreatingNewGroup, children}) => {
  return (
    <DarkenButton onClick={() => handleCreatingNewGroup()}>
        <FontAwesomeIcon style={{marginRight: '5px'}} icon={faPlus} />
        New group
    </DarkenButton>
  )
}

export const AddTaskButton = ({handleCreatingNewTask, children}) => {
  return (
    <DarkenButton onClick={() => handleCreatingNewTask()}>
      <FontAwesomeIcon style={{marginRight: '5px'}} icon={faPlus} />
      New task
    </DarkenButton>
  )
}
