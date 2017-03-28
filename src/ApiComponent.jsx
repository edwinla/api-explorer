import React, {Component} from 'react';
import {filterObjectsWithKey} from './App_util';
import _ from 'underscore';

export default class ApiComponent extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      parameters: [...this.props.parameters]
    };
  }

  handleUpdateParameter = (index) => {
    return (event) => {
      const newParameters = [...this.state.parameters];
      newParameters[index].attributes.value = event.target.value;

      this.setState({parameters: newParameters});
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

  render() {
    const {resource, routeDescription} = this.props;
    const {parameters} = this.state;

    const renderParameters = parameters.map((parameter, index) => {
      const {name, attributes, categories} = parameter;
      const renderCategories = _.values(categories).map((category) => {
        return <div key={resource + '-category-' + category}>{category}</div>;
      });

      return (
        <div key={resource + '-parameter-' + name}>
          <div>{name}</div>
          <div>
            <input
              key={resource + '-attributes-' + name}
              name={name}
              {...attributes}
              onChange={this.handleUpdateParameter(index)}
            />
          </div>
          {renderCategories}
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSendRequest}>
          <div className="api-route-description">{routeDescription}</div>
          <div className="api-route-header">
            <div>Parameter</div>
            <div>Value</div>
            <div>Type</div>
            <div>Location</div>
            <div>Description</div>
          </div>
          <div>
            {renderParameters}
          </div>
          <button onSubmit={this.handleSendRequest}>submit</button>
        </form>
      </div>
    );
  }
}
