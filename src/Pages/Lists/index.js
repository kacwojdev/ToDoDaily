// react dep
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//firebase dep
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { setDoc, getDocs } from 'firebase/firestore'
import { auth, listDoc, listsQuery } from '../../firebase'

// ids
import { nanoid } from 'nanoid'

// components imports
import Loading from '../../Components/Loading'
import GridWrapper from '../../Components/GridWrapper'
import List from '../../Components/List'
import ContextMenu from '../../Components/ContextMenu'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// styles
import { AppHeader, AppMain, CreateNewListBtn, AppSubHeader, TaskList } from './styles'

const Lists = ({ updateLists }) => {
    const [loading, setLoading] = useState(true)
    const [listsLoading, setListsLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()
    const [lists, setLists] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setLoading(false)
                listsQuery(setListsLoading).then(queriedLists => {
                    console.log(queriedLists)
                    updateLists([...queriedLists])
                    setLists([...queriedLists])
                })
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
        const newListId = nanoid()
        setLists([...lists, `list_${newListId}`])
        setDoc(listDoc(newListId), {
            id: newListId,
            title: 'Dodaj tytuł listy',
            timestamp: Date.now(),
            createdBy: auth.currentUser.uid,
            settings: {
                backgroundColor: '#fff',
                dueTime: null
            }
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
                <AppSubHeader>
                    <h4>Twoje listy zadań</h4>
                    <CreateNewListBtn onClick={handleCreatingNewList}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '1rem' }} />
                        Utwórz nową listę zadań
                    </CreateNewListBtn>
                </AppSubHeader>
                <TaskList>
                    {listsLoading
                        ? 'Loading'
                        : lists.map(list => (
                              <List
                                  key={list.id}
                                  listId={list.id}
                                  isSelected={list.id == id}
                                  title={list.title}
                              />
                          ))}
                </TaskList>
                <ContextMenu />
            </AppMain>
            <footer></footer>
        </GridWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    updateLists: updatedLists => dispatch({ type: 'UPDATE_LISTS', updatedLists })
})

const mapStateToProps = state => ({
    contextMenuCoords: state.utils.contextMenuCoords
})
export default connect(mapStateToProps, mapDispatchToProps)(Lists)
