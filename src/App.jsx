import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lists from './pages/lists'
import Intro from './pages/intro'
import GlobalStyle from './utils/globalStyles'
import Login from './pages/login'
import Register from './pages/register'
import Account from './pages/account'

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
