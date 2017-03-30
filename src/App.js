import React from 'react';
import cogwheel from './cogwheel.svg';
import ApiComponent from './ApiComponent';
import './App.css';
import {resourceUsers, resourceCars} from './App_data';

const App = () => {
  const mapResourceData = (data) => {
    return (
      data.map((route, idx) => {
        const {method, resource} = route;
        return (
          <ApiComponent {...route} key={`api-${resource}-${method}-${idx}`} />
        );
      })
    );
  };
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
        <div>
          <div>Users</div>
          {mapResourceData(resourceUsers)}
        </div>
        <div>
          <div>Cars</div>
          {mapResourceData(resourceCars)}
        </div>
      </div>
    </div>
  );
};

export default App;
