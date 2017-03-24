import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: "",
      method: "",
      header: {
        key: "",
        value: ""
      }
    };
  }

  updateFieldFor = (field) => {
    field = field.split("-");
    return (e) => {
      if (field === "header") {
        const {header} = this.state;
        const newHeader = {
          ...header,
          [field[1]]: e.target.value
        }
        this.setState({header: newHeader});
      } else {
        this.setState({[field[0]]: e.target.value});
      }
    };
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
          Version 0.1a
        </p>
        <div className="App-content">
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
          <div>
            <label>
              key
              <input type="text" onChange={this.updateFieldFor('header-key')}/>
            </label>
            <label>
              value
              <input type="text" onChange={this.updateFieldFor('header-value')}/>
            </label>
          </div>
          <button onClick={this.fetchData}>submit</button>
        </div>
      </div>
    );
  }
}

export default App;
