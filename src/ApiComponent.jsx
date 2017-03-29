import React, {Component} from 'react';
import ApiComponentParameter from './ApiComponentParameter';
import {filterObjectsWithKey, formatAction, getMethodClass, hideElementClass} from './App_util';
import _ from 'underscore';
import './ApiComponent.css';

export default class ApiComponent extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [...this.props.data],
      hide: true
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
    const {method, resource, fetchRequest} = this.props;
    const requestParams = {
      method: method,
      resource: resource,
      body: filterObjectsWithKey(this.state.parameters, 'attributes')
    };

    fetchRequest(requestParams);
  }

  handleToggleDisplay = () => {
    const {hide} = this.state;
    this.setState({hide: !hide});
  }


  render() {
    const {resource, routeDescription, method} = this.props;
    const {data, hide} = this.state;

    const renderData = data.map((parameter, index) => {
      return (
        <ApiComponentParameter
          key={`api-component-parameter-${parameter.attributes.name}`}
          parameter={parameter}
          index={index}
          resource={resource}
          handleUpdateParameter={this.handleUpdateParameter}
        />
      );
    });

    return (
      <div className="api-component">
        <div onClick={this.handleToggleDisplay} className="api-component-title">
          <span className={getMethodClass(method)}>{method}</span>
          <span className="api-component-action">
            {formatAction(method, resource)}
          </span>
          <span className="api-component-resource">{`/${resource}`}</span>
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
          <button
            className="api-component-button" onSubmit={this.handleSendRequest}>
            send
          </button>
        </form>
      </div>
    );
  }
}
