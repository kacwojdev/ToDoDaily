import React from 'react'
import styled from 'styled-components'

import TasksBox from '../TasksBox'

const Tasks = () => {
  return (
    <>
        <TasksBox title="To do" />
        <TasksBox title="Progress" />
        <TasksBox title="Done" />
    </>
  )
}
export default Tasks