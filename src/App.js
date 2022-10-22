import React from 'react';
import styled from 'styled-components'

import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Tasks from './Components/Tasks'

import GlobalStyle from './globalStyles';

const AppContainer = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Nav />
      <main>
        <Tasks />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App