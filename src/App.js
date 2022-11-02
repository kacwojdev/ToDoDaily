import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Footer from './Components/ui/Footer'
import Nav from './Components/ui/Nav'
import Login from './Pages/Login'
import Register from './Pages/Register'
import User from './Pages/User'
import Tasks from './Pages/Tasks'
import TasksBox from './Pages/TasksBox'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import GlobalStyle from './Utils/globalStyles'

const AppContainer = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

export const UserContext = React.createContext()

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      signedUser: null
    }
  }

  componentDidMount() {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user) {
        this.setState({
          signedUser: user
        })
      } else {
        this.setState({
          signedUser: null
        })
      }
    })
  }

  render() {
    const {signedUser} = this.state
    
    return (
      <UserContext.Provider value={signedUser}>
        <AppContainer className="App">
          <Router  basename="/ToDoDaily">
          <GlobalStyle />
          <Nav signedUser={signedUser} />
          <main>
            <Routes>
              <Route exact path="/" element={<Tasks />} />
              <Route path="/group/:groupId" element={<TasksBox />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/user/:uid" element={<User userName={signedUser} />} />
            </Routes>
          </main>
          <Footer />
          </Router>
        </AppContainer>
      </UserContext.Provider>
    )
  }
}

export default App