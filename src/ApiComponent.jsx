import React, {Component} from 'react';
import ApiComponentParameter from './ApiComponentParameter';
import {
  filterObjectsWithKey,
  getMethodClass,
  hideElementClass,
  fetchRequest
} from './App_util';
import './ApiComponent.css';

export default class ApiComponent extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [...this.props.data],
      hide: true,
      response: null
    };

    this.handleUpdateParameter = this.handleUpdateParameter.bind(this);
  }

  handleUpdateParameter = (index) => {
    const that = this;
    return (event) => {
      const newData = [...that.state.data];
      newData[index].attributes.value = event.target.value;
      that.setState({data: newData});
    };
  }

  handleSendRequest = (event) => {
    event.preventDefault();
    const {method, resource} = this.props;
    const requestParams = {
      method: method,
      resource: resource,
      body: filterObjectsWithKey(this.state.data, 'attributes')
    };

    fetchRequest(requestParams)
      .then(response => this.setState({response}));
  }

  handleToggleDisplay = () => {
    const {hide} = this.state;
    this.setState({hide: !hide});
  }

  handleClearResults = () => {
    this.setState({response: null});
  }

  render() {
    const {resource, route, routeTitle, routeDescription, method} = this.props;
    const {data, hide, response} = this.state;

    const renderData = data.map((parameter, index) => {
      return (
        <ApiComponentParameter
          key={`api-${resource}-${method}-${parameter.attributes.name}`}
          parameter={parameter}
          index={index}
          resource={resource}
          route={route}
          handleUpdateParameter={this.handleUpdateParameter}
        />
      );
    });

    return (
      <div className="api-component">
        <div onClick={this.handleToggleDisplay} className="api-component-title">
          <span className={getMethodClass(method)}>{method}</span>
          <span className="api-component-action">
            {routeTitle}
          </span>
          <span className="api-component-resource">{route}</span>
        </div>
        <form
          className={`api-component-form ${hideElementClass(hide)}`} onSubmit={this.handleSendRequest}>
          <div className="api-component-description">{routeDescription}</div>
          <div className="api-component-header">
            <div className="col col-parameter">Parameter</div>
            <div className="col col-attributes">Value</div>
            <div className="col col-type">Type</div>
            <div className="col col-location">Location</div>
            <div className="col col-description">Description</div>
          </div>
          <div className="api-component-parameters">{renderData}</div>
          <div>
            <button
              className="api-component-button" onSubmit={this.handleSendRequest}>
              send
            </button>
            <span
              className="api-clear-results"
              onClick={this.handleClearResults}
            >
              Clear results
            </span>
          </div>
        </form>
          {(response ?
            <div className={`api-component-response ${hideElementClass(hide)}`}>
              <pre className="pretty-print">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div> : null)}
      </div>
    );
  }
}
