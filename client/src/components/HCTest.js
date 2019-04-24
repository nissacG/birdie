import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHC } from '../actions/census'

class FromBackend extends Component {
  componentDidMount() {
    const { getHC } = this.props
    getHC()
  }

  render() {
    const { hc } = this.props
    return (
      <div>
        <h3>HC Test:</h3>
        {hc}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hc: state.census.hc
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getHC
    },
    dispatch
  )
}

FromBackend.propTypes = {
  getHC: PropTypes.func,
  hc: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FromBackend)
