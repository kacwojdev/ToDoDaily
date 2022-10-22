import React from 'react'
import styled from 'styled-components'

import TasksBox from '../TasksBox'
import TasksGroup from '../TasksGroup'

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 50px;
  border-bottom: 2px solid rgb(29,48,69);
`

const TasksConatiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  height: 100%;
  padding: auto 50px;
`

const SectionBox = styled.div`
  margin: auto 50px;
`

const Tasks = () => {
  return (
    <SectionBox>
      <Header>Your groups</Header>
      <TasksConatiner>
          <TasksGroup title="Work" />
          <TasksGroup title="Company duties" />
          <TasksGroup title="School" />
          <TasksGroup title="Sport" />
      </TasksConatiner>
    </SectionBox>
  )
}
export default Tasks