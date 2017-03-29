import React, { Component } from 'react';
import cogwheel from './cogwheel.svg';
import ApiComponent from './ApiComponent';
import './App.css';
import {exploreUsersData} from './App_data';

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
          {exploreUsersData.map((route, index) => {
            const {method, resource} = route;
            return (
              <ApiComponent
                {...route}
                key={`api-${resource}-${method}-${index}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
