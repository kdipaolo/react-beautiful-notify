let defaults = {
  wrapperId: 'notification-wrapper',
  background: '#333',
  animationDuration: 300,
  mainColor: '#333',
  timeout: 5000,
  type: 'success'
}

function mergeOptions(options) {
  return Object.assign(defaults, options)
  defaults = Object.assign(defaults, options)
}

export { defaults, mergeOptions }
