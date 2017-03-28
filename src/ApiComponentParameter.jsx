import React, {Component} from 'react';
import _ from 'underscore';
import {generate} from 'short-id';

const ApiComponentParameter = ({parameter, handleUpdateParameter}) => {
  const renderCategories = _.map(parameter, (categoryValue, categoryKey) => {
    let render = categoryValue;
    if (typeof categoryValue === 'object') {
      render = (
        <input
          {...categoryValue}
          key={`attributes-${generate()}`}
          onChange={handleUpdateParameter}
        />
      );
    }

    return (
      <div
        key={`${categoryKey}-${generate()}`}
        className={`col col-${categoryKey}`}
      >
        {render}
      </div>
    );
  });

  return <div className>{renderCategories}</div>;
};

export default ApiComponentParameter;
