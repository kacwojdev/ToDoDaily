import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'
import Nav from './Components/Nav'
import Tasks from './Components/Tasks'
import TasksBox from './Components/TasksBox'

import GlobalStyle from './globalStyles'

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