import React from 'react'
import Location, { notify } from 'react-beautiful-notify'

class App extends React.Component {
  handleClick = () => {
    const options = {
      type: 'confirmation',
      timeout: 2000,
      mainColor: 'green'
    }
    function confirm(){
      console.log('hello')
    }
    notify.show('Are you sure?', options, confirm)
  }
  render() {
    return (
      <div>
        <Location />
        <h1>React Beautiful Notify Testing</h1>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    )
  }
}

export default App
