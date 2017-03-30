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
};

export default ApiComponentParameter;
