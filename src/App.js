import React, { Component } from 'react';
import cogwheel from './cogwheel.svg';
import './App.css';
import ApiComponent from './ApiComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cogwheel} className="App-logo" alt="logo" />
          <h2>Welcome to API Explorer</h2>
        </div>
        <p className="App-intro">
          Version 0.5a
        </p>
        <div className="App-content">
          <ApiComponent
            resource="users"
            routeDescription="Create a new user/driver."
            method="post"
            parameters={[
              {
                name: 'name',
                inputType: 'name',
                value: 'John Cena',
                dataType: 'string',
                location: 'body',
                description: 'Full name of the new user'
              },
              {
                name: 'email',
                inputType: 'email',
                value: 'JC123@email.com',
                dataType: 'string',
                location: 'body',
                description: 'Valid email of the new user'
              }
            ]}
          />
          <button onClick={this.fetchData}>submit</button>
        </div>
      </div>
    );
  }
}

export default App;
