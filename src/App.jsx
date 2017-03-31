import React from 'react';
import ApiComponent from './ApiComponent';
import './App.css';
import {resourceUsers, resourceCars} from './App_data';

function App() {
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
        <img src={process.env.PUBLIC_URL + '/cogwheel.svg'} className="App-logo" alt="logo" />
        <h2>API EXPLORER</h2>
      </div>
      <p className="App-intro">
        This API Explorer performs requests on ab online RESTful API server powered by <a className="App-link" href="https://github.com/typicode/json-server" target="_blank">json-server</a>.
      </p>
      <div className="App-content">
        <div>
          <div className="Resource-title">Users</div>
          {mapResourceData(resourceUsers)}
        </div>
        <div>
          <div className="Resource-title">Cars</div>
          {mapResourceData(resourceCars)}
        </div>
      </div>
    </div>
  );
}

export default App;
