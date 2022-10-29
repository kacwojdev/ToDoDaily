import React, { useState } from 'react'
import styled from 'styled-components'

import TasksGroup from '../../Components/TasksGroup'
import AddTasksGroupButton from '../../Components/AddTasksGroupButton'

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

  const [groupList, addNewGroup] = useState([{groupName: "Sport"}, {groupName: "Work"}, {groupName: "Company duties"}, {groupName: "School"}])

  const createNewGroup = () => {
    const groupName = prompt("please enter group name")
    addNewGroup([...groupList, {groupName: groupName}])
  }

  return (
    <SectionBox>
      <Header>Your groups</Header>
      <AddTasksGroupButton handleCreatingNewGroup={createNewGroup} />
      <TasksConatiner>
        {groupList.map( ({groupName}) => <TasksGroup title={groupName} />)}
      </TasksConatiner>
    </SectionBox>
  )
}
export default Tasks