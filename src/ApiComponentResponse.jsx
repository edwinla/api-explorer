import React from 'react';
import './Api_component_response.css';

const ApiComponentResponse = ({response, hideClass}) => {
  return (
    <div className={`Api-component-response ${hideClass}`}>
      <pre className="Api-component-response-pretty-print">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
};

export default ApiComponentResponse;
