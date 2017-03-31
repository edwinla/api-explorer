import React, {Component, PropTypes} from 'react';
import ApiComponentParameter from './ApiComponentParameter';
import ApiComponentResponse from './ApiComponentResponse';
import {
  filterObjectsWithKey,
  fetchRequest,
  hideElementClass
} from './App_util';
import './Api_component.css';

const propTypes = {
  resource: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  routeTitle: PropTypes.string.isRequired,
  routeDescription: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  data: PropTypes.array
};

const defaultProps = {
  data: []
};

class ApiComponent extends Component  {
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
      .then(response => this.setState({response: response.json()}))
      .catch(error => this.setState({response: error.message}));
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
          handleUpdateParameter={this.handleUpdateParameter}
        />
      );
    });

    return (
      <div className="Api-component">
        <div
          onClick={this.handleToggleDisplay}
          className="Api-component-title"
        >
          <span
            className={`Api-component-method Http-${method}`}
          >
            {method}
          </span>
          <span className="Api-component-action">
            {routeTitle}
          </span>
          <span className="Api-component-resource">{route}</span>
        </div>
        <form
          className={`Api-component-form ${hideElementClass(hide)}`}
          onSubmit={this.handleSendRequest}
        >
          <div className="Api-component-description">{routeDescription}</div>
          <div className="Api-component-header">
            <div className="Col Col-parameter">Parameter</div>
            <div className="Col Col-attributes">Value</div>
            <div className="Col Col-type">Type</div>
            <div className="Col Col-location">Location</div>
            <div className="Col Col-description">Description</div>
          </div>
          <div className="Api-component-parameters">{renderData}</div>
          <div>
            <button
              className="Api-component-button"
              onSubmit={this.handleSendRequest}
            >
              send
            </button>
            <span
              className="Api-component-clear-response"
              onClick={this.handleClearResults}
            >
              Clear results
            </span>
          </div>
        </form>
          {response ?
            <ApiComponentResponse
              response={response}
              hideClass={hideElementClass(hide)} /> : null}
      </div>
    );
  }
}

ApiComponent.propTypes = propTypes;
ApiComponent.defaultProps = defaultProps;

export default ApiComponent;
