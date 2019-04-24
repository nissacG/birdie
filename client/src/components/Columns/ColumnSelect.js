import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllColumns, columnSelect } from '../../actions/census'

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
    const { columns }  = this.props

    const columnOptions = columns
    ? columns.map(column => {
      return {
        value: column.Field,
        label: `${column.Field}`
      }
    })
    : []
    return (
      <div>
        <h4>
          Select a column
        </h4>
        <Select
          type='text'
          id='columns'
          name='columns'
          options={columnOptions}
          onChange={this.onColumnChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    columns: state.census.columns,
    selectedColumn: state.census.selectedColumn
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
