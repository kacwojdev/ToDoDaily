import React from 'react'
import styled from 'styled-components'
import { DarkenButton, PrimaryButton } from '../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NewGroupButton = styled(PrimaryButton)`
  background: rgb(220 220 220);
`

export const AddTasksGroupButton = ({handleCreatingNewGroup, children}) => {
  return (
    <NewGroupButton onClick={() => handleCreatingNewGroup()}>
        <FontAwesomeIcon style={{marginRight: '5px'}} icon={faPlus} />
        New group
    </NewGroupButton>
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
