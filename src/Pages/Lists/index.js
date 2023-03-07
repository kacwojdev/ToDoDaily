import React, { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import Loading from '../../Components/Loading'
import { useNavigate, useParams } from 'react-router'
import GridWrapper from '../../Components/GridWrapper'
import { Link } from 'react-router-dom'
import { AppHeader, AppMain, CreateNewListBtn, AppSubHeader, TaskList } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import List from '../../Components/List'
import { nanoid } from 'nanoid'
import ContextMenu from '../../Components/ContextMenu'
import { connect } from 'react-redux'

const Lists = ({ contextMenuCoords }) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()
    const [lists, setLists] = useState([])

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

    const handleCreatingNewList = event => {
        setLists([...lists, `list_${nanoid()}`])
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
                <AppSubHeader>
                    <h4>Twoje listy zadań</h4>
                    <CreateNewListBtn onClick={handleCreatingNewList}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '1rem' }} />
                        Utwórz nową listę zadań
                    </CreateNewListBtn>
                </AppSubHeader>
                <TaskList>
                    {lists.map(listId => (
                        <List key={listId} listId={listId} isSelected={listId == id} />
                    ))}
                </TaskList>
                <ContextMenu />
            </AppMain>
            <footer></footer>
        </GridWrapper>
    )
}

const mapStateToProps = state => ({
    contextMenuCoords: state.utils.contextMenuCoords
})
export default connect(mapStateToProps)(Lists)
