import React from 'react'
import styled from 'styled-components'

function App() {
  return (
    <StyledApp className='App'>
      React App Here
    </StyledApp>
  )
}

const StyledApp = styled.div`
  &.App {
    color: red;
  }
`

export default App
