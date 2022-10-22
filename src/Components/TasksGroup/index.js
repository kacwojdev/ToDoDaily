import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TasksGroupContainer = styled.div`
    height: max-content;
    width: 200px;
    margin-right: 25px;
    margin-bottom: 40px;
    border: 2px solid white;
    border-radius: 20px;
    padding: 5px 15px;
    box-shadow: 0px 5px 0 white;
    transition: .1s ease-in;

    &:hover {
        transform: translate(0, 10px);
        box-shadow: 0px 0px 0 white;
        cursor: pointer;
    }
`

const TasksGroup = ({title}) => {
  return (
    <TasksGroupContainer>
        <Link to={`/group/${title}`}>
            <h3>{title}</h3>
        </Link>
    </TasksGroupContainer>
  )
}

export default TasksGroup