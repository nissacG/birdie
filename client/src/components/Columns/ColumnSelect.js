import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllColumns, columnSelect } from '../../actions/census'
import styled from 'styled-components'

import Select from './Select'

export class ColumnSelect extends Component {
  constructor() {
    super()
    this.onColumnChange = this.onColumnChange.bind(this)
  }
  componentDidMount() {
    const { getAllColumns } = this.props
    getAllColumns()
  }

  onColumnChange(e) {
    const { columnSelect } = this.props
    columnSelect(e.value)
  }

  render() {
    const { selectedColumn, columns, count }  = this.props

    const columnOptions = columns
    ? columns.map(column => {
      return {
        value: column.Field,
        label: `${column.Field}`
      }
    })
    : []
    return (
      <StyledColumnSelect>
        <h4>
          Select a column
        </h4>
        <div>
          <Select
            type='text'
            id='columns'
            name='columns'
            options={columnOptions}
            onChange={this.onColumnChange}
          />
          {
            selectedColumn ?
              count > 100 ?
              <p>Displaying 100 out of {count} records</p>
              : <p>Displaying all {count} records</p>
            : null
          }
          </div>
      </StyledColumnSelect>
    )
  }
}

const StyledColumnSelect = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
  }
  p {
    color: #6C62C9;
  }
`

const mapStateToProps = state => {
  return {
    columns: state.census.columns,
    selectedColumn: state.census.selectedColumn,
    count: state.census.count
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllColumns,
      columnSelect
    },
    dispatch
  )
}

ColumnSelect.propTypes = {
  getAllColumns: PropTypes.func,
  selectedColumn: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSelect)
