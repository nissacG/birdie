import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import TableRow from './TableRow'

export class Table extends Component {

  render() {
    const { selectedColumn, columnData } = this.props
    return (
      <div>
        <StyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>{selectedColumn}</th>
              <th>Count</th>
              <th>Average Age</th>
            </tr>
          </thead>
          <tbody>
          {
            columnData.map((data, index) => {
              return <TableRow
              key={index}
              data={data}
              selected={data[selectedColumn]}
              index={index + 1} />
            })
          }
          </tbody>
        </StyledTable>
        </div>
    )
  }
}

const StyledTable = styled.table`
  margin-top: 20px;  
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  td, th {
    padding: 8px;
  }
  

  tr:nth-child(even) {
    background-color: rgba(108,98,201,0.2);
  }
`

const mapStateToProps = state => {
  return {
    columnData: state.census.columnData,
    selectedColumn: state.census.selectedColumn
  }
}

Table.propTypes = {
  columnData: PropTypes.array,
  selectedColumn: PropTypes.string
}

export default connect(mapStateToProps)(Table)
