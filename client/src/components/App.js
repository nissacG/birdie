import React from 'react'
import styled from 'styled-components'
import ColumnSelect from './Columns/ColumnSelect'
import Loading from './Loading'

// import HCTest from './HCTest'

const App = () => {
  return (
    <div>
      <Loading />
      <StyledApp className='App'>
        <h3>Birdie Technical Test Application</h3>
        <ColumnSelect />
        {/* table */}
      </StyledApp>
    </div>
  )
}

const StyledApp = styled.div`
  h3 {
    color: #57c6c0;
  }
`

export default App
