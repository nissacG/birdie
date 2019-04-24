import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'


class Loading extends Component {
  render() {
    const { loading } = this.props
    return (
      <div>
        {
          loading ?
          <StyledLoading>
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </StyledLoading>
          : null
        }
      </div>
    )
  }
}

const StyledLoading = styled.div`
  background-color: rgba(130, 130, 130, 0.4);
  bottom: 0px;
  height: 100vh;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: 2000000;
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-default {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-default div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #57c6c0;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }
  .lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 29px;
    left: 53px;
  }
  .lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 18px;
    left: 50px;
  }
  .lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 9px;
    left: 41px;
  }
  .lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 6px;
    left: 29px;
  }
  .lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 9px;
    left: 18px;
  }
  .lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 18px;
    left: 9px;
  }
  .lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 29px;
    left: 6px;
  }
  .lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 41px;
    left: 9px;
  }
  .lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 50px;
    left: 18px;
  }
  .lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 53px;
    left: 29px;
  }
  .lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 50px;
    left: 41px;
  }
  .lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 41px;
    left: 50px;
  }
  @keyframes lds-default {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
`

const mapStateToProps = state => {
  return {
    loading: state.ui.loading
  }
}

Loading.propTypes = {
  loading: PropTypes.number
}

export default connect(mapStateToProps)(Loading)
