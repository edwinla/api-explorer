import React, { Component } from 'react';
import cogwheel from './cogwheel.svg';
import ApiComponent from './ApiComponent';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cogwheel} className="App-logo" alt="logo" />
          <h2>Welcome to API Explorer</h2>
        </div>
        <p className="App-intro">
          This API Explorer performs requests on a fake online RESTful API server powered by <a className="App-link" href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>.
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
                  name: 'Full Name',
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
                  name: 'Email',
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
                  name: 'Phone',
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
          />
        </div>
      </div>
    );
  }
}
