import React, { Component } from 'react';
import cogwheel from './cogwheel.svg';
import ApiComponent from './ApiComponent';
import './App.css';

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
            routeDescription="Creates a new user using full-name, email, and phone number (optional)"
            method="post"
            data={[
              {
                parameter: 'Full Name',
                attributes: {
                  type: 'text',
                  value: '',
                  placeholder: 'John Doe',
                  minLength: 4,
                  required: true
                },
                type: 'string',
                location: 'body',
                description: 'Full name of the new user'
              },
              {
                parameter: 'Email',
                attributes: {
                  type: 'email',
                  value: '',
                  placeholder: 'John_Doe@email.com',
                  maxLength: 32,
                  required: true
                },
                type: 'string',
                location: 'body',
                description: 'Valid email of the new user'
              },
              {
                parameter: 'Phone',
                attributes: {
                  type: 'tel',
                  value: '',
                  placeholder: '### ### #####'
                },
                type: 'string',
                location: 'body',
                description: '9-digit (US) phone number of the new user'
              }
            ]}
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
