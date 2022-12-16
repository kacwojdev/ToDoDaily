import React from 'react'
import styled from 'styled-components'
import { DarkenButton } from '../styledComponents'

const AddTasksGroupButtonBox = styled.button`
    height: max-content;
    border: 2px solid rgb(29,48,69);
    border-radius: 20px;
    padding: 5px 15px;
    color: rgb(29,48,69);
    box-shadow: 0px 5px 0 rgb(29,48,69);
    transition: .1s ease-in;

    &:hover {
        transform: translate(0, 10px);
        box-shadow: 0px 0px 0 rgb(112, 181, 131);
        border-color: rgb(112, 181, 131);
        color: rgb(112, 181, 131);
        cursor: pointer;
    }
`

const AddTasksGroupButton = ({handleCreatingNewGroup}) => {
  return (
    <DarkenButton onClick={() => handleCreatingNewGroup()}>
        Create new group +
    </DarkenButton>
  )
}

export default AddTasksGroupButton