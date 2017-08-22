# react-beautiful-notify

React-Beautiful-Notify is a custom [React](https://facebook.github.io/react/) notify/toast component.  


## Installation
```sh
npm install react-beautiful-notify
```

## Demo
Coming soon...

## Usage
```
import Location, { notify } from 'react-beautiful-notify'

class App extends React.Component {
  handleClick = () => {
    const options = {
      type: 'confirmation'
    }
    notify.show('Are you sure?', options)
  }
  render() {
    return (
      <div>
        <Location />
        <h1>React Beautiful Notify</h1>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    )
  }
}

```

## Options
| Name                 | Type      | Default           | Description                                       |
|----------------------|-----------|-------------------|---------------------------------------------------|
| type                 | string    | success                | can be success, warning, error, confirmation |
| timeout              | number    | 5000                   | How long the notification should show for    |
| mainColor            | string    | '#333'                 | Text/Button Color                            |
| animationDuration    | number    | 300                    | Duration of animation                        |
| background           | string    | '#fff'                 | Background Color                             |
| wrapperId            | string    | 'notification-wrapper' | Mounting ID for React Dom                    |


## License
MIT
