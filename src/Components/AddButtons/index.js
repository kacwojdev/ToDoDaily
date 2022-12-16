import React from 'react'
import { DarkenButton } from '../styledComponents'

export const AddTasksGroupButton = ({handleCreatingNewGroup, children}) => {
  return (
    <DarkenButton onClick={() => handleCreatingNewGroup()}>
        {children}
    </DarkenButton>
  )
}

export const AddTaskButton = ({handleCreatingNewTask, children}) => {
  return (
    <DarkenButton onClick={() => handleCreatingNewTask()}>
      {children}
    </DarkenButton>
  )
}
