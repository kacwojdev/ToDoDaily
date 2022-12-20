import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Footer from './Components/ui/Footer'
import Nav from './Components/ui/Nav'
import Groups from './Pages/Groups'
import Tasks from './Pages/Tasks'

import GlobalStyle from './Utils/globalStyles'

const AppContainer = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    if (localStorage.getItem('todoDaily_data')) {
      this.setState({data: localStorage.getItem('todoDaily_data')})
    } else {
      localStorage.setItem('todoDaily_data', JSON.stringify({}))
    }
  }

  render() {    
    return (
      <AppContainer className="App">
        <Router basename="/ToDoDaily">
        <GlobalStyle />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Groups />} />
              <Route path="/group/:groupId" element={<Tasks />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AppContainer>
    )
  }
}

export default App