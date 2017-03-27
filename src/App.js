import React, { Component } from 'react';
import cogwheel from './cogwheel.svg';
import './App.css';
import _ from 'underscore';
import {updateBodyInputObj} from './App_util'

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "post",
      hCount: 1,
      headers: {
        1: {
          key: "Content-Type",
          value: "application/json"
        }
      },
      body: [
        {
          name: 'name',
          type: 'name',
          value: 'Edwin La'
        },
        {
          name: 'email',
          type: 'email',
          value: 'testemail@gmail.com'
        },
        {
          name: 'phone',
          type: 'tel',
          pattern: '\d{3}[\-]\d{3}[\-]\d{4}',
          value: '123-456-7890'
        }
      ]
    };

    this.defaultHeader = {
      1: {
        key: "Content-Type",
        value: "application/json"
      }
    };
  }

  updateFieldFor = (field) => {
    field = field.split("-");
    return (e) => {
      if (field[0] === "header") {
        const {headers} = this.state, id = field[1], type = field[2];
        const newHeader = {...headers[id], [type]: e.target.value};
        const newHeaders = {...headers, [id]: newHeader}
        this.setState({headers: newHeaders});
      } else {
        this.setState({[field[0]]: e.target.value});
      }
    };
  }

  addHeader = () => {
    const {headers, hCount} = this.state;
    const newHCount = hCount + 1;
    const newHeaders = {
      ...headers,
      [hCount + 1]: {key: "", value: ""}
    };
    this.setState({headers: newHeaders, hCount: newHCount})
  }

  removeHeader = (id) => {
    const {headers} = this.state;
    const newHeaders = {...headers};
    delete newHeaders[id];

    this.setState({headers: this.ensureDefaultHeaders(newHeaders)});
  }

  ensureDefaultHeaders = (headers) => {
    if (_.isEmpty(headers)) return {...this.defaultHeader};

    return headers;
  }

  formatHeaders = (headers) => {
    const headersAry = _.values(headers);
    const formattedHeaders = {};
    headersAry.forEach((header) => {
      formattedHeaders[header.key] = header.value;
    });

    return formattedHeaders;
  }

  fetchData = () => {
    const {url, method, headers, body} = this.state;
    const myRequest = new Request(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({body})
    });
    fetch(myRequest)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  updateBody = (event) => {
    const {body} = this.state;
    const target = event.target;
    const newBody = updateBodyInputObj(target, body);

    this.setState({body: newBody});
  }

  render() {
    const {headers, body} = this.state;
    const renderHeaders = Object.keys(headers).map((id) => {
      const headerFieldKey = `header-${id}-key`;
      const headerValueKey = `header-${id}-value`;
      return (
        <div key={'header-input-' + id}>
          <label>
            key
            <input
              key={'header-' + id + '-key'}
              type="text"
              onChange={this.updateFieldFor(headerFieldKey)}
              value={headers[id].key}
            />
          </label>
          <label>
            value
            <input
              key={'header-' + id + '-value'}
              type="text"
              onChange={this.updateFieldFor(headerValueKey)}
              value={headers[id].value}
            />
          </label>
          <button onClick={this.addHeader}>add</button>
          <button onClick={() => this.removeHeader(id)}>remove</button>
        </div>
      );
    });

    const renderBody = body.map((obj) => {
      return (
        <div key={'body-div-' + obj.name}>
          <label>
            {obj.name}
            <input
              key={'body-input-' + obj.name}
              name={obj.name}
              type={obj.type}
              onChange={this.updateBody}
              value={obj.value}
            />
          </label>
        </div>
      );
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={cogwheel} className="App-logo" alt="logo" />
          <h2>Welcome to API Explorer</h2>
        </div>
        <p className="App-intro">
          Version 0.4a
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
            headers
            {renderHeaders}
          </div>
          <div>
            body
            {renderBody}
          </div>
          <button onClick={this.fetchData}>submit</button>
        </div>
      </div>
    );
  }
}

export default App;
