import React from 'react'
import PropTypes from 'prop-types'
import { defaults } from '../defaults'
import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { CheckCircle, AlertCircle, XCircle, Info } from 'react-feather'
const Wrapper = styled.div`
  position: fixed;
  width: 50%;
  margin: 0 auto;
  right: 0px;
  left: 0px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${props => props.options.background};
  padding: 5% 0;
  max-width: 560px;
  color: ${props => props.options.color};
  border: 5px solid ${props => darken(0.05, props.options.background)};
  font-size: 22px;
  transition: 0.5s all ease;
  top: 0px;
  transform: translateY(-108px);
  ${props =>
    props.show &&
    css`
    transform: translateY(0px);
  `};

  ${'' /* @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30vh;
    background: rgba(255, 255, 255, 0.7);
  } */};
`

const Button = styled.button`
  background: none;
  border: 2px solid ${props => props.options.color};
  color: ${props => props.options.color};
  margin: 2%;
  border-radius: 5px;
  padding: 2%;
  font-size: 14px;
  text-transform: uppercase;
`

const icon = css`
margin: 3% auto;
display: block;
`

const SuccessIcon = styled(CheckCircle)`
  ${icon}
`
const WarningIcon = styled(AlertCircle)`
  ${icon}
`
const ErrorIcon = styled(XCircle)`
  ${icon}
`
const ConfirmationIcon = styled(Info)`
  ${icon}
`

/* React Notification Component */
class Toast extends React.Component {
  state = {
    show: false
  }

  animateState() {
    // Show
    setTimeout(() => {
      this.setState({ show: true })
    }, 100) // wait 100ms after the component is called to animate toast.

    if (this.props.options.type !== 'confirmation') {
      // Hide after timeout
      setTimeout(() => {
        this.setState({
          show: false
        })
      }, this.props.options.timeout)
    } else {
      console.log('confirmation')
    }
  }

  componentDidMount() {
    this.animateState()
  }

  render() {
    let { text } = this.props

    return (
      <Wrapper show={this.state.show} options={this.props.options}>
        <span>
          {this.props.options.type === 'success' && <SuccessIcon size={60} />}
          {this.props.options.type === 'warning' && <WarningIcon size={60} />}
          {this.props.options.type === 'error' && <ErrorIcon size={60} />}
          {this.props.options.type === 'confirmation' &&
            <ConfirmationIcon size={60} />}
          {text}
          {this.props.options.type === 'confirmation' &&
            <div>
              <br />
              <Button options={this.props.options} onClick={this.props.confirm}>
                Confirm
              </Button>
              <Button options={this.props.options} onClick={this.props.deny}>
                Cancel
              </Button>
            </div>}
        </span>
      </Wrapper>
    )
  }
}

export default Toast
