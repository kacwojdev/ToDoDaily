import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addList, getAllLists, getContextMenuCoords, updateLists } from '../../store'
import { onAuthStateChanged } from 'firebase/auth'
import { setDoc } from 'firebase/firestore'
import { auth, listDoc, listsQuery } from '../../firebase'
import { nanoid } from 'nanoid'
import Loading from '../../components/Loading'
import GridWrapper from '../../components/GridWrapper'
import List from '../../components/List'
import ContextMenu from '../../components/ContextMenu'
import ListsNavigation from '../../components/ListsNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {
    AppHeader,
    WelcomeBox,
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

    const handleCreatingNewList = () => {
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
                    <h2>TodoDaily</h2>
                    <WelcomeBox>
                        <span>Cześć,</span> {auth.currentUser.displayName}
                    </WelcomeBox>
                </div>
                <nav>
                    <Link to="/account" aria-label="Przejdź do swojego konta">
                        Moje konto
                    </Link>
                    <button onClick={handleLogOut} aria-label="Wyloguj się z aplikacji">
                        Wyloguj
                    </button>
                </nav>
            </AppHeader>
            <AppMain>
                <AppSubHeader>
                    <h4>Twoje listy zadań</h4>
                    <CreateNewListBtn
                        aria-label="Utwórz nową listę"
                        onClick={handleCreatingNewList}
                    >
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '1rem' }} />
                        Utwórz nową listę zadań
                    </CreateNewListBtn>
                    <CreateNewListBtnMobile
                        aria-label="Utwórz nową listę"
                        onClick={handleCreatingNewList}
                    >
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
