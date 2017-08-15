import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './components/Toast'
import Container from './components/Container'
import { defaults } from './defaults'

/* Render React component */
function renderToast(text, options, confirm) {
  let target = document.getElementById(defaults.wrapperId)

  function handleConfirm() {
    confirm()
    hide()
  }

  ReactDOM.render(
    <Toast text={text} options={options} confirm={handleConfirm} deny={hide} />,
    target
  )
}

/* Unmount React component */
function hide() {
  let target = document.getElementById(defaults.wrapperId)
  ReactDOM.unmountComponentAtNode(target)
}

function show(text, options, confirm) {
  // Use default timeout if not set.
  let renderTimeout = options.timeout || defaults.timeout

  // Render Component with Props.
  renderToast(text, options, renderTimeout, confirm)

  if (options.type !== 'confirmation') {
    // Unmount react component after the animation finished.
    setTimeout(function() {
      hide()
    }, renderTimeout + defaults.animationDuration)
  }
  return true
}

/* Export notification functions */
export let notify = {
  show,
  hide
}

export default Container
