import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Lists from './Pages/Lists'
import Intro from './Pages/Intro'
import GlobalStyle from './Utils/globalStyles'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { AnimatePresence } from 'framer-motion'

const App = () => {
    const randomKey = Math.random()

    return (
        <>
            <Router basename="/">
                <GlobalStyle />
                <AnimatePresence mode="wait">
                    <Routes key={randomKey}>
                        <Route path="/" element={<Intro />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/lists" element={<Lists />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </>
    )
}

export default App
