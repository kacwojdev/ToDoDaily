import styled from 'styled-components'

import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Tasks from './Components/Tasks'

import './App.css'

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: auto 50px;
`

function App() {
  return (
    <div className="App">
      <Nav />
      <Main>
        <Tasks />
      </Main>
      <Footer />
    </div>
  );
}

export default App