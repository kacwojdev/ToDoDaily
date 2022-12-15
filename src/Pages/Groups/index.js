import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { PageHeader, HeaderBar } from '../../Components/styledComponents'

import TasksGroup from '../../Components/TasksGroup'
import AddTasksGroupButton from '../../Components/AddTasksGroupButton'

// import { getCurrentListOfGroups } from '../../Utils/configureApp'

const TasksConatiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  height: 100%;
`

const SectionBox = styled.div`
  margin: auto 50px;
`

const ModalBlurred = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;  
  backdrop-filter: blur(10px);
`

const Groups = (props) => {
  const [groupList, addNewGroup] = useState([])
  const [modalVisibilty, setVisibility] = useState(false)

  const handleCreatingNewGroup = () => {

    setVisibility(!modalVisibilty)

  }

  const handleModalVisibilty = () => {
    setVisibility(!modalVisibilty)
  }

  return (
    <>
      <SectionBox>
        <HeaderBar>
          <PageHeader>Your groups</PageHeader>
          <AddTasksGroupButton handleCreatingNewGroup={handleCreatingNewGroup} />
        </HeaderBar>
        <TasksConatiner>
          {groupList.length != 0 ? (<GroupsList list={groupList} />) : (<p>You dont have any group.</p>)}
        </TasksConatiner>
      </SectionBox>
      { modalVisibilty ? <ModalBlurred></ModalBlurred> : null }
      <GroupNameModal visible={modalVisibilty} handleSetVisibility={setVisibility} handleCreatingNewGroup={addNewGroup} />
    </>
  )
}

const GroupsList = ({list}) => {
  console.log(list)
  return (
    <>
      {list.map(group => <TasksGroup groupData={group} />)}
    </>
  )
}

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalInput = styled.input`
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px 30px;
  color: black;
  font-size: 1.2rem;
`

const ModalButton = styled.button`
  width: 200px;
  border: 2px solid rgb(29,48,69);
  border-radius: 20px;
  padding: 15px 15px;
  color: white;
  background-color: rgb(112, 181, 131);
  box-shadow: 0px 5px 0 rgb(22,28,37);
  transition: .1s ease-in;

  &:hover {
      transform: translate(0, 10px);
      box-shadow: 0px 0px 0 rgb(112, 181, 131);
      border-color: rgb(112, 181, 131);
      cursor: pointer;
  }
`

const GroupNameModal = ({visible, handleSetVisibility, handleCreatingNewGroup}) => {

  const [inputValue, setInput] = useState("")

  const confirmAction = () => {
    handleSetVisibility(false)
    console.log(inputValue)
    handleCreatingNewGroup((prevValues) => {
      return [inputValue,...prevValues]
    })

    setInput('')
  }

  const handleInputChange = e => {
    setInput(e.target.value)
  }

  return (
    <>
      {visible ? (
        <ModalBox>
          <h3>Type group name:</h3>
          <ModalInput value={inputValue} onChange={handleInputChange}></ModalInput>
          <ModalButton onClick={confirmAction}>Done</ModalButton>
        </ModalBox>
      ) : null}
    </>
  )
  
}

export default Groups