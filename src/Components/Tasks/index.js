import React from 'react'
import styled from 'styled-components'

import TasksBox from '../TasksBox'

const Tasks = () => {
  return (
    <>
        <TasksBox title="To do" type="todo" />
        <TasksBox title="Progress" type="progress" />
        <TasksBox title="Done" type="done" />
    </>
  )
}
export default Tasks