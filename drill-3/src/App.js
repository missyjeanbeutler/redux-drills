import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { addGuest, removeGuest } from './ducks/guestList.js'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this)
    this.addingGuest = this.addingGuest.bind(this)
  }

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  addingGuest() {
    this.props.addGuest(this.state.userInput)
    this.setState({
      userInput: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button onClick={() => this.props.removeGuest(i)}>Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input value={this.state.userInput} onChange={this.updateInput}/>
          <button onClick={this.addingGuest}>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps, { addGuest, removeGuest })(App);
