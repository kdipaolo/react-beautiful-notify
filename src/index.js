import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './components/Toast'
import Container from './components/Container'
import { defaults } from './defaults'

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

function hide() {
  let target = document.getElementById(defaults.wrapperId)
  ReactDOM.unmountComponentAtNode(target)
}

function show(text, options, confirm) {
  const mergedOptions = Object.assign(defaults, options)

  renderToast(text, mergedOptions, confirm)

  if (mergedOptions.type !== 'confirmation') {
    // Unmount react component after the animation finished.
    setTimeout(function() {
      hide()
    }, mergedOptions.timeout + mergedOptions.animationDuration)
  }
  return true
}

/* Export notification functions */
export let notify = {
  show,
  hide
}

export default Container
