import React, {Component} from 'react';
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
      newParameters[index].value = event.target.value;

      this.setState({parameters: newParameters});
    };
  }

  render() {
    const {resource, routeDescription} = this.props;
    const {parameters} = this.state;

    const renderParameters = parameters.map((parameter, index) => {
      const {name, inputType, value, dataType, location, description} = parameter;

      return (
        <div key={resource + '-parameter-' + name}>
          <div>{name}</div>
          <div>
            <input
              key={resource + '-parameter-' + name + '-input'}
              name={name}
              type={inputType}
              value={value}
              onChange={this.handleUpdateParameter(index)}
            />
          </div>
          <div>{dataType}</div>
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
