import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PageHeader, HeaderBar, MainContentContainer, HeaderBarGroup } from '../../styledComponents'
import { auth } from '../../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { AddTasksGroupButton } from '../../Components/AddButtons'
import GroupList from '../../Components/GroupList'
import GroupNameModal from '../../Components/GroupNameModal'
import Loading from '../../Components/Loading'
import { useNavigate } from 'react-router'
import GridWrapper from '../../Components/GridWrapper'
import { Link } from 'react-router-dom'

import { AppHeader } from './styles'

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
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setLoading(false)
            } else {
                navigate('/login')
            }
        })
    }, [])

    const handleLogOut = () => {
        auth.signOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return loading ? (
        <Loading />
    ) : (
        <GridWrapper>
            <AppHeader>
                <div>
                    <h3>TodoDaily</h3>
                    <h2>
                        <span>Cześć,</span> {auth.currentUser.displayName}
                    </h2>
                </div>
                <nav>
                    <Link to="/account">Moje konto</Link>
                    <button onClick={handleLogOut}>Wyloguj</button>
                </nav>
            </AppHeader>
            <main></main>
            <footer></footer>
        </GridWrapper>
    )
}

export default Groups
