import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {randomNumber: Math.ceil(Math.random() * 100)}

  generateNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  giveRandomNumber = () => {
    const {randomNumber} = this.state

    return randomNumber
  }

  check = () => {
    const {randomNumber} = this.state
    return randomNumber % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Count {this.giveRandomNumber()}</h1>
        <h1 className="sub-heading">Count is {this.check()} </h1>
        <button className="button" type="button" onClick={this.generateNumber}>
          Increment
        </button>
        <p className="paragraph">*Increase By Random Number between 0 to 100</p>
      </div>
    )
  }
}
export default App
