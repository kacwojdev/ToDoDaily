import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Groups from './Pages/Groups'
import Intro from './Pages/Intro'
import Tasks from './Pages/Tasks'
import Archive from './Pages/Tasks/Archive'
import Labels from './Pages/Tasks/Labels'
import TasksView from './Pages/Tasks/TasksView'
import GlobalStyle from './Utils/globalStyles'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { AnimatePresence } from 'framer-motion'

const AppContainer = styled.div`
    & > div {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
`
const App = () => {
    const randomKey = Math.random()

    return (
        <AppContainer>
            <Router basename="/">
                <GlobalStyle />
                <AnimatePresence mode="wait">
                    <Routes key={randomKey}>
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
                </AnimatePresence>
            </Router>
        </AppContainer>
    )
}

export default App
