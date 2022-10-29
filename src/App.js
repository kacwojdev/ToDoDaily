import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Footer from './Components/ui/Footer'
import Nav from './Components/ui/Nav'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Tasks from './Pages/Tasks'
import TasksBox from './Pages/TasksBox'

import GlobalStyle from './Utils/globalStyles'

const AppContainer = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

function App() {
  return (
    <AppContainer className="App">
      <Router  basename="/ToDoDaily">
      <GlobalStyle />
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route path="/group/:groupId" element={<TasksBox />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </AppContainer>
  );
}

export default App