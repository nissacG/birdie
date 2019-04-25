import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Table from './Table'

export class TableMain extends Component {
  componentDidMount() {
  }

  render() {
    const { columnData } = this.props
    return (
      <div>
        {
          columnData.length ?
          <Table />
          : <StyledNoData>Please select a column above
            </StyledNoData>
        }
      </div>
    )
  }
}

const StyledNoData = styled.div`
  color: #6C62C9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

const mapStateToProps = state => {
  return {
    columnData: state.census.columnData
  }
}

TableMain.propTypes = {
  columnData: PropTypes.array
}

export default connect(mapStateToProps)(TableMain)
