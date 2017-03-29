import React from 'react';
import _ from 'underscore';

const ApiComponentParameter = ({parameter, handleUpdateParameter, index, resource}) => {
  const name = parameter.attributes.name;
  const renderCategories = _.map(parameter, (categoryValue, categoryKey) => {
    let render = categoryValue;
    if (typeof categoryValue === 'object') {
      render = (
        <input
          {...categoryValue}
          key={`${resource}-${name}`}
          className="api-parameter-input"
          onChange={handleUpdateParameter(index)}
        />
      );
    }

    return (
      <div
        key={`${name}-${categoryKey}`}
        className={`col col-${categoryKey}`}
      >
        {render}
      </div>
    );
  });

  return <div className="api-component-parameter">{renderCategories}</div>;
};

export default ApiComponentParameter;
