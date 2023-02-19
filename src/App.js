import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Footer from './Components/ui/Footer'
import Nav from './Components/ui/Nav'
import Groups from './Pages/Groups'
import Intro from './Pages/Intro'
import Tasks from './Pages/Tasks'
import Archive from './Pages/Tasks/Archive'
import Labels from './Pages/Tasks/Labels'
import TasksView from './Pages/Tasks/TasksView'
import GlobalStyle from './Utils/globalStyles'
import Login from './Pages/Login'
import Register from './Pages/Register'

const AppContainer = styled.div`
    & > div {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
`

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        if (localStorage.getItem('todoDaily_data')) {
            this.setState({ data: localStorage.getItem('todoDaily_data') })
        } else {
            localStorage.setItem('todoDaily_data', JSON.stringify({}))
        }
    }

    render() {
        return (
            <AppContainer>
                <Router basename="/">
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/groups" element={<Groups />} />
                        <Route path="/group/:groupId" element={<Tasks />}>
                            <Route path="tasks" element={<TasksView />} />
                            <Route path="archive" element={<Archive />} />
                            <Route path="labels" element={<Labels />} />
                        </Route>
                    </Routes>
                </Router>
            </AppContainer>
        )
    }
}

export default App
