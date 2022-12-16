import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { CardGroup } from '../styledComponents'

const TasksGroup = (props) => {

  const {groupData} = props

  return (
    <Link to={`/group/${groupData}`}>
      <CardGroup>
        <FontAwesomeIcon icon={faFolder} />
        <span>{groupData}</span>
      </CardGroup>
    </Link>
  )
}

export default TasksGroup