import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ReactSelect from 'react-select'

export class Select extends Component {
  render() {
    const { type, id, name, options, defaultValue, onChange, children }  = this.props
    return (
      <StyledReactSelect
        type={type}
        id={id}
        name={name}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {children}
      </StyledReactSelect>
    )
  }
}

const StyledReactSelect = styled(ReactSelect)`
  max-width: 200px;
`

Select.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  onChange: PropTypes.func
}

export default Select
