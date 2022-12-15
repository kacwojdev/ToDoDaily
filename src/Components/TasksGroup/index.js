import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CardGroup } from '../styledComponents'

const TasksGroup = (props) => {

  const {groupData} = props

  return (
    <CardGroup>
      <Link to={`/group/${groupData}`}>
          <h3>{groupData}</h3>
      </Link>
    </CardGroup>
  )
}

export default TasksGroup