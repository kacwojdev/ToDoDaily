// react dep
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { addList, getAllLists, getContextMenuCoords, updateLists } from '../../store'

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
import ListsNavigation from '../../Components/ListsNavigation'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// styles
import {
    AppHeader,
    AppMain,
    CreateNewListBtn,
    CreateNewListBtnMobile,
    AppSubHeader,
    TaskList
} from './styles'

const Lists = ({ updateLists, addList, lists }) => {
    const sliderRef = useRef(null)
    const [loading, setLoading] = useState(true)
    const [listsLoading, setListsLoading] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setLoading(false)
                listsQuery(setListsLoading).then(queriedLists => {
                    //setting in local state
                    updateLists([...queriedLists])
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
        const newListId = `list_${nanoid()}`
        const newList = {
            id: newListId,
            title: 'Dodaj tytuł listy',
            timestamp: Date.now(),
            createdBy: auth.currentUser.uid,
            settings: {
                backgroundColor: '#fff',
                dueTime: null
            }
        }
        // setting in local state
        addList(newList)
        // setting in db
        setDoc(listDoc(newListId), newList)
    }

    const handleArrowClick = direction => {
        const slider = sliderRef.current

        if (direction === 'right') {
            if (slider.scrollLeft + slider.offsetWidth !== slider.scrollWidth) {
                const nextIndex = currentIndex + 1 > lists.length - 1 ? 0 : currentIndex + 1
                console.log(nextIndex)
                slider.scroll({
                    left: nextIndex * 315,
                    behavior: 'smooth'
                })
                setCurrentIndex(nextIndex)
            } else {
                slider.scroll({
                    left: 0,
                    behavior: 'smooth'
                })
                setCurrentIndex(0)
            }
        } else if (direction === 'left') {
            const prevIndex = currentIndex - 1 < 0 ? lists.length - 1 : currentIndex - 1
            let pixelsToScroll = null
            for (let i = currentIndex; i >= 0; i--) {
                if (i * 315 < slider.scrollLeft) {
                    pixelsToScroll = i * 315
                    break
                } else if (slider.scrollLeft === 0) {
                    pixelsToScroll = prevIndex * 315
                    break
                }
            }
            slider.scroll({
                left: pixelsToScroll,
                behavior: 'smooth'
            })
            setCurrentIndex(prevIndex)
        }
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
                    <CreateNewListBtnMobile onClick={handleCreatingNewList}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '1rem' }} />
                    </CreateNewListBtnMobile>
                </AppSubHeader>
                <TaskList ref={sliderRef}>
                    {listsLoading
                        ? 'Loading'
                        : lists.map(list => (
                              <List
                                  key={list.id}
                                  listId={list.id}
                                  isSelected={list.id == id}
                                  title={list.title}
                                  tasks={list.tasks}
                              />
                          ))}
                    <ListsNavigation sliderRef={sliderRef} handleArrowClick={handleArrowClick} />
                </TaskList>
                <ContextMenu />
            </AppMain>
            <footer></footer>
        </GridWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    updateLists: updatedLists => dispatch(updateLists({ updatedLists })),
    addList: newList => dispatch(addList({ newList }))
})

const mapStateToProps = state => ({
    contextMenuCoords: getContextMenuCoords(state),
    lists: getAllLists(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(Lists)
