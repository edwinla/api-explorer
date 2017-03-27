import React, {Component} from 'react';

export default class ApiComponent extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.parameters
    };
  }

  render() {
    const {routeDescription, parameters, method} = this.props;

    const renderParameters = this.props.parameters.map((parameter) => {
      const {name, type, location, description} = parameter;
      return (
        <div>
          <div>{name}</div>
          <div>
            <input
              name={name}
              type="text"
              value={this.state.parameters[name].value}
              onClick={this.handleUpdateParameter}
            />
          </div>
          <div>{type}</div>
          <div>{location}</div>
          <div>{description}</div>
        </div>
      );
    });

    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}
