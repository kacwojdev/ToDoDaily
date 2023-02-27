import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import Loading from '../../Components/Loading'
import { useNavigate } from 'react-router'
import { AppHeader, AppMain, CreateNewListBtn, AppSubHeader, CreateNewTaskBtn } from './styles'
import GridWrapper from '../../Components/GridWrapper'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const List = () => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])
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

    const handleCreatingNewTask = event => {
        setTasks([...tasks, `task_${nanoid()}`])
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
                    <h4>Nazwa listy</h4>
                    <CreateNewTaskBtn onClick={handleCreatingNewTask}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '1rem' }} />
                        Utwórz nowe zadanie
                    </CreateNewTaskBtn>
                </AppSubHeader>
                <div>
                    {tasks.map(taskId => (
                        <p>{taskId}</p>
                    ))}
                </div>
            </AppMain>
        </GridWrapper>
    )
}

export default List
