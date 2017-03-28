import React, {Component} from 'react';
import {filterObjectsWithKey, formatAction} from './App_util';
import _ from 'underscore';
import {generate} from 'short-id';
import ApiComponentParameter from './ApiComponentParameter';
import './ApiComponent.css';

export default class ApiComponent extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      parameters: [...this.props.parameters],
      data: [...this.props.data]
    };

    this.handleUpdateParameter = this.handleUpdateParameter.bind(this);
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
    const {resource, routeDescription, method} = this.props;
    const {data} = this.state;


    const renderData = data.map((parameter) => {
      return (
        <ApiComponentParameter
          key={`api-component-parameter-${generate()}`}
          parameter={parameter}
          handleUpdateParameter={this.handleUpdateParameter}
        />
      );
    });

    // const renderParameters = parameters.map((parameter, index) => {
    //   const {name, attributes, categories} = parameter;
    //   const renderCategories = _.map(categories, (value, key) => {
    //     return (
    //       <div key={resource + '-category-' + value} className={'col col-' + key}>
    //         {value}
    //       </div>
    //     );
    //   });
    //
    //   return (
    //     <div key={resource + '-parameter-' + name}>
    //       <div>{name}</div>
    //       <div>
    //         <input
    //           key={resource + '-attributes-' + name}
    //           name={name}
    //           {...attributes}
    //           onChange={this.handleUpdateParameter(index)}
    //         />
    //       </div>
    //       {renderCategories}
    //     </div>
    //   );
    // });

    return (
      <div className="api-component">
        <div className="api-component-title">
          <span className="api-component-method">{method}</span>
          <span className="api-component-action">{formatAction(method, resource)}</span>
          <span className="api-component-resource">{`/${resource}`}</span>
        </div>
        <form className="api-component-form" onSubmit={this.handleSendRequest}>
          <div className="api-component-description">{routeDescription}</div>
          <div className="api-component-header">
            <div className="col col-parameter">Parameter</div>
            <div className="col col-attributes">Value</div>
            <div className="col col-type">Type</div>
            <div className="col col-location">Location</div>
            <div className="col col-description">Description</div>
          </div>
          <div className="api-component-parameters">
            {renderData}
          </div>
          <button onSubmit={this.handleSendRequest}>submit</button>
        </form>
      </div>
    );
  }
}
