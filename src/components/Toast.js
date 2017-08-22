import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { darken, rgba } from 'polished'
import { CheckCircle, AlertCircle, XCircle, Info } from 'react-feather'

const Wrapper = styled.div`
  position: fixed;
  z-index: 99999999999;
  width: 50%;
  margin: 0 auto;
  right: 0px;
  left: 0px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${props => rgba(props.options.background, 0.7)};
  padding: 2% 0;
  max-width: 560px;
  color: ${props => props.options.mainColor};
  border: 5px solid ${props => darken(0.05, rgba(props.options.background, 0.7))};
  font-size: 22px;
  transition: 0.3s all ease;
  top: 0px;
  transform: translateY(-100vh);
  ${props =>
    props.show &&
    css`
    transform: translateY(0vh);
  `};

   @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30vh;
    border: none;
    border-radius: 0px;

  }
`
const AnimationWrapper =  styled.span`
  transition: 0.5s all ease;
  transition-delay: 0.35s;
  display: block;
  opacity: 0;
  transform: translateY(-30px);
  ${props =>
    props.show &&
    css`
    opacity: 1;
    transform: translateY(0px);
  `};
`
const shake = keyframes`

  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`


const Button = styled.button`
  background: none;
  border: 2px solid ${props => props.options.mainColor};
  color: ${props => props.options.mainColor};
  margin: 2%;
  border-radius: 5px;
  padding: 2%;
  font-size: 14px;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  ${props =>
    props.show &&
    css`
    animation: ${shake} 1s 1s cubic-bezier(.36,.07,.19,.97) both;
  `};
`

const pop = keyframes`
  50%  {transform: scale(1.4);}
`

const icon = css`
margin: 3% auto;
display: block;
${props =>
  props.show &&
  css`
  animation: ${pop} 0.5s 1s forwards;
`};
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
        <AnimationWrapper show={this.state.show}>
          {this.props.options.type === 'success' && <SuccessIcon show={this.state.show} size={60} />}
          {this.props.options.type === 'warning' && <WarningIcon show={this.state.show} size={60} />}
          {this.props.options.type === 'error' && <ErrorIcon show={this.state.show} size={60} />}
          {this.props.options.type === 'confirmation' &&
            <ConfirmationIcon show={this.state.show} size={60} />}
          {text}
          {this.props.options.type === 'confirmation' &&
            <div>
              <br />
              <Button show={this.state.show} options={this.props.options} onClick={this.props.confirm}>
                Confirm
              </Button>
              <Button show={this.state.show} options={this.props.options} onClick={this.props.deny}>
                Cancel
              </Button>
            </div>}
        </AnimationWrapper>
      </Wrapper>
    )
  }
}

export default Toast
