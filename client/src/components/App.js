import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import store from '../store'

const App = () => {
  return (
    <Provider store={store}>
      <StyledApp className='App'>
        React App Here
      </StyledApp>
    </Provider>
  )
}

const StyledApp = styled.div`
  &.App {
    color: red;
  }
`

export default App
