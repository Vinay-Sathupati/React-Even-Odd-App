// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomIncrement = () => {
    const randomNum = Number(Math.floor(Math.random() * 100))
    this.setState(prevState => ({count: Number(prevState.count) + randomNum}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button
            type="button"
            className="button-styling"
            onClick={this.randomIncrement}
          >
            Increment
          </button>
          <p className="para quote">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
