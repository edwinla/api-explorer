import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: "",
      method: ""
    };
  }

  updateFieldFor = (field) => {
    return (e) => this.setState({[field]: e.target.value})
  }

  fetchData = () => {
    const {url, method} = this.state;
    const myRequest = new Request(url, {method: method});
    fetch(myRequest)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to API Explorer</h2>
        </div>
        <p className="App-intro">
          <label>
            url
            <input
              type="text"
              onChange={this.updateFieldFor('url')}
              value={this.state.url}
            />
          </label>
          <label>
            method
            <input
              type="text"
              onChange={this.updateFieldFor('method')}
              value={this.state.method}
            />
          </label>
          <button onClick={this.fetchData}>submit</button>
        </p>
      </div>
    );
  }
}

export default App;
