import React, { Component } from 'react';
import cogwheel from './cogwheel.svg';
import './App.css';
import ApiComponent from './ApiComponent';

export default class App extends Component {
  fetchRequest(data) {
    const {method, resource, body} = data;

    fetch(`https://jsonplaceholder.typicode.com/${resource}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({body})
    }).then(response => response.json()).then(obj => console.log(obj));
  }

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
                name: 'Full-name',
                attributes: {
                  type: 'text',
                  value: '',
                  placeholder: 'John Doe',
                  minLength: 4,
                  required: true
                },
                categories: {
                  type: 'string',
                  location: 'body',
                  description: 'Full name of the new user'
                }
              },
              {
                name: 'Email',
                attributes: {
                  type: 'email',
                  value: '',
                  placeholder: 'John_Doe@email.com',
                  maxLength: 32,
                  required: true
                },
                categories: {
                  type: 'string',
                  location: 'body',
                  description: 'Valid email of new user'
                }
              },
              {
                name: 'Phone',
                attributes: {
                  type: 'tel',
                  value: '',
                  placeholder: '(###) ### - #####'
                },
                categories: {
                  type: 'string',
                  location: 'body',
                  description: 'Valid phone no. of new user'
                }
              }
            ]}
            fetchRequest={this.fetchRequest}
          />
        </div>
      </div>
    );
  }
}
