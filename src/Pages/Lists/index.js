import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import Loading from '../../Components/Loading'
import { useNavigate } from 'react-router'
import GridWrapper from '../../Components/GridWrapper'
import { Link } from 'react-router-dom'
import {
    AppHeader,
    AppMain,
    ListBox,
    TaskBox,
    TaskContent,
    AddBtn,
    EditBtn,
    CreateNewListBtn
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlus, faSliders } from '@fortawesome/free-solid-svg-icons'

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
                <ListBox>
                    <h4>Lista zadań</h4>
                    <TaskBox>
                        <button>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <TaskContent>
                            <h6>Marchewka</h6>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                        </TaskContent>
                    </TaskBox>
                    <TaskBox>
                        <button>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <TaskContent>
                            <h6>Marchewka</h6>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                        </TaskContent>
                    </TaskBox>
                    <TaskBox>
                        <button>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <TaskContent>
                            <h6>Marchewka</h6>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                        </TaskContent>
                    </TaskBox>
                    <TaskBox>
                        <button>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <TaskContent>
                            <h6>Marchewka</h6>
                            <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                        </TaskContent>
                    </TaskBox>
                    <div>
                        <AddBtn>
                            <FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faPlus} />
                            Dodaj
                        </AddBtn>
                        <EditBtn style={{ marginLeft: '1rem' }}>
                            <FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faSliders} />
                            Edytuj
                        </EditBtn>
                    </div>
                </ListBox>
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
