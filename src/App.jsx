// react deps
import React from 'react'
// react-router deps
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lists from './Pages/Lists'
import Intro from './Pages/Intro'
import GlobalStyle from './Utils/globalStyles'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Account from './Pages/Account'

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
                        <Route path="/lists/:id" element={<Lists />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </>
    )
}

export default App
