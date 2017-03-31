import React, {PropTypes} from 'react';
import './Api_component_response.css';

const propTypes = {
  response: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]).isRequired,
  hideClass: PropTypes.string.isRequired
};

function ApiComponentResponse({response, hideClass}) {
  return (
    <div className={`Api-component-response ${hideClass}`}>
      <pre className="Api-component-response-pretty-print">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
}

ApiComponentResponse.propTypes = propTypes;

export default ApiComponentResponse;
