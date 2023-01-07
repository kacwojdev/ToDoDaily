import React, { useState } from 'react'
import styled from 'styled-components'
import { PageHeader, HeaderBar, MainContentContainer, HeaderBarGroup } from '../../styledComponents'

import { AddTasksGroupButton } from '../../Components/AddButtons'
import GroupList from '../../Components/GroupList'
import GroupNameModal from '../../Components/GroupNameModal'

const GroupsViewContainer = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-top: 1rem;
`

const ModalBlurred = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
`

const Groups = () => {
    const [modalVisibilty, setVisibility] = useState(false)

    const handleOpenModal = () => {
        setVisibility(!modalVisibilty)
    }

    return (
        <>
            <div>
                <HeaderBar>
                    <HeaderBarGroup>
                        <PageHeader>Home</PageHeader>
                    </HeaderBarGroup>
                </HeaderBar>
                <MainContentContainer>
                    <AddTasksGroupButton handleOpenModal={handleOpenModal}>
                        + Create new group
                    </AddTasksGroupButton>
                    <GroupsViewContainer>
                        <GroupList />
                    </GroupsViewContainer>
                </MainContentContainer>
            </div>
            {modalVisibilty ? <ModalBlurred></ModalBlurred> : null}
            <GroupNameModal visible={modalVisibilty} handleSetVisibility={setVisibility} />
        </>
    )
}

export default Groups
