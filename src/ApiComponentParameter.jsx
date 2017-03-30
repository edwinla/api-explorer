import React, {PropTypes} from 'react';
import {formatPhoneNumber} from './App_util';
import _ from 'underscore';

const propTypes = {
  parameter: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  resource: PropTypes.string.isRequired,
  handleUpdateParameter: PropTypes.func.isRequired
};

function ApiComponentParameter({
  parameter,
  handleUpdateParameter,
  index,
  resource
}) {
  const name = parameter.attributes.name;
  const renderCategories = _.map(parameter, (categoryValue, categoryKey) => {
    let render = categoryValue;
    if (typeof categoryValue === 'object') {
      if (categoryValue.name === 'Phone') {
        categoryValue.value = formatPhoneNumber(categoryValue.value);
      }

      render = (
        <input
          {...categoryValue}
          key={`${resource}-${name}`}
          className="Api-parameter-input"
          onChange={handleUpdateParameter(index)}
        />
      );
    }

    return (
      <div
        key={`${name}-${categoryKey}`}
        className={`Col Col-${categoryKey}`}
      >
        {render}
      </div>
    );
  });

  return <div className="Api-component-parameter">{renderCategories}</div>;
}

ApiComponentParameter.propTypes = propTypes;

export default ApiComponentParameter;
