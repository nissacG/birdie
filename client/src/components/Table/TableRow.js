import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ data, selected, index }) =>  (
  <tr>
    <td>{index}</td>
    <td>{selected}</td>
    <td>{data.count}</td>
    <td>{data.averageAge.toFixed(2)}</td>
  </tr>
)

TableRow.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default TableRow
