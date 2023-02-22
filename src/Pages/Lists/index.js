import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import Loading from '../../Components/Loading'
import { useNavigate } from 'react-router'
import GridWrapper from '../../Components/GridWrapper'
import { Link } from 'react-router-dom'
import { AppHeader, AppMain, CreateNewListBtn } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import List from '../../Components/List'

const Lists = () => {
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
            <AppMain>
                <List />
                <CreateNewListBtn>
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: '1rem' }} />
                    Utwórz nową listę zadań
                </CreateNewListBtn>
            </AppMain>
            <footer></footer>
        </GridWrapper>
    )
}

export default Lists
